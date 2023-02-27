import './Footer.css';
import { Link } from 'react-router-dom';
import { link } from '../../const';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__block">
          <h6 className="footer__title">Подписаться на новости</h6>
          <form action="" className="footer__form">
            <input
              type="email"
              className="footer__input"
              placeholder="Введите email"
            />
          </form>
          <div className="footer__media">
            <a href="https://vk.com" className="footer__media-link">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.162 31.994C26.771 31.994 27.02 31.588 27.013 31.079C26.982 29.162 27.727 28.13 29.072 29.475C30.56 30.963 30.868 31.994 32.675 31.994H35.875C36.683 31.994 37.001 31.734 37.001 31.326C37.001 30.463 35.58 28.94 34.376 27.822C32.69 26.257 32.611 26.22 34.063 24.336C35.864 21.997 38.22 19 36.136 19H32.155C31.383 19 31.327 19.435 31.052 20.083C30.057 22.43 28.166 25.47 27.448 25.005C26.697 24.52 27.041 22.599 27.098 19.744C27.113 18.99 27.109 18.473 25.957 18.205C25.328 18.06 24.716 18 24.148 18C21.875 18 20.307 18.953 21.198 19.119C22.769 19.412 22.618 22.811 22.252 24.279C21.614 26.835 19.216 22.255 18.217 19.974C17.976 19.426 17.902 19 17.042 19H13.787C13.295 19 13 19.16 13 19.516C13 20.118 15.96 26.236 18.786 29.286C21.542 32.261 24.266 31.994 26.162 31.994Z"
                  fill="#8A8A8A"
                />
              </svg>
            </a>
            <a href="https://telegram.org" className="footer__media-link">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.1522 13.0021C34.8272 13.0177 34.5243 13.1209 34.2577 13.2384C34.008 13.3479 33.0539 13.794 31.551 14.4966C30.0468 15.1998 28.0551 16.132 25.9304 17.128C21.6811 19.1201 16.9038 21.3625 14.4569 22.5101C14.3649 22.5533 14.0438 22.6651 13.7031 22.9551C13.3623 23.2451 13 23.846 13 24.5156C13 25.0556 13.236 25.592 13.5332 25.9122C13.8303 26.2325 14.1446 26.3907 14.4139 26.5105C15.391 26.9451 18.4213 28.297 18.9936 28.5522C19.195 29.2247 20.2918 32.8824 20.5462 33.7788C20.7138 34.3704 20.8735 34.7409 21.0813 35.0349C21.1852 35.182 21.306 35.3108 21.4523 35.4118C21.5108 35.4521 21.575 35.4832 21.6398 35.5118L21.6437 35.514C21.6586 35.5205 21.6715 35.5316 21.6867 35.5374C21.7153 35.5483 21.7344 35.5496 21.7726 35.5587C21.9249 35.6123 22.0787 35.646 22.2159 35.646C22.801 35.646 23.1592 35.2947 23.1592 35.2947L23.1807 35.2776L26.1902 32.4397L29.8402 36.2038C29.8916 36.283 30.3709 37 31.4279 37C32.0556 37 32.5535 36.6567 32.8731 36.291C33.1928 35.9254 33.3919 35.5413 33.4766 35.0584V35.0562C33.5558 34.5999 36.9196 15.774 36.9196 15.774L36.9137 15.7996C37.0122 15.3096 37.038 14.8532 36.9294 14.4029C36.8207 13.9526 36.5344 13.5215 36.1794 13.2895C35.8245 13.0575 35.4772 12.9864 35.1522 13.0021ZM34.9647 15.2801C34.9599 15.3119 34.9683 15.2959 34.9608 15.3333L34.9589 15.3461L34.9569 15.3589C34.9569 15.3589 31.6347 33.9439 31.5119 34.6517C31.5209 34.5983 31.4798 34.7046 31.4377 34.7688C31.3782 34.7241 31.2561 34.6666 31.2561 34.6666L31.2366 34.6432L26.2507 29.5017L22.7256 32.8229L23.7744 28.2456C23.7744 28.2456 30.3299 20.8479 30.7249 20.4173C31.0429 20.0729 31.1096 19.9528 31.1096 19.834C31.1096 19.6748 31.0335 19.5593 30.8635 19.5593C30.7106 19.5593 30.5048 19.7215 30.3948 19.7978C28.9619 20.7936 22.6709 24.7906 19.8509 26.5786C19.4028 26.3787 16.2894 24.9894 15.2342 24.5199C15.2422 24.5161 15.2395 24.5174 15.2478 24.5135C17.6954 23.3655 22.4707 21.1232 26.7194 19.1314C28.8437 18.1355 30.837 17.2026 32.34 16.5C33.8198 15.8082 34.8481 15.332 34.9647 15.2801Z"
                  fill="#8A8A8A"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer__block">
          <div className="footer__block-inner">
            <h6 className="footer__title">Интернет магазин</h6>
            <div className="footer__links">
              <a href="tel:+74955445770" className="link">
                +7 (495) 544-57-70
              </a>
              <a href="tel:+78007752834" className="link">
                +7 (800) 775-28-34
              </a>
            </div>
          </div>
          <div className="footer__block-inner">
            <h6 className="footer__title">Адреса магазинов</h6>
            <a href="https://yandex.ru/maps/-/CCUzYCfu8B" className="link">
              просп. Мира, 68, Набережные Челны
            </a>
          </div>
        </div>
        <div className="footer__block">
          <h6 className="footer__title">Поддержка</h6>
          <div className="footer__links">
            <Link to={link.help} className="link">
              Помощь покупателю
            </Link>
            <Link to={link.delivery} className="link">
              Доставка и оплата
            </Link>
            <Link to={link.refund} className="link">
              Возврат
            </Link>
            <Link to={link.loyalty} className="link">
              Программа лояльности
            </Link>
          </div>
        </div>
        <div className="footer__block">
          <h6 className="footer__title">Информация</h6>
          <div className="footer__links">
            <Link to={link.contacts} className="link">
              Контакты
            </Link>
            <Link to={link.stores} className="link">
              Магазины
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
