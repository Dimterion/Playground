import FormattedText from "../components/FormattedText/FormattedText";

export const formatText = (text: string) => {
  if (!text) return null;

  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g);

  const textStyles = {
    bold: "formattedText-bold",
    italic: "formattedText-italic",
    boldAndItalic: "formattedText-bold formattedText-italic",
  };

  return parts.map((part, index) => {
    if (
      part.startsWith("**") &&
      part.endsWith("**") &&
      part.length > 2 &&
      part !== "**"
    ) {
      return (
        <FormattedText key={index} style={textStyles.bold}>
          {part.slice(2, -2)}
        </FormattedText>
      );
    }

    if (
      part.startsWith("*") &&
      part.endsWith("*") &&
      part.length > 1 &&
      part !== "**"
    ) {
      return (
        <FormattedText key={index} style={textStyles.italic}>
          {" "}
          {part.slice(1, -1)}
        </FormattedText>
      );
    }

    if (
      part.startsWith("_") &&
      part.endsWith("_") &&
      part.length > 1 &&
      part !== "**"
    ) {
      return (
        <FormattedText key={index} style={textStyles.boldAndItalic}>
          {part.slice(1, -1)}
        </FormattedText>
      );
    }

    return (
      <FormattedText key={index} style="">
        {part}
      </FormattedText>
    );
  });
};
