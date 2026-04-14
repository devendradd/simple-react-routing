import React from "react";
import { useParams } from "react-router-dom";

function Contact() {
    const {userId} = useParams();
    return (
        <div>
            <h2>Contact Component</h2>
            <p>This is a placeholder for some content.</p>
            <h1> data recived is {userId}</h1>
        </div>
    );
}

export default Contact;
