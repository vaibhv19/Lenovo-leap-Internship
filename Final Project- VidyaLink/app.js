// Seed data for 15 resources
const SEEDED_RESOURCES = [
    {
        id: "res-1",
        title: "Introduction to Algorithms (MIT Lecture Notes)",
        subject: "Computer Science",
        techStack: "Python, C++",
        topic: "Data Structures & Algorithms",
        link: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
        description: "Comprehensive lecture notes, problem sets, and recitations covering sorting, graphs, hashing, and dynamic programming.",
        verified: true,
        upvotes: 42,
        dateAdded: "2026-06-15"
    },
    {
        id: "res-2",
        title: "JEE Main Mathematics Cheat Sheet",
        subject: "Mathematics",
        techStack: "LaTeX",
        topic: "JEE Prep",
        link: "https://www.jeemain.guru/maths-cheat-sheet",
        description: "Quick-revision sheet covering calculus, vectors, 3D geometry, and coordinate geometry formulas.",
        verified: true,
        upvotes: 28,
        dateAdded: "2026-06-20"
    },
    {
        id: "res-3",
        title: "GATE CSE Question Bank (2015-2025)",
        subject: "Computer Science",
        techStack: "PDF Reader",
        topic: "GATE Prep",
        link: "https://gateoverflow.in/",
        description: "All GATE CSE past questions with community-voted answers, categorized by topic.",
        verified: true,
        upvotes: 56,
        dateAdded: "2026-06-22"
    },
    {
        id: "res-4",
        title: "Modern React Cheat Sheet (V18+)",
        subject: "Computer Science",
        techStack: "React, JavaScript",
        topic: "Web Development",
        link: "https://react.dev/",
        description: "Essential cheat sheet for React Hooks, Context API, state management, and lifecycle hooks with practical examples.",
        verified: false,
        upvotes: 15,
        dateAdded: "2026-06-25"
    },
    {
        id: "res-5",
        title: "University Physics: Mechanics Lecture Slides",
        subject: "Physics",
        techStack: "None",
        topic: "Semester Finals",
        link: "https://openstax.org/details/books/university-physics-volume-1",
        description: "Full set of open-source slides for freshman mechanics, covering vectors, kinematics, work-energy, and rotation.",
        verified: true,
        upvotes: 33,
        dateAdded: "2026-06-28"
    },
    {
        id: "res-6",
        title: "Python for Data Science Handbook",
        subject: "Computer Science",
        techStack: "Python, Jupyter",
        topic: "Data Science",
        link: "https://jakevdp.github.io/PythonDataScienceHandbook/",
        description: "Free online textbook detailing NumPy, Pandas, Matplotlib, and Scikit-Learn for student projects.",
        verified: true,
        upvotes: 49,
        dateAdded: "2026-07-01"
    },
    {
        id: "res-7",
        title: "Linear Algebra & Its Applications (Cheat Sheet)",
        subject: "Mathematics",
        techStack: "None",
        topic: "Semester Finals",
        link: "https://www.math.ucdavis.edu/",
        description: "Core concepts of matrices, eigenvalues, eigenvectors, vector spaces, and linear transformations summarised in 4 pages.",
        verified: false,
        upvotes: 19,
        dateAdded: "2026-07-02"
    },
    {
        id: "res-8",
        title: "SQL Query Design Pattern Reference",
        subject: "Computer Science",
        techStack: "SQL",
        topic: "Database Systems",
        link: "https://www.sqlservertutorial.net/",
        description: "Step-by-step design patterns for complex joins, subqueries, CTEs, and window functions.",
        verified: true,
        upvotes: 37,
        dateAdded: "2026-07-03"
    },
    {
        id: "res-9",
        title: "Classical Electrodynamics Revision Guide",
        subject: "Physics",
        techStack: "None",
        topic: "Semester Finals",
        link: "https://arxiv.org/html/electrodynamics",
        description: "Quick notes on Maxwell's equations, electromagnetic waves, potential formulations, and gauge transformations.",
        verified: false,
        upvotes: 8,
        dateAdded: "2026-07-04"
    },
    {
        id: "res-10",
        title: "Introduction to Machine Learning (CS229 Notes)",
        subject: "Computer Science",
        techStack: "Python, NumPy",
        topic: "Machine Learning",
        link: "https://cs229.stanford.edu/syllabus.html",
        description: "In-depth lecture notes covering supervised learning, unsupervised learning, deep learning, and reinforcement learning.",
        verified: true,
        upvotes: 62,
        dateAdded: "2026-07-04"
    },
    {
        id: "res-11",
        title: "GATE Physics Formula Book",
        subject: "Physics",
        techStack: "None",
        topic: "GATE Prep",
        link: "https://gatephysicspreparation.blogspot.com/",
        description: "Handwritten formula booklet compiled for quick revision of mathematical methods, mechanics, quantum, and solid-state.",
        verified: false,
        upvotes: 12,
        dateAdded: "2026-07-05"
    },
    {
        id: "res-12",
        title: "CSS Flexbox & Grid Complete Reference",
        subject: "Computer Science",
        techStack: "CSS, HTML",
        topic: "Web Development",
        link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        description: "An interactive, visual layout guide for mastering responsive layouts with Flexbox and CSS Grid properties.",
        verified: true,
        upvotes: 31,
        dateAdded: "2026-07-05"
    },
    {
        id: "res-13",
        title: "JEE Advanced Physics Practice Problems",
        subject: "Physics",
        techStack: "None",
        topic: "JEE Prep",
        link: "https://www.iitjeephysics.com/",
        description: "Curated collection of challenging multi-concept physics problems in mechanics and electromagnetism.",
        verified: true,
        upvotes: 24,
        dateAdded: "2026-07-06"
    },
    {
        id: "res-14",
        title: "Calculus and Complex Variables Crash Course",
        subject: "Mathematics",
        techStack: "None",
        topic: "Semester Finals",
        link: "https://www.khanacademy.org/math/calculus-1",
        description: "Video playlist and summarized study guides for limits, derivatives, integration, and complex variable functions.",
        verified: false,
        upvotes: 14,
        dateAdded: "2026-07-06"
    },
    {
        id: "res-15",
        title: "Docker & Kubernetes Student Cheat Sheet",
        subject: "Computer Science",
        techStack: "Docker, K8s",
        topic: "DevOps",
        link: "https://dockerlabs.collabnix.com/",
        description: "Reference sheet for containerizing web applications, managing microservices, and deploying locally using Minikube.",
        verified: false,
        upvotes: 20,
        dateAdded: "2026-07-07"
    }
];

// App State
let resources = [];

document.addEventListener('DOMContentLoaded', () => {
    initData();
    initNavigation();
    initVault();
});

// Load / Seed Data
function initData() {
    const stored = localStorage.getItem('vidyalink_resources');
    if (!stored) {
        localStorage.setItem('vidyalink_resources', JSON.stringify(SEEDED_RESOURCES));
        resources = [...SEEDED_RESOURCES];
    } else {
        resources = JSON.parse(stored);
    }
}

// Navigation & View Routing
function initNavigation() {
    const tabs = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');

            // Update active state in navigation buttons
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show target section, hide others
            sections.forEach(sec => {
                if (sec.id === `view-${targetTab}`) {
                    sec.classList.add('active');
                } else {
                    sec.classList.remove('active');
                }
            });
        });
    });
}

// Vault View Features: Filtering, Searching & Sorting
function initVault() {
    const searchInput = document.getElementById('search-input');
    const filterSubject = document.getElementById('filter-subject');
    const filterTech = document.getElementById('filter-tech');
    const filterTopic = document.getElementById('filter-topic');
    const sortBy = document.getElementById('sort-by');

    // Populate filters dropdowns dynamically from data
    populateFilterDropdowns();

    // Render initial list
    renderResources();

    // Event listeners
    searchInput.addEventListener('input', renderResources);
    filterSubject.addEventListener('change', renderResources);
    filterTech.addEventListener('change', renderResources);
    filterTopic.addEventListener('change', renderResources);
    sortBy.addEventListener('change', renderResources);
}

function populateFilterDropdowns() {
    const filterSubject = document.getElementById('filter-subject');
    const filterTech = document.getElementById('filter-tech');
    const filterTopic = document.getElementById('filter-topic');

    const subjects = new Set();
    const techStacks = new Set();
    const topics = new Set();

    resources.forEach(res => {
        if (res.subject) subjects.add(res.subject);
        if (res.topic) topics.add(res.topic);
        if (res.techStack) {
            // Split tech stacks by comma if multiple
            res.techStack.split(',').forEach(tech => {
                const trimmed = tech.trim();
                if (trimmed && trimmed.toLowerCase() !== 'none') {
                    techStacks.add(trimmed);
                }
            });
        }
    });

    // Populate Subject dropdown
    Array.from(subjects).sort().forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.textContent = sub;
        filterSubject.appendChild(opt);
    });

    // Populate Tech Stack dropdown
    Array.from(techStacks).sort().forEach(tech => {
        const opt = document.createElement('option');
        opt.value = tech;
        opt.textContent = tech;
        filterTech.appendChild(opt);
    });

    // Populate Exam Topic dropdown
    Array.from(topics).sort().forEach(topic => {
        const opt = document.createElement('option');
        opt.value = topic;
        opt.textContent = topic;
        filterTopic.appendChild(opt);
    });
}

function renderResources() {
    const container = document.getElementById('resources-list');
    if (!container) return;

    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const subVal = document.getElementById('filter-subject').value;
    const techVal = document.getElementById('filter-tech').value;
    const topicVal = document.getElementById('filter-topic').value;
    const sortVal = document.getElementById('sort-by').value;

    // Filter
    let filtered = resources.filter(res => {
        // Text search match: Title, Description, Subject, Tech Stack, Topic
        const matchesQuery = !query || 
            res.title.toLowerCase().includes(query) ||
            res.description.toLowerCase().includes(query) ||
            res.subject.toLowerCase().includes(query) ||
            res.topic.toLowerCase().includes(query) ||
            (res.techStack && res.techStack.toLowerCase().includes(query));

        // Dropdown matches
        const matchesSubject = !subVal || res.subject === subVal;
        const matchesTopic = !topicVal || res.topic === topicVal;
        
        // Tech stack filter check
        let matchesTech = true;
        if (techVal) {
            if (!res.techStack) {
                matchesTech = false;
            } else {
                const stacks = res.techStack.split(',').map(s => s.trim().toLowerCase());
                matchesTech = stacks.includes(techVal.toLowerCase());
            }
        }

        return matchesQuery && matchesSubject && matchesTech && matchesTopic;
    });

    // Sort
    if (sortVal === 'top') {
        filtered.sort((a, b) => b.upvotes - a.upvotes);
    } else {
        // newest first (descending date, then by id)
        filtered.sort((a, b) => {
            const dateA = new Date(a.dateAdded);
            const dateB = new Date(b.dateAdded);
            if (dateB - dateA !== 0) return dateB - dateA;
            return b.id.localeCompare(a.id);
        });
    }

    // Render cards
    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; border: 1px dashed var(--border-color); border-radius: 6px; color: var(--text-secondary);">
                No resources found matching the selected search criteria.
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(res => {
        const isUpvoted = isAlreadyUpvoted(res.id);
        return `
            <div class="resource-card" data-id="${res.id}">
                <div>
                    <div class="resource-header">
                        <h3 class="resource-title">
                            <a href="${res.link}" target="_blank" rel="noopener noreferrer">${res.title}</a>
                        </h3>
                        ${res.verified ? '<span class="badge-verified">Verified</span>' : ''}
                    </div>
                    <p class="resource-desc">${res.description}</p>
                    <div class="resource-tags">
                        <span class="tag">Subject: ${res.subject}</span>
                        ${res.techStack && res.techStack.toLowerCase() !== 'none' ? `<span class="tag">Tech: ${res.techStack}</span>` : ''}
                        <span class="tag">Topic: ${res.topic}</span>
                    </div>
                </div>
                <div class="resource-footer">
                    <button class="btn-upvote ${isUpvoted ? 'voted' : ''}" onclick="handleUpvoteClick(event, '${res.id}')">
                        <svg viewBox="0 0 24 24">
                            <path d="M4 14h6v8h4v-8h6L12 4 4 14z"/>
                        </svg>
                        <span class="upvote-count">${res.upvotes}</span>
                    </button>
                    <span class="resource-date">Added on ${formatDate(res.dateAdded)}</span>
                </div>
            </div>
        `;
    }).join('');
}

// Helpers
function formatDate(dateStr) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Placeholder functions for Upvoting logic
function isAlreadyUpvoted(id) {
    const upvotedList = JSON.parse(sessionStorage.getItem('vidyalink_upvoted') || '[]');
    return upvotedList.includes(id);
}

function handleUpvoteClick(event, id) {
    event.stopPropagation();
    
    let upvotedList = JSON.parse(sessionStorage.getItem('vidyalink_upvoted') || '[]');
    if (upvotedList.includes(id)) {
        return; // Block double-upvoting in this session
    }

    const res = resources.find(r => r.id === id);
    if (!res) return;

    res.upvotes += 1;
    localStorage.setItem('vidyalink_resources', JSON.stringify(resources));

    upvotedList.push(id);
    sessionStorage.setItem('vidyalink_upvoted', JSON.stringify(upvotedList));

    renderResources();
}

