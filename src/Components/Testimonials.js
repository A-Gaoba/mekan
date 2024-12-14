import { useEffect, useState, useCallback, useMemo } from "react";
import { testimonialsData } from "../data";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = testimonialsData;

  const itemsPerSlide = useMemo(() => ({ sm: 1, md: 2, lg: 3 }), []);

  const getVisibleItems = useCallback(() => {
    if (window.innerWidth >= 1024) return itemsPerSlide.lg;
    if (window.innerWidth >= 768) return itemsPerSlide.md;
    return itemsPerSlide.sm; // Small screen
  }, [itemsPerSlide]);

  const [visibleItems, setVisibleItems] = useState(getVisibleItems);

  useEffect(() => {
    const handleResize = () => setVisibleItems(getVisibleItems());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getVisibleItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + visibleItems) % testimonials.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleItems, testimonials.length]);

  const visibleTestimonials = Array.from({ length: visibleItems }).map(
    (_, idx) => testimonials[(currentIndex + idx) % testimonials.length]
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Testimonials
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            See what our customers are saying about us.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl p-8 shadow-lg overflow-hidden"
            >
              {/* Quotation Mark */}
              <div className="absolute top-4 left-4 text-blue-500 opacity-20 text-9xl">
                “
              </div>

              {/* Testimonial Content */}
              <div className="relative z-10">
                <p className="text-gray-800 italic text-lg leading-relaxed">
                  {testimonial.description}
                </p>
              </div>

              {/* Author Info */}
              <div className="relative z-10 mt-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls for Manual Navigation */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) =>
                  (prevIndex - visibleItems + testimonials.length) %
                  testimonials.length
              )
            }
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
          >
            ◀
          </button>
          <button
            onClick={() =>
              setCurrentIndex(
                (prevIndex) => (prevIndex + visibleItems) % testimonials.length
              )
            }
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};
