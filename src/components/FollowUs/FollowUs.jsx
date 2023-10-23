import { Heading } from "../Heading/Heading";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { StyledDiv } from "./FollowUs.styled";
export const FollowUs = () => {
  return (
    <StyledDiv>
      <Heading as="h2">Follow us</Heading>
      <SocialIcons />
    </StyledDiv>
  );
};
