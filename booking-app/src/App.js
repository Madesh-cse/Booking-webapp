
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/root";
import Home from "./pages/Home";

const router = createBrowserRouter([

  {path:'/',element:<RootPage/>,children:[

    {path:'',element:<Home/>}
  ]}
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
