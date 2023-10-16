import { FaArrowRight } from "react-icons/fa";
import {
  Container,
  Content,
  Infos,
  Name,
  Function,
  Intro,
  LinkProjects,
  Logo,
  Img,
} from "../../styles/indexStyle";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>
            Olá, <br /> Sou Guilherme Ferreira
          </Name>
          <Function>Dev Jr.</Function>
          <Intro>
            Graduando em Engenharia da Computação e Interdisciplinar em Ciência
            e Tecnologia, tenho experiência em desenvolvimento Web (React, JS,
            TS, Python e outros).
          </Intro>
          <Link href="projects">
            <LinkProjects>
              PROJETOS <FaArrowRight />
            </LinkProjects>
          </Link>
        </Infos>
        <Logo>
          <Img src="/images/foto.jpg" alt="logo" />
        </Logo>
      </Content>
    </Container>
  );
}
