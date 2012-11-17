(function() {
	function g() {};
	g.prototype.lang = [{
	"info": {
		"lang": "Portuguese (BR)",
		"author": "Gustavo Hime",
	},
	"header": {
		"field 1": "Jogar",
		"field 2": "Tutorial",
		"field 3": "Sobre",
		"field 4": "Créditos",
		"field 5": "Ranking",
		"field 6": "Live ranking",
		"field 7": "Recordes",
		"field 8": "Resultados",
		"field 9": "Votlar",
		"field 10": "Um framework computacional humano para genômica comparativa",
		"field 11": "Celular",
		"field 12": "Clássico",
		"field 13": "Quer contribuir? Clique aqui",
		"field 14": "Retornar do modo para celular",
	},
	"body": {
		"play": {
			"gameselect": {
				"login": {
					"field 1": "Login como visitante",
					"field 2": "Login",
					"field 3": "Cadastrar-se",
					"field 4": "Ou simplesmente faça login usando",
					"field 5": "logout",
					"field 6": "Favor fazer login ou registrar-se para que possamos agregar sua contribuição para a ciência",
					"field 7": "Usuário",
					"field 8": "Senha",
					"field 9": "Email (opcional)",
					"field 10": "Confirmar",
					"field 11": "Desafie seus amigos, compartilhe alinhamentos, e mais!",
					"field 12": "Conectar ao Phylo usando Facebook",
					"field 13": "Usuário não logado. jogando como visitante.",
					"field 14": "Bem vindo ***",
					"field 15": "Você agora está deslogado",
					"field 16": "Could not login: Wrong username/password.",
					"field 17": "Logout",
					"field 18": "Cadastro",
					"field 19": "Bem vindo de volta! Você não é ***?",
				},
			"levelselect": {
				"header": "Selecionar nível. Escolha um nível por dificuldade, ID ou doença associada",
				"random": {
					"field 1": "Selecione o número de seqüências.",
					"field 2": "Aleatório",
					"field 3": "Fácil - Difícil",
				},
				"level id": {
					"field 1": "Entre a ID do nível que deseja jogar",
					"field 2": "ID do nível",
					"field 3": "Entre a ID do nível",
					"field 4": "Enviar",
				},
				"disease": {
					"field 1": "Selecione uma doença para começar um nível associado a ela",
					"field 2": "Doença",
					"field 3": "SANGUE E SISTEMA IMUNOLÓGICO",
					"field 4": "OSSO E PELE",
					"field 5": "CÉREBRO E SISTEMA NERVOSO",
					"field 6": "CÂNCER",
					"field 7": "SISTEMA DIGESTIVO",
					"field 8": "CORAÇÃO E SISTEMA CIRCULATÓRIO",
					"field 9": "DISTÚRBIOS METABÓLICAS",
					"field 10": "MÚSCULOS",
					"field 11": "SISTEMA REPRODUTIVO",
					"field 12": "SISTEMA RESPIRATÓRIO",
					"field 13": "SISTEMA SENSORIAL",
				},
			},
			"short tutorial": {
				"field 1": "Mova os quadrados para a esquerda e para a direita. Tente emparelhar verticalmente as cores, evitando lacunas. Dê um double-click e arraste para selecionar vários blocos.",
				"field 2": "Continuar",
				"field 3": "Cheque aqui para ver como está indo. Pontuaçãoes vermelhas significam que você ainda pode melhorar aquele ramo!",
				"field 4": "Olhe aqui para ver a pontuação mínima. Esta é a pontuação mínima que você precisa para passar de fase. Clique na estrela dourada quando o tiver atingido!",
				"field 5": "Estou pronto!",
				"field 6": "Recomenda-se vivamente que você complete o tutorial. Mas clique de novo se insistir.",
			},
			"video tutorial": {
				"field 1": "Aprenda o básico sobre Phylo",
			},
			"game board": {
				"field 1": "Pontuação",
				"field 2": "Mínimo",
				"field 3": "Fase",
				"field 4": "Melhor Pontuação",
				"field 5": "Nível",
				"field 6": "Dificuldade",
				"field 7": "Com música - Sem música - mudo",
				"field 8": "Stats",
				"field 9": "Concordâncias",
				"field 10": "Discordâncias",
				"field 11": "Lacunas",
				"field 12": "Extensão de lacunas",
				"field 13": "Pontuar agora",
			},
			"end of game": {
				"field 1": "Obrigado",
				"field 2": "Nós apreciamos sua contribuição à ciência. Você sabia:",
				"field 3": "Parabéns! Você completou a última fase, e nós enviamos seu alinhamento desta sessão.",
				"field 4": "Infelizmente, seu tempo acabou antes de chegar à última fase, e seu alinhamento desta sessão não foi enviado.",
				"field 5": "Você jogou o nível ***. Guarde este ID se desejar jogar este nível novamente mais tarde!! O DNA neste nível está associado a:",
				"field 6": "Este nível foi completado *** vezes. Usuários falharam em completar este nível *** vezes.",
				"field 7": "A melhor pontuação para este nível é: ***",
				"field 8": "A pontuação média para este nível é: ***",
				"field 9": "*** detém o recorde para este nível.",
				"field 10": "Até o momento, *** usuários submeteram *** alinhamentos para *** níveis diferentes.",
				"field 11": "Novo jogo",
				"field 12": "Jogar de novo",
				"field 13": "Compartilhar no Facebook",
				"field 14": "Desafiar um amigo",
				"field 15": "Menu",
				"field 16": "Clique na estrela novamente para enviar sua pontuação agora, ou continue jogando para tentar atingir uma pontuação melhor ainda!",
			},
		},
		"tutorial": {
			"field 1": "Em Phylo, seu objetivo é mover seqüências de blocos horizontalmente de forma a criar um número máximo de colunas de cores semelhantes. Cada par de quadrados de uma mesma cor (concordância) numa coluna vale um bônus.",
			"field 2": "Entretanto, as seqüências não são idênticas. Logo, cores diferentes numa coluna (discordância) e lacunas são inevitáveis, e você é penalizado por elas.",
			"field 3": "Seu desafio é encontrar o alinhamento que dá a maior pontuação na soma de bônus (positivos) e penalidades (negativas).",
			"field 4": "Bônus e penalidades para concordâncias e discordâncias são pequenos. Mas o custo para lacunas é grande! Normalmente, é preferível ter uma lacuna grande em vez de várias pequenas. Tente primeiro minimizar o número de lacunas.",
			"field 5": "Você notou a árvore à esquerda? Ela diz que seqüências devem ser alinhadas prioritáriamente. Isto é importante quando você tiver que escolher entre que pares de linhas alinhar uma concordância. É mais importante criar alinhamentos próximos entre seqüências de um mesmo grupo filogênico do que tentar aumentar a similaridade entre classificações mais afastadas.",
			"field 6": "Para passar as fases de um nível, você precisa atingir a pontuação mínima, ou seja, o valor dado pelo computador. Quando sua pontuação é maior ou igual a este mínimo, a estrela dourada aparece no canto inferior direito. Clique nela para iniciar a fase seguinte.",
			"field 7": "Quando todas as seqüências estiver na tela, tente atingir a pontuação mais alta possível e envie seu resultado clicando na estrela novamente!",
			"field 8": "concordância",
			"field 9": "discordância",
			"field 10": "lacuna",
			"field 11": "árvore filogênica",
		},
		"about": {
			"field 1":"Do que trata-se Phylo?",
			"field 2":"Embora possa parecer um simples jogo, Phylo é na verdade um sistema para arregimentar o poder computacional da humanidade para resolver um problema comun: o Alinhamento de Múltiplas Seqüências.",
			"field 3":"O que é um Alinhamento de Múltiplas Seqüências?",
			"field 4": "Um alinhamento de seqüência é um arranjo de seqüências de DNA, RNA ou proteína que identifica regiões similares. Estas similaridades podem se conseqüência de relações funcionais, estruturais ou evolucionarias entre as seqüências alinhadas. Usando estes alinhamentos, biólogos podem inferir origens evolucionárias comuns, identificar posições funcionalmente relevantes, e ilustrar eventos de mutação. Mas o mais importante é: biólogos podem buscar as causas de doenças genéticas.",
			"field 5": "O Problema",
			"field 6": "Tradicionalmente, algoritmos para alinhamento de múltiplas seqüências utilizam heurísticas computacionalmente complexas. Infelizmente, o uso destas heurísticas não garante uma otimização global, e o custo computacional para encontrar a solução ótima global seria proibitivo. Isto deve-se em parte ao tamanho do genoma simplesmente, que consiste em aproximadamente três bilhões de pares de nucleotídeos, e do aumento exponencial da complexidade computacional com a número de seqüências a serem alinhadas.",
			"field 7": "Nossa abordagem",
			"field 8": "O ser humano evoluiu para reconhecer padrões e resolver problemas visuais com grande eficiência. Ao transformar o problema de alinhamento múltiplo de seqüências na manipulação de blocos coloridos, nos adaptamos o problema para tirar proveito desta capacidade. Partindo de dados que já foram alinhados por computadores, nós damos aos usuários a oportunidade de otimizar além daquilo que a heurística computacional foi capaz.",
			"field 9": "Os Dados",
			"field 10": "Todos os alinhamentos foram generosamente disponibilizados através do UCSC Genome Browser. De fato, todos os alinhamentos contém seções de DNA humano que especula-se estejam relacionadas a diversas doenças genéticas, como câncer. Toda vez que alguém completa um nível, o alinhamento é enviado para nós, analizado e armazenado num banco de dados, de onde em algum momento será reintroduzido no alinhamento global original, como otimização suplementar.",
			"field 11": "Para mais informações sobre qualquer um destes tópicos, clique aqui.",
		},
		"credit": {
			"field 1": "Líderes do Projeto (Mídia e contatos científicos)",
			"field 2": "Equipe de desenvolvimento",
			"field 3": "Designers originais",
			"field 4": "Suporte",
			"field 5": "Siga-nos",
			"field 6": "Música",
			"field 7": "Agradecimentos",
                        "field 8": "Conselheiro científico",
                        "field 9": "Tradução",
		},
		"ranking": {
			"field 1": "2011 Phylo Ranking",
			"field 2": "Posição, Usuário, Pontuação",
			"field 3": "Ranking Geral",
			"field 4": "2011 contribuidor",
			"field 5": "Maior contribuidor",
			"field 6": "Ranking por categoria de doença",
			"field 7": "SANGUE E SISTEMA IMUNOLÓGICO",
			"field 8": "OSSO E PELE",
			"field 9": "CÉREBRO E SISTEMA NERVOSO",
			"field 10": "CÂNCER",
			"field 11": "SISTEMA DIGESTIVO",
			"field 12": "CORAÇÃO E SISTEMA CIRCULATÓRIO",
			"field 13": "DISTÚRBIOS METABÓLICAS",
			"field 14": "MÚSCULOS",
			"field 15": "SISTEMA REPRODUTIVO",
			"field 16": "SISTEMA RESPIRATÓRIO",
			"field 17": "SISTEMA SENSORIAL",
			"field 18": "Informação",
			"field 19": "Classificação de doenças",
			"field 20": "Classificação de doenças usada no Phylo em 29 de Novembro de 2011.",
			"field 21": "Nota: a classificação pode vir a ser alterada.",
			"field 22": "Sistema de Pontuação",
			"field 23": "Descrição do sistema de pontuação",
			"field 24": "As pontuações de usuários cadastrados é baseada no número de níveis que melhoraram o alinhamento original da seqüência de DNA.",
			"field 25": "Nós reinserimos todas as soluções completadas em suas posições originais no alinhamento múltiplo de 44 espécies de onde foram extraídas. Os jogadores recebem um ponto para cada solução sua que tenha contribuído para aumentar a pontuação do genoma completo. Obviamente, duplicatas são removidas. Nós geramos diversas tablas de ranking:",
			"field 26": "Ranking geral: Todos os níveis são considerados. Os jogadores são ordernados de acordo com sua pontuação total.",
			"field 27": "Ranking de Primeira Contribuição: Apenas o primeiro jogador a chegar a solução efetivamente usada recebe um ponto por ela. Outros que cheguem à mesma ou equivalente solução não recebem nada.",
			"field 28": "Ranking por categoria de doença: Apenas os níveis correspondentes a genes relacionados a uma doença da categoria em questão são considerados. A lista de categorias e doenças relacionadas está descrita na seção sobre classificação de doenças.",
		},
		"live ranking": {
			"field 1": "Ranking online",
			"field 2": "ranking online",
			"field 3": "Mensal",
			"field 4": "Semanal",
			"field 5": "Níveis completados",
		},
		"results": {
			"field 1": "resultados para 2011",
			"field 2": "Um tarball com todos os dados pode ser baixado de",
		},
		"challenge": {
			"field 1": "Desafios",
			"field 2": "Desafios abertos",
			"field 3": "Entre o nome de um amigo no campo acima, ou clique em 'Jogar Agora' para desafiar um jogador aleatório!",
			"field 4": "Jogar Agora",
		},
	},
	"footer": {
		"field 1": "Phylo é um jogo desafiante em Flash, no qual cada quebra-cabeça resolvido contribui para o mapeamento de doenças no DNA humano. Saiba mais.",
		"field 2": "Junte-se à comunidade Phylo no Facebook ou simplesmente curta.",
		},
	},
}];
	var proto = g.prototype,
		attr = [
			["lang",proto.lang],
			];
	common.exportSingleton("PTscript",g,attr);
})();