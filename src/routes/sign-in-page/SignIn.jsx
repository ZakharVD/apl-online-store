import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithGoogle,
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../../components/form-input-field/FormInput";
import { UserContext } from "../../context/UserContext";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // reset form function
  const resetForm = () => {
    setFormFields(defaultFormFields);
  };


 // redirect if authenticated function
 const { currentUser } = useContext(UserContext);
 const redirect = useNavigate();

 const redirectUser = () => {
     redirect('/');
 };

  // sigh in with google function
  const onGoogleSignInHandler = async () => {
    try {
      await signInWithGoogle();
      redirectUser();
    } catch (err) {
      console.log('error signing in with google')
    }
  };


  // log in user function
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetForm();
      redirectUser();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("No user with such email");
          break;
        default:
          alert("An unexpected error has occured");
          console.log(error);
      }
    }
  };

  // get value from input function
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };



  return (
    <>
      <div className="h-[435px] max-h-[460px] w-[95%] max-w-[390px] m-auto mt-[20px] bg-lightgrey rounded-xl">
        <p className="text-2xl font-bold p-[10px] md:px-[25px] pt-[25px]">
          Sign in to account
        </p>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col mx-[10px] md:mx-[25px]"
        >
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
          <button
            className="bg-black text-white rounded-xl p-3 text-md mt-[7px]"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="mx-[10px] md:mx-[25px]">
          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold">Or</p>
          </div>
          <button
            type="button"
            onClick={onGoogleSignInHandler}
            className="bg-blue text-white rounded-xl p-3 text-md w-[100%]"
          >
            Sign in with Google
          </button>
          <p className="mt-[10px] mx-[5px] font-medium">
            Don't have an account?
            <Link to="/sign-up" className="underline ml-[3px]">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
