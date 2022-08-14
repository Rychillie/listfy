import { MenuButton } from "@components/button";
import { Button, Content, Main as MainContent, Navigation } from "./styles";

type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <MainContent>
      <Content>{children}</Content>
      <Navigation>
        <Button>Write with ListFy</Button>

        <MenuButton isOpen={false} onClick={() => console.log("open menu")} />
      </Navigation>
    </MainContent>
  );
}
