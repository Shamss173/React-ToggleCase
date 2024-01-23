import React, { useState } from 'react'

export default function Hook(props) {
    const [text, setText] = useState("");
    let newText = "";


    const Lowercase = () => {
        newText = text.toLowerCase();
        setText(newText);
    }
    const Uppercase = () => {
        newText = text.toUpperCase();
        setText(newText);
    }
    const onChange = (event) => {
        setText(event.target.value);
    }
    const clean = () => {
        setText("")
    }
    return (

        <div className='container'>
            <h2 style={{ borderBottomStyle: 'solid', width: '22%' }} className='heading-prop'>
                {props.heading}
            </h2>
            <div className='my-3'>
                <textarea className="form-control" value={text} placeholder='Enter Text Here' onChange={onChange} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>

            <button className='btn btn-primary me-2' onClick={Uppercase}> Upper Case</button>
            <button className='btn btn-secondary me-2' onClick={Lowercase}> Lower Case</button>
            <button className='btn btn-danger me-2' onClick={clean}> Clear text area</button>

        </div>
    );
}
