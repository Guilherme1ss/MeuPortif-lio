import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaLinkedin} 
          LinkContact="https://www.linkedin.com/in/guilherme-ferreira-0a38aa113/" 
        />
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="" 
        />
        <ItemContact 
          IconFa={FaEnvelope} 
          LinkContact="guilherme.ferreira1ss@gmail.com" 
        />
      </Content>
    </Container>
  )
}
