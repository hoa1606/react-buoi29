import { BtAdd } from "../atoms/btAdd";
import { ChooseSize } from "../atoms/chooseSize";
import { Money } from "../atoms/money";
import { Title } from "../atoms/title";

export function SanPham() {
  return (
    <>
      <div className="flex gap-8">
        <div>
          <img
            className="w-16 h-20 object-cover border-2 border-transparent focus:border-blue-700 focus:rounded-lg mb-4 focus:outline-none"
            src="/img/ao-1.jpg"
            tabIndex="0"
          />
          <img
            className="w-16 h-20 object-cover border-2 border-transparent focus:border-blue-700 focus:rounded-lg mb-4 focus:outline-none"
            src="/img/ao-1.jpg"
            tabIndex="0"
          />
          <img
            className="w-16 h-20 object-cover border-2 border-transparent focus:border-blue-700 focus:rounded-lg focus:outline-none"
            src="/img/ao-1.jpg"
            tabIndex="0"
          />
        </div>
        <div className="mt-8">
          <img className="w-80" src="/img/ao-1.jpg" alt="" />
        </div>

        <div>
          <Title />
          <Money />
          <ChooseSize />
          <BtAdd />
        </div>
      </div>
    </>
  );
}
