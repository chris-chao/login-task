/**
 * Created by christopherchao on 6/5/17.
 */
import React from "react";

const LoginFormMarkup = ({updateEmail, updatePassword, login}) => {
   return <div>
        <p>
            <span>Email:</span>
            <input type="text" onChange={updateEmail}/>
        </p>
        <p>
            <span>Password:</span>
            <input type="password" onChange={updatePassword} />
        </p>
        <button onClick={login}>Login</button>
    </div>;

}

export default LoginFormMarkup;