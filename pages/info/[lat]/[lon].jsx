import styled from 'styled-components'

import Navbar from '../../../src/components/navbar/Navbar'
import Container from '../../../src/components/container/Container'
import ClimaCard from '../../../src/components/climacard/Climacard'

const Body = styled.div`
background-color: ${props => props.theme.grey};
min-height: 100vh;
`
const Content = styled.div`
  padding: 100px 20px;
`
const Text = styled.p`
  font-size: 20px;
  padding: 0;
  margin: 0;
`
const CityName = styled.div`
  font-size: 60px;
  font-weight: 700;
  padding: 0;
  margin: 0;
`
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 12px;
`
export default function IngoPage() {
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para </Text>
            <CityName>Uberlândia, MG,Brasil</CityName>           
          </Content>
          <InfoContainer>
              <ClimaCard />
              <ClimaCard />
              <ClimaCard />
            </InfoContainer>
        </Container>       
      </Body>
    </>
  )
}