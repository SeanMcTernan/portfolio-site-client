import React, { useState, FormEvent } from "react";

const useFormFields = <T>(callback: (state: T) => void, initialState: T) => {
    const [fields, setValues] = useState<T>(initialState);
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues({
            ...fields,
            [e.target.name]: e.target.value,
        })
    }
    return [
        handleFieldChange,
        fields,
    ];
}


export default useFormFields;




// const useContactForm = <T>(callback: (state: T) => void, initialState: T) => {
//     const [inputs, setInputs] = useState<T>(initialState);

//     const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//         if (event) {
//             event.preventDefault();
//         }
//         callback(inputs);
//     };
//     const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         event.persist();
//         setInputs({
//             ...inputs,
//             [event.target.name]: event.target.value,
//         });
//     };
//     return {
//         handleSubmit,
//         handleInputChange,
//         inputs,
//     };
// };

// export default useContactForm;