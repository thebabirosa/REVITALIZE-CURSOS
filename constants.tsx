import { PageContent } from './types';

// Link do WhatsApp atualizado
const WHATSAPP_LINK = "https://wa.me/554891930458";

// Imagens corrigidas - Novos links do GitHub
const HERO_IMAGE = "https://github.com/thebabirosa/images/blob/main/IMG_6046.JPG?raw=true"; 
const STORY_IMAGE = "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop"; 

// Galeria com imagens verticais (9:16) - Novos links do GitHub
const GALLERY_1 = "https://github.com/thebabirosa/pv-karen/blob/d161e7da8da956a27d7509acdd114c0e8a6567de/imagens/10.jpg?raw=true";
const GALLERY_2 = "https://github.com/thebabirosa/pv-karen/blob/d161e7da8da956a27d7509acdd114c0e8a6567de/imagens/11.jpg?raw=true";
const GALLERY_3 = "https://github.com/thebabirosa/pv-karen/blob/d161e7da8da956a27d7509acdd114c0e8a6567de/imagens/12.jpg?raw=true";
const GALLERY_4 = "https://github.com/thebabirosa/pv-karen/blob/d161e7da8da956a27d7509acdd114c0e8a6567de/imagens/8.jpg?raw=true";
const GALLERY_5 = "https://github.com/thebabirosa/pv-karen/blob/d161e7da8da956a27d7509acdd114c0e8a6567de/imagens/9.jpg?raw=true";
const GALLERY_6 = "https://github.com/thebabirosa/images/blob/main/IMG_6025.JPG?raw=true";

export const CONTENT: PageContent = {
  header: {
    brand: {
      name: "@karencolomby",
      logoText: "Revitalize Cursos"
    },
    cta: {
      label: "Garantir vaga",
      href: "#offer"
    }
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      badge: "CURSO PRESENCIAL VIP",
      title: "Das suas mãos para o seu futuro.",
      subtitle: "O método que transformou minhas unhas em liberdade e reconhecimento.",
      description: "Domine técnicas avançadas, atraia clientes e viva da sua arte — com prática guiada, correção ao vivo e um passo a passo claro para você executar com segurança.",
      highlights: [
        "Técnicas avançadas: Fibra de Vidro e Molde F1",
        "Manutenção perfeita e acabamentos impecáveis",
        "Kit + apostila + suporte de 1 ano"
      ],
      primaryCta: {
        label: "Quero me inscrever agora",
        href: WHATSAPP_LINK
      },
      secondaryCta: {
        label: "Ver o que está incluso",
        href: "#inclui"
      },
      image: {
        src: HERO_IMAGE,
        alt: "Curso de Alongamento de Unhas"
      },
      trust: [
        "Treinamento VIP Individual",
        "Aula presencial com modelo",
        "Para iniciantes e experientes"
      ]
    },
    {
      id: "story",
      type: "story",
      title: "Eu nunca achei que esse dia chegaria… mas aconteceu.",
      content: [
        "Há alguns anos, eu passava o dia na mesa atendendo 5, 6 clientes por dia. Saía cansada, sentia que ganhava pouco e sonhava com algo maior.",
        "A virada não foi trabalhar mais horas. Foi aprender técnica de alto nível, estratégia e posicionamento.",
        "Hoje eu ensino outras mulheres a conquistarem o mesmo: agenda cheia, reconhecimento e liberdade para viver da beleza."
      ],
      note: "Você não precisa “nascer com dom”. Você precisa de método, correção e prática com quem sabe o caminho."
    },
    {
      id: "for_who",
      type: "bullets",
      title: "Esse curso é para você que…",
      items: [
        "Quer começar do jeito certo e evitar erros que fazem a unha descolar, quebrar ou perder acabamento",
        "Já faz unha, mas sente que ainda falta técnica para cobrar mais e entregar um resultado impecável",
        "Quer um serviço que vende sozinho pela qualidade (e não por desconto)",
        "Quer virar referência e construir uma agenda forte com consistência"
      ]
    },
    {
      id: "inclui",
      type: "cards",
      title: "No curso presencial você terá acesso a:",
      subtitle: "Conteúdo + prática + estrutura pronta para você sair sabendo fazer.",
      anchor: true,
      cards: [
        {
          title: "Técnicas avançadas",
          text: "Fibra de Vidro, Molde F1, manutenção perfeita e acabamentos impecáveis."
        },
        {
          title: "Kit de materiais",
          text: "Gel 10g, preparadores, fibra de vidro, molde F1, top coat e lixas."
        },
        {
          title: "Apostila completa",
          text: "Passo a passo do início ao fim — incluindo preparação, complicações e finalização."
        },
        {
          title: "Suporte de 1 ano",
          text: "Tire dúvidas depois do curso e evolua com segurança (mesmo após o treinamento)."
        },
        {
          title: "Coffee break",
          text: "Um coffee preparado especial para você."
        }
      ]
    },
    {
      id: "deliverables",
      type: "bullets",
      title: "Resultados que você leva para a vida",
      items: [
        "Mais segurança técnica para atender e evoluir no dia a dia",
        "Ganhe mais tempo livre dominando a técnica correta e eliminando o retrabalho",
        "Reconhecimento como especialista (resultado aparece no acabamento)",
        "Base para multiplicar ganhos (inclusive ensinando no futuro, se esse for seu caminho)"
      ],
      disclaimer: "Resultados variam conforme dedicação, prática e contexto de cada aluna."
    },
    {
      id: "proof",
      type: "gallery",
      title: "Elas começaram como você… e hoje vivem da sua arte",
      subtitle: "Cada história aqui é prova de que quando você aprende do jeito certo, você muda o seu padrão.",
      images: [
        { src: GALLERY_1, alt: "Aluna certificada e resultado 1" },
        { src: GALLERY_2, alt: "Aluna certificada e resultado 2" },
        { src: GALLERY_3, alt: "Aluna certificada e resultado 3" },
        { src: GALLERY_4, alt: "Aluna certificada e resultado 4" },
        { src: GALLERY_5, alt: "Aluna certificada e resultado 5" },
        { src: GALLERY_6, alt: "Aluna certificada e resultado 6" }
      ],
      cta: {
        label: "Quero ser a próxima",
        href: "#offer"
      }
    },
    {
      id: "offer",
      type: "pricing",
      title: "Valores e condições",
      price: {
        cashLabel: "À vista",
        cashValue: "R$ 1.997,00",
        installmentsLabel: "No cartão",
        installmentsValue: "até 12x de R$ 199,70"
      },
      includes: [
        "Curso presencial VIP (Individual)",
        "Kit de materiais",
        "Apostila passo a passo",
        "Suporte de 1 ano",
        "Coffee break especial"
      ],
      scarcity: {
        title: "Agenda com vagas limitadas",
        text: "Por ser um treinamento individual com atenção total, a disponibilidade é reduzida."
      },
      primaryCta: {
        label: "Garantir minha vaga agora",
        href: WHATSAPP_LINK
      },
      secondaryInfo: [
        "Local: Ingleses, Florianópolis",
        "Data/horário: Verificar disponibilidade",
        "Contato: (48) 99193-0458"
      ]
    },
    {
      id: "faq",
      type: "faq",
      title: "Dúvidas rápidas",
      items: [
        {
          q: "Preciso ter experiência?",
          a: "Não. O curso é estruturado para quem quer começar do jeito certo e também para quem já faz e quer elevar o nível."
        },
        {
          q: "Eu saio do curso pronta para atender?",
          a: "Você sai com o passo a passo completo, prática guiada e orientação para executar com segurança. A evolução vem com prática e aplicação."
        },
        {
          q: "O que eu recebo no dia?",
          a: "Kit de materiais + apostila + aula presencial VIP + coffee break. E depois: suporte de 1 ano para dúvidas."
        },
        {
          q: "Como faço minha inscrição?",
          a: "Clique no botão e fale no WhatsApp para reservar sua data e finalizar o pagamento."
        }
      ]
    },
    {
      id: "final_cta",
      type: "cta",
      title: "Você está a uma decisão de virar a chave.",
      subtitle: "Aprenda técnica de alto nível, pare de improvisar e comece a construir reconhecimento — com método.",
      cta: {
        label: "Quero garantir minha vaga",
        href: WHATSAPP_LINK
      },
      microcopy: "Se você sentiu que é pra você, não adia. As vagas são limitadas."
    }
  ],
  footer: {
    brand: "Revitalize Cursos",
    legal: [
      `© ${new Date().getFullYear()} Revitalize Cursos. Todos os direitos reservados.`,
      "Política de privacidade • Termos"
    ]
  }
};