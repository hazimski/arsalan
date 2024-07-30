import Link from "next/link";
import Image from "next/image";
import {
  freePlan,
  hobbyPlan,
  basicPlan,
  proPlan,
} from "@/config/subscriptions";
import { Pricing } from "@/components/pricing";
export default function IndexPage() {
  return (
    <>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-c20fcbe elementor-section-full_width elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-background-video-container elementor-hidden-phone">
          <video
            className="elementor-background-video-hosted elementor-html5-video"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            src="https://cdn.vidzflow.com/v/tulxXSya63_1080p_1709830675.mp4"
            style={{ width: "2664.02px", height: "1498.51px" }}
          />
        </div>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3b36f3a">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-1860b62 elementor-widget elementor-widget-html">
                <div className="elementor-widget-container">
                  <h1
                    className="headline massive text---white xxl-tab balanced line-height-100 home-hero-text"
                    style={{
                      WebkitTextFillColor: "transparent",
                      backgroundImage:
                        "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.55))",
                      backgroundClip: "text",
                      paddingBottom: "0.05em",
                      fontSize: "7rem",
                      lineHeight: "100%",
                      textAlign: "center",
                    }}
                  >
                    Custom ChatGPT for your website
                  </h1>{" "}
                </div>
              </div>
              <div className="elementor-element elementor-element-68c6a3b elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p
                    className="container---small text---white center"
                    style={{ textAlign: "center" }}
                  >
                    <span style={{ color: "#ffffff" }}>
                      Provide AI-based, human-like, 24/7 customer support with a
                      custom ChatGPT chatbot on your website, trained on your
                      content, capable of handling customer support, lead
                      generation, and engaging with your users.{" "}
                    </span>
                  </p>{" "}
                </div>
              </div>
              <div className="elementor-element elementor-element-eb0e9d8 elementor-align-center elementor-widget elementor-widget-button">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <Link
                      className="elementor-button elementor-button-link elementor-size-sm"
                      href="/login"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          Get Started for Free
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-f48d0bb elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6793e5d">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-3f4e84a elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <Image
                            fill
                            decoding="async"
                            loading="lazy"
                            alt="chatbot"
                            src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/ai-chats-left_hu984f773ea208501b649a29dfb84caf28_47967_1200x0_resize_lanczos_3%20(1)-iNUp54qqe4OCAL9PO1JiJ6PISSETCP.webp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-63da5b8">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-232ebec elementor-widget__width-initial elementor-widget elementor-widget-video">
                        <div className="elementor-widget-container">
                          <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                            <video
                              className="elementor-video"
                              src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/chatpad-video-1-sw1h3rJimYcGcDTnx8yeLooJLjgtoQ.mp4"
                              autoPlay
                              loop
                              playsInline
                              preload="auto"
                              controlsList="nodownload"
                              muted
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-716401a">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-cfa067c elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <Image
                            fill
                            decoding="async"
                            loading="lazy"
                            alt="chatbot"
                            src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/ai-chats-right_hu880ceb70016bf61c74e43cb405e6a8c5_48881_1200x0_resize_lanczos_3%20(1)-Dkqzj67zPsT6JVGxODdS8jjuAjkrxO.webp"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ee5124a elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-931568e">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-3e96d0a elementor-widget elementor-widget-elementskit-fancy-animated-text">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    <h2 className="ekit-fancy-text color-effect">
                      <span className="ekit-fancy-prefix-text">
                        Create AI bots for various roles across your &nbsp;
                      </span>
                      <span
                        className="ekit-fancy-text-lists"
                        style={{ maxWidth: "248.672px" }}
                      >
                        <b className="ekit-fancy-text elementor-repeater-item-bf3a8f0 is-visible">
                          business
                        </b>
                      </span>
                    </h2>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-fefa574 elementor-section-full_width elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c58f0e1"
            data-id="c58f0e1"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <section
                className="elementor-section elementor-inner-section elementor-element elementor-element-a222afb elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                data-id="a222afb"
                data-element_type="section"
                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-03f4cb0">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-06f3fc5 elementor-widget elementor-widget-tp-accordion"
                        data-id="06f3fc5"
                        data-element_type="widget"
                        data-settings='{"ekit_we_effect_on":"none"}'
                        data-widget_type="tp-accordion.default"
                      >
                        <div className="elementor-widget-container">
                          <div
                            className="theplus-accordion-wrapper elementor-accordion  hover-style-1 "
                            id="tptab_unique"
                            data-accordion-id="tptab_unique"
                            data-connection="tpca_unique"
                            data-accordion-type="accordion"
                            data-heightlight-text
                            data-row-bg-conn="bgcarouselunique"
                            role="tablist"
                          >
                            <div className="theplus-accordion-item" role="tab">
                              <div
                                id="elementor-tab-title-7291"
                                className="elementor-tab-title plus-accordion-header active-default text-left"
                                data-tab={1}
                                aria-controls="elementor-tab-content-7291"
                              >
                                <span
                                  className="elementor-accordion-icon elementor-accordion-icon-left"
                                  aria-hidden="true"
                                >
                                  <i className="elementor-accordion-icon-closed fa fa-plus" />
                                  <i className="elementor-accordion-icon-opened fa fa-minus" />
                                </span>
                                <span style={{ width: "100%" }}>
                                  Lead Generation
                                </span>{" "}
                              </div>
                              <div
                                id="elementor-tab-content-7291"
                                className="elementor-tab-content elementor-clearfix plus-accordion-content active-default"
                                data-tab={1}
                                role="tabpanel"
                                aria-labelledby="elementor-tab-title-7291"
                                style={{
                                  boxSizing: "border-box",
                                  display: "none",
                                }}
                              >
                                <div className="plus-content-editor">
                                  <p>
                                    Get your visitor’s data using a
                                    lead-generation AI chatbot
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="theplus-accordion-item" role="tab">
                              <div
                                id="elementor-tab-title-7292"
                                className="elementor-tab-title plus-accordion-header no text-left"
                                data-tab={2}
                                aria-controls="elementor-tab-content-7292"
                              >
                                <span
                                  className="elementor-accordion-icon elementor-accordion-icon-left"
                                  aria-hidden="true"
                                >
                                  <i className="elementor-accordion-icon-closed fa fa-plus" />
                                  <i className="elementor-accordion-icon-opened fa fa-minus" />
                                </span>
                                <span style={{ width: "100%" }}>
                                  Shopping assistance
                                </span>{" "}
                              </div>
                              <div
                                id="elementor-tab-content-7292"
                                className="elementor-tab-content elementor-clearfix plus-accordion-content no"
                                data-tab={2}
                                role="tabpanel"
                                aria-labelledby="elementor-tab-title-7292"
                                style={{
                                  display: "none",
                                  boxSizing: "border-box",
                                }}
                              >
                                <div className="plus-content-editor">
                                  <p>
                                    Unleash AI on your ecommerce website and
                                    drive sales through chat widget
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="theplus-accordion-item" role="tab">
                              <div
                                id="elementor-tab-title-7293"
                                className="elementor-tab-title plus-accordion-header no text-left"
                                data-tab={3}
                                aria-controls="elementor-tab-content-7293"
                              >
                                <span
                                  className="elementor-accordion-icon elementor-accordion-icon-left"
                                  aria-hidden="true"
                                >
                                  <i className="elementor-accordion-icon-closed fa fa-plus" />
                                  <i className="elementor-accordion-icon-opened fa fa-minus" />
                                </span>
                                <span style={{ width: "100%" }}>
                                  Customer service
                                </span>{" "}
                              </div>
                              <div
                                id="elementor-tab-content-7293"
                                className="elementor-tab-content elementor-clearfix plus-accordion-content no"
                                data-tab={3}
                                role="tabpanel"
                                aria-labelledby="elementor-tab-title-7293"
                                style={{
                                  display: "none",
                                  boxSizing: "border-box",
                                }}
                              >
                                <div className="plus-content-editor">
                                  <div className="wysiwyg" data-v-966cb348>
                                    <p>
                                      Enable round-the-clock, global,
                                      conversational AI customer service.
                                    </p>
                                  </div>
                                  <div className="buttons" data-v-966cb348>
                                    &nbsp;
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="theplus-accordion-item" role="tab">
                              <div
                                id="elementor-tab-title-7294"
                                className="elementor-tab-title plus-accordion-header no text-left"
                                data-tab={4}
                                aria-controls="elementor-tab-content-7294"
                              >
                                <span
                                  className="elementor-accordion-icon elementor-accordion-icon-left"
                                  aria-hidden="true"
                                >
                                  <i className="elementor-accordion-icon-closed fa fa-plus" />
                                  <i className="elementor-accordion-icon-opened fa fa-minus" />
                                </span>
                                <span style={{ width: "100%" }}>
                                  Legal assistance
                                </span>{" "}
                              </div>
                              <div
                                id="elementor-tab-content-7294"
                                className="elementor-tab-content elementor-clearfix plus-accordion-content no"
                                data-tab={4}
                                role="tabpanel"
                                aria-labelledby="elementor-tab-title-7294"
                                style={{
                                  display: "none",
                                  boxSizing: "border-box",
                                }}
                              >
                                <div className="plus-content-editor">
                                  <div
                                    className="column-item padding-s"
                                    data-v-38056389
                                  >
                                    <div
                                      className="block-list --flex-start"
                                      data-v-38056389
                                    >
                                      <section
                                        className="copy-block text-align-mob-null text-align-center contain max-w-l"
                                        data-v-966cb348
                                      >
                                        <div
                                          className="wysiwyg"
                                          data-v-966cb348
                                        >
                                          <p>
                                            Streamline legal research and
                                            drafting with efficient and
                                            knowledgeable AI chatbots.
                                          </p>
                                        </div>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="theplus-accordion-item" role="tab">
                              <div
                                id="elementor-tab-title-7295"
                                className="elementor-tab-title plus-accordion-header no text-left "
                                data-tab={5}
                                aria-controls="elementor-tab-content-7295"
                              >
                                <span
                                  className="elementor-accordion-icon elementor-accordion-icon-left"
                                  aria-hidden="true"
                                >
                                  <i className="elementor-accordion-icon-closed fa fa-plus" />
                                  <i className="elementor-accordion-icon-opened fa fa-minus" />
                                </span>
                                <span style={{ width: "100%" }}>
                                  Recruiting
                                </span>{" "}
                              </div>
                              <div
                                id="elementor-tab-content-7295"
                                className="elementor-tab-content elementor-clearfix plus-accordion-content no "
                                data-tab={5}
                                role="tabpanel"
                                aria-labelledby="elementor-tab-title-7295"
                              >
                                <div className="plus-content-editor">
                                  <div className="wysiwyg" data-v-966cb348>
                                    <p>
                                      Speed up the candidate screening process
                                      with a conversational AI chatbot.
                                    </p>
                                  </div>
                                  <div className="buttons" data-v-966cb348>
                                    &nbsp;
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="theplus-accordion-item" role="tab">
                              <div
                                id="elementor-tab-title-7296"
                                className="elementor-tab-title plus-accordion-header no text-left "
                                data-tab={6}
                                aria-controls="elementor-tab-content-7296"
                              >
                                <span
                                  className="elementor-accordion-icon elementor-accordion-icon-left"
                                  aria-hidden="true"
                                >
                                  <i className="elementor-accordion-icon-closed fa fa-plus" />
                                  <i className="elementor-accordion-icon-opened fa fa-minus" />
                                </span>
                                <span style={{ width: "100%" }}>
                                  Healthcare
                                </span>{" "}
                              </div>
                              <div
                                id="elementor-tab-content-7296"
                                className="elementor-tab-content elementor-clearfix plus-accordion-content no "
                                data-tab={6}
                                role="tabpanel"
                                aria-labelledby="elementor-tab-title-7296"
                              >
                                <div className="plus-content-editor">
                                  <div className="wysiwyg" data-v-966cb348>
                                    <p>
                                      Boost patient care with an AI chatbot for
                                      easy healthcare appointment booking.
                                    </p>
                                  </div>
                                  <div className="buttons" data-v-966cb348>
                                    &nbsp;
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4c0680c">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-8ab15d2 elementor-widget elementor-widget-tp-carousel-anything"
                        data-id="8ab15d2"
                      >
                        <div className="elementor-widget-container">
                          <div
                            id="tpca_unique"
                            className="theplus-carousel-anything-wrapper list-carousel-slick tpca_unique done-carousel"
                            data-id="tpca_unique"
                            data-connection="tptab_unique"
                            data-result='{"carousel_direction":"ltr"}'
                            dir="ltr"
                            data-slider_direction="false"
                            data-slide_speed={1500}
                            data-slide_fade_inout="false"
                            data-slider_desktop_column={1}
                            data-steps_slide={1}
                            data-slider_draggable="true"
                            data-multi_drag="false"
                            data-slider_infinite="true"
                            data-slider_pause_hover="false"
                            data-slider_adaptive_height="false"
                            data-slider_animation="ease"
                            data-slider_autoplay="false"
                            data-autoplay_speed={3000}
                            data-slider_tablet_column={1}
                            data-tablet_steps_slide={1}
                            data-slider_responsive_tablet="no"
                            data-slider_mobile_column={1}
                            data-mobile_steps_slide={1}
                            data-slider_responsive_mobile="no"
                            data-slider_dots="false"
                            data-slider_dots_style="slick-dots style-1"
                            data-slider_arrows="false"
                            data-slider_arrows_style="style-1"
                            data-arrows_position="top-right"
                            data-arrow_bg_color="#c44d48"
                            data-arrow_icon_color="#fff"
                            data-arrow_hover_bg_color="#fff"
                            data-arrow_hover_icon_color="#c44d48"
                            data-slider_center_mode="false"
                            data-center_padding={0}
                            data-scale_center_slide={1}
                            data-scale_normal_slide="0.8"
                            data-opacity_normal_slide="0.7"
                            data-slider_rows={1}
                            data-carousel-bg-conn="bgcarouselunique"
                          >
                            <div className="plus-carousel-inner post-inner-loop slick-initialized slick-slider">
                              <div className="slick-list draggable">
                                <div
                                  className="slick-track"
                                  style={{
                                    opacity: 1,
                                    width: "7150px",
                                    transform: "translate3d(-1650px, 0px, 0px)",
                                  }}
                                >
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={-1}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6129}
                                              className="elementor elementor-6129"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6097">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/Health-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/Health-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={0}
                                    aria-hidden="true"
                                    style={{ width: "550px" }}
                                    tabIndex={-1}
                                  >
                                    <div>
                                      <div
                                        id="slide-content-1451"
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6094}
                                              className="elementor elementor-6094"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6099">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1.jpg.webp 1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1.jpg  1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={1}
                                    aria-hidden="true"
                                    style={{ width: "550px" }}
                                    tabIndex={-1}
                                  >
                                    <div>
                                      <div
                                        id="slide-content-1452"
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6109}
                                              className="elementor elementor-6109"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6100">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1.jpg.webp 1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1.jpg  1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-current slick-active"
                                    data-slick-index={2}
                                    aria-hidden="false"
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        id="slide-content-1453"
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6114}
                                              className="elementor elementor-6114"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6098">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1.jpg.webp 1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1.jpg  1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={3}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        id="slide-content-1454"
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6119}
                                              className="elementor elementor-6119"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6096">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/legal-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/legal-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/legal-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/legal-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/legal-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={4}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        id="slide-content-1455"
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6124}
                                              className="elementor elementor-6124"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6095">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide"
                                    data-slick-index={5}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        id="slide-content-1456"
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6129}
                                              className="elementor elementor-6129"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6097">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/Health-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/Health-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={6}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6094}
                                              className="elementor elementor-6094"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6099">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/leadgen-1.jpg.webp 1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/leadgen-1.jpg  1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={7}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6109}
                                              className="elementor elementor-6109"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6100">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1.jpg.webp 1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/ecom-ai-1-1.jpg  1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={8}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6114}
                                              className="elementor elementor-6114"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section
                                                className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                data-id="e7045bd"
                                                data-element_type="section"
                                                data-settings='{"jet_parallax_layout_list":[],"ekit_has_onepagescroll_dot":"yes"}'
                                              >
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div
                                                        className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image"
                                                        data-id={1041965}
                                                        data-element_type="widget"
                                                        data-settings='{"ekit_we_effect_on":"none"}'
                                                        data-widget_type="image.default"
                                                      >
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6098">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/customer-support-1.jpg.webp 1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/customer-support-1.jpg  1400w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={9}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div className="elementor elementor-6119">
                                              <section className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div
                                                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f"
                                                    data-id="ea2105f"
                                                    data-element_type="column"
                                                  >
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image">
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6096">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/legal-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/legal-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/legal-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/legal-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/legal-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/legal-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/legal-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={10}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6124}
                                              className="elementor elementor-6124"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image">
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6095">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/Screenshot-2024-06-10-at-2.01.36-PM-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="slick-slide slick-cloned"
                                    data-slick-index={11}
                                    aria-hidden="true"
                                    tabIndex={-1}
                                    style={{ width: "550px" }}
                                  >
                                    <div>
                                      <div
                                        className="plus-slide-content grid-item "
                                        style={{
                                          width: "100%",
                                          display: "inline-block",
                                        }}
                                      >
                                        <div className="slide-content-inner">
                                          <div className="plus-content-editor">
                                            {" "}
                                            <div
                                              data-elementor-type="section"
                                              data-elementor-id={6129}
                                              className="elementor elementor-6129"
                                              data-elementor-post-type="elementor_library"
                                            >
                                              <section className="elementor-section elementor-top-section elementor-element elementor-element-e7045bd elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                                                <div className="elementor-container elementor-column-gap-default">
                                                  <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ea2105f">
                                                    <div className="elementor-widget-wrap elementor-element-populated">
                                                      <div className="elementor-element elementor-element-1041965 elementor-widget elementor-widget-image">
                                                        <div className="elementor-widget-container">
                                                          <picture className="attachment-large size-large wp-image-6097">
                                                            <source
                                                              type="image/webp"
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg.webp 1024w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-300x300.jpg.webp 300w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-150x150.jpg.webp 150w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-768x768.jpg.webp 768w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-700x700.jpg.webp 700w, https://btrendy.co/wp-content/uploads/2024/06/Health-1-50x50.jpg.webp 50w, https://btrendy.co/wp-content/uploads/2024/06/Health-1.jpg.webp 1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                            <img
                                                              loading="lazy"
                                                              decoding="async"
                                                              width={980}
                                                              height={980}
                                                              src="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg"
                                                              alt=""
                                                              srcSet="https://btrendy.co/wp-content/uploads/2024/06/Health-1-1024x1024.jpg  1024w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-300x300.jpg  300w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-150x150.jpg  150w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-768x768.jpg  768w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-700x700.jpg  700w,https://btrendy.co/wp-content/uploads/2024/06/Health-1-50x50.jpg  50w,https://btrendy.co/wp-content/uploads/2024/06/Health-1.jpg  1200w"
                                                              sizes="(max-width: 980px) 100vw, 980px"
                                                            />
                                                          </picture>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </section>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-73af5bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="o-container-xl">
          <div className="u-maxw-8 u-mx-auto u-text-center u-Pb-md lg:u-Pb-xl">
            <h2
              className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
              style={{
                maxWidth: "720px",
                marginLeft: "auto",
                marginRight: "auto",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <span className="ai-text-gradient">How it works</span>
            </h2>
            <p className="u-text-p5 u-mb-0 u-pb-0">
              Build your own custom AI chatbot in less that 5 mins
            </p>
          </div>
          <div className="u-Pb-xl lg:u-Pb-2xl u-relative z-index-2">
            <div className="o-columns v--three u-items-center u-justify-center u-text-center">
              <div className="ai-block">
                <Image
                  width={416}
                  height={100}
                  alt="'Scan your website to train your chatbot"
                  src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/landingpage/train-n7z8WMoxHVufq7hItJvAex9XKNW3xB.webp"
                />
                <div className="ai-block-content u-flex u-flex-col u-justify-between u-text-left">
                  <p className="u-text-p4 u-text-weight-medium u-mb-0 u-pb-md">
                    Import your data
                  </p>
                  <p className="u-text-p6 u-Pb-xs">
                    Scan your website pages, help articles or upload your files
                    with questions and answers, previous customer support chats
                    and emails to train your model
                  </p>
                  <Link
                    href="/login"
                    className="c-link u-text-p6 u-text-weight-medium"
                  >
                    Scan your website
                  </Link>
                </div>
              </div>
              <div className="ai-block">
                <Image
                  width={416}
                  height={100}
                  alt="'Customize your chatbot user interface"
                  src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/landingpage/customize-7h4KKNlEOirKZkYTZmVu74FeclBwCT.webp"
                />
                <div className="ai-block-content u-flex u-flex-col u-justify-between u-text-left">
                  <p className="u-text-p4 u-text-weight-medium u-mb-0 u-pb-md">
                    Customize chatbot
                  </p>
                  <p className="u-text-p6 u-Pb-xs">
                    Make your chatbot look like it&apos;s part of your website with
                    custom colors and logos and make it match your brand&apos;s
                    personality with custom instructions
                  </p>
                  <Link
                    href="/login"
                    className="c-link u-text-p6 u-text-weight-medium"
                  >
                    Build your chatbot
                  </Link>
                </div>
              </div>
              <div className="ai-block">
                <Image
                  width={416}
                  height={100}
                  alt="'Add your chatbot to any website"
                  src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/landingpage/embed-9ZTMFYpLZAc70IGSFUKrENwSQVpBNI.webp"
                />
                <div className="ai-block-content u-flex u-flex-col u-justify-between u-text-left">
                  <p className="u-text-p4 u-text-weight-medium u-mb-0 u-pb-md">
                    Add to your website
                  </p>
                  <p className="u-text-p6 u-Pb-xs">
                    Embed your chatbot into any website, custom-coded, Shopify,
                    WordPress with a simple code. Choose to display either a
                    chat widget or an iframe section
                  </p>
                  <Link
                    href="/login"
                    className="c-link u-text-p6 u-text-weight-medium"
                  >
                    Embed Chatbot{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="elementor-section elementor-top-section elementor-element elementor-element-fbb5baa elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e5bf0b4">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-baf9b30 elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  <p>
                    <strong>
                      <span style={{ color: "#ef61ff" }}>
                        POWERFUL FEATURES{" "}
                      </span>
                    </strong>
                    <br />
                    <span style={{ color: "#ebebeb" }}>
                      Everything you need for your no-code AI chatbot.
                    </span>
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-73af5bd elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-876a645">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-86ba68e ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    {/* link opening */}
                    <a href="#" className="ekit_global_links">
                      {/* end link opening */}
                      <div className="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                        <div className="elementskit-box-header elementor-animation-">
                          <div className="elementskit-info-box-icon  ">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={30}
                              className="text-zinc-900"
                              height={30}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="box-body">
                          <h3 className="elementskit-info-box-title">
                            Lead Generation Engine{" "}
                          </h3>
                          <p>
                            Collect leads and gather your customers data, all
                            while providing a personalized experience.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-96479db">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-c757d4c ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    {/* link opening */}
                    <a href="#" className="ekit_global_links">
                      {/* end link opening */}
                      <div className="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                        <div className="elementskit-box-header elementor-animation-">
                          <div className="elementskit-info-box-icon  ">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={30}
                              className="text-zinc-900"
                              height={30}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="box-body">
                          <h3 className="elementskit-info-box-title">
                            80+ Languages{" "}
                          </h3>
                          <p>
                            Reach your customers in their native language even
                            if your data is in a different language.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-39124ef">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-0fdc08c ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    {/* link opening */}
                    <a href="#" className="ekit_global_links">
                      {/* end link opening */}
                      <div className="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                        <div className="elementskit-box-header elementor-animation-">
                          <div className="elementskit-info-box-icon  ">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={30}
                              className="text-zinc-900"
                              height={30}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="box-body">
                          <h3 className="elementskit-info-box-title">
                            Support Tickets{" "}
                          </h3>
                          <p>
                            User can enter request to contact support team, the
                            bot collects their contact details, creates a
                            support ticket and notifies you.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-c350d63 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-127712f">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-641db36 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    {/* link opening */}
                    <a href="#" className="ekit_global_links">
                      {/* end link opening */}
                      <div className="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                        <div className="elementskit-box-header elementor-animation-">
                          <div className="elementskit-info-box-icon  ">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={30}
                              className="text-zinc-900"
                              height={30}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="box-body">
                          <h3 className="elementskit-info-box-title">
                            Customization{" "}
                          </h3>
                          <p>
                            Customize your chatbots look and feel to match your
                            brand style and website design.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-e9d7b93">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-4a98258 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    {/* link opening */}
                    <a href="#" className="ekit_global_links">
                      {/* end link opening */}
                      <div className="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                        <div className="elementskit-box-header elementor-animation-">
                          <div className="elementskit-info-box-icon  ">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={30}
                              className="text-zinc-900"
                              height={30}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="box-body">
                          <h3 className="elementskit-info-box-title">
                            Privacy &amp; Security{" "}
                          </h3>
                          <p>
                            Your data is hosted on secure servers with robust
                            encryption and access control. Remove Chatpad
                            branding
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-a982c21">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-541b676 ekit-equal-height-disable elementor-widget elementor-widget-elementskit-icon-box">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    {/* link opening */}
                    <a href="#" className="ekit_global_links">
                      {/* end link opening */}
                      <div className="elementskit-infobox text-center text-center icon-top-align elementor-animation-   ">
                        <div className="elementskit-box-header elementor-animation-">
                          <div className="elementskit-info-box-icon  ">
                            <svg
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              width={30}
                              className="text-zinc-900"
                              height={30}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6h.008v.008H6V6z"
                                stroke="#18181B"
                                fill="none"
                                strokeWidth="1.5px"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="box-body">
                          <h3 className="elementskit-info-box-title">
                            File Attachments{" "}
                          </h3>
                          <p>
                            You can attach a file CSV, XML, Images etc... in the
                            chat and the chatbot will analyse it.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="low-code"
        className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 py-12 md:py-24 lg:py-32"
        style={{ backgroundColor: "#090b16", paddingTop: "120px" }}
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
            style={{
              maxWidth: "720px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Compatible with your Platform
          </h2>
          <p
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            style={{
              color: "#fff",
            }}
          >
            Effortlessly integrate with the most popular website platforms.
          </p>
          <Image
            alt="integrations"
            className="mt-6"
            width={1400}
            height={800}
            src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/chatpadintegrations.png"
          />
        </div>
      </section>
      <section
        id="pricing"
        className="elementor-section elementor-top-section elementor-element elementor-element-ebaef10 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7d6b0cb">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-c926e77 elementor-widget elementor-widget-elementskit-fancy-animated-text">
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    {" "}
                    <h2 className="ekit-fancy-text color-effect">
                      <span className="ekit-fancy-text-lists">
                        <b className="ekit-fancy-text elementor-repeater-item-e55c8a8 is-visible">
                          Pricing
                        </b>
                      </span>
                    </h2>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-b578890 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5c7d496">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e96bac9 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
                <div className="flex flex-col gap-4">
                  <div className="elementor-container elementor-column-gap-default flex flex-row justify-start wrap">
                    <Pricing
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bd2beff"
                      data={hobbyPlan}
                    />
                    <Pricing
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8cf03b0"
                      data={basicPlan}
                    >
                      <>
                        <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-3151d52">
                          <div className="ekit-stylish-list-content">
                            <div className="ekit-stylish-list-content-icon">
                              <i
                                aria-hidden="true"
                                className="fa fa-check-circle-o"
                              />
                            </div>
                            <div className="ekit-stylish-list-content-text">
                              <span className="ekit-stylish-list-content-title">
                                Leads forms &amp; Support Tickets
                              </span>
                            </div>
                          </div>
                        </li>
                      </>
                    </Pricing>
                    <Pricing
                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7cc8d0f"
                      data={proPlan}
                    >
                      <>
                        <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-3151d52">
                          <div className="ekit-stylish-list-content">
                            <div className="ekit-stylish-list-content-icon">
                              <i
                                aria-hidden="true"
                                className="fa fa-check-circle-o"
                              />
                            </div>
                            <div className="ekit-stylish-list-content-text">
                              <span className="ekit-stylish-list-content-title">
                                Leads forms &amp; Support Tickets
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-a0c02a1">
                          <div className="ekit-stylish-list-content">
                            <div className="ekit-stylish-list-content-icon">
                              <i
                                aria-hidden="true"
                                className="fa fa-check-circle-o"
                              />
                            </div>
                            <div className="ekit-stylish-list-content-text">
                              <span className="ekit-stylish-list-content-title">
                                {`Remove 'Powered by Chatpad'`}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b48067e">
                          <div className="ekit-stylish-list-content">
                            <div className="ekit-stylish-list-content-icon">
                              <i
                                aria-hidden="true"
                                className="fa fa-check-circle-o"
                              />
                            </div>
                            <div className="ekit-stylish-list-content-text">
                              <span className="ekit-stylish-list-content-title">
                                User chat file attachment
                              </span>
                            </div>
                          </div>
                        </li>
                      </>
                    </Pricing>
                  </div>

                  {/* <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bd2beff">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-71de799 elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container">
                          <p>
                            {basicPlan.name}
                            <br />
                            <span
                              style={{ fontSize: "22px", color: "#ffffff" }}
                            >
                              <b>{basicPlan.price}</b>
                            </span>
                            <br />
                            Low-Medium website visitors
                          </p>{" "}
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-c7be138 elementor-widget elementor-widget-elementskit-stylish-list">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <ul className="ekit-stylish-list ">
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-c3619bf">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      {basicPlan.maxMessagesPerMonth} Messages /
                                      Month
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-7e6a4b5">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa icon-checkmark-circle"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      {basicPlan.maxChatbots} Chatbot
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-bccd8a4">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      {basicPlan.maxCrawlers} Crawlers
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-96fdde5">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      {basicPlan.maxFiles} Training Files
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b2461c1">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
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
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Chat Interface Customizations
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-e975242 elementor-align-left elementor-widget elementor-widget-button"
                        data-id="e975242"
                        data-element_type="widget"
                        data-settings='{"ekit_we_effect_on":"none"}'
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              className="elementor-button elementor-button-link elementor-size-md"
                              href="#"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon elementor-align-icon-right">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-arrow-right"
                                  />{" "}
                                </span>
                                <span className="elementor-button-text">
                                  Start Free Trial
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8cf03b0">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-9b6a49d elementor-widget elementor-widget-text-editor"
                        data-id="9b6a49d"
                        data-element_type="widget"
                        data-settings='{"ekit_we_effect_on":"none"}'
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Basic
                            <br />
                            <span
                              style={{ fontSize: "22px", color: "#ffffff" }}
                            >
                              <b>$49</b>
                            </span>
                            <br />
                            Low-Medium website visitors
                          </p>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-b89f1e5 elementor-widget elementor-widget-elementskit-stylish-list"
                        data-id="b89f1e5"
                        data-element_type="widget"
                        data-settings='{"ekit_we_effect_on":"none"}'
                        data-widget_type="elementskit-stylish-list.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            {" "}
                            <ul className="ekit-stylish-list ">
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-c3619bf">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      20000 Messages / Month
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-7e6a4b5">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      5 Chatbot
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-bccd8a4">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      5 Crawlers
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-96fdde5">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      10 Training Files
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b2461c1">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
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
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Chat Interface Customizations
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-3151d52">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Leads forms &amp; Support Tickets
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-22a1e29 elementor-align-left elementor-widget elementor-widget-button"
                        data-id="22a1e29"
                        data-element_type="widget"
                        data-settings='{"ekit_we_effect_on":"none"}'
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              className="elementor-button elementor-button-link elementor-size-md"
                              href="#"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon elementor-align-icon-right">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-arrow-right"
                                  />{" "}
                                </span>
                                <span className="elementor-button-text">
                                  Start Free Trial
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7cc8d0f">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-dd1abf4 elementor-widget elementor-widget-text-editor">
                        <div className="elementor-widget-container">
                          <p>
                            Basic
                            <br />
                            <span
                              style={{ fontSize: "22px", color: "#ffffff" }}
                            >
                              <b>$99</b>
                            </span>
                            <br />
                            Low-Medium website visitors
                          </p>{" "}
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-ee5d089 elementor-widget elementor-widget-elementskit-stylish-list">
                        <div className="elementor-widget-container">
                          <div className="ekit-wid-con">
                            <ul className="ekit-stylish-list ">
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-c3619bf">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Unlimited Messages
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-7e6a4b5">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      10 Chatbot
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-bccd8a4">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      10 Crawlers
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-96fdde5">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      20 Training Files
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b2461c1">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
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
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Chat Interface Customizations
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-3151d52">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Leads forms &amp; Support Tickets
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-a0c02a1">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      Remove 'Powered by Chatpad'
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li className="ekit-stylish-list-content-wrapper elementor-repeater-item-b48067e">
                                <div className="ekit-stylish-list-content">
                                  <div className="ekit-stylish-list-content-icon">
                                    <i
                                      aria-hidden="true"
                                      className="fa fa-check-circle-o"
                                    />
                                  </div>
                                  <div className="ekit-stylish-list-content-text">
                                    <span className="ekit-stylish-list-content-title">
                                      User chat file attachment
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-7960b0e elementor-align-left elementor-widget elementor-widget-button"
                        data-id="7960b0e"
                        data-element_type="widget"
                        data-settings='{"ekit_we_effect_on":"none"}'
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              className="elementor-button elementor-button-link elementor-size-md"
                              href="#"
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon elementor-align-icon-right">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-arrow-right"
                                  />{" "}
                                </span>
                                <span className="elementor-button-text">
                                  Start Free Trial
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="elementor-section elementor-top-section elementor-element elementor-element-38f7ba2 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementskit-parallax-multi-container">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c1cabd0">
            <Pricing
              className="elementor-widget-wrap elementor-element-populated"
              data={freePlan}
            />
          </div>
        </div>
      </section>
      <section
        style={{ backgroundColor: "rgb(9 11 22/1)" }}
        className="flex relative overflow-hidden [&>*:not(.data-rf-layer)]:z-10 flex-row h-[600px] sm:h-[480px] mask-gradient-circle from-landing-950"
      >
        <div className="flex absolute data-rf-layer rounded-[inherit] flex-row aspect-[1] bg-gradient-to-r from-[#CB5CDD] to-[#276BF0] rounded-b-full bottom-[50%] left-[30%] right-[30%] blur-[100px]" />
        <div className="flex absolute data-rf-layer rounded-[inherit] flex-row aspect-[10/7] -left-1/2 -right-1/2 bottom-[70%] bg-landing-950 !rounded-[50%] border-b border-b-landing-50/30" />
        <div className="flex flex-col absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-12 items-center gap-6">
          <Image
            style={{ width: 60 }}
            src="https://mekoy17nau9fhmpf.public.blob.vercel-storage.com/favicon_chatpad_large.png"
            width={60}
            height={60}
            alt="logo"
          />
          <div className="flex flex-col gap-4 items-center text-center">
            <span className="text-3xl font-semibold text-[#EBECF3]">
              Get Custom ChatGPT On Your Website
            </span>
            <span className="leading-7 text text-[#EBECF3]">
              Build your own AI powered chatbot. No coding required.
            </span>
            <div className="flex flex-row gap-4 wrap justify-center">
              <button
                style={{
                  backgroundColor: "#1e293b",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 1px",
                  borderColor: "#3d4355",
                  borderRadius: "25px 25px 25px 25px",
                }}
                className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-primary-50 text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 min-w-[100px] rounded-full"
              >
                Get Started for Free
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
