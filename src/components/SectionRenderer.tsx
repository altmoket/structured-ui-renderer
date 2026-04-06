import type { HighlightSection, ListSection, Section, TextSection } from "../types/sections";
import { RenderHighlight, RenderList, RenderText, RenderUnknown } from "./renderers";

const renderers: Record<string, (section: Section) => React.ReactNode> = {
  text: (section: Section) => <RenderText {...(section as TextSection)} />,
  list: (section: Section) => <RenderList {...(section as ListSection)} />,
  highlight: (section: Section) => <RenderHighlight {...(section as HighlightSection)} />,
};

export const SectionRenderer = ({ section }: { section: Section; }) => {
  return renderers[section.type]?.(section) || <RenderUnknown />;
};
