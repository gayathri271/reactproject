
import './signup.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { author, db } from '../../fbConfig';
import { set, ref } from 'firebase/database';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

    const [signUpDetails, setSignUpDetails] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleDetails = (e) => {
        setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
    };

    const handleSubmitSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signUpDetails;
        try {
            const SignupUser = await createUserWithEmailAndPassword(author, email, password);
            alert("Signup successful!");
            navigate("/login");
            await set(ref(db, "users/" + SignupUser.user.uid), {
                name: name,
                email: email,
                id: SignupUser.user.uid,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <Form onSubmit={handleSubmitSignup}>
                    <Form.Group className="form-group">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={handleDetails} required />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" onChange={handleDetails} required />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleDetails} required />
                    </Form.Group>
                    <Button type="submit" onClick={()=>{navigate("/login")}}>Sign Up</Button>
                </Form>
            </div>
        </div>
    );
}

export default SignUp;
