export default function LandingSkeleton() {
  return (
    <div className="animate-pulse space-y-20 px-6 md:px-12 lg:px-24 py-16 bg-[#F5F7FA] mt-20">
      <section className="h-[85vh] w-full bg-gray-200 rounded-2xl shadow-inner relative overflow-hidden">
        <div className="absolute bottom-12 left-12">
          <div className="h-10 w-72 bg-gray-300 rounded mb-3"></div>
          <div className="h-6 w-80 bg-gray-300 rounded"></div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="h-6 w-48 bg-gray-300 rounded"></div>
          <div className="h-10 w-96 bg-gray-300 rounded"></div>
          <div className="h-4 w-80 bg-gray-200 rounded"></div>
          <div className="h-4 w-72 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
          <div className="flex gap-4 mt-4">
            <div className="h-10 w-40 bg-gray-300 rounded"></div>
            <div className="h-10 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="h-[500px] bg-gray-200 rounded-2xl"></div>
      </section>

      <section>
        <div className="h-8 w-64 bg-gray-300 rounded mb-10 mx-auto"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded-2xl"></div>
          ))}
        </div>
      </section>

      <section>
        <div className="h-8 w-64 bg-gray-300 rounded mb-8 mx-auto"></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[16/10] bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </section>

      <section>
        <div className="h-8 w-72 bg-gray-300 rounded mb-8 mx-auto"></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-[400px] bg-gray-200 rounded-2xl"></div>
          <div className="space-y-4">
            <div className="h-6 w-64 bg-gray-300 rounded"></div>
            <div className="h-4 w-80 bg-gray-200 rounded"></div>
            <div className="h-4 w-72 bg-gray-200 rounded"></div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-3">
          <div className="h-8 w-64 bg-gray-300 rounded"></div>
          <div className="h-4 w-96 bg-gray-200 rounded"></div>
          <div className="h-4 w-80 bg-gray-200 rounded"></div>
          <div className="h-4 w-72 bg-gray-200 rounded"></div>
        </div>
        <div className="bg-gray-200 h-[300px] rounded-2xl"></div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10 mt-12">
        <div className="bg-gray-200 h-[480px] rounded-2xl"></div>
        <div className="space-y-3">
          <div className="h-8 w-72 bg-gray-300 rounded"></div>
          <div className="h-4 w-80 bg-gray-200 rounded"></div>
          <div className="h-4 w-72 bg-gray-200 rounded"></div>
          <div className="h-4 w-64 bg-gray-200 rounded"></div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-10 mt-12">
        <div className="h-[400px] bg-gray-200 rounded-2xl"></div>
        <div className="space-y-3">
          <div className="h-8 w-72 bg-gray-300 rounded"></div>
          <div className="h-4 w-80 bg-gray-200 rounded"></div>
          <div className="h-4 w-72 bg-gray-200 rounded"></div>
          <div className="h-10 w-48 bg-gray-300 rounded mt-4"></div>
        </div>
      </section>
    </div>
  );
}
