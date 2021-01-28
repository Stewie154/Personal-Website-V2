import pizza from '../../Images/The-Hearty-Slice-Screenshot.JPG';
import toDoList from '../../Images/React-To-Do-List-Screenshot.JPG';
import copyCat from '../../Images/Copy-Cat-Screenshot.JPG';
import McB from '../../Images/mcfarlanes-coach-builders-screenshot.JPG';
import form from '../../Images/PHP-Form-Screenshot (ipad horizontal).JPG'
import portfolio from '../../Images/Portfolio-Website-Screenshot.JPG';


export const projectsData = [
    {
        name: "McFarlane's Coach Builders",
        desc: "An official business website for McFarlane's Coach Builders. Built with React & Sass.",
        screenshot: McB,
        alt: "Project Preview.",
        viewCode: "View Code",
        projectLink: "http://www.mcfarlanescoachbuilders.com/",
        gitHubLink: "https://github.com/Stewie154/mcfarlanes-coach-builders"
    },
    {
        name: "The Hearty Slice (React)",
        desc: "An e-commerce pizza website built with react, using styled components.",
        screenshot: pizza,
        alt: "Project Preview.",
        viewCode: "View Code",
        projectLink: "https://www.stewartmcfarlane.me/Projects/REACT-PIZZA-WEBSITE/react-pizza-website/",
        gitHubLink: "https://github.com/Stewie154/React-Pizza-Website"
    },
    {
        name: "React To-do List",
        desc: "A React to-do list application that let's you add, tick-off and delete tasks. It also saves your to-dos via local storage.",
        screenshot: toDoList,
        alt: "Project Preview.",
        viewCode: "View Code",
        projectLink: "https://www.stewartmcfarlane.me/Projects/REACT-TO-DO-LIST/to-do-list/",
        gitHubLink: "https://github.com/Stewie154/React-To-Do-List"
    },
    {
        name: "React Copy-Cat",
        desc: "A simple React application. The cat copies what you type into the input, but when the cat is clicked, it stops being a copy cat!",
        screenshot: copyCat,
        alt: "Project Preview.",
        viewCode: "View Code",
        projectLink: "https://www.stewartmcfarlane.me/Projects/Copy-Cat/copy-cat/",
        gitHubLink: "https://github.com/Stewie154/Copy-Cat"
    },
    {
        name: "PHP-Form-Validation",
        desc: "A form built using HTML and CSS, which uses PHP to validate an email address before submitting.",
        screenshot: form,
        alt: "Project Preview.",
        viewCode: "View Code",
        projectLink: "https://www.stewartmcfarlane.me/Projects/PHP-Form-Vaildation-/index.php",
        gitHubLink: "https://github.com/Stewie154/PHP-Form-Vaildation-"
    },
    {
        name: "React Portfolio Website",
        desc: "This website was made by myself using React. Feel free to check out the code.",
        screenshot: portfolio,
        alt: "Project Preview.",
        viewCode: "View Code",
        projectLink: "https://www.stewartmcfarlane.me/",
        gitHubLink: "https://github.com/Stewie154/Personal-Website-V2"
    }
]