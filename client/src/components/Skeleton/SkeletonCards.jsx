import "./SkeletonCards.css";

export default function SkeletonCards() {
  return (
    <div className="cardSkContainer">
      <p className="idSkCard placeholder"></p>
      <p className="imageSkCard placeholder" src="generico" alt=""></p>

      <h1 className="nameSkCard placeholder"> </h1>
      <p className="healthSkCard placeholder"></p>
      <div className="diet">
        <p className="dietSkCard placeholder"></p>
        <p className="dietSkCard placeholder"></p>
      </div>
    </div>
  );
}
