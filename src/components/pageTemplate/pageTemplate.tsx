import { ReactNode } from "react";
import GlobalStyle from "../../style/Global.style";

interface Props {
  children: ReactNode;
}

function PageTemplate({ children }: Props) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
}

export default PageTemplate;
