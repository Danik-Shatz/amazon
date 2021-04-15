import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-fir-f9537.cloudfunctions.net/api"
});

export default instance;
// http://localhost:5001/fir-f9537/us-central1/api