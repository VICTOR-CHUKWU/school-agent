"use client";
import React, { RefObject, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimateScrollReveal, Container } from "../shared";
import { studyCountries } from "@/data/studies";
import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useRouter, useParams } from "next/navigation";
import S from "@/styles/pages/studies/study.module.scss";
import Faqs from "../Faqs";
import { states } from "@/data";
type SectionRef = RefObject<HTMLDivElement>;

const Country = () => {
    const router = useRouter();
    const contactRef = useRef(null);
    const guideRef = useRef(null);
    const aboutRef = useRef(null);
    const { id } = useParams();

    function scrollToSection(ref: SectionRef) {
        console.log(ref, "refs");

        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const navigateToIdPage = (schoolId: number) => {
        router.push(`/studies/countries/${id}/university/${schoolId}`);
    };
    const renderCountries = useCallback(
        (
            { img, name, url }: { img: string; name: string; url: string },
            i: number
        ) => {
            return (
                <AnimateScrollReveal
                    onClick={() => navigateToIdPage(1)}
                    delay={i * 0.12}
                    key={i}
                    className={`rounded-md border-[1px]  relative w-full h-auto transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-1`}
                >
                    <Container className=" w-full relative h-[12rem] rounded-t-md">
                        <Image src={`${img}`} alt="name" layout="fill" objectFit="cover" />
                    </Container>
                    <Container className=" mt-4 px-7 mb-4">
                        <Container
                            as="h5"
                            className="text-slate-500 text-center font-semibold text-lg mb-2"
                        >
                            {name}
                        </Container>
                        <Container as="p" className=" text-lg text-center">
                            We assist in rendering support to individuals seeking any form of
                            educational advancement overseas through personalized admission
                            assistance and visa counseling.
                        </Container>
                    </Container>
                </AnimateScrollReveal>
            );
        },
        []
    );
    return (
        <>
            <Container className=" container grid grid-cols-1 lg:grid-cols-4 gap-10 my-16">
                <Container as="aside" className="col-span-1">
                    <Container
                        as="h4"
                        className="textBorder font-bold text-xl md:text-2xl capitalize"
                    >
                        user guide
                    </Container>
                    <Container className="bg-slate-100 rounded-md py-4 mt-10">
                        <Container as="ul">
                            <Container
                                as="li"
                                onClick={() => scrollToSection(aboutRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                About
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(contactRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Learn More
                            </Container>
                            <Container
                                as="li"
                                onClick={() => scrollToSection(guideRef)}
                                className={`border-b-2 border-white w-full py-2 text-slate-800 ${S.guide}`}
                            >
                                Why Study Here
                            </Container>
                        </Container>
                    </Container>
                </Container>
                <Container as="section" className=" col-span-1 lg:col-span-3">
                    <Container
                        as="h4"
                        className="textBorder font-bold text-xl md:text-3xl capitalize"
                    >
                        Explore Universities
                    </Container>
                    <Container className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                        {studyCountries.map(renderCountries)}
                    </Container>
                </Container>
            </Container>
            <Container className=" container mb-8">
                <div ref={aboutRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        About Study in Uk
                    </Container>
                    <Container as="p" className=" my-4">
                        When people think of Australia, they see wide open spaces of outback
                        bush, kangaroos, koalas, and clean air and water.
                    </Container>
                    <Container as="p">Australia is so much more than that.</Container>
                    <Container as="p">
                        Many international students choose to study in Australia because of
                        its friendly, laid-back nature, excellent education system, and a
                        high standard of living.
                    </Container>
                </div>
                <div ref={contactRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11 mb-8">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        Get In touch with us to start you application
                    </Container>
                    <Container className=" my-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                First name
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="first name"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                last name
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <UserIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="surname"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                email
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <EnvelopeIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="@gmail.com"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium capitalize text-blue-600 "
                            >
                                phone number
                            </Container>
                            <Container
                                as="span"
                                className="relative text-gray-400  block h-12"
                            >
                                <PhoneIcon className="pointer-events-none text-blue-600 w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-3" />
                                <input
                                    type="tel"
                                    name="phoneNumner"
                                    placeholder="0902345678"
                                    className="bg-transparent border px-3 border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block h-full w-full"
                                />
                            </Container>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-blue-600"
                            >
                                Highest Level of Education
                            </Container>
                            <select
                                id="countries"
                                className="bg-gray-50 h-12 border border-gray-300 text-gray-400 text-sm rounded-lg focus:border-gray-700 block w-full p-2.5"
                            >
                                <option selected>Choose a education level</option>
                                <option value="bsc">Bachelors</option>
                                <option value="msc">Masters</option>
                                <option value="high-school">High School</option>
                                {/* <option value="DE">Germany</option> */}
                            </select>
                        </Container>
                        <Container>
                            <Container
                                as="label"
                                className="block mb-2 text-sm font-medium text-blue-600"
                            >
                                Which state are you located
                            </Container>
                            <select
                                id="states"
                                className="bg-transparent h-12 border border-gray-300 focus:border-gray-400 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                            >
                                <option selected>Choose a state</option>
                                {
                                    states.map((el) => (
                                        <option key={el.value} value={el.value}>{el.text}</option>
                                    ))
                                }

                            </select>
                        </Container>
                    </Container>
                    <Container className=" flex items-center justify-center mt-3">
                        <button className="bg-gradient-primary w-60 h-16 text-white text-base font-semibold rounded-md flex items-center transition-all duration-300 justify-center hover:-translate-y-1">
                            Contact me with more info
                        </button>
                    </Container>
                </div>
                <div ref={guideRef} className=" rounded-md shadow-md py-9 px-2 lg:px-11">
                    <Container
                        as="h5"
                        className=" textBorder font-bold text-lg md:text-3xl capitalize"
                    >
                        Guides and FAQ
                    </Container>
                    <Faqs />
                </div>
            </Container>
        </>
    );
};

export default Country;
