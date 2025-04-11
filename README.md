# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Mental steps to build Tenzies

1. setup React
2. ten buttons
3. random numbers
4. useState
5. roll button
6. hold numbers
7. game won

## 1 layer deeper

> 1. setup React
>    * ``` ReactDOM.createRoot(document.getElementById("root)).render(<App />) ```
>    * blue background, white box, HTML, CSS
>    * display: flex; flex-direction: column; align-items: center; height: 100%; 
>    * import ReactDOM from "react-dom/client"
>
> 2. ten buttons
>    * grid-template: auto auto / repeat(5, 1fr);
>    * alignment, no border, border-radius: 7px, padding
>    * Die.jsx, ``` <div className="die-container"><Die Value={1}/> ```
>
> 3. random numbers
>    * ``` for (let i = 0; i < 10; i++) ```
>    * OR ``` return new Array(10).fill90.map(() => Math.ceil(Math.random90 * 6)) ```
>    * box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
>      
> 4. useState
>    * ``` const [diceNumbers, getDiceNumbers] = useState(generateAllNewDice) ```
>    * ``` const diceElements = diceNumbers.map(prevNum => <Die value={prevNum} />) ```
> 
> 5. roll button
>    * ``` <button className="roll-dice" onClick={newDice}>Roll</button> ```
>    * ``` function newDice() {setDice(generateAllNewDice())} ```
>
> 6. hold numbers
>    * object ``` for (let i = 0; i < 10; i++) {diceElement.push({value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()}) ```    
>    * OR ``` return new Array(10).fill(0).map(() => ({value: Math.ceil(Math.random() * 6), id: nanoid(), isHeld: true, })) ```
> 
> 7. game won
