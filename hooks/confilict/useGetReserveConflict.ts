import { useQuery } from "react-query";
import { IConflictResponse } from "../../interface/confilict.interface";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";

export default function useGetReserveConflict(pageNumber:number|null=null,pageSize:number=0) {
  const key = [`confilicts`, pageNumber, pageSize];
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IConflictResponse>({
        url: `FlightReserves/getreserveconflict`,
        method: ERequest.POST,
		data:{
			"pageNumber": null,
			"pageSize": null,
			"fk_SPId": null,
			"fk_COId":null,
			"fk_AirlineId": null,
			"fk_SrcCityId": null,
			"fk_DestCityId": null,
			"startReserveDate": null,
			"endReserveDate": null,
			"flightNo": null,
			"trackingNumber": null,
			"isConflictCustomer": null,
			"isConflictCredit": null,
			"isConflictCancelSeat": null,
			"isPassengerConflictCustomer": null,
			"isPassengerConflictCredit":null,
			"isConflictProvider":null
		  }
      });
      return response;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
	  enabled:true,
	  keepPreviousData: true,
    },
  );
}
