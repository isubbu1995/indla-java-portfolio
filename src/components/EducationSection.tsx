
const EducationSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-indigo-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              Sri Krishna Devaraya University
            </h3>
            <p className="text-xl text-purple-400 mb-2">
              B.Sc. in Computer Science
            </p>
            <p className="text-gray-400 mb-1">
              Jun 2013 – Apr 2016
            </p>
            <p className="text-gray-400">
              Anantapuramu, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
