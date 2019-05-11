import React from "react";
import './style.css'

export function Input(props) {
    return (
        // <div className="input-field col s12"> 
        // <div className="input-field col s12 m6 l6">
        <div >
            <input  style={{color:'white'}} className="datepicker" type="text" {...props} />
        </div>
    )
}

export function DropDown() {
    return (
        <div >
            {/* className="input-field col s6"> */}
            <select multiple>
                <option value="1">Wrapping</option>
                <option value="2">Tinting</option>
                <option value="3">Powder Coating</option>
                <option value="4">Caliper Painting</option>
                <option value="5">Tire Lettering & Stickers</option>
            </select>
            <label>Select Service(s) *</label>
        </div>
    )
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn waves-effect waves-light" type="submit" name="action">
            <i className="material-icons right">send</i>
            {props.children}
        </button>
    )
}

export function InputBox(props) {
    return (
            <input type="text" required="" placeholder={props.placeholder} maxlength="100" class="has-custom-focus style-js501fnninput" id="comp-jkl0ch6winput" value="" style={{ paddingLeft: "12px" }} {...props}/>

        )
}