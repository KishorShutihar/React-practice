import React, { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxCharacter?: number;
}

export const ExpandableText = ({
  children,
  maxCharacter = 100,
}: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(children.length);

  if (children.length <= maxCharacter) {
    return <div>{children}</div>;
  }
  const text = isExpanded
    ? children
    : children.substring(0, maxCharacter) + "...";
  return (
    <>
      <p>
        {text}
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Collapse" : "Expand"}
        </button>
      </p>
    </>
  );
};
