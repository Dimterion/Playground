import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./imageEditor.css";

function ImageEditor() {
  const [link, setLink] = useState(
    "https://raw.githubusercontent.com/Dimterion/Profile-site/master/src/assets/images/placeholderImg.jpg"
  );
  const [spacing, setSpacing] = useState(5);
  const [blur, setBlur] = useState(0);
  const [baseColor, setBaseColor] = useState("var(--secondary)");

  // const handleSpacingChange = (e) => {
  //   setSpacing(e.target.value);
  // };

  // const handleBlurChange = (e) => {
  //   setBlur(e.target.value);
  // };

  // const handleBaseColorChange = (e) => {
  //   setBaseColor(e.target.value);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    name === "link"
      ? setLink(value)
      : name === "spacing"
      ? setSpacing(value)
      : name === "blur"
      ? setBlur(value)
      : setBaseColor(value);

    // switch (name) {
    //   case "spacing":
    //     setSpacing(value);
    //     break;
    //   case "blur":
    //     setBlur(value);
    //     break;
    //   case "base":
    //     setBaseColor(value);
    //     break;
    //   default:
    //     break;
    // }
  };

  const imageStyle = {
    padding: `${spacing}px`,
    background: baseColor,
    filter: `blur(${blur}px)`,
  };

  return (
    <main>
      <Header />
      <section className="imageEditor-section">
        <article className="imageEditor-article">
          <label htmlFor="link">Image link:</label>
          <input
            id="link"
            type="url"
            name="link"
            placeholder="Paste your image link here."
            value={
              link ===
              "https://raw.githubusercontent.com/Dimterion/Profile-site/master/src/assets/images/placeholderImg.jpg"
                ? ""
                : link
            }
            onChange={handleInputChange}
          />
          <label htmlFor="spacing">Spacing:</label>
          <input
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            value={spacing}
            onChange={handleInputChange}
            data-sizing="px"
          />
          <label htmlFor="blur">Blur:</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            value={blur}
            onChange={handleInputChange}
            data-sizing="px"
          />
          <label htmlFor="base">Base Color:</label>
          <input
            id="base"
            type="color"
            name="base"
            value={baseColor}
            onChange={handleInputChange}
          />
        </article>
        <img
          className="imageEditor-img"
          style={imageStyle}
          src={link}
          alt={
            link ===
            "https://raw.githubusercontent.com/Dimterion/Profile-site/master/src/assets/images/placeholderImg.jpg"
              ? "Sea photo"
              : "Pasted image"
          }
        />
      </section>
      <Footer
        descriptionLink="https://medium.com/@dimterion/simple-image-editor-with-react-3d681dd88999"
        repoLink="https://github.com/Dimterion/Playground/tree/main/src/pages/ImageEditor"
      />
    </main>
  );
}

export default ImageEditor;
