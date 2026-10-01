import {
  Server, Activity, ShieldCheck, Container, Database, Network, Bell, Cloud,
  MessageCircle, Instagram, Facebook, ArrowRight, ChevronRight, ServerCog,
} from "lucide-react";

const nav = ["Beranda", "Solusi", "Proxmox", "Monitoring", "Security", "Tentang"];

const stats = [
  { icon: Server, big: "3", title: "Teknologi Utama", sub: "Proxmox · Zabbix · Wazuh" },
  { icon: Activity, big: "24/7", title: "Monitoring", sub: "Server · Network · Service" },
  { icon: ShieldCheck, big: "100%", title: "Keamanan", sub: "Deteksi · Analisis · Alert" },
];

const techs = [
  { cls: "proxmox", name: "PROXMOX", tag: "Virtualisasi", tagCls: "blue",
    desc: "Kelola virtual machine dan container dalam satu platform home server yang fleksibel, ringan dan mudah dikembangkan." },
  { cls: "zabbix", name: "ZABBIX", tag: "Monitoring", tagCls: "green",
    desc: "Pantau server, resource, network dan service secara real-time dengan sistem monitoring yang terpusat." },
  { cls: "wazuh", name: "WAZUH", tag: "Security", tagCls: "purple",
    desc: "Tingkatkan keamanan home server dengan monitoring endpoint, threat detection, log analysis dan security alert." },
];

const solutions = [
  { icon: Server, t: "Proxmox Home Lab", d: "Bangun virtualisasi server untuk menjalankan berbagai service." },
  { icon: Activity, t: "Server Monitoring", d: "Monitor CPU, RAM, storage, network dan service menggunakan Zabbix." },
  { icon: ShieldCheck, t: "Security Monitoring", d: "Deteksi aktivitas mencurigakan dan pantau keamanan server dengan Wazuh." },
  { icon: Container, t: "Docker & Containers", d: "Deploy aplikasi dan service menggunakan container secara terisolasi dan efisien." },
  { icon: Database, t: "Backup Automation", d: "Otomatisasi backup VM, container dan data penting untuk mengurangi risiko kehilangan data." },
  { icon: Network, t: "Network Automation", d: "Integrasikan monitoring network, firewall dan perangkat jaringan ke dalam sistem home server." },
  { icon: Bell, t: "Alert & Notification", d: "Terima notifikasi ketika server mengalami masalah, resource penuh atau muncul security event." },
  { icon: Cloud, t: "Remote Management", d: "Kelola dan monitor home server dari mana saja melalui dashboard yang terpusat." },
];

const articles = [
  { tag: "HOME SERVER", title: "Bangun server pribadi dengan Proxmox VE" },
  { tag: "MONITORING", title: "Monitoring server menggunakan Zabbix" },
  { tag: "SECURITY", title: "Amankan home server dengan Wazuh" },
];

export default function Home() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-in">
          <div className="socials">
            <a href="https://wa.me/6283181997518"><MessageCircle className="ic wa" size={26} /> WhatsApp <b>083181997518</b></a>
            <a href="#"><Instagram className="ic ig" size={26} /> Instagram <b>EKO</b></a>
            <a href="#"><Facebook className="ic fb" size={26} /> Facebook <b>Eko Buidlanto</b></a>
          </div>
          <p className="contact-note"><b>Hubungi saya:</b> Untuk konsultasi, kerjasama atau pertanyaan seputar home server.</p>
        </div>
      </div>

      <header className="header">
        <div className="container header-in">
          <a href="#" className="logo"><ServerCog size={42} color="#ff1f3d" /><span>Dakoju<em>Lab</em></span></a>
          <nav className="nav">
            {nav.map((n, i) => (
              <a key={n} href={`#${n.toLowerCase()}`} className={i === 0 ? "active" : ""}>{n}</a>
            ))}
          </nav>
          <div className="header-cta">
            <a href="#kontak" className="btn outline sm">Kontak</a>
            <a href="#" className="btn red sm">Mulai Sekarang</a>
          </div>
        </div>
      </header>

      <section className="hero" id="beranda">
        <div className="container hero-in">
          <div className="hero-text">
            <span className="pill">Home Server Automation</span>
            <h1>Bangun Infrastruktur Server<br /><span>yang Lebih Cerdas</span></h1>
            <p>
              Kelola, pantau, dan amankan <b>home server</b> Anda dengan teknologi terbaik. Proxmox untuk
              virtualisasi, Zabbix untuk monitoring, dan Wazuh untuk keamanan, dalam satu ekosistem yang terintegrasi.
            </p>
            <div className="hero-btns">
              <a href="#solusi" className="btn red"><ArrowRight size={18} /> Jelajahi Solusi</a>
              <a href="#kontak" className="btn outline">Konsultasi</a>
            </div>
            <div className="stats">
              {stats.map(({ icon: I, big, title, sub }) => (
                <div className="stat" key={title}>
                  <I size={38} color="#ff1f3d" strokeWidth={1.6} />
                  <div><strong>{big}</strong><span>{title}</span><small>{sub}</small></div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <div className="rack" />
            <div className="monitor">
              <div className="mon-logos"><b className="o">✕ PROXMOX</b><b className="r">ZABBIX</b><b>WAZUH</b></div>
              <div className="mon-chart" />
              <ShieldCheck className="mon-shield" size={44} />
            </div>
          </div>
        </div>
      </section>

      <main className="container">
        <section className="tech-row">
          {techs.map((t) => (
            <article key={t.name} className={`tech ${t.cls}`}>
              <h3 className="brand">{t.name}</h3>
              <span className={`tag ${t.tagCls}`}>{t.tag}</span>
              <p>{t.desc}</p>
              <button className="round" aria-label={`Lihat ${t.name}`}><ChevronRight size={18} /></button>
            </article>
          ))}
        </section>

        <section id="solusi" className="solutions">
          <h2 className="title">Solusi Kami</h2>
          <p className="subtitle">Layanan dan solusi untuk membangun home server yang stabil, aman dan efisien.</p>
          <div className="sol-grid">
            {solutions.map(({ icon: I, t, d }, i) => (
              <article className="sol" key={t}>
                <I size={38} color="#ff1f3d" strokeWidth={1.6} />
                <div>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="news">
          <div className="news-head">
            <h2>Berita & Artikel Terbaru</h2>
            <a href="#">Lihat Semua <ArrowRight size={13} /></a>
          </div>
          <div className="news-grid">
            {articles.map((a) => (
              <a href="#" className="card" key={a.title}>
                <div className="thumb" />
                <div><span className="badge">{a.tag}</span><h5>{a.title}</h5></div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer id="kontak" className="footer">© {new Date().getFullYear()} DakojuLab. Home Server Automation.</footer>
    </>
  );
}
