export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-[90vh] bg-[url('/hero-ma2.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center"
    >
      <div className="bg-black/40 absolute inset-0" />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PROYECTO EN VENTA</h1>
        <p className="text-lg md:text-xl font-medium">Residencial María Auxiliadora II</p>
      </div>
    </section>
  );
}
