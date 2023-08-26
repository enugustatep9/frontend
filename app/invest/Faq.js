import FaqComp from "./FaqComp";

export default function Faq() {
  return (
    <>
      <div className="w-[93%] bg-[#FAFAFA] mb-32 mx-auto rounded-[24px] p-6 md:p-14">
        <div className="">
          <h1 className="uppercase font-bold">Frequently asked questions</h1>
          <h1 className="text-5xl md:text-6xl font-bold">FAQs</h1>
        </div>
        <FaqComp />
      </div>
    </>
  );
}
