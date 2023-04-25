import styled from 'styled-components';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

export const FooterWrapper = styled.footer`
  background-color: rgb(0, 22, 34);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
  border-top: 2px solid rgb(56, 182, 255);
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const FooterText = styled.p`
  font-size: 16px;
  font-style: italic;   
  margin: 12px 0;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bolder;
  transition: ease 0.4s;
  outline: none;
  margin-left: 4px;

  &:hover {
    color: #0077b5; /* LinkedIn */
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 24px;
  margin: 0 10px;

  &:hover {
    color: #0077b5; 
  }
`;

export const InstagramIcon = styled(FaInstagram)`
  color: #c13584; 
  transition: ease 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const FacebookIcon = styled(FaFacebook)`
  color: #3b5998; 
  transition: ease 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const LinkedinIcon = styled(FaLinkedin)`
  color: #0077b5; 
  transition: ease 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const GithubIcon = styled(FaGithub)`
  color: #fff; 
  transition: ease 0.4s;
  
  &:hover {
    transform: scale(1.2);
  }
`;