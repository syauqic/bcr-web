import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { registerSuccess, registerStart, registerFailure } from '../../../Redux/Register/slice';
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


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
            swal("Registrasi anda berhasil", "Silahkan klik tombol berikut", "success");
            navigate("/login")
        }catch (error) {
            dispatch(registerFailure());
            swal("Registrasi anda gagal", "Silahkan klik tombol berikut", "error")
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