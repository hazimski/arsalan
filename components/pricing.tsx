import { SubscriptionPlan } from "@/types";
import Link from "next/link";
import React from "react";

type PricingType = {
  className?: string;
  data: SubscriptionPlan;
  children?: React.ReactNode;
};

export const Pricing: React.FC<PricingType> = ({
  className,
  data,
  children,
}) => {
  return (
    <div className={className}>
      <div
        style={{ alignContent: "space-between" }}
        className="elementor-widget-wrap elementor-element-populated"
      >
        <div className="elementor-element elementor-element-dd1abf4 elementor-widget elementor-widget-text-editor">
          <div className="elementor-widget-container">
            <p className="text-sm font-light text-neutral-400">{data.name}</p>
            <p className="text-2xl font-bold text-[#EBECF3]">${data.price}</p>
            <p className="text-sm font-light text-neutral-400">
              {data.description}
            </p>
          </div>
        </div>
        <div className="elementor-element elementor-element-ee5d089 elementor-widget elementor-widget-elementskit-stylish-list">
          <div className="elementor-widget-container">
            <div className="ekit-wid-con">
              <ul className="ekit-stylish-list ">
                <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-c3619bf">
                  <div className="ekit-stylish-list-content">
                    <div className="ekit-stylish-list-content-icon">
                      <i aria-hidden="true" className="fa fa-check-circle-o" />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">
                        {data?.unlimitedMessages
                          ? "Unlimited Messages"
                          : `${data?.maxMessagesPerMonth} Messages / Month`}
                      </span>
                    </div>
                  </div>
                </li>
                <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-7e6a4b5">
                  <div className="ekit-stylish-list-content">
                    <div className="ekit-stylish-list-content-icon">
                      <i aria-hidden="true" className="fa fa-check-circle-o" />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">
                        {data?.maxChatbots} Chatbot
                      </span>
                    </div>
                  </div>
                </li>
                <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-bccd8a4">
                  <div className="ekit-stylish-list-content">
                    <div className="ekit-stylish-list-content-icon">
                      <i aria-hidden="true" className="fa fa-check-circle-o" />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">
                        {data?.maxCrawlers} Crawlers
                      </span>
                    </div>
                  </div>
                </li>
                <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-96fdde5">
                  <div className="ekit-stylish-list-content">
                    <div className="ekit-stylish-list-content-icon">
                      <i aria-hidden="true" className="fa fa-check-circle-o" />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">
                        {data?.maxFiles} Training Files
                      </span>
                    </div>
                  </div>
                </li>
                <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b2461c1">
                  <div className="ekit-stylish-list-content">
                    <div className="ekit-stylish-list-content-icon">
                      <i aria-hidden="true" className="fa fa-check-circle-o" />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">
                        Use your OpenAI API Key
                      </span>
                    </div>
                  </div>
                </li>
                <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-9d4015c">
                  <div className="ekit-stylish-list-content">
                    <div className="ekit-stylish-list-content-icon">
                      <i aria-hidden="true" className="fa fa-check-circle-o" />
                    </div>
                    <div className="ekit-stylish-list-content-text">
                      <span className="ekit-stylish-list-content-title">
                        Chat Interface Customizations
                      </span>
                    </div>
                  </div>
                </li>
                {children}
              </ul>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-7960b0e elementor-align-left elementor-widget elementor-widget-button">
          <div className="elementor-widget-container">
            <div className="elementor-button-wrapper">
              <Link
                passHref
                className="elementor-button elementor-button-link elementor-size-md"
                href={process.env.NEXT_PUBLIC_SUB_DOMAIN_URL+"/login"}
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-icon elementor-align-icon-right">
                    <i aria-hidden="true" className="fa fa-arrow-right" />{" "}
                  </span>
                  <span className="elementor-button-text">
                    Start Free Trial
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
