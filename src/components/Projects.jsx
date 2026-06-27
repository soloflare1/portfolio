// To add screenshots: import ssAcademix from '../assets/academix.png' etc.
// Then set screenshot={ssAcademix} on the project object

const projects = [
  {
    category: 'Full Stack · MERN',
    categoryIcon: 'fa-solid fa-layer-group',
    name: 'BAIUST Academix',
    desc: 'A centralized academic resource sharing platform for BAIUST students, structured around a Level → Term → Course → Resource hierarchy with role-based access and JWT authentication.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/soloflare1',
    screenshot: null,
  },
  {
    category: 'IoT · Embedded Systems',
    categoryIcon: 'fa-solid fa-microchip',
    name: 'Shurokkha',
    desc: 'A standalone IoT-based wearable safety device that provides real-time location-based emergency alerts through intelligent dual-mode communication. Features SOS activation, GPS location sharing via Google Maps link, dual-mode alerts (Silent & Audible), OLED status display, and portable battery-powered design — no internet required.',
    stack: ['ESP32', 'NEO-6M GPS', 'SIM800L GSM', 'OLED Display', 'TP4056', 'Li-ion Battery', 'C++'],
    github: 'https://github.com/soloflare1',
    screenshot: null,
  },
  {
    category: 'Full Stack · MERN',
    categoryIcon: 'fa-solid fa-book-open',
    name: 'Researchy',
    desc: 'A research paper archive platform with full-text MongoDB search, pagination, PDF/DOCX upload (Multer, 20MB), JWT authentication, and a clean dashboard with statistics. Three-tier deployment: Vercel · Render · MongoDB Atlas.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'Vite', 'Vercel', 'Render'],
    github: 'https://github.com/soloflare1',
    screenshot: null,
  },
]

function ProjectCard({ project }) {
  return (
    <div className="pcard gc">
      <div className="pcard-bar" />
      <div className="pss">
        {project.screenshot
          ? <img src={project.screenshot} alt={project.name} />
          : <><i className="fa-regular fa-image" /><span>Screenshot coming soon</span></>
        }
      </div>
      <div className="pbody">
        <div className="pcat">
          <i className={project.categoryIcon} />&nbsp; {project.category}
        </div>
        <div className="pname">{project.name}</div>
        <p className="pdesc">{project.desc}</p>
        <div className="pstack">
          {project.stack.map(t => <span key={t} className="stag">{t}</span>)}
        </div>
        <div className="pfoot">
          <a className="plink" href={project.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">What I've Built</div>
        <h2 className="sh">Featured <span className="hl">Projects</span></h2>
        <div className="pgrid">
          {projects.map(p => <ProjectCard key={p.name} project={p} />)}
        </div>
      </div>
    </section>
  )
}
