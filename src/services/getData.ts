import { apiUrl } from "./Endpoint"

export type FeedElement = {
    title?: string,
    url?: string,
    media?: string,
    tags?: Array<string>

}

export type FeedResponse = {
    data: Array<FeedElement>,
    success: boolean
}


export const getAllData: Function = async (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        fetch(apiUrl())
            .then((res) => res.json())
            .then((result: FeedResponse) => {
                resolve(result);
            })
            .catch((e) =>
                reject({
                    data: undefined,
                    success: false
                })
            )
    })
};

