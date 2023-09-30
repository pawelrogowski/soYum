import PropTypes from "prop-types";
import { StyledGallery } from "./Gallery.styled";
import { Card } from "../Card/Card";
import { Heading } from "../Heading/Heading.jsx";

export const Gallery = ({ data, heading }) => {
  return (
    <StyledGallery>
      <Heading as="h2">{heading}</Heading>
      <ul>
        {data.map((item, index) => (
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

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
};