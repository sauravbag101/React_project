import React,{useState} from 'react';

export default function Textform(props) {
    const handleupchange = ()=>{
        console.log("uppercase was clicked, " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into uppercase","Success")
    }
    const handledownchange = ()=>{
        console.log("downcase was clicked, " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted into Lowercase","Success")

    }
    const handleOnclear = ()=>{
        console.log("clear was clicked, " + text)
        let newText = '';
        setText(newText)
        props.showAlert("Converted into clear","Success")

    } 
    const handleOnchange = (event)=>{
        console.log("value is change")
        setText(event.target.value)
        props.showAlert("write something ","Success")

    }
    // in copy code have 2 option
    const handleCopy = ()=>{
      // console.log("I am copy");
      // var text = document.getElementById("mybox");
      // text.select();
      // navigator.clipboard.writeText(text.value);
      // document.getSelection().removeAllRanges();
      // props.showAlert("copied successfully","success");
      navigator.clipboard.writeText(text);
      props.showAlert("copied successfully","success");
  }
  // const handleCopy = () => {
  //   console.log("I am copy");
  //   var textArea = document.getElementById("mybox");
  //   textArea.select();
  //   // document.execCommand("copy");
  //   document.getSelection().removeAllRanges();
  //   props.showAlert("Converted into Copy","Success")

  // };

  const handleExtraSpace = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Converted into no space","Success")

  }
    const [text, setText] = useState('enter your text here');
    // setText("this is new"); 
  return (
    <>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
  <label htmlFor="mybox" className="form-label"></label>
  <textarea className="form-control" id="mybox" value={text} onChange={handleOnchange} style={{background:props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}} rows="5"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleupchange} >convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handledownchange} >convert to downcase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-0 my-1" onClick={handleOnclear} >Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy</button>
      <button disabled={text.length===0} className="btn btn-primary mx-0 my-1" onClick={handleExtraSpace} >Remove Extra space</button>



      </div>
      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary here</h1>
        <p>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes read</p>
        <h2><strong>Preview</strong></h2>
        <p>{text.length>0?text:'type Something to Preview here'}</p>
      </div>
      </>
  )
}
