import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";
import { IUser } from "../../interface/users.interface";

export default function useAddRole() {
  return useMutation(
    async (values: {
      name: string;
      description: string;
      callBack?: () => void;
    }) => {
      const { name, description } = values;
      await Fetch({
        url: `/RoleManager/addrole`,
        method: ERequest.POST,
        data: {
          name,
          description,
        },
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
		console.log("--------")
        callBack?.();
      },
      onSettled: () => {
        //
      },
      onError: (error, values) => {
        //
      },
    }
  );
}
