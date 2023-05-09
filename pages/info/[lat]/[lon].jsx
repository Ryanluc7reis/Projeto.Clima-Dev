import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
  const [currentInfo,setCurrentInfo] = useState()
  const [futureInfo,setFutureInfo] = useState()
  const router = useRouter()
  const { lat, lon} = router.query // pegar dados direto das rotas

  const fetchCurrentInfo = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&amp;lon=${lon}&amp;appid=${process.env.NEXT_PUBLIC_OWM_KEY2}&amp;units=metric&amp;lang=pt_br`)
    const json = await response.json()
    setCurrentInfo(json)
  }
  const fetchFutureInfo = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OWM_KEY2}&units=metric&lang=pt_br`)
    const json = await response.json()
    setFutureInfo(json)

  }
  useEffect(() => {
    if ( lat && lon ) {
      fetchCurrentInfo()
      fetchFutureInfo()
    }
  },[ lat, lon])
  console.log(currentInfo)
  return (
    <>
      <Navbar />
      <Body>
        <Container>
          <Content>
            <Text>Previsão do tempo para </Text>
            <CityName>{currentInfo?.name}, {currentInfo?.sys.country}</CityName>           
          </Content>
          <InfoContainer>
              <ClimaCard 
                title="Agora"
                icon={currentInfo?.weather?.icon}
                description={currentInfo?.weather?.description}
                temp={currentInfo?.main?.temp}
                feels={currentInfo?.main?.feels_like}
                min={currentInfo?.main?.temp_min}
                max={currentInfo?.main?.temp_max}
              />
              <ClimaCard 
                title="Próximas 3 horas"
                icon={futureInfo?.list[0].weather[0]?.icon}
                description={futureInfo?.list[0].weather[0]?.description}
                temp={futureInfo?.list[0].main?.temp}
                feels={futureInfo?.list[0].main?.feels_like}
                min={futureInfo?.list[0].main?.temp_min}
                max={futureInfo?.list[0].main?.temp_max}
              />
              <ClimaCard 
                title="Próximas 6 horas"
                icon={futureInfo?.list[1].weather[0]?.icon}
                description={futureInfo?.list[1].weather[0]?.description}
                temp={futureInfo?.list[1].main?.temp}
                feels={futureInfo?.list[1].main?.feels_like}
                min={futureInfo?.list[1].main?.temp_min}
                max={futureInfo?.list[1].main?.temp_max}
              />
            </InfoContainer>
        </Container>       
      </Body>
    </>
  )
}