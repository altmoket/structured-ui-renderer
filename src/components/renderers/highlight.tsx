import type { HighlightSection } from "../../types/sections";

const RenderHighlight = ({ content }: HighlightSection) => {
  return <strong>{content}</strong>;
}

export default RenderHighlight