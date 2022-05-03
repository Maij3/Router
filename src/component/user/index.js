import { useEffect , useState } from "react";
import { Link , useParams } from "react-router-dom";
import { GetUser } from "../../Services";

function User () {
    const { id } = useParams();
    const [user , setUser] = useState([]);

    const getUser  = async()=> {
	const usuario  = await GetUser(id);
	setUser(usuario);
    }

    console.log("User" , user)
    const {name , username , email , phone } = user;
    useEffect(()=>{
	getUser();
    }, []);

    return(
	<div className="container">
	    <Link to="/">USERS</Link>
	    <ul>
		<li>{ name }</li>
		<li>{ username }</li>
		<li>{ email }</li>
		<li>{ phone }</li>
	    </ul>
	</div>
    )
}

export default User;
