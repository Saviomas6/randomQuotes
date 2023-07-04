import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BsTwitter } from "react-icons/bs";
const App = () => {
  const [quotesMessage, setQuotesMessage] = useState("Loading");
  const [authorName, setAuthorName] = useState("Loading");

  const quotesApi = async () => {
    const result = await fetch("https://api.quotable.io/random");
    const data = await result.json();
    setQuotesMessage(data?.content);
    setAuthorName(data?.author);
  };

  useEffect(() => {
    quotesApi();
  }, []);

  const tweetQuotes = () => {
    const tweet = `https://twitter.com/intent/tweet?text=${quotesMessage}`;
    window.open(tweet);
  };

  return (
    <OpacityAnimation>
      <AppMainContainer>
        <AppContainer>
          <Heading>Quotes of the Day</Heading>
          <Content>&ldquo; {quotesMessage} &rdquo;</Content>
          <Author>- {authorName}</Author>
          <ButtonWrapper>
            <IconWrapper onClick={tweetQuotes}>
              <BsTwitter size={25} />
            </IconWrapper>
            <Button onClick={quotesApi}>New Quotes</Button>
          </ButtonWrapper>
        </AppContainer>
      </AppMainContainer>
    </OpacityAnimation>
  );
};

export default App;

const AppMainContainer = styled.div`
  background-color: #1da1f2;
  height: 100vh;
  padding: 0 10px;
  display: grid;
  place-items: center;
`;

const AppContainer = styled.div`
  min-height: 200px;
  width: 400px;
  background-color: #fafafa;
  border-radius: 10px;
  color: #000;
  padding: 15px;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
  @media screen and (max-width: 360px) {
    width: 250px;
  }
`;

export const Heading = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  font-size: 18px;
  text-align: center;
  color: #000;
  margin-top: 25px;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
const Author = styled.div`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  margin: 20px 0;
  text-align: end;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;
`;

const Button = styled.button`
  height: 45px;
  width: 130px;
  outline: none;
  border: none;
  border-radius: 40px;
  color: #fff;
  background-color: #1da1f2;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 40px;
  }
`;
const IconWrapper = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 100%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: #1da1f2;
  }
  @media screen and (max-width: 480px) {
    height: 35px;
    width: 35px;
  }
`;

const opacityAnimation = keyframes`
0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const OpacityAnimation = styled.div<any>`
  animation: ${opacityAnimation} 1.5s;
`;
