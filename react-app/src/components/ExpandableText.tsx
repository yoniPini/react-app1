import React from "react";

interface Props {
  children: string;
  numberOfChars: number;
}
const ExpandableText = ({ children, numberOfChars }: Props) => {
  return <div>{children.slice(0, numberOfChars)}</div>;
};

export default ExpandableText;
