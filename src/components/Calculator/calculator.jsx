import React from "react";

export function sum(a, b) {
  return a + b;
}

export default function Calculator() {
  return (
    <>
      <div>
        <p>{sum(1, 9)}</p>
      </div>
    </>
  );
}
