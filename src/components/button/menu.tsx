import { MenuButton as Button } from "./styles";

type Props = {
  isOpen: boolean | false;
  onClick?: () => void;
};

export const MenuButton = ({ isOpen, onClick }: Props) => {
  return (
    <Button status={isOpen ? "open" : "closed"} onClick={onClick}>
      <span />
      <span />
      <span />
    </Button>
  );
};
