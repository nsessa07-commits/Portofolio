// ============================================================
//  PROJECTOS NOVOS: para adicionar um projecto, copia um bloco
//  { ... } da lista abaixo, cola no fim e muda os textos.
// ============================================================

// tecnologias disponíveis (usa estas chaves em "tecnologias")
const TECNOLOGIAS = {
    react:      ['React',      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
    nodejs:     ['Node.js',    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
    postgres:   ['PostgreSQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
    javascript: ['JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
    html:       ['HTML',       'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
    css:        ['CSS',        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
    csharp:     ['C#',         'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'],
    mysql:      ['MySQL',      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
    sqlite:     ['SQLite',     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'],
    sqlserver:  ['SQL Server', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg']
}

const projectos = [
    {
        titulo: 'Loja Online em React',
        descricao: 'Loja com React no front-end e Node.js + Express no back-end. Tem login, registo com código de verificação por email, carrinho, compra com desconto de stock e recibo da compra.',
        tecnologias: ['react', 'nodejs', 'javascript'], // acrescenta 'postgres' se usares PostgreSQL
        imagem: '',  // ex.: 'assets/loja-react.PNG' (opcional)
        github: '',  // link do repositório (opcional)
        demo: ''     // link do site online (opcional)
    },
    {
        titulo: 'Painel de Administração',
        descricao: 'Painel em React com gráficos de faturação mensal e de acessos ao site (Recharts) e gestão de utilizadores com pesquisa e edição.',
        tecnologias: ['react', 'javascript', 'css'],
        imagem: '',
        github: '',
        demo: ''
    },
    {
        titulo: 'Dashboard de Produtos',
        descricao: 'Aplicação web para gerir produtos, feita com Node.js, Express e Handlebars.',
        tecnologias: ['nodejs', 'javascript', 'html', 'css'],
        imagem: '',
        github: '',
        demo: ''
    }

    /* MODELO para copiar:
    ,{
        titulo: 'Nome do projecto',
        descricao: 'O que o projecto faz, numa ou duas frases.',
        tecnologias: ['react', 'nodejs', 'postgres'],
        imagem: 'assets/nome-da-imagem.PNG',
        github: 'https://github.com/nsessa07-commits/nome-do-repositorio',
        demo: ''
    }
    */
]


// ------------------ não precisas de mexer daqui para baixo ------------------

function criar(tag, classe, texto) {
    const el = document.createElement(tag)
    if (classe) el.className = classe
    if (texto) el.textContent = texto
    return el
}

function criarProjecto(p) {

    const card = criar('article', 'proj Ver') // "Ver" = animação ao aparecer

    if (p.imagem) {
        const img = criar('img')
        img.src = p.imagem
        img.alt = p.titulo
        img.loading = 'lazy'
        card.appendChild(img)
    }

    const info = criar('div', 'proj-info')
    info.appendChild(criar('h3', '', p.titulo))
    info.appendChild(criar('p', '', p.descricao))

    // etiquetas das tecnologias
    const techs = criar('div', 'proj-tech')
    p.tecnologias.forEach((chave) => {
        const t = TECNOLOGIAS[chave]
        const chip = criar('span')
        if (t) {
            const icone = criar('img')
            icone.src = t[1]
            icone.alt = ''
            chip.appendChild(icone)
            chip.appendChild(document.createTextNode(t[0]))
        } else {
            chip.textContent = chave // tecnologia sem ícone: mostra só o texto
        }
        techs.appendChild(chip)
    })
    info.appendChild(techs)

    // links
    if (p.github || p.demo) {
        const links = criar('div', 'proj-links')
        if (p.github) {
            const a = criar('a')
            a.href = p.github; a.target = '_blank'; a.rel = 'noopener'
            a.setAttribute('aria-label', `GitHub de ${p.titulo}`)
            const gh = criar('img'); gh.src = 'assets/github_48px.png'; gh.alt = ''
            a.appendChild(gh)
            links.appendChild(a)
        }
        if (p.demo) {
            const a = criar('a', 'proj-demo', 'Ver online')
            a.href = p.demo; a.target = '_blank'; a.rel = 'noopener'
            links.appendChild(a)
        }
        info.appendChild(links)
    }

    card.appendChild(info)
    return card
}

const lista = document.getElementById('mais-projectos')

if (lista) {
    projectos.forEach((p) => {
        const card = criarProjecto(p)
        lista.appendChild(card)

        // o Anime.js já correu, então registamos os cartões novos no observador dele
        if (typeof observador !== 'undefined') observador.observe(card)
        else card.classList.add('aparecer')
    })
}