import { useState } from "react"


const Signup = () => {
    const [user, setUser] = useState(null)

    const signup = async () => {

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