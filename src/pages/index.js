import React, { useRef } from 'react';

function Website() {
  const imgRef = useRef(null);

  // Function to increase image size
  const enlargeImg = () => {
    if (imgRef.current) {
      imgRef.current.classList.add('animate-spin-fast-once');
      setTimeout(() => {
        imgRef.current.classList.remove('animate-spin-fast-once');
      }, 1000);
    }
  };

  return (
    <div className=" font-medium font-Space bg-gray-800 text-white min-h-screen">
      <header className="bg-header  font-bold py-4 text-center">
        <div className="flex items-center justify-center">
          <h1 className="inline text-4xl">Whelement</h1>
          <img
            src="whelement.svg"
            alt="Whelement Logo"
            className="w-14 h-14 ml-4"
            id="whalelelele"
            ref={imgRef}

          />
        </div>
      </header>
      <h2 className="text-center font-bold text-2xl py-4">Projects</h2>
      <div className="flex flex-wrap justify-center">

        <div className="w-1/4 p-4">
          <div className="border border-white p-4">
            <h2 className="text-center font-bold text-xl mb-2">CRSH1TTY (deprecated)</h2>
            <p className="text-center mb-4">
              Disable WP without opening your chromebook via bruteforcing.
            </p>
            <button
              className="w-full bg-gray-900 hover:bg-gray-700 text-white h-8"
              onClick={() => window.location.href = 'crsh1tty/'}
            >
              More info
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4">
          <div className="border border-white p-4">
            <h2 className="text-center font-bold text-xl mb-2">CROSMIDI</h2>
            <p className="text-center mb-4">
              An RMA shim bootloader inspired by the popular tool Ventoy.
            </p>
            <button
              className="w-full bg-gray-900 hover:bg-gray-700 text-white h-8"
              onClick={() => alert("CROSMIDI: WIP")}
            >
              More info
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4">
          <div className="border border-white p-4">
            <h2 className="text-center font-bold text-xl mb-2">sh0vel</h2>
            <p className="text-center mb-4">
            Run javascript code on almost any URL with full chrome API access.
            </p>
            <button
              className="w-full bg-gray-900 hover:bg-gray-700 text-white h-8"
              onClick={() => alert("sh0vel: WIP")}
            >
              More info
            </button>
          </div>
        </div>

      </div>
      <h2 className="text-center font-bold text-2xl py-4">Members</h2>
      <div className="flex flex-wrap justify-center">

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/crossystem.webp"
              alt="crossystem"
            />
            <h2 className="text-center font-bold text-xl mb-2">crossystem</h2>
            <p className="text-center mb-4">
              16, founder of Whelement, I know too much stuff for my own good
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/1175643738752680030'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/chrossystem'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'mailto:crossedstem@gmail.com'}
            >
              Email
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/thetechfrog.webp"
              alt="The Tech Frog"
            />
            <h2 className="text-center font-bold text-xl mb-2">TheTechFrog</h2>
            <p className="text-center mb-4">
            15, interested in cybersecurity, whelement's unlicensed therapist
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/1060071562595807254'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/TheSpiritOfDark'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={enlargeImg}
            >
              Whale
            </button>
          </div>
        </div>
        
        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/boeing747.webp"
              alt="boeing 747"
            />
            <h2 className="text-center font-bold text-xl mb-2">boeing 747</h2>
            <p className="text-center mb-4">
            not more useless than miwa
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/1037713379780993114'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/notboeing747'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://time.is/Canada'}
            >
              Timezone
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/zeglol.webp"
              alt="zeglol 1234"
            />
            <h2 className="text-center font-bold text-xl mb-2">ZeglolTheThirtySixth</h2>
            <p className="text-center mb-4">
            beesechurger
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/1101547649477386331'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/ZeglolTheThirtySixth'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'http://127.0.0.1'}
            >
              Their IP Address
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/galaxy.webp"
              alt="galaxy"
            />
            <h2 className="text-center font-bold text-xl mb-2">galaxy</h2>
            <p className="text-center mb-4">
            i do stuff ocassionally
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/893650678432550942'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/galaxqy'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/853098590719967242'}
            >
              Discord Backup
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/archimax.webp"
              alt="Archimax"
            />
            <h2 className="text-center font-bold text-xl mb-2">Archimax</h2>
            <p className="text-center mb-4">
            14, lead dev of CROSMIDI, interested in chromebooks
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/988950574387068968'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/EnterTheVoid-x86'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'mailto:enterthevoidx86@gmail.com'}
            >
              Email
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/olyb.webp"
              alt="OlyB"
            />
            <h2 className="text-center font-bold text-xl mb-2">OlyB</h2>
            <p className="text-center mb-4">
            Owner of TitaniumNetwork, Professional Firmware Smasher
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/476169716998733834'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/BinBashBanana'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'element://vector/webapp/#/user/%40olyb%3Amatrix.org'}
            >
              Matrix (Element)
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/kxtz.webp"
              alt="kxtz"
            />
            <h2 className="text-center font-bold text-xl mb-2">kxtz</h2>
            <p className="text-center mb-4">
            14, basic frontend dev, i use arch btw, Professional Firmware Smasher
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/kxtzownsu'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'mailto:me@kxtz.dev'}
            >
              Email
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/evelyn344.png"
              alt="Evelyn344"
            />
            <h2 className="text-center font-bold text-xl mb-2">Evelyn344</h2>
            <p className="text-center mb-4">
            "who needs a description :З"
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/1174368896271257643'}
            >
              Discord
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://github.com/Evelyn3440'}
            >
              GitHub
            </button>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'mailto:evelyn@whelement.me'}
            >
              Email
            </button>
          </div>
        </div>

        <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/riftriot.png"
              alt="riftriot"
            />
            <h2 className="text-center font-bold text-xl mb-2">Riftriot</h2>
            <p className="text-center mb-4">
            the rift is rioting
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/578375908247863296'}
            >
              Discord
            </button>
            <button
              className='w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3'
              onclick={() => window.location.href = 'https:///google.com'}
            >
              Contact Infoer
            </button>
            <button
              className='w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3'
              onclick={() => window.location.href = 'https:///google.com'}
            >
              Contact Info
            </button>
            
          </div>
        </div>
      </div>

      <h2 className="text-center font-bold text-2xl py-4">Gone but not forgotten. o7</h2>
      <div className="flex flex-wrap justify-center">
      <div className="w-1/4 p-4 mb-8 pb-8">
          <div className="outline-dotted outline-2 outline-white p-4">
            <img
              className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
              src="pfps/cooloblivion.png"
              alt="CoolOblivion759"
            />
            <h2 className="text-center font-bold text-xl mb-2">CoolOblivion759</h2>
            <p className="text-center mb-4">
            Ex. Whelement server owner & CRSH1TTY tester
            </p>
            <p>
            <i>NOTE: CoolOblivion759 has <b>NOT</b> passed away, he has decided to split ways with the Chromebook exploiting community.</i>
            </p>
            <button
              className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
              onClick={() => window.location.href = 'https://discord.com/users/854374770850398220'}
            >
              Discord
            </button>
            <button
              className='w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3'
              onclick={() => window.location.href = 'https:///github.com/CoolOblivion759'}
            >
              GitHub
            </button>
            <button
              className='w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3'
              onclick={() => window.location.href = 'https://discord.com/users/853098590719967242'}
            >
              Discord Backup
            </button>
            
          </div>
        </div>
      </div>
      

      <footer className="bg-gray-900 py-2 text-center fixed bottom-0 w-full p-3">
        <p className="text-green-600 p-2 inline">GitHub</p>
        <p className="p-2 inline">&copy; Whelement, 2023-2024</p>
        <a
          href="https://discord.gg/pBnscCdXAq"
          className="text-blue-500 inline ml-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </footer>
    </div>
  );
}

export default Website;
