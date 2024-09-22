//import Image from "next/image";
//import { Button } from "@/components/ui/button";

import '@radix-ui/themes/styles.css' ;

import Orby from '@/components/ui/explainer';
import Subtopic from '@/components/ui/testimonials';
import {  
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,} from "@/components/ui/carousel";
import Titros from '@/components/ui/details';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';






export default function Home() {
  return (
  
   <div className="h-auto w-screen">

<Navbar></Navbar>

<div className=''></div>

<div className='landingly h-screen w-screen text-center'>
  <h1 className=''>MAKE WAVES...NOT RIPPLES </h1> 
</div>

<Orby></Orby>

<div className='landingly flex flex-col w-screen h-auto overflow-x-hidden space-y-12'>

<Subtopic></Subtopic>

<div className='relative w-8/12 ml-20 '>
<Carousel>
  <CarouselContent >
    <CarouselItem>
          <p className='text-xl'> Great work, communicaion was timely and clear.I am in awe of the results. Highly recommend </p>
          <Titros></Titros>
    </CarouselItem>

    <CarouselItem>
          <p className='text-xl'> “Over the years, The Agency Creative have worked with us on everything from brand design, video, photography, copy, online and print. Projects are always approached with enthusiasm, care and a focus to deliver on-time and within the agreed budget.”.</p>
          <Titros></Titros>
    </CarouselItem>

    <CarouselItem>
          <p className='text-xl'> “I worked with the team to create our branding and website for our Restaurant. The Agency Creative helped us to create this by understanding what we wanted to achieve. Our branding that we achieved is exactly what we set out to achieve and we are very happy with all of the work. I would highly recommend The Agency Creative.”</p>
          <Titros></Titros>
    </CarouselItem>

  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
</div>


<Footer></Footer>

   </div>

   
  );

}
