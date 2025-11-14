import BigFeatureRight from "./components/BigFeatureRight.jsx"
import BigFeaturesLeft from "./components/BigFeaturesLeft.jsx"
import Counter from "./components/Counter.jsx"
import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import HomeParallax from "./components/HomeParallax.jsx"
import Preloader from "./components/Preloader.jsx"
import Pricing from "./components/Pricing.jsx"
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

            <Pricing />

            <Counter />

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