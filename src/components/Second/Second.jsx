import { Parallax } from "react-scroll-parallax";
import Nine from "../../img/9-34.jpg";
import "./Second.css";

const Second = () => {
  return (
    <Parallax className="second-parallax" speed={-26}>
      <img className="second-nine" alt="nine" src={Nine} />
      <h2 className="second-welcome">
        Welcome to your journey at
        <br /> <span> HOGWARTS</span>
      </h2>
    </Parallax>
  );
};
export default Second;
