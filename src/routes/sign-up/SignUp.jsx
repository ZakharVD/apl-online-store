import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../../components/form-input-field/FormInput";
import { UserContext } from "../../context/UserContext";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormFields(defaultFormFields);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Provided email already in use");
      }
    }
  };

  return (
    <div className="bg-lightgrey h-[470px] w-[95%] max-w-[390px] m-auto mt-[20px] rounded-xl">
      <p className="text-2xl font-bold p-[10px] md:px-[25px] pt-[25px]">
        Create an account
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col mx-[10px] md:mx-[25px]"
      >
        <FormInput
          label="Display name"
          required
          type="text"
          placeholder="e.g. John Doe"
          name="displayName"
          onChange={onChangeHandler}
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          placeholder="name@email.com"
          name="email"
          onChange={onChangeHandler}
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          placeholder="•••••"
          name="password"
          onChange={onChangeHandler}
          value={password}
        />

        <FormInput
          label="Confirm password"
          required
          type="password"
          placeholder="•••••"
          name="confirmPassword"
          onChange={onChangeHandler}
          value={confirmPassword}
        />

        <button
          className="bg-black text-white rounded-xl p-3 text-md mt-[7px]"
          type="submit"
        >
          Sign Up
        </button>
        <div className="mx-[10px] md:mx-[25px]">
          <p className="mt-[10px] mx-[5px] font-medium">
            Already have an account?
            <Link to="/sign-in" className="underline ml-[3px]">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
