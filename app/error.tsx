"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  console.log("Error", error);
  return (
    <div>
      <p> An unexpected error has occurred! </p>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
}
