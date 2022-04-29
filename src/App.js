import {  useState , useEffect } from "react";
import { getUsers } from "./Services";
import Axios from 'axios';
import Table from "./component/table";
function App() {

    const [users , setUsers] = useState([]) 

    const getusers = async() =>{
	    const users = await getUsers();
	    setUsers(users)
    }
 
    useEffect(()=>{
	getusers();
    } , []);

    return(
	<div className="container">
	    <Table users={users}/>
	</div>
    )
 
}

export default App;
