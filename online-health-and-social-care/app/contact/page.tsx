export default function Contact() {
    return (
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-lg mt-4">Email: support@healthcare.com</p>
        {/* About Section */}
<div className="abtbg">
  <div className="maa mt-36 pb-20">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: About Text */}
        <div className="md:w-7/12 w-full text-center md:text-left px-6">
          <h1 className="text-4xl font-bold">About Us</h1>
          <br />
          <h5 className="text-xl leading-relaxed">
            Quality is central to our business ethos, and we work effortlessly to attain the best results for members of Learning Connect, whether through our online training, in-house (face-to-face training) delivery, central administration, or support services.
          </h5>
        </div>
        {/* Right: About Image */}
        <div className="md:w-5/12 w-full flex justify-center">
          <img className="img-fluid rounded-lg max-w-[400px]" src="https://www.learningconnect.co.uk/frontend/images/inner-page/ab-2.jpg" alt="About Us" />
        </div>
      </div>
    </div>
  </div>

  {/* Our Role Section */}
<div className="maa bg-gray-300 py-20">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Left: Role Image */}
      <div className="md:w-5/12 w-full flex justify-center">
        <img className="img-fluid rounded-lg max-w-[400px]" src="https://www.learningconnect.co.uk/frontend/images/inner-page/1.jpg" alt="Our Role" />
      </div>
      {/* Right: Role Text */}
      <div className="md:w-7/12 w-full text-center md:text-left px-6">
        <h2 className="text-4xl font-bold">Our Role</h2>
        <br />
        <h5 className="text-xl leading-relaxed">
          Our role is to guide the continuing transformation of our technical and vocational education system, leading to ever-improving learner outcomes, a better-skilled workforce, and a stronger economy and society.
        </h5>
      </div>
    </div>
  </div>
</div>


  {/* Our Approach Section */}
  <div className="maa py-24 bg-white">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Approach Text */}
        <div className="md:w-7/12 w-full text-center md:text-left px-6">
          <h2 className="text-4xl font-bold">Our Approach</h2>
          <br />
          <h5 className="text-xl leading-relaxed">
            We take an evidence-based and sector-inclusive approach to Continuous Professional Development (CPD) support in the health and social care sector. Our extensive research ensures that our training aligns with industry needs.
          </h5>
        </div>
        {/* Right: Approach Image */}
        <div className="md:w-5/12 w-full flex justify-center">
          <img className="img-fluid rounded-lg max-w-[400px]" src="https://www.learningconnect.co.uk/frontend/images/inner-page/ab-3.jpg" alt="Our Approach" />
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    );
  }