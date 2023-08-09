import { STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes"
import axios from "axios"

const studentRequest=()=>{
    return {type:STUDENT_REQUEST_PENDING}
}
const studentSuccess=(payload)=>{
    return {type:STUDENT_REQUEST_SUCCESS,payload}
}

const studentFailure=()=>{
    return {type:STUDENT_REQUEST_FAILURE}
}


export const getStudents=(paramObj)=>(dispatch)=>{
    dispatch(studentRequest())
   axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,paramObj).then((res)=>{
        dispatch(studentSuccess(res.data))
        return res.data
    }).catch(()=>{
        dispatch(studentFailure())
    })
}