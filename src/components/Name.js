/**
 * Created by christopherchao on 6/5/17.
 */
import React from "react";

const Name = ({updateName}) => {
   return <p>
        <span>What's your name?</span>
        <input type="text" onChange={updateName} />
    </p>

}

export default Name;