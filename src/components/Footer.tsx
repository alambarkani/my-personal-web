import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

export default function FooterSection() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Alam Barkani" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
