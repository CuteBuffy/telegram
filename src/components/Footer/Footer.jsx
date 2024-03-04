
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__wrapper">
            <div className="footer__1">
              <h3 className="footer__title">Telegram</h3>
              <p className="footer__desc">Telegram — это облачный мессенджер для мобильных устройств и компьютеров. Быстрый и безопасный.</p>
            </div>
            <div className="footer__2">
              <a className="footer__a" href="#">О Telegram</a>
              <ul className="footer__links">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Приватность</a></li>
                <li><a href="#">Для СМИ</a></li>
              </ul>
            </div>
            <div className="footer__3">
              <a className="footer__a" href="#">Для мобильных</a>
              <ul className="footer__links">
                <li><a href="#">iPhone/iPad</a></li>
                <li><a href="#">Android</a></li>
                <li><a href="#">Мобильная вем-версия</a></li>
              </ul>
            </div>
            <div className="footer__4">
              <a className="footer__a" href="#">Для компьютера</a>
              <ul className="footer__links">
                <li><a href="#">PC/Mac/Linux</a></li>
                <li><a href="#">macOS</a></li>
                <li><a href="#">Веб-версия</a></li>
              </ul>
            </div>
            <div className="footer__5">
              <a className="footer__a" href="#">Платформы</a>
              <ul className="footer__links">
                <li><a href="#">API</a></li>
                <li><a href="#">Переводы</a></li>
                <li><a href="#">Instant View</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mobile__footer-container">
          <div className="mobile__footer-wrapper">
            <a href="#">О TELEGRAM</a>
            <a href="#">БЛОГ</a>
            <a href="#">ПРИЛОЖЕНИЯ</a>
            <a href="#">ПЛАТФОРМЫ</a>
            <a href="#">ДЛЯ СМИ</a>
          </div>
        </div>
      </footer>
    </>
  );
}