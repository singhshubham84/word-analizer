import React, { useState } from "react";
import './textForm.css';

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClear = () => {
        setText("")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleCapitalize = () => {
        let newText = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(newText)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
    }
    const handleAlternate = () => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                result += text[i].toLowerCase();
            } else {
                result += text[i].toUpperCase();
            }
        }
        setText(result)
    }


    const [text, setText] = useState("");

    return (
        <>
            <div className="container">
                <textarea id="inputText" placeholder="Enter your text here..." value={text} onChange={handOnChange}></textarea>

                <div className="button-group">
                    <button onClick={handleUpClick}> UPPER CASE </button>
                    <button onClick={handleLoClick}> lower case </button>
                    <button onClick={handleCapitalize}> Capitalize Case </button>
                    <button onClick={handleCopy}> Copy Text </button>
                    <button onClick={handleAlternate}> aLtErNaTe cAsE </button>
                    <button onClick={handleExtraSpace}> Remove Space </button>
                    <button onClick={handleClear}> ClearAll </button>
                </div>

                <div className="summary">
                    <h2>Your Text Summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters </p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <div className="preview">
                        <h3>Preview</h3>
                        <p>{text}</p>
                    </div>

                </div>
            </div>
        </>
    );
}
