/**
 * Dark Theme Function / Função de Tema Escuro
 * @returns {Theme}
 */
function DarkTheme()
{
    var Element = document.body;
    Element.classList.toggle("Dark-Theme");
}

/**
 * Função responsável por realizar um Scroll (Rolagem de Página) suave até o topo da Página.
 * @returns {SmoothScroll}
 */
function ScrollInicio() 
{
    window.scrollTo({top: 0, behavior: 'smooth'})
}