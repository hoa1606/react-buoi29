export function Money() {
  return (
    <div className="py-7">
      <div className="flex items-center gap-4">
        <h3 className="text-4xl font-bold ">$99.00</h3>
        <span className=" p-1 bg-blue-400 rounded-sm font-medium text-blue-700">
          -25%
        </span>
      </div>
      <p className="text-slate-400 line-through">$132.00</p>
    </div>
  );
}
