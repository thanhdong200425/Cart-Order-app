import styles from "../assets/css/components/Divider.module.css";

export default function Divider() {
    return (
        <div className={styles.divider}>
            <span className={styles.line} />
            <span className={styles.text}>or</span>
            <span className={styles.line} />
        </div>
    );
}
