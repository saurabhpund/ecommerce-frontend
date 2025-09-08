import "./App.css";
import { Route, Routes } from "react-router-dom";
import CustomrRouters from "./Routers/CustomrRouters.jsx";
import AdminRouters from "./Routers/AdminRouters.jsx";

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomrRouters />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>


   
    </div>
  );
}

export default App;
