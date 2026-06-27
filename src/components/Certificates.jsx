// To add certificate images:
// import certBinaryBlossoms from '../assets/cert-binary-blossoms.png'
// Then set screenshot={certBinaryBlossoms} on the cert object

const certs = [
  {
    bar: 'bar-gold', badge: 'bg', badgeIcon: 'fa-solid fa-trophy', badgeLabel: 'Best Team',
    title: 'Best Girls Team — IUPC',
    detail: 'Certificate of Recognition · Team: Binary_Blossoms',
    event: 'BAIUST CSE Fest 2025 · May 2025',
    screenshot: null,
  },
  {
    bar: 'bar-silver', badge: 'bs', badgeIcon: 'fa-solid fa-award', badgeLabel: '1st Runners Up',
    title: 'IUPC — Senior Category',
    detail: 'Certificate of Achievement · Team: segment_tree',
    event: 'BAIUST CSE Fall Fest 2025 · Nov 2025',
    screenshot: null,
  },
  {
    bar: 'bar-bronze', badge: 'bb', badgeIcon: 'fa-solid fa-medal', badgeLabel: '13th Place',
    title: 'Hackathon — Junior Category',
    detail: 'Certificate of Achievement · Team: Naam_Lage_Na',
    event: 'BAIUST CSE Fest 2025 · May 2025',
    screenshot: null,
  },
  {
    bar: 'bar-blue', badge: 'bl', badgeIcon: 'fa-solid fa-users', badgeLabel: 'Team Leader',
    title: 'Hackathon — Senior Category',
    detail: 'Certificate of Participation · Team: lets_do_it',
    event: 'BAIUST CSE Fall Fest 2025 · Nov 2025',
    screenshot: null,
  },
  {
    bar: 'bar-blue', badge: 'bl', badgeIcon: 'fa-solid fa-users', badgeLabel: 'Team Leader',
    title: 'Prompt Engineering — Senior Category',
    detail: 'Certificate of Participation · Team: lets_do_it',
    event: 'BAIUST CSE Fall Fest 2025 · Nov 2025',
    screenshot: null,
  },
]

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="wrap">
        <div className="eyebrow">Recognition</div>
        <h2 className="sh">Certificates &amp; <span className="hl">Achievements</span></h2>
        <div className="cgrid">
          {certs.map((c, i) => (
            <div key={i} className="ccard gc">
              <div className={`ccard-bar ${c.bar}`} />
              <div className="cprev">
                {c.screenshot
                  ? <img src={c.screenshot} alt={c.title} />
                  : <><i className="fa-regular fa-image" /><span>Certificate preview</span></>
                }
              </div>
              <div className="cbody">
                <div className={`cbadge ${c.badge}`}>
                  <i className={c.badgeIcon} />&nbsp; {c.badgeLabel}
                </div>
                <div className="ctitle">{c.title}</div>
                <div className="cdet">{c.detail}</div>
                <div className="cev">
                  <i className="fa-solid fa-calendar-days" />&nbsp; {c.event}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
