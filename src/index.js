import Gallery from './gallery/gallery.js';

const gallery = new Gallery({
    photos: [
        {
            id: 1,
            src: [
                {
                    scale: 'x1',
                    url: './assets/ali-kazal-0jPpJhJr1kE-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/ali-kazal-0jPpJhJr1kE-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/ali-kazal-0jPpJhJr1kE-unsplash/x3.jpg',
                },
            ],
        },
        {
            id: 2,
            src: [
                {
                    scale: 'x1',
                    url: './assets/junior-reis-D611VFLoJuo-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/junior-reis-D611VFLoJuo-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/junior-reis-D611VFLoJuo-unsplash/x3.jpg',
                },
            ],
        },
        {
            id: 3,
            src: [
                {
                    scale: 'x1',
                    url: './assets/moritz-kindler-fz3QNuVfecU-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/moritz-kindler-fz3QNuVfecU-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/moritz-kindler-fz3QNuVfecU-unsplash/x3.jpg',
                },
            ],
        },
        {
            id: 4,
            src: [
                {
                    scale: 'x1',
                    url: './assets/nathan-dumlao-nMlJE9Er7Q4-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/nathan-dumlao-nMlJE9Er7Q4-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/nathan-dumlao-nMlJE9Er7Q4-unsplash/x3.jpg',
                },
            ],
        },
        {
            id: 5,
            src: [
                {
                    scale: 'x1',
                    url: './assets/strvnge-films-18JvwI1abeY-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/strvnge-films-18JvwI1abeY-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/strvnge-films-18JvwI1abeY-unsplash/x3.jpg',
                },
            ],
        },
        {
            id: 6,
            src: [
                {
                    scale: 'x1',
                    url: './assets/strvnge-films-51Iht-DXa7c-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/strvnge-films-51Iht-DXa7c-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/strvnge-films-51Iht-DXa7c-unsplash/x3.jpg',
                },
            ],
        },
        {
            id: 7,
            src: [
                {
                    scale: 'x1',
                    url: './assets/ussama-azam-ZvrD3Y3EVWI-unsplash/x1.jpg',
                },
                {
                    scale: 'x2',
                    url: './assets/ussama-azam-ZvrD3Y3EVWI-unsplash/x2.jpg',
                },
                {
                    scale: 'x3',
                    url: './assets/ussama-azam-ZvrD3Y3EVWI-unsplash/x3.jpg',
                },
            ],
        },
    ],
    size: 5,
    current: 2,
    container: document.getElementById('gallery'),
});
