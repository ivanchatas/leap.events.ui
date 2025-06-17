export interface Response<TData> {
    data: TData;
    message: string;
    succeeded: boolean;
}