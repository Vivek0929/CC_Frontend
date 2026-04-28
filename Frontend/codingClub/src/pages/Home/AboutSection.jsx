import React from 'react';

const AboutSection = () => {
  return (
    <section className="About_us_section">
      <div className="About_us">
        <div className="About_us_section">
          <h1 className="About_us_head">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXJzLWljb24gbHVjaWRlLXVzZXJzIj48cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIvPjxwYXRoIGQ9Ik0xNiAzLjEyOGE0IDQgMCAwIDEgMCA3Ljc0NCIvPjxwYXRoIGQ9Ik0yMiAyMXYtMmE0IDQgMCAwIDAtMy0zLjg3Ii8+PGNpcmNsZSBjeD0iOSIgY3k9IjciIHI9IjQiLz48L3N2Zz4="
              className="About_us_img"
              alt="about"
            />
            About Us
          </h1>
          <div className="About_us_para_container">
            <p className="para_for_end_cards_in_about_us">
              CSE Coding Club is dedicated to fostering a vibrant coding community. We organize events, workshops, and hackathons to help members enhance their skills and connect with like-minded individuals.<br /><br />
              The Coding Club is a collaborative community dedicated to helping students strengthen their programming skills and explore the world of technology...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;