window.QUIZ_DATA = [
  {
    id: "week-1",
    week: 1,
    title: "Orientation and safe setup",
    description:
      "Course path, Class vs Lab Catch-up, AWS signup first, Azure later, and the money rules we will not break.",
    topics: [
      "Dual-cert path",
      "Class vs lab",
      "AWS Free Tier",
      "Azure later",
      "Cost rules"
    ],
    questions: [
      {
        id: "w1q1",
        question:
          "This Thrive Africa Cloud Foundations course prepares you for which two beginner exams?",
        options: [
          "AWS Solutions Architect Professional and Azure Administrator",
          "AWS Certified Cloud Practitioner (CLF-C02) and Microsoft Azure Fundamentals (AZ-900)",
          "CompTIA A+ and Network+",
          "Only Kubernetes certifications"
        ],
        answer: 1,
        explanation:
          "The dual path is CLF-C02 and AZ-900. Both are beginner exams. Labs exist so scenario questions make sense."
      },
      {
        id: "w1q2",
        question:
          "In a normal week, what is Class day for, and what is Lab Catch-up for?",
        options: [
          "Class day is for building everything; Lab Catch-up is only for watching videos",
          "Class day teaches one idea; Lab Catch-up is for doing the work, a short quiz, and cleanup",
          "Both days are only theory with no practice",
          "Lab Catch-up is where all new theory is introduced"
        ],
        answer: 1,
        explanation:
          "New theory stays on Class day. Catch-up is for doing, unblocking, the quiz, and deleting what you built."
      },
      {
        id: "w1q3",
        question:
          "For Week 1 orientation, what should learners create first?",
        options: [
          "An Azure free account and three virtual machines",
          "An AWS account and Free Tier signup only",
          "A Kubernetes cluster",
          "A multi-region production network"
        ],
        answer: 1,
        explanation:
          "Take-home is AWS first. Azure free credit lasts about 30 days, so we open Azure later in the course."
      },
      {
        id: "w1q4",
        question:
          "Why do we wait before creating an Azure free account in this course?",
        options: [
          "Azure cannot be used for learning",
          "The usual Azure free credit lasts about 30 days, so we start it closer to the Azure weeks",
          "Azure has no free offer",
          "AWS and Azure cannot be learned in the same course"
        ],
        answer: 1,
        explanation:
          "The Azure free credit is short (about one month). Signing up too early wastes the credit before you need Azure labs."
      },
      {
        id: "w1q5",
        question: "Which statement about Free Tier is true?",
        options: [
          "Free Tier means every resource is free forever",
          "Free is not unlimited. A forgotten virtual machine can still create a bill",
          "Free Tier removes the need for an email address",
          "Free Tier turns off MFA permanently"
        ],
        answer: 1,
        explanation:
          "Free Tier has rules and limits. Leaving a machine running overnight is a common surprise bill."
      },
      {
        id: "w1q6",
        question:
          "Which money rule comes before launching any virtual machine?",
        options: [
          "Post the root password in the cohort chat",
          "Create a budget with an email alert",
          "Turn off all MFA",
          "Use the largest instance size available"
        ],
        answer: 1,
        explanation:
          "A budget plus email alert is part of the grade. In this course, AWS alerts and cost monitoring are set in the lab after orientation."
      },
      {
        id: "w1q7",
        question: "What does cleanup mean in this course?",
        options: [
          "Leaving small resources running because they are cheap",
          "Delete or deallocate lab resources, then confirm spend has stopped",
          "Only closing the browser tab",
          "Renaming the resource and keeping it forever"
        ],
        answer: 1,
        explanation:
          "Cleanup is required. Small resources still cost money if you leave them."
      },
      {
        id: "w1q8",
        question:
          "Which tags should you put on every lab resource later in the course?",
        options: [
          "color=blue and size=large",
          "course=cloud-foundations and owner=your-name",
          "exam=skip and budget=none",
          "public=true and mfa=off"
        ],
        answer: 1,
        explanation:
          "Tags help you find and clean up course resources. Use course=cloud-foundations and owner=your-name."
      },
      {
        id: "w1q9",
        question:
          "How should you treat the AWS root user during the course?",
        options: [
          "Use root for every daily lab click",
          "It is for emergencies. Turn on MFA. Use a separate daily user for lab work",
          "Share the root password in WhatsApp for teamwork",
          "Disable MFA so login is faster"
        ],
        answer: 1,
        explanation:
          "Root is break-glass. MFA protects it. Daily labs use a separate user."
      },
      {
        id: "w1q10",
        question:
          "Before you create a resource in the AWS console, what should you check first?",
        options: [
          "The Region in the top corner",
          "Whether CapEx is written on the screen",
          "The Netflix homepage",
          "Whether Azure is open in another tab"
        ],
        answer: 0,
        explanation:
          "If the Region is wrong, you may not find the thing you just created. Check Region before you create."
      }
    ]
  },
  {
    id: "week-2",
    week: 2,
    title: "What is cloud computing?",
    description:
      "Cloud definition, benefits, CapEx vs OpEx, deployment models, IaaS/PaaS/SaaS, shared responsibility, HA, RTO, and RPO.",
    topics: [
      "What is cloud",
      "Benefits",
      "CapEx vs OpEx",
      "IaaS PaaS SaaS",
      "Shared responsibility"
    ],
    questions: [
      {
        id: "w2q1",
        question: "Cloud computing means:",
        options: [
          "Buying every server yourself and keeping it only under your desk",
          "Renting computing over the internet instead of owning all the machines",
          "Using only Wi-Fi with no computers involved",
          "Deleting all your files so nothing is stored"
        ],
        answer: 1,
        explanation:
          "A provider owns the buildings and hardware. You use what you need over the internet and stop paying when you stop using it."
      },
      {
        id: "w2q2",
        question: "Which of these is a benefit of cloud?",
        options: [
          "You never need passwords again",
          "Elasticity: grow and shrink with demand",
          "The internet stops working when traffic rises",
          "Cloud is always free for every workload"
        ],
        answer: 1,
        explanation:
          "Elasticity matches capacity to demand. Cloud is not always free, and security still matters."
      },
      {
        id: "w2q3",
        question: "CapEx means:",
        options: [
          "Paying a monthly operating bill as you go",
          "Upfront capital spend, such as buying servers",
          "A free credit that never expires",
          "Deleting unused resources"
        ],
        answer: 1,
        explanation:
          "Capital expenditure is the big upfront purchase. Buying servers or a generator is CapEx-like."
      },
      {
        id: "w2q4",
        question: "OpEx means:",
        options: [
          "Buying a building once and never paying again",
          "Ongoing operating spend, such as a monthly cloud bill",
          "Only hardware costs",
          "A type of virtual machine"
        ],
        answer: 1,
        explanation:
          "Operating expenditure is the ongoing bill. Cloud often looks like OpEx. OpEx is not free if the meter keeps running."
      },
      {
        id: "w2q5",
        question: "Gmail or Outlook used in the browser is usually:",
        options: ["IaaS", "PaaS", "SaaS", "Private cloud only"],
        answer: 2,
        explanation:
          "You use a full application in the browser and mostly manage users and data. That is Software as a Service."
      },
      {
        id: "w2q6",
        question:
          "Linux virtual machines that you patch yourself, running your own app, are usually:",
        options: ["SaaS", "IaaS", "Multi-cloud by default", "CapEx only"],
        answer: 1,
        explanation:
          "You manage the guest operating system, the app, and the data. That is Infrastructure as a Service."
      },
      {
        id: "w2q7",
        question:
          "In the shared responsibility model, who usually owns your passwords, MFA, and how you configure access?",
        options: [
          "Only the cloud provider",
          "You (the customer)",
          "Nobody",
          "The electricity company"
        ],
        answer: 1,
        explanation:
          "The provider secures the cloud. You secure what you put in it, including identity and configuration."
      },
      {
        id: "w2q8",
        question: "High availability (HA) means:",
        options: [
          "The app is deleted every night",
          "Designing so the service can keep serving if a component fails",
          "Using only one server forever",
          "Never taking backups"
        ],
        answer: 1,
        explanation:
          "HA keeps the service up when a part fails, for example two web servers so one can fail."
      },
      {
        id: "w2q9",
        question: "RPO (Recovery Point Objective) is about:",
        options: [
          "How quickly you must restore the service",
          "How much data loss (in time) you can accept",
          "How many users you have",
          "The colour of the console"
        ],
        answer: 1,
        explanation:
          "RPO is the acceptable data-loss window. RTO is how quickly you must restore the service."
      },
      {
        id: "w2q10",
        question:
          "True or false: using more than one public cloud (multi-cloud) always means better reliability by default.",
        options: ["True", "False", "Only on weekends", "Only for email"],
        answer: 1,
        explanation:
          "Multi-cloud adds accounts, bills, and complexity. Reliability must be designed. It is not automatic."
      }
    ]
  }
];
