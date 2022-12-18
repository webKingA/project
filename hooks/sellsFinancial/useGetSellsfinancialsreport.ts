import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { reserveResponse } from "../../interface/report.interface";

import Fetch from "../../utils/fetch";

export default function useGetSellsfinancialsreport(pageNumber:number|null=null,pageSize:number=0) {
  const key = [`getflightreservess`, pageNumber, pageSize];
  return useQuery(
    key,
    async () => {
      const response = await Fetch<reserveResponse>({
        url: `/SellsFinancial/getsellsfinancialsreport`,
        method: ERequest.POST,
        data: {
			"pageNumber": pageNumber,
			"pageSize": pageSize,
			"fk_UserId": null,
			"fk_SPId": null,
			"fk_COId": null,
			"fk_TMSId": null,
			"fk_CWId": null,
			"fk_AirlineId": null,
			"reserveTransactionType": 1,
			"srcFlightDate": "",
			"srcFlightDateTo": "",
			"reserveDate": "",
			"reserveDateTo": ""
		  
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
