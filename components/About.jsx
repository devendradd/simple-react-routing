import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function About() {
    const navigate = useNavigate();
    const payload = { ref: "about-page", message: "calling from about page" }
    return (
        <div>
            <h2>About Us</h2>
            <p>Learn more about our company and values.</p>
            <Link to="/careers" state={payload}>Go to Careers using only link</Link>
            <br />
            <button onClick={() => navigate("/careers", { state: payload })}>Go to Careers using useNavigate</button>
        </div>
    );
}

export default About;
