import imgLogo from '../../assets/logo.svg';

export default function HeaderMain() {

    return (
        <header className="full-width-container main-header">
        <div className="container header-content-container">
          <div>
            <img className="img-logo" src={imgLogo} alt="Devsuperior" />
          </div>
          <div>
            <ul className="menu-items">
              <li><a href="#">Fundamentos</a></li>
              <li><a href="#">Java & Spring</a></li>
              <li><a href="#">ReactJS</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
}
