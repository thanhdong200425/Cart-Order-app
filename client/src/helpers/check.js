import { toast } from "react-toastify";

export function checkEmptyForInput(...inputFields) {
    let isVaid = true;

    inputFields.forEach((field) => {
        Object.entries(field).forEach(([fieldName, value]) => {
            if (!value.trim()) {
                toast.error(`${fieldName.toUpperCase()} cannot be empty`);
                isVaid = false;
            }
        });
    });
    return isVaid;
}
