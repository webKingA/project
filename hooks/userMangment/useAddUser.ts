import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import StoreQueryClient from "../../utils/storeQueryClient";
import { IUser } from "../../interface/users.interface";
import { toast } from "react-toastify";

export default function useAddUser() {
  return useMutation(
    async (values:
      {   email: string;
		firstName: string;
		lastName: null;
		phoneNumber: string;
		userName: string;
		password: string;
		confirmPassword: string; callBack?: (error?:any) => void }) => {
      const {   email,
		firstName,
		lastName,
		phoneNumber,
		userName,
		password,
		confirmPassword } = values;
      await Fetch({
        url: `/UsersManager/createuser`,
        method: ERequest.POST,
        data:{
			email,
			firstName,
			lastName,
			phoneNumber,
			userName,
			password,
			confirmPassword
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
		  const data = queryClient?.getQueryData("users");
          queryClient?.invalidateQueries(`users`);
        //   const queryClient = storeQueryClient.getQueryClient();
		  console.log("--------------------",storeQueryClient,queryClient ,data);
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
