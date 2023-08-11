import React,{useState} from 'react';
function Textform(props){
    const up=()=>{
        console.log("")
        let newText = text.toUpperCase();
        setText(newText)
        props.showaleart("converted to uppercase","success")
    }
    const low=()=>{
        console.log("")
        let newText = text.toLowerCase();
        setText(newText)
        props.showaleart("converted to lowercase","success")
    }
    const clr=()=>{
        console.log("")
        let newText = ("");
        setText(newText)
        props.showaleart("all cleared","success")
    }
    const bdlna=(event)=>{
        console.log("")
        setText(event.target.value)
    } 
    const [text,setText]=useState('')
    return(
        <>
        <div className="container mx-2" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                 
                 <textarea className="form-control" value={text} onChange={bdlna} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="my box" rows="8"></textarea>
                 </div>
                 <button className= "btn btn-primary mx-2" onClick={up}>convert to uppercase</button>
                 <button className= "btn btn-primary mx-2" onClick={low}>convert to lowercase</button>
                 <button className= "btn btn-primary mx-2" onClick={clr}>clear</button>
         </div>
         <div className="conatiner"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} word and {text.length} character</p>
        <p>{0.008*text.split(" ").length}Minutes read</p> 
        <h2>Preview</h2>
        <p>{text}</p>
     </div>
     </>
    )
}

export default Textform;