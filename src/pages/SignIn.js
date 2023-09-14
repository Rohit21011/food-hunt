import { Link } from "react-router-dom";
import Button from "../components/shared-components/Button";
import Textbox from "../components/shared-components/Textbox";
import Image from "../components/shared-components/Image";

const SignIn = () => {
    return (
<>

 <div className="d-flex justify-content-center mt-5">
    <Image width="250px" src={require('../assets/images/logo.png')}/>
       
    </div>
<div className="container">
  <div className="row justify-content-center">
    <div className="col-lg-4 col-md-5  col-11 sign-up-layout">
      <div className="ml-sm-4 mr-sm-4">
        <h3 className="mt-4 ">Sign in</h3>
        <form className="form-group" id="form" onsubmit="return user_login()">
          <label htmlFor="phone" className="mt-2">
            Mobile number{" "}
          </label>
          <Textbox type="number" className="form-control "/>
          {/* <input
            type="text"
            className="form-control "
            id="phone"
            maxLength={10}
            oninput="  user_phone()"
          /> */}
          <label htmlFor="phone" className="error-msg" id="error1" style={{}} />
          <br />
          <label htmlFor="password1" className="mt-2">
            Password
          </label>
          <Textbox type="password"   className="form-control" placeholder="At least 6 characters"/>
          {/* <input
            type="password"
            className="form-control"
            id="password1"
            placeholder="At least 6 characters"
            oninput="user_password1()"
          /> */}
          <label
            htmlFor="password1"
            className="error-msg"
            id="error3"
            style={{ display: "none" }}
          >
            please enter password
          </label>
          <br />
          <div
            id="login-error"
            className="alert"
            style={{ fontFamily: '"poppins",sans-sarif', fontSize: 14 }}
          />
          <Button className="sign-in border-0 mt-4 w-100 " btnName="  continue"/>
        {/* //   <button className="sign-in border-0 mt-4 w-100 ">
        //     type="submit"
        //     className="sign-in border-0 mt-4 w-100 "
        //     id="login"
        //   >
        //     continue
        //   </button> */}
          <p style={{ fontWeight: "normal", fontSize: 15, marginTop: 20 }}>
            By continuing, you agree to Food Hunt's Conditions of Use and
            Privacy Notice.
          </p>
        </form>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-4">
    <div className="col-lg-4 col-md-4 col-11">
      <h5 className="text-center mt-2">OR</h5>
      <Link to="/new-account" className=" create-account w-100 " type="button">Create new account</Link>
      
    </div>
  </div>
</div>
{/* <div className="container-fluid  h-25">

    </div> */}
 
</>
    )

}

export default SignIn;