import FaqComp from "./FaqComp";

export default function Faq() {
  return (
    <>
      <div className="w-[87%] bg-[#FAFAFA] mb-32 mx-auto rounded-lg p-14">
        <div className="">
          <h1 className="uppercase">Frequently asked questions</h1>
          <h1 className="text-5xl md:text-6xl">FAQs</h1>
        </div>
        <FaqComp />
      </div>
    </>
  );
}
