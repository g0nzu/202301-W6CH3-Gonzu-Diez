import React from "react";
import "./display.css";

interface Props {
  number: string;
}

export function Display({ number }: Props) {
  return (
    <div className="actions">
      <span className="number">{number}</span>
    </div>
  );
}
