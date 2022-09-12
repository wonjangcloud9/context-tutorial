import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <>
        <SelectColors />
        <ColorBox />
      </>
    </ColorProvider>
  );
}

export default App;
