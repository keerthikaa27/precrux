"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import CTASection from "@/components/CTASection";
import { Urbanist, Poppins } from "next/font/google";
import FloatingCTA from "@/components/FloatingCTA";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

type CaseContentBlock =
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string; isNote?: boolean }
  | { type: "blockquote"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string }
  | { type: "list"; items: string[] }
  | { type: "feature-list"; items: { title: string; text: string }[] };

  function isParagraph(
  block: CaseContentBlock
): block is { type: "paragraph"; text: string; isNote?: boolean } {
  return block.type === "paragraph";
}

function isList(
  block: CaseContentBlock
): block is { type: "list"; items: string[] } {
  return block.type === "list";
}

function isImage(
  block: CaseContentBlock
): block is { type: "image"; src: string; caption?: string } {
  return block.type === "image";
}

function isFeatureList(
  block: CaseContentBlock
): block is {
  type: "feature-list";
  items: { title: string; text: string }[];
} {
  return block.type === "feature-list";
}

const caseStudies = [
    {
        title: "A Leading US-Based Golf Company",
        category: "SEO + Content Systems",
        tags: ["SEO", "DTC", "US"],
        slug: "the-net-return",
        img: "/case-studies/the-net-return.jpg",
        result: "+40% retention in 30 days",
        content: [
            {
  type: "image",
  src: "/blog/screenshot3.jpeg",
  caption: "Google Search Console snapshot shared to validate the growth trajectory while keeping the brand confidential."
},
  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "A lot of ecommerce brands do not actually have a traffic problem. What they have is a structure problem, and because of that, whatever visibility they do get never turns into the kind of steady, compounding growth they expected."
  },
  {
    type: "paragraph",
    text: "That was the real story here."
  },
  {
    type: "paragraph",
    text: "Due to client confidentiality, we are not naming the brand publicly, but this case study is based on our work with a leading US-based golf company. When we started, the business was not invisible. Organic activity already existed, rankings were present in parts of the site, and there was enough movement to suggest real potential. But the growth did not feel clean, and more importantly, it did not feel scalable."
  },
  {
    type: "paragraph",
    text: "From the outside, that kind of situation can look “fine.” The Search Console is not empty, some pages are performing, and the site has traction. But inside the system, something still feels off. The traffic is there, yet it is not compounding properly. The important pages are not being supported strongly enough. The brand has room to grow, but the organic engine underneath it is not yet built to carry that growth in a structured way."
  },
  {
    type: "paragraph",
    text: "That is the kind of situation we like stepping into at PreCrux, because this is usually where the biggest upside is hidden. Not in zero-to-one cases where nothing exists, but in businesses where potential is already visible and the real gap is execution quality."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The challenge was not that the brand had no organic momentum at all. The challenge was that the momentum it had was too messy to scale with confidence."
  },
  {
    type: "paragraph",
    text: "There was visibility, but it did not feel strategically organized. Some pages had movement, but the site as a whole was not behaving like one connected growth system. Important commercial pages were not being supported as strongly as they should have been. Content, search intent, and internal support were not reinforcing each other with enough purpose."
  },
  {
    type: "paragraph",
    text: "This is where a lot of brands quietly stall."
  },
  {
    type: "paragraph",
    text: "From a founder’s point of view, the business can feel like it is “doing SEO” because content exists, rankings exist, and traffic exists. But from an operator’s point of view, the more important question is different: does the site actually behave like a scalable organic engine, or is it just collecting scattered wins?"
  },
  {
    type: "paragraph",
    text: "Here, it was much closer to the second."
  },
  {
    type: "paragraph",
    text: "And that mattered because the opportunity was clearly bigger than the current performance suggested. This was not a niche with no demand. It was not a category where organic growth was unrealistic. The issue was that the growth system was not clean enough yet to convert opportunity into stronger, more consistent momentum."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we got into the account properly, it became clear that this was not simply a low-traffic problem."
  },
  {
    type: "paragraph",
    text: "What looked like a traffic issue on the surface was actually a system issue underneath."
  },
  {
    type: "paragraph",
    text: "The site had organic signals, but those signals were not being supported in the way a serious growth system needs. There was movement, but not enough compounding logic behind that movement. Some visibility existed, but the structure underneath it was not strong enough to help the right pages build authority efficiently over time."
  },
  {
    type: "paragraph",
    text: "In simple terms, the brand had organic upside, but the site was not extracting enough of it."
  },
  {
    type: "paragraph",
    text: "This is where many agencies stop too early. They see traffic that is lower than it should be, and they immediately prescribe more blogs, more pages, or more output. But more output is not always the answer. If the organic ecosystem itself is fragmented, then more activity often just creates more noise."
  },
  {
    type: "paragraph",
    text: "What we saw here was that the site needed stronger alignment across three areas:"
  },

  {
    type: "list",
    items: [
      "the pages that mattered most commercially",
      "the content supporting those pages",
      "the internal structure connecting the whole system"
    ]
  },

  {
    type: "paragraph",
    text: "That diagnosis changed everything, because it meant the right move was not to simply “do more SEO.” The right move was to make the site behave like one intentional engine instead of a loose collection of pages competing for attention."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We cleaned up the organic picture"
  },
  {
    type: "paragraph",
    text: "The first job was clarity."
  },
  {
    type: "paragraph",
    text: "We needed to separate what was genuinely working from what was only creating surface-level activity. That meant getting a much clearer read on where visibility was coming from, which pages had real leverage, and where the existing performance was being under-supported."
  },
  {
    type: "paragraph",
    text: "This part matters more than people think. If you do not understand the current structure properly, you end up reacting to symptoms. You publish more, optimize more, and keep working harder, but the system never becomes much cleaner."
  },
  {
    type: "paragraph",
    text: "So before trying to scale anything, we tightened the picture first."
  },

  {
    type: "subheading",
    text: "2. We strengthened the pages that mattered most"
  },
  {
    type: "paragraph",
    text: "Once the picture became clearer, the next step was making the important pages stronger."
  },
  {
    type: "paragraph",
    text: "That sounds simple, but this is usually where the difference between average SEO work and serious growth execution starts showing up. Not all pages matter equally. Not all traffic matters equally. And not every ranking opportunity deserves the same level of effort."
  },
  {
    type: "paragraph",
    text: "So instead of treating the site like one flat list of URLs, we prioritized the pages with the strongest commercial and organic value. We worked on making them more relevant, better supported, and more aligned with the search intent that actually mattered to the business."
  },
  {
    type: "paragraph",
    text: "That is what started changing the feel of the site. It became less about random visibility and more about building meaningful authority in the right places."
  },

  {
    type: "subheading",
    text: "3. We built a cleaner content and internal linking system"
  },
  {
    type: "paragraph",
    text: "Content can either strengthen a site or scatter it."
  },
  {
    type: "paragraph",
    text: "Here, the opportunity was not to just add more content for the sake of output. It was to create a more useful support system around the pages that already deserved to win. That meant improving how content related to the rest of the site, making internal linking more intentional, and using support pages to reinforce the pages that mattered most rather than leaving them isolated."
  },
  {
    type: "paragraph",
    text: "This is one of the biggest differences between content activity and content systems."
  },
  {
    type: "paragraph",
    text: "Content activity makes a site look busy."
  },
  {
    type: "paragraph",
    text: "Content systems make a site stronger."
  },
  {
    type: "paragraph",
    text: "And once the right pages, the right support content, and the right internal relationships started working together more deliberately, the brand’s organic growth started feeling much less messy and much more scalable."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "The headline result was clear:"
  },
  {
    type: "paragraph",
    text: "80K+ organic clicks and 3M+ impressions in 6 months."
  },
  {
    type: "paragraph",
    text: "But the real value of the result was not just the size of the numbers. It was what those numbers signaled."
  },
  {
    type: "paragraph",
    text: "They showed that the brand’s organic visibility was no longer acting like scattered movement. The site was starting to behave like a real growth engine. Search presence became stronger, the structure underneath the growth became healthier, and the business had a much more scalable base to build from."
  },
  {
    type: "paragraph",
    text: "That is a more important outcome than most teams realize."
  },
  {
    type: "paragraph",
    text: "Because big numbers without a stronger system can disappear quickly. Big numbers supported by a healthier organic structure are much more valuable. They suggest that the site is not just gaining more visibility temporarily, but that it is becoming better at earning, supporting, and compounding that visibility over time."
  },
  {
    type: "paragraph",
    text: "And that is exactly what made this case meaningful. We did not just improve a report. We improved the engine behind it."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not treat the problem like a simple traffic gap."
  },
  {
    type: "paragraph",
    text: "More traffic was never the full answer here. A cleaner growth system was."
  },
  {
    type: "paragraph",
    text: "Once the right pages were prioritized properly, once the support system around them became more intentional, and once content and internal structure started reinforcing each other instead of drifting apart, the business became much easier to scale organically."
  },
  {
    type: "paragraph",
    text: "That is the part most brands miss."
  },
  {
    type: "paragraph",
    text: "They think growth slows down because the market is too hard, the niche is too competitive, or SEO just takes forever. Sometimes those things are true. But often the slower, more frustrating reality is that the system underneath the growth is simply too loose to compound well."
  },
  {
    type: "paragraph",
    text: "That is why execution quality matters so much."
  },
  {
    type: "paragraph",
    text: "At PreCrux, we do not look at SEO as blog production or isolated ranking work. We look at whether the site is capable of turning existing opportunity into stronger, cleaner, more commercially useful growth. That was the shift here, and that is why the outcome was not just bigger traffic, but better momentum."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "If your brand is already getting traffic but growth still feels messy, disconnected, or harder to scale than it should be, that usually points to a deeper execution gap."
  },
  {
    type: "paragraph",
    text: "It often means the issue is not effort. It is structured."
  },
  {
    type: "paragraph",
    text: "This case study is a good example of that. The opportunity already existed. The demand was already there. The brand did not need random activity. It needed a stronger system, better sequencing, and clearer support behind the pages that mattered most."
  },
  {
    type: "paragraph",
    text: "Once that happened, the numbers followed."
  },
  {
    type: "paragraph",
    text: "That is the kind of work we care about most at PreCrux, because it is not just about helping brands get seen. It is about helping them build a growth engine that can actually carry the next stage of scale."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }
],
        metrics: [
            { label: "Organic Clicks", value: "80K+" },
            { label: "Impressions", value: "3M+" },
            { label: "Growth Engine Rebuilt", value: "SEO" },
            { label: "Timeline", value: "12 Months" },
            
        ],
        prevCase: null,
        nextCase: { title: "Daarian", slug: "daarian" },
        relatedCases: [
            { title: "Daarian", category: "SEO", slug: "daarian", img: "/case-studies/daarian.png", result: "Ranked #1 for core keywords in under 90 days" },
            { title: "Mover", category: "Local SEO", slug: "mover", img: "/case-studies/mover.png", result: "45K+ clicks and Page 1 rankings" },
        ],
    },
    {
        title: "Daarian",
        category: "Brand Design",
        tags: ["SEO", "Fashion", "India"],
        slug: "daarian",
        img: "/case-studies/daarian.png",
        result: "Ranked #1 for core keywords in under 90 days",
        content: [

  {
    type: "image",
    src: "/blog/screenshot2.jpeg",
    caption: "Guest-mode ChatGPT result captured to validate discoverability without personalization."
  },
  {
    type: "image",
    src: "/blog/screenshot1.jpeg",
    caption: "Guest-mode Google result captured to validate visibility in AI-led search experiences without a logged-in profile."
  },

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "Most brands do not become category leaders because they publish more content than everyone else. They become category leaders because search engines, AI systems, and human readers all start reaching the same conclusion at the same time: this is the brand that belongs here."
  },
  {
    type: "paragraph",
    text: "That was the bigger opportunity with Dariaan."
  },
  {
    type: "paragraph",
    text: "This was never just about improving rankings for the sake of a report. It was about helping a fashion-focused brand own a category that still felt open enough to shape, especially around searches like fashion startup accelerator, fashion startup accelerator in India, and related founder-intent queries. In spaces like that, the brand that earns early authority does not just get more visibility. It starts becoming the default answer in people’s minds."
  },
  {
    type: "paragraph",
    text: "That is what made this project strategically important."
  },
  {
    type: "paragraph",
    text: "When we stepped in at PreCrux, the goal was not random SEO activity. The goal was category ownership. We wanted Dariaan to stop looking like one more brand trying to explain itself online and start looking like the obvious result for the kind of founder who was actively searching for fashion-focused acceleration, growth support, and structured brand scaling."
  },
  {
    type: "paragraph",
    text: "And once that happens, rankings stop being just rankings. They start shaping trust."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The real challenge was not that nobody was searching. The challenge was that the category had not yet been claimed properly."
  },
  {
    type: "paragraph",
    text: "That is a very different kind of problem."
  },
  {
    type: "paragraph",
    text: "In a lot of niches, competition is crowded but weak. Multiple players exist, but very few have built real search authority around the exact commercial language their audience is using. That was the case here. The opportunity around fashion startup accelerator-related searches was meaningful, but the search landscape still left room for a brand to become the clearest answer."
  },
  {
    type: "paragraph",
    text: "The problem was that this kind of win does not happen through scattered SEO."
  },
  {
    type: "paragraph",
    text: "You cannot own a niche category just by writing a few blogs, optimizing one page halfway, and hoping Google figures out the rest. To rank properly here, the site needed stronger positioning, better keyword ownership, cleaner support around the main category terms, and a structure that made both search engines and founders understand exactly what Dariaan stood for."
  },
  {
    type: "paragraph",
    text: "Because in spaces like this, clarity is the real moat."
  },
  {
    type: "paragraph",
    text: "If the category is still forming, the brand that communicates its relevance most cleanly often wins faster than people expect."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we looked at the opportunity closely, one thing became obvious: this was not just a rankings problem. It was a positioning problem and a page-ownership problem sitting underneath it."
  },
  {
    type: "paragraph",
    text: "That distinction mattered."
  },
  {
    type: "paragraph",
    text: "A lot of SEO work fails because it treats the symptom first. Rankings are low, so teams add more content. Visibility is inconsistent, so they widen keyword targeting. Pages are not performing, so they try to optimize everything at once. But if the site itself is not clearly telling search engines which page owns which intent, and if the broader structure is not reinforcing the core category properly, then more activity usually just creates more noise."
  },
  {
    type: "paragraph",
    text: "What we saw here was that Dariaan had the ingredients for authority, but those ingredients needed stronger alignment."
  },
  {
    type: "paragraph",
    text: "The brand needed clearer ownership around the category it wanted to lead. The site needed sharper keyword-to-page mapping. The core pages needed to communicate relevance and trust more effectively. And the supporting content layer needed to stop behaving like separate pieces of activity and start behaving like one system that strengthened the main category signal."
  },
  {
    type: "paragraph",
    text: "In simple terms, the upside was there. The structure underneath it just needed to be much more deliberate."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We tightened category positioning around the right search language"
  },
  {
    type: "paragraph",
    text: "The first thing that mattered was making sure the site’s language aligned much more closely with what the market was actually searching."
  },
  {
    type: "paragraph",
    text: "That sounds basic, but it is where many brands lose speed. They describe themselves one way internally, while search demand exists in slightly different language externally. If that gap stays open, authority builds much more slowly."
  },
  {
    type: "paragraph",
    text: "So one of the earliest priorities was tightening the connection between Dariaan’s positioning and the search terms that genuinely mattered, especially those tied to fashion startup acceleration and fashion-focused founder support."
  },

  {
    type: "subheading",
    text: "2. We improved keyword ownership across the site"
  },
  {
    type: "paragraph",
    text: "Once the category direction was clearer, the next step was to clean up ownership."
  },
  {
    type: "paragraph",
    text: "The right pages needed to own the right intent. The site needed less ambiguity and more clarity. Search engines respond much better when they are not being asked to guess which page is supposed to rank for a meaningful commercial term."
  },
  {
    type: "paragraph",
    text: "This is where better keyword mapping, tighter page relevance, and a more disciplined structure start doing real work. Instead of letting multiple pieces compete loosely around similar language, we focused on making the main signals much cleaner."
  },

  {
    type: "subheading",
    text: "3. We strengthened the pages that actually mattered"
  },
  {
    type: "paragraph",
    text: "Not every page deserves equal energy."
  },
  {
    type: "paragraph",
    text: "So instead of thinking in terms of broad SEO activity, we focused on the pages with the highest leverage. These were the pages that needed to communicate authority, relevance, and trust fast enough to support both ranking movement and founder confidence."
  },
  {
    type: "paragraph",
    text: "That meant improving page clarity, message alignment, search relevance, and the overall ability of the site to support the category it wanted to own."
  },

  {
    type: "subheading",
    text: "4. We built supporting relevance around the core category"
  },
  {
    type: "paragraph",
    text: "One page does not usually win a category alone."
  },
  {
    type: "paragraph",
    text: "It needs support."
  },
  {
    type: "paragraph",
    text: "That is where the supporting layer mattered. The right content and internal relationships helped reinforce the core category theme rather than distracting from it. The idea was not to publish for volume. The idea was to make the whole site feel more coherent around the commercial opportunity Dariaan was trying to capture."
  },
  {
    type: "paragraph",
    text: "That shift is important because search authority is rarely built by isolated pages. It is built by systems."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "The outcome was exactly the kind of result that changes how a brand is perceived."
  },
  {
    type: "paragraph",
    text: "Within 90 days, Dariaan ranked #1 for core keywords tied to the category it was trying to own. And beyond traditional rankings, the brand also started appearing in AI-led discovery layers, including the guest-mode ChatGPT and Google screenshots shown above."
  },
  {
    type: "paragraph",
    text: "That matters more than it may seem on the surface."
  },
  {
    type: "paragraph",
    text: "Because ranking well in normal search is one thing. Being surfaced in AI-driven answer environments as a relevant authority is another level of validation. It suggests that the brand is no longer just visible in a keyword tool sense. It is becoming semantically associated with the category itself."
  },
  {
    type: "paragraph",
    text: "That is a much stronger place to be."
  },
  {
    type: "paragraph",
    text: "The result here was not just improved ranking positions. It was stronger category visibility, better search authority, and a clearer perception that Dariaan belonged in conversations around fashion startup acceleration in India."
  },
  {
    type: "paragraph",
    text: "And that is where the real commercial value starts showing up. When a brand becomes easier to find, easier to trust, and easier to mentally place, everything downstream gets stronger."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because the project was never treated like a blog-first SEO exercise."
  },
  {
    type: "paragraph",
    text: "It was treated like a category-ownership exercise."
  },
  {
    type: "paragraph",
    text: "That difference matters a lot."
  },
  {
    type: "paragraph",
    text: "Instead of asking, “How do we get more traffic?” the better question was, “How do we make Dariaan the clearest answer in this niche?” Once the work is framed that way, the execution becomes sharper. Page ownership becomes more important. Positioning becomes more important. Support content becomes more intentional. And SEO stops being just an output function and starts becoming a brand-shaping system."
  },
  {
    type: "paragraph",
    text: "That is exactly what happened here."
  },
  {
    type: "paragraph",
    text: "The growth came from alignment. The brand message, the page structure, the keyword logic, and the support system started working in the same direction. That is what made the movement faster and stronger."
  },
  {
    type: "paragraph",
    text: "At PreCrux, this is how we think about growth execution more broadly. Not as isolated tactics, but as connected systems that make the right business easier to discover, easier to trust, and harder to ignore."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "A lot of brands assume category leadership comes much later, after years of content, backlinks, and slow momentum."
  },
  {
    type: "paragraph",
    text: "Sometimes that is true."
  },
  {
    type: "paragraph",
    text: "But sometimes the real opportunity is sitting in a niche that still has weakly claimed authority, and the brand that moves with the most clarity wins much faster than people expect."
  },
  {
    type: "paragraph",
    text: "That was the story with Dariaan."
  },
  {
    type: "paragraph",
    text: "This was not just a ranking gain. It was a category-positioning win. It showed what happens when a brand stops treating SEO like a loose publishing exercise and starts using it to become the most natural answer in a meaningful search space."
  },
  {
    type: "paragraph",
    text: "If your business is close to a category it should already be owning, but search visibility still is not reflecting that, the issue may not be demand. It may simply be that the execution underneath your positioning is not strong enough yet."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of gap we help diagnose at PreCrux."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }

],
        metrics: [
            { label: "Core Keyword Rankings", value: "#1" },
            { label: "Core Keyword Wins", value: "Strategy Outcome" },
            { label: "Category Ownership", value: "4 Countries" },
            { label: "Timeline", value: "90 days" },
        ],
        prevCase: { title: "A Leading US-Based Golf Company", slug: "the-net-return" },
        nextCase: { title: "Mover", slug: "mover" },
        relatedCases: [
            { title: "BIdet Australia", category: "Paid Growth", slug: "bidet", img: "/case-studies/bidet.png", result: "ROAS improved to 4.25x" },
            { title: "Mover", category: "Local SEO", slug: "mover", img: "/case-studies/mover.png", result: "45K+ clicks and Page 1 rankings" },
        ],
    },
    {
        title: "Mover",
        category: "Local SEO",
        tags: ["Local SEO", "Content Systems", "India"],
        slug: "mover",
        img: "/case-studies/mover.png",
        result: "45K+ clicks and Page 1 rankings",
        content: [

  {
    type: "image",
    src: "/case-studies/moverscreenshot.jpeg",
    caption: "Google Search Console snapshot showing how visibility moved slowly at first, then accelerated sharply once the right local SEO and content system started compounding."
  },

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "A lot of local service brands do not lose online because demand is missing. They lose because their search presence never becomes strong enough to convert that demand into real momentum."
  },
  {
    type: "paragraph",
    text: "That was the bigger story here."
  },
  {
    type: "paragraph",
    text: "When we started working on Mover, the business already had market relevance. People were searching. The category had demand. The opportunity to grow through search was there. But the site was not yet behaving like a serious local growth engine. Visibility existed in fragments, movement was there in patches, but it was not compounding the way it should for a service business that wanted stronger discoverability and more consistent lead flow."
  },
  {
    type: "paragraph",
    text: "And that is where many brands stay stuck for far too long."
  },
  {
    type: "paragraph",
    text: "They keep publishing, keep tweaking, keep hoping for a lift, but the overall curve never really bends. It moves, but it does not break out. Then suddenly, when the right system gets put in place, the graph starts telling a completely different story."
  },
  {
    type: "paragraph",
    text: "That is exactly what happened here."
  },
  {
    type: "paragraph",
    text: "This was not just about getting Mover more traffic. It was about building the kind of local SEO and content system that could take a slow-moving search presence and turn it into something much more visible, much more trusted, and much harder to ignore."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The challenge was not that Mover had zero visibility. The challenge was that the visibility it had was too weak, too inconsistent, and too under-supported to create serious momentum."
  },
  {
    type: "paragraph",
    text: "This is a common local growth problem."
  },
  {
    type: "paragraph",
    text: "A service business may already have pages, already have some search presence, and already be getting discovered here and there. But if the site is not aligned properly around local search intent, service relevance, and supporting content, then the growth stays flat for longer than it should. The business remains visible enough to survive, but not visible enough to dominate."
  },
  {
    type: "paragraph",
    text: "That was the danger here."
  },
  {
    type: "paragraph",
    text: "Mover needed more than a few isolated ranking improvements. It needed a stronger local search foundation, clearer reinforcement around service demand, and a structure that could actually push key terms toward page one and keep them there with more consistency."
  },
  {
    type: "paragraph",
    text: "Because when that structure is missing, even a good business can stay trapped in the slow-growth zone."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we looked deeper, it became clear that this was not really a “low clicks” problem. It was a compounding problem."
  },
  {
    type: "paragraph",
    text: "What looked slow on the surface was actually a system waiting for the right structure underneath it."
  },
  {
    type: "paragraph",
    text: "The business had enough demand potential. The market was there. But the site was not yet extracting enough value from that demand because the local SEO foundation and the content support system were not working together strongly enough. Search visibility was present, but it was not being reinforced properly. Important service-related intent was not yet carrying enough strength. And the site as a whole was not behaving like one connected engine built to keep building on its own momentum."
  },
  {
    type: "paragraph",
    text: "That is the difference most people miss."
  },
  {
    type: "paragraph",
    text: "They see a low or moderate traffic curve and assume the answer is more activity. But in cases like this, the answer is often better structure. Better local relevance. Better support around the pages that matter. Better alignment between what people are searching, what the business offers, and how the site helps search engines understand those relationships."
  },
  {
    type: "paragraph",
    text: "Once we saw that clearly, the next move became obvious. This did not need random SEO. It needed a proper local growth system."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We strengthened the local SEO foundation"
  },
  {
    type: "paragraph",
    text: "The first priority was making the site more aligned with the actual local demand it needed to capture."
  },
  {
    type: "paragraph",
    text: "That meant improving how service relevance and local search intent were being supported, so the business could become easier to discover in the places that mattered most. Local SEO works best when the site stops speaking in vague terms and starts reinforcing exactly where it belongs, what it serves, and why it is relevant in that context."
  },
  {
    type: "paragraph",
    text: "So before chasing the scale, we made sure the foundation was strong enough to carry it."
  },

  {
    type: "subheading",
    text: "2. We built stronger content systems around service visibility"
  },
  {
    type: "paragraph",
    text: "This part mattered a lot."
  },
  {
    type: "paragraph",
    text: "We did not use content like filler. We used it like support. The goal was not to make the site look active. The goal was to help key pages build more strength, more relevance, and more discoverability over time. That is what turns content from an activity into a system."
  },
  {
    type: "paragraph",
    text: "When content systems are built properly, they stop behaving like disconnected posts and start working like reinforcement around the visibility the business actually needs. That is what helped Mover move from slow growth toward stronger page-one presence."
  },

  {
    type: "subheading",
    text: "3. We improved the site’s ability to compound"
  },
  {
    type: "paragraph",
    text: "This is where things started changing more dramatically."
  },
  {
    type: "paragraph",
    text: "The real shift came when the local SEO layer and the content support layer stopped functioning like separate tasks and started behaving like one connected growth engine. Once that happened, visibility no longer felt random or fragile. It started building on itself."
  },
  {
    type: "paragraph",
    text: "And that is exactly what you can see in the screenshot."
  },
  {
    type: "paragraph",
    text: "For a while, the line moves slowly. Then the right system starts taking effect, and the curve changes character. It begins climbing harder, faster, and with much more confidence. That kind of graph is not usually the result of one lucky ranking jump. It is what happens when the underlying structure finally becomes strong enough to let demand turn into momentum."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "The outcome was clear."
  },
  {
    type: "paragraph",
    text: "Mover reached 45K+ clicks, 2.94M impressions, and an average position of 7.6 within 90 days, with stronger page-one visibility across the keyword landscape that mattered most."
  },
  {
    type: "paragraph",
    text: "But what makes this case powerful is not just the total numbers."
  },
  {
    type: "paragraph",
    text: "It is the shape of the growth itself."
  },
  {
    type: "paragraph",
    text: "That curve tells a more convincing story than a single metric ever could. In the beginning, growth is present but relatively slow. Then, once the right local SEO and content structure starts compounding, the curve breaks upward and keeps going. That is what real search momentum looks like. It does not just spike once and disappear. It builds."
  },
  {
    type: "paragraph",
    text: "That is why this was more than a reporting win."
  },
  {
    type: "paragraph",
    text: "It was a visibility breakthrough. The kind that changes how a business shows up, how often it gets discovered, and how much easier it becomes for the right customers to find it in the first place."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not treat the problem like a traffic shortage."
  },
  {
    type: "paragraph",
    text: "We treated it like a local growth system problem."
  },
  {
    type: "paragraph",
    text: "That difference matters because a lot of SEO work stays too shallow. It focuses on keywords without building a strong enough structure around them. It optimizes pages without giving those pages the support they need. It produces content without making that content strategically useful. And then teams wonder why growth feels slow and unstable."
  },
  {
    type: "paragraph",
    text: "Here, the breakthrough came from building the right layers in the right order."
  },
  {
    type: "paragraph",
    text: "Local SEO gave the business stronger relevance where it mattered. Content systems gave the site better support and reinforcement. And once those layers started working together, the site stopped behaving like a slow-moving collection of pages and started behaving like a connected search engine for demand."
  },
  {
    type: "paragraph",
    text: "That is the kind of growth that lasts longer, compounds better, and feels much more trustworthy when you look at the data."
  },
  {
    type: "paragraph",
    text: "At PreCrux, that is how we think about search execution. Not as isolated improvements, but as systems that make visibility build on itself."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "A lot of service businesses assume slow growth means low demand."
  },
  {
    type: "paragraph",
    text: "Very often, it does not."
  },
  {
    type: "paragraph",
    text: "Very often, it means the site has not yet reached the point where the right structure starts compounding properly. That was the real opportunity with Mover. Once the local SEO foundation became stronger and the content system started reinforcing the right signals, the business moved from slow search activity into a much more serious growth curve."
  },
  {
    type: "paragraph",
    text: "That is the bigger lesson here."
  },
  {
    type: "paragraph",
    text: "The breakthrough did not happen because we chased traffic. It happened because we built the kind of local search system that traffic could finally compound through."
  },
  {
    type: "paragraph",
    text: "If your business already has demand in the market but search growth still feels slower than it should, that usually means the gap is deeper than traffic alone. It usually means the structure underneath your visibility is not doing enough heavy lifting yet."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of problem we help diagnose at PreCrux."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }

],
        metrics: [
            { label: "Clicks", value: "45K+" },
            { label: "Keyword Rankings", value: "Page 1" },
            { label: "Core Lever", value: "Local SEO" },
            { label: "Timeline", value: "90 Days" },
        ],
        prevCase: { title: "Daarian", slug: "daarian" },
        nextCase: { title: "BIdet Australia", slug: "bidet" },
        relatedCases: [
            { title: "Daarian", category: "SEO ", slug: "daarian", img: "/case-studies/daarian.png", result: "80K+ clicks and 3M+ impressions" },
            { title: "BIdet Australia", category: "Paid Growth", slug: "bidet", img: "/case-studies/bidet.png", result: "ROAS improved to 4.25x" },
        ],
    },
    {
        title: "BIdet Australia",
        category: "Paid Growth",
        tags: ["Paid Growth", "Ecommerce",  "Australia"],
        slug: "bidet",
        img: "/case-studies/bidet.png",
        result: "ROAS improved to 4.25x",
        content: [

  {
    type: "subheading",
    text: "Confidentiality Note",
    
  },
  {
    type: "paragraph",
    text: "Due to client confidentiality, we are not sharing ad account screenshots or revenue-level platform data for this project. However, the setup, attribution problem, operating changes, and performance shift shared below reflect the actual work and outcomes.",
  isNote: true
},

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "A lot of paid accounts do not look broken at first."
  },
  {
    type: "paragraph",
    text: "That is exactly why they become dangerous."
  },
  {
    type: "paragraph",
    text: "The dashboards look healthy enough to keep spending. Meta shows conversions. Google shows conversions. Retargeting appears efficient. Brand search looks strong. The reported ROAS is not bad, so the team keeps moving forward. And yet, beneath all that, something still feels off. Scaling decisions feel shakier than they should. The account looks profitable on paper, but the confidence behind those numbers is thinner than anyone wants to admit."
  },
  {
    type: "paragraph",
    text: "That was the real situation here."
  },
  {
    type: "paragraph",
    text: "This project was for a leading Australia-based premium bidet DTC brand. The business was around 18 months old, spending roughly $5,000 to $7,000 per month across Meta Ads and Google Ads, and reporting a blended ROAS of 2.21x. On the surface, that does not sound terrible. It sounds like the kind of account many founders would keep feeding, hoping the next round of creative tests or budget changes would unlock the next stage of growth."
  },
  {
    type: "paragraph",
    text: "But that was not the actual problem."
  },
  {
    type: "paragraph",
    text: "The real issue was that the account was being judged through a reporting view that was flattering in some places, misleading in others, and not clean enough to make serious scaling decisions with confidence."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The challenge here was not dramatic underperformance. It was distorted clarity."
  },
  {
    type: "paragraph",
    text: "And honestly, that is harder to catch."
  },
  {
    type: "paragraph",
    text: "If an account is obviously failing, everyone sees it. Spend is wasted, sales are weak, and the team knows something major has to change. But when an account is sitting in the “fine enough” zone, it often gets protected by its own dashboards. People hesitate to question the structure because the numbers do not look broken enough to trigger urgency."
  },
  {
    type: "paragraph",
    text: "That was the trap."
  },
  {
    type: "paragraph",
    text: "The brand was already scaling. Both platforms appeared to be contributing. Reported returns made the account look workable. But the deeper question was not, “Are we getting results?” It was, “Are we reading these results correctly enough to scale the right things?”"
  },
  {
    type: "paragraph",
    text: "That is a very different question."
  },
  {
    type: "paragraph",
    text: "Because if the answer is no, then the business starts rewarding the wrong campaigns, overtrusting the wrong metrics, and slowly building a paid growth system around a version of reality that is incomplete."
  },
  {
    type: "paragraph",
    text: "That is expensive."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we got into the account properly, it became clear that this was not really an ad problem first. It was a credit-assignment problem hiding inside the ad account."
  },
  {
    type: "paragraph",
    text: "There were six quiet issues shaping the whole system."
  },
  {
    type: "paragraph",
    text: "The first was classic last-click bias. Both Meta and Google were often claiming more credit than they truly deserved, and that made the final touchpoint look more important than the actual journey."
  },
  {
    type: "paragraph",
    text: "The second was brand search inflation. Users were often seeing the brand through Meta first, then later searching the brand name on Google before converting. That made Google’s reported performance look cleaner and stronger than it really was."
  },
  {
    type: "paragraph",
    text: "The third was retargeting inflation. Retargeting looked like a hero because it was catching already-warm demand, not because it was necessarily creating fresh demand."
  },
  {
    type: "paragraph",
    text: "The fourth was that each platform was being treated too much like its own source of truth. Meta had its story. Google had its story. Both looked logical in-platform, but neither should have been the final basis for budget allocation."
  },
  {
    type: "paragraph",
    text: "The fifth issue was that the funnel stages were not separated clearly enough. Prospecting, retargeting, brand, and direct were blending into one messy performance view. Once that happens, it becomes much harder to understand what is truly driving growth and what is simply collecting credit at the end."
  },
  {
    type: "paragraph",
    text: "And the sixth issue was the most dangerous one: awareness-driving campaigns were at risk of being undervalued. Campaigns doing the hard work at the top of the funnel can look weaker than they really are when the reporting model is distorted. Once that happens, teams start pausing or reducing the exact campaigns feeding the rest of the system."
  },
  {
    type: "paragraph",
    text: "That is how scaling quietly breaks."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We changed the reporting source of truth"
  },
  {
    type: "paragraph",
    text: "The first step was shifting the account to a cleaner last-non-brand-click view."
  },
  {
    type: "paragraph",
    text: "That mattered because it reduced the artificial inflation caused by brand search and made it easier to see which paid activity was actually helping create demand rather than just catching it at the end. We did not need a prettier dashboard. We needed a more reliable operating lens."
  },

  {
    type: "subheading",
    text: "2. We separated the funnel properly"
  },
  {
    type: "paragraph",
    text: "Next, we stopped treating the account like one blended machine and separated it into the stages that actually mattered:"
  },

  {
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
    text: "That immediately changed the quality of the conversation."
  },
  {
    type: "paragraph",
    text: "Instead of asking vague questions like “Which campaign is working best?”, the team could start asking more useful questions like “Which stage is doing which job, and where is the real contribution happening?”"
  },
  {
    type: "paragraph",
    text: "That is where paid growth starts becoming more intelligent."
  },

  {
    type: "subheading",
    text: "3. We introduced a more useful decision model"
  },
  {
    type: "paragraph",
    text: "We did not go down the path of an overbuilt multi-touch framework."
  },
  {
    type: "paragraph",
    text: "Instead, we used simple weighted logic that gave more credit to the first paid touchpoint within a 90-day window, and we shifted decision-making toward incremental contribution rather than flattering platform-reported ROAS."
  },
  {
    type: "paragraph",
    text: "That sounds technical, but the actual impact was practical."
  },
  {
    type: "paragraph",
    text: "The team stopped treating Meta’s and Google’s native ROAS columns as the final basis for scaling decisions. Those numbers were still observed, but they were no longer the authority. The account started being managed based on what was actually moving the system when campaigns were increased, reduced, or turned off, not just what each platform wanted to claim."
  },

  {
    type: "subheading",
    text: "4. We refreshed creatives, but kept the real focus where it belonged"
  },
  {
    type: "paragraph",
    text: "Yes, creatives were refreshed as part of the project."
  },
  {
    type: "paragraph",
    text: "But they were not the main hero of the story."
  },
  {
    type: "paragraph",
    text: "We aligned creative angles with the now stage-separated funnel, so prospecting and retargeting were no longer being asked to do the same job with the same messaging. That helped. It made the account healthier. But the real unlock still came from attribution clarity, because even strong creative gets misjudged when the reporting model itself is lying."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "Within 90 days, the blended ROAS moved from 2.21x to 4.2x."
  },
  {
    type: "paragraph",
    text: "That was the headline shift."
  },
  {
    type: "paragraph",
    text: "But the more meaningful result was what happened beneath that number."
  },
  {
    type: "paragraph",
    text: "Wasted spend on low-quality retargeting dropped. Budget allocation became more obvious and much more confident. The campaigns driving real top-of-funnel contribution became easier to identify and protect. And the entire account stopped being governed by whichever platform told the most flattering story."
  },
  {
    type: "paragraph",
    text: "That changed the quality of scaling."
  },
  {
    type: "paragraph",
    text: "The team could finally see which campaigns were genuinely driving profitable growth and which ones were simply showing up at the end to collect credit. And once that became clearer, the account became far easier to manage intelligently."
  },
  {
    type: "paragraph",
    text: "That is the kind of result that matters."
  },
  {
    type: "paragraph",
    text: "Because a better number is useful. But a better decision-making system is what gives that number a chance to keep holding up."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not chase prettier reporting. We chased cleaner truth."
  },
  {
    type: "paragraph",
    text: "That is the real difference."
  },
  {
    type: "paragraph",
    text: "The uplift did not come from discovering some hidden trick inside the ad platforms. It came from finally seeing the account honestly enough to stop funding the wrong winners and start backing the campaigns that were actually creating demand."
  },
  {
    type: "paragraph",
    text: "Once that happened, everything improved in a more rational way."
  },
  {
    type: "paragraph",
    text: "Budgeting improved because spend could move with more confidence. Campaign prioritization improved because the team could see which stages were doing real work. Creative became easier to evaluate because it was no longer being judged through a distorted funnel view. And scaling became more stable because the business was no longer relying on inflated signals to decide where to lean harder."
  },
  {
    type: "paragraph",
    text: "At PreCrux, this is how we think about paid growth. Not as a game of platform screenshots and vanity ROAS, but as a decision system. If that decision system is distorted, even decent campaigns get mismanaged. If that decision system becomes cleaner, the whole account starts making more sense."
  },

  {
    type: "heading",
    text: "Honest Limitation"
  },
  {
    type: "paragraph",
    text: "It is important to say this clearly: attribution clarity did not magically create the uplift by itself."
  },
  {
    type: "paragraph",
    text: "It removed blind spots."
  },
  {
    type: "paragraph",
    text: "That is what it did."
  },
  {
    type: "paragraph",
    text: "The result still depended on the account having real potential in the first place. It depended on the offer being strong enough, the funnel being healthy enough, conversion tracking being reliable enough, and the team being disciplined enough to act on the cleaner view once it was available."
  },
  {
    type: "paragraph",
    text: "So no, the takeaway is not that every brand can copy one attribution model and jump to 4.2x ROAS."
  },
  {
    type: "paragraph",
    text: "The real takeaway is much more useful than that."
  },
  {
    type: "paragraph",
    text: "When reporting becomes honest, everything else becomes easier to improve intelligently."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "Most paid campaigns do not fail because the ads are terrible."
  },
  {
    type: "paragraph",
    text: "They fail because the team is optimizing against a version of reality that is incomplete, inflated, or strategically misleading."
  },
  {
    type: "paragraph",
    text: "That was the real problem here, and once the attribution model became cleaner, the path forward became much clearer too. The business could finally distinguish between what was actually driving profitable growth and what was simply taking credit for it at the end."
  },
  {
    type: "paragraph",
    text: "That is where serious scaling starts."
  },
  {
    type: "paragraph",
    text: "If your Meta and Google numbers look profitable, but the account still feels harder to scale than it should, the issue may not be the ads alone. It may be the reporting model shaping every decision underneath them."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of growth clarity we help build at PreCrux."
  }

],
        metrics: [
            { label: "Blended ROAS", value: "4.2x" },
            { label: "Wasted Spend", value: "Lower" },
            { label: "Budget Allocation", value: "Clearer" },
            { label: "Monthly Stack Cost", value: "6 Months" },
        ],
        prevCase: { title: "Mover", slug: "mover" },
        nextCase: {title: "Renowned chef & gourmet food brand", slug: "chef-gourmet"},
        relatedCases: [
            { title: "A Leading US-Based Golf Company ", category: "SEO", slug: "the-net-return", img: "/case-studies/the-net-return.jpg", result: "80K+ clicks and 3M+ impressions" },
            { title: "Renowned chef & gourmet food brand", category: "Paid Growth", slug: "chef-gourmet", img: "/case-studies/chef.jpeg", result: "86% Organic growth" },
        ],
    },
    {
        title: "Renowned Chef & Gourmet Food Brand",
        category: "Paid Growth",
        tags: ["Paid Growth", "SEO", "Food Brand"],
        slug: "chef-gourmet",
        img: "/case-studies/chef.jpeg",
        result: "86% Organic growth and stronger purchase intent",
        content: [

  {
    type: "subheading",
    text: "Confidentiality Note",
  },
  {
    type: "paragraph",
    text: "Due to client confidentiality, we are not sharing internal screenshots, Search Console data, or campaign visuals for this project. However, the growth situation, strategic corrections, and business outcome shared below reflect the actual work delivered.",
  isNote: true
},

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "Sometimes the hardest part of growth is not getting a brand results from zero. It is rebuilding trust after the wrong agency has already wasted time, money, and confidence."
  },
  {
    type: "paragraph",
    text: "That was the real situation here."
  },
  {
    type: "paragraph",
    text: "This project was for a renowned gourmet food brand that came to us after a frustrating experience with a previous agency. On paper, that agency looked established and experienced. In reality, the work was not creating meaningful movement. Content was being produced, yes, but it felt repetitive, templated, and disconnected from what organic growth actually needs. The founder was paying for activity, not for progress."
  },
  {
    type: "paragraph",
    text: "So by the time we entered the picture, this was not a clean “let’s grow” engagement. It was a skepticism-first engagement."
  },
  {
    type: "paragraph",
    text: "The brand did not need more promises. It needed proof that someone actually understood how to create useful SEO momentum. And because the earlier experience had already damaged confidence, organic growth became the area where trust had to be rebuilt first. Paid support existed in the background, but the real emotional and strategic priority was clear: show that the business could finally start seeing meaningful organic movement from work that actually had substance behind it."
  },
  {
    type: "paragraph",
    text: "That is what made this case important."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The challenge was not just low growth. It was low trust."
  },
  {
    type: "paragraph",
    text: "The brand had already spent money on agency work that was supposed to help, but the output was too weak to create real confidence. The content being produced did not feel like it was built to rank, built to educate, or built to support purchase intent properly. It felt like content was being generated because content was “part of the package,” not because it was serving the business well."
  },
  {
    type: "paragraph",
    text: "And that creates a dangerous kind of fatigue for founders."
  },
  {
    type: "paragraph",
    text: "When a business has already invested in outside help and still sees shallow execution, every new recommendation starts sounding less credible. Even good work has to fight through the memory of bad work. That was the environment here."
  },
  {
    type: "paragraph",
    text: "The founder was not looking for another agency that could talk well. The founder wanted to know whether the work would finally start making sense. Whether the strategy would be sharper. Whether the output would feel more valuable. Whether the business could finally stop funding hollow activity and start building real organic strength."
  },
  {
    type: "paragraph",
    text: "That is a different kind of challenge, because the job is no longer only to improve search performance. The job is also to restore belief."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we reviewed the situation closely, it became obvious that this was not simply an “organic growth is slow” problem."
  },
  {
    type: "paragraph",
    text: "It was an execution-quality problem."
  },
  {
    type: "paragraph",
    text: "The previous content direction was too formulaic. The structure was repetitive. The value depth was weak. The work did not feel tailored enough to support search intent properly, and it definitely did not feel strong enough to help the brand stand out in a competitive gourmet food environment where quality, trust, and relevance matter a lot."
  },
  {
    type: "paragraph",
    text: "That matters more than many people realize."
  },
  {
    type: "paragraph",
    text: "A brand can publish content for months and still build almost no meaningful organic equity if the work is generic, predictable, or built around the same reusable format again and again. Search engines are not the only ones that notice that. Founders notice it too, even when they cannot fully articulate the technical reason. They can feel when the work is hollow."
  },
  {
    type: "paragraph",
    text: "That is what had happened here."
  },
  {
    type: "paragraph",
    text: "The business did not need more content volume. It needed content that actually deserved to rank. It needed stronger SEO thinking underneath the content. It needed a clearer understanding of what readers were searching for, what kind of structure helps content compete, and what kind of page quality actually supports better visibility and stronger purchase intent."
  },
  {
    type: "paragraph",
    text: "So the issue was not that the brand lacked opportunity."
  },
  {
    type: "paragraph",
    text: "The issue was that the earlier execution was too weak to convert that opportunity into meaningful growth."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We replaced templated content with real value-driven SEO content"
  },
  {
    type: "paragraph",
    text: "The first major shift was changing the quality level of the content itself."
  },
  {
    type: "paragraph",
    text: "Instead of repeating formulaic patterns, we focused on creating work that had real depth, clearer intent alignment, and much stronger usefulness. The goal was not just to fill the blog section. The goal was to create content that actually had a reason to rank and a reason to be read."
  },
  {
    type: "paragraph",
    text: "This was one of the most important changes in the whole project, because organic growth rarely improves in a serious way when the content layer is weak at its core."
  },

  {
    type: "subheading",
    text: "2. We rebuilt the SEO direction around sharper execution"
  },
  {
    type: "paragraph",
    text: "Content quality alone was not enough. The strategy around it also needed to improve."
  },
  {
    type: "paragraph",
    text: "So the next step was making the SEO direction more disciplined, more relevant, and more commercially useful. Instead of treating blogs like isolated deliverables, we treated them as assets that should support visibility, trust, and buying intent more meaningfully. The work became much less about output and much more about useful momentum."
  },
  {
    type: "paragraph",
    text: "That is a crucial difference."
  },
  {
    type: "paragraph",
    text: "Because brands do not grow organically just because content exists. They grow when the right content is being created in the right way, with the right level of relevance and structure behind it."
  },

  {
    type: "subheading",
    text: "3. We gave the founder an early proof point they could actually believe"
  },
  {
    type: "paragraph",
    text: "This was the turning point emotionally, not just strategically."
  },
  {
    type: "paragraph",
    text: "One of the first blogs we created started ranking at 11th position on the SERP within 2 weeks. And in situations like this, an early signal matters more than people think. Not because one blog ranking is the full story, but because it changes the emotional state of the relationship."
  },
  {
    type: "paragraph",
    text: "Until that moment, the founder had every reason to be skeptical."
  },
  {
    type: "paragraph",
    text: "After that moment, the founder could finally see that the difference was not theoretical. The quality gap between the old work and the new work was visible in the real world. The trust did not return because we explained our process well. It started returning because the work itself began proving the point."
  },
  {
    type: "paragraph",
    text: "That changed the relationship."
  },

  {
    type: "subheading",
    text: "4. We supported growth more intelligently, not more noisily"
  },
  {
    type: "paragraph",
    text: "Paid support remained in the background, but given the brand’s prior experience, the real emphasis stayed on building confidence through organic progress. That was the right strategic call."
  },
  {
    type: "paragraph",
    text: "The brand did not need a louder marketing machine. It needed a better one."
  },
  {
    type: "paragraph",
    text: "And once the organic layer started strengthening, the business could finally feel that the work was building something useful instead of just consuming budget."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "Over 6 months, the brand achieved 86% organic growth."
  },
  {
    type: "paragraph",
    text: "That was the headline outcome."
  },
  {
    type: "paragraph",
    text: "But the deeper result was more meaningful than the percentage alone. The brand moved from skepticism and weak execution into a system that finally felt trustworthy. Organic growth stopped feeling like something that agencies talk about and started feeling like something the business could actually see happening."
  },
  {
    type: "paragraph",
    text: "That shift matters a lot."
  },
  {
    type: "paragraph",
    text: "The founder had already experienced what wasted effort looks like. So the real win here was not just that traffic improved. It was that the business finally started seeing signs that the work was grounded in quality, relevance, and momentum strong enough to create real movement."
  },
  {
    type: "paragraph",
    text: "The early ranking signal created belief. The continued organic growth created trust. And over time, the brand could see that the new work was not just more polished. It was more effective."
  },
  {
    type: "paragraph",
    text: "That is the kind of result that changes how founders think about growth partnerships."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not try to impress the brand with more volume."
  },
  {
    type: "paragraph",
    text: "We replaced low-value activity with work that was actually useful."
  },
  {
    type: "paragraph",
    text: "That is the real difference."
  },
  {
    type: "paragraph",
    text: "The previous agency approach had created output, but not enough value. Once the content became more thoughtful, more relevant, and more structurally sound, the brand had a much better chance of earning search visibility that meant something. And once the founder saw that difference show up early enough in rankings, the relationship itself became stronger too."
  },
  {
    type: "paragraph",
    text: "That part is important."
  },
  {
    type: "paragraph",
    text: "A lot of case studies talk only about numbers, but in engagements like this, trust is part of the result. If a founder has already been burned by shallow work, then the new team does not just have to grow traffic. They have to prove that the work deserves to be trusted. That is what happened here."
  },
  {
    type: "paragraph",
    text: "At PreCrux, we care a lot about that difference. We do not think good SEO is just about publishing more. It is about understanding what should rank, why it should rank, and how to create work that is strong enough to build trust with both search engines and human readers."
  },
  {
    type: "paragraph",
    text: "That is why this project moved the way it did."
  },

  {
    type: "heading",
    text: "Honest Limitation"
  },
  {
    type: "paragraph",
    text: "It is important to say this clearly: the 86% organic growth did not come from one blog, one ranking jump, or one tactical change alone."
  },
  {
    type: "paragraph",
    text: "It came from replacing weak execution with stronger execution over time."
  },
  {
    type: "paragraph",
    text: "The first blog ranking at 11th position within 2 weeks was an important trust-building moment, but the broader result came from continuing to produce work with stronger SEO value, stronger content quality, and a more useful growth direction overall."
  },
  {
    type: "paragraph",
    text: "And like any organic result, outcomes like this still depend on a few things going right together:"
  },

  {
    type: "list",
    items: [
      "product quality",
      "market demand",
      "founder responsiveness",
      "execution consistency",
      "enough time for momentum to build"
    ]
  },

  {
    type: "paragraph",
    text: "So no, this was not a one-post miracle story."
  },
  {
    type: "paragraph",
    text: "It was the result of stopping shallow work and replacing it with work that could actually carry organic momentum."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "A lot of brands think their problem is that SEO is slow."
  },
  {
    type: "paragraph",
    text: "Sometimes the problem is not speed. Sometimes the problem is that the work being done is too generic, too repetitive, or too weak to create the kind of trust and momentum organic growth actually needs."
  },
  {
    type: "paragraph",
    text: "That was the real issue here."
  },
  {
    type: "paragraph",
    text: "Once the content became more valuable, once the SEO direction became sharper, and once the founder could see real proof instead of templated activity, the whole relationship changed. Organic growth started making sense again. The brand stopped paying for hollow movement and started building something far more useful."
  },
  {
    type: "paragraph",
    text: "That is the bigger lesson."
  },
  {
    type: "paragraph",
    text: "If your business has already spent money on agencies but the work still feels shallow, repetitive, or disconnected from real growth, the issue is usually not effort alone. It is execution quality."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of gap we help diagnose at PreCrux."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }

],
        metrics: [
            { label: "Organic Growth", value: "86%" },
            { label: "Core Levers", value: "Paid Growth + SEO" },
            { label: "Purchase Intent", value: "Stronger" },
            { label: "Timeline", value: "6 months" },
        ],
        prevCase: { title: "BIdet Australia", slug: "bidet" },
        nextCase: { title: "Gut health wellness brand", slug: "health-wellness" },
        relatedCases: [
            { title: "BIdet Australia", category: "Paid Growth", slug: "bidet", img: "/case-studies/bidet.png", result: "ROAS improved to 4.25x" },
            { title: "Gut health wellness brand", category: "Paid Growth", slug: "health-wellness", img: "/case-studies/gut.jpeg", result: "126% ROI increase + stronger customer acquisition" },
        ],
    },
    {
        title: "Gut Health Wellness Brand",
        category: "Paid Growth",
        tags: ["Paid Growth", "Wellness", "Ecommerce"],
        slug: "health-wellness",
        img: "/case-studies/gut.jpeg",
        result: "126% ROI increase + stronger customer acquisition",
        content: [

  {
    type: "subheading",
    text: "Confidentiality Note",
    
  },
  {
    type: "paragraph",
    text: "Due to client confidentiality, we are not sharing ad account screenshots, platform data, or revenue-level performance visuals for this project. However, the setup, acquisition issues, strategic changes, and performance shift shared below reflect the actual work delivered.",
    isNote: true
  },

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "A lot of wellness brands do not struggle because the product is weak. They struggle because the market is crowded, the messaging starts sounding interchangeable, and the customer acquisition system keeps attracting the wrong kind of buyer at the wrong cost."
  },
  {
    type: "paragraph",
    text: "That was the real situation here."
  },
  {
    type: "paragraph",
    text: "This project was for an Indian direct-to-consumer premium gut health wellness brand selling daily digestive support products like probiotics, prebiotics, digestive enzymes, and broader gut support supplements. The product quality was not the issue. The category had demand. People were actively looking for solutions around bloating, digestion, energy, and daily wellness. But the brand was still finding it difficult to scale in a healthy way."
  },
  {
    type: "paragraph",
    text: "That is what made this case important."
  },
  {
    type: "paragraph",
    text: "At PreCrux, we were not stepping into a dead account with no movement at all. Customer acquisition was already happening. Ads were running. Spend was going out. But the system underneath that acquisition was not strong enough. Costs were too high, buyer quality was too average, and scale felt stressful instead of confident."
  },
  {
    type: "paragraph",
    text: "In other words, the brand did not need more random ad activity. It needed a much sharper customer acquisition engine."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "When we started, the brand was around 13 months old, running Meta Ads and Google Ads with a monthly spend of roughly ₹30,000 to ₹50,000 INR. The blended ROI was sitting at 1.92x."
  },
  {
    type: "paragraph",
    text: "That number is not a total disaster. It is the kind of number that keeps founders hopeful enough to continue, but uncomfortable enough to know something is still off."
  },
  {
    type: "paragraph",
    text: "And that was exactly the problem."
  },
  {
    type: "paragraph",
    text: "The business was acquiring customers, but the economics were not clean enough. CAC was too high. Buyer quality was not strong enough. Scaling did not feel exciting or controlled. It felt uncertain. The more important question was not, “Are ads working at all?” The more useful question was, “Why is a genuinely good product still not attracting the kind of profitable, high-intent customer base it should be able to build?”"
  },
  {
    type: "paragraph",
    text: "That is where most brands start wasting time."
  },
  {
    type: "paragraph",
    text: "They assume they need more budget, more creatives, more campaign experiments, or more broad-market reach. But in cases like this, the issue is often deeper than activity. The issue is that the brand is not being understood properly, the offer is not doing enough heavy lifting, and the acquisition system is attracting too much low-intent attention."
  },
  {
    type: "paragraph",
    text: "That was the real challenge here."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we looked closely, it became obvious that this was not simply a “paid ads performance” issue."
  },
  {
    type: "paragraph",
    text: "It was a customer-acquisition quality issue sitting underneath the account."
  },
  {
    type: "paragraph",
    text: "The biggest problem was the messaging. It was too generic. “Improve your gut health” sounds fine in theory, but in a crowded Indian wellness market, it is far too broad to make people stop, feel seen, and respond. Real customers do not wake up searching for abstract wellness language. They are dealing with specific daily frustrations like bloating after meals, irregular digestion, stress-related discomfort, low energy, or that constant feeling that something in the body just feels off."
  },
  {
    type: "paragraph",
    text: "The ads were not getting close enough to that lived reality."
  },
  {
    type: "paragraph",
    text: "The creative direction had a similar problem. It looked too clean, too clinical, and too product-first. That often feels “professional” internally, but in the feed it can become emotionally invisible. People scroll past because they do not feel understood."
  },
  {
    type: "paragraph",
    text: "Then there was the offer problem."
  },
  {
    type: "paragraph",
    text: "Single-bottle buying logic is weak in categories like this unless the brand is already dominant or the product is extremely impulse-friendly. Here, there was not enough reason for a buyer to commit properly. The offer structure was not helping conversion, retention, or buyer seriousness enough."
  },
  {
    type: "paragraph",
    text: "Targeting also needed work. It was too broad, which meant the account was attracting lower-intent buyers and making CAC heavier than it should have been. And on top of that, the landing pages and funnels were not carrying enough trust, emotional pull, or transformation logic to support conversion strongly enough once people clicked through."
  },
  {
    type: "paragraph",
    text: "So the issue was not just ads."
  },
  {
    type: "paragraph",
    text: "The issue was that the whole acquisition system needed to become more relevant, more convincing, and more commercially intelligent."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We rebuilt the messaging around real daily struggles"
  },
  {
    type: "paragraph",
    text: "This was the first major shift."
  },
  {
    type: "paragraph",
    text: "Instead of using broad, generic wellness language, we moved the messaging much closer to what people were actually experiencing in day-to-day life. That meant framing the product around real gut-related struggles in language that felt human and specific."
  },
  {
    type: "paragraph",
    text: "We brought the communication closer to:"
  },

  {
    type: "list",
    items: [
      "bloating after meals",
      "irregular digestion",
      "low energy",
      "brain fog",
      "stress-related stomach discomfort",
      "everyday digestive frustration"
    ]
  },

  {
    type: "paragraph",
    text: "This matters because customer acquisition gets easier when the person reading the ad feels recognized before they feel sold to."
  },
  {
    type: "paragraph",
    text: "The goal was not to sound more dramatic. The goal was to sound more accurate."
  },

  {
    type: "subheading",
    text: "2. We rebuilt the offer architecture"
  },
  {
    type: "paragraph",
    text: "The next layer was the offer itself."
  },
  {
    type: "paragraph",
    text: "The brand needed stronger commercial logic, not just better-looking campaigns. So instead of leaning too heavily on weaker single-bottle buying behavior, we moved toward more compelling bundle and subscription thinking. That helped create stronger intent, better first-order economics, and a clearer reason for buyers to commit more seriously from the beginning."
  },
  {
    type: "paragraph",
    text: "We also strengthened the surrounding purchase logic with:"
  },

  {
    type: "list",
    items: [
      "better bundle framing",
      "more sensible first-order incentives",
      "stronger commitment reasons",
      "clearer transformation expectations",
      "risk-reversal support"
    ]
  },

  {
    type: "paragraph",
    text: "This was important because in wellness, a stronger offer often does more for performance than another round of generic creative testing ever could."
  },

  {
    type: "subheading",
    text: "3. We improved targeting, funnel, and trust signals"
  },
  {
    type: "paragraph",
    text: "The third layer was making the entire journey more intelligent."
  },
  {
    type: "paragraph",
    text: "We segmented the acquisition approach more carefully and built creative angles that spoke to different customer realities instead of trying to push one vague message to everyone. That included problem-aware directions for audiences like:"
  },

  {
    type: "list",
    items: [
      "busy professionals dealing with stress-related digestion issues",
      "people struggling with chronic bloating",
      "fitness-oriented buyers",
      "new moms dealing with postpartum gut challenges"
    ]
  },

  {
    type: "paragraph",
    text: "We also improved the landing pages and funnel experience so that the click did not lead into a flat, underpowered destination. Trust signals became stronger. Ingredient transparency became clearer. Social proof and transformation logic had more presence. Post-purchase onboarding also became more intentional, so the business was not just acquiring customers but setting itself up for better retention signals too."
  },
  {
    type: "paragraph",
    text: "This is what made the system stronger."
  },
  {
    type: "paragraph",
    text: "The brand stopped trying to “sell the supplement” in a generic way and started helping customers feel that the product was designed to solve the real daily discomfort they were already living with."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "Over 6 months, the blended ROI improved by 126%, moving from 1.92x to 4.35x."
  },
  {
    type: "paragraph",
    text: "That was the headline shift."
  },
  {
    type: "paragraph",
    text: "But the bigger business story was what happened underneath that number."
  },
  {
    type: "paragraph",
    text: "Customer Acquisition Cost dropped significantly. Buyer quality improved. A higher percentage of first-time customers started choosing subscriptions. Scaling stopped feeling like a nervous gamble and started feeling much more controlled. The business could increase spend with more confidence because the system was finally producing cleaner signals around what was actually driving profitable acquisition."
  },
  {
    type: "paragraph",
    text: "That is a very different kind of growth."
  },
  {
    type: "paragraph",
    text: "The biggest win here was not just that the ROI improved. It was that customer acquisition stopped feeling expensive and uncertain, and started becoming much more predictable, more profitable, and much easier to scale without constant anxiety."
  },
  {
    type: "paragraph",
    text: "That is the kind of shift founders actually care about."
  },
  {
    type: "paragraph",
    text: "Because better reporting is nice. Better profitability is important. But what founders really want is a system they can trust enough to scale."
  },
  {
    type: "paragraph",
    text: "This project moved much closer to that."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not treat creative, messaging, offer, targeting, and funnel like separate tasks living in different corners of the business."
  },
  {
    type: "paragraph",
    text: "We treated them like one acquisition system."
  },
  {
    type: "paragraph",
    text: "That is the difference most brands miss."
  },
  {
    type: "paragraph",
    text: "The improvement did not come from one magic ad. It did not come from one clever targeting hack. And it definitely did not come from spending more money and hoping the market would eventually cooperate."
  },
  {
    type: "paragraph",
    text: "The breakthrough came because the brand started feeling more relevant to the right people."
  },
  {
    type: "paragraph",
    text: "Once the messaging got sharper, people felt more understood. Once the offer got stronger, commitment became easier. Once targeting improved, buyer quality improved. Once the landing pages had more trust and emotional clarity, conversion improved. And once all those layers started reinforcing each other, the account became much more profitable and much easier to scale with confidence."
  },
  {
    type: "paragraph",
    text: "At PreCrux, this is exactly how we think about acquisition work."
  },
  {
    type: "paragraph",
    text: "Not as a set of platform tasks, but as a business system built around understanding the buyer properly, structuring the offer intelligently, and reducing the friction between attention and conversion."
  },
  {
    type: "paragraph",
    text: "That is why this result held more weight than a simple campaign spike."
  },

  {
    type: "heading",
    text: "Honest Limitation"
  },
  {
    type: "paragraph",
    text: "It is important to say this clearly: the 126% ROI increase did not come from one trick."
  },
  {
    type: "paragraph",
    text: "It came from multiple growth levers finally working together the way they should have from the beginning."
  },
  {
    type: "paragraph",
    text: "Sharper messaging helped. Better creatives helped. Stronger offer architecture helped. Smarter targeting helped. Better trust signals and funnel support helped. And the product itself still had to be good enough to support repeat behavior and long-term value."
  },
  {
    type: "paragraph",
    text: "That part matters."
  },
  {
    type: "paragraph",
    text: "Results like this depend heavily on:"
  },

  {
    type: "list",
    items: [
      "product quality",
      "real customer experience",
      "review velocity",
      "backend retention systems",
      "disciplined execution after the acquisition system improves"
    ]
  },

  {
    type: "paragraph",
    text: "So no, the lesson is not that every wellness brand can copy one creative angle and suddenly jump to 4.35x ROI."
  },
  {
    type: "paragraph",
    text: "The real lesson is much more useful than that."
  },
  {
    type: "paragraph",
    text: "When the acquisition system becomes more relevant, more emotionally accurate, and more commercially structured, profitable growth becomes much easier to build."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "In a crowded wellness category, generic benefit-led advertising rarely does enough."
  },
  {
    type: "paragraph",
    text: "People do not buy because a brand says “support gut health.” They buy when they feel like the brand understands the actual discomfort, frustration, and daily friction they are already dealing with."
  },
  {
    type: "paragraph",
    text: "That was the real unlock here."
  },
  {
    type: "paragraph",
    text: "Once the messaging became more human, the offer became stronger, the targeting became smarter, and the funnel became more trustworthy, the brand stopped attracting too much mediocre demand and started building a healthier acquisition system around better buyers."
  },
  {
    type: "paragraph",
    text: "That is what changed the economics."
  },
  {
    type: "paragraph",
    text: "If your brand is already spending on acquisition but customer quality, profitability, and scale still feel shaky, the issue may not be traffic alone. It may be that your messaging, offer, targeting, and funnel are not working together strongly enough yet."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of growth gap we help diagnose at PreCrux."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }

],
        metrics: [
            { label: "ROI Increase", value: "126%" },
            { label: "Core Lever", value: "Paid Growth" },
            { label: "Customer Acquisition", value: "Stronger" },
            { label: "Timeline", value: "6 Months" },
        ],
        prevCase: { title: "Renowned chef & gourmet food brand", slug: "chef-gourmet" },
        nextCase: { title: "WizTrek", slug: "wiztrek" },
        relatedCases: [
            { title: "Daarian", category: "SEO ", slug: "daarian", img: "/case-studies/daarian.png", result: "Ranked #1 for core keywords in under 90 days" },
            { title: "BIdet Australia", category: "Paid Growth ", slug: "bidet", img: "/case-studies/bidet.png", result: "ROAS improved to 4.25x" },
        ],
    },
    {
        title: "WizTrek",
        category: "SEO",
        tags: ["SEO", "Website Overhaul", "Lead Growth"],
        slug: "wiztrek",
        img: "/case-studies/wiztrek.jpeg",
        result: " Improved search visibility and major lead growth",
        content: [
  {
    type: "subheading",
    text: "Confidentiality Note",

  },
  {
    type: "paragraph",
    text: "Due to client confidentiality, we are not sharing internal screenshots, console data, or lead reports for this project. However, the strategic direction, execution layers, and business outcome shared below reflect the actual work delivered.",
    isNote: true
  },

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "Some businesses do not actually have just an SEO problem, and they do not just have a website problem either. What they really have is a growth alignment problem. They are not being discovered strongly enough, and even when the right people do land on the website, the experience is not doing enough to build confidence and move them toward inquiry."
  },
  {
    type: "paragraph",
    text: "That was the real situation with WizTrek."
  },
  {
    type: "paragraph",
    text: "This was not a project where a few ranking improvements alone would have solved the problem, and it was definitely not a case where a prettier website by itself would have changed the business outcome. The real opportunity was bigger than that. WizTrek needed stronger discoverability, a clearer digital presence, and a website that could support trust and conversion much more effectively."
  },
  {
    type: "paragraph",
    text: "That is the kind of work we care about at PreCrux, because this is where many businesses quietly lose momentum. They keep treating traffic, website, and conversion like separate projects, and then wonder why the end result still feels incomplete. What actually moves the business forward is when those pieces stop fighting each other and start working as one system."
  },
  {
    type: "paragraph",
    text: "That is exactly what this case became."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The challenge was not simply that WizTrek needed more visibility. The challenge was that even if visibility improved, the website also needed to do a much better job of supporting real lead generation."
  },
  {
    type: "paragraph",
    text: "That distinction mattered."
  },
  {
    type: "paragraph",
    text: "If we had only focused on SEO, the business may have seen more attention, but the website would still have limited how effectively that attention turned into inquiries. And if we had only focused on revamping the website, the business may have looked stronger once people arrived, but the growth ceiling would still have been lower because discoverability would remain underpowered."
  },
  {
    type: "paragraph",
    text: "So this was not a single-channel problem."
  },
  {
    type: "paragraph",
    text: "The business needed a better search foundation, a clearer digital structure, and a more conversion-supportive user journey. Without that alignment, growth would always feel partial. There might be traffic, or there might be design improvements, but the actual business impact would still fall short."
  },
  {
    type: "paragraph",
    text: "That is where many brands stay stuck. They improve one layer and then wonder why the overall system still does not produce enough leads."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we looked closely, it became clear that this was not an SEO issue on one side and a website issue on the other. Underneath both, it was really a lead-generation problem."
  },
  {
    type: "paragraph",
    text: "What looked like two separate needs was actually one connected gap."
  },
  {
    type: "paragraph",
    text: "The site needed stronger search visibility, yes. But it also needed better clarity, better flow, and better support for inquiry intent. Search and conversion were too disconnected. The business had room to grow, but the digital setup was not yet doing enough to turn visibility into meaningful lead movement."
  },
  {
    type: "paragraph",
    text: "That is an important difference, because a lot of teams misread situations like this. They assume more traffic will solve the business problem. Or they assume a redesign will fix everything. But if traffic and conversion logic are not aligned, neither side reaches its full value."
  },
  {
    type: "paragraph",
    text: "What WizTrek needed was a stronger foundation across both:"
  },

  {
    type: "list",
    items: [
      "better discoverability for the right searches",
      "better website structure for trust and clarity",
      "better flow from attention to action"
    ]
  },

  {
    type: "paragraph",
    text: "That is what changed the direction of the project. We were not trying to make one channel look better. We were trying to make the whole growth path work better."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We strengthened the SEO foundation"
  },
  {
    type: "paragraph",
    text: "The first layer was making the site much more capable of supporting stronger search visibility."
  },
  {
    type: "paragraph",
    text: "That meant aligning pages more clearly with relevant intent, improving how the site could be understood by search engines, and strengthening the overall foundation needed for organic growth. The goal was not just to make the site “more optimized.” The goal was to make it easier for the right audience to actually find the business in the first place."
  },
  {
    type: "paragraph",
    text: "Because if discoverability stays weak, even a strong website cannot perform as hard as it should."
  },

  {
    type: "subheading",
    text: "2. We overhauled the website for trust and clarity"
  },
  {
    type: "paragraph",
    text: "The second layer was the website itself."
  },
  {
    type: "paragraph",
    text: "This was not just about making it look newer. It was about making it clearer, more usable, and more supportive of decision-making. The structure, the flow, and the overall experience all needed to work harder. People needed to understand the business more quickly, move through the site more comfortably, and feel more confidence as they explored."
  },
  {
    type: "paragraph",
    text: "This part matters more than many businesses realize. A website can look decent and still underperform badly when it comes to trust, clarity, and movement toward inquiry."
  },
  {
    type: "paragraph",
    text: "So the revamp was handled with a business lens, not just a visual one."
  },

  {
    type: "subheading",
    text: "3. We introduced CRO-minded improvements to support lead generation"
  },
  {
    type: "paragraph",
    text: "This is where the project became much more commercially meaningful."
  },
  {
    type: "paragraph",
    text: "We reduced friction, improved the journey from interest to inquiry, and made the site much more supportive of lead generation overall. The idea was simple: if the right people are finding the business, the experience should not make them work harder than necessary to understand, trust, and take action."
  },
  {
    type: "paragraph",
    text: "That is where SEO and CRO become powerful together."
  },
  {
    type: "paragraph",
    text: "Traffic without conversion support wastes opportunity."
  },
  {
    type: "paragraph",
    text: "Conversion support without discoverability limits scale."
  },
  {
    type: "paragraph",
    text: "When those two start working together, the business starts feeling very different."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "The result was not just improved visibility and not just a refreshed website."
  },
  {
    type: "paragraph",
    text: "The real result was a lot of lead generation."
  },
  {
    type: "paragraph",
    text: "That is what made this project valuable."
  },
  {
    type: "paragraph",
    text: "Search visibility became stronger, the website became much more effective, and the gap between traffic and inquiry started closing properly. Instead of attention being partially wasted, the digital setup became much better at turning interest into actual business movement."
  },
  {
    type: "paragraph",
    text: "And that is the outcome that matters most."
  },
  {
    type: "paragraph",
    text: "Because businesses do not grow from looking better in a vacuum. They grow when the right people can find them, trust what they see, and move forward with enough confidence to become leads."
  },
  {
    type: "paragraph",
    text: "That is what this project improved."
  },
  {
    type: "paragraph",
    text: "So while the work included SEO, website overhaul, and conversion-focused changes, the real business story was much simpler: the digital system became much better at generating leads."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not treat discoverability, website structure, and conversion as separate tasks."
  },
  {
    type: "paragraph",
    text: "We treated them as one growth system."
  },
  {
    type: "paragraph",
    text: "That is the real difference."
  },
  {
    type: "paragraph",
    text: "SEO performed better because the site was no longer working against it. The website performed better because the incoming traffic became more relevant and better supported. And lead generation improved because the business was no longer asking traffic to land on a setup that was too weak, too unclear, or too friction-heavy to do its job well."
  },
  {
    type: "paragraph",
    text: "That is why the breakthrough did not come from SEO alone or website revamp alone. It came from aligning visibility, trust, and conversion strongly enough to generate a lot more leads."
  },
  {
    type: "paragraph",
    text: "At PreCrux, this is how we think about growth work in general. Not as isolated fixes, but as connected improvements that make the whole business easier to discover and easier to act on."
  },
  {
    type: "paragraph",
    text: "That is where real momentum starts."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "If your business is getting some attention online but that attention is still not turning into enough real leads, the problem is usually deeper than traffic alone."
  },
  {
    type: "paragraph",
    text: "Very often, it means your search visibility, website structure, and conversion flow are not working together strongly enough."
  },
  {
    type: "paragraph",
    text: "That was the real gap with WizTrek, and once those layers were aligned properly, the business was in a much better position to generate leads at a higher level."
  },
  {
    type: "paragraph",
    text: "That is the bigger lesson here."
  },
  {
    type: "paragraph",
    text: "You do not always need more activity. Sometimes you need a more connected system. A system that makes it easier for the right people to find you, understand you, trust you, and take the next step."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of gap we help diagnose at PreCrux."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }

],
        metrics: [
            { label: "Growth Lever", value: "SEO" },
            { label: "Core fix", value: "Website Overhaul" },
            { label: "Primary Outcome", value: "Lead Growth" },
            {label : "Timeline", value: "6 Months"},
        ],
        prevCase: { title: "Gut health wellness brand", slug: "health-wellness" },
        nextCase: { title: "AI professional headshot’s platform", slug: "ai-professional" },
        relatedCases: [
            { title: "Daarian", category: "SEO", slug: "daarian", img: "/case-studies/daarian.png", result: "Ranked #1 for core keywords in under 90 days" },
            { title: "BIdet Australia", category: "Paid Growth", slug: "bidet", img: "/case-studies/bidet.png", result: "ROAS improved to 4.25x" },
        ],
    },
    {
        title: "AI professional headshot’s platform",
        category: "SEO",
        tags: ["SEO", "CRO","AI Platform"],
        slug: "ai-professional",
        img: "/case-studies/ai.jpeg",
        result: "102% organic growth from a low-traffic base",
        content: [

  {
    type: "subheading",
    text: "Confidentiality Note",
  },
  {
    type: "paragraph",
    text: "Due to client confidentiality, we are not sharing internal screenshots, console data, or platform analytics for this project. However, the strategic direction, execution layers, and growth outcome shared below reflect the actual work delivered.",
    isNote: true
  },

  {
    type: "heading",
    text: "Overview"
  },
  {
    type: "paragraph",
    text: "Some brands do not struggle because demand is missing. They struggle because their digital foundation is too weak to capture that demand properly."
  },
  {
    type: "paragraph",
    text: "That was the real situation here."
  },
  {
    type: "paragraph",
    text: "This project was for an AI professional headshots platform that was starting from a very low organic base. And when a business starts from that kind of position, the problem is usually bigger than “we need more traffic.” If the site is weak, if the structure is unclear, and if the user journey is not helping people move confidently toward action, then even a good SEO effort can take longer than it should to create real momentum."
  },
  {
    type: "paragraph",
    text: "That is why this was never meant to be just an SEO project."
  },
  {
    type: "paragraph",
    text: "At PreCrux, we looked at it as a visibility and conversion alignment challenge. The business needed to become easier to discover, yes, but it also needed a stronger on-site experience so that whatever attention came in had a much better chance of turning into meaningful action."
  },
  {
    type: "paragraph",
    text: "That is where the real growth opportunity was hiding."
  },

  {
    type: "heading",
    text: "The Challenge"
  },
  {
    type: "paragraph",
    text: "The challenge was not simply that traffic was low. The challenge was that the platform was starting from a weak enough base that both discoverability and on-site performance needed to improve together."
  },
  {
    type: "paragraph",
    text: "This is where many early-stage digital brands get stuck."
  },
  {
    type: "paragraph",
    text: "They try to solve the traffic problem first while ignoring the website experience, or they try to improve the website while the discoverability layer stays too weak to bring in enough of the right people. In both cases, growth remains partial. Something improves, but the system still does not feel strong enough to scale."
  },
  {
    type: "paragraph",
    text: "That was the danger here."
  },
  {
    type: "paragraph",
    text: "The platform needed stronger organic visibility, but SEO alone would not have been enough if the site still felt underpowered once people arrived. And a better website alone would not have solved the bigger problem if discoverability stayed too limited for meaningful organic growth."
  },
  {
    type: "paragraph",
    text: "So this was not about fixing one issue. It was about strengthening the whole growth foundation."
  },

  {
    type: "heading",
    text: "What We Found"
  },
  {
    type: "paragraph",
    text: "Once we got into the project properly, it became clear that this was not just a low-traffic problem on the surface. Underneath, it was a growth-foundation problem."
  },
  {
    type: "paragraph",
    text: "The site needed much more than isolated SEO work."
  },
  {
    type: "paragraph",
    text: "Search visibility had room to improve, but the platform also needed better structure, better clarity, and a more conversion-supportive experience. The business had organic upside, but the current setup was too underpowered to extract that opportunity properly. Search and on-site experience were too disconnected, and that disconnect was slowing down the business more than the traffic number alone suggested."
  },
  {
    type: "paragraph",
    text: "That is an important distinction."
  },
  {
    type: "paragraph",
    text: "A lot of teams see weak traffic and immediately assume the answer is just more content or more keywords. But if the experience underneath that traffic is not strong enough, then even when visibility begins to improve, the business still loses momentum. The real fix has to make the platform easier to find and easier to trust at the same time."
  },
  {
    type: "paragraph",
    text: "That is what shaped our direction here."
  },

  {
    type: "heading",
    text: "What We Changed"
  },

  {
    type: "subheading",
    text: "1. We strengthened the SEO foundation"
  },
  {
    type: "paragraph",
    text: "The first step was making the platform much more capable of supporting organic visibility."
  },
  {
    type: "paragraph",
    text: "That meant improving the structure of the site, aligning pages more clearly with the search intent that mattered, and making it easier for search engines to understand what the platform was, who it served, and why it should be surfaced. We were not just trying to “optimize pages.” We were trying to create a stronger discoverability layer from the ground up."
  },
  {
    type: "paragraph",
    text: "Because when the starting base is low, clarity matters even more."
  },

  {
    type: "subheading",
    text: "2. We revamped the website for clarity and trust"
  },
  {
    type: "paragraph",
    text: "The second step was the website itself."
  },
  {
    type: "paragraph",
    text: "This was not simply about design polish. It was about making the platform clearer, easier to navigate, easier to understand, and more capable of building trust quickly. The structure, flow, and overall user experience all needed to work harder. People needed to land on the site and feel that they understood what the product offered, why it was relevant, and what they should do next."
  },
  {
    type: "paragraph",
    text: "That is where many growth efforts quietly leak value. The traffic may improve, but the website is still not supporting decision-making strongly enough."
  },
  {
    type: "paragraph",
    text: "So the revamp was handled with a CRO lens, not just a visual one."
  },

  {
    type: "subheading",
    text: "3. We introduced CRO-minded improvements"
  },
  {
    type: "paragraph",
    text: "This is where the project became commercially stronger."
  },
  {
    type: "paragraph",
    text: "We reduced friction, improved the path from discovery to action, and made the overall experience more supportive of conversion. The goal was not just to attract more people. The goal was to make the platform much better at guiding the right people toward the next step once they arrived."
  },
  {
    type: "paragraph",
    text: "That is what made the SEO effort more valuable."
  },
  {
    type: "paragraph",
    text: "Traffic without conversion support often creates surface-level progress."
  },
  {
    type: "paragraph",
    text: "Traffic supported by a stronger website creates much more meaningful growth."
  },

  {
    type: "heading",
    text: "The Results"
  },
  {
    type: "paragraph",
    text: "The result was a 102% increase in organic growth from a very low starting base."
  },
  {
    type: "paragraph",
    text: "That headline matters, but the bigger story is what it represents."
  },
  {
    type: "paragraph",
    text: "This was not just a case of traffic improving in isolation. It was a case of a business moving from a weak organic starting position into a much stronger visibility and conversion position. The platform became easier to discover, the website became more effective once people arrived, and the business ended up with a much healthier growth setup than it had before."
  },
  {
    type: "paragraph",
    text: "That is what makes the result meaningful."
  },
  {
    type: "paragraph",
    text: "Because when a brand starts from a low base, percentages alone can be misunderstood. What matters more is whether the growth came from building a stronger system underneath. Here, it did. The platform was no longer relying on a weak digital foundation. It had a better search layer, a better website layer, and a better connection between the two."
  },
  {
    type: "paragraph",
    text: "That is what makes growth more durable."
  },

  {
    type: "heading",
    text: "Why It Worked"
  },
  {
    type: "paragraph",
    text: "This worked because we did not treat visibility and conversion as separate problems."
  },
  {
    type: "paragraph",
    text: "We treated them as one connected growth system."
  },
  {
    type: "paragraph",
    text: "That is the real difference."
  },
  {
    type: "paragraph",
    text: "SEO became more effective because the website was no longer working against the traffic. The website became more effective because the traffic was becoming more relevant and more intentional. And the business gained momentum because the platform stopped depending on one weak layer carrying the whole burden of growth."
  },
  {
    type: "paragraph",
    text: "That is the real lesson here."
  },
  {
    type: "paragraph",
    text: "A breakthrough like this does not come from SEO alone or CRO alone. It comes from building a stronger foundation where both can support each other properly. Once that happens, the business starts moving differently. The growth feels less fragile, less random, and much more scalable."
  },
  {
    type: "paragraph",
    text: "At PreCrux, that is exactly how we think about growth work. Not as isolated tasks that sit in different departments, but as a connected system where discoverability, trust, and conversion all reinforce each other."
  },
  {
    type: "paragraph",
    text: "That is why this project worked."
  },

  {
    type: "heading",
    text: "Final Takeaway"
  },
  {
    type: "paragraph",
    text: "If your business is still operating from a weak organic base and the website is not doing enough to convert attention into action, the problem is usually bigger than traffic alone."
  },
  {
    type: "paragraph",
    text: "It usually means the growth foundation itself needs work."
  },
  {
    type: "paragraph",
    text: "That was the real gap here, and once that foundation was strengthened, the platform moved into a much better position to grow organically and convert that visibility more effectively."
  },
  {
    type: "paragraph",
    text: "That is the bigger takeaway."
  },
  {
    type: "paragraph",
    text: "More activity is not always the answer. Sometimes the answer is building a digital system that is finally strong enough to let traffic matter."
  },
  {
    type: "paragraph",
    text: "That is exactly the kind of gap we help diagnose at PreCrux."
  },

  {
    type: "paragraph",
    text: "Want to get the same results? Book a meeting with us today."
  }

],
        metrics: [
            { label: "Organic Growth", value: "102%" },
            { label: "Core Levers", value: "SEO + CRO" },
            { label: "Starting Point", value: "Low-Traffic Base" },
            { label: "Timeline", value: "9 Months" },
        ],
        prevCase: { title: "WizTrek", slug: "wiztrek" },
        nextCase: null,
        relatedCases: [
            { title: "Daarian", category: "SEO", slug: "daarian", img: "/case-studies/daarian.png", result: "Ranked #1 for core keywords in under 90 days" },
            { title: "BIdet Australia", category: "Paid Growth", slug: "bidet", img: "/case-studies/bidet.png", result: "ROAS improved to 4.25x" },
        ],
    },
    
       
];

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

function Reveal({ children, delay = 0, className = "" }: {
    children: React.ReactNode; delay?: number; className?: string;
}) {
    const ref = useReveal();
    return (
        <div ref={ref} className={className} style={{
            opacity: 0, transform: "translateY(28px)",
            transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        }}>
            {children}
        </div>
    );
}
type RelatedCase = {
  title: string;
  category: string;
  slug: string;
  img: string;
  result: string;
};
function Card({ rc }: { rc: RelatedCase }) {
  return (
    <Link href={`/case-studies/${rc.slug}`} className="block">
      <div className="bg-white rounded-xl p-3 shadow-sm">

        <div className="w-full h-[200px] rounded-lg overflow-hidden mb-3">
          <img
            src={rc.img}
            alt={rc.title}
            className="w-full h-full object-cover"
          />
        </div>

        <span className="text-[10px] text-[#aaa] uppercase tracking-wider">
          {rc.category}
        </span>

        <h3 className="text-[#0f1117] text-[0.95rem] mt-1 mb-1 font-semibold leading-snug">
          {rc.title}
        </h3>

        <p className="text-[#777] text-[0.8rem] leading-snug">
          {rc.result}
        </p>

      </div>
    </Link>
  );
}

export default function CaseStudyPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const cs = caseStudies.find((c) => c.slug === slug);
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
}, [cs]);

useEffect(() => {
  if (!cs?.relatedCases) return;

  const interval = setInterval(() => {
    setNextIndex((index + 1) % cs.relatedCases.length);
    setAnimating(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cs.relatedCases.length);
      setAnimating(false);
    }, 1800); // animation duration
  }, 4000);

  return () => clearInterval(interval);
}, [index, cs]);

    useEffect(() => { window.scrollTo({ top: 0 }); }, [slug]);

    if (!cs) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
                Case study not found.{" "}
                <Link href="/case-studies" className="ml-2 underline text-black">Back to Case Studies</Link>
            </div>
        );
    }

    return (
        <>
            <main className="bg-[#f4f4f4] min-h-screen pt-[110px]">
                <article
  ref={articleRef}
  className="max-w-[680px] mx-auto px-8 py-16 md:py-20 bg-white mb-16 relative"
>
                    <FloatingCTA top={ctaTop} />
                    {/* Category tag */}
                    <Reveal>
                        <span
                            className="inline-block bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full mb-5"
                            style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                        >
                            {cs.category}
                        </span>
                    </Reveal>

                    {/* Title */}
                    <Reveal delay={40}>
                        <h1
                            className="text-[1.9rem] md:text-[2.2rem] leading-[1.2] text-[#0f1117] mb-4"
                            style={{ fontWeight: 700, fontFamily: urbanist.style.fontFamily }}
                        >
                            {cs.title}
                        </h1>
                    </Reveal>

                    {/* Hero image */}
                    <Reveal delay={100}>
                        <div className="w-full rounded-lg overflow-hidden mb-10" style={{ aspectRatio: "16/9" }}>
                            <img src={cs.img} alt={cs.title} className="w-full h-full object-cover" />
                        </div>
                    </Reveal>

                    {/* Metrics strip */}
                    <Reveal delay={120}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-xl overflow-hidden mb-12 border border-gray-100">
                            
                            {cs.metrics.map((m, i) => (
                                <div key={i} className="bg-white text-center py-5 px-3">
                                    <p
                                        className="text-[1.35rem] text-[#0f1117] leading-none mb-1"
                                        style={{ fontWeight: 700, fontFamily: urbanist.style.fontFamily }}
                                    >
                                        {m.value}
                                    </p>
                                    <p
                                        className="text-[0.72rem] text-[#999] leading-snug"
                                        style={{ fontWeight: 400, fontFamily: poppins.style.fontFamily }}
                                    >
                                        {m.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                
                    {/* Body sections */}
                    <div>
  {cs.content.map((block, idx) => {
    switch (block.type) {

      case "heading": {
        const b = block as { type: "heading"; text: string };
        return (
          <Reveal key={idx}>
            <h2 className="text-[#0f1117] text-[1.5rem] mt-10 mb-3 font-bold">
              {b.text}
            </h2>
          </Reveal>
        );
      }

      case "subheading": {
        const b = block as { type: "subheading"; text: string };
        return (
          <Reveal key={idx}>
            <p
              className="text-[#0f1117] text-[1rem] leading-[1.85] mt-6 mb-2 font-semibold"
              style={{ fontFamily: poppins.style.fontFamily }}
            >
              {b.text}
            </p>
          </Reveal>
        );
      }

      case "paragraph": {
        const b = block as {
          type: "paragraph";
          text: string;
          isNote?: boolean;
        };

        const isCTA =
          typeof b.text === "string" &&
          b.text.includes("Want to get the same results");

        return (
          <Reveal key={idx}>
            <p
              className={`text-[#444] text-[1rem] leading-[1.85] mb-3 ${
                isCTA ? "font-semibold text-[#0f1117]" : ""
              } ${b.isNote ? "italic text-gray-600" : ""}`}
            >
              {b.text}
            </p>
          </Reveal>
        );
      }

      case "image": {
        const b = block as {
          type: "image";
          src: string;
          alt?: string;
          caption?: string;
        };

        return (
          <Reveal key={idx}>
            <div className="my-8 text-center">
              <img
                src={b.src}
                alt={b.alt || ""}
                className="w-full rounded-lg"
              />
              {b.caption && (
                <p className="text-[0.85rem] text-gray-600 mt-2 italic">
                  {b.caption}
                </p>
              )}
            </div>
          </Reveal>
        );
      }

      case "list": {
        const b = block as { type: "list"; items: string[] };

        return (
          <Reveal key={idx}>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              {b.items.map((item, i) => (
                <li key={i} className="text-[#444]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        );
      }

      case "feature-list": {
        const b = block as {
  type: "feature-list";
  items: any[];
};

        return (
          <Reveal key={idx}>
            <ul className="list-disc pl-6 space-y-4 mb-6">
              {b.items.map((item, i) => (
                <li key={i}>
                  <span className="font-semibold">{item.title}</span>
                  <p className="text-[#444] mt-1">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        );
      }

      case "blockquote": {
        const b = block as { type: "blockquote"; text: string };

        return (
          <Reveal key={idx}>
            <blockquote className="my-8 pl-5 italic border-l-2 border-gray-300 text-[#555]">
              {b.text}
            </blockquote>
          </Reveal>
        );
      }

      default:
        return null;
    }
  })}
</div>

                    {/* Tags */}
                    <Reveal>
                        <div className="flex flex-wrap gap-2 mt-10">
                            {cs.tags.map((t) => (
                                <span
                                    key={t}
                                    className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full"
                                    style={{ fontFamily: poppins.style.fontFamily, fontWeight: 400 }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* Divider */}
                    <div
  ref={contentEndRef}
  className="border-t border-gray-200 mt-16 mb-10"
/>

                    {/* Prev / Next */}
                    <nav className="flex">
                        <div className="flex-1">
                            {cs.prevCase && (
                                <Link href={`/case-studies/${cs.prevCase.slug}`} className="group block">
                                    <span className="flex items-center gap-1.5 text-[#0f1117] text-[0.78rem] mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                        PREVIOUS
                                    </span>
                                    <span className="text-[#777] text-[0.8rem] leading-snug group-hover:text-[#0f1117] transition-colors"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        {cs.prevCase.title.length > 38 ? cs.prevCase.title.slice(0, 38) + "…" : cs.prevCase.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                        {cs.prevCase && cs.nextCase && <div className="w-px bg-gray-200 mx-6 self-stretch" />}
                        <div className="flex-1 text-right">
                            {cs.nextCase && (
                                <Link href={`/case-studies/${cs.nextCase.slug}`} className="group block">
                                    <span className="flex items-center justify-end gap-1.5 text-[#0f1117] text-[0.78rem] mb-1"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        NEXT
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                    </span>
                                    <span className="text-[#777] text-[0.8rem] leading-snug group-hover:text-[#0f1117] transition-colors"
                                        style={{ fontWeight: 600, fontFamily: poppins.style.fontFamily }}>
                                        {cs.nextCase.title.length > 38 ? cs.nextCase.title.slice(0, 38) + "…" : cs.nextCase.title}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </nav>

                    {/* Divider */}
                    <div className="border-t border-gray-200 mt-10 mb-12" />

                    {/* Related Case Studies */}
                    {cs.relatedCases && cs.relatedCases.length > 0 && (
                        <section>
                            <Reveal>
                                <h2
                                    className="text-[#0f1117] text-[1.2rem] mb-7"
                                    style={{ fontWeight: 700, fontFamily: urbanist.style.fontFamily }}
                                >
                                    Related Case Studies
                                </h2>
                            </Reveal>
                            {/* 💻 Desktop (unchanged) */}
<div className="hidden md:grid grid-cols-2 gap-6">
  {cs.relatedCases.map((rc, i) => (
    <Reveal key={rc.slug} delay={i * 80}>
      <Link href={`/case-studies/${rc.slug}`} className="group block">
        <div className="w-full overflow-hidden rounded-md mb-3 h-[155px]">
          <img
            src={rc.img}
            alt={rc.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <span className="text-[0.9rem] text-[#aaa] uppercase tracking-wider">
          {rc.category}
        </span>
        <h3 className="text-[#0f1117] font-normal text-[1rem] mt-0.5 mb-1 group-hover:underline">
          {rc.title}
        </h3>
        <p className="text-[#999] text-[0.76rem]">{rc.result}</p>
      </Link>
    </Reveal>
  ))}
</div>

{/* 📱 Mobile (1 rotating card) */}
{/* 📱 Ultra smooth vertical reveal */}
<div className="md:hidden overflow-hidden">
  <div className="relative h-[340px]">

    {/* CURRENT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        animating ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Card rc={cs.relatedCases[index]} />
    </div>

    {/* NEXT */}
    <div
      className={`absolute inset-0 transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        animating ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Card rc={cs.relatedCases[nextIndex]} />
    </div>

  </div>
  
</div>
                        </section>
                    )}
                    
                </article>
            </main>
            

            <CTASection />
        </>
    );
}