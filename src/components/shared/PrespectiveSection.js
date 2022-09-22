import React from "react";
import NuclearEthics from "../images/nuclear-ethics.png";

const PrespectiveSection = () => {
  return (
    <div className="grid grid-cols-2 w-full py-10">
      <div className="w-full">
        <div
          className={`text-sm text-center pt-20 w-15 h-1/4 flex flex-col items-center sticky top-10 left-1/4`}
        >
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#economical"
          >
            Economical Prespective
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#ecological"
          >
            Ecological Prespective
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#society"
          >
            Societal Prespective
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#ethics"
          >
            Ethical Prespective
          </a>
          <div className="border-l-4 h-20 border-terracota" />
          <a
            className="border border-terracota bg-white h-10 rounded-md w-15 p-2 hover:bg-terracota hover:text-white"
            href="#personal"
          >
            Personal Prespective
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
      <div className="w-full leading-8 text-lg font-light flex flex-col gap-10">
        <h2>
          Nuclear technology has been developing for the past 70 years, with
          discoveries being made daily. Naturally - as the world has increased
          its awareness of the effect of different energy production facilities
          on our planet, there has been discussion as to ways of how we can make
          our energy production greener.
        </h2>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Ecological vs. Economical</h2>
          <h2>
            Nuclear technology leaves a significantly lower carbon footprint
            than other energy production methods, such as burning fossil fuels.
            Nuclear Reactors like the CANDU have started getting worldwide
            applications, but a considerable drawback of this operation is the
            longevity of the production of the reactors.
          </h2>

          <h2 id="economical">
            From an economic point of view, Nuclear Technology, specifically
            nuclear reactors, has a higher cost and time factor. According to an
            article from the New York Times, it is said that “Responding to such
            a climate emergency with nuclear power is like calling on a sloth to
            put out a house fire”. This is a fair stance on the issue as in the
            last 10 years, only 63 nuclear reactors have been built. As for the
            cost of building the reactors, it can range anywhere from{" "}
            <span className="text-terracota font-bold">$3 - $6 billion.</span>
          </h2>

          <h2 id="ecological">
            Although Nuclear Reactors may be a better solution to reduce the
            carbon footprint of the energy production industry, we must consider
            the nuclear waste produced. Nuclear waste is highly radioactive and
            chemically toxic, presenting ecological threats and health hazards.
            Even though this is a developing technology, we should consider the
            length of time it will take for it to gain more significant usage.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <h2 id="society" className="text-2xl font-bold">
            Educating the Public
          </h2>
          <h2>
            The majority of the general public has not yet become familiar with
            the usage of Nuclear Power, which dramatically affects the societal
            perspective in retrospect to the technology. A paper by the Nuclear
            Energy Agency describes how citizens in countries where Nuclear
            technology is already being used are more in favour of the operation
            because they are learned of the process, the benefits and the risks.
            On the contrary, the public in countries where the government has
            not integrated nuclear technology in their system are against the
            technology because they have not learned of its abilities.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold" id="ethics">
            The Ethics
          </h2>
          <h2>
            Aside from the workings of nuclear technology, there comes another
            dilemma: ethics. Over the years, a progressive concern for terrorism
            attacks occurring at nuclear power plants has risen substantially.
            We can also reflect on disasters such as Chernobyl, where dangerous
            tests were taking place without permission from regulators.
            Occurrences like this shape a negative ethical perspective on
            nuclear technology.
          </h2>

          <div>
            <a href="https://www.oecd-nea.org/upload/docs/application/pdf/2019-12/6859-public-attitudes.pdf">
              <div
                className="w-full h-64 bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${NuclearEthics})` }}
              />
            </a>
            <h2 className="text-xs text-terracota">
              the above outlines that contries feel that terrorism is a risk to
              nuclear power plants{" "}
            </h2>
          </div>

          <h2>
            So what can be done to deviate from unethical practices and keep the
            process and development of nuclear technology as transparent as
            possible? From a personal perspective, I believe investing in more
            safety procedures and supervision in the nuclear technology industry
            can make a significant impact in improving ethical dilemmas. See
            below for a summary of the beliefs of the various perspectives.
          </h2>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold" id="personal">
              Personal Position
            </h2>
            <h2>
              I believe nuclear technology is a very significant advancement in
              world of science. Nuclear power plants, although more costly than
              regular coal power plants, have a better environmental impact and
              can prove effective in the long run. Since this technology is
              currently in development, I believe that is why some faulty
              occurrences have taken place (e.g. Chernobyl). Reactors like the
              CANDU are already gaining more significant usage across the globe
              and with further implementation, and advancements in the
              technology, we can see an increase in the speed of reactor
              development while keeping quality. As the cost of building nuclear
              reactors are relatively high; we also need to remember that they
              are cheaper to maintain and can be kept for a more extended period
              than our usual fossil fuel burning power plants. From researching
              the CANDU in-depth, we can see that everything has been thought
              out thoroughly; from the storage and disposal process all the way
              to engineering a safer design with greater efficiency - the only
              necessary measures I believe need to come into play is greater
              regulatory services and security to satisfy ethical concerns.
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-40 col-span-2 items-center flex flex-row w-full px-32 justify-between h-96">
        <div className="p-4 bg-space-cadet bg-opacity-50 flex flex-col text-center h-full w-64 items-center gap-4 transition duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-4xl font-extrabold text-space-cadet opacity-50">
            Economical Prespective
          </h2>
          <ul className={`text-white text-left flex flex-col gap-3`}>
            <li>Expensive to build</li>
            <li>Requires time to build</li>
            <li>Cheap to maintain reactors</li>
            <li>
              Most expensive form of electricity, costing $131 per/
              megawatt-hour
            </li>
          </ul>
        </div>

        <div className="p-4 bg-terracota bg-opacity-50 h-full w-64 flex flex-col text-center items-center gap-4 transition duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-4xl font-extrabold text-terracota opacity-50">
            Ecological Prespective
          </h2>
          <ul className={`text-white text-left flex flex-col gap-3`}>
            <li>
              Produces a lower carbon footprint compared to other energy
              production sources
            </li>
            <li>
              Radiation from nuclear waste is harmful to environemnt and humans
            </li>
          </ul>
        </div>

        <div className="p-4 bg-bright-green bg-opacity-50 text-center h-full w-64 flex flex-col items-center gap-4 transition duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-4xl font-extrabold text-bright-green opacity-50">
            Societal Prespective
          </h2>
          <ul className={`text-white text-left flex flex-col gap-3`}>
            <li>
              Those who are learned of nuclear techonolgy support it, and those
              who are not are against it
            </li>
            <li>Concerns regarding radioactivity from nuclear power plants</li>
          </ul>
        </div>

        <div className="bg-grey-teal p-4 bg-opacity-50 text-center h-full w-64 flex flex-col items-center gap-4 transition duration-500 ease-in-out transform hover:scale-105">
          <h2 className="text-4xl font-extrabold text-grey-teal opacity-50">
            Ethical Prespective
          </h2>
          <ul className={`text-white text-left flex flex-col gap-3`}>
            <li>Rise in terrorism attack on nuclear powerplants</li>
            <li>
              dangerous tests taking place at some nuclear power facilities
              without permission
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrespectiveSection;
