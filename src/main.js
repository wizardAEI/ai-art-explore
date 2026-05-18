import "./styles.css";

const signals = [
  {
    id: "nju-incalculable-summer-school",
    title: "南京大学把“不可计算”推回艺术方法内部，这场暑校更像一次给创作者准备的思维换挡",
    summary:
      "南京大学艺术学院于 2026 年 5 月 12 日发布“不/可计算：人工智能、艺术与创意方法国际暑期学校”招生简章。课程把可持续未来、艺术与人文、科学与技术、文化与社区放进同一张课表里，邀请创作者从计算能力之外，重新讨论判断、关系与创意方法。",
    note:
      "当越来越多工具承诺替我们生成答案，艺术教育反而开始提醒另一件事: 哪些问题不能被轻易算完。对策展、视觉叙事和跨媒介创作来说，这类训练的价值在于保住复杂性，而不是追求流程最短。",
    source: "南京大学艺术学院",
    date: "2026-05-12",
    href: "https://art.nju.edu.cn/b3/80/c55331a832384/page.htm",
    cta: "查看暑校简章",
    tags: ["research", "cn"],
    labels: ["研究/创意方法", "国内"],
  },
  {
    id: "cdec-smart-soundscape",
    title: "声音不再只是配角，中国好创意把“数智声景”单独拎出来，给展演与公共空间开了一条新赛道",
    summary:
      "中国好创意暨全国数字艺术设计大赛于 2026 年 5 月 5 日发布第 20 届“数智声景专项赛”。主办方把声音景观、数字交互空间设计和学术论文并列成三个组别，明确鼓励创作者把 AI 生成、实时引擎、空间音频和多模态交互放进同一个方案里，面向文旅、展演、城市微空间与疗愈场景展开实验。",
    note:
      "这条信号很适合声音艺术家、舞台设计师和空间团队留意。新的创作单元正在出现，作品不一定先是一首歌、一支片子或一件装置，它也可能先是一套会响应人的场域关系。",
    source: "中国好创意暨全国数字艺术设计大赛",
    date: "2026-05-05",
    href: "https://cdec.org.cn/articleDetail/2322",
    cta: "查看专项赛说明",
    tags: ["research", "cn"],
    labels: ["研究/声景方法", "国内"],
  },
  {
    id: "met-build-with-ai",
    title: "The Met 让创作者直接拿馆藏做原型，博物馆开始把 AI 当成观众关系设计的一部分",
    summary:
      "The Metropolitan Museum of Art 于 2026 年 5 月 1 日回顾“Build with AI at The Met”黑客松，邀请 40 多位 technologists、makers 与学生围绕亚洲艺术馆藏快速搭建体验原型。项目从自然语言语义搜索、鱼类图像识别到可演奏的数字乐器，把馆藏解释、游戏化交互和观众参与混在一起测试。",
    note:
      "很多机构还在问要不要把 AI 带进展厅，The Met 已经先拿它来试观众怎么走、怎么找、怎么玩。对美术馆与文化品牌来说，下一轮数字策展不只是做一个讲解助手，更像重写进入作品的方法。",
    source: "The Metropolitan Museum of Art",
    date: "2026-05-01",
    href: "https://www.metmuseum.org/perspectives/build-with-ai-at-the-met",
    cta: "查看 The Met 文章",
    tags: ["research", "global"],
    labels: ["研究/馆藏交互实验", "国外"],
  },
  {
    id: "interaccess-synthetic-worlds",
    title: "InterAccess 把争议和实操一起摆上桌，这个生成影像工作坊更接近艺术家的现实训练",
    summary:
      "多伦多机构 InterAccess 于 2026 年 5 月 16 日至 17 日举办“Synthetic Worlds: Making Images & Video with Generative AI”。课程面向摄影师、电影作者、音乐人、画家等传统艺术创作者，同时讲训练素材争议、数据中心水耗与平台权力结构，也安排 StreamDiffusion、TouchDesigner、ComfyUI 等本地工作流实践。",
    note:
      "这门课有意思的地方在于它没有把伦理问题和创作问题分开。艺术家正在面对的是同一张桌子: 一边是风格、速度和控制力，另一边是材料来源、资源消耗和平台依赖。",
    source: "InterAccess",
    date: "2026-05-16",
    href: "https://www.interaccess.org/workshop/synthetic-worlds-making-images-video-with-generative-ai",
    cta: "查看工作坊介绍",
    tags: ["research", "global"],
    labels: ["研究/生成影像工作坊", "国外"],
  },
  {
    id: "possible-worlds-archive",
    title: "鸟巢的新科技艺术中心开场就把电影视效、虚拟时尚和思辨设计压进同一条观看动线",
    summary:
      "China.org.cn 于 2026 年 5 月 1 日报道，“可能世界档案：2026 国际科技艺术展”在北京鸟巢科技艺术中心启幕。展览以“世界树”为叙事脉络，将数字艺术、电影工业视效、沉浸交互、虚拟时尚、AI 创作与思辨设计组合为常设公共体验空间，强调科技不是单件作品里的效果，而是一整套展览语法。",
    note:
      "如果你在做沉浸展、品牌空间或影像装置，这类项目值得观察。今天的技术展陈已经不满足于展示新玩具，它更想制造一种可以被拍摄、被停留、被复述的世界观。",
    source: "China.org.cn",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看展览报道",
    tags: ["trend", "cn"],
    labels: ["热点/科技艺术展", "国内"],
  },
  {
    id: "shenzhen-ai-terminal-expo",
    title: "深圳把 AI 终端展做成创作者入口，电影节、独立展位和开发者活动正在一起吸人流",
    summary:
      "深圳市政府 2026 年 4 月 30 日发布消息，宣布“2026 全球人工智能终端展暨第七届深圳国际人工智能展览会”将于 5 月 14 日至 16 日举行。活动除了产品展区，还同步推出 AI 新物种节、AI 幻境电影节、AI 国际开发者节，以及面向中小团队与独立开发者的“一人一展位”计划。",
    note:
      "展会语言也在变。硬件、模型和接口之外，组织者开始主动为影像作者、设计师和独立团队安排曝光场景。做作品的人不只是去看趋势，也可能直接去占一个位置。",
    source: "深圳市人民政府",
    date: "2026-04-30",
    href: "https://www.sz.gov.cn/cn/xxgk/zfxxgj/zwdt/content/mpost_12761252.html",
    cta: "查看展会发布",
    tags: ["trend", "cn"],
    labels: ["热点/创作者生态", "国内"],
  },
  {
    id: "runway-agent",
    title: "Runway 直接把“对话式出片”推到台前，视频制作开始更像导演一个会执行的搭档",
    summary:
      "Runway 于 2026 年 5 月 13 日发布 Runway Agent，把概念、故事节拍、视觉方向、配音、对白与音乐整合进一次对话流程。品牌团队、创意代理和独立电影作者都被直接设定为目标用户，平台强调可以从一句需求走到一条 ready-to-publish 的多镜头视频。",
    note:
      "这会影响短片预演、提案视频、社媒影像和低预算品牌内容。镜头语言当然还得靠人定调，但从念头到样片之间那段最容易卡住的空白，现在被平台压得更薄了。",
    source: "Runway",
    date: "2026-05-13",
    href: "https://runwayml.com/news/introducing-runway-agent",
    cta: "查看产品发布",
    tags: ["trend", "global"],
    labels: ["热点/视频创作工具", "国外"],
  },
  {
    id: "nycxdesign-future-now",
    title: "纽约设计周把 AI 单独做成一天峰会，研究与实务被安排在同一张时间表里碰面",
    summary:
      "NYCxDESIGN 将于 2026 年 5 月 19 日在 Cornell Tech 举办“FUTURE NOW: Art of the Possible AI SUMMIT”。主办方把上午留给研究与学术视角，下午转向设计实践，从 architecture、graphic design 到 art and technology，一天之内集中讨论 AI 如何改变创意流程与产出形态。",
    note:
      "当设计周开始为 AI 预留完整舞台，信号已经很明确了。它不再只是工具分会场，而是正在成为品牌、空间、图形和视觉叙事共同处理的主议题。",
    source: "NYCxDESIGN",
    date: "2026-05-19",
    href: "https://nycxdesign.org/events/future-now-art-of-the-possible-ai-summit",
    cta: "查看峰会页面",
    tags: ["trend", "global"],
    labels: ["热点/设计周动态", "国外"],
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
