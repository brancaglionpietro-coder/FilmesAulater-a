// Banco de dados de filmes
const movies = [
    { title: "O Poderoso Chefão", year: 1972, genre: "Drama", desc: "O patriarca idoso de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante." },
    { title: "Matrix", year: 1999, genre: "Ficção Científica", desc: "Um hacker de computador aprende com rebeldes misteriosos sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores." },
    { title: "Interestelar", year: 2014, genre: "Ficção Científica", desc: "Uma equipe de exploradores viaja através de um buraco de minhoca no espaço na tentativa de garantir a sobrevivência da humanidade." },
    { title: "Parasita", year: 2019, genre: "Drama", desc: "A ganância e a discriminação de classe ameaçam a relação de simbiose recém-formada entre a rica família Park e o clã Kim." },
    { title: "Batman: O Cavaleiro das Trevas", year: 2008, genre: "Ação", desc: "Quando a ameaça conhecida como O Coringa surge de seu passado, ela causa estragos e caos no povo de Gotham." },
    { title: "A Origem", year: 2010, genre: "Ficção Científica", desc: "Um ladrão que rouba segredos corporativos por meio do uso de tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia." },
    { title: "Vingadores: Ultimato", year: 2019, genre: "Ação", desc: "Após os eventos devastadores de Guerra Infinita, os heróis restantes se reúnem uma última vez para restaurar a ordem no universo." },
    { title: "Clube da Luta", year: 1999, genre: "Drama", desc: "Um trabalhador de escritório insone e um criador de sabonetes despreocupado formam um clube de luta subterrâneo." },
    { title: "O Rei Leão", year: 1994, genre: "Animação", desc: "Um jovem príncipe leão foge de seu reino após a morte de seu pai, apenas para aprender o verdadeiro significado de responsabilidade e bravura." },
    { title: "Forrest Gump", year: 1994, genre: "Romance", desc: "As presidências de Kennedy e Johnson, os eventos do Vietnã e de Watergate se desenrolam do ponto de vista de um homem do Alabama." },
    { title: "O Iluminado", year: 1980, genre: "Terror", desc: "Uma família isolada em um hotel de inverno é influenciada por uma presença espiritual maligna que leva o pai à violência." },
    { title: "De Volta para o Futuro", year: 1985, genre: "Ficção Científica", desc: "Marty McFly, um adolescente de 17 anos, é acidentalmente enviado trinta anos no passado em um DeLorean que viaja no tempo." },
    { title: "Superbad", year: 2007, genre: "Comédia", desc: "Dois amigos adolescentes co-dependentes são forçados a lidar com a ansiedade da separação depois que seu plano de dar uma festa dá errado." },
    { title: "La La Land", year: 2016, genre: "Romance", desc: "Enquanto navegam por suas carreiras em Los Angeles, um pianista de jazz e uma atriz aspirante se apaixonam." },
    { title: "Corra!", year: 2017, genre: "Terror", desc: "Um jovem afro-americano visita os pais de sua namorada branca no fim de semana, onde a percepção deles sobre ele esconde segredos sinistros." },
    { title: "Whiplash", year: 2014, genre: "Drama", desc: "Um jovem baterista promissor se matricula em um conservatório de música de corte onde seus sonhos de grandeza são orientados por um instrutor implacável." },
    { title: "Cidade de Deus", year: 2002, genre: "Drama", desc: "Nas favelas do Rio de Janeiro, dois caminhos de jovens se separam: um se torna fotógrafo e o outro um chefe do tráfico." },
    { title: "Gladiador", year: 2000, genre: "Ação", desc: "Um ex-general romano jura vingança contra o imperador corrupto que assassinou sua família e o enviou para a escravidão." },
    { title: "WALL-E", year: 2008, genre: "Animação", desc: "No futuro distante, um pequeno robô coletor de lixo embarca acidentalmente em uma jornada espacial que decidirá o destino da humanidade." },
    { title: "As Branquelas", year: 2004, genre: "Comédia", desc: "Dois agentes do FBI desastrados se disfarçam de herdeiras ricas de um hotel para investigar um plano de sequestro." },
    { title: "Mad Max: Estrada da Fúria", year: 2015, genre: "Ação", desc: "Em um deserto pós-apocalíptico, uma mulher se rebela contra um governante tirânico em busca de sua terra natal com a ajuda de um grupo de prisioneiras." },
    { title: "Pulp Fiction", year: 1994, genre: "Drama", desc: "As vidas de dois assassinos da máfia, um boxeador, a esposa de um gângster e dois bandidos se entrelaçam em quatro histórias de violência e redenção." }
];

// Elementos do DOM
const moviesGrid = document.getElementById('moviesGrid');
const genreFilter = document.getElementById('genreFilter');
const yearFilter = document.getElementById('yearFilter');

// Inicializar a aplicação
function init() {
    populateFilters();
    displayMovies(movies);
    
    // Ouvintes de eventos para capturar mudanças nos filtros
    genreFilter.addEventListener('change', filterMovies);
    yearFilter.addEventListener('change', filterMovies);
}

// Preenche as opções dos filtros com base nos dados do array
function populateFilters() {
    const genres = new Set();
    const years = new Set();

    movies.forEach(movie => {
        genres.add(movie.genre);
        years.add(movie.year);
    });

    // Adiciona gêneros em ordem alfabética
    Array.from(genres).sort().forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });

    // Adiciona anos em ordem decrescente (mais recentes primeiro)
    Array.from(years).sort((a, b) => b - a).forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
}

// Renderiza os cards de filmes no HTML
function displayMovies(moviesList) {
    moviesGrid.innerHTML = '';

    if (moviesList.length === 0) {
        moviesGrid.innerHTML = '<p class="no-results">Nenhum filme encontrado para os filtros selecionados.</p>';
        return;
    }

    moviesList.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        card.innerHTML = `
            <div class="movie-info">
                <h2 class="movie-title">${movie.title}</h2>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-genre">${movie.genre}</span>
                </div>
                <p class="movie-desc">${movie.desc}</p>
                <button class="choose-btn" onclick="chooseMovie('${movie.title}')">Escolher Filme</button>
            </div>
        `;
        moviesGrid.appendChild(card);
    });
}

// Executa a filtragem por Gênero E Ano simultaneamente
function filterMovies() {
    const selectedGenre = genreFilter.value;
    const selectedYear = yearFilter.value;

    const filtered = movies.filter(movie => {
        const matchGenre = selectedGenre === 'all' || movie.genre === selectedGenre;
        const matchYear = selectedYear === 'all' || movie.year.toString() === selectedYear;
        
        return matchGenre && matchYear;
    });

    displayMovies(filtered);
}

// Função acionada ao clicar no botão de um filme
function chooseMovie(title) {
    alert(`Você escolheu o filme: "${title}". Prepare a pipoca e bom filme! 🍿🎬`);
}

// Inicia o script
init();