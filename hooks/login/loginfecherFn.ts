import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";

export default function LoginfecherFn() {
  return useMutation(
    async (values: {
      userName: string;
      password: string;
      callBack?: (result: any) => void;
    }) => {
      const { userName, password } = values;
      let response = await Fetch({
        url: `/v1/Login/login`,
        method: ERequest.POST,
        data: {
          userName,
          password,
          rememberMe: true,
        },
      });
      localStorage.setItem("access", response.access);
      return response;
    },
    {
      onMutate: (values) => {
        //
      },
      onSuccess: (result, values) => {
        const { callBack } = values;
        callBack?.(result);
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
