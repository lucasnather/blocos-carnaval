import Unsplashimage from '../../assets/unsplash_b2jkMC95a_8.svg'
import { Card } from './Card'
import { 
    BlocosContainer, 
    BlocosHeader, 
    ButtonList, 
    ButtonMap, 
    ButtonsHeader,
    MainContainer } from './style'

export function Blocos() {
    return (
        <BlocosContainer>
            <BlocosHeader>
                <h2>Blocos Recomendados</h2>

                <ButtonsHeader>
                    <ButtonList>Lista</ButtonList>
                    <ButtonMap>Mapa</ButtonMap>
                </ButtonsHeader>
            </BlocosHeader>

            <MainContainer>

                <Card 
                    title='O Python do vovô não sobe mais'
                    description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
                    city='São Paulo'
                    uf='SP'
                    image={Unsplashimage}
                />
                
            </MainContainer>
        </BlocosContainer>
    )
}