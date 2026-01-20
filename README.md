<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Project Documentation - AoT Website</title>
    <style>
        /* Special Styles for Documentation Page */
        .doc-container {
            max-width: 900px;
            margin: 50px auto;
            background: #1a1a1a; /* Dark Card Background */
            padding: 40px;
            border-radius: 15px;
            border: 1px solid #333;
            color: #ddd;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        .doc-header {
            text-align: center;
            border-bottom: 2px solid #ff3e00;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }

        .doc-header h1 {
            color: #f02929;
            font-size: 36px;
            margin-bottom: 10px;
        }

        .badges img {
            margin: 5px;
            height: 25px;
        }

        h2 {
            color: #ff3e00;
            margin-top: 30px;
            margin-bottom: 15px;
            border-left: 4px solid #f02929;
            padding-left: 10px;
        }

        p, li {
            font-size: 16px;
            line-height: 1.6;
            color: #ccc;
        }

        ul {
            margin-left: 20px;
        }

        /* Code Block Styling */
        pre {
            background: #111;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
            border: 1px solid #444;
            margin: 15px 0;
        }

        code {
            font-family: 'Courier New', Courier, monospace;
            color: #00ff00; /* Hacker Green for code */
            font-size: 14px;
        }

        .folder-structure {
            color: #ffcc00; /* Yellow for folder structure */
        }

        /* Table Styling */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        th, td {
            border: 1px solid #444;
            padding: 10px;
            text-align: center;
        }

        th {
            background: #222;
            color: #ff3e00;
        }
    </style>
</head>

<body class="background">

    <nav class="navbar">
        <ul class="nav-list" id="navList">
            <div class="logo"><img src="img/eren.jpeg" alt="logo"></div>
            <li class="nav-item"><a href="index.html">Home</a></li>
            <li class="nav-item"><a href="characters.html">Characters</a></li>
            <li class="nav-item"><a href="episodes.html">Episodes</a></li>
            <li class="nav-item"><a href="about.html">About</a></li>
        </ul>
        <div class="menu-toggle" id="menuToggle">☰</div>
        <div class="rightnav">
            <input type="text" name="search" id="search" placeholder="Search...">
            <button class="btn btn-sm">Search</button>
            <div id="searchResults"></div>
        </div>
    </nav>

    <div class="doc-container">
        
        <div class="doc-header">
            <h1>Attack on Titan Fan Website</h1>
            <div class="badges">
                <img src="https://img.shields.io/badge/Status-Completed-success" alt="Status">
                <img src="https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-blue" alt="Tech">
                <img src="https://img.shields.io/badge/Design-Responsive-orange" alt="Responsive">
            </div>
            <p>A responsive web project dedicated to the masterpiece "Shingeki no Kyojin".</p>
        </div>

        <h2>📖 Overview</h2>
        <p>This project serves as a comprehensive guide for fans, featuring character biographies, episode timelines, famous fan theories, and the origin story of the creator Hajime Isayama. It demonstrates proficiency in <strong>Frontend Web Development</strong>.</p>

        <h2>🚀 Features</h2>
        <ul>
            <li><strong>Responsive Design:</strong> Fully optimized for Desktops, Tablets, and Mobile phones.</li>
            <li><strong>Global Search Bar:</strong> Custom JavaScript search engine to filter content.</li>
            <li><strong>Dynamic Navigation:</strong> Mobile-friendly hamburger menu.</li>
            <li><strong>Interactive UI:</strong> Grid layouts and hover effects.</li>
            <li><strong>GSAP Animations:</strong> Smooth entry animations for elements.</li>
        </ul>

        <h2>🛠️ Tech Stack</h2>
        <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3</li>
            <li><strong>Scripting:</strong> Vanilla JavaScript (ES6)</li>
            <li><strong>Animation:</strong> GSAP Library</li>
        </ul>

        <h2>📂 Project Structure</h2>
        <pre><code class="folder-structure">Attack-On-Titan-Website/
│
├── index.html          # Home Page
├── characters.html     # Character Profiles
├── episodes.html       # Season Summaries
├── about.html          # Developer Info
│
├── css/
│   └── style.css       # Main Stylesheet
│
├── js/
│   └── script.js       # Search & Menu Logic
│
└── img/                # Assets Folder</code></pre>

        <h2>⚙️ How to Run</h2>
        <ol>
            <li>Clone the repository or download the folder.</li>
            <li>Open the folder in VS Code (or any editor).</li>
            <li>Double-click <code>index.html</code> to open in your browser.</li>
        </ol>

        <h2>🧩 Code Highlight: Search Logic</h2>
        <p>The search bar uses a JSON-like array to map keywords to specific HTML pages.</p>
        <pre><code>const siteData = [
    { name: "Eren Yeager", link: "characters.html", keywords: "titan" },
    { name: "The Rumbling", link: "episodes.html", keywords: "season 4" }
];</code></pre>

        <h2>👨‍💻 Author</h2>
        <p><strong>Tejas</strong> - <em>Full Stack Engineering Student</em></p>
        <p>
            <a href="https://github.com/Tejas-952007" style="color:#ff3e00;">GitHub Profile</a> | 
            <a href="https://www.linkedin.com/in/tejas-ingle-39b36738a/" style="color:#ff3e00;">LinkedIn</a>
        </p>

    </div>

    <footer>
        <p>© 2026 Attack on Titan Fan Website | Documentation</p>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="script.js"></script>
    <script>
        // Simple animation for the doc page
        gsap.from(".doc-container", {y: 50, opacity: 0, duration: 1});
    </script>
</body>
</html>