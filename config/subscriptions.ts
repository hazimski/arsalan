import { SubscriptionPlan } from "@/types";

export const freePlan: SubscriptionPlan = {
  name: "Forever Free",
  description:
    "The Forever Free plan is limited to 1 chatbot, 1 crawler, 1 file upload and 50 messages per month.",
  stripePriceId: "",

  maxChatbots: 1,
  maxCrawlers: 1,
  maxFiles: 1,
  unlimitedMessages: false,
  maxMessagesPerMonth: 50,
  basicCustomization: false,
  userInquiries: false,

  brandingCustomization: false,

  chatFileAttachments: false,

  price: 0,
};

export const hobbyPlan: SubscriptionPlan = {
  name: "Basic",
  description:
    "The Basic plan is limited 2 chatbot, 2 crawler, 4 files, 5K messages.",
  stripePriceId: process.env.NEXT_PUBLIC_STRIPE_HOBBY_PRICE_ID || "",
  maxChatbots: 2,
  maxCrawlers: 2,
  maxFiles: 4,
  unlimitedMessages: false,
  maxMessagesPerMonth: 5000,
  basicCustomization: true,
  userInquiries: false,

  brandingCustomization: false,
  chatFileAttachments: false,

  price: 19,
};

export const basicPlan: SubscriptionPlan = {
  name: "Business",
  description:
    "The Business plan has 5 chatbots, 10 crawlers, 10 files, 20K messages and chat interface customization.",
  stripePriceId: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || "",

  maxChatbots: 5,
  maxCrawlers: 5,
  maxFiles: 10,
  unlimitedMessages: false,
  maxMessagesPerMonth: 20000,
  basicCustomization: true,
  userInquiries: true,

  chatFileAttachments: false,
  brandingCustomization: false,
  premiumSupport: true,

  price: 49,
};

export const proPlan: SubscriptionPlan = {
  name: "Unlimited",
  description:
    "The unlimited plan has 20 chatbots, unlimited messages, Chat Interface customization, Leads form, Support Ticket Feature, your users can attach files to chat and no chatpad branding",
  stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || "",

  maxChatbots: 20,
  maxCrawlers: 20,
  maxFiles: 60,
  unlimitedMessages: true,
  maxMessagesPerMonth: undefined,
  basicCustomization: true,
  userInquiries: true,

  premiumSupport: true,
  chatFileAttachments: true,
  brandingCustomization: true,

  price: 99,
};

export const legacyBasicPlan: SubscriptionPlan = {
  name: "BASIC",
  description:
    "The BASIC plan has 9 chatbots, 9 crawlers and 27 files and unlimited messages.",
  stripePriceId: process.env.NEXT_PUBLIC_STRIPE_BASIC_PRICE_ID || "",

  maxChatbots: 9,
  maxCrawlers: 9,
  maxFiles: 27,
  unlimitedMessages: true,
  maxMessagesPerMonth: undefined,
  basicCustomization: true,
  userInquiries: true,

  chatFileAttachments: false,
  brandingCustomization: true,
  premiumSupport: true,

  price: 9,
};
