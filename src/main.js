import "./styles.css";

const signals = [
  {
    id: "cafa-rural-visual-systems",
    title: "中央美院把 AI 训练放进乡村视觉系统，设计课开始直接连到真实公共场景",
    summary:
      "中央美术学院于 2026 年 5 月 13 日发布《智艺乡建》项目招生简章，围绕乡村文化资源提炼、IP 形象建构、整体视觉系统设计、空间应用模拟与成果展示展开 30 天训练。课程把 AI 设计工具、实地调研与项目制教学放在同一个流程里，让视觉设计从屏幕方案走向可落地的公共文化场景。",
    note:
      "对视觉设计师、公共艺术团队和文旅策展人来说，这条信号很实在。AI 在这里不是为了生成几张漂亮图，而是被用来加速一整套视觉包的推演、比对和沟通。",
    source: "中央美术学院",
    date: "2026-05-13",
    href: "https://www.cafa.edu.cn/st/2026/90233562.htm",
    cta: "查看项目简章",
    tags: ["research", "cn"],
    labels: ["研究/公共视觉方法", "国内"],
  },
  {
    id: "nua-music-x-lab",
    title: "南艺继续把 Music X Lab 往前推，音乐 AI 不只写旋律，也被当作研究、排练与交互的共同语言",
    summary:
      "南京艺术学院于 2026 年 4 月 17 日启动第三期 Music X Lab 音乐人工智能工作坊，活动持续至 5 月 20 日。工作坊以创新性课程和开放式论文研讨并行，聚焦人工智能生成、音乐理解与人机交互，试着把学术框架、创作训练和科研孵化放进同一条学习路径。",
    note:
      "声音作者、舞台团队和影像剪辑师都值得留意这类训练。今天的音乐科技教育，正在从软件演示转向跨学科协作能力，节奏、界面、空间反馈和叙事编排被一起讨论。",
    source: "南京艺术学院",
    date: "2026-04-17",
    href: "https://pop.nua.edu.cn/_t132/2026/0417/c1653a120261/page.htm",
    cta: "查看工作坊安排",
    tags: ["research", "cn"],
    labels: ["研究/音乐科技工作坊", "国内"],
  },
  {
    id: "lacp-ai-generative-imaging",
    title: "摄影教育正在把 AI 当成基础修辞，洛杉矶摄影中心把提示、混合与伦理放进同一门入门课",
    summary:
      "洛杉矶摄影中心于 2026 年 5 月 18 日开启三节在线课程“AI Generative Imaging”，面向刚接触 AI 的艺术家与摄影师。课程从提示词、图像混合到伦理讨论一起展开，强调作者要在生成流程里逐步形成自己的方法，而不是停留在平台默认审美上。",
    note:
      "这条线索很适合影像创作者参考。行业正在把 AI 视作新的暗房训练，真正稀缺的不是按钮，而是你如何建立个人风格、筛选图像并承担判断。",
    source: "Los Angeles Center of Photography",
    date: "2026-05-18",
    href: "https://lacphoto.org/events/ai-generative-imaging-midjourney-ann-elliott-cutting-2/",
    cta: "查看课程页面",
    tags: ["research", "global"],
    labels: ["研究/摄影 AI 教学", "国外"],
  },
  {
    id: "va-creativity-ai-make-along",
    title: "V&A 把 AI 设计素养做成一堂公开练习课，判断力先于熟练度被摆到台前",
    summary:
      "V&A 于 2026 年 5 月 14 日举办在线工作坊“Creativity and AI Make-Along with Maria Than”。课程邀请 Adobe Creative Resident Maria Than 结合自己的艺术实践，带学生一边讨论 AI 如何进入设计流程，一边测试它怎样帮助想法发育，而不是直接替代想法本身。",
    note:
      "博物馆教育开始把 AI 视作一种创作素养训练，这很关键。未来观众和未来作者可能是同一拨人，他们需要学的不是只会用工具，而是会挑选、会取舍、会提问。",
    source: "V&A",
    date: "2026-05-14",
    href: "https://www.vam.ac.uk/event/gbOVLKjyKP/schools-live-webinar-resident-in-ai-may-2026",
    cta: "查看 V&A 活动",
    tags: ["research", "global"],
    labels: ["研究/设计教育", "国外"],
  },
  {
    id: "china-pe-2026",
    title: "北京 P&E 把影像器材展做成一整条创作链，摄影作者今年看的不是单机，而是工作流",
    summary:
      "第 27 届 CHINA P&E 于 2026 年 5 月 15 日在北京展览馆开幕。官方介绍显示，本届展会汇集 120 余家影像企业，覆盖相机、镜头、灯光、稳定器、存储与后期软件等全链路装备，同时把 AI 对焦、场景识别、智能图像优化、4K/8K 视频设备和沉浸式体验作为今年的集中看点。",
    note:
      "对摄影师、导演、视频团队和品牌内容工作室来说，器材展正在重新变得重要。因为创作链条被打通之后，选设备其实也在选节奏、选协作方式、选成片气质。",
    source: "中国国际照相机械影像器材与技术博览会",
    date: "2026-05-15",
    href: "https://www.ccoea.org.cn/news3.asp?vid=7161",
    cta: "查看开幕信息",
    tags: ["trend", "cn"],
    labels: ["热点/影像工具现场", "国内"],
  },
  {
    id: "hengqin-macao-digital-art-expo",
    title: "横琴澳门数字艺术博览会刚收官，算法、文旅和展陈已经被打包成一座城市的体验样机",
    summary:
      "中央政府驻澳门联络办公室于 2026 年 5 月 11 日报道，历时 14 天的“2026 横琴-澳门国际数字艺术博览会”正式收官。博览会聚集来自文博、文旅、影视、音乐、广告与教育领域的机构与创作者，设置四大主题展区，并在“艺术未来式”板块呈现 23 位艺术家的 18 件作品，让观众直接感受算法作为创作媒介的展场表现力。",
    note:
      "这类博览会越来越像城市级试验场。它不只卖门票，也在测试数字艺术能不能同时承担招商、传播、夜游、教育和品牌叙事的多重任务。",
    source: "中央政府驻澳门联络办公室",
    date: "2026-05-11",
    href: "https://www.zlb.gov.cn/20260511/26d84b3d84924832bfb7a95f26f7a919/c.html",
    cta: "查看博览会报道",
    tags: ["trend", "cn"],
    labels: ["热点/数字艺术博览会", "国内"],
  },
  {
    id: "berklee-aims-lineup",
    title: "Berklee 把 AI 音乐峰会排成可听、可学、可黑客松的整套日程，创作社区正在争取自己的话语权",
    summary:
      "Berklee 于 2026 年 5 月 13 日公布首届 AIMS（AI Music Summit）完整阵容。活动将于 6 月 3 日至 5 日举行，包含应用型工作坊、研究发表、行业 panel、现场演示、教学讨论和演出，随后还接上 6 月 6 日至 7 日的 hackathon，明确把音乐人的创作现实放在 AI 议程中心。",
    note:
      "音乐人不想只做平台变化的被动接收者了。峰会、演出和黑客松被放在一起，说明作者群体正在主动争取规则、工作流和审美标准的定义权。",
    source: "Berklee College of Music",
    date: "2026-05-13",
    href: "https://www.berklee.edu/media-relations/news/berklee-convenes-leaders-in-ai-music-for-inaugural-aims-symposium",
    cta: "查看峰会议程",
    tags: ["trend", "global"],
    labels: ["热点/音乐与 AI 生态", "国外"],
  },
  {
    id: "artist-and-the-machine-ny",
    title: "纽约的 AI & Creativity Summit 把设计、影像、品牌与机器人艺术排进同一张名单，跨界协作正在常态化",
    summary:
      "Artist and the Machine 的纽约 AI & Creativity Summit 于 2026 年 5 月 14 日举行，主题直接写成“Join the pioneers of human-machine collaboration”。页面显示，活动把 Runway 联合创始人、企业设计负责人、创意技术作者、机器人艺术创业者与教育者放进同一场编排里，明显不再把 AI 创意当成单一行业话题。",
    note:
      "当峰会的参会名单横跨工作室、品牌、学校、产品团队和艺术家，我们就能看到另一种趋势。创作圈真正关心的，已经不是谁先试过工具，而是谁能先组织起新的合作关系。",
    source: "Artist and the Machine",
    date: "2026-05-14",
    href: "https://artistandthemachine.com/spring-2026/",
    cta: "查看峰会页面",
    tags: ["trend", "global"],
    labels: ["热点/创意产业动向", "国外"],
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
