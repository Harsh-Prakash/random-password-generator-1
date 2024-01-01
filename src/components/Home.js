import React from 'react'
import { useState } from 'react'

const Home = (props) => {
    const [text, setText] = useState("")
    const characters=()=>{
        const ch="abcdefghijklmnopqrstuvwxyz"
        let i,n,w="";
        for(i=0;i<32;i++)
        {
           n=Math.floor(Math.random()*26)
           w=w+ch[n]; 
        }
        setText(w)
    }
    const charnum=()=>{
        const ch="abcdefghijklmnopqrstuvwxyz1234567890"
        let i,n,w="";
        for(i=0;i<32;i++)
        {
           n=Math.floor(Math.random()*36)
           w=w+ch[n]; 
        }
        setText(w)
    }
    const charnumsp=()=>{
        const ch="abcdefghijklmnopqrstuvwxyz1234567890`~!@#$%^&*()-_=+-*/?<>"
        let i,n,w="";
        for(i=0;i<32;i++)
        {
           n=Math.floor(Math.random()*58)
           w=w+ch[n]; 
        }
        setText(w)
    }
    const sp=()=>{
        const ch="`~!@#$%^&*()-_=+-*/?<>"
        let i,n,w="";
        for(i=0;i<32;i++)
        {
           n=Math.floor(Math.random()*12)
           w=w+ch[n]; 
        }
        setText(w)
    }
    const handleClear = () => {
        let newText = ""
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setText("")
    }

    return (
    <div>
      <div className="container" >
                    <h1 >{props.heading}</h1>
                    <div className="mb-3 my-3">
                        <textarea onChange={handleOnChange} className="form-control" value={text} placeholder='Your Secured Password will be Shown Here'  id="myBox" rows="8"></textarea>
                    </div>
                    {/* <div className="mb-3 my-3">
                        <input type="text" className='w-25 ml-5'/>
                        <button onClick={handleCopy}  className="btn btn-primary mx-5 my-1" >Enter</button>
                    </div> */}
                    <button onClick={characters} className="btn btn-primary mx-4 my-1" >Only Characters</button>
                    <button onClick={charnum}  className="btn btn-primary mx-4 my-1" >Characters + Numbers</button>
                    <button onClick={charnumsp}  className="btn btn-primary mx-4 my-1" >Characters + Numbers + Special Characters</button>
                    <button onClick={sp}  className="btn btn-primary mx-1 my-4" >Sepcial Character</button>
                    <button onClick={handleCopy}  className="btn btn-primary mx-4 my-1" >Copy</button>
                    <button onClick={handleClear}  className="btn btn-primary mx-4 my-1" >Clear</button>
                </div >
            </div >

  )
}

export default Home
