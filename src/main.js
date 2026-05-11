import "./styles.css";

const signals = [
  {
    id: "sta-aigc-creator-camp",
    title: "上海戏剧学院把 AIGC 训练营做成一条完整短片课，青少年创作直接接上导演思维",
    summary:
      "上海戏剧学院 2026 年 4 月 9 日发布《青少年 AIGC 创作者训练营》招生简章，把镜头语言、图生视频、剧情分镜、多模态整合与短片输出串成一条完整学习路径，目标很明确：让学员独立完成一部 AI 影像作品。",
    note:
      "这类课程最有价值的地方，在于它把提示词技巧拆回叙事、调度和剪辑。做影像的人会越来越清楚，真正拉开差距的，不是会不会生成，而是能不能把生成内容组织成一支成立的片子。",
    source: "上海戏剧学院",
    date: "2026-04-09",
    href: "https://www.sta.edu.cn/ea/a7/c4953a125607/page.htm",
    cta: "查看训练营",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "tjrac-aigc-animation-path",
    title: "天津仁爱学院把“哪吒文化 + 元宇宙泛动画”搬进研讨会，艺术教育开始认真讨论新能力边界",
    summary:
      "天津仁爱学院数智传媒与设计艺术学院 2026 年 4 月 27 日披露一场关于“AIGC 与哪吒文化：元宇宙泛动画创作路径”的专题研讨。讨论覆盖科学绘图、科普游戏、虚拟场景、AI 辅助编程与艺术教育融合，也把“可被 AI 增强的核心能力边界”直接摆到台面上。",
    note:
      "这个信号很适合艺术院校、工作坊和创意团队留意。大家正在从“学一个工具”转向“定义一套新的专业结构”。动画、数字媒体、交互、虚拟空间，会被更频繁地放进同一张课程地图。",
    source: "天津仁爱学院数智传媒与设计艺术学院",
    date: "2026-04-27",
    href: "https://www.tjrac.edu.cn/szcm/info/1043/10473.htm",
    cta: "查看研讨会",
    tags: ["research", "cn"],
    labels: ["研究/专业建设", "国内"],
  },
  {
    id: "shanghai-tree-exhibition",
    title: "上海自然博物馆把森林搬进展厅，“只有树知道”重新训练观众的感官节奏",
    summary:
      "上海科技馆 2026 年 5 月 6 日发布动态，宣布上海自然博物馆新展“只有树知道”于五一期间开幕。展览以自然与艺术为交汇点，把“森林”转换成一条可步入、可停留、可被情绪触发的观看路径。",
    note:
      "自然艺术展这两年越来越重要，因为它同时回应了两种焦虑：屏幕过载，以及城市感官的钝化。对策展人与空间设计师来说，怎么把生态感做成一种现场经验，会比单纯做“绿色视觉”更值得研究。",
    source: "上海科技馆",
    date: "2026-05-06",
    href: "https://group.sstm.org.cn/",
    cta: "查看馆方动态",
    tags: ["trend", "cn"],
    labels: ["热点/自然艺术展", "国内"],
  },
  {
    id: "possible-world-archive-beijing",
    title: "鸟巢科技艺术中心用“世界树 + 千屏矩阵”开馆，科技艺术开始拥有更大尺度的公共舞台",
    summary:
      "中国网 2026 年 5 月 1 日报道，“可能世界档案：2026 国际科技艺术展”在北京启幕，鸟巢科技艺术中心同步投入使用。首展集合数字艺术、电影工业视效、沉浸交互、虚拟时尚、AI 创作与思辨设计，并以“世界树”和“千屏矩阵”组织叙事。",
    note:
      "大体量公共空间一旦认真做科技艺术，影响的不只是艺术圈。它会改变大众如何理解影像、交互和虚拟服装，也会把原本偏行业内的创作语言推向更广阔的城市人群。",
    source: "中国网",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看展览报道",
    tags: ["trend", "cn"],
    labels: ["热点/科技艺术展", "国内"],
  },
  {
    id: "meta-transtext",
    title: "Meta 把透明文字动画拉回生成视频链路，动态字体设计第一次更像原生视频媒介",
    summary:
      "Meta AI 于 2026 年 4 月 14 日发布 TransText，尝试把带透明通道的文字动画直接放进 image-to-video 生成框架。它的目标不是做普通字幕，而是让字形运动、透明关系和视觉风格一起成为生成的一部分。",
    note:
      "这对片头设计、海报动效、展签系统和 MV 视觉都很关键。字体终于不只是后期叠上去的说明层，它开始有机会像影像主体那样被构思、被生成、被表演。",
    source: "Meta AI",
    date: "2026-04-14",
    href: "https://ai.meta.com/research/publications/transtext-transparency-aware-image-to-video-typography-animation/",
    cta: "查看 TransText",
    tags: ["research", "global"],
    labels: ["研究/动态字体", "国外"],
  },
  {
    id: "runway-characters",
    title: "Runway Characters 把一张图推进到可对话影像角色，虚拟主持人与展陈讲述开始更易制作",
    summary:
      "Runway 于 2026 年 5 月 4 日发布 Characters 技术解读，展示如何把单张参考图转成 24fps、可实时对话的影像角色。系统覆盖自然口型、头部运动与表情响应，且不需要为每个角色重新微调模型。",
    note:
      "很多创作者会先在直播、解说和品牌角色上看到它的用处，但更值得想的是展览导览、虚拟演员、教育角色与叙事装置。角色制作的门槛一旦下降，讲述方式会迅速变多。",
    source: "Runway Research and Engineering",
    date: "2026-05-04",
    href: "https://runwayml.com/news/building-runway-characters",
    cta: "查看 Characters",
    tags: ["research", "global"],
    labels: ["研究/角色影像生成", "国外"],
  },
  {
    id: "beeple-regular-animals",
    title: "Beeple 在柏林放出会游走的机器人“动物”，数字艺术展进一步贴近戏剧、机械和社会讽喻",
    summary:
      "柏林 Neue Nationalgalerie 于 2026 年 4 月 29 日发布 Beeple 个展《Regular Animals》信息。展览让带有名人头部的自主机器狗在空间中行动，把 AI、机器人和数字文化的讨论压缩成一个可直接面对观众的物理情境。",
    note:
      "这类作品提醒大家，数字艺术的下一步并不一定是更高分辨率，而是更强的在场关系。观众看到的不只是屏幕内容，还会看到动作、噪音、绕行和情绪，这会让展览重新长出戏剧性。",
    source: "Neue Nationalgalerie",
    date: "2026-04-29",
    href: "https://www.smb.museum/en/museums-institutions/nationalgalerie/exhibitions/detail/beeple-regular-animals/",
    cta: "查看展览页面",
    tags: ["trend", "global"],
    labels: ["热点/数字艺术展", "国外"],
  },
  {
    id: "elevenmusic-launch",
    title: "ElevenMusic 把听歌、混音、发布和分成揉进一个入口，音乐平台正在从工具变成社群现场",
    summary:
      "ElevenLabs 于 2026 年 4 月 29 日发布 ElevenMusic，把发现音乐、改编、原创创作与收益机制放进同一平台。官方强调这套系统从一开始就和艺术家共建，听众也可以从消费端进入 remix 与再创作环节。",
    note:
      "音乐创作的入口正在变轻，也正在变得更像社区运营。对独立音乐人、声音艺术家和影像作者来说，这意味着作品发布之后的生命周期也能被重新设计，粉丝不再只是听众，还可能成为改编链的一部分。",
    source: "ElevenLabs",
    date: "2026-04-29",
    href: "https://elevenlabs.io/blog/introducing-elevenmusic",
    cta: "查看 ElevenMusic",
    tags: ["trend", "global"],
    labels: ["热点/音乐创作者工具", "国外"],
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
