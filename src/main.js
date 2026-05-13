import "./styles.css";

const signals = [
  {
    id: "siva-fashion-shorts",
    title: "实拍先发生，AI 再接管延展：上视觉把时尚短片课改成一条混合制作线",
    summary:
      "上海视觉艺术学院时尚设计学院 2026 年 5 月 12 日发布《AI+生成式时尚短片创作》课程回顾。课程先组织学生完成实拍与人物塑造，再借助 AI 做画面延展、风格修订与叙事重组，让服装、场景和镜头语言在同一条流程里反复打磨。",
    note:
      "这类课程最迷人的地方，是它把生成工具从“最后补特效”往前挪了一大步。影像作者、造型团队和视觉指导可以更早讨论角色气质、镜头节奏与服装世界观，试错不再只发生在后期机房。",
    source: "上海视觉艺术学院",
    date: "2026-05-12",
    href: "https://info.siva.edu.cn/2026/0512/c896a31968/page.htm",
    cta: "查看课程回顾",
    tags: ["research", "cn"],
    labels: ["研究/课程方法", "国内"],
  },
  {
    id: "bigc-ai-film-studio",
    title: "一个月做出 12 部 AI 影像作品，北京印刷学院把课堂直接接进真实项目",
    summary:
      "北京印刷学院 2026 年 5 月 12 日披露，学校与 AI 未来电影研究院联合开设的《AIGC 影像艺术创作》课程完成结课展示。来自数字媒体艺术等专业的学生在一个月里围绕剧本、美术、分镜、视听与后期完成 12 部作品，课程结构也同步引入了行业导师与项目制评审。",
    note:
      "从教学角度看，这不是一次普通的软件训练营。它更像微缩版制片现场。对策展教育、影像教学和创作者培养来说，项目节奏、团队协作和审稿机制被提前放进课堂，本身就是方法论变化。",
    source: "北京印刷学院新闻网",
    date: "2026-05-12",
    href: "https://news.bigc.edu.cn/zhxw/fd4c6f5dd2d24ccf8980d7e5cbeb84f4.htm",
    cta: "查看结课报道",
    tags: ["research", "cn"],
    labels: ["研究/项目制教学", "国内"],
  },
  {
    id: "birds-nest-tech-art-center",
    title: "鸟巢把科技艺术中心正式点亮，数字影像、虚拟时尚与交互装置被装进常设场域",
    summary:
      "中国网 2026 年 5 月 1 日报道，鸟巢文化中心与《国家人文历史》联合发起的“生生不息”科技艺术展落地鸟巢 AI 科技艺术中心。展览汇集数字影像、虚拟时尚、机械装置和互动项目，试图把大型场馆从一次性看展地点升级为可持续运营的科技艺术现场。",
    note:
      "场地策略正在变。对做展览、品牌体验和公共艺术的人来说，真正值得看的是这种常设型载体如何把流量、空间调度和跨媒介作品留在同一张运营桌上。",
    source: "中国网",
    date: "2026-05-01",
    href: "http://cul.china.com.cn/2026-05/01/content_43100414.htm",
    cta: "查看展览报道",
    tags: ["trend", "cn"],
    labels: ["热点/科技艺术展", "国内"],
  },
  {
    id: "digital-muse-festival",
    title: "声音、影像、工作坊一起收束进上海音乐厅，音乐科技节开始像一场跨媒介排练",
    summary:
      "中新网上海 2026 年 5 月 6 日报道，首届“数字缪斯 2026 音乐科技融创节”在凯迪拉克·上海音乐厅闭幕。活动把音乐科技展演、创作者工作坊、沉浸式交互体验和行业论坛并置展开，试图让音乐制作、空间叙事与观众参与彼此连线。",
    note:
      "对声音艺术家、影像作者和现场导演来说，这类节展的意义很直接。声音不再只是背景层，技术也不只负责炫技。它们正在共同塑造新的演出语法和新的观看入口。",
    source: "中新网上海",
    date: "2026-05-06",
    href: "https://www.sh.chinanews.com.cn/yljk/2026-05-06/139735.shtml",
    cta: "查看活动回顾",
    tags: ["trend", "cn"],
    labels: ["热点/音乐科技节", "国内"],
  },
  {
    id: "adobe-agentic-drs",
    title: "设计评审终于也有了可对话的副手，Adobe 让版式反馈从直觉走向结构化协作",
    summary:
      "Adobe Research 于 2026 年 5 月 6 日公开 Agentic Design Review System。这个系统尝试模拟资深设计师在版式、层级、留白与视觉一致性上的审稿方式，让生成式代理不只给出结果，还能像评图现场那样指出问题、解释原因并提出修改建议。",
    note:
      "对于平面设计师、品牌团队和策展视觉统筹来说，这很像把一位永远在线的评审搬进工作流。提案阶段会更快，反馈语言也更容易被团队共享，尤其适合高频迭代的海报、导视和活动视觉项目。",
    source: "Adobe Research",
    date: "2026-05-06",
    href: "https://research.adobe.com/news/agentic-design-review-system-teaching-ai-to-review-graphic-designs-the-way-experts-do/",
    cta: "查看研究介绍",
    tags: ["research", "global"],
    labels: ["研究/设计评审系统", "国外"],
  },
  {
    id: "adobe-soundstager",
    title: "给视频配声不必再从整段氛围里盲猜，SoundStager 把声音叙事拆成可推敲的层",
    summary:
      "Adobe Research 于 2026 年 4 月 13 日介绍 SoundStager。它允许创作者从自然语言出发，为场景生成多层次环境声并分别调整前景、中景与背景的声音元素，让声音设计从单一结果输出转向分层式编排。",
    note:
      "做短片、装置影像或沉浸空间的人会立刻明白它的价值。声音终于能像灯光和镜头一样被逐层排练。节奏、距离感、叙事张力，都可以边听边修。",
    source: "Adobe Research",
    date: "2026-04-13",
    href: "https://research.adobe.com/news/bringing-ambient-sound-to-the-forefront/",
    cta: "查看 SoundStager",
    tags: ["research", "global"],
    labels: ["研究/声音工作流", "国外"],
  },
  {
    id: "google-flow-music-believe",
    title: "Google 把 Flow Music 交到 Believe 艺人手里，AI 音乐工具开始进入真实发行链",
    summary:
      "Google Blog 于 2026 年 5 月 6 日宣布，Lyria 驱动的实验音乐工具 Flow Music 将与 Believe 及其 Artist Services 团队合作测试，面向制作人、词曲作者和艺人团队开放更真实的创作环境。重点不只是生成旋律，而是把灵感草图、协作反馈和商业发行之间的距离缩短。",
    note:
      "一旦工具进入真实艺人服务链，它的评价标准就会彻底变化。能不能被反复修改？能不能和人的意图一起工作？能不能为下一步录音、提案和发行服务？这些问题比模型参数更接近行业现实。",
    source: "Google Blog",
    date: "2026-05-06",
    href: "https://blog.google/technology/google-labs/google-labs-updates-io-2026/",
    cta: "查看合作发布",
    tags: ["trend", "global"],
    labels: ["热点/音乐工具更新", "国外"],
  },
  {
    id: "onx-athens-showcase",
    title: "在雅典，ONX 把 AI、混合现实和影像原型并排展开，展览像一间公开工作室",
    summary:
      "Onassis ONX 官方页面显示，ONX Studio Showcase 将于 2026 年 5 月 21 日至 24 日在 Athens Digital Arts Festival 展出。项目集合 AI 影像、XR、游戏引擎实验与沉浸式叙事原型，以展示创作者如何把技术测试转成可被观看、可被讨论的文化作品。",
    note:
      "对艺术家驻留项目、数字策展和新媒体教育来说，这类 showcase 很有参考性。它把“半成品”也纳入展示逻辑，允许方法、失败、接口和想法一起上场，现场因此更像工作室，而不是只摆最终答案的白盒子。",
    source: "Onassis Foundation / ONX Studio",
    date: "2026-05-21",
    href: "https://www.onassis.org/whats-on/onx-studio-showcase-athens-digital-arts-festival-2026",
    cta: "查看项目页面",
    tags: ["trend", "global"],
    labels: ["热点/展览与驻留", "国外"],
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
