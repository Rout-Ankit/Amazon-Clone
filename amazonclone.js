<script>
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input').value.trim();
    if (searchInput !== "") {
        console.log("Searching for:", searchInput);
        alert(`Searching for: ${searchInput}`);
    } else {
        alert("Please enter a search term.");
    }
});

document.querySelector('.foot-panel1').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


let cartCount = 0;
const cartElement = document.querySelector('.navcart');
const cartText = document.createElement('span');

cartText.style.backgroundColor = 'orange';
cartText.style.borderRadius = '50%';
cartText.style.padding = '2px 6px';
cartText.style.marginLeft = '8px';
cartText.style.fontSize = '0.75rem';
cartText.style.color = '#000';

cartElement.appendChild(cartText);
cartText.textContent = cartCount;

cartElement.addEventListener('click', () => {
    cartCount++;
    cartText.textContent = cartCount;
});
</script>
