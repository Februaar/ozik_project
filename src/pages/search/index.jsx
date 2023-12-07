import { useNavigate } from "react-router-dom";
import "../../styles/search.scss";
import { close, cancel } from "../../img/index";

function SearchPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-top">
          <input className="search-input" />
          <img src={cancel} className="delete" alt="Cancel" />
        </div>
        <div className="saerch-value-area">
          <div className="search-hisotry">
            <span className="title">최근 검색어</span>
            <div className="value-container">
              <span className="value">스타벅스</span>
              <span className="value">일리</span>
              <span className="value">네스카페</span>
              <span className="value">네스카페</span>
              <span className="value">네스카페</span>
              <span className="value">홀리몰리 과카몰리</span>
            </div>
          </div>
        </div>
      </div>
      <button className="close-button" onClick={handleGoBack}>
        <img src={close} className="close" alt="Close" />
      </button>
    </>
  );
}

export default SearchPage;
