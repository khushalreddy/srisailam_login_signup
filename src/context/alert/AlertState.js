import React , {useReducer} from "react";
import AlertContext from "./alertContext";
import AlertReducer from './alertReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    SET_ALERT,
    REMOVE_ALERT
}from '../types'

const AlertState = (props) =>{
 const initalState = []
 const [state,dispatch] = useReducer(AlertReducer,initalState);

 //Set Alert
    const setAlert = (msg,type,timeout = 5000) => {
        const id = uuidv4();
        dispatch({
            type : SET_ALERT,
            payload : {msg,type,id}
        })
        setTimeout(() => dispatch({type:REMOVE_ALERT,payload:id}),5000)
    }
 // Register User


 return (
     <AlertContext.Provider
     value = {{
         alerts:state,
         setAlert 
     }}
     >
         {props.children}
     </AlertContext.Provider>
 )
}

export default AlertState