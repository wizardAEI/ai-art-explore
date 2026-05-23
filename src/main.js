import "./styles.css";

const signals = [
  {
    id: "tsinghua-imdt-prototypes",
    title: "清华 IMDT 毕业展把 AI、独立游戏与教育科普并排展示，课堂成果越来越像可发布原型",
    summary:
      "清华大学深圳国际研究生院 2026 年 5 月 19 日发布消息，2026 届清华-腾讯互动媒体设计与技术培养项目（IMDT）毕业展在 5 月 18 日启幕，设有 AI 技术、教育科普、医疗与心理、独立游戏四大主题展区，共展出 28 件作品。展览把互动媒体技术落地、创意表达与跨学科应用放到同一个公共场景里，像一次面向行业和观众的原型发布会。",
    note:
      "做交互影像、叙事装置和游戏化展陈的人可以留意：评图已经不只看概念完成度，越来越看作品能否被体验、被测试、被继续迭代。",
    source: "清华大学深圳国际研究生院",
    date: "2026-05-19",
    href: "https://www.sigs.tsinghua.edu.cn/2026/0519/c7626a290906/page.htm",
    cta: "查看 IMDT 毕业展",
    tags: ["research", "cn"],
    labels: ["研究/互动媒体教学", "国内"],
  },
  {
    id: "xinhua-ai-art-education",
    title: "新华网把多所艺术院校的新动作放到同一页，AI 时代的艺术教育正在集体改课表",
    summary:
      "新华网 2026 年 5 月 19 日报道“人工智能时代的艺术教育创新发展”研讨，集中呈现了几条鲜明路径：广州美术学院推进本科“大通识”改革，天津美术学院人工智能艺术学院设置数据艺术与生成艺术方向，四川美术学院与电子科技大学推出“实验艺术+电子信息工程”联合学士学位，中国人民大学艺术学院则把人文传统、AI 新技术与艺术实践重新并联。单校实验正在变成一轮更广泛的教育重排。",
    note:
      "这条线索对策展与教学机构都很关键。课程边界一旦松动，写作、表演、工程、交互和视觉研究就会更频繁地被拉进同一条培养链。",
    source: "新华网",
    date: "2026-05-19",
    href: "https://www.news.cn/tech/20260519/af81d997457649909506c19cc80723ee/c.html",
    cta: "查看研讨摘要",
    tags: ["research", "cn"],
    labels: ["研究/艺术教育变革", "国内"],
  },
  {
    id: "longgang-ai-docent-museum",
    title: "龙岗一场东南亚古代艺术展让 AI 讲解员上岗，文物展示开始学会用交互把观众留下来",
    summary:
      "龙岗政府在线 2026 年 5 月 20 日发布消息，深圳市梵亚艺术博物馆年度特展《此间有静：东南亚古代艺术精品展》开幕，87 件文物同步接入 AI 讲解员“梵小丫”和数字化展陈方案。馆方把智能讲解、沉浸式互动与全媒体传播连成一体，让静态文物变得可看、可听、可互动、可传播。",
    note:
      "对中小馆舍来说，这种做法很现实：先把讲解、路线、问答和传播做顺，展览的停留时间与二次扩散才会慢慢长出来。",
    source: "龙岗政府在线",
    date: "2026-05-20",
    href: "https://www.lg.gov.cn/xxgk/xwzx/zwdt/content/post_12796279.html",
    cta: "查看展览与 AI 讲解",
    tags: ["trend", "cn"],
    labels: ["热点/文博数字展陈", "国内"],
  },
  {
    id: "wenbohui-ai-scenes",
    title: "深圳文博会把“AI 全场景应用”摆到明面上，文化展会正在从看样品转向体验工作流",
    summary:
      "人民网 2026 年 5 月 20 日转述深圳晚报消息称，本届文博会以“AI 全场景应用”为核心，把人工智能从技术展示变成贯穿全场的沉浸式体验。16 号馆人工智能展区与数字演艺、动漫游戏电竞等版块联动，形成一组可交互、可感知、可传播的文化新场景，观众看到的已经不只是设备，而是一整套被编排好的体验流程。",
    note:
      "做品牌空间、沉浸装置和公共活动的人会很熟悉这种转向。观众越来越想亲手试，光靠展板和口号已经很难制造记忆点。",
    source: "人民网",
    date: "2026-05-20",
    href: "https://sz.people.com.cn/n2/2026/0520/c202846-41585662.html",
    cta: "查看文博会现场方向",
    tags: ["trend", "cn"],
    labels: ["热点/AI 文化场景", "国内"],
  },
  {
    id: "nycxdesign-ai-summit",
    title: "纽约把 AI 设计峰会拆成上午研究、下午实战，设计界正在认真重排“先想后做”的顺序",
    summary:
      "NYCxDESIGN 与 Cornell Tech 发布的 2026 年 5 月 19 日活动页显示，AI Summit: FutureNow — Art of the Possible 将 architecture、product design、graphic design、art 与 technology 放进同一天的议程里。上午聚焦 academic research 与 emerging perspectives，下午转向 professionals 的真实工作流分享，峰会结构本身就在说明设计方法的变化。",
    note:
      "从建筑到平面再到产品都被拉进同一张日程表，说明 AI 不再只是工具专题，它正在改写跨工种协作的语言。",
    source: "NYCxDESIGN",
    date: "2026-05-19",
    href: "https://nycxdesign.org/events/future-now-art-of-the-possible-ai-summit",
    cta: "查看峰会议程",
    tags: ["research", "global"],
    labels: ["研究/设计方法论坛", "国外"],
  },
  {
    id: "lacp-midjourney-course",
    title: "洛杉矶摄影中心把 Midjourney 入门课开给摄影师与艺术家，图像教育开始补上伦理与个人方法",
    summary:
      "Los Angeles Center of Photography 的课程页显示，2026 年 5 月 18 日举办的《AI Generative Imaging》面向刚接触 AI 的艺术家、设计师与摄影师，内容不只讲 prompt creation，还包括 blending techniques、把个人作品接入生成流程，以及 ethics of AI usage。AI 图像教育正在从炫技清单转向方法训练。",
    note:
      "这类课程的价值不在于统一风格，而在于帮创作者尽快找到自己的使用边界。什么时候借力，什么时候收手，都在训练里。",
    source: "Los Angeles Center of Photography",
    date: "2026-05-18",
    href: "https://lacphoto.org/events/ai-generative-imaging-midjourney-ann-elliott-cutting-2/",
    cta: "查看课程内容",
    tags: ["research", "global"],
    labels: ["研究/图像创作训练", "国外"],
  },
  {
    id: "focus-art-fair-human-tech",
    title: "FOCUS New York 直接把“Human–Technology Coexistence”写成主轴，艺博会开始把技术关系本身当成策展命题",
    summary:
      "FOCUS Art Fair 官方页面显示，2026 年 5 月 21 日至 24 日的纽约站以“Human–Technology Coexistence”为主题，在 Chelsea Industrial 展开。展会明确提出一部分作品将直面 generative AI 与日常生活的交织，另一部分则强调 process over product，把生成工具、自动化和创作过程一起纳入观看框架。",
    note:
      "这比单独开一个 AI 单元更进一步。它把人与技术的摩擦、依赖和协作都变成了可策展的材料，气质会更当代。",
    source: "FOCUS Art Fair",
    date: "2026-05-21",
    href: "https://www.focusartfair.net/newyork",
    cta: "查看纽约站主题",
    tags: ["trend", "global"],
    labels: ["热点/艺博会策展", "国外"],
  },
  {
    id: "figma-design-agent",
    title: "Figma 把设计代理放到画布里，界面团队的第一稿很快就会从“画出来”变成“谈出来”",
    summary:
      "Figma Blog 2026 年 5 月 20 日发布《The Figma design agent is here》，把 purpose-built 的 design agent 直接放进画布，同时继续强化 code-to-canvas 与 MCP server 的往返同步能力。对于视觉系统、交互原型和界面协作来说，这意味着更多草稿会在对话里启动，并且更快回到可编辑的设计上下文。",
    note:
      "评审节奏会提速。版本会更多，分叉会更早出现，真正拉开差距的会是团队怎样做判断、怎样保住自己的视觉秩序。",
    source: "Figma Blog",
    date: "2026-05-20",
    href: "https://www.figma.com/blog/the-figma-agent-is-here/",
    cta: "查看 Figma 更新",
    tags: ["trend", "global"],
    labels: ["热点/设计协作工具", "国外"],
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
