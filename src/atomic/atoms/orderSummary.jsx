export function OrderSummary() {
  return (
    <div className="w-[20rem] p-5 rounded-xl">
      <h4 className="font-semibold pb-5">Order Summary</h4>
      <div className="flex justify-between pb-2">
        <p className="font-medium">Subtotal</p>
        <span className="font-semibold">$85.96</span>
      </div>
      <div className="flex justify-between pb-2">
        <p className="font-medium">Tax</p>
        <span className="font-semibold">$6.88</span>
      </div>
      <div className="flex justify-between pb-3">
        <p className="font-medium">Shipping</p>
        <span className="font-semibold">$0.00</span>
      </div>
      <hr/>
      <div className="flex justify-between py-3">
        <p className="font-bold">Total</p>
        <span className="font-semibold">$92.84</span>
      </div>
      <button className="bg-black text-white w-64 h-8 rounded-lg ">Pay now</button>
    </div>
  );
}
