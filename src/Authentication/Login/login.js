
import { Form, Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { author } from "../../fbConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {
    const navigate = useNavigate();
    const [Login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleDetails = (e) => {
        setLogin({ ...Login, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = Login;
        try {
            await signInWithEmailAndPassword(author, email, password);
            alert("Login successful");
            navigate("signup");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="form-group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleDetails} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleDetails} />
                    </Form.Group>
                    <Button type="submit" onClick={()=>navigate('/Home')}>Login</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
