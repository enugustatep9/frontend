import Image from "next/image";
import Tech from "@/public/images/gov_personel2.png";
import Icon1 from "@/public/images/gov_icon.svg";
import Icon2 from "@/public/images/gov_icon2.svg";

export default function AboutDr() {
  return (
    <>
      <div className="w-[90%] mx-auto flex justify-end mt-10">
        <h1 className="font-bold text-[24px] md:text-[64px] font-[Clash Display] ">
          About Dr Peter Mbah
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto gap-10 mt-10">
        <div className="md:col-span-2 hidden md:block">
          <Image
            src={Tech}
            className="h-[289px] md:h-[555px] md:w-[100%] object-cover rounded-[20px]"
          />
        </div>
        <div>
          <div className="bg-white w-[100%] h-[288px] rounded-[14px] md:h-[552px] relative">
            <p className="p-10 md:p-20 text-[9.373px]  md:text-[18px] leading-[12.607px]  md:leading-[24.21px]">
              <span className="font-bold">
                Énugwú: Enugu State's Capital City in Nigeria, nestled in the
                southeast.
              </span>{" "}
              With a population of 820,000, its name originates from 'Énú Ụ́gwụ́',
              signifying 'hill top' in Igbo. Enugu, once Enugwu-Ngwo,
              transformed into its current name in 1928, reflecting rapid
              expansion and cultural evolution
            </p>
            <Image
              src={Icon1}
              className="absolute right-0 bottom-0 sm:hidden md:block"
            />
            <Image
              src={Icon2}
              className="absolute right-0 bottom-0 md:hidden"
            />
          </div>
        </div>
        <div className="md:col-span-2 block md:hidden">
          <Image
            src={Tech}
            className="h-[289px] md:h-[555px] md:w-[100%] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </>
  );
}
