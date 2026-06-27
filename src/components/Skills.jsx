const categories = [
  {
    icon: 'fa-solid fa-code', label: 'Languages',
    bg: 'linear-gradient(135deg,#8b5cf6,#6366f1)',
    items: [
      { icon: 'fa-solid fa-c', name: 'C' },
      { icon: 'fa-solid fa-file-code', name: 'C++' },
      { icon: 'fa-brands fa-python', name: 'Python' },
      { icon: 'fa-brands fa-js', name: 'JavaScript' },
    ],
  },
  {
    icon: 'fa-solid fa-laptop-code', label: 'Frontend',
    bg: 'linear-gradient(135deg,#0ea5e9,#0284c7)',
    items: [
      { icon: 'fa-brands fa-react', name: 'React.js' },
      { icon: 'fa-brands fa-html5', name: 'HTML5' },
      { icon: 'fa-brands fa-css3-alt', name: 'CSS3' },
    ],
  },
  {
    icon: 'fa-solid fa-server', label: 'Backend',
    bg: 'linear-gradient(135deg,#059669,#047857)',
    items: [
      { icon: 'fa-brands fa-node-js', name: 'Node.js' },
      { icon: 'fa-solid fa-bolt', name: 'Express.js' },
      { icon: 'fa-brands fa-python', name: 'Django' },
    ],
  },
  {
    icon: 'fa-solid fa-database', label: 'Database',
    bg: 'linear-gradient(135deg,#d97706,#b45309)',
    items: [
      { icon: 'fa-solid fa-leaf', name: 'MongoDB' },
      { icon: 'fa-solid fa-database', name: 'MySQL' },
      { icon: 'fa-solid fa-database', name: 'PostgreSQL' },
    ],
  },
  {
    icon: 'fa-solid fa-microchip', label: 'IoT & Hardware',
    bg: 'linear-gradient(135deg,#dc2626,#9f1239)',
    items: [
      { icon: 'fa-solid fa-microchip', name: 'Arduino Uno' },
      { icon: 'fa-solid fa-microchip', name: 'ESP32' },
      { icon: 'fa-solid fa-temperature-half', name: 'Sensors' },
      { icon: 'fa-solid fa-location-dot', name: 'GPS Module' },
      { icon: 'fa-solid fa-signal', name: 'GSM Module' },
    ],
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench', label: 'Tools & Others',
    bg: 'linear-gradient(135deg,#8b5cf6,#06b6d4)',
    items: [
      { icon: 'fa-brands fa-git-alt', name: 'Git' },
      { icon: 'fa-brands fa-github', name: 'GitHub' },
      { icon: 'fa-solid fa-plug', name: 'REST API' },
      { icon: 'fa-solid fa-shield-halved', name: 'JWT' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">What I Work With</div>
        <h2 className="sh">Skills &amp; <span className="hl">Tech Stack</span></h2>
        <div className="tcats">
          {categories.map(cat => (
            <div key={cat.label} className="tcat gc">
              <div className="tcat-hd">
                <div className="tcat-ic" style={{ background: cat.bg }}>
                  <i className={cat.icon} />
                </div>
                <span className="tcat-lbl">{cat.label}</span>
              </div>
              <div className="titems">
                {cat.items.map(item => (
                  <span key={item.name} className="titem">
                    <i className={item.icon} /> {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
