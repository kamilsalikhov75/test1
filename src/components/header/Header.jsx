import './Header.css';
import logo from '../../assets/logo.svg';
import barsIcon from '../../images/bars-icon.svg';
import closeIcon from '../../images/close-icon.svg';
import { headerMenuClasses, link } from '../../const';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState(headerMenuClasses.default);
  function handleClick() {
    if (menuOpen) {
      setMenuOpen(false);
      setMenuClass(headerMenuClasses.default);
    } else {
      setMenuOpen(true);
      setMenuClass(headerMenuClasses.active);
    }
  }

  return (
    <header className="header">
      <div className="header__inner">
        <button
          id="menuButton"
          className="header__menu-button"
          onClick={handleClick}
        >
          <img
            src={barsIcon}
            alt="Иконка меню"
            className="header__menu-image"
          />
        </button>
        <nav className={menuClass}>
          <div className="header__menu-top">
            <h4 className="header__menu-title">Каталог</h4>
            <button
              id="closeMenuButton"
              className="header__menu-button"
              onClick={handleClick}
            >
              <img
                src={closeIcon}
                alt="Иконка закрытия меню"
                className="header__menu-image"
              />
            </button>
          </div>
          <div className="header__navigation-item">
            <Link to={link.male} className="header__link">
              Мужское
            </Link>
          </div>
          <div className="header__navigation-item">
            <Link to={link.female} className="header__link">
              Женское
            </Link>
          </div>
        </nav>
        <Link to={link.home} className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <nav className="header__navigation">
          <div className="header__navigation-item">
            <Link to={link.male} className="header__link">
              Мужское
            </Link>
          </div>
          <div className="header__navigation-item">
            <Link to={link.female} className="header__link">
              Женское
            </Link>
          </div>
        </nav>
        <div className="header__buttons">
          <Link to={link.likes} className="header__button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.76602L14.2645 9.43718L14.3719 9.80083L14.751 9.79557L22.4597 9.6886L16.1418 14.3824L15.854 14.5962L15.9642 14.9374L18.4373 22.5953L12.3088 17.7824L12 17.5399L11.6912 17.7824L5.56266 22.5953L8.0358 14.9374L8.14599 14.5962L7.85818 14.3824L1.54026 9.6886L9.24899 9.79557L9.62812 9.80083L9.73547 9.43718L12 1.76602Z"
                stroke="black"
              />
            </svg>
          </Link>

          <Link to={link.cart} className="header__button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.46446 2.46447C9.40215 1.52678 10.6739 1 12 1C13.3261 1 14.5979 1.52678 15.5355 2.46447C16.4732 3.40215 17 4.67392 17 6V8H7V6C7 4.67392 7.52678 3.40215 8.46446 2.46447ZM6 8V6C6 4.4087 6.63214 2.88258 7.75735 1.75736C8.88258 0.632141 10.4087 0 12 0C13.5913 0 15.1174 0.632141 16.2426 1.75736C17.3679 2.88258 18 4.4087 18 6V8H21L24 24H0L3 8H6ZM1.20493 23L3.82993 9H20.1701L22.7951 23H1.20493Z"
                fill="black"
              />
            </svg>
          </Link>
          <Link to={link.user} className="header__button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 5C16 7.20914 14.2091 9 12 9C9.79086 9 8 7.20914 8 5C8 2.79086 9.79086 1 12 1C14.2091 1 16 2.79086 16 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5ZM19.7782 16.2218C21.604 18.0477 22.7217 20.4493 22.9545 23H12L1.04552 23C1.27827 20.4493 2.39596 18.0477 4.22183 16.2218C6.28473 14.1589 9.08262 13 12 13C14.9174 13 17.7153 14.1589 19.7782 16.2218ZM20.4853 15.5147C22.4988 17.5282 23.7229 20.1837 23.9583 23C23.986 23.3314 24 23.665 24 24H23H12L1 24H0C0 23.665 0.0140111 23.3314 0.0417088 23C0.277117 20.1837 1.50119 17.5282 3.51472 15.5147C5.76516 13.2643 8.8174 12 12 12C15.1826 12 18.2348 13.2643 20.4853 15.5147Z"
                fill="black"
              />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Header };
