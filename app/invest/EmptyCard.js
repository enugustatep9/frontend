import "@/app/invest/EmptyCard.css";
import greenRec from "@/public/images/invest_rectangle.png";
import orangeRec from "@/public/images/invest_rectangle_sm.png";
import cart from "@/public/images/inv_agric_cart.svg";
import Image from "next/image";
export default function EmptyCard({ value }) {
  return (
    <>
      <div className="emptyCard">
        <div className="empty_bar">
          <Image src={greenRec} alt="green rectangle" className="bar__1 img1" />
          <Image
            src={orangeRec}
            alt="orange rectangle"
            className="bar__2 img1"
          />
        </div>
      </div>
    </>
  );
}
