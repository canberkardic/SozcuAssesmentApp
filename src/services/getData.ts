import AsyncStorage from "@react-native-async-storage/async-storage";
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

const handleTagData = (apiData: FeedElement[]) => {
    let tagsSet = new Set();
    let tagsMap = {};

    apiData.map(d => {
        d.tags?.map((t) => {
            tagsSet.add(t);
        });
    });

    tagsSet.forEach((tag: any) => {
        tagsMap[tag] = new Array();

        apiData.map((d) => {
            if (d.tags?.includes(tag)) {
                tagsMap[tag].push(d);
            }
        });

        AsyncStorage.setItem(tag, JSON.stringify(tagsMap))
    })

    
    

    /**
     * AsyncStorage.getItem(t).then((data) => {
                if(data){
                    let tagsArray = [data,d];
                    console.log(tagsArray);
                    //AsyncStorage.setItem(t, JSON.stringify(tagsArray))
                } else {
                    AsyncStorage.setItem(t, JSON.stringify(d))
                }
            })
     */

}


export const getAllData: Function = async (): Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        fetch(apiUrl())
            .then((res) => res.json())
            .then((result) => {
                handleTagData(result.data)
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

