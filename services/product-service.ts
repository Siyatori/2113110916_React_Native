import {AxiosResponse} from "axios";
import {http} from '../services/http-service';

export async function findAllProduct(): Promise<AxiosResponse<any>> {
    try {
        const response = await http.get<any> ('https://api.codingthailand.com/api/course')
        return response
    } catch (error) {
        throw error;
    }
}

export async function findProductID(id:string): Promise<AxiosResponse<any>> {
    try {
        const response = await http.get<any> ('https://api.codingthailand.com/api/course/'+id)
        return response
    } catch(error) {
        throw error
    }
}