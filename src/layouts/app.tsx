import { useState } from "react";
import {
  Layout,
  Logo,
  Sidebar as Side,
  Top,
  Button,
  Content,
  Main as MainContent,
  Navigation,
} from "@layouts/styles";
import { LogoIcon } from "@components/icons";
import { MenuButton } from "@components/button";
import { AnimatePresence, motion } from "framer-motion";

type PropsLayout = {
  children: React.ReactNode;
};

const sidebarTransition = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  closed: {
    x: "-150%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  exit: {
    x: "-150%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

const mainTranstition = {
  open: {
    marginLeft: 0,
    marginRight: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  closed: {
    marginLeft: "auto",
    marginRight: "auto",
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  exit: {
    marginLeft: "auto",
    marginRight: "auto",
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

const buttonTransition = {
  open: {
    y: "150%",
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  closed: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
  exit: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
    },
  },
};

export function AppLayout({ children }: PropsLayout) {
  const [isOpen, setIsOpen] = useState(Boolean(false));

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  return (
    <AnimatePresence>
      <Layout>
        <Side
          variants={sidebarTransition}
          initial="open"
          animate={isOpen ? "open" : "closed"}
          isOpen={isOpen}
        >
          <Top>
            <Logo>
              <LogoIcon />
              Listfy
            </Logo>

            <MenuButton isOpen={true} onClick={() => toggleSidebar()} />
          </Top>
        </Side>

        <MainContent
          variants={mainTranstition}
          initial="open"
          animate={isOpen ? "open" : "closed"}
        >
          <Content>{children}</Content>
          <Navigation>
            <Button>Write with ListFy</Button>

            <motion.div
              variants={buttonTransition}
              initial="open"
              animate={isOpen ? "open" : "closed"}
            >
              <MenuButton isOpen={false} onClick={() => toggleSidebar()} />
            </motion.div>
          </Navigation>
        </MainContent>
      </Layout>
    </AnimatePresence>
  );
}
