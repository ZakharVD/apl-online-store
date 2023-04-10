import { createContext, useState, useEffect } from "react";

export const AlertContext =  createContext({
    showAlert: false,
    setShowAlert: () => {},
    message: '',
    setMessage: () => {},
})

export const AlertProvider = ({children}) => {
    const [showAlert, setShowAlert] = useState(false);
    const [message, setMessage] = useState('')

    useEffect(() => {
        const time = setTimeout(() => {
            setShowAlert(false);
        }, 3000)
        return clearTimeout(time);
    }, [showAlert])

    const configAlert = () => {
        setShowAlert(true);
    }
    console.log(showAlert)

    return <AlertContext.Provider value={{configAlert, showAlert, message}}>{children}</AlertContext.Provider>
}