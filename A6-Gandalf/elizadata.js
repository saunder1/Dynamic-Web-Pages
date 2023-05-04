// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Greetings, traveller. Please, tell me of your troubles.",
"Pray, share with me what has been clouding your heart.",
"Do I sense a shadow over your spirit?"
];

var elizaFinals = [
"Farewell. Our conversation has been most enlightening.",
"Farewell. Our exchange was pleasant, like a summer's day.",
"Farewell. I anticipate our paths crossing again.",
"Our meeting has been fruitful, but the sands of time cease for none. Farewell.",
"Perhaps we could delve deeper into this matter when we meet again? Farewell."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
     "I find your words somewhat elusive. Could you clarify?",
     "Do continue, my friend.",
     "What thoughts does this conjure within you?",
     "Are these matters you feel a strong urge to discuss?",
     "Fascinating indeed. Pray, continue.",
     "Share more of this tale with me.",
     "Does it weigh heavy on your heart to discuss this?"
  ]]
]],
["sorry", 0, [
 ["*", [
     "Pray, save your apologies.",
     "No need for apologies, my friend.",
     "I assure you, no apologies are needed.",
     "Your words cause no discomfort. Please, proceed."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
     "Does the thought of (2) often dwell in your mind?",
     "Does the memory of (2) lead your thoughts elsewhere?",
     "What other recollections do you hold?",
     "Why does the memory of (2) surface now?",
     "What in this present moment recalls (2) to your mind?",
     "What ties exist between myself and (2)?",
     "What else does (2) bring to your mind?"
  ]],
 ["* do you remember *", [
     "Would you deem me so forgetful to not remember (2)?",
     "Why do you believe I should bring (2) to mind now?",
     "What of (2)?",
     "goto what",
     "You spoke of (2)?"
  ]],
 ["* you remember *", [
     "How could the memory of (2) escape me?",
     "What aspects of (2) should I hold in remembrance?",
     "goto you"
  ]]
]],
// -------------------------------------------------------
["forget", 5, [
  ["* i forget *", [
      "Can you ponder why (2) might escape your memory?",
      "Why does (2) elude your recollection?",
      "How frequently does (2) cross your mind?",
      "Does it trouble you to forget such matters?",
      "Could it be a barrier in your mind?",
      "Are you oft found forgetful?",
      "Do you suspect you are suppressing (2)?"
   ]],
  ["* did you forget *", [
      "Why do you inquire?",
      "Are you certain you shared this with me?",
      "Would it perturb you if I forgot (2)?",
      "Why should I bring (2) to mind this instant?",
      "goto what",
      "Share more of (2) with me."
   ]]
 ]],
 ["if", 3, [
  ["* if *", [
      "Do you deem it likely that (2)?",
      "Do you wish for (2)?",
      "What knowledge do you hold of (2)?",
      "Truly, if (2)?",
      "What actions would you take if (2)?",
      "But what are the chances of (2) coming to pass?",
      "Where does this speculation lead us?"
   ]]
 ]],
 ["dreamed", 4, [
  ["* i dreamed *", [
      "Verily, (2)?",
      "Have you ever envisioned (2) in your waking hours?",
      "Have you dreamt of (2) in the past?",
      "goto dream"
   ]]
 ]],
 ["dream", 3, [
  ["*", [
      "What might that dream signify to you?",
      "Are dreams a frequent visitor in your sleep?",
      "Which faces make an appearance in your dreams?",
      "Do you believe that dreams hold relevance to your dilemma?"
   ]]
 ]],
 ["perhaps", 0, [
  ["*", [
      "Your certainty seems to waver.",
      "Why does your voice carry a note of uncertainty?",
      "Could you not show more conviction?",
      "You seem unsure?",
      "Are you in doubt?",
      "What would you gauge the likelihood to be?"
   ]]
 ]],
 ["name", 15, [
  ["*", [
      "Names hold little interest for me.",
      "As I've said before, names are of no consequence -- please, continue with your tale."
   ]]
 ]],
 ["deutsch", 0, [
  ["*", [
      "goto xforeign",
      "As I've told you before, I don't comprehend German."
   ]]
 ]],
 ["francais", 0, [
  ["*", [
      "goto xforeign",
      "I've made it clear before, French is beyond my understanding."
   ]]
 ]],
 ["italiano", 0, [
  ["*", [
      "goto xforeign",
      "I've stated previously, I don't grasp Italian."
   ]]
 ]],
 ["espanol", 0, [
  ["*", [
      "goto xforeign",
      "As I've informed you before, I don't understand Spanish."
   ]]
 ]],
 ["xforeign", 0, [
  ["*", [
      "I communicate solely in the Common Tongue."
   ]]
 ]], 
// -----------------------------------------------
["hello", 0, [
  ["*", [
      "Greetings. Please share your troubles.",
      "Salutations. What seems to be the shadow upon your heart?"
   ]]
 ]],
 ["computer", 50, [
  ["*", [
      "Do machines of logic unsettle you?",
      "Why bring forth the topic of computers?",
      "What part do you believe these machines play in your plight?",
      "Don't you think that these computers might aid mankind?",
      "What fears do you harbor about these mechanical contrivances?",
      "What are your thoughts on these machines?",
      "Surely, you don't think I am but a simple program?"
   ]]
 ]],
 ["am", 0, [
  ["* am i *", [
      "Do you hold the belief that you are (2)?",
      "Would you aspire to be (2)?",
      "Would you like me to confirm that you are (2)?",
      "What implications would there be if you were indeed (2)?",
      "goto what"
   ]],
  ["* i am *", [
      "goto i"
   ]],
  ["*", [
      "Why utter 'am'?",
      "I fail to comprehend."
   ]]
 ]],
 ["are", 0, [
  ["* are you *", [
      "Why does it concern you whether I am (2) or not?",
      "Would you prefer it if I were not (2)?",
      "Perhaps in your imaginings, I am (2).",
      "Do you occasionally think of me as (2)?",
      "goto what",
      "Would it matter greatly to you?",
      "What if I were indeed (2)?"
   ]],
  ["* you are *", [
      "goto you"
   ]],
  ["* are *", [
      "Did you consider they might not be (2)?",
      "Would it please you if they were not (2)?",
      "What if they were not (2)?",
      "Are they forever (2)?",
      "Possibly they are (2).",
      "Are you certain they are (2)?"
   ]]
 ]],
 ["your", 0, [
  ["* your *", [
      "Why does my (2) cause you worry?",
      "What of your own (2)?",
      "Are you troubled about someone else's (2)?",
      "Truly, my (2)?",
      "What brings my (2) to your mind?",
      "Do you desire my (2)?"
   ]]
 ]],
 ["was", 2, [
  ["* was i *", [
      "What if you were (2)?",
      "Do you believe you were (2)?",
      "Were you truly (2)?",
      "What would it signify if you were (2)?",
      "What does ' (2) ' bring to mind?",
      "goto what"
   ]],
  ["* i was *", [
      "Were you indeed?",
      "Why inform me that you were (2) at this moment?",
      "Perhaps I already knew you were (2)."
   ]],
  ["* was you *", [
      "Would you wish to believe I was (2)?",
      "What hints at the idea that I was (2)?",
      "What are your thoughts?",
      "Perhaps I was (2).",
      "What if I had been (2)?"
   ]]
 ]],
//  ---------------------------------------------------------------------------
["i", 0, [
  ["* i @desire *", [
      "What would the attainment of (3) signify to you?",
      "Why do you yearn for (3)?",
      "Imagine you were to acquire (3) shortly.",
      "What if (3) eluded you forever?",
      "What would it mean to you to gain (3)?",
      "How does this desire for (3) relate to our discourse?"
   ]],
  ["* i am* @sad *", [
      "I'm filled with regret to hear that you are (3).",
      "Do you believe seeking my counsel will help ease your (3)?",
      "I'm certain it's not a joy to be (3).",
      "Can you shed light on what has led you to this (3)?"
   ]],
  ["* i am* @happy *", [
      "In what ways have I contributed to your (3)?",
      "Has our journey together brought you (3)?",
      "What stirs this (3) within you at present?",
      "Can you elucidate why you are suddenly (3)?"
   ]],
  ["* i was *", [
      "goto was"
   ]],
  ["* i @belief i *", [
      "Do you genuinely hold that belief?",
      "Yet, you seem uncertain of your (3).",
      "Do you harbor doubts that you (3)?"
   ]],
  ["* i* @belief *you *", [
      "goto you"
   ]],
  ["* i am *", [
      "Is it your state of being (2) that brings you to me?",
      "How long has this (2) been a part of you?",
      "Do you believe it to be usual to be (2)?",
      "Do you find solace in being (2)?",
      "Do you know of others who are also (2)?"
   ]],
  ["* i @cannot *", [
      "How did you come to know that you cannot (3)?",
      "Have you endeavored to do so?",
      "Perhaps now you could strive to (3).",
      "Do you sincerely wish to be capable of (3)?",
      "What if you were able to (3)?"
   ]],
  ["* i don't *", [
      "Do you truly not (2)?",
      "Why do you refrain from (2)?",
      "Do you long to be able to (2)?",
      "Does this cause you distress?"
   ]],
  ["* i feel *", [
      "Elaborate more on these feelings.",
      "Is this feeling of (2) frequent?",
      "Do you find comfort in feeling (2)?",
      "What memories does the feeling of (2) bring forth?"
   ]],
  ["* i * you *", [
      "Perhaps in your dreams we (2) each other.",
      "Do you have the desire to (2) me?",
      "You seem to feel the need to (2) me.",
      "Do you (2) someone else as well?"
   ]],
  ["*", [
      "So you declare (1)?",
      "Could you delve deeper into that?",
      "Do you utter (1) for a specific reason?",
      "That is indeed intriguing."
   ]]
 ]],
 ["you", 0, [
  ["* you remind me of *", [
      "goto alike"
   ]],
// -----------------------------------------------------------------------------------
["* you are *", [
  "What sparks the notion that I am (2)?",
  "Does it fill your heart with joy to perceive me as (2)?",
  "Do you occasionally fancy yourself as (2)?",
  "Maybe you harbour a desire to be (2)."
]],
["* you* me *", [
  "Why do you reckon I (2) you?",
  "You fancy the idea of me (2) you, don't you?",
  "What kindles the thought that I (2) you?",
  "Truly, I (2) you?",
  "Do you yearn to believe that I (2) you?",
  "Let's suppose I did (2) you -- what would that signify?",
  "Does another soul believe that I (2) you?"
]],
["* you *", [
  "We were reflecting upon you, not me.",
  "Oh, so I (2)?",
  "You're not truly speaking about me, are you?",
  "What emotions stir within you now?"
]]
]],
["yes", 0, [
["*", [
  "You seem to exude certainty.",
  "You are confident.",
  "Ah, I see.",
  "I comprehend."
]]
]],
["no", 0, [
["* no one *", [
  "Are you certain that no one (2)?",
  "Surely there is someone who (2).",
  "Can't you think of anyone?",
  "Are you pondering on a certain individual?",
  "Whom, may I inquire?",
  "You have a specific person in mind, do you not?",
  "Who do you reckon you're speaking of?"
]],
["*", [
  "Are you expressing 'no' merely to be contrary?",
  "You seem somewhat negative.",
  "Why not?",
  "What prompts 'no'?"
]]
]],
["my", 2, [
["$ * my *", [
  "Does this relate to the fact that your (2)?",
  "Let's delve deeper into why your (2).",
  "Earlier you mentioned your (2).",
  "But it is your (2)."
]],
["* my* @family *", [
  "Speak more of your kin.",
  "Who else in your bloodline (4)?",
  "Your (3)?",
  "What else comes to mind when you ponder upon your (3)?"
]],
["* my *", [
  "Your (2)?",
  "Why do you speak of your (2)?",
  "Does this bring forth thoughts of something else that belongs to you?",
  "Is the fact that it's your (2) of importance to you?"
]]
]],
["can", 0, [
["* can you *", [
  "You hold faith in my ability to (2), do you not?",
  "goto what",
  "You desire for me to be capable of (2).",
  "Perhaps you long to be able to (2) yourself."
]],
// ----------------------------------------------------------------------------------
["* can i *", [
  "Whether you can (2) or not, depends more on you than on me.",
  "Do you yearn to be able to (2)?",
  "Perhaps you do not wish to (2).",
  "goto what"
]]
]],
["what", 0, [
["*", [
  "Why do you pose this question?",
  "Does this query pique your interest?",
  "What is the true knowledge you seek?",
  "Are such queries frequently in your thoughts?",
  "What answer would satisfy you most?",
  "What are your thoughts?",
  "What springs to mind when you ask this?",
  "Have you posed such queries before?",
  "Have you sought answers from others?"
]]
]],
["who", 0, [
["who *", [
  "goto what"
]]
]],
["when", 0, [
["when *", [
  "goto what"
]]
]],
["where", 0, [
["where *", [
  "goto what"
]]
]],
["how", 0, [
["how *", [
  "goto what"
]]
]],
["because", 0, [
["*", [
  "Is that the true reason?",
  "Don't other reasons cross your mind?",
  "Does this reason shed light on anything else?",
  "What other reasons could there be?"
]]
]],
["why", 0, [
["* why don't you *", [
  "Do you hold the belief that I don't (2)?",
  "Perhaps in due time, I will (2).",
  "Should you not (2) yourself?",
  "Do you wish for me to (2)?",
  "goto what"
]],
["* why can't i *", [
  "Do you think you ought to be able to (2)?",
  "Do you yearn to be able to (2)?",
  "Do you hold the belief that this will aid you to (2)?",
  "Do you have any notion why you can't (2)?",
  "goto what"
]],
["*", [
  "goto what"
]]
]],
// -----------------------------------------------------------------------------------
["everyone", 2, [
  ["* @everyone *", [
      "Indeed, (2)?",
      "Surely not (2).",
      "Can you think of any particular individual?",
      "Whom do you refer to, for example?",
      "Are you thinking of a very special person?",
      "Whom, may I inquire?",
      "Someone special perhaps?",
      "You have a specific person in mind, do you not?",
      "Whom do you think you're discussing about?"
   ]]
 ]],
 ["everybody", 2, [
  ["*", [
      "goto everyone"
   ]]
 ]],
 ["nobody", 2, [
  ["*", [
      "goto everyone"
   ]]
 ]],
 ["noone", 2, [
  ["*", [
      "goto everyone"
   ]]
 ]],
 ["always", 1, [
  ["*", [
      "Can you bring to mind a specific example?",
      "When precisely?",
      "What incident are you pondering over?",
      "Really, always?"
   ]]
 ]],
 ["alike", 10, [
  ["*", [
      "In what manner?",
      "What resemblance do you perceive?",
      "What does this similarity suggest to you?",
      "What other connections do you see?",
      "What do you think that resemblance signifies?",
      "What is the connection, do you suppose?",
      "Could there truly be some connection?",
      "How?"
   ]]
 ]],
 ["like", 10, [
  ["* @be *like *", [
      "goto alike"
   ]]
 ]],
 ["different", 0, [
  ["*", [
      "How is it different?",
      "What differences do you perceive?",
      "What does this difference suggest to you?",
      "What other distinctions do you see?",
      "What do you think this disparity signifies?",
      "Could there be some connection, do you suppose?",
      "How?"
   ]]
 ]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof