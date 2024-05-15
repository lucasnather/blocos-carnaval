export async function buscaBlocosApi() {
    const data = await fetch('http://localhost:8080/api/blocos')
    const response = await data.json()

    return response
}