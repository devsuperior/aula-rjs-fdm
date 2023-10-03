
type Props = {
    text: string;
    borderColor: string;
}

export default function ButtonBorder({ text, borderColor }: Props) {

    return (
        <div className="btn-basic" style={{ border: `2px solid ${borderColor}`}}>{text}</div>
    );
}
