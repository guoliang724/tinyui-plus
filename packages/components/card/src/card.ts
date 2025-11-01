import type { ExtractPropTypes } from "vue";

export const cardProps = {
  // card width
  width: {
    type: Number,
    default: 0,
  },
  // card image resource link
  imgSrc: {
    type: String,
    default: "",
    required: true,
  },
  // card image height
  imgHeight: {
    type: Number,
    default: 0,
  },
  // card summary
  summary: {
    type: String,
    default: "",
  },
};

export type CardProps = ExtractPropTypes<typeof cardProps>;