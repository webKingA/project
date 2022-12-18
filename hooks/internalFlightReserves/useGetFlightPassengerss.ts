import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { IFlightPassengersList } from "../../interface/flightPassengersList.interface";
import Fetch from "../../utils/fetch";

export default function useGetFlightPassengerss(fk_FlightReserveId?: any) {
  const key = `fk_FlightReserveId_${fk_FlightReserveId}`;
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IFlightPassengersList>({
        url: `/FlightPassengers/getFlightPassengerss`,
        method: ERequest.POST,
        data: {
          pageNumber: null,
          pageSize: null,
          fk_FlightReserveId,
        },
      });
      return response;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: true,
      keepPreviousData: true,
    }
  );
}
