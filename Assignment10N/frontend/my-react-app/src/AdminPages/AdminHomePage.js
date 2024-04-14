import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../states/userSlice';
import { useNavigate } from 'react-router-dom';
import { logout } from '../states/userSlice';

const AdminHomePage = () => {
    const navigate = useNavigate();
    const handleAddJobClick = () => {
        navigate('/AdminHomePage/CreateJob');
      };

    const dispatch = useDispatch();
    const { users, isFetchingUsers, error } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
      };


    useEffect(() => {
        const fetchUsers = async () => {
            dispatch(fetchUsersStart());
            try {
                const response = await axios.get('http://localhost:3002/user/all');
                dispatch(fetchUsersSuccess(response.data));
            } catch (error) {
                dispatch(fetchUsersFailure(error.toString()));
            }
        };

        fetchUsers();
    }, [dispatch]);

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>Admin Page - User Details</Typography>
            
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {isFetchingUsers ? (
                            <TableRow>
                                <TableCell colSpan={3} style={{ textAlign: 'center' }}>
                                    Loading...
                                </TableCell>
                            </TableRow>
                        ) : error ? (
                            <TableRow>
                                <TableCell colSpan={3} style={{ textAlign: 'center' }}>
                                    Error: {error}
                                </TableCell>
                            </TableRow>
                        ) : (
                            users.map((user) => (
                                <TableRow key={user._id}>
                                    <TableCell>{user.fullName}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.type}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddJobClick}
      >
        Add Job
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleLogout}
      >
        Logout
      </Button>
            </TableContainer>

        </div>
    );
};

export default AdminHomePage;
