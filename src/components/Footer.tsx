import React, { useCallback } from "react";
import Image from "next/image";
import { Container } from "./shared";
import Link from "next/link";
import { footerCountries, footerLinks } from "@/data";
import { UserIcon, EnvelopeIcon, PhoneIcon, HomeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
    const renderCountries = useCallback(
        ({ name, url }: { name: string; url: string }, i: number) => {
            return (
                <Link href={url} key={i}>
                    {name}
                </Link>
            );
        },
        []
    );

    const renderLinks = useCallback(
        ({ name, url }: { name: string; url: string }, i: number) => {
            return (
                <Link href={url} key={i} className=" hover:text-red-700">
                    {name}
                </Link>
            );
        },
        []
    );

    return (
        <Container as="footer" className="bg-gradient-to-b from-white to-blue-800 w-full py-10 overflow-x-clip">
            <Container className=" container flex justify-between gap-6 flex-wrap">
                <Container className=" w-[55%] md:w-[20%] shrink-0 text-sm flex flex-col gap-5">
                    <Link href="/" className=" relative ">
                        <Image
                            src='/img/logo.png'
                            alt="company logo"
                            width={100}
                            height={40}
                        />
                    </Link>
                    <Container as="p" className=" text-slate-800 text-sm">
                        We are a company that help you get your dream abroad school and
                        study with low stress
                    </Container>
                    <Container as="p" className=" text-slate-800">
                        Email: info@ghteducation.com
                    </Container>
                </Container>
                <Container className=" w-[35%] md:w-[15%] shrink-0">
                    <Container as="h5" className="text-slate-800 font-semibold text-xl">
                        Links
                    </Container>
                    <Container className="text-slate-800 text-sm flex flex-col gap-2 mt-6">
                        {footerLinks.map(renderLinks)}
                    </Container>
                </Container>
                <Container className=" w-full md:w-[30%] text-sm shrink-0">
                    <Container as="h5" className="text-slate-800 font-semibold text-xl">
                        Head Office
                    </Container>
                    <Container className=" text-slate-800 mt-4 flex items-center">
                        <HomeIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" />
                        No 18 Ezimgbu link Road GRA, Phase 4 Port Harcourt, Rivers State,
                        Nigeria.
                    </Container>
                    <Container as="p" className=" text-slate-800 mt-3 flex items-center flex-wrap gap-1">
                        <PhoneIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" /> <a href="tel:+234-903-0143-401">+234-903-0143-401</a> <a href="tel:+234-803-6718-217">+234-803-6718-217</a>
                    </Container>
                    <Container as="p" className=" text-slate-800 mt-3 flex items-center gap-1 flex-wrap">
                        <EnvelopeIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" /> <a href="mailto:info@ghteducation.com">info@ghteducation.com</a> <a href="mailto:globalht.education@gmail.com">globalht.education@gmail.com</a>
                    </Container>
                </Container>
                <Container className="w-full text-sm md:w-[20%] shrink-0">
                    <Container as="h5" className="text-slate-800 font-semibold text-xl">
                        Branch Office
                    </Container>
                    <Container className=" text-slate-800 mt-4 flex items-center">
                        <HomeIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" />
                        Kwara State Office No 6 Pack Close, GRA Ilorin, Kwara State,
                        Nigeria.
                    </Container>
                    <Container as="p" className=" text-slate-800 mt-3 flex items-center flex-wrap gap-1">
                        <PhoneIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" /> <a href="tel:+234-903-0143-401">+234-903-0143-401</a> <a href="tel:+234-803-6718-217">+234-803-6718-217</a>
                    </Container>
                    <Container as="p" className=" text-slate-800 mt-3 flex items-center gap-1 flex-wrap">
                        <EnvelopeIcon className="pointer-events-none text-slate-900 w-6 h-6 mr-1" /> <a href="mailto:info@ghteducation.com">info@ghteducation.com</a> <a href="mailto:globalht.education@gmail.com">globalht.education@gmail.com</a>
                    </Container>
                </Container>
            </Container>
        </Container>
    );
};

export default Footer;
