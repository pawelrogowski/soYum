import { Icon } from "../Icon/Icon";
import { UserUpdateForm } from "../UserUpdateForm/UserUpdateForm";
import { StyledDiv } from "./EditUserModal.styled";

export const EditUserModal = () => {
  return (
    <StyledDiv>
      <div>
        <button type="button">
          <Icon icon="x" />
        </button>
        <UserUpdateForm />
      </div>
    </StyledDiv>
  );
};
