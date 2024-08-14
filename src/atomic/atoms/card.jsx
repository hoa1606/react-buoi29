export default function Card({ hinhAnh, tenSP, gia, soLuong }) {
  return (
    <div className="w-[28rem] h-[10rem] border p-4 rounded-xl shadow-md mx-2 flex">
      <img
        className="w-20 object-center rounded-xl mb-4"
        src={hinhAnh}
        alt={tenSP}
      />
      <div className="mx-6">
        <h3 className="text-lg font-bold mt-5">{tenSP}</h3>
        <p className="mt-5"> {soLuong}</p>
      </div>
      <p className="text-gray-700 pt-20 mx-6 font-bold">${gia}</p>
    </div>
  );
}
