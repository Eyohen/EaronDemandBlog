/* eslint-disable react/prop-types */
// ProtectedRoute.js and AdminProtectedRoute.js
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const ProtectedRoute = ({ children }) => {
  console.log('This is protectedRoute')
  const { user, loading} = useContext(UserContext);


  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator
  }


  if (!user) {
    return <Navigate to="/login" replace />;
  } 



  return children;
};

// export const AdminProtectedRoute = ({ children }) => {
//   const { user, loading } = useContext(UserContext);

//   if (loading) {
//     return <div>Loading...</div>; // Show loading state
//   }

//   if (!user || user.role !== "admin") {
//     return <Navigate to="/admin/login" replace />;
//   }

//  return children;
// };
