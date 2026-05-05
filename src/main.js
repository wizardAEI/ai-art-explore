import "./styles.css";

const signals = [
  {
    id: "cuc-declaration",
    title: "中传把“创作主导权”写进《数智艺术北京宣言》",
    summary:
      "中国传媒大学 5 月 1 日发布研讨会回顾，并联合多所高校发布《数智艺术北京宣言》，把人文底色、批判判断和创作者主导权放到艺科教育与创作实践中心。",
    note: "对院校、工作室和独立艺术家来说，这条信号的重要性在于：今后关于 AI 的合作规范、课程设置、署名方式和作品责任边界，会越来越明确地围绕“人主导、机协作”展开。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c10133a269799/page.htm",
    cta: "查看原文",
    tags: ["research", "cn"],
    labels: ["科研/研讨", "国内"],
  },
  {
    id: "sta-future-theatre",
    title: "上戏把“未来戏剧学”落到现场经验与观演关系上",
    summary:
      "上海戏剧学院 4 月 29 日发布国际研讨会回顾，集中讨论人工智能、虚拟现实与交互技术如何改写戏剧本体、表演范式、空间边界与观众关系。",
    note: "如果你在做舞台、沉浸式叙事或展演策划，这条内容提醒我们：技术上场的重点已经从“能不能做炫技效果”转向“如何保护现场感、身体感与观众参与”。",
    source: "上海戏剧学院",
    date: "2026-04-29",
    href: "https://www.sta.edu.cn/eb/81/c1546a125825/page.htm",
    cta: "查看来源",
    tags: ["research", "cn"],
    labels: ["科研/研讨", "国内"],
  },
  {
    id: "cambridge-sound",
    title: "音乐论文提醒：很多“AI 声音气质”先来自人的文化想象",
    summary:
      "Cambridge Core 4 月 14 日上线的《Organised Sound》论文指出，创作者关于“幽灵感”“异质感”的叙事预设，会反过来塑造 AI 声音系统的设计与最终作品感受。",
    note: "它对声音艺术、配乐和实验音乐很有参考价值，因为它把问题拉回到创作者经验本身，而不是只盯着模型参数或合成精度。",
    source: "Organised Sound / Cambridge Core",
    date: "2026-04-14",
    href: "https://www.cambridge.org/core/journals/organised-sound/article/when-ai-dont-sound-like-ai-negotiating-aesthetic-expectations-in-technologymediated-musical-practice/58E74C59A151F4BA0F289CEA22B9D1FE",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/论文", "国外"],
  },
  {
    id: "sage-painting-labels",
    title: "新研究发现：观众判断 AI 绘画时，标签有时比作品本身更有影响",
    summary:
      "《Empirical Studies of the Arts》4 月 13 日上线论文，用眼动和自评实验发现：普通观众往往偏好被标注为“人类创作”的绘画，即便他们并不能稳定分辨真实来源。",
    note: "这直接关联策展文案、作品署名和展览沟通方式，也提醒艺术家别低估“标签”“说明文字”和展示语境对作品接受度的影响。",
    source: "Empirical Studies of the Arts / SAGE",
    date: "2026-04-13",
    href: "https://journals.sagepub.com/doi/abs/10.1177/02762374261441560",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/论文", "国外"],
  },
  {
    id: "birdnest-expo",
    title: "鸟巢科技艺术中心启幕，科技艺术展开始走向长期公共空间",
    summary:
      "中国网 5 月 1 日报道显示，“可能世界档案：2026 国际科技艺术展”作为鸟巢科技艺术中心启幕展，集合 70 余位艺术家与团队、近 150 组作品，并计划持续开放一年。",
    note: "这意味着国内艺科融合正在从节庆式事件转向长期运营的公共文化基础设施，策展、教育活动与公众触达都更值得持续投入。",
    source: "中国网",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "lilwukong-video",
    title: "AI 音乐短片《500 Winters》继续发酵，幕后工作流也被公开了",
    summary:
      "B 站热门视频《Lilwukong 500 Winters 正式发布，工作流已开源》仍在被持续讨论：先锋 AI 音乐与 MV 成片之外，创作者把完整制作链路也同步公开给了社区。",
    note: "它代表的不是单条爆款，而是“成片 + 教程 + 社区复制”的新传播路径，特别适合做短片、音乐视觉和个人项目的人关注。",
    source: "哔哩哔哩 / TapNow",
    date: "2026-03-04",
    href: "https://www.bilibili.com/video/BV1ETPwzcEHg/",
    cta: "观看视频",
    tags: ["trend", "cn"],
    labels: ["热点/视频", "国内"],
  },
  {
    id: "adobe-firefly",
    title: "Adobe 把 Firefly AI Assistant 推入公测，创作流程更像在导演一支团队",
    summary:
      "Adobe 4 月 27 日宣布 Firefly AI Assistant 公测，创作者只需描述目标结果，系统就会在 Firefly、Photoshop、Premiere、Lightroom 等应用之间编排多步骤工作流。",
    note: "对设计、摄影和视频团队来说，这不是单一生成工具升级，而是整个创作桌面开始转向“先说意图，再调结果”的协作模式。",
    source: "Adobe Blog",
    date: "2026-04-27",
    href: "https://blog.adobe.com/en/publish/2026/04/27/firefly-ai-assistant-public-beta",
    cta: "查看博客",
    tags: ["trend", "global"],
    labels: ["热点/博客", "国外"],
  },
  {
    id: "dataland-opening",
    title: "DATALAND 公布开馆节奏，AI 艺术博物馆进入机构化阶段",
    summary:
      "DATALAND 官方站点确认这座“世界首家 AI 艺术博物馆”将于 6 月 20 日在洛杉矶开馆，首展《Machine Dreams: Rainforest》主打多感官、实时演化的生成式空间。",
    note: "这条消息值得艺术从业者留意，因为它说明 AI 艺术正在从作品个案进入长期机构、展陈系统与会员制运营阶段。",
    source: "DATALAND",
    date: "2026-05-04",
    href: "https://dataland.art/",
    cta: "查看项目",
    tags: ["trend", "global"],
    labels: ["热点/展览", "国外"],
  },
];

const filterButtons = [...document.querySelectorAll(".filterbar__button")];
const signalList = document.querySelector("#signalList");
const signalDetail = document.querySelector("#signalDetail");
const revealTargets = [...document.querySelectorAll(".reveal")];

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
        <button class="signal-item${signal.id === activeSignalId ? " is-active" : ""}" type="button" data-signal-id="${signal.id}">
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

    filterButtons.forEach((item) =>
      item.classList.toggle("is-active", item === button),
    );
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
