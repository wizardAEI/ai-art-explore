import "./styles.css";

const signals = [
  {
    id: "cafa-ai-employment-training",
    title: "央美把 AI 师资培训直接接到就业与中式审美上，艺术教育开始补“可落地的判断力”",
    summary:
      "中央美术学院 4 月 30 日发布 2026 年“人工智能赋能大学生就业能力提升师资培训”招生简章，课程把文旅艺术行业就业形势、设计教育价值重构、AIGC 核心技能、艺术与商业、中式审美与 AI 融合放进同一套集中训练里。",
    note:
      "这条信号对艺术院校教师、课程负责人和创作型教育团队都很重要，因为它说明 AI 教学正在从单点工具演示转向整段工作流判断。真正有用的课程，不只是告诉学生怎么生成，而是帮他们把审美、行业理解和职业表达一起长出来。",
    source: "中央美术学院",
    date: "2026-04-30",
    href: "https://www.cafa.edu.cn/st/2026/81233547.htm",
    cta: "查看招生简章",
    tags: ["research", "cn"],
    labels: ["研究/教学方法", "国内"],
  },
  {
    id: "tsinghua-ai-native-forum",
    title: "清华美院把 AI-Native、材料工艺与公共艺术放进同一论坛，方法讨论回到“作品如何被生成与被观看”",
    summary:
      "清华大学美术学院 4 月 16 日发布春季青年学者论坛回顾，论坛连续三期围绕艺术设计前沿展开，其中既有 AI-Native 时代生成、理解与交互的讨论，也有材料工艺跨界实践、公共艺术与在地文化生成等主题。",
    note:
      "艺术行业很需要这种讨论方式。它不把 AI 单独拎出来炫技，而是把它放回材料、空间、文化语境和交互设计的复杂现场里。对策展人、设计研究者和跨媒介作者来说，这意味着未来的好作品会越来越依赖复合判断，而不是单一模型能力。",
    source: "清华大学美术学院",
    date: "2026-04-16",
    href: "https://www.ad.tsinghua.edu.cn/info/1061/32494.htm",
    cta: "查看论坛回顾",
    tags: ["research", "cn"],
    labels: ["研究/论坛方法", "国内"],
  },
  {
    id: "adobe-motionstream",
    title: "Adobe 预览 MotionStream：生成视频第一次更像实时排镜，而不是等结果出来再返工",
    summary:
      "Adobe Research 4 月 10 日公布 MotionStream，这项实验技术让创作者在 AI 视频生成过程中用鼠标和滑杆实时改变物体运动与镜头方向，并以更低延迟探索不同画面版本。",
    note:
      "对导演、动态设计师和影像实验作者来说，这比“再快一点生成”更值得注意。实时控制意味着创作重心重新回到调度与取舍，视频生成开始像灯光排练、镜头走位和现场试拍，而不只是等待算法给答案。",
    source: "Adobe Research",
    date: "2026-04-10",
    href: "https://research.adobe.com/news/motionstream-control-in-ai-video-creation/",
    cta: "查看技术预览",
    tags: ["research", "global"],
    labels: ["研究/视频控制", "国外"],
  },
  {
    id: "google-flow-music-believe",
    title: "Google 把 Flow Music 和 Lyria 3 Pro 直接递到音乐人手里，AI 作曲开始强调试唱、试编与迭代空间",
    summary:
      "Google 5 月 6 日宣布与 Believe 合作，把 Google Labs 的 Flow Music 与 Lyria 3 Pro 提供给 Believe 和 TuneCore 生态中的艺术家、制作人与词曲作者，强调让原创音乐创作者在探索和迭代中使用 AI，而不是替代原作。",
    note:
      "音乐行业读者可以重点看这里的措辞变化。平台不再只强调‘能生成’，而是开始讨论艺术家如何用它试结构、找氛围、推敲版本。对配乐作者、声音设计师和品牌音乐团队来说，这意味着 AI 音乐工具正逐步长成真正的工作流部件。",
    source: "Google Labs / Believe",
    date: "2026-05-06",
    href: "https://blog.google/innovation-and-ai/models-and-research/google-labs/believe-flow-music-partnership/",
    cta: "查看合作说明",
    tags: ["research", "global"],
    labels: ["研究/音乐工作流", "国外"],
  },
  {
    id: "tsinghua-embodied-road",
    title: "清华艺博把机器人展做成一条“具身之路”，技术叙事第一次这么像展陈动线",
    summary:
      "清华大学艺术博物馆 4 月 30 日开幕“具身之路：机器如何成为‘人’”，展览以“启思—看透—看懂—共创”为动线，串联古代自动机械到当代人形机器人，讨论机器如何在感知、行动与环境互动中形成在场智能。",
    note:
      "这很值得策展人和展陈设计师留意。机器被带进美术馆，不只是为了展示硬件性能，而是为了重写观众进入问题的方式。技术内容开始通过路线、节奏和提问装置被感知，展览语法本身正在升级。",
    source: "清华大学艺术博物馆",
    date: "2026-04-30",
    href: "https://www.artmuseum.tsinghua.edu.cn/cpsj/zlxx/zzzl/lszl/202604/t20260427_20671.shtml",
    cta: "查看展览",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "hengqin-idaexpo",
    title: "横琴数字艺术博览会进入黄金周高峰，生成艺术、VR 叙事和文博数字化被放进同一产业场",
    summary:
      "横琴粤澳深度合作区 4 月 29 日发布开幕消息，2026 横琴-澳门国际数字艺术博览会持续至 5 月 10 日，四大主题展区把生成艺术、交互装置、虚拟现实叙事、文博数字化和产业论坛集中到同一公共平台上。",
    note:
      "对文博机构、地方展会和品牌体验团队来说，这条信号的价值在于它展示了另一种组织方式：不是把艺术、技术、文旅和教育拆开做，而是直接在一个复合场域里测试协同。观众看到的会是作品，行业看到的则是一整套生态模型。",
    source: "横琴粤澳深度合作区",
    date: "2026-04-29",
    href: "https://www.hengqin.gov.cn/macao_zh_hans/hzqgl/dtyw/dtxx/content/post_3900774.html",
    cta: "查看博览会",
    tags: ["trend", "cn"],
    labels: ["热点/博览会", "国内"],
  },
  {
    id: "dataland-open-date",
    title: "DATALAND 公布开馆与首展细节，AI 艺术不再是快闪话题，而是被写进一座长期运营的博物馆",
    summary:
      "DATALAND 4 月 23 日宣布将于 6 月 20 日在洛杉矶 The Grand LA 向公众开放，首展“Machine Dreams: Rainforest”会在五个多感官画廊中展开，并以 Large Nature Model 为基础，把实时数据、自然记忆与人机互动写进长期机构叙事。",
    note:
      "这对美术馆、收藏体系和新媒体机构特别关键。AI 艺术如果开始拥有常设空间、会员计划、在线知识层和驻留机制，它就不只是项目制事件，而会成为新的机构形态与文化基础设施。",
    source: "DATALAND / Related",
    date: "2026-04-23",
    href: "https://www.related.com/press-releases/2026-04-23/dataland-museum-ai-arts-opens-public-saturday-june-20-2026",
    cta: "查看开馆信息",
    tags: ["trend", "global"],
    labels: ["热点/机构动态", "国外"],
  },
  {
    id: "heygen-april-release",
    title: "HeyGen 四月更新把视频推到 IDE、CLI 和长内容剪辑链路里，创作者工具开始主动接管出片",
    summary:
      "HeyGen 5 月 6 日发布四月产品更新，总结了 15 项新功能与产品，包括 Avatar V、Instant Highlights v2、HeyGen CLI、HeyGen Skills 与一整套围绕 HyperFrames 的时间线、渲染和社区能力，目标是把视频生产嵌入代理、代码和长内容工作流。",
    note:
      "这对独立导演、内容团队和创意技术工作室都是一个很直接的提醒：视频工具正在从‘一个网站’变成‘一个可编排的生产层’。当脚本、时间线、出片和分发被接进同一条链路，创作效率的提升会很快转化成审美密度的竞争。",
    source: "HeyGen",
    date: "2026-05-06",
    href: "https://www.heygen.com/blog/heygen-april-2026-release",
    cta: "查看更新",
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
