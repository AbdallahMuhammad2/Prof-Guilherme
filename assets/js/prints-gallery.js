// Funcionalidade para galeria de prints de depoimentos
document.addEventListener('DOMContentLoaded', function() {
    const printCards = document.querySelectorAll('.print-card:not(.placeholder)');
    const modal = document.getElementById('printModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalClose = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalPrev = modal.querySelector('.modal-prev');
    const modalNext = modal.querySelector('.modal-next');
    
    let currentPrintIndex = 0;
    const prints = [
        {
            src: 'depoimentos/2.png',
            alt: 'Depoimento Eliane Costa - Nota 18,5 na discursiva'
        },
        {
            src: 'depoimentos/1.png',
            alt: 'Depoimento Luciane - 48 pontos em Português'
        },
        {
            src: 'depoimentos/3.png',
            alt: 'Depoimento Caroline Pirovani - 40 questões corretas'
        },
        {
            src: 'depoimentos/4.png',
            alt: 'Depoimento de aluno aprovado'
        },
        {
            src: 'depoimentos/5.png',
            alt: 'Depoimento de gratidão'
        },
        {
            src: 'depoimentos/6.png',
            alt: 'Depoimento motivacional'
        }
    ];

    // Abrir modal ao clicar no print
    printCards.forEach((card, index) => {
        const imageContainer = card.querySelector('.print-image-container');
        imageContainer.addEventListener('click', () => {
            currentPrintIndex = index;
            showModal();
        });
    });

    // Fechar modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Mostrar modal
    function showModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateModalImage();
    }

    // Atualizar imagem do modal
    function updateModalImage() {
        if (prints[currentPrintIndex]) {
            modalImage.src = prints[currentPrintIndex].src;
            modalImage.alt = prints[currentPrintIndex].alt;
        }
    }

    // Navegação anterior
    function prevPrint() {
        currentPrintIndex = currentPrintIndex > 0 ? currentPrintIndex - 1 : prints.length - 1;
        updateModalImage();
    }

    // Navegação próxima
    function nextPrint() {
        currentPrintIndex = currentPrintIndex < prints.length - 1 ? currentPrintIndex + 1 : 0;
        updateModalImage();
    }

    // Event listeners
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', prevPrint);
    modalNext.addEventListener('click', nextPrint);

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevPrint();
                break;
            case 'ArrowRight':
                nextPrint();
                break;
        }
    });

    // Prevenir scroll do body quando modal está aberto
    modal.addEventListener('wheel', (e) => {
        e.preventDefault();
    });

    // Animação de entrada dos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    printCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});
