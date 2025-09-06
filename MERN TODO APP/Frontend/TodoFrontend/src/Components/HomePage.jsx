import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' // FIXED: react-router
import axios from "axios"
import style from './HomePage.module.css'

const HomePage = () => {
  const [user, setUser] = useState([]);
  const [flag,setFlag]=useState(false)
  useEffect(() => {
    axios.get("http://localhost:3002/") // FIXED: missing slashes in URL
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log("error is", err);
      });
  }, [flag]);


const deletehandler=(_id)=>{
  console.log("id ",_id)
 let payload={
  _id:_id
 }
 axios.delete("http://localhost:3002/",{ data:payload}).then((res)=>setFlag(!flag)).catch((err)=>console.log(err))

}



  return (
    <div>
      <h1 className={style.title}> Home Page</h1>
      <br />
      <table border="1" className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>DeleteColum</th>
          </tr>
        </thead>
        <tbody>
          {user && user.map((item) => (
            <tr key={item._id }>
              <td>{item._id }</td>
              <td>{item.userName}</td>
              <td>{item.mobile}</td>
              <td  > <button className={style.button} onClick={()=>deletehandler(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
