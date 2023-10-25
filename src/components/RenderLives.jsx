import heartBroken from "../assets/heart3.svg";
import heart from "../assets/heart.svg";

export function RenderLives({ numberOfLives }) {
  const hearts = [];
  for (let x = 0; x < numberOfLives; x++) {
    hearts.push(<img src={heart} key={x} className="liveHeart" />);
  }
  if (numberOfLives < 3 && numberOfLives >= 0) {
    for (let x = 3; x > numberOfLives; x--)
      hearts.push(<img src={heartBroken} key={x} className="liveHeart" />);
  }

  return hearts;
}