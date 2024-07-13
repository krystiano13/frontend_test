import arrow from "../assets/down-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import rightArrow2 from "../assets/rightArrow2.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box_wrapper">
        <div className="footer__box_wrapper__box"></div>
        <div className="footer__box_wrapper__text">
          <p className="footer__box_wrapper__text__p">CSS</p>
          <p className="footer__box_wrapper__text__p">IS</p>
          <p className="footer__box_wrapper__text__p">AWESOME</p>
        </div>
      </div>
      <div className="footer__logo">nabthat</div>
      <div className="footer__dropdown">
        <button tabIndex={0} className="footer__dropdown__btn">
          <span className="footer__dropdown__btn__span">
            POKAŻ <img src={arrow} alt="dropdown arrow" />
          </span>
        </button>
        <div className="footer__dropdown__menu">
          <button>
            <div>
              <img className="img" src={rightArrow} alt="dropdown arrow" />
              <img
                className="img_hover"
                src={rightArrow2}
                alt="dropdown arrow"
              />
            </div>
            ZRESETUJ USTAWIENIA
          </button>
          <button>
            <div>
              <img className="img" src={rightArrow} alt="dropdown arrow" />
              <img
                className="img_hover"
                src={rightArrow2}
                alt="dropdown arrow"
              />
            </div>
            POKAŻ DANE OSOBOWE
          </button>
        </div>
      </div>
    </footer>
  );
}
