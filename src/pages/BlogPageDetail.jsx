import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ExternalLink, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link, useParams, useNavigate } from 'react-router-dom';

// ─── Full blog content keyed by slug ────────────────────────────────────────
const BLOG_CONTENT = {
  'wordpress-vs-framer': {
    title: 'WordPress vs. Framer: Choosing the Right Platform for Your Website',
    platform: 'Dev.to',
    published_date: 'Mar 10, 2026',
    read_time: 10,
    tags: ['WordPress', 'Framer', 'Website Builder', 'CMS', 'Web Design'],
    sections: [
      {
        heading: 'Introduction',
        body: `Choosing the right platform for your website is one of the most consequential decisions you'll make as a builder or business owner. Two platforms that come up constantly in modern web design conversations are WordPress and Framer. On the surface they couldn't be more different — WordPress is a battle-tested CMS powering over 40% of the web, while Framer is a sleek design-first builder that has rapidly won over the design community. So which one is right for you? Let's break it down.`,
      },
      {
        heading: 'What is WordPress?',
        body: `WordPress is an open-source CMS (Content Management System) that has been around since 2003. It started as a blogging platform and has grown into a full-featured website builder with an enormous ecosystem of plugins (60,000+) and themes. It powers everything from personal blogs to enterprise-level sites like TechCrunch and The New Yorker.\n\nWordPress comes in two flavours: WordPress.com (hosted, simpler) and WordPress.org (self-hosted, fully customisable). For serious projects, WordPress.org is almost always the choice — you host it yourself, you own your data, and you have complete control.`,
      },
      {
        heading: 'What is Framer?',
        body: `Framer started life as a prototyping tool popular among product designers. In 2022 it pivoted into a no-code website builder that lets you design and publish production sites directly from a Figma-like canvas. Its superpower is motion: animations, scroll-triggered effects, and interactive micro-interactions that would take days to hand-code can be achieved in minutes.\n\nFramer uses React under the hood, generates clean semantic HTML, and includes a built-in CDN for fast global delivery. It also ships with a CMS feature (Framer CMS) for content-driven sites.`,
      },
      {
        heading: 'Ease of Use',
        body: `WordPress has a learning curve. The block editor (Gutenberg) is approachable, but themes, plugins, child-themes, and hosting configuration can overwhelm beginners. Page builders like Elementor or Divi flatten this curve, but add another layer of complexity.\n\nFramer is designed for designers first. If you're comfortable with Figma you'll feel at home within an hour. The trade-off is that highly complex content structures (e.g., a WooCommerce shop with 10,000 SKUs) are easier in WordPress than Framer.`,
      },
      {
        heading: 'Design Freedom & Motion',
        body: `Framer wins here — unambiguously. Pixel-perfect layouts, scroll animations, variable fonts, and component variants are first-class citizens. WordPress can achieve great design too, but usually requires a premium page builder and custom CSS to get close.\n\nIf your brand depends on a distinctive, animated web presence (agencies, portfolios, SaaS landing pages), Framer is hard to beat. If your site is primarily content-heavy — a blog, knowledge base, or e-commerce store — WordPress's design limitations matter less.`,
      },
      {
        heading: 'SEO & Performance',
        body: `Both platforms can achieve excellent SEO scores. WordPress has mature plugins (Yoast SEO, Rank Math) that make on-page SEO straightforward. Framer generates semantic HTML, has fast load times out of the box due to its CDN, and recently added sitemap and meta-tag controls.\n\nWhere WordPress can struggle is performance: a poorly optimised WordPress site with too many plugins is notoriously slow. A well-configured WordPress site with caching (WP Rocket) and a good host can be equally fast, but it requires more intentional effort.`,
      },
      {
        heading: 'Pricing',
        body: `WordPress.org itself is free — you pay for hosting (typically $5–$30/month on shared hosting, more on managed hosts like WP Engine), a theme, and any premium plugins.\n\nFramer charges per site: a free tier for personal projects, a Mini plan (~$5/month), Basic (~$15/month), and Pro (~$30/month). For a single marketing site, Framer's all-inclusive pricing is predictable. For a complex WordPress build with multiple premium plugins, costs can add up quickly.`,
      },
      {
        heading: 'Extensibility & Integrations',
        body: `WordPress's plugin ecosystem is unmatched. WooCommerce, LMS plugins, membership systems, advanced forms, custom post types — almost anything you can imagine has a WordPress plugin. This extensibility is WordPress's greatest strength.\n\nFramer has integrations with Zapier, Airtable, and supports custom code components (you can drop in React components), but it can't match WordPress's depth for complex functionality.`,
      },
      {
        heading: 'When to Choose WordPress',
        body: `- You need a blog with long-form content and a large archive.\n- You're building an e-commerce store (WooCommerce).\n- You need a membership site, LMS, or multi-author publication.\n- You require advanced custom fields and post types.\n- Your team includes developers comfortable with PHP and the WordPress ecosystem.`,
      },
      {
        heading: 'When to Choose Framer',
        body: `- You're building a marketing site, landing page, or portfolio.\n- Design quality and motion are central to your brand.\n- You want to go from design to live site without writing code.\n- You're a solo designer or small agency handling multiple client sites.\n- Fast, consistent performance with zero DevOps overhead is a priority.`,
      },
      {
        heading: 'Conclusion',
        body: `There's no universally superior platform — it depends on your priorities. WordPress is the workhorse: powerful, extensible, and battle-tested for content-heavy and e-commerce sites. Framer is the designer's shortcut to a beautiful, fast, animated web presence with minimal technical overhead.\n\nIn my own work, I use both. Framer for client marketing sites where visual impact matters most, and WordPress/WooCommerce where content depth or e-commerce functionality is the core requirement. Understanding the trade-offs means you can make the right call for each project — and that's the real skill.`,
      },
    ],
  },

  'woocommerce-vs-shopify': {
    title: 'WooCommerce vs. Shopify: A Head-to-Head for E-commerce Success',
    platform: 'Medium',
    published_date: 'Feb 18, 2026',
    read_time: 12,
    tags: ['WooCommerce', 'Shopify', 'E-commerce', 'Online Store', 'Business'],
    sections: [
      {
        heading: 'Introduction',
        body: `If you're launching an online store in 2026, chances are you've already heard of both WooCommerce and Shopify. Together they power a huge slice of global e-commerce. But they represent fundamentally different philosophies: WooCommerce is open-source, self-hosted, and infinitely customisable; Shopify is a closed, hosted platform that prioritises simplicity and speed-to-launch. This article breaks down which is the better fit for your business.`,
      },
      {
        heading: 'Platform Overview',
        body: `WooCommerce is a free WordPress plugin — it transforms any WordPress site into a fully functional online store. Because it's built on WordPress, you inherit the entire WordPress ecosystem: thousands of extensions, complete control over your code, and the ability to host wherever you like.\n\nShopify is a dedicated e-commerce SaaS platform founded in 2006. It handles hosting, security, updates, and PCI compliance for you. You pay a monthly subscription and transaction fees, and build your store using its drag-and-drop editor and app store.`,
      },
      {
        heading: 'Setup & Ease of Use',
        body: `Shopify is famously easy to set up. You can have a store live in an afternoon with no technical knowledge. The admin interface is clean and intuitive, and Shopify's onboarding guides you through every step.\n\nWooCommerce requires more effort: you need WordPress hosting, domain configuration, SSL, and plugin setup before you've added a single product. That said, once configured it's not difficult to use day-to-day. If you're already running a WordPress site, adding WooCommerce is straightforward.`,
      },
      {
        heading: 'Cost Comparison',
        body: `WooCommerce itself is free, but the total cost depends heavily on your stack:\n- Hosting: $10–$50/month (managed WooCommerce hosts like Kinsta or Siteground)\n- Domain: ~$15/year\n- Premium theme: $50–$200 one-time\n- Extensions: $0–$500+/year depending on features\n- No transaction fees beyond your payment gateway\n\nShopify pricing:\n- Basic: $39/month\n- Shopify: $105/month\n- Advanced: $399/month\n- Plus: $2,300+/month for enterprise\n- Transaction fees: 0.5–2% unless using Shopify Payments\n- Apps: can add $50–$300+/month\n\nFor small stores with modest needs, WooCommerce is often cheaper. For stores scaling rapidly that need reliability without DevOps overhead, Shopify's predictable pricing can actually save money.`,
      },
      {
        heading: 'Customisation & Flexibility',
        body: `WooCommerce is in a different league here. Because it's open-source you can modify anything: checkout flow, product data structures, pricing logic, fulfilment workflows. Advanced developers can build exactly what the business requires. This is why large, complex stores often choose WooCommerce despite the higher maintenance overhead.\n\nShopify is highly customisable within its constraints. The Liquid templating language and the Storefront API give developers real power, and the app ecosystem (8,000+ apps) handles most common requirements. But there are things you simply cannot change — like the checkout page on lower-tier plans — which can be a dealbreaker for some businesses.`,
      },
      {
        heading: 'Payment Gateways',
        body: `Shopify Payments (available in select countries) eliminates transaction fees and integrates seamlessly. Outside of Shopify Payments you pay 0.5–2% per transaction on top of gateway fees — that stings at scale. WooCommerce has no built-in transaction fee; you pay only your payment gateway's rate. For markets like Kenya where Shopify Payments isn't available and M-Pesa integration is critical, WooCommerce with a custom Daraja integration is often the practical choice.`,
      },
      {
        heading: 'Scalability',
        body: `Both platforms can handle large stores, but they scale differently. Shopify scales effortlessly — Shopify Plus powers some of the world's largest brands (Gymshark, Kylie Cosmetics). You don't manage infrastructure; Shopify does.\n\nWooCommerce can absolutely scale, but it requires more engineering: proper hosting (managed WordPress, Redis caching, CDN), database optimisation, and potentially custom development. At very high traffic and order volumes, the operational overhead of WooCommerce becomes a real consideration.`,
      },
      {
        heading: 'SEO Capabilities',
        body: `WooCommerce inherits WordPress's SEO strengths. With Yoast or Rank Math you have granular control over metadata, sitemaps, schema markup, and more. URL structures are fully customisable. WordPress's blogging capabilities make content marketing — a key SEO driver — native and powerful.\n\nShopify has solid built-in SEO fundamentals (auto-sitemaps, canonical tags, structured data) but has historically had some limitations, like the forced /collections/ and /products/ URL structure. These are minor in practice and Shopify continues to improve its SEO toolset.`,
      },
      {
        heading: 'Security & Maintenance',
        body: `Shopify handles all security and compliance for you — SSL, PCI DSS, patch management. This is a significant operational benefit, especially for teams without dedicated developers.\n\nWith WooCommerce, security is your responsibility: keeping WordPress, WooCommerce, plugins, and themes updated; configuring firewalls; managing backups. Use a managed host and a security plugin (Wordfence) and the risk is manageable, but it's real ongoing effort.`,
      },
      {
        heading: 'Which Should You Choose?',
        body: `Choose WooCommerce if:\n- You already have a WordPress site.\n- You need deep customisation or unique checkout logic.\n- You want to avoid per-transaction fees.\n- You're in a market where Shopify Payments isn't available.\n- You have developer resources to manage maintenance.\n\nChoose Shopify if:\n- You want to launch quickly with minimal technical overhead.\n- You're scaling fast and want infrastructure managed for you.\n- Your team isn't technical and needs an intuitive admin.\n- You're building a direct-to-consumer brand that could scale globally.`,
      },
      {
        heading: 'Conclusion',
        body: `Having worked with both platforms extensively — maintaining WooCommerce stores and building Shopify storefronts — I've come to appreciate that neither is universally better. WooCommerce rewards technical investment with unmatched flexibility and cost efficiency at the right scale. Shopify rewards simplicity and speed with an exceptional merchant experience.\n\nThe best platform is the one your team can actually execute well on. Know your constraints, know your customers, and choose accordingly.`,
      },
    ],
  },

  'react-typescript-scalable': {
    title: 'Building Scalable React Applications with TypeScript',
    platform: 'Kodaschool',
    published_date: 'Medium',
    read_time: 8,
    tags: ['React', 'TypeScript', 'Architecture', 'Performance'],
    sections: [
      {
        heading: 'Why TypeScript for React?',
        body: `TypeScript has become the de-facto standard for production React applications. The type safety it provides isn't just about catching bugs at compile time — it's about enabling confident refactoring, self-documenting code, and a development experience that scales with team size. When you're working solo on a small project, TypeScript can feel like overhead. When you're three months into a complex codebase with five other developers, it feels indispensable.`,
      },
      {
        heading: 'Project Structure That Scales',
        body: `The most important architectural decision in a large React app is folder structure. Feature-based organisation beats type-based organisation at scale:\n\n\`\`\`\nsrc/\n  features/\n    auth/\n      components/\n      hooks/\n      api/\n      types.ts\n      index.ts\n    dashboard/\n    products/\n  shared/\n    components/\n    hooks/\n    utils/\n  lib/\n    api-client.ts\n    query-client.ts\n\`\`\`\n\nEach feature is a self-contained module. Shared utilities and components live in \`shared/\`. This makes it easy to understand the scope of a change and to eventually extract features into micro-frontends if needed.`,
      },
      {
        heading: 'Typing Props and State',
        body: `Avoid using \`any\`. Be explicit about prop types using interfaces, and leverage TypeScript's utility types (\`Partial\`, \`Required\`, \`Pick\`, \`Omit\`) to derive types rather than repeating yourself:\n\n\`\`\`typescript\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n  role: 'admin' | 'user' | 'guest';\n}\n\n// Derive a type for the edit form — only editable fields\ntype EditUserForm = Pick<User, 'name' | 'email'>;\n\nconst UserEditForm: React.FC<{ initial: EditUserForm; onSave: (data: EditUserForm) => void }> = ({\n  initial,\n  onSave,\n}) => {\n  // ...\n};\n\`\`\``,
      },
      {
        heading: 'Custom Hooks as the Core Abstraction',
        body: `In scalable React apps, custom hooks are the primary unit of logic reuse. Keep components thin — they should be responsible for rendering, not data fetching or complex business logic. Encapsulate that in typed hooks:\n\n\`\`\`typescript\nfunction useUserProfile(userId: string) {\n  const query = useQuery<User, ApiError>({\n    queryKey: ['user', userId],\n    queryFn: () => api.users.getById(userId),\n  });\n\n  return {\n    user: query.data,\n    isLoading: query.isLoading,\n    error: query.error,\n  };\n}\n\`\`\`\n\nThis makes testing straightforward and decouples the component from the data layer.`,
      },
      {
        heading: 'Performance Patterns',
        body: `TypeScript doesn't impact runtime performance, but good TypeScript architecture nudges you toward better patterns. Key performance techniques:\n\n**Memoisation with proper types**: \`useMemo\` and \`useCallback\` only prevent unnecessary renders when dependencies are genuinely stable. TypeScript helps you notice when you're accidentally creating new object references on every render.\n\n**Code splitting**: Use \`React.lazy\` and \`Suspense\` for route-level code splitting. Feature-based folder structure makes this natural — each feature's \`index.ts\` is a natural split point.\n\n**Virtualisation**: For long lists, libraries like \`@tanstack/virtual\` (fully typed) eliminate the DOM node count that kills performance.`,
      },
      {
        heading: 'Error Boundaries and Type Safety',
        body: `TypeScript can't catch runtime errors, but pairing it with error boundaries gives you a robust safety net. Type your error states explicitly and consider a Result type pattern for operations that can fail:\n\n\`\`\`typescript\ntype Result<T, E = Error> =\n  | { success: true; data: T }\n  | { success: false; error: E };\n\nasync function fetchProduct(id: string): Promise<Result<Product>> {\n  try {\n    const data = await api.products.get(id);\n    return { success: true, data };\n  } catch (err) {\n    return { success: false, error: err as Error };\n  }\n}\n\`\`\``,
      },
      {
        heading: 'Conclusion',
        body: `Scalable React applications aren't built with any single technique — they're the result of consistent architectural decisions made across many small choices. TypeScript is the connective tissue that makes those decisions enforceable and communicable across a team. Start with strict mode enabled, invest in your type definitions early, and treat \`any\` as a code smell. Future-you and your teammates will thank you.`,
      },
    ],
  },

  'aws-lambda-guide': {
    title: 'AWS Lambda Functions: From Zero to Production',
    platform: 'Kodaschool',
    published_date: 'Nov 28, 2025',
    read_time: 12,
    tags: ['AWS', 'Lambda', 'Serverless', 'Node.js'],
    sections: [
      {
        heading: 'Why Serverless?',
        body: `AWS Lambda changed how we think about backend infrastructure. Instead of provisioning servers, configuring autoscaling groups, and paying for idle compute, you write a function and AWS runs it — at any scale, on demand. You're billed in milliseconds of execution time. For many workloads — APIs, event processors, scheduled jobs, webhooks — this model is both cheaper and simpler than managing traditional servers.`,
      },
      {
        heading: 'Your First Lambda Function',
        body: `A Lambda function is just a handler — a function that receives an event and returns a response:\n\n\`\`\`javascript\nexport const handler = async (event) => {\n  console.log('Event:', JSON.stringify(event, null, 2));\n\n  return {\n    statusCode: 200,\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ message: 'Hello from Lambda!' }),\n  };\n};\n\`\`\`\n\nThe \`event\` object varies by trigger: an API Gateway event includes HTTP method, path, headers, and body; an S3 event includes bucket name and object key; an SQS event includes message records.`,
      },
      {
        heading: 'Deployment with the Serverless Framework',
        body: `The Serverless Framework is the most battle-tested way to deploy Lambda functions. A \`serverless.yml\` file defines your functions, their triggers, IAM permissions, and environment variables:\n\n\`\`\`yaml\nservice: my-api\n\nprovider:\n  name: aws\n  runtime: nodejs20.x\n  region: us-east-1\n  environment:\n    DB_URL: \${ssm:/myapp/db-url}\n\nfunctions:\n  getUser:\n    handler: src/handlers/getUser.handler\n    events:\n      - httpApi:\n          path: /users/{id}\n          method: GET\n\`\`\`\n\nRun \`serverless deploy\` and your function is live with API Gateway routing configured.`,
      },
      {
        heading: 'Cold Starts: What They Are and How to Minimise Them',
        body: `A cold start happens when Lambda needs to initialise a new execution environment for your function — downloading your code, starting the Node.js runtime, and executing any top-level initialisation code. This adds latency: typically 100–500ms for Node.js functions.\n\nStrategies to minimise cold start impact:\n- **Keep packages small**: Only import what you need. Tree-shaking and bundling with esbuild helps significantly.\n- **Provisioned concurrency**: For latency-sensitive functions, provisioned concurrency keeps a pool of pre-warmed instances. It costs more but eliminates cold starts.\n- **Keep initialisation outside the handler**: Database connections and SDK clients should be initialised at module level, not inside the handler.\n- **Use Lambda SnapStart** (Java) or target Node.js 20+ with its improved startup times.`,
      },
      {
        heading: 'Event-Driven Architecture',
        body: `Lambda's real power emerges in event-driven architectures. Consider an e-commerce order flow:\n\n1. User places order → API Gateway → \`createOrder\` Lambda → writes to DynamoDB\n2. DynamoDB Streams triggers \`processPayment\` Lambda\n3. Payment success → SNS publishes to multiple subscribers\n4. \`sendConfirmationEmail\` Lambda and \`updateInventory\` Lambda process in parallel\n\nEach Lambda function does one thing well. They're independently deployable, independently scalable, and independently testable. This is the microservices model with minimal infrastructure overhead.`,
      },
      {
        heading: 'Observability in Production',
        body: `You can't debug what you can't observe. Essential observability stack for Lambda:\n\n- **CloudWatch Logs**: Automatic with Lambda. Use structured JSON logging (not \`console.log\` strings) so you can filter and query logs effectively.\n- **AWS X-Ray**: Distributed tracing across Lambda functions, API Gateway, DynamoDB, and other AWS services. Invaluable for diagnosing latency issues.\n- **CloudWatch Alarms**: Alert on error rates, throttles, and duration spikes.\n- **Dashboards**: Build a CloudWatch dashboard showing invocations, errors, duration p95/p99, and cold start rate for each function.`,
      },
      {
        heading: 'Cost Optimisation',
        body: `Lambda pricing is based on number of requests ($0.20 per 1M requests) and duration ($0.0000166667 per GB-second). Practical optimisation tips:\n\n- **Right-size memory**: Lambda allocates CPU proportionally to memory. A function that runs in 3 seconds at 128MB might run in 0.5 seconds at 512MB — and cost less overall.\n- **Use Lambda Power Tuning**: An open-source tool that tests your function at multiple memory configurations and finds the optimal setting.\n- **Batch SQS processing**: Process up to 10,000 records per invocation instead of one per invocation where possible.`,
      },
      {
        heading: 'When Not to Use Lambda',
        body: `Lambda isn't a universal solution. It's a poor fit for:\n- Long-running tasks (max 15-minute execution limit)\n- Workloads requiring persistent local state or filesystem\n- Applications requiring predictable, consistent sub-10ms response times (cold starts)\n- Workflows with very high, constant request rates (reserved concurrency on ECS/EKS may be cheaper)\n\nFor these cases, container-based services (ECS Fargate, App Runner) or traditional EC2 deployments are often more appropriate.`,
      },
      {
        heading: 'Conclusion',
        body: `Lambda has genuinely democratised scalable backend infrastructure. A solo developer or small team can build systems that handle millions of events per day without managing a single server. The key is understanding the model — stateless, event-driven, short-lived — and designing your architecture around it rather than trying to fit Lambda into patterns designed for long-running processes. Start with simple functions, observe everything, and let the event-driven patterns emerge naturally from your domain.`,
      },
    ],
  },

  'iot-react-firebase': {
    title: 'The Future of IoT: Building Smart Systems with React and Firebase',
    platform: 'Medium',
    published_date: 'Oct 22, 2025',
    read_time: 10,
    tags: ['IoT', 'React', 'Firebase', 'Smart Systems'],
    sections: [
      {
        heading: 'IoT Meets the Modern Web Stack',
        body: `The Internet of Things is no longer confined to expensive enterprise hardware. A Raspberry Pi, an ESP32, and a free Firebase project can form the backbone of a genuinely useful smart system. What's changed is the tooling: real-time databases, serverless functions, and modern frontend frameworks have made it possible for web developers to build IoT dashboards that would have required a dedicated embedded team five years ago. This article shares what I learned building a smart fragrance management system — a real IoT product — using React and Firebase.`,
      },
      {
        heading: 'Architecture Overview',
        body: `The system has three layers:\n\n1. **Edge devices** (ESP32 microcontrollers): Read sensor data, control actuators (pumps, motors), and publish state to Firebase via Wi-Fi.\n2. **Firebase** (Realtime Database + Cloud Functions): The central nervous system. Stores device state, triggers automation rules, and handles authentication.\n3. **React dashboard**: Displays real-time device status, allows manual control, and shows historical analytics.\n\nThis architecture is event-driven throughout — no polling, no long-lived connections from the edge device to the dashboard. Everything flows through Firebase.`,
      },
      {
        heading: 'Firebase Realtime Database for Device State',
        body: `Firebase Realtime Database is ideal for IoT state because of its push-based synchronisation. Devices write state; the dashboard listens and updates automatically:\n\n\`\`\`javascript\n// Device writes state\nconst deviceRef = ref(db, \`devices/\${deviceId}/state\`);\nawait set(deviceRef, {\n  online: true,\n  lastSeen: serverTimestamp(),\n  sensors: { temperature: 24.5, humidity: 60 },\n  actuators: { pump1: false, pump2: false },\n});\n\`\`\`\n\n\`\`\`javascript\n// Dashboard listens for changes\nconst unsubscribe = onValue(deviceRef, (snapshot) => {\n  const state = snapshot.val();\n  setDeviceState(state);\n});\n\`\`\`\n\nLatency from device to dashboard is typically under 200ms globally via Firebase's infrastructure.`,
      },
      {
        heading: 'React Dashboard Design',
        body: `The dashboard surface area is simple: a grid of device cards, each showing real-time status and allowing manual override. The complexity is in the data model and update logic.\n\nKey patterns used:\n- **Context + useReducer** for global device state — avoids prop drilling across the deeply nested component tree.\n- **Custom hooks per device type** — a \`useFragranceDevice(id)\` hook encapsulates all the Firebase subscription logic and returns a clean interface for the component.\n- **Optimistic UI** for control actions — clicking a button immediately reflects the expected state in the UI while the command propagates to the device. If the device doesn't acknowledge within 5 seconds, the UI reverts and shows an error.`,
      },
      {
        heading: 'Security Rules',
        body: `This is where many IoT projects go wrong. Default Firebase rules allow public read/write — never ship that in production. Write rules that enforce device ownership:\n\n\`\`\`json\n{\n  "rules": {\n    "devices": {\n      "$deviceId": {\n        ".read": "auth != null && root.child('deviceOwners').child($deviceId).val() === auth.uid",\n        ".write": "auth != null && root.child('deviceOwners').child($deviceId).val() === auth.uid"\n      }\n    }\n  }\n}\n\`\`\`\n\nDevices authenticate using Firebase Custom Tokens, generated by a Cloud Function and stored securely on the device. Users authenticate via Firebase Auth (email/password or OAuth).`,
      },
      {
        heading: 'Cloud Functions for Automation',
        body: `Firebase Cloud Functions bridge the gap between dumb state storage and intelligent automation. A function can respond to state changes and trigger actions:\n\n\`\`\`javascript\nexport const onTemperatureChange = functions.database\n  .ref('/devices/{deviceId}/state/sensors/temperature')\n  .onWrite(async (change, context) => {\n    const temp = change.after.val();\n    if (temp > 30) {\n      // Trigger alert and adjust actuator\n      await sendPushNotification(context.params.deviceId, 'High temperature alert');\n      await ref.parent.parent.child('actuators/fan').set(true);\n    }\n  });\n\`\`\``,
      },
      {
        heading: 'Lessons Learned',
        body: `Building a real IoT product surface a few hard lessons:\n\n**Offline resilience matters more than you think**: Devices go offline constantly. Design your system to handle stale state gracefully. Show "last seen" timestamps and degrade controls intelligently when a device is offline.\n\n**Bandwidth costs add up**: ESP32s on cellular connections have limited data budgets. Publish only diffs where possible, not full state snapshots.\n\n**Firebase costs can surprise you**: At scale, Realtime Database read costs accumulate. Consider moving historical data to Firestore and keeping only live state in Realtime Database.`,
      },
      {
        heading: 'Conclusion',
        body: `React and Firebase are a genuinely powerful combination for IoT dashboards. The real-time synchronisation model maps naturally to device state, the security model is robust when configured correctly, and the developer experience is outstanding compared to rolling your own MQTT broker and WebSocket server. If you're a web developer curious about IoT, this stack is one of the lowest-friction entry points into a space that's only going to grow.`,
      },
    ],
  },

  'graphql-practical-guide': {
    title: 'Understanding GraphQL: A Practical Approach',
    platform: 'Medium',
    published_date: 'Sep 10, 2025',
    read_time: 15,
    tags: ['GraphQL', 'API Design', 'Apollo', 'Backend'],
    sections: [
      {
        heading: 'Why GraphQL?',
        body: `REST has served us well for two decades. But as frontends grew more complex — multiple platforms, different data requirements per view, real-time features — REST's rigid endpoint model started to show its limits. Over-fetching (getting more data than you need) and under-fetching (needing multiple requests to get all required data) became constant friction points. GraphQL, developed at Facebook and open-sourced in 2015, addresses both problems with a single elegant idea: the client specifies exactly what data it needs, and the server returns exactly that.`,
      },
      {
        heading: 'The Schema: Your API Contract',
        body: `Everything in GraphQL starts with the schema. It's a strongly-typed description of your entire data graph:\n\n\`\`\`graphql\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n  role: UserRole!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  body: String!\n  author: User!\n  publishedAt: String\n  tags: [String!]!\n}\n\nenum UserRole {\n  ADMIN\n  AUTHOR\n  READER\n}\n\ntype Query {\n  user(id: ID!): User\n  posts(limit: Int, offset: Int): [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n\ntype Subscription {\n  postPublished: Post!\n}\n\`\`\`\n\nThis schema is the source of truth. Types are non-nullable by default when you add \`!\`. The client knows exactly what fields are available and what their types are.`,
      },
      {
        heading: 'Resolvers: Connecting Schema to Data',
        body: `Each field in your schema needs a resolver — a function that returns the data for that field. In Apollo Server:\n\n\`\`\`javascript\nconst resolvers = {\n  Query: {\n    user: async (_, { id }, context) => {\n      return context.dataSources.userAPI.getById(id);\n    },\n    posts: async (_, { limit = 10, offset = 0 }) => {\n      return db.posts.findMany({ take: limit, skip: offset });\n    },\n  },\n  User: {\n    posts: async (user) => {\n      return db.posts.findMany({ where: { authorId: user.id } });\n    },\n  },\n};\n\`\`\`\n\nNotice that \`User.posts\` is a field-level resolver — it only runs if the client actually requests the \`posts\` field on a \`User\`. This lazy execution is fundamental to GraphQL's efficiency.`,
      },
      {
        heading: 'The N+1 Problem and DataLoader',
        body: `GraphQL's lazy resolver model introduces the N+1 problem. If you fetch a list of 10 posts and each resolver fetches the author separately, that's 1 query for posts + 10 queries for authors = 11 queries. This kills performance.\n\nThe solution is DataLoader, a batching and caching utility:\n\n\`\`\`javascript\nconst userLoader = new DataLoader(async (userIds) => {\n  const users = await db.users.findMany({ where: { id: { in: userIds } } });\n  // DataLoader expects results in the same order as keys\n  return userIds.map(id => users.find(u => u.id === id));\n});\n\n// In your resolver\nUser: {\n  author: (post) => userLoader.load(post.authorId),\n}\n\`\`\`\n\nNow those 10 author fetches are batched into a single \`WHERE id IN (...)\` query.`,
      },
      {
        heading: 'Client-Side with Apollo Client',
        body: `Apollo Client is the standard for consuming GraphQL in React. It handles caching, loading states, error handling, and re-fetching:\n\n\`\`\`javascript\nconst GET_USER = gql\`\n  query GetUser($id: ID!) {\n    user(id: $id) {\n      id\n      name\n      email\n      posts {\n        id\n        title\n        publishedAt\n      }\n    }\n  }\n\`;\n\nfunction UserProfile({ userId }) {\n  const { loading, error, data } = useQuery(GET_USER, {\n    variables: { id: userId },\n  });\n\n  if (loading) return <Skeleton />;\n  if (error) return <ErrorMessage error={error} />;\n\n  return <Profile user={data.user} />;\n}\n\`\`\`\n\nThe power here is that Apollo normalises and caches by ID. If the same user is fetched in multiple queries, Apollo serves subsequent requests from cache without a network call.`,
      },
      {
        heading: 'Subscriptions for Real-Time Data',
        body: `GraphQL subscriptions enable real-time data via WebSockets. The schema and client code are clean:\n\n\`\`\`javascript\nconst NEW_COMMENT = gql\`\n  subscription OnNewComment($postId: ID!) {\n    commentAdded(postId: $postId) {\n      id\n      body\n      author { name }\n      createdAt\n    }\n  }\n\`;\n\nconst { data } = useSubscription(NEW_COMMENT, {\n  variables: { postId },\n});\n\`\`\`\n\nOn the server, subscriptions use a pub/sub system (Redis PubSub in production) to broadcast events to subscribed clients.`,
      },
      {
        heading: 'When NOT to Use GraphQL',
        body: `GraphQL adds real complexity. It's not always the right choice:\n\n- **Simple CRUD APIs**: If your API is straightforward resource operations, REST is simpler and has better tooling.\n- **File uploads**: GraphQL handles this awkwardly; multipart uploads via REST are cleaner.\n- **Caching**: HTTP caching is trivial with REST (CDNs cache GET requests automatically). GraphQL typically uses POST and requires client-side or persisted query caching.\n- **Small teams / tight deadlines**: The schema-first discipline and N+1 awareness require investment that REST doesn't.`,
      },
      {
        heading: 'Conclusion',
        body: `GraphQL shines when you have multiple clients with different data requirements, when over-fetching is a real performance concern, or when you want a single strongly-typed API contract across your entire platform. The learning curve is real — schema design, resolvers, DataLoader, and the Apollo cache all take time to understand deeply. But for the right use case, GraphQL produces APIs that are a joy to consume and extend. I'd encourage every developer to build at least one production GraphQL API; the mental model it gives you for thinking about data graphs is valuable regardless of what you build next.`,
      },
    ],
  },
};

// ─── Component ───────────────────────────────────────────────────────────────
const BlogDetailPage = ({ portfolioData }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Try to match from portfolioData first (for blogs with external URLs)
  const allBlogs = portfolioData?.blogs || [];
  const portfolioBlog = allBlogs.find((b) => {
    const urlSlug = b.url?.split('/blog/')[1];
    return urlSlug === slug;
  });

  const localContent = BLOG_CONTENT[slug];

  // If no local content AND the blog exists in portfolioData with an external URL
  // redirect the user to the external URL
  if (!localContent && portfolioBlog?.url && !portfolioBlog.url.includes('fidel-castro-portfolio.vercel.app')) {
    window.location.href = portfolioBlog.url;
    return null;
  }

  // If no content at all, show 404 state
  if (!localContent) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Blog post not found</h1>
          <p className="text-muted-foreground mb-8">
            This article doesn't exist yet or has moved to an external platform.
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </motion.div>
      </div>
    );
  }

  const content = localContent;

  return (
    <div className="min-h-screen bg-background">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-primary/20 text-primary border-primary/30">
              {content.platform}
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{content.published_date}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{content.read_time} min read</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            {content.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground text-xs"
              >
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </motion.header>

        {/* Divider */}
        <div className="border-t border-border mb-12" />

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-10"
        >
          {content.sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary text-sm font-mono select-none">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                {section.heading}
              </h2>
              <div className="text-card-foreground leading-relaxed space-y-4">
                {section.body.split('\n\n').map((para, j) => {
                  if (para.startsWith('```')) {
                    // Code block
                    const lines = para.split('\n');
                    const lang = lines[0].replace('```', '').trim();
                    const code = lines.slice(1, lines.length - 1).join('\n');
                    return (
                      <pre
                        key={j}
                        className="bg-card border border-border rounded-xl p-4 overflow-x-auto text-sm font-mono text-foreground"
                      >
                        <code>{code}</code>
                      </pre>
                    );
                  }
                  if (para.startsWith('- ') || para.startsWith('**')) {
                    // Bullet list or bolded list items
                    const items = para.split('\n').filter(Boolean);
                    return (
                      <ul key={j} className="space-y-2 pl-2">
                        {items.map((item, k) => {
                          const text = item.replace(/^-\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1');
                          const parts = text.split(':');
                          return (
                            <li key={k} className="flex gap-2 text-sm">
                              <span className="text-primary mt-1">›</span>
                              <span>
                                {parts.length > 1 ? (
                                  <>
                                    <strong className="text-foreground">{parts[0]}:</strong>
                                    {parts.slice(1).join(':')}
                                  </>
                                ) : (
                                  text
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }
                  return (
                    <p key={j} className="text-sm leading-7">
                      {para}
                    </p>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </motion.article>

        {/* Footer navigation */}
        <div className="border-t border-border mt-16 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>
          <div className="text-xs text-muted-foreground">
            Written by {portfolioData?.name ?? 'Fidel Castro'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;