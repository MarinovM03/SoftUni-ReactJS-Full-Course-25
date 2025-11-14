import BigFeatureRight from "./components/BigFeatureRight.jsx"
import BigFeaturesLeft from "./components/BigFeaturesLeft.jsx"
import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import HomeParallax from "./components/HomeParallax.jsx"
import Preloader from "./components/Preloader.jsx"
import Testimonials from "./components/Testimonials.jsx"
import WelcomeArea from "./components/WelcomeArea.jsx"

function App() {
    return (
        <main>
            <Preloader />

            <Header />

            <WelcomeArea />

            <Features />

            <BigFeaturesLeft />

            <BigFeatureRight />

            <HomeParallax />

            <Testimonials />

            {/* <!-- ***** Pricing Plans Start ***** --> */}
            <section className="section colored" id="pricing-plans">
                <div className="container">
                    {/* <!-- ***** Section Title Start ***** --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center-heading">
                                <h2 className="section-title">Pricing Plans</h2>
                            </div>
                        </div>
                        <div className="offset-lg-3 col-lg-6">
                            <div className="center-text">
                                <p>Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum, quis congue risus volutpat.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ***** Section Title End ***** --> */}

                    <div className="row">
                        {/* <!-- ***** Pricing Item Start ***** --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">Starter</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">14.50</span>
                                        <span className="period">monthly</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">60 GB space</li>
                                        <li className="active">600 GB transfer</li>
                                        <li className="active">Pro Design Panel</li>
                                        <li>15-minute support</li>
                                        <li>Unlimited Emails</li>
                                        <li>24/7 Security</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ***** Pricing Item End ***** --> */}

                        {/* <!-- ***** Pricing Item Start ***** --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.4s">
                            <div className="pricing-item active">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">Premium</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">21.50</span>
                                        <span className="period">monthly</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">120 GB space</li>
                                        <li className="active">1200 GB transfer</li>
                                        <li className="active">Pro Design Panel</li>
                                        <li className="active">15-minute support</li>
                                        <li>Unlimited Emails</li>
                                        <li>24/7 Security</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ***** Pricing Item End ***** --> */}

                        {/* <!-- ***** Pricing Item Start ***** --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12" data-scroll-reveal="enter bottom move 50px over 0.6s after 0.6s">
                            <div className="pricing-item">
                                <div className="pricing-header">
                                    <h3 className="pricing-title">Advanced</h3>
                                </div>
                                <div className="pricing-body">
                                    <div className="price-wrapper">
                                        <span className="currency">$</span>
                                        <span className="price">42.00</span>
                                        <span className="period">monthly</span>
                                    </div>
                                    <ul className="list">
                                        <li className="active">250 GB space</li>
                                        <li className="active">5000 GB transfer</li>
                                        <li className="active">Pro Design Panel</li>
                                        <li className="active">15-minute support</li>
                                        <li className="active">Unlimited Emails</li>
                                        <li className="active">24/7 Security</li>
                                    </ul>
                                </div>
                                <div className="pricing-footer">
                                    <a href="#" className="main-button">Purchase Now</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- ***** Pricing Item End ***** --> */}
                    </div>
                </div>
            </section>
            {/* <!-- ***** Pricing Plans End ***** --> */}

            {/* <!-- ***** Counter Parallax Start ***** --> */}
            <section className="counter">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="count-item decoration-bottom">
                                    <strong>126</strong>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="count-item decoration-top">
                                    <strong>63</strong>
                                    <span>Happy Clients</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="count-item decoration-bottom">
                                    <strong>18</strong>
                                    <span>Awards Wins</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="count-item">
                                    <strong>27</strong>
                                    <span>Countries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Counter Parallax End ***** -->    */}

            {/* <!-- ***** Blog Start ***** --> */}
            <section className="section" id="blog">
                <div className="container">
                    {/* <!-- ***** Section Title Start ***** --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center-heading">
                                <h2 className="section-title">Blog Entries</h2>
                            </div>
                        </div>
                        <div className="offset-lg-3 col-lg-6">
                            <div className="center-text">
                                <p>Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ***** Section Title End ***** --> */}

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-post-thumb">
                                <div className="img">
                                    <img src="assets/images/blog-item-01.png" alt="" />
                                </div>
                                <div className="blog-content">
                                    <h3>
                                        <a href="#">Vivamus ac vehicula dui</a>
                                    </h3>
                                    <div className="text">
                                    Cras aliquet ligula dui, vitae fermentum velit tincidunt id. Praesent eu finibus nunc. Nulla in sagittis eros. Aliquam egestas augue.
                                    </div>
                                    <a href="#" className="main-button">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-post-thumb">
                                <div className="img">
                                    <img src="assets/images/blog-item-02.png" alt="" />
                                </div>
                                <div className="blog-content">
                                    <h3>
                                        <a href="#">Phasellus convallis augue</a>
                                    </h3>
                                    <div className="text">
                                        Aliquam commodo ornare nisl, et scelerisque nisl dignissim ac. Vestibulum finibus urna ut velit venenatis, vel ultrices sapien mattis.
                                    </div>
                                    <a href="#" className="main-button">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="blog-post-thumb">
                                <div className="img">
                                    <img src="assets/images/blog-item-03.png" alt="" />
                                </div>
                                <div className="blog-content">
                                    <h3>
                                        <a href="#">Nam gravida purus non</a>
                                    </h3>
                                    <div className="text">
                                        Maecenas eu erat vitae dui convallis consequat vel gravida nulla. Vestibulum finibus euismod odio, ut tempus enim varius eu.
                                    </div>
                                    <a href="#" className="main-button">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ***** Blog End ***** --> */}

            {/* <!-- ***** Contact Us Start ***** --> */}
            <section className="section colored" id="contact-us">
                <div className="container">
                    {/* <!-- ***** Section Title Start ***** --> */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center-heading">
                                <h2 className="section-title">Talk To Us</h2>
                            </div>
                        </div>
                        <div className="offset-lg-3 col-lg-6">
                            <div className="center-text">
                                <p>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. Cras feugiat hendrerit semper.</p>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ***** Section Title End ***** --> */}

                    <div className="row">
                        {/* <!-- ***** Contact Text Start ***** --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <h5 className="margin-bottom-30">Keep in touch</h5>
                            <div className="contact-text">
                                <p>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                                <br />auctor non lorem</p>
                                <p>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
                            </div>
                        </div>
                        {/* <!-- ***** Contact Text End ***** --> */}

                        {/* <!-- ***** Contact Form Start ***** --> */}
                        <div className="col-lg-8 col-md-6 col-sm-12">
                            <div className="contact-form">
                                <form id="contact" action="" method="get">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required="" />
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                    <fieldset>
                                        <input name="email" type="email" className="form-control" id="email" placeholder="E-Mail Address" required="" />
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message" required=""></textarea>
                                    </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                    <fieldset>
                                        <button type="submit" id="form-submit" className="main-button">Send Message</button>
                                    </fieldset>
                                    </div>
                                </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- ***** Contact Form End ***** --> */}
                    </div>
                </div>
            </section>
            {/* <!-- ***** Contact Us End ***** --> */}

            {/* <!-- ***** Footer Start ***** --> */}
            <Footer />
        </main>
    )
}

export default App