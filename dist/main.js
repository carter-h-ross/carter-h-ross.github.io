/* 3d model credits:

chess board: "Chess Board" (https://skfb.ly/6SAZ9) by danielpaulse is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).

*/

// function to help with radians
function degToRad(degrees) {
  var radians = degrees * (Math.PI / 180);
  return radians;
}

function log_board(){
  let result = ``;
  for (let r = 0; r < 8; r++) {
    result += `\n|`;
    for (let c = 0; c < 8; c++) {
      if (board[r][c].team != "-") {
        result += `${board[r][c].id}|`;
      } else {
        result += `  |`;
      }      
    }
  }
  console.log(result);
}

function encode_board() {
  let result = "";

  let counter = 0;
  let empty = false;
  outerloop:
  for (let r = 0; r < 8; r++) {
    inerloop:
    for (let c = 0; c < 8; c++) {
      if (r > 7 && c > 7) {
        break outerloop;
      }
      if (board[r][c].team != "-") {
        if (empty) {
          result += `${counter}`;
          counter = 0;
          empty = false;
        }
        result += board[r][c].id;
      } else {
        counter++;
        empty = true;
      }
    }
  }

  console.log(result);
  return result;
}

function decode_board(code) {
  let result = [[]];

  return result;
}

function debug_board(moves) {
  let result = "";
  for (let r = 0; r < 8; r++) {
    result += "\n|";
    for (let c = 0; c < 8; c++) {
      for (let i = 0; i < moves.length; i++) {
        if (moves[i][0] == r && moves[i][1] == c) {
          result += "*|";
          break;
        } else if (i == moves.length - 1) {
          result += " |";
        }
      }
    }
  }
  console.log(result);
}

// variables used for js game logic
class Spot {
  constructor(r,c,id) {
    this.r = r;
    this.c = c;
    this.id = id;
    this.team = id[0];
    this.piece = id[1];
  }

  // game logic functions
  isCheck() {
    
    let ir = [];
    let ic = [];
    let b = board;
    let team = this.team;
    let r = this.r;
    let c = this.c;

    // checks if black pawn will make check
    if (team == "w") {
      if (r > 0 && c < 7) {
        if (b[r-1][c+1].id == "bp") /* up 1 right 1 */ {
          return true;
        }
      }
      if (r > 0 && c > 0) {
        if (b[r-1][c-1].id == "bp") /* up 1 left 1 */ {
          return true;
        }
      }
    }

    // checks if white pawn will make check
    if (team == "b") {
      if (r < 7 && c < 7) {
        if (b[r+1][c+1].id == "wp") /* down 1 right 1 */ {
          return true;
        }
      }
      if (r < 7 && c > 0) {
        if (b[r+1][c-1].id == "wp") /* down 1 left 1 */ {
          return true;
        }
      }
    }

    // checks if knight will make check
    ir = [1,2,2,1,-1,-2,-2,-1]; 
    ic = [2,1,-1,-2,-2,-1,1,2]; // locations to check for pieces relative to the piece
    for (let i = 0; i < 8;i++) {
      if (r+ir[i] > -1 && r+ir[i] < 8 && c+ic[i] > -1 && c+ic[i] < 8) {
        if (b[r+ir[i]][c+ic[i]].id == `${opp[team]}n`) {
          return true;
        }
      }
    }

    // checks if rook will make check or queen in rook directions
    if (r < 7) {
      for (let i = r+1;i < 8;i++) {
        if (b[i][c].team == team) {
          break;
        } else if (b[i][c].team == opp[team]) {
          if (b[i][c].id == `${opp[team]}r` || b[i][c].id == `${opp[team]}q`) /* right */ {
            return true;
          } else {
            break;
          }
        }
      }
    }
    if (c < 7) {
      for (let i = c+1;i < 8;i++) {
        if (b[r][i].team == team) {
          break;
        } else if (b[r][i].team == opp[team]) {
          if (b[r][i].id == `${opp[team]}r` || b[r][i].id == `${opp[team]}q`) /* down */ {
            return true;
          } else {
            break;
          }
        }
      }
    }
    if (r > 0) {
      for (let i = r-1;i > -1;i--) {
        if (b[i][c].team == team) {
          break;
        } else if (b[i][c].team == opp[team]) {
          if (b[i][c].id == `${opp[team]}r` || b[i][c].id == `${opp[team]}q`) /* left */ {
            return true;
          } else {
            break;
          }
        }
      }
    }
    if (c > 0) {
      for (let i = c-1;i > -1;i--) {
        if (b[r][i].team == team) {
          break;
        } else if (b[r][i].team == opp[team]) {
          if (b[r][i].id == `${opp[team]}r` || b[r][i].id == `${opp[team]}q`) /* up */ {
            return true;
          } else {
            break;
          }
        }
      }
    }

    // checks if bishop makes check or queen in bishop directions
    ir = [1,1,-1,-1];
    ic = [1,-1,-1,1];
    for (let i = 1;i < 8;i++) {
      if (r+i == 8 || c+i == 8) {
        break;
      }
      if (b[r+i][c+i].team == team) {
        break;
      }
      if (b[r+i][c+i].id == `${opp[team]}b` || b[r+i][c+i].id == `${opp[team]}q`) /* down right */ {
        return true;
      }
    }
    for (let i = 1;i < 8;i++) {
      if (r+i == 8 || c-i == -1) {
        break;
      }
      if (b[r+i][c-i].team == team) {
        break;
      }
      if (b[r+i][c-i].id == `${opp[team]}b` || b[r+i][c-i].id == `${opp[team]}q`) /* down left */ {
        return true;
      } 
    }
    for (let i = 1;i < 8;i++) {
      if (r-i == -1 || c-i == -1) {
        break;
      }
      if (b[r-i][c-i].team == team) {
        break;
      }
      if (b[r-i][c-i].id == `${opp[team]}b` || b[r-i][c-i].id == `${opp[team]}q`) /* up left */ {
        return true;
      }
    }
    for (let i = 1;i < 8;i++) {
      if (r-i == -1 || c+i == 8) {
        break;
      }
      if (b[r-i][c+i].team == team) {
        break;
      }
      if (b[r-i][c+i].id == `${opp[team]}b` || b[r-i][c+i].id == `${opp[team]}q`) /* up right */ {
        return true;
      }
    }

    // checks if king will make check
    ir = [0,1,1,1,0,-1,-1,-1];
    ic = [1,1,0,-1,-1,-1,0,1];
    for (let i = 0;i < 8;i++) {
      if (r+ir[i] > 0 && r+ir[i] < 8 && c+ic[i] > 0 && c+ic[i] < 8) {
        if (n[r+ir[i]][c+ic[i]].id == `${opp[team]}k`) {
          return true;
        }
      }
    }

    return false;
  } // end of isCheck

  find_moves () {

    let ir = [];
    let ic = [];
    let b = board;
    let team = this.team;
    let r = this.r;
    let c = this.c;
    let moves = [];
    let piece = this.piece;
    let id = this.id;

    // finds moves for white pawns
    if(id == "wp") {
      if (r == 6 && b[r-2][c].team == "-") /* up 2 at start */ {
        moves.push([r-2,c]);
      }
      if (b[r-1][c].team == "-") /* up 1 */ {
        moves.push([r-1,c]);
      }
      if (b[r-1][c+1].team == opp[team]) /* capture piece up 1 right 1 */ {
        moves.push([r-1,c+1]);
      }
      if (b[r-1][c-1].team == opp[team]) /* capture piece up 1 right 1 */ {
        moves.push([r-1,c+1]);
      }
    }

    // finds moves for black pawns
    if(id == "bp") {
      if (r == 1 && b[r+2][c].team == "-") /* down 2 at start */ {
        moves.push([r+2,c]);
      }
      if (b[r+1][c].team == "-") /* down 1 */ {
        moves.push([r+1,c]);
      }
      if (b[r-1][c+1].team == opp[team]) /* capture piece down 1 right 1 */ {
        moves.push([r+1,c+1]);
      }
      if (b[r-1][c-1].team == opp[team]) /* capture piece down 1 right 1 */ {
        moves.push([r+1,c+1]);
      }
    }

    // finds moves for knights
    if (piece == "n") {
      ir = [1,2,2,1,-1,-2,-2,-1]; 
      ic = [2,1,-1,-2,-2,-1,1,2];
      for (let i = 0; i < 8;i++) {
        if (r+ir[i] > -1 && r+ir[i] < 8 && c+ic[i] > -1 && c+ic[i] < 8) {
          if (b[r+ir[i]][c+ic[i]].team != team) {
            moves.push([r+ir[i], c+ic[i]]);
          }
        }
      }
    }

    // finds moves for rooks an queen in rook directions
    if (piece == "r" || piece == "q") {
      if (r < 7) {
        for (let i = r+1;i < 8;i++) {
          if (b[i][c].team == team) {
            break;
          } else {
            moves.push([i,c]);
            if (b[i][c].team == opp[team]) {
              break;
            }
          }
        }
      }
      if (c < 7) {
        for (let i = c+1;i < 8;i++) {
          if (b[r][i].team == team) {
            break;
          } else {
            moves.push([r,i]);
            if (b[r][i].team == opp[team]) {
              break;
            }
          }
        }
      }
      if (r > 0) {
        for (let i = r-1;i > -1;i--) {
          if (b[i][c].team == team) {
            break;
          } else {
            moves.push([i,c]);
            if (b[i][c].team == opp[team]) {
              break;
            }
          }
        }
      }
      if (c > 0) {
        for (let i = c-1;i > -1;i--) {
          if (b[r][i].team == team) {
            break;
          } else {
            moves.push([r,i]);
            if (b[r][i].team == opp[team]) {
              break;
            }
          }
        }
      }
    }

    // finds move for bishops and queens in queen directions
    if (piece == "b" || piece == "q") {
      for (let i = 1;i < 8;i++) {
        if (r+i == 8 || c+i == 8) {
          break;
        }
        if (b[r+i][c+i].team == "-") {
          moves.push([r+i, c+i]);
        } else {
          if (b[r+i][c+i].team == team) /* down right */ {
            break;
          } else {
            moves.push([r+i, c+i]);
            break;
          }
        } 
      }
      for (let i = 1;i < 8;i++) {
        if (r+i == 8 || c-i == -1) {
          break;
        }
        if (b[r+i][c-i].team == "-") {
          moves.push([r+i, c-i]);
        } else {
          if (b[r+i][c-i].team == team) /* down left */ {
            break;
          } else {
            moves.push([r+i, c-i]);
            break;
          }
        } 
      }
      for (let i = 1;i < 8;i++) {
        if (r-i == -1 || c-i == -1) {
          break;
        }
        if (b[r-i][c-i].team == "-") {
          moves.push([r-i, c-i]);
        } else {
          if (b[r-i][c-i].team == team) /* up left */ {
            break;
          } else {
            moves.push([r-i, c-i]);
            break;
          }
        } 
      }
      for (let i = 1;i < 8;i++) {
        if (r-i == -1 || c+i == 8) {
          break;
        }
        if (b[r-i][c+i].team == "-") {
          moves.push([r-i, c+i]);
        } else {
          if (b[r-i][c+i].team == team) /* up right */ {
            break;
          } else {
            moves.push([r-i, c+i]);
            break;
          }
        } 
      }
    }

    // checks for moves king can make
    if (piece == "k") {
      ir = [0,1,1,1,0,-1,-1,-1];
      ic = [1,1,0,-1,-1,-1,0,1];
      for (let i = 0;i < 8;i++) {
        if (r+ir[i] > -1 && r+ir[i] < 8 && c+ic[i] > -1 && c+ic[i] < 8) {
          if (!(n[r+ir[i]][c+ic[i]].isCheck())) {
            moves.push([r+ir[i],c+ic[i]]);
          }
        }
      }
    }

    log_board();
    console.log(`id: ${id} | location: (${r},${c})`);
    console.log(moves);
    debug_board(moves);
    console.log("<-------------------------------------------------------------------------->");
    return moves;
  } // end of moves
}
var board = [
  // row 0
  [new Spot(0,0,"-="), new Spot(0,1,"-="), new Spot(0,2,"-="), new Spot(0,3,"-="),
   new Spot(0,4,"-="), new Spot(0,5,"-="), new Spot(0,6,"-="), new Spot(0,7,"-="),],
  // row 1
  [new Spot(1,0,"-="), new Spot(1,1,"-="), new Spot(1,2,"-="), new Spot(1,3,"-="),
   new Spot(1,4,"-="), new Spot(1,5,"-="), new Spot(1,6,"-="), new Spot(1,7,"-="),],
  // row 2
  [new Spot(2,0,"-="), new Spot(2,1,"-="), new Spot(2,2,"-="), new Spot(2,3,"-="),
   new Spot(2,4,"-="), new Spot(2,5,"-="), new Spot(2,6,"wr"), new Spot(2,7,"-="),],
  // row 3
  [new Spot(3,0,"-="), new Spot(3,1,"-="), new Spot(3,2,"-="), new Spot(3,3,"-="),
   new Spot(3,4,"bb"), new Spot(3,5,"-="), new Spot(3,6,"-="), new Spot(3,7,"-="),],
  // row 4
  [new Spot(4,0,"-="), new Spot(4,1,"-="), new Spot(4,2,"-="), new Spot(4,3,"-="),
   new Spot(4,4,"wn"), new Spot(4,5,"-="), new Spot(4,6,"-="), new Spot(4,7,"-="),],
  // row 5
  [new Spot(5,0,"-="), new Spot(5,1,"-="), new Spot(5,2,"-="), new Spot(5,3,"-="),
   new Spot(5,4,"-="), new Spot(5,5,"-="), new Spot(5,6,"-="), new Spot(5,7,"-="),],
  // row 6
  [new Spot(6,0,"-="), new Spot(6,1,"-="), new Spot(6,2,"br"), new Spot(6,3,"-="),
   new Spot(6,4,"-="), new Spot(6,5,"-="), new Spot(6,6,"wp"), new Spot(6,7,"-="),],
  // row 7
  [new Spot(7,0,"-="), new Spot(7,1,"-="), new Spot(7,2,"-="), new Spot(7,3,"-="),
   new Spot(7,4,"-="), new Spot(7,5,"-="), new Spot(7,6,"-="), new Spot(7,7,"-="),],
];

const opp = {
  "b" : "w",
  "w" : "b",
}

board[4][4].find_moves();
board[6][6].find_moves();
board[2][6].find_moves();
board[6][2].find_moves();
board[3][4].find_moves();
encode_board();

/*-------------------------------------- three js section ---------------------------------------*/

// firebase sdk setup
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCn6J8utFoEoPf2SHKcMXfb5DY6jbysXc",
  authDomain: "chess-3d-webapp.firebaseapp.com",
  databaseURL: "https://chess-3d-webapp-default-rtdb.firebaseio.com",
  projectId: "chess-3d-webapp",
  storageBucket: "chess-3d-webapp.appspot.com",
  messagingSenderId: "1073149571702",
  appId: "1:1073149571702:web:46b347a2bfbbe2d695e557",
  measurementId: "G-86L9THZL9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// threejs imports
import "./style.css"
import * as THREE from '/node_modules/three';
import { GLTFLoader } from "/node_modules/three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "/node_modules/three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const gltfLoader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

// starting camera position
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;
camera.position.y = 2;

// grid helper for development purposes ** remove when done **
const grid = new THREE.GridHelper(100,10);
scene.add(grid);

// orbit controls
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// axes helper 
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

// ambient scene light
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight);

// background 
const background_texture = new THREE.TextureLoader().load("white_background.jpeg");
scene.background = background_texture;

// chess board
gltfLoader.load("/chess_board/scene.gltf", function(gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(0,0,0)
}, undefined, function(error) {
  console.error(error);
});

// main loop
function animate() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);