
export default function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <div className="navbar__wrapper">
            <div className="navbar__left">
              <ul className="links__container">
                <li><a href="#">Главная</a></li>
                <li><a href="https://telegram.org/faq">FAQ</a></li>
                <li><a href="https://telegram.org/apps">Приложения</a></li>
                <li className="li_api"><a className="a_api" href="https://core.telegram.org/api">API</a></li>
                <li><a href="https://core.telegram.org/mtproto">Протокол</a></li>
              </ul>
            </div>
            <div className="navbar__right">
              <div className="globe">
                <a href="#">
                  <img src="./icons/globe.svg" alt="" />
                  <select className="navbar__select">
                    <option value="RU">RU</option>
                    <option value="UA">UA</option>
                    <option value="ENG">ENG</option>
                  </select>
                </a>
              </div>
              <div className="twitter">
                <a href="https://twitter.com/telegram">
                  <img src="./icons/twitter.svg" alt="" />
                  <p>Twitter</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}