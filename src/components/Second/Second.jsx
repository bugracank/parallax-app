import { Parallax } from "react-scroll-parallax";
import Train from "../../img/train.jpg";
import "./Second.css";

const Second = () => {
  return (
    <Parallax className="second-parallax" speed={-25}>
      <img className="second-train" alt="train" src={Train} />
      <h2 className="second-welcome">
        Welcome to your journey at
        <br /> <span> HOGWARTS</span>
      </h2>
    </Parallax>
  );
};
export default Second;
