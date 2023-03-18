import { Parallax } from "react-scroll-parallax";
import Train from "../../img/train.jpg";
import "./Third.css";

const Third = () => {
  return (
    <Parallax className="third-parallax" speed={-35}>
      <img className="third-train" alt="train" src={Train} />
      <h2 className="third-welcome">
        Welcome to your journey at
        <br /> <span> HOGWARTS</span>
      </h2>
    </Parallax>
  );
};
export default Third;
