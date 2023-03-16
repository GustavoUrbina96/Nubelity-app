import axios from "axios";

axios.defaults.baseURL = "https://randomuser.me";

const get = axios.get;

// eslint-disable-next-line import/no-anonymous-default-export
export default { get };
