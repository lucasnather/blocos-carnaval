import { SearchForm } from './SearchForm'
import Ilustra01 from '../../assets/ilustra-01.svg'
import Ilustra02 from '../../assets/ilustra-02.svg'
import { 
    ButtonRegisterBloco,
    ButtonRegisterContainer,
    ContentContainer, 
    FirstImage,
    HeaderContainer, 
    SecondImage, 
    Title } from './style'
import * as Dialog  from '@radix-ui/react-dialog'
import { DialogContent } from './DialogContent'

export function Header() {
    
   
    return (
        <HeaderContainer>
            <Dialog.Root >
                    
                <Dialog.Trigger asChild> 
                    <ButtonRegisterContainer>
                        <ButtonRegisterBloco>Cadastrar bloquinho</ButtonRegisterBloco>
                    </ButtonRegisterContainer>
                </Dialog.Trigger>

                <DialogContent />
            </Dialog.Root>
                
            <FirstImage src={Ilustra01} alt="ilustação" />

            <ContentContainer>
                <p>Find your block</p>
                <Title>Encontre os <strong>melhores blocos</strong> <br /> de carnaval de 2023</Title>
                <SearchForm />
            </ContentContainer>
            <SecondImage src={Ilustra02} alt="ilustração" />

                
        </HeaderContainer>
 
    )
}