import "./styles.css";

const signals = [
  {
    id: "cafa-ai-employment-training",
    title: "中央美院把 AI 师资培训直接对准就业与中式审美协同，艺科教育开始转向“真实岗位能力”",
    summary:
      "中央美术学院 4 月 30 日发布招生简章，面向文旅艺术行业推出“人工智能赋能大学生就业能力提升师资培训”，课程覆盖设计教育重构、艺术创造力培养、AIGC 核心技能与中式审美融合。",
    note:
      "对艺术院校和创意机构来说，这条信号重要的地方在于课程目标已经不是“会不会用工具”，而是能不能把 AI 变成求职、教学和审美判断的一部分。创作训练正在被重新写成岗位工作流训练。",
    source: "中央美术学院",
    date: "2026-04-30",
    href: "https://www.cafa.edu.cn/st/2026/81233547.htm",
    cta: "查看原文",
    tags: ["research", "cn"],
    labels: ["研究/教育", "国内"],
  },
  {
    id: "tsinghua-rural-design-ai",
    title: "清华美院把生成式 AI 拉进助农设计与内容孵化，课程实验开始直接绑定真实场景",
    summary:
      "清华大学美术学院 4 月 30 日发布国家艺术基金人才培训简章，以“AI 工具实操 + 内容创作实训 + 商业模型孵化”为核心，面向数字艺术人才、内容创作者与乡村文化振兴相关从业者。",
    note:
      "这对设计师、驻地策划人和地方文化团队都很有启发，因为它把 AI 从抽象技术变成了一个要进入空间、产业和社区协作的生产界面。创作在这里被要求同时考虑落地、传播与商业转化。",
    source: "清华大学美术学院",
    date: "2026-04-30",
    href: "https://www.ad.tsinghua.edu.cn/info/1061/32540.htm",
    cta: "查看简章",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "mit-beyond-data-driven-aesthetics",
    title: "MIT 把“超越数据驱动美学”做成公开研究展，重新讨论 AI 审美系统该怎样被看见",
    summary:
      "MIT Architecture 3 月 31 日公布研究展《Beyond Data-Driven Aesthetics》，以建筑与应用艺术中的计算美学系统为对象，讨论如何在纯数据驱动之外重建“创作-评估”逻辑，并向公众展开交流。",
    note:
      "它对策展人与设计研究者的启发在于，AI 审美不必只停留在生成结果的比较，而可以被转化成一套可以展示、讨论和质疑的方法论界面。作品之外，过程本身也能成为展览对象。",
    source: "MIT Architecture",
    date: "2026-03-31",
    href: "https://architecture.mit.edu/news/exhibition-beyond-data-driven-aesthetics",
    cta: "查看项目",
    tags: ["research", "global"],
    labels: ["研究/方法论", "国外"],
  },
  {
    id: "uta-materializing-ai-ecologies",
    title: "UTA 的建筑研究不满足于“AI 出图”，而是追问怎样把它翻译成能落地的材料与结构",
    summary:
      "得州大学阿灵顿分校 4 月 13 日公布研究项目“Materializing AI Ecologies”，试图把 AI 生成设计、性能模拟与机器人制造连成一个统一流程，用于高性能建筑原型开发。",
    note:
      "对空间设计师、装置艺术家和制作团队来说，这类研究的意义在于它把 AI 从灵感工具推成制作接口。真正有价值的不只是图像生成，而是如何把性能、材料和制造限制一并写进工作流。",
    source: "University of Texas at Arlington",
    date: "2026-04-13",
    href: "https://www.uta.edu/academics/schools-colleges/cappa/news-events/news/2026/04/09/shermeen-yousif-rep-grant",
    cta: "查看项目",
    tags: ["research", "global"],
    labels: ["研究/空间制作", "国外"],
  },
  {
    id: "shanghai-tree-exhibition",
    title: "上海自然博物馆把森林叙事做成自然艺术展，生态观看正在变成新的展览界面",
    summary:
      "新华网 5 月 3 日报道，上海自然博物馆上线大型自然艺术展“只有树知道”，以森林为研究对象，连接艺术作品与自然标本，邀请观众从树木、真菌、土壤与时间的尺度重新观察世界。",
    note:
      "它提醒策展人与空间创作者，科技感不必总靠硬件堆叠来表现。把多物种视角、环境感知和叙事装置组织成一次新的观看路线，本身就是今天很重要的界面设计能力。",
    source: "新华网",
    date: "2026-05-03",
    href: "https://www.sh.news.cn/20260503/7e6d2936301f4f4a83a10eacf6b79085/c.html",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "shenzhen-ai-terminal-expo",
    title: "深圳 AI 终端展把电影节、开发者节和“一人公司”放在一起，创作者发布场开始改版",
    summary:
      "经济日报 5 月 3 日消息显示，2026 全球人工智能终端展将于深圳举办，并同步推出“AI 幻境电影节”“AI 国际开发者节”与“OPC 一人一展位”计划，面向独立开发者和创新团队开放展示空间。",
    note:
      "对影像创作者、独立工作室和策展型品牌来说，这条信号的价值在于发布场景正在混合化。产品展示、短片放映、创作社群和交易入口被放进同一个现场，创作者越来越需要同时经营作品与接口。",
    source: "经济日报 / 新浪财经",
    date: "2026-05-03",
    href: "https://finance.sina.com.cn/jjxw/2026-05-03/doc-inhwqzxm0890028.shtml",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/创作者生态", "国内"],
  },
  {
    id: "adobe-firefly-ai-assistant-beta",
    title: "Adobe 把 Firefly AI Assistant 推向公测，创作者工具开始从按钮逻辑改写成对话式工作流",
    summary:
      "Adobe 4 月 27 日宣布 Firefly AI Assistant 开启 public beta，允许创作者用自然语言跨 Firefly 与 Creative Cloud 应用协调多步骤图像、视频和版式工作流。",
    note:
      "这次更新最值得关注的不是“又多一个聊天框”，而是专业创作软件正在把复杂步骤藏到后面，让创作者把注意力更多放在目标、风格与判断上。未来的门槛会更像流程导演能力，而不是单点熟练度。",
    source: "Adobe Blog",
    date: "2026-04-27",
    href: "https://blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta",
    cta: "查看更新",
    tags: ["trend", "global"],
    labels: ["热点/创作者工具", "国外"],
  },
  {
    id: "ai-on-the-lot-2026",
    title: "AI on the Lot 把“创意的用户界面”做成影像大会议题，电影人开始正面讨论新制作桌面",
    summary:
      "AI on the Lot 2026 官方页面显示，这场 5 月 27 日至 28 日的 Culver City 大会将汇集艺术家、电影人、媒体公司与工具团队，并把“What’s the User Interface for Creativity?”列为核心议题之一。",
    note:
      "它对导演、制片人与影像设计团队有现实意义，因为行业讨论已经从“要不要用 AI”转向“片场、工作台和发行链路该怎样被重新组织”。界面问题正在成为新的创作问题。",
    source: "AI on the Lot",
    date: "2026-05-27",
    href: "https://www.aionthelot.com/",
    cta: "查看项目页",
    tags: ["trend", "global"],
    labels: ["热点/影像现场", "国外"],
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
