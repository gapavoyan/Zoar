import Header from "./Components/layouts/header";
import ImageText from "./parts/imageText";
import PartsOfTheBuilding from "./parts/buildingDiscription/partsOfTheBuilding";
import Slider from "./Components/sliders/slider";
import BuildingDiscription from "./parts/buildingDiscription/buildingDiscription";
import Package from "./parts/package/package";

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
        <BuildingDiscription />
        <Package />
      </div>
    </>
  );
}

export default App;
