import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  // import.meta.env.VITE_UPLOAD_LINK
  try {
    const res = await axios.post("http://api.cloudinary.com/v1_1/dw5oijrfj/image/upload", data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
