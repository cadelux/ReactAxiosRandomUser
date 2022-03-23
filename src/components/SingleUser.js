import React from 'react'
import UserList from './UserList'
function SingleUser({user}){
    return(
    <div className='single-user'>

        <img src={user.picture.large}/>

        <div className="user-info">
        <h3>{user.name.first} {user.name.last}</h3>
        <p className='user-email'>{user.email}</p>
        <div className="login">
            <p className='user-name'>Username: {user.login.username}</p>
            <p className="password">Password: {user.login.password}</p>
        </div>
        <div className="nationality">
            <p className="country">Country: {user.location.country}</p>
        </div>

        </div>
    </div>    
    )
}

export default SingleUser