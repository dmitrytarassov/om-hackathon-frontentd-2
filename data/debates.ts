import {
  billionairesOpinions,
  communismOpinions,
  covidVaccineOpinions,
  gazaOpinions,
  magaOpinions,
  peppaOpinions,
} from "@/data/opinions";
import type { Debate } from "@/types/Debate";

export const debates: Debate[] = [
  {
    opinionId: 1,
    title: "Peppa?",
    description:
      "Is Peppa Pig genuinely entertaining content or just annoying cringe? Consider factors like humor style, pacing, and educational value for preschoolers. Some argue the show’s simple plots, bright visuals, and repetitive language support early learning and emotional recognition, making it engaging for young children and tolerable for parents during short viewing sessions. Others find the tone grating, the character dynamics occasionally rude or snarky, and the meme culture around the series to amplify a sense of cringe for older audiences. Weigh whether age-appropriateness, cultural references, and episode length influence overall enjoyment and if parental co‑viewing improves the experience.",
    image: "/debates/peppa.png",
    trend: [
      42, 38, 45, 41, 47, 52, 49, 54, 58, 53, 56, 61, 58, 62, 59, 55, 52, 48,
      51, 47, 44, 49, 53, 56, 52, 55, 58, 54, 57, 55,
    ],
    yesPercent: 55,
    noPercent: 45,
    yesPrice: 0.55,
    noPrice: 0.45,
    totalLiquidity: 8500,
    participants: 28,
    lastUpdated: "1m ago",
    opinionStream: peppaOpinions,
    endsAtTimestamp: 1756126246000, // Mon Aug 25 2025 12:50:46 GMT+0000
  },
  {
    opinionId: 2,
    title: "Israel military operation in gaza?",
    description:
      "Is the current military operation in Gaza justified and necessary? Evaluate the stated objectives (e.g., degrading militant capacity, rescuing hostages, or deterrence) against humanitarian costs, civilian protection measures, and compliance with international humanitarian law. Supporters may cite self‑defense, security needs, and the responsibility to stop rocket attacks; critics highlight proportionality, the risk of collective punishment, and long‑term impacts on prospects for peace. Consider the role of ceasefire negotiations, regional diplomacy, and whether military action achieves sustainable security outcomes compared to political settlements or reconstruction‑led strategies.",
    image: "/debates/gaza.png",
    trend: [
      58, 55, 52, 48, 45, 49, 52, 48, 44, 41, 38, 42, 45, 48, 44, 47, 51, 54,
      50, 47, 44, 48, 51, 49, 52, 48, 45, 49, 53, 50,
    ],
    yesPercent: 50,
    noPercent: 50,
    yesPrice: 0.5,
    noPrice: 0.5,
    totalLiquidity: 25000,
    participants: 67,
    lastUpdated: "2m ago",
    opinionStream: gazaOpinions,
    endsAtTimestamp: 1756151446000, // Mon Aug 25 2025 19:50:46 GMT+0000
  },
  {
    opinionId: 3,
    title: "Communism?",
    description:
      "Is communism a viable economic and political system for the modern world? Examine historical implementations versus theoretical ideals—classless ownership, planned allocation, and elimination of profit—as well as issues of incentives, innovation, and governance. Proponents argue communism can reduce inequality, ensure universal provision of essentials, and align production with social needs rather than private profit. Critics point to information bottlenecks in central planning, suppression of political freedoms, and chronic shortages observed in past regimes. Assess whether contemporary proposals—like democratic planning, worker cooperatives, or digital coordination—address the calculation problem and preserve civil liberties.",
    image: "/debates/communism.png",
    trend: [
      48, 45, 42, 39, 35, 32, 28, 31, 35, 38, 34, 30, 27, 31, 34, 37, 33, 30,
      34, 37, 40, 36, 33, 30, 33, 36, 39, 35, 32, 38,
    ],
    yesPercent: 38,
    noPercent: 62,
    yesPrice: 0.38,
    noPrice: 0.62,
    totalLiquidity: 12000,
    participants: 34,
    lastUpdated: "3m ago",
    opinionStream: communismOpinions,
    endsAtTimestamp: 1756369366000, // Thu Aug 28 2025 08:22:46 GMT+0000
  },
  {
    opinionId: 4,
    title: "MAGA?",
    description:
      "Is the Make America Great Again movement beneficial for the United States? Consider its policy priorities—immigration enforcement, trade protection, deregulation, and judicial appointments—against outcomes for economic growth, institutional trust, and social cohesion. Supporters claim it revitalizes domestic industry, secures borders, and challenges elite capture; opponents cite polarization, democratic backsliding concerns, and exclusionary rhetoric. Evaluate whether MAGA’s approach strengthens the rule of law and middle‑class prosperity or undermines alliances, civil norms, and evidence‑based policymaking. Factor in long‑term impacts on elections, media ecosystems, and federal‑state power dynamics.",
    image: "/debates/maga.png",
    trend: [
      50, 55, 59, 67, 55, 69, 75, 64, 73, 79, 87, 79, 72, 81, 74, 66, 61, 55,
      40, 52, 52, 55, 49, 43, 37, 44, 39, 20, 28, 22,
    ],
    yesPercent: 22,
    noPercent: 78,
    yesPrice: 0.5,
    noPrice: 0.5,
    totalLiquidity: 35000,
    participants: 89,
    lastUpdated: "4m ago",
    opinionStream: magaOpinions,
    endsAtTimestamp: 1756337626000, //  Wed Aug 27 2025 23:33:46 GMT+0000
  },
  {
    opinionId: 5,
    title: "Billionaires?",
    description:
      "Should billionaires be allowed to exist in a fair society? Weigh arguments around extreme wealth concentration, meritocratic reward, and philanthropic impact. Advocates argue that large fortunes often reflect entrepreneurial risk‑taking, innovation spillovers, and job creation, and that private philanthropy can accelerate public goods. Critics contend that outsized wealth distorts politics, entrenches inequality, and represents value extracted via monopolies, favorable tax codes, or labor power imbalances. Consider policy tools such as progressive taxation, wealth taxes, antitrust enforcement, corporate governance reforms, and norms around dynastic wealth versus incentives for innovation.",
    image: "/debates/billionaires.png",
    trend: [
      35, 32, 28, 25, 22, 19, 16, 18, 21, 24, 20, 17, 14, 12, 15, 18, 21, 19,
      16, 13, 11, 14, 17, 20, 18, 15, 12, 16, 19, 22,
    ],
    yesPercent: 22,
    noPercent: 78,
    yesPrice: 0.22,
    noPrice: 0.78,
    totalLiquidity: 18000,
    participants: 52,
    lastUpdated: "5m ago",
    opinionStream: billionairesOpinions,
    endsAtTimestamp: 1756507546000, // Fri Aug 29 2025 22:45:46 GMT+0000
  },
  {
    opinionId: 6,
    title: "COVID vaccines?",
    description:
      "Were COVID-19 vaccines safe and effective public health measures? Analyze clinical trial endpoints, real‑world effectiveness, and safety surveillance, including adverse event reporting and risk‑benefit profiles by age and comorbidity. Proponents emphasize substantial reductions in severe disease, hospitalization, and death, alongside community benefits like lower transmission during peak waves. Skeptics raise questions about waning immunity, rare adverse events, and the balance between mandates and personal autonomy. Consider booster policies, variant escape, and how transparent communication, post‑marketing studies, and global access shape trust and long‑term pandemic preparedness.",
    image: "/debates/vaccines.png",
    trend: [
      78, 75, 79, 82, 80, 77, 74, 71, 68, 72, 75, 78, 81, 79, 76, 73, 77, 80,
      83, 81, 78, 75, 79, 82, 80, 77, 74, 78, 81, 81,
    ],
    yesPercent: 81,
    noPercent: 19,
    yesPrice: 0.81,
    noPrice: 0.19,
    totalLiquidity: 42000,
    participants: 156,
    lastUpdated: "6m ago",
    opinionStream: covidVaccineOpinions,
    endsAtTimestamp: 1756584766000, // Sat Aug 30 2025 20:12:46 GMT+0000
  },
];
