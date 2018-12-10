// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"projects/webvr-demo/hologram/hologram.modules.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (modules) {
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      exports: {},
      id: moduleId,
      loaded: !1
    };
    return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), module.loaded = !0, module.exports;
  }

  var installedModules = {};
  return __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.p = "", __webpack_require__(0);
}([function (module, exports, __webpack_require__) {
  !function () {
    return __webpack_require__(1), Hologram.registerModule("Particles", __webpack_require__(2).Particles), Entity.define("particles", Hologram._entityAttribute("particles", "particle-system", null));
  }();
}, function (module, exports) {
  !function (t) {
    function e(r) {
      if (i[r]) return i[r].exports;
      var a = i[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      return t[r].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports;
    }

    var i = {};
    return e.m = t, e.c = i, e.p = "", e(0);
  }([function (t, e, i) {
    var r = i(1);
    if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
    AFRAME.registerComponent("particle-system", {
      schema: {
        preset: {
          type: "string",
          default: "",
          oneOf: ["default", "dust", "snow", "rain"]
        },
        maxAge: {
          type: "number"
        },
        positionSpread: {
          type: "vec3"
        },
        type: {
          type: "number"
        },
        rotationAxis: {
          type: "string"
        },
        rotationAngle: {
          type: "number"
        },
        accelerationValue: {
          type: "vec3"
        },
        accelerationSpread: {
          type: "vec3"
        },
        velocityValue: {
          type: "vec3"
        },
        velocitySpread: {
          type: "vec3"
        },
        color: {
          type: "array"
        },
        size: {
          type: "number"
        },
        direction: {
          type: "number"
        },
        duration: {
          type: "number"
        },
        particleCount: {
          type: "number"
        },
        texture: {
          type: "asset"
        },
        randomize: {
          type: "boolean"
        },
        opacity: {
          type: "number"
        },
        maxParticleCount: {
          type: "number",
          default: 25e4
        },
        blending: {
          type: "number",
          default: THREE.AdditiveBlending,
          oneOf: [THREE.NoBlending, THREE.NormalBlending, THREE.AdditiveBlending, THREE.SubtractiveBlending, THREE.MultiplyBlending]
        }
      },
      init: function init() {
        this.presets = [], this.presets.default = {
          maxAge: 0 !== this.data.maxAge ? this.data.maxAge : 6,
          positionSpread: 0 !== this.data.positionSpread.x || 0 !== this.data.positionSpread.y || 0 !== this.data.positionSpread.z ? this.data.positionSpread : {
            x: 0,
            y: 0,
            z: 0
          },
          type: 0 !== this.data.type ? this.data.type : r.distributions.BOX,
          rotationAxis: "" !== this.data.rotationAxis ? this.data.rotationAxis : "x",
          rotationAngle: 0 !== this.data.rotationAngle ? this.data.rotationAngle : 0,
          accelerationValue: 0 !== this.data.accelerationValue.x || 0 !== this.data.accelerationValue.y || 0 !== this.data.accelerationValue.z ? this.data.accelerationValue : {
            x: 0,
            y: -10,
            z: 0
          },
          accelerationSpread: 0 !== this.data.accelerationSpread.x || 0 !== this.data.accelerationSpread.y || 0 !== this.data.accelerationSpread.z ? this.data.accelerationSpread : {
            x: 10,
            y: 0,
            z: 10
          },
          velocityValue: 0 !== this.data.velocityValue.x || 0 !== this.data.velocityValue.y || 0 !== this.data.velocityValue.z ? this.data.velocityValue : {
            x: 0,
            y: 25,
            z: 0
          },
          velocitySpread: 0 !== this.data.velocitySpread.x || 0 !== this.data.velocitySpread.y || 0 !== this.data.velocitySpread.z ? this.data.velocitySpread : {
            x: 10,
            y: 7.5,
            z: 10
          },
          color: this.data.color.length ? this.data.color : ["#0000FF", "#FF0000"],
          size: 0 !== this.data.size ? this.data.size : 1,
          opacity: {
            value: 0 != this.data.opacity ? this.data.opacity : 1
          },
          direction: 0 !== this.data.direction ? this.data.direction : 1,
          duration: 0 != this.data.duration ? this.data.duration : null,
          particleCount: 0 !== this.data.particleCount ? this.data.particleCount : 1e3,
          texture: "" !== this.data.texture ? this.data.texture : "https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/star2.png",
          randomize: !1
        }, this.presets.dust = {
          maxAge: 0 !== this.data.maxAge ? this.data.maxAge : 20,
          positionSpread: 0 !== this.data.positionSpread.x || 0 !== this.data.positionSpread.y || 0 !== this.data.positionSpread.z ? this.data.positionSpread : {
            x: 100,
            y: 100,
            z: 100
          },
          type: 0 !== this.data.type ? this.data.type : r.distributions.BOX,
          rotationAxis: "" !== this.data.rotationAxis ? this.data.rotationAxis : "x",
          rotationAngle: 0 !== this.data.rotationAngle ? this.data.rotationAngle : 3.14,
          accelerationValue: 0 !== this.data.accelerationValue.x || 0 !== this.data.accelerationValue.y || 0 !== this.data.accelerationValue.z ? this.data.accelerationValue : {
            x: 0,
            y: 0,
            z: 0
          },
          accelerationSpread: 0 !== this.data.accelerationSpread.x || 0 !== this.data.accelerationSpread.y || 0 !== this.data.accelerationSpread.z ? this.data.accelerationSpread : {
            x: 0,
            y: 0,
            z: 0
          },
          velocityValue: 0 !== this.data.velocityValue.x || 0 !== this.data.velocityValue.y || 0 !== this.data.velocityValue.z ? this.data.velocityValue : {
            x: 1,
            y: .3,
            z: 1
          },
          velocitySpread: 0 !== this.data.velocitySpread.x || 0 !== this.data.velocitySpread.y || 0 !== this.data.velocitySpread.z ? this.data.velocitySpread : {
            x: .5,
            y: 1,
            z: .5
          },
          color: this.data.color.length ? this.data.color : ["#FFFFFF"],
          size: 0 !== this.data.size ? this.data.size : 1,
          opacity: {
            value: 0 != this.data.opacity ? this.data.opacity : 1
          },
          direction: 0 !== this.data.direction ? this.data.direction : 1,
          duration: 0 != this.data.duration ? this.data.duration : null,
          particleCount: 0 !== this.data.particleCount ? this.data.particleCount : 100,
          texture: "" !== this.data.texture ? this.data.texture : "https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/smokeparticle.png",
          randomize: !1
        }, this.presets.snow = {
          maxAge: 0 !== this.data.maxAge ? this.data.maxAge : 20,
          positionSpread: 0 !== this.data.positionSpread.x || 0 !== this.data.positionSpread.y || 0 !== this.data.positionSpread.z ? this.data.positionSpread : {
            x: 100,
            y: 100,
            z: 100
          },
          type: 0 !== this.data.type ? this.data.type : r.distributions.BOX,
          rotationAxis: "" !== this.data.rotationAxis ? this.data.rotationAxis : "x",
          rotationAngle: 0 !== this.data.rotationAngle ? this.data.rotationAngle : 3.14,
          accelerationValue: 0 !== this.data.accelerationValue.x || 0 !== this.data.accelerationValue.y || 0 !== this.data.accelerationValue.z ? this.data.accelerationValue : {
            x: 0,
            y: 0,
            z: 0
          },
          accelerationSpread: 0 !== this.data.accelerationSpread.x || 0 !== this.data.accelerationSpread.y || 0 !== this.data.accelerationSpread.z ? this.data.accelerationSpread : {
            x: .2,
            y: 0,
            z: .2
          },
          velocityValue: 0 !== this.data.velocityValue.x || 0 !== this.data.velocityValue.y || 0 !== this.data.velocityValue.z ? this.data.velocityValue : {
            x: 0,
            y: 8,
            z: 0
          },
          velocitySpread: 0 !== this.data.velocitySpread.x || 0 !== this.data.velocitySpread.y || 0 !== this.data.velocitySpread.z ? this.data.velocitySpread : {
            x: 2,
            y: 0,
            z: 2
          },
          color: this.data.color.length ? this.data.color : ["#FFFFFF"],
          size: 0 !== this.data.size ? this.data.size : 1,
          opacity: {
            value: 0 != this.data.opacity ? this.data.opacity : 1
          },
          direction: 0 !== this.data.direction ? this.data.direction : 1,
          duration: 0 != this.data.duration ? this.data.duration : null,
          particleCount: 0 !== this.data.particleCount ? this.data.particleCount : 200,
          texture: "" !== this.data.texture ? this.data.texture : "https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/smokeparticle.png",
          randomize: !1
        }, this.presets.rain = {
          maxAge: 0 !== this.data.maxAge ? this.data.maxAge : 1,
          positionSpread: 0 !== this.data.positionSpread.x || 0 !== this.data.positionSpread.y || 0 !== this.data.positionSpread.z ? this.data.positionSpread : {
            x: 100,
            y: 100,
            z: 100
          },
          type: 0 !== this.data.type ? this.data.type : r.distributions.BOX,
          rotationAxis: "" !== this.data.rotationAxis ? this.data.rotationAxis : "x",
          rotationAngle: 0 !== this.data.rotationAngle ? this.data.rotationAngle : 3.14,
          accelerationValue: 0 !== this.data.accelerationValue.x || 0 !== this.data.accelerationValue.y || 0 !== this.data.accelerationValue.z ? this.data.accelerationValue : {
            x: 0,
            y: 3,
            z: 0
          },
          accelerationSpread: 0 !== this.data.accelerationSpread.x || 0 !== this.data.accelerationSpread.y || 0 !== this.data.accelerationSpread.z ? this.data.accelerationSpread : {
            x: 2,
            y: 1,
            z: 2
          },
          velocityValue: 0 !== this.data.velocityValue.x || 0 !== this.data.velocityValue.y || 0 !== this.data.velocityValue.z ? this.data.velocityValue : {
            x: 0,
            y: 75,
            z: 0
          },
          velocitySpread: 0 !== this.data.velocitySpread.x || 0 !== this.data.velocitySpread.y || 0 !== this.data.velocitySpread.z ? this.data.velocitySpread : {
            x: 10,
            y: 50,
            z: 10
          },
          color: this.data.color.length ? this.data.color : ["#FFFFFF"],
          size: 0 !== this.data.size ? this.data.size : .4,
          opacity: {
            value: 0 != this.data.opacity ? this.data.opacity : 1
          },
          direction: 0 !== this.data.direction ? this.data.direction : 1,
          duration: 0 != this.data.duration ? this.data.duration : null,
          particleCount: 0 !== this.data.particleCount ? this.data.particleCount : 1e3,
          texture: "" !== this.data.texture ? this.data.texture : "https://cdn.rawgit.com/IdeaSpaceVR/aframe-particle-system-component/master/dist/images/raindrop.png",
          randomize: !1
        };
      },
      update: function update(t) {
        this.particleGroup && this.el.removeObject3D("particle-system"), "" != this.data.preset && this.data.preset in this.presets ? this.initParticleSystem(this.presets[this.data.preset]) : this.initParticleSystem(this.presets.default);
      },
      tick: function tick(t, e) {
        this.particleGroup.tick(e / 1e3);
      },
      remove: function remove() {
        this.particleGroup && this.el.removeObject3D("particle-system");
      },
      initParticleSystem: function initParticleSystem(t) {
        var e = new THREE.TextureLoader(),
            i = e.load(t.texture, function (t) {
          return t;
        }, function (t) {
          console.log(t.loaded / t.total * 100 + "% loaded");
        }, function (t) {
          console.log("An error occurred");
        });
        this.particleGroup = new r.Group({
          texture: {
            value: i
          },
          maxParticleCount: this.data.maxParticleCount,
          blending: this.data.blending
        });
        var a = new r.Emitter({
          maxAge: {
            value: t.maxAge
          },
          type: {
            value: t.type
          },
          position: {
            value: this.el.object3D.position,
            spread: new THREE.Vector3(t.positionSpread.x, t.positionSpread.y, t.positionSpread.z),
            randomize: t.randomize
          },
          rotation: {
            axis: "x" == t.rotationAxis ? new THREE.Vector3(1, 0, 0) : "y" == t.rotationAxis ? new THREE.Vector3(0, 1, 0) : "z" == t.rotationAxis ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(0, 1, 0),
            angle: t.rotationAngle,
            static: !0
          },
          acceleration: {
            value: new THREE.Vector3(t.accelerationValue.x, t.accelerationValue.y, t.accelerationValue.z),
            spread: new THREE.Vector3(t.accelerationSpread.x, t.accelerationSpread.y, t.accelerationSpread.z)
          },
          velocity: {
            value: new THREE.Vector3(t.velocityValue.x, t.velocityValue.y, t.velocityValue.z),
            spread: new THREE.Vector3(t.velocitySpread.x, t.velocitySpread.y, t.velocitySpread.z)
          },
          color: {
            value: t.color.map(function (t) {
              return new THREE.Color(t);
            })
          },
          size: {
            value: t.size
          },
          direction: {
            value: t.direction
          },
          duration: t.duration,
          opacity: t.opacity,
          particleCount: t.particleCount
        });
        this.particleGroup.addEmitter(a), this.particleGroup.mesh.frustumCulled = !1, this.el.setObject3D("particle-system", this.particleGroup.mesh);
      }
    });
  }, function (t, e, i) {
    var r,
        a,
        o = {
      distributions: {
        BOX: 1,
        SPHERE: 2,
        DISC: 3
      },
      valueOverLifetimeLength: 4
    };
    r = o, a = "function" == typeof r ? r.call(e, i, e, t) : r, !(void 0 !== a && (t.exports = a)), o.TypedArrayHelper = function (t, e, i, r) {
      "use strict";

      this.componentSize = i || 1, this.size = e || 1, this.TypedArrayConstructor = t || Float32Array, this.array = new t(e * this.componentSize), this.indexOffset = r || 0;
    }, o.TypedArrayHelper.constructor = o.TypedArrayHelper, o.TypedArrayHelper.prototype.setSize = function (t, e) {
      "use strict";

      var i = this.array.length;
      return e || (t *= this.componentSize), i > t ? this.shrink(t) : t > i ? this.grow(t) : void console.info("TypedArray is already of size:", t + ".", "Will not resize.");
    }, o.TypedArrayHelper.prototype.shrink = function (t) {
      "use strict";

      return this.array = this.array.subarray(0, t), this.size = t, this;
    }, o.TypedArrayHelper.prototype.grow = function (t) {
      "use strict";

      var e = this.array,
          i = new this.TypedArrayConstructor(t);
      return i.set(e), this.array = i, this.size = t, this;
    }, o.TypedArrayHelper.prototype.splice = function (t, e) {
      "use strict";

      t *= this.componentSize, e *= this.componentSize;

      for (var i = [], r = this.array, a = r.length, o = 0; a > o; ++o) {
        (t > o || o >= e) && i.push(r[o]);
      }

      return this.setFromArray(0, i), this;
    }, o.TypedArrayHelper.prototype.setFromArray = function (t, e) {
      "use strict";

      var i = e.length,
          r = t + i;
      return r > this.array.length ? this.grow(r) : r < this.array.length && this.shrink(r), this.array.set(e, this.indexOffset + t), this;
    }, o.TypedArrayHelper.prototype.setVec2 = function (t, e) {
      "use strict";

      return this.setVec2Components(t, e.x, e.y);
    }, o.TypedArrayHelper.prototype.setVec2Components = function (t, e, i) {
      "use strict";

      var r = this.array,
          a = this.indexOffset + t * this.componentSize;
      return r[a] = e, r[a + 1] = i, this;
    }, o.TypedArrayHelper.prototype.setVec3 = function (t, e) {
      "use strict";

      return this.setVec3Components(t, e.x, e.y, e.z);
    }, o.TypedArrayHelper.prototype.setVec3Components = function (t, e, i, r) {
      "use strict";

      var a = this.array,
          o = this.indexOffset + t * this.componentSize;
      return a[o] = e, a[o + 1] = i, a[o + 2] = r, this;
    }, o.TypedArrayHelper.prototype.setVec4 = function (t, e) {
      "use strict";

      return this.setVec4Components(t, e.x, e.y, e.z, e.w);
    }, o.TypedArrayHelper.prototype.setVec4Components = function (t, e, i, r, a) {
      "use strict";

      var o = this.array,
          s = this.indexOffset + t * this.componentSize;
      return o[s] = e, o[s + 1] = i, o[s + 2] = r, o[s + 3] = a, this;
    }, o.TypedArrayHelper.prototype.setMat3 = function (t, e) {
      "use strict";

      return this.setFromArray(this.indexOffset + t * this.componentSize, e.elements);
    }, o.TypedArrayHelper.prototype.setMat4 = function (t, e) {
      "use strict";

      return this.setFromArray(this.indexOffset + t * this.componentSize, e.elements);
    }, o.TypedArrayHelper.prototype.setColor = function (t, e) {
      "use strict";

      return this.setVec3Components(t, e.r, e.g, e.b);
    }, o.TypedArrayHelper.prototype.setNumber = function (t, e) {
      "use strict";

      return this.array[this.indexOffset + t * this.componentSize] = e, this;
    }, o.TypedArrayHelper.prototype.getValueAtIndex = function (t) {
      "use strict";

      return this.array[this.indexOffset + t];
    }, o.TypedArrayHelper.prototype.getComponentValueAtIndex = function (t) {
      "use strict";

      return this.array.subarray(this.indexOffset + t * this.componentSize);
    }, o.ShaderAttribute = function (t, e, i) {
      "use strict";

      var r = o.ShaderAttribute.typeSizeMap;
      this.type = "string" == typeof t && r.hasOwnProperty(t) ? t : "f", this.componentSize = r[this.type], this.arrayType = i || Float32Array, this.typedArray = null, this.bufferAttribute = null, this.dynamicBuffer = !!e, this.updateMin = 0, this.updateMax = 0;
    }, o.ShaderAttribute.constructor = o.ShaderAttribute, o.ShaderAttribute.typeSizeMap = {
      f: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      c: 3,
      m3: 9,
      m4: 16
    }, o.ShaderAttribute.prototype.setUpdateRange = function (t, e) {
      "use strict";

      this.updateMin = Math.min(t * this.componentSize, this.updateMin * this.componentSize), this.updateMax = Math.max(e * this.componentSize, this.updateMax * this.componentSize);
    }, o.ShaderAttribute.prototype.flagUpdate = function () {
      "use strict";

      var t = this.bufferAttribute,
          e = t.updateRange;
      e.offset = this.updateMin, e.count = Math.min(this.updateMax - this.updateMin + this.componentSize, this.typedArray.array.length), t.needsUpdate = !0;
    }, o.ShaderAttribute.prototype.resetUpdateRange = function () {
      "use strict";

      this.updateMin = 0, this.updateMax = 0;
    }, o.ShaderAttribute.prototype.resetDynamic = function () {
      "use strict";

      this.bufferAttribute.dynamic = this.dynamicBuffer;
    }, o.ShaderAttribute.prototype.splice = function (t, e) {
      "use strict";

      this.typedArray.splice(t, e), this.forceUpdateAll();
    }, o.ShaderAttribute.prototype.forceUpdateAll = function () {
      "use strict";

      this.bufferAttribute.array = this.typedArray.array, this.bufferAttribute.updateRange.offset = 0, this.bufferAttribute.updateRange.count = -1, this.bufferAttribute.dynamic = !1, this.bufferAttribute.needsUpdate = !0;
    }, o.ShaderAttribute.prototype._ensureTypedArray = function (t) {
      "use strict";

      null !== this.typedArray && this.typedArray.size === t * this.componentSize || (null !== this.typedArray && this.typedArray.size !== t ? this.typedArray.setSize(t) : null === this.typedArray && (this.typedArray = new o.TypedArrayHelper(this.arrayType, t, this.componentSize)));
    }, o.ShaderAttribute.prototype._createBufferAttribute = function (t) {
      "use strict";

      return this._ensureTypedArray(t), null !== this.bufferAttribute ? (this.bufferAttribute.array = this.typedArray.array, void (this.bufferAttribute.needsUpdate = !0)) : (this.bufferAttribute = new THREE.BufferAttribute(this.typedArray.array, this.componentSize), void (this.bufferAttribute.dynamic = this.dynamicBuffer));
    }, o.ShaderAttribute.prototype.getLength = function () {
      "use strict";

      return null === this.typedArray ? 0 : this.typedArray.array.length;
    }, o.shaderChunks = {
      defines: ["#define PACKED_COLOR_SIZE 256.0", "#define PACKED_COLOR_DIVISOR 255.0"].join("\n"),
      uniforms: ["uniform float deltaTime;", "uniform float runTime;", "uniform sampler2D texture;", "uniform vec4 textureAnimation;", "uniform float scale;"].join("\n"),
      attributes: ["attribute vec4 acceleration;", "attribute vec3 velocity;", "attribute vec4 rotation;", "attribute vec3 rotationCenter;", "attribute vec4 params;", "attribute vec4 size;", "attribute vec4 angle;", "attribute vec4 color;", "attribute vec4 opacity;"].join("\n"),
      varyings: ["varying vec4 vColor;", "#ifdef SHOULD_ROTATE_TEXTURE", "    varying float vAngle;", "#endif", "#ifdef SHOULD_CALCULATE_SPRITE", "    varying vec4 vSpriteSheet;", "#endif"].join("\n"),
      branchAvoidanceFunctions: ["float when_gt(float x, float y) {", "    return max(sign(x - y), 0.0);", "}", "float when_lt(float x, float y) {", "    return min( max(1.0 - sign(x - y), 0.0), 1.0 );", "}", "float when_eq( float x, float y ) {", "    return 1.0 - abs( sign( x - y ) );", "}", "float when_ge(float x, float y) {", "  return 1.0 - when_lt(x, y);", "}", "float when_le(float x, float y) {", "  return 1.0 - when_gt(x, y);", "}", "float and(float a, float b) {", "    return a * b;", "}", "float or(float a, float b) {", "    return min(a + b, 1.0);", "}"].join("\n"),
      unpackColor: ["vec3 unpackColor( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   return c;", "}"].join("\n"),
      unpackRotationAxis: ["vec3 unpackRotationAxis( in float hex ) {", "   vec3 c = vec3( 0.0 );", "   float r = mod( (hex / PACKED_COLOR_SIZE / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float g = mod( (hex / PACKED_COLOR_SIZE), PACKED_COLOR_SIZE );", "   float b = mod( hex, PACKED_COLOR_SIZE );", "   c.r = r / PACKED_COLOR_DIVISOR;", "   c.g = g / PACKED_COLOR_DIVISOR;", "   c.b = b / PACKED_COLOR_DIVISOR;", "   c *= vec3( 2.0 );", "   c -= vec3( 1.0 );", "   return c;", "}"].join("\n"),
      floatOverLifetime: ["float getFloatOverLifetime( in float positionInTime, in vec4 attr ) {", "    highp float value = 0.0;", "    float deltaAge = positionInTime * float( VALUE_OVER_LIFETIME_LENGTH - 1 );", "    float fIndex = 0.0;", "    float shouldApplyValue = 0.0;", "    value += attr[ 0 ] * when_eq( deltaAge, 0.0 );", "", "    for( int i = 0; i < VALUE_OVER_LIFETIME_LENGTH - 1; ++i ) {", "       fIndex = float( i );", "       shouldApplyValue = and( when_gt( deltaAge, fIndex ), when_le( deltaAge, fIndex + 1.0 ) );", "       value += shouldApplyValue * mix( attr[ i ], attr[ i + 1 ], deltaAge - fIndex );", "    }", "", "    return value;", "}"].join("\n"),
      colorOverLifetime: ["vec3 getColorOverLifetime( in float positionInTime, in vec3 color1, in vec3 color2, in vec3 color3, in vec3 color4 ) {", "    vec3 value = vec3( 0.0 );", "    value.x = getFloatOverLifetime( positionInTime, vec4( color1.x, color2.x, color3.x, color4.x ) );", "    value.y = getFloatOverLifetime( positionInTime, vec4( color1.y, color2.y, color3.y, color4.y ) );", "    value.z = getFloatOverLifetime( positionInTime, vec4( color1.z, color2.z, color3.z, color4.z ) );", "    return value;", "}"].join("\n"),
      paramFetchingFunctions: ["float getAlive() {", "   return params.x;", "}", "float getAge() {", "   return params.y;", "}", "float getMaxAge() {", "   return params.z;", "}", "float getWiggle() {", "   return params.w;", "}"].join("\n"),
      forceFetchingFunctions: ["vec4 getPosition( in float age ) {", "   return modelViewMatrix * vec4( position, 1.0 );", "}", "vec3 getVelocity( in float age ) {", "   return velocity * age;", "}", "vec3 getAcceleration( in float age ) {", "   return acceleration.xyz * age;", "}"].join("\n"),
      rotationFunctions: ["#ifdef SHOULD_ROTATE_PARTICLES", "   mat4 getRotationMatrix( in vec3 axis, in float angle) {", "       axis = normalize(axis);", "       float s = sin(angle);", "       float c = cos(angle);", "       float oc = 1.0 - c;", "", "       return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,", "                   oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,", "                   oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,", "                   0.0,                                0.0,                                0.0,                                1.0);", "   }", "", "   vec3 getRotation( in vec3 pos, in float positionInTime ) {", "      if( rotation.y == 0.0 ) {", "           return pos;", "      }", "", "      vec3 axis = unpackRotationAxis( rotation.x );", "      vec3 center = rotationCenter;", "      vec3 translated;", "      mat4 rotationMatrix;", "      float angle = 0.0;", "      angle += when_eq( rotation.z, 0.0 ) * rotation.y;", "      angle += when_gt( rotation.z, 0.0 ) * mix( 0.0, rotation.y, positionInTime );", "      translated = rotationCenter - pos;", "      rotationMatrix = getRotationMatrix( axis, angle );", "      return center - vec3( rotationMatrix * vec4( translated, 0.0 ) );", "   }", "#endif"].join("\n"),
      rotateTexture: ["    vec2 vUv = vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y );", "", "    #ifdef SHOULD_ROTATE_TEXTURE", "       float x = gl_PointCoord.x - 0.5;", "       float y = 1.0 - gl_PointCoord.y - 0.5;", "       float c = cos( -vAngle );", "       float s = sin( -vAngle );", "       vUv = vec2( c * x + s * y + 0.5, c * y - s * x + 0.5 );", "    #endif", "", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = vSpriteSheet.x;", "        float framesY = vSpriteSheet.y;", "        float columnNorm = vSpriteSheet.z;", "        float rowNorm = vSpriteSheet.w;", "        vUv.x = gl_PointCoord.x * framesX + columnNorm;", "        vUv.y = 1.0 - (gl_PointCoord.y * framesY + rowNorm);", "    #endif", "", "    vec4 rotatedTexture = texture2D( texture, vUv );"].join("\n")
    }, o.shaders = {
      vertex: [o.shaderChunks.defines, o.shaderChunks.uniforms, o.shaderChunks.attributes, o.shaderChunks.varyings, THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, o.shaderChunks.branchAvoidanceFunctions, o.shaderChunks.unpackColor, o.shaderChunks.unpackRotationAxis, o.shaderChunks.floatOverLifetime, o.shaderChunks.colorOverLifetime, o.shaderChunks.paramFetchingFunctions, o.shaderChunks.forceFetchingFunctions, o.shaderChunks.rotationFunctions, "void main() {", "    highp float age = getAge();", "    highp float alive = getAlive();", "    highp float maxAge = getMaxAge();", "    highp float positionInTime = (age / maxAge);", "    highp float isAlive = when_gt( alive, 0.0 );", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        float wiggleAmount = positionInTime * getWiggle();", "        float wiggleSin = isAlive * sin( wiggleAmount );", "        float wiggleCos = isAlive * cos( wiggleAmount );", "    #endif", "    vec3 vel = getVelocity( age );", "    vec3 accel = getAcceleration( age );", "    vec3 force = vec3( 0.0 );", "    vec3 pos = vec3( position );", "    float drag = 1.0 - (positionInTime * 0.5) * acceleration.w;", "    force += vel;", "    force *= drag;", "    force += accel * age;", "    pos += force;", "    #ifdef SHOULD_WIGGLE_PARTICLES", "        pos.x += wiggleSin;", "        pos.y += wiggleCos;", "        pos.z += wiggleSin;", "    #endif", "    #ifdef SHOULD_ROTATE_PARTICLES", "        pos = getRotation( pos, positionInTime );", "    #endif", "    vec4 mvPos = modelViewMatrix * vec4( pos, 1.0 );", "    highp float pointSize = getFloatOverLifetime( positionInTime, size ) * isAlive;", "    #ifdef HAS_PERSPECTIVE", "        float perspective = scale / length( mvPos.xyz );", "    #else", "        float perspective = 1.0;", "    #endif", "    float pointSizePerspective = pointSize * perspective;", "    #ifdef COLORIZE", "       vec3 c = isAlive * getColorOverLifetime(", "           positionInTime,", "           unpackColor( color.x ),", "           unpackColor( color.y ),", "           unpackColor( color.z ),", "           unpackColor( color.w )", "       );", "    #else", "       vec3 c = vec3(1.0);", "    #endif", "    float o = isAlive * getFloatOverLifetime( positionInTime, opacity );", "    vColor = vec4( c, o );", "    #ifdef SHOULD_ROTATE_TEXTURE", "        vAngle = isAlive * getFloatOverLifetime( positionInTime, angle );", "    #endif", "    #ifdef SHOULD_CALCULATE_SPRITE", "        float framesX = textureAnimation.x;", "        float framesY = textureAnimation.y;", "        float loopCount = textureAnimation.w;", "        float totalFrames = textureAnimation.z;", "        float frameNumber = mod( (positionInTime * loopCount) * totalFrames, totalFrames );", "        float column = floor(mod( frameNumber, framesX ));", "        float row = floor( (frameNumber - column) / framesX );", "        float columnNorm = column / framesX;", "        float rowNorm = row / framesY;", "        vSpriteSheet.x = 1.0 / framesX;", "        vSpriteSheet.y = 1.0 / framesY;", "        vSpriteSheet.z = columnNorm;", "        vSpriteSheet.w = rowNorm;", "    #endif", "    gl_PointSize = pointSizePerspective;", "    gl_Position = projectionMatrix * mvPos;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
      fragment: [o.shaderChunks.uniforms, THREE.ShaderChunk.common, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, o.shaderChunks.varyings, o.shaderChunks.branchAvoidanceFunctions, "void main() {", "    vec3 outgoingLight = vColor.xyz;", "    ", "    #ifdef ALPHATEST", "       if ( vColor.w < float(ALPHATEST) ) discard;", "    #endif", o.shaderChunks.rotateTexture, THREE.ShaderChunk.logdepthbuf_fragment, "    outgoingLight = vColor.xyz * rotatedTexture.xyz;", THREE.ShaderChunk.fog_fragment, "    gl_FragColor = vec4( outgoingLight.xyz, rotatedTexture.w * vColor.w );", "}"].join("\n")
    }, o.utils = {
      types: {
        BOOLEAN: "boolean",
        STRING: "string",
        NUMBER: "number",
        OBJECT: "object"
      },
      ensureTypedArg: function ensureTypedArg(t, e, i) {
        "use strict";

        return _typeof(t) === e ? t : i;
      },
      ensureArrayTypedArg: function ensureArrayTypedArg(t, e, i) {
        "use strict";

        if (Array.isArray(t)) {
          for (var r = t.length - 1; r >= 0; --r) {
            if (_typeof(t[r]) !== e) return i;
          }

          return t;
        }

        return this.ensureTypedArg(t, e, i);
      },
      ensureInstanceOf: function ensureInstanceOf(t, e, i) {
        "use strict";

        return void 0 !== e && t instanceof e ? t : i;
      },
      ensureArrayInstanceOf: function ensureArrayInstanceOf(t, e, i) {
        "use strict";

        if (Array.isArray(t)) {
          for (var r = t.length - 1; r >= 0; --r) {
            if (void 0 !== e && t[r] instanceof e == 0) return i;
          }

          return t;
        }

        return this.ensureInstanceOf(t, e, i);
      },
      ensureValueOverLifetimeCompliance: function ensureValueOverLifetimeCompliance(t, e, i) {
        "use strict";

        e = e || 3, i = i || 3, Array.isArray(t._value) === !1 && (t._value = [t._value]), Array.isArray(t._spread) === !1 && (t._spread = [t._spread]);
        var r = this.clamp(t._value.length, e, i),
            a = this.clamp(t._spread.length, e, i),
            o = Math.max(r, a);
        t._value.length !== o && (t._value = this.interpolateArray(t._value, o)), t._spread.length !== o && (t._spread = this.interpolateArray(t._spread, o));
      },
      interpolateArray: function interpolateArray(t, e) {
        "use strict";

        for (var i = t.length, r = ["function" == typeof t[0].clone ? t[0].clone() : t[0]], a = (i - 1) / (e - 1), o = 1; e - 1 > o; ++o) {
          var s = o * a,
              n = Math.floor(s),
              u = Math.ceil(s),
              l = s - n;
          r[o] = this.lerpTypeAgnostic(t[n], t[u], l);
        }

        return r.push("function" == typeof t[i - 1].clone ? t[i - 1].clone() : t[i - 1]), r;
      },
      clamp: function clamp(t, e, i) {
        "use strict";

        return Math.max(e, Math.min(t, i));
      },
      zeroToEpsilon: function zeroToEpsilon(t, e) {
        "use strict";

        var i = 1e-5,
            r = t;
        return r = e ? Math.random() * i * 10 : i, 0 > t && t > -i && (r = -r), r;
      },
      lerpTypeAgnostic: function lerpTypeAgnostic(t, e, i) {
        "use strict";

        var r,
            a = this.types;
        return _typeof(t) === a.NUMBER && _typeof(e) === a.NUMBER ? t + (e - t) * i : t instanceof THREE.Vector2 && e instanceof THREE.Vector2 ? (r = t.clone(), r.x = this.lerp(t.x, e.x, i), r.y = this.lerp(t.y, e.y, i), r) : t instanceof THREE.Vector3 && e instanceof THREE.Vector3 ? (r = t.clone(), r.x = this.lerp(t.x, e.x, i), r.y = this.lerp(t.y, e.y, i), r.z = this.lerp(t.z, e.z, i), r) : t instanceof THREE.Vector4 && e instanceof THREE.Vector4 ? (r = t.clone(), r.x = this.lerp(t.x, e.x, i), r.y = this.lerp(t.y, e.y, i), r.z = this.lerp(t.z, e.z, i), r.w = this.lerp(t.w, e.w, i), r) : t instanceof THREE.Color && e instanceof THREE.Color ? (r = t.clone(), r.r = this.lerp(t.r, e.r, i), r.g = this.lerp(t.g, e.g, i), r.b = this.lerp(t.b, e.b, i), r) : void console.warn("Invalid argument types, or argument types do not match:", t, e);
      },
      lerp: function lerp(t, e, i) {
        "use strict";

        return t + (e - t) * i;
      },
      roundToNearestMultiple: function roundToNearestMultiple(t, e) {
        "use strict";

        var i = 0;
        return 0 === e ? t : (i = Math.abs(t) % e, 0 === i ? t : 0 > t ? -(Math.abs(t) - i) : t + e - i);
      },
      arrayValuesAreEqual: function arrayValuesAreEqual(t) {
        "use strict";

        for (var e = 0; e < t.length - 1; ++e) {
          if (t[e] !== t[e + 1]) return !1;
        }

        return !0;
      },
      randomFloat: function randomFloat(t, e) {
        "use strict";

        return t + e * (Math.random() - .5);
      },
      randomVector3: function randomVector3(t, e, i, r, a) {
        "use strict";

        var o = i.x + (Math.random() * r.x - .5 * r.x),
            s = i.y + (Math.random() * r.y - .5 * r.y),
            n = i.z + (Math.random() * r.z - .5 * r.z);
        a && (o = .5 * -a.x + this.roundToNearestMultiple(o, a.x), s = .5 * -a.y + this.roundToNearestMultiple(s, a.y), n = .5 * -a.z + this.roundToNearestMultiple(n, a.z)), t.typedArray.setVec3Components(e, o, s, n);
      },
      randomColor: function randomColor(t, e, i, r) {
        "use strict";

        var a = i.r + Math.random() * r.x,
            o = i.g + Math.random() * r.y,
            s = i.b + Math.random() * r.z;
        a = this.clamp(a, 0, 1), o = this.clamp(o, 0, 1), s = this.clamp(s, 0, 1), t.typedArray.setVec3Components(e, a, o, s);
      },
      randomColorAsHex: function () {
        "use strict";

        var t = new THREE.Color();
        return function (e, i, r, a) {
          for (var o = r.length, s = [], n = 0; o > n; ++n) {
            var u = a[n];
            t.copy(r[n]), t.r += Math.random() * u.x - .5 * u.x, t.g += Math.random() * u.y - .5 * u.y, t.b += Math.random() * u.z - .5 * u.z, t.r = this.clamp(t.r, 0, 1), t.g = this.clamp(t.g, 0, 1), t.b = this.clamp(t.b, 0, 1), s.push(t.getHex());
          }

          e.typedArray.setVec4Components(i, s[0], s[1], s[2], s[3]);
        };
      }(),
      randomVector3OnSphere: function randomVector3OnSphere(t, e, i, r, a, o, s, n) {
        "use strict";

        var u = 2 * Math.random() - 1,
            l = 6.2832 * Math.random(),
            c = Math.sqrt(1 - u * u),
            p = this.randomFloat(r, a),
            d = 0,
            h = 0,
            y = 0;
        s && (p = Math.round(p / s) * s), d = c * Math.cos(l) * p, h = c * Math.sin(l) * p, y = u * p, d *= o.x, h *= o.y, y *= o.z, d += i.x, h += i.y, y += i.z, t.typedArray.setVec3Components(e, d, h, y);
      },
      seededRandom: function seededRandom(t) {
        var e = 1e4 * Math.sin(t);
        return e - (0 | e);
      },
      randomVector3OnDisc: function randomVector3OnDisc(t, e, i, r, a, o, s) {
        "use strict";

        var n = 6.2832 * Math.random(),
            u = Math.abs(this.randomFloat(r, a)),
            l = 0,
            c = 0,
            p = 0;
        s && (u = Math.round(u / s) * s), l = Math.cos(n) * u, c = Math.sin(n) * u, l *= o.x, c *= o.y, l += i.x, c += i.y, p += i.z, t.typedArray.setVec3Components(e, l, c, p);
      },
      randomDirectionVector3OnSphere: function () {
        "use strict";

        var t = new THREE.Vector3();
        return function (e, i, r, a, o, s, n, u) {
          t.copy(s), t.x -= r, t.y -= a, t.z -= o, t.normalize().multiplyScalar(-this.randomFloat(n, u)), e.typedArray.setVec3Components(i, t.x, t.y, t.z);
        };
      }(),
      randomDirectionVector3OnDisc: function () {
        "use strict";

        var t = new THREE.Vector3();
        return function (e, i, r, a, o, s, n, u) {
          t.copy(s), t.x -= r, t.y -= a, t.z -= o, t.normalize().multiplyScalar(-this.randomFloat(n, u)), e.typedArray.setVec3Components(i, t.x, t.y, 0);
        };
      }(),
      getPackedRotationAxis: function () {
        "use strict";

        var t = new THREE.Vector3(),
            e = new THREE.Vector3(),
            i = new THREE.Color(),
            r = new THREE.Vector3(1, 1, 1);
        return function (a, o) {
          return t.copy(a).normalize(), e.copy(o).normalize(), t.x += .5 * -o.x + Math.random() * o.x, t.y += .5 * -o.y + Math.random() * o.y, t.z += .5 * -o.z + Math.random() * o.z, t.normalize().add(r).multiplyScalar(.5), i.setRGB(t.x, t.y, t.z), i.getHex();
        };
      }()
    }, o.Group = function (t) {
      "use strict";

      var e = o.utils,
          i = e.types;
      t = e.ensureTypedArg(t, i.OBJECT, {}), t.texture = e.ensureTypedArg(t.texture, i.OBJECT, {}), this.uuid = THREE.Math.generateUUID(), this.fixedTimeStep = e.ensureTypedArg(t.fixedTimeStep, i.NUMBER, .016), this.texture = e.ensureInstanceOf(t.texture.value, THREE.Texture, null), this.textureFrames = e.ensureInstanceOf(t.texture.frames, THREE.Vector2, new THREE.Vector2(1, 1)), this.textureFrameCount = e.ensureTypedArg(t.texture.frameCount, i.NUMBER, this.textureFrames.x * this.textureFrames.y), this.textureLoop = e.ensureTypedArg(t.texture.loop, i.NUMBER, 1), this.textureFrames.max(new THREE.Vector2(1, 1)), this.hasPerspective = e.ensureTypedArg(t.hasPerspective, i.BOOLEAN, !0), this.colorize = e.ensureTypedArg(t.colorize, i.BOOLEAN, !0), this.maxParticleCount = e.ensureTypedArg(t.maxParticleCount, i.NUMBER, null), this.blending = e.ensureTypedArg(t.blending, i.NUMBER, THREE.AdditiveBlending), this.transparent = e.ensureTypedArg(t.transparent, i.BOOLEAN, !0), this.alphaTest = parseFloat(e.ensureTypedArg(t.alphaTest, i.NUMBER, 0)), this.depthWrite = e.ensureTypedArg(t.depthWrite, i.BOOLEAN, !1), this.depthTest = e.ensureTypedArg(t.depthTest, i.BOOLEAN, !0), this.fog = e.ensureTypedArg(t.fog, i.BOOLEAN, !0), this.scale = e.ensureTypedArg(t.scale, i.NUMBER, 300), this.emitters = [], this.emitterIDs = [], this._pool = [], this._poolCreationSettings = null, this._createNewWhenPoolEmpty = 0, this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !1, this.particleCount = 0, this.uniforms = {
        texture: {
          type: "t",
          value: this.texture
        },
        textureAnimation: {
          type: "v4",
          value: new THREE.Vector4(this.textureFrames.x, this.textureFrames.y, this.textureFrameCount, Math.max(Math.abs(this.textureLoop), 1))
        },
        fogColor: {
          type: "c",
          value: null
        },
        fogNear: {
          type: "f",
          value: 10
        },
        fogFar: {
          type: "f",
          value: 200
        },
        fogDensity: {
          type: "f",
          value: .5
        },
        deltaTime: {
          type: "f",
          value: 0
        },
        runTime: {
          type: "f",
          value: 0
        },
        scale: {
          type: "f",
          value: this.scale
        }
      }, this.defines = {
        HAS_PERSPECTIVE: this.hasPerspective,
        COLORIZE: this.colorize,
        VALUE_OVER_LIFETIME_LENGTH: o.valueOverLifetimeLength,
        SHOULD_ROTATE_TEXTURE: !1,
        SHOULD_ROTATE_PARTICLES: !1,
        SHOULD_WIGGLE_PARTICLES: !1,
        SHOULD_CALCULATE_SPRITE: this.textureFrames.x > 1 || this.textureFrames.y > 1
      }, this.attributes = {
        position: new o.ShaderAttribute("v3", !0),
        acceleration: new o.ShaderAttribute("v4", !0),
        velocity: new o.ShaderAttribute("v3", !0),
        rotation: new o.ShaderAttribute("v4", !0),
        rotationCenter: new o.ShaderAttribute("v3", !0),
        params: new o.ShaderAttribute("v4", !0),
        size: new o.ShaderAttribute("v4", !0),
        angle: new o.ShaderAttribute("v4", !0),
        color: new o.ShaderAttribute("v4", !0),
        opacity: new o.ShaderAttribute("v4", !0)
      }, this.attributeKeys = Object.keys(this.attributes), this.attributeCount = this.attributeKeys.length, this.material = new THREE.ShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: o.shaders.vertex,
        fragmentShader: o.shaders.fragment,
        blending: this.blending,
        transparent: this.transparent,
        alphaTest: this.alphaTest,
        depthWrite: this.depthWrite,
        depthTest: this.depthTest,
        defines: this.defines,
        fog: this.fog
      }), this.geometry = new THREE.BufferGeometry(), this.mesh = new THREE.Points(this.geometry, this.material), null === this.maxParticleCount && console.warn("SPE.Group: No maxParticleCount specified. Adding emitters after rendering will probably cause errors.");
    }, o.Group.constructor = o.Group, o.Group.prototype._updateDefines = function () {
      "use strict";

      var t,
          e = this.emitters,
          i = e.length - 1,
          r = this.defines;

      for (i; i >= 0; --i) {
        t = e[i], r.SHOULD_CALCULATE_SPRITE || (r.SHOULD_ROTATE_TEXTURE = r.SHOULD_ROTATE_TEXTURE || !!Math.max(Math.max.apply(null, t.angle.value), Math.max.apply(null, t.angle.spread))), r.SHOULD_ROTATE_PARTICLES = r.SHOULD_ROTATE_PARTICLES || !!Math.max(t.rotation.angle, t.rotation.angleSpread), r.SHOULD_WIGGLE_PARTICLES = r.SHOULD_WIGGLE_PARTICLES || !!Math.max(t.wiggle.value, t.wiggle.spread);
      }

      this.material.needsUpdate = !0;
    }, o.Group.prototype._applyAttributesToGeometry = function () {
      "use strict";

      var t,
          e,
          i = this.attributes,
          r = this.geometry,
          a = r.attributes;

      for (var o in i) {
        i.hasOwnProperty(o) && (t = i[o], e = a[o], e ? e.array = t.typedArray.array : r.addAttribute(o, t.bufferAttribute), t.bufferAttribute.needsUpdate = !0);
      }

      this.geometry.setDrawRange(0, this.particleCount);
    }, o.Group.prototype.addEmitter = function (t) {
      "use strict";

      if (t instanceof o.Emitter == 0) return void console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", t);
      if (this.emitterIDs.indexOf(t.uuid) > -1) return void console.error("Emitter already exists in this group. Will not add again.");
      if (null !== t.group) return void console.error("Emitter already belongs to another group. Will not add to requested group.");
      var e = this.attributes,
          i = this.particleCount,
          r = i + t.particleCount;
      this.particleCount = r, null !== this.maxParticleCount && this.particleCount > this.maxParticleCount && console.warn("SPE.Group: maxParticleCount exceeded. Requesting", this.particleCount, "particles, can support only", this.maxParticleCount), t._calculatePPSValue(t.maxAge._value + t.maxAge._spread), t._setBufferUpdateRanges(this.attributeKeys), t._setAttributeOffset(i), t.group = this, t.attributes = this.attributes;

      for (var a in e) {
        e.hasOwnProperty(a) && e[a]._createBufferAttribute(null !== this.maxParticleCount ? this.maxParticleCount : this.particleCount);
      }

      for (var s = i; r > s; ++s) {
        t._assignPositionValue(s), t._assignForceValue(s, "velocity"), t._assignForceValue(s, "acceleration"), t._assignAbsLifetimeValue(s, "opacity"), t._assignAbsLifetimeValue(s, "size"), t._assignAngleValue(s), t._assignRotationValue(s), t._assignParamsValue(s), t._assignColorValue(s);
      }

      return this._applyAttributesToGeometry(), this.emitters.push(t), this.emitterIDs.push(t.uuid), this._updateDefines(t), this.material.needsUpdate = !0, this.geometry.needsUpdate = !0, this._attributesNeedRefresh = !0, this;
    }, o.Group.prototype.removeEmitter = function (t) {
      "use strict";

      var e = this.emitterIDs.indexOf(t.uuid);
      if (t instanceof o.Emitter == 0) return void console.error("`emitter` argument must be instance of SPE.Emitter. Was provided with:", t);
      if (-1 === e) return void console.error("Emitter does not exist in this group. Will not remove.");

      for (var i = t.attributeOffset, r = i + t.particleCount, a = this.attributes.params.typedArray, s = i; r > s; ++s) {
        a.array[4 * s] = 0, a.array[4 * s + 1] = 0;
      }

      this.emitters.splice(e, 1), this.emitterIDs.splice(e, 1);

      for (var n in this.attributes) {
        this.attributes.hasOwnProperty(n) && this.attributes[n].splice(i, r);
      }

      this.particleCount -= t.particleCount, t._onRemove(), this._attributesNeedRefresh = !0;
    }, o.Group.prototype.getFromPool = function () {
      "use strict";

      var t = this._pool,
          e = this._createNewWhenPoolEmpty;
      return t.length ? t.pop() : e ? new o.Emitter(this._poolCreationSettings) : null;
    }, o.Group.prototype.releaseIntoPool = function (t) {
      "use strict";

      return t instanceof o.Emitter == 0 ? void console.error("Argument is not instanceof SPE.Emitter:", t) : (t.reset(), this._pool.unshift(t), this);
    }, o.Group.prototype.getPool = function () {
      "use strict";

      return this._pool;
    }, o.Group.prototype.addPool = function (t, e, i) {
      "use strict";

      var r;
      this._poolCreationSettings = e, this._createNewWhenPoolEmpty = !!i;

      for (var a = 0; t > a; ++a) {
        r = Array.isArray(e) ? new o.Emitter(e[a]) : new o.Emitter(e), this.addEmitter(r), this.releaseIntoPool(r);
      }

      return this;
    }, o.Group.prototype._triggerSingleEmitter = function (t) {
      "use strict";

      var e = this.getFromPool(),
          i = this;
      return null === e ? void console.log("SPE.Group pool ran out.") : (t instanceof THREE.Vector3 && (e.position.value.copy(t), e.position.value = e.position.value), e.enable(), setTimeout(function () {
        e.disable(), i.releaseIntoPool(e);
      }, 1e3 * Math.max(e.duration, e.maxAge.value + e.maxAge.spread)), this);
    }, o.Group.prototype.triggerPoolEmitter = function (t, e) {
      "use strict";

      if ("number" == typeof t && t > 1) for (var i = 0; t > i; ++i) {
        this._triggerSingleEmitter(e);
      } else this._triggerSingleEmitter(e);
      return this;
    }, o.Group.prototype._updateUniforms = function (t) {
      "use strict";

      this.uniforms.runTime.value += t, this.uniforms.deltaTime.value = t;
    }, o.Group.prototype._resetBufferRanges = function () {
      "use strict";

      var t = this.attributeKeys,
          e = this.attributeCount - 1,
          i = this.attributes;

      for (e; e >= 0; --e) {
        i[t[e]].resetUpdateRange();
      }
    }, o.Group.prototype._updateBuffers = function (t) {
      "use strict";

      var e,
          i,
          r,
          a = this.attributeKeys,
          o = this.attributeCount - 1,
          s = this.attributes,
          n = t.bufferUpdateRanges;

      for (o; o >= 0; --o) {
        e = a[o], i = n[e], r = s[e], r.setUpdateRange(i.min, i.max), r.flagUpdate();
      }
    }, o.Group.prototype.tick = function (t) {
      "use strict";

      var e,
          i = this.emitters,
          r = i.length,
          a = t || this.fixedTimeStep,
          o = this.attributeKeys,
          s = this.attributes;

      if (this._updateUniforms(a), this._resetBufferRanges(), 0 !== r || this._attributesNeedRefresh !== !1 || this._attributesNeedDynamicReset !== !1) {
        for (var n, e = 0; r > e; ++e) {
          n = i[e], n.tick(a), this._updateBuffers(n);
        }

        if (this._attributesNeedDynamicReset === !0) {
          for (e = this.attributeCount - 1; e >= 0; --e) {
            s[o[e]].resetDynamic();
          }

          this._attributesNeedDynamicReset = !1;
        }

        if (this._attributesNeedRefresh === !0) {
          for (e = this.attributeCount - 1; e >= 0; --e) {
            s[o[e]].forceUpdateAll();
          }

          this._attributesNeedRefresh = !1, this._attributesNeedDynamicReset = !0;
        }
      }
    }, o.Group.prototype.dispose = function () {
      "use strict";

      return this.geometry.dispose(), this.material.dispose(), this;
    }, o.Emitter = function (t) {
      "use strict";

      var e = o.utils,
          i = e.types,
          r = o.valueOverLifetimeLength;
      t = e.ensureTypedArg(t, i.OBJECT, {}), t.position = e.ensureTypedArg(t.position, i.OBJECT, {}), t.velocity = e.ensureTypedArg(t.velocity, i.OBJECT, {}), t.acceleration = e.ensureTypedArg(t.acceleration, i.OBJECT, {}), t.radius = e.ensureTypedArg(t.radius, i.OBJECT, {}), t.drag = e.ensureTypedArg(t.drag, i.OBJECT, {}), t.rotation = e.ensureTypedArg(t.rotation, i.OBJECT, {}), t.color = e.ensureTypedArg(t.color, i.OBJECT, {}), t.opacity = e.ensureTypedArg(t.opacity, i.OBJECT, {}), t.size = e.ensureTypedArg(t.size, i.OBJECT, {}), t.angle = e.ensureTypedArg(t.angle, i.OBJECT, {}), t.wiggle = e.ensureTypedArg(t.wiggle, i.OBJECT, {}), t.maxAge = e.ensureTypedArg(t.maxAge, i.OBJECT, {}), t.onParticleSpawn && console.warn("onParticleSpawn has been removed. Please set properties directly to alter values at runtime."), this.uuid = THREE.Math.generateUUID(), this.type = e.ensureTypedArg(t.type, i.NUMBER, o.distributions.BOX), this.position = {
        _value: e.ensureInstanceOf(t.position.value, THREE.Vector3, new THREE.Vector3()),
        _spread: e.ensureInstanceOf(t.position.spread, THREE.Vector3, new THREE.Vector3()),
        _spreadClamp: e.ensureInstanceOf(t.position.spreadClamp, THREE.Vector3, new THREE.Vector3()),
        _distribution: e.ensureTypedArg(t.position.distribution, i.NUMBER, this.type),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1),
        _radius: e.ensureTypedArg(t.position.radius, i.NUMBER, 10),
        _radiusScale: e.ensureInstanceOf(t.position.radiusScale, THREE.Vector3, new THREE.Vector3(1, 1, 1)),
        _distributionClamp: e.ensureTypedArg(t.position.distributionClamp, i.NUMBER, 0)
      }, this.velocity = {
        _value: e.ensureInstanceOf(t.velocity.value, THREE.Vector3, new THREE.Vector3()),
        _spread: e.ensureInstanceOf(t.velocity.spread, THREE.Vector3, new THREE.Vector3()),
        _distribution: e.ensureTypedArg(t.velocity.distribution, i.NUMBER, this.type),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.acceleration = {
        _value: e.ensureInstanceOf(t.acceleration.value, THREE.Vector3, new THREE.Vector3()),
        _spread: e.ensureInstanceOf(t.acceleration.spread, THREE.Vector3, new THREE.Vector3()),
        _distribution: e.ensureTypedArg(t.acceleration.distribution, i.NUMBER, this.type),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.drag = {
        _value: e.ensureTypedArg(t.drag.value, i.NUMBER, 0),
        _spread: e.ensureTypedArg(t.drag.spread, i.NUMBER, 0),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.wiggle = {
        _value: e.ensureTypedArg(t.wiggle.value, i.NUMBER, 0),
        _spread: e.ensureTypedArg(t.wiggle.spread, i.NUMBER, 0)
      }, this.rotation = {
        _axis: e.ensureInstanceOf(t.rotation.axis, THREE.Vector3, new THREE.Vector3(0, 1, 0)),
        _axisSpread: e.ensureInstanceOf(t.rotation.axisSpread, THREE.Vector3, new THREE.Vector3()),
        _angle: e.ensureTypedArg(t.rotation.angle, i.NUMBER, 0),
        _angleSpread: e.ensureTypedArg(t.rotation.angleSpread, i.NUMBER, 0),
        _static: e.ensureTypedArg(t.rotation.static, i.BOOLEAN, !1),
        _center: e.ensureInstanceOf(t.rotation.center, THREE.Vector3, this.position._value.clone()),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.maxAge = {
        _value: e.ensureTypedArg(t.maxAge.value, i.NUMBER, 2),
        _spread: e.ensureTypedArg(t.maxAge.spread, i.NUMBER, 0)
      }, this.color = {
        _value: e.ensureArrayInstanceOf(t.color.value, THREE.Color, new THREE.Color()),
        _spread: e.ensureArrayInstanceOf(t.color.spread, THREE.Vector3, new THREE.Vector3()),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.opacity = {
        _value: e.ensureArrayTypedArg(t.opacity.value, i.NUMBER, 1),
        _spread: e.ensureArrayTypedArg(t.opacity.spread, i.NUMBER, 0),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.size = {
        _value: e.ensureArrayTypedArg(t.size.value, i.NUMBER, 1),
        _spread: e.ensureArrayTypedArg(t.size.spread, i.NUMBER, 0),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.angle = {
        _value: e.ensureArrayTypedArg(t.angle.value, i.NUMBER, 0),
        _spread: e.ensureArrayTypedArg(t.angle.spread, i.NUMBER, 0),
        _randomise: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1)
      }, this.particleCount = e.ensureTypedArg(t.particleCount, i.NUMBER, 100), this.duration = e.ensureTypedArg(t.duration, i.NUMBER, null), this.isStatic = e.ensureTypedArg(t.isStatic, i.BOOLEAN, !1), this.activeMultiplier = e.ensureTypedArg(t.activeMultiplier, i.NUMBER, 1), this.direction = e.ensureTypedArg(t.direction, i.NUMBER, 1), this.alive = e.ensureTypedArg(t.alive, i.BOOLEAN, !0), this.particlesPerSecond = 0, this.activationIndex = 0, this.attributeOffset = 0, this.attributeEnd = 0, this.age = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.resetFlags = {
        position: e.ensureTypedArg(t.position.randomise, i.BOOLEAN, !1) || e.ensureTypedArg(t.radius.randomise, i.BOOLEAN, !1),
        velocity: e.ensureTypedArg(t.velocity.randomise, i.BOOLEAN, !1),
        acceleration: e.ensureTypedArg(t.acceleration.randomise, i.BOOLEAN, !1) || e.ensureTypedArg(t.drag.randomise, i.BOOLEAN, !1),
        rotation: e.ensureTypedArg(t.rotation.randomise, i.BOOLEAN, !1),
        rotationCenter: e.ensureTypedArg(t.rotation.randomise, i.BOOLEAN, !1),
        size: e.ensureTypedArg(t.size.randomise, i.BOOLEAN, !1),
        color: e.ensureTypedArg(t.color.randomise, i.BOOLEAN, !1),
        opacity: e.ensureTypedArg(t.opacity.randomise, i.BOOLEAN, !1),
        angle: e.ensureTypedArg(t.angle.randomise, i.BOOLEAN, !1)
      }, this.updateFlags = {}, this.updateCounts = {}, this.updateMap = {
        maxAge: "params",
        position: "position",
        velocity: "velocity",
        acceleration: "acceleration",
        drag: "acceleration",
        wiggle: "params",
        rotation: "rotation",
        size: "size",
        color: "color",
        opacity: "opacity",
        angle: "angle"
      };

      for (var a in this.updateMap) {
        this.updateMap.hasOwnProperty(a) && (this.updateCounts[this.updateMap[a]] = 0, this.updateFlags[this.updateMap[a]] = !1, this._createGetterSetters(this[a], a));
      }

      this.bufferUpdateRanges = {}, this.attributeKeys = null, this.attributeCount = 0, e.ensureValueOverLifetimeCompliance(this.color, r, r), e.ensureValueOverLifetimeCompliance(this.opacity, r, r), e.ensureValueOverLifetimeCompliance(this.size, r, r), e.ensureValueOverLifetimeCompliance(this.angle, r, r);
    }, o.Emitter.constructor = o.Emitter, o.Emitter.prototype._createGetterSetters = function (t, e) {
      "use strict";

      var i = this;

      for (var r in t) {
        if (t.hasOwnProperty(r)) {
          var a = r.replace("_", "");
          Object.defineProperty(t, a, {
            get: function (t) {
              return function () {
                return this[t];
              };
            }(r),
            set: function (t) {
              return function (r) {
                var a = i.updateMap[e],
                    s = this[t],
                    n = o.valueOverLifetimeLength;
                "_rotationCenter" === t ? (i.updateFlags.rotationCenter = !0, i.updateCounts.rotationCenter = 0) : "_randomise" === t ? i.resetFlags[a] = r : (i.updateFlags[a] = !0, i.updateCounts[a] = 0), i.group._updateDefines(), this[t] = r, Array.isArray(s) && o.utils.ensureValueOverLifetimeCompliance(i[e], n, n);
              };
            }(r)
          });
        }
      }
    }, o.Emitter.prototype._setBufferUpdateRanges = function (t) {
      "use strict";

      this.attributeKeys = t, this.attributeCount = t.length;

      for (var e = this.attributeCount - 1; e >= 0; --e) {
        this.bufferUpdateRanges[t[e]] = {
          min: Number.POSITIVE_INFINITY,
          max: Number.NEGATIVE_INFINITY
        };
      }
    }, o.Emitter.prototype._calculatePPSValue = function (t) {
      "use strict";

      var e = this.particleCount;
      this.duration ? this.particlesPerSecond = e / (t < this.duration ? t : this.duration) : this.particlesPerSecond = e / t;
    }, o.Emitter.prototype._setAttributeOffset = function (t) {
      this.attributeOffset = t, this.activationIndex = t, this.activationEnd = t + this.particleCount;
    }, o.Emitter.prototype._assignValue = function (t, e) {
      "use strict";

      switch (t) {
        case "position":
          this._assignPositionValue(e);

          break;

        case "velocity":
        case "acceleration":
          this._assignForceValue(e, t);

          break;

        case "size":
        case "opacity":
          this._assignAbsLifetimeValue(e, t);

          break;

        case "angle":
          this._assignAngleValue(e);

          break;

        case "params":
          this._assignParamsValue(e);

          break;

        case "rotation":
          this._assignRotationValue(e);

          break;

        case "color":
          this._assignColorValue(e);

      }
    }, o.Emitter.prototype._assignPositionValue = function (t) {
      "use strict";

      var e = o.distributions,
          i = o.utils,
          r = this.position,
          a = this.attributes.position,
          s = r._value,
          n = r._spread,
          u = r._distribution;

      switch (u) {
        case e.BOX:
          i.randomVector3(a, t, s, n, r._spreadClamp);
          break;

        case e.SPHERE:
          i.randomVector3OnSphere(a, t, s, r._radius, r._spread.x, r._radiusScale, r._spreadClamp.x, r._distributionClamp || this.particleCount);
          break;

        case e.DISC:
          i.randomVector3OnDisc(a, t, s, r._radius, r._spread.x, r._radiusScale, r._spreadClamp.x);
      }
    }, o.Emitter.prototype._assignForceValue = function (t, e) {
      "use strict";

      var i,
          r,
          a,
          s,
          n,
          u = o.distributions,
          l = o.utils,
          c = this[e],
          p = c._value,
          d = c._spread,
          h = c._distribution;

      switch (h) {
        case u.BOX:
          l.randomVector3(this.attributes[e], t, p, d);
          break;

        case u.SPHERE:
          i = this.attributes.position.typedArray.array, n = 3 * t, r = i[n], a = i[n + 1], s = i[n + 2], l.randomDirectionVector3OnSphere(this.attributes[e], t, r, a, s, this.position._value, c._value.x, c._spread.x);
          break;

        case u.DISC:
          i = this.attributes.position.typedArray.array, n = 3 * t, r = i[n], a = i[n + 1], s = i[n + 2], l.randomDirectionVector3OnDisc(this.attributes[e], t, r, a, s, this.position._value, c._value.x, c._spread.x);
      }

      if ("acceleration" === e) {
        var y = l.clamp(l.randomFloat(this.drag._value, this.drag._spread), 0, 1);
        this.attributes.acceleration.typedArray.array[4 * t + 3] = y;
      }
    }, o.Emitter.prototype._assignAbsLifetimeValue = function (t, e) {
      "use strict";

      var i,
          r = this.attributes[e].typedArray,
          a = this[e],
          s = o.utils;
      s.arrayValuesAreEqual(a._value) && s.arrayValuesAreEqual(a._spread) ? (i = Math.abs(s.randomFloat(a._value[0], a._spread[0])), r.setVec4Components(t, i, i, i, i)) : r.setVec4Components(t, Math.abs(s.randomFloat(a._value[0], a._spread[0])), Math.abs(s.randomFloat(a._value[1], a._spread[1])), Math.abs(s.randomFloat(a._value[2], a._spread[2])), Math.abs(s.randomFloat(a._value[3], a._spread[3])));
    }, o.Emitter.prototype._assignAngleValue = function (t) {
      "use strict";

      var e,
          i = this.attributes.angle.typedArray,
          r = this.angle,
          a = o.utils;
      a.arrayValuesAreEqual(r._value) && a.arrayValuesAreEqual(r._spread) ? (e = a.randomFloat(r._value[0], r._spread[0]), i.setVec4Components(t, e, e, e, e)) : i.setVec4Components(t, a.randomFloat(r._value[0], r._spread[0]), a.randomFloat(r._value[1], r._spread[1]), a.randomFloat(r._value[2], r._spread[2]), a.randomFloat(r._value[3], r._spread[3]));
    }, o.Emitter.prototype._assignParamsValue = function (t) {
      "use strict";

      this.attributes.params.typedArray.setVec4Components(t, this.isStatic ? 1 : 0, 0, Math.abs(o.utils.randomFloat(this.maxAge._value, this.maxAge._spread)), o.utils.randomFloat(this.wiggle._value, this.wiggle._spread));
    }, o.Emitter.prototype._assignRotationValue = function (t) {
      "use strict";

      this.attributes.rotation.typedArray.setVec3Components(t, o.utils.getPackedRotationAxis(this.rotation._axis, this.rotation._axisSpread), o.utils.randomFloat(this.rotation._angle, this.rotation._angleSpread), this.rotation._static ? 0 : 1), this.attributes.rotationCenter.typedArray.setVec3(t, this.rotation._center);
    }, o.Emitter.prototype._assignColorValue = function (t) {
      "use strict";

      o.utils.randomColorAsHex(this.attributes.color, t, this.color._value, this.color._spread);
    }, o.Emitter.prototype._resetParticle = function (t) {
      "use strict";

      for (var e, i, r = this.resetFlags, a = this.updateFlags, o = this.updateCounts, s = this.attributeKeys, n = this.attributeCount - 1; n >= 0; --n) {
        e = s[n], i = a[e], r[e] !== !0 && i !== !0 || (this._assignValue(e, t), this._updateAttributeUpdateRange(e, t), i === !0 && o[e] === this.particleCount ? (a[e] = !1, o[e] = 0) : 1 == i && ++o[e]);
      }
    }, o.Emitter.prototype._updateAttributeUpdateRange = function (t, e) {
      "use strict";

      var i = this.bufferUpdateRanges[t];
      i.min = Math.min(e, i.min), i.max = Math.max(e, i.max);
    }, o.Emitter.prototype._resetBufferRanges = function () {
      "use strict";

      var t,
          e = this.bufferUpdateRanges,
          i = this.bufferUpdateKeys,
          r = this.bufferUpdateCount - 1;

      for (r; r >= 0; --r) {
        t = i[r], e[t].min = Number.POSITIVE_INFINITY, e[t].max = Number.NEGATIVE_INFINITY;
      }
    }, o.Emitter.prototype._onRemove = function () {
      "use strict";

      this.particlesPerSecond = 0, this.attributeOffset = 0, this.activationIndex = 0, this.activeParticleCount = 0, this.group = null, this.attributes = null, this.paramsArray = null, this.age = 0;
    }, o.Emitter.prototype._decrementParticleCount = function () {
      "use strict";

      --this.activeParticleCount;
    }, o.Emitter.prototype._incrementParticleCount = function () {
      "use strict";

      ++this.activeParticleCount;
    }, o.Emitter.prototype._checkParticleAges = function (t, e, i, r) {
      "use strict";

      for (var a, o, s, n, u = e - 1; u >= t; --u) {
        a = 4 * u, n = i[a], 0 !== n && (s = i[a + 1], o = i[a + 2], 1 === this.direction ? (s += r, s >= o && (s = 0, n = 0, this._decrementParticleCount())) : (s -= r, 0 >= s && (s = o, n = 0, this._decrementParticleCount())), i[a] = n, i[a + 1] = s, this._updateAttributeUpdateRange("params", u));
      }
    }, o.Emitter.prototype._activateParticles = function (t, e, i, r) {
      "use strict";

      for (var a, o, s = this.direction, n = t; e > n; ++n) {
        a = 4 * n, 0 != i[a] && 1 !== this.particleCount || (this._incrementParticleCount(), i[a] = 1, this._resetParticle(n), o = r * (n - t), i[a + 1] = -1 === s ? i[a + 2] - o : o, this._updateAttributeUpdateRange("params", n));
      }
    }, o.Emitter.prototype.tick = function (t) {
      "use strict";

      if (!this.isStatic) {
        null === this.paramsArray && (this.paramsArray = this.attributes.params.typedArray.array);
        var e = this.attributeOffset,
            i = e + this.particleCount,
            r = this.paramsArray,
            a = this.particlesPerSecond * this.activeMultiplier * t,
            o = this.activationIndex;
        if (this._resetBufferRanges(), this._checkParticleAges(e, i, r, t), this.alive === !1) return void (this.age = 0);
        if (null !== this.duration && this.age > this.duration) return this.alive = !1, void (this.age = 0);
        var s = 1 === this.particleCount ? o : 0 | o,
            n = Math.min(s + a, this.activationEnd),
            u = n - this.activationIndex | 0,
            l = u > 0 ? t / u : 0;
        this._activateParticles(s, n, r, l), this.activationIndex += a, this.activationIndex > i && (this.activationIndex = e), this.age += t;
      }
    }, o.Emitter.prototype.reset = function (t) {
      "use strict";

      if (this.age = 0, this.alive = !1, t === !0) {
        for (var e, i = this.attributeOffset, r = i + this.particleCount, a = this.paramsArray, o = this.attributes.params.bufferAttribute, s = r - 1; s >= i; --s) {
          e = 4 * s, a[e] = 0, a[e + 1] = 0;
        }

        o.updateRange.offset = 0, o.updateRange.count = -1, o.needsUpdate = !0;
      }

      return this;
    }, o.Emitter.prototype.enable = function () {
      "use strict";

      return this.alive = !0, this;
    }, o.Emitter.prototype.disable = function () {
      "use strict";

      return this.alive = !1, this;
    }, o.Emitter.prototype.remove = function () {
      "use strict";

      return null !== this.group ? this.group.removeEmitter(this) : console.error("Emitter does not belong to a group, cannot remove."), this;
    };
  }]);
}, function (module, exports) {
  var Particles, i, item, len, ref;

  for (Particles = {}, ref = ["default", "dust", "snow", "rain"], i = 0, len = ref.length; i < len; i++) {
    item = ref[i], Particles[item] = item;
  }

  exports.Particles = Particles;
}]);
/* ----------------------- */
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59727" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","projects/webvr-demo/hologram/hologram.modules.js"], null)
//# sourceMappingURL=/hologram.modules.7a7f9967.map