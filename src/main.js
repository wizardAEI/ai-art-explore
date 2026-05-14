import "./styles.css";

const signals = [
  {
    id: "tongji-spatial-ai-studio",
    title: "同济把城市大屏当成课堂现场，AIGC 影像训练第一次真正接上空间尺度",
    summary:
      "同济大学教务处 2026 年 4 月 22 日展示设计创意学院《专业设计(3)——虚实融合创新设计》课程成果。课程以奉贤新城“在水一方科幻馆”为真实场景，将教学组织成“真实场景驱动—人机协同创作—数据反馈优化”的流程，要求学生完成从概念生成、视觉叙事到城市级媒介呈现的完整影像路径。",
    note:
      "这条线索最有价值的地方，在于它把 AI 从软件课里的技巧练习，推到了公共空间里的观看问题。对于策展视觉、城市影像、品牌展陈团队来说，下一代工作流会更早处理尺度、动线、停留时间和现场传播，而不是等作品快做完才想起它要被放在哪里。",
    source: "同济大学教务处",
    date: "2026-04-22",
    href: "https://jwc.tongji.edu.cn/a2/7e/c30671a369278/page.htm",
    cta: "查看课程成果",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "cuc-beijing-declaration",
    title: "中传发布《数智艺术北京宣言》，艺科融合开始从单课试验走向联合培养框架",
    summary:
      "中国传媒大学新闻网 2026 年 5 月 1 日报道，“从数字到数智——艺术与科技人才培养研讨会”发布《数智艺术北京宣言》。会议同步展示 AI 艺术成果，并围绕 AIDT 实验室、联合校园、系统思维与人机协作等议题，讨论数智时代的艺术教育和创作伦理。",
    note:
      "这不是一句宏大的口号。它更像产业和院校共同发出的课程大纲升级信号。对艺术院校、驻留机构和创意团队而言，真正值得记住的是几个关键词已经被公开写出来了：主体性、协作性、跨学科、国际联动。未来两三年的培养方法，大概率会围着这些轴重新排布。",
    source: "中国传媒大学新闻网",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/_t114/2026/0501/c1976a269799/page.psp",
    cta: "查看研讨会报道",
    tags: ["research", "cn"],
    labels: ["研究/教育方法", "国内"],
  },
  {
    id: "butterfly-mr-docent",
    title: "AI 导览不再只会播讲解词，Dream-Butterfly 想把 MR 展览里的陪看关系重新设计一遍",
    summary:
      "arXiv 于 2026 年 2 月发布《Whispers of the Butterfly》。这项研究通过 Research-through-Design 方法，为大型户外 MR 艺术展设计了一个可召唤的对话式 AI 导览体 Dream-Butterfly，并比较 AI 主导导览与人工主导导览在解释可达性、沉浸感与责任分配上的差异。",
    note:
      "对做展览叙事、公共艺术和文化科技体验的人来说，这篇论文提醒我们，导览系统不必总是像售票机旁边的说明牌。它也可以更轻、更贴身、更像陪伴式界面。作品怎么被理解、何时被打断、观众何时愿意主动提问，这些微小节点都正在变成可设计对象。",
    source: "arXiv",
    date: "2026-02-05",
    href: "https://arxiv.org/abs/2602.05826",
    cta: "查看研究摘要",
    tags: ["research", "global"],
    labels: ["研究/MR 导览", "国外"],
  },
  {
    id: "intelligent-musical-instruments",
    title: "一块单板电脑也能成为乐器，音乐 AI 终于开始从模型演示转向可演奏对象",
    summary:
      "arXiv 于 2026 年 4 月 26 日发布《Opening the Design Space》。研究者基于两年的第一人称艺术研究，提出一套可移植、低成本的智能乐器平台，让生成式 AI 通过 MIDI 接入真实演奏体系，并总结出快速交错输入、小数据模型迁移、重新映射替代重训练等共创策略。",
    note:
      "这条研究最打动人的地方是，它把‘生成音乐’从结果页拉回了手部动作、呼吸、排练和舞台。音乐人、声音艺术家和现场表演团队在意的从来不只是输出一段旋律，而是工具能不能被摸熟、被误用、被即兴推进。这个方向更接近乐器史，而不是软件发布史。",
    source: "arXiv",
    date: "2026-04-26",
    href: "https://arxiv.org/abs/2604.23583",
    cta: "查看研究摘要",
    tags: ["research", "global"],
    labels: ["研究/音乐交互", "国外"],
  },
  {
    id: "hengqin-digital-art-expo",
    title: "横琴把数字艺术博览会做成一整条生态链，展区、论坛、设备和内容生产第一次同场压缩",
    summary:
      "横琴粤澳深度合作区官网 2026 年 4 月 29 日发布，2026 横琴-澳门国际数字艺术博览会于 4 月 27 日至 5 月 10 日举行。四大展区把生成式艺术、互动影像、VR、文博数字化、AIGC 音乐、创作设备和行业论坛并置展开，让数字艺术从单件作品展示延伸到创作、传播和交易的完整生态。",
    note:
      "如果你做的是展览策划、品牌体验或内容制作，这种博览会形态很值得跟踪。创作者在现场看到的不只是作品，更是工具链、合作方和应用场景如何被打包出售。艺术行业的工作现场，正在越来越像一个可快速拼装的系统市场。",
    source: "横琴粤澳深度合作区官网",
    date: "2026-04-29",
    href: "https://www.hengqin.gov.cn/macao_zh_hans/hzqgl/dtyw/dtxx/content/post_3900774.html",
    cta: "查看博览会详情",
    tags: ["trend", "cn"],
    labels: ["热点/数字艺术博览会", "国内"],
  },
  {
    id: "digital-drifting-bfa-tour",
    title: "从校园走到美术馆巡回展，北京电影学院把新媒体艺术教育里的影像方法整批端上台面",
    summary:
      "北京朝阳文明网 2026 年 3 月 11 日报道，“数字浮游——第六届北京电影学院国际新媒体艺术三年展巡回展”在郎园 Station X 美术馆展出至 5 月 5 日。展览汇集 24 位艺术家与 26 件作品，覆盖摄影、CG 动画、虚拟拍摄短片、AI 生成式影像和交互装置，围绕影像艺术与数字技术的共生关系展开。",
    note:
      "这一类巡回展给行业释放的信息很明确。新媒体艺术教育不再只在校内自我循环，教学成果和创作方法也在进入城市美术馆的公共讨论。对青年艺术家和策展人来说，这意味着‘毕业作品’和‘展览作品’之间的边界会继续变薄。",
    source: "北京朝阳文明网",
    date: "2026-03-11",
    href: "https://www.bjwmb.gov.cn/wmdt/cyq/10121619.html",
    cta: "查看展览报道",
    tags: ["trend", "cn"],
    labels: ["热点/新媒体艺术展", "国内"],
  },
  {
    id: "tiktok-symphony-suite",
    title: "TikTok 把创作者发现、视频生成和镜头级参考控制并到一起，短视频生产线更像一台编排机",
    summary:
      "TikTok Newsroom 于 2026 年 5 月 13 日在 TikTok World '26 上宣布多项 AI 创意更新：Creator AI Search 可按 brief 与创作者画像匹配合作对象，Dreamina Seedance 2.0 已接入 TikTok Symphony，新的 Reference to Video 功能则允许用户指定某张图或某个产品在视频里的具体出现时刻。",
    note:
      "这对影像创作者的影响并不只在广告行业。平台级工具一旦同时处理找人、出片和变体控制，团队的注意力就会从单条视频能否做出来，转向一整套风格能否被持续复制。模板、节奏和镜头语言，会变得和素材本身一样重要。",
    source: "TikTok Newsroom",
    date: "2026-05-13",
    href: "https://newsroom.tiktok.com/tiktok-world-26-turning-discovery-into-business-growth-with-ai-powered-innovations-vertical-experiences-and-high-impact-brand-solutions?lang=en",
    cta: "查看产品发布",
    tags: ["trend", "global"],
    labels: ["热点/创作者工具", "国外"],
  },
  {
    id: "kaist-living-geometry",
    title: "KAIST 把城市数据翻译成可走入的媒介艺术，首尔这档展览像一间向公众开放的研究室",
    summary:
      "KAIST XD Lab 官方页面显示，Living Geometry 2026 于 2026 年 5 月 1 日至 6 月 28 日在首尔 YDP Artsquare 展出。展览集结 7 件作品，横跨单频影像、互动装置与 web art，用生成式 AI、脉搏传感、生物反馈和城市数据可视化把永登浦的空间经验重新写成一套可体验的叙事。",
    note:
      "我喜欢它的一点，是它没有把研究感藏起来。观众能直接碰到浏览器作品、传感器作品和数据影像作品的中间层。对做跨媒体叙事和空间交互的人来说，这类展览像是在提醒我们，方法本身也可以拥有展陈价值。",
    source: "KAIST XD Lab",
    date: "2026-05-01",
    href: "https://www.xdlab.net/events/living-geometry-2026",
    cta: "查看展览页面",
    tags: ["trend", "global"],
    labels: ["热点/媒体艺术展", "国外"],
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
