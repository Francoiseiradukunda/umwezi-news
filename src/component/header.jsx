import img from "../assets/image/log.png"
function Header(){
return(
    <nav>
    <dev className="heading">
        <dev className="image-container">
<img src={img} alt=""/>
   </dev> 
    <dev className="links">
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Importance</a></li>
    <li><a href="#">Effect</a></li>
    <li><a href="#">Measures</a></li>
    <li><a href="#">Conclusion</a></li>
    <li><a href="#">Sign-Up</a></li>
    <li><a href="#">Login</a></li>

</ul>
    </dev>
    </dev>
    </nav>
)
    };
export default Header;