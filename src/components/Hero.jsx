// import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src="/favicon.png"
          alt="sypn_logo"
          className="w-16 object-contain"
        />

        <button
          type="button"
          onClick={() =>
            window.open("https://www.linkedin.com/in/renzo-silva/", "_blank")
          }
          className="blue-bg rounded-md"
        >
          Linkedin
        </button>
      </nav>

      <h1 className="head_text">
        Sypnosis Articles with <br className="max-md:hidden" />
        <span className="blue_gradient ">OpenAI GPT-3.5</span>
      </h1>
      <h2 className="desc">
        Unlock Clarity with SypnoScan: Your Guide to Clear, Concise Summaries -
        An Open-Source Article Sypnosis Solution
      </h2>
    </header>
  );
};

export default Hero;
