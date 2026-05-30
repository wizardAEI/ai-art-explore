import "./styles.css";

const signals = [
  {
    id: "cuc-digital-intelligence-art-declaration",
    title: "中传发布《数智艺术北京宣言》，艺术教育开始把价值判断重新写进 AI 时代的培养框架",
    summary:
      "中国传媒大学于 2026 年 5 月 1 日发布“从数字到数智——艺术与科技人才培养研讨会”报道，并在会上正式推出《数智艺术北京宣言》。这场讨论没有把重点停留在工具效率，而是直接落到原创能力、艺术主体性、创作伦理与人才培养路径。对艺术院校、策展教育项目和机构研究者来说，这是一条很硬的提醒：当生成系统全面进入创作链条，课程结构和价值训练也必须同步升级。",
    note:
      "先把“为什么创作”说清，再谈“如何调用模型”。这会是未来艺术教育里越来越关键的一道顺序。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c10133a269799/page.htm",
    cta: "查看中传研讨会与宣言",
    tags: ["research", "cn"],
    labels: ["研究/教育框架", "国内"],
  },
  {
    id: "jlart-ai-traditional-print-cocreation",
    title: "吉林艺术学院把传统年画和满族说部带进 AI 论坛，生成艺术的讨论开始更认真地碰文化语境",
    summary:
      "吉林艺术学院设计学院在 2026 年 5 月中旬参加第二届哈佛-香港教育大学-斯坦福“新兴科技与未来人才”联合论坛，围绕木版年画与满族说部提出“从工具到伙伴”“语义锚定”等方法论。与常见的 AIGC 演示不同，这里的焦点是如何避免跨模态转译造成文化错位，并让机器协同服务于叙事结构而不是吞掉地方经验。对做非遗影像、策展研究和文化转译设计的人来说，这样的讨论非常值得跟进。",
    note:
      "生成系统一旦进入地方文化叙事，提示词就不够了，语义边界、材料出处和讲述姿态都得重新校准。",
    source: "吉林艺术学院设计学院",
    date: "2026-05-16",
    href: "https://design.jlart.edu.cn/info/1012/1744.htm",
    cta: "查看吉林艺术学院论坛报道",
    tags: ["research", "cn"],
    labels: ["研究/文化转译方法", "国内"],
  },
  {
    id: "njupt-grad-show-2026",
    title: "南邮毕业展把“数绘万象·智承艺心”落到展厅里，校企协作与数智叙事正在一起塑形",
    summary:
      "南京邮电大学数字媒体与设计艺术学院于 2026 年 5 月 28 日发布 2026 届毕业设计作品展消息，展览以“数绘万象·智承艺心”为题，在校内艺术展厅正式开幕。报道特别强调展览既呈现数智驱动的设计表达，也搭建校企合作桥梁。对于视觉设计师、互动作者和毕业展策划团队来说，这说明年轻创作者的作品越来越早要同时面对内容表达、产业语境与公共展示三重压力。",
    note:
      "毕业展不再只是结课陈列，它更像第一次公开试播，作品语言、说明系统和合作能力都被一并观看。",
    source: "南京邮电大学数字媒体与设计艺术学院",
    date: "2026-05-28",
    href: "https://cm.njupt.edu.cn/_t1316/2026/0528/c2386a302797/page.htm",
    cta: "查看南邮毕业展报道",
    tags: ["trend", "cn"],
    labels: ["热点/毕业展与校企协作", "国内"],
  },
  {
    id: "siva-mixed-reality-graduation-show",
    title: "上视觉混合现实毕业展把心跳、脚步、气味都拉进交互系统，身体重新变成叙事接口",
    summary:
      "上海视觉艺术学院于 2026 年 5 月 22 日发布艺术与科技专业混合现实设计毕业展页面，展览集中呈现 AR 科普游戏、情绪可视化系统、VR 大空间展、数字交互穿戴和沉浸式视听空间等作品。页面文字写得很明确：图像不再只在屏幕里，声音可以实时转译为视觉，身体信号也会成为叙事燃料。对交互艺术家、空间影像团队和展览导演来说，这是一组非常具体的审美线索。",
    note:
      "让观众不只是看见图像，而是被卷进感知回路里。这类作品正在把交互从按钮逻辑推向气氛逻辑。",
    source: "上海视觉艺术学院",
    date: "2026-05-22",
    href: "https://www.siva.edu.cn/2026/0522/c109a32081/page.htm",
    cta: "查看上视觉混合现实毕业展",
    tags: ["trend", "cn"],
    labels: ["热点/混合现实与感知设计", "国内"],
  },
  {
    id: "mit-beyond-data-driven-aesthetics",
    title: "MIT 把计算美学研究直接做成展览，关于“如何生成、如何判断”的问题被翻成可走入的空间",
    summary:
      "MIT Architecture 当前正在展出的 Beyond Data-Driven Aesthetics，把一个关于计算美学系统的长期研究项目转译为展览与研究平台。项目追踪的不是“数据够不够多”，而是创作与评价如何被计算地组织起来，并通过互动装置把这些逻辑重新交给公众理解。对建筑师、展览设计师和数字艺术研究者来说，这类呈现方式很重要，因为它让理论不再只停在论文里，而是能被空间化地体验。",
    note:
      "把研究做成可逛、可看的装置，本身就是一种写作。未来会有更多方法论不是被解释，而是被布置出来。",
    source: "MIT Architecture",
    date: "2026-03-31",
    href: "https://architecture.mit.edu/news/exhibition-beyond-data-driven-aesthetics",
    cta: "查看 MIT 展览与研究项目",
    tags: ["research", "global"],
    labels: ["研究/计算美学项目", "国外"],
  },
  {
    id: "gray-area-creative-code-showcase",
    title: "Gray Area 把创意编程课程成果公开展出，代码练习正越来越像可被观看的作者性陈述",
    summary:
      "Gray Area 在 2026 年 5 月 20 日至 21 日举行的 Creative Code Showcase 中，让 13 位创作者公开展示 Creative Code Intensive 的课程成果。展出作品横跨沉浸式装置、互动诗歌和艺术游戏，同时把记忆、监控、身份与 AI 时代的人机关系并排展开。对艺术教育组织者和新媒体创作者来说，这种公开展示有个很值得学的点：课程不只教软件，它也教如何把计算过程组织成有立场的作品语言。",
    note:
      "写代码、搭交互、谈处境，三件事放在一起，作者气质才会真正浮出来。",
    source: "Gray Area",
    date: "2026-05-20",
    href: "https://grayarea.org/event/gray-area-creative-code-showcase-spring-2026/",
    cta: "查看 Gray Area Showcase",
    tags: ["research", "global"],
    labels: ["研究/创意编程教育", "国外"],
  },
  {
    id: "dia-come-play",
    title: "底特律艺术博物馆把整面大厅做成实时交互装置，博物馆正在主动学习怎样让身体进入作品",
    summary:
      "底特律艺术博物馆于 2026 年 5 月 26 日发布 Come Play 项目介绍，宣布从 5 月 30 日起在 Great Hall 部署三块 13 英尺高的数字屏幕，将观众动作即时转译为光、影与声音。馆方把它定义为首次大型数字装置实验，也把可达性和家庭观众体验放进设计重点。对策展团队、互动装置工作室和公共文化空间运营者来说，这不是简单的打卡项目，而是在练习一种新的入场方式。",
    note:
      "当观众的手势、停顿和步伐都能触发反馈，博物馆的节奏就会被重新书写。",
    source: "Detroit Institute of Arts",
    date: "2026-05-26",
    href: "https://dia.org/about/blog/come-play-new-digital-experience-dia",
    cta: "查看 DIA 数字装置项目",
    tags: ["trend", "global"],
    labels: ["热点/博物馆交互体验", "国外"],
  },
  {
    id: "elevenlabs-music-v2",
    title: "ElevenLabs 把 AI 音乐更新做成可分段编辑的工作流，声音创作终于更像剪辑而不是抽卡",
    summary:
      "ElevenLabs 于 2026 年 5 月 26 日发布 Music v2，强调新模型不仅提升人声、编曲与多语种表现，还支持对歌曲局部进行 inpainting，并能按 intro、verse、chorus 这样的段落结构继续向前生成。对影像作者、声音设计师、品牌内容团队和独立音乐人来说，这类更新很关键，因为它让 AI 音乐不再只是一次性出图式结果，而开始靠近真正可修改、可拼接、可导演的制作流程。",
    note:
      "能改桥段，能续段落，能保留结构。声音工具一旦长出这些控制力，创作者才更愿意把它纳入正式工作流。",
    source: "ElevenLabs",
    date: "2026-05-26",
    href: "https://elevenlabs.io/blog/introducing-music-v2",
    cta: "查看 ElevenLabs Music v2",
    tags: ["trend", "global"],
    labels: ["热点/音乐创作者工具", "国外"],
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
