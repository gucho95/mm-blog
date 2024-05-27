import { createApi } from "unsplash-js";

const imageService = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

export default imageService;
