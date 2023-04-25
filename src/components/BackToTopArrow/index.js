import { Arrow } from './style';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

//componente para renderizar um botão de seta, que ao ser clicado, leva o usuário para o topo da página.
export default function BackToTopArrow() {
    return (
        <>
            <Arrow href="#"><BsFillArrowUpCircleFill /></Arrow>
        </>

    )
}