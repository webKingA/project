import { ERequest } from "../../interface/enum";
import Fetch from "../../utils/fetch";
import { useMutation } from "react-query";
import StoreQueryClient from "../../utils/storeQueryClient";

export default function useSearchFlightReserve() {
  return useMutation(
    async (values: {
      reserveStatus: string | null;
      trackingNumber: string | null;
      reserverMobile: string | null;
      srcFlightDate: any;
      desFlightDate: any;
      flightNo: string | null;
      pageNumber: number;
      pageSize: number;
      isConflictCancelSeat: boolean;
      isConflictCredit: boolean;
      isConflictCustomer: boolean;
      fk_SrcCityId: string | null;
      fk_DestCityId: string | null;
      startReserveDate: string | null;
      endReserveDate: string | null;
      reserveDate: string | null;
      getResualt?: (data: any) => void;
      callBack?: (error?: any) => void;
    }) => {
      const {
        reserveStatus,
        trackingNumber,
        reserverMobile,
        srcFlightDate,
        desFlightDate,
        flightNo,
        pageNumber: pageNumber,
        pageSize: pageSize,
        isConflictCancelSeat,
        isConflictCredit,
        isConflictCustomer,
        fk_SrcCityId,
        fk_DestCityId,
        startReserveDate,
        endReserveDate,
        reserveDate,
      } = values;
      const response = await Fetch({
        url: `/FlightReserves/getflightreservereport`,
        method: ERequest.POST,
        data: {
          reserveStatus,
          trackingNumber,
          reserverMobile,
          srcFlightDate,
          desFlightDate,
          flightNo,
          pageNumber: pageNumber,
          pageSize: pageSize,
          isConflictCancelSeat,
          isConflictCredit,
          isConflictCustomer,
          fk_SrcCityId,
          fk_DestCityId,
          startReserveDate,
          endReserveDate,
          reserveDate,
        },
      });
      return response;
    },
    {
      onMutate: (values) => {
        //
      },
      onSuccess: (result, values) => {
        const { callBack, getResualt } = values;

        const storeQueryClient = StoreQueryClient.getInstance();
        const queryClient = storeQueryClient.getQueryClient();
        console.log(
          "resultresultresult",
          result,
          queryClient?.getQueriesData(`/FlightReserves/getflightreservess`)
        );

        queryClient?.setQueriesData(`getflightreservess`, result);
        if (getResualt) getResualt(result);

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
