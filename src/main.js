import "./styles.css";

const signals = [
  {
    id: "cuc-smart-av-dialogue",
    title: "中传把“智能时代的视听创作”拉到跨界对话现场",
    summary:
      "中国传媒大学 5 月 1 日发布《聚焦智能时代视听变革，这场跨界对话在中传启幕》，把视听创作、技术迭代与创作者角色放在同一张桌子上讨论。",
    note: "这条信号对导演、影像团队和声音创作者有价值，因为它说明院校端已经不再把 AI 当作单点工具，而是在讨论完整的创作链路、协作方式和审美判断。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c1901a269800/page.htm",
    cta: "查看原文",
    tags: ["research", "cn"],
    labels: ["科研/对话", "国内"],
  },
  {
    id: "cuc-aigc-course-show",
    title: "《AIGC创作基础》课程成果展，把课堂实验直接推到公开展示",
    summary:
      "中传首页近期推荐戏剧影视学院《AIGC创作基础》课程成果展，活动时间为 3 月 23 日至 3 月 30 日，说明 AIGC 已经不只停留在课堂讲解，而是开始进入公开展示与作品表达。",
    note: "对艺术教育者和年轻创作者来说，这是一条很直观的信号：AI 创作教学正在从“工具演示”走向“作品导向”的课程结构。",
    source: "中国传媒大学首页 / 戏剧影视学院",
    date: "2026-03-23 至 2026-03-30",
    href: "https://mp.weixin.qq.com/s/w1Fskh14YGZ3xtyFRhHXIg",
    cta: "查看展讯",
    tags: ["research", "cn"],
    labels: ["科研/课程实践", "国内"],
  },
  {
    id: "unreality-camera",
    title: "新论文把生成式 AI 放进“即时成像相机”，重新讨论摄影体验",
    summary:
      "5 月 4 日提交到 arXiv、并被 ACM DIS 2026 接收的《UnReality Camera》研究，把口语提示与即时摄影结合，观察人们如何看待 AI 介入后的等待感、作者感与物理连接感。",
    note: "它对摄影、装置和交互艺术很重要，因为它不再只是比较画质，而是在研究 AI 如何改变“拍摄这件事本身”的体验结构。",
    source: "arXiv / ACM DIS 2026",
    date: "2026-05-04",
    href: "https://arxiv.org/abs/2605.02805v1",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/论文", "国外"],
  },
  {
    id: "designers-value-ai",
    title: "另一篇设计研究开始追问：设计师如何用生成式 AI 去想“价值导向”",
    summary:
      "4 月 30 日提交到 arXiv 的《How Designers Envision Value-Oriented AI Design Concepts with Generative AI》聚焦的不是出图效率，而是设计师如何借助生成式 AI 去想象更有立场和价值取向的设计概念。",
    note: "这条线索很适合做品牌、服务设计和社会议题创作的人，因为它把焦点从“AI 会不会取代创作”转向“创作者如何借 AI 放大自己的判断框架”。",
    source: "arXiv",
    date: "2026-04-30",
    href: "https://arxiv.org/abs/2605.00280v1",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/设计研究", "国外"],
  },
  {
    id: "cuc-melbourne-animation",
    title: "中传学生作品入围墨尔本国际动画节，学校端 AIGC 训练开始接到国际节展语境",
    summary:
      "中国传媒大学 5 月 2 日发布消息称，动画与数字艺术学院学生作品入围 2026 澳大利亚墨尔本国际动画节。这让课堂中的数字叙事和生成式训练，开始更直接地连接到国际动画节展的评价体系。",
    note: "对做动画、短片和视觉开发的人来说，这说明学校里的数字创作训练已经开始朝真正的外部发表场景靠拢。",
    source: "中国传媒大学",
    date: "2026-05-02",
    href: "https://www.cuc.edu.cn/news/2026/0502/c1901a269807/page.htm",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/节展", "国内"],
  },
  {
    id: "cuc-dimension-rift",
    title: "“次元裂缝”把课程成果放上裸眼 3D 大屏，校园实验开始走向城市界面",
    summary:
      "中传首页推荐的《三维灯光与渲染课程成果展示：「次元裂缝」3D数字艺术展》把课程作品放到“星光裸眼 3D 大屏”这样的公共可见界面上，展期标注为 2026 年 3 月 23 日至 2027 年 1 月 10 日。",
    note: "这很像一个值得关注的转向：课堂练习不再只服务于评分，而是直接被放进城市传播空间，测试它们在公共观看中的成立方式。",
    source: "中国传媒大学首页",
    date: "2026-03-23 至 2027-01-10",
    href: "https://mp.weixin.qq.com/s/WlndlHOliH2olTZmJGqQDA",
    cta: "查看展讯",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "runway-hollywood",
    title: "Runway CEO 公开谈 AI 电影生产：不是省一部大片的钱，而是放大创作数量",
    summary:
      "TechCrunch 4 月 16 日报道，Runway CEO 表示 AI 可能帮助好莱坞从“押注一部 1 亿美元大片”转向“做出 50 部不同规模的电影尝试”。",
    note: "这对艺术从业者的意义在于，AI 电影讨论正在从炫技转向生产结构本身：谁能做片、能做多少、试错成本怎样下降。",
    source: "TechCrunch",
    date: "2026-04-16",
    href: "https://techcrunch.com/2026/04/16/runway-ceo-says-ai-could-help-hollywood-make-50-films-instead-of-one-100m-blockbuster/",
    cta: "查看报道",
    tags: ["trend", "global"],
    labels: ["热点/行业", "国外"],
  },
  {
    id: "cannes-creator-ai",
    title: "戛纳电影市场把 Creator、AI 和 Immersive 并列成今年的重要节目轴线",
    summary:
      "Variety 4 月 28 日报道，2026 年 Cannes Marché du Film 的项目编排明确把 creators、AI、innovation 和 immersive 放在一起，说明影像行业正在把 AI 视为创作生态的一部分，而不是外围话题。",
    note: "如果你在做短片、沉浸式项目或跨媒介影像，这条新闻很关键，因为它意味着 AI 已经进入最核心的行业交流与合作现场。",
    source: "Variety",
    date: "2026-04-28",
    href: "https://variety.com/2026/film/global/cannes-marche-du-film-immersive-creator-ai-2026-program-1236704795/",
    cta: "查看报道",
    tags: ["trend", "global"],
    labels: ["热点/电影市场", "国外"],
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
  const activeSignal =
    visibleSignals.find((signal) => signal.id === activeSignalId) ??
    visibleSignals[0];

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

    filterButtons.forEach((item) =>
      item.classList.toggle("is-active", item === button),
    );
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
