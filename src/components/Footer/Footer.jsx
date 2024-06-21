import PropTypes from "prop-types";
import { FaRegCopyright } from "react-icons/fa";
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
          Description
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Repo
        </a>
      </section>
      <a
        href="https://github.com/Dimterion"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <FaRegCopyright />
        Dimterion
      </a>
    </footer>
  );
}

Footer.propTypes = {
  descriptionLink: PropTypes.string,
  repoLink: PropTypes.string,
};
