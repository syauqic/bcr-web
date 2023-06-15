import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        alert("Silahkan Login dulu Bangg..");
        navigate("/login");
      }, 2000);
    }
    setMounted(true);
  }, [user]);
  return mounted ? props.children : <span>alo</span>;
}

export default Auth;
