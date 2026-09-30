const TYPE_CONFIG = {
  where: {
    label: "Where Does This Go?",
    choices: ["Team Channel", "Direct Message", "Email", "Meeting / Call", "Shared File", "Do Not Share"]
  },
  pause: {
    label: "Post or Pause?",
    choices: ["Post", "Pause"]
  },
  who: {
    label: "Who Needs This?",
    choices: ["Whole Team / Office", "Small Group", "One Person", "Do Not Share"]
  }
};

const card = (type, text, answer, explanation) => ({ type, text, answer, explanation });

const CARDS = [
  // Where Does This Go? (15)
  card("where", "You are helping prepare for a deposition, a formal question-and-answer session with a witness. The attorney asks you to find someone on the case team who can attend tomorrow.", "Team Channel", "Use the case-team channel. Several people may be able to help, and the group can see when coverage is found."),
  card("where", "An attorney gives you a research assignment but does not say whether to use state or federal law. The attorney is online, while the rest of the team is working on unrelated tasks.", "Direct Message", "Ask the assigning attorney in a direct message. The question does not need a group discussion."),
  card("where", "A client asks you to confirm the date, address, and arrival instructions for a deposition, a formal witness interview under oath. The client wants one written message they can search for later and cannot access the firm’s case tools.", "Email", "Send one clear email with the schedule and arrival details."),
  card("where", "You are helping with discovery, the exchange of case documents between the two sides. A team chat has gone back and forth, but three people still disagree about how to handle duplicate files.", "Meeting / Call", "Move this to a short call. The group needs a discussion and a decision, not a longer chat thread."),
  card("where", "A draft response that will be sent to court is already in the team’s shared case folder. You notice that two paralegals downloaded it and began editing separate copies. The attorney needs to review the next version.", "Shared File", "Return the edits to the shared file so everyone reviews the same current version."),
  card("where", "A client submits a new-client form with a full Social Security number through the office’s secure intake system. You need help with a rejected field and consider posting the form in the general office chat.", "Do Not Share", "Keep the form out of general chat. Ask for help without copying the client’s Social Security number."),
  card("where", "A court reporter, the person who makes the official record of a formal witness interview under oath, emails you about a deposition booking. The reporter asks you to reply with the date, location, and cancellation terms.", "Email", "Reply by email so the confirmation stays with the booking request."),
  card("where", "You cannot remember which billing code to use for a routine document-delivery charge. An experienced paralegal is online, and no one else needs the answer.", "Direct Message", "A direct message is enough for this quick question to one coworker."),
  card("where", "The office manager tells you the office will close at 3:00 p.m. because of snow. Staff across the office need the same update before they make afternoon travel plans.", "Team Channel", "Use a staff-wide channel so everyone receives the same closing information."),
  card("where", "A client sends several new facts that conflict with the case notes. Your chat with the attorney has already produced more questions, and the client needs a response within the hour.", "Meeting / Call", "Use a short call to sort out the conflicting details before responding."),
  card("where", "The case team already keeps its exhibit list, the list of documents and photos that may be used in court, in a shared folder. You and three coworkers need to update it today.", "Shared File", "Edit the existing shared list so everyone sees the current exhibit information."),
  card("where", "You overhear part of a conversation about a client’s medical diagnosis. The information has nothing to do with your assignment, but you are curious whether coworkers know more.", "Do Not Share", "Do not circulate unrelated client information. It is not needed for the work."),
  card("where", "You receive a court notice that moves the deadline for sending a document to court two weeks earlier. Four people are working on the case, and each must adjust upcoming work.", "Team Channel", "Post the new deadline in the case-team channel and include the court notice."),
  card("where", "While drafting a client letter, you notice two different mailing addresses in the case notes. The supervising attorney is online, and no one else needs to answer which address is current.", "Direct Message", "Ask the supervising attorney in a direct message before finishing the letter."),
  card("where", "The attorney approves your routine case-status update for a client. The client and case team keep all weekly updates in an email thread with the subject line “Weekly Status.”", "Email", "Add the approved update to that email thread so it stays with the earlier reports."),

  // Post or Pause? (15)
  card("pause", "You are about to post this in the case-team chat: “URGENT!!! Does anyone know what happened with the Johnson case????”", "Pause", "Pause. The message is vague and the urgency is not explained. Say what you need and when you need it."),
  card("pause", "You draft this for the case-team chat: “Tomorrow’s court hearing has moved to 2:00 p.m. The updated court notice is in the case folder.”", "Post", "Post it. The team gets the new time and knows where to find the notice."),
  card("pause", "You draft this for the general office chat: “I have the client’s full bank account number for the refund. Who wants me to paste it here?”", "Pause", "Pause. Do not post a client’s bank account number in a general chat."),
  card("pause", "You draft this for the case team: “The transcript, the written record of the witness interview, arrived this morning. I saved it in the case folder.”", "Post", "Post it. The team knows what arrived and where to find it."),
  card("pause", "You cannot find the trial binder, the organized set of papers the case team will use in court. You draft this for the all-office chat: “@everyone @here Has anyone seen the blue binder?”", "Pause", "Pause. Ask the case team or the people who last used the binder instead of alerting the whole office."),
  card("pause", "You draft this for the case team: “The attorney needs our draft responses to the other side’s written questions by 3:00 p.m. Friday. Please tell me by noon tomorrow if you may miss the deadline.”", "Post", "Post it. The message gives the team a clear task, deadline, and time to raise a problem."),
  card("pause", "You think a coworker saved the wrong document, so you draft this for the intern chat: “Theo used the wrong version again. Someone should check his work.”", "Pause", "Pause. Confirm which version is correct, then address the problem privately."),
  card("pause", "The office manager asks you to share this update: “The second-floor copier is down until noon. Use the first-floor machine for anything that cannot wait.”", "Post", "Post it. Staff get a clear update and a useful workaround."),
  card("pause", "A draft response that will be sent to court is stored in the shared case folder. You draft this for the case chat: “I attached Court_Response_FINAL_v7_new.docx. Please ignore all the earlier attachments.”", "Pause", "Pause. Link to the file in the shared folder so the team uses one current version."),
  card("pause", "You draft this for the case team: “The client approved the updated timeline. I marked it approved in the shared case tracker. No response needed.”", "Post", "Post it. The message is brief and tells the team where the status was recorded."),
  card("pause", "You draft this for the general office chat: “Our client would accept $275,000 to end the dispute. Has anyone seen similar amounts?”", "Pause", "Pause. The client’s position belongs with the people working on the case, not in a general chat."),
  card("pause", "The attorney asks the team to review a list of documents that may contain private attorney-client messages. You draft: “Please review your assigned rows by Wednesday at 11:00 a.m. Add questions in the shared file.”", "Post", "Post it. The task, deadline, and place for questions are clear."),
  card("pause", "You send a coworker this direct message: “Hi. Need this ASAP.”", "Pause", "Pause. Say what you need and when you actually need it."),
  card("pause", "The court website used to submit documents is down. You draft for the case-team chat: “The court site is down. I’ll try again at 10:30 and update the shared case tracker afterward.”", "Post", "Post it. The case team gets the problem, the next step, and the next update time."),
  card("pause", "Several coworkers are copied on an email. You are about to reply to everyone with only: “Thanks!”", "Pause", "Pause. A reply to everyone that only says thanks adds noise without helping the group."),

  // Who Needs This? (15)
  card("who", "A client leaves you a voicemail asking whether a new fact changes the legal advice. The attorney assigned to the client handles legal questions.", "One Person", "Send the voicemail to the assigned attorney. The question does not need a group message."),
  card("who", "The office manager tells you the building will test the fire alarm at 11:00 a.m. Staff may hear alarms and announcements for about fifteen minutes.", "Whole Team / Office", "Share the notice with the whole office so the test does not cause confusion."),
  card("who", "You receive a message from a copying company that three boxes of records for one case will arrive at 4:00 p.m. The assigned attorney, paralegal, and receptionist need to be ready for the delivery.", "Small Group", "Notify the three people handling the case and delivery, not the whole office."),
  card("who", "A client accidentally includes a photo of a driver’s license in a text about an appointment. The license has nothing to do with your work, but you consider forwarding the photo to a coworker to ask how to handle the mistake.", "Do Not Share", "Ask for guidance without forwarding the client’s identification."),
  card("who", "You receive an alert that the county courthouse is closed because of severe weather. People across the office may have court hearings or documents due there today.", "Whole Team / Office", "Share the closure with the whole office because it may affect several cases."),
  card("who", "You notice a wrong case name in a coworker’s draft. The document has not been sent to the court or anyone outside the office, and that coworker can fix it.", "One Person", "Tell the coworker privately so the error can be corrected."),
  card("who", "You and two other paralegals are organizing case documents that will be sent to the other side. You need to agree on a label for a new group of files.", "Small Group", "Keep the discussion with the three paralegals doing the work."),
  card("who", "A coworker shows you an insulting meme about the opposing party, the person on the other side of a case. You consider forwarding it to the intern group chat.", "Do Not Share", "Do not forward the meme. It is unprofessional and serves no work purpose."),
  card("who", "You receive a client’s request for a Spanish interpreter at the next meeting. The assigned attorney, paralegal, and staff member who books interpreters need to arrange it.", "Small Group", "Send the request to the three people arranging the meeting and interpreter."),
  card("who", "The managing paralegal gives you new instructions for opening a case in the firm’s document system. The steps take effect Monday for all paralegals, regardless of the kinds of cases they work on.", "Whole Team / Office", "Share the instructions with the paralegal team because the new process applies to all of them."),
  card("who", "A client emails you a routine scheduling question. The paralegal assigned to that client manages the appointments and can respond.", "One Person", "Send the question to the assigned paralegal. The rest of the case team does not need it."),
  card("who", "You are helping arrange a witness interview. The attorney, investigator, and assigned paralegal need to choose a location.", "Small Group", "Keep the discussion with the three people arranging the interview."),
  card("who", "You need to know whether the office manager ordered more labels for the documents that may be shown in court tomorrow.", "One Person", "Ask the office manager directly. This supply question does not need a group message."),
  card("who", "You photograph an office whiteboard so you can ask a classmate for help with an assignment. The photo also shows real client names and court dates.", "Do Not Share", "Do not send the photo to your classmate because it exposes client and case information."),
  card("who", "IT emails you that newly uploaded files may not be saving correctly. Paralegals across the office are using the document system today, and you need to pass along the warning.", "Whole Team / Office", "Warn the paralegal team because the system problem may affect all of their uploads.")
];

const ROUND_SIZE = 10;
const screens = {
  start: document.querySelector("#start-screen"),
  game: document.querySelector("#game-screen"),
  results: document.querySelector("#results-screen"),
  review: document.querySelector("#review-screen")
};

let round = [];
let currentIndex = 0;
let score = 0;
let missed = [];
let answered = false;

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function balancedRound() {
  const groups = {
    where: shuffle(CARDS.filter((item) => item.type === "where")),
    pause: shuffle(CARDS.filter((item) => item.type === "pause")),
    who: shuffle(CARDS.filter((item) => item.type === "who"))
  };
  const counts = shuffle([4, 3, 3]);
  return shuffle([
    ...groups.where.slice(0, counts[0]),
    ...groups.pause.slice(0, counts[1]),
    ...groups.who.slice(0, counts[2])
  ]);
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, element]) => {
    element.classList.toggle("is-active", key === name);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
  screens[name].focus?.();
}

function startRound() {
  round = balancedRound();
  currentIndex = 0;
  score = 0;
  missed = [];
  answered = false;
  showScreen("game");
  renderCard();
}

function renderCard() {
  answered = false;
  const current = round[currentIndex];
  const config = TYPE_CONFIG[current.type];
  document.querySelector("#round-count").textContent = `${currentIndex + 1} of ${ROUND_SIZE}`;
  document.querySelector("#card-type").textContent = config.label;
  document.querySelector("#scenario").textContent = current.text;

  const choices = document.querySelector("#choices");
  choices.replaceChildren();
  choices.dataset.count = config.choices.length;
  config.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice;
    button.addEventListener("click", () => answerCard(choice, button));
    choices.append(button);
  });

  document.querySelector("#feedback").className = "feedback is-hidden";
  document.querySelector("#message-card").focus?.();
}

function answerCard(choice, selectedButton) {
  if (answered) return;
  answered = true;
  const current = round[currentIndex];
  const correct = choice === current.answer;
  if (correct) score += 1;
  else missed.push({ ...current, chosen: choice });

  document.querySelectorAll(".choice").forEach((button) => {
    button.disabled = true;
    if (button.textContent === current.answer) button.classList.add("is-correct");
  });
  if (!correct) selectedButton.classList.add("is-wrong");

  const feedback = document.querySelector("#feedback");
  feedback.className = `feedback ${correct ? "is-correct" : "is-wrong"}`;
  document.querySelector("#feedback-mark").textContent = correct ? "✓" : "×";
  document.querySelector("#feedback-title").textContent = correct
    ? "Correct."
    : current.answer === "Pause"
      ? "Pause."
      : `Best choice: ${current.answer}`;
  document.querySelector("#feedback-text").textContent = current.explanation;
  document.querySelector("#next-button").textContent = currentIndex === ROUND_SIZE - 1 ? "See Results →" : "Next →";
  document.querySelector("#next-button").focus({ preventScroll: true });
}

function nextCard() {
  if (!answered) return;
  if (currentIndex < ROUND_SIZE - 1) {
    currentIndex += 1;
    renderCard();
    document.querySelector("#choices .choice")?.focus();
  } else {
    showResults();
  }
}

function showResults() {
  const messages = {
    high: "You chose the right audience, method, or pause in most situations.",
    mid: "Review the missed cards to see which details changed the best choice.",
    low: "Review the missed cards, then try another round."
  };
  document.querySelector("#final-score").textContent = `${score} / ${ROUND_SIZE}`;
  document.querySelector("#results-message").textContent = score >= 9 ? messages.high : score >= 7 ? messages.mid : messages.low;
  const reviewButton = document.querySelector("#review-button");
  reviewButton.hidden = missed.length === 0;
  showScreen("results");
  document.querySelector("#play-again-button").focus();
}

function showReview() {
  const list = document.querySelector("#review-list");
  list.replaceChildren();
  document.querySelector("#review-summary").textContent = `${missed.length} ${missed.length === 1 ? "card" : "cards"} from this round.`;
  missed.forEach((item) => {
    const article = document.createElement("article");
    article.className = "review-card";
    const heading = document.createElement("header");
    const title = document.createElement("h2");
    title.textContent = TYPE_CONFIG[item.type].label;
    const answer = document.createElement("p");
    answer.className = "review-answer";
    answer.textContent = `Best choice: ${item.answer}`;
    heading.append(title, answer);
    const scenario = document.createElement("p");
    scenario.className = "review-scenario";
    scenario.textContent = item.text;
    const explanation = document.createElement("p");
    explanation.className = "review-explanation";
    explanation.textContent = item.explanation;
    article.append(heading, scenario, explanation);
    list.append(article);
  });
  showScreen("review");
  document.querySelector("#review-play-again-button").focus();
}

document.querySelector("#start-button").addEventListener("click", startRound);
document.querySelector("#play-again-button").addEventListener("click", startRound);
document.querySelector("#review-play-again-button").addEventListener("click", startRound);
document.querySelector("#next-button").addEventListener("click", nextCard);
document.querySelector("#review-button").addEventListener("click", showReview);
document.querySelector("#quit-button").addEventListener("click", () => showScreen("start"));
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  showScreen("start");
});

document.addEventListener("keydown", (event) => {
  if (!screens.game.classList.contains("is-active")) return;
  const choices = [...document.querySelectorAll(".choice:not(:disabled)")];
  const focused = choices.indexOf(document.activeElement);
  if (["ArrowRight", "ArrowDown"].includes(event.key) && choices.length) {
    event.preventDefault();
    choices[(focused + 1 + choices.length) % choices.length].focus();
  }
  if (["ArrowLeft", "ArrowUp"].includes(event.key) && choices.length) {
    event.preventDefault();
    choices[(focused - 1 + choices.length) % choices.length].focus();
  }
});

console.assert(CARDS.length === 45, `Expected 45 cards, found ${CARDS.length}`);
