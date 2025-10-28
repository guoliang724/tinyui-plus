import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../src/button.vue";

describe("Button", () => {
  it("rendering has default type", () => {
    const wrapper = mount(Button);
    expect(wrapper.classes()).toContain("tiny-button");
    expect(wrapper.classes()).toContain("tiny-button-default");
  });

  it("rendering has proper property", () => {
    const wrapper = mount(Button, {
      props: {
        type: "primary",
      },
    });

    expect(wrapper.classes()).toContain("tiny-button");
    expect(wrapper.classes()).toContain("tiny-button-primary");
  });

  it("rendering plain type button", () => {
    const wrapper = mount(Button, {
      props: {
        plain: true,
      },
    });

    expect(wrapper.classes()).toContain("is-plain");
  });

  it("rendering round type button", () => {
    const wrapper = mount(Button, { props: { round: true } });
    expect(wrapper.classes()).toContain("is-round");
  });

  it("rendering circle type button", () => {
    const wrapper = mount(Button, { props: { circle: true } });
    expect(wrapper.classes()).toContain("is-circle");
  });

  it("rendering disabled type button", () => {
    const wrapper = mount(Button, { props: { disabled: true } });
    expect(wrapper.classes()).toContain("is-disabled");
    expect(wrapper.attributes()).toHaveProperty("disabled");
  });

  it("rendering icon type button", () => {
    const wrapper = mount(Button, { props: { icon: "home" } });
    expect(wrapper.find("i").classes()).toContain("tiny-icon-home");
  });

  it("testing slot functionality", () => {
    const wrapper = mount(Button, {
      slots: {
        default: "click me",
      },
    });
    expect(wrapper.text()).toContain("click me");
  });

  it("testing button event", async () => {
    const wrapper = mount(Button);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
