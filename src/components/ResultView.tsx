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

export default function ResultView({ data }: { data: { title: string, sections: Section[] } }) {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.sections.map((s: any, i: number) => {
        if (s.type === "text") {
          return <RenderText key={i} {...s} />;
        }
        if (s.type === "list") {
          return <RenderList key={i} {...s} />;
        }
        if (s.type === "highlight") {
          return <RenderHighlight key={i} {...s} />;
        }
        return <RenderUnknown key={i} />;
      })}
    </div>
  );
}
