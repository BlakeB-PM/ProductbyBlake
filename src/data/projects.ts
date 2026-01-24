export interface ProjectSection {
  title: string
  content: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  problem: string
  solution: string
  tech: string[]
  gradient: string
  // Detail page content
  story: {
    origin: ProjectSection
    approach: ProjectSection
    challenges: ProjectSection
    iterations: ProjectSection
    outcome: ProjectSection
    learnings: ProjectSection
  }
  // Optional links
  links?: {
    github?: string
    live?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    id: 'garminsights',
    title: 'GarminSights',
    tagline: 'Personal fitness analytics powered by AI',
    problem: "Garmin's app is weak on strength training and cycling analytics. I wanted to see my lifting progress, estimated 1RMs, and get AI-powered coaching based on my actual data.",
    solution: 'Built a full-stack dashboard that syncs with Garmin Connect, visualizes strength progress, and includes an AI coach that analyzes my real training patterns.',
    tech: ['React', 'TypeScript', 'FastAPI', 'SQLite', 'Claude API', 'Recharts', 'Tailwind CSS'],
    gradient: 'from-emerald-500 to-teal-600',
    story: {
      origin: {
        title: 'The Origin',
        content: `[Your story here]

Write about:
- What sparked the idea for this project
- What specific frustration or need you were experiencing
- Why existing solutions (like the Garmin app) weren't cutting it
- The moment you decided to build it yourself`,
      },
      approach: {
        title: 'The Approach',
        content: `[Your story here]

Write about:
- How you started (did you prototype first? jump into code?)
- Key architectural decisions (why FastAPI? why SQLite?)
- How you used Cursor/AI to accelerate development
- The initial scope vs what you ended up building`,
      },
      challenges: {
        title: 'Challenges & Roadblocks',
        content: `[Your story here]

Write about:
- Technical hurdles you hit (API rate limits? auth issues?)
- Moments where you got stuck
- Decisions that seemed right but turned out wrong
- How you debugged or worked through problems`,
      },
      iterations: {
        title: 'Iterations & Evolution',
        content: `[Your story here]

Write about:
- How the project evolved from v1 to v2
- Features you added based on using it yourself
- Things you cut or simplified
- UI/UX changes you made after real usage`,
      },
      outcome: {
        title: 'The Outcome',
        content: `[Your story here]

Write about:
- What the project does today
- How often you use it
- The value it provides (time saved? insights gained?)
- Any metrics or tangible results`,
      },
      learnings: {
        title: 'What I Learned',
        content: `[Your story here]

Write about:
- New technologies or patterns you learned
- Product thinking insights
- What you'd do differently next time
- How this project influenced your PM work`,
      },
    },
    links: {
      github: 'https://github.com/BlakeB-PM',
    },
  },
  {
    id: 'hearth',
    title: 'Hearth',
    tagline: 'Your weekly content digest, curated by AI',
    problem: 'Newsletter fatigue. I subscribe to 10+ newsletters but never read them. Content is scattered across platforms with no unified reading experience.',
    solution: 'A content aggregation platform that pulls newsletters from Gmail, uses Claude to summarize them, and presents everything in a beautiful magazine-style weekly digest.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Gmail API', 'Claude API', 'Tailwind CSS', 'Framer Motion'],
    gradient: 'from-amber-500 to-orange-600',
    story: {
      origin: {
        title: 'The Origin',
        content: `[Your story here]

Write about:
- The newsletter fatigue you experienced
- How many newsletters you subscribed to
- The guilt of seeing unread emails pile up
- The "aha moment" when you envisioned a personal digest`,
      },
      approach: {
        title: 'The Approach',
        content: `[Your story here]

Write about:
- Starting with the Gmail API integration
- Designing the "magazine" aesthetic you wanted
- How you structured the AI summarization pipeline
- The "autumn coffee shop" design vision`,
      },
      challenges: {
        title: 'Challenges & Roadblocks',
        content: `[Your story here]

Write about:
- OAuth complexity with Gmail
- Getting consistent quality from AI summaries
- Performance considerations with large email volumes
- Mobile-first design challenges`,
      },
      iterations: {
        title: 'Iterations & Evolution',
        content: `[Your story here]

Write about:
- How the UI evolved
- Features you added or removed
- Changes based on actually using the digest
- Plans for future content sources (podcasts, YouTube)`,
      },
      outcome: {
        title: 'The Outcome',
        content: `[Your story here]

Write about:
- How it changed your content consumption
- Time saved each week
- The reading experience you achieved
- How it reduced inbox anxiety`,
      },
      learnings: {
        title: 'What I Learned',
        content: `[Your story here]

Write about:
- Working with AI for content processing
- Designing for mobile-first experiences
- OAuth flows and API integration patterns
- Building something you actually want to use`,
      },
    },
    links: {
      github: 'https://github.com/BlakeB-PM',
    },
  },
  {
    id: 'whispertranscribe',
    title: 'WhisperTranscribe',
    tagline: 'Global speech-to-text for Windows',
    problem: "Windows lacks a frictionless voice-to-text solution. I wanted to press a hotkey from any app and speak. A superpower for productivity.",
    solution: 'A desktop app using whisper.cpp for local transcription. Press Ctrl+Shift+H anywhere, speak, and text appears in your active window. No cloud, no latency.',
    tech: ['Electron', 'React', 'TypeScript', 'FastAPI', 'whisper.cpp', 'Python', 'Tailwind CSS'],
    gradient: 'from-violet-500 to-purple-600',
    story: {
      origin: {
        title: 'The Origin',
        content: `[Your story here]

Write about:
- The friction of typing vs speaking
- What inspired you (Windows+H? dictation apps?)
- Why existing solutions weren't good enough
- The vision of "speak anywhere, text appears"`,
      },
      approach: {
        title: 'The Approach',
        content: `[Your story here]

Write about:
- Choosing whisper.cpp for local processing
- The hybrid Electron + Python architecture
- Why local-first mattered (privacy, latency)
- Building the global hotkey system`,
      },
      challenges: {
        title: 'Challenges & Roadblocks',
        content: `[Your story here]

Write about:
- Getting whisper.cpp compiled on Windows
- Audio capture challenges
- Text injection into different apps
- Electron + Python communication`,
      },
      iterations: {
        title: 'Iterations & Evolution',
        content: `[Your story here]

Write about:
- The overlay UI evolution
- Model selection features
- Performance optimizations
- Hotkey customization`,
      },
      outcome: {
        title: 'The Outcome',
        content: `[Your story here]

Write about:
- How you use it daily
- Time/effort saved
- Accuracy and speed
- Favorite use cases`,
      },
      learnings: {
        title: 'What I Learned',
        content: `[Your story here]

Write about:
- Desktop app development with Electron
- Local ML model deployment
- Windows system integration
- Building developer tools`,
      },
    },
    links: {
      github: 'https://github.com/BlakeB-PM',
    },
  },
  {
    id: 'vboard',
    title: 'V Board',
    tagline: "Baby's first words, preserved forever",
    problem: "My daughter started saying her first words. I wanted a way to capture and replay these precious moments. A digital keepsake our family could enjoy.",
    solution: 'A beautiful soundboard web app where parents upload audio clips of their child\'s words. Tap a button, hear the memory. Simple, delightful, personal.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web Audio API', 'Node.js'],
    gradient: 'from-pink-500 to-rose-600',
    story: {
      origin: {
        title: 'The Origin',
        content: `[Your story here]

Write about:
- The first words your daughter said
- The realization that these moments are fleeting
- How you wanted to preserve and share them
- The vision of a simple, joyful soundboard`,
      },
      approach: {
        title: 'The Approach',
        content: `[Your story here]

Write about:
- Designing for simplicity and delight
- The pastel, child-friendly aesthetic
- Audio upload and storage decisions
- Making it shareable for grandparents`,
      },
      challenges: {
        title: 'Challenges & Roadblocks',
        content: `[Your story here]

Write about:
- Audio format compatibility
- Mobile recording/upload experience
- Storage and persistence
- Cross-device access`,
      },
      iterations: {
        title: 'Iterations & Evolution',
        content: `[Your story here]

Write about:
- UI improvements after family feedback
- Features added as she learned more words
- Performance and UX refinements
- Future plans`,
      },
      outcome: {
        title: 'The Outcome',
        content: `[Your story here]

Write about:
- How your family uses it
- The joy it brings
- Favorite recordings
- Preserving memories that would otherwise be lost`,
      },
      learnings: {
        title: 'What I Learned',
        content: `[Your story here]

Write about:
- Building for non-technical users (family)
- The power of simple, focused products
- Web Audio APIs
- Designing for emotion, not just function`,
      },
    },
    links: {
      github: 'https://github.com/BlakeB-PM',
    },
  },
  {
    id: 'bealglass',
    title: 'Beal Glass',
    tagline: 'Professional web presence for family business',
    problem: "My dad's auto glass repair business in Odessa, TX needed a professional online presence to compete with larger shops and make it easy for customers to request quotes.",
    solution: 'A clean, mobile-first business website with services showcase, trust signals, and a quote request form. Designed to convert visitors into calls.',
    tech: ['HTML', 'Tailwind CSS', 'Responsive Design', 'JavaScript'],
    gradient: 'from-sky-500 to-blue-600',
    story: {
      origin: {
        title: 'The Origin',
        content: `[Your story here]

Write about:
- Your dad's auto glass business
- Why he needed a website
- The competition from larger shops
- Your offer to build it for him`,
      },
      approach: {
        title: 'The Approach',
        content: `[Your story here]

Write about:
- Researching auto glass websites
- Designing for conversions (calls, quotes)
- Mobile-first for on-the-go customers
- Trust signals and local SEO considerations`,
      },
      challenges: {
        title: 'Challenges & Roadblocks',
        content: `[Your story here]

Write about:
- Understanding the auto glass customer
- Getting the right messaging
- Balancing design with function
- Making it easy for your dad to update`,
      },
      iterations: {
        title: 'Iterations & Evolution',
        content: `[Your story here]

Write about:
- Feedback from your dad
- Design refinements
- Adding/removing features
- Optimizing for mobile`,
      },
      outcome: {
        title: 'The Outcome',
        content: `[Your story here]

Write about:
- How the website performs
- Customer response
- Your dad's feedback
- Pride in helping family`,
      },
      learnings: {
        title: 'What I Learned',
        content: `[Your story here]

Write about:
- Building for a real business/client
- Conversion-focused design
- Working with non-technical stakeholders
- The satisfaction of helping family`,
      },
    },
    links: {
      github: 'https://github.com/BlakeB-PM',
    },
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}
