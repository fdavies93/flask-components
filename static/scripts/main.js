console.log(Flowbite)

const accordions = [
    {
        id: 'accordion-collapse-heading-1',
        triggerEl: document.querySelector('#accordion-collapse-heading-1'),
        targetEl: document.querySelector('#accordion-collapse-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-collapse-heading-2'),
        targetEl: document.querySelector('#accordion-collapse-body-2'),
        active: false
    }
];

// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

window.addEventListener("load", () => {
 const accordion = new Flowbite.default.Accordion(accordions, options);   
})
