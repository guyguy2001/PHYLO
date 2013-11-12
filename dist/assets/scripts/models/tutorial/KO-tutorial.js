{
   "tutorial":{
      "basics":{
         "1":"기본 사항 : 규칙과 도움말",
         "2":"Phylo에서 당신의 목표는 시퀀스 블록을 좌우로 움직여 색이 일치하는 최다의 열을 만드는 것입니다. 개개의 색상 일치는 보너스를 줍니다.",
         "3":"그러나 정렬은 일치하지 않습니다. 따라서, 색의 불일치와 틈이 생기는 것은 피할 수 없으며 당신은 그에 따른 감점을 받게 됩니다. 당신의 목표은 보너스와 감점 들을 아우러 최고의 점수을 받는 것입니다. 참고: 작은 블록은 불일치를 나타냅니다.",
         "4":"색의 일치와 불일치에서 오는 보너스와 감점 점수은 미미합니다. 하지만 틈이 주는 감점은 큽니다. 작은 틈을 여러개 가지는 것보다 하나의 큰 틈을 가지는 것이 일반적으로 선호됩니다. 우선 여러개의 틈을 최소화 해보십시오.",
         "5":"당신은 왼쪽에 있는 나무(계통수)를 눈치채셨습니까? 이것은 당신에게 우선 순위로 정렬되어야하는 시퀀스들을 말해줍니다. 이것은 당신이 한 색의 일치를 다른 색의 일치보다 우선시 해야 할때 도움이 됩니다. 다른 그룹 사이의 유사성을 높이는 것보다 같은 그룹안에서 동일한 패턴을 많이 만드는 것이 더 중요합니다.",
         "6":"최종 단계에 도달하려면 레벨들을 먼저 통과해야합니다. 이러기 위해서 파 (예: 컴퓨터 점수) 를 넘는 것이 필요합니다. 당신의 점수가 파와 같거나 높을 경우, 반짝거리는 별이 우측 하단에 나타납니다. 다음 단계로 가기 위해 이 별을 클릭하십시오. 모든 시퀀스가 화면에 있을 경우 더 높은 점수를 얻으려고 시도하시고 별을 다시 눌러서 정렬을 제출하세요!",
         "7":"득점 정보는 게임 화면 상단에 있습니다. 파란색 줄은 현재 점수를 나타냅니다. 빨간색 표시는 파 (즉, 이겨야 하는 컴퓨터 점수) 를 나타내고 파란색 표시는 지금까지 당신이 얻었던 최고 점수를 표시합니다.",
         "8":"기본 정보는 게임 화면 하단에 있습니다. 거기서 게임에서의 승급과 일치, 불일치, 그리고 틈의 생성 통계를 볼 수 있습니다. 다색의 바퀴을 클릭함으로써 당신은 발견했었던 최고의 답안으로 언제나되돌릴 수 있습니다."
      },
      "scoring":{
         "1":"고급: 득점",
         "2":"계통수의 각 마디는 선조의 시퀀스를 비축하고 있습니다. 선조들은 자동으로 전산되고 파생된 모든 시퀀스들의 합의된 시퀀스를 나타냅니다. 나무의 마디끝을 가리키면 화면 하단에 해당 시퀀스가 나타납니다.",
         "3":"정렬 점수는 조상의 시퀀스와의 유사성을 추정합니다. 색상 일치는 +1점의 보너스를 가져다주고 색상 불일치는 -1 감점을 줍니다. 틈의 생성은 -4의 감점이고 개개의 틈칸은 -1의 감점을 줍니다. 또한, 극단적인 틈은 감점요인이 되지 않고 빈 열은 무시됩니다. 여기서 코끼리와 조상 사이의 정렬 점수는 -3 입니다. (4 일치, 1 불일치, 1블록의 틈 3개)",
         "4":"당신의 점수는 직계 조상과 비교한 시퀀스 정렬 점수 합입니다. 여기서 점수는 조상 B와 인간/침팬지 사이의 비교, 조상C와 개/박쥐 사이의 비교, 그리고 조상A와 B/C 사이 비교의 합계입니다."

      },
      "example":{
         "1":"준비 방법: 예시",
         "2":"당신은 (인간과 침팬지) 두 개의 시퀀스들과 시작합니다. 모든 걸 좌측으로 밀고 조상을 확인하세요. 두 시퀀스와 조상 시퀀스의 정렬 결과는 인간이 일치가 13개, 침팬지가 일치 5 개와 불일치 1개로 나왔습니다. 뒤에 있는 간격은 무시되었습니다. 따라서 당신의 합계는 총18 × (+1) + 1 × (‐1) = 17 입니다. 당신은 파를 넘었습니다. 별을 클릭하시고 다음 단계로 이동하세요.",
         "3":"새로운(개와 박쥐) 두 개의 시퀀스들이 나타납니다. 다시 좌측으로 모두 밀어주세요. 당신의 점수는 9점 입니다. 개와 조상 사이에서는 일치 18개 (지나친 틈은 다시 무시됩니다), 박쥐와 조상 사이에서는 일치 5개와 불일치  14개가 있습니다. (따라서 합계는 총23 × (+1) + 14 × (‐1) = 9입니다.) 당신은 더 나은 점수를 받을 수 있습니다. 어떻게 해야 할까요?",
         "4":"아래 시퀀스를 일곱 번째 벽돌로부터1블록 우측으로 당겨줍니다. 당신은 추가적인 틈을 만들지만 이로 인해 많은 일치를 만들게 되었습니다. 알아차리셨습니까? 조상이 변경되었습니다. 이제 당신은 개와는 일치 18개 (뒤따르는 틈은 무시됩니다) 그리고 박쥐와는 일치 12개, 불일치  7개, 그리고 1블록의 틈을 만들게 됩니다. 당신의 점수는30 × (+1) + 7 × (‐1) + ( 1 × ‐4 ) = 19가 되었습니다. 다음 단계로 넘어갑니다.",
         "5":"자, 이제 이전 정렬들을 조합해야합니다. 초기 점수는 41 입니다. 이것은 파 (30)을 넘지만 이것보다 더 나은 점수를 얻을 수 있습니다… 직관적으로 우리는(위에 있는 두 개의 시퀀스의) 첫번째 블록과 (아래에 있는 두 시퀀스의) 두번째 블록를 더 잘 정렬할 수 있습니다. 어떻게 해야합니까?",
         "6":"첫 번째 블록을 우측으로 4칸 이동합니다. 이 변화는 두개의 완벽한 녹색 열을 만듭니다. 또한 이것은 인간 시퀀스와 개와 박쥐의 시퀀스들 사이에서 유사성을 향상시킵니다. 당신의 총 점수는 이제 57점 입니다. 어떻게 계산되었습니까?",
         "7":"인간과 침팬지 조상을 살펴보겠습니다. 인간의 정렬 점수는 11점 (일치 12개와 불일치 1개)이고, 침팬지 점수는 6점 (일치 6개) 입니다. 따라서 조상 마디에서의 점수는11 + 6 = 17입니다.",
         "8":"개와 박쥐의 조상도 앞과 같이 해줍니다. 개와의 정렬 점수는 14점 (일치 16개, 불일치2개)이 되고 박쥐와는 3점 (일치 12개, 불일치 5개, 1칸의 틈 1개)이 됩니다. 따라서 조상 마디에서의 점수는14 + 3 = 17이 됩니다.",
         "9":"점수를 완료하기위해서 나무 루트에 있는 공통 조상 사이와 인간/침팬지 조상과 개/박쥐 조상의 정렬 점수를 계산해야합니다. 먼저 공통 조상과 인간/침팬지 조상의 정렬 점수를 계산합니다. 일치 9개와 불일치 4개(시작과 끝에 있는 틈은 무시됩니다)가 있습니다. 점수는9 × (+1) + 4 × (‐1) = 5 입니다.",
         "10":"그런 다음, 개/박쥐의 조상과 공통 조상의 정렬 점수를 계산합니다. 18개 일치가 있으며 점수는 18입니다. 따라서, 근원과 연관된 점수는5 + 18 = 23 입니다.",
         "11":"귀하의 최종 점수는 앞서 계산된 모든 개별 점수의 합입니다. 여기서 인간과 침팬지의 정렬 점수는 17점, 개와 박쥐의 정렬 점수는 17점, 그리고 조상들과 근원의 정렬 점수는 23점입니다. 따라서, 총 점수는 57점 입니다.",
         "12":"당신은 가장 높은 점수를 얻으셨습니다. 별을 클릭하고 퍼즐을 제출하세요. 모두 마치셨습니다! 이 퍼즐의 레벨 ID는 0입니다. 이제 게임을 하기 위한 모든 준비를 마쳤습니다. "

      },
      "misc":{
         "1":"일치",
         "2":"불일치",
         "3":"틈",
         "4":"계통수"

      }

   }
}
