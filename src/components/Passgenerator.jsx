import React, { useState } from 'react'
import '../App.css'
import { LC, NC,UC,SC } from './Passchar'
const Passgenerator = () => {
    let [uppercase,setUppsercase]=useState(false)
    let [lowerercase,setLowerercase]=useState(false)
    let [numbers,setNumber]=useState(false)
    let [symbols,setSymbols]=useState(false)
    let[passlength,setPasslength]=useState(10)
    let [fpass,setFpass]=useState()
    let createpassword=()=>{
        let finalpass=''
        let charset=''
        if(uppercase|| lowerercase||numbers||symbols){
            if(uppercase) charset+=UC;
            if(lowerercase) charset+=LC;
            if(numbers) charset+=NC;
            if(symbols) charset+=SC;
           for(let i=0;i<passlength;i++){
            finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
           }
           setFpass(finalpass)
        }
        else{
            alert('please one checkbox')
        }
    }
    let copypass=()=>{
        navigator.clipboard.writeText(fpass)
    }
  return (
    <div className='passbox'>
    <h2>Password Generator</h2>
    <div className='passboxin'>
        <input type="text"readOnly value={fpass}/><button onClick={copypass}>Copy</button>
    </div>
    <div className="passlength">
        <label>Password Length</label>
        <input type="number"max={20}min={10} value={passlength} onChange={(e)=>setPasslength(e.target.value)}/>
    </div>
    <div className="passlength">
        <label>Include Uppercase letters</label>
        <input type="checkbox"checked={uppercase}onChange={()=>setUppsercase(!uppercase)} />
    </div>
    <div className="passlength">
        <label>Include lowercase letters</label>
        <input type="checkbox"checked={lowerercase}onChange={()=>setLowerercase(!lowerercase)} />
    </div>
    <div className="passlength">
        <label>Include symbols</label>
        <input type="checkbox"checked={symbols}onChange={()=>setSymbols(!symbols)} />
    </div>
    <div className="passlength">
        <label>Include numbers</label>
        <input type="checkbox"checked={numbers}onChange={()=>setNumber(!numbers)} />
    </div>
    <button className='btn'onClick={createpassword}>Generate Password</button>
    </div>
  )
}

export default Passgenerator;
