import imgLogo from '../../assets/logo.svg';

export default function FooterMain() {

    return (
        <footer className="full-width-container main-footer">
            <div className="container main-footer-container">
                <div>
                    <img src={imgLogo} alt="Devsuperior" />
                </div>
                <div className="main-footer-links">
                    <a href="#">Termos de uso</a>
                    <a href="#">Política de privacidade</a>
                </div>
            </div>
        </footer>
    );
}
