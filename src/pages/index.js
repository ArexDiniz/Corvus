import Head from "next/head";
import { Header } from "../components/Header";
import { Feature } from "../components/Feature";

export default function Home() {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Corvus Gaming</title>
      </Head>

      <Header />

      <Feature />
    </div>
  );
}
