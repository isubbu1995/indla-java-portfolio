
const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Software Engineer @ EPAM Systems",
      date: "May 2024 – Oct 2024",
      location: "Bangalore, India"
    },
    {
      title: "Software Engineer @ Sagarsoft",
      date: "May 2023 – May 2024", 
      location: "Hyderabad, India"
    },
    {
      title: "Senior Associate Tech L1 @ Publicis Sapient",
      date: "Apr 2022 – Nov 2022",
      location: "Bangalore, India"
    },
    {
      title: "Software Engineer @ Xoriant",
      date: "Sep 2021 – Apr 2022",
      location: "Bangalore, India"
    },
    {
      title: "Software Associate @ Turbito Infotainment",
      date: "Aug 2018 – Sep 2021",
      location: "Hyderabad, India"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-indigo-500 transition-colors">
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-medium mb-1">
                    {exp.date}
                  </p>
                  <p className="text-gray-400">
                    {exp.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
