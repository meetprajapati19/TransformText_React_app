import React, { useState } from "react";
import './TextForm.css';
import Alert from './Alert';

export default function TextForm(props) {
  const [Text, SetText] = useState("");
  const handleUpClick = () => {
    let UpperText = Text.toUpperCase();
    SetText(UpperText);
    props.ShowAlert("Converted in upperCase","sucess");
  };

  const handleLowClick = () => {
    let LowerText = Text.toLowerCase();
    SetText(LowerText);
    props.ShowAlert("Converted in LowerCase","sucess");

  };

  const handleCapitalizedClick = () => {
    let CapitalizedText = Text.split("\n")
      .map(line => 
        line.split(" ")
          .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join(" ")
      )
      .join("\n");
  
    SetText(CapitalizedText);
    props.ShowAlert("Converted first character in capital of each word", "success");
  };

  const handleSentenceClick = () => {
    let SentenceText = Text.split(".").map((word) => {
      let i = 0;
      if (word.charAt(i) === " ") {
        i++;
      }
      return word.charAt(i).toUpperCase() + word.slice(i + 1).toLowerCase();
    })
      .join(".");
    SetText(SentenceText);
    props.ShowAlert("Converted text in sentence","sucess");
  };

  const handleRemoveExtraSpaceClick = () => {
    let RemoveExtraSpaceText = Text.split(/[ ]+/);
    SetText(RemoveExtraSpaceText.join(" "));
    props.ShowAlert("Removed extra space ","sucess");

  };


  const handleCopyClick = () => {
    
    navigator.clipboard.writeText(Text);
    props.ShowAlert("Text copy to clipboard","sucess");

  };

  const handleClear = () => {
    SetText("");
    props.ShowAlert("Text clear","sucess");

  };

  const handleOnChange = (e) => {
    SetText(e.target.value);
  };


  return (
    <>
    <Alert Alert={props.alert}/>
    <div className={`container my-3 ${props.mode === 'light' ? 'backgroundColor-light' : 'backgroundColor-dark'}`}   >
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          Enter text
        </label>
        <textarea
          className={`form-control ${props.mode === 'light' ? 'backgroundColor-light' : 'backgroundColor-dark '}`}
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Type or Paste your content here"
          value={Text}
          onChange={handleOnChange}
          // style={{backgroundColor:'#0d1b3b',color:'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleCapitalizedClick}>
        Capitalized Case
      </button>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleSentenceClick}>
        Sentence
      </button>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleRemoveExtraSpaceClick}>
        Remove Extra Space
      </button>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleCopyClick}>
        Copy
      </button>
      <button className="btn btn-primary mx-1 my-1" disabled={Text.length===0} onClick={handleClear}>
        Clear
      </button>
      <p className="my-3">Character Count: {Text.length} | Word Count: {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} | Sentence Count: {Text.split(".").filter((element)=>{return element.length!==0}).length} | Line Count: {Text.split("\n").filter((element)=>{return element.length!==0}).length}</p>
      <p>Time to read Text: {0.008 * (Text.split(" ").filter((element)=>{return element.length!==0}).length) * 60}s</p>
    </div>
    </>
  );
}
