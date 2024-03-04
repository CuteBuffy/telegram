
export default function Card(props) {
  return (
    <>
      <div className="card__container">
        <img className="card__img" src={props.img} alt="" />
        <h3 className="card__title">{props.title}</h3>
        <p className="card__desc">{props.firstPart} <strong>{props.boldDesc}</strong> {props.lastPart}</p>
      </div>
    </>
  );
}