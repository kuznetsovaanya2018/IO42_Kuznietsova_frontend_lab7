import GoodsCard from "./GoodsCard";
import apple from "../images/apple.jpg";
import pear from "../images/pear.jpg";
import grape from "../images/grape.jpg";
import peach from "../images/peach.jpg";
import lemon from "../images/lemon.jpg";
import orange from "../images/orange.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <GoodsCard image={apple} name="Apple" price={15} />
      <GoodsCard image={pear} name="Pear" price={20} />
      <GoodsCard image={grape} name="Grape" price={25} />
      <GoodsCard image={peach} name="Peach" price={18} />
      <GoodsCard image={lemon} name="Lemon" price={12} />
      <GoodsCard image={orange} name="Orange" price={22} />
    </div>
  );
}

export default Gallery;