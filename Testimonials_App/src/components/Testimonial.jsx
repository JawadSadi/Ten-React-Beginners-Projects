import React, { useState } from "react";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  function handlePrev() {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  }
  function handleNext() {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  }
  return (
    <div className="testimonials">
      <div className="testimonials-qoute">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
