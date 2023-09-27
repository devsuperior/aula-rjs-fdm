import CardCourse from '../CardCourse';

export default function SectionCourses() {

    return (
        <section className="full-width-container foundation-section">
            <div className="container">
                <div className="section-text-container">
                    <h2 className="section-title foundation-section-title">Coleção Fundamentos</h2>
                    <div className="section-subtitle mb10">
                        Para iniciantes e para quem precisa repassar disciplinas da
                        faculdade
                    </div>
                    <p className="section-description">
                        Quem deseja se tornar um desenvolvedor profissional deve primeiro
                        dominar as disciplinas de fundamentos, ou seja, a base necessária
                        para conseguir criar sistemas e aplicativos. Lembre-se que não
                        adianta tentar aprender um framework moderno como React ou Spring,
                        se você primeiro não tiver uma base de lógica, OO, banco de dados,
                        e Git. Na programação não tem como pular etapas. Nossos
                        treinamentos de fundamentos vem justamente suprir essa base que
                        todo profissional precisa.
                    </p>
                </div>
                <div className="cards-container">
                    <CardCourse title='Algoritmos' description='Aprenda a programar' />
                    <CardCourse title='Git e Github' description='Aprenda controle de versão' />
                    <CardCourse title='Banco de Dados' description='Aprenda banco de dados' />
                    <CardCourse title='Java Completo' description='Aprenda Java e OO' />
                </div>
            </div>
        </section>
    );
}
