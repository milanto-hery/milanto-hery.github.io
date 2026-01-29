const app = document.getElementById("app");

/* =========================
   SECTIONS CONTENT
========================= */

const sections = {
    home: `
    <header class="hero">
        <div class="floating-shapes">
            <div class="shape shape1"></div>
            <div class="shape shape2"></div>
            <div class="shape shape3"></div>
        </div>

        <div class="hero-content reveal">
            <img src="assets/profile.JPG" class="hero-photo" alt="Milanto">
            <h1>Milanto Ferdinand Rasolofohery</h1>
            <p class="hero-tagline">
                Data Scientist and Machine Learning Researcher working at the intersection of
                artificial intelligence, environmental science, and real-world data systems.
            </p>
        </div>
    </header>
    `,

    about: `
    <section class="section light">
        <div class="container reveal">
            <h2>About Me</h2>

            <p>
                I am Milanto, a data scientist and machine learning researcher with a strong foundation
                in applied mathematics, physics, and computational modeling. My work focuses on building
                intelligent systems that extract meaningful information from complex data and support
                real-world decision-making.
            </p>

            <p>
                I work across the full machine learning pipeline, from data acquisition and preprocessing
                to model design, evaluation, and deployment. I emphasize robustness, interpretability,
                and scientific rigor in every stage of development.
            </p>

            <p>
                My research interests are interdisciplinary, with a strong focus on environmental
                monitoring, wildlife conservation, bioacoustics, computer vision, and remote sensing.
            </p>
        </div>
    </section>
    `,

    work: `
    <section class="section">
        <div class="container reveal">
            <h2>My Work</h2>

            <p>
                My work philosophy centers on combining domain knowledge with modern machine learning.
                I avoid black-box solutions when possible and focus on well-structured pipelines that
                integrate signal processing, statistical modeling, and deep learning.
            </p>

            <p>
                I have extensive experience with audio, image, video, and high-dimensional scientific
                data. My work often targets scalable systems that can operate under real-world constraints
                such as limited compute, energy efficiency, and deployment on edge devices.
            </p>

            <p>
                I place strong value on reproducibility, documentation, and interdisciplinary collaboration.
            </p>
        </div>
    </section>
    `,

    projects: `
    <section class="section light">
        <div class="container reveal">
            <h2>Selected Projects</h2>

            <div class="projects">

                <div class="project">
                    <img src="assets/audiomoth.jpg">
                    <p>
                        Automated bird detection using passive acoustic monitoring, combining
                        signal processing, compressed sensing, and CNN-based classification.
                    </p>
                    <a href="https://github.com/milanto-hery/bioacoustics-project" target="_blank">
                        View repository →
                    </a>
                </div>

                <div class="project">
                    <img src="assets/computer-vision.png">
                    <p>
                        Object detection pipelines for ecological monitoring using YOLO-based
                        architectures, including annotation, training, and real-time inference.
                    </p>
                    <a href="https://github.com/milanto-hery/insect-detection-yolo" target="_blank">
                        View repository →
                    </a>
                </div>

                <div class="project">
                    <img src="assets/edgepi.JPG">
                    <p>
                        Edge AI bird detection system deployed on Raspberry Pi with real-time
                        Telegram alerts for remote wildlife monitoring.
                    </p>
                    <a href="https://github.com/milanto-hery/remote-sensing-project" target="_blank">
                        View repository →
                    </a>
                </div>

            </div>
        </div>
    </section>
    `,

    contact: `
    <section class="section">
        <div class="container reveal">
            <h2>Contact</h2>

            <p>
                I am open to research collaborations, PhD opportunities, and applied data science
                or machine learning roles.
            </p>

            <p>
                Email: milanto@aims.ac.za<br>
                GitHub: <a href="https://github.com/milanto-hery" target="_blank">github.com/milanto-hery</a><br>
                LinkedIn: <a href="https://linkedin.com/in/milanto-hery" target="_blank">linkedin.com/in/milanto-hery</a>
            </p>
        </div>
    </section>
    `
};

/* =========================
   LOAD SECTION
========================= */

function loadSection(section) {
    app.innerHTML = sections[section];
    revealOnLoad();
}

/* =========================
   ANIMATION
========================= */

function revealOnLoad() {
    setTimeout(() => {
        document.querySelectorAll(".reveal").forEach(el => {
            el.classList.add("active");
        });
    }, 100);
}

/* =========================
   INITIAL LOAD
========================= */

loadSection("home");
