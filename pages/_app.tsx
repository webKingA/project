import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Router } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const progress = new ProgressBar({
  size: 4,
  className: "z-50",
  color: "#ff6b6b",
  delay: 100,
});

Router.events.on("routeChangeStart", () =>
  progress.start()
);
Router.events.on("routeChangeComplete", () =>
  progress.finish()
);
Router.events.on("routeChangeError", () =>
  progress.finish()
);
const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
