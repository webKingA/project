import { useMutation } from "react-query";
import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";

export default function useResolveconflict() {
  return useMutation(
    async (values: {
      flightReserveId: number;
      flightPassengerId: number | null;
      callBack?: (error?: any) => void;
    }) => {
      const { flightReserveId, flightPassengerId } = values;
      await Fetch({
        url: `/InternalFlight/resolveconflict`,
        method: ERequest.POST,
        data: {
          flightReserveId,
          flightPassengerId,
        },
      });
    },
    {
      onMutate: (values) => {
        //
      },
      onSuccess: (result, values) => {
        const { callBack } = values;
        callBack?.();
      },
      onSettled: () => {
        //
      },
      onError: (error: any, values) => {
        //

        if (
          error &&
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          const { callBack } = values;
          callBack?.(error.response.data.errors);
        }
      },
    }
  );
}
