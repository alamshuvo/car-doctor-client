import { useEffect, useState } from "react";
// import img from 'next/img'
import { Button, Card } from 'keep-react'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then((res)=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[])
    return (
        <div>
            <div className="text-center"> 
                <p className="text-orange-500 font-bold">Service</p>
                <h1 className="text-3xl font-bold">Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>

            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  mt-5 gap-4">
                {
                    services.map(service=><Card key={service._id} className="shadow-xl">
                        <Card.Header>
                          <img src={service.img} alt="img" className="w-full " />
                        </Card.Header>
                        <Card.Content className="space-y-3">
                          <Card.Title>{service.title}</Card.Title>
                          <Card.Description>
                          {/* {service.description.slice(1,200)} */}
                          <p className="text-orange-500 text-xl font-bold">$Price:{service.price}</p>
                          </Card.Description>
                          <Button size="sm" color="error">
                            Buy Now
                          </Button>
                        </Card.Content>
                      </Card>)
                }
            </div>
        </div>
    );
};

export default Services;