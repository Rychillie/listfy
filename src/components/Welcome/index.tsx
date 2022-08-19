import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { LogoIcon } from "@components/icons";
import {
  Top,
  Title,
  Paragraph,
  Container,
  Row,
  Button,
  BtnLink,
  Header,
  Footer,
  Logo,
} from "./styles";

const TransitionEvent = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
    },
  },
};

export default function Welcome() {
  return (
    <AnimatePresence>
      <Header
        initial={{ opacity: 0, y: -100 }}
        exit={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          when: "beforeChildren",
          ...TransitionEvent,
        }}
      >
        <Logo>
          <LogoIcon />
          Listfy
        </Logo>
      </Header>
      <Container>
        <Top>
          <Title
            initial={{ opacity: 0, y: -100, zIndex: -1 }}
            exit={{ opacity: 0, y: -100, zIndex: -1 }}
            animate={{ opacity: 1, y: 0, zIndex: 3 }}
            transition={{
              delay: 0.6,
              ...TransitionEvent,
            }}
          >
            The To-Do List You Need!
          </Title>
          <Paragraph
            initial={{ opacity: 0, y: -100, zIndex: -1 }}
            exit={{ opacity: 0, y: -100, zIndex: -1 }}
            animate={{ opacity: 1, y: 0, zIndex: 2 }}
            transition={{
              delay: 0.5,
              ...TransitionEvent,
            }}
          >
            An open source To-do List App made by minimalists who don&apos;t
            like to waste time.
          </Paragraph>
        </Top>
        <Row>
          <Button
            onClick={() => console.log("Get started")}
            initial={{ opacity: 0, y: -100, zIndex: -1 }}
            exit={{ opacity: 0, y: -100, zIndex: -1 }}
            animate={{ opacity: 1, y: 0, zIndex: 1 }}
            transition={{
              delay: 0.7,
              ...TransitionEvent,
            }}
          >
            Get started
          </Button>
          <BtnLink
            href="https://github.com/Rychillie/listfy"
            target="_blank"
            initial={{ opacity: 0, y: -100, zIndex: -1 }}
            exit={{ opacity: 0, y: -100, zIndex: -1 }}
            animate={{ opacity: 1, y: 0, zIndex: 1 }}
            transition={{
              delay: 0.8,
              ...TransitionEvent,
            }}
          >
            GitHub
          </BtnLink>
        </Row>
      </Container>
      <Footer
        initial={{ opacity: 0, y: 100, zIndex: -1 }}
        exit={{ opacity: 0, y: 100, zIndex: -1 }}
        animate={{ opacity: 1, y: 0, zIndex: 1 }}
        transition={{
          delay: 0.8,
          ...TransitionEvent,
        }}
      >
        <Link href="#">
          <a>About</a>
        </Link>
        <Link href="#">
          <a>Roadmap</a>
        </Link>
        <Link href="#">
          <a>Pricing</a>
        </Link>
      </Footer>
    </AnimatePresence>
  );
}
