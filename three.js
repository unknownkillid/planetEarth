const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 2;
camera.position.x = 0;
camera.position.y = 1.7;
camera.rotation.x = -0.7;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

const loader = new THREE.GLTFLoader();

let mixer;
const clock = new THREE.Clock();
let targetFPS = 0.9;

loader.load('./assets/model/scene.gltf', (gltf) => {
  const model = gltf.scene;
  scene.add(model);
  
  mixer = new THREE.AnimationMixer(model);

  const clips = gltf.animations;

  clips.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.timeScale = targetFPS / 60; 
    action.play();
  });

  const animateModel = () => {
    if (mixer) {
      const deltaTime = clock.getDelta();
      mixer.update(deltaTime);
    }
    requestAnimationFrame(animateModel);
  };

  animateModel();
});

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; 
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.enablePan = false;


const ambient = new THREE.AmbientLight(0x404040, 0.5);
const PointLight = new THREE.PointLight(0x404040, 50);
PointLight.position.x = 0;
PointLight.position.z = 0;
PointLight.position.y = 0;

scene.add(ambient, PointLight);

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();
