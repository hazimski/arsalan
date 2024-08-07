import { Metadata } from "next";

export function constructMetadata({
  title = `Chatpad - Build your own chatbot with OpenAI Assistant`,
  description = `Chatpad is the platform for building chatbot using the OpenAI Assistant API. We offer seamless integration for effortlessly incorporating a chatbot into your website.`,
  image = "https://chatpad.co/thumbnail.png",
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "/logo-32-32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/logo-32-32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/logo-32-32.png",
    },
  ],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata["icons"];
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: [
          {
            url: image,
          },
        ],
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      creator: "@oassistantgpt",
    },
    icons,
    metadataBase: new URL("https://chatpad.co"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
