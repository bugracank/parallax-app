import { ParallaxProvider } from "react-scroll-parallax";
import First from "./components/First/First";
import Second from "./components/Second/Second";
import Third from "./components/Third/Third";
import Text from "./components/Text/Text";

function App() {
  return (
    <ParallaxProvider>
      <First />
      <Text />
      <Second />
      <Text />
      <Third />
    </ParallaxProvider>
  );
}

export default App;
