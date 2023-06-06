//import { tokens } from "../../theme";
import { useState, useEffect } from 'react';
//import BackspaceSharpIcon from '@mui/icons-material/BackspaceSharp';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers, deleteUser } from '../../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const Team = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUserDetails();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getUserDetails();
    }

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data.responseListObject);
    }

  return (
      <div>
    <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users?.map((user, index) => (
                    <TRow key={user.id}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{user.first_Name}</TableCell>
                        <TableCell>{user.last_Name}</TableCell>
                        <TableCell>{user.email_Id}</TableCell>
                        <TableCell>{user.contact}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.contact_id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteUserData(user.contact_id)}>Delete</Button> 
                        </TableCell>
                    </TRow>  
                ))}
            </TableBody>
        </StyledTable>
        {/* <div>
            <button>Back</button>
        </div> */}
        </div>
  );
};

export default Team;