import React from "react";
import axios from 'axios';
import "../../assets/css/login.css"
import authLayout from "../../hoc/authLayout";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

  const [state, setState] = React.useState({
    adminId: "",
    password: "",
    data: null,
    loading: false,
    error: null
  });

  const handleChange = (e) => {
    var key = e.target;
    setState(prevState => ({
      ...prevState,
      [key.id]: key.value
    }));
  }

  

  const loginCall = () => {
    setState({ loading: true });
    // console.log('login button called')
    // console.log('admin Id = = '+ state.adminId);
    // console.log('admin Id = = '+ state.password);
    const param={
      PMM2023Operation:{
        ws_log_input:{
          ws_adm_id:state.adminId,
          ws_adm_pswd:state.password
        }
      }
    }
    navigate('/');
    axios.get('http://10.123.79.112:1026/u/home/json/pmm2023',param)
    .then(response => {
      setState(prevState => ({
        ...prevState,
        data: response,
        loading: false
      }));
    })
    .catch(error => {
      setState(prevState => ({
        ...prevState,
        error: error.message,
        loading: false
      }));
    });
  }

  const { data, loading, error } = state;

  return (
    <>
      <form className="login-form">
        <div className="d-flex align-items-center my-4">
          <h1 className="text-center fw-normal mb-0 me-3">Sign In</h1>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" >Admin Id</label>
          <input type="text" id="adminId" className="form-control form-control-lg"
          placeholder="Enter a valid Admin Id" onChange={handleChange} value={state.adminId} />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" >Password</label>
          <input type="password" id="password" className="form-control form-control-lg"
          placeholder="Enter password" onChange={handleChange} value={state.password}/>
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
          <button onClick={loginCall} type="button" className="btn btn-primary btn-lg">Login</button>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
        </div>
      </form>
    </>
  )
}

export default authLayout(LoginPage);
