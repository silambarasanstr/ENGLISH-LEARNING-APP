import React from "react";

const ArticlesLearning = () => {
  const articleData = [
    {
      title: "A",
      use: "Consonant sound-ku munadi use pannuvom.",
      examples: ["a cat", "a dog", "a university"],
      color: "bg-blue-500",
    },
    {
      title: "An",
      use: "Vowel sound-ku munadi use pannuvom.",
      examples: ["an apple", "an egg", "an honest man"],
      color: "bg-green-500",
    },
    {
      title: "The",
      use: "Specific person or thing-ku use pannuvom.",
      examples: ["the sun", "the Taj Mahal", "the moon"],
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="pt-20 pb-12  px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Articles in English
          </h1>

          <p className="text-gray-600 mt-2 text-sm">
            Learn A, An, and The Easily
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {articleData.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              {/* Top */}
              <div className={`${article.color} p-4 text-white text-center`}>
                <h2 className="text-3xl font-bold">{article.title}</h2>
              </div>

              {/* Body */}
              <div className="p-4">
                <p className="text-gray-700 mb-4 text-sm leading-6">
                  {article.use}
                </p>

                <h3 className="font-semibold text-base mb-2 text-gray-800">
                  Examples:
                </h3>

                <ul className="space-y-2">
                  {article.examples.map((example, i) => (
                    <li
                      key={i}
                      className="bg-gray-100 px-3 py-2 rounded-lg text-sm text-gray-800"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-md p-4 mt-8 overflow-x-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Articles Table
          </h2>

          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 text-left">Article</th>
                <th className="p-3 text-left">Usage</th>
                <th className="p-3 text-left">Example</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">A</td>
                <td className="p-3">Consonant sound</td>
                <td className="p-3">a boy</td>
              </tr>

              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">An</td>
                <td className="p-3">Vowel sound</td>
                <td className="p-3">an apple</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="p-3 font-semibold">The</td>
                <td className="p-3">Specific thing/person</td>
                <td className="p-3">the sun</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Easy Understanding */}
        <div className="bg-white rounded-2xl shadow-md p-4 mt-8 overflow-x-auto ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Easy Understanding
          </h2>

          <table className="w-full border-collapse text-sm border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 text-left">Article</th>
                <th className="p-3 text-left">Meaning</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3 font-semibold">a / an</td>
                <td className="p-3">ஒரு</td>
              </tr>

              <tr className="hover:bg-gray-50">
                <td className="p-3 font-semibold">the</td>
                <td className="p-3">அந்த / குறிப்பிட்ட</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl mt-8">
          <p className="text-gray-800 text-sm leading-7">
            <span className="font-bold">Easy Trick:</span>
            <br />
            👉 Vowel sound start aana <strong>"An"</strong>
            <br />
            👉 Consonant sound start aana <strong>"A"</strong>
            <br />
            👉 Specific-a sonna <strong>"The"</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticlesLearning;
