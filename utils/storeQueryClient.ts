import { QueryClient } from "react-query";

export default class StoreQueryClient {
  private queryClient: QueryClient | null = null;

  private static instance: StoreQueryClient;

  private constructor() {
    this.queryClient = null;
  }

  public static getInstance(): StoreQueryClient {
    if (!StoreQueryClient.instance) {
      StoreQueryClient.instance = new StoreQueryClient();
    }
    return StoreQueryClient.instance;
  }

  setQueryClient = (q: QueryClient) => {
    this.queryClient = q;
  };

  getQueryClient = () => {
    return this.queryClient;
  };
}
