const fallbackSongs = [
  { title: "Good Days", artist: "SZA", moods: ["soft", "glow"], topics: ["self", "love"], color: "#8bd8bd", glyph: "☼" },
  { title: "Dreams", artist: "Fleetwood Mac", moods: ["rain", "soft"], topics: ["self", "love"], color: "#7aa2d8", glyph: "☾" },
  { title: "Golden", artist: "Harry Styles", moods: ["glow", "main"], topics: ["self", "love"], color: "#f1c74b", glyph: "✦" },
  { title: "Motion Sickness", artist: "Phoebe Bridgers", moods: ["rain"], topics: ["love", "self"], color: "#9da0b8", glyph: "≋" },
  { title: "Electric Feel", artist: "MGMT", moods: ["glow", "main"], topics: ["chaos", "love"], color: "#58d7c4", glyph: "↯" },
  { title: "Sweet Disposition", artist: "The Temper Trap", moods: ["glow", "soft"], topics: ["self", "work"], color: "#ff9f6e", glyph: "◇" },
  { title: "Ribs", artist: "Lorde", moods: ["rain", "main"], topics: ["self", "chaos"], color: "#5d6b95", glyph: "◐" },
  { title: "Dog Days Are Over", artist: "Florence + The Machine", moods: ["glow", "main"], topics: ["work", "self"], color: "#f46f66", glyph: "▲" },
  { title: "Space Song", artist: "Beach House", moods: ["rain", "soft"], topics: ["love", "self"], color: "#7c74c9", glyph: "☆" },
  { title: "The Less I Know The Better", artist: "Tame Impala", moods: ["main", "glow"], topics: ["love", "chaos"], color: "#f08bb4", glyph: "●" },
  { title: "Vienna", artist: "Billy Joel", moods: ["soft"], topics: ["work", "self"], color: "#d7a85d", glyph: "⌁" },
  { title: "Dancing Queen", artist: "ABBA", moods: ["main", "glow"], topics: ["chaos", "self"], color: "#ffcf4d", glyph: "♢" },
  { title: "Mystery of Love", artist: "Sufjan Stevens", moods: ["soft", "rain"], topics: ["love", "self"], color: "#9fd3c7", glyph: "♡" },
  { title: "Levitating", artist: "Dua Lipa", moods: ["glow", "main"], topics: ["love", "work"], color: "#a77cff", glyph: "✧" },
  { title: "Pink + White", artist: "Frank Ocean", moods: ["soft", "rain"], topics: ["self", "love"], color: "#f3b5bc", glyph: "◌" },
  { title: "Heroes", artist: "David Bowie", moods: ["main"], topics: ["work", "self", "chaos"], color: "#ff7c59", glyph: "★" },
  { title: "Everybody Wants To Rule The World", artist: "Tears For Fears", moods: ["main", "glow"], topics: ["work", "money"], color: "#75b7e7", glyph: "◎" },
  { title: "Here Comes The Sun", artist: "The Beatles", moods: ["soft", "glow"], topics: ["self", "money"], color: "#ffd86a", glyph: "☀" },
  { title: "Midnight City", artist: "M83", moods: ["main", "glow"], topics: ["work", "chaos"], color: "#5077ff", glyph: "▣" },
  { title: "Liability", artist: "Lorde", moods: ["rain"], topics: ["self", "love"], color: "#c2b7aa", glyph: "…" },
  { title: "Unwritten", artist: "Natasha Bedingfield", moods: ["glow", "main"], topics: ["work", "self"], color: "#76d4ff", glyph: "✎" },
  { title: "Bags", artist: "Clairo", moods: ["soft", "rain"], topics: ["love"], color: "#d6a0a8", glyph: "◑" },
  { title: "As It Was", artist: "Harry Styles", moods: ["glow", "rain"], topics: ["self", "love"], color: "#e46f55", glyph: "↻" },
  { title: "Don't Start Now", artist: "Dua Lipa", moods: ["main", "glow"], topics: ["love", "work"], color: "#ff6a8b", glyph: "!" },
  { title: "Put Your Records On", artist: "Corinne Bailey Rae", moods: ["soft", "glow"], topics: ["self"], color: "#d79b52", glyph: "♪" },
  { title: "No Surprises", artist: "Radiohead", moods: ["rain", "soft"], topics: ["work", "self"], color: "#a7b2b8", glyph: "□" },
  { title: "Run the World (Girls)", artist: "Beyonce", moods: ["main"], topics: ["work", "money", "self"], color: "#e0b045", glyph: "♛" },
  { title: "Supercut", artist: "Lorde", moods: ["main", "rain"], topics: ["love", "chaos"], color: "#d85f88", glyph: "◆" },
  { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", moods: ["glow", "main"], topics: ["love", "chaos"], color: "#ff78b9", glyph: "♫" },
  { title: "Borderline", artist: "Tame Impala", moods: ["rain", "glow"], topics: ["chaos", "self"], color: "#c98758", glyph: "≈" },
  { title: "Lovely Day", artist: "Bill Withers", moods: ["soft", "glow"], topics: ["money", "self"], color: "#f0c35b", glyph: "☼" },
  { title: "Green Light", artist: "Lorde", moods: ["main", "glow"], topics: ["love", "work"], color: "#5ee07d", glyph: "▶" },
];

const palette = ["#8bd8bd", "#7aa2d8", "#f1c74b", "#9da0b8", "#58d7c4", "#ff9f6e", "#f08bb4", "#d7a85d"];
const glyphs = ["♪", "☾", "✦", "≋", "◇", "◐", "▲", "☆", "●", "⌁", "♡", "✧"];
const allMoods = ["soft", "glow", "rain", "main"];
const allTopics = ["self", "work", "love", "money", "chaos"];

const songs = (window.playlistSongs && window.playlistSongs.length ? window.playlistSongs : fallbackSongs).map((song, index) => ({
  ...song,
  artist: song.artist || "YouTube playlist BM",
  moods: song.moods || allMoods,
  topics: song.topics || allTopics,
  color: song.color || palette[index % palette.length],
  glyph: song.glyph || glyphs[index % glyphs.length],
}));

const topicLabels = {
  self: "ตัวเองและใจ",
  work: "งานหรือโปรเจกต์",
  love: "ความรักหรือคนคุย",
  money: "เงินและจังหวะชีวิต",
  chaos: "วันที่อยากให้เพลงช่วยพยุง",
};

const directAnswers = {
  self: {
    answer: "อย่าเพิ่งตอบแทนใจตัวเองด้วยความรีบ",
    action: "เลือกหนึ่งเรื่องที่ทำให้ตัวเองโล่งขึ้น แล้วทำก่อนเรื่องอื่น",
  },
  work: {
    answer: "ทำเวอร์ชันเล็กก่อน อย่ารอให้พร้อมทั้งระบบ",
    action: "ตั้งเวลา 25 นาที แล้วทำชิ้นที่ส่งต่อหรือโชว์คนอื่นได้",
  },
  love: {
    answer: "ถามตรงๆ ได้ แต่อย่าส่งตอนอารมณ์พุ่ง",
    action: "พิมพ์สิ่งที่อยากพูดไว้ก่อน รอ 15 นาที แล้วค่อยตัดสินใจว่าจะส่งไหม",
  },
  money: {
    answer: "ยังไม่ควรเพิ่มภาระใหม่ ถ้ายังไม่เห็นยอดรวมชัดๆ",
    action: "เปิดรายการใช้จ่ายล่าสุด แล้วตัดหนึ่งอย่างที่ไม่จำเป็นออก",
  },
  chaos: {
    answer: "อย่าตัดสินใจตอนหัววุ่น ให้ลดตัวเลือกก่อน",
    action: "เขียน 3 สิ่งที่ค้างอยู่ แล้วเลือกทำแค่ข้อที่ใช้เวลาน้อยที่สุด",
  },
};

const decisionModes = ["ทำได้ แต่เริ่มแบบเล็ก", "รอก่อน แล้วดูข้อมูลเพิ่ม", "คุยให้ชัดก่อนขยับ", "ตัดสิ่งที่ไม่จำเป็นออกก่อน", "เลือกทางที่ทำให้วันนี้ง่ายขึ้น"];

const luckyColors = ["เหลืองมะนาว", "ฟ้าสด", "ชมพูซ่า", "เขียวใบไม้", "ม่วงไฟนีออน", "ขาวครีม", "ส้มพีช", "ดำเทปคาสเซ็ต"];
const luckyEmojis = ["🎧", "✨", "🌈", "🪩", "🌙", "💿", "🍀", "🫶", "⚡", "🎵"];
const luckyTimes = ["09:09", "10:24", "11:11", "13:13", "15:45", "17:17", "20:08", "22:22"];

const state = {
  lastSong: null,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const nameInput = $("#nameInput");
const topicSelect = $("#topicSelect");
const birthDaySelect = $("#birthDaySelect");
const birthMonthSelect = $("#birthMonthSelect");
const birthYearSelect = $("#birthYearSelect");
const questionInput = $("#questionInput");
const record = $("#record");
const recordGlyph = $("#recordGlyph");
const coverArt = $("#coverArt");
const coverGlyph = $("#coverGlyph");
const songTitle = $("#songTitle");
const artistName = $("#artistName");
const fortuneText = $("#fortuneText");
const songEnergy = $("#songEnergy");
const lifeHook = $("#lifeHook");
const tinyQuest = $("#tinyQuest");
const warningText = $("#warningText");
const oracleAnswer = $("#oracleAnswer");
const spotifyLink = $("#spotifyLink");
const youtubeLink = $("#youtubeLink");
const songCard = $("#songCard");
const drawButton = $("#drawButton");
const readingPanel = $(".reading");
const trackCountLabel = $("#trackCountLabel");

function seededIndex(seed, max) {
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash) % max;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function currentSeed(extra = "") {
  return [
    todayKey(),
    nameInput.value.trim().toLowerCase(),
    topicSelect.value,
    birthDaySelect.value,
    birthMonthSelect.value,
    birthYearSelect.value,
    questionInput.value.trim().toLowerCase(),
    extra,
  ].join("|");
}

function pick(list, extra) {
  return list[seededIndex(currentSeed(extra), list.length)];
}

function searchUrl(platform, song) {
  const query = encodeURIComponent(song.videoId ? song.title : `${song.title} ${song.artist}`);
  if (platform === "spotify") return `https://open.spotify.com/search/${query}`;
  if (song.videoId) return `https://www.youtube.com/watch?v=${song.videoId}`;
  return `https://www.youtube.com/results?search_query=${query}`;
}

function setDateLine() {
  $("#dateLine").textContent = new Intl.DateTimeFormat("th-TH", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function getCandidates() {
  const strong = songs.filter((song) => song.topics.includes(topicSelect.value));
  if (strong.length) return strong;
  return songs;
}

function birthNumber() {
  if (!birthDaySelect.value || !birthMonthSelect.value || !birthYearSelect.value) return null;
  const birthday = `${birthDaySelect.value}${birthMonthSelect.value}${birthYearSelect.value}`;
  const digits = birthday.split("").map(Number);
  return digits.reduce((sum, value) => sum + value, 0) % 9 || 9;
}

function birthSummary(lifeNumber) {
  if (!lifeNumber) return "วันเกิด: ยังไม่ได้กรอกครบ";
  const day = Number(birthDaySelect.value);
  const month = birthMonthSelect.selectedOptions[0]?.textContent || birthMonthSelect.value;
  return `วันเกิด: ${day} ${month} ${birthYearSelect.value} (เลข ${lifeNumber})`;
}

function populateBirthDays() {
  const days = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, "0"));
  birthDaySelect.insertAdjacentHTML("beforeend", days.map((day) => `<option value="${day}">${Number(day)}</option>`).join(""));
}

function populateBirthYears() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 90 }, (_, index) => String(currentYear - index));
  birthYearSelect.insertAdjacentHTML("beforeend", years.map((year) => `<option value="${year}">${year}</option>`).join(""));
}

function applySongResult(song, candidateCount, lifeNumber, name, question) {
  const direct = directAnswers[topicSelect.value];
  const questionLine = question ? `คำถาม: "${question}"` : "คำถาม: ยังไม่ได้กรอก";
  recordGlyph.textContent = song.glyph;
  coverGlyph.textContent = song.glyph;
  coverArt.style.setProperty("--cover-color", song.color);
  coverArt.style.setProperty("--cover-image", song.thumbnail ? `url("${song.thumbnail}")` : "none");
  coverArt.classList.toggle("has-thumb", Boolean(song.thumbnail));
  record.style.setProperty("--label-color", song.color);
  songTitle.textContent = song.title;
  artistName.textContent = song.artist;
  fortuneText.textContent = `สรุปการสุ่ม: ${name} | เรื่อง: ${topicLabels[topicSelect.value]} | ${questionLine} | ${birthSummary(lifeNumber)} | สุ่มจาก ${candidateCount} เพลงที่เข้าหมวดนี้ใน playlist BM | เพลงที่ออก: "${song.title}"`;
  songEnergy.textContent = String(seededIndex(currentSeed("lucky-number"), 90) + 10);
  lifeHook.textContent = pick(luckyColors, "lucky-color");
  tinyQuest.textContent = pick(luckyEmojis, "lucky-emoji");
  warningText.textContent = pick(luckyTimes, "lucky-time");
  oracleAnswer.textContent = `คำตอบแบบตรงๆ: ${pick(decisionModes, "decision")}. เหตุผลที่ให้ทำแบบนี้: ${direct.answer}. ขั้นต่อไป: ${direct.action}.`;
  spotifyLink.href = searchUrl("spotify", song);
  youtubeLink.href = searchUrl("youtube", song);
  songCard.classList.add("revealed");
}

function draw(options = {}) {
  if (state.isDrawing) return;
  const candidates = getCandidates();
  const song = candidates[seededIndex(currentSeed("song"), candidates.length)];
  const name = nameInput.value.trim() || "คุณ";
  const question = questionInput.value.trim();
  const lifeNumber = birthNumber();

  state.isDrawing = true;
  state.lastSong = song;

  if (options.instant) {
    applySongResult(song, candidates.length, lifeNumber, name, question);
    state.isDrawing = false;
    return;
  }

  document.body.classList.add("is-playing");
  document.body.classList.add("is-tuning");
  drawButton.disabled = true;
  drawButton.textContent = "กำลังจูน...";
  songCard.classList.remove("revealed");
  readingPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  songTitle.textContent = "กำลังสุ่ม...";
  artistName.textContent = "ตู้เพลงกำลังเลือกแทร็กที่ตรงกับดวงวันนี้";
  fortuneText.textContent = "อย่าเพิ่งแอบดู เพลงกำลังวิ่งผ่าน playlist ของคุณอยู่...";
  songEnergy.textContent = "...";
  lifeHook.textContent = "...";
  tinyQuest.textContent = "...";
  warningText.textContent = "...";
  oracleAnswer.textContent = "ตู้กำลังพิมพ์คำตอบจากเพลง.";

  window.setTimeout(() => {
    applySongResult(song, candidates.length, lifeNumber, name, question);
    document.body.classList.remove("is-playing");
    document.body.classList.remove("is-tuning");
    drawButton.disabled = false;
    drawButton.textContent = "กดตู้เพลง";
    state.isDrawing = false;
  }, 1450);

  localStorage.setItem("song-oracle-reading", JSON.stringify({
    date: todayKey(),
    name: nameInput.value,
    topic: topicSelect.value,
    birthDay: birthDaySelect.value,
    birthMonth: birthMonthSelect.value,
    birthYear: birthYearSelect.value,
    question: questionInput.value,
  }));
}

function restore() {
  const saved = JSON.parse(localStorage.getItem("song-oracle-reading") || "null");
  if (!saved || saved.date !== todayKey()) return;
  nameInput.value = saved.name || "";
  topicSelect.value = saved.topic || "self";
  birthDaySelect.value = saved.birthDay || "";
  birthMonthSelect.value = saved.birthMonth || "";
  birthYearSelect.value = saved.birthYear || "";
  questionInput.value = saved.question || "";
  draw({ instant: true });
}

function reset() {
  localStorage.removeItem("song-oracle-reading");
  nameInput.value = "";
  topicSelect.value = "self";
  birthDaySelect.value = "";
  birthMonthSelect.value = "";
  birthYearSelect.value = "";
  questionInput.value = "";
  state.lastSong = null;
  recordGlyph.textContent = "♪";
  coverGlyph.textContent = "♪";
  coverArt.style.setProperty("--cover-color", "#8bd8bd");
  coverArt.style.setProperty("--cover-image", "none");
  coverArt.classList.remove("has-thumb");
  record.style.setProperty("--label-color", "#8bd8bd");
  songTitle.textContent = "ยังไม่มีเพลง";
  artistName.textContent = "กดสุ่มก่อน แล้วเพลงจะเดินมาหาเอง";
  fortuneText.textContent = "เว็บนี้ไม่เล่นเพลงเอง แค่สุ่มชื่อเพลงและพาไปฟังบนแพลตฟอร์มที่ถูกทางกว่า.";
  songEnergy.textContent = "-";
  lifeHook.textContent = "-";
  tinyQuest.textContent = "-";
  warningText.textContent = "-";
  oracleAnswer.textContent = "เพลงยังไม่ขึ้น แต่เหมือน intro มาแล้ว.";
  spotifyLink.href = "https://open.spotify.com/search/song%20oracle";
  youtubeLink.href = "https://www.youtube.com/results?search_query=song%20oracle";
  songCard.classList.remove("revealed");
  document.body.classList.remove("is-tuning");
  document.body.classList.remove("is-playing");
  drawButton.disabled = false;
  drawButton.textContent = "กดตู้เพลง";
  state.isDrawing = false;
}

function bootSky() {
  const canvas = $("#sky");
  const context = canvas.getContext("2d");
  const bars = Array.from({ length: 52 }, (_, index) => ({
    x: index / 52,
    height: 0.12 + Math.random() * 0.45,
    speed: 0.7 + Math.random() * 1.1,
    phase: Math.random() * Math.PI * 2,
  }));

  function resize() {
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
  }

  function frame(time) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const base = canvas.height * 0.88;
    bars.forEach((bar) => {
      const pulse = 0.45 + Math.sin(time * 0.003 * bar.speed + bar.phase) * 0.35;
      const height = canvas.height * bar.height * pulse;
      const x = bar.x * canvas.width;
      context.fillStyle = "rgba(255, 250, 240, 0.08)";
      context.fillRect(x, base - height, Math.max(2, canvas.width / 110), height);
    });
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(frame);
}

drawButton.addEventListener("click", draw);
$("#resetButton").addEventListener("click", reset);

setDateLine();
trackCountLabel.textContent = `${songs.length} TRACKS`;
populateBirthDays();
populateBirthYears();
bootSky();
restore();
