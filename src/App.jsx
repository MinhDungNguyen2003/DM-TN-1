import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      {/* <Route path="/contact-us" element={<ContactUs />}></Route> */}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;