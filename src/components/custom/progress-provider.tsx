"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="6px"
        color="#4F46E5" // Use a solid color (e.g., Tailwind's Indigo-600)
        options={{}}
        shallowRouting
      />
    </>
  );
};

export default ProgressProvider;
