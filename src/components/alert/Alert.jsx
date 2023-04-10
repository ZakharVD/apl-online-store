import { useContext, useEffect } from "react";
import { AlertContext } from "../../context/AlertContext";

const Alert = () => {
  const { showAlert, message } = useContext(AlertContext);
    console.log(message)
  return (
    <div>
      {showAlert && (
        <div className="bg-red fixed top-0 m-4">
          <h1>Alert testing</h1>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Alert;
