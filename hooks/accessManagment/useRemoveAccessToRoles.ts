import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";


export default function useRemoveAccessToRoles() {
  return useMutation(
    async (values: {
      roleId: number;
      access: string;
      callBack?: (error?:any) => void;
    }) => {
      const { roleId,
		access } = values;
      await Fetch({
        url: `/RoleManager/removeaccess?roleId=${roleId}&access=${access}`,
        method: ERequest.PUT,
      });
    },
    {
      onMutate: (values) => {
        //
      },
      onSuccess: (result, values) => {
        const { callBack } = values;

        const storeQueryClient = StoreQueryClient.getInstance();
        const queryClient = storeQueryClient.getQueryClient();
        queryClient?.invalidateQueries(`roles`);
		// console.log("--------")
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
    }
  );
}
