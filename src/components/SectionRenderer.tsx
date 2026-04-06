import type { Section } from "../types/sections";
import { RenderHighlight, RenderList, RenderText, RenderUnknown } from "./renderers";

export const SectionRenderer = ({ section }: { section: Section; }) => {
  if (section.type === "text") {
    return <RenderText {...section} />;
  }
  if (section.type === "list") {
    return <RenderList {...section} />;
  }
  if (section.type === "highlight") {
    return <RenderHighlight {...section} />;
  }
  return <RenderUnknown />;
};
