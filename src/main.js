import "./styles.css";

const signals = [
  {
    id: "tsinghua-mfa-staging-systems",
    title: "清华美院硕士毕业展把眼镜、剧场、博物馆与系统设计并列摆出，研究型作品开始主动争取公共观看",
    summary:
      "清华大学美术学院 2026 年 5 月 23 日发布 2026 届硕士研究生毕业作品展信息，展览在学院美术馆持续至 6 月 7 日，涵盖信息艺术设计、工业设计、艺术史论等多个方向。官方特别点出“为视障人士设计的 AI 眼镜”“智慧文旅导览平台”“数字绘画交互装置”等作品，说明研究生阶段的技术实验正在更明确地面对真实观众、真实空间和真实使用场景。",
    note:
      "这类毕业展不只是学校内部结题。它越来越像一处小型发行现场：原型要被看懂，也要被体验，还要能和展厅里的其他作品一起成立。",
    source: "清华大学美术学院",
    date: "2026-05-23",
    href: "https://www.ad.tsinghua.edu.cn/info/1061/32574.htm",
    cta: "查看硕士毕业展",
    tags: ["research", "cn"],
    labels: ["研究/毕业研究展陈", "国内"],
  },
  {
    id: "sta-graduate-defenses-hybrid-media",
    title: "上戏艺科院把 VR 宣纸、交互叙事和数字遗产放进答辩清单，舞台语境正在长出更复合的媒介方法",
    summary:
      "上海戏剧学院研究生部 2026 年 5 月 18 日公布 2026 届研究生学位作品答辩安排，艺术科技与管理学院的题目覆盖“VR 光影赋能宣纸艺术”“数字技术与叙事融合下的戏剧戏曲文物活化展示”“交互叙事展演”等方向。研究议题不再把技术当作外接插件，而是直接嵌进材料、表演、观看和文化遗产的叙述结构里。",
    note:
      "做影像装置、展演空间和戏剧视觉的人可以从这里读到一个变化：媒介组合正在前移，很多方案从一开始就同时思考触感、叙事和接口。",
    source: "上海戏剧学院研究生部",
    date: "2026-05-18",
    href: "https://yjs.sta.edu.cn/ec/36/c782a126006/page.htm",
    cta: "查看答辩题目",
    tags: ["research", "cn"],
    labels: ["研究/展演媒介方法", "国内"],
  },
  {
    id: "siva-digital-media-show-codes-city",
    title: "上视艺数字媒体艺术毕业展把城市、游戏与机器图像摊开来看，年轻作者正在把屏幕语言重新做厚",
    summary:
      "上海视觉艺术学院 2026 年 5 月 21 日发布数字媒体艺术专业 2026 届毕业作品展《码迹维度》的开幕信息，展览把“数字技术逻辑”与“人文艺术感知”并置，围绕城市褶皱、身份切片、游戏机制和感官错位展开。毕业展的关键词不再只是完成项目，而是让代码、影像和装置一起生成新的观看节奏。",
    note:
      "如果你最近在做多屏影像、实时视觉或互动叙事，这批学生作品值得留意。它们在提醒我们，数字感不一定来自炫目特效，也可以来自结构的编排密度。",
    source: "上海视觉艺术学院",
    date: "2026-05-21",
    href: "https://www.siva.edu.cn/2026/0521/c55a32060/page.htm",
    cta: "查看毕业展现场",
    tags: ["trend", "cn"],
    labels: ["热点/数字媒体毕业展", "国内"],
  },
  {
    id: "lumei-undergrad-show-public-theater",
    title: "鲁美本科毕业季一次铺开 1458 件作品，校园展览越来越像一座面向公众的临时文化现场",
    summary:
      "鲁迅美术学院 2026 年 5 月 21 日发布 2026 届本科生毕业作品展消息，沈阳、大连两校区共展出 1458 件作品，并将展览开放到 6 月 8 日。大体量、多场域、跨专业的毕业季正在承担越来越多城市文化传播功能，观众看到的不是单点成品，而是一整批正在试探社会接口的青年创作。",
    note:
      "对于策展人与空间设计团队来说，这种高密度毕业展很像一份风向样本。哪些视觉语法被反复使用，哪些媒介关系开始冒头，现场很快就能看出来。",
    source: "鲁迅美术学院",
    date: "2026-05-21",
    href: "https://www.lumei.edu.cn/info/1191/63625.htm",
    cta: "查看毕业季信息",
    tags: ["trend", "cn"],
    labels: ["热点/大型毕业季", "国内"],
  },
  {
    id: "wdc-synthetic-studio-human-ai-aesthetics",
    title: "世界设计之都大会把“合成工作室”搬进议程，设计研究开始直接讨论人与 AI 共写审美的手感",
    summary:
      "World Design Congress 2026 官方活动页显示，5 月 20 日的 Synthetic Studio: Human-AI Co-Creation in the Generation of Aesthetic Experience 以工作坊形式讨论人与 AI 如何共同生成审美经验。它关心的不是单次出图效率，而是生成系统怎样介入感知、判断、协作和作者性的形成过程。",
    note:
      "这类讨论对设计总监、策展人和品牌团队都很实用。真正麻烦的问题往往不在工具会不会用，而在团队打算把哪些感觉交给机器，哪些仍由人来定调。",
    source: "World Design Congress 2026",
    date: "2026-05-20",
    href: "https://wdc2026.org/en/events/synthetic-studio-oder-dialogwerkstatt",
    cta: "查看活动页",
    tags: ["research", "global"],
    labels: ["研究/人机共创方法", "国外"],
  },
  {
    id: "siggraph-convergence-call",
    title: "SIGGRAPH 2026 提前把艺术、科学与技术的交叉写进总主题，下一轮实验影像与计算艺术会更强调跨界共研",
    summary:
      "SIGGRAPH 2026 官方发布会在 2026 年 5 月 21 日宣布年度大会将围绕 art, science, and technology 的 convergence 展开，并继续设置 Art Papers、Art Gallery、Immersive Pavilion、Labs 等板块。对做生成影像、空间计算、交互艺术和视觉研究的人来说，这意味着国际平台仍在积极为跨学科实验腾出正式位置。",
    note:
      "当大型大会持续保留艺术板块，创作者就不必总把自己塞进工程或纯学术语境里。实验作品可以带着自己的审美问题进入更大的技术对话。",
    source: "SIGGRAPH 2026",
    date: "2026-05-21",
    href: "https://s2026.siggraph.org/siggraph-2026-explores-the-convergence-of-art-science-and-technology/",
    cta: "查看 SIGGRAPH 发布",
    tags: ["research", "global"],
    labels: ["研究/计算艺术平台", "国外"],
  },
  {
    id: "runway-aleph-edit-studio",
    title: "Runway 把 Aleph 2 和 Edit Studio 一起推出，视频创作者离“边剪边改世界”又近了一步",
    summary:
      "Runway 于 2026 年 5 月 21 日发布 Introducing Aleph 2 and Edit Studio，前者强调在镜头内部进行对象级调整，后者把生成、替换、重组和剪辑动作收拢到同一个视频工作界面。对于导演、广告团队和独立影像作者来说，生成式视频工具的重点正在从单条效果演示转向一整段后期流程。",
    note:
      "这会改变分工。素材拍摄、后期修整和风格试验之间的边界开始变松，很多决定将直接发生在剪辑台，而不是等到返工阶段。",
    source: "Runway",
    date: "2026-05-21",
    href: "https://runwayml.com/news/introducing-aleph-2-and-edit-studio",
    cta: "查看 Runway 更新",
    tags: ["trend", "global"],
    labels: ["热点/影像创作工具", "国外"],
  },
  {
    id: "science-museum-vibe-coding",
    title: "伦敦科学博物馆把“创意 vibe coding”做成线下活动，创作者社区开始公开练习和语音 AI 搭班子",
    summary:
      "CreateWith 平台发布的 Science Museum × ElevenLabs 活动页显示，2026 年 5 月 22 日的 Creative Vibe Coding in the Sciences 面向创作者、开发者与实验者，围绕 AI voice、创意编码与现场协作展开。它像一个小型公共实验室：不是展示某个成品，而是把人与工具一起工作这件事直接演给大家看。",
    note:
      "如果你关注工作坊、创作者社群或品牌共创活动，这种形式很有启发。把过程公开出来，本身就能成为内容、教育和招募的一部分。",
    source: "CreateWith × Science Museum × ElevenLabs",
    date: "2026-05-22",
    href: "https://www.createwith.com/event/london-creative-vibe-coding-at-the-science-museum-with-elevenlabs-may-2026",
    cta: "查看活动详情",
    tags: ["trend", "global"],
    labels: ["热点/创作者现场实验", "国外"],
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
