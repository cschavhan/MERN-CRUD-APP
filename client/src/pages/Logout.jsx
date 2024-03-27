import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

function Logout() {
  const navigate = useNavigate();
  const { LogoutUser } = useAuth();

  useEffect(() => {
    const logOutAndRedirect = async () => {
      await LogoutUser();
      navigate("/login");
    };
    logOutAndRedirect();
  }, [navigate, LogoutUser]);

  return null;
}

export default Logout;
