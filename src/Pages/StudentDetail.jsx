import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudents } from "../Redux/StudentReducer/action";

export const StudentDetail = () => {
  const {id}=useParams()
  
  return (
     
    <div className={"student-card"}>
      <h1 className="student-id">{id}</h1>
      {/* <h1>{name}</h1> */}
    </div>
  );
};