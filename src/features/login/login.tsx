import { useRef } from "react";
import { login } from "../../services/auth";

const Login = () => {
    const indentity = useRef<any>(null);
    const password = useRef<any>(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!indentity.current.value || !password.current.value) {
            return;
        }
        login({ identity: indentity.current.value, password: password?.current.value })
    }

    return (
        <div className="login">
            <div className="login__panel">
                <h2 className="login__title">Login</h2>
                <form className="form" action="" onSubmit={handleSubmit}>
                    <div className="form__item">
                        <label htmlFor="input-username">Username</label>
                        <input id="input-username" name="identity" ref={indentity} type="text" className="input" />
                    </div>
                    <div className="form__item">
                        <label htmlFor="input-password">Password</label>
                        <input id="input-password" name="password" ref={password} type="password" className="input" />
                    </div>
                    <div className="form__item">
                        <button className="button" type="submit">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;