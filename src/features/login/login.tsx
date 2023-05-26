const Login = () => {

    return (
        <div className="login">
            <div className="login__panel">
                <h2 className="login__title">Login</h2>
                <form className="form" action="">
                    <div className="form__item">
                        <label htmlFor="input-username">Username</label>
                        <input id="input-username" type="text" className="input" />
                    </div>
                    <div className="form__item">
                        <label htmlFor="input-password">Password</label>
                        <input id="input-password" type="password" className="input" />
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