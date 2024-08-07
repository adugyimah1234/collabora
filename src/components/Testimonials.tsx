const testimonials = [
    {
      name: "John Doe",
      role: "Student",
      content: "CollaboraLearn has completely transformed my learning experience. The group study sessions are fantastic!",
      image: "src/assets/testimonial1.jpg"
    },
    {
      name: "Jane Smith",
      role: "Tutor",
      content: "Teaching on CollaboraLearn has been a rewarding experience. The platform is user-friendly and well-organized.",
      image: "src/assets/testimonial2.jpg"
    }
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-100 shadow-md rounded-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg mb-4">{testimonial.content}</p>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  