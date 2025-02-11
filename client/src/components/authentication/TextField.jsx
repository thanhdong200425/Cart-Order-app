/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "../../assets/css/components/authentication/TextField.module.css";
import { BiHide, BiShow } from "react-icons/bi";

export default function TextField({ label, type, name, isRequired = false, isPassword = false, inputValue, setInputValue }) {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.container}>
            <label htmlFor={name} className={styles.label}>
                {label}{" "}
                {isPassword && (
                    <span onClick={handleShowPassword} className={styles.icon}>
                        {!showPassword ? <BiHide /> : <BiShow />}
                    </span>
                )}
            </label>
            <input name={name} type={!showPassword ? type : "text"} id={name} value={inputValue} onChange={handleInputChange} required={isRequired} />
        </div>
    );
}
