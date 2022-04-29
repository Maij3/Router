import {
    useEffect
} from "react";
import Axios from 'axios';


export const getUsers = async () => {
    try {
	const resp = await Axios.get(`https://jsonplaceholder.typicode.com/users`)
	const data  =  await resp.data;
	return data	

    } catch (error) {
        console.error(error);
    }
}
