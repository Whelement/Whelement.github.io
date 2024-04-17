function crsh1tty() {
  return (
    <div className="bg-gray-800 text-gray-100 min-h-screen w-screen overflow-y-auto text-center">
      <header className="text-4xl text-blue-600 py-4 glow-blue">CRSH1TTY</header>
      <main className="px-4 py-8">
        <section className="mb-8">
          <h2 className="text-3xl mb-2 glow-white">The exploit for the truly desperate</h2>
          <p>
            Disable WP on CR50 devices without opening it, just requires a chromebook
            in devmode and a ton of time. If you get an auth code, create an issue
            with the related info, or even better, send a DM to @crossystem or
            @thetechfrog on discord
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-3xl mb-2 glow-white">Instructions</h2>
          <p>On an <b>UNENROLLED CHROMEBOOK IN DEVMODE</b> with <b>WP</b> and <b>WIFI ON</b> run this code in vt2, and just wait!</p>
          <div className="flex items-center justify-center w-2/3 h-full bg-gray-600 text-gray-200 rounded p-2 mb-2 mx-auto">
            <p>curl -s https://raw.githubusercontent.com/Whelement/Whelement.github.io/main/scripts/crsh1tty.sh | bash</p>
          </div>
        </section>
        <section className="mb-5">
          <h2 className="text-3xl mb-2 glow-white">Disclaimer</h2>
          <p>
            We do not have an auth code as of right now, and we are hoping that
            opening this up to the public will help us find more codes. This is not
            the final product, just a beta! Also, don't bother reporting this to
            Google as they won't care.
          </p>
        </section>
        <section className="">
          <h2 className="text-3xl glow-white">Credits</h2>
          <ul>
            <li>crossystem - Developing the bruteforcer, testing, pioneering the idea of using RMA unlocks, researching the CR50 and RMA unlock, creating Whelement, writes all of the comments</li>
            <li>TheTechFrog / TheSpiritOfDark - Building shims, implementing the brute forcer into shims, also researching the CR50 and RMA unlock, maintaining the github, looking into alternative methods of CRSH1TTY</li>
            <li>CoolObivion759 - Testing, Researching, Creating Whale, Inc. (Whelement members are not associated with wh4le in any way, shape, or form)</li>
            <li>Windows XP - The logo for CRSH1TTY</li>
            <li>boeing 747 - Emotional support and motivation</li>
            <li>mammillaria - This Page</li>
            <li>kxtzownsu - Porting this page to Tailwind CSS & React JS</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-2 fixed bottom-0 w-full">Join our discord server! <a className="text-blue-600" href="https://discord.gg/BK853xQSrg">https://discord.gg/BK853xQSrg</a></footer>
    </div>
  );
}

export default crsh1tty;
