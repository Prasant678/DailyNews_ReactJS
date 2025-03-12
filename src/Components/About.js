import React from 'react'

const About = () => {
    return (
        <div className='container' style={{ padding: "130px 60px 120px 60px"}}>
            <h1 style={{ padding: "0px 0px 10px 0px"}}>ABOUT US</h1>
            <div className="accordion accordion-flush" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>About DailyNews</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body bg-dark text-white">
                            <strong>About DailyNews :</strong> Experience a seamless and personalized way to stay updated with our DailyNews - news reading web application. Designed for efficiency and ease, our platform curates the latest news from trusted sources, covering topics like politics, business, technology, sports, and entertainment. With real-time updates, customizable feeds, and an intuitive reading experience, you can explore news that matters to you—anytime, anywhere. Enjoy distraction-free reading with features like bookmarking, dark mode, and offline access for uninterrupted news consumption.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body bg-dark text-white">
                            <strong>Free to use :</strong> Our DailyNews - news reading web application is completely free to use, giving you unlimited access to the latest news and articles without any subscription or hidden fees. Stay informed with real-time updates, personalized news feeds, and an ad-free reading experience—all at no cost. Whether you're browsing headlines or diving into in-depth stories, enjoy seamless access to news anytime, anywhere.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body bg-dark text-white">
                            <strong>Browser Compatibilty :</strong> Our DailyNews - news reading web application is designed to work seamlessly across all major web browsers, ensuring a smooth and consistent experience on any device. It is fully compatible with: Google Chrome, Mozilla Firefox, Microsoft Edge (Chromium-based), Opera
                            For the best performance, we recommend using an updated version of your preferred browser. While our app is optimized for modern web standards, some older browser versions may experience limited functionality.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
