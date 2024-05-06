/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
import React, { useRef } from 'react';
import '../index.css';
import '../tailwind.css';

/* Usage: 
<Button 
  text="Example Text" 
  link="https://example.com" 
/>
*/

function Button({ text = 'Link', link }) {
  return (
    <a href={link}>
      <button
        className="w-full h-8 bg-gray-900 hover:bg-gray-700 text-white mb-3"
      >
        {text} 
      </button>
    </a>
  );
}

/* Usage:
<User
  name="Example Name"
  description="Description"
  buttonNames={["button1", "button2", "button3"]}
  buttonLinks={
    [
      "link1",
      "link2",
      "link3"
    ]
  }
/>
*/
function User({ name, description, buttonNames, buttonLinks }) {
  const formattedName = name.replace(/\s/g, '');

  return (
    <div className="w-1/4 p-4 mb-8 pb-8">
      <div className="outline-dotted outline-2 outline-white p-4">
        <img
          className="disablePointerEvents rounded-full w-10 h-10 block mx-auto"
          src={`pfps/${formattedName.toLowerCase()}.png`}
          alt={name}
        />
        <h2 className="text-center font-bold text-xl mb-2">{name}</h2>
        <p className="text-center mb-4">{description}</p>
        <div className="text-center">
          {buttonNames.map((buttonName, index) => (
            <Button key={index} text={buttonName} link={buttonLinks[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* Usage:
<Project
  name="Example"
  description="Example"
  link="example.com"
/>
*/

function Project({ name, description, link }) {
  return (
    <div className="w-1/4 p-4">
      <div className="border border-white p-4">
        <h2 className="text-center font-bold text-xl mb-2">{name}</h2>
        <p className="text-center mb-4">{description}</p>
        <Button text="More info" link={link} />
      </div>
    </div>
  );
}

/* Usage:

  <Section name="ExampleMembers">
    <User
      name="Example Name"
      description="Description"
      buttonNames={["button1", "button2", "button3"]}
      buttonLinks={[
          "link1",
          "link2",
          "link3"
      ]}
    />
  </Section>

*/
function Section({ name, children }) {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl py-4">{name}</h2>
      <div className="flex flex-wrap justify-center">
        {children}
      </div>
    </div>
  );
}

function Website() {
  const imgRef = useRef(null);

  // you spin me right round baby right round
  const enlargeImg = () => {
    if (imgRef.current) {
      imgRef.current.classList.add('animate-spin-fast-once');
      setTimeout(() => {
        imgRef.current.classList.remove('animate-spin-fast-once');
      }, 1000);
    }
  };

  return (
    <div className="font-medium font-mono bg-gray-800 text-white min-h-screen">
    {/*               ^- This line is the start of <body> basically -^          */}

 
      <header className="bg-header  font-bold py-4 text-center">
        <div className="flex items-center justify-center">
          <h1 className="inline text-4xl">Whelement</h1>
          <img
            src="whelement.svg"
            alt="Whelement Logo"
            className="w-14 h-14 ml-4"
            id="whalelelele"
            ref={imgRef} />
        </div>
      </header>

      <Section name="Projects">
        <Project
          name="CRSH1TTY"
          description="Disable WP without opening your chromebook via bruteforcing."
          link="/crsh1tty/" />

        <Project
          name="CROSMIDI"
          description="An RMA shim bootloader inspired by the popular tool Ventoy."
          link="javascript:alert('CROSMIDI: WIP');" />

        <Project
          name="sh0vel"
          description="Run javascript code on almost any URL with full chrome API access."
          link="javascript:alert('sh0vel: WIP');" />

        <Project
          name="Tr3nch"
          description="A swamp-like exploit utilizing sh0vel, Coming Soon. May 6th, 2024."
          link="javascript:alert('Tr3nch: May 6th, 2024.');" />

      </Section>

      <Section name="Members">

        <User
          name="Kelsea"
          description="16, founder of Whelement, avid Hololive enjoyer, pronounced 'kraws sis-tuhm' not 'kraw-see stem'"
          buttonNames={["Discord", "GitHub", "Steam"]}
          buttonLinks={[
            "https://discord.com/users/1175643738752680030",
            "https://github.com/chrossystem",
            "https://steamcommunity.com/profiles/76561199021462166"
          ]} />


        <User
          name="TheTechFrog"
          description="15, interested in cybersecurity, whelement's unlicensed therapist"
          buttonNames={["Discord", "GitHub", "Whale"]}
          buttonLinks={[
            "https://discord.com/users/1060071562595807254",
            "https://github.com/TheSpiritOfDark",
            "javascript:enlargeImg()"
          ]} />
        <User
          name="boeing 747"
          description="i exist"
          buttonNames={["Discord", "GitHub", "Timezone"]}
          buttonLinks={[
            "https://discord.com/users/1037713379780993114",
            "https://github.com/notboeing747",
            "https://time.is/Canada"
          ]} />
        <User
          name="ZeglolTheThirtySixth"
          description="14, chromebook enthusiast, honorary firmware smasher"
          buttonNames={["Discord", "GitHub", "Their IP Address"]}
          buttonLinks={[
            "https://discord.com/users/1101547649477386331",
            "https://github.com/ZeglolTheThirtySixth",
            "http://127.0.0.1"
          ]} />

        <User
          name="Archimax"
          description="14, lead dev of CROSMIDI, interested in chromebooks"
          buttonNames={["Discord", "GitHub", "Email"]}
          buttonLinks={[
            "https://discord.com/users/988950574387068968",
            "https://github.com/EnterTheVoid-x86",
            "mailto:enterthevoidx86@gmail.com"
          ]}
        />

        <User
          name="OlyB"
          description="Owner of TitaniumNetwork, Professional Firmware Smasher"
          buttonNames={["Discord", "GitHub", "Matrix (Element)"]}
          buttonLinks={[
            "https://discord.com/users/476169716998733834",
            "https://github.com/BinBashBanana",
            "element://vector/webapp/#/user/%40olyb%3Amatrix.org"
          ]}
        />

        <User
          name="Writable"
          description="the yapping machine"
          buttonNames={["Discord", "GitHub", "Their current location"]}
          buttonLinks={[
            "https://discord.com/users/1101547649477386331",
            "https://github.com/MunyDev",
            "https://earth.google.com/web/"
          ]}
        />

        <User
          name="kxtz"
          description="14, basic frontend dev, i use arch btw, Professional Firmware Smasher"
          buttonNames={["Discord", "GitHub", "Email"]}
          buttonLinks={[
            "https://discord.com/users/952792525637312552",
            "https://github.com/kxtzownsu",
            "mailto:me@kxtz.dev"
          ]}
        />

        <User
          name="Evelyn344"
          description="Meow? (Waiting for something to happen?)"
          buttonNames={["Discord", "GitHub", "Email"]}
          buttonLinks={[
            "https://discord.com/users/402529533900881930",
            "https://github.com/Evelyn3440",
            "mailto:evelyn@whelement.me"
          ]}
        />

      </Section>

      <Section name="Gone but not forgotten. o7">
        <User
          name="CoolOblivion759"
          description="Ex. Whelement server owner & CRSH1TTY tester, NOTE: CoolOblivion759 has NOT passed away, he has decided to split ways with the Chromebook exploiting community."
          buttonNames={[]}
          buttonLinks={[]}
        />
      </Section>
      <footer className="bg-gray-900 py-2 text-center fixed bottom-0 w-full p-3">
        <a
          href="https://github.com/Whelement"
          className="text-green-600 inline ml-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p className="p-2 inline">&copy; Whelement, 2023-2024</p>
        <a
          href="https://discord.gg/Vs6CKGS475"
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
