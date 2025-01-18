import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div data-testid={"App"}>
      <h1>Page</h1>
      <br/>
      <Link to={'./about'}>About</Link>
      <Outlet />
    </div>
  );
};
