import Hero from "./components/Hero";
import Description from "./components/Description";
import Ubicacion from "./components/Ubicacion";
import Departamentos from "./components/Departamentos";
import AreasComunes from "./components/AreasComunes";
import SobreRoden from "./components/SobreRoden";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Ubicacion />
      <Departamentos />
      <AreasComunes />
      <SobreRoden />
      <Contacto />
    </>
  );
}
