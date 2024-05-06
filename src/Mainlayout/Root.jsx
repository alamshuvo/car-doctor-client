import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Nabbar from "../pages/Shared/Nabbar";


const Root = () => {
    return (
        <div className="container mx-auto">
           <div className="min-h-screen">
            <Nabbar></Nabbar>
           <Outlet></Outlet>
           </div>
            <div>
              <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;