import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

export default function App() {
  useEffect(() => {
    AOS.init({ once: false });

    // Language Toggle Logic
    const btnEn = document.getElementById('btn-en');
    const btnKn = document.getElementById('btn-kn');
    const langEnElements = document.querySelectorAll('.lang.en');
    const langKnElements = document.querySelectorAll('.lang.kn');

    if (btnEn && btnKn) {
        btnEn.addEventListener('click', () => {
            btnEn.classList.add('active');
            btnKn.classList.remove('active');
            langEnElements.forEach(el => el.style.display = '');
            langKnElements.forEach(el => el.style.display = 'none');
        });

        btnKn.addEventListener('click', () => {
            btnKn.classList.add('active');
            btnEn.classList.remove('active');
            langKnElements.forEach(el => el.style.display = 'inline-block');
            langEnElements.forEach(el => el.style.display = 'none');
        });
    }

    // Draggable Logic
    const makeDraggable = (element) => {
        if(!element) return;
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragTouchStart;

        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function dragTouchStart(e) {
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementTouchDrag;
        }

        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            element.style.top = (element.offsetTop - pos2) + 'px';
            element.style.left = (element.offsetLeft - pos1) + 'px';
        }

        function elementTouchDrag(e) {
            pos1 = pos3 - e.touches[0].clientX;
            pos2 = pos4 - e.touches[0].clientY;
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;
            element.style.top = (element.offsetTop - pos2) + 'px';
            element.style.left = (element.offsetLeft - pos1) + 'px';
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    };

    makeDraggable(document.querySelector('.sticker-1'));
    makeDraggable(document.querySelector('.sticker-2'));

  }, []);

  return (
    <>
      

    
    <div className="lang-toggle">
        <button id="btn-en" className="active">EN</button>
        <button id="btn-kn">ಕನ್ನಡ</button>
    </div>

    
    <div className="sticker draggable sticker-1">
        <svg viewBox="0 0 200 200" width="120" height="120" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 40 Q80 20 100 40 L100 70 Q100 90 80 90 Q60 90 60 70 Z" fill="#2c3e50"/>
            <path d="M40 100 Q80 80 120 100 L110 200 L50 200 Z" fill="#34495e"/>
            <path d="M100 50 Q120 30 140 50 L140 75 Q140 95 120 95 Q100 95 100 75 Z" fill="#fdf5e6"/>
            <path d="M90 110 Q120 90 150 110 L160 200 L80 200 Z" fill="#fffaf0"/>
            <path d="M100 50 Q120 10 140 50 L160 100 L80 100 Z" fill="#ffffff" opacity="0.8"/>
            <circle cx="120" cy="110" r="10" fill="#e74c3c"/>
        </svg>
    </div>

    <div className="sticker draggable sticker-2">
        <svg viewBox="0 0 100 100" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 80 Q70 100 90 80 Q100 60 80 40 Q50 60 50 80 Z" fill="#f2c4cb"/>
            <path d="M50 80 Q30 100 10 80 Q0 60 20 40 Q50 60 50 80 Z" fill="#f2c4cb"/>
            <circle cx="50" cy="50" r="15" fill="#f3a987"/>
        </svg>
    </div>

    <div className="background-gallery">
        <img src="temp/img6.jpeg" className="bg-img float-2" alt="decor" />
        <img src="temp/img7.jpeg" className="bg-img float-3" alt="decor" />
        <img src="temp/img3.jpeg" className="bg-img float-4" alt="decor" />
        <img src="temp/img11.jpeg" className="bg-img float-5" alt="decor" />
    </div>

    <div className="noise-overlay"></div>

    <nav className="navbar curvy-pill">
        <ul>
            <li><a href="#home"><span className="lang en">Intro</span><span className="lang kn">ಮುಖಪುಟ</span></a></li>
            <li><a href="#mehendi"><span className="lang en">Mehendi</span><span className="lang kn">ಮೆಹಂದಿ</span></a></li>
            <li><a href="#arisina"><span className="lang en">Haldi</span><span className="lang kn">ಅರಿಶಿನ</span></a></li>
            <li><a href="#reception"><span className="lang en">Reception</span><span className="lang kn">ಆರತಕ್ಷತೆ</span></a></li>
            <li><a href="#muhurtha"><span className="lang en">Muhurtha</span><span className="lang kn">ಮುಹೂರ್ತ</span></a></li>
        </ul>
    </nav>

    <div id="falling-flowers"></div>

    
    <section id="home" className="section">
        <div className="glass-card home-card curvy-huge" data-aos="zoom-out" data-aos-duration="2000">
            
            <div className="polaroid-video curvy-medium has-overlay">
                <video autoplay loop muted playsinline>
                    <source src="temp/img13.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="video-overlay">
                    <h1 className="title font-display dramatic-text">
                        <span className="lang en">Bride <span className="font-script ampersand">&</span> Groom</span>
                        <span className="lang kn kannada-title">ವಧು <span className="font-script ampersand" style={{fontFamily: 'sans-serif'}}>ಮತ್ತು</span> ವರ</span>
                    </h1>
                    <p className="subtitle">
                        <span className="lang en">“Together with our families, we invite you to be a part of our beautiful beginning.”</span>
                        <span className="lang kn">“ನಮ್ಮ ಕುಟುಂಬಗಳ ಪ್ರೀತಿ ಮತ್ತು ಆಶೀರ್ವಾದದೊಂದಿಗೆ, ನಮ್ಮ ಜೀವನದ ಈ ಸುಂದರ ಆರಂಭಕ್ಕೆ ನಿಮ್ಮನ್ನು ಆತ್ಮೀಯವಾಗಿ ಆಹ್ವಾನಿಸುತ್ತೇವೆ.”</span>
                    </p>
                </div>
            </div>
            
            <p className="instruction-text">
                <span className="lang en">(with love)</span>
                <span className="lang kn">(ಸ್ಟಿಕ್ಕರ್‌ಗಳನ್ನು ಎಳೆಯಿರಿ!)</span>
            </p>
        </div>
    </section>

    
    <section id="mehendi" className="section">
        <img src="temp/img8.jpeg" className="side-polaroid left-polaroid" data-aos="fade-right" alt="mehendi inspo" />
        <div className="glass-card curvy-large theme-sage" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="section-title font-script">
                <span className="lang en">Mehendi</span>
                <span className="lang kn">ಮೆಹಂದಿ</span>
            </h2>
            
            <p className="quote">
                <span className="lang en">“A little henna, a lot of laughter, and memories painted with love.”</span>
                <span className="lang kn">“ಮೆಹಂದಿಯ ಬಣ್ಣದಲ್ಲಿ ಪ್ರೀತಿ ಅರಳಿ, ನಗುವಿನ ಕ್ಷಣಗಳಲ್ಲಿ ನೆನಪುಗಳು ಮೂಡಲಿ.”</span>
            </p>

            <div className="details">
                <p className="date-text">
                    <span className="lang en">15 October 2026</span>
                    <span className="lang kn">15 ಅಕ್ಟೋಬರ್ 2026</span>
                </p>
                <p>
                    <span className="lang en">4:00 PM Onwards</span>
                    <span className="lang kn">ಸಂಜೆ 4:00 ಗಂಟೆಯಿಂದ</span>
                </p>
                <p>
                    <span className="lang en">The Green Gardens, Bangalore</span>
                    <span className="lang kn">ದಿ ಗ್ರೀನ್ ಗಾರ್ಡನ್ಸ್, ಬೆಂಗಳೂರು</span>
                </p>
                
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mehendi+-+Wedding&dates=20261015T103000Z/20261015T143000Z&details=A+little+henna,+a+lot+of+laughter&location=The+Green+Gardens,+Bangalore" target="_blank" className="calendar-btn">
                    <span className="lang en">Add to Google Calendar</span>
                    <span className="lang kn">ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ</span>
                </a>

                <div className="qr-container curvy-medium">
                    <a href="https://maps.google.com/?q=The+Green+Gardens,Bangalore" target="_blank" className="qr-link">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://maps.google.com/?q=The+Green+Gardens,Bangalore" alt="Location QR Code" className="qr-code" />
                    </a>
                    <p className="qr-instruction">
                        <span className="lang en">Scan or Click for Location</span>
                        <span className="lang kn">ಸ್ಥಳಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    
    <section id="arisina" className="section">
        <img src="temp/img9.jpeg" className="side-polaroid right-polaroid" data-aos="fade-left" alt="haldi inspo" />
        <div className="glass-card curvy-large theme-butter" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="section-title font-script">
                <span className="lang en">Arisina</span>
                <span className="lang kn">ಅರಿಶಿನ</span>
            </h2>
            
            <p className="quote">
                <span className="lang en">“Wrapped in golden hues, laughter, and blessings as we begin our beautiful journey.”</span>
                <span className="lang kn">“ಅರಿಶಿನದ ಹೊಳಪಿನಲ್ಲಿ, ನಗು-ಸಂಭ್ರಮದೊಂದಿಗೆ ನಮ್ಮ ಹೊಸ ಪಯಣಕ್ಕೆ ಶುಭಾರಂಭ.”</span>
            </p>

            <div className="details">
                <p className="date-text">
                    <span className="lang en">16 October 2026</span>
                    <span className="lang kn">16 ಅಕ್ಟೋಬರ್ 2026</span>
                </p>
                <p>
                    <span className="lang en">10:00 AM Onwards</span>
                    <span className="lang kn">ಬೆಳಿಗ್ಗೆ 10:00 ಗಂಟೆಯಿಂದ</span>
                </p>
                <p>
                    <span className="lang en">Bride's Residence, Bangalore</span>
                    <span className="lang kn">ವಧುವಿನ ನಿವಾಸ, ಬೆಂಗಳೂರು</span>
                </p>

                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Arisina+-+Wedding&dates=20261016T043000Z/20261016T073000Z&details=Haldi+Ceremony&location=Bride's+Residence,+Bangalore" target="_blank" className="calendar-btn">
                    <span className="lang en">Add to Google Calendar</span>
                    <span className="lang kn">ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ</span>
                </a>
                
                <div className="qr-container curvy-medium">
                    <a href="https://maps.google.com/?q=Bangalore" target="_blank" className="qr-link">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://maps.google.com/?q=Bangalore" alt="Location QR Code" className="qr-code" />
                    </a>
                    <p className="qr-instruction">
                        <span className="lang en">Scan or Click for Location</span>
                        <span className="lang kn">ಸ್ಥಳಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    
    <section id="reception" className="section">
        <img src="temp/img2.jpeg" className="side-polaroid left-polaroid" data-aos="fade-right" alt="reception inspo" />
        <div className="glass-card curvy-large theme-apricot" data-aos="fade-up" data-aos-duration="1500">
            <h2 className="section-title font-script">
                <span className="lang en">Reception</span>
                <span className="lang kn">ಆರತಕ್ಷತೆ</span>
            </h2>

            <p className="quote">
                <span className="lang en">“Come celebrate love, laughter, and the beautiful beginning of our forever.”</span>
                <span className="lang kn">“ಪ್ರೀತಿ, ನಗು ಮತ್ತು ನಮ್ಮ ಹೊಸ ಬದುಕಿನ ಸುಂದರ ಆರಂಭವನ್ನು ನಮ್ಮೊಂದಿಗೆ ಸಂಭ್ರಮಿಸಲು ಬನ್ನಿ.”</span>
            </p>

            <div className="details">
                <p className="date-text">
                    <span className="lang en">16 October 2026</span>
                    <span className="lang kn">16 ಅಕ್ಟೋಬರ್ 2026</span>
                </p>
                <p>
                    <span className="lang en">7:00 PM Onwards</span>
                    <span className="lang kn">ಸಂಜೆ 7:00 ಗಂಟೆಯಿಂದ</span>
                </p>
                <p>
                    <span className="lang en">The Royal Palace Grounds, Bangalore</span>
                    <span className="lang kn">ದಿ ರಾಯಲ್ ಪ್ಯಾಲೇಸ್ ಗ್ರೌಂಡ್ಸ್, ಬೆಂಗಳೂರು</span>
                </p>
                
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception&dates=20261016T133000Z/20261016T173000Z&details=An+evening+of+celebration+and+dining.&location=The+Royal+Palace+Grounds,+Bangalore" target="_blank" className="calendar-btn">
                    <span className="lang en">Add to Google Calendar</span>
                    <span className="lang kn">ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ</span>
                </a>

                <div className="qr-container curvy-medium">
                    <a href="https://www.bing.com/maps/directions?ty=0&amp;v=2&amp;sV=1&amp;style=r&amp;rtp=%7Epos.13.012762069702148_77.5858154296875__Palace%2520Ground_&amp;cp=13.012762%7E77.585815&amp;lvl=16" target="_blank" className="qr-link">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&amp;data=https%3A%2F%2Fwww.bing.com%2Fmaps%2Fdirections%3Fty%3D0%26v%3D2%26sV%3D1%26style%3Dr%26rtp%3D%257Epos.13.012762069702148_77.5858154296875__Palace%252520Ground_%26cp%3D13.012762%257E77.585815%26lvl%3D16" alt="Location QR Code" className="qr-code" />
                    </a>
                    <p className="qr-instruction">
                        <span className="lang en">Scan or Click for Location</span>
                        <span className="lang kn">ಸ್ಥಳಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    
    <section id="muhurtha" className="section">
        <img src="temp/img14.jpeg" className="side-polaroid right-polaroid" data-aos="fade-left" alt="muhurtha inspo" />
        <div className="glass-card curvy-huge theme-muhurtha" data-aos="zoom-in" data-aos-duration="2000">
            <h2 className="section-title font-script">
                <span className="lang en">Muhurtha</span>
                <span className="lang kn">ಮುಹೂರ್ತ</span>
            </h2>

            <p className="quote">
                <span className="lang en">“Two hearts, two families, one sacred promise — forever begins here.”</span>
                <span className="lang kn">“ಎರಡು ಮನಸುಗಳು, ಎರಡು ಕುಟುಂಬಗಳು, ಒಂದು ಪವಿತ್ರ ಬಂಧ — ನಮ್ಮ ಅನಂತ ಪಯಣ ಇಲ್ಲಿಂದ ಆರಂಭ.”</span>
            </p>

            <div className="details">
                <p className="date-text">
                    <span className="lang en">17 October 2026</span>
                    <span className="lang kn">17 ಅಕ್ಟೋಬರ್ 2026</span>
                </p>
                <p>
                    <span className="lang en">9:30 AM to 10:30 AM</span>
                    <span className="lang kn">ಬೆಳಿಗ್ಗೆ 9:30 ರಿಂದ 10:30 ರವರೆಗೆ</span>
                </p>
                <p>
                    <span className="lang en">Sri Kalyana Mantapa, Bangalore</span>
                    <span className="lang kn">ಶ್ರೀ ಕಲ್ಯಾಣ ಮಂಟಪ, ಬೆಂಗಳೂರು</span>
                </p>
                
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Muhurtha&dates=20261017T040000Z/20261017T050000Z&details=Witness+the+sacred+union&location=Sri+Kalyana+Mantapa,+Bangalore" target="_blank" className="calendar-btn">
                    <span className="lang en">Add to Google Calendar</span>
                    <span className="lang kn">ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಸೇರಿಸಿ</span>
                </a>

                <div className="qr-container curvy-medium">
                    <a href="https://maps.google.com/?q=Sri+Kalyana+Mantapa,Bangalore" target="_blank" className="qr-link">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://maps.google.com/?q=Sri+Kalyana+Mantapa,Bangalore" alt="Location QR Code" className="qr-code" />
                    </a>
                    <p className="qr-instruction">
                        <span className="lang en">Scan or Click for Location</span>
                        <span className="lang kn">ಸ್ಥಳಕ್ಕಾಗಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ಕ್ಲಿಕ್ ಮಾಡಿ</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

    
    <a href="tel:8310246790" className="contact-floating">
        📞 8310246790
    </a>

    
    

    </>
  );
}
