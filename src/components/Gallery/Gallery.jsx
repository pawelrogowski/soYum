import PropTypes from "prop-types";
import { StyledGallery } from "./Gallery.styled";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading.jsx";
import { Button } from "../Button/Button";

export const Gallery = ({ data, heading, limit = Infinity }) => {
  return (
    <StyledGallery>
      <Heading as="h2">{heading}</Heading>
      <ul>
        {data.slice(0, limit).map((item, index) => (
          <li key={index}>
            <Card
              img={item.img}
              caption={item.caption}
              placeholder={item.placeholder}
            />
          </li>
        ))}
      </ul>
      <Button variant="rectSmall">See all</Button>
    </StyledGallery>
  );
};

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  limit: PropTypes.number,
};
