//Segue o código JavaScript
function mostrarDetalhes(pilar) {
    // Seleciona o painel de informações e o parágrafo de texto
    const painel = document.getElementById('painel-info');
    const texto = document.getElementById('texto-painel');
   
    // Remove a classe 'escondido' para tornar o painel visível
    painel.classList.remove('escondido');
   
    // Define o texto baseado no card que foi clicado
    if (pilar === 'agro') {
        texto.innerHTML = "<strong>Agro Forte:</strong> Significa usar tecnologia de ponta, como drones, tratores autônomos e análise de dados (Big Data) para produzir mais alimentos em menos espaço, garantindo a segurança alimentar do nosso país e do mundo.";
    } else if (pilar === 'sustentavel') {
        texto.innerHTML = "<strong>Futuro Sustentável:</strong> Envolve o cuidado com o solo através da rotação de culturas, a proteção de nascentes, o uso de fontes de energia renováveis (como solar e biogás) e a redução do desperdício no campo.";
    } else if (pilar === 'equilibrio') {
        texto.innerHTML = "<strong>Equilíbrio:</strong> É mostrar que a economia e a ecologia andam juntas. O produtor consciente sabe que para a lavoura continuar forte amanhã, o meio ambiente precisa estar protegido e saudável hoje. É a união perfeita da produção com a conservação.";
    }
   
    // Pequeno efeito de scroll suave até o painel para ajudar na usabilidade
    painel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}