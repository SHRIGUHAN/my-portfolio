const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-background flex items-center justify-center text-black bg-pattern-dots border-b-8 border-black"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 px-4">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 font-cabinet">About Me</h2>
          <h3 className="text-lg leading-relaxed font-cabinet">
            Hi! I'm Shriguhan P, working as a Junior Engineer at Mindsprint and I am a passionate software developer who loves crafting
            innovative solutions. With an entrepreneurial mindset and a knack for coding, I aim to build impactful applications that bridge
            creativity and technology.
          </h3>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="Casualpic.jpg"
            alt="About Me"
            className="rounded-lg shadow-lg max-w-[1000px] md:max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

