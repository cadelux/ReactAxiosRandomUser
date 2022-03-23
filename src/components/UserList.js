import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import SingleUser from './SingleUser'

function UserList(){

    const [users,setUsers]=useState([])

    const fetchUsers=async()=>{
        const response= await axios.get("https://randomuser.me/api/?results=30") 
        setUsers(response.data.results) // burada datayý bizim users deðiþkenine aktardýk.
    }

    useEffect(()=>{
        fetchUsers()
    },[])

    
    return(
        <div>
            <div className="userList">
                <ul>
                    {/* her maplediðinde birde özel key vermen lazým. */}
                    {users.map((user,id)=>(
                        <li><SingleUser key={id} user={user}/></li>
                    ))}
                </ul>
            </div>
            
        </div>
    )
}

export default UserList