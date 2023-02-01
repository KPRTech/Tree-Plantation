const tabElements = [
    {
        id: 'overview',
        triggerEl: document.querySelector('#tab1'),
        targetEl: document.querySelector('#overview')
    },
    {
        id: 'impact',
        triggerEl: document.querySelector('#tab2'),
        targetEl: document.querySelector('#impact')
    },
    {
        id: 'whatyGet',
        triggerEl: document.querySelector('#tab3'),
        targetEl: document.querySelector('#whatYGet')
    },
    {
        id: 'treespc',
        triggerEl: document.querySelector('#tab4'),
        targetEl: document.querySelector('#tree')
    }
];

// options with default values
const options = {
    defaultTabId: 'overview',
    activeClasses: 'border-b-2 border-gray-500 text-gray-800',
    inactiveClasses: 'border-transparent',
    onShow: () => {
        console.log('tab is shown');
    }
};