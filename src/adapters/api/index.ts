import axios from "axios";

function fetchExampleData() {
  return axios.get("/api/example");
}

export { fetchExampleData };
