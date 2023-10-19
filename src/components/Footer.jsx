const Footer = () => {
  return (
    <footer className="w-full bg-blue-800 text-white py-4 rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2023 AI-Sypnosis</p>
        </div>
        <div>
          <a href="#" className="text-white mr-4">
            Home
          </a>
          <a href="#" className="text-white mr-4">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
