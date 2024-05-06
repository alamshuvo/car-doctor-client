import Nabbar from "../Shared/Nabbar";
import About from "./About/About";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;