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

        ],
        courses: [
            {
                name: 'Pass plus',
                link: '#',
                img: 'courses-passplus-200x200.jpg'
            },
            {
                name: 'Intensive course',
                link: '#',
                img: 'course-intensive-200x200.jpg'
            },
            {
                name: 'Instructors',
                link: '#',
                img: 'courses-instructor-200x200.jpg'
            },
        ],

        instructors:[
            {
                img: 'instructor-mikehart-400x254.jpg',
                name: 'Mike',
                surname: 'Hart',
                summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas praesentium.'
            },
            {
                img: 'instructor-johnsmith-400x254.jpg',
                name: 'John',
                surname: 'Smith',
                summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem!'
            },
            {
                img: 'instructor-angelahart-400x254.jpg',
                name: 'Angela',
                surname: 'Hart',
                summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
        ]
    },

    methods:{},

    mounted(){
       /*  const numb = document.querySelector(".number");
        let counter = 0;
        setInterval(() => {
            if(counter == 95 ){
                clearInterval();
            }else{
                counter+=1;
                numb.textContent = counter + "%";
            }
        }, 80); */
    }
})