import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./Home";
import SignIn from "./SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<SignIn />} />
      <Route path="/home" element={<Home />}></Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;