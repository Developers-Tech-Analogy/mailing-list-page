import React from 'react';

function Footer() {
  return (
    <footer className="w-full h-72 static bottom-0 p-2 justify-center items-center text-center font-sans bg-black">
        <h1 className='text-white text-lg'>Made with ❤️ by Tech Analogy</h1>
        <br />
        <br />
        <a href="https://techanalogy.org" target='_blank'><img className="mx-auto h-24 w-auto" src='./Logotech.png' alt="Workflow" /></a>
    </footer>
  );
}

export default Footer;