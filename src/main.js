import "./styles.css";

const signals = [
  {
    id: "gafa-immersive-design-future",
    title: "广州美院把沉浸式设计拉回文化体验现场，AI 不再只负责炫技，也开始负责叙事温度",
    summary:
      "广州美术学院于 2026 年 5 月 12 日推出讲座“沉浸式设计未来：人工智能、创意技术与文化体验的未来”，把 AI、沉浸式媒体、数字遗产、空间体验和公众参与放进同一条问题链，讨论美术馆、设计师与研究者如何共同搭建更智能、更包容的文化场景。",
    note:
      "这条线索提醒我们，沉浸式设计真正重要的并不是设备清单，而是谁来组织感知，谁来编排参与，谁来决定空间如何回应观众。对策展人和空间创作者来说，这已经是一门新型现场写作。",
    source: "广州美术学院",
    date: "2026-05-12",
    href: "https://www.gzarts.edu.cn/info/4240/175634.htm",
    cta: "查看讲座信息",
    tags: ["research", "cn"],
    labels: ["研究/沉浸式设计", "国内"],
  },
  {
    id: "zstu-visual-design-symposium",
    title: "浙江理工把“设计师与 AI 的协作边界”摆上台面，视觉教育开始练习新的判断力",
    summary:
      "浙江理工大学艺术与设计学院 2026 年 5 月 11 日发布回顾，显示其 5 月 9 日举行的全国视觉设计学术研讨会围绕“文化新质”与“智性传达”展开，主旨演讲与圆桌讨论直接触及技术与艺术的新关系、审美失序、设计教育转型，以及设计师与 AI 的协作边界。",
    note:
      "视觉行业接下来最稀缺的，也许不是会不会用模型，而是能不能在高效率生成里保住自己的选择能力。谁能把主体性、伦理感和审美控制练成基本功，谁就不容易被工具语言反向塑形。",
    source: "浙江理工大学艺术与设计学院",
    date: "2026-05-11",
    href: "https://ad.zstu.edu.cn/info/1079/3092.htm",
    cta: "查看研讨会回顾",
    tags: ["research", "cn"],
    labels: ["研究/视觉设计方法", "国内"],
  },
  {
    id: "siva-fashion-week-yiqi",
    title: "SIVA 把智能材质和 3D 打印穿上身，未来设计学院这场秀更像一份可行中的服装原型库",
    summary:
      "上海视觉艺术学院于 2026 年 5 月 11 日预告，“衣启”主题作品将于 5 月 17 日在北京 798 中国国际大学生时装周亮相。近 80 套学生作品把高定数码印花、3D 打印塑形、智能材质拼接与非遗织造、科技面料放在同一条美学链路里，直接把未来服装的技术语言穿给观众看。",
    note:
      "时装行业在这里释放了一个很明确的信号。材料实验、数字生产和文化叙事不再分批出现，它们被打包进同一场发布。对服装设计师和展陈团队来说，秀场越来越像测试创作工作流的前线。",
    source: "上海视觉艺术学院",
    date: "2026-05-17",
    href: "https://info.siva.edu.cn/2026/0511/c892a31946/page.htm",
    cta: "查看秀展预告",
    tags: ["trend", "cn"],
    labels: ["热点/未来时装秀", "国内"],
  },
  {
    id: "beijing-ultra-hd-vidu",
    title: "北京把 XR、机器人机位和一句话出片摆进同一展区，影像生产线开始被公众直接看见",
    summary:
      "北京市广播电视局 2026 年 5 月 9 日介绍，其在北京科博会上主办的“超高清视听科技展”集中呈现了 XR 大空间体验、机器人摄像师和 Vidu Q3 等 AI 视频工具。尤其是 Vidu Q3 把角色一致性、场景连续性、特效、音效和广告片生成打包展示，让短剧、漫剧、广告和影视制作的工作流被直接端到公众面前。",
    note:
      "对影像创作者来说，这类展会价值不在于看新功能列表，而在于确认制作逻辑真的变了。前期的概念组织、中期的视效控制、后期的声音氛围，正越来越像一次连续编排，而不是几个零散软件的拼接。",
    source: "北京市广播电视局",
    date: "2026-05-09",
    href: "https://gdj.beijing.gov.cn/zwxx/gzbg1/202605/t20260509_4643116.html",
    cta: "查看展会亮点",
    tags: ["trend", "cn"],
    labels: ["热点/视听创作工具", "国内"],
  },
  {
    id: "osu-ai-generative-design",
    title: "俄亥俄州立把 AI 课讲成一门视觉文化课，作者性和合成图像时代的判断开始一起训练",
    summary:
      "俄亥俄州立大学设计系夏季课程“AI and Generative Design”将在 2026 年 5 月 11 日至 6 月 18 日开课。课程不只教模型怎么用，而是把生成式设计方法、视觉文化变化、作者性与真实性问题一起纳入工作室训练，让学生把 AI 当作一种可被塑形的创作材料。",
    note:
      "这类课程说明一个变化已经发生了。未来设计教育不会把 AI 归到单独软件教学里，而会把它放进图像史、判断力和项目方法一起练。对年轻创作者而言，这比学会几个提示词更关键。",
    source: "The Ohio State University Department of Design",
    date: "2026-05-11",
    href: "https://design.osu.edu/news/su26-course-design-5193-ai-and-generative-design",
    cta: "查看课程介绍",
    tags: ["research", "global"],
    labels: ["研究/生成设计教育", "国外"],
  },
  {
    id: "nyu-ai-visual-storytelling",
    title: "NYU Tisch 把 AI 写进完整影像流程，分镜、世界观、声音和后期终于被当成一件事来教",
    summary:
      "NYU Tisch Martin Scorsese Virtual Production Center 将于 2026 年 5 月 19 日至 6 月 25 日开设“AI for Visual Storytelling”工作坊。课程涵盖脚本、分镜、视觉资产、后期交付、声音设计与伦理许可问题，明确把 AI 放进从概念发展到成片交付的整条链路里。",
    note:
      "这会影响越来越多的独立导演、广告团队和沉浸叙事作者。过去大家常把 AI 理解成前期灵感辅助，现在它被直接写进分镜、世界观、色彩和声音的协同里，真正成为项目管理的一部分。",
    source: "NYU Tisch Martin Scorsese Virtual Production Center",
    date: "2026-05-19",
    href: "https://tisch.nyu.edu/virtual-production/professional-trainings-and-workshops.html",
    cta: "查看工作坊安排",
    tags: ["research", "global"],
    labels: ["研究/影像工作流教育", "国外"],
  },
  {
    id: "adobe-firefly-video-stack",
    title: "Adobe 继续把视频流程往一个入口里收，创作者越来越像在调度一整套协作引擎",
    summary:
      "Adobe 于 2026 年 4 月 15 日发布新一轮视频能力更新，把 Firefly 视频编辑、Premiere 色彩工作流和 Frame.io Drive 一起推进，继续把生成、剪辑、调色、素材调用和团队协作压缩进一个更连续的创作入口。",
    note:
      "这不是一个单点功能新闻，而是一次工作方式迁移。影像团队以后比拼的，很可能不只是镜头美感，也是谁更会安排模型、素材、时间线和协作节奏，让创意判断少一点断裂，多一点连续性。",
    source: "Adobe Blog",
    date: "2026-04-15",
    href: "https://blog.adobe.com/en/publish/2026/04/15/adobe-extends-leadership-video-unleashing-new-ai-powered-creation-firefly-reinventing-color-editors-in-premiere",
    cta: "查看更新详情",
    tags: ["trend", "global"],
    labels: ["热点/视频创作者工具", "国外"],
  },
  {
    id: "brooklyn-iris-van-herpen",
    title: "Iris van Herpen 在布鲁克林开幕，未来感再次证明自己来自材质、身体和科学想象的联合作曲",
    summary:
      "Brooklyn Museum 官网显示，《Iris van Herpen: Sculpting the Senses》已于 2026 年 5 月 16 日开幕。展览把 140 余件高定作品与当代设计、自然史标本、科学想象和空间叙事并排陈列，让时装、材料研究与感知体验在同一层楼里相互照亮。",
    note:
      "对策展、舞台视觉和品牌空间来说，这种展览很有启发。真正有说服力的未来感，往往不是软件界面，而是材质如何受光、身体如何穿行、科学语言如何被翻译成感官经验。技术感需要被展示设计重新消化一次。",
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
