import { AnimatePresence, motion } from "framer-motion";
import { ContentContainer, ItemContainer } from "./styles";

const showOnLoad = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
  closed: {
    y: "150%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
  exit: {
    y: "150%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.4,
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export default function Welcome() {
  return (
    <AnimatePresence>
      <ContentContainer variants={container} initial="hidden" animate="show">
        <ItemContainer
          initial="closed"
          animate="open"
          exit="exit"
          variants={showOnLoad}
        >
          <h1>
            <span style={{ fontWeight: 700 }}>Hello World</span>
          </h1>
        </ItemContainer>

        <ItemContainer
          initial="closed"
          animate="open"
          exit="exit"
          variants={showOnLoad}
        >
          <p>
            <span style={{ fontWeight: 700 }}>
              What are your plans for today?
            </span>
          </p>
        </ItemContainer>

        <ItemContainer
          initial="closed"
          animate="open"
          exit="exit"
          variants={showOnLoad}
          css={{
            display: "flex",
            flexDirection: "row",
            gap: 16,
            mt: 16,
          }}
        >
          <button onClick={() => console.log("clicked")}>Get Started</button>

          <a href="https://github.com/Rychillie/listfy" target="__blank">
            Learn More
          </a>
        </ItemContainer>
      </ContentContainer>
    </AnimatePresence>
  );
}
