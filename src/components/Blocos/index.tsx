import { useEffect, useState } from 'react'
import { Card } from './Card'
import { 
    BlocosContainer, 
    BlocosHeader, 
    ButtonList, 
    ButtonMap, 
    ButtonsHeader,
    MainContainer, 
} from './style'
import { buscaBlocosApi } from '../../api/busca-blocos-api'

interface FotoProps {
    image: string
    url: string
}

interface BlocosProps {
    id: string
    title: string
    description: string
    city: string
    uf: string
    FotosBloco: FotoProps[]
}

export function Blocos() {

    const [ bloco, setBloco] = useState<BlocosProps[]>([])

    async function buscaBlocos() {
        const blocosApi = await buscaBlocosApi()

        setBloco(blocosApi)
    }

    useEffect(() => {
        buscaBlocos()
    }, [])
   
  
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

                
            {
                bloco.map(bl => {
                    console.log(bl)
                    return (
                        <Card 
                            key={bl.id}
                            title={bl.title}
                            description={bl.description}
                            city={bl.city}
                            uf={bl.uf}
                            image={bl.FotosBloco[0].url}                 
                        />    
                    )
                })
            }          
                        

            </MainContainer>
        </BlocosContainer>
    )
}