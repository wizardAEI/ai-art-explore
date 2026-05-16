import "./styles.css";

const signals = [
  {
    id: "shu-haishang-shengcheng",
    title: "上海大学把“海上生成”开成一组方法现场，艺科融合开始长出自己的城市语法",
    summary:
      "上海大学上海美术学院 2026 年 4 月 30 日公布，其承办的“海上生成：艺术与科技融合创新学术大会”与“薪火相传·数智生辉：民间文艺与科技对话”两大分会场，已经把生成式人工智能、数字感知、互动媒体、文化遗产活化与人才培养放进同一条讨论链条里，现场还同步发布了 AI 视频作品与“海云”AI 智能体。",
    note:
      "这类会议真正有意思的地方，是它不再把艺术与科技当作临时拼盘。城市平台、学院方法、公共文化和技术原型被摆上同一张桌子，创作者也因此更早开始思考作品如何进入真实空间、真实机构与真实协作网络。",
    source: "上海大学上海美术学院",
    date: "2026-04-30",
    href: "https://safa.shu.edu.cn/info/1084/19300.htm",
    cta: "查看分会场回顾",
    tags: ["research", "cn"],
    labels: ["研究/艺科方法", "国内"],
  },
  {
    id: "sta-future-theatre-consensus",
    title: "上戏发布“未来戏剧学”共识，XR、空间计算与人机共演被写进下一轮戏剧方法论",
    summary:
      "上海戏剧学院于 2026 年 4 月 28 日正式发布《关于“未来戏剧学”的上戏共识》。文本把人工智能、XR、交互媒体、空间计算、人机共演、多感官沉浸体验、版权归属与行业合规一并纳入讨论，试图为数智时代的戏剧研究与创作建立新的知识框架。",
    note:
      "对舞台导演、空间影像团队、沉浸式项目策划者来说，这份共识很像一份正在成形的行业脚本。它提醒大家，舞台技术栈已经不只是执行层，很多审美判断、观演关系与产业规则都会在这一轮重写。",
    source: "上海戏剧学院",
    date: "2026-04-28",
    href: "https://www.sta.edu.cn/eb/74/c1546a125812/page.htm",
    cta: "查看上戏共识",
    tags: ["research", "cn"],
    labels: ["研究/戏剧方法论", "国内"],
  },
  {
    id: "photofairs-shanghai-perspective",
    title: "PHOTOFAIRS Shanghai 刚把 AI 放进“Perspective”板块，图像博览会正在转向多媒介现场",
    summary:
      "PHOTOFAIRS Shanghai 官方站显示，第 11 届博览会已于 2026 年 5 月 7 日至 10 日在上海展览中心举行。其回归的“Perspective”单元明确把摄影装置与多种艺术媒介并置，聚焦女性视角、生态感知以及 AI 与算法文化，说明影像博览会正在主动扩展成更复杂的数字视觉现场。",
    note:
      "这类变化对摄影策展人、影像艺术家和视觉机构特别重要。过去展会更像作品目录，现在它越来越像编辑台，影像、装置、算法和叙事语气被重新编组，观众也被邀请进入更混合的观看状态。",
    source: "PHOTOFAIRS Shanghai",
    date: "2026-05-07",
    href: "https://photofairs-shanghai.com/?lang=en",
    cta: "查看博览会信息",
    tags: ["trend", "cn"],
    labels: ["热点/影像博览会", "国内"],
  },
  {
    id: "cross-strait-digital-dialogue",
    title: "北京这场数字艺术展刚刚落幕，传统题材开始借沉浸光影重新组织观看节奏",
    summary:
      "新华网 2026 年 5 月 13 日报道，“金瓯无缺——海峡两岸当代艺术与文化创意展”数字展览在北京举行。两岸近 50 位艺术家带来约 200 件数字艺术作品，现场将神话叙事、数字影像、交互装置与数字舞台美术并置展开，让《长恨歌》这样的传统题材获得更沉浸的当代视觉语境。",
    note:
      "这里值得盯住的，不只是技术被用了多少，而是传统内容的视觉秩序在变。戏曲、神话、历史叙事不再只靠讲述进入当代，它们开始通过空间、光线、节拍和多屏幕结构重新获得触达年轻观众的方式。",
    source: "新华网",
    date: "2026-05-13",
    href: "https://www.xinhuanet.com/20260513/e96e213bf6aa46df992fd2f1f383160f/c.html",
    cta: "查看展览报道",
    tags: ["trend", "cn"],
    labels: ["热点/数字艺术展", "国内"],
  },
  {
    id: "mllm-graphic-design-study",
    title: "图形设计终于被拆成可讨论的判断层，微软在问多模态模型到底懂不懂版式",
    summary:
      "Microsoft Research 在 2026 年 4 月发表《Can Multimodal Large Language Models Understand Graphic Design?》。这项研究把图形设计理解拆成识别、语义和整体判断三个层级，并用 8 个任务、1600 个标注案例评估 19 个多模态模型，结果显示设计理解仍是一块难啃的地带。",
    note:
      "这条研究对平面设计师、展陈视觉团队和品牌创意部门很有启发。大家天天都在做的，其实不是简单挑好看，而是在处理层级、语义、氛围、可读性和整体气质的复合判断。模型能否学会这套语言，会直接影响下一代设计协作工具长成什么样。",
    source: "Microsoft Research",
    date: "2026-04",
    href: "https://www.microsoft.com/en-us/research/publication/can-multimodal-large-language-models-understand-graphic-design-a-comparative-study/",
    cta: "查看研究介绍",
    tags: ["research", "global"],
    labels: ["研究/图形设计理解", "国外"],
  },
  {
    id: "storycaster-room-storytelling",
    title: "把房间变成叙事界面，Storycaster 让沉浸式创作重新回到空间而不是头显里",
    summary:
      "Microsoft Research 于 2026 年 4 月 24 日公开 Storycaster。这个 CHI 2026 项目通过实时相机、环绕投影、环境音和旁白代理，把普通房间转成可响应的故事环境，参与者可以用语音共同推进情节，空间本身也会随着叙事演化。",
    note:
      "展览设计、沉浸教育和影像装置创作都能从这里读到一个方向：未来的故事工具很可能不是一块屏，而是一整个空间。叙事、投影、声音和身体移动一旦被同时编排，创作团队就需要像搭建舞台系统那样来搭建世界观。",
    source: "Microsoft Research",
    date: "2026-04-24",
    href: "https://www.microsoft.com/en-us/research/video/storycaster-an-ai-system-for-immersive-room-based-storytelling-chi-2026/",
    cta: "查看项目演示",
    tags: ["research", "global"],
    labels: ["研究/空间叙事系统", "国外"],
  },
  {
    id: "runway-agent",
    title: "Runway Agent 上线了，视频团队开始拥有一位会提案也会出片的对话式搭档",
    summary:
      "Runway 于 2026 年 5 月 13 日发布 Runway Agent。用户只需用一段对话说明目标，它就能提出概念、分解故事节拍、生成视觉方向，并继续产出多镜头视频、旁白、对白与音乐，试图把从灵感到可发布成片的距离压缩到一次协作里。",
    note:
      "对导演、品牌内容团队、独立影像作者和小型工作室来说，这意味着前期正在被重新定义。创意陈述、分镜草图、预演片和最终片之间的边界会更薄，谁能稳定驾驭这种对话式编排，谁就会更快形成自己的生产节奏。",
    source: "Runway",
    date: "2026-05-13",
    href: "https://runwayml.com/news/introducing-runway-agent",
    cta: "查看产品发布",
    tags: ["trend", "global"],
    labels: ["热点/视频创作者工具", "国外"],
  },
  {
    id: "iris-van-herpen-brooklyn",
    title: "Iris van Herpen 今晚在纽约开幕，高定、科学标本与声景被编成一场未来感展览",
    summary:
      "Brooklyn Museum 官网显示，《Iris van Herpen: Sculpting the Senses》于 2026 年 5 月 16 日开幕。展览汇集 140 余件高定作品，并与当代艺术、设计作品、自然史标本、档案材料及作曲家 Salvador Breed 的声景一起构成一场多感官的跨学科陈列。",
    note:
      "时装策展、材料设计、舞台视觉和品牌叙事都可以从这里看到一个清楚信号：未来感并不只靠屏幕实现。身体、材质、骨架、海洋、声场和科学想象被一起调度时，展览本身就会像一台活的世界建构机器。",
    source: "Brooklyn Museum",
    date: "2026-05-16",
    href: "https://brooklynmuseum.org/exhibitions/iris-van-herpen",
    cta: "查看展览页面",
    tags: ["trend", "global"],
    labels: ["热点/时装科技展", "国外"],
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
