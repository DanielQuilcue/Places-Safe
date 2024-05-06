import { Navigate, Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useAuth } from "../../helper/index";

export const ProtectedRouteGuarda = ({
  isAllowed,
  children,
  redirectTo = "/",
}) => {
  const { loading } = useAuth();
  if (loading)
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#367ed6" size={90} />
        </div>
      </>
    );
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
