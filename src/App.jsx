import Header from "./Components/layouts/header";
import ImageText from "./Components/imageText";
import PartsOfTheBuilding from "./Components/partsOfTheBuilding";
import Slider from "./Components/sliders/slider";
import SliderDiscription from "./Components/sliders/sliderDiscription";
import BuildingDiscription from "./Components/buildingDiscription";

function App() {
  return (
    <>
      <Header />
      <div className="h-full relative">
        <Slider />
        <ImageText />
      </div>
      <div>
        <PartsOfTheBuilding />
      </div>
      <div>
        <BuildingDiscription />
      </div>
    </>
  );
}

export default App;
