import { GiphyFetch } from "@giphy/js-fetch-api";

const gifService = new GiphyFetch(
  process.env.NEXT_PUBLIC_GIPHY_ACCESS_KEY || ""
);

export default gifService;
