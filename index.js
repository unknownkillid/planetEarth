
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = -0.3
  camera.position.x = 0
  camera.position.y = 0
  camera.rotation.x = 0.9

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new THREE.GLTFLoader()
  loader.load('./assets/model/scene.gltf', (gltf) => {
    const model = gltf.scene;
    scene.add(model)
  })

  const ambient = new THREE.AmbientLight(0x404040, 20)
  const directionalLight = new THREE.DirectionalLight(0x404040, 200)
  directionalLight.position.x = -10
  scene.add(ambient, directionalLight)

  const animate = () => {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
  };

  animate();