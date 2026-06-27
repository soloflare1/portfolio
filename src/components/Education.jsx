const terms = ['Fall 2023', 'Spring 2024', 'Fall 2024', 'Spring 2025', 'Fall 2025']

const stats = [
  { num: '3.91', lbl: 'CGPA', iconCls: 'fa-solid fa-star', iconColor: 'var(--amber)' },
  { num: '#1', lbl: 'Ranked 1st in the Department of CSE', iconCls: 'fa-solid fa-trophy', iconColor: 'var(--amber)' },
  { num: '5', lbl: 'Waiver Terms', iconCls: 'fa-solid fa-award', iconColor: 'var(--emerald)' },
  { num: 'L3', lbl: 'Current Level', iconCls: 'fa-solid fa-layer-group', iconColor: 'var(--cyan)' },
]

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">Academic Background</div>
        <h2 className="sh">My <span className="hl">Education</span></h2>

        {/* BSc Hero Card */}
        <div className="edu-hero">
          <div className="edu-hero-tag">
            <i className="fa-solid fa-graduation-cap" />&nbsp; Currently Pursuing
          </div>
          <div className="edu-hero-deg">BSc in Computer Science &amp; Engineering</div>
          <div className="edu-hero-inst">
            <i className="fa-solid fa-building-columns" />&nbsp;
            Bangladesh Army International University of Science and Technology (BAIUST), Cumilla
            &nbsp;&middot;&nbsp;
            <span style={{ color: 'var(--muted)' }}>2023 – Present &nbsp;&middot;&nbsp; Level 3, Term 2</span>
          </div>

          <div className="edu-stats-row">
            {stats.map(s => (
              <div key={s.lbl} className="edu-stat">
                <div className="edu-stat-num">{s.num}</div>
                <div className="edu-stat-lbl">
                  <i className={s.iconCls} style={{ fontSize: '.65rem', color: s.iconColor }} />&nbsp; {s.lbl}
                </div>
              </div>
            ))}
          </div>

          <div className="waiver-box">
            <div className="waiver-title">
              <i className="fa-solid fa-circle-check" />
              Merit-Based Tuition Waiver — All Terms of Enrollment
            </div>
            <div className="trow">
              {terms.map(t => (
                <span key={t} className="tpill">
                  <i className="fa-solid fa-check" style={{ fontSize: '.6rem' }} />&nbsp;{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SSC & HSC */}
        <div className="edu-others">
          <div className="edu-mini gc">
            <div className="edu-mini-stripe" style={{ background: 'linear-gradient(180deg,#0ea5e9,#0284c7)' }} />
            <div style={{ paddingLeft: '.5rem' }}>
              <div className="edu-mini-deg">Higher Secondary Certificate (HSC)</div>
              <div className="edu-mini-inst" style={{ color: '#38bdf8' }}>
                <i className="fa-solid fa-school" />&nbsp; Comilla Board
              </div>
              <span className="edu-mini-gpa" style={{ background: 'rgba(14,165,233,.1)', borderColor: 'rgba(14,165,233,.28)', color: '#38bdf8' }}>
                <i className="fa-solid fa-medal" />&nbsp; GPA 5.00 / 5.00
              </span>
            </div>
          </div>

          <div className="edu-mini gc">
            <div className="edu-mini-stripe" style={{ background: 'linear-gradient(180deg,#059669,#047857)' }} />
            <div style={{ paddingLeft: '.5rem' }}>
              <div className="edu-mini-deg">Secondary School Certificate (SSC)</div>
              <div className="edu-mini-inst" style={{ color: '#34d399' }}>
                <i className="fa-solid fa-school" />&nbsp; Comilla Board
              </div>
              <span className="edu-mini-gpa" style={{ background: 'rgba(5,150,105,.1)', borderColor: 'rgba(5,150,105,.28)', color: '#34d399' }}>
                <i className="fa-solid fa-medal" />&nbsp; GPA 5.00 / 5.00
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
