import FormattedText from "../components/FormattedText/FormattedText";

export const formatText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|__.*?__|_[^_]*?_|\*.*?\*)/g);
  const textStyles = {
    bold: "formattedText-bold",
    italic: "formattedText-italic",
    boldAndItalic: "formattedText-bold formattedText-italic",
  };

  if (!text) {
    return null;
  }

  return parts.map((part, index) => {
    if (
      part.startsWith("**") &&
      part.endsWith("**") &&
      part.length > 2 &&
      part !== "**"
    ) {
      return (
        <FormattedText
          key={index}
          style={textStyles.bold}
          children={part.slice(2, -2)}
        />
      );
    }

    if (
      part.startsWith("*") &&
      part.endsWith("*") &&
      part.length > 1 &&
      part !== "**"
    ) {
      return (
        <FormattedText
          key={index}
          style={textStyles.italic}
          children={part.slice(1, -1)}
        />
      );
    }

    if (
      part.startsWith("_") &&
      part.endsWith("_") &&
      part.length > 1 &&
      part !== "**"
    ) {
      return (
        <FormattedText
          key={index}
          style={textStyles.boldAndItalic}
          children={part.slice(1, -1)}
        />
      );
    }

    return <FormattedText key={index} style="" children={part} />;
  });
};
