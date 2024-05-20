import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import useCarousel from "../../hooks/useCarousel";

export default function Carousel() {
  const { items, responsive } = useCarousel();

  return (
    <div>
      <h1 style={{ textAlign: "start", margin: "10px 20px" }} id="projects">
        Meus Projetos
      </h1>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="resposinve"
        animationDuration={700}
        animationType="ease"
        infinite
        keyboardNavigation
        disableDotsControls
        disableSlideInfo
      />
    </div>
  );
}
