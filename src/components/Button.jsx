import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function CategoryButton({ type, label, emoji }) {
  const navigate = useNavigate();

  const handleTypeClick = () => {
    navigate(`/product-list/${type}`);
  };
  return (
    <button onClick={handleTypeClick} className="type-button">
      {emoji} {label}
    </button>
  );
}

CategoryButton.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};
