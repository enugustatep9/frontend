import Image from "next/image";
import Button from "../components/button/Button";
import CardImg from "../../public/images/hero1.png";

export default function Card3() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <button className="bg-primary text-secondary py-2 px-12 rounded-md font-bold flex items-center gap-10">
            Enugu Igbo
            <img src="../../../images/arrow_slant_green.svg" />
          </button>
          <div className="bg-white  w-full md:w-[70%] rounded-md mt-5 p-7">
            <p>
              Énugwú: Enugu State's Capital City in Nigeria, nestled in the
              southeast. With a population of 820,000, its name originates from
              'Énú Ụ́gwụ́', signifying 'hill top' in Igbo. Enugu, once
              Enugwu-Ngwo, transformed into its current name in 1928, reflecting
              rapid expansion and cultural evolution
            </p>
          </div>
        </div>
        <div className="col-span-2 mt-5 md:mt-0 bg-white rounded-lg">
          <div>
            <Image
              src={CardImg}
              className="mx-auto w-full h-72 p-5 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Image
                src={CardImg}
                className="mx-auto w-full h-72 p-5 rounded-lg"
              />
            </div>
            <div>
              <Image
                src={CardImg}
                className="mx-auto w-full h-72 p-5 rounded-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-3">
            <div>
              <Image
                src={CardImg}
                className="mx-auto w-full h-72 p-5 rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <Image
                src={CardImg}
                className="mx-auto w-full h-72 p-5 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
