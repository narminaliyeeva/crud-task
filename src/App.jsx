import axios from 'axios'

import './App.css'
import React, { useEffect, useState } from 'react'

function App() {
    const [data, setdata] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/users')
      .then(res=>setdata(res.data))
    }, [data])

    
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map(item=>{
                    return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td><button onClick={()=>deleteData(item.id)}> delete</button></td>
                </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default App