import "@/app/invest/InvestHealthCard.css";
import greenRec from "@/public/images/invest_rectangle.png";
import orangeRec from "@/public/images/invest_rectangle_sm.png";
import cart from "@/public/images/health.svg";
import Image from "next/image";
export default function InvestHealthCard({ value }) {
  return (
    <>
      <div className="investCard">
        <div className="invest_bar">
          <Image
            src={greenRec}
            alt="green rectangle"
            className="bar___1 img1"
          />
          <Image
            src={orangeRec}
            alt="orange rectangle"
            className="bar___2 img1"
          />
        </div>
        <div className="cart">
          <Image src={cart} alt="cart" />
        </div>
        <div className="invest_text">
          <h4>{value}%</h4>
          <h5>
            <span>Increase in</span> <br />
            Health
          </h5>
        </div>
      </div>
    </>
  );
}
