import PropTypes from "prop-types";
import "./footer.css";

export default function Footer({ descriptionLink, repoLink }) {
  return (
    <footer className="footer">
      <section>
        <a
          href={descriptionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          {"<< "}Description{" >>"}
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          {"<< "}Repo{" >>"}
        </a>
      </section>
      <a
        href="https://github.com/Dimterion"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {new Date().getFullYear()} &copy;Dimterion
      </a>
    </footer>
  );
}

Footer.propTypes = {
  descriptionLink: PropTypes.string,
  repoLink: PropTypes.string,
};
