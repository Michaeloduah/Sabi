import styled from 'styled-components';
import logo from '../assets/logos/logo.png'; 

const StyledLogo = styled.img`
  height: 3.2rem;
`;

const Logo = () => {
  return <StyledLogo src={logo} alt="Logo" />;
};

export default Logo;
