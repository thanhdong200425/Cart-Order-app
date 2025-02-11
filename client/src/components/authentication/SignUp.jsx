import styles from "../../assets/css/components/authentication/SignIn.module.css";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";
import { ToastContainer } from "react-toastify";
import Divider from "../Divider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [nameInputValue, setNameInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmitButton = (e) => {
        e.preventDefault();
    };

    const redirectToSignIn = (e) => {
        e.preventDefault();
        navigate("/sign-in");
    };

    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Welcome to Our Shop</h2>
                <form className={styles.formContainer}>
                    <TextField label={"Your email"} type="Email" name="email" inputValue={emailInputValue} setInputValue={setEmailInputValue} isRequired={true} />
                    <TextField label={"Your name"} type={"text"} name={"name"} inputValue={nameInputValue} setInputValue={setNameInputValue} isRequired={true} />
                    <TextField label={"Password"} type={"password"} name={"password"} isPassword={true} inputValue={passwordInputValue} setInputValue={setPasswordInputValue} isRequired={true} />
                    <SubmitButton name={"Sign up"} handleSubmit={handleSubmitButton} />
                    <Divider />
                </form>
                <button className={styles.redirectButton} onClick={redirectToSignIn}>
                    Sign in
                </button>
                <ToastContainer />
            </div>
        </div>
    );
}
