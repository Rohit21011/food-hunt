const  Footer = () => {
    return (
        <div className="container-fluid footer mt-5">
  <h1 className="footer-heading "> food hunt</h1>
  <div className="container">
    <div className="row justify-content-sm-around justify-content-around">
      <div className="col-md-3 footer-responsive">
        <h2 className="address-heading">ADDRESS</h2>
        <p className="address">570 8th Ave, New York, NY 10018 United States</p>
      </div>
      <div className="col-md-3">
        <h2 className="address-heading">opening hours</h2>
        <p className="address">
          Monday – Friday: 8am – 4pm Saturday: 9am – 5pm
        </p>
      </div>
      <div className="col-md-3 ">
        <h2 className="address-heading">book a table</h2>
        <p className="address">
          Book a table in advance by filling a form or call us on{" "}
          <strong
            style={{ color: "#ffc222", fontSize: 18, fontWeight: "bold" }}
          >
            (850) 435-4155
          </strong>
        </p>
      </div>
    </div>
  </div>
</div>

    )
}

export default Footer;