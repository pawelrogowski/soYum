import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { setSignInRedirectPatch } from "../../redux/slices/globalSlice.js";
import { Icon } from "../Icon/Icon";
import { StyledMain } from "./LoginRequiredInfo.styled.js";

export const LoginRequiredInfo = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSignInRedirectPatch(location.pathname));
  }, [dispatch, location.pathname]);

  return (
    <StyledMain>
      <h1>
        Please <Link to="/signin">sign in</Link> to access this feature
      </h1>
      <Icon icon="404" />
    </StyledMain>
  );
};

export default LoginRequiredInfo;
