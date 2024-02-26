import OurReviews from "./OurReviews";
import OurWork from "./OurWork";
import ProjectCards from "./ProjectCards";
import Projects from "./Projects";
import Services from "./Services";
import TalkUs from "./TalkUS";
import Values from "./Values";
import WorkingClients from "./WorkingClients";
import TechStack from "./TechStack";
import BottomFooter from "./BottomFooter";
import Choose from "./Choose";
import Footer from "./Footer";
import Hero from "./Hero";
const Wrapper = () => {
    return (
        <>
            <Hero />
            <ProjectCards />
            <Choose />
            <OurWork />
            <Values />
            <Projects />
            <WorkingClients />
            <TechStack />
            <OurReviews />
            <TalkUs />
            <Footer />
            <BottomFooter />
        </>
    )
}

export default Wrapper;