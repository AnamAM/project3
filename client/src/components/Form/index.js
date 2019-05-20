import React from "react";
import './style.css'

export function Input(props) {
    return (
        // <div className="input-field col s12"> 
        // <div className="input-field col s12 m6 l6">
        <div >
            <input style={{ color: "white" }} className="datepicker" type="text" {...props} />
        </div>
    )
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn waves-effect waves-light" type="submit" name="action">
         {props.children}
        </button>
    )
}

export function InputBox(props) {
    return (
        <input type="text" required="" placeholder={props.placeholder} maxlength="100" class="has-custom-focus style-js501fnninput" id="comp-jkl0ch6winput" value="" style={{ paddingLeft: "12px" }} {...props} />

    )
}
export function CardButton(props) {
    return (
        <button {...props} className="waves-effect waves-light btn-small button" style={{ width: 140, marginTop: "90px", marginLeft: "130px" }}>
            {props.children}
        </button>

    )
}

