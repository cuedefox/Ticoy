import React from "react";
import { useModal } from "./UseModal";
import Modal from "./ModalFaq";
import icono from "../assets/img/iconFaq.png";
import logo from "../assets/img/logoFaq.png";
import backfaq from "../assets/img/backgrounds/faqs.svg"
const Faq = () => {
    const stylesBack = {
        backgroundImage: `url(${backfaq})`,
    }

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);
    const [isOpenModal2, openModal2, closeModal2] = useModal(false);
    const [isOpenModal3, openModal3, closeModal3] = useModal(false);
    const [isOpenModal4, openModal4, closeModal4] = useModal(false);
    const [isOpenModal5, openModal5, closeModal5] = useModal(false);
    const [isOpenModal6, openModal6, closeModal6] = useModal(false);
    const [isOpenModal7, openModal7, closeModal7] = useModal(false);
    const [isOpenModal8, openModal8, closeModal8] = useModal(false);
    
    const buttonLeft = [
        //pregunta 1
        {
            name: "¿Como realizo una compra?",
            nameModal: "Las compras se realizan via Whatsapp",
            abrirModal: openModal1,
            modalAbierto: isOpenModal1,
            cerrarModal: closeModal1,
        },

        //pregunta 2
        {
            name: "¿Cuáles son los métodos de pago?",
            nameModal: "Efectivo, transferencia, débito y crédito. (Consultar promos vigentes)",
            abrirModal: openModal2,
            modalAbierto: isOpenModal2,
            cerrarModal: closeModal2,
        },
        //pregunta 3
        {
            name: "¿Puedo retirar mi pedido personalmente?",
            nameModal: "Si! podes retirar tu pedido por la localidad de Salsipuedes, coordinando previamente día y horario por privado, al igual que la dirección.",
            abrirModal: openModal3,
            modalAbierto: isOpenModal3,
            cerrarModal: closeModal3,
        },
        //pregunta 4
        {
            name: "¿Hacen envios?",
            nameModal: "Si!, si es por la zona donde resido.",
            abrirModal: openModal4,
            modalAbierto: isOpenModal4,
            cerrarModal: closeModal4,
        }
    ];

    const buttonRight = [
        //pregunta 5
        {
            name: "¿Las joyas tienen garantía? ",
            nameModal: "Si, tienen garantía, pero solo las joyas provenientes de Córdoba Capital. ",
            abrirModal: openModal5,
            modalAbierto: isOpenModal5,
            cerrarModal: closeModal5,
        },

        //pregunta 6
        {
            name: "¿Las joyas tienen cambio?",
            nameModal: "Depende cada caso particular. Por el tiempo que haya pasado desde la compra y el estado de la joya.",
            abrirModal: openModal6,
            modalAbierto: isOpenModal6,
            cerrarModal: closeModal6,
        },
        //pregunta 7
        {
            name: "¿Cómo calculo el talle de mi anillo?",
            nameModal: "Para saber tu talle, medí el diámetro interno de un anillo que ya tengas, para aproximarte al talle que buscás. Vas a medir la parte más ancha del anillo para asegurarte que pase por los nudillos sin problemas. Ahora resta comparar tu resultado con las medidas que te dejamos a continuación, recordá que no todos los dedos miden lo mismo. De igual forma ocurre al cambiar de mano.",
            abrirModal: openModal7,
            modalAbierto: isOpenModal7,
            cerrarModal: closeModal7,
        },
        //pregunta 8
        {
            name: "¿Cómo cuido los productos?",
            nameModal: "aksdjkdsjkds",
            abrirModal: openModal8,
            modalAbierto: isOpenModal8,
            cerrarModal: closeModal8,
        }
    ];
    return (
        <div className="faq" id="faq" style={stylesBack}>
            <h2>Preguntas frecuentes</h2>
            <div className="containerFaq">
                {/* preguntas lado izquierdo */}
                <div className="left">
                    {
                        buttonLeft.map(button => (
                            <div>
                                <button onClick={button.abrirModal}>
                                    {button.name}
                                </button>

                                <Modal isOpen={button.modalAbierto} closeModal={button.cerrarModal}>
                                    <h3>{button.nameModal}</h3>
                                </Modal>
                            </div>
                        ))
                    }
                </div>

                {/* preguntas lado derecho */}
                <div className="right">
                    {
                        buttonRight.map(button => (
                            <div>
                                <button onClick={button.abrirModal}>
                                    {button.name}
                                </button>

                                <Modal isOpen={button.modalAbierto} closeModal={button.cerrarModal}>
                                    <h3>{button.nameModal}</h3>
                                </Modal>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="descriptionFaq">
            <img src={icono} alt="icono-corazon" className="iconoFaq"/>
            <p>Si tenés alguna otra duda, escribínos vía WhatsApp y lo resolvemos juntas!</p>
            <img src={logo} alt="logo ticoy" className="logoFaq"/>
            </div>
        </div>
    )
}

export default Faq;