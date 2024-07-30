import Card from "./Card";

const About = () => {
  return (
    <div className="px-4 md:px-16 pb-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-center md:text-left text-blue-600 underline">
        About Us
      </h1>

      <p className="text-center md:text-left text-lg font-medium text-gray-700 pt-5 max-w-3xl mx-auto md:mx-0">
        At Finchat, we leverage cutting-edge AI technology to provide
        personalized financial advice. Our chatbot is designed to assist you
        with financial planning and investment queries, making expert advice
        accessible and affordable.
      </p>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 pt-20">
        <Card
          title="Expert Advice"
          description="Access high-quality financial insights and recommendations tailored to your needs."
        />
        <Card
          title="Real-time Analysis"
          description="Get up-to-date information and analysis to make informed financial decisions."
        />
        <Card
          title="User Friendly"
          description="Our intuitive interface ensures that getting financial advice is easy and convenient."
        />
      </div>
    </div>
  );
};

export default About;
