const Carousel = dynamic(
  // @ts-ignore
  () => import("react-spring-3d-carousel"),
  {
    ssr: false,
  }
);
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { config } from "react-spring";
export default function Carroussel(props: any) {
  const table = props.cards.map(
    (element: any, index: any) => {
      return {
        ...element,
        onClick: () => setGoToSlide(index),
      };
    }
  );

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
      }}
    >
    
      <Carousel
        slides={cards}
        // @ts-ignore
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
