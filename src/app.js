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
        ]
    },

    methods:{},

    mounted(){
        const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 100 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 80);
    }
})