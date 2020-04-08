if( document.getElementById('particles-background') ) {
    particleground(document.getElementById('particles-background'), {
        parallax: false,
        dotColor: 'rgba(255,255,255,0.4)',
        lineColor: 'rgba(255,255,255,0.3)',
    });
}

document.querySelectorAll('.glide').forEach(
    element => {
        const elementId = element.id;
        const gapOption = element.dataset.gap || null;

        new Glide( '#' + elementId, {
            autoplay: 3000,
            hoverpause: true,
            rewind: true,
        }).mount()
    }
)