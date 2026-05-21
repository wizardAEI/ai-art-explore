import "./styles.css";

const signals = [
  {
    id: "njfu-jiangnan-aigc-workshop",
    title: "江南村落第一次被当成 AIGC 设计母题来拆解，文化调研、空间生成和展陈输出被并成一门课",
    summary:
      "南京林业大学艺术设计学院 2026 年 5 月 18 日发布“最江南”传统村落文化 AIGC 创新设计工作坊开幕信息。课程把江南传统村落作为文化母题，围绕文化基因提取、空间风貌生成、非遗器物转译、江南文化叙事与展陈呈现展开，让学员完成从调研到输出的整段设计实践。",
    note:
      "对做乡建、展览、公共文化项目的人来说，这是一种很有启发性的课型。地方文化不再只是后期包装素材，而是可以在最前面就成为生成逻辑、空间语言和叙事结构的起点。",
    source: "南京林业大学艺术设计学院",
    date: "2026-05-18",
    href: "https://art.njfu.edu.cn/xydt/20260518/i358184.html",
    cta: "查看工作坊信息",
    tags: ["research", "cn"],
    labels: ["研究/乡土文化与 AIGC 方法", "国内"],
  },
  {
    id: "cuc-ultrahd-ai-imaging-workshop",
    title: "影像教育开始把“算力”写进创作课，中国传媒大学把超高清与 AIGC 放进同一条拍摄链",
    summary:
      "中国传媒大学 2026 年 3 月 27 日发布“AI 重构与超高清影像全流程创作探索工作坊”回顾。活动把 AIGC、超高清影像、设备能力与创作教育放在同一个议程里讨论，也反复强调技术提效之外，影像作者仍要把人文洞察和审美判断握在手里。",
    note:
      "这条信号很适合纪录片团队、摄影师和影视院校教师留意。接下来越来越多影像课程会把机器性能、后期链路和现场表达一起讲，作品气质往往就从这里开始分化。",
    source: "中国传媒大学",
    date: "2026-03-27",
    href: "https://www.cuc.edu.cn/news/2026/0327/c1976a268267/page.htm",
    cta: "查看工作坊回顾",
    tags: ["research", "cn"],
    labels: ["研究/超高清影像方法", "国内"],
  },
  {
    id: "nyu-ai-visual-storytelling",
    title: "NYU 把 AI 讲成一整条叙事管线，脚本、分镜、视觉资产和后期第一次被放进同一间线上教室",
    summary:
      "NYU Tisch Martin Scorsese Virtual Production Center 于 2026 年 5 月 7 日介绍即将在 5 月 19 日开课的“AI for Visual Storytelling”工作坊。课程把 AI 放进从概念开发到后期的完整创作流程，强调它更适合拿来清除制作阻塞、扩展实验空间，而不是替代艺术家的判断。",
    note:
      "对电影学生、广告导演和媒体艺术家来说，这样的课程提醒很重要。真正值得积累的能力，不只是会不会生成，而是能不能把生成结果继续变成镜头语言、节奏和情绪组织。",
    source: "NYU Tisch Martin Scorsese Virtual Production Center",
    date: "2026-05-07",
    href: "https://tisch.nyu.edu/virtual-production/news/behind-the-lens--ai--creativity--and-the-future-of-visual-storyt",
    cta: "查看工作坊介绍",
    tags: ["research", "global"],
    labels: ["研究/叙事工作流", "国外"],
  },
  {
    id: "columbia-creative-frontier-masterclass",
    title: "Columbia 的 masterclass 不教“提示词速成”，它把 worldbuilding、automation 和 rapid prototyping 作为新叙事基础设施",
    summary:
      "Columbia University School of the Arts 于 2026 年 4 月 22 日举办“Creative Frontier”公开 masterclass，用讲座、演示和动手练习讨论 AI 如何改变 storytelling、worldbuilding 与 creative practice。页面列出的关键词很直接: generative AI、automation、agentic systems 和 rapid prototyping，已经被当成新的叙事基础设施来教学。",
    note:
      "这对策展人、体验设计师和跨媒介写作者都很有现实意义。场景搭建、互动原型和叙事验证的周期一旦缩短，创意判断会被迫更早发生，项目节奏也会完全不同。",
    source: "Columbia University School of the Arts",
    date: "2026-04-22",
    href: "https://arts.columbia.edu/events/masterclass-creative-frontier-navigating-ai-revolution-storytelling",
    cta: "查看 masterclass 页面",
    tags: ["research", "global"],
    labels: ["研究/新叙事基础设施", "国外"],
  },
  {
    id: "photofairs-shanghai-digital-art-week",
    title: "影像上海把数字艺术周推到核心位置，摄影博览会正在长成跨媒介叙事现场",
    summary:
      "雅昌艺术网 2026 年 5 月 8 日报道，本届影像上海艺术博览会把“亚洲数字艺术周”放进重要板块，集中呈现一批讨论新兴技术如何改写感知、身份与叙事的作品，同时又把摄影、装置、档案影像和步行影像并置在同一条观看路径里。影像博览会的边界正在继续外扩。",
    note:
      "这条信号会让很多图像创作者松一口气。摄影并没有被新媒介挤到边角，反而正成为连接档案、装置、数字叙事和现场经验的一种基础语法。",
    source: "雅昌艺术网",
    date: "2026-05-08",
    href: "https://m-news.artron.net/news/20260508/n2082821.html",
    cta: "查看博览会观察",
    tags: ["trend", "cn"],
    labels: ["热点/影像博览会", "国内"],
  },
  {
    id: "shenzhen-icif-ai-map",
    title: "深圳文博会把分会场做成一张 AI 文化地图，AI 数字人、艺术体验空间和视觉创意园同时上线",
    summary:
      "深圳市文化广电旅游体育局 2026 年 5 月 13 日发布第二十二届文博会分会场信息。本届共设 51 个分会场、近 400 项活动，明确把“数智赋能”作为亮点之一：生成式 AI 视觉创意园、AI 数字人、AI 艺术体验空间和文化产业创新实践被分散进城市不同节点，让展会像一套可游走的接口。",
    note:
      "对机构策展、城市文化运营和品牌展陈团队来说，这种布局值得注意。未来的大型文化活动未必只靠一个主展馆出片，更可能依靠一整座城市同时提供不同密度的体验层。",
    source: "深圳市文化广电旅游体育局",
    date: "2026-05-13",
    href: "https://wtl.sz.gov.cn/whfw/whxw/content/post_12777587.html",
    cta: "查看分会场信息",
    tags: ["trend", "cn"],
    labels: ["热点/城市级文化界面", "国内"],
  },
  {
    id: "figma-design-agent",
    title: "Figma 昨天把 agent 放进画布本身，设计协作开始从“出图”转向“并行试稿”",
    summary:
      "Figma 于 2026 年 5 月 20 日发布内置 design agent。官方把重点放在“直接在 canvas 上工作”这件事上：从任意设计层发起提示、并行尝试多个方向、边改边迭代，并让 agent 读取组件、tokens、设计系统和团队规范。对设计团队来说，AI 不再是文件外的旁路助手，而像是被安进了工作台本身。",
    note:
      "品牌设计师、产品设计师和创意科技团队会先感到这次变化。未来很多工作不再是单次定稿，而会变成同时铺开几条路线、快速收束、再交给人做精修的连续回合。",
    source: "Figma Blog",
    date: "2026-05-20",
    href: "https://www.figma.com/blog/the-figma-agent-is-here/",
    cta: "查看 Figma 更新",
    tags: ["trend", "global"],
    labels: ["热点/设计协作工具", "国外"],
  },
  {
    id: "beeple-regular-animals-berlin",
    title: "柏林把 AI 讨论搬回美术馆地面，Beeple 的机器狗装置让展览重新拥有一点危险感",
    summary:
      "柏林新国家美术馆 2026 年 4 月 29 日至 5 月 10 日呈现 Beeple 的《Regular Animals》。这件互动装置让装着名人硅胶头像的机器狗在围栏中自由行动，机身摄像头捕捉现场，再交给 AI 按不同人物的文化风格重新解释，最后把图像结果抛回展厅。它把 AI、名望、权力和展示机制做成了一套带机器人和物理风险感的现场剧场。",
    note:
      "对做展览、媒体艺术和公共项目的人来说，这件作品的启发不只在题材。它提醒我们，AI 艺术一旦重新拥有空间、机械和观众距离，讨论会马上从屏幕伦理走回身体经验。",
    source: "Neue Nationalgalerie",
    date: "2026-04-29",
    href: "https://www.smb.museum/en/museums-institutions/nationalgalerie/about-us/whats-new/detail/gallery-weekend-berlin-1-3-may-2026-at-the-neue-nationalgalerie/",
    cta: "查看展览信息",
    tags: ["trend", "global"],
    labels: ["热点/美术馆装置现场", "国外"],
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
