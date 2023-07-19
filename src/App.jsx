import Header from "./Components/layouts/header";
import ImageText from "./parts/imageText";
import PartsOfTheBuilding from "./parts/buildingDiscription/partsOfTheBuilding";
import Slider from "./Components/sliders/slider";
import BuildingDiscription from "./parts/buildingDiscription/buildingDiscription";
import Package from "./parts/package/package";
import Plan from "./parts/plan/plan";
import Map from "./parts/map/map";
import Footer from "./Components/layouts/footer";

function App() {
  return (
    <>
      <Header />
      <div className="h-full relative">
        <Slider />
        <ImageText />
      </div>
      <div>
        <div>
          <PartsOfTheBuilding />
        </div>
        <div id="description">
          <BuildingDiscription />
        </div>
        <div id="package">
          <Package />
        </div>
      </div>
      <div>
        <Plan />
      </div>
      <div>
        <Map />
        <Footer />
      </div>
    </>
  );
}

export default App;
