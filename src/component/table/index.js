import React from 'react';
import uniqid from 'uniqid';
import { Link } from "react-router-dom";

function table ({
    users = {}
    }) {
    return(
	<div className="container">
	    <ul>
		{
		    users.map(item =>(
			<li key={uniqid()}>
			    <Link to={`user/${item.id}`}>{item.name}</Link>
			</li>
		    ))
		}
	    </ul>
	</div>
    ) 
}

export default table;
