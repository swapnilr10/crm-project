import React, {useState, useEffect} from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import {getUser, editUser} from '../../service/api';

const initialValues = {
    first_Name: '',
    last_Name: '',
    email_Id: '',
    contact: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;`

function EditUser() {

    const [user, setUser] = useState(initialValues);

    //const { first_Name, last_Name, email_Id, contact } = user;
    const navigate = useNavigate();
    let {contact_id} = useParams();
    
    // let navigate = useNavigate();

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async() => {
            const response = await getUser(contact_id);
        setUser(response.data.responseObject);
        console.log(response.data.responseObject)
        } 
    

    // const editUserDetails = async() => {
    //     const response = await editUser(id, user);
    //     navigate('/team');
    // }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetails = async(e) =>  {
        await editUser(user, contact_id);
        navigate('/team')
    }


    return (
        <div>
            <Container>
            <Typography variant="h4">Edit contact</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='first_Name' value = {user.first_Name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='last_Name' value = {user.last_Name} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email_Id' value = {user.email_Id} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact' value = {user.contact} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails(user.contact_id)}>Update contact</Button>
            </FormControl>
            </Container>
        </div>
    )
}

export default EditUser;