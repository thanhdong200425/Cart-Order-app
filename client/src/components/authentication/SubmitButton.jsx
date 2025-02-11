/* eslint-disable react/prop-types */
import styles from "../../assets/css/components/authentication/SubmitButton.module.css";

export default function SubmitButton({ name, handleSubmit }) {
    return (
        <button className={styles.buttonContainer} onClick={handleSubmit}>
            {name}
        </button>
    );
}
