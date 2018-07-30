const projectTypeButton = $('#project-type button');
const projects = $('#projects')

projectTypeButton.click(event => {
    const activeButton = $(event.currentTarget);
    projectTypeButton.removeClass('active');
    activeButton.addClass('active');

    const type = activeButton.data('type');

    if(type) {
        const hiddenElements = $(`#projects div:not([data-type="${type}"])`);
        hiddenElements.hide();   
            
        const showElements = $(`#projects div[data-type="${type}"]`);
        showElements.show();
    } else {
        $(`#projects div`).show();
    }
    
});