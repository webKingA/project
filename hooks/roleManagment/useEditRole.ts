import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";

export default function useEditRole() {
  return useMutation(
    async (values: {
		id: number,
  name: string,
  description: string
		callBack?: () => void
    }) => {
      const { id,
		name,
		description} = values;
      await Fetch({
        url: `/RoleManager/editrole`,
        method: ERequest.PUT,
        data: {
			id,
		name,
		description
        },
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
          queryClient?.invalidateQueries(`roles`);

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
