import React, { useState } from "react";
import CANDU from "../images/candu_visual.jpg";

function AboutSection() {
  const [nuclearReaction, defNuclearReaction] = useState(false);
  const [nuclearFission, defNuclearFission] = useState(false);
  const [halfLife, defHalfLife] = useState(false);
  const [uraniumDef, showUraniumDef] = useState(false);

  const isOpen = () => {
    uraniumDef ? showUraniumDef(false) : showUraniumDef(true);
  };

  return (
    <div className="flex flex-row w-full py-10">
      <div className="w-2/5">
        <div
          className={`text-sm text-center pt-20 w-15 h-1/4 flex flex-col items-center sticky top-10 left-1/4`}
        >
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#reactor"
          >
            Nuclear Reactor
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#candu"
          >
            CANDU Reactor
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#feul"
          >
            Reactor Feul
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#moderator"
          >
            Moderator: Heavy Water
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#radiation"
          >
            Ionizing Radiation
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#waste"
          >
            Waste disposal & Storage
          </a>

          <a
            className="flex flex-row gap-2 mt-10 text-xl text-space-cadet items-center"
            href="/"
          >
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z"
                  fill="#33363F"
                />
              </svg>
            </div>
            <h2>BACK</h2>
          </a>
        </div>
      </div>
      <div className="w-3/5">
        <div className="pb-10 ">
          <h2 className="text-2xl font-bold pb-3" id="reactor">
            What is a Nuclear Reactor?
          </h2>
          <h2 className="leading-8 text-lg font-light">
            A nuclear reactor is a system used to contain a{" "}
            <span
              onMouseEnter={() => defNuclearReaction(true)}
              onMouseLeave={() => defNuclearReaction(false)}
              className="text-terracota"
            >
              nuclear reaction
            </span>
            . For this article, we will focus on the CANDU nuclear reactor.
          </h2>
          <div
            className={`bg-space-cadet rounded-md p-4 text-sm h-20 text-white ${
              (nuclearReaction && "block") || "hidden"
            }`}
          >
            <h2>
              A{" "}
              <span className="text-terracota font-semibold">
                nuclear reaction
              </span>{" "}
              A nuclear reaction involves an atomic change. Recall that a
              nuclear change consists of rearranging the subatomic particles in
              an atom, releasing and requiring massive quantities of energy.
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-4 pb-10">
          <h2 className="text-2xl font-bold pb-3" id="candu">
            What is the CANDU Nuclear Reactor?
          </h2>
          <h2 className="leading-8 text-lg font-light">
            The CANDU{" "}
            <span className="text-terracota font-semibold">
              (<span className="text-grey-teal">CAN</span>adian{" "}
              <span className="text-grey-teal">D</span>euterium{" "}
              <span className="text-grey-teal">U</span>ranium)
            </span>{" "}
            nuclear reactor is a type of reactor used to generate electricity.
            These nuclear reactors make up 15% of Canada's energy production and
            have international usage in countries like Pakistan, India, and
            Romania. The reactor uses natural uranium as fuel and heavy water as
            a moderator. What makes the CANDU unique is how it can reuse fuel
            and refuel on power.
          </h2>

          <h2 className="leading-8 text-lg font-light">
            The above should have provided you with the broadest definition of
            the CANDU's capabilities, but let's understand the technology
            further.
          </h2>
        </div>
        <div className="flex flex-col gap-5 pb-10">
          <h2 className="text-2xl font-bold pb-3" id="feul">
            Reactor Fuel
          </h2>
          <h2 className="leading-8 text-lg font-light">
            The CANDU uses natural uranium as fuel, which is made up of the
            isotopes uranium-238 and uranium-235. Uranium-235 is the isotope
            which actually undergoes the{" "}
            <span
              className="text-terracota"
              onMouseEnter={() => defNuclearFission(true)}
              onMouseLeave={() => defNuclearFission(false)}
            >
              nuclear fission
            </span>{" "}
            reaction because it is fissile. Other nuclear reactors use enriched
            uranium, but natural uranium has its own unique benefits. For
            instance, the process of uranium enrichment is much more expensive
            than the extraction of natural uranium.
          </h2>
          <div
            className={`bg-space-cadet rounded-md p-4 text-sm h-20 text-white ${
              (nuclearFission && "block") || "hidden"
            }`}
          >
            In a{" "}
            <span className="text-terracota font-bold">nuclear fission</span>{" "}
            reaction, the nuclei are separated, and massive amounts of energy
            are emitted. The products of these reactions tend to expel
            radiation.
          </div>

          <div className="m-10">
            <div className="p-5 bg-bright-green bg-opacity-25 w-full flex flex-row justify-between">
              <h2 className="text-2xl text-bright-green">More on Uranium</h2>
              <svg
                onClick={isOpen}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    (uraniumDef &&
                      "M12 9L12.7071 8.29289L12 7.58579L11.2929 8.29289L12 9ZM18.7071 14.2929L12.7071 8.29289L11.2929 9.70711L17.2929 15.7071L18.7071 14.2929ZM11.2929 8.29289L5.29289 14.2929L6.70711 15.7071L12.7071 9.70711L11.2929 8.29289Z") ||
                    "M12 15L12.7071 15.7071L12 16.4142L11.2929 15.7071L12 15ZM18.7071 9.70711L12.7071 15.7071L11.2929 14.2929L17.2929 8.29289L18.7071 9.70711ZM11.2929 15.7071L5.29289 9.70711L6.70711 8.29289L12.7071 14.2929L11.2929 15.7071Z"
                  }
                  fill="#A1C349"
                />
              </svg>
            </div>

            <div
              className={`${
                (uraniumDef &&
                  "block bg-bright-green bg-opacity-50 p-4 leading-relaxed font-light text-sm") ||
                "hidden"
              }`}
            >
              Uranium has three naturally occurring isotopes, uranium-238,
              uranium-235 and uranium-234. Uranium-238 makes up 99.3% of natural
              uranium, while uranium-235 makes up 0.7%. There have been many
              concerns regarding uranium extraction facilities because they
              produce radiation. In fact, uranium decays to radium, which then
              decays to the radioactive gas. The two primary methods of natural
              uranium extraction include open-pit mining and situ-leaching, both
              producing radioactive waste.
            </div>
          </div>

          <div>
            <h2 className="leading-8 text-lg font-light" id="radiation">
              The radiation that Uranium emits is ionizing radiation since it is
              a radionuclide. Radionuclides are unstable elements that emit
              radiation, and these elements’ atoms release ionizing radiation in
              the form of electromagnetic waves. Although there are many natural
              forms of ionizing radiation that we are exposed to every day (e.g.
              soil), repetitive exposure to artificial sources of ionizing
              radiation can end up causing external and internal damage to our
              bodies. When water is exposed to ionizing radiation, it undergoes
              a process called radiolysis, and this has been found to damage the
              cells of dna.
            </h2>
          </div>

          <div>
            <h2 className="leading-8 text-lg font-light">
              Okay, so uranium can emit radiation, but is there any way that
              this waste quantity can be reduced? The answer is yes, but it is
              not the answer that you may have been expecting. Natural forms of
              reduction, also referred to as reductions in the concentration of
              a material, are dictated by their
              <span
                className="text-terracota "
                onMouseEnter={() => defHalfLife(true)}
                onMouseLeave={() => defHalfLife(false)}
              >
                {" "}
                half-life
              </span>
              . The half-life of uranium-238 is roughly 4.5 billion years, while
              uranium-235’s is 700 million. Those are massive amounts of time
              that need to be considered when we create over half a million
              tonnes of uranium waste annually.
            </h2>
          </div>
          <div
            className={`bg-space-cadet text-center rounded-md p-4 text-sm h-20 text-white ${
              (halfLife && "block") || "hidden"
            }`}
          >
            <span className="text-terracota font-bold">Half life</span> is a
            measure of time that indicates when a material will reach half its
            concentration.
          </div>
          <div>
            <h2 className="leading-8 text-lg font-light">
              But back to the CANDU now - after uranium has been extracted, it
              is made into ceramic pellets, which are then used as fuel. These
              pellets are fed into long tubes that come together to form a fuel
              bundle, which is then put into fuel channels in a non-pressurized
              vessel called the calandria. See the image below for a visual
              representation:
            </h2>
            <div
              style={{ backgroundImage: `url(${CANDU})` }}
              className="transition ease-in-out duration-500 hover:scale-105 w-full h-64 bg-contain bg-no-repeat ml-40"
            />
          </div>

          <div>
            <h2 className="leading-8 text-lg font-light" id="moderator">
              Another aspect of the CANDU is how it uses heavy water as a
              moderator. Take a closer look at the reactor’s name: Canadian{" "}
              <span className="text-grey-teal font-semibold">Deuterium </span>
              Uranium. Deuterium is also known as heavy water and is used in the
              reactor to moderate the number of neutrons produced in the
              reactor's nuclear reactions. Other reactors like the RBMK have
              used light water as moderators, but the use of heavy water is more
              efficient because heavy water is made up of deuterium isotopes,
              which make it so any excess neutrons are not absorbed, resulting
              in an optimal neutron economy for reactions to occur while
              maximizing output.
            </h2>
          </div>

          <h2 className="leading-8 text-lg font-light">
            Now that we know how the CANDU works let's also learn how waste is
            stored.
          </h2>
        </div>

        <h2 className="text-2xl font-bold pb-3" id="waste">
          Waste
        </h2>
        <h2 className="leading-8 text-lg font-light">
          Uranium fuel is considered a waste material when it can no longer
          produce heat or energy. The products of the fission reaction occurring
          in the reactor include the isotopes cesium-137 and strontium-90, which
          account for the heat and radioactivity in the waste. Fuel bundles are
          first put into pools filled with water to reduce their heat and
          radioactivity for 7-10 years. This initial step of storage is called
          <span className="text-grey-teal font-semibold"> wet storage</span>. After this period, they are taken out of the pools and
          stored in containers reinforced with high-density concrete and steel.
          These containers help keep the radiation from getting out, while
          keeping the chemical toxicity of the fuel bundles inside. This process is called <span className="text-grey-teal font-semibold">dry storage</span>, and fuel bundles can
          stay in these containers for a minimum of 50 years, but these bundles
          can continue to remain in the containers for longer, given that they
          are being adequately maintained. Waste from the CANDU is most commonly
          put through geological disposal, which involves placing fuel bundles
          in a sediment rock and setting them hundreds of metres from the
          earth's surface.
        </h2>
      </div>
    </div>
  );
}

export default AboutSection;
