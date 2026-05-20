import "./styles.css";

const signals = [
  {
    id: "cafa-light-art-ai-practice",
    title: "中央美院把光艺术培训做成一条完整链路，AI 影像、互动装置与文旅场景被放进同一套练习",
    summary:
      "中央美术学院建筑学院发布的光艺术短期研修班将于 2026 年 5 月 21 日至 24 日开课，课程把人工智能数字呈现、古建筑照明、文化遗产活化、场景化文旅与光互动装置创作并置安排。它不再把 AI 当作单独的软件技能，而是直接嵌进空间叙事、展陈体验和工程落地的连续流程里。",
    note:
      "这条信号对策展团队、空间设计师和沉浸式内容工作室很关键。越来越多创作训练开始要求作者同时理解氛围、动线、交互与施工条件，审美判断要在更早阶段就进入技术排布。",
    source: "中央美术学院建筑学院",
    date: "2026-05-21",
    href: "https://www.cafa.edu.cn/st/2026/81233533.htm",
    cta: "查看课程简章",
    tags: ["research", "cn"],
    labels: ["研究/空间与光艺术方法", "国内"],
  },
  {
    id: "xiyou-ai-shortdrama-bootcamp",
    title: "AI 短剧开始被标准化教学，西安这套实训直接把分镜、资产、镜头和音效拆成可复用流程",
    summary:
      "中国好创意大赛官网发布的“AI 短剧全流程实操实训”将于 2026 年 5 月 20 日至 24 日在西安邮电大学举行。安排从剧本结构、分镜设计、图片资产、视频生成到音效与成片打磨逐日推进，并把豆包、即梦、runninghub 等工具嵌入实际任务，让学员围绕同一个短剧项目练完整条生产线。",
    note:
      "这不是单纯的工具体验班，更像一套新型制片课。对影像创作者来说，重要变化在于工作流被清晰拆解，个人作者也能更像小型工作室那样组织项目。",
    source: "中国好创意大赛官网",
    date: "2026-05-20",
    href: "https://cdec.org.cn/articleDetail/2310",
    cta: "查看实训安排",
    tags: ["research", "cn"],
    labels: ["研究/AI 影像教学", "国内"],
  },
  {
    id: "barnard-generative-ai-media-workshop",
    title: "Barnard 把生成式 AI 放回前期开发，故事板和 lookbook 成了这轮训练的真正主角",
    summary:
      "Barnard College 的 Sloate Media Center 于 2026 年 5 月 2 日举办“Generative AI & Media Workshop”，由 NYU Tisch 教师 David Poyner 带领学生用 Google Gemini 和 Adobe Firefly 为短片开发故事板与 lookbook。页面把 AI 的位置说得很明确: 它服务于世界观搭建、视觉开发与前期沟通，而不是直接跳过导演思考。",
    note:
      "这条线索对电影学生、品牌短片团队和独立导演都很有参考价值。创作行业开始把 AI 放进前期，而前期恰恰是审美、预算和团队语言最先成形的地方。",
    source: "Barnard College Sloate Media Center",
    date: "2026-05-02",
    href: "https://mediacenter.barnard.edu/events/generative-ai-media-workshop",
    cta: "查看工作坊页面",
    tags: ["research", "global"],
    labels: ["研究/影像前期方法", "国外"],
  },
  {
    id: "wdc-synthetic-studio",
    title: "法兰克福世界设计之都今天把“作者是谁”做成现场议题，设计师的位置正从手工执行转向概念编排",
    summary:
      "World Design Capital Frankfurt RheinMain 于 2026 年 5 月 20 日举行“Synthetic Studio | Dialogwerkstatt”。活动围绕人机共创、责任、直觉与新作者概念展开，明确提出设计实践正从独立作者范式转向与人工智能持续对话的协同过程，设计师更多承担概念引导与策展式评估角色。",
    note:
      "这比普通行业论坛更有方法论意味。对设计师和艺术教育者来说，眼前的变化不只是多了几个生成按钮，而是作者身份本身被重新定义。",
    source: "World Design Capital Frankfurt RheinMain",
    date: "2026-05-20",
    href: "https://wdc2026.org/en/events/synthetic-studio-oder-dialogwerkstatt",
    cta: "查看活动信息",
    tags: ["research", "global"],
    labels: ["研究/作者性讨论", "国外"],
  },
  {
    id: "museum-day-inner-mongolia-digital",
    title: "国际博物馆日中国主会场把数字文博做成全民入口，XR、AI 数字人与球幕影院开始一起服务观展体验",
    summary:
      "新华网内蒙古频道 2026 年 5 月 13 日报道，国际博物馆日中国主会场活动将于 5 月 18 日在内蒙古博物院开幕，并集中推出元上都 XR 全感沉浸式数字之旅、球幕影院、流动数字博物馆、AI 数字人导览与裸眼 3D 等项目。博物馆不再只是收藏陈列空间，而是在用更完整的媒介组合重新组织公众与文化遗产的关系。",
    note:
      "对于策展人与展览设计团队，这是一条很现实的风向标。今天的展览现场正在要求内容、空间、交互和叙事同步发声，技术的存在感也开始更贴近观众体感。",
    source: "新华网内蒙古频道",
    date: "2026-05-13",
    href: "https://nmg.news.cn/20260513/2eb5a524d45b481f88999a93803fb3aa/c.html",
    cta: "查看主会场预告",
    tags: ["trend", "cn"],
    labels: ["热点/数字文博现场", "国内"],
  },
  {
    id: "hengqin-macao-digital-art-expo-2026",
    title: "横琴澳门数字艺术博览会把展览、论坛、设备与 AI 影像黑客松打包在一起，数字艺术正变成生态型现场",
    summary:
      "横琴粤澳深度合作区官网 2026 年 4 月 22 日发布信息显示，本届横琴-澳门国际数字艺术博览会设置“艺术未来式”“数智文博”“科技重构艺术”“数娱魔方”四大板块，同时串联论坛、课堂、创意论坛与“横琴→威尼斯 72 小时 AI 双城影像黑客松”。从生成艺术、VR 叙事到 AIGC 工具与数字创作设备，展会把创作、展示、教育和产业对接放进了同一张地图。",
    note:
      "这类博览会越来越像行业 rehearsal。作者在里面既能看到作品，也能看到工具链、资金流、合作方与下一站展演机会如何彼此连接。",
    source: "横琴粤澳深度合作区",
    date: "2026-04-22",
    href: "https://www.hengqin.gov.cn/macao_zh_hans/hzqgl/dtyw/dtxx/content/post_3898905.html",
    cta: "查看博览会详情",
    tags: ["trend", "cn"],
    labels: ["热点/数字艺术生态", "国内"],
  },
  {
    id: "runway-agent-launch",
    title: "Runway 直接把视频制作改写成对话界面，创意总监与导演会先感受到这股压力",
    summary:
      "Runway 于 2026 年 5 月 13 日发布 Runway Agent，定位为能从一句需求出发生成概念、分镜节奏、视觉方向、配音、音乐与多镜头视频成片的创意伙伴。产品页面不再强调单次生成的漂亮程度，而是强调它如何把提案、预演与初版成片压缩进一次连续对话。",
    note:
      "对影像团队来说，这会改变很多岗位的起手方式。提案、previs、社媒短片和品牌样片的第一版很可能越来越早完成，真正被抬高门槛的是判断、挑选和统筹能力。",
    source: "Runway",
    date: "2026-05-13",
    href: "https://runwayml.com/news/introducing-runway-agent",
    cta: "查看产品发布",
    tags: ["trend", "global"],
    labels: ["热点/视频创作工具", "国外"],
  },
  {
    id: "adobe-creativity-gemini-connector",
    title: "Adobe 昨天继续把创作工具外移，生成、改图、排版与视频编排开始直接进入对话式工作台",
    summary:
      "Adobe 于 2026 年 5 月 19 日宣布，Adobe for creativity connector 即将接入 Gemini。官方举例已经非常贴近真实创作者场景: 摄影师在对话中让系统逐步完成光线、构图和细节优化，内容创作者则用一张图直接得到多平台尺寸和视频变体，过程中工具会回看并征求确认。",
    note:
      "这条更新值得设计师和内容团队重点看。创作软件不再只想把人留在单一应用里，而是在争夺谁来承接最开始那一句需求、谁来串起后面的全部动作。",
    source: "Adobe Blog",
    date: "2026-05-19",
    href: "https://blog.adobe.com/en/publish/2026/05/19/adobe-creativity-connector-coming-google-gemini",
    cta: "查看 Adobe 更新",
    tags: ["trend", "global"],
    labels: ["热点/创作代理工具", "国外"],
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
