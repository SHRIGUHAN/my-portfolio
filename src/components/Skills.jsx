const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 bg-background flex flex-col items-center text-black bg-pattern-dots border-b-8 border-black" 
    >
      <h2 className="text-4xl font-bold mb-6 font-cabinet">My Skills</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-bold font-cabinet text-center">
          {/* Programming Skills */}
          <span className="text-black">
            Java
          </span>
          <span className="text-black">
            Spring Boot
          </span>
          <span className="text-black">
            HTML
          </span>
          <span className="text-black">
            CSS
          </span>
          <span className="text-black">
            JavaScript
          </span>
          <span className="text-black">
            MySQL
          </span>
          <span className="text-black">
            Node.js
          </span>
          {/* Other Skills */}
          <span className="text-black">
            Data Structures & Algorithms (DSA)
          </span>
          <span className="text-black">
            OOPs Concepts
          </span>
          <span className="text-black">
            Git
          </span>
          <span className="text-black">
            APIs
          </span>
          <span className="text-black">
            Jira
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
