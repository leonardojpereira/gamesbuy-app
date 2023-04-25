import { FooterWrapper, FooterText, FooterLink, SocialIcons, SocialLink, InstagramIcon, FacebookIcon, LinkedinIcon, GithubIcon } from './style';


export default function Footer() {
    return (
        <FooterWrapper>
            <FooterText>
                Developed by
                <FooterLink href="https://www.linkedin.com/in/leonardobjpereira/" target="_blank">
                    Leonardo Barbosa
                </FooterLink>
            </FooterText>
            <SocialIcons>
                <SocialLink href="https://www.linkedin.com/in/leonardobjpereira/" target="_blank">
                    <LinkedinIcon />
                </SocialLink>
                <SocialLink href="https://github.com/leonardojpereira" target="_blank">
                    <GithubIcon />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/leonardo.bpereira/" target="_blank">
                    <InstagramIcon />
                </SocialLink>
                <SocialLink href="https://www.facebook.com/leonardo.barbosa.96780671" target="_blank">
                    <FacebookIcon />
                </SocialLink>
            </SocialIcons>
        </FooterWrapper>
    );
}