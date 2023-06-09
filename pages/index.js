import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { meta } from "@/data/config";

export default function Index() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Navbar />
      <div className="px-6 pt-6 md:px-16 max-w-4xl m-auto w-full -mt-[75px]">
        <Hero />
        <div className="p-0 space-y-10">
          <Projects />
          <Stack />
          <Contact />
        </div>
      </div>
      <div className="px-6 md:px-16">
        <Footer />
      </div>
    </>
  );
}
