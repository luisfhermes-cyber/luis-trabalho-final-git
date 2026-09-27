Trabalho final da materia versionamento de cóigos.
Realizado no  dia 23 de setembro de 2026. 
Aluno: Luis Felipe Hermes
Professor: Jefferson Miguel Dallalibera
Curso: Técnico em informática para internet

 🎵 Debate: A Morte do Vaqueiro

Um fórum interativo para análise, interpretação e discussão da música **"A Morte do Vaqueiro"**, interpretada por **Luiz Gonzaga** e composta por **Luiz Gonzaga e Nelson Barbalho**.

O projeto apresenta informações sobre a música, tópicos para debate e um espaço interativo para que os usuários possam publicar comentários relacionados à obra.

## 📌 Sobre o projeto

O site foi desenvolvido como uma página temática sobre a música **"A Morte do Vaqueiro"**, destacando aspectos culturais e sociais presentes na obra.

A interface utiliza uma identidade visual inspirada no **sertão nordestino**, com cores terrosas, elementos visuais relacionados à paisagem sertaneja e uma seção especial que simula um ambiente iluminado por uma **lamparina**.

Além do conteúdo informativo, o projeto possui funcionalidades interativas utilizando JavaScript.

## 🎯 Objetivos

* Apresentar informações sobre a música.
* Estimular a discussão sobre os temas presentes na obra.
* Permitir que usuários adicionem comentários aos tópicos de debate.
* Demonstrar o uso de HTML, CSS e JavaScript em um projeto web.
* Criar uma interface temática e responsiva.
* Utilizar armazenamento local para manter os comentários realizados pelo usuário.

## 🛠️ Tecnologias utilizadas

### HTML5

Responsável pela estrutura da página, incluindo:

* Títulos e textos.
* Informações sobre a música.
* Tópicos de debate.
* Formulário de comentários.
* Comentários recentes.
* Links relacionados.

### CSS3

Responsável pela aparência e organização visual do site.

Foram utilizados:

* Variáveis CSS.
* Gradientes.
* Sombras.
* Transições e efeitos de `hover`.
* Layout responsivo.
* Cores e elementos visuais inspirados no sertão nordestino.
* Media queries para dispositivos menores.

### JavaScript

Responsável pelas funcionalidades interativas da página:

* Validação do formulário.
* Contador de caracteres.
* Adição dinâmica de comentários.
* Filtro de comentários por tópico.
* Armazenamento dos comentários no `localStorage`.
* Atualização da quantidade de comentários.
* Botão para voltar ao topo.
* Modo visual "Lamparina".
* Reprodução de um efeito sonoro inspirado no aboio.

## 📂 Estrutura do projeto

```text
projeto/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contém toda a estrutura e o conteúdo principal da página.

Entre as principais seções estão:

* Sobre a Música
* Tópicos de Debate
* Letra Original
* Participar do Debate
* Comentários Recentes
* Links Relacionados

### `style.css`

Define toda a identidade visual do projeto, incluindo cores, tipografia, espaçamentos, cartões, formulário, botões e responsividade.

### `script.js`

Implementa as funcionalidades interativas do projeto e manipula os elementos da página através do DOM.

## ⚙️ Funcionalidades

### 💬 Sistema de comentários

O usuário pode preencher:

* Nome
* E-mail
* Tópico
* Comentário

Após o envio, o comentário aparece imediatamente na seção **Comentários Recentes**.

Os comentários adicionados são armazenados no navegador através do `localStorage`.

> Os comentários ficam salvos localmente no navegador utilizado. O projeto não possui um banco de dados ou servidor responsável por armazenar esses comentários.

### 🔢 Contador de caracteres

O campo de comentário possui um limite de **500 caracteres**.

O JavaScript apresenta um contador mostrando a quantidade utilizada:

```text
125/500 caracteres
```

Caso o limite seja ultrapassado, o contador muda de cor para indicar o problema.

### ✅ Validação do formulário

Antes de adicionar um comentário, o sistema verifica:

* Nome com pelo menos 2 caracteres.
* E-mail em formato válido.
* Comentário com pelo menos 10 caracteres.
* Comentário com no máximo 500 caracteres.

Caso alguma informação esteja incorreta, uma mensagem de erro é exibida.

### 🔎 Filtro por tópico

Os comentários podem ser filtrados de acordo com o tópico escolhido.

As opções disponíveis são:

* A Solidão e o Esquecimento do Vaqueiro
* O Aboio como Lamento
* A Crítica Social na Canção
* O Cachorro como Única Memória

Também existe a opção de visualizar **todos os tópicos**.

### 🔢 Atualização dos comentários

Quando um novo comentário é enviado, o número de comentários relacionado ao tópico escolhido é atualizado automaticamente.

### 🏮 Modo Lamparina

O botão **"🏮 Lamparina"** permite alternar entre o tema normal e um tema escuro.

O modo escuro utiliza cores inspiradas na iluminação de uma lamparina, criando uma aparência mais relacionada ao ambiente noturno do sertão.

### ⬆️ Botão "Topo"

Ao rolar a página, aparece um botão **"↑ Topo"**.

Ao clicar nele, a página retorna suavemente para o início.

### 🎵 Efeito sonoro do aboio

Na seção **"Letra Original"**, existe o botão **"🎵 Ouvir o aboio"**.

Ao clicar, o JavaScript utiliza a **Web Audio API** para gerar uma sequência de sons com frequências descendentes, criando uma representação sonora inspirada no aboio.

## 📱 Responsividade

O projeto possui adaptações para telas menores.

Em dispositivos com largura de até **600px**, alguns elementos são redimensionados, como:

* Título principal.
* Títulos das seções.
* Formulário.
* Texto da letra da música.

Isso permite uma melhor visualização em celulares e outros dispositivos com telas menores.

## ▶️ Como executar

Não é necessário instalar dependências ou configurar um servidor para visualizar a página.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd nome-do-projeto
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

em um navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

## 💾 Armazenamento

Os comentários são armazenados utilizando:

```javascript
localStorage
```

A chave utilizada pelo projeto é:

```javascript
comentarios-vaqueiro
```

Como o armazenamento é local, os comentários permanecem disponíveis no mesmo navegador enquanto os dados do site não forem apagados.

## 🔐 Segurança

Ao adicionar comentários dinamicamente, o projeto utiliza `textContent` para inserir os dados fornecidos pelo usuário.

Isso evita que códigos HTML ou JavaScript enviados no comentário sejam interpretados diretamente pelo navegador.

## 🔗 Links relacionados

O site disponibiliza links externos relacionados à música, incluindo:

* Letras.mus.br
* Spotify
* Cifra Club

## 🎨 Identidade visual

A identidade visual utiliza principalmente:

* Tons de marrom.
* Tons de laranja.
* Tons de bege.
* Verde.
* Elementos inspirados no sertão.
* Gradientes semelhantes a um pôr do sol.
* Tipografia com aparência tradicional.

A proposta visual busca combinar o conteúdo musical com referências ao ambiente nordestino retratado na obra.

## 📚 Conteúdo do debate

O fórum apresenta quatro temas principais:

1. **A Solidão e o Esquecimento do Vaqueiro**
2. **O Aboio como Lamento**
3. **A Crítica Social na Canção**
4. **O Cachorro como Única Memória**

Esses tópicos permitem discutir diferentes aspectos da música, como a representação do trabalhador rural, o aboio, a crítica social e a relação entre o vaqueiro e seu cachorro.

## 👥 Projeto

**Projeto web desenvolvido para fins educacionais**, utilizando HTML, CSS e JavaScript.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração de desenvolvimento web.

🎵 Debate: A Morte do Vaqueiro

Um fórum interativo para análise, interpretação e discussão da música **"A Morte do Vaqueiro"**, interpretada por **Luiz Gonzaga** e composta por **Luiz Gonzaga e Nelson Barbalho**.

O projeto apresenta informações sobre a música, tópicos para debate e um espaço interativo para que os usuários possam publicar comentários relacionados à obra.

## 📌 Sobre o projeto

O site foi desenvolvido como uma página temática sobre a música **"A Morte do Vaqueiro"**, destacando aspectos culturais e sociais presentes na obra.

A interface utiliza uma identidade visual inspirada no **sertão nordestino**, com cores terrosas, elementos visuais relacionados à paisagem sertaneja e uma seção especial que simula um ambiente iluminado por uma **lamparina**.

Além do conteúdo informativo, o projeto possui funcionalidades interativas utilizando JavaScript.

## 🎯 Objetivos

* Apresentar informações sobre a música.
* Estimular a discussão sobre os temas presentes na obra.
* Permitir que usuários adicionem comentários aos tópicos de debate.
* Demonstrar o uso de HTML, CSS e JavaScript em um projeto web.
* Criar uma interface temática e responsiva.
* Utilizar armazenamento local para manter os comentários realizados pelo usuário.

## 🛠️ Tecnologias utilizadas

### HTML5

Responsável pela estrutura da página, incluindo:

* Títulos e textos.
* Informações sobre a música.
* Tópicos de debate.
* Formulário de comentários.
* Comentários recentes.
* Links relacionados.

### CSS3

Responsável pela aparência e organização visual do site.

Foram utilizados:

* Variáveis CSS.
* Gradientes.
* Sombras.
* Transições e efeitos de `hover`.
* Layout responsivo.
* Cores e elementos visuais inspirados no sertão nordestino.
* Media queries para dispositivos menores.

### JavaScript

Responsável pelas funcionalidades interativas da página:

* Validação do formulário.
* Contador de caracteres.
* Adição dinâmica de comentários.
* Filtro de comentários por tópico.
* Armazenamento dos comentários no `localStorage`.
* Atualização da quantidade de comentários.
* Botão para voltar ao topo.
* Modo visual "Lamparina".
* Reprodução de um efeito sonoro inspirado no aboio.

## 📂 Estrutura do projeto

```text
projeto/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contém toda a estrutura e o conteúdo principal da página.

Entre as principais seções estão:

* Sobre a Música
* Tópicos de Debate
* Letra Original
* Participar do Debate
* Comentários Recentes
* Links Relacionados

### `style.css`

Define toda a identidade visual do projeto, incluindo cores, tipografia, espaçamentos, cartões, formulário, botões e responsividade.

### `script.js`

Implementa as funcionalidades interativas do projeto e manipula os elementos da página através do DOM.

## ⚙️ Funcionalidades

### 💬 Sistema de comentários

O usuário pode preencher:

* Nome
* E-mail
* Tópico
* Comentário

Após o envio, o comentário aparece imediatamente na seção **Comentários Recentes**.

Os comentários adicionados são armazenados no navegador através do `localStorage`.

> Os comentários ficam salvos localmente no navegador utilizado. O projeto não possui um banco de dados ou servidor responsável por armazenar esses comentários.

### 🔢 Contador de caracteres

O campo de comentário possui um limite de **500 caracteres**.

O JavaScript apresenta um contador mostrando a quantidade utilizada:

```text
125/500 caracteres
```

Caso o limite seja ultrapassado, o contador muda de cor para indicar o problema.

### ✅ Validação do formulário

Antes de adicionar um comentário, o sistema verifica:

* Nome com pelo menos 2 caracteres.
* E-mail em formato válido.
* Comentário com pelo menos 10 caracteres.
* Comentário com no máximo 500 caracteres.

Caso alguma informação esteja incorreta, uma mensagem de erro é exibida.

### 🔎 Filtro por tópico

Os comentários podem ser filtrados de acordo com o tópico escolhido.

As opções disponíveis são:

* A Solidão e o Esquecimento do Vaqueiro
* O Aboio como Lamento
* A Crítica Social na Canção
* O Cachorro como Única Memória

Também existe a opção de visualizar **todos os tópicos**.

### 🔢 Atualização dos comentários

Quando um novo comentário é enviado, o número de comentários relacionado ao tópico escolhido é atualizado automaticamente.

### 🏮 Modo Lamparina

O botão **"🏮 Lamparina"** permite alternar entre o tema normal e um tema escuro.

O modo escuro utiliza cores inspiradas na iluminação de uma lamparina, criando uma aparência mais relacionada ao ambiente noturno do sertão.

### ⬆️ Botão "Topo"

Ao rolar a página, aparece um botão **"↑ Topo"**.

Ao clicar nele, a página retorna suavemente para o início.

### 🎵 Efeito sonoro do aboio

Na seção **"Letra Original"**, existe o botão **"🎵 Ouvir o aboio"**.

Ao clicar, o JavaScript utiliza a **Web Audio API** para gerar uma sequência de sons com frequências descendentes, criando uma representação sonora inspirada no aboio.

## 📱 Responsividade

O projeto possui adaptações para telas menores.

Em dispositivos com largura de até **600px**, alguns elementos são redimensionados, como:

* Título principal.
* Títulos das seções.
* Formulário.
* Texto da letra da música.

Isso permite uma melhor visualização em celulares e outros dispositivos com telas menores.

## ▶️ Como executar

Não é necessário instalar dependências ou configurar um servidor para visualizar a página.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd nome-do-projeto
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

em um navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

## 💾 Armazenamento

Os comentários são armazenados utilizando:

```javascript
localStorage
```

A chave utilizada pelo projeto é:

```javascript
comentarios-vaqueiro
```

Como o armazenamento é local, os comentários permanecem disponíveis no mesmo navegador enquanto os dados do site não forem apagados.

## 🔐 Segurança

Ao adicionar comentários dinamicamente, o projeto utiliza `textContent` para inserir os dados fornecidos pelo usuário.

Isso evita que códigos HTML ou JavaScript enviados no comentário sejam interpretados diretamente pelo navegador.

## 🔗 Links relacionados

O site disponibiliza links externos relacionados à música, incluindo:

* Letras.mus.br
* Spotify
* Cifra Club

## 🎨 Identidade visual

A identidade visual utiliza principalmente:

* Tons de marrom.
* Tons de laranja.
* Tons de bege.
* Verde.
* Elementos inspirados no sertão.
* Gradientes semelhantes a um pôr do sol.
* Tipografia com aparência tradicional.

A proposta visual busca combinar o conteúdo musical com referências ao ambiente nordestino retratado na obra.

## 📚 Conteúdo do debate

O fórum apresenta quatro temas principais:

1. **A Solidão e o Esquecimento do Vaqueiro**
2. **O Aboio como Lamento**
3. **A Crítica Social na Canção**
4. **O Cachorro como Única Memória**

Esses tópicos permitem discutir diferentes aspectos da música, como a representação do trabalhador rural, o aboio, a crítica social e a relação entre o vaqueiro e seu cachorro.

## 👥 Projeto

**Projeto web desenvolvido para fins educacionais**, utilizando HTML, CSS e JavaScript.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração de desenvolvimento web.
# 🎵 Debate: A Morte do Vaqueiro

Um fórum interativo para análise, interpretação e discussão da música **"A Morte do Vaqueiro"**, interpretada por **Luiz Gonzaga** e composta por **Luiz Gonzaga e Nelson Barbalho**.

O projeto apresenta  informações sobre a música, tópicos para debate e um espaço interativo para que os usuários possam publicar comentários relacionados à obra.

## 📌 Sobre o projeto

O site foi desenvolvido como uma página temática sobre a música **"A Morte do Vaqueiro"**, destacando aspectos culturais e sociais presentes na obra.

A interface utiliza uma identidade visual inspirada no **sertão nordestino**, com cores terrosas, elementos visuais relacionados à paisagem sertaneja e uma seção especial que simula um ambiente iluminado por uma **lamparina**.

Além do conteúdo informativo, o projeto possui funcionalidades interativas utilizando JavaScript.

## 🎯 Objetivos

* Apresentar informações sobre a música.
* Estimular a discussão sobre os temas presentes na obra.
* Permitir que usuários adicionem comentários aos tópicos de debate.
* Demonstrar o uso de HTML, CSS e JavaScript em um projeto web.
* Criar uma interface temática e responsiva.
* Utilizar armazenamento local para manter os comentários realizados pelo usuário.

## 🛠️ Tecnologias utilizadas

### HTML5

Responsável pela estrutura da página, incluindo:

* Títulos e textos.
* Informações sobre a música.
* Tópicos de debate.
* Formulário de comentários.
* Comentários recentes.
* Links relacionados.

### CSS3

Responsável pela aparência e organização visual do site.

Foram utilizados:

* Variáveis CSS.
* Gradientes.
* Sombras.
* Transições e efeitos de `hover`.
* Layout responsivo.
* Cores e elementos visuais inspirados no sertão nordestino.
* Media queries para dispositivos menores.

### JavaScript

Responsável pelas funcionalidades interativas da página:

* Validação do formulário.
* Contador de caracteres.
* Adição dinâmica de comentários.
* Filtro de comentários por tópico.
* Armazenamento dos comentários no `localStorage`.
* Atualização da quantidade de comentários.
* Botão para voltar ao topo.
* Modo visual "Lamparina".
* Reprodução de um efeito sonoro inspirado no aboio.

## 📂 Estrutura do projeto

```text
projeto/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contém toda a estrutura e o conteúdo principal da página.

Entre as principais seções estão:

* Sobre a Música
* Tópicos de Debate
* Letra Original
* Participar do Debate
* Comentários Recentes
* Links Relacionados

### `style.css`

Define toda a identidade visual do projeto, incluindo cores, tipografia, espaçamentos, cartões, formulário, botões e responsividade.

### `script.js`

Implementa as funcionalidades interativas do projeto e manipula os elementos da página através do DOM.

## ⚙️ Funcionalidades

### 💬 Sistema de comentários

O usuário pode preencher:

* Nome
* E-mail
* Tópico
* Comentário

Após o envio, o comentário aparece imediatamente na seção **Comentários Recentes**.

Os comentários adicionados são armazenados no navegador através do `localStorage`.

> Os comentários ficam salvos localmente no navegador utilizado. O projeto não possui um banco de dados ou servidor responsável por armazenar esses comentários.

### 🔢 Contador de caracteres

O campo de comentário possui um limite de **500 caracteres**.

O JavaScript apresenta um contador mostrando a quantidade utilizada:

```text
125/500 caracteres
```

Caso o limite seja ultrapassado, o contador muda de cor para indicar o problema.

### ✅ Validação do formulário

Antes de adicionar um comentário, o sistema verifica:

* Nome com pelo menos 2 caracteres.
* E-mail em formato válido.
* Comentário com pelo menos 10 caracteres.
* Comentário com no máximo 500 caracteres.

Caso alguma informação esteja incorreta, uma mensagem de erro é exibida.

### 🔎 Filtro por tópico

Os comentários podem ser filtrados de acordo com o tópico escolhido.

As opções disponíveis são:

* A Solidão e o Esquecimento do Vaqueiro
* O Aboio como Lamento
* A Crítica Social na Canção
* O Cachorro como Única Memória

Também existe a opção de visualizar **todos os tópicos**.

### 🔢 Atualização dos comentários

Quando um novo comentário é enviado, o número de comentários relacionado ao tópico escolhido é atualizado automaticamente.

### 🏮 Modo Lamparina

O botão **"🏮 Lamparina"** permite alternar entre o tema normal e um tema escuro.

O modo escuro utiliza cores inspiradas na iluminação de uma lamparina, criando uma aparência mais relacionada ao ambiente noturno do sertão.

### ⬆️ Botão "Topo"

Ao rolar a página, aparece um botão **"↑ Topo"**.

Ao clicar nele, a página retorna suavemente para o início.

### 🎵 Efeito sonoro do aboio

Na seção **"Letra Original"**, existe o botão **"🎵 Ouvir o aboio"**.

Ao clicar, o JavaScript utiliza a **Web Audio API** para gerar uma sequência de sons com frequências descendentes, criando uma representação sonora inspirada no aboio.

## 📱 Responsividade

O projeto possui adaptações para telas menores.

Em dispositivos com largura de até **600px**, alguns elementos são redimensionados, como:

* Título principal.
* Títulos das seções.
* Formulário.
* Texto da letra da música.

Isso permite uma melhor visualização em celulares e outros dispositivos com telas menores.

## ▶️ Como executar

Não é necessário instalar dependências ou configurar um servidor para visualizar a página.

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd nome-do-projeto
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

em um navegador.

Também é possível utilizar uma extensão como **Live Server** no Visual Studio Code para executar o projeto durante o desenvolvimento.

## 💾 Armazenamento

Os comentários são armazenados utilizando:

```javascript
localStorage
```

A chave utilizada pelo projeto é:

```javascript
comentarios-vaqueiro
```

Como o armazenamento é local, os comentários permanecem disponíveis no mesmo navegador enquanto os dados do site não forem apagados.

## 🔐 Segurança

Ao adicionar comentários dinamicamente, o projeto utiliza `textContent` para inserir os dados fornecidos pelo usuário.

Isso evita que códigos HTML ou JavaScript enviados no comentário sejam interpretados diretamente pelo navegador.

## 🔗 Links relacionados

O site disponibiliza links externos relacionados à música, incluindo:

* Letras.mus.br
* Spotify
* Cifra Club

## 🎨 Identidade visual

A identidade visual utiliza principalmente:

* Tons de marrom.
* Tons de laranja.
* Tons de bege.
* Verde.
* Elementos inspirados no sertão.
* Gradientes semelhantes a um pôr do sol.
* Tipografia com aparência tradicional.

A proposta visual busca combinar o conteúdo musical com referências ao ambiente nordestino retratado na obra.

## 📚 Conteúdo do debate

O fórum apresenta quatro temas principais:

1. **A Solidão e o Esquecimento do Vaqueiro**
2. **O Aboio como Lamento**
3. **A Crítica Social na Canção**
4. **O Cachorro como Única Memória**

Esses tópicos permitem discutir diferentes aspectos da música, como a representação do trabalhador rural, o aboio, a crítica social e a relação entre o vaqueiro e seu cachorro.

## 👥 Projeto

**Projeto web desenvolvido para fins educacionais**, utilizando HTML, CSS e JavaScript.

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de demonstração de desenvolvimento web.