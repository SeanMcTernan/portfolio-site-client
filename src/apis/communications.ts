//Send notifications that someone has messages in.
import { API } from "aws-amplify";
const communications = async (fields: any): Promise<void> => {
    API.post("permissions", `/send-email`, {
        body: {
            to: "sean@beyondthesummitpdd.com",
            from: "sean@beyondthesummitpdd.com",
            subject: `New email on Portfolio site from ${fields.name}`,
            text: `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nMessage: ${fields.message}`,
        },
    });
    ;
}

export default communications;