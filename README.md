# Jonas Max — Portfólio

> Portfólio pessoal de Jonas Max — Software Engineer, Full-Stack Developer e Gen AI Enthusiast.

Aplicação web estática que centraliza meus projetos, links profissionais e configurações do meu setup de desenvolvimento. Construída com foco em performance, tipagem rigorosa e uma estética minimalista com tema escuro.

---

## Sobre o projeto

- **Perfil** — Apresentação pessoal com foto, headline e redes sociais
- **Projetos** — Vitrine de projetos com fallback automático para a API do GitHub
- **Links** — Acesso rápido a GitHub, LinkedIn, Instagram e e-mail
- **Setup** — Equipamentos e periféricos que utilizo no dia a dia

---

## Tecnologias

| Camada                 | Tecnologia                                                                      |
| ---------------------- | ------------------------------------------------------------------------------- |
| Framework              | [Next.js 16](https://nextjs.org) com `output: export` (geração estática)        |
| UI                     | [React 19](https://react.dev) + [shadcn/ui](https://ui.shadcn.com)              |
| Estilização            | [Tailwind CSS v4](https://tailwindcss.com)                                      |
| Animações              | [Motion](https://motion.dev)                                                    |
| Background Animado     | [React Three Fiber](https://r3f.docs.pmnd.rs) + [Three.js](https://threejs.org) |
| Tipografia             | [Geist Mono](https://vercel.com/font)                                           |
| Linguagem              | [TypeScript](https://www.typescriptlang.org)                                    |
| Gerenciador de pacotes | [pnpm](https://pnpm.io)                                                         |

---

## 🚀 CI/CD — Deploy automatizado

O deploy é feito automaticamente via **GitHub Actions** a cada push na branch `main`.

O workflow realiza:

1. Checkout do repositório
2. Configuração do pnpm com cache de dependências
3. Build estático com `pnpm build`
4. Deploy do diretório `./out` para a branch `gh-pages` via [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages)

O site fica disponível em: **[devjonasmax.github.io/portifolio](https://devjonasmax.github.io/portifolio)**

---

## Como rodar o projeto

**Pré-requisitos:** Node.js 20+ e pnpm instalados.

```bash
# Clone o repositório
git clone https://github.com/DevJonasMax/portifolio.git
cd portifolio

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🤝 Contribuindo

Fique à vontade para fazer um **fork** deste projeto e adaptá-lo ao seu próprio portfólio! Contribuições, sugestões e melhorias também são muito bem-vindas.

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Faça o commit das suas alterações (`git commit -m 'feat: minha feature'`)
4. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE) — sinta-se livre para usar, modificar e distribuir.

---

<p align="center">Feito com ☕ por <a href="https://github.com/DevJonasMax">Jonas Max</a></p>
