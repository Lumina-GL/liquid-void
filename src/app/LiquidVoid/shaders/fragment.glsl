varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform float uFresnelPower;

void main() {
  vec3 viewDirection = normalize(vViewPosition);
  float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), uFresnelPower);
  fresnel = clamp(fresnel, 0.0, 0.8);
  vec3 mixColor = mix(uColorA, uColorB, vNormal.y * 0.5 + 0.5);

  vec3 finalColor = mix(mixColor, vec3(1.0), fresnel);

  gl_FragColor = vec4(finalColor, 1.0);
}