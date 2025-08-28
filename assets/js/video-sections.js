// Funcionalidade para seções de vídeo (VSL e Depoimento)
document.addEventListener('DOMContentLoaded', function() {
    // Configuração para VSL
    const vslPlaceholder = document.querySelector('.video-placeholder');
    const vslVideo = document.getElementById('vsl-video');
    const vslPlayButton = document.querySelector('.play-button');
    
    // Configuração para Vídeo de Depoimento
    const testimonialPlaceholder = document.querySelector('.testimonial-video-placeholder');
    const testimonialVideo = document.getElementById('testimonial-video');
    const testimonialPlayButton = document.querySelector('.video-play-button');

    // Função para reproduzir VSL
    function playVSL() {
        if (vslVideo && vslVideo.src && vslVideo.src !== 'about:blank' && !vslVideo.src.includes('file://')) {
            vslPlaceholder.style.display = 'none';
            vslVideo.style.display = 'block';
            
            // Se for YouTube, Vimeo, etc., adicione autoplay
            if (vslVideo.src.includes('youtube.com') || vslVideo.src.includes('vimeo.com')) {
                const currentSrc = vslVideo.src;
                const autoplaySrc = currentSrc.includes('?') 
                    ? currentSrc + '&autoplay=1' 
                    : currentSrc + '?autoplay=1';
                vslVideo.src = autoplaySrc;
            }
            
            // Analytics/tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'video_play', {
                    event_category: 'Video',
                    event_label: 'VSL',
                    value: 1
                });
            }
        } else {
            alert('Vídeo ainda não configurado. Por favor, adicione a URL do vídeo no código.');
        }
    }

    // Função para reproduzir vídeo de depoimento
    function playTestimonialVideo() {
        if (testimonialVideo && testimonialVideo.src !== 'about:blank') {
            testimonialPlaceholder.style.display = 'none';
            testimonialVideo.style.display = 'block';
            
            // Se for YouTube, Vimeo, etc., adicione autoplay
            if (testimonialVideo.src.includes('youtube.com') || testimonialVideo.src.includes('vimeo.com')) {
                const currentSrc = testimonialVideo.src;
                const autoplaySrc = currentSrc.includes('?') 
                    ? currentSrc + '&autoplay=1' 
                    : currentSrc + '?autoplay=1';
                testimonialVideo.src = autoplaySrc;
            }
            
            // Analytics/tracking
            if (typeof gtag !== 'undefined') {
                gtag('event', 'video_play', {
                    event_category: 'Video',
                    event_label: 'Testimonial',
                    value: 1
                });
            }
        } else {
            alert('Vídeo de depoimento ainda não configurado. Por favor, adicione a URL do vídeo no código.');
        }
    }

    // Função para verificar e mostrar vídeos configurados automaticamente
    function initializeConfiguredVideos() {
        // Verificar e mostrar VSL se estiver configurado
        if (vslVideo && vslVideo.src && vslVideo.src !== 'about:blank' && !vslVideo.src.includes('file://')) {
            vslPlaceholder.style.display = 'none';
            vslVideo.style.display = 'block';
        }
        
        // Verificar e mostrar vídeo testemunhal se estiver configurado
        if (testimonialVideo && testimonialVideo.src && testimonialVideo.src !== 'about:blank' && !testimonialVideo.src.includes('file://')) {
            testimonialPlaceholder.style.display = 'none';
            testimonialVideo.style.display = 'block';
        }
    }
    
    // Event Listeners
    if (vslPlaceholder && vslPlayButton) {
        vslPlaceholder.addEventListener('click', playVSL);
        vslPlayButton.addEventListener('click', function(e) {
            e.stopPropagation();
            playVSL();
        });
    }

    if (testimonialPlaceholder && testimonialPlayButton) {
        testimonialPlaceholder.addEventListener('click', playTestimonialVideo);
        testimonialPlayButton.addEventListener('click', function(e) {
            e.stopPropagation();
            playTestimonialVideo();
        });
    }

    // Smooth scroll para CTAs dos vídeos
    const vslCTA = document.querySelector('.btn-vsl');
    const testimonialCTA = document.querySelector('.btn-video-testimonial');

    if (vslCTA) {
        vslCTA.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector('#courses');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                        event_category: 'Conversion',
                        event_label: 'VSL_CTA',
                        value: 1
                    });
                }
            }
        });
    }

    if (testimonialCTA) {
        testimonialCTA.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector('#courses');
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Analytics
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'cta_click', {
                        event_category: 'Conversion',
                        event_label: 'Testimonial_CTA',
                        value: 1
                    });
                }
            }
        });
    }

    // Intersection Observer para analytics de visualização
    const videoSections = [
        { element: document.querySelector('.vsl-section'), name: 'VSL_Section' },
        { element: document.querySelector('.video-testimonial-section'), name: 'Testimonial_Section' }
    ];

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.dataset.sectionName;
                
                // Analytics
                if (typeof gtag !== 'undefined' && sectionName) {
                    gtag('event', 'section_view', {
                        event_category: 'Engagement',
                        event_label: sectionName,
                        value: 1
                    });
                }
            }
        });
    }, observerOptions);

    videoSections.forEach(section => {
        if (section.element) {
            section.element.dataset.sectionName = section.name;
            sectionObserver.observe(section.element);
        }
    });

    // Função utilitária para atualizar URLs dos vídeos (para uso do professor)
    window.updateVideoURL = function(videoType, newURL) {
        if (videoType === 'vsl') {
            if (vslVideo) {
                vslVideo.src = newURL;
                console.log('URL do VSL atualizada:', newURL);
            }
        } else if (videoType === 'testimonial') {
            if (testimonialVideo) {
                testimonialVideo.src = newURL;
                console.log('URL do vídeo de depoimento atualizada:', newURL);
            }
        }
    };

    // Inicializar vídeos configurados
    initializeConfiguredVideos();

    // Log para debug
    console.log('Sistema de vídeos inicializado');
    console.log('Para atualizar URLs, use: window.updateVideoURL("vsl", "sua-url") ou window.updateVideoURL("testimonial", "sua-url")');
});
