import {ResourceLoader} from './js/base/ResourceLoader.js'
import {Background} from "./js/runtime/Background.js"
import {DataStore} from "./js/base/DataStore.js";
import {Director} from "./js/Director.js";
import {Land} from "./js/runtime/Land.js";

export class Main {
  constructor() {
    this.canvas = document.getElementById("game_canvas")
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance()
    this.director = Director.getInstance()
    const loader = ResourceLoader.create()
    loader.onLoaded(map => this.onResourceFirstLoaded(map))
  }

  onResourceFirstLoaded(map) {
    this.dataStore.ctx = this.ctx
    this.dataStore.res = map
    this.init()
  }


  init() {
    this.dataStore
      .put('pencils', [])
      .put('background', Background)
      .put('land', Land)
    this.director.createPencil()
    this.director.run()
  }
}