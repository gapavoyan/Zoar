import Header from "./Components/layouts/header"
import ImageText from "./Components/imageText"
import PartsOfTheBuilding from "./Components/partsOfTheBuilding"
import Slider from "./Components/sliders/slider"

function App() {
  return (
    <>
      <Header />
      <div className="h-full relative">
        <Slider />
        <ImageText />
      </div>
      {/*<PartsOfTheBuilding/> */}
    </>
  )
}

export default App
