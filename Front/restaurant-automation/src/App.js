import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import TablePage from "./pages/tablePage/TablePage";
import Example from "./pages/home/Home"
import Orders from "./pages/orders/Orders";
import StaffPage from "./pages/staffPage/StaffPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <Route index element={<Login />} />
        </Route>
        <Route path="/Home">
          <Route index element={<Home />} />
        </Route>
        <Route path="/Table">
          <Route index element={<TablePage />} />
        </Route>
        <Route path="/Staff">
          <Route index element={<StaffPage />} />
        </Route>
        <Route path="/Example">
          <Route index element ={<Example />} />
        </Route>
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
