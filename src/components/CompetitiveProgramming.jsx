const stats = [
  { num: '400+', lbl: 'Problems Solved', icon: 'fa-solid fa-code' },
  { num: '30+', lbl: 'Contests Entered', icon: 'fa-solid fa-flag-checkered' },
  { num: '3', lbl: 'Active Platforms', icon: 'fa-solid fa-globe' },
]

const platforms = [
  { href: 'https://leetcode.com/u/nosratee_jn/', icon: 'fa-solid fa-code', name: 'LeetCode', handle: 'nosratee_jn' },
  { href: 'https://codeforces.com/profile/nosratee.jn', icon: 'fa-solid fa-terminal', name: 'Codeforces', handle: 'nosratee.jn' },
  { href: 'https://www.codechef.com/users/nosratee22', icon: 'fa-solid fa-utensils', name: 'CodeChef', handle: 'nosratee22' },
]

const achievements = [
  {
    iconCls: 'ach-gold', icon: 'fa-solid fa-trophy',
    title: 'Best Girls Team — IUPC',
    sub: 'Certificate of Recognition · Team: Binary_Blossoms',
    event: 'BAIUST CSE Fest 2025 · May 2025',
  },
  {
    iconCls: 'ach-silver', icon: 'fa-solid fa-award',
    title: '1st Runners Up — IUPC, Senior Category',
    sub: 'Certificate of Achievement · Team: segment_tree',
    event: 'BAIUST CSE Fall Fest 2025 · Nov 2025',
  },
]

export default function CompetitiveProgramming() {
  return (
    <section id="cp">
      <div className="wrap">
        <div className="eyebrow">Problem Solving</div>
        <h2 className="sh">Competitive <span className="hl">Programming</span></h2>

        <div className="cpstats">
          {stats.map(s => (
            <div key={s.lbl} className="cpsc gc">
              <div className="cpnum">{s.num}</div>
              <div className="cplbl"><i className={s.icon} />&nbsp; {s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="cp-sub-hd">
          <i className="fa-solid fa-user-astronaut" style={{ color: 'var(--accent)' }} /> Profiles
        </div>
        <div className="cpplats">
          {platforms.map(p => (
            <a key={p.href} className="cpplat" href={p.href} target="_blank" rel="noreferrer">
              <i className={p.icon} /> {p.name} <span className="handle">{p.handle}</span>
            </a>
          ))}
        </div>

        <div className="cp-sub-hd">
          <i className="fa-solid fa-trophy" style={{ color: 'var(--amber)' }} /> Contest Achievements
        </div>
        <div className="cp-ach-grid">
          {achievements.map(a => (
            <div key={a.title} className="cp-ach-card gc">
              <div className={`cp-ach-icon ${a.iconCls}`}><i className={a.icon} /></div>
              <div>
                <div className="cp-ach-title">{a.title}</div>
                <div className="cp-ach-sub">{a.sub}</div>
                <div className="cp-ach-event">
                  <i className="fa-solid fa-calendar-days" />&nbsp; {a.event}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
