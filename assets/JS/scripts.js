// Função para pré-visualizar a foto selecionada
function previewFoto(event) {
    const img = document.getElementById('preview');
    img.src = URL.createObjectURL(event.target.files[0]);
}