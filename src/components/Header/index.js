import { useState } from "react";
import logo from "../../assets/logo.jpg";
import * as S from "./styles";

export function Header() {
  const [search, setSearch] = useState("");

  return (
    <S.Container>
      <S.Logo src={logo.src} />
      <div>
        <S.HeaderNavBar>
          <a href="#" target="_blank" rel="noopener noreferrer">
            destaque
          </a>
          |
          <a href="#" target="_blank" rel="noopener noreferrer">
            lançamentos
          </a>
          |
          <a href="#" target="_blank" rel="noopener noreferrer">
            plataformas
          </a>
          |
          <a href="#" target="_blank" rel="noopener noreferrer">
            publishers
          </a>
        </S.HeaderNavBar>

        <S.SearchBar
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar games"
        />
      </div>
    </S.Container>
  );
}
