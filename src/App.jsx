import Header from "./Components/header"
import ImageText from "./Components/imageText"
import Slider from "./Components/slider"

function App() {
  return (
    <>
      <Header />
      <div className="h-auto relative">
        <Slider />
      <ImageText/>
      </div>
    </>
  )
}

export default App
