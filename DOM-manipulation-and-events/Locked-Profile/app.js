function lockedProfile() {
    document.getElementById('main').addEventListener('click', onClick);

    function onClick(e){
        if (e.target.tagName == 'BUTTON') {
            onToggle(e);
        }else if(e.target.tagName == 'INPUT' && e.target.type == 'radio'){
            onLockToggle(e);
        }
    }
    function onToggle(e) {
        const profile = e.target.parentElement;
        const isActive = profile
            .querySelector('input[type = "radio"][value = "unlock"]').checked;

        if (isActive) {
            const infoDif = profile.querySelector('div');

            if (e.target.textContent == 'Show more') {
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
    function onLockToggle(e){
        const button = e.target.parentElement.querySelector('button');

        if (e.target.value == 'lock') {
            button.disabled = true;
        }else{
            button.disabled = false;
        }
    }
}