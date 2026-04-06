import type { Section } from "../types/sections";
import { SectionRenderer } from "./SectionRenderer";

/** 
 * Starter view: wired to `data` in mockData—payloads are intentionally inconsistent; 
 * many cases unhandled here.
 */
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
