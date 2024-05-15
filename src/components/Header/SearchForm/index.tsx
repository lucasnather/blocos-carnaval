import Search from '../../../assets/search.svg'
import Location from '../../../assets/location.svg'
import Arrow from '../../../assets/chevron-down.svg'
import { ArrowIcon, Button, FormContainer, Input, InputIcons, InputsContainer, Select } from './style'

export function SearchForm() {
    return (
        <FormContainer action="#">
            <InputsContainer>
                    <InputIcons src={Search} alt="ícone de busca" />
                    <Input type="text" name="name" id="name" placeholder='Pesquise por nome'/>
            </InputsContainer>

            <InputsContainer>
                    <InputIcons src={Location} alt="ícone de localização" />
                    <Select name="city" id="city" >
                        <option value="Selecione uma cidade" disabled selected>Selecione uma cidade</option>
                        <option value="São Paulo">São Paulo</option>
                    </Select>
                <ArrowIcon src={Arrow} alt="ícone de flecha - abrir select" />
            </InputsContainer>

            <Button>Buscar agora</Button>
        </FormContainer>
    )
}