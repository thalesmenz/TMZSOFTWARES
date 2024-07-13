"use client"

import Apresentation from "@/components/Apresentation";
import Header from "@/components/Header";
import Informations from "@/components/Informations/index";
import Testemonials from "@/components/Testemonials";
import * as S from "./styles"
import ContactUs from "@/components/ContactUs";
import Whats from "../assets/whatsapp-logo.svg"
import Image from "next/image";

export default function Home() {
  
  function OpenWhatsApp() {
    const linkWhatsApp = `https://wa.me/${'19991099949'}?text=${"Olá gostaria de falar sobre meu projeto"}`;

    window.open(linkWhatsApp);
}

  return (
    <>
      <Header />
      <Apresentation OpenWhatsApp={() => OpenWhatsApp()} />
      <Informations />
      <Testemonials />
      <ContactUs />
      <S.WhatsContainer onClick={OpenWhatsApp}>
        <Image src={Whats} alt="Whatsapp" width={50} height={50} />
      </S.WhatsContainer>
    </>
  );
}
