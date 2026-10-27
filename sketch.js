let spriteSheet; // 宣告角色精靈圖變數
let characterX; // 宣告角色的水平位置
let frameWidth; // 宣告每張動畫影格的寬度
const frameTotal = 25; // 設定精靈圖中的影格總數
const moveSpeed = 4; // 設定角色每幀向左移動的速度

function preload() { // 在畫面建立前載入角色精靈圖
  spriteSheet = loadImage("1/all3.png"); // 載入 1 資料夾內的角色圖片
} // 結束圖片載入函式

function setup() { // 設定畫布與角色初始狀態
  createCanvas(windowWidth, windowHeight); // 建立符合視窗大小的畫布
  frameWidth = spriteSheet.width / frameTotal; // 依照總影格數計算單格寬度
  characterX = width / 2; // 將角色初始位置設在畫面中央
} // 結束初始設定函式

function draw() { // 每一幀更新背景、動畫與角色位置
  background("#23b5d3"); // 使用指定的藍綠色作為背景
  const characterHeight = min(height * 0.5, width * 0.4 * (spriteSheet.height / frameWidth)); // 計算符合視窗比例的角色高度
  const characterWidth = characterHeight * (frameWidth / spriteSheet.height); // 依照影格比例計算角色寬度
  const frameIndex = floor(frameCount / 6) % frameTotal; // 每六幀切換一次動畫影格
  const sourceX = frameIndex * frameWidth; // 計算目前影格在精靈圖中的水平位置

  if (keyIsDown(LEFT_ARROW)) { // 檢查是否按住鍵盤左方向鍵
    characterX = max(characterWidth / 2, characterX - moveSpeed); // 按住左鍵時向左移動並限制畫布邊界
  } // 結束左方向鍵控制

  image(spriteSheet, characterX - characterWidth / 2, height / 2 - characterHeight / 2, characterWidth, characterHeight, sourceX, 0, frameWidth, spriteSheet.height); // 繪製目前的角色動畫影格
} // 結束每幀繪製函式

function windowResized() { // 視窗尺寸改變時重新調整畫布
  resizeCanvas(windowWidth, windowHeight); // 將畫布調整為新的視窗大小
  const characterHeight = min(height * 0.5, width * 0.4 * (spriteSheet.height / frameWidth)); // 依新視窗尺寸計算角色高度
  const characterWidth = characterHeight * (frameWidth / spriteSheet.height); // 依新視窗尺寸計算角色寬度
  characterX = constrain(characterX, characterWidth / 2, width - characterWidth / 2); // 依角色寬度限制水平位置
} // 結束視窗尺寸調整函式
