import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";

export default function useActiveDeActive() {
  return useMutation(
    async (values: {
		id: number;
		isActive:boolean;
		callBack?: () => void
    }) => {
      const { id, isActive } = values;
      await Fetch({
        url: `/UsersManager/changeuserstat?userId=${id}&activate=${isActive}`,
        method: ERequest.GET,
        // data: {
		// 	isActive,
		// 	isAdminEdit: true
        // },
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
      onError: (error, values) => {
        //
      },
    },
  );
}
