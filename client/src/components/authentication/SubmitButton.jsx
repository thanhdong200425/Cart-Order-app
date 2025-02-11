/* eslint-disable react/prop-types */
import styles from "../../assets/css/components/authentication/SubmitButton.module.css";

export default function SubmitButton({ name }) {
    return <button className={styles.buttonContainer}>{name}</button>;
}
