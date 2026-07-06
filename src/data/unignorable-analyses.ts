export interface UnignorableRelatedArtefact {
  title: string
  type: 'addendum' | 'evidence-note' | 'correction' | 'follow-up'
  date: string
  reviewLevel: string
  pdf: string
  metadata: string
  summary: string
}

export interface UnignorableAnalysis {
  title: string
  slug: string
  date: string
  year: string
  status: string
  reviewLevel: string
  category: string
  sourceContext: string
  pdf: string
  metadata: string
  themes: string[]
  lenses: string[]
  summary: string
  archiveDisplay: string
  relatedArtefacts?: UnignorableRelatedArtefact[]
}

export const unignorableAnalyses: UnignorableAnalysis[] = [
  {
    title: 'A child-safety ban that risks hiding children rather than making platforms safe',
    slug: '2026-07-06-child-safety-ban-hiding-children',
    date: '2026-07-06',
    year: '2026',
    status: 'published',
    reviewLevel: 'light review',
    category: 'Online safety',
    sourceContext: 'UK government child online safety and social media age-restriction proposals, with references to GOV.UK, Ofcom, Australia’s eSafety Commissioner, Amnesty International UK, 5Rights, NSPCC and the Molly Rose Foundation-hosted joint statement',
    pdf: '/downloads/unignorable/2026/2026-07-06-child-safety-ban-hiding-children.pdf',
    metadata: '/downloads/unignorable/2026/2026-07-06-child-safety-ban-hiding-children.md',
    themes: ['child safety', 'online safety', 'social media', 'age assurance', 'platform design', 'privacy'],
    lenses: ['needs erasure', 'displacement risk', 'false efficiency', 'moral compression', 'platform accountability', 'privacy and identity infrastructure'],
    summary: 'An Unignorable analysis of child online safety and social media age-restriction proposals, arguing that a ban may act as a temporary guardrail but risks substituting access restriction for safer platform design.',
    archiveDisplay: 'A child-safety social media ban may be useful as a temporary guardrail, but it risks becoming symbolic if it hides children from mainstream platforms without forcing safer design, tracking displacement or protecting privacy, support, learning and agency.',
    relatedArtefacts: [
      {
        title: 'Special addendum: the “9 out of 10 parents” mandate',
        type: 'addendum',
        date: '2026-07-06',
        reviewLevel: 'light review',
        pdf: '/downloads/unignorable/2026/2026-07-06-social-media-ban-9-out-of-10-parents-addendum.pdf',
        metadata: '/downloads/unignorable/2026/2026-07-06-social-media-ban-9-out-of-10-parents-addendum.md',
        summary: 'A focused evidence and framing note on how the “9 out of 10 parents” headline compresses consultation routing, self-selection, parental concern and weaker youth support into a cleaner mandate for a blanket ban.'
      },
      {
        title: 'Addendum: technology companies, burden-shifting and safety at source',
        type: 'addendum',
        date: '2026-07-06',
        reviewLevel: 'light review',
        pdf: '/downloads/unignorable/2026/2026-07-06-social-media-ban-technology-companies-burden-shifting-addendum.pdf',
        metadata: '/downloads/unignorable/2026/2026-07-06-social-media-ban-technology-companies-burden-shifting-addendum.md',
        summary: 'A focused accountability note on whether the policy forces technology companies to make platforms safer at source, or whether it also shifts practical safety burdens onto users, parents, children, regulators and age-assurance infrastructure.'
      }
    ]
  },
  {
    title: 'School absence is framed as a delivery problem, but it is really a needs crisis',
    slug: '2026-07-05-school-absence-needs-crisis',
    date: '2026-07-05',
    year: '2026',
    status: 'published',
    reviewLevel: 'light review',
    category: 'Education',
    sourceContext: 'Institute for Government paper, Reducing school absence, April 2025',
    pdf: '/downloads/unignorable/2026/2026-07-05-school-absence-needs-crisis.pdf',
    metadata: '/downloads/unignorable/2026/2026-07-05-school-absence-needs-crisis.md',
    themes: ['school absence', 'education', 'SEND', 'child poverty', 'public service reform'],
    lenses: ['needs erasure', 'burden transfer', 'false efficiency', 'leadership theatre', 'luxury of disconnection'],
    summary: 'An Unignorable analysis of school absence framing, arguing that absence should be read as evidence of unmet needs around safety, health, belonging, accessibility, SEND support, poverty, family support and trust, rather than only as a delivery or attendance problem.',
    archiveDisplay: 'School absence is often framed as a delivery problem. This analysis argues that it is better understood as evidence of unmet needs: safety, health, belonging, SEND support, family support and trust.'
  }
]

export const unignorableCategories = Array.from(new Set(unignorableAnalyses.map((analysis) => analysis.category)))

export const unignorableLenses = Array.from(new Set(unignorableAnalyses.flatMap((analysis) => analysis.lenses)))
