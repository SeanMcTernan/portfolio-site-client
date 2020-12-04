//Call the Google recaptcha API to validate a user is human
const validateHuman = async (token: any): Promise<boolean> => {
    const secret = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;
    const response = await fetch(
        `/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
        method: "POST",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    }
    );
    const data = await response.json();
    return false
}

export default validateHuman;


