import Head from "next/head";
import Layout from "../layout";
import Presentation from "../layout/Presentation";
import Skills from "../layout/Skills";
import Footer from "../layout/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>David | Portfolio</title>
      </Head>
      <Layout>
        <Presentation />
        <Skills />
        <Footer />
      </Layout>
    </div>
  );
}
