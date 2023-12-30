// useAuth.js
const useAuth = () => {
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  return { isAuthenticated };
};

export default useAuth;
