import { BASEURL_API } from "@/config";
import axios from "axios";

export class PostsService {
  static async findMany() {
    const response = await axios.get(`${BASEURL_API}/posts`);
    return response.data;
  }

  static async findById(id: number) {
    const response = await axios.get(`${BASEURL_API}/posts/${id}`);
    return response.data;
  }

  static async updateById(id: number) {
    const response = await axios.put(`${BASEURL_API}/posts/${id}`);
    return response.data;
  }

  static async deleteById(id: number) {
    const response = await axios.put(`${BASEURL_API}/posts/${id}`);
    return response.data;
  }
}
