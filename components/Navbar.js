import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import  {useRouter}  from 'next/router';


function Navbar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between shadow-lg h-20 px-10 py-3 sticky top-0 left-0 z-50 bg-white">
      {/* right side */}
      <div className="flex items-center">
        <div className="h-10 object-contain cursor-pointer" onClick={()=> router.push("/")}>
          <img src="/logo.svg" alt="" className="h-10 object-contain" />
        </div>
        <div className="h-10 object-contain mr-10">
          <img src="/vision.svg" alt="" className="h-10 object-contain" />
        </div>
      </div>

      {/* left side  */}

      <div className="flex ">
          <Link activeClass="active" to="filters" spy={true} smooth={true} offset={-100} duration={500}>

          <button className="outline-none bg-green-500 text-white px-5 py-2 rounded-md"> الأوقاف الخيرية</button>
        </Link>
          <button onClick= {()=> router.push("/login")} className="outline-none mr-5 bg-green-500 text-white px-5 py-2 rounded-md">تسجيل الدخول</button>

      </div>
    </div>
  );
}

export default Navbar;
