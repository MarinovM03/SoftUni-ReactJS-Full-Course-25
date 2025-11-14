import BigFeatureRight from "./components/BigFeatureRight.jsx"
import BigFeaturesLeft from "./components/BigFeaturesLeft.jsx"
import Blog from "./components/Blog.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Counter from "./components/Counter.jsx"
import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import WorkProcessSection from "./components/WorkProcessSection.jsx"
import Preloader from "./components/Preloader.jsx"
import Pricing from "./components/Pricing.jsx"
import Testimonials from "./components/Testimonials.jsx"
import WelcomeArea from "./components/WelcomeArea.jsx"

function App() {
    return (
        <>
            <Preloader />

            <Header />

            <WelcomeArea />

            <Features />

            <BigFeaturesLeft />

            <BigFeatureRight />

            <WorkProcessSection />

            <Testimonials />

            <Pricing />

            <Counter />

            <Blog />

            <ContactUs />

            <Footer />
        </>
    )
}

export default App