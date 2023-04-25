import fb from '../../assets/icons8-facebook-100.png'
import github from '../../assets/icons8-github-128.png'
import twitter from '../../assets/icons8-twitter-100.png'
import "./footer.css"

const Footer = () => {
  return (
   <div className='main-footer'>
      <footer id="footer">
         <div id="socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
               <img src={fb} alt='facebook' width="40px" height="40px" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
               <img src={twitter} alt='twitter' width="40px" height="40px" />
            </a>
            <a href="https://github.com/ashen99" target="_blank" rel="noreferrer">
               <img src={github} alt='github' width="40px" height="40px" />
            </a>
         </div>
         <div id="copyright">
            <p>Copyright &copy; 2023. All Rights Reserved By Ashen Perera</p>
         </div>
   </footer>
   </div>
    
  );
};

export default Footer;
