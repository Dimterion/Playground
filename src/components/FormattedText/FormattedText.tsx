import "./formattedText.css";

interface FormattedTextProps {
  style?: string;
  children: React.ReactNode;
}

function FormattedText({ style, children }: FormattedTextProps) {
  return <span className={style}>{children}</span>;
}

export default FormattedText;
