import GithubLogo from '@assets/github-logo.png';
import LinkedInLogo from '@assets/linkedin-logo.png';

function socialMedia() {
  return (
    <section className="logos">
      <div className="github-logo">
        <a href="https://github.com/Thibaut-Moncourtois">
          <header className="absolute top-10 left-20">
            <img className="w-10  " src={GithubLogo} alt="LogoGithub" />
          </header>
        </a>
      </div>

      <div className="linkedin-logo">
        <a href="https://www.linkedin.com/in/thibaut-moncourtois/">
          <header className="absolute top-10 right left-8  ">
            <img className="w-10" src={LinkedInLogo} alt="LogoLinkedIn" />
          </header>
        </a>
      </div>
    </section>
  );
}

export default socialMedia;
