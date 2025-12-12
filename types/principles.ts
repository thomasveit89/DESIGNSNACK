// Core principle types
export type PrincipleType = "ux_law" | "cognitive_bias" | "heuristic";

export interface Principle {
  id: string;
  type: PrincipleType;
  title: string;
  oneLiner: string;
  definition: string;
  appliesWhen: string[];
  do: string[];
  dont: string[];
  tags: string[];
  category: string;
  sources: string[];
}

// Database format (snake_case from Supabase)
export interface DbPrinciple {
  id: string;
  type: PrincipleType;
  title: string;
  one_liner: string;
  definition: string;
  applies_when: string[];
  do_items: string[];
  dont_items: string[];
  tags: string[];
  category: string;
  sources: string[];
  created_at: string;
  updated_at: string;
}

// UI Display
export interface PrincipleWithSlug extends Principle {
  slug: string;
}

// Type badge colors - matching app style with brand-primary (#0EA5E9 = sky-500)
export const TYPE_COLORS: Record<PrincipleType, { bg: string; text: string }> = {
  ux_law: { bg: 'bg-sky-50', text: 'text-sky-500' },
  cognitive_bias: { bg: 'bg-purple-50', text: 'text-purple-500' },
  heuristic: { bg: 'bg-emerald-50', text: 'text-emerald-500' }
};

// Type labels
export const TYPE_LABELS: Record<PrincipleType, string> = {
  ux_law: 'UX Law',
  cognitive_bias: 'Cognitive Bias',
  heuristic: 'Heuristic'
};

// Category configuration with emojis
export const CATEGORIES = {
  all: { label: 'All', emoji: '📚', color: 'gray' },
  attention: { label: 'Attention', emoji: '👀', color: 'red' },
  memory: { label: 'Memory', emoji: '🧠', color: 'purple' },
  decisions: { label: 'Decision Making', emoji: '🤔', color: 'green' },
  usability: { label: 'Usability', emoji: '🎯', color: 'orange' },
  persuasion: { label: 'Persuasion', emoji: '💬', color: 'pink' },
  visual: { label: 'Visual Design', emoji: '🎨', color: 'indigo' }
} as const;

// Emoji mappings by principle title
export const PRINCIPLE_EMOJIS: Record<string, string> = {
  "Fitts's Law": '🎯',
  "Hick's Law": '🤔',
  "Miller's Rule": '🧠',
  "Jakob's Law": '🔄',
  "Pareto Principle": '📊',
  "Proximity Principle": '📦',
  "Serial Position Effect": '📋',
  "Zeigarnik Effect": '⚪',
  "Peak-End Rule": '📈',
  "Von Restorff Effect": '🌟',
  "Confirmation Bias": '🔍',
  "Anchoring Bias": '⚓',
  "Loss Aversion": '💸',
  "Choice Overload": '🤯',
  "Availability Heuristic": '💭',
  "Dunning-Kruger Effect": '🎓',
  "Sunk Cost Fallacy": '🕳️',
  "Recognition over Recall": '👁️',
  "Consistency and Standards": '📐',
  "Error Prevention": '🛡️',
  "Aesthetic-Usability Effect": '✨',
  "Cognitive Load Theory": '🧮',
  "Attentional Bias": '👀',
  "Visual Anchors": '⚓',
  "Visual Hierarchy": '📊',
  "Selective Attention": '🎯',
  "Contrast Principle": '⚡',
  "Signifiers: Visual or Textual Cues": '🚩',
  "Signifiers": '🚩',
  "Juxtaposition": '🔗',
  "Spotlight Effect": '💡',
  "Cheerleader Effect": '👥',
  "Curiosity Gap": '🕳️',
  "Barnum-Forer Effect": '🔮',
  "Aha! Moment": '💡',
  "Decoy Effect": '🎭',
  "Centre-Stage Effect": '🎪',
  "Framing Principle": '🖼️',
  "Authority Bias": '👑',
  "Affect Heuristic": '❤️',
  "Cashless Effect": '💳',
  "Backfire Effect": '🔙',
  "Cognitive Dissonance": '🤔',
  "Commitment and Consistency Principle": '🤝',
  "Decision Fatigue": '😴',
  "Reactance Principle": '🛑',
  "Hyperbolic Discounting": '📉',
  "Self-serving Bias": '🪞',
  "Fresh Start Effect": '🌱',
  "Default Bias": '⭐',
  "Expectations Bias": '🔮',
  "Survivorship Bias": '🏆',
  "Empathy Gap": '💭',
  "Hindsight Bias": '👁️',
  "Temptation Coupling": '🍯',
  "Noble Edge Effect": '🌍',
  "Observer-Expectancy Effect": '🔬',
  "False Consensus Effect": '👫',
  "Negativity Bias": '⚠️',
  "Social Proof": '👥',
  "Scarcity Principle": '⏰',
  "Principle of Reciprocity": '🤝',
  "Social Desirability Bias": '😊',
  "Variable Reward Principle": '🎰',
  "Pseudo-Set Framing": '📦',
  "Chunking": '📦',
  "Picture Superiority Effect": '🖼️',
  "Method of Loci": '🗺️',
  "Spacing Effect": '📅',
  "Storytelling Effect": '📚',
  "Tesler's Law": '⚖️',
  "Progressive Disclosure": '📖',
  "Nudging Principle": '👉',
  "Feedback Loop Principle": '🔄',
  "Flow State": '🌊',
  "Skeuomorphism": '📱',
  "Spark Effect": '⚡',
  "Provide Exit Points": '🚪',
  "Sensory Appeal": '✨',
  "Endowment Effect": '💎',
  "Delighters Principle": '🎉',
  "Internal Trigger": '🔔',
  "External Trigger": '📢',
  "Self-Initiated Triggers Principle": '⏰',
  "Shaping: Gradually Guiding User Behavior": '🎨',
  "Shaping": '🎨',
  "Consistency & Standards": '📏',
  "Cognitive Load": '🧠',
  "Curse of Knowledge": '🎓',
  "Discoverability": '🔍',
  "Mental Model Principle": '🧠',
  "Familiarity Bias": '🏠',
  "Halo Effect": '😇',
  "Unit Bias": '1️⃣',
  "Labor Illusion": '🔨',
  "Investment Loops": '💰',
  "Weber's Law": '📊',
  "Law of the Instrument": '🔨',
  "IKEA Effect": '🛠️',
  "Planning Fallacy": '📅',
  "Goal Gradient Effect": '🏁',
  "Feedforward": '📡',
  "Occam's Razor": '🗡️',
  "Law of Similarity": '🔗',
  "Law of Prägnanz": '🎯',
  "Law of Proximity": '📍',
  "Priming": '🎭',
  "Sensory Adaptation": '👂'
};

// Helper to get emoji for a principle
export const getPrincipleEmoji = (title: string): string => {
  return PRINCIPLE_EMOJIS[title] || '📚';
};
