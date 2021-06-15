const app = new Vue ({
    el: '#app',

    data:{
        navLinks: [
            {
                name: 'Home',
                link: '#',
                status: 'active',
                type: 'link',
                create: ''
            },
            {
                name: 'About',
                link: '#',
                status: '',
                type: 'link',
                create: ''
            },
            {
                name: 'Price',
                link: '#',
                status: '',
                type: 'link',
                create: ''
            },
            {
                name: 'Courses',
                link: '#',
                status: '',
                type: 'link',
                create: 'new'
            },
            {
                name: 'Locations',
                link: '#',
                status: '',
                type: 'link',
                create: ''
            },
            {
                name: 'Blog',
                link: '#',
                status: '',
                type: 'link',
                create: ''
            },
            {
                name: 'Book now',
                link: '#',
                status: '',
                type: 'button',
                create: ''
            },

        ]
    },

    methods:{},

    mounted(){}
})