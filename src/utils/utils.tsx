import { ReactNode } from "react";
import FormattedText from "../components/FormattedText/FormattedText";

export const formatText = (text: string): ReactNode => {
  if (!text) return null;

  const textParts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g);
  const boldRegex = /^\*\*[^*]+\*\*$/;
  const italicRegex = /^\*[^*]+\*$/;
  const boldAndItalicRegex = /^_[^_]+_$/;

  const textStyle = {
    bold: "formattedText-bold",
    italic: "formattedText-italic",
    boldAndItalic: "formattedText-bold formattedText-italic",
  };

  return textParts.map((part, index) => {
    // Bold text
    if (boldRegex.test(part)) {
      return (
        <FormattedText key={index} style={textStyle.bold}>
          {part.slice(2, -2)}
        </FormattedText>
      );
    }

    // Italic text
    if (italicRegex.test(part)) {
      return (
        <FormattedText key={index} style={textStyle.italic}>
          {part.slice(1, -1)}
        </FormattedText>
      );
    }

    // Bold and italic text
    if (boldAndItalicRegex.test(part)) {
      return (
        <FormattedText key={index} style={textStyle.boldAndItalic}>
          {part.slice(1, -1)}
        </FormattedText>
      );
    }

    // Default text
    return <FormattedText key={index}>{part}</FormattedText>;
  });
};
