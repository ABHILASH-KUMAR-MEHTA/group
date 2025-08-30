
import FloatingMenu from "@/components/layout/FloatingMenu"
import Layout from "@/components/layout/Layout"
import AboutSection from "./IntelligentSection";
import Expertise from "@/components/sections/Expertise"
import HeroSlider1 from "@/components/sections/HeroSlider1"
import Newsteller1 from "@/components/sections/Newsteller1"
import ProcessSectionCards from "@/components/sections/ProcessSectionCards"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Service19 from "../components/sections/Service19"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import { useState } from "react"
import Head from 'next/head'
import GetInTouch from "../components/sections/get-in-touch"

export default function Home1() {

    return (
        <>
            <Head>
                <title>nidham-us</title>
            </Head>
            <Layout headerStyle={1} footerStyle={1}>
                <HeroSlider1 />
                <AboutSection />
                <Service19 />
                <ProcessSectionCards />
                {/* <Project1 /> */}
                {/* <Testimonial1 /> */}
                {/* <Team1 /> */}
                <GetInTouch />
                <Newsteller1 />
            </Layout>
        </>
    )
}
