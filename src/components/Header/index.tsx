import { Form } from './Form'
import Ilustra01 from '../../assets/ilustra-01.svg'
import Ilustra02 from '../../assets/ilustra-02.svg'
import { 
    ContentContainer, 
    FirstImage,
    HeaderContainer, 
    SecondImage, 
    Title } from './style'

export function Header() {
    return (
        <HeaderContainer>
            <FirstImage src={Ilustra01} alt="ilustação" />

            <ContentContainer>
                <p>Find your block</p>
                <Title>Encontre os <strong>melhores blocos</strong> <br /> de carnaval de 2023</Title>

                <Form />
            </ContentContainer>


            <SecondImage src={Ilustra02} alt="ilustração" />
        </HeaderContainer>
    )
}