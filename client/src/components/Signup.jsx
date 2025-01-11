import { useState } from "react"
import axios from "axios"
import Cookies from 'universal-cookie'


const Signup = () => {
    const [user, setUser] = useState(null)
    const cookies = new Cookies();

    const signup = async () => {
        console.log(user);
        try {
            await axios.post('http://localhost:3000/signup', user).then((res) => {
                const { token, firstName, lastName, userName, hashedPassword } = res.data;
                cookies.set('token', token);
                cookies.set('userId', token);
                cookies.set('username', userName);
                cookies.set('firstName', firstName);
                cookies.set('lastname', lastName);
                cookies.set('hashedpassword', hashedPassword);

            })


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="auth-container">
            <div className="glass-card">
                <h1>Signup</h1>

                <input
                    type="text"
                    placeholder="First name"
                    onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="User name"
                    onChange={(e) => setUser({ ...user, userName: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                />

                <button onClick={signup}>Signup</button>
            </div>
        </div>
    )
}

export default Signup