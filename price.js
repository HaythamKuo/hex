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
//////////////////////////////////////
//////////////////////////////////////
//PRICE
const cardgroup = document.querySelector(".cardGroup");

//prettier-ignore
const cards = [
  {user:'琪琪', liOne:'初級', liTwo:'速度最快',},
  {user:'昊昊', liOne:'中級', liTwo:'',},
  {user:'卡卡', liOne:'高級', liTwo:'',},
  {user:'杰杰', liOne:'最高級', liTwo:'資訊最完善'}
];
for (const card of cards) {
  let html = `<div class="cardGroup--card">
  <div class="cardPart">
    <div class="partOne">
      <span>${card.user}</span>
      <ul>
        <li>${card.liOne}</li>
        <li>${card.liTwo}</li>
      </ul>
    </div>
    <div class="partTwo">
      <span>NT$5／1k tokens</span>

      <span>
        開始使用
        <img
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/call%20made.png"
          alt="callmade"
        />
      </span>
    </div>
  </div>
</div>`;
  cardgroup.insertAdjacentHTML("afterbegin", html);
}

const notice = document.querySelector(".rule-notice");

//prettier-ignore
const noticeList = [
  {title:'守法', desc:'請遵守相關的法規和政策，不得進行任何違法違規的活動。'},
  {title:'資訊安全', desc:'請務必保護好自己的帳號和密碼，不得將其透露給他人。'},
  {title:'守密', desc:'需對使用過程中產生的數據負責，不得擅自泄露數據。'},
]

for (const list of noticeList) {
  const html = ` <div class="rule-notice__des">
  <h3>${list.title}</h3>
  <p>${list.desc}</p>
</div>`;
  notice.insertAdjacentHTML("afterbegin", html);
}

////////////////////////////
////////////////////////////
///////////////////////////////////
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
      <div  class="cards-lists--service-content--image">
        <img
        src="${this.img}"
        alt="tool${this.num}"
      />
      </div>
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

/////////////////////
/////////////////////
/////////////////////
//問題與討論
const questions = document.querySelector(".question-refind");

const queLists = [
  {
    title: "  如何選擇適合的 AI 模型？",
    desc: "選擇適合的 AI 模型需要考慮您的應用場景、需要解決的問題、可用的資源以及預算等因素。可以通過對比不同模型的性能、準確率、速度等指標，以及與其他用戶的評價與反饋，來選擇最適合的模型。",
  },
  {
    title: "租用模型的費用是如何計算的？",
    desc: "租用模型的費用通常會根據模型的性能和使用時間等因素進行計算。具體而言，模型的性能可以根據其精度、速度、暫用資源等指標來評估；而使用時間可以根據租用時間的長短來計算，通常會按小時、天或月來計算。綜合考慮這些因素，系統會自動算出對應的租用費用。",
  },
  {
    title: "如何進行付款？",
    desc: "付款方式可以通過網站上提供的宴上支付平台進行支付。具體而言，您可以選擇信用卡、銀行轉帳電子錢包等不同的支付方式進行支付。在支付前，您需要先登錄網站並選擇適合的租用方案，系統會自動計算出對應的租用欸用和支付金額，然後您可以選擇適合的支付方式進行支付。完成支付後，系統會自動向您提供相應的服務。",
  },
  {
    title: "租用模型的期限是多久？",
    desc: "租用模型的期限可以根據您的需求進行設置，通常可以選擇幾個小時、幾天或幾個月等不同的時間段。",
  },
  {
    title: "如果在使用的過程中遇到問題，應該怎麼處理？",
    desc: "如果在使用過程中遇到問題，您可以聯繫惡扶或技術支持人員進行諮詢或報告問題。您也可以。您也可以通過網站上的幫助中心或社區論壇尋找相關的解決方案和回答。",
  },
];
for (const list of queLists) {
  const html = `<div class="question-type" >
  <img
    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/add.png"
    alt="add"
    class="question-type--img"
  />
  <img
    src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/2023web-camp/icons/remove.png"
    alt="remove"
    class="question-type--img none"
  />
  <div class="question-type__des">
    <span class="question-type__des--title"
      >${list.title}</span
    >
    <p class="question-type__des--content none">
      ${list.desc}
    </p>
  </div>
</div>`;
  questions.insertAdjacentHTML("afterbegin", html);
}
questions.addEventListener("click", (e) => {
  const target = e.target.closest(".question-type");

  if (target) {
    const img = target.querySelectorAll(".question-type--img");
    const content = target.querySelector(".question-type__des--content");

    img.forEach((e) => {
      e.classList.toggle("none");
    });

    content.classList.toggle("none");
  }
});

/////////////////////
/////////////////////
/////////////////////
//監視動畫
const imgContainer = document.querySelector(".header__imgs");
const imgs = document.querySelector(".header__imgs--img");

const imgObs = new IntersectionObserver((entries) => {
  entries.forEach((e) =>
    e.isIntersecting
      ? (imgs.style.animationPlayState = "running")
      : (imgs.style.animationPlayState = "paused")
  );
});
imgObs.observe(imgContainer);
