import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fe90884efd7777624382b35c0e8f8494",
    language: "ko-KR"
  }
})

export default instance;