import Xlogo from '@assets/x-logo.png';
import LinkedInLogo from '@assets/linkedin-logo.png';

function socialMedia() {
  return (
    <section className="logos">
      <div className="x-logo">
        <header className="absolute top-9 left-20">
          <img className="w-9" src={Xlogo} alt="logoX" />
        </header>
      </div>

      <div className="linkedin-logo">
        <header className="absolute top-9 left-7">
          <img className="w-10" src={LinkedInLogo} alt="LogoLinkedIn" />
        </header>
      </div>
    </section>
  );
}

export default socialMedia;
