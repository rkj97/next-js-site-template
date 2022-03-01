import styled from 'styled-components';
import GoldLink from "../components/subComponents/goldLink";

const FourOhFourSection = styled.section`
  color: ${({ theme }) => theme.colors.isWhite};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  display: grid;
  align-content: center;
  justify-content: center;
  height: 99vh;
  h1 {
    margin-bottom: 5rem;
  }
`;

const Custom404 = () => (
    <>
        <FourOhFourSection>
            <h1>Oops! <small>Page Not Found</small></h1>
            <GoldLink href="/" displayName="RETURN TO HOME" />
        </FourOhFourSection>
    </>
);

export default Custom404;