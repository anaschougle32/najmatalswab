import canopy1 from "@/assets/canopy-1.jpg";
import canopy2 from "@/assets/canopy-2.jpg";
import canopy3 from "@/assets/canopy-3.jpg";
import canopy4 from "@/assets/canopy-4.jpg";
import canopy5 from "@/assets/canopy-5.jpg";
import canopy6 from "@/assets/canopy-6.jpg";
import canopy7 from "@/assets/canopy-7.jpg";
import serviceCanopy from "@/assets/service-canopy.webp";
import staircase1 from "@/assets/staircase-1.jpg";
import staircase2 from "@/assets/staircase-2.jpg";
import staircase3 from "@/assets/staircase-3.webp";
import staircase6 from "@/assets/staircase-6.jpg";
import staircase7 from "@/assets/staircase-7.avif";
import serviceStaircase from "@/assets/service-staircase.jpg";
import railing1 from "@/assets/railing-1.webp";
import railing2 from "@/assets/railing-2.jpg";
import railing3 from "@/assets/railing-3.jpeg";
import railing4 from "@/assets/railing-4.png";
import railing5 from "@/assets/railing-5.webp";
import railing6 from "@/assets/railing-6.webp";
import railing7 from "@/assets/railing-7.jpg";
import railing8 from "@/assets/railing-8.jpg";
import serviceRailings from "@/assets/service-railings.jpg";
import gate1 from "@/assets/gate-1.jpg";
import gate2 from "@/assets/gate-2.jpg";
import gate3 from "@/assets/gate-3.jpg";
import gate4 from "@/assets/gate-4.jpg";
import gate5 from "@/assets/gate-5.jpg";
import gate6 from "@/assets/gate-6.jpg";
import gate7 from "@/assets/gate-7.jpg";
import serviceGates from "@/assets/service-gates.jpg";
import chute1 from "@/assets/chute-1.jpg";
import chute2 from "@/assets/chute-2.avif";
import chute3 from "@/assets/chute-3.jpg";
import chute4 from "@/assets/chute-4.webp";
import serviceChute from "@/assets/service-chute.jpg";
import ev1 from "@/assets/ev-1.webp";
import ev2 from "@/assets/ev-2.avif";
import ev3 from "@/assets/ev-3.png";
import ev4 from "@/assets/ev-4.avif";
import ev5 from "@/assets/ev-5.jpg";
import serviceEv from "@/assets/service-ev-frame.avif";
import bench1 from "@/assets/bench-1.jpg";
import bench2 from "@/assets/bench-2.jpg";
import bench3 from "@/assets/bench-3.jpg";
import bench4 from "@/assets/bench-4.jpg";
import serviceBench from "@/assets/service-bench.avif";
import heroSteel from "@/assets/hero-steel.jpg";

export interface GalleryGroup {
  id: string;
  title: string;
  summary: string;
  scope: string[];
  images: { src: string; alt: string }[];
}

const image = (src: string, alt: string) => ({ src, alt });

export const galleryGroups: GalleryGroup[] = [
  {
    id: "canopies",
    title: "Canopies & architectural structures",
    summary: "Metal and metal-glass structures shaped for entrances, facades and exterior spaces.",
    scope: ["Metal-glass canopies", "Facades", "Pergolas", "Portal cladding"],
    images: [canopy1, canopy2, canopy3, canopy4, canopy5, canopy6, canopy7, serviceCanopy, heroSteel].map((src, i) => image(src, `Canopy and architectural structure reference ${i + 1}`)),
  },
  {
    id: "staircases",
    title: "Staircases & steel fabrication",
    summary: "Mild-steel and structural fabrication for circulation, access and load-bearing elements.",
    scope: ["Staircases", "Mezzanine structures", "Structural fabrication", "Welded assemblies"],
    images: [staircase1, staircase2, staircase3, staircase6, staircase7, serviceStaircase].map((src, i) => image(src, `Fabricated staircase reference ${i + 1}`)),
  },
  {
    id: "railings",
    title: "Balustrades, railings & glazing",
    summary: "Visible architectural metalwork combining stainless steel, glass and precise site fixing.",
    scope: ["Balustrades", "Handrails", "Glass partitions", "Aluminium glazing"],
    images: [railing1, railing2, railing3, railing4, railing5, railing6, railing7, railing8, serviceRailings].map((src, i) => image(src, `Railing and glazing reference ${i + 1}`)),
  },
  {
    id: "gates",
    title: "Gates, screens & cladding",
    summary: "Custom metalwork for entrances and building envelopes, from functional frames to decorative screens.",
    scope: ["Gates", "Metal screens", "Wall and metal cladding", "Cast aluminium"],
    images: [gate1, gate2, gate3, gate4, gate5, gate6, gate7, serviceGates].map((src, i) => image(src, `Gate, screen and cladding reference ${i + 1}`)),
  },
  {
    id: "chutes",
    title: "Garbage & linen chutes",
    summary: "Chute systems for residential, hospitality and commercial buildings.",
    scope: ["Garbage chute systems", "Linen chute systems", "Intake sections", "Installation"],
    images: [chute1, chute2, chute3, chute4, serviceChute].map((src, i) => image(src, `Garbage and linen chute reference ${i + 1}`)),
  },
  {
    id: "ev-frames",
    title: "EV charging frames",
    summary: "Fabricated support frames and housings for charging installations.",
    scope: ["Steel frames", "Equipment supports", "Protective housings", "Site installation"],
    images: [ev1, ev2, ev3, ev4, ev5, serviceEv].map((src, i) => image(src, `EV charging frame reference ${i + 1}`)),
  },
  {
    id: "benches",
    title: "Stainless-steel benches",
    summary: "Compact stainless-steel assemblies for wet-area and architectural applications.",
    scope: ["Wall-mounted benches", "Free-standing benches", "Stainless-steel fabrication"],
    images: [bench1, bench2, bench3, bench4, serviceBench].map((src, i) => image(src, `Stainless-steel bench reference ${i + 1}`)),
  },
];
