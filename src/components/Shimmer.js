const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-950 min-h-screen">

      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-[300px] bg-gray-900 rounded-2xl overflow-hidden shadow-lg animate-pulse border border-gray-800"
          >

            <div className="h-52 bg-gray-800"></div>

            <div className="p-4 space-y-4">

              <div className="h-6 bg-gray-800 rounded w-3/4"></div>

              <div className="h-4 bg-gray-800 rounded w-full"></div>

              <div className="h-4 bg-gray-800 rounded w-5/6"></div>

              <div className="flex justify-between items-center pt-2">

                <div className="space-y-2 w-1/2">
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                  <div className="h-5 bg-gray-800 rounded w-2/3"></div>
                </div>

                <div className="h-10 w-20 bg-gray-800 rounded-xl"></div>

              </div>

            </div>

          </div>
        ))}
    </div>
  );
};

export default Shimmer;