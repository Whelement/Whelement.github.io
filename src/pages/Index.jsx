/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
import { useRef } from 'preact/hooks';
import '../tailwind.css';
import '../index.css';

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
        className="w-full h-8 font-normal bg-gray-900 hover:bg-gray-700 text-white mb-3"
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
  owner="true"
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

function User({ name, description, owner, buttonNames, buttonLinks }) {
  const formattedName = name.replace(/\s/g, '');
  const isOwner = owner === "true";

  return (
    <div className="w-1/4 p-4 mb-8 pb-8">
      <div className="outline-dotted outline-2 outline-offset-2 outline-white p-4">
        <div className="text-center relative">
          {isOwner && (
            <div className="relative inline-block">
              <span className="text-2xl" title="Current Owner">👑</span>
            </div>
          )}
          <img
            className="disablePointerEvents rounded-full w-10 h-10 block mx-auto mt-2"
            src={`pfps/${formattedName.toLowerCase()}.png`}
            alt={name}
          />
        </div>
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
function Section({ name, description, children }) {
  return (
    <div>
      <h2 className="text-center font-bold text-2xl py-4">{name}</h2>
      <p className="text-center font-bold"><i>{description}</i></p>
      <div className="flex flex-wrap justify-center">
        {children}
      </div>
    </div>
  );
}

export function Website() {

  return (
    <div className="font-medium font-mono bg-gray-800 text-white min-h-screen">
    {/*               ^- This line is the start of <body> basically -^          */}

 
      <header className="bg-header font-bold py-4 text-center">
        <div className="flex items-center justify-center">
          <h1 className="inline text-4xl">Whelement</h1>
          <img
            src="whelement.svg"
            alt="Whelement Logo"
            className="w-14 h-14 ml-4"
            id="whalelelele"
          />
        </div>
      </header>

      <Section name="Projects">
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
          description="A swamp-like exploit utilizing sh0vel."
          link="/tr3nch/" />

      </Section>

      <Section name="Members" description="In order of join date">

        <User
          name="TheTechFrog"
          description="15, interested in cybersecurity, whelement's unlicensed therapist"
          owner="true"
	  buttonNames={["Discord", "GitHub", "Whale"]}
          buttonLinks={[
            "https://discord.com/users/1060071562595807254",
            "https://github.com/TheSpiritOfDark",
            `javascript:img = document.getElementById("whalelelele"); function youSpinMeRightRoundBabyRightRound() { img.animate( { transform: ['none', 'rotate(+10turn)'], }, { duration: 500, easing: 'cubic-bezier(1, 0, 0, 1)', }); }; youSpinMeRightRoundBabyRightRound();`
          ]} />

        <User
          name="Archimax"
          description="14, lead dev of CROSMIDI, interested in chromebooks"
          owner="true"
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
          owner="false"
	  buttonNames={["Discord", "GitHub", "Matrix (Element)"]}
          buttonLinks={[
            "https://discord.com/users/476169716998733834",
            "https://github.com/BinBashBanana",
            "element://vector/webapp/#/user/%40olyb%3Amatrix.org"
          ]}
        />

	<User
	  name="Riftriot"
	  description="15, programmer, play ultrakill sometimes"
	  owner="false"
	  buttonNames={["Discord", "GitHub", "sick ass deadpool clip"]}
	  buttonLinks={[
	    "https://discord.com/users/578375908247863296",
	    "https://github.com/Riftriot",
	    "https://www.youtube.com/watch?v=Sy8nPI85Ih4"
	  ]}
	/>
        <User
          name="Evelyn344"
          description="Meow? (Waiting for something to happen?)"
          owner="false"
	  buttonNames={["Discord", "GitHub", "Email"]}
          buttonLinks={[
            "https://discord.com/users/402529533900881930",
            "https://github.com/Evelyn3440",
            "mailto:evelyn@whelement.me"
          ]}
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
