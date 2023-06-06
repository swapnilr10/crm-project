import axios from 'axios';

const API_URL = "http://localhost:8082/api/v1/contact/";


export const addUser = async (data) => {
    try {
        return await axios.post(`${API_URL}/add`, data);
    } catch (error) {
        console.log('Error while calling getUsers api ', error.message);
    }
}

export const getUsers = async() => {
    try {
        return await axios.get(`${API_URL}get`);
    } catch(error) {
        console.log('Error while calling getUsers api ', error.message)
    }
}

export const getUser = async(id) => {
    try{
        return await axios.get(`${API_URL}getById?contactId=${id}`)
    } catch(error) {
        console.log('Error while calling getUsers api ', error.message)
    }
}

export const editUser = async(data, id) => {
    try{
        return await axios.put(`${API_URL}update/${id}`, data)
    } catch(error) {
        console.log('Error while calling getUsers api ', error.message)
    }
}

export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}delete/${id}`);
    }catch(error) {
        console.log(error.message)
    }
}