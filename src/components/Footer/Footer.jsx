import PropTypes from "prop-types";
import { FaRegCopyright } from "react-icons/fa";
import "./footer.css";

export default function Footer({ link, linkName }) {
  return (
    <footer className="footer">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {linkName}
      </a>
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
  link: PropTypes.string,
  linkName: PropTypes.string,
};
