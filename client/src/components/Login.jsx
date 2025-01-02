import { useState } from "react"


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {

    }
    return (
        <div className="auth-container">
            <div className="glass-card">
                <h1>Login</h1>

                <input
                    type="text"
                    placeholder="User name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={login}>Login</button>
            </div>
        </div>
    )
}

export default Login