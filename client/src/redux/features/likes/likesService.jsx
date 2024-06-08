import axios from "axios";
// import {BACKEND_URL} from "../../helper";


const API_URL = `${process.env.BACKEND_URL}/api/likes/increment/`;

// Increase New Likes
const incrementLikes = async ({ postId, userId }) => {
  const response = await axios.post(API_URL, { postId, userId });
  return response.data;
};


const likesService = {
    incrementLikes,
  };
  
  export default likesService;
  