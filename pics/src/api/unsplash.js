import axios from 'axios';

// create a new instance of axios with a custom config https://www.npmjs.com/package/axios#axioscreateconfig
export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: 'Client-ID c60a2d465519232c93936ce432ae69a1d052aa60ee8dc5b01a22919ef699590c'
  },
});