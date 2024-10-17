import { CONFIG } from "./config";
// import tshirtMokshPraptiBlackWebp from "/public/tshirt-moksh-prapti-black.webp";

export type SlideContentType = {
  index: number;
  tshirtImageUrl: string;
  tshirtLoadingImageUrl?: string;
  imageAltText: string;
  leftDescription: string;
  leftImageUrl: string;
  rightDescription: string;
  rightImageUrl: string;
  buttonText: string;
  buttonUrl: string;
  className?: string;
};

export const SlidesContent: SlideContentType[] = [
  {
    index: 1,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-moksh-prapti-black.gif`,
    tshirtLoadingImageUrl: `/tshirt-moksh-prapti-black.webp`,
    imageAltText: "moksh-prapti",
    leftDescription:
      "Good people, carry dark secrets. A tale of a spirit getting lonely in heaven, or a man’s twisted perspective on moksh turned menace.",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "A family of 11,  manipulated into embracing death? Whatever it was, The ugly fact of life is history repeats itself.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/moksh-prapti",
  },
  {
    index: 2,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-bulletproof-cream.gif`,
    tshirtLoadingImageUrl: `tshirt-bulletproof-cream.webp`,
    imageAltText: "bulletproof",
    leftDescription:
      "This one for our right to say something you might not like. A call for how ugly or morally muddy it gets.",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "We will defend our right to express them. You can kill an individual, but ideas, are bulletproof.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/bulletproof",
  },
  {
    index: 3,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-restricted-cream.gif`,
    tshirtLoadingImageUrl: `/tshirt-restricted-cream.webp`,
    imageAltText: "restricted",
    leftDescription:
      "They don’t want me to say this Hey listen, your votes don’t count. The government is watching you.",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription: "You get the point, STOP censoring us!",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/restricted",
    className: "mt-5",
  },
  {
    index: 4,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-war-on-mumbai-black.gif`,
    tshirtLoadingImageUrl: `/tshirt-war-on-mumbai-black.webp`,
    imageAltText: "war-on-mumbai",
    leftDescription:
      "The 26/11 attacks proved two things. we stand united in grief.",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "We stand united in grief. And, it takes a whole nation shook, and innocents killed to skip the ad and put some news in newspapers.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/war-on-mumbai",
  },
  {
    index: 5,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-krodha-basic-red.gif`,
    tshirtLoadingImageUrl: `/tshirt-krodha-basic-red.webp`,
    imageAltText: "krodha-basic-red",
    leftDescription: "Anger begets anger. Hate begets hate.",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "Hurt People, Hurt People. Channel your anger and put it to work.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/krodha-basic-red",
    className: "mt-5",
  },
  {
    index: 6,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-ahamkara-basic-black.gif`,
    tshirtLoadingImageUrl: `/tshirt-ahamkara-basic-black.webp`,
    imageAltText: "ahamkara-basic-black",
    leftDescription:
      "Wealth? Fame? Money? You might have it all, There will always be bigger fish in the pond.",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "A kind man knows a blind man holds grudges A wise man knows a wise man knows nothing.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/ahamkara-basic-black",
  },
  {
    index: 7,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-moh-basic-purple.gif`,
    tshirtLoadingImageUrl: `/tshirt-moh-basic-purple.webp`,
    imageAltText: "moh-basic-purple",
    leftDescription: "Your perceived reality is a comfortable facade",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "Break the cycle, question all, wisdom doesn’t fall off a tree. Sacrifice what’s most dear to you and be free.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/moh-basic-purple",
  },
  {
    index: 8,
    tshirtImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/tshirt-lobha-basic-green.gif`,
    tshirtLoadingImageUrl: `/tshirt-lobha-basic-green.webp`,
    imageAltText: "lobha-basic-green",
    leftDescription:
      "Greed is all around you, are you smart enough to swim past the bait?",
    leftImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/left-image.avif `,
    rightDescription:
      "When your pocket’s fuller than your stomach and you still want more on your plate. Play smart, just remember, there’s no bunk beds in the graveyard.",
    rightImageUrl: `${CONFIG.STATIC_IMGAE_ASSETS_URL}/right-image.avif `,
    buttonText: "SHOP NOW",
    buttonUrl: "https://shop.mohmaya.co/products/lobha-basic-green",
  },
];
