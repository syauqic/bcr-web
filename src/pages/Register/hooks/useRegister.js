import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { registerSuccess, registerStart, registerFailure } from '../../../Redux/Register/slice';
import { useNavigate } from "react-router-dom";


function UseRegister () {
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.register);

    const [formValues, setFormValues] = useState({
        name: null,
        email: null,
        password: null,
    });
    

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            dispatch(registerStart());
            
            const response = await axios.post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', formValues)
            
            dispatch(registerSuccess(response.data));
            console.log("response.data> ", response.data);
            navigate("/login")
        }catch (error) {
            dispatch(registerFailure());
           
        }
    };

   

    return {
        formValues,
        loading,
        setFormValues,
        handleSubmit,
    }
}


export default UseRegister;