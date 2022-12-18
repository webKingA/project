import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { IRoleResualt } from "../../interface/roles.interface";
import Fetch from "../../utils/fetch";

export default function useGetFlightReserve(pageNumber:number|null=null,pageSize:number=0) {
  const key = [`getflightreservess`, pageNumber,pageSize];
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IRoleResualt[]>({
        url: `/FlightReserves/getflightreservereport`,
        method: ERequest.POST,
        data: {
          pageNumber: pageNumber,
          pageSize: pageSize,
          id: null,
          fk_SPId: null,
          fk_COId: null,
          fk_AirlineId: null,
          reserveStatus: null,
          trackingNumber: null,
          reserverMobile: null,
          srcFlightDate: null,
          desFlightDate: null,
          flightNo: null,
          isConflictCustomer: false,
          isConflictCredit: false,
          isConflictCancelSeat: false,

		  fk_SrcCityId: null,
		  fk_DestCityId: null,
		  startReserveDate: null,
		  endReserveDate: null,
		  reserveDate: null,
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
