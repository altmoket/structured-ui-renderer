import type { ListSection } from "../../types/sections";

const RenderList = ({ items }: ListSection) => {
  return (
    <ul>
      {items.map((item: string | { text: string, meta?: string }, idx: number) => (
        <li key={idx}>{typeof item === "string" ? item : item.text}</li>
      ))}
    </ul>
  );
}

export default RenderList