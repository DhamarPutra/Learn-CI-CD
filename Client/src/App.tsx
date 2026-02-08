import { Github, Linkedin, Mail, ExternalLink, Code2, User, MessageSquare, ChevronRight } from 'lucide-react';

// --- Data Portofolio (Bisa kamu edit di sini) ---
const DATA = {
  name: "Budi Santoso",
  role: "Fullstack Developer",
  about: "Saya adalah pengembang perangkat lunak yang berfokus pada pembangunan aplikasi web berperforma tinggi. Berpengalaman dalam ekosistem React dan Node.js.",
  skills: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Next.js"],
  projects: [
    {
      title: "E-Commerce Platform",
      desc: "Aplikasi belanja online dengan fitur payment gateway integrasi.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Stripe", "Firebase"]
    },
    {
      title: "AI Chat Dashboard",
      desc: "Interface dashboard untuk manajemen bot AI berbasis cloud.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["OpenAI", "Next.js", "Tailwind"]
    }
  ]
};

// --- Komponen Navigasi ---
const Navbar = () => (
  <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <span className="font-bold text-xl tracking-tighter text-blue-600">PORTFOLIO.</span>
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
        <a href="#home" className="hover:text-blue-600 transition">Home</a>
        <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </div>
    </div>
  </nav>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-600">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
            Available for hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Building digital <span className="text-blue-600">experiences.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Halo! Saya {DATA.name}, seorang {DATA.role}. Saya mengubah kopi menjadi baris kode yang fungsional dan indah.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2">
              Lihat Project <ChevronRight size={18} />
            </button>
            <div className="flex items-center space-x-3 px-4">
              <Github className="cursor-pointer hover:text-blue-600 transition" />
              <Linkedin className="cursor-pointer hover:text-blue-600 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold">
            <Code2 size={20} /> <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Karya Terbaru</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {DATA.projects.map((p, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-4 shadow-sm border border-gray-100">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{p.title}</h3>
                    <p className="text-gray-600 mb-4">{p.desc}</p>
                    <div className="flex gap-2">
                      {p.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <ExternalLink size={20} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
               className="rounded-2xl shadow-2xl relative z-10"
               alt="Profile"
             />
             <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-0"></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4 text-blue-600 font-semibold">
              <User size={20} /> <span>Tentang Saya</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Membangun solusi dengan kode.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">{DATA.about}</p>
            <div className="grid grid-cols-2 gap-4">
              {DATA.skills.map(skill => (
                <div key={skill} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <MessageSquare className="mx-auto mb-6 text-blue-400" size={40} />
          <h2 className="text-3xl font-bold mb-4">Mari Bekerja Sama</h2>
          <p className="text-slate-400 mb-8">Saya selalu terbuka untuk diskusi project menarik atau peluang kerja.</p>
          <a 
            href="mailto:halo@email.com" 
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition"
          >
            <Mail size={18} /> Kirim Email
          </a>
          <div className="mt-16 pt-8 border-t border-slate-800 text-slate-500 text-sm">
            © {new Date().getFullYear()} {DATA.name}. Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}