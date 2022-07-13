const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

let index = 0;

cambiarTab(index);

tabs.forEach(function(tab, i){
    tab.addEventListener('click', e => {
        index = i;
        cambiarTab(index);
    });
});

function cambiarTab(index){
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    tabs[index].classList.add('active-tab');
    contents[index].style.display = 'block';
}