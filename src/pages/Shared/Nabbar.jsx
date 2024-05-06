// import img from "next/img";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import { NavLink } from "react-router-dom";
const Nabbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#55efc4] p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#55efc4] p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#55efc4] p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#55efc4] p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border border-[#55efc4] p-2 hover:bg-[#a29bfe] hover:text-[#F1EEDC]  rounded-md "
              : "text-center  font-normal gap-6 text-[18px]"
          }
          to={"/"}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <div className="w-full">
              <img
                src="/public/assets/logo.svg"
                alt="keep"
                width="100"
                height="40"
              />
            </div>
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            {navlink}
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              {navlink}
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          <Button size="sm" variant="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
          </Button>
          <Button size="sm" color="error" variant="outline">
            Appointment
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
};

export default Nabbar;
