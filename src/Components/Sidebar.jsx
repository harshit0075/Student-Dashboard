import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getStudents } from "../Redux/StudentReducer/action";
import {useSearchParams} from "react-router-dom"

export const Sidebar = () => {
    const [searchParams,setSearchParams]= useSearchParams()
    const initialOrder=searchParams.get("order")
    const[order,setOrder]=useState(initialOrder||"")
    const initialBatch=searchParams.getAll("batch")
    const[batch,setBatch]=useState(initialBatch||[])
    const dispatch=useDispatch()
    const initialPage=searchParams.get("page")
    const[page,setPage]=useState(+initialPage||1)

    useEffect(()=>{
      let params={
        batch,
        page
      }
      order&&(params.order=order)
      setSearchParams(params)
    },[batch,order,page])
     const handleChange=(e)=>{
         const {value}=e.target
         let newBatch=[...batch]
         if(newBatch.includes(value)){
          newBatch=newBatch.filter(el=>el!==value)
         }else{
          newBatch.push(value)
         }
         setBatch(newBatch)
     }
    const handlePage=(value)=>{
      setPage((prev)=>{
        if(prev+value===0){
          return prev
        }
        return prev+value
      })
    }
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input data-testid="batch-web101" type="checkbox"  value={"WEB101"}  onChange={handleChange}  checked={batch.includes("WEB101")}/>
        <label>WEB-101</label>
        <br />
        <br />
        <input data-testid="batch-js201" type="checkbox" value={"JS201"}  onChange={handleChange} checked={batch.includes("JS201")}/>
        <label>JS-201</label>
        <br />
        <br />
        <input data-testid="batch-rct101" type="checkbox" value={"RCT101"}  onChange={handleChange} checked={batch.includes("RCT101")}/>
        <label>RCT101</label>
        <br />
        <br />
        <input data-testid="batch-rct211" type="checkbox"  value={"RCT211"} onChange={handleChange} checked={batch.includes("RCT211")}/>
        <label>RCT211</label>
        <br />
        <br />
        <input data-testid="batch-nxm101" type="checkbox"  value={"NXM101"} onChange={handleChange} checked={batch.includes("NXM101")}/>
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev" onClick={()=>{
          handlePage(-1)
        }}>Previous</button>
        <button data-testid="page-next" onClick={()=>{
          handlePage(1)
        }}>Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;