import React from 'react'
import { INotiModal } from './type';
import { CloseButton as Close } from "../../assets";
import {
    CloseButton,
  TarjetaModal,
  ContenedorModal,
  DescripcionModal,
  ImagenModal,
  TituloModal,
  CotenedorTexto}from "./styled"



const NoticiasModal = ({titulo,descripcion,imagen, children,setModal, altImagen}:INotiModal ) => {
  return (
  <ContenedorModal>
    <TarjetaModal>
      <CloseButton onClick={() => setModal(null)}>
				<img src={Close} alt="close-button" />
			</CloseButton>
            <ImagenModal src={imagen} alt={altImagen} />
            <CotenedorTexto>
				<TituloModal>{titulo}</TituloModal>
				<DescripcionModal>{descripcion}</DescripcionModal>
				{children}
			</CotenedorTexto>
    </TarjetaModal>
  </ContenedorModal>
  )
}

export default NoticiasModal