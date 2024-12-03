document.getElementById("learn-more-btn").addEventListener("click", function () {
    alert("Redirection vers la page À propos...");
    window.location.href = "about.html"; 
});


document.querySelector('a[href="#about-us"]').addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#about-us").scrollIntoView({ behavior: "smooth" });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
        alert("Tous les champs sont obligatoires!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    alert(`Merci pour votre message, ${name}! Nous reviendrons vers vous sous peu.`);
});


// Fonction pour obtenir un cookie par son nom
function getCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

// Fonction pour afficher le nom de l'utilisateur si le cookie existe
window.onload = function() {
	const userName = getCookie("username"); // Récupère le nom de l'utilisateur depuis le cookie
	const greetingElement = document.getElementById("greeting");

	if (userName) {
		// Si un nom est stocké dans le cookie, afficher le message personnalisé
		greetingElement.innerHTML = "Bienvenue, " + userName + "!";
	} else {
		// Si aucun nom n'est trouvé, afficher un message générique
		greetingElement.innerHTML = "Bienvenue sur notre site !";
	}
}

// Fonction pour enregistrer le nom de l'utilisateur dans un cookie
function setUserName() {
	const name = document.getElementById("username").value;
	if (name) {
		setCookie("username", name, 7);  // Enregistre le nom dans un cookie pendant 7 jours
		document.getElementById("greeting").innerHTML = "Bienvenue, " + name + "!";
		document.getElementById("usernameForm").style.display = "none"; // Cache le formulaire après soumission
	}
}