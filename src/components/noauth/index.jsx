import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NoAuth(props) {
  const { user } = useSelector((state) => state.login);
  const [mounted, setMounted] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    setMounted(true);
  }, [user]);
  return mounted ? props.children : <span>alo</span>;
}

export default NoAuth;
