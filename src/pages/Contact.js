import CategoryHeader from "../components/layout/CategoryHeader";
import Button from "../components/shared-components/Button";
import Icon from "../components/shared-components/Icons";
import Textbox from "../components/shared-components/Textbox";

const Contact = () => {
    return (
<>

<CategoryHeader title="Contact Us" subTitle="Contact Us"/>
<div className="container " style={{ marginTop: "10%" }}>
  <div className="row justify-content-around">
    <div className="col-md-6 col-8 ">
      <h3 style={{ fontWeight: "bold" }}>Contact Us</h3>
      <div className="row">
        <div className="col">
          <div className="contact-info">
            <Icon  className="fa fa-home" />
            <h5>Address</h5>
          </div>
          <p>570 8th Ave, New York, NY 10018 United States</p>
          <div className="seperator" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <div className="contact-info">
            <Icon className="fa fa-phone-square"/>
            <h5>Contact</h5>
          </div>
          <p>
            Mobile: (08) 123 456 789
            <br />
            Hotline: 1009 678 456
          </p>
          <div className="seperator" />
        </div>
      </div>
      <div className="row mt-5 ">
        <div className="col">
          <div className="contact-info ">
            <Icon className="far fa-envelope-open" />
            <h5>Email</h5>
          </div>
          <p>
            yourmail@domain.com
            <br />
            support@roadthemes.com
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-10">
      <h3 style={{ fontWeight: "bold" }}>Tell Us Your Massage</h3>
      <form className="form-group " onsubmit="return new_account_validation()">
        <div className="form-group">
          <label htmlFor="name"> Your name</label>
          <Textbox type="text" className="form-control"/>
          
          {/* <label
            htmlFor="name"
            className="error-msg"
            id="error"
            style={{ display: "none" }}
          >
            please enter your name
          </label> */}
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="mt-2">
            Email(optional)
          </label>
          <Textbox type="email" className="form-control"/>
         
          {/* <label
            htmlFor="email"
            className="error-msg"
            id="error2"
            style={{ display: "none" }}
          >
            please enter valid email-id
          </label> */}
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="your_subject">Subject</label>
          <Textbox type="text" className="form-control"/>
         
        </div>
        <div className="form-group">
          <label htmlFor="your_massage">Massage</label>
          <textarea
            name="customer_massage"
            className="form-control"
            id="your_massage"
            rows={10}
            cols={20}
            defaultValue={""}
          />
        </div>
      </form>
      <Button  className="sign-in border-0 w-25 mt-5" btnName="Send" />
    </div>
  </div>
</div>

</>
    )

}

export default Contact;