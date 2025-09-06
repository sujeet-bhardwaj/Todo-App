import React, { useState } from 'react'
import axios from 'axios';
import style from './AddUser.module.css'
const Adduser = () => {
  const [username,setUsername]=useState("")
  const [mobile,setMobile]=useState("")
  const AdduserHandler=()=>{
   let payload={
    userName:username,
    mobile:mobile
   }
axios.post("http://localhost:3002/",payload).then((res)=>{console.log(res)
  setUsername("")
  setMobile("")
}).catch((err)=>{console.log(err)})
  }
  return(
    <>
    <h2 className={style.title}>
     Add User Page 
    </h2>
    <div className={style.container}>
      <div className={style.name}>
  <label className={style.userName}>userName:</label>
   <input type="text" onChange={(e)=>{
      setUsername(e.target.value)
   }} value={username} className={style.inputuser}/>
   </div>
   <div className={style.mobile}>
  <label htmlFor="" className={style.lmobile}>Mobile:</label>
  <input type="text" value={mobile} onChange={(e)=>{
      setMobile(e.target.value)}} className={style.inputmobile}/>
      </div>
      <div className={style.button}>
<button onClick={AdduserHandler} className={style.buttonhover}>Add User</button>
</div>
    </div>
   
</>
  )
}
export default Adduser
