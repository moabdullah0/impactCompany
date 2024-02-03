import axios from "axios";

const axiosInstance=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
		Accept: 'application/json',
		'x-rapidapi-key': '<your-key-here>'
	},
})
class ApiClient<T> {
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint;

    }
    getAll=()=>{
       return axiosInstance.get<T[]>(this.endpoint).then((res)=>res.data)
    }

    post=(data:T)=>{
        axiosInstance.post<T[]>(this.endpoint,data).then((res)=>res.data)
    }
}
export default ApiClient;