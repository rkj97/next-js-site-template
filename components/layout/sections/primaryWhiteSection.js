import styled from "styled-components";

export const StyledPrimaryWhiteSection = styled.section`
  //   color: ${({ theme }) => theme.colors.isWhite};
  background-color: ${({ theme }) => theme.colors.iswhite};
  padding: ${({ theme }) => theme.padding.sectionPadding};
  h2 {
    color: ${({ theme }) => theme.colors.altLightBlue};
  }
`;
