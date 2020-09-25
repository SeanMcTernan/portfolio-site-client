import React, { useState } from "react";

const useFormFields = <T>(initialState: T) => {
    const [fields, setValues] = useState<T>(initialState);
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist();
        setValues({
            ...fields,
            [e.target.id]: e.target.value,
        })
    }
    return {
        handleFieldChange,
        fields,
    };
}


export default useFormFields;


