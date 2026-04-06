import type { HighlightSection, ListSection, Section, TextSection, UnknownSection } from "../types/sections";


export const normalizeSection = (section: any): Section => {
  // Handle invalid section
  if (!section || typeof section !== "object") {
    return {
      type: "unknown",
      content: "",
    };
  }

  const type = section.type;

  // Handle missing type
  if (!type || typeof type !== "string") {
    return {
      type: "unknown",
      ...section,
    } as UnknownSection;
  }

  switch (type) {
    case "text": {
      return {
        ...section,
        type: "text",
        // Migrate legacy `body` field to `content`
        content: section.content ?? section.body ?? "",
      } as TextSection;
    }

    case "list": {
      // Normalize items to array of strings or {text, meta} objects
      const items = Array.isArray(section.items)
        ? section.items.map((item: any) => {
          if (typeof item === "string") {
            return item;
          } else if (typeof item === "object" && item !== null) {
            return {
              text: item.text ?? "",
              meta: item.meta,
            };
          } else {
            return "";
          }
        })
        : [];

      return {
        ...section,
        type: "list",
        items,
      } as ListSection;
    }

    case "highlight": {
      return {
        ...section,
        type: "highlight",
        content: section.content ?? "",
      } as HighlightSection;
    }

    default: {
      // Unknown type => forward compatibility
      return {
        type,
        ...section,
        _unknown: true
      } as UnknownSection;
    }
  }
}

export const normalizeData = (data: any): { title: string; sections: Section[] } => {
  const title = typeof data.title === "string" ? data.title : "Untitled Data";
  const sections = Array.isArray(data.sections)
    ? data.sections.map(normalizeSection)
    : [];

  return { title, sections };
}
