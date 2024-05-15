type BlocosApiProps = {
    title: string
    description: string
    city: string
    uf: string
    image: File | null
}

export async function consomeCadastraBlocosApi({
    city, description, image, title, uf
}: BlocosApiProps) {

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('city', city)
    formData.append('uf', uf)
    if(image) {
        formData.append('image', image)
    }

    const data = await fetch('http://localhost:8080/api/blocos', {
        method: 'POST',
        body: formData
    })

    const response = await data.json()

    return response
}