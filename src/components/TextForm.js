import React, { useState } from 'react'
import QRCode from "react-qr-code";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase!', 'success');
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase!', 'success');
    };

    const handleClean = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Cleared TextArea!', 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };



    const handleSentenceCaseClick = () => {
        let lowerCase = text.toLowerCase();
        let regex = /([^.!?]+[!?.\d\s]+)/g;
        let sentences = lowerCase.match(regex);
        let newText = sentences
            .map((sentence) => {
                return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
                    ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
                    : sentence);
            })
            .join("");
        setText(newText);
    };


    const handleCapitalizeWordClick = () => {
        let lowercase = text.toLowerCase();
        let words = lowercase.split(" ");
        let newWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        let newText = newWords.join(" ");
        setText(newText);
        props.showAlert('Capitalized Word!', 'success');
    };


    const handleExtraSpace = () => {
        let words = text.split(/[ ]+/);
        setText(words.join(" "));
        props.showAlert('Removed Extra Space!', 'success');
    };

    const handleCopyText = () => {
        let text = document.getElementById('text-convert');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard!', 'success');
    };

    const [qrValue, setQRValue] = useState('');
    const generateQR = () => {
        setQRValue(text);
    };


    const [text, setText] = useState('');
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <div>
                    <div className="container my-5">
                        <h1 >{props.heading}</h1>
                        <div className="mb-3">
                            <textarea className="form-control" value={text} onChange={handleOnChange} id="text-convert" rows="9" style={{
                                color: props.mode === 'light' ? 'black' : 'white',
                                backgroundColor: props.bgColor
                            }}></textarea>
                        </div>
                        <p>{text.split(" ").length} words and {text.length} characters </p>
                        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleSentenceCaseClick}>Sentence Case Click</button>
                        <button className="btn btn-primary mx-2" onClick={handleCapitalizeWordClick}>Capitalize Word</button>
                        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
                        <button className="btn btn-primary mx-2" onClick={generateQR}>Generate QR</button>
                        <button className="btn btn-primary mx-2" onClick={handleClean}>Clear</button>
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <div className="text">
                        <h2>Your Text Preview</h2>
                        <p>{0.01 * text.split(" ").length} Minutes to read</p>
                        <p>{text.length > 0 ? text : 'Enter Your Text To Preview.'}</p>
                    </div>
                    <div className="qrCode mx-10" style={{ display: qrValue === '' ? 'none' : 'block' }}>
                        <QRCode value={qrValue} />
                    </div>
                </div>
            </div >
        </>
    )
}
