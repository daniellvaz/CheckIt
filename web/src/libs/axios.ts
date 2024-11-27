import Axios, { AxiosError, AxiosRequestConfig } from "axios";

export const AXIOS_INSTANCE = Axios.create({ baseURL: "" });

const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({ ...config, cancelToken: source.token }).then(
    ({ data }) => data
  );

  // @ts-ignore
  promise.cancel = () => {
    source.cancel("Query was cancelled by React Query");
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;

export default customInstance;
