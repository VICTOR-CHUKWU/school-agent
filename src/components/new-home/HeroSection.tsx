import React from 'react'
import Image from 'next/image'
import { AnimateScrollReveal, Container } from '../shared'
import { useRouter } from 'next/router'
import S from "@/styles/pages/home/home.module.scss";

const HeroSection = () => {
    const router = useRouter()
    const navigateToSchools = () => {
        router.push(`/studies/schools/`);
    };
    return (
        <Container className='relative h-[34rem] lg:h-[49rem]'>
            <Container className={`absolute top-0 left-0 z-[0] w-full h-full`}>
                <Image
                    src={`/img/male.jpg`}
                    alt="Your Image"
                    fill
                    className=" object-cover object-center"
                />
            </Container>
            <Container className=' container flex flex-col items-center md:items-end justify-center h-full'>
                <AnimateScrollReveal duration={1.3} className={` glass w-full md:w-2/3 lg:w-1/2 py-20 px-8 ${S.bgWhite50t}`}>
                    <AnimateScrollReveal animName='fadeInRight' duration={1.75} delay={0.12} as='h3' className=' mb-2 text-2xl font-bold text-default-blue capitalize'>
                        Discover Your Ideal Study Destination
                    </AnimateScrollReveal>
                    <Container as='p' className=' mb-5 text-base text-slate-700'>
                        Explore and Select from a Wide Range of Global Study Destinations, Tailoring Your Ideal Educational Experience Abroad
                    </Container>
                    <AnimateScrollReveal allowOverflow duration={1.75} delay={0.12} className=' w-1/2 mt-2'>
                        <button onClick={() => navigateToSchools()} className='button button-primary px-3'>Explore Now</button>
                    </AnimateScrollReveal>
                </AnimateScrollReveal>
            </Container>
        </Container>
    )
}

export default HeroSection