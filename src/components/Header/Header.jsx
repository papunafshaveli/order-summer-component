import MyImage from "../../assets/illustration-hero.svg";
import "../Header/Header.css";
const Header = () => {
  return (
    <div>
      <img className="girl" src={MyImage} alt="girl" />
    </div>
  );
};

export default Header;
