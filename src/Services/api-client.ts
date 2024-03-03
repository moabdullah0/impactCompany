import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3004",
  // headers: {
  //   Accept: "application/json",
  //   "x-rapidapi-key": "<your-key-here>",
  // },
});
class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };
  getAllbyID = (id: string | undefined) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T[]>(this.endpoint, data).then((res) => res.data);
  };

  update = (data: T, id: string | undefined) => {
    return axiosInstance
      .put<T[]>(this.endpoint + `/${id}`, data)
      .then((res) => res.data);
  };
  delete = (id: string | undefined) => {
    return axiosInstance
      .delete<T>(this.endpoint + `/${id}`)
      .then((res) => res.data);
  };
}
export default ApiClient;
