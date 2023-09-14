import React from "react";

const Textbox = ({type,className,placeholder}) => {

    return(
        <>
         <input
            //   id="search"
              type={type}
              className={className}
              placeholder={placeholder}
            />
        </>

    )

} 

export default Textbox;