import React, { useState } from 'react';
import { Container, Title, NavLinks, Ancora, Content, Menu, CloseSidebar, ContentTitle, SubTitle } from './style';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const { asPath } = useRouter();

  const showSidebar = (): void => setSidebar(!sidebar);

  function activeLink(path: string): string {
    return asPath === `/${path}` ? 'active' : '';
  }

  return (
    <Container>
      <Content>
        <ContentTitle>
          <Title>
            Guilherme Ferreira
          </Title>
          <SubTitle>
            Portfólio Pessoal
          </SubTitle>
        </ContentTitle>
        <Menu>
          <FaBars onClick={showSidebar} />
        </Menu>
        <NavLinks $sidebar={sidebar}>
          <CloseSidebar onClick={showSidebar}><FaTimes /></CloseSidebar>
          <Link href="/">
            <Ancora className={activeLink('')} onClick={showSidebar}>Home</Ancora>
          </Link>
          <Link href="/projects">
            <Ancora className={activeLink('projects')} onClick={showSidebar}>Projetos</Ancora>
          </Link>
          <Link href="/contact">
            <Ancora className={activeLink('contact')} onClick={showSidebar}>Contato</Ancora>
          </Link>
        </NavLinks>
      </Content>
    </Container>
  );
}

export default Header;