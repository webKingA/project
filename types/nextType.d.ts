export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};
