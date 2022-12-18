import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";

export default function useSearchUsers() {
  return useMutation(
    async (values: {
		textToFind: string | null,
		isPartOfEmail: boolean | null,
		isUserId: boolean | null,
		isPartOfName: boolean | null,
		isPartOfLastName: boolean | null,
		isPartOfUserName: boolean | null,
		userIsActive: boolean | null,
		showAllUsers: boolean | null
		callBack?: (error?:any) => void
    }) => {
      const { textToFind,
		isPartOfEmail,
		isUserId,
		isPartOfName,
		isPartOfLastName,
		isPartOfUserName,
		userIsActive,
		showAllUsers  } = values;
       const response = await Fetch({
		url: `UsersManager/SearchUsers`,
        method: ERequest.POST,
        data: {
			textToFind,
		isPartOfEmail,
		isUserId,
		isPartOfName,
		isPartOfLastName,
		isPartOfUserName,
		userIsActive,
		showAllUsers: null
        },
      });
	  return response;
    },
    {
      onMutate: (values) => {
        //
      },
      onSuccess: (result, values) => {
        const {  callBack } = values;
     
          const storeQueryClient = StoreQueryClient.getInstance();
          const queryClient = storeQueryClient.getQueryClient();
          queryClient?.setQueriesData(`users`,result);

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
