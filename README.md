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
4. roll button
5. hold numbers
6. game won

## 1 layer deeper

>1. setup React
>    * ``` ReactDOM.createRoot(document.getElementById("root)).render(<App />) ```
>    * blue background, white box, HTML, CSS
>    * display: flex; flex-direction: column; align-items: center; height: 100%; 
>    * import ReactDOM from "react-dom/client"

> 2. ten buttons
>    * grid-template: auto auto / repeat(5, 1fr);
>    * alignment, no border, border-radius: 7px, padding
>    * Die.jsx, ``` <div className="die-container"><Die Value={1}/> ```

>5. random numbers
>6. roll button
>7. hold numbers
>8. game won
