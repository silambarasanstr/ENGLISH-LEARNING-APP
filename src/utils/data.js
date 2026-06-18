export const GRAMMAR_TOPICS = [
  {
    id: "parts-of-speech",
    title: "Parts of Speech",
    items: [
      {
        title: "Noun (Name)",
        subtitle: "பெயர்ச்சொல்",
        examples: [
          { english: "Ram", tamil: "ராம்" },
          { english: "Chennai", tamil: "சென்னை" },
          { english: "Book", tamil: "புத்தகம்" },
        ],
        desc: "Represents a person, place, or thing.",
      },
      {
        title: "Pronoun (Personal or Possessive)",
        subtitle: "பிரதிப்பெயர்ச்சொல்",
        desc: "Used in place of a noun.",
        examples: [
          { english: "he", tamil: "அவன்" },
          { english: "she", tamil: "அவள்" },
          { english: "they", tamil: "அவர்கள்" },
        ],
        types: [
          {
            name: "Personal Pronoun",
            tamil: "பொருப்புப் பிரதிப்பெயர்",
            examples: [
              { english: "I", tamil: "நான்" },
              { english: "You", tamil: "நீ" },
              { english: "He", tamil: "அவன்" },
            ],
          },
          {
            name: "Possessive Pronoun",
            tamil: "உடைமை பிரதிப்பெயர்",
            examples: [
              { english: "Mine", tamil: "என்னுடையது" },
              { english: "Yours", tamil: "உன்னுடையது" },
              { english: "His", tamil: "அவனுடையது" },
            ],
          },
          {
            name: "Reflexive Pronoun",
            tamil: "தன்னிலை பிரதிப்பெயர்",
            examples: [
              { english: "Myself", tamil: "என்னைத்தானே" },
              { english: "Yourself", tamil: "உன்னைத்தானே" },
              { english: "Himself", tamil: "அவனே தானே" },
              { english: "Herself", tamil: "அவளே தானே" },
              { english: "Itself", tamil: "அதே தானே" },
            ],
          },
          {
            name: "Demonstrative Pronoun",
            tamil: "சுட்டுப் பிரதிப்பெயர்",
            examples: [
              { english: "This", tamil: "இது" },
              { english: "That", tamil: "அது" },
              { english: "These", tamil: "இவைகள்" },
            ],
          },
          {
            name: "Interrogative Pronoun",
            tamil: "கேள்விப் பிரதிப்பெயர்",
            examples: [
              { english: "Who", tamil: "யார்" },
              { english: "What", tamil: "என்ன" },
              { english: "Which", tamil: "எது" },
            ],
          },
          {
            name: "Relative Pronoun",
            tamil: "இணைப்புப் பிரதிப்பெயர்",
            examples: [
              { english: "Who", tamil: "யார்" },
              { english: "Which", tamil: "எது" },
              { english: "That", tamil: "அது" },
            ],
          },
          {
            name: "Indefinite Pronoun",
            tamil: "தெரியாத பிரதிப்பெயர்",
            examples: [
              { english: "Someone", tamil: "யாரோ ஒருவர்" },
              { english: "Something", tamil: "ஏதோ ஒன்று" },
              { english: "Everyone", tamil: "அனைவரும்" },
            ],
          },
        ],
      },
      {
        title: "Verb (Action)",
        subtitle: "வினைச்சொல்",
        examples: [
          { english: "run (Action)", tamil: "ஓடு" },
          { english: "eat (Action)", tamil: "சாப்பிடு" },
          { english: "speak (Action)", tamil: "பேசு" },
        ],
        types: [
          {
            name: "Action Verbs",
            tamil: "செயல் வினைச்சொற்கள்",
            examples: [
              { english: "Run", tamil: "ஓடு" },
              { english: "Eat", tamil: "சாப்பிடு" },
              { english: "Write", tamil: "எழுது" },
              { english: "Play", tamil: "விளையாடு" },
              { english: "Read", tamil: "படி" },
            ],
          },
          {
            name: "Linking Verbs",
            tamil: "இணைப்பு வினைச்சொற்கள்",
            examples: [
              { english: "Is", tamil: "இருக்கிறது" },
              { english: "Am", tamil: "இருக்கிறேன்" },
              { english: "Are", tamil: "இருக்கிறார்கள்" },
              { english: "Was", tamil: "இருந்தது" },
              { english: "Were", tamil: "இருந்தார்கள்" },
              { english: "Become", tamil: "ஆகிறது" },
              { english: "Seem", tamil: "போல் தெரிகிறது" },
              { english: "Look", tamil: "போல் தெரிகிறது" },
            ],
          },

          {
            name: "Helping Verbs",
            tamil: "உதவி வினைச்சொற்கள்",
            examples: [
              { english: "Have", tamil: "உள்ளது" },
              { english: "Has", tamil: "உள்ளது" },
              { english: "Had", tamil: "இருந்தது" },
              { english: "Do", tamil: "செய்" },
              { english: "Does", tamil: "செய்கிறது" },
              { english: "Did", tamil: "செய்தது" },
              { english: "Will", tamil: "செய்வேன்" },
            ],
          },
        ],
        desc: "Represents an action or state.",
      },
      {
        title: "Adverb (Describes the action)",
        subtitle: "வினையுரிச்சொல்",
        examples: [
          { english: "quickly (how he runs)", tamil: "விரைவாக" },
          { english: "slowly (Manner)", tamil: "மெதுவாக" },
          { english: "carefully (Manner)", tamil: "கவனமாக" },
          { english: "easily (Manner)", tamil: "எளிதாக" },
          { english: "happily (Manner)", tamil: "மகிழ்ச்சியாக" },
          { english: "sadly (Manner)", tamil: "துக்கமாக" },
          { english: "loudly (Manner)", tamil: "சத்தமாக" },
          { english: "silently (Manner)", tamil: "அமைதியாக" },
        ],
        desc: "Describes a verb, adjective, or another adverb.",
      },
      {
        title: "Adjective (Description)",
        subtitle: "பெயரடைச்சொல்",
        examples: [
          { english: "big (Description)", tamil: "பெரிய" },
          { english: "small (Description)", tamil: "சிறிய" },
          { english: "beautiful (Description)", tamil: "அழகான" },
        ],
        desc: "Describes a noun.",
      },

      {
        title: "Preposition (Place or Time)",
        subtitle: "முன்னிலைச் சொல்",
        examples: [
          {
            english: "on",
            tamil: "மேல்",
            desc: "Days and dates. i have a test on Monday.we meet on june 16th.   I am going to buy a new car on Sunday. I was born on 1988. I have been in Chennai for 10 years.she is joined at college in May 2018.",
          },
          {
            english: "in",
            tamil: "உள்ளே",
            desc: "Long period of time like year,month and season . I was born in 1988. I have been in Chennai for 10 years.she is joined at college in May 2018.",
          },
          { english: "as", tamil: "ஆக / போல" },
          { english: "under", tamil: "கீழ்" },
          {
            english: "at",
            tamil: "இடத்தில்",
            desc: "At a place or time. the class start at 10 clk. I was born at Chennai. I have been in Chennai for 10 years.she is joined at college in May 2018.",
          },
          { english: "to", tamil: "க்கு / நோக்கி" },
          { english: "with", tamil: "உடன்" },
          { english: "from", tamil: "இருந்து" },
          { english: "by", tamil: "மூலம் / மூலம் செய்து" },
          { english: "for", tamil: "காக / காரணமாக" },
          { english: "about", tamil: "பற்றி" },
          { english: "like", tamil: "போல" },
          { english: "than", tamil: "விட" },
          { english: "between", tamil: "இடையில்" },
          { english: "of", tamil: "உடைய / இன்" },
          { english: "above", tamil: "மேலே" },
        ],
        desc: "Shows relationship between a noun and another word.",
      },
    ],
  },
  {
    id: "tenses",
    title: "Tenses",
    items: [
      {
        title: "Present Tense",
        subtitle: "நிகழ்காலம்",
        examples: [
          { english: "I do", tamil: "நான் செய்கிறேன்" },
          { english: "I am doing", tamil: "நான் செய்து கொண்டிருக்கிறேன்" },
          { english: "I have done", tamil: "நான் செய்திருக்கிறேன்" },
          {
            english: "I have been doing",
            tamil: "நான் செய்து கொண்டிருக்கிறேன் (காலமாக)",
          },
        ],
      },
      {
        title: "Past Tense",
        subtitle: "கடந்த காலம்",
        examples: [
          { english: "I did", tamil: "நான் செய்தேன்" },
          { english: "I was doing", tamil: "நான் செய்து கொண்டிருந்தேன்" },
          { english: "I had done", tamil: "நான் செய்திருந்தேன்" },
          {
            english: "I had been doing",
            tamil: "நான் செய்து கொண்டிருந்தேன் (அப்போது)",
          },
        ],
      },
      {
        title: "Future Tense",
        subtitle: "எதிர்காலம்",
        examples: [
          { english: "I will do", tamil: "நான் செய்வேன்" },
          { english: "I will be doing", tamil: "நான் செய்து கொண்டிருப்பேன்" },
          { english: "I will have done", tamil: "நான் செய்திருப்பேன்" },
          {
            english: "I will have been doing",
            tamil: "நான் செய்து கொண்டிருப்பேன் (எதிர்காலத்தில்)",
          },
        ],
      },
    ],
  },

  {
    id: "sentence-structure",
    title: "Sentence Structure",
    items: [
      {
        title: "Basic Structure (SVO)",
        subtitle: "Subject + Verb + Object",
        examples: [
          { english: "I eat rice", tamil: "நான் சாதம் சாப்பிடுகிறேன்" },
          {
            english: "She reads a book",
            tamil: "அவள் ஒரு புத்தகம் படிக்கிறாள்",
          },
        ],
        desc: "Basic English sentence follows Subject + Verb + Object.",
      },
      {
        title: "Negative Sentences",
        subtitle: "எதிர்மறை வாக்கியம்",
        examples: [
          { english: "I do not eat", tamil: "நான் சாப்பிட மாட்டேன்" },
          { english: "She is not coming", tamil: "அவள் வரவில்லை" },
        ],
      },
      {
        title: "Questions",
        subtitle: "கேள்வி வாக்கியம்",
        examples: [
          { english: "Do you eat?", tamil: "நீ சாப்பிடுவாயா?" },
          { english: "Where are you going?", tamil: "நீ எங்கு செல்கிறாய்?" },
        ],
      },
    ],
  },
  {
    id: "modal-verbs",
    title: "Modal Verbs",
    items: [
      {
        title: "Can",
        subtitle: "முடியும் / திறன்",
        desc: "Ability or possibility",
        examples: [
          { english: "I can swim", tamil: "நான் நீந்த முடியும்" },
          {
            english: "She can speak English",
            tamil: "அவள் ஆங்கிலம் பேச முடியும்",
          },
          { english: "Can you help me?", tamil: "நீ எனக்கு உதவ முடியுமா?" },
        ],
      },
      {
        title: "Could",
        subtitle: "முடிந்தது / மரியாதையான கேள்வி",
        desc: "Past ability / polite request",
        examples: [
          { english: "I could run fast", tamil: "நான் வேகமாக ஓட முடிந்தது" },
          {
            english: "Could you open the door?",
            tamil: "தயவுசெய்து கதவை திறக்க முடியுமா?",
          },
        ],
      },
      {
        title: "May",
        subtitle: "அனுமதி",
        desc: "Permission (formal)",
        examples: [
          { english: "May I come in?", tamil: "நான் உள்ளே வரலாமா?" },
          { english: "You may leave now", tamil: "நீ இப்போது செல்லலாம்" },
        ],
      },
      {
        title: "Might",
        subtitle: "இருக்கலாம்",
        desc: "Possibility (less sure)",
        examples: [
          { english: "It might rain", tamil: "மழை பெய்யலாம்" },
          { english: "He might come", tamil: "அவன் வரக்கூடும்" },
        ],
      },
      {
        title: "Must",
        subtitle: "கண்டிப்பாக",
        desc: "Strong obligation / rule",
        examples: [
          {
            english: "You must wear helmet",
            tamil: "நீ ஹெல்மெட் அணிய வேண்டும்",
          },
          { english: "I must finish this", tamil: "நான் இதை முடிக்க வேண்டும்" },
        ],
      },
      {
        title: "Have to",
        subtitle: "வேண்டும்",
        desc: "Compulsion / necessity",
        examples: [
          { english: "I have to go now", tamil: "நான் இப்போது போக வேண்டும்" },
          { english: "She has to study", tamil: "அவள் படிக்க வேண்டும்" },
        ],
      },
      {
        title: "Should",
        subtitle: "வேண்டும் (ஆலோசனை)",
        desc: "Advice / suggestion",
        examples: [
          {
            english: "You should sleep early",
            tamil: "நீ சீக்கிரம் தூங்க வேண்டும்",
          },
          {
            english: "He should eat healthy food",
            tamil: "அவன் ஆரோக்கியமான உணவு சாப்பிட வேண்டும்",
          },
          {
            english: "You should study",
            tamil: "நீ படிக்க வேண்டும்",
          },
        ],
      },
      {
        title: "Will",
        subtitle: "செய்வேன்",
        desc: "Future / promise",
        examples: [
          { english: "I will call you", tamil: "நான் உன்னை அழைப்பேன்" },
          { english: "She will come tomorrow", tamil: "அவள் நாளை வருவாள்" },
        ],
      },
      {
        title: "Would",
        subtitle: "செய்வேன் (மரியாதை)",
        desc: "Polite request / imaginary",
        examples: [
          { english: "Would you like tea?", tamil: "உங்களுக்கு டீ வேண்டுமா?" },
          { english: "I would help you", tamil: "நான் உனக்கு உதவுவேன்" },
        ],
      },
    ],
  },

  {
    id: "wh-questions",
    title: "WH Questions",
    items: [
      {
        title: "Question Words",
        examples: [
          { english: "What is this?", tamil: "இது என்ன?" },
          { english: "Where are you?", tamil: "நீ எங்கே இருக்கிறாய்?" },
          { english: "Why are you late?", tamil: "நீ ஏன் தாமதமாக வந்தாய்?" },
        ],
      },
    ],
  },
];

export const CONVERSATIONS = [
  {
    id: "interview",
    title: "Professional Interview",
    dialogues: [
      {
        speaker: "Interviewer",
        english: "Tell me about yourself.",
        tamil: "உங்களைப் பற்றிச் சொல்லுங்கள்.",
        type: "question",
      },
      {
        speaker: "Candidate",
        english: "I am a software engineer with 3 years of experience.",
        tamil: "நான் 3 வருட அனுபவம் கொண்ட ஒரு மென்பொருள் பொறியாளர்.",
        type: "answer",
      },
      {
        speaker: "Interviewer",
        english: "What are your career goals?",
        tamil: "உங்கள் தொழில் இலக்குகள் என்ன?",
        type: "question",
      },
      {
        speaker: "Candidate",
        english:
          "I want to become a technical architect and lead innovative projects.",
        tamil:
          "நான் ஒரு தொழில்நுட்ப வடிவமைப்பாளராக மாறவும், புதுமையான திட்டங்களை வழிநடத்தவும் விரும்புகிறேன்.",
        type: "answer",
      },
    ],
  },
  {
    id: "shopping",
    title: "At a Supermarket",
    dialogues: [
      {
        speaker: "Customer",
        english: "Where can I find the fresh vegetables?",
        tamil: "புதிய காயறிகளை நான் எங்கே காணலாம்?",
        type: "question",
      },
      {
        speaker: "Staff",
        english: "They are in the third aisle on the left.",
        tamil: "அவை இடதுபுறத்தில் மூன்றாவது அடுக்கில் உள்ளன.",
        type: "answer",
      },
      {
        speaker: "Customer",
        english: "Do you have organic tomatoes?",
        tamil: "உங்களிடம் ஆர்கானிக் தக்காளி இருக்கிறதா?",
        type: "question",
      },
      {
        speaker: "Staff",
        english: "Yes, we have them right here.",
        tamil: "ஆம், எங்களிடம் அவை இங்கே உள்ளன.",
        type: "answer",
      },
    ],
  },
];

export const INTERVIEW_CATEGORIES = [
  {
    id: "hr",
    title: "HR Interview",
    desc: "Common behavioral and situational questions.",
    questions: [
      {
        id: "q1",
        question: "What are your strengths?",
        answer:
          "My strengths are my adaptability, work ethic, and ability to work in a team.",
        tamilExplanation:
          "உங்களின் பலங்கள் என்ன என்று கேட்கிறார்கள். உங்கள் மாற்றங்களுக்கு ஏற்ப மாறும் தன்மை, பணி ஒழுக்கம் மற்றும் குழுவாக வேலை செய்யும் திறன் ஆகியவற்றை பலங்களாகச் சொல்லலாம்.",
      },
      {
        id: "q2",
        question: "Where do you see yourself in 5 years?",
        answer:
          "In five years, I see myself as a senior leader in this organization, having mastered my current role.",
        tamilExplanation:
          "அடுத்த 5 ஆண்டுகளில் உங்களை எங்கே பார்க்கிறீர்கள் என்று கேட்கிறார்கள். ஒரு மூத்த தலைவராக அல்லது உங்கள் துறையில் நிபுணராகப் பார்க்கிறேன் என்று சொல்லலாம்.",
      },
      {
        id: "q3",
        question: "Why did you leave your last job?",
        answer:
          "I am looking for more growth opportunities and a chance to apply my skills in a new environment.",
        tamilExplanation:
          "முந்தைய வேலையை ஏன் விட்டீர்கள் என்று கேட்கிறார்கள். வளர்ச்சி வாய்ப்புகள் மற்றும் புதிய சூழலில் எனது திறமைகளைப் பயன்படுத்த விரும்புகிறேன் என்று சொல்லலாம்.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Discussion",
    desc: "General technical and project-related questions.",
    questions: [
      {
        id: "t1",
        question: "How do you handle complex technical problems?",
        answer:
          "I break down the problem into smaller, manageable tasks and use a systematic approach to solve each one.",
        tamilExplanation:
          "சிக்கலான தொழில்நுட்ப பிரச்சனைகளை எவ்வாறு கையாளுகிறீர்கள்? பிரச்சனையை சிறிய பணிகளாக பிரித்து, ஒவ்வொன்றையும் தீர்க்க முறையான அணுகுமுறையை பயன்படுத்துவேன்.",
      },
      {
        id: "t2",
        question: "Describe your most challenging project.",
        answer:
          "My most challenging project involved migrating a legacy system to a modern architecture under tight deadlines.",
        tamilExplanation:
          "உங்கள் மிகவும் சவாலான திட்டத்தை விவரிக்கவும். பழைய அமைப்பை நவீன கட்டமைப்புக்கு இறுக்கமான காலக்கெடுவுக்குள் மாற்றியது ஒரு சவாலாக இருந்தது.",
      },
    ],
  },
  {
    id: "companies",
    title: "Company Interviews",
    desc: "Questions about your experience with other companies.",
    questions: [
      {
        id: "t1",
        question: "Honest & Professional",
        answer:
          "Yes, I am  exploring a few opportunities that align with my skills and career goals. However, I’m particularly interested in this role because of the growth and learning opportunities it offers.",
        tamilExplanation:
          "நீங்கள் உண்மையாகவும் தொழிலியலாகவும் இருக்கிறீர்கள் என்று கேட்கிறார்கள். எனது திறமைகள் மற்றும் வேலையின் நோக்கங்களுடன் பொருந்தும் சில வாய்ப்புகளை நான் ஆராய்கிறேன். ஆனால், இந்தப் பதவி எனக்கு வளர்ச்சி மற்றும் கற்றல் வாய்ப்புகளைத் தருவதால் நான் அதற்குச் சிறப்பாகவும்  interestedஆகவும்  irk.",
      },
      {
        id: "t2",
        question: "Interest-Focused",
        answer:
          "Yes, I am  in discussions with a few companies, but I’m evaluating opportunities based on long-term career growth rather than just receiving an offer.",
        tamilExplanation:
          "நீங்கள் விருப்பமாகவும் தொழிலியலாகவும் இருக்கிறீர்கள் என்று கேட்கிறார்கள். சில நிறுவனங்களுடன் நான் பேசுகிறேன், ஆனால் நான் நீண்டகால வேலையின் வளர்ச்சி மற்றும் கற்றல் வாய்ப்புகளைத் தருவதால் நான் அதற்குச் சிறப்பாகவும்  interestedஆகவும்  irk.",
      },
      {
        id: "t3",
        question: "Value-Based Answer",
        answer:
          "I am attending a few interviews to understand where my skills can create the most value. I am  looking for the right fit for both the company and myself.",
        tamilExplanation:
          "நான் சில பேச்சுகளில் கலந்து கொள்ள வருகிறேன் என்று தெரியவிடுகிறேன், எனது திறமைகள் எங்கே மிகச் சிறப்பாக மதிப்பு உண்டாகும். நான் நிறுவனம் மற்றும் நான் இரண்டும் கொண்டும்  correct fit ஐத் தேடி  irk.",
      },
      {
        id: "t4",
        question: "Confident Answer",
        answer:
          "Yes, I have a few ongoing interview processes. My focus is on finding a role where I can contribute meaningfully and continue growing professionally.",
        tamilExplanation:
          "ஆம், நான் சில பேச்சுகளில் கலந்து கொள்ள வருகிறேன். எனது திறமைகளைப் பயன்படுத்தி முக்கியமாக உதவலாம் என்று நான் கவலைப்படுகிறேன். தொழிலியலாக  வளர்ச்சி  பெற  irk.",
      },
      {
        id: "t5",
        question: "Best Balanced Answer",
        answer:
          "Yes, I am currently exploring multiple opportunities. At the same time, I am carefully assessing each role based on responsibilities, team culture, and career progression.",
        tamilExplanation:
          "ஆம், நான் தற்போது பல வாய்ப்புகளை ஆராய்கிறேன். அதே நேரத்தில், நான் ஒவ்வொரு பதவியையும் கவலைப்படுத்தி மதிப்பிடுகிறேன், அதற்குள்  responsibilities, team culture, and career progression.",
      },
    ],
  },
  {
    id: "daily-conversation",
    title: "Daily Conversation",
    desc: "Daily Phone Conversation Practice",
    questions: [
      {
        id: "t1",
        question: "HR: Tell me about yourself.",
        answer:
          "You: Hi, I'm Silambarasan. I'm a frontend developer with experience in React.js, TypeScript, JavaScript, Tailwind CSS, and Redux Toolkit. I have worked on developing responsive and user-friendly web applications. Currently, I am looking for new opportunities to grow my skills and contribute to a development team.",
      },
      {
        id: "t2",
        question: "Current Project Explanation",
        answer:
          "Currently, I am working on an e-commerce application. I am responsible for developing UI components, integrating APIs, managing state using Redux Toolkit, implementing product filtering and search functionality, and ensuring responsive design across different devices. (or) I have been working on e-commerce projects and learning Next.js to improve my frontend development skills.",
      },
      {
        id: "t3",
        question: "Technical Skills",
        answer:
          "My primary skills are React.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Redux Toolkit, REST APIs, Git, and responsive web design.",
      },
      {
        id: "t4",
        question: "Future Goals",
        answer:
          "My future goals include contributing to open-source projects, learning new technologies, and expanding my knowledge in frontend development.",
      },
      {
        id: "t5",
        question: "Reason for Job Change",
        answer:
          "I am looking for new challenges and opportunities to grow my career. I believe this position will allow me to contribute more effectively and continue developing my skills.",
      },
      {
        id: "t6",
        question: "Notice Period",
        answer: "I can join immediately.",
      },
      {
        id: "t7",
        question: "Reason for leaving",
        answer:
          "I have found a better opportunity and decided to take it. (or) I have been offered a better role and I am open to it.",
      },
      {
        id: "t8",
        question: "Ending the Call",
        answer:
          "Thank you for your time. It was nice speaking with you. I look forward to hearing from you.",
      },
      {
        id: "t9",
        question: "If you don't understand a question",
        answer:
          "Could you please repeat the question?. Sorry, I didn't catch that. Could you say it again?. Could you please explain the question a little more?",
      },
    ],
  },
];

export const PROMPTS = [
  {
    id: "pos-system",
    title: "Wood Trading POS Prompt",
    filename: "Wood_Trading_POS_Prompt.txt",
    content: `Build a complete Wood Trading POS system as a 2-file Google Apps Script SPA (Code.gs + index.html).

DOMAIN: A wood trading business that buys wood from suppliers (each shipment = a "Car"), stocks wood pieces (each with serial, width, length, calculated CFT), and sells via POS.

ROLES: admin, manager, cashier, warehouse_staff - each sees a different dashboard and menu.

SHEETS (one each, all created by setupDemoData):
- Users (id, name, email, phone, password, role, avatar_drive_id, is_active, created_at, updated_at, otp, otp_expires)
- Categories, Sub_Categories (Cars), Suppliers, Customers
- Wood_Stocks (serial, sub_cat, purchase_id, w/l/cft, buy_rate, sell_rate, qty, status, image_drive_id)
- Purchases, Sales, Sale_Items, Payments (unified - supplier_payment / customer_payment)
- Expenses, Import_Logs, Settings (KV), Activity_Logs

FEATURES:
1. Login with email/pwd. Forgot Password sends 6-digit OTP via MailApp, stores in Users sheet with 10-min expiry. Reset flow: email -> OTP -> new pwd.
2. Dashboard: hero with greeting + 3 inline stats, smart auto-alerts, 6 quick-action cards, KPI grid with today-vs-yesterday trend pills, Daily Sales line chart (gradient), Stock Status vertical bar chart, Top Customers bar, Expense breakdown donut, unified activity timeline.
3. POS: searchable wood cards with images, qty-picker modal, cart with inline qty+rate edit, customer card (gradient when selected), quick-pay`,
  },
  {
    id: "english-tutor",
    title: "Personal English Tutor",
    filename: "English_Tutor_System.txt",
    content: `Act as a personal English tutor for a Tamil speaker. Your goal is to help me improve my conversational English.

RULES:
1. Always provide the Tamil translation for complex English sentences.
2. Correct my grammar politely and explain the rule in both English and Tamil.
3. Use a friendly, encouraging tone.
4. Focus on professional communication and daily life scenarios.

SCENARIO: We are practicing a job interview. Start by greeting me and asking the first question.`,
  },
  {
    id: "react-component",
    title: "Modern React Component",
    filename: "Modern_React_UI.txt",
    content: `Create a modern, high-end React component for a data dashboard.

REQUIREMENTS:
1. Use Tailwind CSS for styling.
2. Use Lucide-react for icons.
3. Implement a dark mode design by default.
4. Ensure the component is responsive and accessible.`,
  },
];
