import useGames from "../../hooks/useGames";
import * as S from "./styles";

export function Feature() {
  const { getGames } = useGames();

  console.log(getGames());

  return (
    <S.Container>
      <S.Title>Destaques</S.Title>
    </S.Container>
  );
}
