const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

// 1. When the page loads, check if the user previously picked light theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

// 2. When Dark Button is clicked
darkBtn.addEventListener('click', () => {
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark'); // Saves "dark" in browser memory
});

// 3. When Light Button is clicked
lightBtn.addEventListener('click', () => {
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light'); // Saves "light" in browser memory
});