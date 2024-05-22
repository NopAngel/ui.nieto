import Footer from "./components/Footer.jsx";
import React from "react";
import CardMain from "./components/ui/CardMain";
import TextGradient from "./components/ui/TextGradient";
import Card from "./components/ui/Card";
import Badge1 from "./components/ui/Badge1";
import Badge2 from "./components/ui/Badge2";
import CardAnim from "./components/ui/CardAnim";
import Input from "./components/ui/Input";
import Navbar from "./components/Navbar";
import BtnShadow from "./components/ui/BtnShadow";

function App() {
  return (
    <main className="flex justify-center">
      <section className="absolute left-0 right-0 top-0 -z-10 h-52 bg-gradient-to-b from-violet-400/10 from-10% to-black">
        <Navbar />
        <article>
          <div className="w-[90%] mx-auto mt-[30px] text-center">
            <h1 className="text-4xl font-bold text-transparent bg-gradient-to-t from-violet-400/10 to-white bg-clip-text w-[500px] mx-auto">
              Una Coleción de Elementos Dark Mode con efectos.
            </h1>
            <p className="text-2xl p-[6px] text-slate-700">
              Usando <span className="text-white">React y TailwindCSS</span>
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:w-[800px] mx-auto mt-[40px] w-[40%] text-center">
            <CardMain
              TitleElements="Text Gradient"
              HrefElement="href"
              ButtonElement=<TextGradient />
            />
            <CardMain
              TitleElements="Mi Card!"
              HrefElement="href"
              ButtonElement=<Card />
            />

            <CardMain
              TitleElements="Badge"
              HrefElement="href"
              ButtonElement=<Badge1 />
            />

            <CardMain
              TitleElements="Badge Animated"
              HrefElement="href"
              ButtonElement=<Badge2 />
            />

            <CardMain
              TitleElements="Card Gradient"
              HrefElement="href"
              ButtonElement=<CardAnim />
            />

            <CardMain
              TitleElements="Input Gradient"
              HrefElement="href"
              ButtonElement=<Input />
            />

            <CardMain
              TitleElements="Button Shadow."
              HrefElement="href"
              ButtonElement=<BtnShadow />
            />
          </div>
          <Footer />
        </article>
      </section>
    </main>
  );
}

export default App;
