
const SkillsGrid = () => {
  const skillCategories = [
    {
      title: "Languages",
      tags: ["Java 7–9", "SQL", "MongoDB"]
    },
    {
      title: "Frameworks", 
      tags: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "AOP"]
    },
    {
      title: "Microservices & Messaging",
      tags: ["Kafka", "RabbitMQ", "Axon", "Eureka", "Feign", "WebClient"]
    },
    {
      title: "Security",
      tags: ["Spring Security 6", "JWT", "OAuth2", "Keycloak"]
    },
    {
      title: "DevOps & Observability", 
      tags: ["Docker", "Kubernetes", "Prometheus", "Grafana", "Helm"]
    },
    {
      title: "Frontend & Tools",
      tags: ["HTML", "CSS", "Thymeleaf", "Postman", "Maven"]
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 text-gray-300 rounded-full text-sm border border-indigo-500/30 hover:border-indigo-400 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
