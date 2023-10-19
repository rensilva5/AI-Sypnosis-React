const Footer = () => {
  return (
    <footer className="w-full bg-blue-800 text-white py-4 rounded-md blue-bg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2023 AI-Sypnosis. All rights reserved</p>
        </div>
        <div>
          <a
            href="https://github.com/rensilva5/AI-Sypnosis-React"
            className="text-white mr-4"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/renzo-silva/"
            className="text-white mr-4"
          >
            Linkedin
          </a>
          <a href="https://renzosilva.net/" className="text-white">
            renzosilva.net
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
