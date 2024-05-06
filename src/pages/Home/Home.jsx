import Nabbar from "../Shared/Nabbar";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";


const Home = () => {
    return (
        <div className="space-y-5">
        
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;