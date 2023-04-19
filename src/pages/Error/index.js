import { Link } from "react-router-dom";
import { ErrorContainer, Error404, ErrorMessage, BackToHome } from "./style";

export default function Error() {
  return (
    <ErrorContainer>
      <Error404>404</Error404>
      <ErrorMessage>Página não encontrada :(</ErrorMessage>
      <Link to="/">
        <BackToHome>Página Inicial</BackToHome>
      </Link>
    </ErrorContainer>
  );
}
