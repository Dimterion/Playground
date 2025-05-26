import "./formattedText.css";

function FormattedText({ style, children }) {
  return <span className={style}>{children}</span>;
}

export default FormattedText;
