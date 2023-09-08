import MusicImage from "../../assets/icon-music.svg";
import "../PriceSection/PriceSection.css";
const PriceSection = () => {
  return (
    <div className="price-div">
      <div className="music-and-plan">
        <img className="music" src={MusicImage} alt="music note icon" />
        <div className="plan-and-price">
          <span className="plan-span">Annual Plan</span>
          <span className="price-span">$59.99/year</span>
        </div>
      </div>
      <span className="change">Change</span>
    </div>
  );
};

export default PriceSection;
