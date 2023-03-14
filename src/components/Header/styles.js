import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 50px;

  padding: 0 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #202020;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  max-height: 40px;
`;

export const HeaderNavBar = styled.div`
  margin-right: 16px;

  > a {
    padding: 0 8px;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const SearchBar = styled.input`
  width: 224px;

  padding: 8px 14px;

  background-color: transparent;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.text};

  color: ${({ theme }) => theme.colors.text};
`;
