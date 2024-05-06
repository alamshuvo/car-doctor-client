import { Carousel } from "keep-react";
import classNames from "embla-carousel-class-names";
import { Button } from "keep-react";
import img1 from "../../../../public/assets/images/banner/1.jpg";
import img2 from "../../../../public/assets/images/banner/2.jpg";
import img3 from "../../../../public/assets/images/banner/3.jpg";
import img4 from "../../../../public/assets/images/banner/4.jpg";
import img5 from "../../../../public/assets/images/banner/5.jpg";
import img6 from "../../../../public/assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="">
      <Carousel className="" options={{ loop: true }} plugins={[classNames()]}>
        <Carousel.Slides>
          {/* {Array.from({ length: 5 }).map((_, index) => (
          <Carousel.Item key={index} className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={img1} alt="Carousel Item" />
            
          </Carousel.Item>
        ))} */}

          <Carousel.Item className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <div className="relative w-full">
              <img className="rounded-xl" src={img1} alt="Carousel Item" />
              <div className="absolute md:flex hidden flex-col transform -translate-y-1/2 left-5 right-5  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]  bottom-0 w-2/4 p-2 space-y-2  mt-4">
                <h1 className="md:text-6xl text-white font-bold">
                  Affordable Price For Car Servicing
                </h1>
                <p className="text-white">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex mt-2">
                  <Button className="outline-white mr-2" color="primary" variant="outline">Button</Button>
                  <Button color="error">Button</Button>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={img2} alt="Carousel Item" />
          </Carousel.Item>
          <Carousel.Item className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={img3} alt="Carousel Item" />
          </Carousel.Item>
          <Carousel.Item className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={img4} alt="Carousel Item" />
          </Carousel.Item>
          <Carousel.Item className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={img5} alt="Carousel Item" />
          </Carousel.Item>
          <Carousel.Item className="flex-[0_0_70%] [&:not(.is-snapped)]:opacity-[0.16]">
            <img className="rounded-xl" src={img6} alt="Carousel Item" />
          </Carousel.Item>
        </Carousel.Slides>
        <Carousel.Control>
          <Carousel.Buttons>
            <Carousel.PrevButton />
            <Carousel.NextButton />
          </Carousel.Buttons>
          <Carousel.Indicators />
        </Carousel.Control>
      </Carousel>
    </div>
  );
};

export default Banner;
