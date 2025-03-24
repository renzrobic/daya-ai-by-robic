import ImageKit from "imagekit";
import * as dotenv from "dotenv"; // Correct import for ES Modules

dotenv.config();

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

export default imagekit;
