import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants";


export const useRedirect = () => {
  const navigate = useNavigate();

  const redirect = (route:string) => {
    if (navigate && route) {
      navigate(route);
    }

    return true;
  };

  return {
    toHome: () => redirect(ROUTES.HOME),
    toLogin: () => redirect(ROUTES.LOGIN),
    toServers: () => redirect(ROUTES.SERVERS),
  };
};

