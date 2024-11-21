import { useEffect, useState } from 'react';

const Home = () => {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    const homeSection = document.getElementById('home');
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-background bg-pattern-dots text-black border-b-8 border-black"
    >
      <div className="text-center">
      <h1
          className={`text-[8vw] sm:text-[12vw] font-extrabold mb-4 font-cabinet tracking-tight overflow-hidden whitespace-nowrap border-r-4 pr-2 ${
            showTyping ? 'animate-typing' : ''
          }`}
          style={{ lineHeight: '1.5' }}
        >
          Shriguhan P
        </h1>
        <p className="text-2xl font-light font-cabinet">
          Software Developer | Innovator | Entrepreneur
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Home