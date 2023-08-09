import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Login } from "./Login";
import {StudentDetail} from "./StudentDetail"
export const MainRoutes = () => {
  return <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/students/:id" element={<StudentDetail/>}/>
  </Routes>;
};