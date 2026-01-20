document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. NAVIGATION BAR TOGGLE (Mobile Menu)
    // ==========================================
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navList");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }

 
    const searchInput = document.getElementById('search');
    const resultsBox = document.getElementById('searchResults');

    
    const siteData = [
        { name: "Eren Yeager", link: "characters.html", keywords: "titan founding protagonist attack" },
        { name: "Mikasa Ackerman", link: "characters.html", keywords: "strong scarf soldier" },
        { name: "Levi Ackerman", link: "characters.html", keywords: "captain strongest short" },
        { name: "Armin Arlert", link: "characters.html", keywords: "colossal smart brain" },
        { name: "Season 1", link: "episodes.html", keywords: "start wall maria fall" },
        { name: "The Rumbling", link: "episodes.html", keywords: "season 4 final war genocide" },
        { name: "Scout Regiment", link: "index.html", keywords: "survey corps wings of freedom" },
        { name: "Isayama (Creator)", link: "about.html", keywords: "author origin manga" }
    ];

    if (searchInput && resultsBox) {
        searchInput.addEventListener('keyup', (e) => {
            const input = e.target.value.toLowerCase();
            resultsBox.innerHTML = ''; 

            if (input.length > 0) {
                const filteredData = siteData.filter(item => {
                    return item.name.toLowerCase().includes(input) || item.keywords.includes(input);
                });

                if (filteredData.length > 0) {
                    resultsBox.style.display = 'block';
                    filteredData.forEach(item => {
                        const a = document.createElement('a');
                        a.classList.add('result-item');
                        a.href = item.link;
                        a.innerText = item.name;
                        resultsBox.appendChild(a);
                    });
                } else {
                    resultsBox.style.display = 'block';
                    resultsBox.innerHTML = '<div class="result-item" style="cursor:default;">No results found</div>';
                }
            } else {
                resultsBox.style.display = 'none';
            }
        });

      
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.style.display = 'none';
            }
        });
    }

    
    
    if (typeof gsap !== 'undefined') { 
        gsap.from(".navbar", { y: -80, opacity: 0, duration: 1 });
        gsap.from(".hero h1", { opacity: 0, y: 50, delay: 0.5, duration: 1 });
        gsap.from(".card", { opacity: 0, y: 100, stagger: 0.3, duration: 1 });
    }

   
    const container = document.getElementById("charactersContainer");

    if (container) {
        const characters = [
            { name: "Armin Arlert", role: "Strategist", desc: "A brilliant tactician.", img: "img/armin.jpg", jp: "Yoshimasa Hosoya", en: "Robert McCollum" },
            { name: "Reiner Braun", role: "Armored Titan", desc: "A conflicted warrior.", img: "img/reiner.jpg", jp: "Yoshimasa Hosoya", en: "Robert McCollum" },
            { name: "Levi Ackerman", role: "Captain", desc: "Humanity's Strongest.", img: "img/levi.jpg", jp: "Hiroshi Kamiya", en: "Matthew Mercer" },
            { name: "Eren Yeager", role: "Protagonist", desc: "Seeker of Freedom.", img: "img/eren_char.jpg", jp: "Yuki Kaji", en: "Bryce Papenbrook" },
            { name: "Mikasa Ackerman", role: "Soldier", desc: "Protector of Eren.", img: "img/mikasa.jpg", jp: "Yui Ishikawa", en: "Trina Nishimura" },
            { name: "Erwin Smith", role: "Commander", desc: "Dedicate your hearts.", img: "img/erwin.jpg", jp: "Daisuke Ono", en: "J. Michael Tatum" }
        ];

        characters.forEach(char => {
            const card = document.createElement("div");
            card.className = "card character";
            card.innerHTML = `
                <img src="${char.img}" alt="${char.name}">
                <h3>${char.name}</h3>
                <p>${char.role}</p>
            `;
           
            card.onclick = () => {
                const modal = document.getElementById("characterModal");
                if(modal) {
                    modal.style.display = "flex";
                    document.getElementById("charImg").src = char.img;
                    document.getElementById("charName").innerText = char.name;
                    document.getElementById("charRole").innerText = char.role;
                    document.getElementById("charDesc").innerText = char.desc;
                    
                    if(document.getElementById("jpVoice")) document.getElementById("jpVoice").innerText = char.jp;
                    if(document.getElementById("enVoice")) document.getElementById("enVoice").innerText = char.en;
                }
            };
            container.appendChild(card);
        });
    }

    
    window.closeModal = function() {
        const modal = document.getElementById("characterModal");
        if (modal) modal.style.display = "none";
    }

 
    window.closeVideo = function() {
        const vModal = document.getElementById("videoModal");
        const vFrame = document.getElementById("videoFrame");
        if (vModal) vModal.style.display = "none";
        if (vFrame) vFrame.src = "";
    }
});