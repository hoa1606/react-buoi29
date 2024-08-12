export function ChooseSize() {
  return (
    <div className=" bg-white rounded-lg ">
      <h2 className="text-xl font-bold mb-4">Choose Size</h2>
      <div className="flex space-x-2">
        <button className="w-16 h-16 flex items-center justify-center bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200  focus:bg-slate-900 focus:text-white">
          S
        </button>
        <button className="w-16 h-16 flex items-center justify-center bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200  focus:bg-slate-900 focus:text-white">
          M
        </button>
        <button className="w-16 h-16 flex items-center justify-center bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 focus:bg-slate-900 focus:text-white">
          L
        </button>
        <button className="w-16 h-16 flex items-center justify-center bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 focus:bg-slate-900 focus:text-white">
          XL
        </button>
      </div>
    </div>
  );
}
