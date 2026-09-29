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
    choices: ["Everyone / Team", "Small Group", "One Person", "Nobody Electronically"]
  }
};

const card = (type, sender, role, channel, text, answer, explanation, file = "") => ({
  type, sender, role, channel, text, answer, explanation, file
});

const CARDS = [
  // Where Does This Go? (15)
  card("where", "Mara Singh", "Attorney", "#litigation-team", "The supervising attorney asks whether anyone on the litigation team can cover a deposition tomorrow morning.", "Team / Channel", "A team channel gives the whole litigation group a visible chance to respond quickly."),
  card("where", "Theo Martin", "Paralegal", "Private question", "You need to ask the attorney who assigned your research whether she meant Pennsylvania or federal law.", "Direct Message", "This is a focused clarification for one person. A direct message avoids interrupting the whole team."),
  card("where", "Alina Cho", "Paralegal", "Client correspondence", "You are sending a client the final appointment details and want a clear, retrievable record outside the office chat stream.", "Email", "Email is the better fit for formal client communication and creates an easier record to retrieve."),
  card("where", "Darius Bell", "Paralegal", "Discovery planning", "Three team members disagree about how to organize a complicated discovery production, and the chat thread is getting longer without resolving the issue.", "Meeting / Call", "A short meeting or call is more efficient when a complicated issue needs discussion and a shared decision."),
  card("where", "Leila Romero", "Paralegal", "Draft motion", "The team is revising the same motion throughout the week and needs one current version that everyone can edit.", "Shared File", "One shared file reduces duplicate attachments and makes the current version easier to identify.", "Motion_to_Compel_Working_Draft"),
  card("where", "Noah Bennett", "Intern", "#general", "You copied a client intake form containing a Social Security number and want to ask the office which field is incomplete.", "Don’t Post or Send This Here", "Do not place a Social Security number in general chat. Follow the office’s approved secure procedure for sensitive client data."),
  card("where", "Priya Desai", "Attorney", "Scheduling", "The court reporter needs written confirmation of the deposition date, start time, location, and cancellation terms.", "Email", "Email provides a clear external record of the confirmed logistics and terms."),
  card("where", "Evan Brooks", "Paralegal", "Quick procedure", "You want to ask the filing paralegal which internal code to use for a routine courier expense.", "Direct Message", "A direct message suits a quick procedural question that only one coworker needs to answer."),
  card("where", "Camille Foster", "Office Manager", "#office-updates", "The office will close at 3:00 p.m. because of severe weather, and everyone needs the same operational update.", "Team / Channel", "A team-wide channel keeps a time-sensitive office update visible to everyone."),
  card("where", "Jonah Price", "Paralegal", "Case strategy", "A client’s new facts may change the case strategy, and the assigned attorney wants the core case team to talk through the implications.", "Meeting / Call", "A live conversation fits a nuanced issue that may require follow-up questions and judgment."),
  card("where", "Imani Wells", "Paralegal", "Exhibit index", "Four people need to update exhibit descriptions before trial without creating separate copies.", "Shared File", "A shared file gives the team one controlled version and avoids reconciling multiple copies later.", "Trial_Exhibit_Index"),
  card("where", "Miles Chen", "Intern", "#random", "You overheard an attorney discussing a client’s medical diagnosis and want to ask coworkers whether they know more.", "Don’t Post or Send This Here", "Do not circulate sensitive client information out of curiosity. It is not needed for your work and does not belong in office chat."),
  card("where", "Nadia Okafor", "Paralegal", "#litigation-team", "The judge issued a new scheduling order. Everyone working on the matter needs to know that discovery now closes two weeks earlier.", "Team / Channel", "A matter channel gives the whole team a prompt, visible update. Link to the filed order or approved case folder."),
  card("where", "Gabe Flores", "Paralegal", "Draft review", "You need the supervising attorney to approve a final client letter before it is sent. No one else is involved.", "Direct Message", "A direct message can request the one person’s approval without drawing in the full team."),
  card("where", "Sofia Haddad", "Paralegal", "Client concern", "A client sends an emotional, detailed complaint that raises several new facts. The attorney needs to decide how the office should respond.", "Meeting / Call", "A call gives the attorney and paralegal room to sort the facts, tone, and next steps before responding."),

  // Post or Pause? (15)
  card("pause", "Evan Brooks", "Paralegal", "#litigation-team", "URGENT!!! Does anyone know what happened with the Johnson case????", "Pause", "The message is vague and unnecessarily urgent. Name the specific issue and deadline in a professional tone."),
  card("pause", "Mara Singh", "Attorney", "#rivera-matter", "The hearing in Rivera has been moved to 2:00 p.m. The updated notice is in the case folder.", "Post", "This is a useful matter update and directs the team to the current document."),
  card("pause", "Noah Bennett", "Intern", "#general", "Client Daniel Ruiz’s SSN is 418-27-XXXX. Is that enough to run the background check?", "Pause", "Even a partially masked identifier does not belong in a general office channel. Use the approved secure process and limit the audience."),
  card("pause", "Alina Cho", "Paralegal", "#litigation-team", "The transcript arrived this morning. I saved it in the approved case folder under Depositions > Kline > Final.", "Post", "The update is specific, professional, and points the team to the approved file location."),
  card("pause", "Theo Martin", "Paralegal", "#all-office", "@everyone @here Can somebody tell me where the blue binder is?", "Pause", "Tagging the entire office creates unnecessary interruption. Ask the likely person or use the relevant small-group channel."),
  card("pause", "Leila Romero", "Paralegal", "#litigation-team", "Reminder: draft responses are due to Priya by 3:00 p.m. Friday. Please flag any issue by noon tomorrow.", "Post", "The message states the deadline, owner, and escalation point clearly for the people doing the work."),
  card("pause", "Miles Chen", "Intern", "#interns", "I think Theo filed the wrong version again. Someone should probably check his work.", "Pause", "Do not criticize a coworker in a group channel. Verify the facts, then raise the concern privately and professionally with the right person."),
  card("pause", "Camille Foster", "Office Manager", "#office-updates", "The copier on the second floor is offline until noon. Please use the first-floor machine for urgent jobs.", "Post", "This is a concise operational update with a clear workaround for everyone affected."),
  card("pause", "Jonah Price", "Paralegal", "#litigation-team", "I attached Motion_Final_v7_NEW_revised2.docx. Please ignore every earlier attachment.", "Pause", "Repeated attachments make version control harder. Put the draft in the approved shared location and link to the current file."),
  card("pause", "Nadia Okafor", "Paralegal", "#harris-matter", "The client approved the revised chronology. I marked the status in the case tracker; no response is needed.", "Post", "The update is clear, relevant to the matter, and tells coworkers that no reply is needed."),
  card("pause", "Darius Bell", "Paralegal", "#general", "Our client’s settlement demand is $275,000. Has anyone seen similar numbers lately?", "Pause", "A general channel is the wrong audience for matter-specific settlement information. Use the approved matter space and include only people who need it."),
  card("pause", "Priya Desai", "Attorney", "#discovery-team", "Please review the privilege log rows assigned to you by Wednesday at 11:00 a.m. Add questions as comments in the shared file.", "Post", "This gives the right group a specific task, deadline, and place to record questions."),
  card("pause", "Gabe Flores", "Paralegal", "Direct message", "Hi. Need this ASAP.", "Pause", "The message lacks context and a real deadline. Say what you need, why it matters, and when it is actually due."),
  card("pause", "Sofia Haddad", "Paralegal", "#litigation-team", "The court’s website is unavailable. I’ll try the filing again at 10:30 and update the docket tracker afterward.", "Post", "This is a calm, useful status update that explains the next step without overstating the problem."),
  card("pause", "Imani Wells", "Paralegal", "#all-office", "Reply all: Thanks!", "Pause", "A reply-all that only says thanks adds noise without helping the group. A direct acknowledgment or no reply is usually better."),

  // Who Needs This? (15)
  card("who", "Theo Martin", "Paralegal", "Research question", "You need to ask the assigning attorney whether she meant Pennsylvania or federal law.", "One Person", "The clarification affects the assigning attorney and does not require the attention of the whole team."),
  card("who", "Camille Foster", "Office Manager", "Office notice", "The building will test the fire alarm at 11:00 a.m., and everyone in the office will hear it.", "Everyone / Team", "The notice affects everyone and prevents confusion during the building-wide test."),
  card("who", "Leila Romero", "Paralegal", "Matter update", "A deposition in one active case has been moved. The attorney, assigned paralegal, and intern on that matter must adjust their calendars.", "Small Group", "Only the matter team needs the scheduling change, so a focused group is the right audience."),
  card("who", "Noah Bennett", "Intern", "Client data", "You want to share a screenshot of a client intake form with a Social Security number so coworkers can help find a typo.", "Nobody Electronically", "Do not circulate the screenshot. Use the office’s secure procedure and ask an authorized person for help without exposing the identifier."),
  card("who", "Mara Singh", "Attorney", "Coverage request", "The litigation team needs someone to cover a routine status conference tomorrow morning.", "Everyone / Team", "The request is relevant to the full litigation group, and any available team member may be able to help."),
  card("who", "Evan Brooks", "Paralegal", "Draft correction", "You notice a citation error in a draft prepared by one coworker. It has not been filed or shared outside the team.", "One Person", "Tell the coworker privately and professionally so the draft can be corrected without unnecessary public criticism."),
  card("who", "Alina Cho", "Paralegal", "Discovery review", "Three paralegals assigned to the same production need to agree on how to label a new document category.", "Small Group", "The decision belongs with the people doing that production, not the whole office."),
  card("who", "Miles Chen", "Intern", "Rumor", "You heard that a client may be getting divorced and want to ask the intern group whether anyone knows details.", "Nobody Electronically", "Personal speculation is not a work need and should not be circulated electronically."),
  card("who", "Nadia Okafor", "Paralegal", "Deadline update", "The court extended a filing deadline that affects everyone assigned to the case.", "Small Group", "Share the confirmed update with the full matter team, not coworkers who have no role in the case."),
  card("who", "Darius Bell", "Paralegal", "Software question", "The office changed the standard steps for opening a new electronic matter, and every paralegal will use the procedure.", "Everyone / Team", "A team-wide announcement keeps a common procedure visible and consistent for everyone affected."),
  card("who", "Priya Desai", "Attorney", "Client response", "A client emailed a scheduling question that only the assigned paralegal needs to answer.", "One Person", "Forward or assign the question to the responsible paralegal without copying people who do not need it."),
  card("who", "Gabe Flores", "Paralegal", "Witness logistics", "The attorney, paralegal, and investigator need to coordinate a witness interview location.", "Small Group", "A focused group keeps the logistics with the people responsible for the interview."),
  card("who", "Sofia Haddad", "Paralegal", "Casual question", "You want to know whether the office manager has ordered more exhibit labels.", "One Person", "The office manager can answer this routine question directly. The whole team does not need the exchange."),
  card("who", "Imani Wells", "Paralegal", "Health information", "A client disclosed a medical condition unrelated to the case, and you want to mention it in chat because it surprised you.", "Nobody Electronically", "The information is not needed for the work and should not be shared as office conversation."),
  card("who", "Jonah Price", "Paralegal", "System outage", "The approved document system is unavailable, and all case teams must stop uploading files until IT clears the issue.", "Everyone / Team", "The outage changes work for the entire office, so a broad operational notice is appropriate.")
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
  document.querySelector("#channel-chip").textContent = current.channel;
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
  document.querySelector("#feedback-title").textContent = correct ? "Good call." : `Best choice: ${current.answer}`;
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
