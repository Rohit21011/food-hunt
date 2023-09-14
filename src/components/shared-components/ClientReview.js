import Icon from './Icons';
import Image from './Image';


const ClientReview = () => {
    return (
        <>
       <div className="carousel-item active">
        <div className="row justify-content-around">
          <div className="col-md-3 col-5 client-review">
            <div className="row">
              <div className="col">
              <Image className="rounded-circle" width="80px" height="80px"  src={require('../../assets/images/lara.jpg')}/>
               <Icon className="fas fa-quote-left colon p-2"/>
                
                <span className="client-name ">Lara</span>
                <div className="ml-3 mt-2 d-sm-inline d-flex">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked " />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                </div>
              </div>
            </div>
            <div className="row ">
              <p className=" client-discription  ">
                {" "}
                "I am completely blown away. I would also like to say thank you
                to all your staff. It's really wonderful."
              </p>
            </div>
          </div>
        </div>
      </div>
        </>

    )
}

export default ClientReview;