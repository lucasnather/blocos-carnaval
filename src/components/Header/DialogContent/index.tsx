import * as Dialog  from '@radix-ui/react-dialog'
import { Modal, ModalContent } from './style'
import { consomeCadastraBlocosApi } from '../../../api/consome-blocos-api'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const RegisterBlocoSchema = z.object({
    title: z.string(),
    description: z.string(),
    city: z.string(),
    uf: z.string(),
    image: z.instanceof(FileList)
})

type registerBlocoType = z.infer<typeof RegisterBlocoSchema>
  

export function DialogContent() {
   

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<registerBlocoType>()

    async function handleForm(data: registerBlocoType) {

        const { city, description, image, title, uf } = data
        const images = image[0]

        await consomeCadastraBlocosApi({
           city,
           description,
           image: images,
           title,
           uf
        })
    }

    return (
        <Dialog.Portal>
            <Modal>
                <ModalContent >
                    
                    <Dialog.Title>
                        Cadastre um bloquinho e venha ser feliz!!!
                    </Dialog.Title>

                    <Dialog.Description>
                        Faça parte da maior comunidade carnavalesca do Brasil e conheça diversos
                        bloquinhos para se divertir.
                    </Dialog.Description>

                        <form action="#" method='post' encType='multipart/form-data' onSubmit={handleSubmit(handleForm)}>
                            <div>
                                <label htmlFor="title">Título</label>
                                <input
                                    type="text"
                                    {...register('title')}
                                    id="title"  
                                />
                            </div>
                                <div>
                                <label htmlFor="description">Descrição</label>
                                <input
                                    type="text"
                                    {...register('description')}
                                    id="description"   
                                />
                            </div>
                            <div>
                                <label htmlFor="city">Cidade</label>
                                <input
                                    type="text"
                                    {...register('city')}
                                    id="city"  
                                    />
                                </div>
                                <div>
                                    <label htmlFor="uf">Uf</label>
                                    <input
                                        type="text"
                                        {...register('uf')}
                                        id="uf"   
                                    />
                                </div>
                                <div>
                                    <label htmlFor="image">Foto</label>
                                    <input
                                        type="file"
                                        {...register('image')}
                                        id="image"
                                        accept='image/*'
                                       
                                    />
                                </div>
                                <button type='submit' disabled={isSubmitting}>Cadastrar</button>
                            </form>
                    <Dialog.Close>
                        <button >
                            Cancel
                        </button>
                    </Dialog.Close>
                </ModalContent>
            </Modal>
        </Dialog.Portal>
    )
}