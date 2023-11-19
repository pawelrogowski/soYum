import { Link } from "react-router-dom";

import { baseButtonMotion, startPageMotion } from "../../common/animations";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { Logo } from "../../components/Logo/Logo";
import { StartPageContainer } from "./StartPage.styled";

export const StartPage = () => {
  return (
    <StartPageContainer {...startPageMotion}>
      <Logo />
      <h1>Welcome to the app!</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed to be your very own
        digital cookbook. You can easily save and retrieve your own recipes at any time.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/register">
              <Button variant="normal" aria-label="Registration" {...baseButtonMotion}>
                Registration
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/signin">
              <Button variant="outlineBig" aria-label="Sign In" {...baseButtonMotion}>
                Sign In
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/home">
        Continue without the account <Icon icon="arrow_long" />
      </Link>
    </StartPageContainer>
  );
};

export default StartPage;
