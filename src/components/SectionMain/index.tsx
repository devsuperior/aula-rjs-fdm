import imgProf from '../../assets/prof.png';

export default function SectionMain() {

    return (
        <section className="full-width-container title-section">
            <div className="title-section-bg"></div>
            <div className="container title-section-content">
                <div className="title-section-left">
                    <h1 className="section-title title-section-title">
                        Cursos de Programação
                    </h1>
                    <div className="section-subtitle mb10">
                        Seja um desenvolvedor profissional
                    </div>
                    <p className="section-description">
                        Ajudamos pessoas a se tornarem desenvolvedores profissionais.
                        Temos treinamentos para iniciantes, e também para tecnologias
                        específicas como Java, Spring, e ReactJS.
                    </p>
                    <div className="title-section-impact">
                        <p className="color-text-primary">Nelio Alves</p>
                        <p className="color-text-orange">+370 mil alunos</p>
                    </div>
                </div>
                <div className="title-section-right">
                    <img className="title-section-right-img" src={imgProf} alt="Professor" />
                </div>
            </div>
        </section>
    );
}