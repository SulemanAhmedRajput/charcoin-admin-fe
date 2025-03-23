import React from "react";

const HeaderWrapper = ({
  children,
  title,
  description,
  actions,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h1 className="text-2xl font-semibold ">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {actions}
      </div>
      <div className="pt-4">{children}</div>
    </div>
  );
};

export { HeaderWrapper };
