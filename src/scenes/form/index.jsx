import React, {useState} from 'react'
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import {addUser} from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
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

function Form() {

    const [user, setUser] = useState(initialValue);
    const { first_Name, last_Name, email_Id, contact } = user;
    let navigate = useNavigate();

//first we store the data/input into the user (...user because it will not affect the initial values) 
// [e.target.name]: e.target.value} is key : value pair, e.target.value is a variable so we put it in [] bracket.
    
    const onValueChange = (e) => {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user)
    } 

    //then we post the data from user to the api
    const addUserDetails = async () => {
        await addUser(user)
        navigate('/team');
    }   

    return (
        <div>
            <Container>
            <Typography variant="h4">Add Contact</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                {/* we need to change name */}
                <Input onChange={(e) => onValueChange(e)} name='first_Name' value={first_Name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='last_Name' value={last_Name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email_Id' value={email_Id} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='contact' value={contact} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Contact</Button>
            </FormControl>
            </Container>
        </div>
    )
}

export default Form;
