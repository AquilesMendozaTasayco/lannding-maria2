import Hero from "./components/Hero";
import Description from "./components/Description";
import Ubicacion from "./components/Ubicacion";
import Departamentos from "./components/Departamentos";
import Contacto from "./components/Contacto";
import Features from "./components/Features";
import Galeria from "./components/Galeria";
import AvancesObra from "./components/AvancesObra";
import VideosPromocionales from "./components/VideosPromocionales";

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Features />
      <Galeria />
      <Departamentos />
      <Ubicacion />
      <AvancesObra />
      <VideosPromocionales />
      <Contacto />
    </>
  );
}
