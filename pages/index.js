import Head from "next/head";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Homepage from "@/components/Homepage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React, { useState, useEffect, useRef } from "react";
import HALO from "vanta/dist/vanta.halo.min";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const Monst = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(
  //       HALO({
  //         el: myRef.current,
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: true,
  //         minHeight: 100.0,
  //         minWidth: 100.0,
  //         baseColor: 0x12e3ba,
  //         backgroundColor: 0x0,
  //         amplitudeFactor: 2.5,
  //         xOffset: 0.4,
  //         yOffset: 0.1,
  //         size: 1.4,
  //         THREE: THREE,
  //       })
  //     );
  //   }

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          skyColor: 0x58b9de,
          cloudShadowColor: 0x192d41,
          sunColor: 0x662929,
          sunlightColor: 0xdea169,
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
        <div className={styles.snap}>
          {" "}
          <div className={Monst.className}>
            {" "}
            <Navbar />
            <Homepage />
            <About />
            <Skills />
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
