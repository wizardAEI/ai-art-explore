import "./styles.css";

const signals = [
  {
    id: "tongji-speculative-culture-course",
    title: "同济把科幻馆变成课堂，AIGC 课程开始直接排演城市级公共影像",
    summary:
      "同济大学设计创意学院 2026 年 4 月 22 日披露《虚实融合创新设计》课程成果：学生围绕奉贤新城“在水一方科幻馆”这一真实场景，以 AIGC 为核心引擎完成概念生成、视觉叙事与双屏建筑影像设计，最终把课堂作业推向面向公众开放的城市级展演。",
    note:
      "这条线索对空间设计师、影像团队和策展教育都很重要。课程不再只训练软件熟练度，而是提前让学生面对真实场地、真实观看关系与真实输出场景，创作判断也因此变得更立体。",
    source: "同济大学教务处",
    date: "2026-04-22",
    href: "https://jwc.tongji.edu.cn/a2/7e/c30671a369278/page.htm",
    cta: "查看课程成果",
    tags: ["research", "cn"],
    labels: ["研究/课程实验", "国内"],
  },
  {
    id: "xpu-ai-imaging-workshop",
    title: "全国首个智能影像 AI 高校联盟工作坊开班，电影级短片训练正在被重新设计",
    summary:
      "西安工程大学 2026 年 4 月 27 日公布，中国高校智能影像（AI）工作坊正式启动。该平台由北京电影学院、北京大学、北京邮电大学等联合发起，采用校际巡回基础课与集中核心实战课结合的方式，带领学员在 10 天内完成原创 AI 短片创作。",
    note:
      "这里最值得留意的不是“AI 进校园”这件事本身，而是训练结构变了。联盟式实训、算力奖励、跨校协作和成片目标被放在同一条流水线上，影像教育开始更像一套真实制作系统。",
    source: "西安工程大学",
    date: "2026-04-27",
    href: "https://www.xpu.edu.cn/info/1134/28221.htm",
    cta: "查看工作坊",
    tags: ["research", "cn"],
    labels: ["研究/工作坊", "国内"],
  },
  {
    id: "bjiff-aigc-film-unit",
    title: "北影节 AIGC 电影单元收官，AI 影像比赛正长成创作生态的基础设施",
    summary:
      "中国传媒大学 2026 年 5 月 6 日发布北影节 AIGC 电影单元总结。本届单元已形成“赛事、论坛、工坊、72 小时极限创夺赛、创投会”联动结构，参评作品三年间从 430 部增长到 3000 余部，并把作者性、商业潜力与产业落地一并纳入评价。",
    note:
      "对青年导演、品牌内容团队和艺术院校来说，这类平台的意义在于它正在替代零散练习。作品如何孵化、被讨论、被看见、被对接资源，如今开始有了更完整的路径。",
    source: "中国传媒大学",
    date: "2026-05-06",
    href: "https://www.cuc.edu.cn/news/2026/0506/c1901a269895/page.htm",
    cta: "查看单元回顾",
    tags: ["trend", "cn"],
    labels: ["热点/影像行业动态", "国内"],
  },
  {
    id: "idaexpo-hengqin-macao-wrap",
    title: "横琴澳门数字艺术博览会刚刚收官，湾区把数字艺术做成了一次跨行业大集结",
    summary:
      "珠海市人民政府口岸服务平台于 2026 年 5 月 11 日转载报道，历时 14 天的“2026 横琴-澳门国际数字艺术博览会”已经闭幕。展会把文博、文旅、影视、音乐、广告、教育等产业共同拉进现场，四大主题展区则把生成艺术、交互装置、虚拟现实叙事与公共活动并置展开。",
    note:
      "这不是单纯的节庆热闹。它更像一次产业与艺术之间的试营业：谁能把作品做成体验，谁能把体验接成合作，谁就更接近下一轮数字艺术市场的入口。",
    source: "珠海市人民政府口岸服务平台 / 中新网",
    date: "2026-05-11",
    href: "https://www.zlb.gov.cn/20260511/26d84b3d84924832bfb7a95f26f7a919/c.html",
    cta: "查看收官报道",
    tags: ["trend", "cn"],
    labels: ["热点/数字艺术博览会", "国内"],
  },
  {
    id: "adobe-motionstream",
    title: "Adobe MotionStream 让生成视频第一次更像在推机位，实时控制感回到了创作者手里",
    summary:
      "Adobe Research 于 2026 年 4 月 10 日公开 MotionStream。这个实验系统允许创作者在视频生成过程中直接用光标和滑块改变镜头、物体运动与视角，以更低延迟和连续控制把“等结果”改成“边看边导”。",
    note:
      "对做短片、装置影像和视觉概念的人来说，最大的变化是节奏感。过去生成视频常常像抽卡，现在更接近排练，创作者可以在形成中的画面里寻找动作、速度和镜头性。",
    source: "Adobe Research",
    date: "2026-04-10",
    href: "https://research.adobe.com/news/motionstream-control-in-ai-video-creation/",
    cta: "查看 MotionStream",
    tags: ["research", "global"],
    labels: ["研究/生成视频控制", "国外"],
  },
  {
    id: "google-lyria-3-pro",
    title: "Google 把 Lyria 3 Pro 推进更多入口，结构化 AI 音乐开始更适合真正写歌的人",
    summary:
      "Google DeepMind 2026 年 3 月 25 日发布 Lyria 3 Pro，支持最长 3 分钟的歌曲生成，并能理解前奏、主歌、副歌、桥段等结构控制。它随后进入 Google AI Studio、Gemini API、Google Vids 等更多创作界面，让音乐生成从片段试玩走向更完整的作曲试验。",
    note:
      "音乐作者需要的从来不是一键成歌神话，而是可延展的草图能力。结构意识一旦增强，AI 就更可能进入配乐提案、声音世界观搭建和跨媒介叙事，而不只是做背景铺垫。",
    source: "Google DeepMind",
    date: "2026-03-25",
    href: "https://blog.google/innovation-and-ai/technology/ai/lyria-3-pro/",
    cta: "查看 Lyria 3 Pro",
    tags: ["research", "global"],
    labels: ["研究/音乐生成", "国外"],
  },
  {
    id: "li-yi-fan-screen-melancholy",
    title: "李亦凡在威尼斯展开《Screen Melancholy》，生成图像与游戏引擎被直接摆进真实展厅",
    summary:
      "台北市立美术馆于 2026 年 5 月 7 日发布新闻稿，宣布李亦凡新作《Screen Melancholy》将于 5 月 9 日至 11 月 22 日在威尼斯双年展平行展中展出。项目结合绘画、动画、游戏引擎与生成图像，讨论屏幕忧郁、信息过载与技术介导下的人类感知。",
    note:
      "很多数字艺术项目依旧停留在“效果很好看”。李亦凡这次更迷人的地方在于，他把技术焦虑也纳入了展览语言，让图像不是只负责展示未来，还负责暴露我们如何被屏幕塑形。",
    source: "Taipei Fine Arts Museum",
    date: "2026-05-07",
    href: "https://www.tfam.museum/News/News_page.aspx?ddlLang=en-us&id=2084",
    cta: "查看展览发布",
    tags: ["trend", "global"],
    labels: ["热点/威尼斯双年展", "国外"],
  },
  {
    id: "iris-van-herpen-brooklyn",
    title: "Iris van Herpen 纽约首个大展下周开幕，高定、科学标本与声景将被排成一场多感官实验",
    summary:
      "Brooklyn Museum 宣布《Iris van Herpen: Sculpting the Senses》将于 2026 年 5 月 16 日开幕。展览汇集 140 余件高定作品，并与当代艺术、设计作品、自然史标本和作曲家 Salvador Breed 的声景共同构成一个跨越时装、科学与空间感知的观看系统。",
    note:
      "这类展览提醒策展人和品牌创意团队，科技感并不一定要通过硬件堆出来。材料、声音、身体、结构和自然知识放在一起，同样能制造出强烈的未来感与沉浸性。",
    source: "Brooklyn Museum",
    date: "2026-05-16",
    href: "https://www.brooklynmuseum.org/exhibitions/iris-van-herpen",
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
