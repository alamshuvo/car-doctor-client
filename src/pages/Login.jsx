import { Envelope, Lock } from "phosphor-react";
import { Button, Icon, Input, Label } from "keep-react";
import img from '../../public/assets/images/login/login.svg'
const Login = () => {
    const handleLogin=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
    }
  return (
 <div>
     <h1 className="text-3xl font-bold text-center text-orange-500">Login</h1>
       <div className=" min-h-screen flex md:flex-row flex-col justify-center items-center">
       
       <div className="md:w-1/2">
         <img src={img} alt="" />
       </div>
    <div className="md:w-1/2 shadow-md rounded-lg border p-8 space-y-2">
    <form className="mx-auto  ">
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
        <div><Button color="error" className="hover:bg-transparent hover:text-black">Login with Google</Button></div>
        <div> <Button color="primary" className="">Login with Github</Button></div>
       </div>
     </div>
    </div>
     
   </div>
 </div>
  );
};

export default Login;
