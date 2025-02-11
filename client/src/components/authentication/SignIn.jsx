import TextField from "./TextField";
import styles from "../../assets/css/components/authentication/SignIn.module.css";
import SubmitButton from "./SubmitButton";
import Divider from "../Divider"; // New import

export default function SignIn() {
    return (
        <div className={styles.wrapperContainer}>
            <div className={styles.container}>
                <h2 className={styles.title}>Welcome back</h2>
                <form className={styles.formContainer}>
                    <TextField label={"Your email"} type="Email" name="email" />
                    <TextField label={"Password"} type={"password"} name={"password"} isPassword={true} />
                    <SubmitButton name={"Sign in"} />
                    <Divider />
                </form>
                <button className={styles.redirectButton}>Create an account</button>
            </div>
        </div>
    );
}
