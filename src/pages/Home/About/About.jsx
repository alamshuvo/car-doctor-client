import person from './../../../../public/assets/images/about_us/person.jpg'
import parts from './../../../../public/assets/images/about_us/parts.jpg'
import { Button } from 'keep-react'
const About = () => {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className=" lg:w-1/2 text-center relative">
                <img src={person} alt="" className="w-3/4 rounded-lg shadow-xl" />
                <img src={parts} alt="" className="absolute right-5 top-1/2 border-white border-4 w-1/2 rounded-lg shadow-lg"/>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg space-y-5 lg:text-left">
              <h3 className='text-3xl text-orange-600 font-bold'>About Us</h3>
              <h1 className='text-black font-bold text-3xl'>We are qualified & of experience in this field</h1>
              <p className='font-bold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              <p className='font-bold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              <Button className='w-1/2' color='error' varient='link'>Get More Info</Button>
            </div>
        </div>
    </section>
    );
};

export default About;