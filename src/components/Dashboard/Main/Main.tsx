import TitleandPro from "./FirstCardMain/TitleandPro";
import InfoProject from "./FirstCardMain/InfoProject";
import Projectmilestones from "./FirstCardMain/Projectmilestones";
import ChartGrid from "./ChartGridMain/ChartGrid";
import ThreeGridItem from "../Footer/GridCards/GridItem";

const Main = () => {
  return (
    <div className=" w-[105%]">
    
      <TitleandPro />
      <InfoProject />
      <Projectmilestones />
      <ChartGrid />
      <ThreeGridItem />
    </div>
  );
};

export default Main;
