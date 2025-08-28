// 复制兼容     
async function writeToClipboard(b) {
  // 检测是否支持 navigator.clipboard.writeText
  if (navigator.clipboard && window.isSecureContext) {
    // 使用现代 Clipboard API
    try {
      await navigator.clipboard.writeText(b);
      console.log('内容已复制到剪贴板');
      return; // 成功时返回
    } catch (error) {
      console.error('复制失败:', error);
      throw error; // 失败时抛出错误
    }
  } else {
    // 使用传统方法作为降级方案
    return new Promise((resolve, reject) => {
      try {
        const textArea = document.createElement("textarea");
        textArea.value = b;
        
        // 隐藏元素
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        textArea.style.opacity = "0";
        textArea.style.pointerEvents = "none";
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        // 执行复制命令
        const successful = document.execCommand('copy');
        
        // 清理临时元素
        document.body.removeChild(textArea);
        
        if (successful) {
          console.log('内容已复制到剪贴板');
          resolve(); // 成功时 resolve
        } else {
          console.error('复制失败');
          reject(new Error('复制命令执行失败'));
        }
      } catch (error) {
        console.error('复制失败:', error);
        // 确保清理元素
        if (document.body.contains(textArea)) {
          document.body.removeChild(textArea);
        }
        reject(error); // 失败时 reject
      }
    });
  }
}

     
// 修改样式 添加事件
(function () {
   // 定义一个标识符用于存储定时器ID
   let intervalId;
   
   // 添加计数器来跟踪连续未找到元素的次数
   let notFoundCount = 0;
   // 设置最大连续未找到次数
   const maxNotFoundCount = 100;

   // 定义尝试捕获元素的函数
   function tryCaptureElement() {
     const ele左侧 = document.querySelector(
       "div.css-1tgsmcn>div.chakra-container"
     );
     if (ele左侧) {
       // 如果找到了元素，则设置宽度并停止定时器
       ele左侧.style.width = "14em";
       console.log("已找到左侧板块 div 元素，并设置了宽度 14em");

       // 执行右侧隐显函数
       fn左侧隐显(ele左侧);

       clearInterval(intervalId); // 停止定时器
     } else {
       // 增加未找到计数
       notFoundCount++;
       console.log("未找到左侧板块的 div 元素");
       
       // 如果连续未找到次数达到100次，则停止查找
       if (notFoundCount >= maxNotFoundCount) {
         console.log("连续100次(20秒)没有找到左侧板块，停止查找");
         console.log("div.css-1tgsmcn>div.chakra-container");
         clearInterval(intervalId); // 停止定时器
       }
     }
   }

   // 定义左侧面板切换显示/隐藏的函数
   function fn左侧隐显(ele左侧) {
     console.log("设置左侧面板显隐");
     // 查找需要添加点击事件的元素
     const ele左下角 = document.querySelector("div#root>div>div:nth-child(3)>div");
     
     if (ele左下角 || ele左侧) {

       console.log("\n已找到 左侧板块 和 左下角 元素");
       
       // 设置鼠标悬浮时变成手形
       ele左下角.style.cursor = "pointer";

       // 添加点击事件监听器
       ele左下角.addEventListener('click', function() {
         // 检查当前的display状态
         const currentDisplay = window.getComputedStyle(ele左侧).display;
         
         // 切换显示/隐藏状态
         if (currentDisplay === 'none') {
           ele左侧.style.display = ''; // 恢复默认显示
           console.log("显示左侧面板");
         } else {
           ele左侧.style.display = 'none'; // 隐藏元素
           console.log("隐藏左侧面板");
         }
       });
     } else {
       console.log("未找到左侧板块 和 左下角 元素");
     }
   }

   // 设置定时器，每0.2秒（即200毫秒）调用一次 tryCaptureElement 函数
   intervalId = setInterval(tryCaptureElement, 200);

   // 确保在页面加载完成后开始尝试捕获元素
   window.addEventListener("load", function () {
     tryCaptureElement(); // 页面加载完成后立即尝试一次
   });
 })();




