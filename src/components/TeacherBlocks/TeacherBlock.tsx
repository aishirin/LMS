import React from 'react';
import styled from 'styled-components';

// Создаем стилизованный компонент для карточки
const CardContainer = styled.div`
  max-width: 400px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff

`;

const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

const ContactButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2980b9;
  }
`;

// Определяем типы для свойств компонента
interface CardProps {
  image: string;
  title: string;
  name: string;
  schedule: string;
  description: string;
}

const TeacherBlock: React.FC<CardProps> = ({ image, title, name, schedule, description }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <ContentContainer>
        <Title>{title}</Title>
        <Subtitle>{name} - {schedule}</Subtitle>
        <Description>{description}</Description>
        <ContactButton>Связаться</ContactButton>
      </ContentContainer>
    </CardContainer>
  );
};

export default TeacherBlock;
