const Portfolio = () => {
    const projects = [
      { title: 'E-Commerce Platform', description: 'Built using Spring Boot and MySQL' },
      { title: 'Portfolio Website', description: 'React.js and TailwindCSS-based design' },
    ];
  
    return (
      <section className="py-20 bg-background bg-pattern-dots border-b-8 border-black font-cabinet" id="portfolio">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">Portfolio</h2>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 text-center"
            >
              <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Portfolio;
