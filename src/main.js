import "./styles.css";

const signals = [
  {
    id: "ccom-music",
    title: "中央音乐学院把“智能创作”放进音乐教育与表演现场一起讨论",
    summary:
      "中央音乐学院 4 月底发布的“世界艺术与科技对话”音乐分会场预告，把未来音乐教育、音乐大模型、智能创作、人机协同表演和数字音乐产业放在同一张议程里。",
    note: "对音乐人和声音艺术家来说，它提示的不是单点工具，而是整个创作生态正在重组。",
    source: "中央音乐学院",
    date: "2026-04-27",
    href: "https://www.ccom.edu.cn/info/18041/264591.htm",
    cta: "查看来源",
    tags: ["research", "cn"],
    labels: ["科研/研讨", "国内"],
  },
  {
    id: "sta-theatre",
    title: "上戏把未来戏剧的关键问题指向“观演关系如何被数智技术重写”",
    summary:
      "上海戏剧学院 4 月 29 日发布的国际研讨会回顾，讨论人工智能、虚拟现实与交互技术如何重构戏剧本体、表演范式、空间边界与观众关系。",
    note: "这对舞台、策展和沉浸式团队都很有现实参考价值。",
    source: "上海戏剧学院",
    date: "2026-04-29",
    href: "https://www.sta.edu.cn/eb/81/c1546a125825/page.htm",
    cta: "查看来源",
    tags: ["research", "cn"],
    labels: ["科研/研讨", "国内"],
  },
  {
    id: "springer-cocreation",
    title: "昨天上线的新论文把“数字媒体艺术共创”直接写成研究主题",
    summary:
      "Springer 旗下《Journal of Big Data》5 月 3 日发布的论文，讨论数字媒体艺术中的“计算式共创”与“适应性审美智能”。",
    note: "研究开始把实时互动、风格调节和人机协作体验当成创作问题，而不只是算法问题。",
    source: "Journal of Big Data / Springer",
    date: "2026-05-03",
    href: "https://link.springer.com/article/10.1186/s40537-026-01453-1",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/论文", "国外"],
  },
  {
    id: "cambridge-sound",
    title: "剑桥这篇音乐论文提醒：很多“AI 声音美学”其实是人先想象出来的",
    summary:
      "Cambridge Core 4 月 14 日上线的 Organised Sound 论文指出，创作者对“幽灵感”“异质感”的文化想象，会反过来塑造声音系统的设计选择。",
    note: "这个观察把审美预设重新拉回实验音乐、声音装置和配乐创作现场。",
    source: "Organised Sound / Cambridge Core",
    date: "2026-04-14",
    href: "https://www.cambridge.org/core/journals/organised-sound/article/when-ai-dont-sound-like-ai-negotiating-aesthetic-expectations-in-technologymediated-musical-practice/58E74C59A151F4BA0F289CEA22B9D1FE",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/论文", "国外"],
  },
  {
    id: "cuc-declaration",
    title: "中国传媒大学发布《数智艺术北京宣言》，把“创作主导权”摆到台前",
    summary:
      "中传 5 月 1 日发布的研讨会消息中，系统表述了“以人为本”“把握创作主导权”“警惕算法规训”和伦理版权风险。",
    note: "这说明国内艺科融合正在形成更明确的价值框架。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c10133a269799/page.htm",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/报道", "国内"],
  },
  {
    id: "birdnest-expo",
    title: "鸟巢科技艺术中心启幕，国际科技艺术展进入长期开放状态",
    summary:
      "5 月 1 日对外传播的“可能世界档案：2026 国际科技艺术展”，集合 70 余位艺术家和团队、近 150 组作品，并将持续到 2027 年。",
    note: "它更像是一个长期公共文化场域，而不只是一次节庆式展演。",
    source: "中国网",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "adobe-firefly",
    title: "Adobe 把 Firefly AI Assistant 推入公测，创作工作台继续被重写",
    summary:
      "Adobe 4 月 27 日宣布 Firefly AI Assistant 公测，把跨 Photoshop、Premiere、Lightroom 等应用的多步流程变成“先描述结果、再由系统编排执行”的创作路径。",
    note: "设计、摄影和视频团队需要重新理解从想法到交付的路径。",
    source: "Adobe Blog",
    date: "2026-04-27",
    href: "https://blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta",
    cta: "查看博客",
    tags: ["trend", "global"],
    labels: ["热点/博客", "国外"],
  },
  {
    id: "oscars-ai-rule",
    title: "奥斯卡首次把 AI 使用写进规则，影像行业开始正式划线",
    summary:
      "AP 5 月 1 日报道显示，美国电影艺术与科学学院首次在奥斯卡规则中正面回应 AI：并未一刀切禁止，但把“人类作者性”和同意机制放在资格考量核心。",
    note: "对导演、编剧、表演和影像团队来说，这已经是非常具体的制度信号。",
    source: "AP News",
    date: "2026-05-01",
    href: "https://apnews.com/article/95a66f19bd0a95d371ac82f21df1a0f4",
    cta: "查看报道",
    tags: ["trend", "global"],
    labels: ["热点/行业规则", "国外"],
  },
];

const filterButtons = [...document.querySelectorAll(".filterbar__button")];
const signalList = document.querySelector("#signalList");
const signalDetail = document.querySelector("#signalDetail");
const revealTargets = [...document.querySelectorAll(".reveal")];

let activeFilter = "all";
let activeSignalId = signals[0].id;

function matchesFilter(signal) {
  return activeFilter === "all" || signal.tags.includes(activeFilter);
}

function renderLabels(signal) {
  return signal.labels.map((label) => `<span>${label}</span>`).join("");
}

function renderList() {
  const visibleSignals = signals.filter(matchesFilter);

  signalList.innerHTML = visibleSignals
    .map(
      (signal, index) => `
        <button class="signal-item${signal.id === activeSignalId ? " is-active" : ""}" type="button" data-signal-id="${signal.id}">
          <span class="signal-item__number">${String(index + 1).padStart(2, "0")}</span>
          <span class="signal-item__body">
            <span class="signal-item__labels">${renderLabels(signal)}</span>
            <span class="signal-item__title">${signal.title}</span>
          </span>
        </button>
      `,
    )
    .join("");

  signalList.querySelectorAll(".signal-item").forEach((button) => {
    button.addEventListener("click", () => {
      activeSignalId = button.dataset.signalId;
      renderList();
      renderDetail();
    });
  });
}

function renderDetail() {
  const visibleSignals = signals.filter(matchesFilter);
  const activeSignal = visibleSignals.find((signal) => signal.id === activeSignalId) ?? visibleSignals[0];

  if (!activeSignal) {
    signalDetail.innerHTML = "<p>没有符合筛选条件的信号。</p>";
    return;
  }

  activeSignalId = activeSignal.id;
  signalDetail.innerHTML = `
    <div class="signal-detail__labels">${renderLabels(activeSignal)}</div>
    <h3>${activeSignal.title}</h3>
    <p class="signal-detail__summary">${activeSignal.summary}</p>
    <p class="signal-detail__note">${activeSignal.note}</p>
    <dl class="signal-detail__meta">
      <div><dt>来源</dt><dd>${activeSignal.source}</dd></div>
      <div><dt>日期</dt><dd>${activeSignal.date}</dd></div>
    </dl>
    <a class="source-link" href="${activeSignal.href}" target="_blank" rel="noreferrer">${activeSignal.cta}</a>
  `;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    const firstMatch = signals.find(matchesFilter);
    const currentSignal = signals.find((signal) => signal.id === activeSignalId);

    if (firstMatch && (!currentSignal || !matchesFilter(currentSignal))) {
      activeSignalId = firstMatch.id;
    }

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderList();
    renderDetail();
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.22 },
);

revealTargets.forEach((target) => revealObserver.observe(target));
renderList();
renderDetail();
