import { PropsWithChildren, useState } from "react";
import { Carousel } from "react-bootstrap";

// TYPES
type Props = PropsWithChildren<{
  products: {
    title: string;
    quantGr: string;
    textDescription: string;
    arrayCompo: string[];
    price: string;
    img: string;
    categorie: string;
    tags: string[];
  }[];
  time: number;
}>;

/*****      CAROUSEL HOME     *****/
export default function CarrousselHome({ products, time }: Props) {
  // State
  const [indx, setIndx] = useState(0);
  const [textCarousel, setTextCarousel] = useState(false);

  // Handles
  const handleIndx = (id: any) => {
    setIndx(id);
  };
  const showTextCarousel = () => {
    setTextCarousel(true);
  };
  const hiddenTextCarousel = () => {
    setTextCarousel(false);
  };

  return (
    <Carousel
      activeIndex={indx}
      onSelect={handleIndx}
      interval={time}
      variant="dark"
      pause="hover"
      indicators={false}
      onSlid={showTextCarousel}
      onSlide={hiddenTextCarousel}
      slide
    >
      {products.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-inline w-50 " src={item.img} alt={item.title} />
          <Carousel.Caption
            style={{ visibility: textCarousel ? "visible" : "hidden" }}
          >
            <h3>{item.title}</h3>
            <p>{item.textDescription}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
