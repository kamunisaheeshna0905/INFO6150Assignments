import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import AdminPage from './AdminPages/AdminHomePage';
import LoginPage from './LoginPage/LoginPage';
import EmployeeDetails from './EmployeePages/EmployeeDetails';
import CreateJob from './AdminPages/CreateJob';
import EmployeeAbout from './EmployeePages/EmployeeAbout';
import EmployeeHome from './EmployeePages/EmployeeHome';
import EmployeeJobListings from './EmployeePages/EmployeeJobListings';
import EmployeeContact from './EmployeePages/EmployeeContact';
import CompanyShowcase from './EmployeePages/CompanyShowcase';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
    return isLoggedIn ? children : <Navigate to="/" replace />;
  };
  
  

const App = () => {
    
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    {/* <Route path="/AdminHomePage" element={
                        <PrivateRoute allowedTypes={['admin']}>
                            <AdminPage />
                        </PrivateRoute>
                    } /> */}
                    <Route path="/AdminHomePage" element={<ProtectedRoute><AdminPage /></ProtectedRoute>}/>
                    <Route path="/AdminHomePage/CreateJob" element={<ProtectedRoute><CreateJob/></ProtectedRoute>}/>
                    {/* <Route path="/EmployeeDetails" element={<ProtectedRoute><EmployeeDetails/></ProtectedRoute>} /> */}
                    <Route path='/EmployeeDetails' element={<ProtectedRoute><EmployeeHome/></ProtectedRoute>}/>
                    <Route path='/EmployeeDetails/about' element={<ProtectedRoute><EmployeeAbout/></ProtectedRoute>}/>
                    <Route path='/EmployeeDetails/contact' element={<ProtectedRoute><EmployeeContact/></ProtectedRoute>}/>
                    <Route path='/EmployeeDetails/jobListings' element={<ProtectedRoute><EmployeeJobListings/></ProtectedRoute>}/>
                    <Route path='/EmployeeDetails/companyShowcase' element={<ProtectedRoute><CompanyShowcase/></ProtectedRoute>}/>
                    <Route path="/EmployeeDetails/jobs" element={<ProtectedRoute><EmployeeDetails/></ProtectedRoute>} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
