import "@/app/invest/InvestEstateCard.css";
import greenRec from "@/public/images/invest_rectangle.png";
import orangeRec from "@/public/images/invest_rectangle_sm.png";
import cart from "@/public/images/home-trend-up.svg";
import Image from "next/image";
export default function InvestEstateCard({ value }) {
  return (
    <>
      <div className="estateCard">
        <div className="estate_bar">
          <Image src={greenRec} alt="green rectangle" className="bar__1 img1" />
          <Image
            src={orangeRec}
            alt="orange rectangle"
            className="bar__2 img1"
          />
        </div>
        <div className="cart bg-[#FFEBD2] p-1 rounded-full">
          <Image src={cart} alt="cart" />
        </div>
        <div className="estate_text">
          <h4>{value}%</h4>
          <h5>
            <span>Increase in</span> <br />
            RealEstate
          </h5>
        </div>
      </div>
    </>
  );
}
