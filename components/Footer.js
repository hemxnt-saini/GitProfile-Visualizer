import styled from 'styled-components';
import { theme, mixins, media } from '../style';
const { colors } = theme;

const StyledFooter = styled.footer`
  ${mixins.flexCenter};
  padding: 2rem 5rem;
  color: ${colors.grey};
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  ${media.bp900`
    padding: 2rem;
  `};
  ${media.bp400`
    padding: 1rem;
  `};

  a {
    padding: 5px;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <span>Built with ❤ by me</span>
    </div>
  </StyledFooter>
);

export default Footer;
