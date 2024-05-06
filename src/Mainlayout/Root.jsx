import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
           <div className="min-h-screen">
           <Outlet></Outlet>
           </div>
            <div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;