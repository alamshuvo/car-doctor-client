import { Envelope, Lock, Person } from "phosphor-react";
import { Button, Icon, Input, Label } from "keep-react";
import img from "../../public/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
    const {createUser}=useContext(AuthContext)
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name=form.name.value;
    createUser(email,password)
    .then(res=>{console.log(res.user);})
    .catch(error=>{console.log(error);})

  };
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center text-orange-500">
          SignUp
        </h1>
        <div className=" min-h-screen flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="md:w-1/2 shadow-md rounded-lg border p-8 space-y-2">
            <form className="mx-auto  " onSubmit={handleSignUp}>
            <fieldset className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <Input
                    placeholder="Enter Name"
                    name="name"
                    className="ps-11 w-3/4"
                  />
                  <Icon>
                    <Person size={19} color="#AFBACA" />
                  </Icon>
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <div className="relative">
                  <Input
                    placeholder="Enter email"
                    name="email"
                    className="ps-11 w-3/4"
                  />
                  <Icon>
                    <Envelope size={19} color="#AFBACA" />
                  </Icon>
                </div>
              </fieldset>
              <fieldset className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Enter password"
                    type="password"
                    className="ps-11 w-3/4"
                    name="password"
                  />
                  <Icon>
                    <Lock size={19} color="#AFBACA" />
                  </Icon>
                </div>
              </fieldset>
              <Button size="sm" color="error" type="submit" className="mt-2">
                Sign Up
              </Button>
            </form>
            {/* <div>
          <p className="font-bold">Login with Another Way</p>
          <div className="flex gap-2 mt-2">
           <div><Button color="error" className="hover:bg-transparent hover:text-black">Login with Google</Button></div>
           <div> <Button color="primary" className="">Login with Github</Button></div>
          </div> */}
            <p className="text-2xl mt-2">
              Already have an account?{" "}
              <Link className="text-orange-600 " to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
