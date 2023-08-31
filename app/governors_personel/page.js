import GovernorDen from "../components/governor_den/GovernorDen";
import MainLayout from "../layouts/includes/MainLayout";
import AboutDr from "./AboutDr";
import GovSmCMob from "./GovSmCMob";
import GovTech from "./GovTech";
import GridComp from "./Grid";

export default function GovernorPersonel() {
  return (
    <>
      <MainLayout>
        <div className="mb-20">
          <div className="lg:block md:hidden sm:hidden">
            <GridComp />
          </div>
          <div className="sm:block md:block lg:hidden">
            <GovSmCMob />
          </div>

          <GovTech />
          <AboutDr />
          <GovTech />
        </div>
        <GovernorDen />
      </MainLayout>
    </>
  );
}
