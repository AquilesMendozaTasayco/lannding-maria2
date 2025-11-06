export default function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-[#004A99] text-white text-center px-6">
      <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-3 rounded-md text-black"
        />
        <input
          type="email"
          placeholder="Correo"
          className="w-full p-3 rounded-md text-black"
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full p-3 rounded-md text-black"
        />
        <textarea
          placeholder="Mensaje"
          className="w-full p-3 rounded-md text-black h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-[#00A651] px-6 py-3 rounded-md font-semibold hover:bg-[#009444] transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
}
