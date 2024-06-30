import "./styles.css";
import bus from "../../assets/bus.jpg";
import Button from "../../components/Button/Button";
import {userData} from "./data"

function Consultation01() {
  const showButton = true;

  return (
    <div className="consultation01-components">
      {showButton && <Button />}
      {/* <img src={bus} alt="bus joke" /> */}
      <div>{userData.userName}</div>
      <img src={userData.avatar} alt="avatar Simpson" />
    </div>
  );
}

export default Consultation01;
