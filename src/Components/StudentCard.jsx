import { useNavigate } from "react-router-dom";
import styled from "styled-components"
export const StudentCard = ({id,name,batch,student_code,score,green_card,Poster}) => {
  const navigate=useNavigate()
  const handleDetail=()=>{
    navigate(`/students/${id}`)
  }
  return (
    <DIV className={"student-card"}>
      <img src={Poster} alt="Imag" className="student-image" />
      <h3 className="student-name">{name}</h3>
      <p className="student-batch">{batch}</p>
      <h2 className="student-green-card">{green_card}</h2>
      <button className="student-detail" onClick={handleDetail}>View Details</button>
    </DIV>
  );
};
const DIV=styled.div`
border:1px solid gray;
padding:10px;
width:250px;
img{
  width:200px;
  height:200px;
}
h2{
  color:green;
}
`;