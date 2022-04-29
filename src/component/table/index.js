import React from 'react';
import uniqid from 'uniqid';

function table ({
    users = {}
    }) {
    return(
	<ul>
	    {
		users.map(item =>(
		    <li key={uniqid()}>{item.name}</li>
		))
	    }
	</ul>
    ) 
}

export default table;
