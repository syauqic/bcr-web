function auth() {
  const setAuth = (dataUser) => {
    localStorage.setItem("user", JSON.stringify(dataUser));
  };
  const getAuth = () => {
    const dataUser = localStorage.getItem("user");
    return JSON.parse(dataUser);
  };
  const getToken = () => {
    const dataUser = getAuth();
    return dataUser.access_token;
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return {
    setAuth,
    getAuth,
    getToken,
    logout,
  };
}
export default auth();
