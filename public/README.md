# Pasta Public

Esta pasta contém todos os arquivos estáticos do site, como imagens, fontes, etc.

## Estrutura de pastas

- `/logo` - Logotipos da empresa
- `/products` - Imagens de produtos
- `/banners` - Banners para o site
- `/icons` - Ícones personalizados

## Como usar

Para usar uma imagem em seu código, importe-a da seguinte forma:

```jsx
import Image from 'next/image'

// Exemplo de uso
<Image 
  src="/logo/logo.png" 
  alt="Logo Sawam" 
  width={200} 
  height={80} 
/>

