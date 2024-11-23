import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    // ถ้าไม่ได้ล็อกอิน ให้เปลี่ยนเส้นทางไปหน้า Login
    return <Navigate to="/" />;
  }
  // ถ้าล็อกอินแล้ว ให้แสดงเนื้อหาที่ต้องการ
  return children;
}

export default ProtectedRoute;