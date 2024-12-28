import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
// import { useLocalStorage } from "@common/useLocalStorage";

const DefaultHeader = ({ contactButton, cartButton }) => {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'menu-item-has-children';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  // const [themeUI, setThemeUIToggle] = useLocalStorage('theme_ui', '');
  const [desktopMenu, desktopMenuToggle] = useState(false);
  const [mobileMenu, mobileMenuToggle] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  
  const clickedCartButton = (e) => {
    e.preventDefault();
    setCartOpen(!cartOpen);
  }

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);
    document.getElementsByClassName('desktop-menu')[0].classList.toggle('open');
  }

  const clickedMobileMenu = (e) => {
    e.preventDefault();
    mobileMenuToggle(!mobileMenu);
    document.getElementsByClassName('mobile-menu')[0].classList.toggle('open');
  }
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle('active');
  }

  // const clickedThemeUI = () => {
  //   setThemeUIToggle(!themeUI);
    
  //   const lightmodeToggle = document.querySelector('#theme-icon');
  //   if ( themeUI ) {
  //     document.body.classList.remove('light-d');
  //     lightmodeToggle.src = '/images/sun.png';
  //   } else {
  //     document.body.classList.add('light-d');
  //     lightmodeToggle.src = '/images/moon.png';
  //   }
  // }

  // useEffect(() => {
  //   const lightmodeToggle = document.querySelector('#theme-icon');

  //   if ( themeUI ) {
  //     document.body.classList.add('light-d');
  //     lightmodeToggle.src = '/images/moon.png';
  //   } else {
  //     document.body.classList.remove('light-d');
  //     lightmodeToggle.src = '/images/sun.png';
  //   }
  // }, []);

  return (
    <header className="header-style-one" >
      <div className="container">
        <div className="row">
          <div className="desktop-nav" id="stickyHeader">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex-all justify-content-between">
                    <div className="header-logo">
                      <Link href="/">
                        <figure>
                          <img src={appData.header.logo.image} alt={appData.header.logo.alt} width={100} />
                        </figure>
                      </Link>
                    </div>
                    <div className="nav-bar">
                      <ul>
                        {navItems.map((item, key) => (
                        <li key={`headernav-item-${key}`} className={item.classes}>
                          <Link href={item.link}>{item.label}</Link>
                          {item.children != 0 &&
                          <ul className="sub-menu">
                            {item.children.map((subitem, key) => (
                            <li key={`headernavsub-item-${key}`} className={subitem.children != 0 ? "menu-item-has-children" : ""}>
                              <Link href={subitem.link}>{subitem.label}</Link>
                              {subitem.children != 0 &&
                              <ul className="sub-menu">
                                {subitem.children.map((subsubitem, key) => (
                                <li key={`headernavsub2-item-${key}`}><Link href={subsubitem.link}>{subsubitem.label}</Link></li>
                                ))}
                              </ul>
                              }
                            </li>
                            ))}
                          </ul>
                          }
                        </li>
                        ))}
                      </ul>
                      
                      <div className="extras">
                        {/* <div className="theme-color">
                          <img 
                            src={ 1 ? "/images/moon.png" : "/images/sun.png"} 
                            alt="theme color" 
                            id="theme-icon" 
                            onClick={() => clickedThemeUI() } 
                          />
                        </div> */}
                        <a href="#" id="mobile-menu" className={mobileMenu ? "menu-start open" : "menu-start"} onClick={ (e) => clickedMobileMenu(e) }>
                          <svg id="ham-menu" viewBox="0 0 100 100"> <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" /> <path className="line line2" d="M 20,50 H 80" /> <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /> </svg>
                        </a>
                      </div>

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-nav mobile-menu" id="mobile-nav">
            {/* <div className="res-log">
              <Link href="/">
                <img src={appData.header.logo.image} alt={appData.header.logo.alt} />
              </Link>
            </div> */}

            <ul>
              {navItems.map((item, key) => (
                <li key={`mobilenav-item-${key}`} className={item.classes}>
                  <Link href={item.link} style={{display: 'block'}} onClick={item.children != 0 ? (e) => clickedMobileMenuItemParent(e) : undefined}>
                    {item.label}
                  </Link>
                  {item.children != 0 &&
                    <ul className="sub-menu">
                      {item.children.map((subitem, key) => (
                        <li key={`mobilenavsub-item-${key}`} className={subitem.children != 0 ? "menu-item-has-children" : ""}>
                          <Link href={subitem.link} style={{display: 'block'}}>
                            {subitem.label}
                          </Link>
                          {subitem.children != 0 &&
                            <ul className="sub-menu">
                              {subitem.children.map((subsubitem, key) => (
                                <li key={`mobilenavsub2-item-${key}`}>
                                  <Link href={subsubitem.link} style={{display: 'block'}}>
                                    {subsubitem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          }
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>

            <a href="#" id="res-cross" onClick={ (e) => clickedMobileMenu(e) }></a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default DefaultHeader;
