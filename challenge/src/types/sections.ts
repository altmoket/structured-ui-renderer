
export type TextSection = {
  type: "text"
  content: string;
}

export type ListSection = {
  type: "list"
  items: Array<string | {text: string, meta?: string}> | null
}

export type HighlightSection = {
  type: "highlight"
  content?: string;
}

export type UnknownSection = {
  type: "unknown"
  [key: string]: any;
}

export type Section = TextSection | ListSection | HighlightSection | UnknownSection;