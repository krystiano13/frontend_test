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
      <button className="footer__btn">
        <span className="footer__btn__span">
          POKAŻ <img src={arrow} alt="dropdown arrow" />
        </span>
      </button>
    </footer>
  );
}
