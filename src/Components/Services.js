import { services } from "../data";

export const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for all your real estate needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6">{service.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 mb-6">{service.description}</p>
              {/* Call-to-Action */}
              <button className="bg-violet-700 text-white text-sm font-medium py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
