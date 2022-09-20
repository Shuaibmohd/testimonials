const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Mohd Shuaib',
        position: 'Frontend Developer',
        photo: ' <img src="/bio_img.png" alt="user" class="user-image">',
        text: " I've worked with literally many of Frontend Developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transfroms ART into PIXELS - without a glitch, every time.",
    },
    {
        name: 'Vishal Singh',
        position: 'Software Developer',
        photo: 'https://pps.whatsapp.net/v/t61.24694-24/268644498_969528597330563_2661524654529638001_n.jpg?ccb=11-4&oh=01_AVzpBBSspvd0uSbI_T8uJJSVNgMi_lzvZCCh4Ndlw9d_ww&oe=632C9D71',
        text: " This guy is an amazing frontend developer that delivered the task exactly how we need it, do  yourself a favour and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are with your project. i will surely work again with him.",
    },
    {
        name: 'Umar Iftikhar',
        position: 'Marketing',
        photo: 'https://pps.whatsapp.net/v/t61.24694-24/287251564_742523190205614_4834545861557928192_n.jpg?ccb=11-4&oh=01_AVyK5aXJFgdRHZgm9crlQ_H9_oY5-SOLOLu3kmrlziVfMw&oe=632BF90A',
        text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancer. We'll definitely repeat with him.",
    },
    {
        name: 'Mohammad Haroon',
        position: 'Marketing',
        photo: 'https://pps.whatsapp.net/v/t61.24694-24/300826426_436107518318073_6839211763941951156_n.jpg?ccb=11-4&oh=01_AVxUIaw-2DnePxm-3NSxV7xxLMTjJckCgVBeoBtttXcI7w&oe=632C95D6',
        text: " This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in HTML/CSS and JS technology, He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
    },

] 

let idx = 1;

function updateTestimonials() {
    
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length -1){
        idx = 0;
    }

}

setInterval(updateTestimonials, 10000)
