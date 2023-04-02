import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      Welcome To Yao's Page
      <Navbar />
      <AboutMe />
      <Projects />
    </>
  );
}
