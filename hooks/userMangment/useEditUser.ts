import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";

export default function useEditUser() {
  return useMutation(
    async (values: {
		id: number;
		userName: string;
		firstName: string;
		lastName: string;
		email: string;
		// "dateOfBirth": "string",
		// "isAdminEdit": true,
		phoneNumber: string;
		callBack?: (error?:any) => void
    }) => {
      const { id,userName,
		firstName,
		lastName,
		email,
		// "dateOfBirth": "string",
		// "isAdminEdit": true,
		phoneNumber } = values;
      await Fetch({
        url: `/UserProfile/updateuser`,
        method: ERequest.POST,
        data: {
			id,
			userName,
			firstName,
			lastName,
			email,
			// "dateOfBirth": "string",
			// "isAdminEdit": true,
			phoneNumber,
			isAdminEdit: true
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
