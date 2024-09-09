import BootstrapSVG from '../assets/BootstrapLogo.svg';
import CanvaLogo from '../assets/CanvaSVG.svg';
import CSSLogo from '../assets/CssSVG.svg'
import FigLogo from '../assets/FigLogo.svg'
import GitLogo from '../assets/GitSVG.svg'
import GithubLogo from '../assets/GithubLogo.svg'
import HtmlLogo from '../assets/HtmlLogo.svg'
import AiLogo from '../assets/AdobeIll.svg'
import JSLogo from '../assets/JSLogo.svg'

//https://techicons.dev/

export default function SVGbg() {
  return(
    <section>
      <img src={BootstrapSVG} alt="bootstrap" className="w-20"/>
      <img src={CanvaLogo} alt="Canva" className="w-20"/>
      <img src={CSSLogo} alt="CSS" className="w-20"/>
      <img src={FigLogo} alt="Figma" className="w-20"/>
      <img src={GitLogo} alt="Git" className="w-20"/>
      <img src={GithubLogo} alt="GitHub" className="w-20"/>
      <img src={HtmlLogo} alt="HTML" className="w-20"/>
      <img src={AiLogo} alt="Adobe Illustrator" className="w-20"/>
      <img src={JSLogo} alt="JavaScript" className="w-20"/>
    </section>
  )
}