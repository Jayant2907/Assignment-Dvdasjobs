import React, { useEffect, useState } from 'react'
import BirthMonth from '../BirthMonth/BirthMonth'
import CountryCode from '../CountryCode/CountryCode'
import "./SignupForm.css"
import axios from "axios"
import cors from "cors"
const SignupForm = () => {

const [firstName, setFirstName] =useState('')
const [lastName, setLastName] =useState('')
const [email, setEmail] =useState('')
const [password, setPassword] =useState('') 
const [phone, setPhone] =useState('')
const [day,setDay] =useState('')
const [year,setYear] =useState('')
const [month,setMonth] =useState('')
const [gender,setGender] =useState('')
const [toggle,setToggle] =useState(false)
const [showalert,setShowAlert]=useState(false)

    useEffect(()=>{console.log(month)},[month])
    const  handleSubmit=async(e) => {
        e.preventDefault()
        console.log(month,"month")
        setEmail(email + '@yahoo.com')
        setPhone('+91' + phone)
        let dob=month + '/' + day + '/' +year
        let formData={firstName:firstName,lastName:lastName,email:email,password:password,dob:dob,phone:phone}
        await axios.post(`https://atologistinfotech.com/api/register.php/${firstName}/${lastName}/${email}/${password}/${phone}/${dob}`,formData)
        .then((res) =>console.log(res))
    }

    return (
        <div  className="signup-form">
            <div className="signup-form-header">
                <h2>Sign Up</h2>
                <h3>Create a Yahoo email address</h3>
                </div>
                <div className="form">
                    <div className="row">
                    <input type="text" placeholder="First Name" className="name" onChange={(e)=>setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" className="name" onChange={(e)=>setLastName(e.target.value)} />
                    </div>
                    <div className="row-email" onClick={()=>setShowAlert(true)} onMouseLeave={()=>setShowAlert(false)}>
                    <input type="text" placeholder="Email" className="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input disabled type="text" placeholder="@yahoo.com" className="email" />
                    </div>
                    {showalert && <h3 style={{color:"#003abc",width:"100%",textAlign:"left",marginTop:0,fontWeight:"400"}}>I want to use my current email address</h3>}
                    <input  type="password" placeholder="Password" className="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="row">
                        <CountryCode/>
                        <input type="phone" placeholder="Mobile Phone Number" className="phone" onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div className="row-dob">
                    <BirthMonth setMonth={setMonth}/>
                        <input type="text" placeholder="Day" className="day" onChange={(e)=>setDay(e.target.value)}/>
                        <input type="text" placeholder="Year" className="day" onChange={(e)=>setYear(e.target.value)}/>
                    </div>
                    <input  type="text" placeholder="Gender (optional)" className="password" onChange={(e)=>setGender(e.target.value)}/>

                </div>
                <h3 style={{margin:"0px"}}>By clicking "Continue", you agree to the <span>Terms</span> and <span>Privacy Policy</span></h3>
                <button className="signup-button" onClick={handleSubmit}> Continue</button>
                <h3 style={{marginBottom:30}}>Already have an account <span>Sign In</span> </h3>
            
        </div>
    )
}

export default SignupForm
