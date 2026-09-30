const TYPE_CONFIG = {
  where: {
    label: "Where Does This Go?",
    choices: ["Team / Channel", "Direct Message", "Email", "Meeting / Call", "Shared File", "Don’t Post or Send This Here"]
  },
  pause: {
    label: "Post or Pause?",
    choices: ["Post", "Pause"]
  },
  who: {
    label: "Who Needs This?",
    choices: ["Everyone / Team", "Small Group", "One Person", "Don’t Send Electronically"]
  }
};

const card = (type, text, answer, explanation) => ({ type, text, answer, explanation });

const CARDS = [
  // Where Does This Go? (15)
  card("where", "You are helping prepare for a deposition, a formal question-and-answer session with a witness. The attorney asks you to find someone from the team that handles lawsuits who can attend tomorrow.", "Team / Channel", "Use the case-team channel. Several people may be able to help, and the team can see when coverage is found."),
  card("where", "An attorney gives you a research assignment but does not say whether to use state or federal law. Only that attorney can clarify what was intended.", "Direct Message", "A direct message makes sense here. Only the assigning attorney needs to answer the question."),
  card("where", "A client asks you to confirm the date, address, and arrival instructions for a formal witness interview under oath. The client will need to refer to the details later.", "Email", "Use email so the client has one clear message to refer back to."),
  card("where", "You are helping with discovery, the exchange of case documents between the two sides. A team chat has gone back and forth, but three people still disagree about how to handle duplicate files.", "Meeting / Call", "Move this to a short call. The group needs a discussion and a decision, not a longer chat thread."),
  card("where", "You notice that two paralegals are editing different copies of the same court document. The attorney also needs to review the latest changes.", "Shared File", "Use one shared file. Sending more attachments would create more versions of the same document."),
  card("where", "A client sends you a new-client form that includes a full Social Security number. You need help figuring out why one section was rejected.", "Don’t Post or Send This Here", "Do not put the form in a general chat. Use the office’s approved secure process and ask an authorized person for help."),
  card("where", "The person who will record a witness interview asks you to confirm the date, location, and cancellation terms in writing.", "Email", "Use email for this confirmation with someone outside the firm. Both sides can retrieve it later."),
  card("where", "You cannot remember which billing code to use for a routine courier charge. An experienced paralegal is online, and no one else needs the answer.", "Direct Message", "A direct message is enough for this quick question to one coworker."),
  card("where", "The office manager tells you the office will close at 3:00 p.m. because of snow and asks you to share the update with staff.", "Team / Channel", "Use the office channel so staff receive the same time-sensitive update."),
  card("where", "A client sends you new facts that do not match the case notes. You and the attorney need to decide whether the planned response should change.", "Meeting / Call", "Move this to a call with the attorney. The new facts need discussion before anyone responds."),
  card("where", "You and three coworkers are updating a list of exhibits, the documents and photos that may be shown in court. The list will change throughout the day.", "Shared File", "Use the shared file so everyone works from the same current list."),
  card("where", "You overhear part of a conversation about a client’s medical diagnosis. The information has nothing to do with your assignment, but you are curious whether coworkers know more.", "Don’t Post or Send This Here", "Do not circulate unrelated client information. It is not needed for the work."),
  card("where", "You receive a court notice that moves a case deadline two weeks earlier. Four people in the office are working on the case and will need to adjust their work.", "Team / Channel", "Post the update in the case-team channel and link to the court notice."),
  card("where", "You finish a client letter, but the supervising attorney must approve it before it is sent. No one else is reviewing the letter.", "Direct Message", "Send the approval request directly to the supervising attorney."),
  card("where", "A company that stores records asks you for the client’s signed permission form and the date the firm needs the records. You are ready to send both.", "Email", "Use email for the formal request and attached permission form."),

  // Post or Pause? (15)
  card("pause", "You are about to post this in the case-team chat: “URGENT!!! Does anyone know what happened with the Johnson case????”", "Pause", "Pause. The message is vague and the urgency is not explained. Say what you need and when you need it."),
  card("pause", "You draft this for the case-team chat: “Tomorrow’s hearing has moved to 2:00 p.m. The updated court notice is in the case folder.”", "Post", "Post it. The team gets the new time and knows where to find the notice."),
  card("pause", "You draft this for the general office chat: “The client’s Social Security number ends in 4821. Is that enough to run the search?”", "Pause", "Pause. A client’s Social Security number should not be posted in a general chat."),
  card("pause", "You draft this for the case team: “The transcript, the written record of the witness interview, arrived this morning. I saved it in the case folder.”", "Post", "Post it. The team knows what arrived and where to find it."),
  card("pause", "You cannot find a trial binder, so you draft this for the all-office chat: “@everyone @here Has anyone seen the blue binder?”", "Pause", "Pause. Ask the case team or the people who last used the binder instead of alerting the whole office."),
  card("pause", "You draft this for the case team: “The attorney needs our draft answers by 3:00 p.m. Friday. Please tell me by noon tomorrow if you may miss the deadline.”", "Post", "Post it. The message gives the team a clear deadline and time to raise a problem."),
  card("pause", "You think a coworker saved the wrong document, so you draft this for the intern chat: “Theo used the wrong version again. Someone should check his work.”", "Pause", "Pause. Check the facts, then speak privately with the person who can correct the document."),
  card("pause", "The office manager asks you to share this update: “The second-floor copier is down until noon. Use the first-floor machine for anything that cannot wait.”", "Post", "Post it. Staff get a clear update and a useful workaround."),
  card("pause", "You draft this for the case team: “I attached Court_Response_FINAL_v7_new.docx. Please ignore all the earlier attachments.”", "Pause", "Pause. Link to the shared file instead of adding another version to the chat."),
  card("pause", "You draft this for the case team: “The client approved the updated timeline. I marked it approved in the case tracker. No response needed.”", "Post", "Post it. The message is brief and tells the team where the status was recorded."),
  card("pause", "You draft this for the general office chat: “Our client is willing to settle for $275,000. Has anyone seen similar amounts?”", "Pause", "Pause. Settlement information belongs with the people working on the case, not in a general chat."),
  card("pause", "The attorney asks the team to review a list of documents that may contain private attorney-client messages. You draft: “Please review your assigned rows by Wednesday at 11:00 a.m. Add questions in the shared file.”", "Post", "Post it. The task, deadline, and place for questions are clear."),
  card("pause", "You send a coworker this direct message: “Hi. Need this ASAP.”", "Pause", "Pause. Say what you need and when you actually need it."),
  card("pause", "The court website used to submit documents is down. You draft: “The court site is down. I’ll try again at 10:30 and update the case tracker afterward.”", "Post", "Post it. The message explains the problem and what you will do next."),
  card("pause", "Several coworkers are copied on an email. You are about to reply to everyone with only: “Thanks!”", "Pause", "Pause. A reply to everyone that only says thanks adds noise without helping the group."),

  // Who Needs This? (15)
  card("who", "An attorney gives you a research assignment but does not say whether to compare state law or federal law. That attorney can clarify what was intended.", "One Person", "Ask the assigning attorney directly. The rest of the team does not need the exchange."),
  card("who", "The office manager tells you the building will test the fire alarm at 11:00 a.m. Staff may hear alarms and announcements for about fifteen minutes.", "Everyone / Team", "Share the notice with the office team so the test does not cause confusion."),
  card("who", "You learn that a deposition, a formal question-and-answer session with a witness, has moved from Tuesday to Thursday. Four people in the office are working on that case.", "Small Group", "Send the update to the case team. People working on other cases do not need it."),
  card("who", "You spot a typo on a new-client form that also shows the client’s full Social Security number. You consider sending a screenshot to coworkers for help.", "Don’t Send Electronically", "Do not circulate the screenshot. Use the office’s secure process and ask an authorized person for help."),
  card("who", "The attorney asks you to help find coverage for a short court scheduling meeting tomorrow. Several people on the court-case team may be available.", "Everyone / Team", "Ask the court-case team. Several people may be able to help, and the group can see when coverage is found."),
  card("who", "You notice a wrong case name in a coworker’s draft. The document has not been sent to the court or anyone outside the office, and that coworker can fix it.", "One Person", "Tell the coworker privately so the error can be corrected."),
  card("who", "You and two other paralegals are organizing case documents that will be sent to the other side. You need to agree on a label for a new group of files.", "Small Group", "Keep the discussion with the three paralegals doing the work."),
  card("who", "You hear that a client may be getting divorced. It has nothing to do with the case, but you are curious whether other interns know more.", "Don’t Send Electronically", "Do not circulate personal speculation about a client. It is not needed for the work."),
  card("who", "You receive a court notice that extends a deadline. The change affects the attorney, paralegals, and assistant assigned to one case.", "Small Group", "Share the change with the case team, not with coworkers who have no role in the case."),
  card("who", "The managing paralegal gives you new instructions for opening a case in the firm’s document system. Every paralegal will use the new steps starting Monday.", "Everyone / Team", "Share the instructions with the paralegal team because the new process applies to all of them."),
  card("who", "A client emails you a routine scheduling question. The paralegal assigned to that client manages the appointments and can respond.", "One Person", "Send the question to the assigned paralegal. The rest of the case team does not need it."),
  card("who", "You are helping arrange a witness interview. The attorney, investigator, and assigned paralegal need to choose a location.", "Small Group", "Keep the discussion with the three people arranging the interview."),
  card("who", "You need to know whether the office manager ordered more labels for the documents that may be shown in court tomorrow.", "One Person", "Ask the office manager directly. This supply question does not need a group message."),
  card("who", "A client mentions a medical condition that is unrelated to the case. You consider telling coworkers because the detail surprised you.", "Don’t Send Electronically", "Do not share unrelated client information as office conversation."),
  card("who", "IT emails you that newly uploaded files may not be saving correctly. Several case teams are using the document system today, and you need to pass along the warning.", "Everyone / Team", "Send a team-wide message because anyone using the system needs the warning and the IT instructions.")
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
    ? "Good call."
    : current.answer === "Pause"
      ? "Pause."
      : `Best choice: ${current.answer}`;
  document.querySelector("#feedback-text").textContent = current.explanation;
  document.querySelector("#next-button").textContent = currentIndex === ROUND_SIZE - 1 ? "See Results →" : "Next →";
  document.querySelector("#next-button").focus();
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
