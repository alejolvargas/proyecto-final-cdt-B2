export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

export interface INotiModal {
  titulo: string;
  descripcion: string;
  imagen: string;
  children?: React.ReactNode;
  setModal: (modal: INoticiasNormalizadas|null) => void;
  altImagen: string;
  
}
export interface INotiCarta {
  titulo: string;
  fecha: number | string;
  imagen: string;
  descripcionCorta?: string;
  setModal: (modal: INoticiasNormalizadas|null) => void;
  cantidad: any 

}
