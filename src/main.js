import "./styles.css";

const signals = [
  {
    id: "sta-openclaw-art-agents",
    title: "上海戏剧学院把艺术智能体直接做成进修班，创作者开始练习如何与一套会提案、会拆解、会协作的系统共事",
    summary:
      "上海戏剧学院继续教育学院于 2026 年 5 月 18 日发布 Open Claw 艺术智能体应用创作进修班招生简章。课程把艺术创作场景中的 AI 智能体明确界定为生产伙伴，而不是单一工具，重点落在流程简化、灵感触发、协作提效与场景化应用。对影像、舞台、策展和设计从业者来说，这类训练的价值，在于它要求创作者重新组织自己的提问方式、素材结构和创作节奏。",
    note:
      "当课程开始围绕“如何和智能体一起工作”来设计，行业就不只是补一门软件课了。新的基本功正在形成：设定边界、引导生成、筛选结果、维持审美判断。",
    source: "上海戏剧学院继续教育学院",
    date: "2026-05-18",
    href: "https://xxgk.sta.edu.cn/ec/2a/c4535a125994/page.htm",
    cta: "查看进修班简章",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "siva-smart-imaging-grad-show",
    title: "上视觉把“智能影像”毕业展推到前台，影像作者正在把算法当成观察世界的新镜头，而不是后期特效",
    summary:
      "上海视觉艺术学院于 2026 年 5 月 22 日发布 2026 届艺术与科技专业（艺科智能影像）毕业设计展信息。展览汇集 10 件作品，围绕虚实交织、个体视角和智能技术介入下的影像表达展开，重点并不在技术堆叠，而在叙事位置、感知方式与审美范式的变化。对纪录影像、实验短片和跨媒介创作团队来说，这是一种很明确的方法信号：图像生成正在从“做一张图”转向“重写观看机制”。",
    note:
      "影像语言的变化往往先出现在毕业项目里。值得留意的不是某个效果，而是创作者已经开始把模型、数据和主体经验一起纳入镜头组织。",
    source: "上海视觉艺术学院",
    date: "2026-05-22",
    href: "https://www.siva.edu.cn/2026/0522/c109a32077/page.htm",
    cta: "查看智能影像毕业展",
    tags: ["research", "cn"],
    labels: ["研究/智能影像方法", "国内"],
  },
  {
    id: "tsinghua-grad-show-public-museum",
    title: "清华美院把 1200 余件研究生作品完整摆进艺博，毕业展越来越像一场面对公众运行的城市文化发布",
    summary:
      "清华大学美术学院于 2026 年 5 月 22 日发布 2026 届硕士研究生毕业作品展信息，展览在清华大学艺术博物馆启幕并向社会公众开放。硕士阶段的设计、信息艺术、环境艺术、服装、工艺与绘画作品被放进国家一级博物馆的平台中展示，这让毕业成果不再只接受学院内部评价，也开始进入更真实的公众观看、传播和讨论链路。",
    note:
      "展览场地会反过来塑造作品气质。放进博物馆之后，作品需要回答的不只是学术完成度，还包括公共沟通能力、陈列节奏和社会可见性。",
    source: "清华大学美术学院",
    date: "2026-05-22",
    href: "https://www.ad.tsinghua.edu.cn/info/1061/32574.htm",
    cta: "查看毕业展信息",
    tags: ["trend", "cn"],
    labels: ["热点/公共展览界面", "国内"],
  },
  {
    id: "xjtlu-afct-dual-campus-show",
    title: "西浦 AFCT 毕业展第一次做成双校区联动，电影、数字媒体与艺术科技正在用更完整的场域讲述作品",
    summary:
      "西交利物浦大学影视与创意科技学院于 2026 年 5 月 18 日启动以 Syntegration 为题的毕业展，并首次采用双校区联动形式持续展出至 6 月 1 日。电影、电视、数字媒体艺术、艺术与科技以及文化创意产业等多个方向被放进同一套跨校区叙事里，毕业展从单点陈列转向多空间、多专业协同的公开呈现，更接近真实创意产业的复合现场。",
    note:
      "对策展和教育从业者来说，这类组织方式很关键。它让作品不再孤立地出现，而是在空间动线、媒介关系和行业语境里一起发声。",
    source: "西交利物浦大学影视与创意科技学院",
    date: "2026-05-18",
    href: "https://www.xjtlu.edu.cn/zh/events/2026/05/2026afct_graduation_exhibition",
    cta: "查看 AFCT 毕业展",
    tags: ["trend", "cn"],
    labels: ["热点/毕业展新场域", "国内"],
  },
  {
    id: "artsec-provenance-consent",
    title: "ArtSec 把同意、署名、补偿和创作控制放进一场工作坊，作者权问题终于被当成创作基础设施来讨论",
    summary:
      "IEEE S&P 联合工作坊 ArtSec 2026 于 2026 年 5 月 21 日在旧金山举行，议题集中在 AI 时代的作品安全与来源追踪。官方议程明确把 consent、attribution、compensation、creative control 与 watermarking、auditing、dataset governance 放到同一框架中。对艺术家、出版人与声音创作者来说，这意味着作者权讨论正在从舆论争执走向更具体的系统设计与行业标准。",
    note:
      "艺术行业常常把来源标记当作法律收尾，但现在它更像前置条件。没有可验证的出处链，很多合作、授权和平台分发都会变得脆弱。",
    source: "ArtSec 2026 / IEEE S&P Workshop",
    date: "2026-05-21",
    href: "https://artsec26.ieee-security.org/",
    cta: "查看 ArtSec 议程",
    tags: ["research", "global"],
    labels: ["研究/作者权与溯源", "国外"],
  },
  {
    id: "wdc-synthetic-studio",
    title: "World Design Capital 把“后 AI 时代的作者身份”直接做成公开工作坊，设计讨论正从产出物回到关系编排",
    summary:
      "World Design Capital Frankfurt RheinMain 2026 发布的 Synthetic Studio | Dialogwerkstatt 于 2026 年 5 月 20 日举行，围绕 responsibility、intuition 与 authorship 展开公开讨论。页面把 human-AI co-creation 描述为一种需要重新定义设计角色的过程：创作者从手工塑形者，逐步转向复杂生成流程的概念导演与策展性评估者。这个表述对设计师和策展人都很有启发，它承认 AI 改变的不只是效率，更是创作中的职责分工。",
    note:
      "谁来决定方向，谁来承担判断，谁来为结果署名？这些问题一旦进入设计公共议程，就会持续影响工作室组织、教学方式和项目委托逻辑。",
    source: "World Design Capital Frankfurt RheinMain 2026",
    date: "2026-05-20",
    href: "https://wdc2026.org/en/events/synthetic-studio-oder-dialogwerkstatt",
    cta: "查看 Synthetic Studio",
    tags: ["research", "global"],
    labels: ["研究/设计作者身份", "国外"],
  },
  {
    id: "runway-aleph2-edit-studio",
    title: "Runway 把视频编辑主战场推向 Edit Studio，镜头修改开始更像导演现场而不是后期返工",
    summary:
      "Runway 于 2026 年 5 月 21 日发布 Aleph 2.0 和 Edit Studio。更新重点不是再增加一个生成按钮，而是让创作者围绕已有素材做更长时长、更高分辨率、更局部可控的改写，并把镜头替换、重布光、加特效、换物件等动作整合进统一界面。对广告导演、影像艺术家和短片团队来说，这类工具意味着“先拍，再改，再重写故事”的工作方式会继续扩张。",
    note:
      "视频创作的门槛没有消失，它只是移动了。现在更稀缺的能力，是如何带着明确的风格判断去编辑一段已经存在的现实。",
    source: "Runway",
    date: "2026-05-21",
    href: "https://runwayml.com/news/introducing-aleph-2-and-edit-studio",
    cta: "查看 Runway 更新",
    tags: ["trend", "global"],
    labels: ["热点/影像工具更新", "国外"],
  },
  {
    id: "youtube-io-2026-creator-ai",
    title: "YouTube 把搜索、混剪和身份保护一起更新，平台正在把创作者工作流改写成一套实时协作界面",
    summary:
      "YouTube 于 2026 年 5 月 19 日在 Google I/O 2026 发布一组面向创作者的新能力，包括 Ask YouTube、Gemini Omni 驱动的 Shorts Remix 与扩展中的 likeness detection。搜索、改编、分发和人格保护被同时放到产品更新里，说明平台已经不再只提供上传入口，而是在主动塑造内容如何被发现、被再创作和被归属。对短视频作者、音乐人和视觉团队来说，平台规则本身正在变成创作条件的一部分。",
    note:
      "当 remix 工具和出处链接被绑在一起，创作者就得重新考虑二创边界、风格继承和观众对“原作”的认知路径。",
    source: "YouTube Blog",
    date: "2026-05-19",
    href: "https://blog.youtube/news-and-events/youtube-news-google-io-2026/",
    cta: "查看 YouTube 更新",
    tags: ["trend", "global"],
    labels: ["热点/平台创作机制", "国外"],
  },
];

const filterButtons = [...document.querySelectorAll(".filterbar__button")];
const signalList = document.querySelector("#signalList");
const signalDetail = document.querySelector("#signalDetail");
const revealTargets = [...document.querySelectorAll(".reveal")];
const mobileSignalQuery = window.matchMedia("(max-width: 680px)");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

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
        <button class="signal-item${signal.id === activeSignalId ? " is-active" : ""}" type="button" data-signal-id="${signal.id}"${signal.id === activeSignalId ? ' aria-current="true"' : ""}>
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

      if (mobileSignalQuery.matches) {
        signalDetail.scrollIntoView({
          behavior: reducedMotionQuery.matches ? "auto" : "smooth",
          block: "start",
        });
      }
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

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
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
