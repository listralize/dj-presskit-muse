// ─── Template Data for 5 Famous Brazilian DJs ───
// Each template contains real data, real links, real photos,
// unique color themes, fonts, and style variations.

export interface DJTemplate {
  slug: string;
  artistName: string;
  realName: string;
  origin: string;
  slogan: string;
  biography: string[];
  heroPhoto: string;
  bioPhoto: string;
  stagePhoto: string;
  galleryPhotos: { id: string; image: string; title: string }[];
  socialLinks: {
    instagram: string;
    youtube: string;
    spotify: string;
    soundcloud?: string;
  };
  stats: {
    instagram: { value: string; sub: string };
    spotify: { value: string; sub: string };
    youtube: { value: string; sub: string };
  };
  tracks: { title: string; spotifyEmbed?: string }[];
  events: string;
  whatsappNumber: string;
  contactInfo: { role: string; name: string; phone: string }[];
  riderSonorizacao: string[];
  riderPalco: string[];
  riderPirotecnia: { label: string; detail: string }[];
  riderCamarim: string[];
  theme: {
    fontHeading: string;
    fontBody: string;
    googleFontsImport: string;
    bgHsl: string;
    fgHsl: string;
    cardHsl: string;
    primaryHsl: string;
    accentHsl: string;
    borderHsl: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
    folderBack: string;
    folderFront: string;
    folderTab: string;
    starColor: string;
  };
}

export const djTemplates: DJTemplate[] = [
  // ═══════════════════════════════════════════════════
  // 1. DJ TÍLIA — Funk · Eletrônica · Pop
  //    Theme: Rosa vibrante / Magenta com fundo escuro
  //    Fonts: Righteous + Poppins
  // ═══════════════════════════════════════════════════
  {
    slug: "tilia",
    artistName: "TÍLIA",
    realName: "Tília Fialho Aguiar Gomes",
    origin: "Rio de Janeiro, RJ",
    slogan: "Funk · Eletrônica · Pop",
    biography: [
      "Tília Fialho Aguiar Gomes é uma cantora, DJ e streamer brasileira nascida em 28 de abril de 2003, no Rio de Janeiro. Filha do renomado produtor e DJ Dennis e da empresária Kamilla Fialho, cresceu imersa no universo musical e iniciou sua carreira aos 17 anos, rapidamente se destacando na cena do funk e da música pop nacional.",
      "Com um DNA artístico forte, Tília soube aproveitar as oportunidades para construir uma carreira sólida e autêntica, misturando o funk carioca com elementos do pop e da música eletrônica. Sua presença digital é marcante, somando milhões de seguidores em plataformas como Instagram, TikTok e Twitch.",
      "Ao longo de sua trajetória, já lançou diversos singles e álbuns de sucesso, como '2003' e o EP 'Garota Nota 100', além de parcerias com grandes nomes da música brasileira. Com apenas 22 anos, Tília se consolida como uma das vozes mais promissoras de sua geração."
    ],
    heroPhoto: "/photos/tilia/hero.jpg",
    bioPhoto: "/photos/tilia/bio.jpg",
    stagePhoto: "/photos/tilia/stage.jpg",
    galleryPhotos: [
      { id: "t1", image: "/photos/tilia/hero.jpg", title: "Tília no palco" },
      { id: "t2", image: "/photos/tilia/bio.jpg", title: "Tília show" },
      { id: "t3", image: "/photos/tilia/photo1.jpg", title: "Tília YouTube" },
      { id: "t4", image: "/photos/tilia/photo2.jpg", title: "Tília Billboard" },
      { id: "t5", image: "/photos/tilia/photo3.jpg", title: "Tília entrevista" },
      { id: "t6", image: "/photos/tilia/photo4.jpg", title: "Tília ensaio" },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/tiliaoficial",
      youtube: "https://www.youtube.com/@Tiliaoficial",
      spotify: "https://open.spotify.com/artist/0YaewQrKXrfODqVgpZDloo",
    },
    stats: {
      instagram: { value: "2,1M+", sub: "seguidores" },
      spotify: { value: "2M+", sub: "ouvintes mensais" },
      youtube: { value: "289K+", sub: "inscritos" },
    },
    tracks: [
      { title: "700 Por Minuto" },
      { title: "Garota Nota 100" },
      { title: "Aulinha De Quicada" },
      { title: "Nocaute" },
      { title: "UH É A TÍLIA" },
      { title: "2003" },
    ],
    events: "Rock in Rio · Lollapalooza · The Town · Baile da Tília · Festival de Verão ·",
    whatsappNumber: "5521999999999",
    contactInfo: [
      { role: "Empresária", name: "Kamilla Fialho", phone: "21 99999-9999" },
      { role: "Publicidade", name: "tilia@9aocubo.com", phone: "" },
    ],
    riderSonorizacao: [
      "PA com cobertura total da área do evento, entregando 108 DBA",
      "Both DJ L + R (Min. 2 Line + 1 Sub cada lado)",
      "1 Kit CDJ's PIONEER 3000 Nexus + Mixer DJM 900 Nexus 2",
      "Cabo de rede para link das CDJ's",
      "1 Praticável para CDJ com altura mínima de 1m",
    ],
    riderPalco: [
      "02 Microfones sem fio, com bateria carregada",
      "Espaço mínimo de 3M de palco para dançarinos",
      "Iluminação com moving heads e strobes",
      "Máquina de fumaça profissional",
    ],
    riderPirotecnia: [
      { label: "Jet (Boate)", detail: "5 Cenas (10 Unidades / 2 Pontos)" },
      { label: "Gerb 15 Segundos", detail: "2 Cenas (4 Unidades / 2 Pontos)" },
      { label: "Papel", detail: "4 Cenas (8 Unidades / 2 Pontos)" },
      { label: "CO2", detail: "2 Bicos CO2 + 2 Cilindros min. 25kg" },
    ],
    riderCamarim: [
      "1 Vodka Grey Goose 1L",
      "12 Energéticos Red Bull Tropical",
      "6 Águas de Coco",
      "5 Sucos naturais variados",
      "2 Pizzas G (margherita e pepperoni)",
      "1 Tábua de Frios premium",
      "1 Fardo de Água sem gás 500ml (mín. 12un.)",
      "Frutas frescas variadas",
    ],
    theme: {
      fontHeading: "'Righteous', sans-serif",
      fontBody: "'Poppins', sans-serif",
      googleFontsImport: "https://fonts.googleapis.com/css2?family=Righteous&family=Poppins:wght@300;400;500;600;700&display=swap",
      bgHsl: "320 30% 3%",
      fgHsl: "330 15% 93%",
      cardHsl: "320 20% 6%",
      primaryHsl: "330 80% 60%",
      accentHsl: "320 50% 18%",
      borderHsl: "320 12% 12%",
      gradientFrom: "#ff69b4",
      gradientVia: "#ff1493",
      gradientTo: "#c71585",
      folderBack: "330 30% 32%",
      folderFront: "330 30% 42%",
      folderTab: "330 30% 52%",
      starColor: "rgba(255,105,180,0.7)",
    },
  },

  // ═══════════════════════════════════════════════════
  // 2. DJ PAPATINHO — Rap · Hip-Hop · Funk
  //    Theme: Dourado/Amber com fundo escuro quente
  //    Fonts: Oswald + Roboto
  // ═══════════════════════════════════════════════════
  {
    slug: "papatinho",
    artistName: "PAPATINHO",
    realName: "Tiago da Cal Alves",
    origin: "Rio de Janeiro, RJ",
    slogan: "Rap · Hip-Hop · Funk",
    biography: [
      "Tiago da Cal Alves, mais conhecido como Papatinho, é um renomado DJ, beatmaker e produtor musical brasileiro, natural do Rio de Janeiro. Membro fundador do grupo de rap ConeCrewDiretoria, rapidamente se destacou pela habilidade em criar batidas inovadoras. O sucesso nacional veio com o álbum 'Com os Neurônios Evoluindo' em 2011, que continha o hit 'Chama os Mulekes'.",
      "Ao longo de sua carreira, Papatinho expandiu seus horizontes musicais, aventurando-se pelo funk e outros ritmos, colaborando com grandes nomes como Anitta, Ludmilla, Snoop Dogg, Shakira e Travis Barker. Em 2014, fundou sua própria gravadora, a Papatunes, solidificando seu status como um dos produtores mais influentes do país.",
      "Presença constante nos palcos dos maiores festivais do Brasil, como Rock in Rio e Lollapalooza, Papatinho é reconhecido como o 'Rei dos Beats', acumulando mais de 9,5 bilhões de streams e continuando a ser uma figura central na música urbana brasileira."
    ],
    heroPhoto: "/photos/papatinho/hero.png",
    bioPhoto: "/photos/papatinho/bio.jpg",
    stagePhoto: "/photos/papatinho/stage.jpg",
    galleryPhotos: [
      { id: "p1", image: "/photos/papatinho/hero.png", title: "Papatinho press" },
      { id: "p2", image: "/photos/papatinho/bio.jpg", title: "Papatinho Rock in Rio" },
      { id: "p3", image: "/photos/papatinho/photo1.jpg", title: "Papatinho no palco" },
      { id: "p4", image: "/photos/papatinho/photo2.jpg", title: "Papatinho estúdio" },
      { id: "p5", image: "/photos/papatinho/photo3.png", title: "Papatinho MPC" },
      { id: "p6", image: "/photos/papatinho/photo4.jpg", title: "Papatinho show" },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/papatinho/",
      youtube: "https://www.youtube.com/user/papatinhobeats",
      spotify: "https://open.spotify.com/artist/0iZz25uH5PLaShpqq84uYv",
    },
    stats: {
      instagram: { value: "838K+", sub: "seguidores" },
      spotify: { value: "2,4M+", sub: "ouvintes mensais" },
      youtube: { value: "1,2M+", sub: "inscritos" },
    },
    tracks: [
      { title: "Amor de Fim de Noite" },
      { title: "Sem Convite" },
      { title: "Final de Semana" },
      { title: "Joga A Tabaca" },
      { title: "Posição de Ataque" },
      { title: "Chama os Mulekes" },
    ],
    events: "Rock in Rio · Lollapalooza · Bloco do Papatinho · Alma Festival · Rock the Mountain ·",
    whatsappNumber: "5521988888888",
    contactInfo: [
      { role: "Management", name: "Papatunes", phone: "21 98888-8888" },
      { role: "Booking", name: "booking@papatunes.com", phone: "" },
    ],
    riderSonorizacao: [
      "PA com cobertura total, entregando 112 DBA por todo o evento",
      "Both DJ L + R (Min. 3 Line + 2 Sub cada lado)",
      "1 Kit CDJ's PIONEER 3000 Nexus + Mixer DJM V10",
      "1 MPC Live II ou Akai Force com stand",
      "2 Cabos de rede para link das CDJ's",
      "1 Praticável para CDJ + MPC",
    ],
    riderPalco: [
      "03 Microfones sem fio Shure SM58, com bateria carregada",
      "Espaço de 4M entre praticável à beira do palco para MCs",
      "Retorno de palco com 2 monitores wedge",
      "Iluminação com moving heads e wash lights",
    ],
    riderPirotecnia: [
      { label: "Jet (Festival)", detail: "10 Cenas (20 Unidades / 4 Pontos)" },
      { label: "Gerb 15 Segundos", detail: "4 Cenas (8 Unidades / 4 Pontos)" },
      { label: "Confete", detail: "6 Cenas (12 Unidades / 4 Pontos)" },
      { label: "CO2", detail: "4 Bicos CO2 + 4 Cilindros min. 33kg" },
    ],
    riderCamarim: [
      "2 Whisky Buchanan's 18 anos 1L",
      "1 Hennessy VS 1L",
      "24 Energéticos Red Bull Tradicional",
      "12 Cervejas Heineken long neck",
      "6 Águas de Coco",
      "3 Pizzas G (calabresa, frango e portuguesa)",
      "1 Centro de Salgados variados (100 unidades)",
      "1 Fardo de Água sem gás 500ml (mín. 24un.)",
    ],
    theme: {
      fontHeading: "'Oswald', sans-serif",
      fontBody: "'Roboto', sans-serif",
      googleFontsImport: "https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap",
      bgHsl: "30 20% 3%",
      fgHsl: "40 15% 93%",
      cardHsl: "30 15% 7%",
      primaryHsl: "40 90% 55%",
      accentHsl: "35 40% 18%",
      borderHsl: "30 12% 14%",
      gradientFrom: "#f59e0b",
      gradientVia: "#fbbf24",
      gradientTo: "#d97706",
      folderBack: "40 30% 28%",
      folderFront: "40 30% 38%",
      folderTab: "40 30% 48%",
      starColor: "rgba(251,191,36,0.6)",
    },
  },

  // ═══════════════════════════════════════════════════
  // 3. VINTAGE CULTURE — House · Deep House · Electronic
  //    Theme: Azul ciano/teal com fundo escuro frio
  //    Fonts: Space Grotesk + DM Sans
  // ═══════════════════════════════════════════════════
  {
    slug: "vintage-culture",
    artistName: "VINTAGE CULTURE",
    realName: "Lukas Rafael Ruiz Hespanhol",
    origin: "Mundo Novo, MS",
    slogan: "House · Deep House · Electronic Music",
    biography: [
      "Lukas Rafael Ruiz Hespanhol, mundialmente conhecido como Vintage Culture, é um DJ e produtor musical brasileiro que se tornou um dos nomes mais influentes da cena eletrônica global. Nascido em Mundo Novo, Mato Grosso do Sul, em 7 de julho de 1993, sua jornada musical o levou dos palcos do Brasil para os maiores festivais e clubes do mundo.",
      "Influenciado por new wave e bandas eletrônicas dos anos 80, abandonou a faculdade de direito em Maringá para se dedicar integralmente à produção musical. Sua ascensão foi meteórica, com remixes de clássicos como 'Blue Monday' do New Order e 'Another Brick in the Wall' do Pink Floyd. Em 2023, alcançou a 10ª posição no ranking Top 100 DJs da DJ Mag.",
      "Com um som que transita entre o house, deep house e a dance music, Vintage Culture é conhecido por seus sets longos e energéticos. Já se apresentou nos principais festivais do mundo, como Coachella, Tomorrowland e Burning Man, além de residências em Ibiza. É fundador do selo e festival 'Só Track Boa' e do 'Vintage Is A Festival'."
    ],
    heroPhoto: "/photos/vintage-culture/hero.jpg",
    bioPhoto: "/photos/vintage-culture/bio.jpg",
    stagePhoto: "/photos/vintage-culture/stage.jpg",
    galleryPhotos: [
      { id: "vc1", image: "/photos/vintage-culture/hero.jpg", title: "VC festival" },
      { id: "vc2", image: "/photos/vintage-culture/bio.jpg", title: "VC Grammy" },
      { id: "vc3", image: "/photos/vintage-culture/photo1.jpg", title: "VC portrait" },
      { id: "vc4", image: "/photos/vintage-culture/photo2.png", title: "VC Apple Music" },
      { id: "vc5", image: "/photos/vintage-culture/photo3.jpg", title: "VC interview" },
      { id: "vc6", image: "/photos/vintage-culture/photo4.jpg", title: "VC tour" },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/vintageculture/",
      youtube: "https://www.youtube.com/@vintageculture",
      spotify: "https://open.spotify.com/artist/28uJnu5EsrGml2tBd7y8ts",
      soundcloud: "https://soundcloud.com/vintage-culture",
    },
    stats: {
      instagram: { value: "12M+", sub: "seguidores" },
      spotify: { value: "7,1M+", sub: "ouvintes mensais" },
      youtube: { value: "1,2M+", sub: "inscritos" },
    },
    tracks: [
      { title: "Slow Down (feat. Jorja Smith)" },
      { title: "Weak" },
      { title: "I Will Find" },
      { title: "You Give Me A Feeling" },
      { title: "Intro (Rework)" },
      { title: "It Is What It Is" },
    ],
    events: "Coachella · Tomorrowland · Burning Man · Ultra Music Festival · Hï Ibiza · Só Track Boa ·",
    whatsappNumber: "5511977777777",
    contactInfo: [
      { role: "Management", name: "Só Track Boa", phone: "11 97777-7777" },
      { role: "Booking Internacional", name: "CAA (Creative Artists Agency)", phone: "" },
    ],
    riderSonorizacao: [
      "PA com cobertura total, entregando 115 DBA por todo o evento",
      "Both DJ L + R (Min. 4 Line + 2 Sub cada lado) — Funktion-One ou d&b audiotechnik",
      "1 Kit CDJ's PIONEER CDJ-3000 (4 unidades) + Mixer DJM-V10",
      "4 Cabos de rede para link das CDJ's",
      "1 Praticável para CDJ com booth fechado",
      "1 Monitor de referência no booth (Pioneer RM-07)",
    ],
    riderPalco: [
      "01 Microfone sem fio Sennheiser, com bateria carregada",
      "Booth fechado com iluminação interna controlável",
      "LED wall atrás do booth (mín. 6m x 3m) com input HDMI",
      "Máquina de fumaça haze profissional",
    ],
    riderPirotecnia: [
      { label: "CO2 Cryo Jets", detail: "4 Bicos CO2 + 4 Cilindros 50kg" },
      { label: "Laser Show", detail: "2 Lasers RGB 10W full color" },
      { label: "Confete", detail: "4 Cenas (8 Unidades / 4 Pontos)" },
      { label: "Sparkular", detail: "4 Máquinas Sparkular Cold Spark" },
    ],
    riderCamarim: [
      "1 Gin Hendrick's 1L + tônicas Fever-Tree",
      "1 Champagne Moët & Chandon Brut",
      "12 Energéticos Red Bull Sugarfree",
      "6 Águas de Coco",
      "Frutas frescas e mix de castanhas",
      "Sushi (30 peças variadas)",
      "1 Fardo de Água sem gás 500ml (mín. 12un.)",
      "Toalhas limpas e espelho no camarim",
    ],
    theme: {
      fontHeading: "'Space Grotesk', sans-serif",
      fontBody: "'DM Sans', sans-serif",
      googleFontsImport: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;700&display=swap",
      bgHsl: "195 30% 3%",
      fgHsl: "190 15% 93%",
      cardHsl: "195 20% 6%",
      primaryHsl: "185 70% 50%",
      accentHsl: "190 40% 16%",
      borderHsl: "195 12% 12%",
      gradientFrom: "#06b6d4",
      gradientVia: "#22d3ee",
      gradientTo: "#0891b2",
      folderBack: "190 25% 30%",
      folderFront: "190 25% 40%",
      folderTab: "190 25% 50%",
      starColor: "rgba(34,211,238,0.6)",
    },
  },

  // ═══════════════════════════════════════════════════
  // 4. ALOK — House · Eletrônica · Brazilian Bass
  //    Theme: Verde neon / Esmeralda com fundo escuro
  //    Fonts: Montserrat + Source Sans 3
  // ═══════════════════════════════════════════════════
  {
    slug: "alok",
    artistName: "ALOK",
    realName: "Alok Achkar Peres Petrillo",
    origin: "Goiânia, GO",
    slogan: "House · Eletrônica · Brazilian Bass",
    biography: [
      "Alok Achkar Peres Petrillo, conhecido mundialmente como Alok, é um DJ e produtor musical brasileiro de renome internacional. Nascido em Goiânia, Goiás, em 26 de agosto de 1991, é filho de DJs pioneiros do psy trance no Brasil. Começou sua carreira ao lado de seu irmão gêmeo, Bhaskar, e em 2010 iniciou sua carreira solo, tornando-se um dos precursores do subgênero brazilian bass.",
      "O sucesso mundial 'Hear Me Now', em parceria com Bruno Martini e Zeeba, o projetou internacionalmente, alcançando o topo das paradas em diversos países. Alok é presença constante nos principais festivais de música do mundo, como Tomorrowland, Rock in Rio e Lollapalooza, e já foi eleito diversas vezes o melhor DJ do Brasil pela DJ Mag.",
      "Além de sua carreira musical, Alok é conhecido por seu trabalho filantrópico e pela gravadora Controversia Records. Com mais de 29 milhões de seguidores no Instagram e bilhões de streams, é também reconhecido pela revista Time como um dos 100 líderes climáticos mais influentes do mundo."
    ],
    heroPhoto: "/photos/alok/hero.jpg",
    bioPhoto: "/photos/alok/bio.jpg",
    stagePhoto: "/photos/alok/stage.jpg",
    galleryPhotos: [
      { id: "a1", image: "/photos/alok/hero.jpg", title: "Alok press" },
      { id: "a2", image: "/photos/alok/bio.jpg", title: "Alok portrait" },
      { id: "a3", image: "/photos/alok/photo1.jpg", title: "Alok Amazon" },
      { id: "a4", image: "/photos/alok/photo2.jpg", title: "Alok fashion" },
      { id: "a5", image: "/photos/alok/photo3.jpg", title: "Alok Copacabana" },
      { id: "a6", image: "/photos/alok/photo4.jpg", title: "Alok live" },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/alok",
      youtube: "https://www.youtube.com/@alok",
      spotify: "https://open.spotify.com/artist/0NGAZxHanS9e0iNHpR8f2W",
    },
    stats: {
      instagram: { value: "29M+", sub: "seguidores" },
      spotify: { value: "23,9M+", sub: "ouvintes mensais" },
      youtube: { value: "6,9M+", sub: "inscritos" },
    },
    tracks: [
      { title: "Hear Me Now (feat. Bruno Martini & Zeeba)" },
      { title: "LET'S GET FKD UP" },
      { title: "Headlights (feat. KIDDO)" },
      { title: "Deep Down (feat. Never Dull)" },
      { title: "Dive Into Me" },
      { title: "Love Again" },
    ],
    events: "Tomorrowland · Rock in Rio · Lollapalooza · Ultra Music Festival · EDC · Show do Século Copacabana ·",
    whatsappNumber: "5562966666666",
    contactInfo: [
      { role: "Management", name: "Controversia Records", phone: "62 96666-6666" },
      { role: "Booking", name: "WME (William Morris Endeavor)", phone: "" },
    ],
    riderSonorizacao: [
      "PA com cobertura total, entregando 120 DBA — L-Acoustics K1/K2 ou d&b J-Series",
      "Both DJ L + R (Min. 6 Line + 4 Sub cada lado)",
      "1 Kit CDJ's PIONEER CDJ-3000 (4 unidades) + Mixer DJM-V10-LF",
      "4 Cabos de rede Cat6 para link das CDJ's",
      "1 Praticável para CDJ com booth profissional",
      "2 Monitores de referência Pioneer RM-07 no booth",
    ],
    riderPalco: [
      "02 Microfones sem fio Sennheiser EW 500 G4",
      "Palco mínimo de 12m x 8m com estrutura Q30/Q40",
      "LED wall 360° (mín. 12m x 6m) com resolução P3.9",
      "Sistema de iluminação completo com 24+ moving heads",
      "4 Máquinas de fumaça haze MDG Atmosphere",
    ],
    riderPirotecnia: [
      { label: "CO2 Cryo Jets", detail: "8 Bicos CO2 + 8 Cilindros 50kg" },
      { label: "Flame Jets", detail: "4 Flame machines DMX controlled" },
      { label: "Laser Show", detail: "4 Lasers RGB 20W full color" },
      { label: "Confete/Streamers", detail: "8 Canhões de confete" },
    ],
    riderCamarim: [
      "Camarim privativo climatizado com sofás",
      "1 Whisky Macallan 12 anos",
      "1 Champagne Dom Pérignon",
      "24 Energéticos Red Bull Sugarfree",
      "Frutas orgânicas e snacks saudáveis",
      "Refeição completa para 10 pessoas (menu a combinar)",
      "2 Fardos de Água sem gás 500ml",
      "Wi-Fi dedicado no camarim",
    ],
    theme: {
      fontHeading: "'Montserrat', sans-serif",
      fontBody: "'Source Sans 3', sans-serif",
      googleFontsImport: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Source+Sans+3:wght@300;400;500;600;700&display=swap",
      bgHsl: "150 25% 3%",
      fgHsl: "140 15% 93%",
      cardHsl: "150 18% 6%",
      primaryHsl: "145 70% 45%",
      accentHsl: "150 35% 15%",
      borderHsl: "150 12% 12%",
      gradientFrom: "#10b981",
      gradientVia: "#34d399",
      gradientTo: "#059669",
      folderBack: "150 25% 28%",
      folderFront: "150 25% 38%",
      folderTab: "150 25% 48%",
      starColor: "rgba(52,211,153,0.6)",
    },
  },

  // ═══════════════════════════════════════════════════
  // 5. LIU — Eletrônica · Deep House · Brazilian Bass
  //    Theme: Roxo/Violeta com fundo escuro
  //    Fonts: Archivo Black + Nunito
  // ═══════════════════════════════════════════════════
  {
    slug: "liu",
    artistName: "LIU",
    realName: "Christian Liu de Almeida",
    origin: "Santana de Parnaíba, SP",
    slogan: "Eletrônica · Deep House · Brazilian Bass",
    biography: [
      "Christian 'Liu' de Almeida, nascido em Santana de Parnaíba, São Paulo, em 2 de fevereiro de 1997, é um proeminente DJ, produtor musical e empresário brasileiro. Desde cedo, teve contato com a música, aprendendo a tocar violão com seu pai aos nove anos e sendo exposto a gêneros como MPB, bossa nova, rock e metal.",
      "Sua carreira decolou em 2015 com o lançamento de 'Don't Look Back', em parceria com Vokker. A faixa chamou a atenção de Alok, que o apadrinhou e impulsionou sua carreira. Desde então, Liu tem lançado uma série de sucessos, incluindo 'All I Want', 'Tufak' e o hit 'Nave Espacial', que acumulou milhões de visualizações.",
      "Já se apresentou nos maiores festivais de música do mundo, como Tomorrowland (Brasil e Bélgica), Lollapalooza e Rock in Rio. Em 2023, entrou para o ranking Top 100 DJs da DJ Mag. É dono do selo discográfico Chinatown, consolidando seu nome como um dos principais expoentes da música eletrônica brasileira."
    ],
    heroPhoto: "/photos/liu/hero.png",
    bioPhoto: "/photos/liu/bio.jpg",
    stagePhoto: "/photos/liu/stage.jpg",
    galleryPhotos: [
      { id: "l1", image: "/photos/liu/hero.png", title: "Liu hero" },
      { id: "l2", image: "/photos/liu/bio.jpg", title: "Liu show" },
      { id: "l3", image: "/photos/liu/photo1.webp", title: "Liu tour" },
      { id: "l4", image: "/photos/liu/photo2.jpg", title: "Liu portrait" },
      { id: "l5", image: "/photos/liu/photo3.jpg", title: "Liu YouTube" },
      { id: "l6", image: "/photos/liu/photo4.jpg", title: "Liu press" },
    ],
    socialLinks: {
      instagram: "https://www.instagram.com/liulive",
      youtube: "https://www.youtube.com/channel/UCi616rxZJDiNFFpO33nXplw",
      spotify: "https://open.spotify.com/artist/3DnNQH13SfSOjZDsVEa0ht",
      soundcloud: "https://soundcloud.com/liuofficial",
    },
    stats: {
      instagram: { value: "1,8M+", sub: "seguidores" },
      spotify: { value: "1,1M+", sub: "ouvintes mensais" },
      youtube: { value: "664K+", sub: "inscritos" },
    },
    tracks: [
      { title: "Nave Espacial" },
      { title: "All I Want" },
      { title: "Coastline" },
      { title: "Pirate" },
      { title: "Don't Look Back" },
      { title: "Tufak" },
    ],
    events: "Tomorrowland · Lollapalooza · Rock in Rio · Villa Mix · Só Track Boa ·",
    whatsappNumber: "5511955555555",
    contactInfo: [
      { role: "Management", name: "Chinatown Records", phone: "11 95555-5555" },
      { role: "Booking", name: "booking@chinatownrecords.com", phone: "" },
    ],
    riderSonorizacao: [
      "PA com cobertura total, entregando 112 DBA por todo o evento",
      "Both DJ L + R (Min. 3 Line + 2 Sub cada lado)",
      "1 Kit CDJ's PIONEER CDJ-3000 (3 unidades) + Mixer DJM-V10",
      "3 Cabos de rede para link das CDJ's",
      "1 Praticável para CDJ com booth",
      "1 Monitor de referência no booth",
    ],
    riderPalco: [
      "01 Microfone sem fio, com bateria carregada",
      "LED wall atrás do booth (mín. 4m x 2.5m)",
      "Iluminação com moving heads e wash lights",
      "2 Máquinas de fumaça haze",
    ],
    riderPirotecnia: [
      { label: "CO2 Cryo Jets", detail: "4 Bicos CO2 + 4 Cilindros 33kg" },
      { label: "Sparkular", detail: "2 Máquinas Cold Spark" },
      { label: "Confete", detail: "4 Cenas (8 Unidades / 2 Pontos)" },
      { label: "Laser", detail: "2 Lasers RGB 8W" },
    ],
    riderCamarim: [
      "1 Gin Tanqueray 1L + tônicas",
      "1 Vodka Absolut 1L",
      "12 Energéticos Red Bull Tradicional",
      "6 Águas de Coco",
      "5 Latas de Coca Cola Zero",
      "2 Pizzas G (margherita e pepperoni)",
      "1 Tábua de Frios variados",
      "1 Fardo de Água sem gás 500ml (mín. 12un.)",
    ],
    theme: {
      fontHeading: "'Archivo Black', sans-serif",
      fontBody: "'Nunito', sans-serif",
      googleFontsImport: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Nunito:wght@300;400;500;600;700&display=swap",
      bgHsl: "270 25% 3%",
      fgHsl: "265 15% 93%",
      cardHsl: "270 18% 6%",
      primaryHsl: "270 70% 55%",
      accentHsl: "270 35% 18%",
      borderHsl: "270 12% 12%",
      gradientFrom: "#8b5cf6",
      gradientVia: "#a78bfa",
      gradientTo: "#7c3aed",
      folderBack: "270 25% 30%",
      folderFront: "270 25% 40%",
      folderTab: "270 25% 50%",
      starColor: "rgba(167,139,250,0.6)",
    },
  },
];
