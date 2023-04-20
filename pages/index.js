import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import * as THREE from "three";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          baseColor: 0x12e3ba,
          backgroundColor: 0x0,
          amplitudeFactor: 1.5,
          xOffset: 0.43,
          yOffset: 0.2,
          size: 0.5,
          THREE: THREE,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div className={styles.main} ref={myRef}>
        {" "}
        <Navbar />
        <Homepage />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}
