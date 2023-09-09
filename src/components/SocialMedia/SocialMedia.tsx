import TwitterLogo from '@assets/twitter-logo.png';
import LinkedInLogo from '@assets/linkedin-logo.png';

function socialMedia() {
  return (
    <section className="logos">
      <div className="twitter-logo">
        <header className="absolute top-8 left-20">
          <img className="w-12" src={TwitterLogo} alt="logoX" />
        </header>
      </div>

      <div className="linkedin-logo">
        <header className="absolute top-9 right left-8  ">
          <img className="w-10" src={LinkedInLogo} alt="LogoLinkedIn" />
        </header>
      </div>
    </section>
  );
}

export default socialMedia;
