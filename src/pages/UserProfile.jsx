import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';


const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function UserProfile(props) {
    const { user } = useContext(AuthContext);
    const [oneUser, setOneUser] = useState(user);

    const getUser = () => {
      // Get the token from the localStorage
      const storedToken = localStorage.getItem('authToken');
  
      // Send the token through the request "Authorization" Headers
      axios.get(`${API_URL}/api/users/${oneUser._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const foundUser = response.data;
        setOneUser(foundUser);
      })
      .catch((error) => console.log(error));
    };
     
    useEffect(()=> {
      getUser();
    }, []);


  return (
    <div>
         <div className="UserProfile">
            {oneUser && (
                <>
                <h1>{oneUser.name}</h1>
                <p>{oneUser.lastname}</p>
                </>
            )}

      
      {/* <AddTask refreshProject={getProject} projectId={projectId} />          

      { project && project.tasks.map((task) => <TaskCard key={task._id} {...task} /> )} 

      <Link to="/projects"><button>Back to projects</button></Link>

      <Link to={`/projects/edit/${projectId}`}><button>Edit Project</button></Link> */}
      
        </div>
    </div>
  )
}

export default UserProfile