export default function TypeSpan({
  text,
  children,
  className = ""
}: {
  text?: string;
  children?: React.ReactNode;
  className?: string
}) {
  return (
    <span
      className={`
          inline-flex space-x-2 rounded-lg bg-gray-700 cursor-default
          px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white
          ${className}`}>
      {text}
      {children}
    </span>
  );
};