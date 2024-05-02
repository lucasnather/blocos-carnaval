import Location from '../../../assets/location.svg'
import { 
    BlocosCard, 
    BlocosContent, 
    BlocosLocation } from './style'

interface CardProps {
    image: string
    title: string
    description: string
    city: string
    uf: string
}

export function Card({ city, description, image, title, uf }: CardProps) {
    return (
        <BlocosCard>
            <img src={image} alt="" />

            <BlocosContent>
                <h3>{ title }</h3>
                <p>{ description }</p>
                <BlocosLocation>
                    <img src={Location} alt="" />
                    <p>{ city } - { uf }</p>
                </BlocosLocation>
            </BlocosContent>
        </BlocosCard>
    )
}