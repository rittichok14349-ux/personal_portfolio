const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma', 'Git'];

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold mb-10">ทักษะของฉัน</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map(skill => (
        <span key={skill} className="bg-sky-100 text-sky-800 px-6 py-3 rounded-full font-medium shadow">
          {skill}
        </span>
      ))}
    </div>
  </section>
);
export default Skills;
