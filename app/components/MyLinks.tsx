import LetterBoxd from '../icons/LetterBoxedLogo'
import Linkedin from '../icons/LinkedinIcon'
import Github from '../icons/GithubIcon'
import ExternalLink from './ExternalLink'

const MyLinks = () => {
  return (
    <div className="delayed-fade-animation flex lg:flex-col flex-row content-center m-auto">
      <ExternalLink href="https://www.linkedin.com/in/monte-yoon-a1108114a/">
        <Linkedin />
      </ExternalLink>
      <ExternalLink href="https://github.com/Yontemoon">
        <Github />
      </ExternalLink>
      <ExternalLink href="https://letterboxd.com/Holycrabs/">
        <LetterBoxd />
      </ExternalLink>
    </div>
  )
}

export default MyLinks
