import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HomeCrousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://th.bing.com/th/id/R.c3ebd4f06428f54e8fe7b2c1878cf34c?rik=dDO9W71IpwUk5Q&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fFast-Food-Wallpaper-.jpg&ehk=GCKpdr%2bNSRqHVQ%2b%2fmPiZd83jNhA9FGa1D8NrAp4Cfpw%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="img" style={{height:"200px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/07/07/22/19/someone-2482972__480.jpg" className="d-block w-100" alt="img" style={{height:"200px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/06/24/11/28/glasses-1477078__340.jpg" className="d-block w-100" alt="img" style={{height:"200px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

  );
};

export default HomeCrousel;
