import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import kyiv from "./images/kyiv.jpg";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image src={kyiv} />
      <Gallery />
    </div>
  );
}

export default App;