import Card from "./Card";
import Carroussel from "./Carousel";
import style from "./mySwiper.module.css"

const Slider = () => {
  let cards = [
    {
      key: 1,
      content: <Card />,
    },
    {
      key: 2,
      content: <Card />,
    },
    {
      key: 3,
      content: <Card />,
    },
    {
      key: 4,
      content: <Card />,
    },
    {
      key: 5,
      content: <Card />,
    },
    {
      key: 7,
      content: <Card />,
    },
    {
      key: 8,
      content: <Card />,
    },
  ];
  return (
    <div className={style.container_slider}>
      <div className={style.slider_text}>
        {" "}
        <h1>سفر به بهترین مقاصد دنیا</h1>
        <p>
          مناطق گردشگری | مردم | آداب | پول رایج | سیاست
        </p>
      </div>
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
};

export default Slider;
