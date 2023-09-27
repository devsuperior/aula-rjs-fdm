import imgCard from '../../assets/card-img.png';

type Props = {
    title: string;
    description: string;
}

export default function CardCourse({ title, description }: Props) {

    return (
        <div className="card-course">
            <div className="card-course-top">
                <img src={imgCard} alt="Lógica de Programação e Algoritmos Expert" />
            </div>
            <div className="card-course-bottom">
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-btn-container">
                    <div className="btn-basic">Tenho interesse</div>
                </div>
            </div>
        </div>
    );
}
