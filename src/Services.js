import Axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    try {
	const resp = await Axios.get(API_URL)
	const data  =  await resp.data;
	return data	

    } catch (error) {
        console.error(error);
    }
}

export const GetUser = async (id) =>{
    try{
	const resp = await Axios.get(`${API_URL}/${ id }`);
	const data  =  await resp.data;
	return data;
    }catch(error){
	console.error(error)
    }
}


