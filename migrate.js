const fs = require('fs');

let html = fs.readFileSync('../wedding-invite/index.html', 'utf8');

// Extract body content
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remove script tags
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert class to className
bodyContent = bodyContent.replace(/class=/g, 'className=');

// Convert for to htmlFor
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');

// Fix unclosed tags (img, source)
bodyContent = bodyContent.replace(/<img(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'));
bodyContent = bodyContent.replace(/<source(.*?)>/g, (match) => match.endsWith('/>') ? match : match.replace('>', ' />'));

// Fix inline styles
bodyContent = bodyContent.replace(/style="(.*?)"/g, (match, styles) => {
    const objStr = styles.split(';').filter(s=>s.trim()).map(s => {
        const [k,v] = s.split(':');
        const camelK = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        return `${camelK}: '${v.trim()}'`;
    }).join(', ');
    return `style={{${objStr}}}`;
});

// Extract scripts logic
const jsxCode = `import React, { useEffect } from 'react';
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
      ${bodyContent}
    </>
  );
}`;

fs.writeFileSync('src/App.jsx', jsxCode);
fs.copyFileSync('../wedding-invite/styles.css', 'src/index.css');

let mainCode = fs.readFileSync('src/main.jsx', 'utf8');
mainCode = mainCode.replace(/import '.\/index.css';?/, ''); // App.jsx imports it
fs.writeFileSync('src/main.jsx', mainCode);

console.log("Migration complete.");
