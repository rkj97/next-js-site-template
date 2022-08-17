import styled from "styled-components";

export const StyledPrimaryWhiteSection = styled.section`
  padding: ${({ theme }) => theme.padding.sectionPadding};
  h2 {
    color: ${({ theme }) => theme.colors.altLightBlue};
  }
`;
