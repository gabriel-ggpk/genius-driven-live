import "./colorCard.css";

export default function ColorCard(props) {
  return (
    <div
      onClick={props.onClick}
      className={`colorCard ${props.color} ${props.flash ? "flash" : ""}`}
    ></div>
  );
}
