const services = [
  {
    title: "Student Visa Assistance",
    description: "Navigate visa processes seamlessly.",
    image: "https://i.ibb.co.com/fGHgbYt/img3.jpg",
  },
  {
    title: "Work Abroad Opportunities",
    description: "Find work placements overseas.",
    image: "https://i.ibb.co.com/tK10bJt/img2.jpg",
  },
  {
    title: "Living Abroad Guidance",
    description: "Expert help for settling abroad.",
    image: "https://i.ibb.co.com/t2xW4fr/img1.jpg",
  },
];

export default function Services() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
