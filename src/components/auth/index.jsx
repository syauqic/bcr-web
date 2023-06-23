import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Auth(props) {
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
<<<<<<< HEAD
      setTimeout(() => {
        alert("Silahkan Login dulu Bangg..");
        navigate("/login");
      }, 2000);
=======
      navigate("/login");
>>>>>>> b768b5ce1ec53a56b45e6ab0ee4eb181ddb9a572
    }
    setMounted(true);
  }, [user]);
  return mounted ? props.children : <span>alo</span>;
}

export default Auth;
