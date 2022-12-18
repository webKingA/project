import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { IRole } from "../../interface/users.interface";
import Fetch from "../../utils/fetch";

export default function useFinduserroles(id?:number) {
  const key = `users-Roles-${id}`;
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IRole[]>({
        url: `/UsersManager/finduserroles?id=${id}`,
        method: ERequest.GET,
      });
	  console.log("response",response)
      return response;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
	  enabled:true
    },
  );
}
