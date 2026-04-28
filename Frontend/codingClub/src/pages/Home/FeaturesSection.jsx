import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Learn & Grow",
      desc: "Regular workshops and coding sessions to enhance your programming skills and learn new technologies."
    },
    {
      title: "Collaborate",
      desc: "Work with passionate peers on exciting projects and build lasting connections in the tech community."
    },
    {
      title: "Innovate",
      desc: "Turn your ideas into reality through hackathons, competitions, and innovative project challenges."
    },
    {
      title: "Compete",
      desc: "Participate in coding contests, hackathons, and challenges to test your skills and win prizes."
    }
  ];

  return (
    <div className="Mid_container">
      <div className="About_us_div">
        <h1>About Us</h1>
        <p>
          The CSE Coding Club is a vibrant community of passionate programmers, innovators, and tech enthusiasts.<br />
          Our mission is to foster a collaborative environment where students can learn, create, and excel in the world of computer science and software development.
        </p>
      </div>

      <div className="Card_s d-flex flex-row justify-content-center flex-wrap">
        {features.map((feature, index) => (
          <div className="card_1" key={index}>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUteG1sLWljb24gbHVjaWRlLWNvZGUteG1sIj48cGF0aCBkPSJtMTggMTYgNC00LTQtNCIvPjxwYXRoIGQ9Im02IDgtNCA0IDQgNCIvPjxwYXRoIGQ9Im0xNC41IDQtNSAxNiIvPjwvc3ZnPg=="
              className="Img_s"
              alt={feature.title}
            />
            <h1 className="Heading_card_1">{feature.title}</h1>
            <p className="card_para">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;