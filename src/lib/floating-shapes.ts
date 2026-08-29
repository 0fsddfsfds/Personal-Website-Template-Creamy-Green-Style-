export type BlendMode = "multiply" | "screen" | "normal";

export type SvgTriangleConfig = {
  id: string;
  color: string;
  opacity: number;
  blend: BlendMode;
  sizeVw: number;
  sizeVh: number;
  xVw: number;
  yVh: number;
  rotation: number;
  seed: number;
  wanderX: number;
  wanderY: number;
  wanderRotation: number;
  shadow?: boolean;
};

export type ThreeTriangleConfig = {
  id: string;
  color: string;
  opacity: number;
  size: number;
  x: number;
  y: number;
  z: number;
  rotation: number;
  seed: number;
  wanderX: number;
  wanderY: number;
  wanderRotation: number;
};

export const SHAPE_COLORS = {
  mintLight: "#B7E8DC",
  mint: "#A9E0D0",
  cream: "#FFF6E2",
  coralLight: "#FFE4DB",
  coral: "#FFDDD2",
} as const;

export const svgTriangles: SvgTriangleConfig[] = [
  {
    id: "svg-mint-1",
    color: SHAPE_COLORS.mintLight,
    opacity: 0.5,
    blend: "multiply",
    sizeVw: 46,
    sizeVh: 52,
    xVw: -6,
    yVh: -10,
    rotation: -12,
    seed: 11,
    wanderX: 14,
    wanderY: 12,
    wanderRotation: 35,
    shadow: true,
  },
  {
    id: "svg-cream-1",
    color: SHAPE_COLORS.cream,
    opacity: 0.8,
    blend: "screen",
    sizeVw: 52,
    sizeVh: 36,
    xVw: 46,
    yVh: 12,
    rotation: 8,
    seed: 23,
    wanderX: 12,
    wanderY: 10,
    wanderRotation: 28,
  },
  {
    id: "svg-coral-1",
    color: SHAPE_COLORS.coralLight,
    opacity: 0.45,
    blend: "multiply",
    sizeVw: 40,
    sizeVh: 46,
    xVw: 58,
    yVh: -14,
    rotation: 18,
    seed: 37,
    wanderX: 13,
    wanderY: 11,
    wanderRotation: 32,
    shadow: true,
  },
  {
    id: "svg-mint-2",
    color: SHAPE_COLORS.mint,
    opacity: 0.38,
    blend: "multiply",
    sizeVw: 58,
    sizeVh: 30,
    xVw: -10,
    yVh: 34,
    rotation: -24,
    seed: 41,
    wanderX: 15,
    wanderY: 12,
    wanderRotation: 38,
    shadow: true,
  },
  {
    id: "svg-coral-2",
    color: SHAPE_COLORS.coral,
    opacity: 0.4,
    blend: "multiply",
    sizeVw: 48,
    sizeVh: 42,
    xVw: 52,
    yVh: 58,
    rotation: -16,
    seed: 67,
    wanderX: 12,
    wanderY: 11,
    wanderRotation: 34,
    shadow: true,
  },
  {
    id: "svg-coral-3",
    color: SHAPE_COLORS.coralLight,
    opacity: 0.4,
    blend: "multiply",
    sizeVw: 36,
    sizeVh: 50,
    xVw: 68,
    yVh: 88,
    rotation: 28,
    seed: 83,
    wanderX: 11,
    wanderY: 12,
    wanderRotation: 36,
    shadow: true,
  },
];

export const threeTriangles: ThreeTriangleConfig[] = [
  {
    id: "three-mint",
    color: SHAPE_COLORS.mintLight,
    opacity: 0.55,
    size: 17,
    x: -4.5,
    y: 0.6,
    z: 0,
    rotation: 0.2,
    seed: 97,
    wanderX: 4.5,
    wanderY: 3.2,
    wanderRotation: 0.5,
  },
  {
    id: "three-coral",
    color: SHAPE_COLORS.coral,
    opacity: 0.5,
    size: 14,
    x: 5.2,
    y: -1.8,
    z: -0.8,
    rotation: -0.3,
    seed: 101,
    wanderX: 4,
    wanderY: 3,
    wanderRotation: 0.45,
  },
];

export type SvgKeyframe = {
  x: string;
  y: string;
  rotation: number;
};

export type ThreeKeyframe = {
  x: number;
  y: number;
  rotation: number;
};

/** 确定性伪随机数生成器（mulberry32），保证 SSR 与客户端一致。 */
export function mulberry32(seed: number) {
  let state = seed;
  return function next() {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 生成 SVG 三角形的相对游走关键帧（x/y 使用 vw/vh 单位）。 */
export function svgWalkKeyframes(
  config: SvgTriangleConfig,
  count = 4,
): SvgKeyframe[] {
  const rand = mulberry32(config.seed);
  return Array.from({ length: count }, () => ({
    x: `${(rand() * 2 - 1) * config.wanderX}vw`,
    y: `${(rand() * 2 - 1) * config.wanderY}vh`,
    rotation: (rand() * 2 - 1) * config.wanderRotation,
  }));
}

/** 生成 Three.js 三角形的绝对游走关键帧（包含基础位置）。 */
export function threeWalkKeyframes(
  config: ThreeTriangleConfig,
  count = 4,
): ThreeKeyframe[] {
  const rand = mulberry32(config.seed);
  return Array.from({ length: count }, () => ({
    x: config.x + (rand() * 2 - 1) * config.wanderX,
    y: config.y + (rand() * 2 - 1) * config.wanderY,
    rotation: config.rotation + (rand() * 2 - 1) * config.wanderRotation,
  }));
}
