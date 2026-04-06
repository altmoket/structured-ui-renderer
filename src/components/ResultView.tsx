import type { HighlightSection, ListSection, Section, TextSection } from "../types/sections";

/** 
 * Starter view: wired to `data` in mockData—payloads are intentionally inconsistent; 
 * many cases unhandled here.
 */

const RenderText = ({ content }: TextSection) => <p>{content}</p>;

const RenderList = ({ items }: ListSection) => {
  return (
    <ul>
      {items.map((item: string | { text: string, meta?: string }, idx: number) => (
        <li key={idx}>{typeof item === "string" ? item : item.text}</li>
      ))}
    </ul>
  );
}

const RenderHighlight = ({ content }: HighlightSection) => {
  return <strong>{content}</strong>;
}

const RenderUnknown = () => {
  return <div>Unknown section</div>;
}

const SectionRenderer = ({ section }: { section: Section }) => {
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
}

export default function ResultView({ data }: { data: { title: string, sections: Section[] } }) {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.sections.map((section: Section, i: number) => (
        <SectionRenderer key={i} section={section} />
      ))}
    </div>
  );
}
