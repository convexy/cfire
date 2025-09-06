import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// シーン・カメラ・レンダラー
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("app")!.appendChild(renderer.domElement);

// ライト
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 全体を半分の光で照らす
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // 強めの光源
directionalLight.position.set(1, 10, 5);
scene.add(directionalLight);

// メッシュ
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// OrbitControls（タッチ対応）
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;

// アニメーション
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// リサイズ対応
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
