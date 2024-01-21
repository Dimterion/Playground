import { FaRegCopyright } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <a
      href="https://github.com/Dimterion"
      target="_blank"
      rel="noopener noreferrer"
      className="footer-link"
    >
      <FaRegCopyright />
      Dimterion
    </a>
  );
}
