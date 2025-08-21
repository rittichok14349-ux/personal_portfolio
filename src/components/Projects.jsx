const projects = [
  {
    title: 'Travel Landing Page',
    description: 'เว็บไซต์สำหรับบริษัทท่องเที่ยว ใช้ React และ Tailwind CSS',
    github: 'https://github.com/rittichok14349-ux/travel-landing',
    demo: 'https://travel-demo.netlify.app'
  },
  {
    title: 'To-Do App',
    description: 'แอปจัดการงานที่ออกแบบ UI ให้ใช้งานง่ายบนมือถือ',
    github: 'https://github.com/rittichok14349-ux/todo-app',
    demo: 'https://todo-rittichok.netlify.app'
  }
];

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-white">
    <h2 className="text-4xl font-bold text-center mb-10">ผลงาน</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(project => (
        <div key={project.title} className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="space-x-4">
            <a href={project.github} target="_blank" className="text-sky-600 hover:underline">GitHub</a>
            <a href={project.demo} target="_blank" className="text-sky-600 hover:underline">Live Demo</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default Projects;
