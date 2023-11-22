import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";

import placeholder from "../../assets/images/transparent.avif";
import { breakpoints } from "../../styles/themes";
import { Heading } from "../Heading/Heading";
import { PopularCard } from "../PopularCard/PopularCard";
import { StyledSection } from "./PopularRecipeList.styled";

export const PopularRecipeList = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  let itemsToShow;
  if (isMobile || isDesktop) {
    itemsToShow = 4;
  } else if (isTablet) {
    itemsToShow = 2;
  }

  return (
    <StyledSection>
      <Heading as="h2">Popular Recipes</Heading>
      <ul>
        {data.slice(0, itemsToShow).map((item, index) => (
          <li key={index}>
            <PopularCard
              name={item.name}
              cookingTime={item.cookingTime}
              description={item.description}
              image={item.image}
              placeholder={placeholder}
            />
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

PopularRecipeList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      cookingTime: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PopularRecipeList;
