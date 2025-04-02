import React from "react";

interface FormSectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  title: string;
}

export default function FormSectionTitle({
  title,
  ...props
}: FormSectionTitleProps) {
  return (
    <div className="col-span-2">
      <h2 className="text-xl mb-4  pb-2" {...props}>
        {title}
      </h2>
      <hr className="col-span-2 border-accent" />
    </div>
  );
}
