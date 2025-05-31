
const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-indigo-500/20">
          <div className="text-lg leading-relaxed text-gray-300 space-y-6">
            <p>
              I'm a passionate <span className="text-indigo-400 font-semibold">Java Backend Developer</span> with{" "}
              <span className="text-purple-400 font-semibold">5.7 years</span> of experience crafting robust, 
              scalable backend systems. My work spans high-performance microservices, event-driven architectures, 
              and secure APIs using Spring Boot, Kafka, Docker, and GraphQL.
            </p>
            <p>
              I'm solution-focused, collaborative, and constantly evolving to meet modern tech demands. 
              My expertise lies in building enterprise-grade applications that handle complex business logic 
              while maintaining high performance and security standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
