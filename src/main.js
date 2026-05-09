import "./styles.css";

const signals = [
  {
    id: "cuc-beijing-declaration",
    title: "中传发布《数智艺术北京宣言》，艺科教育把“创作主导权”重新写回课堂",
    summary:
      "中国传媒大学 5 月 1 日公布《数智艺术北京宣言》，这份宣言由艺术与科技融合背景下的拔尖创新人才自主培养研讨会提出，强调以人为中心、以创作者为主导，在数智时代重建艺术教育中的原创力、伦理感与跨学科协同能力。",
    note:
      "这不是一份空泛宣言，它像是给艺术院校和工作坊写的课程底稿。创作者未来要争的，不只是熟练度，还包括谁来定义问题、谁来决定风格边界、谁能在协作中保住作品的作者性。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c10133a269799/page.htm",
    cta: "查看宣言",
    tags: ["research", "cn"],
    labels: ["研究/教育方法", "国内"],
  },
  {
    id: "china-ai-image-workshop",
    title: "中国高校智能影像工作坊开班，AI 短片训练开始变成跨校协作的实战底盘",
    summary:
      "4 月 27 日，中国高校智能影像（AI）工作坊在北京开班，北京电影学院、中国传媒大学、北京大学与北京邮电大学等团队共同参与，课程把写作、分镜、算法、表演、后期和跨媒体叙事放进同一段影像训练流程里。",
    note:
      "影像创作者可以从这里看到一个清晰方向：AI 电影训练正在离开单兵演示，转向多人协作的片场逻辑。谁能把镜头语法、算法生成和后期判断接成一条线，谁就更接近下一代影像工作流。",
    source: "人民网",
    date: "2026-04-27",
    href: "https://edu.people.com.cn/n1/2026/0427/c367001-40709701.html",
    cta: "查看工作坊信息",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "apple-designer-feedback-ui",
    title: "苹果把设计师批注、涂改和拖拽动作送进 UI 生成训练，人机协作终于更像真实设计评审",
    summary:
      "Apple Machine Learning Research 在 CHI 2026 论文中展示了“从设计师隐式反馈改进界面生成模型”的方法，研究把拖拽、删除、尺寸调整和局部重写等真实设计动作转成训练信号，让模型学会接受多轮修订，而不是只追求第一次生成的完整度。",
    note:
      "对交互设计师和品牌体验团队来说，这条线索很有分量。真正贴近工作现场的生成系统，不会把“修改”当作失败，而会把修改本身视为创作材料。工具一旦理解这一点，设计过程才会变得顺手。",
    source: "Apple Machine Learning Research",
    date: "2026-04-10",
    href: "https://machinelearning.apple.com/updates/apple-at-chi-2026",
    cta: "查看研究概览",
    tags: ["research", "global"],
    labels: ["研究/交互设计", "国外"],
  },
  {
    id: "rit-digital-summer-ai",
    title: "RIT 把 AI 放回艺术与设计夏季工作室，技术训练开始服务于世界观搭建和作品表达",
    summary:
      "罗切斯特理工学院的 Digital Summer Institute 将在 5 月 18 日至 31 日开启两周驻留式课程，面向高中至大学阶段创作者开设 AI 与创意潜能、概念设计、世界构建、跨媒体叙事与作品展示等模块，把生成工具放进完整创作链条里训练。",
    note:
      "课程信息本身就是一种方法论信号。AI 在艺术教育里越来越像材料、镜头或声音，不必被单独神化。对青年作者而言，更重要的是学会把它安放到叙事、协作和展示环节中。",
    source: "Rochester Institute of Technology",
    date: "2026-05-18",
    href: "https://www.rit.edu/artdesign/digital-summer-institute",
    cta: "查看课程安排",
    tags: ["research", "global"],
    labels: ["研究/工作室课程", "国外"],
  },
  {
    id: "birds-nest-possible-worlds",
    title: "鸟巢科技艺术中心启幕，150 组作品把电影工业、沉浸交互与 AI 创作装进同一座公共场",
    summary:
      "5 月 1 日，鸟巢科技艺术中心以“可能世界档案：2026 国际科技艺术展”开启首展，集中呈现 150 组与 AI、电影、数字媒体、交互装置和沉浸体验相关的作品，并把放映、装置、游戏感知与未来叙事整合进大型公共展演空间。",
    note:
      "如果你在做展览、品牌空间或大型公共叙事，这类项目值得盯紧。它说明技术艺术的展示方式正在向综合现场倾斜，观众会同时接收到影像、声场、装置尺度和路径设计，单一媒介的边界正在被迅速冲淡。",
    source: "中国网",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看展览介绍",
    tags: ["trend", "cn"],
    labels: ["热点/科技艺术展", "国内"],
  },
  {
    id: "today-art-fai-installation",
    title: "今日美术馆的 FAI 装置论坛把“科技与机械”抬进四层展线，装置语言重新接受方法论体检",
    summary:
      "4 月 28 日，第四届中国国际装置艺术学术论坛暨展览在今日美术馆开幕，本届主题是“科技与机械”。论坛、学术对谈与四层展线并行展开，把机械装置、数字交互、材料实验与空间感知放回同一个讨论框架。",
    note:
      "装置艺术圈正在重新审视一个老问题：技术到底只是零件，还是语法的一部分？这场展览给出的回答更偏后者。对策展人和空间作者来说，机械感、互动感和观看节奏如今已经被并置为同等重要的叙事单位。",
    source: "艺术中国",
    date: "2026-04-28",
    href: "https://art.china.cn/txt/2026-04/28/content_43414611.htm",
    cta: "查看论坛展览",
    tags: ["trend", "cn"],
    labels: ["热点/装置论坛", "国内"],
  },
  {
    id: "runway-api-hackathon",
    title: "Runway 发起 API Hackathon，AI 视频工具开始鼓励创作者直接搭自己的制作系统",
    summary:
      "Runway 5 月 8 日上线 API Hackathon，邀请开发者、设计师与创意技术团队围绕图像、视频与媒体生成能力搭建新型应用，开放报名持续到 5 月 11 日，重点不再是单次生成，而是如何把生成能力嵌入完整产品与创作流程。",
    note:
      "这一条对创意工作室尤其直接。视频生成平台开始默认你会自己编排素材流、审核环节和输出接口，工具从一个网站变成了一层基础设施。会写工作流的人，接下来会比只会点按钮的人更占先手。",
    source: "Runway",
    date: "2026-05-08",
    href: "https://runwayml.com/api-hackathon",
    cta: "查看活动说明",
    tags: ["trend", "global"],
    labels: ["热点/创作者工具", "国外"],
  },
  {
    id: "barbican-liam-young",
    title: "Barbican 今夏将用 Liam Young 的《In Other Worlds》占领三处空间，把 AI 叙事从屏幕推向展览体验",
    summary:
      "Barbican 公布 Liam Young 的大型项目《In Other Worlds》，展览与放映将在 5 月 21 日至 8 月 31 日横跨 Silk Street、The Curve 与影院空间展开，通过电影、装置与环境叙事讨论气候、计算系统、虚拟城市与未来影像的观看方式。",
    note:
      "Liam Young 这类项目越来越像一个提醒：未来影像不只存在于片长之内，它也存在于场地、通路、停留时间和观众步速里。做影像的人如果开始把空间当成剪辑的一部分，作品的叙事尺度会立刻被放大。",
    source: "Barbican",
    date: "2026-05-21",
    href: "https://www.barbican.org.uk/our-story/press-room/barbican-announces-further-details-on-its-2026-immersive-exhibition-with-liam",
    cta: "查看展览计划",
    tags: ["trend", "global"],
    labels: ["热点/影像展演", "国外"],
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
