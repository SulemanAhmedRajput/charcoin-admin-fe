const HeaderWrapper = ({
  children,
  title,
  description,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-lg text-white">{description}</p>
      <div>{children}</div>
    </div>
  );
};

export { HeaderWrapper };
