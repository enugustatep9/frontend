import "@/app/invest/InvestAgricCard.css";
import greenRec from "@/public/images/inv_agric_green.svg";
import orangeRec from "@/public/images/inv_agric_orange.svg";
import cart from "@/public/images/investment_icon.svg";
import Image from "next/image";
export default function InvestAgricCard({ value }) {
  return (
    <>
      <div className="agricCard">
        <div className="agric_bar">
          <Image src={greenRec} alt="green rectangle" className="bar1 img1" />
          <Image src={orangeRec} alt="orange rectangle" className="bar2 img1" />
        </div>
        <div className="cart">
          <Image src={cart} alt="cart" />
        </div>
        <div className="agric_text">
          <h4>{value}%</h4>
          <h5>
            <span>Increase in</span> <br />
            Agriculture
          </h5>
        </div>
      </div>
    </>
  );
}
