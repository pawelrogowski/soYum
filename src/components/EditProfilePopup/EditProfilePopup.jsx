import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditProfilePopup.styled";
import { Button } from "../Button/Button";

export const EditProfilePopup = () => {
  return (
    <StyledDiv>
      <div>
        <span>Edit profile</span>
        <Icon icon="edit" />
      </div>
      <Button>
        Log out
        <Icon icon="arrow_long" />
      </Button>
    </StyledDiv>
  );
};
