import React, { useEffect, useState } from 'react';
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './style';

interface Item {
  id: number;
  name: string;
  url: string;
  created_at: string;
}

const Projects: React.FC = () => {
  const [itemsApi, setItemsApi] = useState<Item[]>([]);

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/Guilherme1ss/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status.toString());
        }
        var data = await res.json();
        setItemsApi(data);
      })
      .catch(e => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();  
  }, []);

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: {item.url}</Url>
            <Created_at>Data Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  );
}

export default Projects;