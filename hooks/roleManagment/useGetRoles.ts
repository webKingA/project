import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { IRoleResualt } from "../../interface/roles.interface";
import Fetch from "../../utils/fetch";

export default function useGetRoles(pageNumber:number|null=null,pageSize:number=0) {
  const key = [`roles`,pageNumber, pageSize];
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IRoleResualt[]>({
        url: `/RoleManager/searchroles`,
        method: ERequest.POST,
		data:{
			"pageNumber": pageNumber,
			"pageSize": pageSize,
			"name": ""
		  }
      });
      return response;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: true,
	  keepPreviousData: true,
    },
  );
}
