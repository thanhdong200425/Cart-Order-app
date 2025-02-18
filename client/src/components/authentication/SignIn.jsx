import TextField from "./TextField";
import styles from "../../assets/css/components/authentication/SignIn.module.css";
import SubmitButton from "./SubmitButton";
import Divider from "../Divider";
import axios from "axios";
import config from "../../config/config";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { checkEmptyForInput } from "../../helpers/check";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmitButton = async (e) => {
        e.preventDefault();

        if (!checkEmptyForInput({ email: emailInputValue, password: passwordInputValue })) return;

        try {
            const response = await axios.post(config.apiUrl + "/sign-in", {
                email: emailInputValue.trim(),
                password: passwordInputValue.trim(),
            });
            console.log(response);
        } catch (error) {
            console.log("Error when sign in: " + error);
        }
    };

    const redirectToSignUp = (e) => {
        e.preventDefault();
        navigate("/sign-up");
    };

    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Welcome back</h2>
                <form className={styles.formContainer}>
                    <TextField label={"Your email"} type="Email" name="email" inputValue={emailInputValue} setInputValue={setEmailInputValue} isRequired={true} />
                    <TextField label={"Password"} type={"password"} name={"password"} isPassword={true} inputValue={passwordInputValue} setInputValue={setPasswordInputValue} isRequired={true} />
                    <SubmitButton name={"Sign in"} handleSubmit={handleSubmitButton} />
                    <Divider />
                </form>
                <button className={styles.redirectButton} onClick={redirectToSignUp}>
                    Create an account
                </button>
                <ToastContainer />
            </div>
        </div>
    );
}
