// Função para abrir o modal com a imagem ou vídeo
function openModal(mediaSrc, description) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    var modalVideo = document.getElementById("modal-video");
    var modalDescription = document.getElementById("modal-description");

    modal.style.display = "block";

    // Verifica se é uma imagem ou vídeo
    if (mediaSrc.endsWith(".jpg") || mediaSrc.endsWith(".png")) {
        modalImage.src = mediaSrc;
        modalVideo.style.display = "none";
        modalImage.style.display = "block";
    } else if (mediaSrc.endsWith(".mp4")) {
        modalVideo.src = mediaSrc;
        modalImage.style.display = "none";
        modalVideo.style.display = "block";
    }

    modalDescription.textContent = description;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
