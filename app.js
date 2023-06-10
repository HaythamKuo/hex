const estimationCards = document.querySelector(".estimation");
const bankEFG = {
  description:
    "我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！",
  img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/avatar2.png",
  name: "黃先生",
  firm: "EFG銀行",
  num: 3,
};
const medicalXYZ = {
  description:
    "作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！",
  img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/avatar1.png",
  name: "劉小姐",
  firm: "XYZ醫療器材有限公司",
  num: 2,
};

const techABC = {
  description:
    "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！",
  img: "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/avatar3.png",
  name: "陳小姐",
  firm: "ABC科技有限公司",
  num: 1,
};
let arr = [techABC, medicalXYZ, bankEFG];

for (let ccc of arr) {
  let html = ` <figure class="esitmation-users__block">
<p>&starf; &starf; &starf; &starf; &starf;</p>
<blockquote class="estimation-users__block--quote">
 ${ccc.description}
</blockquote>
<figcaption class="estimation-users__block-info">
  <img
    class="estimation-users__block-info--img"
    src="${ccc.img}"
    alt="avatar${ccc.num}"
  />
  <div class="estimation-users__block-infos">
    <span class="estimation-users__block-infos--name">${ccc.name}</span>
    <span class="estimation-users__block-infos--company">
      ${ccc.firm}
    </span>
  </div>
</figcaption>
</figure>`;
  estimationCards.insertAdjacentHTML("afterbegin", html);
}

//render product cards
class ProductCards {
  constructor(title, img, desc, user, tag, num) {
    this.title = title;
    this.img = img;
    this.desc = desc;
    this.user = user;
    this.tag = tag;
    this.num = num;
  }
  generateHTML() {
    return `
      <div class="cards-lists--service">
        <div class="cards-lists--service-content">
          <img
            src="${this.img}"
            alt="tool${this.num}"
            class="cards-lists--service-content--image"
          />
          <div class="textOne">
            <p class="cards-lists--service-content--h3">
              ${this.title}
            </p>
            <p class="cards-lists--service-content--h4">
              ${this.desc}
            </p>
          </div>
        </div>
        <div class="cards-lists--service-author">
          <span class="">AI模型</span>
          <span>${this.user}</span>
        </div>
        <div class="cards-lists--service-tag">
          <span class="">#${this.tag}</span>
          <a href="#">
            <img
              src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/share.png"
              alt="shareicon"
            />
          </a>
        </div>
      </div>`;
  }
}
const cardEl = document.querySelector(".textTwo");

const products = [
  new ProductCards(
    "Chatbot Builder",
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool1.png",
    "建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。",
    "卡卡",
    "聊天",
    1
  ),
  new ProductCards(
    "Image Recognition Platform",
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool2.png",
    "專業的圖像識別平台，識別圖像、分類、標記等。 ",
    "杰杰",
    "影像辨識",
    2
  ),
  new ProductCards(
    "Language Translation API",
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool3.png",
    "專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。",
    "琪琪",
    "翻譯",
    3
  ),
  new ProductCards(
    "Sentiment Analysis API",
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool4.png",
    "自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。",
    "昊昊",
    "行銷",
    4
  ),
  new ProductCards(
    "Fraud Detection Platform",
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool5.png",
    "預防詐騙活動，適用於銀行、金融、電商等。",
    "卡卡",
    "客服",
    5
  ),
  new ProductCards(
    "Voice Assistant SDK",
    "https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/tool6.png",
    "通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。",
    "杰杰",
    "生產力",
    6
  ),
];
for (const product of products) {
  const html = product.generateHTML();
  cardEl.insertAdjacentHTML("afterbegin", html);
}

////////////////////////////////////////
////////////////////////////////////////
//切換按鈕
const hidden = document.querySelectorAll(".hidden");
const navTag = document.querySelector(".navBar-RWD");
const menu = document.querySelector(".menuTag");
const close = document.querySelector(".closeTag");
const simplified = document.querySelector(".simplified");

navTag.addEventListener("click", () => {
  menu.classList.toggle("none");
  close.classList.toggle("none");
  simplified.classList.toggle("none");
  hidden.forEach((e) => e.classList.toggle("none"));
});
