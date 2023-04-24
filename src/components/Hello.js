import React, { createElement } from "react";

const Hello = ()=> {
    // return(
    //     <div>
    //         <h1> Hello Vishal From Hello</h1>
    //     </div>
    // )

    return React.createElement('div',null, React.createElement('h1',null,'Hello Vishal'))
}

export default Hello