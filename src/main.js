import "./styles.css";

const signals = [
  {
    id: "cafa-ai-employment-training",
    title: "央美把 AIGC 写进文旅艺术就业训练，教学现场开始直接讨论中式审美、商业协作与求职工具",
    summary:
      "中央美术学院于 2026 年 4 月 30 日发布“人工智能赋能大学生就业能力提升师资培训”招生简章，课程把文旅艺术行业的就业形势、设计教育重构、艺术创造力培养、艺术与商业协作以及“中式审美与 AI 融合”放进同一个培训框架。它释放出的信号并不只是学校在补一门新工具课，而是教学端已经把 AI 视为未来艺术职业结构的一部分，连就业辅导也开始转向流程、判断和审美策略的联合训练。",
    note:
      "当就业训练也开始讲审美、商业和模型协同时，艺术教育的目标就变了。新的竞争力不只是会不会生成，而是能不能把生成纳入真实职业语境。",
    source: "中央美术学院",
    date: "2026-04-30",
    href: "https://www.cafa.edu.cn/st/2026/81233547.htm",
    cta: "查看央美培训简章",
    tags: ["research", "cn"],
    labels: ["研究/教学与职业方法", "国内"],
  },
  {
    id: "cafa-light-art-workshop",
    title: "央美把光艺术短修班拆成四个真实场景，灯光、遗产、AI 呈现和文旅空间开始被当成一套连续创作",
    summary:
      "中央美术学院建筑学院于 2026 年 4 月 23 日发布光艺术短期研修班第十三期招生简章，把课程明确分成“光艺术跨界创新、人工智能数字呈现、古建筑照明与文化遗产活化、场景化文旅及其文化衍生”四条主线。对于做展览、空间叙事、夜游项目和沉浸式影像的人来说，这种设置很值得注意：AI 不再被孤立成一个单独模块，而是被嵌回材料、场地、历史和运营逻辑里。",
    note:
      "课程的切分方式本身就是一种方法论。空间类创作者正在被提醒：生成工具要放进现场秩序里用，作品气质才会稳定下来。",
    source: "中央美术学院建筑学院",
    date: "2026-04-23",
    href: "https://www.cafa.edu.cn/st/2026/81233533.htm",
    cta: "查看光艺术研修班",
    tags: ["research", "cn"],
    labels: ["研究/空间与呈现方法", "国内"],
  },
  {
    id: "photofairs-shanghai-platform",
    title: "PHOTOFAIRS Shanghai 继续把影像博览会做成跨学科接口，照片、数字图像与视觉文化不再分开陈列",
    summary:
      "PHOTOFAIRS Shanghai 官方站点显示，第 11 届博览会于 2026 年 5 月 7 日至 10 日回到上海展览中心，并继续将自己定义为中国当代摄影的重要平台，同时强调 photo-based work 与 digital work 的共同发现。对策展人、影像艺术家和视觉编辑而言，这个表述很关键，它说明今天的影像现场已经不再按摄影、数字艺术、媒介实验各自分仓，而是开始围绕‘视觉文化如何被组织’重新聚合。",
    note:
      "影像不只是媒介类型，它正在变成组织观众感知的一层基础设施。谁能同时处理图像、文本、空间和传播，谁就更接近这一轮变化的核心。",
    source: "PHOTOFAIRS Shanghai",
    date: "2026-05-07",
    href: "https://photofairs-shanghai.com/?lang=en",
    cta: "查看 PHOTOFAIRS 主页",
    tags: ["trend", "cn"],
    labels: ["热点/影像现场", "国内"],
  },
  {
    id: "gmfyg-grad-show",
    title: "中国艺术研究院把毕业作品展放进工艺美术馆，研究生创作开始用国家级展陈语言面向真实观众",
    summary:
      "中国工艺美术馆官网于 2026 年 5 月 21 日上线“心源·化境 中国艺术研究院 2026 届美术、设计研究生毕业作品展”展讯，展览占用四层 5、6 展厅并持续到 6 月 3 日。把研究生毕业创作摆进国家级馆舍，改变的不只是曝光度，更是作品面对公众时的节奏、尺度和陈列逻辑。对于年轻艺术家和策展从业者来说，这是一种很直接的提醒：毕业作品越来越像第一次真正进入社会观看系统的试演。",
    note:
      "一旦进入成熟展馆，作品就需要自己处理观看距离、叙事入口和材料气场。学生创作正被更早地推向公共审美考验。",
    source: "中国工艺美术馆",
    date: "2026-05-21",
    href: "https://www.gmfyg.org.cn/",
    cta: "查看馆内展讯",
    tags: ["trend", "cn"],
    labels: ["热点/展览发布", "国内"],
  },
  {
    id: "ual-climate-ai-panel",
    title: "UAL 把气候艺术与 AI 拉进同一场公开讨论，创作者开始连同叙事伦理和工作条件一起审视工具",
    summary:
      "伦敦艺术大学于 2026 年 4 月 23 日举办 Climate Art & the Crises of AI 公开讨论，页面直接追问：当 AI 快速进入文化生活之后，气候导向的创作究竟该借用这些工具，还是主动拒绝它们？艺术家、设计师与研究者被放在同一个讨论场里，不只谈美学结果，也谈工作条件、资源消耗与制度代价。对视觉创作者而言，这种议题设置很重要，因为它把‘该不该用’重新变成一项创作判断，而不只是技术选型。",
    note:
      "工具升级很快，批评语言也得跟上。能把环境成本、叙事责任和视觉魅力一起考虑，才是更成熟的创作姿态。",
    source: "University of the Arts London",
    date: "2026-04-23",
    href: "https://www.arts.ac.uk/whats-on/climate-art-and-the-crises-of-ai-afterparty",
    cta: "查看 UAL 活动页",
    tags: ["research", "global"],
    labels: ["研究/批评与方法讨论", "国外"],
  },
  {
    id: "eyebeam-residency",
    title: "Eyebeam 把 2026 驻留命名为“Speculating on Plurality”，艺术驻地正在把技术想象从统一答案拉回多重世界",
    summary:
      "Eyebeam 于 2026 年 4 月 22 日发布 2026 年驻留艺术家名单，并把本届驻地命名为 Speculating on Plurality。官方介绍说，这一项目围绕一个核心问题展开：怎样建立能承载差异、而不是把差异压扁的技术。六位驻留者的实践横跨实验剧场、空间音频到 AI agents。对策展、教育和跨媒介创作群体来说，这类驻留的价值正在于它把技术研发重新放回社会想象和身份政治之中。",
    note:
      "驻地项目的题目往往能透露下一步的讨论重心。现在越来越多机构关心的，不是模型还能做什么，而是它会把谁排除在外。",
    source: "Eyebeam",
    date: "2026-04-22",
    href: "https://eyebeam.org/2026-residents/",
    cta: "查看驻留名单",
    tags: ["research", "global"],
    labels: ["研究/艺术驻地与议题", "国外"],
  },
  {
    id: "arebyte-soft-bodies",
    title: "伦敦 arebyte 用粉色卧室和交互影像做出一场算法凝视展，AI 审美终于回到身体、欲望与观看压力",
    summary:
      "伦敦 arebyte Digital Art Centre 当前展出的 Soft Bodies, Cold Machines 由 Ambie Drew 创作，展览从 2026 年 4 月 17 日持续到 8 月 2 日，明确围绕 AI、互联网文化、审美标准与女性身份展开，并通过互动装置与影像来组织观看。它很适合作为一个当下信号来读，因为这里的 AI 不再只是‘能不能生成得更真’，而是被拿来讨论身体如何被平台图像塑形、欲望如何被界面诱导。",
    note:
      "很多真正有劲的 AI 展览，最后都不会停在技术炫耀上。它们会把观众带回到自己与图像的关系里。",
    source: "arebyte Digital Art Centre",
    date: "2026-04-17",
    href: "https://www.arebyte.com/ambie-drew",
    cta: "查看展览页面",
    tags: ["trend", "global"],
    labels: ["热点/数字艺术展览", "国外"],
  },
  {
    id: "adobe-firefly-agent",
    title: "Adobe 把创意代理推进 Firefly，跨软件工作流第一次像一位懂审片节奏的助理在旁边协同",
    summary:
      "Adobe 于 2026 年 4 月 15 日发布 Firefly AI Assistant，将 Photoshop、Premiere、Illustrator、Lightroom 等应用里的多步任务拉进同一个对话界面，同时继续扩展视频编辑、音频处理和精细图像控制。真正值得艺术行业关注的，不是又多了一个聊天框，而是创意工作流被进一步改写成‘口述目标 - 系统编排 - 人来判断’的形式。对视觉设计师、影像团队和内容工作室来说，这会改变从草图到交付的时间结构。",
    note:
      "以后更像在指挥，而不是在点按钮。审美主导权不会自动消失，但它会更依赖你能否把意图说清楚、收回来、再压实。",
    source: "Adobe",
    date: "2026-04-15",
    href: "https://news.adobe.com/news/2026/04/adobe-new-creative-agent",
    cta: "查看 Adobe 更新",
    tags: ["trend", "global"],
    labels: ["热点/创作者工具更新", "国外"],
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
