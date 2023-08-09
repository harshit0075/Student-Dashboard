import {useDispatch, useSelector} from "react-redux"
import { StudentCard } from "./StudentCard";
import { useEffect } from "react";
import { getStudents } from "../Redux/StudentReducer/action";
import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components"

export const StudentList = () => {
  const [searchParams]=useSearchParams()
const students=useSelector((store)=>store.studentReducer.students)

const location=useLocation()
const dispatch=useDispatch()
let paramsObj={
  params:{
    batch:searchParams.getAll("batch"),
    _sort:searchParams.get("order")&&"green_card",
    _order:searchParams.get("order"),
    _limit:10,
    _page:searchParams.get("page")
  }
}
useEffect(()=>{
  dispatch(getStudents(paramsObj))
},[location.search])

  return (
    <div>
      <DIV data-testid="student-list">
        {students.length>0&&students.map((el)=>{
          return <StudentCard key={el.id}{...el}/>
        })}
      </DIV>
    </div>
  );
};

const DIV=styled.div`
display:grid;
grid-template-columns: auto auto auto auto;
grid-gap:10px;
margin:20px;
width:85%;

`;