import "./styles.css";

const signals = [
  {
    id: "tsinghua-rural-ai-design-training",
    title: "清华把生成式 AI 带进助农设计训练，青年创作者开始直接面对真实场景与转化链路",
    summary:
      "清华大学美术学院 2026 年 4 月 30 日发布国家艺术基金培训项目《国家农业科技创新港生成式人工智能助农设计人才培训》，把 AIGC 工具实操、内容创作实训和商业模型孵化放进同一条培养路径，指向乡村文创与真实产业场景。",
    note:
      "这类培训最值得留意的，不是又多了一门 AI 课，而是艺术教育正在把“作品如何落地”提前到训练本身。对设计师、策展人和内容团队来说，下一阶段更吃香的是能把生成工具、在地叙事和项目转化一起编排的人。",
    source: "清华大学美术学院",
    date: "2026-04-30",
    href: "https://www.ad.tsinghua.edu.cn/info/1061/32540.htm",
    cta: "查看培训项目",
    tags: ["research", "cn"],
    labels: ["研究/人才培养", "国内"],
  },
  {
    id: "photofairs-shanghai-2026",
    title: "影像上海重新开场，数字原住民的视觉语法正在把摄影博览会推向跨媒介现场",
    summary:
      "PHOTOFAIRS Shanghai 于 2026 年 5 月 7 日至 10 日回到上海展览中心。官方信息强调，本届继续聚焦 photo-based 与 digital work，并以 Insights、Spectrum、Performance、Perspective 等单元连接经典摄影、实验影像、装置和跨媒介创作。",
    note:
      "今年国内影像圈最明确的变化，是摄影不再被单独陈列，它正和屏幕、装置、表演、出版物一起重新组织观看。做影像的人会越来越像空间导演，做展览的人也会越来越像剪辑师。",
    source: "PHOTOFAIRS Shanghai",
    date: "2026-05-07",
    href: "https://photofairs-shanghai.com/",
    cta: "查看博览会信息",
    tags: ["trend", "cn"],
    labels: ["热点/影像现场", "国内"],
  },
  {
    id: "adobe-mosound-chi-2026",
    title: "Adobe 的 MoSound 让动效先长出声音，运动图形开始拥有更轻量的声音导演台",
    summary:
      "Adobe Research 在 2026 年 4 月 13 日公布 CHI 2026 项目 MoSound。这套交互系统针对 motion graphics 的声音设计流程而来，结合视觉事件检测、空间属性映射与生成式声音风格化，帮助创作者为短而抽象的动态图形快速组织配声。",
    note:
      "对片头、品牌动画、展陈影像和短视频作者来说，这是一条很实用的方法论信号。声音不必等到最后才补，它正被重新放回视觉构思的前半段，成为塑造节奏、重量和情绪的起始材料。",
    source: "Adobe Research",
    date: "2026-04-13",
    href: "https://research.adobe.com/publication/mosound-an-interactive-tool-for-generative-sound-design-in-motion-graphics/",
    cta: "查看 MoSound",
    tags: ["research", "global"],
    labels: ["研究/声音与动态图形", "国外"],
  },
  {
    id: "venice-biennale-performance-2026",
    title: "威尼斯双年展把身体重新推回中心，表演项目提醒我们展览仍然是一种时间艺术",
    summary:
      "La Biennale di Venezia 于 2026 年 5 月 5 日发布本届 Biennale Arte 的 performance programme。官方把身体描述为知识、记忆与集体感受的载体，多个表演在 Arsenale 与 Giardini 空间内外展开，让观看再次回到行走、停留、呼吸和共时经验之中。",
    note:
      "AI 语境越强，身体经验反而越值得被重新强调。策展和空间创作正在提醒大家：观众并不是被动接受图像的人，他们会用步速、驻足、回头和彼此关系一起完成作品。",
    source: "La Biennale di Venezia",
    date: "2026-05-05",
    href: "https://www.labiennale.org/en/news/biennale-arte-2026-vibrant-performance-programme",
    cta: "查看表演项目",
    tags: ["trend", "global"],
    labels: ["热点/国际展演", "国外"],
  },
  {
    id: "cafa-zgc-art-tech-2026",
    title: "央美把 AI 故事绘本、漫剧教学和文创打卡一起推向公众，艺术院校开始搭建自己的轻量创作基础设施",
    summary:
      "中央美术学院 2026 年 4 月 9 日发布中关村论坛相关成果，除了数字文化遗产展示，还推出 AI 文创互动体验、AI 语音故事绘本系统，以及面向艺术教育与动漫创作场景的 AI 漫剧创作教学平台，覆盖从公众体验到教学方案的多层接口。",
    note:
      "这说明学院派对 AI 的想象正在变得务实。它不只是做一个惊艳 demo，而是尝试把灵感输入、图文生成、教学组织和公众参与连成一张可重复使用的工作网。",
    source: "中央美术学院",
    date: "2026-04-09",
    href: "https://www.cafa.edu.cn/st/2026/90133507.htm",
    cta: "查看项目成果",
    tags: ["research", "cn"],
    labels: ["研究/公教与创作系统", "国内"],
  },
  {
    id: "tsinghua-embodied-machines-exhibition",
    title: "清华艺博把“机器如何成为人”布成一条观看动线，具身智能第一次更像一场公共展览而不是行业发布会",
    summary:
      "清华大学艺术博物馆“具身之路：机器如何成为‘人’”于 2026 年 4 月 30 日至 5 月 6 日展出。展览按“启思—看透—看懂—共创”展开，把人形机器人从机械结构到在场智能的发展历程翻译成公众可以进入的展陈经验。",
    note:
      "当机器人被放进博物馆语境，公众看到的就不只是性能，而是姿态、尺度、反应与想象投射。对空间设计和公共艺术从业者来说，这种展陈转译能力会越来越关键。",
    source: "清华大学艺术博物馆",
    date: "2026-04-30",
    href: "https://www.artmuseum.tsinghua.edu.cn/cpsj/zlxx/zzzl/lszl/202604/t20260427_20671.shtml",
    cta: "查看展览信息",
    tags: ["trend", "cn"],
    labels: ["热点/具身展览", "国内"],
  },
  {
    id: "mit-physiopt-3d-objects",
    title: "MIT 用物理模拟修正生成式 3D 方案，装饰物和小物件终于更接近“可做出来”的审美",
    summary:
      "MIT CSAIL 于 2026 年 2 月 25 日介绍 PhysiOpt 系统。它在生成式 AI 输出的 3D 蓝图上叠加物理模拟和细微结构修正，让杯子、书挡、钥匙挂件等日常物件在 3D 打印后更能承受真实使用。",
    note:
      "这是产品设计、家居实验和小规模艺术衍生开发都会关心的一步。生成的形态开始接受重力、受力和使用情境的约束，AI 审美也因此更接近材料世界里的真实分寸。",
    source: "MIT CSAIL",
    date: "2026-02-25",
    href: "https://news.mit.edu/2026/mixing-ai-with-physics-to-create-personal-items-0225",
    cta: "查看 PhysiOpt",
    tags: ["research", "global"],
    labels: ["研究/生成式产品设计", "国外"],
  },
  {
    id: "canva-ai-2-0",
    title: "Canva AI 2.0 把对话、图层和工作流接到一起，轻量设计平台开始向创意操作系统靠拢",
    summary:
      "Canva 于 2026 年 4 月 16 日发布 Canva AI 2.0，强调从单次生成走向 conversational design、iterative agentic editing 和 layered object intelligence。官方还把 connectors、web research、brand intelligence 与 Canva Code 2.0 一并推上台面。",
    note:
      "它对创作者最直接的意义，是平台级工具正在争夺“从想法到发布”的完整入口。模板时代还没有结束，但新的竞争点已经变成谁能把草图、品牌规则、编辑自由度和团队协作同时留在一个画面里。",
    source: "Canva",
    date: "2026-04-16",
    href: "https://www.canva.com/newsroom/news/canva-create-2026-ai/",
    cta: "查看产品更新",
    tags: ["trend", "global"],
    labels: ["热点/创作者工具", "国外"],
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
