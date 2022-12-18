import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { IUserResualt } from "../../interface/users.interface";
import Fetch from "../../utils/fetch";

export default function useGetUsers(pageNumber:number|null=null,pageSize:number=0) {
  const key = [`users`,pageNumber,pageSize];
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IUserResualt[]>({
        url: `UsersManager/SearchUsers`,
        method: ERequest.POST,
		data:{
			"pageNumber": pageNumber,
			"pageSize":pageSize,
			"textToFind": null,
			"isPartOfEmail": null,
			"isUserId": null,
			"isPartOfName": null,
			"isPartOfLastName": null,
			"isPartOfUserName": null,
			"userIsActive": null,
			"showAllUsers": null
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
