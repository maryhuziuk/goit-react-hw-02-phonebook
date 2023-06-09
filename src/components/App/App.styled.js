import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px;
  background: linear-gradient(to bottom, #ffccff 0%, #ccffff 100%);
`;

export const Message = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 24px;
  width: 500px;
  height: 70px;
  background-color: white;
  border-radius: 4px;
  border: 3px solid #ee82ee
  text-align: center;
  color: black
`;
export const Wrapper = styled.div`
  display: flex ;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin: auto
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  height: 440px;
  padding: 20px;
 

  &.contacts {
    overflow-y: auto;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 28px;
`;