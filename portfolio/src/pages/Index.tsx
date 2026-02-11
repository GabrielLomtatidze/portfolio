import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Sparkles } from "lucide-react";
import { Button } from "../../src/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../src/components/ui/card";
import { Badge } from "../../src/components/ui/badge";
import { Input } from "../../src/components/ui/input";
import { Textarea } from "../../src/components/ui/textarea";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    frontend: ["HTML", "CSS", "SCSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "React Native", "Next.js"],
    backend: ["Express.js", "PHP", "Node.js"],
    languages: ["Python", "Java"],
  };

  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive web dashboard for data visualization and analytics with real-time updates and interactive charts.",
      image: "https://mgx-backend-cdn.metadl.com/generate/images/964620/2026-02-11/f5dbd383-e051-4275-8069-5fbd57cde0f6.png",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      link: "#",
    },
    {
      title: "Mobile Finance App",
      description: "Cross-platform mobile application for personal finance management with expense tracking and budget planning.",
      image: "https://mgx-backend-cdn.metadl.com/generate/images/964620/2026-02-11/deb271ab-3db8-4769-82f2-2d7199f149ac.png",
      tech: ["React Native", "TypeScript", "Redux"],
      link: "#",
    },
    {
      title: "Team Collaboration Platform",
      description: "Real-time collaboration tool for remote teams with project management, chat, and file sharing capabilities.",
      image: "https://mgx-backend-cdn.metadl.com/generate/images/964620/2026-02-11/1641920b-5fbe-4a5e-9536-e971a7382a6a.png",
      tech: ["Next.js", "Express.js", "Socket.io", "PostgreSQL"],
      link: "#",
    },
  ];

  const experiences = [
    {
      year: "2024 - Present",
      title: "Full Stack Developer",
      company: "Freelance & Team Projects",
      description: "Working on various web and mobile applications, collaborating with international teams on complex projects.",
    },
    {
      year: "2023 - 2024",
      title: "Frontend Developer",
      company: "Tech Startup",
      description: "Developed responsive web applications using React and Next.js, implemented modern UI/UX designs.",
    },
    {
      year: "2022 - 2023",
      title: "Junior Developer",
      company: "Software Agency",
      description: "Started professional journey building websites and learning industry best practices.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent flex items-center gap-2"
            >
              <Code2 className="w-6 h-6 text-blue-400" />
              Portfolio
            </motion.div>
            <div className="hidden md:flex gap-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? "text-blue-400 font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
        <motion.div
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 inline-block"
            >
              <Sparkles className="w-16 h-16 text-blue-400 animate-pulse" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Full Stack Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              3 Years of Experience | Computer Science Student | European University
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <img
                  src="https://mgx-backend-cdn.metadl.com/generate/images/964620/2026-02-11/906b3f5d-88bf-4fcd-901f-1abf71b0d9e5.png"
                  alt="Coding Setup"
                  className="rounded-2xl shadow-2xl relative z-10 border border-blue-500/30"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full stack developer from Georgia with 3 years of professional experience in building modern web and mobile applications. Currently pursuing Computer Science at a European University, I combine academic knowledge with real-world expertise.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My journey in software development has been driven by curiosity and a love for creating elegant solutions to complex problems. I've worked on diverse projects both independently and as part of international teams, delivering high-quality applications that users love.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in modern JavaScript frameworks and have a strong foundation in both frontend and backend technologies. I'm always eager to learn new technologies and stay updated with the latest industry trends.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-slate-900/50 border-blue-500/30 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 group">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-blue-500/50 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:border-transparent transition-all cursor-pointer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-slate-900/50 border-purple-500/30 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 group">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-400 flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-purple-500/50 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all cursor-pointer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="bg-slate-900/50 border-pink-500/30 hover:border-pink-500 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-pink-500/20 group">
                  <CardHeader>
                    <CardTitle className="text-2xl text-pink-400 flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                      Languages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-pink-500/50 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:border-transparent transition-all cursor-pointer"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <Card className="bg-slate-900/50 border-blue-500/30 overflow-hidden hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/30 h-full group">
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-blue-500 text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-8 pb-12 border-l-2 border-blue-500/30 last:pb-0 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-slate-950"
                  />
                  <div className="bg-slate-900/50 p-6 rounded-lg border border-blue-500/30 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="text-blue-400 font-semibold mb-2">{exp.year}</div>
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-gray-400 mb-3">{exp.company}</div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Work Together</CardTitle>
                  <CardDescription className="text-gray-400">
                    Have a project in mind? Feel free to reach out!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div>
                      <Input
                        placeholder="Your Name"
                        className="bg-slate-950/50 border-blue-500/30 focus:border-blue-500 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-slate-950/50 border-blue-500/30 focus:border-blue-500 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="bg-slate-950/50 border-blue-500/30 focus:border-blue-500 text-white placeholder:text-gray-500"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all">
                      Send Message
                    </Button>
                  </form>
                  <div className="flex justify-center gap-6 mt-8">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950/80 border-t border-blue-500/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 Portfolio. Built with React, TypeScript, Tailwind CSS & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}