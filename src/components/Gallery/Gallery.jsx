import { StyledGallery } from "./Gallery.styled";
import { Card } from "../Card/Card";

const cards = [
  { placeholder: "placeholder1", img: "img1", caption: "caption1" },
  { placeholder: "placeholder2", img: "img2", caption: "caption2" },
];

export const Gallery = () => {
  return (
    <StyledGallery>
      <ul>
        {cards.map((item, index) => (
          <li key={index}>
            <Card
              img={item.img}
              caption={item.caption}
              placeholder={item.placeholder}
            />
          </li>
        ))}
      </ul>
    </StyledGallery>
  );
};
