export default function Ubicacion() {
  return (
    <section id="ubicacion" className="py-16 bg-[#F5F7FA] text-center px-6">
      <h2 className="text-3xl font-bold text-[#004A99] mb-6">Ubicación</h2>
      <p className="mb-4 text-gray-700">Calle Venezuela #288, Urb. El Recreo - Trujillo</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8000669046353!2d-79.035!3d-8.112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnNDMuMiJTIDc5wrAwMicyNi45Ilc!5e0!3m2!1ses!2spe!4v0000000000000"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        className="border-0 rounded-lg shadow-md"
      ></iframe>
    </section>
  );
}
