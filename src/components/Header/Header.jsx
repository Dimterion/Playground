import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
    <Link to="/" className="header-link">
      <FaBackward />
    </Link>
  );
}
