const themeToggleBtn =  document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    //show sun svg
    themeToggleLightIcon.classList.remove('hidden')
} else {
    //show moon svg
    themeToggleDarkIcon.classList.remove('hidden')
}

themeToggleBtn.addEventListener('click',toggleMode)

function toggleMode () {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if(localStorage.getItem('color-theme')){
        if(localStorage.getItem('color-theme')==='light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme','dark')
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme','light')
        }
    } else {
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme','light')
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme','dark')
        }
    }
}