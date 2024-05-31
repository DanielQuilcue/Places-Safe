import { Navigate, Outlet } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { useAuth } from "./src/helper";

function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading)
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <HashLoader color="#367ed6" size={90} />
        </div>
      </>
    );
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <Outlet />;
}

export default ProtectedRoute;

// import { Navigate, Outlet } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import { useAuth } from "./src/helper";

// export const ProtectedRoute = ({ user, children, redirectTo = "/"}) => {
// const { loading, isAuthenticated } = useAuth();
// if (loading)
// //     return (
// //       <>
// //         <div className="flex justify-center items-center h-screen">
// //           <HashLoader color="#367ed6" size={90} />
// //         </div>
// //       </>
// //     );
//   if(!user) {
//   return <Navigate to={redirectTo}  />;
//   }
//   return children ? children : <Outlet />
// }
