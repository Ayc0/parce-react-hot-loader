import { unified } from "unified";
import remarkParse from "remark-parse";

import React from "react";

export const Unified = ({ text }) => {
  return (
    <pre>{JSON.stringify(unified().use(remarkParse).parse(text), null, 2)}</pre>
  );
};
