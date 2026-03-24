<div align="center">

# L I Q U I D _ V O I D
### 001 // GPGPU MORPHOLOGY ENGINE

[![WebGL](https://img.shields.io/badge/WebGL-3D-FF0055.svg?style=for-the-badge)]()
[![React Three Fiber](https://img.shields.io/badge/R3F-Library-black.svg?style=for-the-badge)]()
[![Next.js](https://img.shields.io/badge/Next.js-14-white.svg?style=for-the-badge)]()

**An abstract generative fluid simulation crafted with GLSL & React Three Fiber.**

[ [LAUNCH EXPERIENCE](https://liquid-void.sujitkoji.com/) ] &nbsp; • &nbsp; [ [RESOURCES](https://github.com/sujitkoji/liquid-void) ]

<br/>

![Header](https://github.com/Lumina-GL/liquid-void/blob/main/public/og-img.png?raw=true) 

---

### / VISION

**Liquid Void** is a high-end WebGL experiment focused on **organic motion, refractive aesthetics, and mathematical beauty**. 
The project explores the intersection of **Simplex Noise algorithms** and **Fresnel equations** to simulate a volatile, liquid-like core trapped in a digital vacuum.

Every system is built with a **Performance-First** mindset, utilizing custom shaders to handle complex vertex displacement directly on the GPU.

---

### / CORE ARCHITECTURE

<table width="100%">
  <tr>
    <td width="33%" align="center" style="border: none;">
      <code>[ 01. VERTEX ]</code><br/><br/>
      <b>Simplex Distortion</b><br/>
      <i>Dynamic noise-based displacement</i>
    </td>
    <td width="33%" align="center" style="border: none;">
      <code>[ 02. FRAGMENT ]</code><br/><br/>
      <b>Fresnel Shading</b><br/>
      <i>View-dependent light reflection</i>
    </td>
    <td width="33%" align="center" style="border: none;">
      <code>[ 03. OPTICS ]</code><br/><br/>
      <b>Post-Processing</b><br/>
      <i>Cinematic Bloom & Film Grain</i>
    </td>
  </tr>
</table>

---

### / TECHNICAL SPECIFICATIONS

#### // NOISE MORPHOLOGY
The mesh utilizes **3D Simplex Noise** to calculate real-time vertex displacement. Unlike standard Perlin noise, Simplex provides a more organic, non-directional flow with lower computational overhead.

$$P_{new} = P_{old} + \vec{n} \cdot \text{Snoise}(P_{old} \cdot \omega + t) \cdot A$$

#### // FRESNEL APPROXIMATION
To achieve the "premium" liquid look, we implement a custom Fresnel effect in the fragment shader. This calculates the reflectance based on the angle between the view vector and the surface normal.

$$F = \max(0.0, 1.0 - \vec{V} \cdot \vec{N})^{power}$$

---

### / PERFORMANCE STRATEGY

`GPU INSTANCING` • `DPR CLAMPING` • `MEMOIZED UNIFORMS` • `LERP INTERPOLATION`

---

### / PROJECT STRUCTURE

<table align="center" style="border-collapse: collapse; border: none;">
<tr>
<td align="left" style="background-color: #0d1117; border: 1px solid #30363d; border-radius: 12px; padding: 30px;">
<pre style="margin: 0; font-family: 'JetBrains Mono', 'Fira Code', monospace; line-height: 1.6; color: #c9d1d9; background: none; border: none;">
<span style="color: #58a6ff;">src/</span>
 ├─ <span style="color: #79c0ff;">LiquidVoid/</span>
 │  ├─ scene.tsx         <span style="color: #8b949e;">// R3F Canvas & Post-Process</span>
 │  ├─ LiquidCore.tsx    <span style="color: #8b949e;">// Shader Logic & Uniform Updates</span>
 │  ├─ Overlay.tsx       <span style="color: #8b949e;">// Cinematic HUD Overlay</span>
 │  └─ <span style="color: #79c0ff;">shaders/</span>
 │     ├─ vertex.glsl    <span style="color: #8b949e;">// Displacement logic</span>
 │     └─ fragment.glsl  <span style="color: #8b949e;">// Color & Fresnel math</span>
 │
 └─ <span style="color: #79c0ff;">hooks/</span>
    └─ useLerp.ts        <span style="color: #8b949e;">// Smooth interaction transitions</span>
</pre>
</td>
</tr>
</table>

---

### / SYSTEM DESIGN

```mermaid
graph TD
    A[Leva Controls] -->|Uniforms| B[LiquidCore]
    B --> C[Vertex Shader: Noise]
    B --> D[Fragment Shader: Fresnel]
    C --> E[Geometry Displacement]
    D --> F[Color Composition]
    E & F --> G[EffectComposer]
    G --> H[Final Output: Bloom/Grain]
    style B fill:#111,stroke:#FF0055,stroke-width:2px
    style G fill:#111,stroke:#58a6ff,stroke-width:2px
```

---

### / ARCHITECTURE AUTHORSHIP

**SUJIT KOJI** Creative Technologist & WebGL Architect [ [PORTFOLIO](https://sujitkoji.com) ] &nbsp; / &nbsp; [ [LINKEDIN](https://www.linkedin.com/in/sujitkoji/) ]


© 2026 - Open Source Creative Experiment

</div>
