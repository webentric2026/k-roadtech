import Image from "next/image";
import { IMAGES } from "@/assets/images";

/**
 * Product cutouts — real transparent photography when the registry
 * has a PNG for the `art` key (or the entry carries its own `image`),
 * falling back to the inline SVG illustration otherwise.
 */

function Cone() {
  return (
    <g>
      <rect x={52} y={158} width={96} height={13} rx={3} fill="#232323" />
      <polygon points="66,158 134,158 118,58 82,58" fill="#E74725" />
      <polygon points="72,128 128,128 122,100 78,100" fill="#FFFFFF" />
      <rect x={82} y={50} width={36} height={10} rx={2} fill="#E74725" />
    </g>
  );
}

function Delineator() {
  return (
    <g>
      <rect x={68} y={158} width={64} height={13} rx={3} fill="#2B2B2B" />
      <rect x={88} y={48} width={24} height={112} rx={4} fill="#E74725" />
      <rect x={88} y={66} width={24} height={14} fill="#FFFFFF" />
      <rect x={88} y={94} width={24} height={14} fill="#FFFFFF" />
      <rect x={88} y={122} width={24} height={14} fill="#FFFFFF" />
      <rect x={86} y={36} width={28} height={14} rx={3} fill="#E74725" />
    </g>
  );
}

function Stud() {
  return (
    <g>
      <rect x={44} y={102} width={112} height={34} rx={10} fill="#2B2B2B" />
      <rect x={44} y={92} width={112} height={24} rx={10} fill="#4A4A4A" />
      <rect x={62} y={98} width={30} height={13} rx={3} fill="#F7B500" />
      <rect x={108} y={98} width={30} height={13} rx={3} fill="#F7B500" />
    </g>
  );
}

function Marker() {
  return (
    <g>
      <polygon points="52,142 148,142 134,102 66,102" fill="#F5B301" />
      <rect x={76} y={110} width={48} height={20} rx={3} fill="#E8720C" />
      <rect x={46} y={142} width={108} height={8} rx={3} fill="#232323" />
    </g>
  );
}

function Breaker() {
  return (
    <g>
      <rect x={28} y={112} width={144} height={38} rx={9} fill="#262626" />
      <rect x={40} y={100} width={44} height={26} rx={5} fill="#F5B301" />
      <rect x={90} y={100} width={44} height={26} rx={5} fill="#F5B301" />
      <rect x={52} y={126} width={26} height={9} rx={2} fill="#FFFFFF" />
      <rect x={102} y={126} width={26} height={9} rx={2} fill="#FFFFFF" />
    </g>
  );
}

function Jacket() {
  return (
    <g>
      <path
        d="M70 52 L86 52 L92 66 L108 66 L114 52 L130 52 L142 78 L128 84 L128 150 L72 150 L72 84 L58 78 Z"
        fill="#CDDC39"
      />
      <rect x={72} y={96} width={56} height={10} fill="#C0C0C0" />
      <rect x={72} y={118} width={56} height={10} fill="#C0C0C0" />
      <rect x={94} y={66} width={12} height={84} fill="#C0C0C0" opacity={0.85} />
    </g>
  );
}

function Mirror() {
  return (
    <g>
      <rect x={94} y={122} width={12} height={50} fill="#5B6068" />
      <rect x={78} y={166} width={44} height={8} rx={3} fill="#2B2B2B" />
      <circle cx={100} cy={82} r={44} fill="#E74725" />
      <circle cx={100} cy={82} r={35} fill="#A8C6E0" />
      <path d="M72 68 A35 35 0 0 1 100 47" stroke="#FFFFFF" strokeWidth={7} fill="none" strokeLinecap="round" />
    </g>
  );
}

function Barrier() {
  return (
    <g>
      <polygon points="36,84 164,84 164,116 36,116" fill="#262626" />
      {[0, 1, 2, 3].map((i) => (
        <polygon
          key={i}
          points={`${52 + i * 30},84 ${68 + i * 30},84 ${58 + i * 30},116 ${42 + i * 30},116`}
          fill="#F5B301"
        />
      ))}
      <rect x={52} y={116} width={12} height={46} fill="#3A3A3A" />
      <rect x={136} y={116} width={12} height={46} fill="#3A3A3A" />
      <rect x={42} y={158} width={32} height={9} rx={3} fill="#232323" />
      <rect x={126} y={158} width={32} height={9} rx={3} fill="#232323" />
    </g>
  );
}

function Tile() {
  return (
    <g>
      <rect x={52} y={52} width={96} height={96} rx={12} fill="#F5B301" />
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <circle key={`${r}-${c}`} cx={76 + c * 24} cy={76 + r * 24} r={8} fill="#D89A00" />
        ))
      )}
    </g>
  );
}

function TactileStud() {
  return (
    <g>
      <circle cx={100} cy={100} r={56} fill="#B9BEC4" />
      {[44, 32, 20].map((r) => (
        <circle key={r} cx={100} cy={100} r={r} fill="none" stroke="#878D94" strokeWidth={5} />
      ))}
      <circle cx={100} cy={100} r={7} fill="#878D94" />
    </g>
  );
}

function ExitSign() {
  return (
    <g>
      <rect x={38} y={66} width={124} height={68} rx={8} fill="#101010" />
      <rect x={38} y={66} width={124} height={68} rx={8} fill="none" stroke="#2B2B2B" strokeWidth={3} />
      <text
        x={100}
        y={112}
        textAnchor="middle"
        fontSize={34}
        fontWeight={800}
        fill="#2EFF7A"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing={2}
      >
        EXIT
      </text>
    </g>
  );
}

function Reflector() {
  return (
    <g>
      <polygon points="100,52 152,148 48,148" fill="#E8720C" />
      <circle cx={100} cy={118} r={9} fill="#FFFFFF" opacity={0.9} />
      <circle cx={100} cy={88} r={6} fill="#FFFFFF" opacity={0.65} />
    </g>
  );
}

const ART = {
  cone: Cone,
  delineator: Delineator,
  stud: Stud,
  marker: Marker,
  breaker: Breaker,
  jacket: Jacket,
  mirror: Mirror,
  barrier: Barrier,
  tile: Tile,
  tactileStud: TactileStud,
  exitSign: ExitSign,
  reflector: Reflector,
};

export default function ProductCutout({ art, image, name = "Product", className = "h-28 w-28" }) {
  const src = image ?? IMAGES.productCutouts?.[art];
  if (src) {
    return (
      <span className={`relative block ${className}`}>
        <Image src={src} alt={name} fill sizes="160px" className="object-contain" />
      </span>
    );
  }
  const Shape = ART[art] ?? ART.cone;
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={name} className={className}>
      <Shape />
    </svg>
  );
}
