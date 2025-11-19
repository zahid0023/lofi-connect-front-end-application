import { Outlet } from "react-router";
import { Header } from "./Header";

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
