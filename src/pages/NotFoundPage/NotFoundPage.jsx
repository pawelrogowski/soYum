import { NotFound } from "../../components/NotFound/NotFound";
import { usePageTitle } from "../../hooks/usePageTitle";

export const NotFoundPage = () => {
  usePageTitle("Not Found");
  return <NotFound />;
};

export default NotFoundPage;
