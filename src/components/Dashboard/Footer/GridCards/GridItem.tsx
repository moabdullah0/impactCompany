import FourCard from "./Cards/FourCard";
import TwoCard from "./Cards/TwoCard";
const ThreeGridItem = () => {
  return (
    <div className="grid lg:grid-cols-2 sm:grid-col-1 gap-4 mt-10">
      <FourCard />
      <TwoCard />
    </div>
  );
};

export default ThreeGridItem;
