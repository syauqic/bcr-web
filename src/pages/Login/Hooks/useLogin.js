import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginStart,
  loginFailure,
} from "../../../Redux/Login/slice";
import swal from "sweetalert";

function useLogin() {
  const { loading } = useSelector((state) => state.login);

  // const initialValues = {
  //   email: "",
  //   password: "" 
  // };
  const [formValues, setFormValues] = useState({
    email: "",
    password: "" 
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const navigate = useNavigate();
  const dispatch = useDispatch();


  //logic validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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


  const handleSubmit = async (e) => {
    e.preventDefault();
    // data validation
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    //data patching
    try {
      dispatch(loginStart());
      const response = await axios.post(
        "https://bootcamp-rent-cars.herokuapp.com/admin/auth/login",
        formValues
      );
      dispatch(loginSuccess(response.data));
      swal("Anda berhasil login", "Silahkan klik tombol berikut", "success");
      navigate("/");
    } catch (error) {
      dispatch(loginFailure());
      swal("Registrasi anda gagal", "Harap periksa kembali email dan password anda", "error")
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

export default useLogin;
