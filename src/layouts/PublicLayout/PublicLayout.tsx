import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <div>
      <button>მაღლა</button>
      <Outlet />
      <button>დაბლა</button>
    </div>
  );
}
