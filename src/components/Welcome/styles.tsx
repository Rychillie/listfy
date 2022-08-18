import { styled } from "@styles/stitches.config";
import { motion } from "framer-motion";
import { Layout } from "@layouts/styles";

export const ContentContainer = styled(
  motion.header,
  {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  Layout
);

export const ItemContainer = styled(motion.div, {});
