import "./styles.css";

const signals = [
  {
    id: "cuc-beijing-declaration",
    title: "《数智艺术北京宣言》发布，院校端开始系统定义艺科融合的人才路线",
    summary:
      "中国传媒大学 5 月 1 日发布消息称，“从数字到数智——艺术与科技人才培养研讨会”围绕艺科融合人才培养展开，并发布《数智艺术北京宣言》。",
    note:
      "这条信号对艺术院校、工作坊和机构培训都很关键，因为它说明“AI + 艺术”正在从零散课程升级为更完整的人才培养框架，讨论的不只是工具，而是整个创作链和教育方法。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c1901a269799/page.htm",
    cta: "查看原文",
    tags: ["research", "cn"],
    labels: ["科研/教育", "国内"],
  },
  {
    id: "cuc-audiovisual-dialogue",
    title: "“世界艺术与科技对话”把视听审美、人机协同和国际合作放到同一现场",
    summary:
      "中国传媒大学 5 月 1 日发布的“智能时代的视听变革”对话，邀请影像教育者、电影制片人、国际文化机构与平台侧 AI 顾问共同讨论视听创作与人机协同。",
    note:
      "它对导演、影像团队和策展人有现实参考价值，因为这已经不是单点工具体验，而是在讨论 AI 进入视听创作后，审美、人文价值、生产关系和国际交流要如何一起被重写。",
    source: "中国传媒大学",
    date: "2026-05-01",
    href: "https://www.cuc.edu.cn/news/2026/0501/c1901a269800/page.htm",
    cta: "查看报道",
    tags: ["research", "cn"],
    labels: ["科研/视听", "国内"],
  },
  {
    id: "design-ai-practitioners",
    title: "新研究不再只聊 Prompt，而是重新设计“设计师怎么和 AI 一起工作”",
    summary:
      "3 月 3 日提交 arXiv 的《Design Generative AI for Practitioners》指出，传统提示词或整图编辑方式常让视觉型设计师被迫转向语言推理，研究因此提出更贴近创作实践的交互路径。",
    note:
      "这篇研究对品牌设计、交互设计和视觉开发很友好，因为它关心的是设计师如何在意图、输入和过程各阶段重新拿回控制权，而不是单纯追求一张“好看结果图”。",
    source: "arXiv",
    date: "2026-03-03",
    href: "https://arxiv.org/abs/2603.03074",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/设计研究", "国外"],
  },
  {
    id: "textile-design-curator",
    title: "数字纺织设计研究提醒我们：AI 提高效率，也可能把设计师推成“策展人”",
    summary:
      "《Fashion and Textiles》3 月 4 日发表的开放论文比较了传统数字纺织设计与 GenAI 工作流，发现 AI 让任务更轻松、更高效，但也带来了个人风格表达和创作满足感的下降。",
    note:
      "对做服装、图案、材料和视觉语言的人来说，这篇文章很有用，因为它把“效率提升”和“作者性变弱”的张力讲得很具体，适合用来反思团队里究竟该把 AI 放在哪一段流程。",
    source: "Fashion and Textiles / Springer Nature",
    date: "2026-03-04",
    href: "https://link.springer.com/article/10.1186/s40691-026-00459-w",
    cta: "查看论文",
    tags: ["research", "global"],
    labels: ["科研/纺织设计", "国外"],
  },
  {
    id: "birdnest-tech-art-center",
    title: "鸟巢科技艺术中心开场就把 AI 创作、视效工业和沉浸交互做成长期公共空间",
    summary:
      "中国网 5 月 1 日报道，“可能世界档案：2026国际科技艺术展”在北京鸟巢科技艺术中心启幕，近 150 组作品把数字艺术、电影工业视效、沉浸交互、虚拟时尚与 AI 创作放到同一个场域。",
    note:
      "这条热点最值得艺术从业者关注的地方，在于它不是短期快闪，而是在把科技艺术做成城市级、常态化的公共展示基础设施，意味着更多作品会进入更大规模的真实观看环境。",
    source: "中国网",
    date: "2026-05-01",
    href: "https://www.china.org.cn/2026-05/01/content_118473308.shtml",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/展览", "国内"],
  },
  {
    id: "luoyang-ai-creator",
    title: "洛阳把 AI 创作者大赛继续做大，非遗和城市传播开始直接向创作者开放题目",
    summary:
      "澎湃 4 月 11 日报道，第二届“牡丹花都・AI见洛阳”全球 AI 创作者大赛新增 AI 河洛非遗专项赛道，鼓励普通创作者用图像与视频重写地方文化表达。",
    note:
      "这对独立创作者和文化机构都很有启发，因为它说明地方文化传播不再只靠官方内容，而是开始用赛事机制把 AI 图像、短视频和公共展示连接成一套新的创作入口。",
    source: "澎湃新闻",
    date: "2026-04-11",
    href: "https://m.thepaper.cn/newsDetail_forward_32952252",
    cta: "查看报道",
    tags: ["trend", "cn"],
    labels: ["热点/创作者生态", "国内"],
  },
  {
    id: "dataland-opening",
    title: "DATALAND 官宣 6 月开馆，AI 艺术开始拥有自己的常设博物馆逻辑",
    summary:
      "DATALAND 官网与 4 月 23 日新闻稿确认，这座被称为“世界首家 AI 艺术博物馆”的机构将于 2026 年 6 月 20 日在洛杉矶开幕，首展为《Machine Dreams: Rainforest》。",
    note:
      "这不只是一个漂亮的新馆消息。对数字艺术家和策展团队来说，更重要的是 AI 艺术正在从项目制、装置制，慢慢进入有常设空间、会员体系和策展叙事的制度化阶段。",
    source: "DATALAND / Related",
    date: "2026-04-23",
    href: "https://dataland.art/",
    cta: "查看官网",
    tags: ["trend", "global"],
    labels: ["热点/机构", "国外"],
  },
  {
    id: "cannes-creator-economy",
    title: "戛纳电影市场新增 Creator Economy Summit，短视频创作者正式进入电影产业接口",
    summary:
      "Marché du Film 官方页面显示，2026 年首次推出 Creator Economy Summit，专门讨论创作者经济与电影制作、发行和长内容叙事之间的新连接。",
    note:
      "这条对影像创作者尤其重要，因为它说明平台创作者不再只是边缘流量角色，而是开始被电影工业当作潜在的合作者、IP 发起者和发行渠道来认真对待。",
    source: "Marché du Film",
    date: "2026-05-17",
    href: "https://www.marchedufilm.com/programs/creator-economy-summit/",
    cta: "查看项目页",
    tags: ["trend", "global"],
    labels: ["热点/电影市场", "国外"],
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
