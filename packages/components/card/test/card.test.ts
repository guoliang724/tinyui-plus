import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Card from "../src/card.vue";

const imgSrc = "https://abc.com/abc.png";

describe("test Card component", () => {
  it("test card width", () => {
    const wrapper = mount(Card, {
      props: {
        width: 300,
        imgSrc,
      },
    });

    expect(wrapper.find(".tiny-card").attributes("style")).toContain(
      "width: 300px;"
    );
  });

  it("test image resource", () => {
    const wrapper = mount(Card, {
      props: {
        imgSrc,
      },
    });

    expect(wrapper.find(".tiny-card-img img").attributes("src")).toBe(imgSrc);
  });

  it("test image height", () => {
    const wrapper = mount(Card, {
      props: {
        imgSrc,
        imgHeight: 200,
      },
    });

    expect(wrapper.find(".tiny-card-img").attributes("style")).toContain(
      "height: 200px"
    );
  });

  it("test card summary", () => {
    const summary = "This is the summary of a card";
    const wrapper = mount(Card, {
      props: {
        summary,
        imgSrc,
      },
    });
    expect(wrapper.find(".tiny-card-summary").text()).toBe(summary);
  });

  it("test summary slot", () => {
    const summary = "This is the summary of a card";
    const wrapper = mount(Card, {
      props: {
        imgSrc,
      },
      slots: {
        default: summary,
      },
    });
    expect(wrapper.find(".tiny-card-summary").text()).toBe(summary);
  });

  it("test footer slot", () => {
    const footer = "This is the footer content";
    const wrapper = mount(Card, {
      props: {
        imgSrc,
      },
      slots: {
        footer: footer,
      },
    });
    expect(wrapper.find(".tiny-card-footer").text()).toBe(footer);
  });
});
