// src/components/TenseCard.jsx

const TenseCard = ({ tense }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start py-4 border-b border-gray-200 last:border-b-0">
      
      {/* LEFT SIDE */}
      <div className="flex justify-center md:justify-start">
        <div
          className={`${tense.color} text-white px-4 py-2 rounded-lg shadow-sm`}
        >
          <h1 className="text-sm md:text-base font-bold tracking-wide">
            {tense.title}
          </h1>
        </div>
      </div>

      {/* MIDDLE */}
      <div>
        <ul className={`space-y-2 ${tense.textColor}`}>
          {tense.items.map((item, index) => (
            <li
              key={index}
              className="text-sm md:text-base font-semibold leading-relaxed"
            >
              {index + 1}. {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div>
        <ul className="space-y-2">
          {tense.items.map((item, index) => (
            <li
              key={index}
              className="text-sm md:text-base text-gray-700 leading-relaxed"
            >
              • {item.example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TenseCard;