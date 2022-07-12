/** @jest-environment jsdom */
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { generateHandlers } from "../../../mocks/Citas";
import {render, screen, waitFor } from "../../../test-utils";
import Cita from "../Cita"

/* correr los test con $ npm test -- --coverage */

const { handlers } = generateHandlers();
export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


describe("El componente Cita", () => {
 test("se renderiza compomente", () => {
   render(<Cita />);
 });
 test("se renderiza boton", () => {
   render(<Cita />);
   const button = screen.getByText("Obtener cita aleatoria");
		expect(button).toBeInTheDocument();
 });
  test("se renderiza texto no se encontro ninguna cita", () => {
   render(<Cita />);
  const texto = screen.getByText("No se encontro ninguna cita");
		expect(texto).toBeInTheDocument();
 });
});

describe("ingresa un valor en la input de busqueda", ()=> {

    test("cuando se ingresa el nombre del persona muestra la cita",async () => {
        render(<Cita />)
        const ingresarPersonaje = screen.getByTestId("ingresar-valor");
        await userEvent.type(ingresarPersonaje,"Nelson Muntz");
        userEvent.click( await screen.findByText("Obtener Cita"));  
        await waitFor(() => {
          const personaje = screen.getByTestId('texto-cita');
          expect(personaje).toBeInTheDocument();
      })
    })

     test("cuando se ingresa un numero",async () => {
        render(<Cita />)

        const ingresarPersonaje = screen.getByTestId("ingresar-valor");
        await userEvent.type(ingresarPersonaje,"8");
        await userEvent.click(screen.getByText("Obtener Cita"));
        expect(await screen.findByText("Por favor ingrese un nombre válido")).toBeInTheDocument()
       
        
    })
})

describe("boton borrar", () => {
 test("limpiar imput", async() => {
   render(<Cita />);
    const ingresarPersonaje = screen.getByTestId("ingresar-valor");
    const borrar = screen.getByTestId("borrar-busqueda");

      await userEvent.type(ingresarPersonaje,"Nelson Muntz");
      await userEvent.click(borrar);
       expect(screen.getByText("No se encontro ninguna cita")).toBeInTheDocument()
 });
});

 /*  

       Examples
<span data-testid="html-element"><span>Html Element</span></span>
<svg data-testid="svg-element"></svg>
expect(
  getByTestId(document.documentElement, 'html-element'),
).toBeInTheDocument()
expect(getByTestId(document.documentElement, 'svg-element')).toBeInTheDocument()
expect(
  queryByTestId(document.documentElement, 'does-not-exist'),
).not.toBeInTheDocument() 

example teacher in  the classroom

const container = screen.getByTestId("container");

    fireEvent.click(getByText("Toggle Theme"));

    await waitFor(() => {
      expect(container).toHaveClass("bg-slate-800"); 

*/