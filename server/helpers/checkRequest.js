export const validateRequest = (request) => {
    const errors = [];
    for (const [key, value] of Object.entries(request)) if (!value) errors.push(`${key} cannot be empty`);

    return errors;
};
