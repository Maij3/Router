import {  useState , useEffect } from "react";
import { getUsers } from "./Services";
import Axios from 'axios';
import Table from "./component/table";
import { Routes , Route , Link  , Router} from "react-router-dom";
import User from "./component/user";


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
	<Routes>
	    <Route path="/" element = {
		    <Table users={users}/>
	    }/>
	    <Route path="/user/:id" element ={
		    <User />
	    }/>		    
	</Routes>

    )
 
}

export default App;
