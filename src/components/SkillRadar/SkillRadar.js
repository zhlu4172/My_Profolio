import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "./skills";
import "./SkillRadar.css";

const SIZE = 340;
const CX = SIZE / 2;
const CY = SIZE / 2;
const MAX_R = 115;
const LABEL_R = 152;
const LINE_HEIGHT = 17;
const RINGS = [0.25, 0.5, 0.75, 1];
const CYCLE_INTERVAL = 2500;
const LOCK_TIMEOUT = 60000;

function pt(angle, r) {
  return { x: CX + r * Math.cos(angle), y: CY + r * Math.sin(angle) };
}

function textAnchor(angle) {
  const cos = Math.cos(angle);
  if (cos > 0.3) return "start";
  if (cos < -0.3) return "end";
  return "middle";
}

function ringPoints(fraction) {
  return SKILLS.map((s) => {
    const p = pt(s.angle, MAX_R * fraction);
    return `${p.x},${p.y}`;
  }).join(" ");
}

export default function SkillRadar() {
  const [autoKey, setAutoKey] = useState(SKILLS[0].key);
  const [lockedKey, setLockedKey] = useState(null);
  const [hoverKey, setHoverKey] = useState(null);
  const lockTimerRef = useRef(null);

  // Auto-cycle when not locked and not hovering
  useEffect(() => {
    if (lockedKey || hoverKey) return;
    const id = setInterval(() => {
      setAutoKey((prev) => {
        const i = SKILLS.findIndex((s) => s.key === prev);
        return SKILLS[(i + 1) % SKILLS.length].key;
      });
    }, CYCLE_INTERVAL);
    return () => clearInterval(id);
  }, [lockedKey, hoverKey]);

  const handleClick = (key) => {
    setLockedKey(key);
    clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => setLockedKey(null), LOCK_TIMEOUT);
  };

  const activeKey = hoverKey ?? lockedKey ?? autoKey;
  const active = SKILLS.find((s) => s.key === activeKey);

  const dataPoints = SKILLS.map((s) => {
    const p = pt(s.angle, MAX_R * s.value);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <div className="radar-container">
      <svg width={SIZE} height={SIZE} overflow="visible" className="radar-svg">
        {/* Grid rings */}
        {RINGS.map((r) => (
          <polygon
            key={r}
            points={ringPoints(r)}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        ))}

        {/* Axis lines */}
        {SKILLS.map((s) => {
          const outer = pt(s.angle, MAX_R);
          const isActive = activeKey === s.key;
          return (
            <line
              key={s.key + "-axis"}
              x1={CX}
              y1={CY}
              x2={outer.x}
              y2={outer.y}
              stroke={isActive ? s.color : "rgba(255,255,255,0.12)"}
              strokeWidth={isActive ? 2 : 1}
              style={{ transition: "stroke 0.25s, stroke-width 0.25s" }}
            />
          );
        })}

        {/* Data fill */}
        <polygon
          points={dataPoints}
          fill="rgba(167,139,250,0.18)"
          stroke="#a78bfa"
          strokeWidth="1.5"
        />

        {/* Data dots */}
        {SKILLS.map((s) => {
          const p = pt(s.angle, MAX_R * s.value);
          const isActive = activeKey === s.key;
          return (
            <circle
              key={s.key + "-dot"}
              cx={p.x}
              cy={p.y}
              r={isActive ? 7 : 4}
              fill={isActive ? s.color : "#c4b5fd"}
              style={{ transition: "r 0.25s, fill 0.25s" }}
            />
          );
        })}

        {/* Invisible wedge hit areas */}
        {SKILLS.map((s) => {
          const startA = s.angle - Math.PI / 4;
          const endA = s.angle + Math.PI / 4;
          const r = LABEL_R + 14;
          const x1 = CX + r * Math.cos(startA);
          const y1 = CY + r * Math.sin(startA);
          const x2 = CX + r * Math.cos(endA);
          const y2 = CY + r * Math.sin(endA);
          const isActive = activeKey === s.key;
          return (
            <path
              key={s.key + "-wedge"}
              d={`M ${CX} ${CY} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
              fill={isActive ? s.color + "18" : "transparent"}
              style={{ cursor: "pointer", transition: "fill 0.25s" }}
              onMouseEnter={() => setHoverKey(s.key)}
              onMouseLeave={() => setHoverKey(null)}
              onClick={() => handleClick(s.key)}
            />
          );
        })}

        {/* Labels */}
        {SKILLS.map((s) => {
          const p = pt(s.angle, LABEL_R);
          const isActive = activeKey === s.key;
          const anchor = textAnchor(s.angle);
          return (
            <g
              key={s.key + "-label"}
              onMouseEnter={() => setHoverKey(s.key)}
              onMouseLeave={() => setHoverKey(null)}
              onClick={() => handleClick(s.key)}
              style={{ cursor: "pointer" }}
            >
              {s.label.map((line, li) => {
                const yOff = (li - (s.label.length - 1) / 2) * LINE_HEIGHT;
                return (
                  <text
                    key={li}
                    x={p.x}
                    y={p.y + yOff}
                    textAnchor={anchor}
                    dominantBaseline="middle"
                    fill={isActive ? s.color : "rgba(255,255,255,0.85)"}
                    fontSize={isActive ? 14 : 13}
                    fontWeight={isActive ? "700" : "500"}
                    letterSpacing="0.03em"
                    style={{ transition: "fill 0.25s, font-size 0.25s" }}
                  >
                    {line}
                  </text>
                );
              })}
            </g>
          );
        })}

        {/* Centre dot */}
        <circle cx={CX} cy={CY} r={3} fill="rgba(255,255,255,0.25)" />
      </svg>

      {/* Detail card */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.key}
            className="skill-detail-card"
            style={{ borderColor: active.color + "55" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 style={{ color: active.color }}>{active.title}</h3>
            <p>{active.description}</p>
            <div className="skill-tags">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="skill-tag"
                  style={{ borderColor: active.color + "70", color: active.color }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
