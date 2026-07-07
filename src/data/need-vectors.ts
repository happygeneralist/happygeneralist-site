export type NeedDimension = 'comprehension' | 'comparison' | 'judgement' | 'access' | 'agency' | 'continuity' | 'redress'

export interface NeedState {
  id: string
  label: string
  sentence: string
  anchor: string
  angle: number
  interpretation: string
  vector: Record<NeedDimension, number>
}

export interface SolutionState {
  label: string
  vector: Record<NeedDimension, number>
}

export const needDimensions: { id: NeedDimension; label: string }[] = [
  { id: 'comprehension', label: 'Comprehension' },
  { id: 'comparison', label: 'Comparison' },
  { id: 'judgement', label: 'Judgement' },
  { id: 'access', label: 'Access' },
  { id: 'agency', label: 'Agency' },
  { id: 'continuity', label: 'Continuity' },
  { id: 'redress', label: 'Redress' }
]

export const needStates: NeedState[] = [
  {
    id: 'understand',
    label: 'Understand',
    sentence: 'I need to understand my options.',
    anchor: 'understand',
    angle: -28,
    interpretation: 'This is mostly a cognitive need. It points towards explanation, orientation and language clarity.',
    vector: { comprehension: 10, comparison: 3, judgement: 2, access: 1, agency: 1, continuity: 0, redress: 0 }
  },
  {
    id: 'compare',
    label: 'Compare',
    sentence: 'I need to compare my options.',
    anchor: 'compare',
    angle: -8,
    interpretation: 'This need is about making differences visible. It points towards criteria, side-by-side structures and trade-off support.',
    vector: { comprehension: 5, comparison: 10, judgement: 5, access: 2, agency: 3, continuity: 1, redress: 0 }
  },
  {
    id: 'evaluate',
    label: 'Evaluate',
    sentence: 'I need to evaluate which options are realistic for me.',
    anchor: 'evaluate',
    angle: 14,
    interpretation: 'This is not just cognitive. It points towards judgement, constraints, risk and support for deciding what is realistic.',
    vector: { comprehension: 5, comparison: 8, judgement: 10, access: 5, agency: 5, continuity: 2, redress: 1 }
  },
  {
    id: 'choose',
    label: 'Choose',
    sentence: 'I need to choose a route with confidence.',
    anchor: 'choose',
    angle: 28,
    interpretation: 'This need points towards decision confidence. The system has to support commitment, not just provide information.',
    vector: { comprehension: 4, comparison: 7, judgement: 9, access: 5, agency: 7, continuity: 3, redress: 1 }
  },
  {
    id: 'access',
    label: 'Access',
    sentence: 'I need to access the option I am eligible for.',
    anchor: 'access',
    angle: 48,
    interpretation: 'This need shifts from knowing to getting. It points towards eligibility, routes, hand-offs and practical support.',
    vector: { comprehension: 4, comparison: 3, judgement: 4, access: 10, agency: 5, continuity: 3, redress: 2 }
  },
  {
    id: 'challenge',
    label: 'Challenge',
    sentence: 'I need to challenge a decision that limits my options.',
    anchor: 'challenge',
    angle: 74,
    interpretation: 'This is a protective and adversarial need. It points towards rights, evidence, advocacy and redress.',
    vector: { comprehension: 4, comparison: 2, judgement: 5, access: 4, agency: 10, continuity: 4, redress: 10 }
  },
  {
    id: 'sustain',
    label: 'Sustain',
    sentence: 'I need to sustain my route if circumstances change.',
    anchor: 'sustain',
    angle: 96,
    interpretation: 'This need points beyond a one-off transaction. It asks for continuity, fallback plans and review over time.',
    vector: { comprehension: 3, comparison: 3, judgement: 6, access: 6, agency: 6, continuity: 10, redress: 4 }
  }
]

export const solutionStates: SolutionState[] = [
  { label: 'Plain-language guide', vector: { comprehension: 10, comparison: 2, judgement: 2, access: 1, agency: 1, continuity: 0, redress: 0 } },
  { label: 'FAQ', vector: { comprehension: 9, comparison: 1, judgement: 1, access: 1, agency: 1, continuity: 0, redress: 0 } },
  { label: 'Glossary', vector: { comprehension: 9, comparison: 1, judgement: 1, access: 0, agency: 0, continuity: 0, redress: 0 } },
  { label: 'Comparison table', vector: { comprehension: 4, comparison: 10, judgement: 5, access: 2, agency: 2, continuity: 1, redress: 0 } },
  { label: 'Eligibility checker', vector: { comprehension: 4, comparison: 6, judgement: 6, access: 10, agency: 3, continuity: 1, redress: 1 } },
  { label: 'Trade-off map', vector: { comprehension: 4, comparison: 8, judgement: 9, access: 2, agency: 5, continuity: 2, redress: 1 } },
  { label: 'Decision support', vector: { comprehension: 4, comparison: 7, judgement: 10, access: 5, agency: 6, continuity: 2, redress: 1 } },
  { label: 'Adviser conversation', vector: { comprehension: 5, comparison: 5, judgement: 9, access: 6, agency: 7, continuity: 4, redress: 3 } },
  { label: 'Service map', vector: { comprehension: 6, comparison: 6, judgement: 4, access: 7, agency: 3, continuity: 3, redress: 1 } },
  { label: 'Referral route', vector: { comprehension: 3, comparison: 2, judgement: 3, access: 10, agency: 3, continuity: 3, redress: 1 } },
  { label: 'Advocacy', vector: { comprehension: 4, comparison: 2, judgement: 5, access: 5, agency: 10, continuity: 5, redress: 9 } },
  { label: 'Appeal route', vector: { comprehension: 4, comparison: 2, judgement: 5, access: 4, agency: 9, continuity: 4, redress: 10 } },
  { label: 'Evidence checklist', vector: { comprehension: 5, comparison: 3, judgement: 7, access: 4, agency: 8, continuity: 4, redress: 9 } },
  { label: 'Fallback plan', vector: { comprehension: 3, comparison: 4, judgement: 7, access: 5, agency: 6, continuity: 10, redress: 3 } },
  { label: 'Review point', vector: { comprehension: 2, comparison: 3, judgement: 6, access: 4, agency: 5, continuity: 10, redress: 4 } },
  { label: 'Peer stories', vector: { comprehension: 5, comparison: 3, judgement: 5, access: 2, agency: 4, continuity: 3, redress: 1 } }
]
