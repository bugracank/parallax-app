import { Parallax } from "react-scroll-parallax";
import Letter from "../../img/letter.jpg";
import "./First.css";

const First = () => {
  return (
    <Parallax className="first-parallax" speed={-35}>
      <img className="first-letter" alt="letter" src={Letter} />
      <h2 className="first-welcome">
        Welcome to your journey at
        <br /> <span> HOGWARTS</span>
      </h2>
    </Parallax>
  );
};
export default First;
