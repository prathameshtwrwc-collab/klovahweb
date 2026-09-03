/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

const EASE: any = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  THE COLOURFUL WORLD SEEN THROUGH THE OPEN PORTAL                    */
/* ------------------------------------------------------------------ */
const DoorwayWorld = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* sky / blue wall panel */}
    <div
      className="absolute inset-x-0 top-0 h-[48%]"
      style={{ background: 'linear-gradient(168deg,#5574C8 0%,#7690DA 48%,#C3A5DC 100%)' }}
    />
    {/* sun inside the world */}
    <div
      className="absolute right-[10%] top-[8%] h-[30%] w-[44%]"
      style={{
        background:
          'radial-gradient(circle, rgba(255,242,199,.95) 0%, rgba(244,190,59,.5) 42%, rgba(244,190,59,0) 72%)',
      }}
    />
    {/* soft cloud band */}
    <div
      className="absolute left-[6%] top-[26%] h-[7%] w-[46%] rounded-full"
      style={{ background: 'rgba(255,249,240,.42)', filter: 'blur(6px)' }}
    />
    {/* distant purple architecture */}
    <div
      className="absolute bottom-[46%] left-[4%] h-[28%] w-[22%] rounded-t-[42%]"
      style={{ background: 'linear-gradient(180deg,#C3A5DC 0%,#AE8CCE 100%)' }}
    />
    <div
      className="absolute bottom-[46%] left-[24%] h-[18%] w-[13%] rounded-t-[36%]"
      style={{ background: '#B694D6' }}
    />
    <div
      className="absolute bottom-[46%] right-[7%] h-[22%] w-[18%] rounded-t-[34%]"
      style={{ background: 'linear-gradient(180deg,#B897D8 0%,#9C7AC0 100%)' }}
    />

    {/* ground */}
    <div
      className="absolute inset-x-0 bottom-0 h-[55%]"
      style={{ background: 'linear-gradient(180deg,#FFF9F0 0%,#F6E9D8 62%,#E9D6BE 100%)' }}
    />
    <div
      className="absolute inset-x-0 bottom-[54%] h-[3%]"
      style={{ background: 'rgba(120,70,30,.10)', filter: 'blur(3px)' }}
    />

    {/* flowing blue pathway */}
    <div
      className="absolute bottom-[4%] left-[-14%] h-[34%] w-[128%] rounded-[50%]"
      style={{
        background:
          'linear-gradient(90deg, rgba(85,116,200,0) 0%, rgba(85,116,200,.55) 30%, rgba(85,116,200,.6) 62%, rgba(85,116,200,.05) 100%)',
        transform: 'rotate(-7deg)',
      }}
    />
    <div
      className="absolute bottom-[12%] left-[6%] h-[16%] w-[86%] rounded-[50%]"
      style={{ background: 'rgba(255,249,240,.55)', transform: 'rotate(-7deg)' }}
    />

    {/* purple architectural platform */}
    <div className="absolute bottom-[14%] left-[2%] h-[30%] w-[30%]">
      <div
        className="absolute bottom-0 left-0 h-[34%] w-full rounded-t-[14px]"
        style={{ background: '#C3A5DC', boxShadow: '0 8px 18px rgba(60,30,70,.18)' }}
      />
      <div
        className="absolute bottom-[32%] left-[10%] h-[32%] w-[88%] rounded-t-[12px]"
        style={{ background: '#AF8ECE' }}
      />
      <div
        className="absolute bottom-[62%] left-[20%] h-[30%] w-[76%] rounded-t-[10px]"
        style={{ background: '#9C7AC0' }}
      />
    </div>

    {/* lavender stairs (right side of the world) */}
    <div className="absolute bottom-[10%] right-[4%] h-[38%] w-[32%]">
      <div
        className="absolute bottom-0 right-0 h-[30%] w-full rounded-t-[16px]"
        style={{ background: '#C3A5DC', boxShadow: '0 10px 20px rgba(60,30,70,.20)' }}
      />
      <div
        className="absolute bottom-[28%] right-[16%] h-[28%] w-[84%] rounded-t-[14px]"
        style={{ background: '#B490D2' }}
      />
      <div
        className="absolute bottom-[54%] right-[32%] h-[26%] w-[68%] rounded-t-[12px]"
        style={{ background: '#9C7AC0' }}
      />
      {/* little arch on top */}
      <div
        className="absolute bottom-[78%] right-[44%] h-[16%] w-[34%] rounded-t-full"
        style={{ background: '#EB351F' }}
      />
    </div>

    {/* cream storefront with arched display + striped awning */}
    <div className="absolute bottom-[12%] left-[30%] h-[52%] w-[34%]">
      <div
        className="absolute bottom-0 left-0 h-[74%] w-full rounded-t-[6px]"
        style={{
          background: 'linear-gradient(180deg,#FFF9F0 0%,#F6E9D8 100%)',
          boxShadow: '0 14px 26px rgba(90,50,10,.18)',
        }}
      />
      <div
        className="absolute bottom-[54%] left-[6%] h-[6%] w-[88%]"
        style={{ background: '#EB351F' }}
      />
      <div
        className="absolute bottom-[34%] left-[10%] h-[32%] w-[46%] rounded-t-full"
        style={{ background: 'linear-gradient(180deg,#8FA9E4 0%,#5574C8 100%)' }}
      />
      <div
        className="absolute bottom-[36%] left-[14%] h-[26%] w-[38%] rounded-t-full"
        style={{ background: 'rgba(255,249,240,.35)' }}
      />
      {/* door of the shop */}
      <div
        className="absolute bottom-[34%] right-[12%] h-[26%] w-[22%] rounded-t-[4px]"
        style={{ background: '#B92216' }}
      />
      {/* black & cream striped awning */}
      <div
        className="absolute bottom-[60%] left-[-6%] h-[8%] w-[112%]"
        style={{
          background:
            'repeating-linear-gradient(90deg, #12100F 0 8px, #FFF9F0 8px 16px)',
          boxShadow: '0 8px 16px rgba(60,40,10,.25)',
        }}
      />
      <div
        className="absolute bottom-[58%] left-[-6%] h-[3%] w-[112%]"
        style={{ background: 'rgba(18,16,15,.18)' }}
      />
    </div>

    {/* simplified mobile application screen */}
    <div
      className="absolute bottom-[30%] left-[66%] h-[34%] w-[18%] rounded-[16%]"
      style={{
        background: '#FFF9F0',
        boxShadow: '0 16px 30px rgba(60,30,10,.24)',
        border: '1px solid rgba(18,16,15,.10)',
      }}
    >
      <div
        className="mx-[12%] mt-[10%] h-[5%] w-[46%] rounded-full"
        style={{ background: '#EB351F' }}
      />
      <div
        className="mx-[12%] mt-[7%] h-[4%] w-[72%] rounded-full"
        style={{ background: 'rgba(18,16,15,.16)' }}
      />
      <div
        className="mx-[12%] mt-[5%] h-[4%] w-[54%] rounded-full"
        style={{ background: 'rgba(18,16,15,.16)' }}
      />
      <div
        className="mx-[12%] mt-[9%] h-[24%] rounded-[10%]"
        style={{ background: '#F4BE3B' }}
      />
      <div
        className="mx-[12%] mt-[6%] h-[14%] rounded-[10%]"
        style={{ background: '#5574C8' }}
      />
    </div>

    {/* analytics bars */}
    <div className="absolute bottom-[10%] left-[38%] flex h-[24%] items-end gap-[3%]">
      <div className="h-[42%] w-[7px] rounded-sm" style={{ background: '#F4BE3B' }} />
      <div className="h-[72%] w-[7px] rounded-sm" style={{ background: '#EB351F' }} />
      <div className="h-[52%] w-[7px] rounded-sm" style={{ background: '#C3A5DC' }} />
      <div className="h-[100%] w-[7px] rounded-sm" style={{ background: '#5574C8' }} />
      <div className="h-[64%] w-[7px] rounded-sm" style={{ background: '#E7A47D' }} />
    </div>

    {/* small red + yellow blocks */}
    <div
      className="absolute bottom-[16%] left-[24%] h-[6%] w-[9%]"
      style={{ background: '#EB351F', transform: 'rotate(-8deg)' }}
    />
    <div
      className="absolute bottom-[22%] left-[20%] h-[5%] w-[7%]"
      style={{ background: '#F4BE3B', transform: 'rotate(12deg)' }}
    />
    <div
      className="absolute bottom-[9%] right-[38%] h-[7%] w-[10%]"
      style={{ background: '#F4BE3B', transform: 'rotate(6deg)' }}
    />

    {/* minimal plant forms */}
    <div className="absolute bottom-[8%] left-[12%] h-[18%] w-[7%]">
      <div
        className="absolute bottom-0 left-1/2 h-full w-[2px] -translate-x-1/2"
        style={{ background: '#6E7B4F' }}
      />
      <div
        className="absolute bottom-[38%] left-0 h-[26%] w-full rounded-full"
        style={{ background: '#7C8A57', transform: 'rotate(-18deg)' }}
      />
      <div
        className="absolute bottom-[58%] left-[6%] h-[24%] w-[86%] rounded-full"
        style={{ background: '#6E7B4F', transform: 'rotate(14deg)' }}
      />
      <div
        className="absolute bottom-[76%] left-[18%] h-[20%] w-[64%] rounded-full"
        style={{ background: '#8B9765', transform: 'rotate(-6deg)' }}
      />
    </div>

    {/* warm light wash inside the portal */}
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(90% 70% at 86% 4%, rgba(255,236,182,.55) 0%, rgba(255,236,182,.12) 42%, rgba(255,236,182,0) 70%)',
      }}
    />
    {/* dimensional shadows inside the portal */}
    <div
      className="absolute inset-0"
      style={{
        boxShadow:
          'inset 0 30px 60px rgba(60,25,5,.22), inset 0 -40px 70px rgba(120,70,25,.14), inset 40px 0 60px rgba(60,25,5,.12), inset -40px 0 60px rgba(60,25,5,.12)',
      }}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/*  REFINED HUMAN SILHOUETTE — seen from behind, walking in            */
/* ------------------------------------------------------------------ */
const HumanFigure = () => (
  <div
    className="absolute bottom-[9%] left-1/2 -translate-x-1/2"
    style={{
      height: '46%',
      aspectRatio: '0.34',
      filter: 'drop-shadow(0 14px 20px rgba(70,30,5,.28))',
    }}
  >
    {/* ground contact shadow */}
    <div
      className="absolute bottom-[-3%] left-1/2 h-[6%] w-[120%] -translate-x-1/2 rounded-[50%]"
      style={{ background: 'rgba(70,35,5,.30)', filter: 'blur(7px)' }}
    />

    {/* shoes */}
    <div
      className="absolute bottom-0 left-[22%] h-[4.5%] w-[27%] rounded-[45%_45%_35%_35%]"
      style={{ background: '#141110', transform: 'rotate(-3deg)' }}
    />
    <div
      className="absolute bottom-0 right-[22%] h-[4.5%] w-[27%] rounded-[45%_45%_35%_35%]"
      style={{ background: '#141110', transform: 'rotate(3deg)' }}
    />

    {/* loose black trousers */}
    <div
      className="absolute bottom-[4%] left-[26%] h-[43%] w-[22%] rounded-b-[22%_22%_16%_16%]"
      style={{ background: '#16130F', transform: 'rotate(1.5deg)' }}
    />
    <div
      className="absolute bottom-[4%] right-[26%] h-[43%] w-[22%] rounded-b-[22%_22%_16%_16%]"
      style={{ background: '#16130F', transform: 'rotate(-1.5deg)' }}
    />
    {/* hips */}
    <div
      className="absolute bottom-[42%] left-[24%] h-[13%] w-[52%] rounded-[26%_26%_10%_10%]"
      style={{ background: '#12100F' }}
    />

    {/* off-white oversized jacket */}
    <div
      className="absolute bottom-[50%] left-[18%] h-[34%] w-[64%]"
      style={{
        background: 'linear-gradient(100deg,#FFF9F0 0%,#F7EBDA 58%,#EBDCC6 100%)',
        borderRadius: '30% 30% 12% 12% / 26% 26% 8% 8%',
        boxShadow: 'inset -6px 0 12px rgba(120,80,40,.14)',
      }}
    />
    {/* jacket back seam */}
    <div
      className="absolute bottom-[52%] left-1/2 h-[28%] w-[2px] -translate-x-1/2"
      style={{ background: 'rgba(150,110,70,.18)' }}
    />
    {/* sleeves */}
    <div
      className="absolute bottom-[52%] left-[6%] h-[29%] w-[16%] rounded-full"
      style={{
        background: 'linear-gradient(180deg,#FFF9F0 0%,#F1E2CD 100%)',
        transform: 'rotate(7deg)',
      }}
    />
    <div
      className="absolute bottom-[52%] right-[6%] h-[29%] w-[16%] rounded-full"
      style={{
        background: 'linear-gradient(180deg,#FFF9F0 0%,#EBDCC6 100%)',
        transform: 'rotate(-5deg)',
      }}
    />
    {/* hands */}
    <div
      className="absolute bottom-[50%] left-[4%] h-[5%] w-[13%] rounded-full"
      style={{ background: '#C98B5E' }}
    />
    <div
      className="absolute bottom-[46%] right-[3%] h-[5%] w-[13%] rounded-full"
      style={{ background: '#C98B5E' }}
    />
    {/* collar */}
    <div
      className="absolute bottom-[80%] left-[35%] h-[5%] w-[30%] rounded-[45%_45%_20%_20%]"
      style={{ background: '#FFF9F0' }}
    />
    {/* neck */}
    <div
      className="absolute bottom-[81%] left-[42%] h-[4%] w-[16%]"
      style={{ background: '#C98B5E' }}
    />
    {/* head with dark textured hair */}
    <div
      className="absolute bottom-[84%] left-[36%] h-[14%] w-[28%]"
      style={{
        background: 'radial-gradient(70% 70% at 35% 25%, #33261F 0%, #1B1512 70%)',
        borderRadius: '48% 48% 44% 44% / 56% 56% 46% 46%',
      }}
    />
    <div
      className="absolute bottom-[95%] left-[42%] h-[4%] w-[16%] rounded-full"
      style={{ background: '#241C17', filter: 'blur(1px)' }}
    />

    {/* the idea — large circular yellow lightbulb object */}
    <div
      className="absolute bottom-[38%] right-[-34%] h-[26%] w-[76%] rounded-full"
      style={{
        background:
          'radial-gradient(60% 60% at 32% 28%, #FFE9A8 0%, #F4BE3B 55%, #E0A520 100%)',
        boxShadow:
          '0 0 46px rgba(244,190,59,.65), inset -6px -8px 16px rgba(160,100,10,.28)',
      }}
    />
    <div
      className="absolute bottom-[36%] right-[-30%] h-[6%] w-[26%] rounded-[3px]"
      style={{ background: '#D9A93C' }}
    />
    <div
      className="absolute bottom-[48%] right-[-14%] h-[3%] w-[22%] rounded-full"
      style={{ background: '#F7EBDA' }}
    />
  </div>
);

/* ------------------------------------------------------------------ */
/*  MAIN ARTWORK                                                       */
/* ------------------------------------------------------------------ */
export default function HeroArtworkPlaceholder() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { damping: 30, stiffness: 110 });
  const sy = useSpring(my, { damping: 30, stiffness: 110 });
  const x = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const y = useTransform(sy, [-0.5, 0.5], [-6, 6]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, scale: reduce ? 1 : 1.025 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: EASE }}
      style={{ x: reduce ? 0 : x, y: reduce ? 0 : y }}
      className="pointer-events-auto absolute inset-0 h-full w-full overflow-hidden"
    >
      {/* ---------- warm sunlight from the upper right ---------- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 85% at 84% -8%, rgba(255,236,186,.62) 0%, rgba(255,236,186,.20) 38%, rgba(255,236,186,0) 70%)',
        }}
      />
      {/* soft light rays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[20%] right-[6%] h-[120%] w-[7vw] -skew-x-[18deg] opacity-40 blur-2xl"
          style={{ background: 'linear-gradient(180deg, rgba(255,246,214,.85), rgba(255,246,214,0))' }}
        />
        <div
          className="absolute -top-[20%] right-[18%] h-[120%] w-[4vw] -skew-x-[18deg] opacity-30 blur-2xl"
          style={{ background: 'linear-gradient(180deg, rgba(255,246,214,.85), rgba(255,246,214,0))' }}
        />
      </div>

      {/* ---------- subtle botanical shadows on the far right ---------- */}
      <div className="absolute right-[-4%] top-[16%] h-[56%] w-[26%] opacity-[0.13]">
        <div
          className="absolute right-[6%] top-[6%] h-[34%] w-[46%] rounded-full blur-2xl"
          style={{ background: '#4B5A38', transform: 'rotate(-18deg)' }}
        />
        <div
          className="absolute right-[26%] top-[26%] h-[46%] w-[34%] rounded-full blur-2xl"
          style={{ background: '#3F4C30', transform: 'rotate(12deg)' }}
        />
        <div
          className="absolute right-[2%] top-[52%] h-[30%] w-[52%] rounded-full blur-2xl"
          style={{ background: '#4B5A38', transform: 'rotate(-8deg)' }}
        />
        <div
          className="absolute right-[34%] top-[64%] h-[26%] w-[24%] rounded-full blur-2xl"
          style={{ background: '#3F4C30', transform: 'rotate(24deg)' }}
        />
      </div>

      {/* ---------- THE ARCHITECTURAL DOUBLE-DOOR INSTALLATION ---------- */}
      <div
        className="absolute left-[6%] top-[24%] h-[68%] w-[88%]
                   md:left-[28vw] md:top-[4%] md:h-[90%] md:w-[43vw]"
      >
        {/* floor shadow cast by the whole installation */}
        <div
          className="absolute bottom-[-3%] left-[-8%] h-[9%] w-[116%] rounded-[50%]"
          style={{ background: 'rgba(90,45,10,.26)', filter: 'blur(18px)' }}
        />

        {/* shadow falling leftward from the left door */}
        <div
          className="absolute left-[-26%] top-[5%] h-[92%] w-[32%] -skew-x-[14deg]"
          style={{
            background: 'linear-gradient(90deg, rgba(90,40,8,0) 0%, rgba(90,40,8,.34) 100%)',
            filter: 'blur(14px)',
          }}
        />
        {/* shadow falling rightward from the right door */}
        <div
          className="absolute right-[-26%] top-[5%] h-[92%] w-[32%] skew-x-[14deg]"
          style={{
            background: 'linear-gradient(270deg, rgba(90,40,8,0) 0%, rgba(90,40,8,.34) 100%)',
            filter: 'blur(14px)',
          }}
        />

        {/* ===== BASE PLINTH — the installation sits on a physical platform ===== */}
        <div
          className="absolute bottom-[1.5%] left-[-5%] right-[-5%] h-[3.4%] rounded-[3px]"
          style={{
            background: 'linear-gradient(180deg,#F8EDDD 0%,#EBBE9A 55%,#E7A47D 100%)',
            boxShadow: '0 10px 22px rgba(120,60,20,.22), inset 0 1px 0 rgba(255,255,255,.55)',
          }}
        />
        <div
          className="absolute bottom-[0.2%] left-[-6%] right-[-6%] h-[2.4%] rounded-[50%]"
          style={{ background: 'rgba(120,60,20,.24)', filter: 'blur(9px)' }}
        />

        {/* ===== CENTRAL PORTAL + WORLD ===== */}
        <div
          className="absolute left-[27%] top-0 h-[95%] w-[46%] overflow-hidden"
          style={{
            boxShadow:
              'inset 0 0 0 7px #B92216, inset 0 22px 55px rgba(50,15,5,.30), 0 30px 60px rgba(90,45,10,.18)',
          }}
        >
          <DoorwayWorld />
          <HumanFigure />
        </div>

        {/* ===== LEFT DOOR ===== */}
        <div
          className="absolute left-0 top-0 h-full w-[27%]"
          style={{
            transform: 'perspective(1500px) rotateY(42deg)',
            transformOrigin: 'right center',
            background:
              'linear-gradient(96deg,#A81E12 0%,#EB351F 26%,#EB351F 72%,#C9301C 100%)',
            boxShadow:
              'inset -16px 0 30px rgba(70,10,2,.40), inset 8px 0 18px rgba(255,255,255,.14), -8px 18px 40px rgba(90,40,8,.28)',
          }}
        >
          <div
            className="absolute bottom-[10%] left-[16%] right-[14%] top-[13%]"
            style={{ border: '1px solid rgba(120,20,8,.45)' }}
          />
          <div
            className="absolute left-[9%] top-1/2 h-[9%] w-[4%] -translate-y-1/2 rounded-full"
            style={{ background: '#F4BE3B' }}
          />
        </div>

        {/* ===== RIGHT DOOR ===== */}
        <div
          className="absolute right-0 top-0 h-full w-[27%]"
          style={{
            transform: 'perspective(1500px) rotateY(-42deg)',
            transformOrigin: 'left center',
            background:
              'linear-gradient(264deg,#A81E12 0%,#EB351F 24%,#EB351F 70%,#B92216 100%)',
            boxShadow:
              'inset 16px 0 30px rgba(70,10,2,.40), inset -8px 0 18px rgba(255,255,255,.12), 8px 18px 40px rgba(90,40,8,.28)',
          }}
        >
          <div
            className="absolute bottom-[10%] left-[14%] right-[16%] top-[13%]"
            style={{ border: '1px solid rgba(120,20,8,.45)' }}
          />
          <div
            className="absolute right-[9%] top-1/2 h-[9%] w-[4%] -translate-y-1/2 rounded-full"
            style={{ background: '#F4BE3B' }}
          />
        </div>

        {/* ===== UPPER CONNECTING BEAM ===== */}
        <div
          className="absolute left-[15%] right-[15%] top-[7%] h-[6.5%]"
          style={{
            background: 'linear-gradient(180deg,#F0432B 0%,#EB351F 45%,#B92216 100%)',
            transform: 'perspective(1200px) rotateX(14deg)',
            transformOrigin: 'bottom center',
            boxShadow: '0 16px 30px rgba(110,30,10,.30), inset 0 2px 0 rgba(255,255,255,.22)',
          }}
        />
        <div
          className="absolute left-[15%] right-[15%] top-[13%] h-[2.5%]"
          style={{ background: 'rgba(90,20,5,.35)', filter: 'blur(5px)' }}
        />

      </div>

      {/* ---------- LAVENDER STEPS — bottom left ---------- */}
      <div className="absolute bottom-[-5%] left-[-12%] h-[9vh] w-[36vw] md:bottom-[-4%] md:left-[-6%] md:h-[17vh] md:w-[18vw] md:max-w-[18vw]">
        <div
          className="absolute bottom-0 left-0 h-[42%] w-full rounded-tr-[26px]"
          style={{ background: '#C3A5DC', boxShadow: '0 -6px 24px rgba(70,40,90,.18)' }}
        />
        <div
          className="absolute bottom-[38%] left-[6%] h-[34%] w-[92%] rounded-tr-[22px]"
          style={{ background: '#B694D6' }}
        />
        <div
          className="absolute bottom-[70%] left-[13%] h-[30%] w-[84%] rounded-tr-[18px]"
          style={{ background: '#A886C9' }}
        />
      </div>

      {/* ---------- YELLOW STEPS — bottom right ---------- */}
      <div className="absolute bottom-[-5%] right-[-12%] h-[9vh] w-[34vw] md:bottom-[-4%] md:right-[-6%] md:h-[17vh] md:w-[17vw] md:max-w-[17vw]">
        <div
          className="absolute bottom-0 right-0 h-[42%] w-full rounded-tl-[26px]"
          style={{
            background: '#F4BE3B',
            boxShadow: '-8px -6px 26px rgba(150,95,10,.22)',
          }}
        />
        <div
          className="absolute bottom-[38%] right-[6%] h-[34%] w-[92%] rounded-tl-[22px]"
          style={{ background: '#EEB02E' }}
        />
        <div
          className="absolute bottom-[70%] right-[13%] h-[30%] w-[84%] rounded-tl-[18px]"
          style={{ background: '#E2A223' }}
        />
      </div>

      {/* ---------- warm editorial colour grade ---------- */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 40%, rgba(255,246,224,.10) 0%, rgba(120,72,20,.06) 100%)',
        }}
      />
    </motion.div>
  );
}
