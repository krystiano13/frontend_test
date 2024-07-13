import arrow from "../assets/down-arrow.png";

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
      <p className="footer__logo">nabthat</p>
      <div className="footer__dropdown">
        <button tabIndex={0} className="footer__dropdown__btn">
          <span className="footer__dropdown__btn__span">
            POKAŻ <img src={arrow} alt="dropdown arrow" />
          </span>
        </button>
        <div className="footer__dropdown__menu">
          <button>ZRESETUJ USTAWIENIA</button>
          <button>POKAŻ DANE OSOBOWE</button>
        </div>
      </div>
    </footer>
  );
}
