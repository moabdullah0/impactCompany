// import { useQuery } from "@tanstack/react-query";
// import HallData from "../data/Hall/HallData";
// import { Hall } from "../entities/Hall";







// const useHall = (selected: string | undefined) =>
//   useQuery<Hall[], Error>({
//     queryKey: ["halls", selected, "hall"],
//     queryFn: async () => {
//       if (selected) {
//         const itemsHall = HallData.flatMap((hall) => hall.items);
//         const filteredData = itemsHall.filter((item) => item.slug === selected);
//         return filteredData;
//       } else {
//         return HallData;
//       }
//     },
//   });

// export default useHall;
