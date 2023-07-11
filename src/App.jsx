import Header from "./Components/layouts/header";
import ImageText from "./parts/imageText";
import PartsOfTheBuilding from "./parts/buildingDiscription/partsOfTheBuilding";
import Slider from "./Components/sliders/slider";
import BuildingDiscription from "./parts/buildingDiscription/buildingDiscription";
import Package from "./parts/package/package";
import Plan from "./parts/plan/plan";

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
      <Plan />
    </>
  );
}

export default App;
