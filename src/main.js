import "./styles.css";

const signals = [
  {
    id: "tongji-digital-humanities-centers",
    title: "同济把数智人文与文化艺术教育并列成校级平台，AI 正在被写进设计与美育的方法学",
    summary:
      "同济大学新闻网 2026 年 5 月 20 日发布三大中心成立消息，其中数智人文研究中心将聚焦数字文创与文化遗产、服务创新与数智设计等方向，文化艺术教育中心则明确把 AI 赋能美育与跨学科艺术融合写进建设路径。对艺术教育而言，这不是一门单独工具课，而是一套学校级的组织方式。",
    note:
      "这条线索提醒策展与教学团队注意：接下来更有价值的，不只是掌握某个模型，而是能否把研究、课程、展演和公共文化项目接到同一张工作图上。",
    source: "同济大学新闻网",
    date: "2026-05-20",
    href: "https://news.tongji.edu.cn/info/1002/94549.htm",
    cta: "查看同济平台建设",
    tags: ["research", "cn"],
    labels: ["研究/数智人文方法", "国内"],
  },
  {
    id: "cafa-light-art-course",
    title: "央美把光艺术短训班排成一张复合课表，AI 影像、数字遗产、互动装置和文旅场景同时入场",
    summary:
      "中央美术学院 2026 年 4 月 23 日公布光艺术短期研修班第十三期招生简章，课程把人工智能数字呈现、AI 生成影像与新媒体视觉创作、数字文化遗产活化、光互动装置艺术与智能交互设计实践并置，授课时间为 5 月 21 日至 24 日。它把“看展感”背后的技术、空间、叙事和落地能力重新编排成一套面向行业的训练。",
    note:
      "做展陈、夜游、沉浸影像和公共艺术的人可以从这里读到一个趋势：未来现场感越来越依赖跨媒介协同，单点软件技巧已经不够支撑完整体验。",
    source: "中央美术学院",
    date: "2026-04-23",
    href: "https://www.cafa.edu.cn/st/2026/81233533.htm",
    cta: "查看课程设置",
    tags: ["research", "cn"],
    labels: ["研究/光艺术与新媒体教学", "国内"],
  },
  {
    id: "science-museum-vibe-coding",
    title: "今晚在伦敦科学博物馆，AI 被讲成一场给艺术家、音乐人和设计师的公共编创练习",
    summary:
      "Create With 发布的 2026 年 5 月 22 日活动页显示，ElevenLabs 与 Vibe Coding Collective 在伦敦科学博物馆举行 Creative Vibe Coding 夜场，面向 artists、musicians、designers 与 beginners，邀请参与者尝试 AI-powered musical instruments、storytelling experiments、generative artwork 与 poetic web experiences。创作入口被故意做得更轻，也更像一个开放工作坊。",
    note:
      "这类活动值得国内机构留意。公众教育与创作者社群之间的边界在变薄，museum night 也可以成为新工具语言的试验场。",
    source: "Create With",
    date: "2026-05-22",
    href: "https://www.createwith.com/event/london-creative-vibe-coding-at-the-science-museum-with-elevenlabs-may-2026",
    cta: "查看活动页面",
    tags: ["research", "global"],
    labels: ["研究/公共创作工作坊", "国外"],
  },
  {
    id: "barnard-genai-media-workshop",
    title: "Barnard 让生成式 AI 先进入前期桌面，lookbook、storyboard 与 shot list 被重新连成一段流程",
    summary:
      "Barnard Media Center 的活动页显示，2026 年 5 月 2 日举行的 Generative AI & Media Workshop 由 NYU Tisch 助理艺术教授 David Poyner 带领，围绕 storytelling 与 media production 展开，并把短片前期开发讲得很具体：从 storyboard、lookbook 一直落到 shot list、lighting、set design 与 costumes 的沟通方式。",
    note:
      "对影像创作者来说，这比“会不会生成图”更接近真实工作。很多效率提升，其实发生在审美共识被提前建立的那一刻。",
    source: "Barnard Media Center",
    date: "2026-05-02",
    href: "https://mediacenter.barnard.edu/events/generative-ai-media-workshop",
    cta: "查看工作坊介绍",
    tags: ["research", "global"],
    labels: ["研究/影像前期方法", "国外"],
  },
  {
    id: "possible-worlds-archive-birdnest",
    title: "鸟巢新展把科技艺术家推到台前，沉浸式场域开始直接展示“谁在制造未来图像”",
    summary:
      "中国社会科学网 2026 年 4 月 30 日报道，“可能世界档案：2026 国际科技艺术展”在鸟巢科技艺术中心启幕。报道提到，这场展览以 5000 平方米场域搭建“世界树”脉络，把算法、XR、游戏引擎与生成式 AI 转成可交互、可漫游的超级现场，并首次强调让 TA（科技艺术家）从幕后走到公众视野中央。",
    note:
      "这不是单纯的大屏堆叠，而是一种职业身份的可视化。未来观众会越来越在意作品背后的制作链和作者结构，展览叙事也会因此改写。",
    source: "中国社会科学网",
    date: "2026-04-30",
    href: "https://www.cssn.cn/zkzg/zkzg_zkfx/202604/t20260430_5986742.shtml",
    cta: "查看展览报道",
    tags: ["trend", "cn"],
    labels: ["热点/科技艺术展", "国内"],
  },
  {
    id: "shanghai-trees-know",
    title: "上海自然博物馆把树木、真菌与生态网络做成一场当代艺术对话，科技感开始变得更有呼吸",
    summary:
      "上海自然博物馆临展页面显示，“只有树知道”自 2026 年 5 月 1 日起展出至 8 月 31 日。展览汇聚 12 位国内外艺术家的 22 组作品，以当代艺术为切口，把自然科学、人文思考与多感官体验放在一起，邀请观众重新理解树木连接的生态网络、时间维度与生命智慧。",
    note:
      "对做展览和空间叙事的人来说，这是个很好的提醒。技术气质不一定来自炫目的界面，有时来自你怎样重新组织感官和观看节奏。",
    source: "上海自然博物馆",
    date: "2026-05-01",
    href: "https://www.snhm.org.cn/lzdy/lzIndex.htm",
    cta: "查看展览信息",
    tags: ["trend", "cn"],
    labels: ["热点/自然艺术展", "国内"],
  },
  {
    id: "met-build-with-ai",
    title: "大都会把黑客松做成藏品接口测试，博物馆入口正从导览词扩展到可玩、可搜、可互动的原型",
    summary:
      "The Met 于 2026 年 5 月 1 日发布 Build with AI at The Met 回顾。馆方在 4 月 16 日邀请四十多位 technologists、makers、students 与 creators 围绕亚洲艺术藏品做一天实验，产出从 Instrument Explorer 到 Semantic Explorer 的多个原型。AI 在这里更像一种新的观众入口设计。",
    note:
      "如果你在做美术馆数字项目、公共教育或线上馆藏呈现，这条尤其值得看。原型速度变快以后，真正拉开差距的会是提问方式和观众体验编排。",
    source: "The Metropolitan Museum of Art",
    date: "2026-05-01",
    href: "https://www.metmuseum.org/perspectives/build-with-ai-at-the-met",
    cta: "查看项目回顾",
    tags: ["trend", "global"],
    labels: ["热点/博物馆数字接口", "国外"],
  },
  {
    id: "adobe-firefly-premiere-video-stack",
    title: "Adobe 一次性改写生成、调色与协作，视频团队的工作台开始少一点搬运，多一点判断",
    summary:
      "Adobe Blog 2026 年 4 月 15 日发布视频产品更新，新增 Firefly Video Editor 能力、Premiere 的 Color Mode（beta），并推出让团队像本地磁盘一样访问项目的 Frame.io Drive。生成、剪辑、调色与远程协作被更紧地压进同一条视频生产链。",
    note:
      "影像团队会很快感到这波变化。流程一旦顺下来，创作者终于能把更多精力留给节奏、色彩、镜头情绪和版本选择，而不是在文件传递里耗掉判断力。",
    source: "Adobe Blog",
    date: "2026-04-15",
    href: "https://blog.adobe.com/en/publish/2026/04/15/adobe-extends-leadership-video-unleashing-new-ai-powered-creation-firefly-reinventing-color-editors-in-premiere",
    cta: "查看 Adobe 更新",
    tags: ["trend", "global"],
    labels: ["热点/影像创作工具", "国外"],
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
