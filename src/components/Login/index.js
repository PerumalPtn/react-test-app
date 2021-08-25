import { useEffect, useState } from "react";


const Login = () => {



    return (
        <div>
            <label>
                Username
                <input name="userName" value={loginForm.userName} onChange={handleInputChange} />
            </label>

            <label>
                Password
                <input type="password" name="password" value={loginForm.password} onChange={handleInputChange} />
            </label>

            <div id="my-signin2"></div>

        </div>
    )
}

export default Login;

