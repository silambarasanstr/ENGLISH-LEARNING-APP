import React from "react";

const VerbForms = () => {
  const verbs = [
    {
      v1: "go",
      v2: "went",
      v3: "gone",
      v4: "going",
      v5: "goes",
    },
    {
      v1: "eat",
      v2: "ate",
      v3: "eaten",
      v4: "eating",
      v5: "eats",
    },
    {
      v1: "write",
      v2: "wrote",
      v3: "written",
      v4: "writing",
      v5: "writes",
    },
    {
      v1: "play",
      v2: "played",
      v3: "played",
      v4: "playing",
      v5: "plays",
    },
  ];

  const sections = [
    {
      title: "1. Base Form (V1)",
      desc: "Verb-oda original form.",
      items: ["go", "eat", "write", "play"],
      sentence: "I play cricket.",
    },
    {
      title: "2. Past Form (V2)",
      desc: "கடந்த கால செயல்.",
      items: [
        "go → went",
        "eat → ate",
        "write → wrote",
        "play → played",
      ],
      sentence: "I played cricket yesterday.",
    },
    {
      title: "3. Past Participle (V3)",
      desc: "Perfect tense-la use pannuvanga.",
      items: [
        "go → gone",
        "eat → eaten",
        "write → written",
        "play → played",
      ],
      sentence: "I have written homework.",
    },
    {
      title: "4. Present Participle / Ing Form (V4)",
      desc: '"ing" form.',
      items: [
        "go → going",
        "eat → eating",
        "write → writing",
        "play → playing",
      ],
      sentence: "I am playing cricket.",
    },
    {
      title: "5. s/es Form (V5)",
      desc: "He / She / It-ku use pannuvom.",
      items: [
        "go → goes",
        "eat → eats",
        "write → writes",
        "play → plays",
      ],
      sentence: "She plays well.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Important Verb Forms
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Learn English Verb Forms Easily
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-3">
                {section.title}
              </h2>

              <p className="text-gray-700 mb-4">{section.desc}</p>

              <ul className="space-y-2 mb-4">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-gray-100 px-3 py-2 rounded-lg text-gray-800"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-lg">
                <p className="text-gray-800">
                  <span className="font-semibold">Sentence:</span>{" "}
                  {section.sentence}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-md p-6 mt-10 overflow-x-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Easy Table
          </h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-4 text-left">V1</th>
                <th className="p-4 text-left">V2</th>
                <th className="p-4 text-left">V3</th>
                <th className="p-4 text-left">V4</th>
                <th className="p-4 text-left">V5</th>
              </tr>
            </thead>

            <tbody>
              {verbs.map((verb, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="p-4">{verb.v1}</td>
                  <td className="p-4">{verb.v2}</td>
                  <td className="p-4">{verb.v3}</td>
                  <td className="p-4">{verb.v4}</td>
                  <td className="p-4">{verb.v5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VerbForms;