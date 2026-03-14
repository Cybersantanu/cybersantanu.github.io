<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Santanu Biswas | Cybersecurity Portfolio</title>

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}

body{
font-family:'Poppins',sans-serif;
background:#0a0a0a;
color:white;
scroll-behavior:smooth;
}

/* Loader */
#loader{
position:fixed;
height:100vh;
width:100%;
background:black;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
font-family:'Orbitron',sans-serif;
z-index:9999;
}

.loader-text{
color:#00f7ff;
font-size:22px;
margin:5px;
animation:blink 1s infinite alternate;
}

@keyframes blink{
from{opacity:0.4}
to{opacity:1}
}

/* Navbar */
nav{
position:fixed;
width:100%;
padding:20px 10%;
display:flex;
justify-content:space-between;
background:rgba(0,0,0,0.6);
backdrop-filter:blur(10px);
}

nav a{
color:white;
margin-left:25px;
text-decoration:none;
font-size:14px;
}

/* Hero */
.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 10%;
}

.hero h1{
font-family:'Orbitron',sans-serif;
font-size:70px;
margin-bottom:20px;
}

.hero h2{
font-size:24px;
color:#00f7ff;
margin-bottom:20px;
}

.hero p{
max-width:500px;
margin-bottom:30px;
}

.btn{
padding:12px 28px;
border:1px solid #00f7ff;
color:#00f7ff;
text-decoration:none;
margin-right:15px;
}

/* Sections */
section{
padding:120px 10%;
}

section h2{
font-size:40px;
margin-bottom:30px;
font-family:'Orbitron',sans-serif;
}

.skills-grid, .projects-grid, .cert-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}

.card{
background:#111;
padding:20px;
border:1px solid #222;
}

.card:hover{
border-color:#00f7ff;
}

footer{
padding:40px;
text-align:center;
background:#050505;
}

</style>
</head>

<body>

<div id="loader">
<div class="loader-text">Loading Portfolio...</div>
<div class="loader-text">Initializing Security Profile...</div>
<div class="loader-text">Access Granted</div>
</div>

<nav>
<div><b>Santanu</b></div>
<div>
<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#cert">Certificates</a>
<a href="#contact">Contact</a>
</div>
</nav>

<section class="hero">
<div>
<h1>Santanu Biswas</h1>
<h2>Cybersecurity Learner | Bug Bounty Hunter</h2>
<p>Exploring vulnerabilities and learning how to build secure digital systems.</p>
<a class="btn" href="#">Download CV</a>
<a class="btn" href="#contact">Contact</a>
</div>
</section>

<section id="about">
<h2>About Me</h2>
<p>
Hello, I'm Santanu Biswas. I am a cybersecurity learner focused on bug bounty hunting,
web application security testing, and reconnaissance techniques.

I enjoy discovering vulnerabilities, exploring APIs, and learning security tools.
</p>
</section>

<section id="skills">
<h2>Skills</h2>
<div class="skills-grid">
<div class="card">Web Application Security</div>
<div class="card">Bug Bounty Hunting</div>
<div class="card">API Security Testing</div>
<div class="card">OSINT Investigation</div>
<div class="card">Kali Linux</div>
<div class="card">Burp Suite</div>
<div class="card">Nmap</div>
<div class="card">Python</div>
</div>
</section>

<section id="projects">
<h2>Projects</h2>
<div class="projects-grid">

<div class="card">
<h3>Bug Bounty Recon Automation</h3>
<p>Recon workflow for discovering subdomains and hidden assets.</p>
</div>

<div class="card">
<h3>OSINT Investigation Toolkit</h3>
<p>Collected domain intelligence using OSINT tools.</p>
</div>

<div class="card">
<h3>API Security Testing Lab</h3>
<p>Practiced testing APIs for vulnerabilities.</p>
</div>

</div>
</section>

<section id="cert">
<h2>Certificates</h2>
<div class="cert-grid">
<div class="card">Cybersecurity Fundamentals</div>
<div class="card">Ethical Hacking Training</div>
<div class="card">OSINT Investigation</div>
<div class="card">Bug Bounty Course</div>
</div>
</section>

<section id="contact">
<h2>Contact</h2>
<p>Email: your-email@example.com</p>
<p>GitHub: github.com/yourusername</p>
<p>LinkedIn: linkedin.com/in/yourusername</p>
</section>

<footer>
© Santanu Biswas | Cybersecurity Portfolio
</footer>

<script>

window.addEventListener("load",function(){
setTimeout(function(){
 document.getElementById("loader").style.display="none";
},2000);
});

</script>

</body>
</html>
