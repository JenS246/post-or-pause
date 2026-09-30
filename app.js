const TYPE_CONFIG = {
  where: {
    label: "Where Does This Go?",
    prompt: "Choose the best method.",
    choices: ["Team / Channel", "Direct Message", "Email", "Meeting / Call", "Shared File", "Don’t Post or Send This Here"]
  },
  pause: {
    label: "Post or Pause?",
    prompt: "Would you send this message as written?",
    choices: ["Post", "Pause"]
  },
  who: {
    label: "Who Needs This?",
    prompt: "Choose the right audience.",
    choices: ["Everyone / Team", "Small Group", "One Person", "Don’t Send Electronically"]
  }
};

const card = (type, sender, role, channel, text, answer, explanation, file = "") => ({
  type, sender, role, channel, text, answer, explanation, file
});

const CARDS = [
  // Where Does This Go? (15)
  card("where", "Mara Singh", "Attorney", "#litigation-team", "Tomorrow’s deposition needs coverage. Any attorney or paralegal assigned to litigation may be able to help.", "Team / Channel", "This belongs in the litigation channel because several people could respond and the group needs to see when coverage is found."),
  card("where", "Theo Martin", "Paralegal", "", "Your research assignment says to analyze a removal issue, but it does not say whether to focus on Pennsylvania or federal law. The assigning attorney is online.", "Direct Message", "A direct message makes sense here. One attorney can clear up the scope without involving the whole team."),
  card("where", "Alina Cho", "Paralegal", "Email", "A client asked for the confirmed date, address, and arrival instructions for next week’s deposition. The office wants the client to have one message to refer back to.", "Email", "Email gives the client a clear, retrievable record of the final details."),
  card("where", "Darius Bell", "Paralegal", "", "A discovery chat has gone back and forth for twenty minutes. Three team members still disagree about how to handle a set of duplicate documents.", "Meeting / Call", "Move this to a short call. The group needs discussion and a decision, not a longer chat thread."),
  card("where", "Leila Romero", "Paralegal", "", "Two paralegals and an attorney will revise the same motion this week. Everyone needs to work from the current draft and see each other’s edits.", "Shared File", "Use one shared file so the team is not comparing attachments or guessing which draft is current.", "Motion_to_Compel_Working_Draft"),
  card("where", "Noah Bennett", "Intern", "#general", "An intake form shows a client’s full Social Security number. You want help figuring out why the form was rejected.", "Don’t Post or Send This Here", "Pause before sharing the form. Use the office’s approved secure process and ask an authorized person for help without exposing the number in general chat."),
  card("where", "Priya Desai", "Attorney", "Email", "The court reporter asks the firm to confirm the deposition date, location, and cancellation terms in writing.", "Email", "Email fits an external confirmation that both sides may need to retrieve later."),
  card("where", "Evan Brooks", "Paralegal", "", "You cannot remember which billing code the managing paralegal uses for routine courier charges. She is available now, and no one else needs the answer.", "Direct Message", "A direct message is enough for this quick question to one coworker."),
  card("where", "Camille Foster", "Office Manager", "#office-updates", "Snow is getting worse, and the office will close at 3:00 p.m. Staff may finish the day remotely.", "Team / Channel", "This belongs in the office channel so everyone receives the same time-sensitive update."),
  card("where", "Jonah Price", "Paralegal", "", "A client has provided new facts that may affect the response to a pending motion. The attorney and paralegal need to compare the new facts with the current strategy.", "Meeting / Call", "Move this to a call. The issue needs back-and-forth discussion between the people handling the matter."),
  card("where", "Imani Wells", "Paralegal", "", "Four people are updating exhibit descriptions before trial. The list changes throughout the day, and the team needs one current version.", "Shared File", "Use the shared file rather than creating separate copies that will need to be reconciled.", "Trial_Exhibit_Index"),
  card("where", "Miles Chen", "Intern", "#social", "You overheard part of a conversation about a client’s medical diagnosis. The information has nothing to do with your assignment.", "Don’t Post or Send This Here", "Do not circulate client information out of curiosity. It is not needed for the work and does not belong in office chat."),
  card("where", "Nadia Okafor", "Paralegal", "#miller-matter", "A new scheduling order shortens discovery by two weeks. The attorney, paralegals, and legal assistant assigned to Miller all need to adjust their work.", "Team / Channel", "Post the update in the matter channel and link to the order. The whole case team needs the same information."),
  card("where", "Gabe Flores", "Paralegal", "", "A client letter is ready, but the supervising attorney must approve it before it goes out. No one else is reviewing the letter.", "Direct Message", "A direct message keeps the approval request with the one person who needs to act."),
  card("where", "Sofia Haddad", "Paralegal", "Email", "A records vendor asks for the signed authorization and the date the firm needs the records. You are ready to send both.", "Email", "Email is the practical choice for a formal request to an outside vendor with a document attached."),

  // Post or Pause? (15)
  card("pause", "Evan Brooks", "Paralegal", "#litigation-team", "URGENT!!! Does anyone know what happened with the Johnson case????", "Pause", "The message is vague and the urgency is not explained. Say what information you need and when you need it."),
  card("pause", "Mara Singh", "Attorney", "#rivera-matter", "The Rivera hearing has moved to 2:00 p.m. The updated notice is in the case folder.", "Post", "This is a useful matter update and points the team to the current notice."),
  card("pause", "Noah Bennett", "Intern", "#general", "Daniel Ruiz’s SSN ends in 4821. Is that enough to run the background check?", "Pause", "Even a partial Social Security number should not go into a general office channel. Use the approved secure process."),
  card("pause", "Alina Cho", "Paralegal", "#kline-matter", "The transcript arrived this morning. I saved it in the case folder under Depositions > Kline > Final.", "Post", "The message tells the team what arrived and exactly where to find it."),
  card("pause", "Theo Martin", "Paralegal", "#all-office", "@everyone @here Has anyone seen the blue trial binder?", "Pause", "Tagging the whole office is too broad for this request. Ask the matter team or the people who last used the binder."),
  card("pause", "Leila Romero", "Paralegal", "#miller-matter", "Reminder: draft responses are due to Priya by 3:00 p.m. Friday. Please flag any problem by noon tomorrow.", "Post", "The right group gets a clear deadline and enough time to raise a problem."),
  card("pause", "Miles Chen", "Intern", "#interns", "I think Theo filed the wrong version again. Someone should probably check his work.", "Pause", "Verify what happened, then raise the concern privately with the person who can correct it."),
  card("pause", "Camille Foster", "Office Manager", "#office-updates", "The second-floor copier is down until noon. Please use the first-floor machine for anything that cannot wait.", "Post", "This is a clear office update with a useful workaround."),
  card("pause", "Jonah Price", "Paralegal", "#miller-matter", "I attached Motion_Final_v7_NEW_revised2.docx. Please ignore all the earlier attachments.", "Pause", "Use the shared file and link to it instead of adding another version to the thread."),
  card("pause", "Nadia Okafor", "Paralegal", "#harris-matter", "The client approved the revised chronology. I updated the case tracker. No response needed.", "Post", "The update is brief, relevant, and tells the team that no reply is needed."),
  card("pause", "Darius Bell", "Paralegal", "#general", "Our client’s settlement demand is $275,000. Has anyone seen similar numbers lately?", "Pause", "A general channel is the wrong audience for matter-specific settlement information. Ask the case team in its approved space."),
  card("pause", "Priya Desai", "Attorney", "#discovery-team", "Please review your privilege log rows by Wednesday at 11:00 a.m. Add questions as comments in the shared file.", "Post", "The message gives the team a task, a deadline, and one place for questions."),
  card("pause", "Gabe Flores", "Paralegal", "Direct message", "Hi. Need this ASAP.", "Pause", "The recipient needs to know what you need and when you actually need it."),
  card("pause", "Sofia Haddad", "Paralegal", "#miller-matter", "The court’s filing site is down. I’ll try again at 10:30 and update the docket tracker afterward.", "Post", "This explains the problem, the next step, and where the final status will be recorded."),
  card("pause", "Imani Wells", "Paralegal", "Email", "Reply all: Thanks!", "Pause", "A reply-all that only says thanks adds noise without helping the group."),

  // Who Needs This? (15)
  card("who", "Theo Martin", "Paralegal", "", "A research assignment refers to a removal issue but does not say whether to focus on Pennsylvania or federal law. The assigning attorney can answer the question.", "One Person", "A direct question to the assigning attorney is enough. The rest of the team does not need the exchange."),
  card("who", "Camille Foster", "Office Manager", "", "The building will test the fire alarm at 11:00 a.m. Staff may hear alarms and announcements for about fifteen minutes.", "Everyone / Team", "Everyone in the office needs the notice so the test does not cause confusion."),
  card("who", "Leila Romero", "Paralegal", "", "A deposition has moved from Tuesday to Thursday. Only the attorney, paralegal, and intern assigned to that matter need to change their calendars.", "Small Group", "Send this to the matter team. People outside the case do not need the scheduling update."),
  card("who", "Noah Bennett", "Intern", "", "You spot a typo on an intake form that also shows the client’s full Social Security number. You consider sending a screenshot to coworkers for help.", "Don’t Send Electronically", "Do not circulate the screenshot. Ask an authorized person for help through the office’s secure procedure without exposing the number."),
  card("who", "Mara Singh", "Attorney", "", "A routine status conference needs coverage tomorrow morning. Several people on the litigation team are qualified to handle it.", "Everyone / Team", "Ask the litigation team. More than one person may be able to help, and everyone should see when the request is covered."),
  card("who", "Evan Brooks", "Paralegal", "", "You notice a wrong case citation in a coworker’s draft. The draft has not been filed, and that coworker can fix it.", "One Person", "Tell the coworker privately and professionally so the citation can be corrected."),
  card("who", "Alina Cho", "Paralegal", "", "Three paralegals working on the same production need to agree on a label for a new document category.", "Small Group", "The production group should make the decision. The whole office does not need the discussion."),
  card("who", "Miles Chen", "Intern", "", "You hear that a client may be getting divorced. It has nothing to do with the matter, but you are curious whether other interns know more.", "Don’t Send Electronically", "Do not circulate personal speculation about a client. It is not needed for the work."),
  card("who", "Nadia Okafor", "Paralegal", "", "The court has extended a filing deadline. The change affects the attorney, paralegals, and assistant assigned to that case, but no other teams.", "Small Group", "Share the confirmed change with the matter team, not with coworkers who have no role in the case."),
  card("who", "Darius Bell", "Managing Paralegal", "", "The steps for opening a new electronic matter have changed. Every paralegal will use the new process starting Monday.", "Everyone / Team", "The paralegal team needs one clear announcement because the procedure applies to all of them."),
  card("who", "Priya Desai", "Attorney", "", "A client emailed a routine scheduling question. The assigned paralegal manages that client’s appointments and can respond.", "One Person", "Send the question to the assigned paralegal. Copying the rest of the matter team would add no value."),
  card("who", "Gabe Flores", "Paralegal", "", "An attorney, paralegal, and investigator need to choose a location for a witness interview. No one else is involved.", "Small Group", "Keep the discussion with the three people arranging the interview."),
  card("who", "Sofia Haddad", "Paralegal", "", "You need to know whether the office manager ordered more exhibit labels for tomorrow’s trial preparation.", "One Person", "Ask the office manager directly. This routine supply question does not need a group message."),
  card("who", "Imani Wells", "Paralegal", "", "A client mentions a medical condition that is unrelated to the case. You consider telling coworkers because the detail surprised you.", "Don’t Send Electronically", "Do not share unrelated client information as office conversation."),
  card("who", "Renee Alvarez", "IT Coordinator", "", "IT has found that newly uploaded files may not be saving correctly. Several case teams are working in the document system today.", "Everyone / Team", "A team-wide message makes sense because anyone using the system needs to stop and check the IT instructions.")
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

function initials(name) {
  return name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
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

function renderProgress() {
  const container = document.querySelector("#progress-dots");
  container.replaceChildren();
  round.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "progress-dot";
    if (index < currentIndex) dot.classList.add("is-done");
    if (index === currentIndex) dot.classList.add("is-current");
    dot.setAttribute("aria-hidden", "true");
    container.append(dot);
  });
  container.setAttribute("aria-label", `Question ${currentIndex + 1} of ${ROUND_SIZE}`);
}

function renderCard() {
  answered = false;
  const current = round[currentIndex];
  const config = TYPE_CONFIG[current.type];
  document.querySelector("#round-count").textContent = `${currentIndex + 1} of ${ROUND_SIZE}`;
  document.querySelector("#card-type").textContent = config.label;
  document.querySelector("#prompt-label").textContent = config.prompt;
  const channelChip = document.querySelector("#channel-chip");
  channelChip.textContent = current.channel;
  channelChip.classList.toggle("is-hidden", !current.channel);
  document.querySelector("#sender-avatar").textContent = initials(current.sender);
  document.querySelector("#sender-name").textContent = current.sender;
  document.querySelector("#sender-role").textContent = current.role;
  document.querySelector("#message-time").textContent = ["8:42 AM", "9:14 AM", "10:26 AM", "1:08 PM", "3:37 PM"][currentIndex % 5];
  document.querySelector("#scenario").textContent = current.text;

  const attachment = document.querySelector("#file-attachment");
  attachment.classList.toggle("is-hidden", !current.file);
  document.querySelector("#file-name").textContent = current.file || "Shared file";

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
  renderProgress();
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
    high: "Strong judgment. You kept the audience, message, and medium in mind.",
    mid: "Good calls. A few situations were worth pausing over.",
    low: "Some of these decisions are less obvious than they look. Try another round."
  };
  const note = missed.length === 0
    ? "Every decision held up."
    : `${missed.length} decision${missed.length === 1 ? " is" : "s are"} worth another look.`;
  document.querySelector("#final-score").textContent = `${score} / ${ROUND_SIZE}`;
  document.querySelector("#score-large").textContent = score;
  document.querySelector("#score-note").textContent = note;
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
