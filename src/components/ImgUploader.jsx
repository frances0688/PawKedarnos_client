import axios from "axios";

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"

function ImgUploader(file) {

    return axios.post(`${API_URL}/api/upload`, file)
          .then(res => res.data)
          .catch(err => console.log("Error while uploading the file: ", err))
};
  

export default ImgUploader