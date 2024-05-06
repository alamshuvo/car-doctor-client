import { Envelope,  Lock } from "phosphor-react";
import { Button, Icon, Input, Label } from "keep-react";
import img from '../../public/assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
    const {signIn,signInWithGoogle,signinWithGithub}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        signIn(email,password)
        .then(res=>{console.log(res.user);})
        .catch(error=>{console.log(error);})
    }
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(res=>{console.log(res.user);})
        .then(error=>console.log(error))
    }
    const handleGithubSignIn=()=>{
        signinWithGithub()
        .then(res=>{console.log(res.user);})
        .then(error=>{console.log(error);})
    }
  return (
 <div>
     <h1 className="text-3xl font-bold text-center text-orange-500">Login</h1>
       <div className=" min-h-screen flex md:flex-row flex-col justify-center items-center">
       
       <div className="md:w-1/2">
         <img src={img} alt="" />
       </div>
    <div className="md:w-1/2 shadow-md rounded-lg border p-8 space-y-2">
    <form className="mx-auto  " onSubmit={handleLogin}>
       <fieldset className="space-y-1">
         <Label htmlFor="name">Email</Label>
         <div className="relative">
           <Input placeholder="Enter email" name="email" className="ps-11 w-3/4" />
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
         Sign In
       </Button>
     </form>
     <div>
       <p className="font-bold">Login with Another Way</p>
       <div className="flex gap-2 mt-2">
        <div><Button onClick={handleGoogleSignIn} color="error" className="hover:bg-transparent hover:text-black">Login with Google</Button></div>
        <div> <Button onClick={handleGithubSignIn} color="primary" className="">Login with Github</Button></div>
       </div>
       <p className="text-2xl mt-2">New to cars doctor? <Link className="text-orange-600 " to={"/signup"}>Sign Up</Link></p>
     </div>
    </div>
     
   </div>
 </div>
  );
};

export default Login;
