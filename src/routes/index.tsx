import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Download,
  ArrowRight,
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  GraduationCap,
  Target,
  Microscope,
  Compass,
  Brain,
  FlaskConical,
  Code2,
  Smartphone,
  Database,
  FileText,
  Sparkles,
  Award,
  Briefcase,
  CheckCircle2,
  PhoneIcon,
  Languages,
} from "lucide-react";

import { Navbar } from "@/components/portfolio/Navbar";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

import avatarImg from "@/assets/avatar.jpg";
import projectOct from "@/assets/project-oct.jpg";
import projectRetina from "/retinaai.jpg";
import projectManuscript from "@/assets/project-manuscript.jpg";
import projectFlutter from "@/assets/project-flutter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Besmala Bendif Portfolio" },
      {
        name: "description",
        content:
          "AI Engineer and Machine Learning Researcher specializing in Computer Vision, Medical AI, and Multimodal Deep Learning.",
      },
      { property: "og:title", content: "Besmala Bendif — AI Engineer & ML Researcher" },
      {
        property: "og:description",
        content:
          "Portfolio showcasing research in Medical AI, Computer Vision, and Multimodal Deep Learning.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Experience />
        <Certifications />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-32 pb-20"
    >
      <ParticleBackground />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="space-y-7 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-cyan-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-accent opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-accent" />
            </span>
            Available for research & engineering jobs opportunities
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-gradient">Besmala Bendif</span>
          </h1>

          <p className="text-lg font-medium text-muted-foreground sm:text-xl">
            <span className="text-foreground">AI Engineer</span>
            <span className="mx-2 text-blue-accent">|</span>
            <span className="text-foreground">Machine Learning Researcher</span>
            <span className="mx-2 text-blue-accent">|</span>
            <span className="text-foreground">Full-Stack Developer</span>
          </p>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
Artificial Intelligence Engineer and Master's graduate from the National Higher School of Artificial Intelligence (ENSIA), awarded with Very Good Honors. With expertise in Machine Learning, Computer Vision, Multimodal Learning, Medical Imaging, Natural Language Processing, and Explainable AI, I am passionate about transforming cutting-edge AI research into intelligent solutions that address real-world challenges.          </p>

          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
             <a
              href="/My_Degrees.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-accent to-purple-accent px-6 py-3 font-medium text-white shadow-lg  transition-all hover:shadow-blue-accent/50 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              View Degrees
            </a>
            
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium text-foreground transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 pt-2 md:justify-start">
            <SocialIcon href="https://github.com/Besmsala" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialIcon href="https://www.linkedin.com/in/besmala-bendif-884006276/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            <SocialIcon href="mailto:besmala.bendif@ensia.edu.dz" icon={<Mail className="h-5 w-5" />} label="Email" />
<a
  href="https://www.ensia.edu.dz"
  target="_blank"
  rel="noreferrer"
  className="inline-flex items-center rounded-lg glass px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground hover:border-blue-accent/40   "
>
  <GraduationCap className="h-4 w-" />

     visit university ENSIA
</a>          </div>
        </div>

        {/* Avatar */}
        <div className="relative mx-auto animate-float">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-accent via-cyan-accent to-purple-accent opacity-30 blur-3xl animate-glow-pulse" />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 shadow-2xl sm:h-80 sm:w-80">
            <img
              src={avatarImg}
              alt="Besmala Bendif"
              width={320}
              height={320}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg glass text-muted-foreground transition-all hover:text-foreground hover:border-blue-accent/40 hover:scale-110"
    >
      {icon}
    </a>
  );
}

/* ---------------- SECTION ---------------- */

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-accent">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  const cards = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Academic Background",
      text:
"AI Engineer holding both a State Engineering Degree and a Master's Degree (Bac+5) in Artificial Intelligence and Data Science from the National Higher School of Artificial Intelligence (ENSIA), Graduated with 17.75/20 . Specialized in Machine Learning and AI, with a passion for transforming cutting-edge AI research into impactful real-world solutions."    },
    {
      icon: <Microscope className="h-5 w-5" />,
      title: "Research Interests",
      text:
        "Medical imaging, AI for healthcare applications, Computer Vision, Multimodal Deep Learning, Explainable AI, and Transformer-based architectures.",
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Career Goals",
      text:
        "To contribute to impactful AI research and innovation that bridges academia and industry, gain experience and transforming advanced technologies into real-world solutions.",
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: "Personal Approach",
      text:
        "I combine engineering discipline with research curiosity — shipping production-grade systems backed by rigorous experimentation.",
    },
  ];

  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="AI Engineer Building Real-World AI"
      subtitle="I'm passionate about leveraging artificial intelligence and machine learning to solve complex real-world problems and create intelligent systems that deliver measurable impact.
"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {cards.map((c) => (
          <div key={c.title} className="glass glow-hover rounded-2xl p-6">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-accent/20 to-purple-accent/20 text-blue-accent">
              {c.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- SKILLS ---------------- */

function Skills() {
  const groups = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "AI & Deep Learning",
      items: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn","Keras", "NumPy", "Pandas","Seaborn","Matplotlib"],
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Computer vision & NLP",
      items: ["OpenCV", "Detectron2", "TorchVision", "Transformers (Hugging Face)","NLTK", "spaCy"],
    },
    {
      icon: <FlaskConical className="h-5 w-5" />,
      title: "Research",
      items: ["Medical AI", "Explainable AI (XAI)","Computer Vision","Self Supervised Learning", "Multimodal Learning", "Image Analysis"],
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Web Development",
      items: ["JavaScript","React", "Vite", "Tailwind CSS", "FastAPI",, "UI/UX Design"],
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: "Databases",
      items: ["PostgreSQL", "SQLite", "Supabase"],
    },
    {
      icon: <Languages className="h-5 w-5" />,
      title: "Languages",
      items: ["Arabic — Native", " English — Professional"," French — Advanced"],
    },
  ];

  return (
    <Section
      id="skills"
      eyebrow="Technical Stack"
      title="Skills & Expertise"
      subtitle="Combining research-grade AI expertise with production-ready full-stack engineering to build impactful real-world solutions."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="glass glow-hover rounded-2xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-blue-accent/20 to-purple-accent/20 text-cyan-accent">
                {g.icon}
              </div>
              <h3 className="font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-blue-accent/40 hover:text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
const projects = [
  {
    title: "AI-Powered Diagnosis for Macular OCT Imaging",
    desc:
      "Developed a multimodal deep learning framework for retinal disease diagnosis by integrating OCT imaging and clinical metadata. The system leverages Swin Transformers, Dual Cross-Attention Fusion, Self-Supervised Learning, Gated Attention Multiple Instance Learning (GA-MIL), retinal layer segmentation, and Explainable AI techniques to deliver accurate, interpretable, and clinically meaningful predictions.",
    tech: [
      "PyTorch",
      "Swin Transformer",
      "Self-Supervised Learning",
      "GA-MIL",
      "Multimodal Learning",
      "Medical AI",
      "Explainable AI",
      "Cross-Attention Fusion",
    ],
    img: projectOct,
    github: "https://github.com/Besmsala/oct-thesis",
  },

  {
    title: "RetinaAI Platform",
    desc:
      "A full-stack AI-powered retinal diagnosis platform designed for clinical workflows. The platform integrates patient management, secure authentication, diagnosis history tracking, analytics dashboards, and deep learning models, providing an end-to-end solution for intelligent ophthalmic decision support.",
    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Deep Learning",
      "Supabase",
      "Tailwind CSS",
      "Authentication",
      "Healthcare AI",
    ],
    img: projectRetina,
    github: "https://github.com/Besmsala/retinaai",
    demo: "https://youtu.be/bsGONMi3k6Q?si=OmB_tX2W7w40SNTD",
  },

  {
    title: "Automated Metadata Recovery from Macular OCT",
    desc:
      "Developed a deep learning framework for recovering patient metadata directly from retinal OCT scans. The project investigates Swin Transformers, hybrid CNN–Transformer architectures, and multi-task learning approaches to predict age, sex, and eye laterality, addressing missing-data challenges in large-scale ophthalmic biobanks.",
    tech: [
      "Swin Transformer",
      "Multi-Task Learning",
      "ResNet50",
      "OCT Imaging",
      "PyTorch",
      "Deep Learning",
      "Medical AI",
      "Metadata Recovery",
    ],
    img: projectManuscript,
    github: "https://github.com/Besmsala/metadata-recovery",
  },

  {
    title:
      "Nathal Manuscript Analysis – Friedrich Schiller University Jena, Germany",
    desc:
      "Applied computer vision and AI techniques to analyze historical handwritten manuscripts, including symbol segmentation, feature extraction, clustering, dimensionality reduction, and quantitative structural comparison with external handwritten and notational corpora to identify unique organizational patterns and hidden relationships within the manuscript.",
    tech: [
      "Computer Vision",
      "Unsupervised Learning",
      "Feature Extraction",
      "HDBSCAN",
      "CLIP",
      "OpenCV",
      "UMAP",
      "Pattern Discovery",
    ],
    img: projectFlutter,
    github: "https://github.com/Besmsala/Nathal-Maniscripts-Analysis",
  },
];

  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Selected Projects"
      subtitle="A mix of research prototypes and production systems."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl glass glow-hover"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="space-y-4 p-6">
              <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-blue-accent/20 bg-blue-accent/10 px-2.5 py-1 text-xs text-cyan-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
  <a
    href={p.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-lg glass px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10"
  >
    <Github className="h-4 w-4" /> GitHub
  </a>

  {p.demo && (
    <a
      href={p.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-accent to-purple-accent px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
    >
      <ExternalLink className="h-4 w-4" /> Live Demo
    </a>
  )}
</div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- RESEARCH ---------------- */

function Research() {
  const highlights = [
    "Novel dual cross-attention between OCT image tokens and clinical metadata embeddings.",
    "Swin Transformer backbone fine-tuned on macular OCT volumes with domain-specific augmentation.",
    "Improved diagnostic accuracy over single-modality baselines with interpretable attention maps.",
    "Evaluated across multiple public macular disease datasets.",
  ];

  const methodology = [
    { step: "01", title: "Data Curation", text: "Aligning OCT volumes with structured clinical metadata." },
    { step: "02", title: "Encoders", text: "Swin Transformer, EffienNet-B0 with SimCLR and Gated Attention Multiple Instance Learning for vision, MLP encoder for tabular data." },
    { step: "03", title: "Fusion", text: "Bidirectional cross-attention enables mutual conditioning." },
    { step: "04", title: "Explainability", text: "Attention Rollout, Grad-CAM, Integrated Gradients, and retinal layer segmentation for interpretable and clinically trustworthy AI predictions." },
  ];

  return (
    <Section
      id="research"
      eyebrow="Research"
      title="Final Year Project Thesis"
      subtitle="AI-Powered Diagnosis for Macular OCT Imaging : multimodal deep learning framework integrating OCT and clinical data."
    >
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="glass glow-hover space-y-6 rounded-2xl p-8">
          <div className="flex items-start gap-3">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-blue-accent/20 to-purple-accent/20 text-cyan-accent">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Abstract</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                This research presents a comprehensive AI framework for retinal disease diagnosis using Optical Coherence Tomography (OCT). The proposed approach combines multimodal deep learning by integrating OCT imaging with patient clinical metadata, leveraging transformer-based architectures and dual cross-attention fusion to capture complementary information across modalities. To address real-world clinical challenges, the framework further incorporates self-supervised feature learning and a hierarchical Gated Attention Multiple Instance Learning (GA-MIL) strategy for patient-level diagnosis from volumetric OCT examinations under weak supervision. Explainable AI techniques, including Grad-CAM and Integrated Gradients, provide transparent and clinically meaningful insights into model predictions. The resulting system was deployed as a full-stack clinical decision support platform, bridging advanced AI research and practical healthcare applications.

              </p>
            </div>
          </div>

          <div>
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cyan-accent">
              <Sparkles className="h-4 w-4" /> Research Highlights
            </h4>
            <ul className="space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

         <div className="flex gap-4">
  <a
    href="/thesis.pdf"
    download
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-accent to-purple-accent px-5 py-3 font-medium text-white shadow-lg  transition-transform hover:scale-105"
  >
    <Download className="h-4 w-4" />
    Download Thesis
  </a>

  <a
    href="/paper.pdf"
    download
    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-accent to-purple-accent px-5 py-3 font-medium text-white shadow-lg  transition-transform hover:scale-105"
  >
    <Download className="h-4 w-4" />
    Download Master Paper
  </a>
</div>
        </div>

        <div className="glass glow-hover rounded-2xl p-8">
          <h3 className="mb-6 font-display text-xl font-semibold">Methodology</h3>
          <ol className="space-y-5">
            {methodology.map((m) => (
              <li key={m.step} className="flex gap-4">
                <span className="font-display text-2xl font-bold text-gradient-cyan">
                  {m.step}
                </span>
                <div>
                  <p className="font-semibold">{m.title}</p>
                  <p className="text-sm text-muted-foreground">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- EXPERIENCE ---------------- */

function Experience() {
  const items = [
        {
      icon: <GraduationCap className="h-4 w-4" />,
      tag: "Baccalaureate",
      title: "Baccalaureate in Mathematics",
      org: "High School · 2021",
      text: "Baccalaureate Degree with 17.73/20",
    },
    {
      icon: <GraduationCap className="h-4 w-4" />,
      tag: "Higher Education",
      title: "Master's in Artificial Intelligence: very good honors, 17.75/20",
      org: "University · 2023 – 2026",
      text: "Focus on AI, Computer Vision, Deep Learning, and Full stack developement",
    },

    {
      icon: <Briefcase className="h-4 w-4" />,
      tag: "Professional Internship",
      title: "Algerian Space Agency ASAL",
      org: "Independent · 2024 – 2025",
      text: "worked on artificial intelligence and data analysis projects involving machine learning, computer vision, and geospatial data processing for real-world applications.",
    },

    {
      icon: <Briefcase className="h-4 w-4" />,
      tag: "Internship",
      title: "Algérie Télécom",
      org: "Independent · 2025",
      text: "Completed an internship at Algérie Télécom, gaining hands-on experience in telecommunications systems, network infrastructure, and information technology operations while developing practical problem-solving and technical skills.",
    },
    {
      icon: <Award className="h-4 w-4" />,
      tag: "Achievement",
      title: "Academic Excellence",
      org: "Recognized contributions to AI research",
      text: "Consistent top performance across ML, CV, and research courses.",
    },
  ];

  return (
    <Section
      id="experience"
      eyebrow="Timeline"
      title="Experience & Achievements"
      subtitle="A blend of academic depth and applied engineering."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-accent via-purple-accent to-transparent md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`relative md:flex md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 top-5 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-blue-accent to-purple-accent ring-4 ring-background md:left-1/2" />

              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="glass glow-hover rounded-2xl p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-accent/10 px-2 py-0.5 text-xs font-medium text-cyan-accent">
                      {it.icon} {it.tag}
                    </span>
                  </div>
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-xs text-muted-foreground">{it.org}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- CERTIFICATIONS ---------------- */

function Certifications() {
  const certs = [
  {
    title: "IELTS Academic Band 6.5",
    issuer: "British Council",
    file: "/IELTS.pdf",
  },
  {
    title: "International Training Workshop on Artificial Intelligence",
    issuer: "China–Arab States Technology Transfer Center",
    file: "/china.jpg",
  },
  {
    title: "Hackathon ForsatiC 2025",
    issuer: "Algérie Télécom",
    file: "/forsa.jpg",
  },
  {
    title: "Hackathon AgriChallenge 2025",
    issuer: "ENSA × ENSIA",
    file: "/agri.jpg",
  },
  {
    title: "ASAL Internship Certificate",
    issuer: "Algerian Space Agency (ASAL)",
    file: "/asal.pdf",
  },
  {
    title: "Final Year Project Internship",
    issuer: "Ibn El Haitham Clinical Center",
    file: "/certificates/ibn-el-haitham.pdf",
  },
];

  return (
    <Section
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      subtitle="Continuous learning across AI research and modern software engineering."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <div
            key={c.title}
            className="glass glow-hover flex items-start gap-4 rounded-2xl p-5"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cyan-accent/20 to-blue-accent/20 text-cyan-accent">
              <Award className="h-5 w-5" />
            </div>
           <div className="min-w-0 flex-1">
  <h3 className="font-semibold leading-tight">{c.title}</h3>
  <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>

  <a
    href={c.file}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 inline-flex items-center rounded-lg bg-gradient-to-r from-blue-accent to-purple-accent px-3 py-1.5 text-xs font-medium text-white"
  >
    View
  </a>
</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/*-------------PUBLICATIONS---------------*/
function Publications() {
  const publications = [
    {
      title: "Automated Metadata Recovery from Macular OCT Using Deep Learning",
      type: "Conference Paper",
      year: "2026",
      description: "Published in Springer LNCS (CSA 2026), this research explores automated recovery of patient metadata from retinal OCT images using transformer-based and multi-task deep learning models, helping address missing data challenges in large-scale ophthalmic biobanks.",
      link: "/recovery_paper.pdf",
    },
    {
      title: "Multimodal Deep Learning for Retinal Disease Diagnosis",
      type: "Journal Paper",
      year: "2026",
      description: "Master's thesis on multimodal AI for retinal disease diagnosis, combining OCT imaging, clinical metadata, transformer-based deep learning, and explainable AI. A journal publication based on this work is currently under preparation and will be submitted soon.",
      link: "/paper.pdf",
    },
    {
      title: "A Comprehensive Review of AI and Deep Learning for Macular OCT Analysis",
      type: "Survey Paper",
      year: "2025",
      description: "Published survey paper providing a comprehensive review of deep learning methods for retinal OCT analysis, including segmentation, classification, multimodal learning, vision transformers, explainable AI, and clinical applications.",
      link: "/srv.pdf",
    },
    {
      title: "Intership Report",
      type: "academic writting",
      year: "2024",
      description: "Internship report authored during my placement at the Algerian Space Agency (ASAL), highlighting practical applications of artificial intelligence, remote sensing, and satellite image analysis.",
      link: "/asal_report.pdf",
    },
  ];

  return (
  <Section
    id="publications"
    eyebrow="Scientific Writing"
    title="Publications & Academic Writing"
    subtitle="A selection of research publications and academic contributions."
  >
    <div className="space-y-6">
      {publications.map((pub) => (
        <div
          key={pub.title}
          className="glass glow-hover rounded-2xl p-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h3 className="text-xl font-semibold">{pub.title}</h3>
              <p className="text-sm text-muted-foreground">
                {pub.type} • {pub.year}
              </p>
            </div>

            <a
              href={pub.link}
              download
              className="rounded-xl bg-gradient-to-r from-blue-accent to-purple-accent px-4 py-2 text-sm font-medium text-white"
            >
              view PDF
            </a>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {pub.description}
          </p>
        </div>
      ))}
    </div>
  </Section>
);
}
/* ---------------- CONTACT ---------------- */

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Build Something"
      subtitle="Open to research collaborations, engineering and jobs opportunities."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="glass rounded-2xl p-8">
          <h3 className="font-display text-xl font-semibold">Contact Info</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out via email, phone or any of the platforms below.
          </p>

          <div className="mt-6 space-y-3">
            <ContactLink
              href="mailto:besmala.bendif@ensia.edu.dz"
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="besmala.bendif@ensia.edu.dz"
            />
             <ContactLink
              href="mailto:besmala.bendif@ensia.edu.dz"
              icon={<PhoneIcon className="h-4 w-4" />}
              label="Phone Number"
              value="+213 795468254"
            />
            <ContactLink
              href="https://www.linkedin.com/in/besmala-bendif-884006276/"
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
              value="linkedin.com/in/besmala"
            />
            <ContactLink
              href="https://github.com/Besmsala"
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
              value="github.com/besmala"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-8 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Subject" name="subject" required />
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-blue-accent/60 focus:bg-white/[0.05]"
              placeholder="Contact me if you want to hire me or for a research collaboration opportunity..."
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-accent to-purple-accent px-6 py-3 font-medium text-white shadow-lg  transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && <ArrowRight className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-accent/60 focus:bg-white/[0.05]"
      />
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-blue-accent/30 hover:bg-white/[0.05]"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue-accent/20 to-purple-accent/20 text-cyan-accent">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate text-sm font-medium">{value}</p>
      </div>
    </a>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Besmala Bendif. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          <SocialIcon href="https://www.linkedin.com/in/besmala-bendif-884006276/" icon={<Github className="h-4 w-4" />} label="GitHub" />
          <SocialIcon href="https://linkedin.com" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
          <SocialIcon href="mailto:besmala.bendif@ensia.edu.dz" icon={<Mail className="h-4 w-4" />} label="Email" />
        </div>
      </div>
    </footer>
  );
}
