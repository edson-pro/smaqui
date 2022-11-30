import { Fragment } from "react";
import Articles from "../components/Articles";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Pattners from "../components/Pattners";
import Stats from "../components/Stats";
import Contact from "./Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Pattners />
      <Faq />
      <Stats />
      <Articles />
      <Contact />
    </Fragment>
  );
}
