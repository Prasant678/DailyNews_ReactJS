import React from 'react'

const Carousel = () => {
    return (
        <div>
            <h1 className='text-center' style={{marginTop: "4rem"}}>DAILY NEWS UPDATE</h1>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{ height: "35rem", padding: "10px 30px 10px 30px"}}>
                        <img src="1.jpg" className="d-block w-100 rounded-3" style={{ height: "34rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>ABP NEWS</h5>
                            <p>Aaj ki Badi khabrein FataFat.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "35rem", padding: "10px 30px 10px 30px" }}>
                        <img src="2.jpg" className="d-block w-100 rounded-3" style={{ height: "34rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>BCC NEWS</h5>
                            <p>Soldiers new bertalian formed.</p>
                        </div>
                    </div>
                    <div className="carousel-item" style={{ height: "35rem", padding: "10px 30px 10px 30px" }}>
                        <img src="3.jpg" className="d-block w-100 rounded-3" style={{ height: "34rem" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>BCC NEWS</h5>
                            <p>Bcc News cover all the news of India.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" data-interval="1000">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" data-interval="1000">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
