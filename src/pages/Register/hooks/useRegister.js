import { useEffect, useState } from "react";
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
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //logic validation
    const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
        errors.name = "Nama wajib di isi !!";
      }
    if (!values.email) {
      errors.email = "Email wajib di isi !!";
    } else if (!regex.test(values.email)) {
      errors.email = "Format email tidak sesuai!";
    }
    if (!values.password) {
      errors.password = "Password wajib di isi !!";
    } else if (values.password.length < 6) {
      errors.password = "Password harus berisikan minimal 6 karakter";
    } 
    // else if (values.password.length > 10) {
    //   errors.password = "Password hanya berisikan maksimal 10 karakter";
    // }
    return errors;
  };

  useEffect(() => {
    console.log("forms error", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
    

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

        try {
            dispatch(registerStart());
            
            const response = await axios.post('https://bootcamp-rent-cars.herokuapp.com/customer/auth/register', formValues)
            
            dispatch(registerSuccess(response.data));
            swal("Registrasi anda berhasil", "Silahkan klik tombol berikut", "success");
            navigate("/login")
        }catch (error) {
            dispatch(registerFailure());
            swal("Registrasi anda gagal", "Email anda sudah terdaftar", "error")
        }
    };

   

    return {
        formValues,
        loading,
        setFormValues,
        handleSubmit,
        formErrors,
        isSubmit,
    };
}


export default UseRegister;