import React,{useState,useEffect} from 'react'
import style from './EditPage.module.css'
import axios from 'axios';
const EditPage = () => {
    const [user, setUser] = useState([]);
    const [flag,setFlag]=useState(false)
 const edithandler=(e,_id,key)=>{
  const editeddata=user.find((item)=>item._id===_id)
  let payload={...editeddata,[key]:e.target.innerHTML}
  axios.put("http://localhost:3002/",payload).then((res)=>{
    setUser(editeddata)
    setFlag(!flag)
  })
 }


useEffect(() => {
    axios.get("http://localhost:3002/") 
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log("error is", err);
      });
  }, [flag]);

  return (
    <>
    <h2 className={style.title}>
    Edit page 
    </h2>

      <table border="1" className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Mobile</th>
          
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {user.length >0?user && user.map((item, index) => (
            <tr key={item._id }>
              <td>{item._id }</td>
              <td contentEditable suppressContentEditableWarning onBlur={(e)=>edithandler(e,item._id,"userName")} className={style.common}>{item.userName}</td>
              <td contentEditable suppressContentEditableWarning  onBlur={(e)=>edithandler(e,item._id,"mobile")} className={style.common} > {item.mobile}</td>
           
            </tr>
          )):"not found data"}
        </tbody>
      </table>
</>
  )
}

export default EditPage
