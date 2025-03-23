interface FormSectionTitleProps {
  title: string;
}

export default function FormSectionTitle({ title }: FormSectionTitleProps) {
  return (
    <h2 className="text-xl mb-4 border-b border-gray-700 pb-2">{title}</h2>
  );
}
