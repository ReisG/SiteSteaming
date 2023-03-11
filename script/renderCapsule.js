import * as THREE from 'https://unpkg.com/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, // field of view (FOV, degrees)
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // near attribute
    1000 // far attribute
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry(
    9, // radius
    14, // length
    15, // capSubdividions
    7 // radial segments
);

/* const geometry = new THREE.BoxGeometry(1, 1, 1); */
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const capsule = new THREE.Mesh(geometry, material);
scene.add(capsule);

camera.position.z = 5;

function animate()
{
    requestAnimationFrame(animate);

    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();