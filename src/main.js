import "./styles.css";

const signals = [
  {
    id: "tsinghua-sigs-imdt-demo-floor",
    title: "清华深研院 IMDT 毕业展把 AI、教育、医疗和独立游戏并排摆开，互动媒体训练越来越像一场真实路演",
    summary:
      "清华大学深圳国际研究生院 2026 年 5 月 19 日发布 2026 届互动媒体设计与技术项目毕业展信息。展览从 5 月 18 日启幕，集中展示 28 件作品，分成 AI 技术、教育科普、医疗与心理、独立游戏四个主题展区。生成式叙事、AI 陪伴创作与游戏化表达被直接放进同一观看路径里，说明研究型训练正在把“能否被真实用户理解和使用”提前放到毕业节点上。",
    note:
      "这类项目最有价值的地方，在于它不再把创意、技术和测试拆开做。对互动影像、体验装置和教育内容团队来说，原型如何站上场地，已经成了作品质量的一部分。",
    source: "清华大学深圳国际研究生院",
    date: "2026-05-19",
    href: "https://www.sigs.tsinghua.edu.cn/2026/0519/c7687a290906/page.htm",
    cta: "查看 IMDT 毕业展",
    tags: ["research", "cn"],
    labels: ["研究/互动媒体方法", "国内"],
  },
  {
    id: "cqu-smart-cabin-workshop",
    title: "重庆大学把智能座舱课做成校企工作坊，AI 正在回到服务流程、原型表达与体验评价这些设计基本功里",
    summary:
      "重庆大学艺术学院 2026 年 5 月中旬发布《智能座舱交互与服务设计》联合课程暨工作坊招募。课程与上汽设计中心协作推进，以“真实课题 + AI”驱动教学，覆盖用户研究、问题定义、概念生成、交互流程、服务蓝图到原型表达与体验评价的完整链路。这里讨论的重点并不是炫技，而是如何把 AI 安放进一套可落地的设计判断中。",
    note:
      "它给设计教育释放出一个明确信号：行业正在重新重视过程证据。谁能把研究、原型和讲述接得更顺，谁就更容易把复杂系统做得有温度。",
    source: "重庆大学艺术学院",
    date: "2026-05-13",
    href: "https://www.arts.cqu.edu.cn/info/1269/8355.htm",
    cta: "查看工作坊招募",
    tags: ["research", "cn"],
    labels: ["研究/校企工作坊", "国内"],
  },
  {
    id: "nua-520-city-carnival",
    title: "南艺 520 毕业展演嘉年华继续往城市里长，毕业发布越来越像一套面向公众运行的文化接口",
    summary:
      "南京艺术学院 2026 年 5 月 14 日发布 2026·第十一届 520 毕业展演嘉年华新闻发布会信息。本届活动首次与江苏省广播电视总台深度合作，并计划在 5 月 20 日晚于紫金塔广场呈现综合汇报演出。校园内的毕业成果被进一步接入城市地标、媒体资源与街区文化节点，展演不再只是学年总结，也是一种公共传播机制。",
    note:
      "对策展、品牌与艺术教育从业者来说，这种毕业季很值得观察。学校正在练习如何把创作、传播和现场组织打包成一整套面向社会的体验。",
    source: "南京艺术学院",
    date: "2026-05-14",
    href: "https://www.nua.edu.cn/2026/0514/c332a120861/page.htm",
    cta: "查看发布会信息",
    tags: ["trend", "cn"],
    labels: ["热点/城市展演接口", "国内"],
  },
  {
    id: "bigc-design-arts-grad-show",
    title: "北京印刷学院把本硕毕业展拉到 6 月底，设计教育正在用更长的展期争取持续讨论",
    summary:
      "北京印刷学院设计艺术学院近期发布 2026 本硕毕业展“印向”信息，展览自 2026 年 5 月 23 日持续至 6 月 22 日。长展期让平面、出版、视觉传达与数字表达不再停留在开幕当天的热度里，而是有机会进入更稳定的观看、回访与传播节奏。对一所强调设计与出版交叉关系的学院来说，这种安排本身就是一次展示策略升级。",
    note:
      "当毕业展不急着谢幕，作品和观众的关系就会变得更具体。它允许教学成果在真实时间里接受讨论，也更像一个面向行业的样本库。",
    source: "北京印刷学院设计艺术学院",
    date: "2026-05-23",
    href: "https://www.bigc.edu.cn/byxs19/81492d7d4f97428b9f971c589a22807e.htm",
    cta: "查看毕业展信息",
    tags: ["trend", "cn"],
    labels: ["热点/设计毕业展策略", "国内"],
  },
  {
    id: "ucla-lightfest-ai-microscopy",
    title: "UCLA 把显微成像、医学研究与媒体艺术放到同一场 LightFest，图像方法正在跨越实验室和展厅",
    summary:
      "UCLA Design Media Arts 于 2026 年 5 月 15 日至 16 日举办 LightFest 3.0: AI Tools for Microscopy in Medicine and Media Arts。项目由 Art|Sci Center、显微与光谱实验室及多家研究机构共同发起，围绕 AI 显微成像、可持续议题、医学研究与媒体艺术展开。它不是简单地借科学图像做视觉灵感，而是把“如何看见”这件事重新定义为跨学科合作问题。",
    note:
      "做影像、装置和研究型策展的人可以从这里得到一种方法启发：当观察工具本身发生变化，审美语言往往会一起改写。",
    source: "UCLA Design Media Arts",
    date: "2026-05-15",
    href: "https://www.design.ucla.edu/events/light-fest-3-0-ai-tools-for-microscopy-in-medicine-and-media-arts",
    cta: "查看 LightFest 议程",
    tags: ["research", "global"],
    labels: ["研究/艺术科学成像", "国外"],
  },
  {
    id: "interaccess-synthetic-worlds",
    title: "InterAccess 让传统艺术家直接上手本地生成工作流，关于 AI 的讨论开始回到材料、伦理和身体经验",
    summary:
      "多伦多艺术机构 InterAccess 在 2026 年 5 月 16 日至 17 日举办 Synthetic Worlds: Making Images & Video with Generative AI 工作坊，并安排作品进入 5 月 23 日至 24 日春季展示。课程面向摄影师、电影作者、音乐人、画家等传统艺术创作者，既讨论训练数据、能耗与平台权力，也覆盖 ComfyUI、TouchDesigner 等本地工作流。方法训练和伦理辨析被放在了同一个桌面上。",
    note:
      "这比“教你用某个模型”更进一步。它帮助创作者建立一套自我判断框架：什么时候该借力，什么时候该质疑，什么时候该把工具拉回自己的手边。",
    source: "InterAccess",
    date: "2026-05-16",
    href: "https://www.interaccess.org/workshop/synthetic-worlds-making-images-video-with-generative-ai",
    cta: "查看工作坊详情",
    tags: ["research", "global"],
    labels: ["研究/生成影像工作流", "国外"],
  },
  {
    id: "focus-art-fair-human-technology",
    title: "Focus Art Fair 纽约站把 Human-Technology Coexistence 做成主命题，技术艺术正在重新争取收藏与公共讨论的位置",
    summary:
      "Focus Art Fair 官方页面显示，纽约站于 2026 年 5 月 21 日至 24 日在 Chelsea Industrial 举行，并以 Human-Technology Coexistence 为主题。AI、数字世界、自动化和新工具不再只出现在技术展示区，而是进入当代艺术博览会的正式叙事中。对艺术家和画廊来说，这意味着技术议题正在回到市场、评论与观众交流的中央地带。",
    note:
      "展会语言很重要。它决定技术相关作品会被当成短期新鲜事，还是被认真纳入当代艺术的价值讨论。",
    source: "Focus Art Fair",
    date: "2026-05-21",
    href: "https://www.focusartfair.net/newyork",
    cta: "查看纽约站信息",
    tags: ["trend", "global"],
    labels: ["热点/艺博会主题转向", "国外"],
  },
  {
    id: "elevenlabs-voice-creators-22m",
    title: "ElevenLabs 说语音创作者半年收入翻倍，声音作者开始拥有更像版权分账而非一次性接单的工作模型",
    summary:
      "ElevenLabs 于 2026 年 5 月 22 日发布数据称，Voice Library 上的语音创作者累计收入已超过 2200 万美元，较 2025 年 11 月的 1100 万美元翻倍，平台上已有一万多名创作者在持续获利。对于播客制作人、配音演员、声音艺术家和品牌声音团队来说，声音资产的价值正在从单次交付，转向可追踪、可授权、可反复分成的长期模型。",
    note:
      "这条信号提醒我们，AI 并不只改变制作方式，也在改写创作者和平台之间的合同想象。声音这门手艺，正在长出新的市场结构。",
    source: "ElevenLabs",
    date: "2026-05-22",
    href: "https://elevenlabs.io/blog/22-million-earned-by-voice-creators-on-elevenlabs",
    cta: "查看 ElevenLabs 数据",
    tags: ["trend", "global"],
    labels: ["热点/声音创作者经济", "国外"],
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
