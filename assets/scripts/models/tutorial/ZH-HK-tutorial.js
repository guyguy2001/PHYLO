{
   "tutorial":{
      "basics":{
         "1":"基礎：規則與提示",
         "2":"在Phylo遊戲中，你的目標是水準移動序列中的方塊，使得相同顏色的最大可能的在一起（匹配）。每一個匹配都能為您帶來加分獎勵。",
         "3":"然而，這些序列是不一樣的。因此，顏色的錯配和所照成的插空是不可避免的，並且您會被罰分。您的挑戰內容就是在得分與罰分之間尋找一個最好的權衡點。注：錯配區域將以小方塊突出顯示。",
         "4":"顏色的匹配與錯配對於分數的得失影響很小。但是插空的形成卻會嚴重影響得分！而通常一個長插空比幾個小插空更好。所以優先考慮的是儘量減小插空的數量。",
         "5":"您有注意到左邊的發生樹嗎？它會告訴您應該優先排列哪些序列。這個在您遇到必須在一個與另一個顏色之間做出選擇時顯得尤為有用。更重要的是保留小組裡模式一致的序列而非增加在不同的組之間的相似性。",
         "6":"T為了進入最終階段，您需要不斷地通過水準測試。這要求你要高於一個設定的分數值（例如電腦的內設分數）。當您的分數等於或大於所設定的分數值，在右下方的角落會出現一個閃亮的星星。點擊它進入下一個階段。當所有的序列都在版面上，盡可能提高分數，並且再次點擊星星提交你的結果。",
         "7":"在遊戲版面的頂部會顯示您的得分資訊。藍色的條塊表示為您當前的得分。而紅色的標誌物則表示為所設定的分數值（例如，電腦內部設定要求您超過的分數值），藍色的標誌物則表示您目前為止所獲得的最高分。",
         "8":"基本資訊可在您遊戲版面的底部中看到。那裡有您在遊戲裡的前進程度（例如已進入的階段）以及顏色匹配、錯配和縫隙的數量。你可以通過點擊彩色的轉輪隨時返回你所找到的最好的結果處。"

      },
      "scoring":{
         "1":"高級：得分",
         "2":"系統進化樹上的每一個節點都儲存著一個祖先序列。祖先是自動計算的而且代表它所有衍生序列的一致性。拖動滑鼠箭頭指著樹上任意一個節點即可顯示與底部的網格相對應的序列。",
         "3":"這個比對得分可以估計一個序列和它的祖先序列之間的相似性。一個顏色匹配可得1分，而錯配扣1分。造成一個插空扣4分且它每多延伸一個單位就多扣1分。然而，在兩端的插空是不扣分的且可忽略空的縱列。這裡，大象和它的祖先比對得分是-3（4個匹配，1個錯配，1個長度為3的插空）。",
         "4":"您的得分是每一個序列和它們最接近的祖先序列的比對得分之總和。這裡，分數指的是在B的祖先與人類和黑猩猩之間，C祖先與狗和蝙蝠之間，以及A祖先與B和C之間的比較所得出之總和。"

      },
      "example":{
         "1":"準備工作：一個例子",
         "2":"您開始於兩個序列（人類和黑猩猩）。把所有方格推到左邊並檢查它們的祖先。用您的兩個序列去排列這個祖先會給您的第一個序列（人類）獲得13個匹配，以及第二個序列（黑猩猩）5個匹配和一個錯配。後面的插空可被忽略。因此您的總分是18 × (+1) + 1 × (‐1) = 17。您已高於設定的分數值。點擊星星並進入下一階段！",
         "3":"兩個新序列（狗和蝙蝠）出現了。再次將它們全部推到左方。您的得分是9。在狗和它的祖先的序列之間有18個匹配（在兩端的插空再次被忽略），在蝙蝠和它的祖先的序列之間有5個匹配和14個錯配（因此總共為23 × (+1) + 14 × (‐1) = 9）。您可以做得更好的。應該如何做呢？",
         "4":"從第七個磚塊開始，將底部的序列以一個單位轉移到右邊。您會造成1個額外的插空但同時您也創造出很多匹配。您注意到了嗎？祖先改變了。您現在有狗的序列的18個匹配（後面的插空被忽略），蝙蝠序列的12個匹配、7個錯配和1個長度為1的插空。您的分數是30 × (+1) + 7 × (‐1) + ( 1 × ‐4 ) = 19。請進入下一階段。",
         "5":"現在，您需要收集您之前的比對序列。您的初始成績是41分，比所設定的分數值高（30），但您可以做得更好...直觀上來說，我們想要給第一個阻塊（那兩個頂部的序列）和第二格阻塊（那兩個更低的序列）找到一個更好的比對序列。應該如何做呢？",
         "6":"將第一個阻塊以四個單位轉移到右邊。這個移動創造出兩個完全綠色的柱形物。它也提高了人類和狗以及蝙蝠的序列之間的相似性。您現在的總得分為57。它是怎麼計算得出的呢？",
         "7":"請看人類和黑猩猩的祖先。它與人類序列的比對得分是11（12個匹配和1個錯配），而與黑猩猩序列則是6（6個匹配）。因此在這個祖先節點的得分是11 + 6 = 17。",
         "8":"我們給狗和蝙蝠的祖先所做的工作是一樣的。它與狗的序列的比對分數是14（16個匹配和2個錯配），與蝙蝠的序列的是3（12個匹配，5個錯配，1個長度為1的插空）。因此在這個祖先節點的得分是14 + 3 = 17。",
         "9":"為了完成您的得分，您需要用發生樹根部的祖先來計算人類/黑猩猩的祖先和狗/蝙蝠的祖先的比對分數。首先，我們用全球的祖先來計算人類/黑猩猩的祖先之間的比對得分。這裡有9個匹配，4個錯配（在始端和末端的插空均被忽略）。計分為9 × (+1) + 4 × (‐1) = 5。",
         "10":"然後，我們用全球的祖先來計算狗/蝙蝠的祖先的比對得分。這裡有18個匹配且得分為18.因此，與根部相關的分數是 5 + 18 = 23。",
         "11":"您的最終得分是所有之前分別計算的分數的總和。這裡，人類和黑猩猩的比對分數是17，狗和蝙蝠的比對分數是17，它們的祖先和發生樹根部的祖先的比對得分是23。因此，您的總分為57.",
         "12":"您獲得了最高分。點擊星星並提交您的拼圖。您已經完成了！這個拼圖的水準等級號是0。現在，您可以開始進入遊戲了！"

      },
      "misc":{
         "1":"匹配",
         "2":"錯配",
         "3":"插空",
         "4":"系統進化樹"

      }

   }
}
