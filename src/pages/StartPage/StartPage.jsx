import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Logo } from "../../components/Logo/Logo";
import { StartPageContainer } from "./StartPage.styled";
export const StartPage = () => {
  return (
    <StartPageContainer>
      <Logo />
      <h1>Welcome to the app!</h1>
      <p>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <nav>
        <ul>
          <li>
            <Link to="/auth/register">
              <Button variant="normal">Registration</Button>
            </Link>
          </li>
          <li>
            <Link to="/auth/signin">
              <Button variant="outlineBig">Sign In</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </StartPageContainer>
  );
};
