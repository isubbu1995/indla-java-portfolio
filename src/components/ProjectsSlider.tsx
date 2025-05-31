
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectsSlider = () => {
  const projects = [
    {
      title: "CPE – Edward Jones",
      subtitle: "Client Proposal & Enrollment",
      content: "Developed features for goal-based proposals, e-signature workflows, and proposal activation."
    },
    {
      title: "WFS – Walmart", 
      subtitle: "Fulfillment Orchestration",
      content: "Designed MongoDB reconciliation, static data maintenance, and dynamic persistence layers."
    },
    {
      title: "Smart Agent – eBay",
      subtitle: "Segmented Campaigns & Analytics", 
      content: "Created SDKs, business logic, and persistence layers for global behavioral tracking."
    },
    {
      title: "GS-RCM – KPMG",
      subtitle: "Regulatory Compliance Monitoring",
      content: "Developed rule parsing and real-time update systems from XML, PDF, HTML."
    },
    {
      title: "LART – Amdocs",
      subtitle: "Laboratory Asset Management",
      content: "Built asset relocation approval workflows using Spring MVC, JPA, and REST."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Key Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <CardTitle className="text-indigo-400">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-purple-400 font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {project.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSlider;
