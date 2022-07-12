import { type } from 'os';
import React from 'react'
import {
TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  BotonLectura,
} from "./styled";
import { INotiCarta } from "./type";
  



const NoticiaCarta = ({titulo, descripcionCorta,fecha,imagen,setModal, cantidad}:INotiCarta) => {
  return (
    
          <TarjetaNoticia>
            <ImagenTarjetaNoticia src={imagen} />
            <TituloTarjetaNoticia>{titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(cantidad)}>Ver más</BotonLectura>
          </TarjetaNoticia>
       
     
  )
}

export default NoticiaCarta;