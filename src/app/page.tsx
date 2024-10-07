import Home from "../components/home";
import Head from "next/head";

export const metadata = {
  title: "Gamma Developers",
  description: "Gamma Developers is a leading software development company offering custom software, website development, mobile apps, AI solutions, and drag-and-drop website builders to help businesses grow and succeed.",

  keywords: "Gamma Developers, website Development, developement , Software Company, Gamma, Developer,Mian Abubakar,Ghulam,Ibrahim ch, development",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Page() {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.png"/>
    </Head>
      <Home/>
    </>
  );
}
