# Construção do Projeto Farmácia - React + Vite



1. Criar o projeto React com o Vite

**YARN:**

```bash
yarn create vite farmacia --template react-ts
```

**NPM:**

```bash
npm create vite@latest farmacia -- --template react-ts
```

2. Instalar o React

**YARN:**

```bash
cd farmacia
code .
yarn
```

**NPM:**

```bash
cd farmacia
code .
npm install
```

3. Instalar o Tailwind - Versão 4:

**YARN:**

```bash
yarn add tailwindcss @tailwindcss/vite
```

**NPM:**

```bash
npm install tailwindcss @tailwindcss/vite
```

4. Configurar o Tailwind no arquivo **vite.config.ts**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

5. Adicionar o Tailwind no arquivo **index.css**

```css
@import "tailwindcss";
```

6. Apagar o conteúdo do arquivo **app.css** (<u>**apenas o conteúdo, não apague o arquivo!**</u>)
7. No arquivo **index.html**:
   - Alterar o **idioma da página** na propriedade **`lang`**, da tag **`<html>`**, para **`pt-BR`**
   - Alterar o **favicon** na tag **`<link rel="icon"/>`**, na propriedade **`href`** 
   - Modificar o **título da página** na tag **`<tittle></title>`**

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="https://ik.imagekit.io/vzr6ryejm/farmacia/favicon.png?updatedAt=1725625779112" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Projeto Farmácia</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

8. Instalar o **React Router Dom**:

**YARN:**

```bash
yarn add react-router-dom
```

**NPM:**

```bash
npm install react-router-dom
```

9. Instalar o **React Spinners**:

**YARN:**

```bash
yarn add react-spinners
```

**NPM:**

```bash
npm install react-spinners --save
```

10. Instalar o **Phosphor Icons**:

**YARN:**

```bash
yarn add @phosphor-icons/react
```

**NPM:**

```bash
npm install @phosphor-icons/react
```

11. Instalar o **Axios**:

**YARN:**

```bash
yarn add axios
```

**NPM:**

```bash
npm install axios
```

12. Instalar o **React JS Popup** (Modal):

**YARN:**

```bash
yarn add reactjs-popup
```

**NPM:**

```bash
npm install reactjs-popup
```

13. Atualize o arquivo **app.tsx**

```tsx

function App() {

  return (
    <>
      <h1 className="text-2xl font-bold">Projeto Farmácia</h1>
    </>
  )
}

export default App
```

14. Execute o projeto:

**YARN:**

```bash
yarn dev
```

**NPM:**

```bash
npm run dev
```

13. Abra no Navegador. O resultado será semelhante a imagem abaixo:

![https://i.imgur.com/4LuWdAg.png](https://i.imgur.com/4LuWdAg.png)