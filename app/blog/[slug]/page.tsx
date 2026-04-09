"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CTASection from "@/components/CTASection";
import { Urbanist, Poppins } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });


type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string } 
  | { type: "blockquote"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string; }
  | { type: "list"; items: string[] }
  |{
      type: "feature-list";
      items: { title: string; text: string }[];
    };

type Post = {
  category: string;
  title: string;
  author: string;
  date: string;
  slug: string;
  img: string;
  content: ContentBlock[];
  prevPost: any;
  nextPost: any;
  relatedPosts: any[];
};

/* ─────────────────────────────────────────
   POST DATA  (extend this array with real posts)
───────────────────────────────────────── */
const posts : Post[] = [
    {
        category: "SEO",
        title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
        author: "Vaibhav M.",
        date: "April 6, 2026",
        slug: "fashion-accelerator",
        img: "/blog/fashion.webp",
        content: [
            {
                type: "paragraph",
                text: "Most founders think SEO takes forever because that is what they usually see in the market. They see scattered blogs, broad targeting, half-done on-page work, and months of activity that do not really change business visibility in any meaningful way. So they start assuming organic growth is naturally slow, uncertain, and mostly out of their control.But that is not always the truth.When we worked on Dariaan at PreCrux, the opportunity was actually very clear. This was not a case where the market had no demand, or where the category was too crowded to enter. The real issue was that the category had not yet been owned properly, and because of that, the right brand with the right execution could move much faster than most people would expect.",
            },
             {
    type: "image",
    src: "/blog/screenshot1.jpeg",
    alt: "#1 fashion accelerator"
  },
  {
    type: "image",
    src: "/blog/screenshot2.jpeg",
    alt: "#1 fashion accelerator"
  },
  {type: "paragraph",
                text: "That is exactly what happened."
            },
  {
                type: "paragraph",
                text: " In under 90 days, we helped rank a fashion accelerator #1 for almost all of the core keywords that mattered in that space. And the reason this worked is not because we published random content faster than everyone else, or because we got lucky with one ranking spike. It worked because the positioning, the page ownership, the keyword direction, and the supporting SEO execution all started pointing in the same direction.This blog is not just a result story. It is a breakdown of how we approached the opportunity, what we saw before touching anything, what we changed first, and what founders can learn from this if they are trying to own a meaningful category instead of just chasing loose traffic.",
            },
            {
                type: "heading",
                text: "Why This Category Was Worth Winning in the First Place",
            },
            {type: "paragraph",
                text: "Before we talk about rankings, it is important to talk about category value."
            },
            {
                type: "paragraph",
                text: "There is a big difference between ranking for a broad informational keyword and ranking for a category-defining term. Informational keywords can bring visitors, yes, but category-defining keywords shape perception. They make searchers feel that your brand belongs in a space, and in many cases they make you look like the obvious answer before a founder has even clicked.",
            },
            { type: "paragraph",
                text: "That was the bigger play here."
            },
            { type: "paragraph",
                text: "The opportunity around the fashion startup accelerator was not just about getting impressions. It was about becoming the brand people associated with that category. And when you are building authority in a niche like this, that matters a lot more than chasing traffic for the sake of traffic."
            },
            { type: "paragraph",
                text: "In India especially, this was an even sharper opportunity because the field was not deeply contested. There was room to move. There was room to define the category more clearly. And there was room for a brand to stop looking like one option among many, and start looking like the answer people were expecting to find."
            },
            { type: "paragraph",
                text: "So from the beginning, our goal at PreCrux was not just, let us get this brand more visibility. The real goal was, let us help this brand own a meaningful search position in a niche where search perception could influence authority, trust, and inbound interest all at once."
            },
            
            {
                type: "heading",
                text: "What We Saw Before We Touched Anything",
            },
            {
                type: "paragraph",
                text: "Whenever we work on growth at PreCrux, we try to separate noise from the actual problem. Because if you misdiagnose the issue, even good execution starts going in the wrong direction.",
            },
            {
                type: "paragraph",
                text: "In this case, what we saw was not a market problem. The market was there. The search opportunity was there. The intent was there. The bigger problem was clarity.",
            },
            {
                type: "paragraph",
                text: "The category itself had room, but the signal needed to be tightened. Google needed stronger reinforcement around what the brand stood for, what page should own what intent, and how the supporting ecosystem around the main positioning should work together.",
            },
            {
                type: "paragraph",
                text: "A lot of brands stay stuck because they think SEO is mainly about adding more pages and more blogs. But in reality, if the search engine cannot clearly understand what category you belong to, what page deserves to rank for that category, and how the rest of the site supports that relevance, then growth becomes slower than it needs to be.",
            },
            {
                type: "paragraph",
                text: "That is what mattered here.",
            },
            {
                type: "paragraph",
                text: "We also knew this could not become a vanity SEO project. Ranking alone was not enough. If the right people landed on the page and still felt confused, or if the page did not build trust fast enough, then the ranking win would not translate into category strength. So from the start, the work had to serve both search clarity and founder-facing credibility.",
            },
            {
                type: "heading",
                text: "What Success Needed to Look Like",
            },
            {
                type: "paragraph",
                text: "One of the mistakes people make in SEO case studies is that they define success too loosely. They say rankings improved, impressions grew, or traffic moved up, and they treat that as enough.",
            },
            {
                type: "paragraph",
                text: "That was not the standard here.",
            },
            {
                type: "paragraph",
                text: "Success needed to look like category ownership.",
            },
            {
                type: "paragraph",
                text: "That meant we were not chasing one lucky keyword jump. We wanted the brand to rank across the core keyword basket that actually defined the space. We wanted the site language and page structure to reflect that category clearly. And we wanted the visibility to feel earned and stable, not accidental.",
            },
            {
                type: "paragraph",
                text: "For us, the win would only matter if it did a few things together:",
            },
            {
  type: "list",
  items: [
    "strengthened the brand’s relevance around fashion startup accelerator",
    "improved ranking consistency across the core terms that mattered",
    "made the search result feel aligned with what founders were actually looking for",
    "supported trust once people landed on the site",
    "turned a narrow but valuable search space into a real authority wedge"
  ]
},
            {
                type: "paragraph",
                text: "That is a much better way to think about SEO, because it keeps the focus on business positioning, not just movement in a tool.",
            },
            { type: "heading",
                text: "Our 90-Day Execution Plan"
            },
            {
                type: "paragraph",
                text: "We did not treat this like a blogging sprint. We treated it like a structured category-ownership project.",
            },
            { type: "subheading",
                text: "Phase 1: Tightening the Positioning and Keyword Map"
            },
            {
                type: "paragraph",
                text: "The first thing we needed was clarity on keyword ownership.",
            },
            {
                type: "paragraph",
                text: "A lot of sites weaken themselves because they let multiple pages compete loosely around the same intent, or because they try to target a category from vague copy that never fully commits to the language the market is actually using. So one of the earliest priorities was making sure the right term had a clear home, and that the broader page ecosystem was not diluting that signal.",
            },
            {
                type: "paragraph",
                text: "This is where many SEO efforts get slowed down. Brands often think the problem is that they do not have enough content, but the real problem is that their existing structure is not giving Google a clean answer. We focused first on making that answer much cleaner.",
            },
            { type: "subheading",
                text: "Phase 2: Strengthening the Core Pages"
            },
            {
                type: "paragraph",
                text: "Once the ownership direction was clear, the next step was strengthening the core pages so that they actually deserved to rank for the category they were trying to own.",
            },
            {
                type: "paragraph",
                text: "This meant improving relevance, refining copy direction, tightening heading logic, and making sure the page spoke both to search intent and to the actual founder mindset behind that query. Because when someone lands on a page around a term like fashion startup accelerator, they are not just asking for a definition. They are trying to understand whether this brand is credible, relevant, and worth trusting.",
            },
            {
                type: "paragraph",
                text: "So the page needed sharper clarity, stronger message alignment, and a better balance between positioning and discoverability.",
            },
            { type: "subheading",
                text: "Phase 3: Building Supporting Relevance Around the Core Category"
            },
            {
                type: "paragraph",
                text: "One page rarely wins a category by itself.",
            },
            {
                type: "paragraph",
                text: "Even when one page is the main target, the surrounding content and internal relevance signals matter. That is where supporting content and contextual reinforcement became important. We needed the site to stop looking like one page making a claim in isolation, and start looking like a brand that genuinely belonged to the space it wanted to own.",
            },
            {
                type: "paragraph",
                text: "This is where support content matters, but only when it is strategic. Not every blog helps. Not every new page builds authority. The supporting layer only works when it strengthens the main category instead of drifting into unrelated topics just to increase page count.",
            },
            { type: "subheading",
                text: "Phase 4: Improving the Site’s Ability to Support Rankings"
            },
            {
                type: "paragraph",
                text: "Beyond the main content work, we also had to make sure the broader site environment could support progress.",
            },
            {
                type: "paragraph",
                text: "This part is often less glamorous, but it matters a lot. Search performance is not built only through copy. It is also shaped by how well the site allows authority to flow, how clearly pages relate to each other, how easy it is for search engines to understand the structure, and how well users can move through the experience without friction.",
            },
            {
                type: "paragraph",
                text: "When we work at PreCrux, we do not separate these layers too rigidly because real growth does not happen in silos. The better the overall support system is, the more efficiently the core page can move.",
            },
            { type: "subheading",
                text: "Phase 5: Monitoring, Adjusting, and Consolidating"
            },
            {
                type: "paragraph",
                text: "SEO is not just publishing and praying. Once momentum starts building, the next job is to make sure it consolidates.",
            },
            {
                type: "paragraph",
                text: "As the movement came in, we kept refining what needed reinforcement, what signals were working fastest, and where the page ecosystem needed further support. That iterative layer matters because a ranking gain is useful, but a ranking gain that starts to settle into broader authority is far more valuable.",
            },
            {
             type: "heading",
                text: "What Actually Moved the Needle in the First 90 Days, And What Would Have Wasted Time"
            },
            {
                type: "paragraph",
                text: "This is the section most founders actually need, because this is where theory stops and leverage starts.",
            },
            {
                type: "paragraph",
                text: "A lot of things can be done in SEO. Very few of them matter equally in the early phase of a category play.",
            },
            {
                type: "paragraph",
                text: "Here is what moved the needle for us, and just as importantly, what would have wasted time.",
            },
            { type: "subheading",
              text: "What moved the needle",
            },
            {
  type: "feature-list",
  items: [
    {
      title: "Clear keyword ownership",
      text: "Once the right page clearly owned the right intent, progress became much easier. Google responds much better when the site stops sending mixed signals."
    },
    {
      title: "Positioning and SEO working together",
      text: "This was not just an optimization project. The brand message and the search language started reinforcing each other, and that made the category signal stronger."
    },
    {
      title: "Support content with a purpose",
      text: "We did not treat blogs as decorative assets. We used supporting relevance to strengthen the category, not to fill the site with activity."
    },
    {
      title: "Internal linking with intent",
      text: "Internal links matter far more when they are used to clarify relationships and pass authority properly. Random linking rarely helps as much as deliberate linking."
    },
    {
      title: "Execution sequence",
      text: "We did not try to fix everything everywhere at once. We focused on what had the highest leverage first, and that is often what shortens the time to visible results."
    }
  ]
},
{ type: "subheading",
    text: "What would have wasted time"
},
{
  type: "list",
  items: [
    "publishing random low-intent blogs just to look active",
    "stuffing broad keywords into multiple pages",
    "trying to target every related term from one page",
    "expanding into too many directions before the core category was stable",
    "treating SEO as a content volume game instead of a positioning and execution game"
  ]
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{
    type: "heading",
    text: "The Results We Saw in Under 90 Days"
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{ type: "heading",
    text: "The Results We Saw in Under 90 Days"
},
{ 
    type: "paragraph",
    text:"The result was exactly what we were aiming for: the fashion accelerator ranked #1 for almost all of the core keywords that mattered in that category within 90 days."
},
{ 
    type: "paragraph",
    text:"But the ranking itself was only part of the story."
},
{ 
    type: "paragraph",
    text:"What mattered more was what that ranking represented. It showed that the category was ownable. It showed that focused execution could move faster than most people assume. And it showed that when a brand’s positioning, page structure, keyword direction, and supporting relevance line up properly, a niche authority play can turn into visible search dominance much quicker than scattered SEO ever will."
},
{ 
    type: "paragraph",
    text:"This also mattered commercially because category ownership builds a different kind of trust. Founders do not just see traffic numbers. They see relevance. They see authority. They see a brand that appears exactly where it should appear."
},
{ 
    type: "paragraph",
    text:"That perception shift is hard to measure in one neat graph, but it is a huge part of why these wins matter."
},
{type: "heading",
    text: "What Founders Can Learn From This Case Study"
},
{ 
    type: "paragraph",
    text:"A lot of founders think growth comes from covering more ground. Sometimes it does. But very often, the smarter move is to own one meaningful category first."
},
{ 
    type: "paragraph",
    text:"That is the real lesson here."
},
{ 
    type: "paragraph",
    text:"You do not need to rank for everything at once. You need to identify the category that actually matters to your market, and then build a site and content system that makes search engines and users understand that you belong there."
},
{ 
    type: "paragraph",
    text:"A few practical takeaways stand out:"
},

{
  type: "list",
  items: [
    "the right keyword is often more valuable than the biggest keyword",
    "category ownership can create stronger authority than loose top-of-funnel traffic",
    "SEO works faster when the market message is sharp",
    "execution order matters more than founders usually expect",
    "random blog publishing is not a growth system"
  ]
},
{ 
    type: "paragraph",
    text:"This is also why we keep saying at PreCrux that growth execution matters more than scattered activity. A business can be working hard and still stay invisible if its message, pages, and search strategy are not aligned."
},

{ type: "heading",
    text: "When This Kind of SEO Play Works, And When It Does Not"
},
{ 
    type: "paragraph",
    text:"It is also important to be honest about context."
},
{ 
    type: "paragraph",
    text:"A fast category win like this works best when the opportunity is real, the category is meaningful, the site has a clear page that can own the intent, and the execution is focused enough to reinforce that signal quickly."
},
{ 
    type: "paragraph",
    text:"It becomes much harder when the brand itself is vague, when every page tries to target everything, when there is no clear structure behind the content, or when founders want authority without putting in the work to build relevance properly."
},
{ 
    type: "paragraph",
    text:"That matters because case studies become dangerous when they imply that the same result happens in every situation the same way. It does not."
},
{ 
    type: "paragraph",
    text:"The lesson is not that every brand can rank in under 90 days. The lesson is that when the category opportunity is right, and when execution is not diluted, meaningful movement can happen much faster than most people think."
},
{ type: "heading",
    text: "Why This Matters to the Way We Work at PreCrux"
},
{ 
    type: "paragraph",
    text:"This case reflects something deeper about how we work."
},
{ 
    type: "paragraph",
    text:"We do not look at SEO as a blog factory. We do not look at growth as a collection of disconnected channels. And we do not believe in doing activities for the sake of appearing busy. Our approach at PreCrux is to identify what the business should actually own, what search and conversion path support that goal, and what sequence of execution will move the brand there most efficiently."
},
{ 
    type: "paragraph",
    text:"That is why projects like this matter to us. Not because one ranking looks impressive, but because it proves what connected execution can do when the objective is clear."
},
{ 
    type: "paragraph",
    text:"For ambitious founders, that difference matters a lot. Because most growth problems are not caused by a total lack of effort. They are caused by effort being spread too thin, pointed in too many directions, or disconnected from the category the business should be owning first."
},
{ type: "heading",
    text: "Final Thoughts"
},
{ 
    type: "paragraph",
    text:"This was never just a story about ranking a fashion accelerator."
},
{ 
    type: "paragraph",
    text:"It was a story about category ownership, and about what becomes possible when a brand stops chasing scattered visibility and starts aligning its positioning, page strategy, and SEO execution around one meaningful commercial lane."
},
{ 
    type: "paragraph",
    text:"That is why this result matters."
},
{ 
    type: "paragraph",
    text:"In under 90 days, we did not just improve rankings. We helped turn an open search opportunity into a visible authority position. And for founders, that is the bigger takeaway. You do not always need more channels, more pages, or more activity. Sometimes you need sharper focus, stronger execution, and a much clearer understanding of what category your brand should be the obvious answer for."
},
{ 
    type: "paragraph",
    text:"If your business is sitting close to a category it should already be owning, but the search visibility still is not reflecting that, then the problem may not be lack of potential. It may simply be that the execution has not lined up properly yet."
},
{ 
    type: "paragraph",
    text:"That is exactly the kind of gap we like solving at PreCrux."
},


        ],
        prevPost: null,
        nextPost: {
            title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
            slug: "golf-dtc-brand",
        },
        relatedPosts: [
            {
                title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
                date: "April 7, 2026",
                slug: "fashion-accelerator",
                img: "/blog/golf.webp",
            },
            {
                title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
                date: "April 8, 2026",
                slug: "bidet-dtc-brand",
                img: "/blog/bidet.webp",
            },
        ],
    },
    {
        category: "Organic Growth",
        title: "80K+ Organic Clicks: How We Scaled a Golf DTC Brand from Messy Traffic to Millions of Impressions",
        author: "Vaibhav M.",
        date: "April 7, 2026",
        slug: "golf-dtc-brand",
        img: "/blog/golf.webp",
        content: [
            {
                type: "paragraph",
                text: "A lot of ecommerce brands do not actually have a traffic problem. What they have is a structure problem, and because of that, the traffic they do get never turns into the kind of steady, compounding growth they were hoping for. From the outside, it can look like things are moving, because there are impressions, there are rankings, and there is activity, but underneath that, the system still feels messy, disconnected, and harder to scale than it should be.",
            },
            {
                type: "paragraph",
                text: "That was the kind of situation we stepped into here. Due to client confidentiality, we are referring to this business simply as a leading US-based golf DTC brand. What we can share, though, is the result: 80K+ organic clicks and 3M+ impressions, backed by Google Search Console data, and more importantly, a much stronger organic engine than the one the brand started with.",
            },
             {
    type: "image",
    src: "/blog/screenshot3.jpeg",
    alt: "Google Search Console snapshot",
    caption: "Google Search Console snapshot from this project, shared to illustrate the growth trajectory while keeping the brand confidential."
  },
  
  {type: "paragraph",
                text: "Those numbers matter, yes, but the bigger story is not that traffic went up. The bigger story is that what looked like active organic performance at first was not actually a clean, scalable system, and once we fixed that, the growth started making much more sense."
            },
  
            {
                type: "heading",
                text: "Why “Messy Traffic” Is a Bigger Problem Than Most Brands Realize",
            },
            {type: "paragraph",
                text: "This is one of those issues that founders often feel before they can clearly explain it."
            },
            {
                type: "paragraph",
                text: "They look at their dashboards and they see that the site is getting visits. Some pages rank. A few terms perform well. Search Console is not dead. So naturally, the assumption becomes that organic is working, or at least half-working, and maybe it just needs more time or more content.",
            },
            { type: "paragraph",
                text: "But messy traffic usually means something deeper is off."
            },
            { type: "paragraph",
                text: "It often means visibility exists, but it is not being directed properly. It can mean the right pages are not getting enough support, or the wrong pages are getting attention without helping the business commercially. Sometimes it means content exists, but it is not reinforcing the parts of the site that should actually be driving authority and discovery. And sometimes it means impressions are growing, but the structure underneath that growth is too weak for it to compound properly."
            },
            { type: "paragraph",
                text: "That was the broader lens we brought into this project."
            },
            { type: "paragraph",
                text: "At PreCrux, we do not look at organic growth as a simple question of “are there visitors or not?” We look at whether the traffic pattern actually reflects a system that can scale. Because traffic can exist without momentum, and visibility can exist without real strategic strength. So from the beginning, our goal at PreCrux was not just, let us get this brand more visibility. The real goal was, let us help this brand own a meaningful search position in a niche where search perception could influence authority, trust, and inbound interest all at once."
            },
            
            {
                type: "heading",
                text: "What We Saw Before We Started",
            },
            {
                type: "paragraph",
                text: "When we evaluated this brand, the opportunity was obvious, but so was the inconsistency.",
            },
            {
                type: "paragraph",
                text: "This was not a zero-visibility situation where everything had to be built from scratch. The site already had signals. There was existing search activity, there was some discoverability, and there was enough movement to show that the brand absolutely had room to grow organically. But the performance did not yet feel like it was being held together by a deliberate growth system.",
            },
            {
                type: "paragraph",
                text: "The organic picture looked active, but not yet clean.",
            },
            {
                type: "paragraph",
                text: "There were three broad issues we were paying attention to from the start.",
            },
            {
                type: "paragraph",
                text: "First, the traffic pattern did not feel strategically tight enough. Some visibility existed, but it was not compounding the way a strong ecommerce SEO system should. That usually tells you that the foundation is producing movement, but not enough coordinated momentum.",
            },
            {
                type: "paragraph",
                text: "Second, the pages that should have mattered most commercially were not benefiting enough from the broader support structure around them. This is where many DTC brands quietly lose growth. They have pages with real potential, but the supporting content, internal linking, and intent alignment are not strong enough to help those pages become category anchors.",
            },
            {
                type: "paragraph",
                text: "Third, the business had more organic upside than the current performance suggested. That is often the most exciting kind of project, because it means the problem is not a dead market or a weak category. It means the system is underperforming relative to the opportunity.",
            },
            {
                type: "paragraph",
                text: "So from the beginning, our thinking at PreCrux was simple: this brand does not need random SEO activity. It needs a cleaner organic direction.",
            },
            {
                type: "heading",
                text: "What Success Needed to Mean Here",
            },
            {
                type: "paragraph",
                text: "We were not trying to create a nice-looking graph and call it a day.",
            },
            {
                type: "paragraph",
                text: "For this project, success needed to mean that the site became more structurally capable of generating and sustaining organic growth. The clicks and impressions were important, but only because they would reflect something healthier underneath.",
            },
            
            {
                type: "paragraph",
                text: "That meant success had to include:",
            },
            {
  type: "list",
  items: [
    "stronger visibility across meaningful search opportunities",
    "better support for the pages that mattered most",
    "improved alignment between content, search intent, and page hierarchy",
    "a more coherent internal growth system rather than scattered wins",
    "organic movement that felt more scalable, not just more active"
  ]
},
            {
                type: "paragraph",
                text: "This distinction matters a lot.",
            },
            {
                type: "paragraph",
                text: "More traffic alone can hide problems for a while. A healthier organic engine solves them.",
            },
            { type: "heading",
                text: "Our Growth Execution Plan"
            },
            {
                type: "paragraph",
                text: "We approached this the same way we approach most serious growth work at PreCrux: by reducing noise, prioritizing what has leverage, and making sure the execution layers are helping each other instead of pulling in different directions.",
            },
            { type: "subheading",
                text: "Phase 1: Cleaning Up the Organic Picture"
            },
            {
                type: "paragraph",
                text: "Before you improve anything, you need to understand what is actually happening.",
            },
            {
                type: "paragraph",
                text: "So the first phase was about getting clarity. Where was the site already showing up? Which pages had potential but were under-supported? Which visibility patterns looked promising, and which ones looked more accidental than scalable? Where was the site getting movement, but not enough compounding value from that movement?",
            },
            {
                type: "paragraph",
                text: "That clarity matters because otherwise teams end up reacting to symptoms. They publish more, tweak random pages, or chase more keywords without understanding why growth is not sticking properly.",
            },
            { type: "subheading",
                text: "Phase 2: Strengthening the Pages That Mattered Most"
            },
            {
                type: "paragraph",
                text: "Once the picture became clearer, the next step was making sure the right pages were positioned to benefit.",
            },
            {
                type: "paragraph",
                text: "This is where ecommerce SEO becomes more than just rankings. It becomes about page importance, intent alignment, and commercial relevance. The pages that matter most to the business need stronger support, stronger clarity, and stronger search fit. If those pages stay underpowered, then even increasing traffic elsewhere can leave the actual business impact feeling underwhelming.",
            },
            {
                type: "paragraph",
                text: "So the work was not just about creating more entry points. It was also about making the core pages more deserving of the attention they were capable of attracting.",
            },
            { type: "subheading",
                text: "Phase 3: Building a Better Content and Internal Linking System"
            },
            {
                type: "paragraph",
                text: "This is where many brands think they are doing content strategy when in reality they are just producing content.",
            },
            {
                type: "paragraph",
                text: "A real content system does not exist to make a blog section look active. It exists to reinforce important pages, strengthen topical depth, improve discoverability, and help authority flow more deliberately across the site.",
            },
            {
                type: "paragraph",
                text: "That is why internal linking mattered here as much as content creation itself. Content without structure can create noise. Content with proper relationships can create momentum.",
            },
            {
                type: "paragraph",
                text: "So instead of treating pages and blogs like isolated assets, we treated them as parts of one organic system."
            },
            { type: "subheading",
                text: "Phase 4: Turning Organic Activity Into Organic Momentum"
            },
            {
                type: "paragraph",
                text: "Once the right pieces started aligning, the site was no longer just collecting visibility. It was starting to build organic momentum.",
            },
            {
                type: "paragraph",
                text: "That is the shift most founders should care about. Because a brand can get traffic for months and still feel confused about whether organic is truly scaling. But when the system becomes cleaner, you start seeing a different kind of confidence in the performance. The growth becomes easier to interpret, easier to support, and easier to build on.",
            },
            
            { type: "subheading",
                text: "Phase 5: Refining What Was Working"
            },
            {
                type: "paragraph",
                text: "We did not treat movement as the finish line.",
            },
            {
                type: "paragraph",
                text: "As traction strengthened, the focus shifted toward refinement. What was gaining momentum needed reinforcement. What was helping the site compound needed more support. And what looked like distracting activity needed to stay secondary.",
            },
            {
                type: "paragraph",
                text: "That kind of restraint matters. A lot of growth systems get messy again because teams start chasing too many directions the moment they see some success. We prefer consolidation before expansion.",
            },
            {
             type: "heading",
                text: "What “Messy Traffic” Actually Looked Like - And Why More Visitors Alone Would Not Have Solved It"
            },
            {
                type: "paragraph",
                text: "This is probably the most important part of the story.",
            },
            {
                type: "paragraph",
                text: "When we say the traffic was messy, we do not mean the site had bad traffic in some dramatic sense. We mean the traffic pattern did not yet reflect a clean, intentional, scalable organic system.",
            },
            {
                type: "paragraph",
                text: "In practice, messy traffic can look like this:",
            },
            {
  type: "list",
  items: [
    "visibility exists, but it is uneven across the site",
    "some pages get movement, but not enough support to turn that into stronger authority",
    "traffic activity is present, but the commercial logic underneath it is weak",
    "content exists, but it is not reinforcing the most important parts of the site properly",
    "growth feels real, but not yet reliable"
  ]
},
{
                type: "paragraph",
                text: "And that is exactly why simply getting more visitors would not have been enough.",
            },
            {
                type: "paragraph",
                text: "If we had just pushed harder on traffic volume without cleaning the underlying structure, the brand may have seen bigger numbers for a while, but the system would still have remained fragile. More visits alone do not fix weak page prioritization. They do not solve poor support relationships. They do not automatically create compounding growth.",
            },
            {
                type: "paragraph",
                text: "What we wanted instead was not just more traffic. We wanted better traffic behavior within a stronger organic framework.",
            },
            {
                type: "paragraph",
                text: "That is a completely different goal, and it leads to much smarter decisions.",
            },
            { type: "heading",
              text: "What Actually Moved the Needle",
            },
            {
                type: "paragraph",
                text: "There was no one magic trick here, and honestly, that is how most real growth work looks.",
            },
            {
                type: "paragraph",
                text: "The gains came from a combination of sharper direction and better sequencing. A few things mattered more than anything else:",
            },
            {
  type: "feature-list",
  items: [
    {
      title: "Better page prioritization",
      text: "Not every page deserves equal effort, and not every page contributes equally to growth. The moment you get clearer on which pages matter most, the rest of the system becomes easier to organize around them."
    },
    {
      title: "Stronger keyword-to-page alignment",
      text: "One of the biggest reasons DTC SEO gets diluted is because too many pages are loosely competing for similar intent, or because the site is ranking without enough clarity around who should own what. Cleaner ownership almost always improves momentum."
    },
    {
      title: "Support content that reinforced growth",
      text: "This was not about publishing for the sake of output. It was about building supporting relevance so the core parts of the site could perform better."
    },
    {
      title: "Internal linking with strategy behind it",
      text: "Internal linking is often treated like a technical checkbox, but in reality, it is one of the clearest ways to help search engines and users understand page relationships. When done intentionally, it helps the entire system behave better."
    },
    {
      title: "Doing the right things in the right order",
      text: "This part matters more than most people realize. A site can have all the right ingredients available, but if the sequence is wrong, growth still feels slow. Order creates leverage."
    }
  ]
},
{ type: "heading",
    text: "The Results We Saw"
},
{ 
    type: "paragraph",
    text:"The headline result was clear in Search Console: 80K+ organic clicks and 3M+ impressions."
},
{ 
    type: "paragraph",
    text:"But the reason those numbers matter is not just because they look impressive on a screenshot. They matter because they signaled that the site’s organic engine was becoming healthier, stronger, and much more capable of compounding."
},
{ 
    type: "paragraph",
    text:"The Search Console data made one thing very clear: this was not just a case of small ranking lifts here and there. The brand was moving into a different level of visibility."
},
{ 
    type: "paragraph",
    text:"And that is what we care about most."
},
{ 
    type: "paragraph",
    text:"Because bigger numbers without better structure can disappear as quickly as they arrive. But bigger numbers coming from a stronger system usually point to something more durable. They suggest that the site is not just getting discovered more, but is doing so through a cleaner, more scalable organic model."
},

{
    type: "heading",
    text: "What Founders Can Learn From This"
},
{ 
    type: "paragraph",
    text:"There are a few lessons here that go well beyond golf, and honestly, they apply to a lot of DTC brands."
},
{ 
    type: "paragraph",
    text:"First, not all traffic is healthy traffic. A brand can have rankings, visits, and impressions and still be operating with an organic structure that is too loose to scale properly."
},
{ 
    type: "paragraph",
    text:"This is one of the biggest lessons from the project. Fast movement usually does not come from doing more. It comes from doing the right things in the right order."
},
{ 
    type: "paragraph",
    text:"Second, more content is not automatically the answer. More content only helps when it strengthens the pages, categories, and search paths that matter most to the business."
},
{ 
    type: "paragraph",
    text:"Third, compounding growth usually starts when the system becomes cleaner. Not just busier. Cleaner."
},
{ 
    type: "paragraph",
    text:"And fourth, founders should stop asking only, “How do we get more traffic?” A much better question is, “Is our current traffic pattern actually supported by a strong enough system to scale or not?”"
},
{ 
    type: "paragraph",
    text:"That one shift in thinking changes a lot."
},
{ type: "heading",
    text: "Why This Matters to the Way We Work at PreCrux"
},
{ 
    type: "paragraph",
    text:"This project reflects how we think."
},
{ 
    type: "paragraph",
    text:"We at PreCrux do not treat SEO as a publishing routine or a list of disconnected tasks. We look at whether the business has a real growth system underneath the activity. When we work with brands, we are not only trying to create movement. We are trying to create clarity, support, and momentum in the places that matter most."
},
{ 
    type: "paragraph",
    text:"That is why this kind of case study matters to us."
},
{ 
    type: "paragraph",
    text:"It shows that growth does not always require starting from zero. Sometimes the opportunity is already there, but the structure is too messy for that opportunity to fully show up. Once the system is cleaned up and aligned properly, the business can start performing closer to its real potential."
},
{ 
    type: "paragraph",
    text:"That is a much more useful way to think about growth execution than simply asking for more traffic every month."
},
{type: "heading",
    text: "Final Thoughts"
},
{ 
    type: "paragraph",
    text:"This was not just a story about 80K+ clicks and 3M+ impressions."
},
{ 
    type: "paragraph",
    text:"It was a story about what happens when a brand moves from fragmented organic activity to a much more coordinated growth system. The numbers were important, yes, but what mattered more was the quality of the engine behind them."
},
{ 
    type: "paragraph",
    text:"A lot of ecommerce businesses are closer to meaningful organic growth than they think. The problem is just that their traffic is sitting inside a system that is too messy, too under-supported, or too disconnected to compound properly."
},
{ 
    type: "paragraph",
    text:"When that gets fixed, growth starts feeling different. It starts feeling more interpretable, more strategic, and much more scalable."
},
{ 
    type: "paragraph",
    text:"And that is really the core takeaway here."
},
{ 
    type: "paragraph",
    text:"If your brand is already getting traffic, but the organic side still feels inconsistent, harder to scale, or less commercially useful than it should be, then the issue may not be effort. It may be that the structure underneath the traffic is still not doing enough of the heavy lifting."
},
{ 
    type: "paragraph",
    text:"That is exactly the kind of gap we help diagnose at PreCrux."
},
        ],
        prevPost: null,
        nextPost: {
            title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
            slug: "bidet-dtc-brand",
        },
        relatedPosts: [
            {
                title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
                date: "April 6, 2026",
                slug: "fashion-accelerator",
                img: "/blog/fashion.webp",
            },
            {
                title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
                date: "April 8, 2026",
                slug: "bidet-dtc-brand",
                img: "/blog/bidet.webp",
            },
        ],
    },
    {
        category: "Performance Marketing",
        title: "Why Most Paid Campaigns Fail - And the Attribution Model That 4.2× Our Clients’ ROAS",
        author: "Vaibhav M.",
        date: "April 8, 2026",
        slug: "bidet-dtc-brand",
        img: "/blog/bidet.webp",
        content: [
            {
                type: "paragraph",
                text: "A lot of paid campaigns do not fail because the ads are terrible, the market is weak, or the budget is too small. They fail because the reporting model behind the decisions is quietly lying to the team, and once that happens, even decent campaigns start getting judged through the wrong lens.",
            },
            {
                type: "paragraph",
                text: "That is a much bigger problem than most founders realize.",
            },
             
  {type: "paragraph",
                text: "When the dashboards look profitable on paper, the natural instinct is to trust them. Meta says one thing, Google says another, both seem to be driving results, and the account keeps moving forward with what feels like a reasonable amount of confidence. But then the deeper questions start showing up. Why does scaling feel harder than it should? Why do “winning” campaigns not always create stronger business momentum? Why do budget decisions still feel like a mix of hope, gut feel, and partial data even when the reported ROAS looks healthy enough?"
            },
            {type: "paragraph",
                text: "That was exactly the kind of situation we stepped into here."
            },
            {type: "paragraph",
                text: "Due to client confidentiality, we are not sharing the brand name publicly, and we are also not sharing account screenshots from Meta Ads or Google Ads. The client operates in a competitive direct-to-consumer category, and platform-level screenshots can expose sensitive business information around campaign structure, spend behavior, audience logic, and performance patterns. So in this blog, we are referring to the business simply as a leading Australia-based premium bidet DTC brand."
            },
            {type: "paragraph",
                text: "What we can share is the operating reality, the attribution problem, the practical model we implemented, and the outcome. In 90 days, the blended ROAS moved from 2.21x to 4.2x, and the reason that happened is not because we discovered a magical ad trick. It happened because the reporting finally became honest enough for the team to stop feeding budget into the wrong places and start scaling the right parts of the account with much more confidence."
            },
  
            {
                type: "heading",
                text: "Why Most Paid Campaigns Do Not Actually Fail First - Reporting Does",
            },
            {type: "paragraph",
                text: "Most founders assume performance marketing breaks in the creative, the targeting, or the offer. And yes, those things absolutely matter. But before any of those become the main issue, there is often a simpler and more dangerous problem sitting underneath everything else: the account is being read incorrectly."
            },
            {
                type: "paragraph",
                text: "This happens more often than people think because ad platforms are built to show you their version of the truth. Meta will happily claim its role in a conversion. Google will happily do the same. Retargeting campaigns will look like heroes because they catch people who were already close to buying. Brand search campaigns will look brilliant because they are often sitting at the final touchpoint before purchase. And when all of that gets rolled into one messy reporting view, the team starts making business decisions off numbers that are technically real in-platform, but strategically misleading in practice.",
            },
            { type: "paragraph",
                text: "That is why,  being profitable on paper is not always profitable in reality."
            },
            { type: "paragraph",
                text: "A brand can keep spending month after month based on flattering platform-reported ROAS and still stay confused about what is actually creating growth. And the bigger the account gets, the more expensive that confusion becomes. Because at a small budget, attribution blindness is frustrating. At a bigger budget, it becomes a scaling tax."
            },
            { type: "paragraph",
                text: "At PreCrux, we treat this as an operator problem, not just a reporting problem. Because if the source of truth is wrong, then budget allocation, creative judgment, campaign prioritization, and scaling decisions all become weaker, even when the team thinks it is acting rationally."
            },
            
            {
                type: "heading",
                text: "The Starting Situation",
            },
            {
                type: "paragraph",
                text: "This brand was not struggling in some dramatic, obvious way.",
            },
            {
                type: "paragraph",
                text: "It was an 18-month-old Australian direct-to-consumer business selling premium, modern bidets in the bathroom wellness and eco-friendly hygiene space. The ad account was already active, the business was already scaling, and the brand was spending between $5,000 and $7,000 USD per month across only two channels: Meta Ads and Google Ads.",
            },
            {
                type: "paragraph",
                text: "On the surface, the picture looked workable.",
            },
            {
                type: "paragraph",
                text: "The reported blended ROAS sat at 2.21x, which is not disastrous. For many founders, that is the kind of number that creates cautious optimism. Not amazing, but decent enough to keep going. Good enough to believe the system is moving in the right direction.",
            },
            {
                type: "paragraph",
                text: "But something did not add up.",
            },
            {
                type: "paragraph",
                text: "The account looked okay inside the platforms, yet the decision-making around scale still felt shakier than it should have. The team was making budget moves based on platform-reported profitability, but the confidence behind those moves was not strong. That gap matters, because when the numbers and the intuition keep rubbing against each other, it usually means the reporting model is hiding something.",
            },
            {
                type: "paragraph",
                text: "That was the real starting point here. Not failure. Not chaos. Just a performance picture that looked acceptable on paper, but was not clean enough to trust fully.",
            },
            {
                type: "heading",
                text: "What Was Actually Broken - The 6 Silent Killers",
            },
            {
                type: "paragraph",
                text: "Once we looked closely, the problem became much clearer. This was not really about bad ads. It was about a bad credit assignment.",
            },
            {
                type: "paragraph",
                text: "There were six silent killers sitting inside the account, and together they were distorting how performance was being interpreted.",
            },
            
            {
                type: "subheading",
                text: "1. Last-click bias was distorting credit",
            },
            {
                type: "paragraph",
                text: "This is one of the most common paid media mistakes.",
            },
            {
                type: "paragraph",
                text: "A customer could first discover the brand through Meta, spend time thinking about the product, return later through another touchpoint, and finally convert after searching the brand name on Google. But the last-click view would still make the final touchpoint look like the main reason the sale happened.",
            },
            {
                type: "paragraph",
                text: "That is useful in a narrow reporting sense, but dangerous in an operating sense.",
            },
            {
                type: "subheading",
                text: "2. Brand search was making Google look stronger than it really was",
            },
            {
                type: "paragraph",
                text: "This was a major issue in this account.",
            },
            {
                type: "paragraph",
                text: "A lot of people were seeing the brand first through Meta, then later searching the brand name on Google before purchasing. So Google brand search campaigns were getting a disproportionate amount of credit for conversions that had actually been influenced much earlier in the journey.",
            },
            {
                type: "paragraph",
                text: "That made Google look cleaner and stronger than the reality underneath it.",
            },
            {
                type: "subheading",
                text: "3. Retargeting was over-claiming performance",
            },
            {
                type: "paragraph",
                text: "Retargeting is one of those areas where founders often feel reassured too quickly.",
            },
            {
                type: "paragraph",
                text: "Of course retargeting can perform well. It is talking to warm people. But that is exactly why it becomes dangerous when attribution is weak. It starts taking credit for demand that was already built elsewhere, and once that happens, teams can overinvest in bottom-of-funnel activity while under-crediting the campaigns that are creating fresh demand at the top.",
            },
            {
                type: "subheading",
                text: "4. Each platform was being treated as its own source of truth",
            },
            {
                type: "paragraph",
                text: "This is a silent trap.",
            },
            {
                type: "paragraph",
                text: "Meta had its numbers. Google had its numbers. Each looked internally logical. But neither should have been treated as the final decision-maker for budget allocation. When platforms become their own judge and jury, the business starts optimizing toward platform-reported success rather than a cleaner cross-channel reality.",
            },
            {
                type: "subheading",
                text: "5. Funnel stages were not separated clearly enough",
            },
            {
                type: "paragraph",
                text: "Prospecting, retargeting, brand, and direct were blending into one messy performance view.",
            },
            {
                type: "paragraph",
                text: "That meant the team could see results, but not always the role each campaign was playing inside the system. Once that happens, awareness-driving campaigns can look weaker than they really are, while conversion-catching campaigns look stronger than they deserve.",
            },
            
            {
                type: "subheading",
                text: "6. Awareness-driving campaigns were being judged too harshly",
            },
            {
                type: "paragraph",
                text: "This is where real growth gets damaged.",
            },
            {
                type: "paragraph",
                text: "The campaigns doing the early heavy lifting, meaning the ones introducing cold audiences to the brand, were at risk of being undervalued because they did not always look as efficient inside distorted attribution views. And once that happens, founders start pausing or reducing the exact campaigns that are feeding the rest of the funnel.",
            },
            {
                type: "paragraph",
                text: "That is how scaling gets quietly sabotaged.",
            },
            { type: "heading",
                text: "How One Sale Got Counted Twice - And Why That Quietly Broke Everything"
            },
            {
                type: "paragraph",
                text: "This is the simplest way to understand what went wrong.",
            },
            {
                type: "paragraph",
                text: "Imagine someone sees a Meta ad for the first time. They do not buy immediately, which is normal. A few days later, they remember the brand, search for it on Google, click the brand ad, and then purchase.",
            },
            {
                type: "paragraph",
                text: "Now look at what happens inside the platforms.",
            },
            {
                type: "paragraph",
                text: "Meta sees that the person viewed or clicked an ad before the purchase, so Meta claims the sale.",
            },
            {
                type: "paragraph",
                text: "Google sees that the final click happened through the brand search ad, so Google claims the sale too.",
            },
            {
                type: "paragraph",
                text: "From the founder’s perspective, both platforms now look like they are printing money. But in reality, one sale has been emotionally and strategically counted twice inside decision-making.",
            },
            {
                type: "paragraph",
                text: "And that changes behavior.",
            },
            {
                type: "paragraph",
                text: "The team starts believing brand search is doing more heavy lifting than it actually is. Retargeting looks more impressive than it should. Prospecting starts looking weaker than it really is. And budgets begin drifting toward the campaigns that catch demand rather than the campaigns that create it.",
            },
            {
                type: "paragraph",
                text: "This is why attribution errors are not just reporting errors. They are budget allocation errors. They are scaling errors. They are prioritization errors.",
            },
            {
                type: "paragraph",
                text: "When one sale gets counted twice often enough, the whole account starts teaching the team the wrong lesson.",
            },
            
            { type: "heading",
                text: "The Attribution Model We Implemented"
            },
            {
                type: "paragraph",
                text: "We did not build some fancy, overengineered model that only analysts can understand.",
            },
            {
                type: "paragraph",
                text: "We built a practical model that the team could actually use.",
            },
            {
                type: "paragraph",
                text: "That part matters, because many founders hear the word attribution and immediately assume it means complex dashboards, endless tools, or a multi-touch framework so complicated that nobody inside the company actually trusts it. We did not want that. We wanted a model that made decisions clearer.",
            },
            { type: "subheading",
                text: "Step 1: We changed the source of truth"
            },
            {
                type: "paragraph",
                text: "The first major move was shifting the reporting logic to a cleaner last-non-brand-click view.",
            },
            {
                type: "paragraph",
                text: "This helped reduce the artificial inflation caused by brand search and made it easier to see non-brand acquisition performance more honestly. We needed a reporting framework that did not keep rewarding the final branded touchpoint for demand that had really been created earlier.",
            },
            
            { type: "subheading",
                text: "Step 2: We separated the funnel properly"
            },
            {
                type: "paragraph",
                text: "Instead of looking at the account as one blended advertising machine, we broke it into clear stages:",
            },{
  type: "list",
  items: [
    "Prospecting",
    "Retargeting",
    "Brand",
    "Direct"
 ]
},
            {
                type: "paragraph",
                text: "This immediately made the account more readable.",
            },
            {
                type: "paragraph",
                text: "Once the funnel stages were separated, the team could stop asking vague questions like “which campaign is winning?” and start asking smarter questions like “which stage is doing which job, and where is the real contribution happening?”",
            },
            { type: "subheading",
                text: "Step 3: We introduced simple weighted logic"
            },
            {
                type: "paragraph",
                text: "We did not use a highly academic fractional attribution model.",
            },
            {
                type: "paragraph",
                text: "Instead, we introduced a practical weighted logic that gave more credit to the first paid touchpoint within a 90-day window. That mattered because it restored visibility to the campaigns that were actually creating awareness and intent earlier in the journey.",
            },
            {
                type: "paragraph",
                text: "This was not about perfection. It was about honesty becoming good enough to operate from.",
            },
            { type: "subheading",
                text: "Step 4: We stopped using native ROAS columns for scaling decisions"
            },
            {
                type: "paragraph",
                text: "This was one of the biggest behavior changes in the whole project.",
            },
            {
                type: "paragraph",
                text: "Meta’s ROAS columns and Google’s ROAS columns were not ignored completely, but they were no longer treated as the final basis for budget decisions. That shift alone changes how an account is run. It moves the team away from “what each platform says” and toward “what the system shows when we look across channels more honestly.”",
            },
            
            { type: "subheading",
                text: "Step 5: We started measuring incremental contribution"
            },
            {
                type: "paragraph",
                text: "This is where the decision-making became more mature.",
            },
            {
                type: "paragraph",
                text: "Instead of staring only at final reported ROAS, the focus shifted toward incremental contribution. In practical terms, that meant asking questions like:",
            },
            {
  type: "list",
  items: [
    "What happens when a prospecting campaign is turned on or off?",
    "What happens when you spend shifts between funnel stages?",
    "Which campaigns are creating lift, not just claiming conversions?",
    "Which parts of the system look efficient only because they are catching already-warm traffic?",
  ]
},
            {
                type: "paragraph",
                text: "That change made the reporting useful for operators, not just acceptable for dashboards.",
            },
            {
             type: "heading",
                text: "Where Creative Refresh Helped - And Where It Did Not"
            },
            {
                type: "paragraph",
                text: "Yes, we refreshed creatives during the project.",
            },
            {
                type: "paragraph",
                text: "And yes, creatives always matter.",
            },
            {
                type: "paragraph",
                text: "But it is important to say this clearly: the 4.2x ROAS outcome did not happen mainly because we made better-looking ads. That would be the wrong lesson from this case study.",
            },
            {
                type: "paragraph",
                text: "The creative work supported the new attribution logic. It did not replace it.",
            },
            {
                type: "paragraph",
                text: "We created fresh angles that matched the now stage-separated funnel more intelligently. Prospecting needed different messaging from retargeting. Cold audiences needed a different entry point than people who already knew the brand. And once the account was being read more honestly, it became much easier to understand what kind of creative should serve which stage.",
            },
            {
                type: "paragraph",
                text: "That made the creative refresh more useful.",
            },
            {
                type: "paragraph",
                text: "So yes, better creatives helped the cleaner system perform better. But attribution clarity was still the main unlock, because without that clarity, even better creatives would have been judged through the same distorted reporting model.",
            },
            {
                type: "paragraph",
                text: "Creatives matter. Always.",
            },
            {
                type: "paragraph",
                text: "But even strong creatives underperform strategically when the reporting is lying to you.",
            },
            { type: "heading",
              text: "What Changed in 90 Days",
            },
            {
                type: "paragraph",
                text: "Once the blind spots were removed and the account started being read more honestly, the business impact became much clearer.",
            },
            {
                type: "paragraph",
                text: "The headline number, of course, was the blended ROAS improvement:",
            },
            {
                type: "subheading",
                text: "2.21x to 4.2x in 90 days.",
            },
            {
                type: "paragraph",
                text: "But the result was bigger than the number itself.",
            },
            {
                type: "paragraph",
                text: "Wasted spend on low-quality retargeting dropped significantly, because the campaigns that were merely taking credit stopped being treated like untouchable winners. Budget reallocation became far more obvious. The team no longer had to make decisions based on hope, instinct, or platform ego. They could see the funnel more clearly and act with more confidence.",
            },
            {
                type: "paragraph",
                text: "That changed the quality of scaling.",
            },
            {
                type: "paragraph",
                text: "The prospecting campaigns that were actually doing the hard work of creating awareness and demand became easier to identify and protect. The team could finally separate true growth drivers from conversion catchers. And once that happened, the whole account became more scalable because the budget was no longer being distorted by flattering but misleading signals.",
            },
            {
                type: "paragraph",
                text: "In simple terms, the business stopped feeding money into whatever looked best inside platform reporting, and started backing what actually moved the system forward.",
            },
            { type: "heading",
              text: "What This Result Did Not Mean",
            },
            {
                type: "paragraph",
                text: "This is the part that matters if you want the lesson to stay honest.",
            },
            {
                type: "paragraph",
                text: "Attribution clarity did not magically create the uplift on its own.",
            },
            {
                type: "paragraph",
                text: "It did not wave a wand and transform the account. What it did was remove enough blind spots for the team to make much better decisions about budget allocation, campaign prioritization, and scale. That is a huge difference.",
            },
            {
                type: "paragraph",
                text: "The outcome also depended on several other factors being strong enough to support improvement:",
            },
            {
  type: "list",
  items: [
    "the account already had maturity",
    "the offer itself was solid",
    "funnel health was not broken",
    "conversion tracking was robust enough to support better analysis",
    "the team was willing to change how decisions were being made"
  ]
},
{
                type: "paragraph",
                text: "So no, the takeaway is not “copy this model and everyone gets 4.2x ROAS.”",
            },
            {
                type: "paragraph",
                text: "The real takeaway is much more useful: when the reporting becomes more honest, everything else becomes easier to optimize intelligently.",
            },
            {
                type: "paragraph",
                text: "That is a much stronger lesson.",
            },
            
            { type: "heading",
              text: "What Founders Should Take From This",
            },
            {
                type: "paragraph",
                text: "There are a few big takeaways here, and honestly, they apply far beyond this one account.",
            },
            {
                type: "paragraph",
                text: "First, stop making major budget decisions based on platform-reported ROAS in isolation. Those numbers are useful reference points, but they should not be the final authority.",
            },
            {
                type: "paragraph",
                text: "Second, separate the funnel properly. Prospecting, retargeting, brand, and direct should not all live inside one messy performance view if you want better decisions.",
            },
            {
                type: "paragraph",
                text: "Third, build one cleaner source of truth and make that the operating foundation for the account. It does not have to be an overly complicated model. It just has to be honest enough to guide real decisions.",
            },
            {
                type: "paragraph",
                text: "Fourth, be very careful with brand search and retargeting. They can become performance mirages if the broader attribution framework is weak.",
            },
            {
                type: "paragraph",
                text: "And fifth, remember this: once reality becomes clearer, everything else becomes easier. Creative testing becomes easier. Budgeting becomes easier. Scaling becomes easier. Bidding decisions become easier. The whole account becomes easier to operate when the team is not being quietly misled by the reporting.",
            },
            {
                type: "paragraph",
                text: "That is why honest reporting creates better operators.",
            },
            
{ type: "heading",
    text: "Why This Matters to the Way We Work at PreCrux"
},
{ 
    type: "paragraph",
    text:"This case reflects how we think about growth in general."
},
{ 
    type: "paragraph",
    text:"We at PreCrux are not interested in flattering dashboards that make teams feel temporarily safe while the account keeps teaching them the wrong lessons. Our approach is to get closer to decision-useful truth, because once the truth gets clearer, the growth system becomes easier to strengthen."
},
{ 
    type: "paragraph",
    text:"When we work with customers at PreCrux, we are often looking for exactly this kind of gap: where is the business becoming too optimistic because reporting is overstating performance, or too pessimistic because the real contribution of early-funnel work is being hidden?"
},
{ 
    type: "paragraph",
    text:"That gap matters more than many founders realize."
},
{ 
    type: "paragraph",
    text:"Because paid growth is rarely damaged only by bad ads. It is often damaged by a decision layer that is operating from distorted feedback. Fix that layer, and the rest of the system gets dramatically easier to manage."
},

{type: "heading",
    text: "Final Thoughts"
},
{ 
    type: "paragraph",
    text:"Most paid campaigns do not fail because the opportunity is missing."
},
{ 
    type: "paragraph",
    text:"They fail because the team is optimizing against a version of reality that is incomplete, inflated, or strategically misleading."
},
{ 
    type: "paragraph",
    text:"That was the real problem in this account, and once the attribution model became cleaner, the path forward got much clearer too. The team could finally see which campaigns were creating profitable growth, which ones were only taking credit for it, and where the budget could be moved with much more confidence."
},
{ 
    type: "paragraph",
    text:"That is what changed the game."
},
{ 
    type: "paragraph",
    text:"So if your Meta and Google numbers look profitable, but the account still feels harder to scale than it should, or if your reporting looks healthy but your decisions still carry too much doubt, then the issue may not be the ads alone. It may be the attribution model sitting underneath them."
},
{ 
    type: "paragraph",
    text:"And that is exactly the kind of problem we like solving at PreCrux."
},

        ],
        prevPost: null,
        nextPost: null,
        relatedPosts: [
            {
                title: "How We Ranked a Fashion Accelerator #1 for Almost All Core Keywords in Under 90 Days",
                date: "April 6, 2026",
                slug: "fashion-accelerator",
                img: "/blog/fashion.webp",
            },
            {
                title: "80K+ Organic Clicks: How We Scaled a US-Based Golf DTC Brand from Messy Traffic to Millions of Impressions",
                date: "April 7, 2026",
                slug: "golf-dtc-brand",
                img: "/blog/golf.webp",
            },
        ],
    },
    
];

/* ── Scroll reveal hook ── */


/* ── Scroll reveal hook ── */
function useReveal() {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);
    return ref;
}

function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useReveal();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: 0,
                transform: "translateY(28px)",
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const post = posts.find((p) => p.slug === slug);
 
    const [saveInfo, setSaveInfo] = useState(false);

    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [index, setIndex] = useState(0);
const [nextIndex, setNextIndex] = useState(1);
const [animating, setAnimating] = useState(false);
const articleRef = useRef<HTMLDivElement>(null);
const contentEndRef = useRef<HTMLDivElement>(null);
const [ctaTop, setCtaTop] = useState(200);

useEffect(() => {
  if (!articleRef.current || !contentEndRef.current) return;

  const articleTop = articleRef.current.getBoundingClientRect().top + window.scrollY;
  const contentEndTop = contentEndRef.current.getBoundingClientRect().top + window.scrollY;

  const contentHeight = contentEndTop - articleTop;

  setCtaTop(contentHeight / 2);
}, [post]);

 

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [slug]);

    useEffect(() => {
  if (!post?.relatedPosts) return;

  const interval = setInterval(() => {
    setNextIndex((index + 1) % post.relatedPosts.length);
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % post.relatedPosts.length);
      setAnimating(false);
    }, 1800);
  }, 4000);

  return () => clearInterval(interval);
}, [index, post]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                Post not found.{" "}
                <Link href="/blog" className="ml-2 underline text-black">
                    Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <>

            <main className="bg-[#f4f4f4] min-h-screen pt-[110px]">
                
                <article ref={articleRef} className="max-w-[680px] mx-auto px-8 py-2 md:py-20 bg-white mb-16 relative">
                    <FloatingCTA top={ctaTop} />

                    {/* TITLE */}
                    <Reveal>
                        <h1
                            className="text-[2rem] md:text-[2.4rem] leading-[1.2] text-[#0f1117] mb-4"
                            style={{ fontWeight: 600, fontFamily: urbanist.style.fontFamily }}
                        >
                            {post.title}
                        </h1>
                    </Reveal>

                    {/* META */}
                    <Reveal delay={80}>
                        <p
                            className="text-[#555] text-[0.85rem] mb-10"
                            style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                        >

                            <span
                                className="text-[#0f1117]"
                                style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                            >
                                By{" "}
                                {post.author}
                                {" "}
                                / <time>{post.date}</time>
                            </span>
                        </p>
                    </Reveal>

                    {/* IMAGE */}
                    <Reveal delay={120}>
                        <div className="w-full rounded-lg overflow-hidden mb-12" style={{ aspectRatio: "16/9" }}>
                            <img src={post.img} alt={post.title} className="w-full h-full object-contain" />
                        </div>
                    </Reveal>

                    {/* CONTENT */}
                    <div className="post-body">
                        {post.content.map((block, idx) => {
                            if (block.type === "image") {
  return (
    <Reveal key={idx} delay={idx * 40}>
      <div className="my-10 text-center">
        <img
          src={block.src}
          alt={block.alt || "Blog image"}
          className="w-full rounded-lg object-contain"
        />

        {block.caption && (
          <p
            className="text-[0.85rem] text-gray-600 mt-2 italic"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            {block.caption}
          </p>
        )}
      </div>
    </Reveal>
  );
}

if (block.type === "list") {
  return (
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="text-[#333] text-[1.05rem] leading-[1.8]"
            style={{ fontFamily: poppins.style.fontFamily }}
          >
            {item}
          </li>
        ))}
      </ul>
  );
}

if (block.type === "subheading") {
  return (
      <h3
        className="text-[#0f1117] text-[1.1rem] md:text-[1.2rem] mt-8 mb-3"
        style={{
          fontWeight: 600,
          fontFamily: urbanist.style.fontFamily,
        }}
      >
        {block.text}
      </h3>
  );
}

if (block.type === "feature-list") {
  return (
      <ul className="list-disc pl-6 mb-8 space-y-5">
        {block.items.map((item, i) => (
          <li key={i}>
            {/* Bold heading */}
            <span
              className="font-semibold text-[#0f1117]"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              {item.title}
            </span>

            {/* Description */}
            <p
              className="text-[#333] text-[1.05rem] leading-[1.8] mt-1"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              {item.text}
            </p>
          </li>
        ))}
      </ul>
  );
}
                            if (block.type === "paragraph") {
                                return (
                                        <p
                                            className="text-[#333] text-[1.0625rem] leading-[1.85] mb-6"
                                            style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                                        >
                                            {block.text}
                                        </p>
                                );
                            }

                            if (block.type === "heading") {
                                return (
                                        <h2
                                            className="text-[#0f1117] text-[1.375rem] leading-[1.3] mt-12 mb-4"
                                            style={{
                                                fontWeight: 700,
                                                fontFamily: urbanist.style.fontFamily,
                                            }}
                                        >
                                            {block.text}
                                        </h2>
                                );
                            }

                            if (block.type === "blockquote") {
                                return (
                                        <blockquote
                                            className="my-8 pl-6 text-[#333] text-[1.05rem] leading-[1.75] italic"
                                            style={{
                                                borderLeft: "3px solid #d1d5db",
                                                fontWeight: 400,
                                                fontFamily: poppins.style.fontFamily,
                                            }}
                                        >
                                            {block.text}
                                        </blockquote>
                                );
                            }

                            return null;
                        })}
                    </div>

                    <div
  ref={contentEndRef}
  className="border-t border-gray-200 mt-16 mb-10"
/>

                    {/* NAV */}
                    <nav className="flex justify-between gap-6">
                        {/* Previous */}
                        <div className="flex-1">
                            {post.prevPost && (
                                <Link href={`/blog/${post.prevPost.slug}`} className="group block">
                                    <span
                                        className="block text-[#888] text-[0.75rem] uppercase tracking-widest mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                                    >
                                        ← Previous
                                    </span>
                                    <span
                                        className="block text-[#0f1117] text-[0.9rem] leading-snug group-hover:underline"
                                        style={{ fontWeight: 500, fontFamily: poppins.style.fontFamily }}
                                    >
                                        {post.prevPost.title}
                                    </span>
                                </Link>
                            )}
                        </div>

                        {/* Next */}
                        <div className="flex-1 text-right">
                            {post.nextPost && (
                                <Link href={`/blog/${post.nextPost.slug}`} className="group block">
                                    <span
                                        className="block text-[#888] text-[0.75rem] uppercase tracking-widest mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                                    >
                                        Next →
                                    </span>
                                    <span
                                        className="block text-[#0f1117] text-[0.8rem] leading-snug group-hover:underline"
                                        style={{ fontWeight: 500, fontFamily: poppins.style.fontFamily }}
                                    >
                                        {post.nextPost.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </nav>

                    <div className="border-t border-gray-200 mt-10 mb-14" />

                    {/* ── Related Posts ── */}
                    {post.relatedPosts && post.relatedPosts.length > 0 && (
                        <section>
                            <Reveal>
                                <h2
                                    className="text-[#0f1117] text-[1.5rem] mb-8"
                                    style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}
                                >
                                    Related Posts
                                </h2>
                            </Reveal>

                            {/* 💻 Desktop (unchanged) */}
<div className="hidden md:grid grid-cols-2 gap-6">
  {post.relatedPosts.map((rp, i) => (
    <Reveal key={rp.slug} delay={i * 80}>
      <Link href={`/blog/${rp.slug}`} className="group block">
        <div className="w-full overflow-hidden rounded-md mb-4 h-[180px]">
          <img
            src={rp.img}
            alt={rp.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-[#0f1117] text-[1rem] leading-snug mb-2 group-hover:underline">
          {rp.title}
        </h3>
        <p className="text-[#0f1117] text-[0.85rem]">{rp.date}</p>
      </Link>
    </Reveal>
  ))}
</div>

{/* 📱 Mobile (smooth vertical reveal) */}
<div className="md:hidden overflow-hidden rounded-xl mt-4">
  <div className="relative h-[320px]">

    {/* CURRENT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        animating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Link href={`/blog/${post.relatedPosts[index].slug}`} className="block">
        <div className="bg-white rounded-xl p-3 shadow-sm">

          <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
            <img
              src={post.relatedPosts[index].img}
              alt={post.relatedPosts[index].title}
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-[#0f1117] text-[1rem] font-semibold leading-snug mb-1">
            {post.relatedPosts[index].title}
          </h3>

          <p className="text-[#777] text-sm">
            {post.relatedPosts[index].date}
          </p>
        </div>
      </Link>
    </div>

    {/* NEXT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        animating ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href={`/blog/${post.relatedPosts[nextIndex].slug}`} className="block">
        <div className="bg-white rounded-xl p-3 shadow-sm">

          <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
            <img
              src={post.relatedPosts[nextIndex].img}
              alt={post.relatedPosts[nextIndex].title}
              className="w-full h-full object-contain"
            />
          </div>

          <h3 className="text-[#0f1117] text-[1rem] font-semibold leading-snug mb-1">
            {post.relatedPosts[nextIndex].title}
          </h3>

          <p className="text-[#777] text-sm">
            {post.relatedPosts[nextIndex].date}
          </p>
        </div>
      </Link>
    </div>

  </div>
</div>
                        </section>
                    )}

                    {/* ── Divider ── */}
                    <div className="border-t border-gray-200 mt-14 mb-0.01" />

                </article>
            </main>

            <CTASection />
        </>
    );
}
