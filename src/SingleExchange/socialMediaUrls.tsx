import {
  BsFacebook,
  BsReddit,
  BsSlack,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import { SocialDetails, SocialLinks } from "../models";

export const SocialMediaUrls = async (
  exchangeDetails: SocialLinks
): Promise<SocialDetails[]> => {
  const socialUrls: Array<SocialDetails> = [];

  for (const [key, value] of Object.entries(exchangeDetails)) {
    if (key === "facebook_url" && value !== "") {
      socialUrls.push({ link: `${value}`, icon: <BsFacebook /> });
    }
    if (key === "reddit_url" && value !== "") {
      socialUrls.push({ link: `${value}`, icon: <BsReddit /> });
    }
    if (key === "slack_url" && value !== "") {
      socialUrls.push({ link: `${value}`, icon: <BsSlack /> });
    }
    if (key === "telegram_url" && value !== "") {
      socialUrls.push({ link: `${value}`, icon: <BsTelegram /> });
    }
    if (key === "twitter_handle" && value !== "") {
      socialUrls.push({
        link: `https://twitter.com/${value}`,
        icon: <BsTwitter />,
      });
    }
  }

  return socialUrls;
};
