import styled from "styled-components";



const Loginpage = () => {
  return (
    <Container>
      <Center>
        <Logo src="/images/BANANATV.png" alt="로고" />
        <HeadingText>Sign in with your Apple ID</HeadingText>
        <Description>You will be signed in to Apple TV and Apple Music</Description>
        <Button>Apple ID</Button>
        <LinkText>Create New Apple ID</LinkText>
        <LinkText>Forgot Apple ID or Password?</LinkText>
      </Center>
    </Container>
    )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;  
`

const Center = styled.div`
  max-widdth: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Logo = styled.img`
  margin-botton: 1.3rem;
  width: 200px;
  `;

const HeadingText = styled.h1`
  font-size: 1.9rem;
  `;

const Description =styled.p`
  margin: 0;
  font-size: 1.3rem;
`;

const LinkText = styled.p`
font-size: 1.2rem;
color:#2997ff;
margin: 1rem 0`;

const Button = styled.a`
  margin-top: 2.5rem;
  margin-bottom: 8rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, .04);
  width: 310px;
  font-weight: 400;
  cursor: pointer;
  
  &:hover{
  background-color: hsla(0, 0%, 100%, .08);
  }
  `;


export default Loginpage