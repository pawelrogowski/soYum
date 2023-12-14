import { Link, useNavigate } from "react-router-dom";

import { baseButtonMotion, startPageMotion } from "../../common/animations";
import { Button } from "../../components/Button/Button";
import { Icon } from "../../components/Icon/Icon";
import { Logo } from "../../components/Logo/Logo";
import { usePageTitle } from "../../hooks/usePageTitle";
import { StartPageContainer } from "./StartPage.styled";

export const StartPage = () => {
  usePageTitle("Welcome");
  const navigate = useNavigate();
  return (
    <StartPageContainer {...startPageMotion}>
      <Logo />
      <h1>Welcome to So Yummy!</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed to be your very own
        digital cookbook. You can easily save and retrieve your own recipes at any time.
      </p>
      <nav>
        <ul>
          <li>
            <Button
              variant="outlineBig"
              aria-label="Registration"
              onClick={() => navigate("register")}
              {...baseButtonMotion}
            >
              Registration
            </Button>
          </li>
          <li>
            <Button
              variant="outlineBig"
              aria-label="Sign In"
              onClick={() => navigate("signin")}
              {...baseButtonMotion}
            >
              Sign In
            </Button>
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
