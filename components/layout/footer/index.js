import styled from "styled-components";
import { StyledPrimaryBlueSection } from "../sections/primaryBlueSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const StyledFooter = styled.div`
  display: grid;
  grid-gap: 6rem 2rem;
  font-size: 1.6rem;
  a:hover {
    color: ${({ theme }) => theme.colors.altLightBlue};
    transition: all 0.1s linear;
    text-decoration: underline;
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakPoints.large}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SocialDiv = styled.div`
  margin-top: 1rem;
  .round {
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    color: white;
    margin: 0.5rem;
    padding: 0.5rem;
    display: inline-flex;
    justify-content: center;
    :hover {
      color: ${({ theme }) => theme.colors.altLightBlue};
    }
  }
  font-size: 2.5rem;
`;

const Footer = () => (
  <footer>
    <center>
      <StyledPrimaryBlueSection>
        {/* <StyledReadingSection> */}
        <StyledFooter>
          {/* Start left content here*/}
          <div>
            <a href="https://www.washingtonstand.com/">The Washington Stand</a>
            <br />
            <br />
            <a href="https://frcgiving.org/">Planned Giving</a>
            <br />
            <br />
            <a href="https://prayvotestand.org/">Prayvotestand.org</a>
            <br />
            <br />
            <a href="https://www.frcaction.org/">FRCAction.org</a>
          </div>
          {/* End left content here */}
          {/* Start middle content here */}
          <div>
            <address>
              &copy; 2022 FRC Action
              <br />
              801 G Street NW, Washington, D.C. 20001
            </address>
            Contact: <a href="tel:+18002254008">1-877/372-2808</a> &#8226;{" "}
            <a className="prvcy" href="/privacy-policy">
              <b>Privacy Policy</b>
            </a>
            <SocialDiv>
              <a
                href="https://www.facebook.com/familyresearchcouncil"
                className="round"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/FRCdc" className="round">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/frcdc" className="round">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.youtube.com/channel/UC2JPmy9Oi_5kAmaVPAInWFw"
                className="round"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.frc.org/contact" className="round">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </SocialDiv>
          </div>
          {/* End middle content here */}
          {/* Start right content here */}
          <div>
            <a
              class="twitter-timeline"
              data-width="300"
              data-height="200"
              href="https://twitter.com/FRCdc?ref_src=twsrc%5Etfw"
            >
              Tweets by FRCdc
            </a>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
          {/* End right content here */}
        </StyledFooter>
        {/* </StyledReadingSection> */}
      </StyledPrimaryBlueSection>
    </center>
  </footer>
);

export default Footer;
