import * as Dialog  from '@radix-ui/react-dialog'
import styled from "styled-components";

export const Modal = styled.section`
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    border-radius: 10px;

`

export const ModalContent = styled(Dialog.Content)`
    width: 45rem;

`