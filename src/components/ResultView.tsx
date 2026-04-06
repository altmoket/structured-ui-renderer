import type { Section } from "../types/sections";

/** 
 * Starter view: wired to `data` in mockData—payloads are intentionally inconsistent; 
 * many cases unhandled here.
 */

export default function ResultView({ data }: { data: { title: string, sections: Section[] } }) {
  return (
    <div>
      <h1>{data.title}</h1>
      {data.sections.map((s: any, i: number) => {
        if (s.type === "text") {
          return <p key={i}>{s.content}</p>;
        }
        if (s.type === "list") {
          return (
            <ul key={i}>
              {s.items.map((item: string | {text: string, meta?: string}, idx: number) => (
                <li key={idx}>{typeof item === "string" ? item : item.text}</li>
              ))}
            </ul>
          );
        }
        if (s.type === "highlight") {
          return <strong key={i}>{s.content}</strong>;
        }
        return <div key={i}>Unknown section</div>;
      })}
    </div>
  );
}
