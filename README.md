
# ⚔️ Attack on Titan (Shingeki no Kyojin) Fan Website

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue)
![Responsive](https://img.shields.io/badge/Design-Responsive-orange)

## 📖 Overview

This is a responsive fan website dedicated to the anime masterpiece **Attack on Titan (Shingeki no Kyojin)**. The project serves as a comprehensive guide for fans, featuring character biographies, episode timelines, famous fan theories, and the origin story of the series creator, Hajime Isayama.

It was built to demonstrate proficiency in **Frontend Web Development** (HTML5, CSS3, JavaScript) and responsive design principles.

## 🚀 Features

* **Responsive Design:** Fully optimized for Desktops, Tablets, and Mobile phones.
* **Global Search Bar:** A custom JavaScript-based search engine that filters through characters, seasons, and pages instantly.
* **Dynamic Navigation:** Mobile-friendly hamburger menu with smooth toggle animations.
* **Character Profiles:** A grid layout displaying key characters with detailed descriptions.
* **Episode Timeline:** A visual journey through Season 1 to The Final Season (The Rumbling).
* **Fan Theories:** A dedicated section for famous theories like "The Time Loop" and "Akuma no Ko."
* **GSAP Animations:** Smooth entry animations for the hero section and cards.

## 📸 Screenshots

| **Home Page** | **Characters Page** |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/bb6f7494-78ca-400b-9b9f-fc07ebac158f" width="100%"> | <img src="https://github.com/user-attachments/assets/4ac0982a-734f-4780-bd87-0bc0e853beab" width="100%"> |

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Scripting:** Vanilla JavaScript (ES6)
* **Animation:** GSAP (GreenSock Animation Platform)
* **Design:** Flexbox & CSS Grid

## 📂 Project Structure

```bash
Attack-On-Titan-Website/
│
├── index.html          # Home Page (Hero section, Regiments)
├── characters.html     # Character Profiles (Grid Layout)
├── episodes.html       # Season Summaries & Theories
├── about.html          # Origin Story & Developer Info
│
├── css/
│   └── style.css       # Global Styles & Responsive Media Queries
│
├── js/
│   └── script.js       # Search Logic, Mobile Menu, Animations
│
└── img/                # Images folder (Backgrounds, Characters, Assets)

```

## ⚙️ How to Run

1. **Clone the repository:**
```bash
git clone [https://github.com/Tejas-952007/Attack-On-Titan-Website.git](https://github.com/Tejas-952007/Attack-On-Titan-Website.git)

```


2. **Open the project:**
Navigate to the project folder.
3. **Launch:**
Open `index.html` in any modern web browser (Chrome, Edge, Firefox).

## 🧩 Key Code Highlights

**Custom Search Logic (`script.js`):**
A JSON-like structure is used to map keywords to specific pages, allowing users to search for "Titan", "Eren", or "Origin" and get directed to the right page.

```javascript
const siteData = [
    { name: "Eren Yeager", link: "characters.html", keywords: "titan founding protagonist" },
    { name: "The Rumbling", link: "episodes.html", keywords: "season 4 war" },
    // ... more data
];

```

## 👨‍💻 Author

**Tejas**

* **Role:** Full Stack Engineering Student & Anime Enthusiast
* **GitHub:** [Tejas-952007](https://github.com/Tejas-952007)
* **LinkedIn:** [Tejas Ingle](https://www.linkedin.com/in/tejas-ingle-39b36738a/)

---

*"If you don't fight, you can't win."* – **Eren Yeager**

```

```
