// All ideas organized in arrays

const creativeIdeas = [
  "📔 Journal",
  "🎨 Sketch",
  "🖌️ Paint",
  "📝 Write a story",
  "🖋️ Try calligraphy",
  "🎸 Play an instrument",
  "✂️ DIY crafts",
  "🏠 Decorate",
  "🧶 Knit or sew",
  "📌 Make a vision board"
];

const physicalIdeas = [
  "🚶 Walk",
  "🧘 Yoga",
  "🏋️ Workout",
  "💃 Dance",
  "🤸 Stretch",
  "🏀 Play sports",
  "🚴 Bike ride",
  "🏊 Swim",
  "🌱 Garden",
  "🎨 Try a new hobby"
];

const socialIdeas = [
  "💌 Write a letter",
  "📞 Call someone",
  "🎲 Host a game night",
  "🗓️ Plan a meetup",
  "🤝 Volunteer",
  "👥 Join a group",
  "🍪 Bake for others",
  "📚 Teach a skill",
  "💬 Deep conversation",
  "🎲 Play board games"
];

const intellectualIdeas = [
  "📚 Read",
  "🧩 Solve puzzles",
  "🌍 Learn a language",
  "📖 Study something new",
  "🎥 Watch a documentary",
  "🏛️ Visit a museum",
  "🎯 Plan goals",
  "🎧 Listen to a podcast",
  "🗂️ Organize tasks",
  "💡 Write down ideas"
]
const relaxingIdeas = [
  "😴 Nap",
  "🌿 Watch nature",
  "🎵 Listen to music",
  "🧴 Do skincare",
  "🕯️ Try aromatherapy",
  "☕ Sip tea or coffee",
  "🙏 Practice gratitude",
  "🌬️ Deep breathing",
  "🌅 Watch the sunset",
  "🐾 Play with pets"
];

// helper function to randomize index number
function getRandomIndex(arr){
  const randomNum = Math.random()
  const randomIndex = Math.floor(randomNum * arr.length);
  return randomIndex
}

//function to print the random option onto the screen
function printMessage(chosenIdea) {
  document.getElementById('output').innerHTML = chosenIdea
}

//functions for each category, to get a randdomized idea using the random index number
function getCreativeIdea(){
  const randomIndex = getRandomIndex(creativeIdeas)
  const creativeIdea = creativeIdeas[randomIndex]
  printMessage(creativeIdea)
}

function getPhysicalIdea(){
  const randomIndex = getRandomIndex(physicalIdeas)
  const physicalIdea = physicalIdeas[randomIndex]
  printMessage(physicalIdea)
}

function getSocialIdea(){
  const randomIndex = getRandomIndex(socialIdeas)
  const socialIdea = socialIdeas[randomIndex]
  printMessage(socialIdea)
}

function getIntellectualIdea(){
  const randomIndex = getRandomIndex(intellectualIdeas)
  const intellectualIdea = intellectualIdeas[randomIndex]
  printMessage(intellectualIdea)
}

function getRelaxingIdea(){
  const randomIndex = getRandomIndex(relaxingIdeas)
  const relaxingIdea = relaxingIdeas[randomIndex]
  printMessage(relaxingIdea)
}