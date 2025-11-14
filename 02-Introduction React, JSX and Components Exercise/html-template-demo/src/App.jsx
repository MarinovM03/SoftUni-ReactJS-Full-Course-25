import BigFeatures from "./components/BigFeatures.jsx"
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

            <BigFeatures 
                title='Let’s discuss about you project'
                content='Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.'
            />

            <BigFeatures 
                title='We can help you to grow your business'
                content='Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.'
                reverse
            />

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