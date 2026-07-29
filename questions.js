window.QUIZ_DATA = [
  {
    id: "week-1",
    week: 1,
    title: "Cloud Foundations & Economics",
    description:
      "Review cloud value, financial models, service models, deployment approaches, and essential exam vocabulary.",
    topics: ["Cloud value", "CapEx vs OpEx", "Service models", "Core vocabulary"],
    questions: [
      {
        id: "w1q1",
        question:
          "A company provisions test servers in minutes and deletes them after a two-day experiment. Which cloud characteristic is demonstrated most directly?",
        options: [
          "Long procurement cycles",
          "On-demand resource availability",
          "Fixed hardware ownership",
          "Permanent capacity planning"
        ],
        answer: 1,
        explanation:
          "Cloud resources can be provisioned when needed and released afterward. This avoids waiting for hardware procurement and paying for permanent test capacity."
      },
      {
        id: "w1q2",
        question:
          "A finance director wants technology spending to rise and fall with actual usage. Which financial shift supports this goal?",
        options: [
          "OpEx to CapEx",
          "Variable expense to fixed expense",
          "CapEx to OpEx",
          "Usage pricing to hardware ownership"
        ],
        answer: 2,
        explanation:
          "Cloud adoption commonly shifts spending from upfront capital purchases to operational expenses based on consumption."
      },
      {
        id: "w1q3",
        question:
          "Which cost should be included when comparing an on-premises data center with AWS?",
        options: [
          "Only server purchase prices",
          "Only the monthly AWS estimate",
          "Hardware, facilities, power, maintenance, and staffing",
          "Only software-development salaries"
        ],
        answer: 2,
        explanation:
          "A useful total cost of ownership comparison includes both direct and indirect lifecycle costs, not just hardware or the cloud bill."
      },
      {
        id: "w1q4",
        question:
          "A business launches an application in another geographic market without constructing a local facility. Which cloud benefit is this?",
        options: [
          "Go global quickly",
          "Increase fixed expense",
          "Purchase excess capacity",
          "Manage more data centers"
        ],
        answer: 0,
        explanation:
          "AWS Regions allow organizations to deploy workloads near new markets without building their own facilities there."
      },
      {
        id: "w1q5",
        question:
          "Why can a large cloud provider often offer lower variable costs than one company operating its own small data center?",
        options: [
          "Every cloud service is free",
          "Economies of scale",
          "Customers must purchase excess capacity",
          "Cloud providers do not use physical hardware"
        ],
        answer: 1,
        explanation:
          "AWS aggregates demand from many customers and operates at a scale that can produce efficiencies unavailable to many individual organizations."
      },
      {
        id: "w1q6",
        question:
          "An online store automatically removes unneeded capacity after a flash sale ends. Which concept best describes this behavior?",
        options: ["Agility", "Durability", "Elasticity", "Fault tolerance"],
        answer: 2,
        explanation:
          "Elasticity means matching resources to changing demand, including scaling down when demand falls."
      },
      {
        id: "w1q7",
        question:
          "A system can add more resources to support a growing number of users. Which term describes this capability?",
        options: ["Scalability", "Durability", "Compliance", "Capital expenditure"],
        answer: 0,
        explanation:
          "Scalability is the ability to increase or decrease capacity to meet workload demand."
      },
      {
        id: "w1q8",
        question:
          "A stored object remains intact for years, although users briefly cannot access the service. Which quality does the intact object demonstrate?",
        options: ["Availability", "Agility", "Durability", "Elasticity"],
        answer: 2,
        explanation:
          "Durability concerns whether data remains intact over time. Availability concerns whether the service can currently be accessed."
      },
      {
        id: "w1q9",
        question:
          "A web application continues serving users after one of its components fails. Which design quality is most clearly demonstrated?",
        options: ["Variable expense", "Fault tolerance", "SaaS", "Agility"],
        answer: 1,
        explanation:
          "Fault tolerance is the ability to continue operating despite a component failure."
      },
      {
        id: "w1q10",
        question:
          "Which statement best distinguishes high availability from durability?",
        options: [
          "Availability concerns service access; durability concerns data preservation",
          "Availability concerns data preservation; durability concerns rapid deployment",
          "They are two names for the same concept",
          "Availability applies only on premises"
        ],
        answer: 0,
        explanation:
          "Availability measures whether a service is accessible, while durability measures the likelihood that stored data will not be lost."
      },
      {
        id: "w1q11",
        question:
          "A team can create several environments, test an idea, and discard the unsuccessful versions within hours. Which benefit is emphasized?",
        options: ["Agility", "Dedicated tenancy", "Durability", "Fixed capacity"],
        answer: 0,
        explanation:
          "Agility is the ability to experiment, adapt, and deliver changes quickly."
      },
      {
        id: "w1q12",
        question:
          "A company rents virtual machines and manages their operating systems and applications. Which service model is this?",
        options: ["SaaS", "PaaS", "IaaS", "Hybrid SaaS"],
        answer: 2,
        explanation:
          "Infrastructure as a Service supplies foundational infrastructure while the customer manages the guest operating system and applications."
      },
      {
        id: "w1q13",
        question:
          "Developers want to deploy application code without managing the operating system or runtime platform. Which service model fits best?",
        options: ["PaaS", "IaaS", "On-premises hardware", "Colocation"],
        answer: 0,
        explanation:
          "Platform as a Service manages more of the application platform so developers can focus primarily on code and data."
      },
      {
        id: "w1q14",
        question:
          "Employees use a complete customer-relationship application through a browser. The provider manages the entire application. Which model is this?",
        options: ["IaaS", "SaaS", "PaaS", "Private subnet"],
        answer: 1,
        explanation:
          "Software as a Service delivers a finished application to end users while the provider manages the underlying stack."
      },
      {
        id: "w1q15",
        question:
          "Which option normally gives a customer the greatest control over the operating system?",
        options: ["SaaS", "PaaS", "IaaS", "Managed email"],
        answer: 2,
        explanation:
          "IaaS leaves operating-system and application management to the customer, providing more control than PaaS or SaaS."
      },
      {
        id: "w1q16",
        question:
          "A workload runs partly in a company-owned data center and partly in AWS, with network connectivity between them. What deployment model is this?",
        options: ["Cloud-only", "Hybrid", "SaaS-only", "Edge-only"],
        answer: 1,
        explanation:
          "A hybrid architecture connects cloud resources with on-premises infrastructure."
      },
      {
        id: "w1q17",
        question:
          "Which expense is the clearest example of capital expenditure?",
        options: [
          "Paying per request for a cloud function",
          "A monthly cloud storage bill",
          "Purchasing servers and cooling equipment upfront",
          "Paying for compute by the second"
        ],
        answer: 2,
        explanation:
          "CapEx is money spent upfront to acquire long-lived assets such as servers and data-center equipment."
      },
      {
        id: "w1q18",
        question:
          "Which cloud benefit reduces the risk of buying hardware that later sits unused?",
        options: [
          "Stop guessing capacity",
          "Increase fixed costs",
          "Use one permanent server size",
          "Build additional facilities"
        ],
        answer: 0,
        explanation:
          "Cloud capacity can be adjusted as requirements change, reducing the need to predict and purchase peak capacity far in advance."
      },
      {
        id: "w1q19",
        question:
          "Which statement about cloud computing is most accurate?",
        options: [
          "Cloud always costs less regardless of how resources are managed",
          "Cloud eliminates the need for security controls",
          "Cloud provides on-demand resources, but customers must still manage usage and cost",
          "Cloud requires customers to own the physical servers"
        ],
        answer: 2,
        explanation:
          "Cloud offers flexibility and usage-based pricing, but poor architecture or unused resources can still create unnecessary cost."
      },
      {
        id: "w1q20",
        question:
          "A company wants its engineers to focus on products rather than power, cooling, and physical server replacement. Which cloud advantage applies?",
        options: [
          "Stop spending money running data centers",
          "Increase hardware procurement",
          "Use only capital expenditure",
          "Reduce service availability"
        ],
        answer: 0,
        explanation:
          "AWS manages physical facilities and hardware, allowing the customer to focus more effort on applications and business outcomes."
      }
    ]
  },
  {
    id: "week-2",
    week: 2,
    title: "Global Infrastructure & AWS Access",
    description:
      "Practice Regions, Availability Zones, edge infrastructure, service scope, and AWS management interfaces.",
    topics: ["Regions and AZs", "Edge services", "Service scope", "Access methods"],
    questions: [
      {
        id: "w2q1",
        question:
          "A company must keep regulated records within a specific country. What should drive its initial AWS Region shortlist?",
        options: [
          "Data residency and compliance",
          "The Region name",
          "The number of IAM users",
          "The support-plan color"
        ],
        answer: 0,
        explanation:
          "Legal, regulatory, and data-residency requirements can restrict where data may be processed or stored, so they should be evaluated first."
      },
      {
        id: "w2q2",
        question:
          "After compliance requirements are satisfied, which factor most directly affects response time for users?",
        options: ["Latency", "Capital expenditure", "Account alias", "Billing currency"],
        answer: 0,
        explanation:
          "Network distance and routing influence latency, so proximity to users is an important Region-selection factor."
      },
      {
        id: "w2q3",
        question:
          "Why should architects verify AWS service availability before choosing a Region?",
        options: [
          "Every service is global",
          "Services and features can differ by Region",
          "Regions cannot host databases",
          "A Region contains only edge locations"
        ],
        answer: 1,
        explanation:
          "AWS services and newer features are not necessarily available in every Region, so required capabilities must be checked."
      },
      {
        id: "w2q4",
        question:
          "Which statement about AWS regional pricing is accurate?",
        options: [
          "All Regions always have identical prices",
          "Region selection can affect service cost",
          "Only global services have prices",
          "Region selection affects latency but never cost"
        ],
        answer: 1,
        explanation:
          "Pricing can vary by Region because operating and market conditions differ."
      },
      {
        id: "w2q5",
        question:
          "What is the relationship between a Region and an Availability Zone?",
        options: [
          "A Region contains multiple isolated Availability Zones",
          "An Availability Zone contains multiple Regions",
          "They are identical concepts",
          "A Region is located inside one edge cache"
        ],
        answer: 0,
        explanation:
          "A Region is a geographic area containing multiple isolated Availability Zones connected by low-latency networking."
      },
      {
        id: "w2q6",
        question:
          "An application runs all servers in one Availability Zone. Which event is it least prepared to withstand?",
        options: [
          "A failure affecting that Availability Zone",
          "A user changing a password",
          "A new AWS account being created",
          "A billing report being generated"
        ],
        answer: 0,
        explanation:
          "A single-AZ architecture depends on one failure domain. Multi-AZ redundancy can reduce that risk."
      },
      {
        id: "w2q7",
        question:
          "Which design provides the strongest protection from the loss of one Availability Zone?",
        options: [
          "Two servers in the same AZ",
          "Redundant resources and replicated data across multiple AZs",
          "One larger server",
          "A second IAM user"
        ],
        answer: 1,
        explanation:
          "Multi-AZ resilience requires redundant resources, appropriate traffic routing, and data replication—not merely additional resources in one AZ."
      },
      {
        id: "w2q8",
        question:
          "Two AWS accounts both display an Availability Zone named us-east-1a. Why might those names refer to different physical zones?",
        options: [
          "AZ letter mappings can vary between accounts",
          "Customers build their own Availability Zones",
          "The Region changes every hour",
          "AZ names identify edge locations"
        ],
        answer: 0,
        explanation:
          "AWS maps AZ letters independently across accounts. AZ IDs provide consistent physical-zone identifiers."
      },
      {
        id: "w2q9",
        question:
          "Which identifier consistently refers to the same physical Availability Zone across AWS accounts?",
        options: ["Account alias", "AZ ID", "Bucket name", "Access key ID"],
        answer: 1,
        explanation:
          "An AZ ID, such as use1-az1, consistently identifies a physical Availability Zone across accounts."
      },
      {
        id: "w2q10",
        question:
          "A media company wants cached videos delivered from locations near viewers worldwide. Which infrastructure is most relevant?",
        options: [
          "Edge locations",
          "Dedicated Hosts",
          "IAM groups",
          "Private subnets only"
        ],
        answer: 0,
        explanation:
          "CloudFront and related services use edge locations to deliver content closer to users."
      },
      {
        id: "w2q11",
        question:
          "Which statement about edge locations is correct?",
        options: [
          "They replace Regions for all AWS workloads",
          "They provide general-purpose access to every AWS service",
          "They support low-latency content and network delivery near users",
          "They exist only inside customer data centers"
        ],
        answer: 2,
        explanation:
          "Edge locations bring selected delivery and networking capabilities closer to users; they are not general-purpose Regions."
      },
      {
        id: "w2q12",
        question:
          "A real-time application needs selected AWS services close to users in a major city. Which offering best fits?",
        options: ["AWS Local Zones", "AWS Artifact", "AWS Budgets", "AWS Organizations"],
        answer: 0,
        explanation:
          "Local Zones place selected compute, storage, and other services near major population or industry centers."
      },
      {
        id: "w2q13",
        question:
          "A mobile application needs extremely low latency from within a telecommunications provider's 5G network. Which offering should be considered?",
        options: ["AWS Outposts", "AWS Wavelength", "AWS CloudFormation", "Amazon EBS"],
        answer: 1,
        explanation:
          "AWS Wavelength places selected AWS services within telecommunications providers' 5G networks."
      },
      {
        id: "w2q14",
        question:
          "A factory requires AWS-managed infrastructure physically installed at its own facility. Which offering is designed for this?",
        options: ["AWS Outposts", "Edge locations", "AWS Wavelength", "Amazon Route 53"],
        answer: 0,
        explanation:
          "AWS Outposts extends AWS infrastructure and services into a customer's on-premises location."
      },
      {
        id: "w2q15",
        question:
          "Which resource is zonal rather than regional or global?",
        options: [
          "An Amazon EBS volume",
          "An IAM user",
          "A CloudFront distribution",
          "A Route 53 hosted zone"
        ],
        answer: 0,
        explanation:
          "An EBS volume is created in one Availability Zone and must attach to an EC2 instance in that same AZ."
      },
      {
        id: "w2q16",
        question:
          "Which resource is normally created within a selected AWS Region?",
        options: [
          "A Lambda function",
          "An IAM user",
          "A Route 53 domain registration",
          "A CloudFront distribution"
        ],
        answer: 0,
        explanation:
          "Lambda functions are regional resources. IAM, Route 53, and CloudFront are common global-service examples for this exam."
      },
      {
        id: "w2q17",
        question:
          "An administrator wants a visual, point-and-click interface for occasional AWS tasks. Which access method is most suitable?",
        options: [
          "AWS Management Console",
          "AWS SDK",
          "An Availability Zone",
          "A route table"
        ],
        answer: 0,
        explanation:
          "The AWS Management Console is the browser-based graphical interface for managing AWS."
      },
      {
        id: "w2q18",
        question:
          "An operations team wants to automate a repeated AWS task from a terminal script. What should it use?",
        options: ["AWS CLI", "AWS Management Console only", "AWS Outposts", "An edge location"],
        answer: 0,
        explanation:
          "The AWS Command Line Interface supports terminal commands and automation scripts."
      },
      {
        id: "w2q19",
        question:
          "A Java application must create objects in Amazon S3 through code. Which tool is the best fit?",
        options: ["AWS SDK for Java", "AWS Local Zones", "AWS Pricing Calculator", "AWS Artifact"],
        answer: 0,
        explanation:
          "AWS SDKs provide language-specific libraries that applications use to call AWS service APIs."
      },
      {
        id: "w2q20",
        question:
          "A tutor needs a browser-based terminal that is already authenticated to the AWS account. Which service is designed for this?",
        options: ["AWS CloudShell", "Amazon CloudFront", "AWS Wavelength", "Amazon ECR"],
        answer: 0,
        explanation:
          "AWS CloudShell provides a browser-based shell with common tools and AWS credentials from the current console session."
      }
    ]
  },
  {
    id: "week-3",
    week: 3,
    title: "Well-Architected, CAF & Migration",
    description:
      "Apply architecture pillars, cloud-adoption capabilities, migration strategies, and AWS transfer services.",
    topics: ["Six pillars", "AWS CAF", "Migration 7 Rs", "Transfer services"],
    questions: [
      {
        id: "w3q1",
        question:
          "A team regularly reviews operational procedures, learns from failures, and makes small improvements. Which Well-Architected pillar is emphasized?",
        options: [
          "Operational Excellence",
          "Cost Optimization",
          "Sustainability",
          "Performance Efficiency"
        ],
        answer: 0,
        explanation:
          "Operational Excellence focuses on running and monitoring systems and continually improving processes and procedures."
      },
      {
        id: "w3q2",
        question:
          "A workload encrypts sensitive records and grants users only the permissions required for their jobs. Which pillar is most relevant?",
        options: ["Reliability", "Security", "Sustainability", "Performance Efficiency"],
        answer: 1,
        explanation:
          "The Security pillar includes protecting data and systems, managing identities, and applying least privilege."
      },
      {
        id: "w3q3",
        question:
          "An application automatically recovers after an infrastructure disruption and continues meeting demand. Which pillar does this demonstrate?",
        options: ["Reliability", "Cost Optimization", "Business", "Sustainability"],
        answer: 0,
        explanation:
          "Reliability includes recovering from disruptions and dynamically acquiring resources to meet demand."
      },
      {
        id: "w3q4",
        question:
          "A team evaluates newer instance types to achieve the required performance with fewer resources. Which pillar is emphasized?",
        options: [
          "Performance Efficiency",
          "Security",
          "Operational Excellence",
          "Governance"
        ],
        answer: 0,
        explanation:
          "Performance Efficiency concerns using computing resources efficiently and adapting as technology and demand change."
      },
      {
        id: "w3q5",
        question:
          "A company identifies idle resources and removes them without reducing business value. Which pillar is being applied?",
        options: ["Reliability", "Cost Optimization", "Security", "People"],
        answer: 1,
        explanation:
          "Cost Optimization is about delivering value while avoiding unnecessary expenditure."
      },
      {
        id: "w3q6",
        question:
          "An engineering team reduces unnecessary data processing to lower the environmental impact of a workload. Which pillar applies?",
        options: ["Sustainability", "Security", "Reliability", "Platform"],
        answer: 0,
        explanation:
          "The Sustainability pillar focuses on minimizing the environmental impact of cloud workloads."
      },
      {
        id: "w3q7",
        question:
          "What does the AWS Well-Architected Tool help a team do?",
        options: [
          "Review workloads and record architecture risks",
          "Purchase Reserved Instances automatically",
          "Register domain names",
          "Transfer physical servers"
        ],
        answer: 0,
        explanation:
          "The tool guides workload reviews against Well-Architected questions and records identified risks and improvements."
      },
      {
        id: "w3q8",
        question:
          "A healthcare workload needs additional guidance for industry-specific architecture concerns. What extends the Well-Architected Framework for focused use cases?",
        options: ["Lenses", "Access keys", "Edge caches", "Savings Plans"],
        answer: 0,
        explanation:
          "Well-Architected lenses provide additional questions and best practices for specific technologies or industries."
      },
      {
        id: "w3q9",
        question:
          "Which AWS CAF perspective is most concerned with linking cloud investment to measurable business outcomes?",
        options: ["Business", "Platform", "Security", "Operations"],
        answer: 0,
        explanation:
          "The Business perspective helps ensure cloud investments support transformation goals and business value."
      },
      {
        id: "w3q10",
        question:
          "A company is addressing cloud skills, culture, leadership, and organizational change. Which AWS CAF perspective applies?",
        options: ["People", "Governance", "Platform", "Security"],
        answer: 0,
        explanation:
          "The People perspective covers culture, organizational structure, leadership, workforce, and change management."
      },
      {
        id: "w3q11",
        question:
          "Which AWS CAF perspective focuses on orchestrating cloud initiatives while controlling organizational risk?",
        options: ["Governance", "People", "Platform", "Operations"],
        answer: 0,
        explanation:
          "The Governance perspective aligns cloud initiatives while managing benefits, risks, and compliance."
      },
      {
        id: "w3q12",
        question:
          "Which sequence correctly represents the AWS CAF transformation phases?",
        options: [
          "Envision, align, launch, scale",
          "Purchase, install, patch, retire",
          "Discover, invoice, support, close",
          "Design, reserve, encrypt, delete"
        ],
        answer: 0,
        explanation:
          "AWS CAF describes the iterative transformation phases as envision, align, launch, and scale."
      },
      {
        id: "w3q13",
        question:
          "A company moves a server-based application to AWS with no meaningful code changes. Which migration strategy is this?",
        options: ["Rehost", "Refactor", "Repurchase", "Retire"],
        answer: 0,
        explanation:
          "Rehost is the classic lift-and-shift approach: move the workload with minimal changes."
      },
      {
        id: "w3q14",
        question:
          "During migration, a team moves its database to a managed service but avoids redesigning the entire application. Which strategy is this?",
        options: ["Retain", "Replatform", "Retire", "Relocate"],
        answer: 1,
        explanation:
          "Replatform introduces targeted cloud optimizations without a full application rewrite."
      },
      {
        id: "w3q15",
        question:
          "A legacy monolith is redesigned into cloud-native services to gain scalability and agility. Which migration strategy applies?",
        options: ["Rehost", "Retain", "Refactor", "Relocate"],
        answer: 2,
        explanation:
          "Refactor, also called re-architect, significantly changes an application to use cloud-native capabilities."
      },
      {
        id: "w3q16",
        question:
          "A business replaces an internally developed HR application with a subscription SaaS product. Which strategy is this?",
        options: ["Repurchase", "Rehost", "Retire", "Relocate"],
        answer: 0,
        explanation:
          "Repurchase means moving to a different product, often replacing an existing application with SaaS."
      },
      {
        id: "w3q17",
        question:
          "A team postpones moving a legacy system because a required dependency cannot yet operate in AWS. Which strategy applies for now?",
        options: ["Retain", "Retire", "Refactor", "Repurchase"],
        answer: 0,
        explanation:
          "Retain means keeping a workload in its current environment for now, often because migration is not currently practical or valuable."
      },
      {
        id: "w3q18",
        question:
          "Which AWS service is designed to automate rehosting physical or virtual servers to AWS?",
        options: [
          "AWS Application Migration Service",
          "AWS Database Migration Service",
          "AWS Artifact",
          "Amazon CloudFront"
        ],
        answer: 0,
        explanation:
          "AWS Application Migration Service, or MGN, simplifies lift-and-shift server migration to AWS."
      },
      {
        id: "w3q19",
        question:
          "A company needs an online service that repeatedly transfers files from on-premises storage to Amazon S3. Which service is the best fit?",
        options: ["AWS DataSync", "AWS Snowball", "AWS IAM", "Amazon Route 53"],
        answer: 0,
        explanation:
          "AWS DataSync automates and accelerates online movement of data between on-premises storage and AWS storage services."
      },
      {
        id: "w3q20",
        question:
          "A remote site must move hundreds of terabytes to AWS, but its network connection is too slow. Which solution is most appropriate?",
        options: ["AWS Snow Family", "AWS CloudShell", "AWS Budgets", "AWS WAF"],
        answer: 0,
        explanation:
          "AWS Snow Family devices support offline data transfer when network bandwidth is insufficient for a practical online migration."
      }
    ]
  }
];
