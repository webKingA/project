import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";

export default function useChangeuserRoles() {
  return useMutation(
    async (values: {
		userId:number;
		roles:number[];
		callBack?: (error?:any) => void
    }) => {
      const { userId,
		roles} = values;
      await Fetch({
        url: `/UsersManager/changeuserroles?userId=${userId}`,
        method: ERequest.PUT,
		data:roles
        
      });
    },
    {
      onMutate: (values) => {
        //
      },
      onSuccess: (result, values) => {
        const {  callBack } = values;
     
          const storeQueryClient = StoreQueryClient.getInstance();
          const queryClient = storeQueryClient.getQueryClient();
          queryClient?.invalidateQueries(`users`);

        callBack?.();
      },
      onSettled: () => {
        //
      },
      onError: (error:any, values) => {
        //
	
		if(error && error.response && error.response.data && error.response.data.errors){
			const {  callBack } = values;
			callBack?.(error.response.data.errors);
		}
      },
    },
  );
}
