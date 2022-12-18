import { useQuery } from "react-query";
import { IFindflightreserves } from "../../interface/confilict.interface";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";

export default function useFindflightreserves(id:number) {
  const key = `findflightreserves`;
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IFindflightreserves>({
        url: `FlightReserves/findflightreserves?id=${id}`,
        method: ERequest.GET,
      });
      return response;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
	  enabled:true,
    },
  );
}
