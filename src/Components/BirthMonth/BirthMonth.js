import React from 'react'

const BirthMonth = ({setMonth}) => {
    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    console.log(months,"months")
    return (
        <select name="dob-month" onChange={(e)=>setMonth(e.target.value)} className="datefield month" style={{border:"none",overflowY:"scroll",borderBottom:"1px solid #d8dade",width:"50%",color:"#2d2d2d"}} placeholder="Birth Month">
    <option value="" >Birth Month</option>
    {months.map((month,index)=>(
        <>
        {/* <h3 style={{color:"black"}} value={month} onClick={()=>setMonth(month)}>{month}</h3> */}
        <option style={{color:"black"}} value={month} onMouseEnter={()=>setMonth(month)}>{month}</option>
        </>
    )
    )
    }

</select>
    )
}

export default BirthMonth
