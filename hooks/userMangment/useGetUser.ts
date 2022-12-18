import { useQuery } from "react-query";
import { ERequest } from "../../interface/enum";
import { IRole, IUser } from "../../interface/users.interface";
import Fetch from "../../utils/fetch";

export default function useGetUser(id?:number) {
  const key = `user-${id}`;
  return useQuery(
    key,
    async () => {
      const response = await Fetch<IUser>({
        url: `/UserProfile/getuser?id=${id}`,
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
