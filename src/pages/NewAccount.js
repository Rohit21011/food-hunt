import { Link } from "react-router-dom";
import Button from "../components/shared-components/Button";
import Image from "../components/shared-components/Image";
import Textbox from "../components/shared-components/Textbox";

const NewAccount = () => {
    return (
<>
<>
  <div className="d-flex justify-content-center">
    <Image width="250px" src={require('../assets/images/logo.png')}/>

  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-4  col-11 sign-up-layout">
        <div className="ml-sm-4 mr-sm-4">
          <h3 className="mt-4 ">Create account</h3>
          <form
            id="form"
            className="form-group "
            style={{ fontSize: 13 }}
            onsubmit="return new_account_validation()"
          >
            <label htmlFor="name"> Your name</label>
            <Textbox type="text" className="form-control"/>
            {/* <input
              type="text"
              className="form-control"
              id="name"
              oninput=" user_name()"
            /> */}
            <label
              htmlFor="name"
              className="error-msg"
              id="error"
              style={{ display: "none" }}
            >
              please enter your name
            </label>
            <br />
            {/* <p id="error" style=" font-size:13px;color:#c70000;"></p><br> */}
            <label htmlFor="phone" className="mt-2">
              Mobile number{" "}
            </label>
            <Textbox type="number" className="form-control"/>
            {/* <input
              type="text"
              className="form-control "
              id="phone"
              maxLength={10}
              oninput="  user_phone()"
            /> */}
            <label
              htmlFor="phone"
              className="error-msg"
              id="error1"
              style={{}}
            />
            <br />
            <label htmlFor="email" className="mt-2">
              Email(optional)
            </label>
            <Textbox type="email" className="form-control"/>
            {/* <input
              type="email"
              className="form-control"
              id="email"
              oninput=" user_email()"
            /> */}
            <label
              htmlFor="email"
              className="error-msg"
              id="error2"
              style={{ display: "none" }}
            >
              please enter valid email-id
            </label>
            <br />
            <label htmlFor="password1" className="mt-2">
              Password
            </label>
            <Textbox type="password" className="form-control"   placeholder="At least 6 characters"/>
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
            <label htmlFor="password2" className="mt-2">
              Confirm Password
            </label>
            <Textbox type="password" className="form-control" />

            {/* <input
              type="password"
              className="form-control"
              id="password2"
              placeholder="At least 6 characters"
              oninput=" user_password2()"
            /> */}
            <label htmlFor="password2" className="error-msg" id="error4" />
            <br />
            <div
              id="massage"
              className="alert"
              style={{ fontFamily: '"poppins",sans-sarif', fontSize: 14 }}
            />
            <p style={{ fontWeight: "normal", fontSize: 14, marginTop: 20 }}>
              We will send you a text to verify your phone. Message and Data
              rates may apply.
            </p>
            <Button className="sign-in border-0 mt-4 w-100 " btnName="continue"/>
            {/* <button
              type="submit"
              className="sign-in border-0 mt-4 w-100 "
              id="submit"
            >
              continue
            </button> */}
            <p style={{ fontWeight: "normal", fontSize: 13, marginTop: 20 }}>
              Already have an account? <Link to="/sign-in" >Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid  h-25"></div>
</>

</>
    )

}

export default NewAccount;