import "./styles.css";

const signals = [
  {
    id: "cuc-beijing-declaration",
    title: "中传发布《数智艺术北京宣言》，艺术科技教育开始把“人文底色 + AI 协作”写成公开共识",
    summary:
      "中国传媒大学 5 月 1 日发布“从数字到数智”研讨会消息，会上联合 30 余所高校与国际学者发布《数智艺术北京宣言》，强调在人工智能重塑艺术创作与教育生态的背景下，以“以智拓境，以人为本；以艺求新，以育铸魂”重建人才培养框架。",
    note:
      "这条信号对策展教育、视觉传达和影像教学都很关键，因为它把艺术院校从“教工具”推向“定义创作主体性与伦理边界”。未来真正拉开差距的，不只是模型接入速度，而是谁能把人的判断保留在流程中心。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c1901a269799/page.htm",
    cta: "查看宣言",
    tags: ["research", "cn"],
    labels: ["研究/教育治理", "国内"],
  },
  {
    id: "wtu-aigc-workshop",
    title: "武汉纺织大学把 AIGC 训练拆成角色、镜头与成片输出，课堂开始像一次迷你制作现场",
    summary:
      "武汉纺织大学创新设计学院 4 月 28 日发布工作坊总结，三场课程从 IP 设定、角色优化一路推进到 AIGC 漫剧成片输出，学生需要处理风格统一、镜头适配、叙事节奏与小组协作。",
    note:
      "对插画师、动画方向学生和小型影像团队来说，这是一种非常具体的转向：AI 课程不再以出图为终点，而要承担从角色一致性到叙事组织的整段责任。创作训练正在更贴近真实交付链路。",
    source: "武汉纺织大学创新设计学院",
    date: "2026-04-28",
    href: "https://art.wtu.edu.cn/info/1023/13120.htm",
    cta: "查看工作坊",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "cmu-arts-ai-observatory",
    title: "CMU 拿到 NEA Research Lab Grant，准备为 Arts + AI 建一套跨院校基准和公共观察面板",
    summary:
      "Carnegie Mellon University College of Fine Arts 于 5 月 5 日宣布获得美国国家艺术基金会 NEA Research Lab Grant，将启动为期两年的 Arts + AI field scan、benchmarking 与资源网络建设，并计划推出年度 symposium 与公开网站。",
    note:
      "这对艺术学院、驻留项目和研究型机构很有参考价值，因为它不只讨论作品，而是要衡量学校怎样教、怎样评估、怎样处理 AI 伦理与实践机会。方法一旦被量化与共享，艺术教育的话语权也会重新分配。",
    source: "Carnegie Mellon University",
    date: "2026-05-05",
    href: "https://www.architecture.cmu.edu/news/cmu-college-fine-arts-awarded-nea-research-lab-grant",
    cta: "查看项目",
    tags: ["research", "global"],
    labels: ["研究/方法框架", "国外"],
  },
  {
    id: "lacp-ai-generative-imaging",
    title: "LACP 把 Midjourney 入门课写成摄影方法课，提示词、混合技法与伦理讨论被放到同一张课表里",
    summary:
      "Los Angeles Center of Photography 5 月 4 日上线三节在线课程“AI Generative Imaging”，面向初次接触 AI 的艺术家与摄影师，内容覆盖提示词构建、图像混合和生成式图像的伦理问题。",
    note:
      "这类课程的价值，在于它把 AI 从“会不会玩”拉回到影像作者最熟悉的问题上：你怎样建立自己的观看方式，怎样处理风格借用，怎样让工具服务于一套可持续的摄影判断。",
    source: "Los Angeles Center of Photography",
    date: "2026-05-04",
    href: "https://lacphoto.org/events/ai-generative-imaging-midjourney-ann-elliott-cutting-2/",
    cta: "查看课程",
    tags: ["research", "global"],
    labels: ["研究/课程方法", "国外"],
  },
  {
    id: "birds-nest-tech-art-center",
    title: "鸟巢科技艺术中心正式亮相，科技艺术大展把“千屏矩阵”做成公共文化的新入口",
    summary:
      "中国网 5 月 1 日报道，“可能世界档案：2026 国际科技艺术展”在北京鸟巢科技艺术中心启幕，70 余位国内外艺术家与团队的近 150 组作品进入同一沉浸场域，数字艺术、电影视效、沉浸交互、虚拟时尚和 AI 创作被并置展示。",
    note:
      "这条信号对策展人与空间导演尤其重要，因为它说明公共文化机构已经不满足于把科技艺术做成短期事件，而是在尝试搭建长期运营的观看基础设施。作品之外，入口设计和停留机制正在变得同样关键。",
    source: "China.org.cn",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看展览",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "co-creation-night-beijing",
    title: "北京“共创之夜”把机械臂、舞者与实时渲染摆进同一舞台，跨界表演正在成为艺科活动的标准语法",
    summary:
      "中国金融信息网 5 月 2 日报道，“世界艺术与科技对话·共创之夜”在北京上演机械臂与舞者的沉浸式跨界演出，并通过 AI 舞蹈剧场《心跳》等节目把人体动作、算法光影和现场空间编排成完整体验。",
    note:
      "这类活动对影像导演、舞台设计师和品牌体验团队都很有启发，因为它把技术展示从冷冰冰的 demo 变成了可共情、可停留、可传播的演出语言。今后的艺科项目，越来越需要同时考虑编舞、叙事和观众路径。",
    source: "中国金融信息网 / 新浪财经",
    date: "2026-05-02",
    href: "https://finance.sina.com.cn/jjxw/2026-05-02/doc-inhwpchi1660169.shtml",
    cta: "查看现场",
    tags: ["trend", "cn"],
    labels: ["热点/现场表演", "国内"],
  },
  {
    id: "runway-characters-build",
    title: "Runway 公开 Characters 背后的实时视频角色方案，单张图像正在长成可对话、可表演的创作者接口",
    summary:
      "Runway Research and Engineering Team 于 5 月 4 日发布技术文章，详解如何基于单张参考图像生成 24fps 的实时视频角色，让人物、卡通形象或幻想生物获得口型、表情与头部动作，并直接进入对话状态。",
    note:
      "对影像团队、虚拟偶像工作室和展览交互设计师来说，它真正打开的是‘角色作为界面’这件事。未来的讲解员、主持人、虚拟表演者和教育角色，都可能由图像资产直接转化而来，创作门槛会从建模转向导演与设定。",
    source: "Runway",
    date: "2026-05-04",
    href: "https://runwayml.com/news/building-runway-characters",
    cta: "查看技术文章",
    tags: ["trend", "global"],
    labels: ["热点/创作者工具", "国外"],
  },
  {
    id: "winchester-whispers-trail",
    title: "Winchester 的《Whispers》今天开走，公共艺术路径把创意技术中心的建设过程直接变成可体验的作品",
    summary:
      "Winchester Gallery 5 月 7 日启动公共艺术项目《Whispers》，它把校园、画廊与正在改造中的 Centre for Creative Technologies 串成一条步行路径，并汇集 Fine Art、Games Design、Creative Computing 与 Curating 等多学科协作成果。",
    note:
      "这条信号很适合策展人和公艺团队关注，因为它把技术中心建设、学生协作和城市步行经验揉进了同一件作品里。艺术与科技的融合，正在从屏幕对象变成一种穿越场地的公共叙事方法。",
    source: "The Winchester Gallery",
    date: "2026-05-07",
    href: "https://www.thewinchestergallery.soton.ac.uk/exhibitions/whispers/",
    cta: "查看项目",
    tags: ["trend", "global"],
    labels: ["热点/公共艺术", "国外"],
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
