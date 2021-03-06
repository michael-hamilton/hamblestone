// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"projects/klav/Tone.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "function" == typeof define && define.amd ? define(function () {
    return e();
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : t.Tone = e();
}(this, function () {
  "use strict";

  function t(t) {
    t(e);
  }

  var e;
  /**
  *  Tone.js
  *  @author Yotam Mann
  *  @license http://opensource.org/licenses/MIT MIT License
  *  @copyright 2014-2018 Yotam Mann
  */

  return function (t) {
    e = t();
  }(function () {
    var t,
        e = function e() {
      if (!(this instanceof e)) throw new Error("constructor needs to be called with the 'new' keyword");
    };

    return e.prototype.toString = function () {
      var t, i, n;

      for (t in e) {
        if (i = t[0].match(/^[A-Z]$/), n = e[t] === this.constructor, e.isFunction(e[t]) && i && n) return t;
      }

      return "Tone";
    }, e.prototype.dispose = function () {
      return this;
    }, e.prototype.set = function (t, i, n) {
      var s, o, r, a, h, l, u;
      e.isObject(t) ? n = i : e.isString(t) && (s = {}, s[t] = i, t = s);

      t: for (o in t) {
        if (i = t[o], r = this, -1 !== o.indexOf(".")) {
          for (a = o.split("."), h = 0; h < a.length - 1; h++) {
            if ((r = r[a[h]]) instanceof e) {
              a.splice(0, h + 1), l = a.join("."), r.set(l, i);
              continue t;
            }
          }

          o = a[a.length - 1];
        }

        u = r[o], e.isUndef(u) || (e.Signal && u instanceof e.Signal || e.Param && u instanceof e.Param ? u.value !== i && (e.isUndef(n) ? u.value = i : u.rampTo(i, n)) : u instanceof AudioParam ? u.value !== i && (u.value = i) : e.TimeBase && u instanceof e.TimeBase ? r[o] = i : u instanceof e ? u.set(i) : u !== i && (r[o] = i));
      }

      return this;
    }, e.prototype.get = function (t) {
      var i, n, s, o, r, a, h, l, u;

      for (e.isUndef(t) ? t = this._collectDefaults(this.constructor) : e.isString(t) && (t = [t]), i = {}, n = 0; n < t.length; n++) {
        if (s = t[n], o = this, r = i, -1 !== s.indexOf(".")) {
          for (a = s.split("."), h = 0; h < a.length - 1; h++) {
            l = a[h], r[l] = r[l] || {}, r = r[l], o = o[l];
          }

          s = a[a.length - 1];
        }

        u = o[s], e.isObject(t[s]) ? r[s] = u.get() : e.Signal && u instanceof e.Signal ? r[s] = u.value : e.Param && u instanceof e.Param ? r[s] = u.value : u instanceof AudioParam ? r[s] = u.value : u instanceof e ? r[s] = u.get() : !e.isFunction(u) && e.isDefined(u) && (r[s] = u);
      }

      return i;
    }, e.prototype._collectDefaults = function (t) {
      var i,
          n,
          s = [];
      if (e.isDefined(t.defaults) && (s = Object.keys(t.defaults)), e.isDefined(t._super)) for (i = this._collectDefaults(t._super), n = 0; n < i.length; n++) {
        -1 === s.indexOf(i[n]) && s.push(i[n]);
      }
      return s;
    }, e.defaults = function (t, i, n) {
      var s,
          o = {};
      if (1 === t.length && e.isObject(t[0])) o = t[0];else for (s = 0; s < i.length; s++) {
        o[i[s]] = t[s];
      }
      return e.isDefined(n.defaults) ? e.defaultArg(o, n.defaults) : e.isObject(n) ? e.defaultArg(o, n) : o;
    }, e.defaultArg = function (t, i) {
      var n, s, o;

      if (e.isObject(t) && e.isObject(i)) {
        n = {};

        for (s in t) {
          n[s] = e.defaultArg(i[s], t[s]);
        }

        for (o in i) {
          n[o] = e.defaultArg(t[o], i[o]);
        }

        return n;
      }

      return e.isUndef(t) ? i : t;
    }, e.connectSeries = function () {
      var t,
          i,
          n = arguments[0];

      for (t = 1; t < arguments.length; t++) {
        i = arguments[t], n.connect(i), n = i;
      }

      return e;
    }, e.isUndef = function (t) {
      return void 0 === t;
    }, e.isDefined = function (t) {
      return !e.isUndef(t);
    }, e.isFunction = function (t) {
      return "function" == typeof t;
    }, e.isNumber = function (t) {
      return "number" == typeof t;
    }, e.isObject = function (t) {
      return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object;
    }, e.isBoolean = function (t) {
      return "boolean" == typeof t;
    }, e.isArray = function (t) {
      return Array.isArray(t);
    }, e.isString = function (t) {
      return "string" == typeof t;
    }, e.isNote = function (t) {
      return e.isString(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t);
    }, e.noOp = function () {}, e.prototype._readOnly = function (t) {
      if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
        this._readOnly(t[e]);
      } else Object.defineProperty(this, t, {
        writable: !1,
        enumerable: !0
      });
    }, e.prototype._writable = function (t) {
      if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
        this._writable(t[e]);
      } else Object.defineProperty(this, t, {
        writable: !0
      });
    }, e.State = {
      Started: "started",
      Stopped: "stopped",
      Paused: "paused"
    }, e.equalPowerScale = function (t) {
      var e = .5 * Math.PI;
      return Math.sin(t * e);
    }, e.dbToGain = function (t) {
      return Math.pow(10, t / 20);
    }, e.gainToDb = function (t) {
      return Math.log(t) / Math.LN10 * 20;
    }, e.intervalToFrequencyRatio = function (t) {
      return Math.pow(2, t / 12);
    }, e.prototype.now = function () {
      return e.context.now();
    }, e.now = function () {
      return e.context.now();
    }, e.extend = function (t, i) {
      function n() {}

      e.isUndef(i) && (i = e), n.prototype = i.prototype, t.prototype = new n(), t.prototype.constructor = t, t._super = i;
    }, t = null, Object.defineProperty(e, "context", {
      get: function get() {
        return t;
      },
      set: function set(i) {
        t = e.Context && i instanceof e.Context ? i : new e.Context(i), e.Context.emit("init", t);
      }
    }), Object.defineProperty(e.prototype, "context", {
      get: function get() {
        return e.context;
      }
    }), e.setContext = function (t) {
      e.context = t;
    }, Object.defineProperty(e.prototype, "blockTime", {
      get: function get() {
        return 128 / this.context.sampleRate;
      }
    }), Object.defineProperty(e.prototype, "sampleTime", {
      get: function get() {
        return 1 / this.context.sampleRate;
      }
    }), Object.defineProperty(e, "supported", {
      get: function get() {
        var t = window.hasOwnProperty("AudioContext") || window.hasOwnProperty("webkitAudioContext"),
            e = window.hasOwnProperty("Promise"),
            i = window.hasOwnProperty("Worker");
        return t && e && i;
      }
    }), Object.defineProperty(e, "initialized", {
      get: function get() {
        return null !== t;
      }
    }), e.getContext = function (t) {
      if (e.initialized) t(e.context);else {
        var i = function i() {
          t(e.context), e.Context.off("init", i);
        };

        e.Context.on("init", i);
      }
      return e;
    }, e.version = "r12", e;
  }), t(function (t) {
    return t.Emitter = function () {
      t.call(this), this._events = {};
    }, t.extend(t.Emitter), t.Emitter.prototype.on = function (t, e) {
      var i,
          n,
          s = t.split(/\W+/);

      for (i = 0; i < s.length; i++) {
        n = s[i], this._events.hasOwnProperty(n) || (this._events[n] = []), this._events[n].push(e);
      }

      return this;
    }, t.Emitter.prototype.once = function (t, e) {
      var i = function () {
        e.apply(this, arguments), this.off(t, i);
      }.bind(this);

      return this.on(t, i), this;
    }, t.Emitter.prototype.off = function (e, i) {
      var n,
          s,
          o,
          r = e.split(/\W+/);

      for (n = 0; n < r.length; n++) {
        if (e = r[n], this._events.hasOwnProperty(e)) if (t.isUndef(i)) this._events[e] = [];else for (s = this._events[e], o = 0; o < s.length; o++) {
          s[o] === i && s.splice(o, 1);
        }
      }

      return this;
    }, t.Emitter.prototype.emit = function (t) {
      var e, i, n, s;
      if (this._events && (e = Array.apply(null, arguments).slice(1), this._events.hasOwnProperty(t))) for (i = this._events[t].slice(0), n = 0, s = i.length; n < s; n++) {
        i[n].apply(this, e);
      }
      return this;
    }, t.Emitter.mixin = function (e) {
      var i,
          n,
          s,
          o = ["on", "once", "off", "emit"];

      for (e._events = {}, i = 0; i < o.length; i++) {
        n = o[i], s = t.Emitter.prototype[n], e[n] = s;
      }

      return t.Emitter;
    }, t.Emitter.prototype.dispose = function () {
      return t.prototype.dispose.call(this), this._events = null, this;
    }, t.Emitter;
  }), t(function (t) {
    return t.Timeline = function () {
      var e = t.defaults(arguments, ["memory"], t.Timeline);
      t.call(this), this._timeline = [], this.memory = e.memory;
    }, t.extend(t.Timeline), t.Timeline.defaults = {
      memory: 1 / 0
    }, Object.defineProperty(t.Timeline.prototype, "length", {
      get: function get() {
        return this._timeline.length;
      }
    }), t.Timeline.prototype.add = function (e) {
      var i, n;
      if (t.isUndef(e.time)) throw new Error("Tone.Timeline: events must have a time attribute");
      return e.time = e.time.valueOf(), i = this._search(e.time), this._timeline.splice(i + 1, 0, e), this.length > this.memory && (n = this.length - this.memory, this._timeline.splice(0, n)), this;
    }, t.Timeline.prototype.remove = function (t) {
      var e = this._timeline.indexOf(t);

      return -1 !== e && this._timeline.splice(e, 1), this;
    }, t.Timeline.prototype.get = function (e, i) {
      i = t.defaultArg(i, "time");

      var n = this._search(e, i);

      return -1 !== n ? this._timeline[n] : null;
    }, t.Timeline.prototype.peek = function () {
      return this._timeline[0];
    }, t.Timeline.prototype.shift = function () {
      return this._timeline.shift();
    }, t.Timeline.prototype.getAfter = function (e, i) {
      i = t.defaultArg(i, "time");

      var n = this._search(e, i);

      return n + 1 < this._timeline.length ? this._timeline[n + 1] : null;
    }, t.Timeline.prototype.getBefore = function (e, i) {
      var n, s;
      return i = t.defaultArg(i, "time"), (n = this._timeline.length) > 0 && this._timeline[n - 1][i] < e ? this._timeline[n - 1] : (s = this._search(e, i), s - 1 >= 0 ? this._timeline[s - 1] : null);
    }, t.Timeline.prototype.cancel = function (t) {
      var e, i;
      if (this._timeline.length > 1) {
        if ((e = this._search(t)) >= 0) {
          if (this._timeline[e].time === t) {
            for (i = e; i >= 0 && this._timeline[i].time === t; i--) {
              e = i;
            }

            this._timeline = this._timeline.slice(0, e);
          } else this._timeline = this._timeline.slice(0, e + 1);
        } else this._timeline = [];
      } else 1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
      return this;
    }, t.Timeline.prototype.cancelBefore = function (t) {
      var e = this._search(t);

      return e >= 0 && (this._timeline = this._timeline.slice(e + 1)), this;
    }, t.Timeline.prototype.previousEvent = function (t) {
      var e = this._timeline.indexOf(t);

      return e > 0 ? this._timeline[e - 1] : null;
    }, t.Timeline.prototype._search = function (e, i) {
      var n, s, o, r, a, h, l, u;
      if (0 === this._timeline.length) return -1;
      if (i = t.defaultArg(i, "time"), n = 0, s = this._timeline.length, o = s, s > 0 && this._timeline[s - 1][i] <= e) return s - 1;

      for (; n < o;) {
        if (r = Math.floor(n + (o - n) / 2), a = this._timeline[r], h = this._timeline[r + 1], a[i] === e) {
          for (l = r; l < this._timeline.length; l++) {
            u = this._timeline[l], u[i] === e && (r = l);
          }

          return r;
        }

        if (a[i] < e && h[i] > e) return r;
        a[i] > e ? o = r : n = r + 1;
      }

      return -1;
    }, t.Timeline.prototype._iterate = function (e, i, n) {
      i = t.defaultArg(i, 0), n = t.defaultArg(n, this._timeline.length - 1), this._timeline.slice(i, n + 1).forEach(function (t) {
        e.call(this, t);
      }.bind(this));
    }, t.Timeline.prototype.forEach = function (t) {
      return this._iterate(t), this;
    }, t.Timeline.prototype.forEachBefore = function (t, e) {
      var i = this._search(t);

      return -1 !== i && this._iterate(e, 0, i), this;
    }, t.Timeline.prototype.forEachAfter = function (t, e) {
      var i = this._search(t);

      return this._iterate(e, i + 1), this;
    }, t.Timeline.prototype.forEachBetween = function (t, e, i) {
      var n = this._search(t),
          s = this._search(e);

      return -1 !== n && -1 !== s ? (this._timeline[n].time !== t && (n += 1), this._timeline[s].time === e && (s -= 1), this._iterate(i, n, s)) : -1 === n && this._iterate(i, 0, s), this;
    }, t.Timeline.prototype.forEachFrom = function (t, e) {
      for (var i = this._search(t); i >= 0 && this._timeline[i].time >= t;) {
        i--;
      }

      return this._iterate(e, i + 1), this;
    }, t.Timeline.prototype.forEachAtTime = function (t, e) {
      var i = this._search(t);

      return -1 !== i && this._iterate(function (i) {
        i.time === t && e.call(this, i);
      }, 0, i), this;
    }, t.Timeline.prototype.dispose = function () {
      return t.prototype.dispose.call(this), this._timeline = null, this;
    }, t.Timeline;
  }), t(function (t) {
    var e;
    t.supported && (!window.hasOwnProperty("OfflineAudioContext") && window.hasOwnProperty("webkitOfflineAudioContext") && (window.OfflineAudioContext = window.webkitOfflineAudioContext), e = new OfflineAudioContext(1, 1, 44100), e.startRendering() instanceof Promise || (OfflineAudioContext.prototype._native_startRendering = OfflineAudioContext.prototype.startRendering, OfflineAudioContext.prototype.startRendering = function () {
      return new Promise(function (t) {
        this.oncomplete = function (e) {
          t(e.renderedBuffer);
        }, this._native_startRendering();
      }.bind(this));
    }));
  }), t(function (t) {
    var e, i, n, s;

    if (t.supported) {
      !window.hasOwnProperty("AudioContext") && window.hasOwnProperty("webkitAudioContext") && (window.AudioContext = window.webkitAudioContext), AudioContext.prototype.close || (AudioContext.prototype.close = function () {
        return t.isFunction(this.suspend) && this.suspend(), Promise.resolve();
      }), AudioContext.prototype.resume || (AudioContext.prototype.resume = function () {
        return Promise.resolve();
      }), !AudioContext.prototype.createGain && AudioContext.prototype.createGainNode && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode), !AudioContext.prototype.createDelay && AudioContext.prototype.createDelayNode && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode), e = !1, i = new OfflineAudioContext(1, 1, 44100), n = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;

      try {
        s = i.decodeAudioData(n), s instanceof Promise && (e = !0);
      } catch (t) {
        e = !1;
      }

      e || (AudioContext.prototype._native_decodeAudioData = AudioContext.prototype.decodeAudioData, AudioContext.prototype.decodeAudioData = function (t) {
        return new Promise(function (e, i) {
          this._native_decodeAudioData(t, e, i);
        }.bind(this));
      });
    }
  }), t(function (t) {
    t.Context = function () {
      var i, n;
      if (t.Emitter.call(this), i = t.defaults(arguments, ["context"], t.Context), !i.context && (i.context = new window.AudioContext(), !i.context)) throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");
      this._context = i.context;

      for (n in this._context) {
        this._defineProperty(this._context, n);
      }

      this._latencyHint = i.latencyHint, this._constants = {}, this.lookAhead = i.lookAhead, this._computedUpdateInterval = 0, this._ticker = new e(this.emit.bind(this, "tick"), i.clockSource, i.updateInterval), this._timeouts = new t.Timeline(), this._timeoutIds = 0, this.on("tick", this._timeoutLoop.bind(this));
    }, t.extend(t.Context, t.Emitter), t.Emitter.mixin(t.Context), t.Context.defaults = {
      clockSource: "worker",
      latencyHint: "interactive",
      lookAhead: .1,
      updateInterval: .03
    }, t.Context.prototype._defineProperty = function (e, i) {
      t.isUndef(this[i]) && Object.defineProperty(this, i, {
        get: function get() {
          return "function" == typeof e[i] ? e[i].bind(e) : e[i];
        },
        set: function set(t) {
          e[i] = t;
        }
      });
    }, t.Context.prototype.now = function () {
      return this._context.currentTime + this.lookAhead;
    }, t.Context.prototype.ready = function () {
      return new Promise(function (t) {
        "running" === this._context.state ? t() : this._context.resume().then(function () {
          t();
        });
      }.bind(this));
    }, t.Context.prototype.close = function () {
      return this._context.close().then(function () {
        t.Context.emit("close", this);
      }.bind(this));
    }, t.Context.prototype.getConstant = function (t) {
      var e, i, n, s;
      if (this._constants[t]) return this._constants[t];

      for (e = this._context.createBuffer(1, 128, this._context.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) {
        i[n] = t;
      }

      return s = this._context.createBufferSource(), s.channelCount = 1, s.channelCountMode = "explicit", s.buffer = e, s.loop = !0, s.start(0), this._constants[t] = s, s;
    }, t.Context.prototype._timeoutLoop = function () {
      for (var t = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t;) {
        this._timeouts.shift().callback();
      }
    }, t.Context.prototype.setTimeout = function (t, e) {
      this._timeoutIds++;
      var i = this.now();
      return this._timeouts.add({
        callback: t,
        time: i + e,
        id: this._timeoutIds
      }), this._timeoutIds;
    }, t.Context.prototype.clearTimeout = function (t) {
      return this._timeouts.forEach(function (e) {
        e.id === t && this.remove(e);
      }), this;
    }, Object.defineProperty(t.Context.prototype, "updateInterval", {
      get: function get() {
        return this._ticker.updateInterval;
      },
      set: function set(t) {
        this._ticker.updateInterval = t;
      }
    }), Object.defineProperty(t.Context.prototype, "clockSource", {
      get: function get() {
        return this._ticker.type;
      },
      set: function set(t) {
        this._ticker.type = t;
      }
    }), Object.defineProperty(t.Context.prototype, "latencyHint", {
      get: function get() {
        return this._latencyHint;
      },
      set: function set(e) {
        var i = e;
        if (this._latencyHint = e, t.isString(e)) switch (e) {
          case "interactive":
            i = .1, this._context.latencyHint = e;
            break;

          case "playback":
            i = .8, this._context.latencyHint = e;
            break;

          case "balanced":
            i = .25, this._context.latencyHint = e;
            break;

          case "fastest":
            this._context.latencyHint = "interactive", i = .01;
        }
        this.lookAhead = i, this.updateInterval = i / 3;
      }
    }), t.Context.prototype.dispose = function () {
      return this.close().then(function () {
        t.Emitter.prototype.dispose.call(this), this._ticker.dispose(), this._ticker = null, this._timeouts.dispose(), this._timeouts = null;

        for (var e in this._constants) {
          this._constants[e].disconnect();
        }

        this._constants = null;
      }.bind(this));
    };

    var e = function e(_e, i, n) {
      this._type = i, this._updateInterval = n, this._callback = t.defaultArg(_e, t.noOp), this._createClock();
    };

    return e.Type = {
      Worker: "worker",
      Timeout: "timeout",
      Offline: "offline"
    }, e.prototype._createWorker = function () {
      var t, e, i;
      window.URL = window.URL || window.webkitURL, t = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"]), e = URL.createObjectURL(t), i = new Worker(e), i.onmessage = this._callback.bind(this), this._worker = i;
    }, e.prototype._createTimeout = function () {
      this._timeout = setTimeout(function () {
        this._createTimeout(), this._callback();
      }.bind(this), 1e3 * this._updateInterval);
    }, e.prototype._createClock = function () {
      if (this._type === e.Type.Worker) try {
        this._createWorker();
      } catch (t) {
        this._type = e.Type.Timeout, this._createClock();
      } else this._type === e.Type.Timeout && this._createTimeout();
    }, Object.defineProperty(e.prototype, "updateInterval", {
      get: function get() {
        return this._updateInterval;
      },
      set: function set(t) {
        this._updateInterval = Math.max(t, 128 / 44100), this._type === e.Type.Worker && this._worker.postMessage(Math.max(1e3 * t, 1));
      }
    }), Object.defineProperty(e.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(t) {
        this._disposeClock(), this._type = t, this._createClock();
      }
    }), e.prototype._disposeClock = function () {
      this._timeout && (clearTimeout(this._timeout), this._timeout = null), this._worker && (this._worker.terminate(), this._worker.onmessage = null, this._worker = null);
    }, e.prototype.dispose = function () {
      this._disposeClock(), this._callback = null;
    }, t.getContext(function () {
      function e(e, i, s) {
        if (e.input) return s = t.defaultArg(s, 0), t.isArray(e.input) ? this.connect(e.input[s]) : this.connect(e.input, i, s);

        try {
          return e instanceof AudioNode ? (n.call(this, e, i, s), e) : (n.call(this, e, i), e);
        } catch (t) {
          throw new Error("error connecting to node: " + e + "\n" + t);
        }
      }

      function i(e, i, n) {
        if (e && e.input && t.isArray(e.input)) n = t.defaultArg(n, 0), this.disconnect(e.input[n], i, 0);else if (e && e.input) this.disconnect(e.input, i, n);else try {
          s.apply(this, arguments);
        } catch (t) {
          throw new Error("error disconnecting node: " + e + "\n" + t);
        }
      }

      var n = AudioNode.prototype.connect,
          s = AudioNode.prototype.disconnect;
      AudioNode.prototype.connect !== e && (AudioNode.prototype.connect = e, AudioNode.prototype.disconnect = i);
    }), t.supported && !t.initialized ? (t.context = new t.Context(), window.TONE_SILENCE_VERSION_LOGGING || console.log("%c * Tone.js " + t.version + " * ", "background: #000; color: #fff")) : t.supported || console.warn("This browser does not support Tone.js"), t.Context;
  }), t(function (t) {
    return t.AudioNode = function () {
      t.call(this);
      var e = t.defaults(arguments, ["context"], {
        context: t.context
      });
      this._context = e.context;
    }, t.extend(t.AudioNode), Object.defineProperty(t.AudioNode.prototype, "context", {
      get: function get() {
        return this._context;
      }
    }), t.AudioNode.prototype.createInsOuts = function (t, e) {
      1 === t ? this.input = this.context.createGain() : t > 1 && (this.input = new Array(t)), 1 === e ? this.output = this.context.createGain() : e > 1 && (this.output = new Array(e));
    }, Object.defineProperty(t.AudioNode.prototype, "channelCount", {
      get: function get() {
        return this.output.channelCount;
      },
      set: function set(t) {
        return this.output.channelCount = t;
      }
    }), Object.defineProperty(t.AudioNode.prototype, "channelCountMode", {
      get: function get() {
        return this.output.channelCountMode;
      },
      set: function set(t) {
        return this.output.channelCountMode = t;
      }
    }), Object.defineProperty(t.AudioNode.prototype, "channelInterpretation", {
      get: function get() {
        return this.output.channelInterpretation;
      },
      set: function set(t) {
        return this.output.channelInterpretation = t;
      }
    }), Object.defineProperty(t.AudioNode.prototype, "numberOfInputs", {
      get: function get() {
        return this.input ? t.isArray(this.input) ? this.input.length : 1 : 0;
      }
    }), Object.defineProperty(t.AudioNode.prototype, "numberOfOutputs", {
      get: function get() {
        return this.output ? t.isArray(this.output) ? this.output.length : 1 : 0;
      }
    }), t.AudioNode.prototype._onConnect = function () {}, t.AudioNode.prototype.connect = function (e, i, n) {
      return e._onConnect && e._onConnect(this), t.isArray(this.output) ? (i = t.defaultArg(i, 0), this.output[i].connect(e, 0, n)) : this.output.connect(e, i, n), this;
    }, t.AudioNode.prototype.disconnect = function (e, i, n) {
      t.isArray(this.output) ? t.isNumber(e) ? this.output[e].disconnect() : (i = t.defaultArg(i, 0), this.output[i].disconnect(e, 0, n)) : this.output.disconnect.apply(this.output, arguments);
    }, t.AudioNode.prototype.chain = function () {
      var t,
          e,
          i = this;

      for (t = 0; t < arguments.length; t++) {
        e = arguments[t], i.connect(e), i = e;
      }

      return this;
    }, t.AudioNode.prototype.fan = function () {
      for (var t = 0; t < arguments.length; t++) {
        this.connect(arguments[t]);
      }

      return this;
    }, window.AudioNode && (AudioNode.prototype.chain = t.AudioNode.prototype.chain, AudioNode.prototype.fan = t.AudioNode.prototype.fan), t.AudioNode.prototype.dispose = function () {
      return t.isDefined(this.input) && (this.input instanceof AudioNode && this.input.disconnect(), this.input = null), t.isDefined(this.output) && (this.output instanceof AudioNode && this.output.disconnect(), this.output = null), this._context = null, this;
    }, t.AudioNode;
  }), t(function (t) {
    return t.SignalBase = function () {
      t.AudioNode.call(this);
    }, t.extend(t.SignalBase, t.AudioNode), t.SignalBase.prototype.connect = function (e, i, n) {
      return t.Signal && t.Signal === e.constructor || t.Param && t.Param === e.constructor ? (e._param.cancelScheduledValues(0), e._param.value = 0, e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0), e.value = 0), t.AudioNode.prototype.connect.call(this, e, i, n), this;
    }, t.SignalBase;
  }), t(function (t) {
    var e, i;
    t.supported && (e = navigator.userAgent.toLowerCase(), e.includes("safari") && !e.includes("chrome") && (i = function i(t) {
      this._internalNode = this.input = this.output = t._native_createWaveShaper(), this._curve = null;

      for (var e in this._internalNode) {
        this._defineProperty(this._internalNode, e);
      }
    }, Object.defineProperty(i.prototype, "curve", {
      get: function get() {
        return this._curve;
      },
      set: function set(t) {
        this._curve = t;
        var e = new Float32Array(t.length + 1);
        e.set(t, 1), e[0] = t[0], this._internalNode.curve = e;
      }
    }), i.prototype._defineProperty = function (e, i) {
      t.isUndef(this[i]) && Object.defineProperty(this, i, {
        get: function get() {
          return "function" == typeof e[i] ? e[i].bind(e) : e[i];
        },
        set: function set(t) {
          e[i] = t;
        }
      });
    }, AudioContext.prototype._native_createWaveShaper = AudioContext.prototype.createWaveShaper, AudioContext.prototype.createWaveShaper = function () {
      return new i(this);
    }));
  }), t(function (t) {
    return t.WaveShaper = function (e, i) {
      t.SignalBase.call(this), this._shaper = this.input = this.output = this.context.createWaveShaper(), this._curve = null, Array.isArray(e) ? this.curve = e : isFinite(e) || t.isUndef(e) ? this._curve = new Float32Array(t.defaultArg(e, 1024)) : t.isFunction(e) && (this._curve = new Float32Array(t.defaultArg(i, 1024)), this.setMap(e));
    }, t.extend(t.WaveShaper, t.SignalBase), t.WaveShaper.prototype.setMap = function (t) {
      var e,
          i,
          n,
          s = new Array(this._curve.length);

      for (e = 0, i = this._curve.length; e < i; e++) {
        n = e / (i - 1) * 2 - 1, s[e] = t(n, e);
      }

      return this.curve = s, this;
    }, Object.defineProperty(t.WaveShaper.prototype, "curve", {
      get: function get() {
        return this._shaper.curve;
      },
      set: function set(t) {
        this._curve = new Float32Array(t), this._shaper.curve = this._curve;
      }
    }), Object.defineProperty(t.WaveShaper.prototype, "oversample", {
      get: function get() {
        return this._shaper.oversample;
      },
      set: function set(t) {
        if (!["none", "2x", "4x"].includes(t)) throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
        this._shaper.oversample = t;
      }
    }), t.WaveShaper.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._shaper.disconnect(), this._shaper = null, this._curve = null, this;
    }, t.WaveShaper;
  }), t(function (t) {
    return t.TimeBase = function (e, i) {
      if (!(this instanceof t.TimeBase)) return new t.TimeBase(e, i);
      if (this._val = e, this._units = i, t.isUndef(this._units) && t.isString(this._val) && parseFloat(this._val) == this._val && "+" !== this._val.charAt(0)) this._val = parseFloat(this._val), this._units = this._defaultUnits;else if (e && e.constructor === this.constructor) this._val = e._val, this._units = e._units;else if (e instanceof t.TimeBase) switch (this._defaultUnits) {
        case "s":
          this._val = e.toSeconds();
          break;

        case "i":
          this._val = e.toTicks();
          break;

        case "hz":
          this._val = e.toFrequency();
          break;

        case "midi":
          this._val = e.toMidi();
          break;

        default:
          throw new Error("Unrecognized default units " + this._defaultUnits);
      }
    }, t.extend(t.TimeBase), t.TimeBase.prototype._expressions = {
      n: {
        regexp: /^(\d+)n(\.?)$/i,
        method: function method(t, e) {
          t = parseInt(t);
          var i = "." === e ? 1.5 : 1;
          return 1 === t ? this._beatsToUnits(this._getTimeSignature()) * i : this._beatsToUnits(4 / t) * i;
        }
      },
      t: {
        regexp: /^(\d+)t$/i,
        method: function method(t) {
          return t = parseInt(t), this._beatsToUnits(8 / (3 * parseInt(t)));
        }
      },
      m: {
        regexp: /^(\d+)m$/i,
        method: function method(t) {
          return this._beatsToUnits(parseInt(t) * this._getTimeSignature());
        }
      },
      i: {
        regexp: /^(\d+)i$/i,
        method: function method(t) {
          return this._ticksToUnits(parseInt(t));
        }
      },
      hz: {
        regexp: /^(\d+(?:\.\d+)?)hz$/i,
        method: function method(t) {
          return this._frequencyToUnits(parseFloat(t));
        }
      },
      tr: {
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
        method: function method(t, e, i) {
          var n = 0;
          return t && "0" !== t && (n += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (n += this._beatsToUnits(parseFloat(e))), i && "0" !== i && (n += this._beatsToUnits(parseFloat(i) / 4)), n;
        }
      },
      s: {
        regexp: /^(\d+(?:\.\d+)?)s$/,
        method: function method(t) {
          return this._secondsToUnits(parseFloat(t));
        }
      },
      samples: {
        regexp: /^(\d+)samples$/,
        method: function method(t) {
          return parseInt(t) / this.context.sampleRate;
        }
      },
      default: {
        regexp: /^(\d+(?:\.\d+)?)$/,
        method: function method(t) {
          return this._expressions[this._defaultUnits].method.call(this, t);
        }
      }
    }, t.TimeBase.prototype._defaultUnits = "s", t.TimeBase.prototype._getBpm = function () {
      return t.Transport ? t.Transport.bpm.value : 120;
    }, t.TimeBase.prototype._getTimeSignature = function () {
      return t.Transport ? t.Transport.timeSignature : 4;
    }, t.TimeBase.prototype._getPPQ = function () {
      return t.Transport ? t.Transport.PPQ : 192;
    }, t.TimeBase.prototype._now = function () {
      return this.now();
    }, t.TimeBase.prototype._frequencyToUnits = function (t) {
      return 1 / t;
    }, t.TimeBase.prototype._beatsToUnits = function (t) {
      return 60 / this._getBpm() * t;
    }, t.TimeBase.prototype._secondsToUnits = function (t) {
      return t;
    }, t.TimeBase.prototype._ticksToUnits = function (t) {
      return t * (this._beatsToUnits(1) / this._getPPQ());
    }, t.TimeBase.prototype._noArg = function () {
      return this._now();
    }, t.TimeBase.prototype.valueOf = function () {
      var e, i, n;
      if (t.isUndef(this._val)) return this._noArg();
      if (t.isString(this._val) && t.isUndef(this._units)) for (e in this._expressions) {
        if (this._expressions[e].regexp.test(this._val.trim())) {
          this._units = e;
          break;
        }
      }
      return t.isDefined(this._units) ? (i = this._expressions[this._units], n = this._val.toString().trim().match(i.regexp), n ? i.method.apply(this, n.slice(1)) : i.method.call(this, parseFloat(this._val))) : this._val;
    }, t.TimeBase.prototype.toSeconds = function () {
      return this.valueOf();
    }, t.TimeBase.prototype.toFrequency = function () {
      return 1 / this.toSeconds();
    }, t.TimeBase.prototype.toSamples = function () {
      return this.toSeconds() * this.context.sampleRate;
    }, t.TimeBase.prototype.toMilliseconds = function () {
      return 1e3 * this.toSeconds();
    }, t.TimeBase.prototype.dispose = function () {
      this._val = null, this._units = null;
    }, t.TimeBase;
  }), t(function (t) {
    var e, i;
    return t.Frequency = function (e, i) {
      if (!(this instanceof t.Frequency)) return new t.Frequency(e, i);
      t.TimeBase.call(this, e, i);
    }, t.extend(t.Frequency, t.TimeBase), t.Frequency.prototype._expressions = Object.assign({}, t.TimeBase.prototype._expressions, {
      midi: {
        regexp: /^(\d+(?:\.\d+)?midi)/,
        method: function method(e) {
          return "midi" === this._defaultUnits ? e : t.Frequency.mtof(e);
        }
      },
      note: {
        regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
        method: function method(i, n) {
          var s = e[i.toLowerCase()],
              o = s + 12 * (parseInt(n) + 1);
          return "midi" === this._defaultUnits ? o : t.Frequency.mtof(o);
        }
      },
      tr: {
        regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
        method: function method(t, e, i) {
          var n = 1;
          return t && "0" !== t && (n *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))), e && "0" !== e && (n *= this._beatsToUnits(parseFloat(e))), i && "0" !== i && (n *= this._beatsToUnits(parseFloat(i) / 4)), n;
        }
      }
    }), t.Frequency.prototype.transpose = function (e) {
      return new this.constructor(this.valueOf() * t.intervalToFrequencyRatio(e));
    }, t.Frequency.prototype.harmonize = function (t) {
      return t.map(function (t) {
        return this.transpose(t);
      }.bind(this));
    }, t.Frequency.prototype.toMidi = function () {
      return t.Frequency.ftom(this.valueOf());
    }, t.Frequency.prototype.toNote = function () {
      var e = this.toFrequency(),
          n = Math.log2(e / t.Frequency.A4),
          s = Math.round(12 * n) + 57,
          o = Math.floor(s / 12);
      return o < 0 && (s += -12 * o), i[s % 12] + o.toString();
    }, t.Frequency.prototype.toSeconds = function () {
      return 1 / t.TimeBase.prototype.toSeconds.call(this);
    }, t.Frequency.prototype.toFrequency = function () {
      return t.TimeBase.prototype.toFrequency.call(this);
    }, t.Frequency.prototype.toTicks = function () {
      var e = this._beatsToUnits(1),
          i = this.valueOf() / e;

      return Math.floor(i * t.Transport.PPQ);
    }, t.Frequency.prototype._noArg = function () {
      return 0;
    }, t.Frequency.prototype._frequencyToUnits = function (t) {
      return t;
    }, t.Frequency.prototype._ticksToUnits = function (e) {
      return 1 / (60 * e / (t.Transport.bpm.value * t.Transport.PPQ));
    }, t.Frequency.prototype._beatsToUnits = function (e) {
      return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e);
    }, t.Frequency.prototype._secondsToUnits = function (t) {
      return 1 / t;
    }, t.Frequency.prototype._defaultUnits = "hz", e = {
      cbb: -2,
      cb: -1,
      c: 0,
      "c#": 1,
      cx: 2,
      dbb: 0,
      db: 1,
      d: 2,
      "d#": 3,
      dx: 4,
      ebb: 2,
      eb: 3,
      e: 4,
      "e#": 5,
      ex: 6,
      fbb: 3,
      fb: 4,
      f: 5,
      "f#": 6,
      fx: 7,
      gbb: 5,
      gb: 6,
      g: 7,
      "g#": 8,
      gx: 9,
      abb: 7,
      ab: 8,
      a: 9,
      "a#": 10,
      ax: 11,
      bbb: 9,
      bb: 10,
      b: 11,
      "b#": 12,
      bx: 13
    }, i = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], t.Frequency.A4 = 440, t.Frequency.mtof = function (e) {
      return t.Frequency.A4 * Math.pow(2, (e - 69) / 12);
    }, t.Frequency.ftom = function (e) {
      return 69 + Math.round(12 * Math.log2(e / t.Frequency.A4));
    }, t.Frequency;
  }), t(function (t) {
    return t.Time = function (e, i) {
      if (!(this instanceof t.Time)) return new t.Time(e, i);
      t.TimeBase.call(this, e, i);
    }, t.extend(t.Time, t.TimeBase), t.Time.prototype._expressions = Object.assign({}, t.TimeBase.prototype._expressions, {
      quantize: {
        regexp: /^@(.+)/,
        method: function method(e) {
          if (t.Transport) {
            var i = new this.constructor(e);
            return t.Transport.nextSubdivision(i);
          }

          return 0;
        }
      },
      now: {
        regexp: /^\+(.+)/,
        method: function method(t) {
          return this._now() + new this.constructor(t);
        }
      }
    }), t.Time.prototype.quantize = function (e, i) {
      var n, s, o, r, a;
      return i = t.defaultArg(i, 1), n = new this.constructor(e), s = this.valueOf(), o = Math.round(s / n), r = o * n, a = r - s, s + a * i;
    }, t.Time.prototype.toNotation = function () {
      var e,
          i,
          n,
          s,
          o = this.toSeconds(),
          r = ["1m"];

      for (e = 1; e < 8; e++) {
        i = Math.pow(2, e), r.push(i + "n."), r.push(i + "n"), r.push(i + "t");
      }

      return r.push("0"), n = r[0], s = t.Time(r[0]).toSeconds(), r.forEach(function (e) {
        var i = t.Time(e).toSeconds();
        Math.abs(i - o) < Math.abs(s - o) && (n = e, s = i);
      }), n;
    }, t.Time.prototype.toBarsBeatsSixteenths = function () {
      var t,
          e = this._beatsToUnits(1),
          i = this.valueOf() / e,
          n = Math.floor(i / this._getTimeSignature()),
          s = i % 1 * 4;

      return i = Math.floor(i) % this._getTimeSignature(), s = s.toString(), s.length > 3 && (s = parseFloat(parseFloat(s).toFixed(3))), t = [n, i, s], t.join(":");
    }, t.Time.prototype.toTicks = function () {
      var t = this._beatsToUnits(1),
          e = this.valueOf() / t;

      return Math.round(e * this._getPPQ());
    }, t.Time.prototype.toSeconds = function () {
      return this.valueOf();
    }, t.Time.prototype.toMidi = function () {
      return t.Frequency.ftom(this.toFrequency());
    }, t.Time;
  }), t(function (t) {
    return t.TransportTime = function (e, i) {
      if (!(this instanceof t.TransportTime)) return new t.TransportTime(e, i);
      t.Time.call(this, e, i);
    }, t.extend(t.TransportTime, t.Time), t.TransportTime.prototype._now = function () {
      return t.Transport.seconds;
    }, t.TransportTime;
  }), t(function (t) {
    return t.Type = {
      Default: "number",
      Time: "time",
      Frequency: "frequency",
      TransportTime: "transportTime",
      Ticks: "ticks",
      NormalRange: "normalRange",
      AudioRange: "audioRange",
      Decibels: "db",
      Interval: "interval",
      BPM: "bpm",
      Positive: "positive",
      Gain: "gain",
      Cents: "cents",
      Degrees: "degrees",
      MIDI: "midi",
      BarsBeatsSixteenths: "barsBeatsSixteenths",
      Samples: "samples",
      Hertz: "hertz",
      Note: "note",
      Milliseconds: "milliseconds",
      Seconds: "seconds",
      Notation: "notation"
    }, t.prototype.toSeconds = function (e) {
      return t.isNumber(e) ? e : t.isUndef(e) ? this.now() : t.isString(e) ? new t.Time(e).toSeconds() : e instanceof t.TimeBase ? e.toSeconds() : void 0;
    }, t.prototype.toFrequency = function (e) {
      return t.isNumber(e) ? e : t.isString(e) || t.isUndef(e) ? new t.Frequency(e).valueOf() : e instanceof t.TimeBase ? e.toFrequency() : void 0;
    }, t.prototype.toTicks = function (e) {
      return t.isNumber(e) || t.isString(e) ? new t.TransportTime(e).toTicks() : t.isUndef(e) ? t.Transport.ticks : e instanceof t.TimeBase ? e.toTicks() : void 0;
    }, t;
  }), t(function (t) {
    return t.Param = function () {
      var e = t.defaults(arguments, ["param", "units", "convert"], t.Param);
      t.AudioNode.call(this), this._param = this.input = e.param, this.units = e.units, this.convert = e.convert, this.overridden = !1, this._events = new t.Timeline(1e3), t.isDefined(e.value) && this._param && (this.value = e.value);
    }, t.extend(t.Param, t.AudioNode), t.Param.defaults = {
      units: t.Type.Default,
      convert: !0,
      param: void 0
    }, Object.defineProperty(t.Param.prototype, "value", {
      get: function get() {
        var t = this.now();
        return this._toUnits(this.getValueAtTime(t));
      },
      set: function set(t) {
        this._initialValue = this._fromUnits(t), this.cancelScheduledValues(this.context.currentTime), this.setValueAtTime(t, this.context.currentTime);
      }
    }), Object.defineProperty(t.Param.prototype, "minValue", {
      get: function get() {
        return this.units === t.Type.Time || this.units === t.Type.Frequency || this.units === t.Type.NormalRange || this.units === t.Type.Positive || this.units === t.Type.BPM ? 0 : this.units === t.Type.AudioRange ? -1 : this.units === t.Type.Decibels ? -1 / 0 : this._param.minValue;
      }
    }), Object.defineProperty(t.Param.prototype, "maxValue", {
      get: function get() {
        return this.units === t.Type.NormalRange || this.units === t.Type.AudioRange ? 1 : this._param.maxValue;
      }
    }), t.Param.prototype._fromUnits = function (e) {
      if (!this.convert && !t.isUndef(this.convert) || this.overridden) return e;

      switch (this.units) {
        case t.Type.Time:
          return this.toSeconds(e);

        case t.Type.Frequency:
          return this.toFrequency(e);

        case t.Type.Decibels:
          return t.dbToGain(e);

        case t.Type.NormalRange:
          return Math.min(Math.max(e, 0), 1);

        case t.Type.AudioRange:
          return Math.min(Math.max(e, -1), 1);

        case t.Type.Positive:
          return Math.max(e, 0);

        default:
          return e;
      }
    }, t.Param.prototype._toUnits = function (e) {
      if (!this.convert && !t.isUndef(this.convert)) return e;

      switch (this.units) {
        case t.Type.Decibels:
          return t.gainToDb(e);

        default:
          return e;
      }
    }, t.Param.prototype._minOutput = 1e-5, t.Param.AutomationType = {
      Linear: "linearRampToValueAtTime",
      Exponential: "exponentialRampToValueAtTime",
      Target: "setTargetAtTime",
      SetValue: "setValueAtTime"
    }, t.Param.prototype.setValueAtTime = function (e, i) {
      return i = this.toSeconds(i), e = this._fromUnits(e), this._events.add({
        type: t.Param.AutomationType.SetValue,
        value: e,
        time: i
      }), this._param.setValueAtTime(e, i), this;
    }, t.Param.prototype.getValueAtTime = function (e) {
      var i, n, s, o, r, a;
      return e = this.toSeconds(e), i = this._events.getAfter(e), n = this._events.get(e), s = t.defaultArg(this._initialValue, this._param.defaultValue), o = s, null === n ? o = s : n.type === t.Param.AutomationType.Target ? (r = this._events.getBefore(n.time), a = null === r ? s : r.value, o = this._exponentialApproach(n.time, a, n.value, n.constant, e)) : o = null === i ? n.value : i.type === t.Param.AutomationType.Linear ? this._linearInterpolate(n.time, n.value, i.time, i.value, e) : i.type === t.Param.AutomationType.Exponential ? this._exponentialInterpolate(n.time, n.value, i.time, i.value, e) : n.value, o;
    }, t.Param.prototype.setRampPoint = function (t) {
      t = this.toSeconds(t);
      var e = this.getValueAtTime(t);
      return this.cancelAndHoldAtTime(t), 0 === e && (e = this._minOutput), this.setValueAtTime(this._toUnits(e), t), this;
    }, t.Param.prototype.linearRampToValueAtTime = function (e, i) {
      return e = this._fromUnits(e), i = this.toSeconds(i), this._events.add({
        type: t.Param.AutomationType.Linear,
        value: e,
        time: i
      }), this._param.linearRampToValueAtTime(e, i), this;
    }, t.Param.prototype.exponentialRampToValueAtTime = function (e, i) {
      return e = this._fromUnits(e), e = Math.max(this._minOutput, e), i = this.toSeconds(i), this._events.add({
        type: t.Param.AutomationType.Exponential,
        time: i,
        value: e
      }), this._param.exponentialRampToValueAtTime(e, i), this;
    }, t.Param.prototype.exponentialRampTo = function (t, e, i) {
      return i = this.toSeconds(i), this.setRampPoint(i), this.exponentialRampToValueAtTime(t, i + this.toSeconds(e)), this;
    }, t.Param.prototype.linearRampTo = function (t, e, i) {
      return i = this.toSeconds(i), this.setRampPoint(i), this.linearRampToValueAtTime(t, i + this.toSeconds(e)), this;
    }, t.Param.prototype.targetRampTo = function (t, e, i) {
      return i = this.toSeconds(i), this.setRampPoint(i), this.exponentialApproachValueAtTime(t, i, e), this;
    }, t.Param.prototype.exponentialApproachValueAtTime = function (t, e, i) {
      var n = Math.log(this.toSeconds(i) + 1) / Math.log(200);
      return e = this.toSeconds(e), this.setTargetAtTime(t, e, n);
    }, t.Param.prototype.setTargetAtTime = function (e, i, n) {
      if (e = this._fromUnits(e), n <= 0) throw new Error("timeConstant must be greater than 0");
      return i = this.toSeconds(i), this._events.add({
        type: t.Param.AutomationType.Target,
        value: e,
        time: i,
        constant: n
      }), this._param.setTargetAtTime(e, i, n), this;
    }, t.Param.prototype.setValueCurveAtTime = function (e, i, n, s) {
      var o, r;

      for (s = t.defaultArg(s, 1), n = this.toSeconds(n), i = this.toSeconds(i), this.setValueAtTime(e[0] * s, i), o = n / (e.length - 1), r = 1; r < e.length; r++) {
        this.linearRampToValueAtTime(e[r] * s, i + r * o);
      }

      return this;
    }, t.Param.prototype.cancelScheduledValues = function (t) {
      return t = this.toSeconds(t), this._events.cancel(t), this._param.cancelScheduledValues(t), this;
    }, t.Param.prototype.cancelAndHoldAtTime = function (e) {
      var i = this.getValueAtTime(e),
          n = this._events.get(e),
          s = this._events.getAfter(e);

      return n && n.time === e ? s ? this._events.cancel(s.time) : this._events.cancel(e + 1e-6) : s && (this._events.cancel(s.time), this._param.cancelAndHoldAtTime || this._param.cancelScheduledValues(e), s.type === t.Param.AutomationType.Linear ? this._param.cancelAndHoldAtTime ? this._events.add({
        type: t.Param.AutomationType.Linear,
        value: i,
        time: e
      }) : this.linearRampToValueAtTime(i, e) : s.type === t.Param.AutomationType.Exponential && (this._param.cancelAndHoldAtTime ? this._events.add({
        type: t.Param.AutomationType.Exponential,
        value: i,
        time: e
      }) : this.exponentialRampToValueAtTime(i, e))), this._events.add({
        type: t.Param.AutomationType.SetValue,
        value: i,
        time: e
      }), this._param.cancelAndHoldAtTime ? this._param.cancelAndHoldAtTime(e) : this._param.setValueAtTime(i, e), this;
    }, t.Param.prototype.rampTo = function (e, i, n) {
      return i = t.defaultArg(i, .1), this.units === t.Type.Frequency || this.units === t.Type.BPM || this.units === t.Type.Decibels ? this.exponentialRampTo(e, i, n) : this.linearRampTo(e, i, n), this;
    }, t.Param.prototype._exponentialApproach = function (t, e, i, n, s) {
      return i + (e - i) * Math.exp(-(s - t) / n);
    }, t.Param.prototype._linearInterpolate = function (t, e, i, n, s) {
      return e + (s - t) / (i - t) * (n - e);
    }, t.Param.prototype._exponentialInterpolate = function (t, e, i, n, s) {
      return e * Math.pow(n / e, (s - t) / (i - t));
    }, t.Param.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._param = null, this._events = null, this;
    }, t.Param;
  }), t(function (t) {
    return t.OfflineContext = function (e, i, n) {
      var s = new OfflineAudioContext(e, i * n, n);
      t.Context.call(this, {
        context: s,
        clockSource: "offline",
        lookAhead: 0,
        updateInterval: 128 / n
      }), this._duration = i, this._currentTime = 0;
    }, t.extend(t.OfflineContext, t.Context), t.OfflineContext.prototype.now = function () {
      return this._currentTime;
    }, t.OfflineContext.prototype.render = function () {
      for (; this._duration - this._currentTime >= 0;) {
        this.emit("tick"), this._currentTime += this.blockTime;
      }

      return this._context.startRendering();
    }, t.OfflineContext.prototype.close = function () {
      return this._context = null, Promise.resolve();
    }, t.OfflineContext;
  }), t(function (t) {
    var e;
    t.supported && (e = navigator.userAgent.toLowerCase(), e.includes("safari") && !e.includes("chrome") && e.includes("mobile") && (t.OfflineContext.prototype.createBufferSource = function () {
      var t = this._context.createBufferSource(),
          e = t.start;

      return t.start = function (i) {
        this.setTimeout(function () {
          e.call(t, i);
        }.bind(this), 0);
      }.bind(this), t;
    }));
  }), t(function (t) {
    return t.Gain = function () {
      var e = t.defaults(arguments, ["gain", "units"], t.Gain);
      t.AudioNode.call(this), this.input = this.output = this._gainNode = this.context.createGain(), this.gain = new t.Param({
        param: this._gainNode.gain,
        units: e.units,
        value: e.gain,
        convert: e.convert
      }), this._readOnly("gain");
    }, t.extend(t.Gain, t.AudioNode), t.Gain.defaults = {
      gain: 1,
      convert: !0
    }, t.Gain.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this), this._gainNode.disconnect(), this._gainNode = null, this._writable("gain"), this.gain.dispose(), this.gain = null;
    }, t.Gain;
  }), t(function (t) {
    if (t.supported && !AudioContext.prototype.createConstantSource) {
      var e = function e(t) {
        var e, i, n, s;

        for (this.context = t, e = t.createBuffer(1, 128, t.sampleRate), i = e.getChannelData(0), n = 0; n < i.length; n++) {
          i[n] = 1;
        }

        this._bufferSource = t.createBufferSource(), this._bufferSource.channelCount = 1, this._bufferSource.channelCountMode = "explicit", this._bufferSource.buffer = e, this._bufferSource.loop = !0, s = this._output = t.createGain(), this.offset = s.gain, this._bufferSource.connect(s);
      };

      e.prototype.start = function (t) {
        return this._bufferSource.start(t), this;
      }, e.prototype.stop = function (t) {
        return this._bufferSource.stop(t), this;
      }, e.prototype.connect = function () {
        return this._output.connect.apply(this._output, arguments), this;
      }, e.prototype.disconnect = function () {
        return this._output.disconnect.apply(this._output, arguments), this;
      }, AudioContext.prototype.createConstantSource = function () {
        return new e(this);
      }, t.Context.prototype.createConstantSource = function () {
        return new e(this);
      };
    }
  }), t(function (t) {
    return t.Signal = function () {
      var e = t.defaults(arguments, ["value", "units"], t.Signal);
      t.Param.call(this, e), this._proxies = [], this._sourceStarted = !1, this._constantSource = this.context.createConstantSource(), this._param = this._constantSource.offset, this.value = e.value, this.output = this._constantSource, this.input = this._param = this.output.offset;
    }, t.extend(t.Signal, t.Param), t.Signal.defaults = {
      value: 0,
      units: t.Type.Default,
      convert: !0
    }, t.Signal.prototype.connect = function (e) {
      return this._isParam(e) && !this._sourceStarted ? (this._proxies.push(e), e.overridden = !0, this._applyAutomations(e)) : (t.SignalBase.prototype.connect.apply(this, arguments), this._sourceStarted || (this._sourceStarted = !0, this._constantSource.start(0))), this;
    }, t.Signal.prototype._isParam = function (e) {
      return t.Param && t.Param === e.constructor || e instanceof AudioParam;
    }, t.Signal.prototype._connectProxies = function () {
      this._sourceStarted || (this._sourceStarted = !0, this._constantSource.start(0)), this._proxies.forEach(function (e) {
        t.SignalBase.prototype.connect.call(this, e), e._proxies && e._connectProxies();
      }.bind(this));
    }, t.Signal.prototype._onConnect = function (t) {
      this._isParam(t) || this._connectProxies();
    }, t.Signal.prototype._applyAutomations = function (t) {
      var e,
          i = this.context.currentTime;
      t.cancelScheduledValues(i), e = this.getValueAtTime(i), t.setValueAtTime(e, i), this._events.forEachFrom(i, function (e) {
        t[e.type](e.value, e.time, e.constant);
      });
    }, t.Signal.prototype.disconnect = function (e) {
      if (this._proxies.includes(e)) {
        var i = this._proxies.indexOf(e);

        this._proxies.splice(i, 1);
      } else e || (this._proxies = []);

      return t.SignalBase.prototype.disconnect.apply(this, arguments);
    }, t.Signal.prototype.getValueAtTime = function (e) {
      return this._param.getValueAtTime ? this._param.getValueAtTime(e) : t.Param.prototype.getValueAtTime.call(this, e);
    }, ["setValueAtTime", "linearRampToValueAtTime", "exponentialRampToValueAtTime", "setTargetAtTime"].forEach(function (e) {
      var i = t.Signal.prototype[e];

      t.Signal.prototype[e] = function () {
        var t = arguments;
        i.apply(this, arguments), t[0] = this._fromUnits(t[0]), t[1] = this.toSeconds(t[1]), this._proxies.forEach(function (i) {
          i[e].apply(i, t);
        });
      };
    }), ["cancelScheduledValues", "cancelAndHoldAtTime"].forEach(function (e) {
      var i = t.Signal.prototype[e];

      t.Signal.prototype[e] = function () {
        var t = arguments;
        i.apply(this, arguments), t[0] = this.toSeconds(t[0]), this._proxies.forEach(function (i) {
          i[e].apply(i, t);
        });
      };
    }), t.Signal.prototype.dispose = function () {
      return t.Param.prototype.dispose.call(this), this._constantSource.disconnect(), this._constantSource = null, this._proxies = null, this;
    }, t.Signal;
  }), t(function (t) {
    return t.Pow = function (e) {
      t.SignalBase.call(this), this._exp = t.defaultArg(e, 1), this._expScaler = this.input = this.output = new t.WaveShaper(this._expFunc(this._exp), 8192);
    }, t.extend(t.Pow, t.SignalBase), Object.defineProperty(t.Pow.prototype, "value", {
      get: function get() {
        return this._exp;
      },
      set: function set(t) {
        this._exp = t, this._expScaler.setMap(this._expFunc(this._exp));
      }
    }), t.Pow.prototype._expFunc = function (t) {
      return function (e) {
        return Math.pow(Math.abs(e), t);
      };
    }, t.Pow.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._expScaler.dispose(), this._expScaler = null, this;
    }, t.Pow;
  }), t(function (t) {
    return t.Envelope = function () {
      var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
      t.AudioNode.call(this), this.attack = e.attack, this.decay = e.decay, this.sustain = e.sustain, this.release = e.release, this._attackCurve = "linear", this._releaseCurve = "exponential", this._sig = this.output = new t.Signal(0), this.attackCurve = e.attackCurve, this.releaseCurve = e.releaseCurve;
    }, t.extend(t.Envelope, t.AudioNode), t.Envelope.defaults = {
      attack: .01,
      decay: .1,
      sustain: .5,
      release: 1,
      attackCurve: "linear",
      releaseCurve: "exponential"
    }, Object.defineProperty(t.Envelope.prototype, "value", {
      get: function get() {
        return this.getValueAtTime(this.now());
      }
    }), Object.defineProperty(t.Envelope.prototype, "attackCurve", {
      get: function get() {
        if (t.isString(this._attackCurve)) return this._attackCurve;

        if (t.isArray(this._attackCurve)) {
          for (var e in t.Envelope.Type) {
            if (t.Envelope.Type[e].In === this._attackCurve) return e;
          }

          return this._attackCurve;
        }
      },
      set: function set(e) {
        if (t.Envelope.Type.hasOwnProperty(e)) {
          var i = t.Envelope.Type[e];
          t.isObject(i) ? this._attackCurve = i.In : this._attackCurve = i;
        } else {
          if (!t.isArray(e)) throw new Error("Tone.Envelope: invalid curve: " + e);
          this._attackCurve = e;
        }
      }
    }), Object.defineProperty(t.Envelope.prototype, "releaseCurve", {
      get: function get() {
        if (t.isString(this._releaseCurve)) return this._releaseCurve;

        if (t.isArray(this._releaseCurve)) {
          for (var e in t.Envelope.Type) {
            if (t.Envelope.Type[e].Out === this._releaseCurve) return e;
          }

          return this._releaseCurve;
        }
      },
      set: function set(e) {
        if (t.Envelope.Type.hasOwnProperty(e)) {
          var i = t.Envelope.Type[e];
          t.isObject(i) ? this._releaseCurve = i.Out : this._releaseCurve = i;
        } else {
          if (!t.isArray(e)) throw new Error("Tone.Envelope: invalid curve: " + e);
          this._releaseCurve = e;
        }
      }
    }), t.Envelope.prototype.triggerAttack = function (e, i) {
      var n, s, o, r, a, h, l, u, c;
      return e = this.toSeconds(e), n = this.toSeconds(this.attack), s = n, o = this.toSeconds(this.decay), i = t.defaultArg(i, 1), r = this.getValueAtTime(e), r > 0 && (a = 1 / s, h = 1 - r, s = h / a), "linear" === this._attackCurve ? this._sig.linearRampTo(i, s, e) : "exponential" === this._attackCurve ? this._sig.targetRampTo(i, s, e) : s > 0 && (this._sig.cancelAndHoldAtTime(e), l = this._attackCurve, s < n && (u = 1 - s / n, c = Math.floor(u * this._attackCurve.length), l = this._attackCurve.slice(c), l[0] = r), this._sig.setValueCurveAtTime(l, e, s, i)), o && this._sig.targetRampTo(i * this.sustain, o, s + e), this;
    }, t.Envelope.prototype.triggerRelease = function (e) {
      var i, n, s;
      return e = this.toSeconds(e), i = this.getValueAtTime(e), i > 0 && (n = this.toSeconds(this.release), "linear" === this._releaseCurve ? this._sig.linearRampTo(0, n, e) : "exponential" === this._releaseCurve ? this._sig.targetRampTo(0, n, e) : (s = this._releaseCurve, t.isArray(s) && (this._sig.cancelAndHoldAtTime(e), this._sig.setValueCurveAtTime(s, e, n, i)))), this;
    }, t.Envelope.prototype.getValueAtTime = function (t) {
      return this._sig.getValueAtTime(t);
    }, t.Envelope.prototype.triggerAttackRelease = function (t, e, i) {
      return e = this.toSeconds(e), this.triggerAttack(e, i), this.triggerRelease(e + this.toSeconds(t)), this;
    }, t.Envelope.prototype.cancel = function (t) {
      return this._sig.cancelScheduledValues(t), this;
    }, t.Envelope.prototype.connect = t.SignalBase.prototype.connect, function () {
      function e(t) {
        var e,
            i = new Array(t.length);

        for (e = 0; e < t.length; e++) {
          i[e] = 1 - t[e];
        }

        return i;
      }

      var i,
          n,
          s,
          o,
          r,
          a,
          h,
          l,
          u,
          c,
          p,
          d = 128,
          f = [];

      for (i = 0; i < d; i++) {
        f[i] = Math.sin(i / (d - 1) * (Math.PI / 2));
      }

      for (s = [], o = 6.4, i = 0; i < d - 1; i++) {
        n = i / (d - 1), r = Math.sin(n * (2 * Math.PI) * o - Math.PI / 2) + 1, s[i] = r / 10 + .83 * n;
      }

      for (s[d - 1] = 1, a = [], h = 5, i = 0; i < d; i++) {
        a[i] = Math.ceil(i / (d - 1) * h) / h;
      }

      for (l = [], i = 0; i < d; i++) {
        n = i / (d - 1), l[i] = .5 * (1 - Math.cos(Math.PI * n));
      }

      for (u = [], i = 0; i < d; i++) {
        n = i / (d - 1), c = 4 * Math.pow(n, 3) + .2, p = Math.cos(c * Math.PI * 2 * n), u[i] = Math.abs(p * (1 - n));
      }

      t.Envelope.Type = {
        linear: "linear",
        exponential: "exponential",
        bounce: {
          In: e(u),
          Out: u
        },
        cosine: {
          In: f,
          Out: function (t) {
            return t.slice(0).reverse();
          }(f)
        },
        step: {
          In: a,
          Out: e(a)
        },
        ripple: {
          In: s,
          Out: e(s)
        },
        sine: {
          In: l,
          Out: e(l)
        }
      };
    }(), t.Envelope.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._sig.dispose(), this._sig = null, this._attackCurve = null, this._releaseCurve = null, this;
    }, t.Envelope;
  }), t(function (t) {
    return t.AmplitudeEnvelope = function () {
      t.Envelope.apply(this, arguments), this.input = this.output = new t.Gain(), this._sig.connect(this.output.gain);
    }, t.extend(t.AmplitudeEnvelope, t.Envelope), t.AmplitudeEnvelope.prototype.dispose = function () {
      return t.Envelope.prototype.dispose.call(this), this;
    }, t.AmplitudeEnvelope;
  }), t(function (t) {
    t.supported && (AnalyserNode.prototype.getFloatTimeDomainData || (AnalyserNode.prototype.getFloatTimeDomainData = function (t) {
      var e,
          i = new Uint8Array(t.length);

      for (this.getByteTimeDomainData(i), e = 0; e < i.length; e++) {
        t[e] = (i[e] - 128) / 128;
      }
    }));
  }), t(function (t) {
    return t.Analyser = function () {
      var e = t.defaults(arguments, ["type", "size"], t.Analyser);
      t.AudioNode.call(this), this._analyser = this.input = this.output = this.context.createAnalyser(), this._type = e.type, this._buffer = null, this.size = e.size, this.type = e.type;
    }, t.extend(t.Analyser, t.AudioNode), t.Analyser.defaults = {
      size: 1024,
      type: "fft",
      smoothing: .8
    }, t.Analyser.Type = {
      Waveform: "waveform",
      FFT: "fft"
    }, t.Analyser.prototype.getValue = function () {
      return this._type === t.Analyser.Type.FFT ? this._analyser.getFloatFrequencyData(this._buffer) : this._type === t.Analyser.Type.Waveform && this._analyser.getFloatTimeDomainData(this._buffer), this._buffer;
    }, Object.defineProperty(t.Analyser.prototype, "size", {
      get: function get() {
        return this._analyser.frequencyBinCount;
      },
      set: function set(t) {
        this._analyser.fftSize = 2 * t, this._buffer = new Float32Array(t);
      }
    }), Object.defineProperty(t.Analyser.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(e) {
        if (e !== t.Analyser.Type.Waveform && e !== t.Analyser.Type.FFT) throw new TypeError("Tone.Analyser: invalid type: " + e);
        this._type = e;
      }
    }), Object.defineProperty(t.Analyser.prototype, "smoothing", {
      get: function get() {
        return this._analyser.smoothingTimeConstant;
      },
      set: function set(t) {
        this._analyser.smoothingTimeConstant = t;
      }
    }), t.Analyser.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this), this._analyser.disconnect(), this._analyser = null, this._buffer = null;
    }, t.Analyser;
  }), t(function (t) {
    return t.Compressor = function () {
      var e = t.defaults(arguments, ["threshold", "ratio"], t.Compressor);
      t.AudioNode.call(this), this._compressor = this.input = this.output = this.context.createDynamicsCompressor(), this.threshold = new t.Param({
        param: this._compressor.threshold,
        units: t.Type.Decibels,
        convert: !1
      }), this.attack = new t.Param(this._compressor.attack, t.Type.Time), this.release = new t.Param(this._compressor.release, t.Type.Time), this.knee = new t.Param({
        param: this._compressor.knee,
        units: t.Type.Decibels,
        convert: !1
      }), this.ratio = new t.Param({
        param: this._compressor.ratio,
        convert: !1
      }), this._readOnly(["knee", "release", "attack", "ratio", "threshold"]), this.set(e);
    }, t.extend(t.Compressor, t.AudioNode), t.Compressor.defaults = {
      ratio: 12,
      threshold: -24,
      release: .25,
      attack: .003,
      knee: 30
    }, t.Compressor.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["knee", "release", "attack", "ratio", "threshold"]), this._compressor.disconnect(), this._compressor = null, this.attack.dispose(), this.attack = null, this.release.dispose(), this.release = null, this.threshold.dispose(), this.threshold = null, this.ratio.dispose(), this.ratio = null, this.knee.dispose(), this.knee = null, this;
    }, t.Compressor;
  }), t(function (t) {
    return t.Add = function (e) {
      t.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.input[1] = this.output = new t.Gain(), this._param = this.input[1] = new t.Signal(e), this._param.connect(this._sum);
    }, t.extend(t.Add, t.Signal), t.Add.prototype.dispose = function () {
      return t.Signal.prototype.dispose.call(this), this._sum.dispose(), this._sum = null, this;
    }, t.Add;
  }), t(function (t) {
    return t.Multiply = function (e) {
      t.Signal.call(this), this.createInsOuts(2, 0), this._mult = this.input[0] = this.output = new t.Gain(), this._param = this.input[1] = this.output.gain, this.value = t.defaultArg(e, 0);
    }, t.extend(t.Multiply, t.Signal), t.Multiply.prototype.dispose = function () {
      return t.Signal.prototype.dispose.call(this), this._mult.dispose(), this._mult = null, this._param = null, this;
    }, t.Multiply;
  }), t(function (t) {
    return t.Negate = function () {
      t.SignalBase.call(this), this._multiply = this.input = this.output = new t.Multiply(-1);
    }, t.extend(t.Negate, t.SignalBase), t.Negate.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._multiply.dispose(), this._multiply = null, this;
    }, t.Negate;
  }), t(function (t) {
    return t.Subtract = function (e) {
      t.Signal.call(this), this.createInsOuts(2, 0), this._sum = this.input[0] = this.output = new t.Gain(), this._neg = new t.Negate(), this._param = this.input[1] = new t.Signal(e), this._param.chain(this._neg, this._sum);
    }, t.extend(t.Subtract, t.Signal), t.Subtract.prototype.dispose = function () {
      return t.Signal.prototype.dispose.call(this), this._neg.dispose(), this._neg = null, this._sum.disconnect(), this._sum = null, this;
    }, t.Subtract;
  }), t(function (t) {
    return t.EqualPowerGain = function () {
      t.SignalBase.call(this), this._eqPower = this.input = this.output = new t.WaveShaper(function (e) {
        return Math.abs(e) < .001 ? 0 : t.equalPowerScale(e);
      }.bind(this), 4096);
    }, t.extend(t.EqualPowerGain, t.SignalBase), t.EqualPowerGain.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._eqPower.dispose(), this._eqPower = null, this;
    }, t.EqualPowerGain;
  }), t(function (t) {
    return t.CrossFade = function (e) {
      t.AudioNode.call(this), this.createInsOuts(2, 1), this.a = this.input[0] = new t.Gain(), this.b = this.input[1] = new t.Gain(), this.fade = new t.Signal(t.defaultArg(e, .5), t.Type.NormalRange), this._equalPowerA = new t.EqualPowerGain(), this._equalPowerB = new t.EqualPowerGain(), this._one = this.context.getConstant(1), this._invert = new t.Subtract(), this.a.connect(this.output), this.b.connect(this.output), this.fade.chain(this._equalPowerB, this.b.gain), this._one.connect(this._invert, 0, 0), this.fade.connect(this._invert, 0, 1), this._invert.chain(this._equalPowerA, this.a.gain), this._readOnly("fade");
    }, t.extend(t.CrossFade, t.AudioNode), t.CrossFade.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable("fade"), this._equalPowerA.dispose(), this._equalPowerA = null, this._equalPowerB.dispose(), this._equalPowerB = null, this.fade.dispose(), this.fade = null, this._invert.dispose(), this._invert = null, this._one = null, this.a.dispose(), this.a = null, this.b.dispose(), this.b = null, this;
    }, t.CrossFade;
  }), t(function (t) {
    return t.Filter = function () {
      var e = t.defaults(arguments, ["frequency", "type", "rolloff"], t.Filter);
      t.AudioNode.call(this), this.createInsOuts(1, 1), this._filters = [], this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(0, t.Type.Cents), this.gain = new t.Signal({
        value: e.gain,
        convert: !1
      }), this.Q = new t.Signal(e.Q), this._type = e.type, this._rolloff = e.rolloff, this.rolloff = e.rolloff, this._readOnly(["detune", "frequency", "gain", "Q"]);
    }, t.extend(t.Filter, t.AudioNode), t.Filter.defaults = {
      type: "lowpass",
      frequency: 350,
      rolloff: -12,
      Q: 1,
      gain: 0
    }, Object.defineProperty(t.Filter.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(t) {
        var e;
        if (-1 === ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "notch", "allpass", "peaking"].indexOf(t)) throw new TypeError("Tone.Filter: invalid type " + t);

        for (this._type = t, e = 0; e < this._filters.length; e++) {
          this._filters[e].type = t;
        }
      }
    }), Object.defineProperty(t.Filter.prototype, "rolloff", {
      get: function get() {
        return this._rolloff;
      },
      set: function set(e) {
        var i, n, s, o, r, a;
        if (e = parseInt(e, 10), i = [-12, -24, -48, -96], -1 === (n = i.indexOf(e))) throw new RangeError("Tone.Filter: rolloff can only be -12, -24, -48 or -96");

        for (n += 1, this._rolloff = e, this.input.disconnect(), s = 0; s < this._filters.length; s++) {
          this._filters[s].disconnect(), this._filters[s] = null;
        }

        for (this._filters = new Array(n), o = 0; o < n; o++) {
          r = this.context.createBiquadFilter(), r.type = this._type, this.frequency.connect(r.frequency), this.detune.connect(r.detune), this.Q.connect(r.Q), this.gain.connect(r.gain), this._filters[o] = r;
        }

        a = [this.input].concat(this._filters).concat([this.output]), t.connectSeries.apply(t, a);
      }
    }), t.Filter.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this);

      for (var e = 0; e < this._filters.length; e++) {
        this._filters[e].disconnect(), this._filters[e] = null;
      }

      return this._filters = null, this._writable(["detune", "frequency", "gain", "Q"]), this.frequency.dispose(), this.Q.dispose(), this.frequency = null, this.Q = null, this.detune.dispose(), this.detune = null, this.gain.dispose(), this.gain = null, this;
    }, t.Filter;
  }), t(function (t) {
    return t.MultibandSplit = function () {
      var e = t.defaults(arguments, ["lowFrequency", "highFrequency"], t.MultibandSplit);
      t.AudioNode.call(this), this.input = new t.Gain(), this.output = new Array(3), this.low = this.output[0] = new t.Filter(0, "lowpass"), this._lowMidFilter = new t.Filter(0, "highpass"), this.mid = this.output[1] = new t.Filter(0, "lowpass"), this.high = this.output[2] = new t.Filter(0, "highpass"), this.lowFrequency = new t.Signal(e.lowFrequency, t.Type.Frequency), this.highFrequency = new t.Signal(e.highFrequency, t.Type.Frequency), this.Q = new t.Signal(e.Q), this.input.fan(this.low, this.high), this.input.chain(this._lowMidFilter, this.mid), this.lowFrequency.connect(this.low.frequency), this.lowFrequency.connect(this._lowMidFilter.frequency), this.highFrequency.connect(this.mid.frequency), this.highFrequency.connect(this.high.frequency), this.Q.connect(this.low.Q), this.Q.connect(this._lowMidFilter.Q), this.Q.connect(this.mid.Q), this.Q.connect(this.high.Q), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"]);
    }, t.extend(t.MultibandSplit, t.AudioNode), t.MultibandSplit.defaults = {
      lowFrequency: 400,
      highFrequency: 2500,
      Q: 1
    }, t.MultibandSplit.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.low = null, this._lowMidFilter.dispose(), this._lowMidFilter = null, this.mid.dispose(), this.mid = null, this.high.dispose(), this.high = null, this.lowFrequency.dispose(), this.lowFrequency = null, this.highFrequency.dispose(), this.highFrequency = null, this.Q.dispose(), this.Q = null, this;
    }, t.MultibandSplit;
  }), t(function (t) {
    return t.EQ3 = function () {
      var e = t.defaults(arguments, ["low", "mid", "high"], t.EQ3);
      t.AudioNode.call(this), this.output = new t.Gain(), this._multibandSplit = this.input = new t.MultibandSplit({
        lowFrequency: e.lowFrequency,
        highFrequency: e.highFrequency
      }), this._lowGain = new t.Gain(e.low, t.Type.Decibels), this._midGain = new t.Gain(e.mid, t.Type.Decibels), this._highGain = new t.Gain(e.high, t.Type.Decibels), this.low = this._lowGain.gain, this.mid = this._midGain.gain, this.high = this._highGain.gain, this.Q = this._multibandSplit.Q, this.lowFrequency = this._multibandSplit.lowFrequency, this.highFrequency = this._multibandSplit.highFrequency, this._multibandSplit.low.chain(this._lowGain, this.output), this._multibandSplit.mid.chain(this._midGain, this.output), this._multibandSplit.high.chain(this._highGain, this.output), this._readOnly(["low", "mid", "high", "lowFrequency", "highFrequency"]);
    }, t.extend(t.EQ3, t.AudioNode), t.EQ3.defaults = {
      low: 0,
      mid: 0,
      high: 0,
      lowFrequency: 400,
      highFrequency: 2500
    }, t.EQ3.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["low", "mid", "high", "lowFrequency", "highFrequency"]), this._multibandSplit.dispose(), this._multibandSplit = null, this.lowFrequency = null, this.highFrequency = null, this._lowGain.dispose(), this._lowGain = null, this._midGain.dispose(), this._midGain = null, this._highGain.dispose(), this._highGain = null, this.low = null, this.mid = null, this.high = null, this.Q = null, this;
    }, t.EQ3;
  }), t(function (t) {
    return t.Scale = function (e, i) {
      t.SignalBase.call(this), this._outputMin = t.defaultArg(e, 0), this._outputMax = t.defaultArg(i, 1), this._scale = this.input = new t.Multiply(1), this._add = this.output = new t.Add(0), this._scale.connect(this._add), this._setRange();
    }, t.extend(t.Scale, t.SignalBase), Object.defineProperty(t.Scale.prototype, "min", {
      get: function get() {
        return this._outputMin;
      },
      set: function set(t) {
        this._outputMin = t, this._setRange();
      }
    }), Object.defineProperty(t.Scale.prototype, "max", {
      get: function get() {
        return this._outputMax;
      },
      set: function set(t) {
        this._outputMax = t, this._setRange();
      }
    }), t.Scale.prototype._setRange = function () {
      this._add.value = this._outputMin, this._scale.value = this._outputMax - this._outputMin;
    }, t.Scale.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._add.dispose(), this._add = null, this._scale.dispose(), this._scale = null, this;
    }, t.Scale;
  }), t(function (t) {
    return t.ScaleExp = function (e, i, n) {
      t.SignalBase.call(this), this._scale = this.output = new t.Scale(e, i), this._exp = this.input = new t.Pow(t.defaultArg(n, 2)), this._exp.connect(this._scale);
    }, t.extend(t.ScaleExp, t.SignalBase), Object.defineProperty(t.ScaleExp.prototype, "exponent", {
      get: function get() {
        return this._exp.value;
      },
      set: function set(t) {
        this._exp.value = t;
      }
    }), Object.defineProperty(t.ScaleExp.prototype, "min", {
      get: function get() {
        return this._scale.min;
      },
      set: function set(t) {
        this._scale.min = t;
      }
    }), Object.defineProperty(t.ScaleExp.prototype, "max", {
      get: function get() {
        return this._scale.max;
      },
      set: function set(t) {
        this._scale.max = t;
      }
    }), t.ScaleExp.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this;
    }, t.ScaleExp;
  }), t(function (t) {
    return t.Delay = function () {
      var e = t.defaults(arguments, ["delayTime", "maxDelay"], t.Delay);
      t.AudioNode.call(this), this._maxDelay = Math.max(this.toSeconds(e.maxDelay), this.toSeconds(e.delayTime)), this._delayNode = this.input = this.output = this.context.createDelay(this._maxDelay), this.delayTime = new t.Param({
        param: this._delayNode.delayTime,
        units: t.Type.Time,
        value: e.delayTime
      }), this._readOnly("delayTime");
    }, t.extend(t.Delay, t.AudioNode), t.Delay.defaults = {
      maxDelay: 1,
      delayTime: 0
    }, Object.defineProperty(t.Delay.prototype, "maxDelay", {
      get: function get() {
        return this._maxDelay;
      }
    }), t.Delay.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._delayNode.disconnect(), this._delayNode = null, this._writable("delayTime"), this.delayTime = null, this;
    }, t.Delay;
  }), t(function (t) {
    return t.FeedbackCombFilter = function () {
      var e = t.defaults(arguments, ["delayTime", "resonance"], t.FeedbackCombFilter);
      t.AudioNode.call(this), this._delay = this.input = this.output = new t.Delay(e.delayTime), this.delayTime = this._delay.delayTime, this._feedback = new t.Gain(e.resonance, t.Type.NormalRange), this.resonance = this._feedback.gain, this._delay.chain(this._feedback, this._delay), this._readOnly(["resonance", "delayTime"]);
    }, t.extend(t.FeedbackCombFilter, t.AudioNode), t.FeedbackCombFilter.defaults = {
      delayTime: .1,
      resonance: .5
    }, t.FeedbackCombFilter.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["resonance", "delayTime"]), this._delay.dispose(), this._delay = null, this.delayTime = null, this._feedback.dispose(), this._feedback = null, this.resonance = null, this;
    }, t.FeedbackCombFilter;
  }), t(function (t) {
    return t.FFT = function () {
      var e = t.defaults(arguments, ["size"], t.FFT);
      e.type = t.Analyser.Type.FFT, t.AudioNode.call(this), this._analyser = this.input = this.output = new t.Analyser(e);
    }, t.extend(t.FFT, t.AudioNode), t.FFT.defaults = {
      size: 1024
    }, t.FFT.prototype.getValue = function () {
      return this._analyser.getValue();
    }, Object.defineProperty(t.FFT.prototype, "size", {
      get: function get() {
        return this._analyser.size;
      },
      set: function set(t) {
        this._analyser.size = t;
      }
    }), t.FFT.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null;
    }, t.FFT;
  }), t(function (t) {
    return t.Abs = function () {
      t.SignalBase.call(this), this._abs = this.input = this.output = new t.WaveShaper(function (t) {
        return Math.abs(t) < .001 ? 0 : Math.abs(t);
      }, 1024);
    }, t.extend(t.Abs, t.SignalBase), t.Abs.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._abs.dispose(), this._abs = null, this;
    }, t.Abs;
  }), t(function (t) {
    return t.Follower = function () {
      var e = t.defaults(arguments, ["attack", "release"], t.Follower);
      t.AudioNode.call(this), this.createInsOuts(1, 1), this._abs = new t.Abs(), this._filter = this.context.createBiquadFilter(), this._filter.type = "lowpass", this._filter.frequency.value = 0, this._filter.Q.value = -100, this._frequencyValues = new t.WaveShaper(), this._sub = new t.Subtract(), this._delay = new t.Delay(this.blockTime), this._mult = new t.Multiply(1e4), this._attack = e.attack, this._release = e.release, this.input.chain(this._abs, this._filter, this.output), this._abs.connect(this._sub, 0, 1), this._filter.chain(this._delay, this._sub), this._sub.chain(this._mult, this._frequencyValues, this._filter.frequency), this._setAttackRelease(this._attack, this._release);
    }, t.extend(t.Follower, t.AudioNode), t.Follower.defaults = {
      attack: .05,
      release: .5
    }, t.Follower.prototype._setAttackRelease = function (e, i) {
      var n = this.blockTime;
      e = t.Time(e).toFrequency(), i = t.Time(i).toFrequency(), e = Math.max(e, n), i = Math.max(i, n), this._frequencyValues.setMap(function (t) {
        return t <= 0 ? e : i;
      });
    }, Object.defineProperty(t.Follower.prototype, "attack", {
      get: function get() {
        return this._attack;
      },
      set: function set(t) {
        this._attack = t, this._setAttackRelease(this._attack, this._release);
      }
    }), Object.defineProperty(t.Follower.prototype, "release", {
      get: function get() {
        return this._release;
      },
      set: function set(t) {
        this._release = t, this._setAttackRelease(this._attack, this._release);
      }
    }), t.Follower.prototype.connect = t.SignalBase.prototype.connect, t.Follower.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._filter.disconnect(), this._filter = null, this._frequencyValues.disconnect(), this._frequencyValues = null, this._delay.dispose(), this._delay = null, this._sub.disconnect(), this._sub = null, this._abs.dispose(), this._abs = null, this._mult.dispose(), this._mult = null, this._curve = null, this;
    }, t.Follower;
  }), t(function (t) {
    return t.ScaledEnvelope = function () {
      var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
      t.Envelope.call(this, e), e = t.defaultArg(e, t.ScaledEnvelope.defaults), this._exp = this.output = new t.Pow(e.exponent), this._scale = this.output = new t.Scale(e.min, e.max), this._sig.chain(this._exp, this._scale);
    }, t.extend(t.ScaledEnvelope, t.Envelope), t.ScaledEnvelope.defaults = {
      min: 0,
      max: 1,
      exponent: 1
    }, Object.defineProperty(t.ScaledEnvelope.prototype, "min", {
      get: function get() {
        return this._scale.min;
      },
      set: function set(t) {
        this._scale.min = t;
      }
    }), Object.defineProperty(t.ScaledEnvelope.prototype, "max", {
      get: function get() {
        return this._scale.max;
      },
      set: function set(t) {
        this._scale.max = t;
      }
    }), Object.defineProperty(t.ScaledEnvelope.prototype, "exponent", {
      get: function get() {
        return this._exp.value;
      },
      set: function set(t) {
        this._exp.value = t;
      }
    }), t.ScaledEnvelope.prototype.dispose = function () {
      return t.Envelope.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._exp.dispose(), this._exp = null, this;
    }, t.ScaledEnvelope;
  }), t(function (t) {
    return t.FrequencyEnvelope = function () {
      var e = t.defaults(arguments, ["attack", "decay", "sustain", "release"], t.Envelope);
      t.ScaledEnvelope.call(this, e), e = t.defaultArg(e, t.FrequencyEnvelope.defaults), this._octaves = e.octaves, this.baseFrequency = e.baseFrequency, this.octaves = e.octaves;
    }, t.extend(t.FrequencyEnvelope, t.Envelope), t.FrequencyEnvelope.defaults = {
      baseFrequency: 200,
      octaves: 4,
      exponent: 2
    }, Object.defineProperty(t.FrequencyEnvelope.prototype, "baseFrequency", {
      get: function get() {
        return this._scale.min;
      },
      set: function set(t) {
        this._scale.min = this.toFrequency(t), this.octaves = this._octaves;
      }
    }), Object.defineProperty(t.FrequencyEnvelope.prototype, "octaves", {
      get: function get() {
        return this._octaves;
      },
      set: function set(t) {
        this._octaves = t, this._scale.max = this.baseFrequency * Math.pow(2, t);
      }
    }), Object.defineProperty(t.FrequencyEnvelope.prototype, "exponent", {
      get: function get() {
        return this._exp.value;
      },
      set: function set(t) {
        this._exp.value = t;
      }
    }), t.FrequencyEnvelope.prototype.dispose = function () {
      return t.ScaledEnvelope.prototype.dispose.call(this), this;
    }, t.FrequencyEnvelope;
  }), t(function (t) {
    return t.GreaterThanZero = function () {
      t.SignalBase.call(this), this._thresh = this.output = new t.WaveShaper(function (t) {
        return t <= 0 ? 0 : 1;
      }, 127), this._scale = this.input = new t.Multiply(1e4), this._scale.connect(this._thresh);
    }, t.extend(t.GreaterThanZero, t.SignalBase), t.GreaterThanZero.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._scale.dispose(), this._scale = null, this._thresh.dispose(), this._thresh = null, this;
    }, t.GreaterThanZero;
  }), t(function (t) {
    return t.GreaterThan = function (e) {
      t.Signal.call(this), this.createInsOuts(2, 0), this._param = this.input[0] = new t.Subtract(e), this.input[1] = this._param.input[1], this._gtz = this.output = new t.GreaterThanZero(), this._param.connect(this._gtz);
    }, t.extend(t.GreaterThan, t.Signal), t.GreaterThan.prototype.dispose = function () {
      return t.Signal.prototype.dispose.call(this), this._gtz.dispose(), this._gtz = null, this;
    }, t.GreaterThan;
  }), t(function (t) {
    return t.Gate = function () {
      var e = t.defaults(arguments, ["threshold", "attack", "release"], t.Gate);
      t.AudioNode.call(this), this.createInsOuts(1, 1), this._follower = new t.Follower(e.attack, e.release), this._gt = new t.GreaterThan(t.dbToGain(e.threshold)), this.input.connect(this.output), this.input.chain(this._gt, this._follower, this.output.gain);
    }, t.extend(t.Gate, t.AudioNode), t.Gate.defaults = {
      attack: .1,
      release: .1,
      threshold: -40
    }, Object.defineProperty(t.Gate.prototype, "threshold", {
      get: function get() {
        return t.gainToDb(this._gt.value);
      },
      set: function set(e) {
        this._gt.value = t.dbToGain(e);
      }
    }), Object.defineProperty(t.Gate.prototype, "attack", {
      get: function get() {
        return this._follower.attack;
      },
      set: function set(t) {
        this._follower.attack = t;
      }
    }), Object.defineProperty(t.Gate.prototype, "release", {
      get: function get() {
        return this._follower.release;
      },
      set: function set(t) {
        this._follower.release = t;
      }
    }), t.Gate.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._follower.dispose(), this._gt.dispose(), this._follower = null, this._gt = null, this;
    }, t.Gate;
  }), t(function (t) {
    function e(t) {
      return function (e, i) {
        var n, s, o;
        return i = this.toSeconds(i), t.apply(this, arguments), n = this._events.get(i), s = this._events.previousEvent(n), o = this._getTicksUntilEvent(s, i), n.ticks = Math.max(o, 0), this;
      };
    }

    return t.TickSignal = function (e) {
      e = t.defaultArg(e, 1), t.Signal.call(this, {
        units: t.Type.Ticks,
        value: e
      }), this._events.memory = 1 / 0, this.cancelScheduledValues(0), this._events.add({
        type: t.Param.AutomationType.SetValue,
        time: 0,
        value: e
      });
    }, t.extend(t.TickSignal, t.Signal), t.TickSignal.prototype.setValueAtTime = e(t.Signal.prototype.setValueAtTime), t.TickSignal.prototype.linearRampToValueAtTime = e(t.Signal.prototype.linearRampToValueAtTime), t.TickSignal.prototype.setTargetAtTime = function (t, e, i) {
      var n, s, o, r, a;

      for (e = this.toSeconds(e), this.setRampPoint(e), t = this._fromUnits(t), n = this._events.get(e), s = Math.round(Math.max(1 / i, 1)), o = 0; o <= s; o++) {
        r = i * o + e, a = this._exponentialApproach(n.time, n.value, t, i, r), this.linearRampToValueAtTime(this._toUnits(a), r);
      }

      return this;
    }, t.TickSignal.prototype.exponentialRampToValueAtTime = function (t, e) {
      var i, n, s, o, r, a;

      for (e = this.toSeconds(e), t = this._fromUnits(t), i = this._events.get(e), null === i && (i = {
        value: this._initialValue,
        time: 0
      }), n = Math.round(Math.max(10 * (e - i.time), 1)), s = (e - i.time) / n, o = 0; o <= n; o++) {
        r = s * o + i.time, a = this._exponentialInterpolate(i.time, i.value, e, t, r), this.linearRampToValueAtTime(this._toUnits(a), r);
      }

      return this;
    }, t.TickSignal.prototype._getTicksUntilEvent = function (e, i) {
      var n, s, o;
      return null === e ? e = {
        ticks: 0,
        time: 0
      } : t.isUndef(e.ticks) && (n = this._events.previousEvent(e), e.ticks = this._getTicksUntilEvent(n, e.time)), s = this.getValueAtTime(e.time), o = this.getValueAtTime(i), this._events.get(i).time === i && this._events.get(i).type === t.Param.AutomationType.SetValue && (o = this.getValueAtTime(i - this.sampleTime)), .5 * (i - e.time) * (s + o) + e.ticks;
    }, t.TickSignal.prototype.getTicksAtTime = function (t) {
      t = this.toSeconds(t);

      var e = this._events.get(t);

      return Math.max(this._getTicksUntilEvent(e, t), 0);
    }, t.TickSignal.prototype.getDurationOfTicks = function (t, e) {
      e = this.toSeconds(e);
      var i = this.getTicksAtTime(e);
      return this.getTimeOfTick(i + t) - e;
    }, t.TickSignal.prototype.getTimeOfTick = function (e) {
      var i,
          n,
          s,
          o,
          r,
          a,
          h = this._events.get(e, "ticks"),
          l = this._events.getAfter(e, "ticks");

      return h && h.ticks === e ? h.time : h && l && l.type === t.Param.AutomationType.Linear && h.value !== l.value ? (i = this.getValueAtTime(h.time), n = this.getValueAtTime(l.time), s = (n - i) / (l.time - h.time), o = Math.sqrt(Math.pow(i, 2) - 2 * s * (h.ticks - e)), r = (-i + o) / s, a = (-i - o) / s, (r > 0 ? r : a) + h.time) : h ? 0 === h.value ? 1 / 0 : h.time + (e - h.ticks) / h.value : e / this._initialValue;
    }, t.TickSignal.prototype.ticksToTime = function (e, i) {
      return i = this.toSeconds(i), new t.Time(this.getDurationOfTicks(e, i));
    }, t.TickSignal.prototype.timeToTicks = function (e, i) {
      var n, s;
      return i = this.toSeconds(i), e = this.toSeconds(e), n = this.getTicksAtTime(i), s = this.getTicksAtTime(i + e), new t.Ticks(s - n);
    }, t.TickSignal;
  }), t(function (t) {
    return t.TimelineState = function (e) {
      t.Timeline.call(this), this._initial = e;
    }, t.extend(t.TimelineState, t.Timeline), t.TimelineState.prototype.getValueAtTime = function (t) {
      var e = this.get(t);
      return null !== e ? e.state : this._initial;
    }, t.TimelineState.prototype.setStateAtTime = function (t, e) {
      return this.add({
        state: t,
        time: e
      }), this;
    }, t.TimelineState.prototype.getLastState = function (t, e) {
      var i, n, s;

      for (e = this.toSeconds(e), i = this._search(e), n = i; n >= 0; n--) {
        if (s = this._timeline[n], s.state === t) return s;
      }
    }, t.TimelineState.prototype.getNextState = function (t, e) {
      var i, n, s;
      if (e = this.toSeconds(e), -1 !== (i = this._search(e))) for (n = i; n < this._timeline.length; n++) {
        if (s = this._timeline[n], s.state === t) return s;
      }
    }, t.TimelineState;
  }), t(function (t) {
    return t.TickSource = function () {
      var e = t.defaults(arguments, ["frequency"], t.TickSource);
      this.frequency = new t.TickSignal(e.frequency, t.Type.Frequency), this._readOnly("frequency"), this._state = new t.TimelineState(t.State.Stopped), this._state.setStateAtTime(t.State.Stopped, 0), this._tickOffset = new t.Timeline(), this.setTicksAtTime(0, 0);
    }, t.extend(t.TickSource), t.TickSource.defaults = {
      frequency: 1
    }, Object.defineProperty(t.TickSource.prototype, "state", {
      get: function get() {
        return this._state.getValueAtTime(this.now());
      }
    }), t.TickSource.prototype.start = function (e, i) {
      return e = this.toSeconds(e), this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e), t.isDefined(i) && this.setTicksAtTime(i, e)), this;
    }, t.TickSource.prototype.stop = function (e) {
      if (e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Stopped) {
        var i = this._state.get(e);

        i.time > 0 && (this._tickOffset.cancel(i.time), this._state.cancel(i.time));
      }

      return this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this.setTicksAtTime(0, e), this;
    }, t.TickSource.prototype.pause = function (e) {
      return e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started && this._state.setStateAtTime(t.State.Paused, e), this;
    }, t.TickSource.prototype.cancel = function (t) {
      return t = this.toSeconds(t), this._state.cancel(t), this._tickOffset.cancel(t), this;
    }, t.TickSource.prototype.getTicksAtTime = function (e) {
      var i, n, s, o;
      return e = this.toSeconds(e), i = this._state.getLastState(t.State.Stopped, e), n = {
        state: t.State.Paused,
        time: e
      }, this._state.add(n), s = i, o = 0, this._state.forEachBetween(i.time, e + this.sampleTime, function (e) {
        var i = s.time,
            n = this._tickOffset.get(e.time);

        n.time >= s.time && (o = n.ticks, i = n.time), s.state === t.State.Started && e.state !== t.State.Started && (o += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(i)), s = e;
      }.bind(this)), this._state.remove(n), o;
    }, Object.defineProperty(t.TickSource.prototype, "ticks", {
      get: function get() {
        return this.getTicksAtTime(this.now());
      },
      set: function set(t) {
        this.setTicksAtTime(t, this.now());
      }
    }), Object.defineProperty(t.TickSource.prototype, "seconds", {
      get: function get() {
        return this.getSecondsAtTime(this.now());
      },
      set: function set(t) {
        var e = this.now(),
            i = this.frequency.timeToTicks(t, e);
        this.setTicksAtTime(i, e);
      }
    }), t.TickSource.prototype.getSecondsAtTime = function (e) {
      var i, n, s, o;
      return e = this.toSeconds(e), i = this._state.getLastState(t.State.Stopped, e), n = {
        state: t.State.Paused,
        time: e
      }, this._state.add(n), s = i, o = 0, this._state.forEachBetween(i.time, e + this.sampleTime, function (e) {
        var i = s.time,
            n = this._tickOffset.get(e.time);

        n.time >= s.time && (o = n.seconds, i = n.time), s.state === t.State.Started && e.state !== t.State.Started && (o += e.time - i), s = e;
      }.bind(this)), this._state.remove(n), o;
    }, t.TickSource.prototype.setTicksAtTime = function (t, e) {
      return e = this.toSeconds(e), this._tickOffset.cancel(e), this._tickOffset.add({
        time: e,
        ticks: t,
        seconds: this.frequency.getDurationOfTicks(t, e)
      }), this;
    }, t.TickSource.prototype.getStateAtTime = function (t) {
      return t = this.toSeconds(t), this._state.getValueAtTime(t);
    }, t.TickSource.prototype.getTimeOfTick = function (e, i) {
      var n, s, o, r;
      return i = t.defaultArg(i, this.now()), n = this._tickOffset.get(i), s = this._state.get(i), o = Math.max(n.time, s.time), r = this.frequency.getTicksAtTime(o) + e - n.ticks, this.frequency.getTimeOfTick(r);
    }, t.TickSource.prototype.forEachTickBetween = function (e, i, n) {
      var s,
          o,
          r,
          a,
          h,
          l,
          u = this._state.get(e);

      if (this._state.forEachBetween(e, i, function (i) {
        u.state === t.State.Started && i.state !== t.State.Started && this.forEachTickBetween(Math.max(u.time, e), i.time - this.sampleTime, n), u = i;
      }.bind(this)), e = Math.max(u.time, e), u.state === t.State.Started && this._state) for (s = this.frequency.getTicksAtTime(e), o = this.frequency.getTicksAtTime(u.time), r = s - o, a = r % 1, 0 !== a && (a = 1 - a), h = this.frequency.getTimeOfTick(s + a), l = null; h < i && this._state;) {
        try {
          n(h, Math.round(this.getTicksAtTime(h)));
        } catch (t) {
          l = t;
          break;
        }

        this._state && (h += this.frequency.getDurationOfTicks(1, h));
      }
      if (l) throw l;
      return this;
    }, t.TickSource.prototype.dispose = function () {
      return t.Param.prototype.dispose.call(this), this._state.dispose(), this._state = null, this._tickOffset.dispose(), this._tickOffset = null, this._writable("frequency"), this.frequency.dispose(), this.frequency = null, this;
    }, t.TickSource;
  }), t(function (t) {
    return t.Clock = function () {
      var e = t.defaults(arguments, ["callback", "frequency"], t.Clock);
      t.Emitter.call(this), this.callback = e.callback, this._nextTick = 0, this._tickSource = new t.TickSource(e.frequency), this._lastUpdate = 0, this.frequency = this._tickSource.frequency, this._readOnly("frequency"), this._state = new t.TimelineState(t.State.Stopped), this._state.setStateAtTime(t.State.Stopped, 0), this._boundLoop = this._loop.bind(this), this.context.on("tick", this._boundLoop);
    }, t.extend(t.Clock, t.Emitter), t.Clock.defaults = {
      callback: t.noOp,
      frequency: 1
    }, Object.defineProperty(t.Clock.prototype, "state", {
      get: function get() {
        return this._state.getValueAtTime(this.now());
      }
    }), t.Clock.prototype.start = function (e, i) {
      return e = this.toSeconds(e), this._state.getValueAtTime(e) !== t.State.Started && (this._state.setStateAtTime(t.State.Started, e), this._tickSource.start(e, i), e < this._lastUpdate && this.emit("start", e, i)), this;
    }, t.Clock.prototype.stop = function (e) {
      return e = this.toSeconds(e), this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this._tickSource.stop(e), e < this._lastUpdate && this.emit("stop", e), this;
    }, t.Clock.prototype.pause = function (e) {
      return e = this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started && (this._state.setStateAtTime(t.State.Paused, e), this._tickSource.pause(e), e < this._lastUpdate && this.emit("pause", e)), this;
    }, Object.defineProperty(t.Clock.prototype, "ticks", {
      get: function get() {
        return Math.ceil(this.getTicksAtTime(this.now()));
      },
      set: function set(t) {
        this._tickSource.ticks = t;
      }
    }), Object.defineProperty(t.Clock.prototype, "seconds", {
      get: function get() {
        return this._tickSource.seconds;
      },
      set: function set(t) {
        this._tickSource.seconds = t;
      }
    }), t.Clock.prototype.getSecondsAtTime = function (t) {
      return this._tickSource.getSecondsAtTime(t);
    }, t.Clock.prototype.setTicksAtTime = function (t, e) {
      return this._tickSource.setTicksAtTime(t, e), this;
    }, t.Clock.prototype.getTicksAtTime = function (t) {
      return this._tickSource.getTicksAtTime(t);
    }, t.Clock.prototype.nextTickTime = function (t, e) {
      e = this.toSeconds(e);
      var i = this.getTicksAtTime(e);
      return this._tickSource.getTimeOfTick(i + t, e);
    }, t.Clock.prototype._loop = function () {
      var e = this._lastUpdate,
          i = this.now();
      this._lastUpdate = i, e !== i && (this._state.forEachBetween(e, i, function (e) {
        switch (e.state) {
          case t.State.Started:
            var i = this._tickSource.getTicksAtTime(e.time);

            this.emit("start", e.time, i);
            break;

          case t.State.Stopped:
            0 !== e.time && this.emit("stop", e.time);
            break;

          case t.State.Paused:
            this.emit("pause", e.time);
        }
      }.bind(this)), this._tickSource.forEachTickBetween(e, i, function (t, e) {
        this.callback(t, e);
      }.bind(this)));
    }, t.Clock.prototype.getStateAtTime = function (t) {
      return t = this.toSeconds(t), this._state.getValueAtTime(t);
    }, t.Clock.prototype.dispose = function () {
      t.Emitter.prototype.dispose.call(this), this.context.off("tick", this._boundLoop), this._writable("frequency"), this._tickSource.dispose(), this._tickSource = null, this.frequency = null, this._boundLoop = null, this._nextTick = 1 / 0, this.callback = null, this._state.dispose(), this._state = null;
    }, t.Clock;
  }), t(function (t) {
    t.IntervalTimeline = function () {
      t.call(this), this._root = null, this._length = 0;
    }, t.extend(t.IntervalTimeline), t.IntervalTimeline.prototype.add = function (i) {
      if (t.isUndef(i.time) || t.isUndef(i.duration)) throw new Error("Tone.IntervalTimeline: events must have time and duration parameters");
      i.time = i.time.valueOf();
      var n = new e(i.time, i.time + i.duration, i);

      for (null === this._root ? this._root = n : this._root.insert(n), this._length++; null !== n;) {
        n.updateHeight(), n.updateMax(), this._rebalance(n), n = n.parent;
      }

      return this;
    }, t.IntervalTimeline.prototype.remove = function (t) {
      var e, i, n;
      if (null !== this._root) for (e = [], this._root.search(t.time, e), i = 0; i < e.length; i++) {
        if (n = e[i], n.event === t) {
          this._removeNode(n), this._length--;
          break;
        }
      }
      return this;
    }, Object.defineProperty(t.IntervalTimeline.prototype, "length", {
      get: function get() {
        return this._length;
      }
    }), t.IntervalTimeline.prototype.cancel = function (t) {
      return this.forEachFrom(t, function (t) {
        this.remove(t);
      }.bind(this)), this;
    }, t.IntervalTimeline.prototype._setRoot = function (t) {
      this._root = t, null !== this._root && (this._root.parent = null);
    }, t.IntervalTimeline.prototype._replaceNodeInParent = function (t, e) {
      null !== t.parent ? (t.isLeftChild() ? t.parent.left = e : t.parent.right = e, this._rebalance(t.parent)) : this._setRoot(e);
    }, t.IntervalTimeline.prototype._removeNode = function (t) {
      var e, i;
      if (null === t.left && null === t.right) this._replaceNodeInParent(t, null);else if (null === t.right) this._replaceNodeInParent(t, t.left);else if (null === t.left) this._replaceNodeInParent(t, t.right);else {
        if (t.getBalance() > 0) {
          if (null === t.left.right) e = t.left, e.right = t.right, i = e;else {
            for (e = t.left.right; null !== e.right;) {
              e = e.right;
            }

            e.parent.right = e.left, i = e.parent, e.left = t.left, e.right = t.right;
          }
        } else if (null === t.right.left) e = t.right, e.left = t.left, i = e;else {
          for (e = t.right.left; null !== e.left;) {
            e = e.left;
          }

          e.parent = e.parent, e.parent.left = e.right, i = e.parent, e.left = t.left, e.right = t.right;
        }
        null !== t.parent ? t.isLeftChild() ? t.parent.left = e : t.parent.right = e : this._setRoot(e), this._rebalance(i);
      }
      t.dispose();
    }, t.IntervalTimeline.prototype._rotateLeft = function (t) {
      var e = t.parent,
          i = t.isLeftChild(),
          n = t.right;
      t.right = n.left, n.left = t, null !== e ? i ? e.left = n : e.right = n : this._setRoot(n);
    }, t.IntervalTimeline.prototype._rotateRight = function (t) {
      var e = t.parent,
          i = t.isLeftChild(),
          n = t.left;
      t.left = n.right, n.right = t, null !== e ? i ? e.left = n : e.right = n : this._setRoot(n);
    }, t.IntervalTimeline.prototype._rebalance = function (t) {
      var e = t.getBalance();
      e > 1 ? t.left.getBalance() < 0 ? this._rotateLeft(t.left) : this._rotateRight(t) : e < -1 && (t.right.getBalance() > 0 ? this._rotateRight(t.right) : this._rotateLeft(t));
    }, t.IntervalTimeline.prototype.get = function (t) {
      var e, i, n;

      if (null !== this._root && (e = [], this._root.search(t, e), e.length > 0)) {
        for (i = e[0], n = 1; n < e.length; n++) {
          e[n].low > i.low && (i = e[n]);
        }

        return i.event;
      }

      return null;
    }, t.IntervalTimeline.prototype.forEach = function (t) {
      var e, i, n;
      if (null !== this._root) for (e = [], this._root.traverse(function (t) {
        e.push(t);
      }), i = 0; i < e.length; i++) {
        (n = e[i].event) && t(n);
      }
      return this;
    }, t.IntervalTimeline.prototype.forEachAtTime = function (t, e) {
      var i, n, s;
      if (null !== this._root) for (i = [], this._root.search(t, i), n = i.length - 1; n >= 0; n--) {
        (s = i[n].event) && e(s);
      }
      return this;
    }, t.IntervalTimeline.prototype.forEachFrom = function (t, e) {
      var i, n, s;
      if (null !== this._root) for (i = [], this._root.searchAfter(t, i), n = i.length - 1; n >= 0; n--) {
        s = i[n].event, e(s);
      }
      return this;
    }, t.IntervalTimeline.prototype.dispose = function () {
      var t,
          e = [];

      for (null !== this._root && this._root.traverse(function (t) {
        e.push(t);
      }), t = 0; t < e.length; t++) {
        e[t].dispose();
      }

      return e = null, this._root = null, this;
    };

    var e = function e(t, _e2, i) {
      this.event = i, this.low = t, this.high = _e2, this.max = this.high, this._left = null, this._right = null, this.parent = null, this.height = 0;
    };

    return e.prototype.insert = function (t) {
      t.low <= this.low ? null === this.left ? this.left = t : this.left.insert(t) : null === this.right ? this.right = t : this.right.insert(t);
    }, e.prototype.search = function (t, e) {
      t > this.max || (null !== this.left && this.left.search(t, e), this.low <= t && this.high > t && e.push(this), this.low > t || null !== this.right && this.right.search(t, e));
    }, e.prototype.searchAfter = function (t, e) {
      this.low >= t && (e.push(this), null !== this.left && this.left.searchAfter(t, e)), null !== this.right && this.right.searchAfter(t, e);
    }, e.prototype.traverse = function (t) {
      t(this), null !== this.left && this.left.traverse(t), null !== this.right && this.right.traverse(t);
    }, e.prototype.updateHeight = function () {
      null !== this.left && null !== this.right ? this.height = Math.max(this.left.height, this.right.height) + 1 : null !== this.right ? this.height = this.right.height + 1 : null !== this.left ? this.height = this.left.height + 1 : this.height = 0;
    }, e.prototype.updateMax = function () {
      this.max = this.high, null !== this.left && (this.max = Math.max(this.max, this.left.max)), null !== this.right && (this.max = Math.max(this.max, this.right.max));
    }, e.prototype.getBalance = function () {
      var t = 0;
      return null !== this.left && null !== this.right ? t = this.left.height - this.right.height : null !== this.left ? t = this.left.height + 1 : null !== this.right && (t = -(this.right.height + 1)), t;
    }, e.prototype.isLeftChild = function () {
      return null !== this.parent && this.parent.left === this;
    }, Object.defineProperty(e.prototype, "left", {
      get: function get() {
        return this._left;
      },
      set: function set(t) {
        this._left = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax();
      }
    }), Object.defineProperty(e.prototype, "right", {
      get: function get() {
        return this._right;
      },
      set: function set(t) {
        this._right = t, null !== t && (t.parent = this), this.updateHeight(), this.updateMax();
      }
    }), e.prototype.dispose = function () {
      this.parent = null, this._left = null, this._right = null, this.event = null;
    }, t.IntervalTimeline;
  }), t(function (t) {
    return t.Ticks = function (e, i) {
      if (!(this instanceof t.Ticks)) return new t.Ticks(e, i);
      t.TransportTime.call(this, e, i);
    }, t.extend(t.Ticks, t.TransportTime), t.Ticks.prototype._defaultUnits = "i", t.Ticks.prototype._now = function () {
      return t.Transport.ticks;
    }, t.Ticks.prototype._beatsToUnits = function (t) {
      return this._getPPQ() * t;
    }, t.Ticks.prototype._secondsToUnits = function (t) {
      return t / (60 / this._getBpm()) * this._getPPQ();
    }, t.Ticks.prototype._ticksToUnits = function (t) {
      return t;
    }, t.Ticks.prototype.toTicks = function () {
      return this.valueOf();
    }, t.Ticks.prototype.toSeconds = function () {
      return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
    }, t.Ticks;
  }), t(function (t) {
    return t.TransportEvent = function (e, i) {
      i = t.defaultArg(i, t.TransportEvent.defaults), t.call(this), this.Transport = e, this.id = t.TransportEvent._eventId++, this.time = t.Ticks(i.time), this.callback = i.callback, this._once = i.once;
    }, t.extend(t.TransportEvent), t.TransportEvent.defaults = {
      once: !1,
      callback: t.noOp
    }, t.TransportEvent._eventId = 0, t.TransportEvent.prototype.invoke = function (t) {
      this.callback && (this.callback(t), this._once && this.Transport && this.Transport.clear(this.id));
    }, t.TransportEvent.prototype.dispose = function () {
      return t.prototype.dispose.call(this), this.Transport = null, this.callback = null, this.time = null, this;
    }, t.TransportEvent;
  }), t(function (t) {
    return t.TransportRepeatEvent = function (e, i) {
      t.TransportEvent.call(this, e, i), i = t.defaultArg(i, t.TransportRepeatEvent.defaults), this.duration = t.Ticks(i.duration), this._interval = t.Ticks(i.interval), this._currentId = -1, this._nextId = -1, this._nextTick = this.time, this._boundRestart = this._restart.bind(this), this.Transport.on("start loopStart", this._boundRestart), this._restart();
    }, t.extend(t.TransportRepeatEvent, t.TransportEvent), t.TransportRepeatEvent.defaults = {
      duration: 1 / 0,
      interval: 1
    }, t.TransportRepeatEvent.prototype.invoke = function (e) {
      this._createEvents(e), t.TransportEvent.prototype.invoke.call(this, e);
    }, t.TransportRepeatEvent.prototype._createEvents = function (e) {
      var i = this.Transport.getTicksAtTime(e);
      i >= this.time && i >= this._nextTick && this._nextTick + this._interval < this.time + this.duration && (this._nextTick += this._interval, this._currentId = this._nextId, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick)));
    }, t.TransportRepeatEvent.prototype._restart = function (e) {
      this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this._nextTick = this.time;
      var i = this.Transport.getTicksAtTime(e);
      i > this.time && (this._nextTick = this.time + Math.ceil((i - this.time) / this._interval) * this._interval), this._currentId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick)), this._nextTick += this._interval, this._nextId = this.Transport.scheduleOnce(this.invoke.bind(this), t.Ticks(this._nextTick));
    }, t.TransportRepeatEvent.prototype.dispose = function () {
      return this.Transport.clear(this._currentId), this.Transport.clear(this._nextId), this.Transport.off("start loopStart", this._boundRestart), this._boundCreateEvents = null, t.TransportEvent.prototype.dispose.call(this), this.duration = null, this._interval = null, this;
    }, t.TransportRepeatEvent;
  }), t(function (t) {
    t.Transport = function () {
      t.Emitter.call(this), t.getContext(function () {
        this.loop = !1, this._loopStart = 0, this._loopEnd = 0, this._ppq = e.defaults.PPQ, this._clock = new t.Clock({
          callback: this._processTick.bind(this),
          frequency: 0
        }), this._bindClockEvents(), this.bpm = this._clock.frequency, this.bpm._toUnits = this._toUnits.bind(this), this.bpm._fromUnits = this._fromUnits.bind(this), this.bpm.units = t.Type.BPM, this.bpm.value = e.defaults.bpm, this._readOnly("bpm"), this._timeSignature = e.defaults.timeSignature, this._scheduledEvents = {}, this._timeline = new t.Timeline(), this._repeatedEvents = new t.IntervalTimeline(), this._syncedSignals = [], this._swingTicks = e.defaults.PPQ / 2, this._swingAmount = 0;
      }.bind(this));
    }, t.extend(t.Transport, t.Emitter), t.Transport.defaults = {
      bpm: 120,
      swing: 0,
      swingSubdivision: "8n",
      timeSignature: 4,
      loopStart: 0,
      loopEnd: "4m",
      PPQ: 192
    }, t.Transport.prototype._processTick = function (e, i) {
      var n, s;
      this._swingAmount > 0 && i % this._ppq != 0 && i % (2 * this._swingTicks) != 0 && (n = i % (2 * this._swingTicks) / (2 * this._swingTicks), s = Math.sin(n * Math.PI) * this._swingAmount, e += t.Ticks(2 * this._swingTicks / 3).toSeconds() * s), this.loop && i >= this._loopEnd && (this.emit("loopEnd", e), this._clock.setTicksAtTime(this._loopStart, e), i = this._loopStart, this.emit("loopStart", e, this._clock.getSecondsAtTime(e)), this.emit("loop", e)), this._timeline.forEachAtTime(i, function (t) {
        t.invoke(e);
      });
    }, t.Transport.prototype.schedule = function (e, i) {
      var n = new t.TransportEvent(this, {
        time: t.TransportTime(i),
        callback: e
      });
      return this._addEvent(n, this._timeline);
    }, t.Transport.prototype.scheduleRepeat = function (e, i, n, s) {
      var o = new t.TransportRepeatEvent(this, {
        callback: e,
        interval: t.Time(i),
        time: t.TransportTime(n),
        duration: t.Time(t.defaultArg(s, 1 / 0))
      });
      return this._addEvent(o, this._repeatedEvents);
    }, t.Transport.prototype.scheduleOnce = function (e, i) {
      var n = new t.TransportEvent(this, {
        time: t.TransportTime(i),
        callback: e,
        once: !0
      });
      return this._addEvent(n, this._timeline);
    }, t.Transport.prototype.clear = function (t) {
      if (this._scheduledEvents.hasOwnProperty(t)) {
        var e = this._scheduledEvents[t.toString()];

        e.timeline.remove(e.event), e.event.dispose(), delete this._scheduledEvents[t.toString()];
      }

      return this;
    }, t.Transport.prototype._addEvent = function (t, e) {
      return this._scheduledEvents[t.id.toString()] = {
        event: t,
        timeline: e
      }, e.add(t), t.id;
    }, t.Transport.prototype.cancel = function (e) {
      return e = t.defaultArg(e, 0), e = this.toTicks(e), this._timeline.forEachFrom(e, function (t) {
        this.clear(t.id);
      }.bind(this)), this._repeatedEvents.forEachFrom(e, function (t) {
        this.clear(t.id);
      }.bind(this)), this;
    }, t.Transport.prototype._bindClockEvents = function () {
      this._clock.on("start", function (e, i) {
        i = t.Ticks(i).toSeconds(), this.emit("start", e, i);
      }.bind(this)), this._clock.on("stop", function (t) {
        this.emit("stop", t);
      }.bind(this)), this._clock.on("pause", function (t) {
        this.emit("pause", t);
      }.bind(this));
    }, Object.defineProperty(t.Transport.prototype, "state", {
      get: function get() {
        return this._clock.getStateAtTime(this.now());
      }
    }), t.Transport.prototype.start = function (e, i) {
      return t.isDefined(i) && (i = this.toTicks(i)), this._clock.start(e, i), this;
    }, t.Transport.prototype.stop = function (t) {
      return this._clock.stop(t), this;
    }, t.Transport.prototype.pause = function (t) {
      return this._clock.pause(t), this;
    }, t.Transport.prototype.toggle = function (e) {
      return e = this.toSeconds(e), this._clock.getStateAtTime(e) !== t.State.Started ? this.start(e) : this.stop(e), this;
    }, Object.defineProperty(t.Transport.prototype, "timeSignature", {
      get: function get() {
        return this._timeSignature;
      },
      set: function set(e) {
        t.isArray(e) && (e = e[0] / e[1] * 4), this._timeSignature = e;
      }
    }), Object.defineProperty(t.Transport.prototype, "loopStart", {
      get: function get() {
        return t.Ticks(this._loopStart).toSeconds();
      },
      set: function set(t) {
        this._loopStart = this.toTicks(t);
      }
    }), Object.defineProperty(t.Transport.prototype, "loopEnd", {
      get: function get() {
        return t.Ticks(this._loopEnd).toSeconds();
      },
      set: function set(t) {
        this._loopEnd = this.toTicks(t);
      }
    }), t.Transport.prototype.setLoopPoints = function (t, e) {
      return this.loopStart = t, this.loopEnd = e, this;
    }, Object.defineProperty(t.Transport.prototype, "swing", {
      get: function get() {
        return this._swingAmount;
      },
      set: function set(t) {
        this._swingAmount = t;
      }
    }), Object.defineProperty(t.Transport.prototype, "swingSubdivision", {
      get: function get() {
        return t.Ticks(this._swingTicks).toNotation();
      },
      set: function set(t) {
        this._swingTicks = this.toTicks(t);
      }
    }), Object.defineProperty(t.Transport.prototype, "position", {
      get: function get() {
        var e = this.now(),
            i = this._clock.getTicksAtTime(e);

        return t.Ticks(i).toBarsBeatsSixteenths();
      },
      set: function set(t) {
        var e = this.toTicks(t);
        this.ticks = e;
      }
    }), Object.defineProperty(t.Transport.prototype, "seconds", {
      get: function get() {
        return this._clock.seconds;
      },
      set: function set(t) {
        var e = this.now(),
            i = this.bpm.timeToTicks(t, e);
        this.ticks = i;
      }
    }), Object.defineProperty(t.Transport.prototype, "progress", {
      get: function get() {
        var t;
        return this.loop ? (t = this.now(), (this._clock.getTicksAtTime(t) - this._loopStart) / (this._loopEnd - this._loopStart)) : 0;
      }
    }), Object.defineProperty(t.Transport.prototype, "ticks", {
      get: function get() {
        return this._clock.ticks;
      },
      set: function set(e) {
        if (this._clock.ticks !== e) {
          var i = this.now();
          this.state === t.State.Started ? (this.emit("stop", i), this._clock.setTicksAtTime(e, i), this.emit("start", i, this.seconds)) : this._clock.setTicksAtTime(e, i);
        }
      }
    }), t.Transport.prototype.getTicksAtTime = function (t) {
      return Math.round(this._clock.getTicksAtTime(t));
    }, t.Transport.prototype.getSecondsAtTime = function (t) {
      return this._clock.getSecondsAtTime(t);
    }, Object.defineProperty(t.Transport.prototype, "PPQ", {
      get: function get() {
        return this._ppq;
      },
      set: function set(t) {
        var e = this.bpm.value;
        this._ppq = t, this.bpm.value = e;
      }
    }), t.Transport.prototype._fromUnits = function (t) {
      return 1 / (60 / t / this.PPQ);
    }, t.Transport.prototype._toUnits = function (t) {
      return t / this.PPQ * 60;
    }, t.Transport.prototype.nextSubdivision = function (e) {
      var i, n, s;
      return e = this.toTicks(e), this.state !== t.State.Started ? 0 : (i = this.now(), n = this.getTicksAtTime(i), s = e - n % e, this._clock.nextTickTime(s, i));
    }, t.Transport.prototype.syncSignal = function (e, i) {
      var n, s;
      return i || (n = this.now(), i = 0 !== e.getValueAtTime(n) ? e.getValueAtTime(n) / this.bpm.getValueAtTime(n) : 0), s = new t.Gain(i), this.bpm.chain(s, e._param), this._syncedSignals.push({
        ratio: s,
        signal: e,
        initial: e.value
      }), e.value = 0, this;
    }, t.Transport.prototype.unsyncSignal = function (t) {
      var e, i;

      for (e = this._syncedSignals.length - 1; e >= 0; e--) {
        i = this._syncedSignals[e], i.signal === t && (i.ratio.dispose(), i.signal.value = i.initial, this._syncedSignals.splice(e, 1));
      }

      return this;
    }, t.Transport.prototype.dispose = function () {
      return t.Emitter.prototype.dispose.call(this), this._clock.dispose(), this._clock = null, this._writable("bpm"), this.bpm = null, this._timeline.dispose(), this._timeline = null, this._repeatedEvents.dispose(), this._repeatedEvents = null, this;
    };
    var e = t.Transport;
    return t.Transport = new e(), t.Context.on("init", function (i) {
      i.Transport instanceof e ? t.Transport = i.Transport : t.Transport = new e(), i.Transport = t.Transport;
    }), t.Context.on("close", function (t) {
      t.Transport instanceof e && t.Transport.dispose();
    }), t.Transport;
  }), t(function (t) {
    return t.Volume = function () {
      var e = t.defaults(arguments, ["volume"], t.Volume);
      t.AudioNode.call(this), this.output = this.input = new t.Gain(e.volume, t.Type.Decibels), this._unmutedVolume = e.volume, this.volume = this.output.gain, this._readOnly("volume"), this.mute = e.mute;
    }, t.extend(t.Volume, t.AudioNode), t.Volume.defaults = {
      volume: 0,
      mute: !1
    }, Object.defineProperty(t.Volume.prototype, "mute", {
      get: function get() {
        return this.volume.value === -1 / 0;
      },
      set: function set(t) {
        !this.mute && t ? (this._unmutedVolume = this.volume.value, this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume);
      }
    }), t.Volume.prototype.dispose = function () {
      return this.input.dispose(), t.AudioNode.prototype.dispose.call(this), this._writable("volume"), this.volume.dispose(), this.volume = null, this;
    }, t.Volume;
  }), t(function (t) {
    t.Master = function () {
      t.AudioNode.call(this), t.getContext(function () {
        this.createInsOuts(1, 0), this._volume = this.output = new t.Volume(), this.volume = this._volume.volume, this._readOnly("volume"), this.input.chain(this.output, this.context.destination);
      }.bind(this));
    }, t.extend(t.Master, t.AudioNode), t.Master.defaults = {
      volume: 0,
      mute: !1
    }, Object.defineProperty(t.Master.prototype, "mute", {
      get: function get() {
        return this._volume.mute;
      },
      set: function set(t) {
        this._volume.mute = t;
      }
    }), t.Master.prototype.chain = function () {
      this.input.disconnect(), this.input.chain.apply(this.input, arguments), arguments[arguments.length - 1].connect(this.output);
    }, t.Master.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null;
    }, t.AudioNode.prototype.toMaster = function () {
      return this.connect(t.Master), this;
    }, window.AudioNode && (AudioNode.prototype.toMaster = function () {
      return this.connect(t.Master), this;
    });
    var e = t.Master;
    return t.Master = new e(), t.Context.on("init", function (i) {
      i.Master instanceof e ? t.Master = i.Master : t.Master = new e(), i.Master = t.Master;
    }), t.Context.on("close", function (t) {
      t.Master instanceof e && t.Master.dispose();
    }), t.Master;
  }), t(function (t) {
    return t.Source = function (e) {
      e = t.defaultArg(e, t.Source.defaults), t.AudioNode.call(this), this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._state = new t.TimelineState(t.State.Stopped), this._state.memory = 100, this._synced = !1, this._scheduled = [], this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = e.mute;
    }, t.extend(t.Source, t.AudioNode), t.Source.defaults = {
      volume: 0,
      mute: !1
    }, Object.defineProperty(t.Source.prototype, "state", {
      get: function get() {
        return this._synced ? t.Transport.state === t.State.Started ? this._state.getValueAtTime(t.Transport.seconds) : t.State.Stopped : this._state.getValueAtTime(this.now());
      }
    }), Object.defineProperty(t.Source.prototype, "mute", {
      get: function get() {
        return this._volume.mute;
      },
      set: function set(t) {
        this._volume.mute = t;
      }
    }), t.Source.prototype._start = t.noOp, t.Source.prototype.restart = t.noOp, t.Source.prototype._stop = t.noOp, t.Source.prototype.start = function (e, i, n) {
      var s, o;
      return e = t.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e), this._state.getValueAtTime(e) === t.State.Started ? (this._state.cancel(e), this._state.setStateAtTime(t.State.Started, e), this.restart(e, i, n)) : (this._state.setStateAtTime(t.State.Started, e), this._synced ? (s = this._state.get(e), s.offset = t.defaultArg(i, 0), s.duration = n, o = t.Transport.schedule(function (t) {
        this._start(t, i, n);
      }.bind(this), e), this._scheduled.push(o), t.Transport.state === t.State.Started && this._syncedStart(this.now(), t.Transport.seconds)) : this._start.apply(this, arguments)), this;
    }, t.Source.prototype.stop = function (e) {
      if (e = t.isUndef(e) && this._synced ? t.Transport.seconds : this.toSeconds(e), this._synced) {
        var i = t.Transport.schedule(this._stop.bind(this), e);

        this._scheduled.push(i);
      } else this._stop.apply(this, arguments);

      return this._state.cancel(e), this._state.setStateAtTime(t.State.Stopped, e), this;
    }, t.Source.prototype.sync = function () {
      return this._synced = !0, this._syncedStart = function (e, i) {
        var n, s, o;
        i > 0 && (n = this._state.get(i)) && n.state === t.State.Started && n.time !== i && (s = i - this.toSeconds(n.time), n.duration && (o = this.toSeconds(n.duration) - s), this._start(e, this.toSeconds(n.offset) + s, o));
      }.bind(this), this._syncedStop = function (e) {
        var i = t.Transport.getSecondsAtTime(Math.max(e - this.sampleTime, 0));
        this._state.getValueAtTime(i) === t.State.Started && this._stop(e);
      }.bind(this), t.Transport.on("start loopStart", this._syncedStart), t.Transport.on("stop pause loopEnd", this._syncedStop), this;
    }, t.Source.prototype.unsync = function () {
      var e, i;

      for (this._synced && (t.Transport.off("stop pause loopEnd", this._syncedStop), t.Transport.off("start loopStart", this._syncedStart)), this._synced = !1, e = 0; e < this._scheduled.length; e++) {
        i = this._scheduled[e], t.Transport.clear(i);
      }

      return this._scheduled = [], this._state.cancel(0), this;
    }, t.Source.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this), this.unsync(), this._scheduled = null, this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this._state.dispose(), this._state = null;
    }, t.Source;
  }), t(function (t) {
    t.supported && (AudioBuffer.prototype.copyToChannel || (AudioBuffer.prototype.copyToChannel = function (t, e, i) {
      var n,
          s = this.getChannelData(e);

      for (i = i || 0, n = 0; n < s.length; n++) {
        s[n + i] = t[n];
      }
    }, AudioBuffer.prototype.copyFromChannel = function (t, e, i) {
      var n,
          s = this.getChannelData(e);

      for (i = i || 0, n = 0; n < t.length; n++) {
        t[n] = s[n + i];
      }
    }));
  }), t(function (t) {
    return t.Buffer = function () {
      var e = t.defaults(arguments, ["url", "onload", "onerror"], t.Buffer);
      t.call(this), this._buffer = null, this._reversed = e.reverse, this._xhr = null, this._onload = t.noOp, e.url instanceof AudioBuffer || e.url instanceof t.Buffer ? (this.set(e.url), e.onload && (this.loaded ? e.onload(this) : this._onload = e.onload)) : t.isString(e.url) && this.load(e.url).then(e.onload).catch(e.onerror);
    }, t.extend(t.Buffer), t.Buffer.defaults = {
      url: void 0,
      reverse: !1,
      onload: t.noOp,
      onerror: t.noOp
    }, t.Buffer.prototype.set = function (e) {
      return e instanceof t.Buffer ? e.loaded ? this._buffer = e.get() : e._onload = function () {
        this.set(e), this._onload(this);
      }.bind(this) : this._buffer = e, this;
    }, t.Buffer.prototype.get = function () {
      return this._buffer;
    }, t.Buffer.prototype.load = function (e, i, n) {
      return new Promise(function (s, o) {
        this._xhr = t.Buffer.load(e, function (t) {
          this._xhr = null, this.set(t), s(this), this._onload(this), i && i(this);
        }.bind(this), function (t) {
          this._xhr = null, o(t), n && n(t);
        }.bind(this));
      }.bind(this));
    }, t.Buffer.prototype.dispose = function () {
      return t.prototype.dispose.call(this), this._buffer = null, this._xhr && (t.Buffer._removeFromDownloadQueue(this._xhr), this._xhr.abort(), this._xhr = null), this;
    }, Object.defineProperty(t.Buffer.prototype, "loaded", {
      get: function get() {
        return this.length > 0;
      }
    }), Object.defineProperty(t.Buffer.prototype, "duration", {
      get: function get() {
        return this._buffer ? this._buffer.duration : 0;
      }
    }), Object.defineProperty(t.Buffer.prototype, "length", {
      get: function get() {
        return this._buffer ? this._buffer.length : 0;
      }
    }), Object.defineProperty(t.Buffer.prototype, "numberOfChannels", {
      get: function get() {
        return this._buffer ? this._buffer.numberOfChannels : 0;
      }
    }), t.Buffer.prototype.fromArray = function (t) {
      var e,
          i = t[0].length > 0,
          n = i ? t.length : 1,
          s = i ? t[0].length : t.length,
          o = this.context.createBuffer(n, s, this.context.sampleRate);

      for (i || 1 !== n || (t = [t]), e = 0; e < n; e++) {
        o.copyToChannel(t[e], e);
      }

      return this._buffer = o, this;
    }, t.Buffer.prototype.toMono = function (e) {
      var i, n, s, o, r;
      if (t.isNumber(e)) this.fromArray(this.toArray(e));else {
        for (i = new Float32Array(this.length), n = this.numberOfChannels, s = 0; s < n; s++) {
          for (o = this.toArray(s), r = 0; r < o.length; r++) {
            i[r] += o[r];
          }
        }

        i = i.map(function (t) {
          return t / n;
        }), this.fromArray(i);
      }
      return this;
    }, t.Buffer.prototype.toArray = function (e) {
      var i, n;
      if (t.isNumber(e)) return this.getChannelData(e);
      if (1 === this.numberOfChannels) return this.toArray(0);

      for (i = [], n = 0; n < this.numberOfChannels; n++) {
        i[n] = this.getChannelData(n);
      }

      return i;
    }, t.Buffer.prototype.getChannelData = function (t) {
      return this._buffer.getChannelData(t);
    }, t.Buffer.prototype.slice = function (e, i) {
      var n, s, o, r;

      for (i = t.defaultArg(i, this.duration), n = Math.floor(this.context.sampleRate * this.toSeconds(e)), s = Math.floor(this.context.sampleRate * this.toSeconds(i)), o = [], r = 0; r < this.numberOfChannels; r++) {
        o[r] = this.toArray(r).slice(n, s);
      }

      return new t.Buffer().fromArray(o);
    }, t.Buffer.prototype._reverse = function () {
      if (this.loaded) for (var t = 0; t < this.numberOfChannels; t++) {
        Array.prototype.reverse.call(this.getChannelData(t));
      }
      return this;
    }, Object.defineProperty(t.Buffer.prototype, "reverse", {
      get: function get() {
        return this._reversed;
      },
      set: function set(t) {
        this._reversed !== t && (this._reversed = t, this._reverse());
      }
    }), t.Emitter.mixin(t.Buffer), t.Buffer._downloadQueue = [], t.Buffer.baseUrl = "", t.Buffer.fromArray = function (e) {
      return new t.Buffer().fromArray(e);
    }, t.Buffer.fromUrl = function (e) {
      var i = new t.Buffer();
      return i.load(e).then(function () {
        return i;
      });
    }, t.Buffer._removeFromDownloadQueue = function (e) {
      var i = t.Buffer._downloadQueue.indexOf(e);

      -1 !== i && t.Buffer._downloadQueue.splice(i, 1);
    }, t.Buffer.load = function (e, i, n) {
      function s(e) {
        if (t.Buffer._removeFromDownloadQueue(u), t.Buffer.emit("error", e), !n) throw e;
        n(e);
      }

      function o() {
        var e,
            i = 0;

        for (e = 0; e < t.Buffer._downloadQueue.length; e++) {
          i += t.Buffer._downloadQueue[e].progress;
        }

        t.Buffer.emit("progress", i / t.Buffer._downloadQueue.length);
      }

      var r, a, h, l, u;

      if (i = t.defaultArg(i, t.noOp), r = e.match(/\[(.+\|?)+\]$/)) {
        for (a = r[1].split("|"), h = a[0], l = 0; l < a.length; l++) {
          if (t.Buffer.supportsType(a[l])) {
            h = a[l];
            break;
          }
        }

        e = e.replace(r[0], h);
      }

      return u = new XMLHttpRequest(), u.open("GET", t.Buffer.baseUrl + e, !0), u.responseType = "arraybuffer", u.progress = 0, t.Buffer._downloadQueue.push(u), u.addEventListener("load", function () {
        200 === u.status ? t.context.decodeAudioData(u.response).then(function (e) {
          u.progress = 1, o(), i(e), t.Buffer._removeFromDownloadQueue(u), 0 === t.Buffer._downloadQueue.length && t.Buffer.emit("load");
        }).catch(function () {
          t.Buffer._removeFromDownloadQueue(u), s("Tone.Buffer: could not decode audio data: " + e);
        }) : s("Tone.Buffer: could not locate file: " + e);
      }), u.addEventListener("error", s), u.addEventListener("progress", function (t) {
        t.lengthComputable && (u.progress = t.loaded / t.total * .95, o());
      }), u.send(), u;
    }, t.Buffer.cancelDownloads = function () {
      return t.Buffer._downloadQueue.slice().forEach(function (e) {
        t.Buffer._removeFromDownloadQueue(e), e.abort();
      }), t.Buffer;
    }, t.Buffer.supportsType = function (t) {
      var e = t.split(".");
      return e = e[e.length - 1], "" !== document.createElement("audio").canPlayType("audio/" + e);
    }, t.loaded = function () {
      function e() {
        t.Buffer.off("load", i), t.Buffer.off("error", n);
      }

      var i, n;
      return new Promise(function (e, s) {
        i = function i() {
          e();
        }, n = function n() {
          s();
        }, t.Buffer.on("load", i), t.Buffer.on("error", n);
      }).then(e).catch(function (t) {
        throw e(), new Error(t);
      });
    }, t.Buffer;
  }), t(function (t) {
    return t.OscillatorNode = function () {
      var e = t.defaults(arguments, ["frequency", "type"], t.OscillatorNode);
      t.AudioNode.call(this, e), this.onended = e.onended, this._startTime = -1, this._stopTime = -1, this._gainNode = this.output = new t.Gain(), this._gainNode.gain.setValueAtTime(0, this.context.currentTime), this._oscillator = this.context.createOscillator(), this._oscillator.connect(this._gainNode), this.type = e.type, this.frequency = new t.Param(this._oscillator.frequency, t.Type.Frequency), this.frequency.value = e.frequency, this.detune = new t.Param(this._oscillator.detune, t.Type.Cents), this.detune.value = e.detune, this._gain = 1;
    }, t.extend(t.OscillatorNode, t.AudioNode), t.OscillatorNode.defaults = {
      frequency: 440,
      detune: 0,
      type: "sine",
      onended: t.noOp
    }, Object.defineProperty(t.OscillatorNode.prototype, "state", {
      get: function get() {
        return this.getStateAtTime(this.now());
      }
    }), t.OscillatorNode.prototype.getStateAtTime = function (e) {
      return e = this.toSeconds(e), -1 !== this._startTime && e >= this._startTime && (-1 === this._stopTime || e <= this._stopTime) ? t.State.Started : t.State.Stopped;
    }, t.OscillatorNode.prototype.start = function (t) {
      if (-1 !== this._startTime) throw new Error("cannot call OscillatorNode.start more than once");
      this._startTime = this.toSeconds(t), this._oscillator.start(this._startTime);
      var e = this.context.currentTime;
      return this._gainNode.gain.cancelScheduledValues(e), this._gainNode.gain.setValueAtTime(0, e), this._gainNode.gain.setValueAtTime(1, this._startTime), this;
    }, t.OscillatorNode.prototype.setPeriodicWave = function (t) {
      return this._oscillator.setPeriodicWave(t), this;
    }, t.OscillatorNode.prototype.stop = function (t) {
      return this.cancelStop(), this._stopTime = this.toSeconds(t), this._gainNode.gain.setValueAtTime(0, this._stopTime), this.context.clearTimeout(this._timeout), this._timeout = this.context.setTimeout(function () {
        this._oscillator.stop(this.now()), this.onended();
      }.bind(this), this._stopTime - this.now()), this;
    }, t.OscillatorNode.prototype.cancelStop = function () {
      return -1 !== this._startTime && (this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime), this._gainNode.gain.setValueAtTime(1, Math.max(this.now(), this._startTime)), this.context.clearTimeout(this._timeout), this._stopTime = -1), this;
    }, Object.defineProperty(t.OscillatorNode.prototype, "type", {
      get: function get() {
        return this._oscillator.type;
      },
      set: function set(t) {
        this._oscillator.type = t;
      }
    }), t.OscillatorNode.prototype.dispose = function () {
      return this.context.clearTimeout(this._timeout), t.AudioNode.prototype.dispose.call(this), this.onended = null, this._oscillator.disconnect(), this._oscillator = null, this._gainNode.dispose(), this._gainNode = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this;
    }, t.OscillatorNode;
  }), t(function (t) {
    return t.Oscillator = function () {
      var e = t.defaults(arguments, ["frequency", "type"], t.Oscillator);
      t.Source.call(this, e), this._oscillator = null, this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._wave = null, this._partials = t.defaultArg(e.partials, [1]), this._phase = e.phase, this._type = null, this.type = e.type, this.phase = this._phase, this._readOnly(["frequency", "detune"]);
    }, t.extend(t.Oscillator, t.Source), t.Oscillator.defaults = {
      type: "sine",
      frequency: 440,
      detune: 0,
      phase: 0,
      partials: []
    }, t.Oscillator.Type = {
      Sine: "sine",
      Triangle: "triangle",
      Sawtooth: "sawtooth",
      Square: "square",
      Custom: "custom"
    }, t.Oscillator.prototype._start = function (e) {
      this._oscillator = new t.OscillatorNode(), this._wave ? this._oscillator.setPeriodicWave(this._wave) : this._oscillator.type = this._type, this._oscillator.connect(this.output), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), e = this.toSeconds(e), this._oscillator.start(e);
    }, t.Oscillator.prototype._stop = function (t) {
      return this._oscillator && (t = this.toSeconds(t), this._oscillator.stop(t)), this;
    }, t.Oscillator.prototype.restart = function (t) {
      return this._oscillator.cancelStop(), this._state.cancel(this.toSeconds(t)), this;
    }, t.Oscillator.prototype.syncFrequency = function () {
      return t.Transport.syncSignal(this.frequency), this;
    }, t.Oscillator.prototype.unsyncFrequency = function () {
      return t.Transport.unsyncSignal(this.frequency), this;
    }, Object.defineProperty(t.Oscillator.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(e) {
        var i,
            n,
            s = [t.Oscillator.Type.Sine, t.Oscillator.Type.Square, t.Oscillator.Type.Triangle, t.Oscillator.Type.Sawtooth].includes(e);
        0 === this._phase && s ? (this._wave = null, null !== this._oscillator && this._oscillator.type) : (i = this._getRealImaginary(e, this._phase), n = this.context.createPeriodicWave(i[0], i[1]), this._wave = n, null !== this._oscillator && this._oscillator.setPeriodicWave(this._wave)), this._type = e;
      }
    }), t.Oscillator.prototype._getRealImaginary = function (e, i) {
      var n,
          s,
          o,
          r,
          a = 4096,
          h = a / 2,
          l = new Float32Array(h),
          u = new Float32Array(h),
          c = 1;

      for (e === t.Oscillator.Type.Custom ? (c = this._partials.length + 1, h = c) : (n = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(e)) && (c = parseInt(n[2]) + 1, e = n[1], c = Math.max(c, 2), h = c), s = 1; s < h; ++s) {
        switch (o = 2 / (s * Math.PI), e) {
          case t.Oscillator.Type.Sine:
            r = s <= c ? 1 : 0;
            break;

          case t.Oscillator.Type.Square:
            r = 1 & s ? 2 * o : 0;
            break;

          case t.Oscillator.Type.Sawtooth:
            r = o * (1 & s ? 1 : -1);
            break;

          case t.Oscillator.Type.Triangle:
            r = 1 & s ? o * o * 2 * (s - 1 >> 1 & 1 ? -1 : 1) : 0;
            break;

          case t.Oscillator.Type.Custom:
            r = this._partials[s - 1];
            break;

          default:
            throw new TypeError("Tone.Oscillator: invalid type: " + e);
        }

        0 !== r ? (l[s] = -r * Math.sin(i * s), u[s] = r * Math.cos(i * s)) : (l[s] = 0, u[s] = 0);
      }

      return [l, u];
    }, t.Oscillator.prototype._inverseFFT = function (t, e, i) {
      var n,
          s = 0,
          o = t.length;

      for (n = 0; n < o; n++) {
        s += t[n] * Math.cos(n * i) + e[n] * Math.sin(n * i);
      }

      return s;
    }, t.Oscillator.prototype._getInitialValue = function () {
      var t,
          e = this._getRealImaginary(this._type, 0),
          i = e[0],
          n = e[1],
          s = 0,
          o = 2 * Math.PI;

      for (t = 0; t < 8; t++) {
        s = Math.max(this._inverseFFT(i, n, t / 8 * o), s);
      }

      return -this._inverseFFT(i, n, this._phase) / s;
    }, Object.defineProperty(t.Oscillator.prototype, "partials", {
      get: function get() {
        return this._type !== t.Oscillator.Type.Custom ? [] : this._partials;
      },
      set: function set(e) {
        this._partials = e, this.type = t.Oscillator.Type.Custom;
      }
    }), Object.defineProperty(t.Oscillator.prototype, "phase", {
      get: function get() {
        return this._phase * (180 / Math.PI);
      },
      set: function set(t) {
        this._phase = t * Math.PI / 180, this.type = this._type;
      }
    }), t.Oscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), null !== this._oscillator && (this._oscillator.dispose(), this._oscillator = null), this._wave = null, this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._partials = null, this;
    }, t.Oscillator;
  }), t(function (t) {
    return t.AudioToGain = function () {
      t.SignalBase.call(this), this._norm = this.input = this.output = new t.WaveShaper(function (t) {
        return (t + 1) / 2;
      });
    }, t.extend(t.AudioToGain, t.SignalBase), t.AudioToGain.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this;
    }, t.AudioToGain;
  }), t(function (t) {
    return t.Zero = function () {
      t.SignalBase.call(this), this._gain = this.input = this.output = new t.Gain(), this.context.getConstant(0).connect(this._gain);
    }, t.extend(t.Zero, t.SignalBase), t.Zero.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._gain.dispose(), this._gain = null, this;
    }, t.Zero;
  }), t(function (t) {
    return t.LFO = function () {
      var e = t.defaults(arguments, ["frequency", "min", "max"], t.LFO);
      t.AudioNode.call(this), this._oscillator = new t.Oscillator({
        frequency: e.frequency,
        type: e.type
      }), this.frequency = this._oscillator.frequency, this.amplitude = this._oscillator.volume, this.amplitude.units = t.Type.NormalRange, this.amplitude.value = e.amplitude, this._stoppedSignal = new t.Signal(0, t.Type.AudioRange), this._zeros = new t.Zero(), this._stoppedValue = 0, this._a2g = new t.AudioToGain(), this._scaler = this.output = new t.Scale(e.min, e.max), this._units = t.Type.Default, this.units = e.units, this._oscillator.chain(this._a2g, this._scaler), this._zeros.connect(this._a2g), this._stoppedSignal.connect(this._a2g), this._readOnly(["amplitude", "frequency"]), this.phase = e.phase;
    }, t.extend(t.LFO, t.AudioNode), t.LFO.defaults = {
      type: "sine",
      min: 0,
      max: 1,
      phase: 0,
      frequency: "4n",
      amplitude: 1,
      units: t.Type.Default
    }, t.LFO.prototype.start = function (t) {
      return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(0, t), this._oscillator.start(t), this;
    }, t.LFO.prototype.stop = function (t) {
      return t = this.toSeconds(t), this._stoppedSignal.setValueAtTime(this._stoppedValue, t), this._oscillator.stop(t), this;
    }, t.LFO.prototype.sync = function () {
      return this._oscillator.sync(), this._oscillator.syncFrequency(), this;
    }, t.LFO.prototype.unsync = function () {
      return this._oscillator.unsync(), this._oscillator.unsyncFrequency(), this;
    }, Object.defineProperty(t.LFO.prototype, "min", {
      get: function get() {
        return this._toUnits(this._scaler.min);
      },
      set: function set(t) {
        t = this._fromUnits(t), this._scaler.min = t;
      }
    }), Object.defineProperty(t.LFO.prototype, "max", {
      get: function get() {
        return this._toUnits(this._scaler.max);
      },
      set: function set(t) {
        t = this._fromUnits(t), this._scaler.max = t;
      }
    }), Object.defineProperty(t.LFO.prototype, "type", {
      get: function get() {
        return this._oscillator.type;
      },
      set: function set(t) {
        this._oscillator.type = t, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
      }
    }), Object.defineProperty(t.LFO.prototype, "phase", {
      get: function get() {
        return this._oscillator.phase;
      },
      set: function set(t) {
        this._oscillator.phase = t, this._stoppedValue = this._oscillator._getInitialValue(), this._stoppedSignal.value = this._stoppedValue;
      }
    }), Object.defineProperty(t.LFO.prototype, "units", {
      get: function get() {
        return this._units;
      },
      set: function set(t) {
        var e = this.min,
            i = this.max;
        this._units = t, this.min = e, this.max = i;
      }
    }), Object.defineProperty(t.LFO.prototype, "mute", {
      get: function get() {
        return this._oscillator.mute;
      },
      set: function set(t) {
        this._oscillator.mute = t;
      }
    }), Object.defineProperty(t.LFO.prototype, "state", {
      get: function get() {
        return this._oscillator.state;
      }
    }), t.LFO.prototype.connect = function (e) {
      return e.constructor !== t.Signal && e.constructor !== t.Param || (this.convert = e.convert, this.units = e.units), t.SignalBase.prototype.connect.apply(this, arguments), this;
    }, t.LFO.prototype._fromUnits = t.Param.prototype._fromUnits, t.LFO.prototype._toUnits = t.Param.prototype._toUnits, t.LFO.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["amplitude", "frequency"]), this._oscillator.dispose(), this._oscillator = null, this._stoppedSignal.dispose(), this._stoppedSignal = null, this._zeros.dispose(), this._zeros = null, this._scaler.dispose(), this._scaler = null, this._a2g.dispose(), this._a2g = null, this.frequency = null, this.amplitude = null, this;
    }, t.LFO;
  }), t(function (t) {
    return t.Limiter = function () {
      var e = t.defaults(arguments, ["threshold"], t.Limiter);
      t.AudioNode.call(this), this._compressor = this.input = this.output = new t.Compressor({
        attack: .001,
        decay: .001,
        threshold: e.threshold
      }), this.threshold = this._compressor.threshold, this._readOnly("threshold");
    }, t.extend(t.Limiter, t.AudioNode), t.Limiter.defaults = {
      threshold: -12
    }, t.Limiter.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._compressor.dispose(), this._compressor = null, this._writable("threshold"), this.threshold = null, this;
    }, t.Limiter;
  }), t(function (t) {
    return t.LowpassCombFilter = function () {
      var e = t.defaults(arguments, ["delayTime", "resonance", "dampening"], t.LowpassCombFilter);
      t.AudioNode.call(this), this.createInsOuts(1, 1), this._delay = this.input = new t.Delay(e.delayTime), this.delayTime = this._delay.delayTime, this._lowpass = this.output = this.context.createBiquadFilter(), this._lowpass.Q.value = -3.0102999566398125, this._lowpass.type = "lowpass", this.dampening = new t.Param({
        param: this._lowpass.frequency,
        units: t.Type.Frequency,
        value: e.dampening
      }), this._feedback = new t.Gain(e.resonance, t.Type.NormalRange), this.resonance = this._feedback.gain, this._delay.chain(this._lowpass, this._feedback, this._delay), this._readOnly(["dampening", "resonance", "delayTime"]);
    }, t.extend(t.LowpassCombFilter, t.AudioNode), t.LowpassCombFilter.defaults = {
      delayTime: .1,
      resonance: .5,
      dampening: 3e3
    }, t.LowpassCombFilter.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["dampening", "resonance", "delayTime"]), this.dampening.dispose(), this.dampening = null, this.resonance.dispose(), this.resonance = null, this._delay.dispose(), this._delay = null, this.delayTime = null, this._lowpass.disconnect(), this._lowpass = null, this._feedback.disconnect(), this._feedback = null, this;
    }, t.LowpassCombFilter;
  }), t(function (t) {
    return t.Merge = function () {
      t.AudioNode.call(this), this.createInsOuts(2, 0), this.left = this.input[0] = new t.Gain(), this.right = this.input[1] = new t.Gain(), this._merger = this.output = this.context.createChannelMerger(2), this.left.connect(this._merger, 0, 0), this.right.connect(this._merger, 0, 1), this.left.channelCount = 1, this.right.channelCount = 1, this.left.channelCountMode = "explicit", this.right.channelCountMode = "explicit";
    }, t.extend(t.Merge, t.AudioNode), t.Merge.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this.left.dispose(), this.left = null, this.right.dispose(), this.right = null, this._merger.disconnect(), this._merger = null, this;
    }, t.Merge;
  }), t(function (t) {
    return t.Meter = function () {
      var e = t.defaults(arguments, ["smoothing"], t.Meter);
      t.AudioNode.call(this), this.input = this.output = this._analyser = new t.Analyser("waveform", 1024), this.smoothing = e.smoothing;
    }, t.extend(t.Meter, t.AudioNode), t.Meter.defaults = {
      smoothing: .8
    }, t.Meter.prototype.getLevel = function () {
      var t, e;
      return this._analyser.type = "fft", t = this._analyser.getValue(), e = 28, Math.max.apply(this, t) + e;
    }, t.Meter.prototype.getValue = function () {
      return this._analyser.type = "waveform", this._analyser.getValue()[0];
    }, Object.defineProperty(t.Meter.prototype, "smoothing", {
      get: function get() {
        return this._analyser.smoothing;
      },
      set: function set(t) {
        this._analyser.smoothing = t;
      }
    }), t.Meter.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null, this;
    }, t.Meter;
  }), t(function (t) {
    return t.Split = function () {
      t.AudioNode.call(this), this.createInsOuts(0, 2), this._splitter = this.input = this.context.createChannelSplitter(2), this._splitter.channelCount = 2, this._splitter.channelCountMode = "explicit", this.left = this.output[0] = new t.Gain(), this.right = this.output[1] = new t.Gain(), this._splitter.connect(this.left, 0, 0), this._splitter.connect(this.right, 1, 0);
    }, t.extend(t.Split, t.AudioNode), t.Split.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._splitter.disconnect(), this.left.dispose(), this.left = null, this.right.dispose(), this.right = null, this._splitter = null, this;
    }, t.Split;
  }), t(function (t) {
    return t.MidSideSplit = function () {
      t.AudioNode.call(this), this.createInsOuts(0, 2), this._split = this.input = new t.Split(), this._midAdd = new t.Add(), this.mid = this.output[0] = new t.Multiply(Math.SQRT1_2), this._sideSubtract = new t.Subtract(), this.side = this.output[1] = new t.Multiply(Math.SQRT1_2), this._split.connect(this._midAdd, 0, 0), this._split.connect(this._midAdd, 1, 1), this._split.connect(this._sideSubtract, 0, 0), this._split.connect(this._sideSubtract, 1, 1), this._midAdd.connect(this.mid), this._sideSubtract.connect(this.side);
    }, t.extend(t.MidSideSplit, t.AudioNode), t.MidSideSplit.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midAdd.dispose(), this._midAdd = null, this._sideSubtract.dispose(), this._sideSubtract = null, this._split.dispose(), this._split = null, this;
    }, t.MidSideSplit;
  }), t(function (t) {
    return t.MidSideMerge = function () {
      t.AudioNode.call(this), this.createInsOuts(2, 0), this.mid = this.input[0] = new t.Gain(), this._left = new t.Add(), this._timesTwoLeft = new t.Multiply(Math.SQRT1_2), this.side = this.input[1] = new t.Gain(), this._right = new t.Subtract(), this._timesTwoRight = new t.Multiply(Math.SQRT1_2), this._merge = this.output = new t.Merge(), this.mid.connect(this._left, 0, 0), this.side.connect(this._left, 0, 1), this.mid.connect(this._right, 0, 0), this.side.connect(this._right, 0, 1), this._left.connect(this._timesTwoLeft), this._right.connect(this._timesTwoRight), this._timesTwoLeft.connect(this._merge, 0, 0), this._timesTwoRight.connect(this._merge, 0, 1);
    }, t.extend(t.MidSideMerge, t.AudioNode), t.MidSideMerge.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._left.dispose(), this._left = null, this._timesTwoLeft.dispose(), this._timesTwoLeft = null, this._right.dispose(), this._right = null, this._timesTwoRight.dispose(), this._timesTwoRight = null, this._merge.dispose(), this._merge = null, this;
    }, t.MidSideMerge;
  }), t(function (t) {
    return t.MidSideCompressor = function (e) {
      t.AudioNode.call(this), e = t.defaultArg(e, t.MidSideCompressor.defaults), this._midSideSplit = this.input = new t.MidSideSplit(), this._midSideMerge = this.output = new t.MidSideMerge(), this.mid = new t.Compressor(e.mid), this.side = new t.Compressor(e.side), this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid), this._midSideSplit.side.chain(this.side, this._midSideMerge.side), this._readOnly(["mid", "side"]);
    }, t.extend(t.MidSideCompressor, t.AudioNode), t.MidSideCompressor.defaults = {
      mid: {
        ratio: 3,
        threshold: -24,
        release: .03,
        attack: .02,
        knee: 16
      },
      side: {
        ratio: 6,
        threshold: -30,
        release: .25,
        attack: .03,
        knee: 10
      }
    }, t.MidSideCompressor.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["mid", "side"]), this.mid.dispose(), this.mid = null, this.side.dispose(), this.side = null, this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this;
    }, t.MidSideCompressor;
  }), t(function (t) {
    return t.Mono = function () {
      t.AudioNode.call(this), this.createInsOuts(1, 0), this._merge = this.output = new t.Merge(), this.input.connect(this._merge, 0, 0), this.input.connect(this._merge, 0, 1);
    }, t.extend(t.Mono, t.AudioNode), t.Mono.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._merge.dispose(), this._merge = null, this;
    }, t.Mono;
  }), t(function (t) {
    return t.MultibandCompressor = function (e) {
      t.AudioNode.call(this), e = t.defaultArg(arguments, t.MultibandCompressor.defaults), this._splitter = this.input = new t.MultibandSplit({
        lowFrequency: e.lowFrequency,
        highFrequency: e.highFrequency
      }), this.lowFrequency = this._splitter.lowFrequency, this.highFrequency = this._splitter.highFrequency, this.output = new t.Gain(), this.low = new t.Compressor(e.low), this.mid = new t.Compressor(e.mid), this.high = new t.Compressor(e.high), this._splitter.low.chain(this.low, this.output), this._splitter.mid.chain(this.mid, this.output), this._splitter.high.chain(this.high, this.output), this._readOnly(["high", "mid", "low", "highFrequency", "lowFrequency"]);
    }, t.extend(t.MultibandCompressor, t.AudioNode), t.MultibandCompressor.defaults = {
      low: t.Compressor.defaults,
      mid: t.Compressor.defaults,
      high: t.Compressor.defaults,
      lowFrequency: 250,
      highFrequency: 2e3
    }, t.MultibandCompressor.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._splitter.dispose(), this._writable(["high", "mid", "low", "highFrequency", "lowFrequency"]), this.low.dispose(), this.mid.dispose(), this.high.dispose(), this._splitter = null, this.low = null, this.mid = null, this.high = null, this.lowFrequency = null, this.highFrequency = null, this;
    }, t.MultibandCompressor;
  }), t(function (t) {
    if (t.supported && !window.StereoPannerNode) {
      var e = function e(_e3) {
        var i, n, s, o, r, a, h;
        this.context = _e3, this.pan = new t.Signal(0, t.Type.AudioRange), i = new t.WaveShaper(function (e) {
          return t.equalPowerScale((e + 1) / 2);
        }, 4096), n = new t.WaveShaper(function (e) {
          return t.equalPowerScale(1 - (e + 1) / 2);
        }, 4096), s = new t.Gain(), o = new t.Gain(), r = this.input = new t.Split(), a = new t.Zero(), a.fan(i, n), h = this.output = new t.Merge(), r.left.chain(s, h.left), r.right.chain(o, h.right), this.pan.chain(n, s.gain), this.pan.chain(i, o.gain);
      };

      e.prototype.disconnect = function () {
        this.output.disconnect.apply(this.output, arguments);
      }, e.prototype.connect = function () {
        this.output.connect.apply(this.output, arguments);
      }, AudioContext.prototype.createStereoPanner = function () {
        return new e(this);
      }, t.Context.prototype.createStereoPanner = function () {
        return new e(this);
      };
    }
  }), t(function (t) {
    return t.Panner = function (e) {
      t.AudioNode.call(this), this._panner = this.input = this.output = this.context.createStereoPanner(), this.pan = this._panner.pan, this.pan.value = t.defaultArg(e, 0), this._readOnly("pan");
    }, t.extend(t.Panner, t.AudioNode), t.Panner.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable("pan"), this._panner.disconnect(), this._panner = null, this.pan = null, this;
    }, t.Panner;
  }), t(function (t) {
    return t.Panner3D = function () {
      var e = t.defaults(arguments, ["positionX", "positionY", "positionZ"], t.Panner3D);
      t.AudioNode.call(this), this._panner = this.input = this.output = this.context.createPanner(), this._panner.panningModel = e.panningModel, this._panner.maxDistance = e.maxDistance, this._panner.distanceModel = e.distanceModel, this._panner.coneOuterGain = e.coneOuterGain, this._panner.coneOuterAngle = e.coneOuterAngle, this._panner.coneInnerAngle = e.coneInnerAngle, this._panner.refDistance = e.refDistance, this._panner.rolloffFactor = e.rolloffFactor, this._orientation = [e.orientationX, e.orientationY, e.orientationZ], this._position = [e.positionX, e.positionY, e.positionZ], this.orientationX = e.orientationX, this.orientationY = e.orientationY, this.orientationZ = e.orientationZ, this.positionX = e.positionX, this.positionY = e.positionY, this.positionZ = e.positionZ;
    }, t.extend(t.Panner3D, t.AudioNode), t.Panner3D.defaults = {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      orientationX: 0,
      orientationY: 0,
      orientationZ: 0,
      panningModel: "equalpower",
      maxDistance: 1e4,
      distanceModel: "inverse",
      coneOuterGain: 0,
      coneOuterAngle: 360,
      coneInnerAngle: 360,
      refDistance: 1,
      rolloffFactor: 1
    }, t.Panner3D.prototype._rampTimeConstant = .01, t.Panner3D.prototype.setPosition = function (t, e, i) {
      if (this._panner.positionX) {
        var n = this.now();
        this._panner.positionX.setTargetAtTime(t, n, this._rampTimeConstant), this._panner.positionY.setTargetAtTime(e, n, this._rampTimeConstant), this._panner.positionZ.setTargetAtTime(i, n, this._rampTimeConstant);
      } else this._panner.setPosition(t, e, i);

      return this._position = Array.prototype.slice.call(arguments), this;
    }, t.Panner3D.prototype.setOrientation = function (t, e, i) {
      if (this._panner.orientationX) {
        var n = this.now();
        this._panner.orientationX.setTargetAtTime(t, n, this._rampTimeConstant), this._panner.orientationY.setTargetAtTime(e, n, this._rampTimeConstant), this._panner.orientationZ.setTargetAtTime(i, n, this._rampTimeConstant);
      } else this._panner.setOrientation(t, e, i);

      return this._orientation = Array.prototype.slice.call(arguments), this;
    }, Object.defineProperty(t.Panner3D.prototype, "positionX", {
      set: function set(t) {
        this._position[0] = t, this.setPosition.apply(this, this._position);
      },
      get: function get() {
        return this._position[0];
      }
    }), Object.defineProperty(t.Panner3D.prototype, "positionY", {
      set: function set(t) {
        this._position[1] = t, this.setPosition.apply(this, this._position);
      },
      get: function get() {
        return this._position[1];
      }
    }), Object.defineProperty(t.Panner3D.prototype, "positionZ", {
      set: function set(t) {
        this._position[2] = t, this.setPosition.apply(this, this._position);
      },
      get: function get() {
        return this._position[2];
      }
    }), Object.defineProperty(t.Panner3D.prototype, "orientationX", {
      set: function set(t) {
        this._orientation[0] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[0];
      }
    }), Object.defineProperty(t.Panner3D.prototype, "orientationY", {
      set: function set(t) {
        this._orientation[1] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[1];
      }
    }), Object.defineProperty(t.Panner3D.prototype, "orientationZ", {
      set: function set(t) {
        this._orientation[2] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[2];
      }
    }), t.Panner3D._aliasProperty = function (e) {
      Object.defineProperty(t.Panner3D.prototype, e, {
        set: function set(t) {
          this._panner[e] = t;
        },
        get: function get() {
          return this._panner[e];
        }
      });
    }, t.Panner3D._aliasProperty("panningModel"), t.Panner3D._aliasProperty("refDistance"), t.Panner3D._aliasProperty("rolloffFactor"), t.Panner3D._aliasProperty("distanceModel"), t.Panner3D._aliasProperty("coneInnerAngle"), t.Panner3D._aliasProperty("coneOuterAngle"), t.Panner3D._aliasProperty("coneOuterGain"), t.Panner3D._aliasProperty("maxDistance"), t.Panner3D.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._panner.disconnect(), this._panner = null, this._orientation = null, this._position = null, this;
    }, t.Panner3D;
  }), t(function (t) {
    return t.PanVol = function () {
      var e = t.defaults(arguments, ["pan", "volume"], t.PanVol);
      t.AudioNode.call(this), this._panner = this.input = new t.Panner(e.pan), this.pan = this._panner.pan, this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._panner.connect(this._volume), this.mute = e.mute, this._readOnly(["pan", "volume"]);
    }, t.extend(t.PanVol, t.AudioNode), t.PanVol.defaults = {
      pan: 0,
      volume: 0,
      mute: !1
    }, Object.defineProperty(t.PanVol.prototype, "mute", {
      get: function get() {
        return this._volume.mute;
      },
      set: function set(t) {
        this._volume.mute = t;
      }
    }), t.PanVol.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._writable(["pan", "volume"]), this._panner.dispose(), this._panner = null, this.pan = null, this._volume.dispose(), this._volume = null, this.volume = null, this;
    }, t.PanVol;
  }), t(function (t) {
    return t.Solo = function () {
      var e = t.defaults(arguments, ["solo"], t.Solo);
      t.AudioNode.call(this), this.input = this.output = new t.Gain(), this._soloBind = this._soloed.bind(this), this.context.on("solo", this._soloBind), this.solo = e.solo;
    }, t.extend(t.Solo, t.AudioNode), t.Solo.defaults = {
      solo: !1
    }, Object.defineProperty(t.Solo.prototype, "solo", {
      get: function get() {
        return this._isSoloed();
      },
      set: function set(t) {
        t ? this._addSolo() : this._removeSolo(), this.context.emit("solo", this);
      }
    }), Object.defineProperty(t.Solo.prototype, "muted", {
      get: function get() {
        return 0 === this.input.gain.value;
      }
    }), t.Solo.prototype._addSolo = function () {
      t.isArray(this.context._currentSolo) || (this.context._currentSolo = []), this._isSoloed() || this.context._currentSolo.push(this);
    }, t.Solo.prototype._removeSolo = function () {
      if (this._isSoloed()) {
        var t = this.context._currentSolo.indexOf(this);

        this.context._currentSolo.splice(t, 1);
      }
    }, t.Solo.prototype._isSoloed = function () {
      return !!t.isArray(this.context._currentSolo) && 0 !== this.context._currentSolo.length && -1 !== this.context._currentSolo.indexOf(this);
    }, t.Solo.prototype._noSolos = function () {
      return !t.isArray(this.context._currentSolo) || 0 === this.context._currentSolo.length;
    }, t.Solo.prototype._soloed = function () {
      this._isSoloed() ? this.input.gain.value = 1 : this._noSolos() ? this.input.gain.value = 1 : this.input.gain.value = 0;
    }, t.Solo.prototype.dispose = function () {
      return this.context.off("solo", this._soloBind), this._removeSolo(), this._soloBind = null, t.AudioNode.prototype.dispose.call(this), this;
    }, t.Solo;
  }), t(function (t) {
    return t.Waveform = function () {
      var e = t.defaults(arguments, ["size"], t.Waveform);
      e.type = t.Analyser.Type.Waveform, t.AudioNode.call(this), this._analyser = this.input = this.output = new t.Analyser(e);
    }, t.extend(t.Waveform, t.AudioNode), t.Waveform.defaults = {
      size: 1024
    }, t.Waveform.prototype.getValue = function () {
      return this._analyser.getValue();
    }, Object.defineProperty(t.Waveform.prototype, "size", {
      get: function get() {
        return this._analyser.size;
      },
      set: function set(t) {
        this._analyser.size = t;
      }
    }), t.Waveform.prototype.dispose = function () {
      t.AudioNode.prototype.dispose.call(this), this._analyser.dispose(), this._analyser = null;
    }, t.Waveform;
  }), t(function (t) {
    return t.CtrlInterpolate = function () {
      var e = t.defaults(arguments, ["values", "index"], t.CtrlInterpolate);
      t.call(this), this.values = e.values, this.index = e.index;
    }, t.extend(t.CtrlInterpolate), t.CtrlInterpolate.defaults = {
      index: 0,
      values: []
    }, Object.defineProperty(t.CtrlInterpolate.prototype, "value", {
      get: function get() {
        var t,
            e,
            i,
            n = this.index;
        return n = Math.min(n, this.values.length - 1), t = Math.floor(n), e = this.values[t], i = this.values[Math.ceil(n)], this._interpolate(n - t, e, i);
      }
    }), t.CtrlInterpolate.prototype._interpolate = function (e, i, n) {
      var s, o, r, a;

      if (t.isArray(i)) {
        for (s = [], o = 0; o < i.length; o++) {
          s[o] = this._interpolate(e, i[o], n[o]);
        }

        return s;
      }

      if (t.isObject(i)) {
        r = {};

        for (a in i) {
          r[a] = this._interpolate(e, i[a], n[a]);
        }

        return r;
      }

      return i = this._toNumber(i), n = this._toNumber(n), (1 - e) * i + e * n;
    }, t.CtrlInterpolate.prototype._toNumber = function (e) {
      return t.isNumber(e) ? e : this.toSeconds(e);
    }, t.CtrlInterpolate.prototype.dispose = function () {
      this.values = null;
    }, t.CtrlInterpolate;
  }), t(function (t) {
    return t.CtrlMarkov = function (e, i) {
      t.call(this), this.values = t.defaultArg(e, {}), this.value = t.defaultArg(i, Object.keys(this.values)[0]);
    }, t.extend(t.CtrlMarkov), t.CtrlMarkov.prototype.next = function () {
      var e, i, n, s, o, r, a;
      if (this.values.hasOwnProperty(this.value)) if (e = this.values[this.value], t.isArray(e)) for (i = this._getProbDistribution(e), n = Math.random(), s = 0, o = 0; o < i.length; o++) {
        r = i[o], n > s && n < s + r && (a = e[o], t.isObject(a) ? this.value = a.value : this.value = a), s += r;
      } else this.value = e;
      return this.value;
    }, t.CtrlMarkov.prototype._getProbDistribution = function (e) {
      var i,
          n,
          s,
          o = [],
          r = 0,
          a = !1;

      for (i = 0; i < e.length; i++) {
        n = e[i], t.isObject(n) ? (a = !0, o[i] = n.probability) : o[i] = 1 / e.length, r += o[i];
      }

      if (a) for (s = 0; s < o.length; s++) {
        o[s] = o[s] / r;
      }
      return o;
    }, t.CtrlMarkov.prototype.dispose = function () {
      this.values = null;
    }, t.CtrlMarkov;
  }), t(function (t) {
    return t.CtrlPattern = function () {
      var e = t.defaults(arguments, ["values", "type"], t.CtrlPattern);
      t.call(this), this.values = e.values, this.index = 0, this._type = null, this._shuffled = null, this._direction = null, this.type = e.type;
    }, t.extend(t.CtrlPattern), t.CtrlPattern.Type = {
      Up: "up",
      Down: "down",
      UpDown: "upDown",
      DownUp: "downUp",
      AlternateUp: "alternateUp",
      AlternateDown: "alternateDown",
      Random: "random",
      RandomWalk: "randomWalk",
      RandomOnce: "randomOnce"
    }, t.CtrlPattern.defaults = {
      type: t.CtrlPattern.Type.Up,
      values: []
    }, Object.defineProperty(t.CtrlPattern.prototype, "value", {
      get: function get() {
        if (0 !== this.values.length) {
          if (1 === this.values.length) return this.values[0];
          this.index = Math.min(this.index, this.values.length - 1);
          var e = this.values[this.index];
          return this.type === t.CtrlPattern.Type.RandomOnce && (this.values.length !== this._shuffled.length && this._shuffleValues(), e = this.values[this._shuffled[this.index]]), e;
        }
      }
    }), Object.defineProperty(t.CtrlPattern.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(e) {
        this._type = e, this._shuffled = null, this._type === t.CtrlPattern.Type.Up || this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.RandomOnce || this._type === t.CtrlPattern.Type.AlternateUp ? this.index = 0 : this._type !== t.CtrlPattern.Type.Down && this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this.index = this.values.length - 1), this._type === t.CtrlPattern.Type.UpDown || this._type === t.CtrlPattern.Type.AlternateUp ? this._direction = t.CtrlPattern.Type.Up : this._type !== t.CtrlPattern.Type.DownUp && this._type !== t.CtrlPattern.Type.AlternateDown || (this._direction = t.CtrlPattern.Type.Down), this._type === t.CtrlPattern.Type.RandomOnce ? this._shuffleValues() : this._type === t.CtrlPattern.Random && (this.index = Math.floor(Math.random() * this.values.length));
      }
    }), t.CtrlPattern.prototype.next = function () {
      var e = this.type;
      return e === t.CtrlPattern.Type.Up ? ++this.index >= this.values.length && (this.index = 0) : e === t.CtrlPattern.Type.Down ? --this.index < 0 && (this.index = this.values.length - 1) : e === t.CtrlPattern.Type.UpDown || e === t.CtrlPattern.Type.DownUp ? (this._direction === t.CtrlPattern.Type.Up ? this.index++ : this.index--, this.index < 0 ? (this.index = 1, this._direction = t.CtrlPattern.Type.Up) : this.index >= this.values.length && (this.index = this.values.length - 2, this._direction = t.CtrlPattern.Type.Down)) : e === t.CtrlPattern.Type.Random ? this.index = Math.floor(Math.random() * this.values.length) : e === t.CtrlPattern.Type.RandomWalk ? Math.random() < .5 ? (this.index--, this.index = Math.max(this.index, 0)) : (this.index++, this.index = Math.min(this.index, this.values.length - 1)) : e === t.CtrlPattern.Type.RandomOnce ? ++this.index >= this.values.length && (this.index = 0, this._shuffleValues()) : e === t.CtrlPattern.Type.AlternateUp ? (this._direction === t.CtrlPattern.Type.Up ? (this.index += 2, this._direction = t.CtrlPattern.Type.Down) : (this.index -= 1, this._direction = t.CtrlPattern.Type.Up), this.index >= this.values.length && (this.index = 0, this._direction = t.CtrlPattern.Type.Up)) : e === t.CtrlPattern.Type.AlternateDown && (this._direction === t.CtrlPattern.Type.Up ? (this.index += 1, this._direction = t.CtrlPattern.Type.Down) : (this.index -= 2, this._direction = t.CtrlPattern.Type.Up), this.index < 0 && (this.index = this.values.length - 1, this._direction = t.CtrlPattern.Type.Down)), this.value;
    }, t.CtrlPattern.prototype._shuffleValues = function () {
      var t,
          e,
          i = [];

      for (this._shuffled = [], t = 0; t < this.values.length; t++) {
        i[t] = t;
      }

      for (; i.length > 0;) {
        e = i.splice(Math.floor(i.length * Math.random()), 1), this._shuffled.push(e[0]);
      }
    }, t.CtrlPattern.prototype.dispose = function () {
      this._shuffled = null, this.values = null;
    }, t.CtrlPattern;
  }), t(function (t) {
    return t.CtrlRandom = function () {
      var e = t.defaults(arguments, ["min", "max"], t.CtrlRandom);
      t.call(this), this.min = e.min, this.max = e.max, this.integer = e.integer;
    }, t.extend(t.CtrlRandom), t.CtrlRandom.defaults = {
      min: 0,
      max: 1,
      integer: !1
    }, Object.defineProperty(t.CtrlRandom.prototype, "value", {
      get: function get() {
        var t = this.toSeconds(this.min),
            e = this.toSeconds(this.max),
            i = Math.random(),
            n = i * t + (1 - i) * e;
        return this.integer && (n = Math.floor(n)), n;
      }
    }), t.CtrlRandom;
  }), t(function (t) {
    return t.Buffers = function (e) {
      var i,
          n,
          s = Array.prototype.slice.call(arguments);
      s.shift(), i = t.defaults(s, ["onload", "baseUrl"], t.Buffers), t.call(this), this._buffers = {}, this.baseUrl = i.baseUrl, this._loadingCount = 0;

      for (n in e) {
        this._loadingCount++, this.add(n, e[n], this._bufferLoaded.bind(this, i.onload));
      }
    }, t.extend(t.Buffers), t.Buffers.defaults = {
      onload: t.noOp,
      baseUrl: ""
    }, t.Buffers.prototype.has = function (t) {
      return this._buffers.hasOwnProperty(t);
    }, t.Buffers.prototype.get = function (t) {
      if (this.has(t)) return this._buffers[t];
      throw new Error("Tone.Buffers: no buffer named " + t);
    }, t.Buffers.prototype._bufferLoaded = function (t) {
      0 === --this._loadingCount && t && t(this);
    }, Object.defineProperty(t.Buffers.prototype, "loaded", {
      get: function get() {
        var t,
            e,
            i = !0;

        for (t in this._buffers) {
          e = this.get(t), i = i && e.loaded;
        }

        return i;
      }
    }), t.Buffers.prototype.add = function (e, i, n) {
      return n = t.defaultArg(n, t.noOp), i instanceof t.Buffer ? (this._buffers[e] = i, n(this)) : i instanceof AudioBuffer ? (this._buffers[e] = new t.Buffer(i), n(this)) : t.isString(i) && (this._buffers[e] = new t.Buffer(this.baseUrl + i, n)), this;
    }, t.Buffers.prototype.dispose = function () {
      t.prototype.dispose.call(this);

      for (var e in this._buffers) {
        this._buffers[e].dispose();
      }

      return this._buffers = null, this;
    }, t.Buffers;
  }), t(function (t) {
    var e = {};
    return t.prototype.send = function (i, n) {
      e.hasOwnProperty(i) || (e[i] = this.context.createGain()), n = t.defaultArg(n, 0);
      var s = new t.Gain(n, t.Type.Decibels);
      return this.connect(s), s.connect(e[i]), s;
    }, t.prototype.receive = function (t, i) {
      return e.hasOwnProperty(t) || (e[t] = this.context.createGain()), e[t].connect(this, 0, i), this;
    }, t.Context.on("init", function (t) {
      t.Buses ? e = t.Buses : (e = {}, t.Buses = e);
    }), t;
  }), t(function (t) {
    return t.Draw = function () {
      t.call(this), this._events = new t.Timeline(), this.expiration = .25, this.anticipation = .008, this._boundDrawLoop = this._drawLoop.bind(this);
    }, t.extend(t.Draw), t.Draw.prototype.schedule = function (t, e) {
      return this._events.add({
        callback: t,
        time: this.toSeconds(e)
      }), 1 === this._events.length && requestAnimationFrame(this._boundDrawLoop), this;
    }, t.Draw.prototype.cancel = function (t) {
      return this._events.cancel(this.toSeconds(t)), this;
    }, t.Draw.prototype._drawLoop = function () {
      for (var e, i = t.now(); this._events.length && this._events.peek().time - this.anticipation <= i;) {
        e = this._events.shift(), i - e.time <= this.expiration && e.callback();
      }

      this._events.length > 0 && requestAnimationFrame(this._boundDrawLoop);
    }, t.Draw = new t.Draw(), t.Draw;
  }), t(function (t) {
    t.Listener = function () {
      t.call(this), this._orientation = [0, 0, 0, 0, 0, 0], this._position = [0, 0, 0], t.getContext(function () {
        this.set(e.defaults);
      }.bind(this));
    }, t.extend(t.Listener), t.Listener.defaults = {
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      forwardX: 0,
      forwardY: 0,
      forwardZ: 1,
      upX: 0,
      upY: 1,
      upZ: 0
    }, t.Listener.prototype._rampTimeConstant = .01, t.Listener.prototype.setPosition = function (t, e, i) {
      if (this.context.listener.positionX) {
        var n = this.now();
        this.context.listener.positionX.setTargetAtTime(t, n, this._rampTimeConstant), this.context.listener.positionY.setTargetAtTime(e, n, this._rampTimeConstant), this.context.listener.positionZ.setTargetAtTime(i, n, this._rampTimeConstant);
      } else this.context.listener.setPosition(t, e, i);

      return this._position = Array.prototype.slice.call(arguments), this;
    }, t.Listener.prototype.setOrientation = function (t, e, i, n, s, o) {
      if (this.context.listener.forwardX) {
        var r = this.now();
        this.context.listener.forwardX.setTargetAtTime(t, r, this._rampTimeConstant), this.context.listener.forwardY.setTargetAtTime(e, r, this._rampTimeConstant), this.context.listener.forwardZ.setTargetAtTime(i, r, this._rampTimeConstant), this.context.listener.upX.setTargetAtTime(n, r, this._rampTimeConstant), this.context.listener.upY.setTargetAtTime(s, r, this._rampTimeConstant), this.context.listener.upZ.setTargetAtTime(o, r, this._rampTimeConstant);
      } else this.context.listener.setOrientation(t, e, i, n, s, o);

      return this._orientation = Array.prototype.slice.call(arguments), this;
    }, Object.defineProperty(t.Listener.prototype, "positionX", {
      set: function set(t) {
        this._position[0] = t, this.setPosition.apply(this, this._position);
      },
      get: function get() {
        return this._position[0];
      }
    }), Object.defineProperty(t.Listener.prototype, "positionY", {
      set: function set(t) {
        this._position[1] = t, this.setPosition.apply(this, this._position);
      },
      get: function get() {
        return this._position[1];
      }
    }), Object.defineProperty(t.Listener.prototype, "positionZ", {
      set: function set(t) {
        this._position[2] = t, this.setPosition.apply(this, this._position);
      },
      get: function get() {
        return this._position[2];
      }
    }), Object.defineProperty(t.Listener.prototype, "forwardX", {
      set: function set(t) {
        this._orientation[0] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[0];
      }
    }), Object.defineProperty(t.Listener.prototype, "forwardY", {
      set: function set(t) {
        this._orientation[1] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[1];
      }
    }), Object.defineProperty(t.Listener.prototype, "forwardZ", {
      set: function set(t) {
        this._orientation[2] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[2];
      }
    }), Object.defineProperty(t.Listener.prototype, "upX", {
      set: function set(t) {
        this._orientation[3] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[3];
      }
    }), Object.defineProperty(t.Listener.prototype, "upY", {
      set: function set(t) {
        this._orientation[4] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[4];
      }
    }), Object.defineProperty(t.Listener.prototype, "upZ", {
      set: function set(t) {
        this._orientation[5] = t, this.setOrientation.apply(this, this._orientation);
      },
      get: function get() {
        return this._orientation[5];
      }
    }), t.Listener.prototype.dispose = function () {
      return this._orientation = null, this._position = null, this;
    };
    var e = t.Listener;
    return t.Listener = new e(), t.Context.on("init", function (i) {
      i.Listener instanceof e ? t.Listener = i.Listener : t.Listener = new e(), i.Listener = t.Listener;
    }), t.Listener;
  }), t(function (t) {
    function e(i, n, s, o) {
      var r, a;
      return o = t.defaultArg(o, 0), r = new t.OfflineContext(2, n, s), t.context = r, a = i(t.Transport), r.currentTime > 0 && o < 1e3 ? e(i, n, s, ++o) : {
        response: a,
        context: r
      };
    }

    return t.Offline = function (i, n) {
      var s,
          o = t.context.sampleRate,
          r = t.context,
          a = e(i, n, o),
          h = a.response,
          l = a.context;
      return s = h instanceof Promise ? h.then(function () {
        return l.render();
      }) : l.render(), t.context = r, s.then(function (e) {
        return new t.Buffer(e);
      });
    }, t.Offline;
  }), t(function (t) {
    return t.Effect = function () {
      var e = t.defaults(arguments, ["wet"], t.Effect);
      t.AudioNode.call(this), this.createInsOuts(1, 1), this._dryWet = new t.CrossFade(e.wet), this.wet = this._dryWet.fade, this.effectSend = new t.Gain(), this.effectReturn = new t.Gain(), this.input.connect(this._dryWet.a), this.input.connect(this.effectSend), this.effectReturn.connect(this._dryWet.b), this._dryWet.connect(this.output), this._readOnly(["wet"]);
    }, t.extend(t.Effect, t.AudioNode), t.Effect.defaults = {
      wet: 1
    }, t.Effect.prototype.connectEffect = function (t) {
      return this.effectSend.chain(t, this.effectReturn), this;
    }, t.Effect.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this.effectSend.dispose(), this.effectSend = null, this.effectReturn.dispose(), this.effectReturn = null, this._writable(["wet"]), this.wet = null, this;
    }, t.Effect;
  }), t(function (t) {
    return t.AutoFilter = function () {
      var e = t.defaults(arguments, ["frequency", "baseFrequency", "octaves"], t.AutoFilter);
      t.Effect.call(this, e), this._lfo = new t.LFO({
        frequency: e.frequency,
        amplitude: e.depth
      }), this.depth = this._lfo.amplitude, this.frequency = this._lfo.frequency, this.filter = new t.Filter(e.filter), this._octaves = 0, this.connectEffect(this.filter), this._lfo.connect(this.filter.frequency), this.type = e.type, this._readOnly(["frequency", "depth"]), this.octaves = e.octaves, this.baseFrequency = e.baseFrequency;
    }, t.extend(t.AutoFilter, t.Effect), t.AutoFilter.defaults = {
      frequency: 1,
      type: "sine",
      depth: 1,
      baseFrequency: 200,
      octaves: 2.6,
      filter: {
        type: "lowpass",
        rolloff: -12,
        Q: 1
      }
    }, t.AutoFilter.prototype.start = function (t) {
      return this._lfo.start(t), this;
    }, t.AutoFilter.prototype.stop = function (t) {
      return this._lfo.stop(t), this;
    }, t.AutoFilter.prototype.sync = function (t) {
      return this._lfo.sync(t), this;
    }, t.AutoFilter.prototype.unsync = function () {
      return this._lfo.unsync(), this;
    }, Object.defineProperty(t.AutoFilter.prototype, "type", {
      get: function get() {
        return this._lfo.type;
      },
      set: function set(t) {
        this._lfo.type = t;
      }
    }), Object.defineProperty(t.AutoFilter.prototype, "baseFrequency", {
      get: function get() {
        return this._lfo.min;
      },
      set: function set(t) {
        this._lfo.min = this.toFrequency(t), this.octaves = this._octaves;
      }
    }), Object.defineProperty(t.AutoFilter.prototype, "octaves", {
      get: function get() {
        return this._octaves;
      },
      set: function set(t) {
        this._octaves = t, this._lfo.max = this.baseFrequency * Math.pow(2, t);
      }
    }), t.AutoFilter.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this.filter.dispose(), this.filter = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null, this;
    }, t.AutoFilter;
  }), t(function (t) {
    return t.AutoPanner = function () {
      var e = t.defaults(arguments, ["frequency"], t.AutoPanner);
      t.Effect.call(this, e), this._lfo = new t.LFO({
        frequency: e.frequency,
        amplitude: e.depth,
        min: -1,
        max: 1
      }), this.depth = this._lfo.amplitude, this._panner = new t.Panner(), this.frequency = this._lfo.frequency, this.connectEffect(this._panner), this._lfo.connect(this._panner.pan), this.type = e.type, this._readOnly(["depth", "frequency"]);
    }, t.extend(t.AutoPanner, t.Effect), t.AutoPanner.defaults = {
      frequency: 1,
      type: "sine",
      depth: 1
    }, t.AutoPanner.prototype.start = function (t) {
      return this._lfo.start(t), this;
    }, t.AutoPanner.prototype.stop = function (t) {
      return this._lfo.stop(t), this;
    }, t.AutoPanner.prototype.sync = function (t) {
      return this._lfo.sync(t), this;
    }, t.AutoPanner.prototype.unsync = function () {
      return this._lfo.unsync(), this;
    }, Object.defineProperty(t.AutoPanner.prototype, "type", {
      get: function get() {
        return this._lfo.type;
      },
      set: function set(t) {
        this._lfo.type = t;
      }
    }), t.AutoPanner.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._lfo.dispose(), this._lfo = null, this._panner.dispose(), this._panner = null, this._writable(["depth", "frequency"]), this.frequency = null, this.depth = null, this;
    }, t.AutoPanner;
  }), t(function (t) {
    return t.AutoWah = function () {
      var e = t.defaults(arguments, ["baseFrequency", "octaves", "sensitivity"], t.AutoWah);
      t.Effect.call(this, e), this.follower = new t.Follower(e.follower), this._sweepRange = new t.ScaleExp(0, 1, .5), this._baseFrequency = e.baseFrequency, this._octaves = e.octaves, this._inputBoost = new t.Gain(), this._bandpass = new t.Filter({
        rolloff: -48,
        frequency: 0,
        Q: e.Q
      }), this._peaking = new t.Filter(0, "peaking"), this._peaking.gain.value = e.gain, this.gain = this._peaking.gain, this.Q = this._bandpass.Q, this.effectSend.chain(this._inputBoost, this.follower, this._sweepRange), this._sweepRange.connect(this._bandpass.frequency), this._sweepRange.connect(this._peaking.frequency), this.effectSend.chain(this._bandpass, this._peaking, this.effectReturn), this._setSweepRange(), this.sensitivity = e.sensitivity, this._readOnly(["gain", "Q"]);
    }, t.extend(t.AutoWah, t.Effect), t.AutoWah.defaults = {
      baseFrequency: 100,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 2,
      follower: {
        attack: .3,
        release: .5
      }
    }, Object.defineProperty(t.AutoWah.prototype, "octaves", {
      get: function get() {
        return this._octaves;
      },
      set: function set(t) {
        this._octaves = t, this._setSweepRange();
      }
    }), Object.defineProperty(t.AutoWah.prototype, "baseFrequency", {
      get: function get() {
        return this._baseFrequency;
      },
      set: function set(t) {
        this._baseFrequency = t, this._setSweepRange();
      }
    }), Object.defineProperty(t.AutoWah.prototype, "sensitivity", {
      get: function get() {
        return t.gainToDb(1 / this._inputBoost.gain.value);
      },
      set: function set(e) {
        this._inputBoost.gain.value = 1 / t.dbToGain(e);
      }
    }), t.AutoWah.prototype._setSweepRange = function () {
      this._sweepRange.min = this._baseFrequency, this._sweepRange.max = Math.min(this._baseFrequency * Math.pow(2, this._octaves), this.context.sampleRate / 2);
    }, t.AutoWah.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this.follower.dispose(), this.follower = null, this._sweepRange.dispose(), this._sweepRange = null, this._bandpass.dispose(), this._bandpass = null, this._peaking.dispose(), this._peaking = null, this._inputBoost.dispose(), this._inputBoost = null, this._writable(["gain", "Q"]), this.gain = null, this.Q = null, this;
    }, t.AutoWah;
  }), t(function (t) {
    return t.Modulo = function (e) {
      t.SignalBase.call(this), this.createInsOuts(1, 0), this._shaper = new t.WaveShaper(Math.pow(2, 16)), this._multiply = new t.Multiply(), this._subtract = this.output = new t.Subtract(), this._modSignal = new t.Signal(e), this.input.fan(this._shaper, this._subtract), this._modSignal.connect(this._multiply, 0, 0), this._shaper.connect(this._multiply, 0, 1), this._multiply.connect(this._subtract, 0, 1), this._setWaveShaper(e);
    }, t.extend(t.Modulo, t.SignalBase), t.Modulo.prototype._setWaveShaper = function (t) {
      this._shaper.setMap(function (e) {
        return Math.floor((e + 1e-4) / t);
      });
    }, Object.defineProperty(t.Modulo.prototype, "value", {
      get: function get() {
        return this._modSignal.value;
      },
      set: function set(t) {
        this._modSignal.value = t, this._setWaveShaper(t);
      }
    }), t.Modulo.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this._multiply.dispose(), this._multiply = null, this._subtract.dispose(), this._subtract = null, this._modSignal.dispose(), this._modSignal = null, this;
    }, t.Modulo;
  }), t(function (t) {
    return t.BitCrusher = function () {
      var e,
          i = t.defaults(arguments, ["bits"], t.BitCrusher);
      t.Effect.call(this, i), e = 1 / Math.pow(2, i.bits - 1), this._subtract = new t.Subtract(), this._modulo = new t.Modulo(e), this._bits = i.bits, this.effectSend.fan(this._subtract, this._modulo), this._modulo.connect(this._subtract, 0, 1), this._subtract.connect(this.effectReturn);
    }, t.extend(t.BitCrusher, t.Effect), t.BitCrusher.defaults = {
      bits: 4
    }, Object.defineProperty(t.BitCrusher.prototype, "bits", {
      get: function get() {
        return this._bits;
      },
      set: function set(t) {
        this._bits = t;
        var e = 1 / Math.pow(2, t - 1);
        this._modulo.value = e;
      }
    }), t.BitCrusher.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._subtract.dispose(), this._subtract = null, this._modulo.dispose(), this._modulo = null, this;
    }, t.BitCrusher;
  }), t(function (t) {
    return t.Chebyshev = function () {
      var e = t.defaults(arguments, ["order"], t.Chebyshev);
      t.Effect.call(this, e), this._shaper = new t.WaveShaper(4096), this._order = e.order, this.connectEffect(this._shaper), this.order = e.order, this.oversample = e.oversample;
    }, t.extend(t.Chebyshev, t.Effect), t.Chebyshev.defaults = {
      order: 1,
      oversample: "none"
    }, t.Chebyshev.prototype._getCoefficient = function (t, e, i) {
      return i.hasOwnProperty(e) ? i[e] : (i[e] = 0 === e ? 0 : 1 === e ? t : 2 * t * this._getCoefficient(t, e - 1, i) - this._getCoefficient(t, e - 2, i), i[e]);
    }, Object.defineProperty(t.Chebyshev.prototype, "order", {
      get: function get() {
        return this._order;
      },
      set: function set(t) {
        var e, i, n, s;

        for (this._order = t, e = new Array(4096), i = e.length, n = 0; n < i; ++n) {
          s = 2 * n / i - 1, e[n] = 0 === s ? 0 : this._getCoefficient(s, t, {});
        }

        this._shaper.curve = e;
      }
    }), Object.defineProperty(t.Chebyshev.prototype, "oversample", {
      get: function get() {
        return this._shaper.oversample;
      },
      set: function set(t) {
        this._shaper.oversample = t;
      }
    }), t.Chebyshev.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this;
    }, t.Chebyshev;
  }), t(function (t) {
    return t.StereoEffect = function () {
      t.AudioNode.call(this);
      var e = t.defaults(arguments, ["wet"], t.Effect);
      this.createInsOuts(1, 1), this._dryWet = new t.CrossFade(e.wet), this.wet = this._dryWet.fade, this._split = new t.Split(), this.effectSendL = this._split.left, this.effectSendR = this._split.right, this._merge = new t.Merge(), this.effectReturnL = this._merge.left, this.effectReturnR = this._merge.right, this.input.connect(this._split), this.input.connect(this._dryWet, 0, 0), this._merge.connect(this._dryWet, 0, 1), this._dryWet.connect(this.output), this._readOnly(["wet"]);
    }, t.extend(t.StereoEffect, t.Effect), t.StereoEffect.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._dryWet.dispose(), this._dryWet = null, this._split.dispose(), this._split = null, this._merge.dispose(), this._merge = null, this.effectSendL = null, this.effectSendR = null, this.effectReturnL = null, this.effectReturnR = null, this._writable(["wet"]), this.wet = null, this;
    }, t.StereoEffect;
  }), t(function (t) {
    return t.Chorus = function () {
      var e = t.defaults(arguments, ["frequency", "delayTime", "depth"], t.Chorus);
      t.StereoEffect.call(this, e), this._depth = e.depth, this._delayTime = e.delayTime / 1e3, this._lfoL = new t.LFO({
        frequency: e.frequency,
        min: 0,
        max: 1
      }), this._lfoR = new t.LFO({
        frequency: e.frequency,
        min: 0,
        max: 1,
        phase: 180
      }), this._delayNodeL = new t.Delay(), this._delayNodeR = new t.Delay(), this.frequency = this._lfoL.frequency, this.effectSendL.chain(this._delayNodeL, this.effectReturnL), this.effectSendR.chain(this._delayNodeR, this.effectReturnR), this.effectSendL.connect(this.effectReturnL), this.effectSendR.connect(this.effectReturnR), this._lfoL.connect(this._delayNodeL.delayTime), this._lfoR.connect(this._delayNodeR.delayTime), this._lfoL.start(), this._lfoR.start(), this._lfoL.frequency.connect(this._lfoR.frequency), this.depth = this._depth, this.frequency.value = e.frequency, this.type = e.type, this._readOnly(["frequency"]), this.spread = e.spread;
    }, t.extend(t.Chorus, t.StereoEffect), t.Chorus.defaults = {
      frequency: 1.5,
      delayTime: 3.5,
      depth: .7,
      type: "sine",
      spread: 180
    }, Object.defineProperty(t.Chorus.prototype, "depth", {
      get: function get() {
        return this._depth;
      },
      set: function set(t) {
        this._depth = t;
        var e = this._delayTime * t;
        this._lfoL.min = Math.max(this._delayTime - e, 0), this._lfoL.max = this._delayTime + e, this._lfoR.min = Math.max(this._delayTime - e, 0), this._lfoR.max = this._delayTime + e;
      }
    }), Object.defineProperty(t.Chorus.prototype, "delayTime", {
      get: function get() {
        return 1e3 * this._delayTime;
      },
      set: function set(t) {
        this._delayTime = t / 1e3, this.depth = this._depth;
      }
    }), Object.defineProperty(t.Chorus.prototype, "type", {
      get: function get() {
        return this._lfoL.type;
      },
      set: function set(t) {
        this._lfoL.type = t, this._lfoR.type = t;
      }
    }), Object.defineProperty(t.Chorus.prototype, "spread", {
      get: function get() {
        return this._lfoR.phase - this._lfoL.phase;
      },
      set: function set(t) {
        this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90;
      }
    }), t.Chorus.prototype.dispose = function () {
      return t.StereoEffect.prototype.dispose.call(this), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._delayNodeL.dispose(), this._delayNodeL = null, this._delayNodeR.dispose(), this._delayNodeR = null, this._writable("frequency"), this.frequency = null, this;
    }, t.Chorus;
  }), t(function (t) {
    return t.Convolver = function () {
      var e = t.defaults(arguments, ["url", "onload"], t.Convolver);
      t.Effect.call(this, e), this._convolver = this.context.createConvolver(), this._buffer = new t.Buffer(e.url, function (t) {
        this._convolver.buffer = t.get(), e.onload();
      }.bind(this)), this.connectEffect(this._convolver);
    }, t.extend(t.Convolver, t.Effect), t.Convolver.defaults = {
      onload: t.noOp
    }, Object.defineProperty(t.Convolver.prototype, "buffer", {
      get: function get() {
        return this._buffer.get();
      },
      set: function set(t) {
        this._buffer.set(t), this._convolver.buffer = this._buffer.get();
      }
    }), t.Convolver.prototype.load = function (t, e) {
      return this._buffer.load(t, function (t) {
        this.buffer = t, e && e();
      }.bind(this));
    }, t.Convolver.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._convolver.disconnect(), this._convolver = null, this._buffer.dispose(), this._buffer = null, this;
    }, t.Convolver;
  }), t(function (t) {
    return t.Distortion = function () {
      var e = t.defaults(arguments, ["distortion"], t.Distortion);
      t.Effect.call(this, e), this._shaper = new t.WaveShaper(4096), this._distortion = e.distortion, this.connectEffect(this._shaper), this.distortion = e.distortion, this.oversample = e.oversample;
    }, t.extend(t.Distortion, t.Effect), t.Distortion.defaults = {
      distortion: .4,
      oversample: "none"
    }, Object.defineProperty(t.Distortion.prototype, "distortion", {
      get: function get() {
        return this._distortion;
      },
      set: function set(t) {
        var e, i;
        this._distortion = t, e = 100 * t, i = Math.PI / 180, this._shaper.setMap(function (t) {
          return Math.abs(t) < .001 ? 0 : (3 + e) * t * 20 * i / (Math.PI + e * Math.abs(t));
        });
      }
    }), Object.defineProperty(t.Distortion.prototype, "oversample", {
      get: function get() {
        return this._shaper.oversample;
      },
      set: function set(t) {
        this._shaper.oversample = t;
      }
    }), t.Distortion.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._shaper.dispose(), this._shaper = null, this;
    }, t.Distortion;
  }), t(function (t) {
    return t.FeedbackEffect = function () {
      var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
      t.Effect.call(this, e), this._feedbackGain = new t.Gain(e.feedback, t.Type.NormalRange), this.feedback = this._feedbackGain.gain, this.effectReturn.chain(this._feedbackGain, this.effectSend), this._readOnly(["feedback"]);
    }, t.extend(t.FeedbackEffect, t.Effect), t.FeedbackEffect.defaults = {
      feedback: .125
    }, t.FeedbackEffect.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._writable(["feedback"]), this._feedbackGain.dispose(), this._feedbackGain = null, this.feedback = null, this;
    }, t.FeedbackEffect;
  }), t(function (t) {
    return t.FeedbackDelay = function () {
      var e = t.defaults(arguments, ["delayTime", "feedback"], t.FeedbackDelay);
      t.FeedbackEffect.call(this, e), this._delayNode = new t.Delay(e.delayTime, e.maxDelay), this.delayTime = this._delayNode.delayTime, this.connectEffect(this._delayNode), this._readOnly(["delayTime"]);
    }, t.extend(t.FeedbackDelay, t.FeedbackEffect), t.FeedbackDelay.defaults = {
      delayTime: .25,
      maxDelay: 1
    }, t.FeedbackDelay.prototype.dispose = function () {
      return t.FeedbackEffect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._writable(["delayTime"]), this.delayTime = null, this;
    }, t.FeedbackDelay;
  }), t(function (t) {
    var e = [1557 / 44100, 1617 / 44100, 1491 / 44100, 1422 / 44100, 1277 / 44100, 1356 / 44100, 1188 / 44100, 1116 / 44100],
        i = [225, 556, 441, 341];
    return t.Freeverb = function () {
      var n,
          s,
          o,
          r,
          a,
          h,
          l = t.defaults(arguments, ["roomSize", "dampening"], t.Freeverb);

      for (t.StereoEffect.call(this, l), this.roomSize = new t.Signal(l.roomSize, t.Type.NormalRange), this.dampening = new t.Signal(l.dampening, t.Type.Frequency), this._combFilters = [], this._allpassFiltersL = [], this._allpassFiltersR = [], n = 0; n < i.length; n++) {
        s = this.context.createBiquadFilter(), s.type = "allpass", s.frequency.value = i[n], this._allpassFiltersL.push(s);
      }

      for (o = 0; o < i.length; o++) {
        r = this.context.createBiquadFilter(), r.type = "allpass", r.frequency.value = i[o], this._allpassFiltersR.push(r);
      }

      for (a = 0; a < e.length; a++) {
        h = new t.LowpassCombFilter(e[a]), a < e.length / 2 ? this.effectSendL.chain(h, this._allpassFiltersL[0]) : this.effectSendR.chain(h, this._allpassFiltersR[0]), this.roomSize.connect(h.resonance), this.dampening.connect(h.dampening), this._combFilters.push(h);
      }

      t.connectSeries.apply(t, this._allpassFiltersL), t.connectSeries.apply(t, this._allpassFiltersR), this._allpassFiltersL[this._allpassFiltersL.length - 1].connect(this.effectReturnL), this._allpassFiltersR[this._allpassFiltersR.length - 1].connect(this.effectReturnR), this._readOnly(["roomSize", "dampening"]);
    }, t.extend(t.Freeverb, t.StereoEffect), t.Freeverb.defaults = {
      roomSize: .7,
      dampening: 3e3
    }, t.Freeverb.prototype.dispose = function () {
      var e, i, n;

      for (t.StereoEffect.prototype.dispose.call(this), e = 0; e < this._allpassFiltersL.length; e++) {
        this._allpassFiltersL[e].disconnect(), this._allpassFiltersL[e] = null;
      }

      for (this._allpassFiltersL = null, i = 0; i < this._allpassFiltersR.length; i++) {
        this._allpassFiltersR[i].disconnect(), this._allpassFiltersR[i] = null;
      }

      for (this._allpassFiltersR = null, n = 0; n < this._combFilters.length; n++) {
        this._combFilters[n].dispose(), this._combFilters[n] = null;
      }

      return this._combFilters = null, this._writable(["roomSize", "dampening"]), this.roomSize.dispose(), this.roomSize = null, this.dampening.dispose(), this.dampening = null, this;
    }, t.Freeverb;
  }), t(function (t) {
    var e = [.06748, .06404, .08212, .09004],
        i = [.773, .802, .753, .733],
        n = [347, 113, 37];
    return t.JCReverb = function () {
      var s,
          o,
          r,
          a,
          h = t.defaults(arguments, ["roomSize"], t.JCReverb);

      for (t.StereoEffect.call(this, h), this.roomSize = new t.Signal(h.roomSize, t.Type.NormalRange), this._scaleRoomSize = new t.Scale(-.733, .197), this._allpassFilters = [], this._feedbackCombFilters = [], s = 0; s < n.length; s++) {
        o = this.context.createBiquadFilter(), o.type = "allpass", o.frequency.value = n[s], this._allpassFilters.push(o);
      }

      for (r = 0; r < e.length; r++) {
        a = new t.FeedbackCombFilter(e[r], .1), this._scaleRoomSize.connect(a.resonance), a.resonance.value = i[r], this._allpassFilters[this._allpassFilters.length - 1].connect(a), r < e.length / 2 ? a.connect(this.effectReturnL) : a.connect(this.effectReturnR), this._feedbackCombFilters.push(a);
      }

      this.roomSize.connect(this._scaleRoomSize), t.connectSeries.apply(t, this._allpassFilters), this.effectSendL.connect(this._allpassFilters[0]), this.effectSendR.connect(this._allpassFilters[0]), this._readOnly(["roomSize"]);
    }, t.extend(t.JCReverb, t.StereoEffect), t.JCReverb.defaults = {
      roomSize: .5
    }, t.JCReverb.prototype.dispose = function () {
      var e, i;

      for (t.StereoEffect.prototype.dispose.call(this), e = 0; e < this._allpassFilters.length; e++) {
        this._allpassFilters[e].disconnect(), this._allpassFilters[e] = null;
      }

      for (this._allpassFilters = null, i = 0; i < this._feedbackCombFilters.length; i++) {
        this._feedbackCombFilters[i].dispose(), this._feedbackCombFilters[i] = null;
      }

      return this._feedbackCombFilters = null, this._writable(["roomSize"]), this.roomSize.dispose(), this.roomSize = null, this._scaleRoomSize.dispose(), this._scaleRoomSize = null, this;
    }, t.JCReverb;
  }), t(function (t) {
    return t.MidSideEffect = function () {
      t.Effect.apply(this, arguments), this._midSideSplit = new t.MidSideSplit(), this._midSideMerge = new t.MidSideMerge(), this.midSend = this._midSideSplit.mid, this.sideSend = this._midSideSplit.side, this.midReturn = this._midSideMerge.mid, this.sideReturn = this._midSideMerge.side, this.effectSend.connect(this._midSideSplit), this._midSideMerge.connect(this.effectReturn);
    }, t.extend(t.MidSideEffect, t.Effect), t.MidSideEffect.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._midSideSplit.dispose(), this._midSideSplit = null, this._midSideMerge.dispose(), this._midSideMerge = null, this.midSend = null, this.sideSend = null, this.midReturn = null, this.sideReturn = null, this;
    }, t.MidSideEffect;
  }), t(function (t) {
    return t.Phaser = function () {
      var e = t.defaults(arguments, ["frequency", "octaves", "baseFrequency"], t.Phaser);
      t.StereoEffect.call(this, e), this._lfoL = new t.LFO(e.frequency, 0, 1), this._lfoR = new t.LFO(e.frequency, 0, 1), this._lfoR.phase = 180, this._baseFrequency = e.baseFrequency, this._octaves = e.octaves, this.Q = new t.Signal(e.Q, t.Type.Positive), this._filtersL = this._makeFilters(e.stages, this._lfoL, this.Q), this._filtersR = this._makeFilters(e.stages, this._lfoR, this.Q), this.frequency = this._lfoL.frequency, this.frequency.value = e.frequency, this.effectSendL.connect(this._filtersL[0]), this.effectSendR.connect(this._filtersR[0]), this._filtersL[e.stages - 1].connect(this.effectReturnL), this._filtersR[e.stages - 1].connect(this.effectReturnR), this._lfoL.frequency.connect(this._lfoR.frequency), this.baseFrequency = e.baseFrequency, this.octaves = e.octaves, this._lfoL.start(), this._lfoR.start(), this._readOnly(["frequency", "Q"]);
    }, t.extend(t.Phaser, t.StereoEffect), t.Phaser.defaults = {
      frequency: .5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    }, t.Phaser.prototype._makeFilters = function (e, i, n) {
      var s,
          o,
          r = new Array(e);

      for (s = 0; s < e; s++) {
        o = this.context.createBiquadFilter(), o.type = "allpass", n.connect(o.Q), i.connect(o.frequency), r[s] = o;
      }

      return t.connectSeries.apply(t, r), r;
    }, Object.defineProperty(t.Phaser.prototype, "octaves", {
      get: function get() {
        return this._octaves;
      },
      set: function set(t) {
        this._octaves = t;
        var e = this._baseFrequency * Math.pow(2, t);
        this._lfoL.max = e, this._lfoR.max = e;
      }
    }), Object.defineProperty(t.Phaser.prototype, "baseFrequency", {
      get: function get() {
        return this._baseFrequency;
      },
      set: function set(t) {
        this._baseFrequency = t, this._lfoL.min = t, this._lfoR.min = t, this.octaves = this._octaves;
      }
    }), t.Phaser.prototype.dispose = function () {
      var e, i;

      for (t.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "Q"]), this.Q.dispose(), this.Q = null, this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, e = 0; e < this._filtersL.length; e++) {
        this._filtersL[e].disconnect(), this._filtersL[e] = null;
      }

      for (this._filtersL = null, i = 0; i < this._filtersR.length; i++) {
        this._filtersR[i].disconnect(), this._filtersR[i] = null;
      }

      return this._filtersR = null, this.frequency = null, this;
    }, t.Phaser;
  }), t(function (t) {
    return t.StereoXFeedbackEffect = function () {
      var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
      t.StereoEffect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackLR = new t.Gain(), this._feedbackRL = new t.Gain(), this.effectReturnL.chain(this._feedbackLR, this.effectSendR), this.effectReturnR.chain(this._feedbackRL, this.effectSendL), this.feedback.fan(this._feedbackLR.gain, this._feedbackRL.gain), this._readOnly(["feedback"]);
    }, t.extend(t.StereoXFeedbackEffect, t.StereoEffect), t.StereoXFeedbackEffect.prototype.dispose = function () {
      return t.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackLR.dispose(), this._feedbackLR = null, this._feedbackRL.dispose(), this._feedbackRL = null, this;
    }, t.StereoXFeedbackEffect;
  }), t(function (t) {
    return t.PingPongDelay = function () {
      var e = t.defaults(arguments, ["delayTime", "feedback"], t.PingPongDelay);
      t.StereoXFeedbackEffect.call(this, e), this._leftDelay = new t.Delay(0, e.maxDelayTime), this._rightDelay = new t.Delay(0, e.maxDelayTime), this._rightPreDelay = new t.Delay(0, e.maxDelayTime), this.delayTime = new t.Signal(e.delayTime, t.Type.Time), this.effectSendL.chain(this._leftDelay, this.effectReturnL), this.effectSendR.chain(this._rightPreDelay, this._rightDelay, this.effectReturnR), this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime), this._feedbackLR.disconnect(), this._feedbackLR.connect(this._rightDelay), this._readOnly(["delayTime"]);
    }, t.extend(t.PingPongDelay, t.StereoXFeedbackEffect), t.PingPongDelay.defaults = {
      delayTime: .25,
      maxDelayTime: 1
    }, t.PingPongDelay.prototype.dispose = function () {
      return t.StereoXFeedbackEffect.prototype.dispose.call(this), this._leftDelay.dispose(), this._leftDelay = null, this._rightDelay.dispose(), this._rightDelay = null, this._rightPreDelay.dispose(), this._rightPreDelay = null, this._writable(["delayTime"]), this.delayTime.dispose(), this.delayTime = null, this;
    }, t.PingPongDelay;
  }), t(function (t) {
    return t.PitchShift = function () {
      var e,
          i = t.defaults(arguments, ["pitch"], t.PitchShift);
      t.FeedbackEffect.call(this, i), this._frequency = new t.Signal(0), this._delayA = new t.Delay(0, 1), this._lfoA = new t.LFO({
        min: 0,
        max: .1,
        type: "sawtooth"
      }).connect(this._delayA.delayTime), this._delayB = new t.Delay(0, 1), this._lfoB = new t.LFO({
        min: 0,
        max: .1,
        type: "sawtooth",
        phase: 180
      }).connect(this._delayB.delayTime), this._crossFade = new t.CrossFade(), this._crossFadeLFO = new t.LFO({
        min: 0,
        max: 1,
        type: "triangle",
        phase: 90
      }).connect(this._crossFade.fade), this._feedbackDelay = new t.Delay(i.delayTime), this.delayTime = this._feedbackDelay.delayTime, this._readOnly("delayTime"), this._pitch = i.pitch, this._windowSize = i.windowSize, this._delayA.connect(this._crossFade.a), this._delayB.connect(this._crossFade.b), this._frequency.fan(this._lfoA.frequency, this._lfoB.frequency, this._crossFadeLFO.frequency), this.effectSend.fan(this._delayA, this._delayB), this._crossFade.chain(this._feedbackDelay, this.effectReturn), e = this.now(), this._lfoA.start(e), this._lfoB.start(e), this._crossFadeLFO.start(e), this.windowSize = this._windowSize;
    }, t.extend(t.PitchShift, t.FeedbackEffect), t.PitchShift.defaults = {
      pitch: 0,
      windowSize: .1,
      delayTime: 0,
      feedback: 0
    }, Object.defineProperty(t.PitchShift.prototype, "pitch", {
      get: function get() {
        return this._pitch;
      },
      set: function set(e) {
        this._pitch = e;
        var i = 0;
        e < 0 ? (this._lfoA.min = 0, this._lfoA.max = this._windowSize, this._lfoB.min = 0, this._lfoB.max = this._windowSize, i = t.intervalToFrequencyRatio(e - 1) + 1) : (this._lfoA.min = this._windowSize, this._lfoA.max = 0, this._lfoB.min = this._windowSize, this._lfoB.max = 0, i = t.intervalToFrequencyRatio(e) - 1), this._frequency.value = i * (1.2 / this._windowSize);
      }
    }), Object.defineProperty(t.PitchShift.prototype, "windowSize", {
      get: function get() {
        return this._windowSize;
      },
      set: function set(t) {
        this._windowSize = this.toSeconds(t), this.pitch = this._pitch;
      }
    }), t.PitchShift.prototype.dispose = function () {
      return t.FeedbackEffect.prototype.dispose.call(this), this._frequency.dispose(), this._frequency = null, this._delayA.disconnect(), this._delayA = null, this._delayB.disconnect(), this._delayB = null, this._lfoA.dispose(), this._lfoA = null, this._lfoB.dispose(), this._lfoB = null, this._crossFade.dispose(), this._crossFade = null, this._crossFadeLFO.dispose(), this._crossFadeLFO = null, this._writable("delayTime"), this._feedbackDelay.dispose(), this._feedbackDelay = null, this.delayTime = null, this;
    }, t.PitchShift;
  }), t(function (t) {
    return t.BufferSource = function () {
      var e = t.defaults(arguments, ["buffer", "onload"], t.BufferSource);
      t.AudioNode.call(this, e), this.onended = e.onended, this._startTime = -1, this._sourceStarted = !1, this._sourceStopped = !1, this._stopTime = -1, this._gainNode = this.output = new t.Gain(), this._source = this.context.createBufferSource(), this._source.connect(this._gainNode), this._source.onended = this._onended.bind(this), this._buffer = new t.Buffer(e.buffer, e.onload), this.playbackRate = new t.Param(this._source.playbackRate, t.Type.Positive), this.fadeIn = e.fadeIn, this.fadeOut = e.fadeOut, this.curve = e.curve, this._gain = 1, this._onendedTimeout = -1, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.playbackRate.value = e.playbackRate;
    }, t.extend(t.BufferSource, t.AudioNode), t.BufferSource.defaults = {
      onended: t.noOp,
      onload: t.noOp,
      loop: !1,
      loopStart: 0,
      loopEnd: 0,
      fadeIn: 0,
      fadeOut: 0,
      curve: "linear",
      playbackRate: 1
    }, Object.defineProperty(t.BufferSource.prototype, "state", {
      get: function get() {
        return this.getStateAtTime(this.now());
      }
    }), t.BufferSource.prototype.getStateAtTime = function (e) {
      return e = this.toSeconds(e), -1 !== this._startTime && e >= this._startTime && !this._sourceStopped ? t.State.Started : t.State.Stopped;
    }, t.BufferSource.prototype.start = function (e, i, n, s, o) {
      var r, a, h, l;
      if (-1 !== this._startTime) throw new Error("Tone.BufferSource can only be started once.");
      if (!this.buffer.loaded) throw new Error("Tone.BufferSource: buffer is either not set or not loaded.");
      return e = this.toSeconds(e), i = this.loop ? t.defaultArg(i, this.loopStart) : t.defaultArg(i, 0), i = this.toSeconds(i), s = t.defaultArg(s, 1), this._gain = s, o = this.toSeconds(t.defaultArg(o, this.fadeIn)), this.fadeIn = o, o > 0 ? (this._gainNode.gain.setValueAtTime(0, e), "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(this._gain, e + o) : this._gainNode.gain.exponentialApproachValueAtTime(this._gain, e, o)) : this._gainNode.gain.setValueAtTime(s, e), this._startTime = e, r = this.toSeconds(t.defaultArg(n, this.buffer.duration - i % this.buffer.duration)), r = Math.max(r, 0), t.isDefined(n) && (this.loop || (r = Math.min(r, this.buffer.duration - i % this.buffer.duration)), this.stop(e + r, this.fadeOut)), this.loop && (a = this.loopEnd || this.buffer.duration, h = this.loopStart, l = a - h, i >= a && (i = (i - h) % l + h)), this._source.buffer = this.buffer.get(), this._source.loopEnd = this.loopEnd || this.buffer.duration, i < this.buffer.duration && (this._sourceStarted = !0, this._source.start(e, i)), this;
    }, t.BufferSource.prototype.stop = function (e, i) {
      var n, s;
      if (!this.buffer.loaded) throw new Error("Tone.BufferSource: buffer is either not set or not loaded.");
      if (!this._sourceStopped) return e = this.toSeconds(e), -1 !== this._stopTime && this.cancelStop(), e <= this._startTime ? (this._gainNode.gain.cancelScheduledValues(e), this._gainNode.gain.value = 0, this) : (e = Math.max(this._startTime + this.fadeIn + this.sampleTime, e), this._gainNode.gain.cancelScheduledValues(e), this._stopTime = e, i = this.toSeconds(t.defaultArg(i, this.fadeOut)), n = e - this._startTime - this.fadeIn - this.sampleTime, this.loop || (n = Math.min(n, this.buffer.duration)), i = Math.min(n, i), s = e - i, i > this.sampleTime ? (this._gainNode.gain.setValueAtTime(this._gain, s), "linear" === this.curve ? this._gainNode.gain.linearRampToValueAtTime(0, e) : this._gainNode.gain.exponentialApproachValueAtTime(0, s, i)) : this._gainNode.gain.setValueAtTime(0, e), t.context.clearTimeout(this._onendedTimeout), this._onendedTimeout = t.context.setTimeout(this._onended.bind(this), this._stopTime - this.now()), this);
    }, t.BufferSource.prototype.cancelStop = function () {
      if (-1 !== this._startTime && !this._sourceStopped) {
        var t = this.toSeconds(this.fadeIn);
        this._gainNode.gain.cancelScheduledValues(this._startTime + t + this.sampleTime), this._gainNode.gain.setValueAtTime(1, Math.max(this.now(), this._startTime + t + this.sampleTime)), this.context.clearTimeout(this._onendedTimeout), this._stopTime = -1;
      }

      return this;
    }, t.BufferSource.prototype._onended = function () {
      if (!this._sourceStopped) {
        this._sourceStopped = !0;
        var t = "exponential" === this.curve ? 2 * this.fadeOut : 0;
        this._sourceStarted && -1 !== this._stopTime && this._source.stop(this._stopTime + t), this.onended(this);
      }
    }, Object.defineProperty(t.BufferSource.prototype, "loopStart", {
      get: function get() {
        return this._source.loopStart;
      },
      set: function set(t) {
        this._source.loopStart = this.toSeconds(t);
      }
    }), Object.defineProperty(t.BufferSource.prototype, "loopEnd", {
      get: function get() {
        return this._source.loopEnd;
      },
      set: function set(t) {
        this._source.loopEnd = this.toSeconds(t);
      }
    }), Object.defineProperty(t.BufferSource.prototype, "buffer", {
      get: function get() {
        return this._buffer;
      },
      set: function set(t) {
        this._buffer.set(t);
      }
    }), Object.defineProperty(t.BufferSource.prototype, "loop", {
      get: function get() {
        return this._source.loop;
      },
      set: function set(t) {
        this._source.loop = t, this.cancelStop();
      }
    }), t.BufferSource.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this.onended = null, this._source.onended = null, this._source.disconnect(), this._source = null, this._gainNode.dispose(), this._gainNode = null, this._buffer.dispose(), this._buffer = null, this._startTime = -1, this.playbackRate = null, t.context.clearTimeout(this._onendedTimeout), this;
    }, t.BufferSource;
  }), t(function (t) {
    function e() {
      for (var e in s) {
        o[e] = new t.Buffer().fromArray(s[e]);
      }
    }

    var i, n, s, o;
    return t.Noise = function () {
      var e = t.defaults(arguments, ["type"], t.Noise);
      t.Source.call(this, e), this._source = null, this._type = e.type, this._playbackRate = e.playbackRate;
    }, t.extend(t.Noise, t.Source), t.Noise.defaults = {
      type: "white",
      playbackRate: 1
    }, Object.defineProperty(t.Noise.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(e) {
        if (this._type !== e) {
          if (!(e in o)) throw new TypeError("Tone.Noise: invalid type: " + e);

          if (this._type = e, this.state === t.State.Started) {
            var i = this.now();
            this._stop(i), this._start(i);
          }
        }
      }
    }), Object.defineProperty(t.Noise.prototype, "playbackRate", {
      get: function get() {
        return this._playbackRate;
      },
      set: function set(t) {
        this._playbackRate = t, this._source && (this._source.playbackRate.value = t);
      }
    }), t.Noise.prototype._start = function (e) {
      var i = o[this._type];
      this._source = new t.BufferSource(i).connect(this.output), this._source.loop = !0, this._source.playbackRate.value = this._playbackRate, this._source.start(this.toSeconds(e), Math.random() * (i.duration - .001));
    }, t.Noise.prototype._stop = function (t) {
      this._source && (this._source.stop(this.toSeconds(t)), this._source = null);
    }, t.Noise.prototype.restart = function (t) {
      this._stop(t), this._start(t);
    }, t.Noise.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), null !== this._source && (this._source.disconnect(), this._source = null), this._buffer = null, this;
    }, i = 220500, n = 2, s = {
      pink: function () {
        var t,
            e,
            s,
            o,
            r,
            a,
            h,
            l,
            u,
            c,
            p,
            d = [];

        for (t = 0; t < n; t++) {
          for (e = new Float32Array(i), d[t] = e, s = o = r = a = h = l = u = 0, c = 0; c < i; c++) {
            p = 2 * Math.random() - 1, s = .99886 * s + .0555179 * p, o = .99332 * o + .0750759 * p, r = .969 * r + .153852 * p, a = .8665 * a + .3104856 * p, h = .55 * h + .5329522 * p, l = -.7616 * l - .016898 * p, e[c] = s + o + r + a + h + l + u + .5362 * p, e[c] *= .11, u = .115926 * p;
          }
        }

        return d;
      }(),
      brown: function () {
        var t,
            e,
            s,
            o,
            r,
            a = [];

        for (t = 0; t < n; t++) {
          for (e = new Float32Array(i), a[t] = e, s = 0, o = 0; o < i; o++) {
            r = 2 * Math.random() - 1, e[o] = (s + .02 * r) / 1.02, s = e[o], e[o] *= 3.5;
          }
        }

        return a;
      }(),
      white: function () {
        var t,
            e,
            s,
            o = [];

        for (t = 0; t < n; t++) {
          for (e = new Float32Array(i), o[t] = e, s = 0; s < i; s++) {
            e[s] = 2 * Math.random() - 1;
          }
        }

        return o;
      }()
    }, o = {}, t.getContext(e), t.Context.on("init", e), t.Noise;
  }), t(function (t) {
    return t.Reverb = function () {
      var e = t.defaults(arguments, ["decay"], t.Reverb);
      t.Effect.call(this, e), this._convolver = this.context.createConvolver(), this.decay = e.decay, this.preDelay = e.preDelay, this.connectEffect(this._convolver);
    }, t.extend(t.Reverb, t.Effect), t.Reverb.defaults = {
      decay: 1.5,
      preDelay: .01
    }, t.Reverb.prototype.generate = function () {
      return t.Offline(function () {
        var e,
            i = new t.Noise(),
            n = new t.Noise(),
            s = new t.Merge();
        i.connect(s.left), n.connect(s.right), e = new t.Gain().toMaster(), s.connect(e), i.start(0), n.start(0), e.gain.setValueAtTime(0, 0), e.gain.linearRampToValueAtTime(1, this.preDelay), e.gain.exponentialApproachValueAtTime(0, this.preDelay, this.decay - this.preDelay);
      }.bind(this), this.decay).then(function (t) {
        return this._convolver.buffer = t.get(), this;
      }.bind(this));
    }, t.Reverb.prototype.dispose = function () {
      return t.Effect.prototype.dispose.call(this), this._convolver.disconnect(), this._convolver = null, this;
    }, t.Reverb;
  }), t(function (t) {
    return t.StereoFeedbackEffect = function () {
      var e = t.defaults(arguments, ["feedback"], t.FeedbackEffect);
      t.StereoEffect.call(this, e), this.feedback = new t.Signal(e.feedback, t.Type.NormalRange), this._feedbackL = new t.Gain(), this._feedbackR = new t.Gain(), this.effectReturnL.chain(this._feedbackL, this.effectSendL), this.effectReturnR.chain(this._feedbackR, this.effectSendR), this.feedback.fan(this._feedbackL.gain, this._feedbackR.gain), this._readOnly(["feedback"]);
    }, t.extend(t.StereoFeedbackEffect, t.StereoEffect), t.StereoFeedbackEffect.prototype.dispose = function () {
      return t.StereoEffect.prototype.dispose.call(this), this._writable(["feedback"]), this.feedback.dispose(), this.feedback = null, this._feedbackL.dispose(), this._feedbackL = null, this._feedbackR.dispose(), this._feedbackR = null, this;
    }, t.StereoFeedbackEffect;
  }), t(function (t) {
    return t.StereoWidener = function () {
      var e = t.defaults(arguments, ["width"], t.StereoWidener);
      t.MidSideEffect.call(this, e), this.width = new t.Signal(e.width, t.Type.NormalRange), this._readOnly(["width"]), this._twoTimesWidthMid = new t.Multiply(2), this._twoTimesWidthSide = new t.Multiply(2), this._midMult = new t.Multiply(), this._twoTimesWidthMid.connect(this._midMult, 0, 1), this.midSend.chain(this._midMult, this.midReturn), this._oneMinusWidth = new t.Subtract(), this._oneMinusWidth.connect(this._twoTimesWidthMid), this.context.getConstant(1).connect(this._oneMinusWidth, 0, 0), this.width.connect(this._oneMinusWidth, 0, 1), this._sideMult = new t.Multiply(), this.width.connect(this._twoTimesWidthSide), this._twoTimesWidthSide.connect(this._sideMult, 0, 1), this.sideSend.chain(this._sideMult, this.sideReturn);
    }, t.extend(t.StereoWidener, t.MidSideEffect), t.StereoWidener.defaults = {
      width: .5
    }, t.StereoWidener.prototype.dispose = function () {
      return t.MidSideEffect.prototype.dispose.call(this), this._writable(["width"]), this.width.dispose(), this.width = null, this._midMult.dispose(), this._midMult = null, this._sideMult.dispose(), this._sideMult = null, this._twoTimesWidthMid.dispose(), this._twoTimesWidthMid = null, this._twoTimesWidthSide.dispose(), this._twoTimesWidthSide = null, this._oneMinusWidth.dispose(), this._oneMinusWidth = null, this;
    }, t.StereoWidener;
  }), t(function (t) {
    return t.Tremolo = function () {
      var e = t.defaults(arguments, ["frequency", "depth"], t.Tremolo);
      t.StereoEffect.call(this, e), this._lfoL = new t.LFO({
        phase: e.spread,
        min: 1,
        max: 0
      }), this._lfoR = new t.LFO({
        phase: e.spread,
        min: 1,
        max: 0
      }), this._amplitudeL = new t.Gain(), this._amplitudeR = new t.Gain(), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.depth = new t.Signal(e.depth, t.Type.NormalRange), this._readOnly(["frequency", "depth"]), this.effectSendL.chain(this._amplitudeL, this.effectReturnL), this.effectSendR.chain(this._amplitudeR, this.effectReturnR), this._lfoL.connect(this._amplitudeL.gain), this._lfoR.connect(this._amplitudeR.gain), this.frequency.fan(this._lfoL.frequency, this._lfoR.frequency), this.depth.fan(this._lfoR.amplitude, this._lfoL.amplitude), this.type = e.type, this.spread = e.spread;
    }, t.extend(t.Tremolo, t.StereoEffect), t.Tremolo.defaults = {
      frequency: 10,
      type: "sine",
      depth: .5,
      spread: 180
    }, t.Tremolo.prototype.start = function (t) {
      return this._lfoL.start(t), this._lfoR.start(t), this;
    }, t.Tremolo.prototype.stop = function (t) {
      return this._lfoL.stop(t), this._lfoR.stop(t), this;
    }, t.Tremolo.prototype.sync = function (e) {
      return this._lfoL.sync(e), this._lfoR.sync(e), t.Transport.syncSignal(this.frequency), this;
    }, t.Tremolo.prototype.unsync = function () {
      return this._lfoL.unsync(), this._lfoR.unsync(), t.Transport.unsyncSignal(this.frequency), this;
    }, Object.defineProperty(t.Tremolo.prototype, "type", {
      get: function get() {
        return this._lfoL.type;
      },
      set: function set(t) {
        this._lfoL.type = t, this._lfoR.type = t;
      }
    }), Object.defineProperty(t.Tremolo.prototype, "spread", {
      get: function get() {
        return this._lfoR.phase - this._lfoL.phase;
      },
      set: function set(t) {
        this._lfoL.phase = 90 - t / 2, this._lfoR.phase = t / 2 + 90;
      }
    }), t.Tremolo.prototype.dispose = function () {
      return t.StereoEffect.prototype.dispose.call(this), this._writable(["frequency", "depth"]), this._lfoL.dispose(), this._lfoL = null, this._lfoR.dispose(), this._lfoR = null, this._amplitudeL.dispose(), this._amplitudeL = null, this._amplitudeR.dispose(), this._amplitudeR = null, this.frequency = null, this.depth = null, this;
    }, t.Tremolo;
  }), t(function (t) {
    return t.Vibrato = function () {
      var e = t.defaults(arguments, ["frequency", "depth"], t.Vibrato);
      t.Effect.call(this, e), this._delayNode = new t.Delay(0, e.maxDelay), this._lfo = new t.LFO({
        type: e.type,
        min: 0,
        max: e.maxDelay,
        frequency: e.frequency,
        phase: -90
      }).start().connect(this._delayNode.delayTime), this.frequency = this._lfo.frequency, this.depth = this._lfo.amplitude, this.depth.value = e.depth, this._readOnly(["frequency", "depth"]), this.effectSend.chain(this._delayNode, this.effectReturn);
    }, t.extend(t.Vibrato, t.Effect), t.Vibrato.defaults = {
      maxDelay: .005,
      frequency: 5,
      depth: .1,
      type: "sine"
    }, Object.defineProperty(t.Vibrato.prototype, "type", {
      get: function get() {
        return this._lfo.type;
      },
      set: function set(t) {
        this._lfo.type = t;
      }
    }), t.Vibrato.prototype.dispose = function () {
      t.Effect.prototype.dispose.call(this), this._delayNode.dispose(), this._delayNode = null, this._lfo.dispose(), this._lfo = null, this._writable(["frequency", "depth"]), this.frequency = null, this.depth = null;
    }, t.Vibrato;
  }), t(function (t) {
    return t.Event = function () {
      var e = t.defaults(arguments, ["callback", "value"], t.Event);
      t.call(this), this._loop = e.loop, this.callback = e.callback, this.value = e.value, this._loopStart = this.toTicks(e.loopStart), this._loopEnd = this.toTicks(e.loopEnd), this._state = new t.TimelineState(t.State.Stopped), this._playbackRate = 1, this._startOffset = 0, this._probability = e.probability, this._humanize = e.humanize, this.mute = e.mute, this.playbackRate = e.playbackRate;
    }, t.extend(t.Event), t.Event.defaults = {
      callback: t.noOp,
      loop: !1,
      loopEnd: "1m",
      loopStart: 0,
      playbackRate: 1,
      value: null,
      probability: 1,
      mute: !1,
      humanize: !1
    }, t.Event.prototype._rescheduleEvents = function (e) {
      return e = t.defaultArg(e, -1), this._state.forEachFrom(e, function (e) {
        var i, n, s, o;
        e.state === t.State.Started && (t.isDefined(e.id) && t.Transport.clear(e.id), n = e.time + Math.round(this.startOffset / this._playbackRate), this._loop ? (i = 1 / 0, t.isNumber(this._loop) && (i = this._loop * this._getLoopDuration()), s = this._state.getAfter(n), null !== s && (i = Math.min(i, s.time - n)), i !== 1 / 0 && (this._state.setStateAtTime(t.State.Stopped, n + i + 1), i = t.Ticks(i)), o = t.Ticks(this._getLoopDuration()), e.id = t.Transport.scheduleRepeat(this._tick.bind(this), o, t.Ticks(n), i)) : e.id = t.Transport.schedule(this._tick.bind(this), t.Ticks(n)));
      }.bind(this)), this;
    }, Object.defineProperty(t.Event.prototype, "state", {
      get: function get() {
        return this._state.getValueAtTime(t.Transport.ticks);
      }
    }), Object.defineProperty(t.Event.prototype, "startOffset", {
      get: function get() {
        return this._startOffset;
      },
      set: function set(t) {
        this._startOffset = t;
      }
    }), Object.defineProperty(t.Event.prototype, "probability", {
      get: function get() {
        return this._probability;
      },
      set: function set(t) {
        this._probability = t;
      }
    }), Object.defineProperty(t.Event.prototype, "humanize", {
      get: function get() {
        return this._humanize;
      },
      set: function set(t) {
        this._humanize = t;
      }
    }), t.Event.prototype.start = function (e) {
      return e = this.toTicks(e), this._state.getValueAtTime(e) === t.State.Stopped && (this._state.add({
        state: t.State.Started,
        time: e,
        id: void 0
      }), this._rescheduleEvents(e)), this;
    }, t.Event.prototype.stop = function (e) {
      var i, n;
      return this.cancel(e), e = this.toTicks(e), this._state.getValueAtTime(e) === t.State.Started && (this._state.setStateAtTime(t.State.Stopped, e), i = this._state.getBefore(e), n = e, null !== i && (n = i.time), this._rescheduleEvents(n)), this;
    }, t.Event.prototype.cancel = function (e) {
      return e = t.defaultArg(e, -1 / 0), e = this.toTicks(e), this._state.forEachFrom(e, function (e) {
        t.Transport.clear(e.id);
      }), this._state.cancel(e), this;
    }, t.Event.prototype._tick = function (e) {
      var i,
          n = t.Transport.getTicksAtTime(e);

      if (!this.mute && this._state.getValueAtTime(n) === t.State.Started) {
        if (this.probability < 1 && Math.random() > this.probability) return;
        this.humanize && (i = .02, t.isBoolean(this.humanize) || (i = this.toSeconds(this.humanize)), e += (2 * Math.random() - 1) * i), this.callback(e, this.value);
      }
    }, t.Event.prototype._getLoopDuration = function () {
      return Math.round((this._loopEnd - this._loopStart) / this._playbackRate);
    }, Object.defineProperty(t.Event.prototype, "loop", {
      get: function get() {
        return this._loop;
      },
      set: function set(t) {
        this._loop = t, this._rescheduleEvents();
      }
    }), Object.defineProperty(t.Event.prototype, "playbackRate", {
      get: function get() {
        return this._playbackRate;
      },
      set: function set(t) {
        this._playbackRate = t, this._rescheduleEvents();
      }
    }), Object.defineProperty(t.Event.prototype, "loopEnd", {
      get: function get() {
        return t.Ticks(this._loopEnd).toSeconds();
      },
      set: function set(t) {
        this._loopEnd = this.toTicks(t), this._loop && this._rescheduleEvents();
      }
    }), Object.defineProperty(t.Event.prototype, "loopStart", {
      get: function get() {
        return t.Ticks(this._loopStart).toSeconds();
      },
      set: function set(t) {
        this._loopStart = this.toTicks(t), this._loop && this._rescheduleEvents();
      }
    }), Object.defineProperty(t.Event.prototype, "progress", {
      get: function get() {
        var e, i, n;
        return this._loop ? (e = t.Transport.ticks, i = this._state.get(e), null !== i && i.state === t.State.Started ? (n = this._getLoopDuration(), (e - i.time) % n / n) : 0) : 0;
      }
    }), t.Event.prototype.dispose = function () {
      this.cancel(), this._state.dispose(), this._state = null, this.callback = null, this.value = null;
    }, t.Event;
  }), t(function (t) {
    return t.Loop = function () {
      var e = t.defaults(arguments, ["callback", "interval"], t.Loop);
      t.call(this), this._event = new t.Event({
        callback: this._tick.bind(this),
        loop: !0,
        loopEnd: e.interval,
        playbackRate: e.playbackRate,
        probability: e.probability
      }), this.callback = e.callback, this.iterations = e.iterations;
    }, t.extend(t.Loop), t.Loop.defaults = {
      interval: "4n",
      callback: t.noOp,
      playbackRate: 1,
      iterations: 1 / 0,
      probability: !0,
      mute: !1
    }, t.Loop.prototype.start = function (t) {
      return this._event.start(t), this;
    }, t.Loop.prototype.stop = function (t) {
      return this._event.stop(t), this;
    }, t.Loop.prototype.cancel = function (t) {
      return this._event.cancel(t), this;
    }, t.Loop.prototype._tick = function (t) {
      this.callback(t);
    }, Object.defineProperty(t.Loop.prototype, "state", {
      get: function get() {
        return this._event.state;
      }
    }), Object.defineProperty(t.Loop.prototype, "progress", {
      get: function get() {
        return this._event.progress;
      }
    }), Object.defineProperty(t.Loop.prototype, "interval", {
      get: function get() {
        return this._event.loopEnd;
      },
      set: function set(t) {
        this._event.loopEnd = t;
      }
    }), Object.defineProperty(t.Loop.prototype, "playbackRate", {
      get: function get() {
        return this._event.playbackRate;
      },
      set: function set(t) {
        this._event.playbackRate = t;
      }
    }), Object.defineProperty(t.Loop.prototype, "humanize", {
      get: function get() {
        return this._event.humanize;
      },
      set: function set(t) {
        this._event.humanize = t;
      }
    }), Object.defineProperty(t.Loop.prototype, "probability", {
      get: function get() {
        return this._event.probability;
      },
      set: function set(t) {
        this._event.probability = t;
      }
    }), Object.defineProperty(t.Loop.prototype, "mute", {
      get: function get() {
        return this._event.mute;
      },
      set: function set(t) {
        this._event.mute = t;
      }
    }), Object.defineProperty(t.Loop.prototype, "iterations", {
      get: function get() {
        return !0 === this._event.loop ? 1 / 0 : this._event.loop;
      },
      set: function set(t) {
        this._event.loop = t === 1 / 0 || t;
      }
    }), t.Loop.prototype.dispose = function () {
      this._event.dispose(), this._event = null, this.callback = null;
    }, t.Loop;
  }), t(function (t) {
    return t.Part = function () {
      var e,
          i = t.defaults(arguments, ["callback", "events"], t.Part);

      for (t.Event.call(this, i), this._events = [], e = 0; e < i.events.length; e++) {
        Array.isArray(i.events[e]) ? this.add(i.events[e][0], i.events[e][1]) : this.add(i.events[e]);
      }
    }, t.extend(t.Part, t.Event), t.Part.defaults = {
      callback: t.noOp,
      loop: !1,
      loopEnd: "1m",
      loopStart: 0,
      playbackRate: 1,
      probability: 1,
      humanize: !1,
      mute: !1,
      events: []
    }, t.Part.prototype.start = function (e, i) {
      var n = this.toTicks(e);
      return this._state.getValueAtTime(n) !== t.State.Started && (i = this._loop ? t.defaultArg(i, this._loopStart) : t.defaultArg(i, 0), i = this.toTicks(i), this._state.add({
        state: t.State.Started,
        time: n,
        offset: i
      }), this._forEach(function (t) {
        this._startNote(t, n, i);
      })), this;
    }, t.Part.prototype._startNote = function (e, i, n) {
      i -= n, this._loop ? e.startOffset >= this._loopStart && e.startOffset < this._loopEnd ? (e.startOffset < n && (i += this._getLoopDuration()), e.start(t.Ticks(i))) : e.startOffset < this._loopStart && e.startOffset >= n && (e.loop = !1, e.start(t.Ticks(i))) : e.startOffset >= n && e.start(t.Ticks(i));
    }, Object.defineProperty(t.Part.prototype, "startOffset", {
      get: function get() {
        return this._startOffset;
      },
      set: function set(t) {
        this._startOffset = t, this._forEach(function (t) {
          t.startOffset += this._startOffset;
        });
      }
    }), t.Part.prototype.stop = function (e) {
      var i = this.toTicks(e);
      return this._state.cancel(i), this._state.setStateAtTime(t.State.Stopped, i), this._forEach(function (t) {
        t.stop(e);
      }), this;
    }, t.Part.prototype.at = function (e, i) {
      var n, s, o;

      for (e = t.TransportTime(e), n = t.Ticks(1).toSeconds(), s = 0; s < this._events.length; s++) {
        if (o = this._events[s], Math.abs(e.toTicks() - o.startOffset) < n) return t.isDefined(i) && (o.value = i), o;
      }

      return t.isDefined(i) ? (this.add(e, i), this._events[this._events.length - 1]) : null;
    }, t.Part.prototype.add = function (e, i) {
      e.hasOwnProperty("time") && (i = e, e = i.time), e = this.toTicks(e);
      var n;
      return i instanceof t.Event ? (n = i, n.callback = this._tick.bind(this)) : n = new t.Event({
        callback: this._tick.bind(this),
        value: i
      }), n.startOffset = e, n.set({
        loopEnd: this.loopEnd,
        loopStart: this.loopStart,
        loop: this.loop,
        humanize: this.humanize,
        playbackRate: this.playbackRate,
        probability: this.probability
      }), this._events.push(n), this._restartEvent(n), this;
    }, t.Part.prototype._restartEvent = function (e) {
      this._state.forEach(function (i) {
        i.state === t.State.Started ? this._startNote(e, i.time, i.offset) : e.stop(t.Ticks(i.time));
      }.bind(this));
    }, t.Part.prototype.remove = function (e, i) {
      var n, s;

      for (e.hasOwnProperty("time") && (i = e, e = i.time), e = this.toTicks(e), n = this._events.length - 1; n >= 0; n--) {
        s = this._events[n], s instanceof t.Part ? s.remove(e, i) : s.startOffset === e && (t.isUndef(i) || t.isDefined(i) && s.value === i) && (this._events.splice(n, 1), s.dispose());
      }

      return this;
    }, t.Part.prototype.removeAll = function () {
      return this._forEach(function (t) {
        t.dispose();
      }), this._events = [], this;
    }, t.Part.prototype.cancel = function (t) {
      return this._forEach(function (e) {
        e.cancel(t);
      }), this._state.cancel(this.toTicks(t)), this;
    }, t.Part.prototype._forEach = function (e, i) {
      var n, s;
      if (this._events) for (i = t.defaultArg(i, this), n = this._events.length - 1; n >= 0; n--) {
        s = this._events[n], s instanceof t.Part ? s._forEach(e, i) : e.call(i, s);
      }
      return this;
    }, t.Part.prototype._setAll = function (t, e) {
      this._forEach(function (i) {
        i[t] = e;
      });
    }, t.Part.prototype._tick = function (t, e) {
      this.mute || this.callback(t, e);
    }, t.Part.prototype._testLoopBoundries = function (e) {
      e.startOffset < this._loopStart || e.startOffset >= this._loopEnd ? e.cancel(0) : e.state === t.State.Stopped && this._restartEvent(e);
    }, Object.defineProperty(t.Part.prototype, "probability", {
      get: function get() {
        return this._probability;
      },
      set: function set(t) {
        this._probability = t, this._setAll("probability", t);
      }
    }), Object.defineProperty(t.Part.prototype, "humanize", {
      get: function get() {
        return this._humanize;
      },
      set: function set(t) {
        this._humanize = t, this._setAll("humanize", t);
      }
    }), Object.defineProperty(t.Part.prototype, "loop", {
      get: function get() {
        return this._loop;
      },
      set: function set(t) {
        this._loop = t, this._forEach(function (e) {
          e._loopStart = this._loopStart, e._loopEnd = this._loopEnd, e.loop = t, this._testLoopBoundries(e);
        });
      }
    }), Object.defineProperty(t.Part.prototype, "loopEnd", {
      get: function get() {
        return t.Ticks(this._loopEnd).toSeconds();
      },
      set: function set(t) {
        this._loopEnd = this.toTicks(t), this._loop && this._forEach(function (e) {
          e.loopEnd = t, this._testLoopBoundries(e);
        });
      }
    }), Object.defineProperty(t.Part.prototype, "loopStart", {
      get: function get() {
        return t.Ticks(this._loopStart).toSeconds();
      },
      set: function set(t) {
        this._loopStart = this.toTicks(t), this._loop && this._forEach(function (t) {
          t.loopStart = this.loopStart, this._testLoopBoundries(t);
        });
      }
    }), Object.defineProperty(t.Part.prototype, "playbackRate", {
      get: function get() {
        return this._playbackRate;
      },
      set: function set(t) {
        this._playbackRate = t, this._setAll("playbackRate", t);
      }
    }), Object.defineProperty(t.Part.prototype, "length", {
      get: function get() {
        return this._events.length;
      }
    }), t.Part.prototype.dispose = function () {
      return this.removeAll(), this._state.dispose(), this._state = null, this.callback = null, this._events = null, this;
    }, t.Part;
  }), t(function (t) {
    return t.Pattern = function () {
      var e = t.defaults(arguments, ["callback", "values", "pattern"], t.Pattern);
      t.Loop.call(this, e), this._pattern = new t.CtrlPattern({
        values: e.values,
        type: e.pattern,
        index: e.index
      });
    }, t.extend(t.Pattern, t.Loop), t.Pattern.defaults = {
      pattern: t.CtrlPattern.Type.Up,
      callback: t.noOp,
      values: []
    }, t.Pattern.prototype._tick = function (t) {
      this.callback(t, this._pattern.value), this._pattern.next();
    }, Object.defineProperty(t.Pattern.prototype, "index", {
      get: function get() {
        return this._pattern.index;
      },
      set: function set(t) {
        this._pattern.index = t;
      }
    }), Object.defineProperty(t.Pattern.prototype, "values", {
      get: function get() {
        return this._pattern.values;
      },
      set: function set(t) {
        this._pattern.values = t;
      }
    }), Object.defineProperty(t.Pattern.prototype, "value", {
      get: function get() {
        return this._pattern.value;
      }
    }), Object.defineProperty(t.Pattern.prototype, "pattern", {
      get: function get() {
        return this._pattern.type;
      },
      set: function set(t) {
        this._pattern.type = t;
      }
    }), t.Pattern.prototype.dispose = function () {
      t.Loop.prototype.dispose.call(this), this._pattern.dispose(), this._pattern = null;
    }, t.Pattern;
  }), t(function (t) {
    return t.Sequence = function () {
      var e,
          i = t.defaults(arguments, ["callback", "events", "subdivision"], t.Sequence),
          n = i.events;
      if (delete i.events, t.Part.call(this, i), this._subdivision = this.toTicks(i.subdivision), t.isUndef(i.loopEnd) && t.isDefined(n) && (this._loopEnd = n.length * this._subdivision), this._loop = !0, t.isDefined(n)) for (e = 0; e < n.length; e++) {
        this.add(e, n[e]);
      }
    }, t.extend(t.Sequence, t.Part), t.Sequence.defaults = {
      subdivision: "4n"
    }, Object.defineProperty(t.Sequence.prototype, "subdivision", {
      get: function get() {
        return t.Ticks(this._subdivision).toSeconds();
      }
    }), t.Sequence.prototype.at = function (e, i) {
      return t.isArray(i) && this.remove(e), t.Part.prototype.at.call(this, this._indexTime(e), i);
    }, t.Sequence.prototype.add = function (e, i) {
      if (null === i) return this;

      if (t.isArray(i)) {
        var n = Math.round(this._subdivision / i.length);
        i = new t.Sequence(this._tick.bind(this), i, t.Ticks(n));
      }

      return t.Part.prototype.add.call(this, this._indexTime(e), i), this;
    }, t.Sequence.prototype.remove = function (e, i) {
      return t.Part.prototype.remove.call(this, this._indexTime(e), i), this;
    }, t.Sequence.prototype._indexTime = function (e) {
      return e instanceof t.TransportTime ? e : t.Ticks(e * this._subdivision + this.startOffset).toSeconds();
    }, t.Sequence.prototype.dispose = function () {
      return t.Part.prototype.dispose.call(this), this;
    }, t.Sequence;
  }), t(function (t) {
    return t.PulseOscillator = function () {
      var e = t.defaults(arguments, ["frequency", "width"], t.Oscillator);
      t.Source.call(this, e), this.width = new t.Signal(e.width, t.Type.NormalRange), this._widthGate = new t.Gain(), this._sawtooth = new t.Oscillator({
        frequency: e.frequency,
        detune: e.detune,
        type: "sawtooth",
        phase: e.phase
      }), this.frequency = this._sawtooth.frequency, this.detune = this._sawtooth.detune, this._thresh = new t.WaveShaper(function (t) {
        return t < 0 ? -1 : 1;
      }), this._sawtooth.chain(this._thresh, this.output), this.width.chain(this._widthGate, this._thresh), this._readOnly(["width", "frequency", "detune"]);
    }, t.extend(t.PulseOscillator, t.Source), t.PulseOscillator.defaults = {
      frequency: 440,
      detune: 0,
      phase: 0,
      width: .2
    }, t.PulseOscillator.prototype._start = function (t) {
      t = this.toSeconds(t), this._sawtooth.start(t), this._widthGate.gain.setValueAtTime(1, t);
    }, t.PulseOscillator.prototype._stop = function (t) {
      t = this.toSeconds(t), this._sawtooth.stop(t), this._widthGate.gain.setValueAtTime(0, t);
    }, t.PulseOscillator.prototype.restart = function (t) {
      this._sawtooth.restart(t);
    }, Object.defineProperty(t.PulseOscillator.prototype, "phase", {
      get: function get() {
        return this._sawtooth.phase;
      },
      set: function set(t) {
        this._sawtooth.phase = t;
      }
    }), Object.defineProperty(t.PulseOscillator.prototype, "type", {
      get: function get() {
        return "pulse";
      }
    }), Object.defineProperty(t.PulseOscillator.prototype, "partials", {
      get: function get() {
        return [];
      }
    }), t.PulseOscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this._sawtooth.dispose(), this._sawtooth = null, this._writable(["width", "frequency", "detune"]), this.width.dispose(), this.width = null, this._widthGate.dispose(), this._widthGate = null, this._thresh.dispose(), this._thresh = null, this.frequency = null, this.detune = null, this;
    }, t.PulseOscillator;
  }), t(function (t) {
    return t.PWMOscillator = function () {
      var e = t.defaults(arguments, ["frequency", "modulationFrequency"], t.PWMOscillator);
      t.Source.call(this, e), this._pulse = new t.PulseOscillator(e.modulationFrequency), this._pulse._sawtooth.type = "sine", this._modulator = new t.Oscillator({
        frequency: e.frequency,
        detune: e.detune,
        phase: e.phase
      }), this._scale = new t.Multiply(2), this.frequency = this._modulator.frequency, this.detune = this._modulator.detune, this.modulationFrequency = this._pulse.frequency, this._modulator.chain(this._scale, this._pulse.width), this._pulse.connect(this.output), this._readOnly(["modulationFrequency", "frequency", "detune"]);
    }, t.extend(t.PWMOscillator, t.Source), t.PWMOscillator.defaults = {
      frequency: 440,
      detune: 0,
      phase: 0,
      modulationFrequency: .4
    }, t.PWMOscillator.prototype._start = function (t) {
      t = this.toSeconds(t), this._modulator.start(t), this._pulse.start(t);
    }, t.PWMOscillator.prototype._stop = function (t) {
      t = this.toSeconds(t), this._modulator.stop(t), this._pulse.stop(t);
    }, t.PWMOscillator.prototype.restart = function (t) {
      this._modulator.restart(t), this._pulse.restart(t);
    }, Object.defineProperty(t.PWMOscillator.prototype, "type", {
      get: function get() {
        return "pwm";
      }
    }), Object.defineProperty(t.PWMOscillator.prototype, "partials", {
      get: function get() {
        return [];
      }
    }), Object.defineProperty(t.PWMOscillator.prototype, "phase", {
      get: function get() {
        return this._modulator.phase;
      },
      set: function set(t) {
        this._modulator.phase = t;
      }
    }), t.PWMOscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this._pulse.dispose(), this._pulse = null, this._scale.dispose(), this._scale = null, this._modulator.dispose(), this._modulator = null, this._writable(["modulationFrequency", "frequency", "detune"]), this.frequency = null, this.detune = null, this.modulationFrequency = null, this;
    }, t.PWMOscillator;
  }), t(function (t) {
    return t.FMOscillator = function () {
      var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.FMOscillator);
      t.Source.call(this, e), this._carrier = new t.Oscillator(e.frequency, e.type), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = this._carrier.detune, this.detune.value = e.detune, this.modulationIndex = new t.Multiply(e.modulationIndex), this.modulationIndex.units = t.Type.Positive, this._modulator = new t.Oscillator(e.frequency, e.modulationType), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationNode = new t.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this.detune.connect(this._modulator.detune), this.phase = e.phase, this._readOnly(["modulationIndex", "frequency", "detune", "harmonicity"]);
    }, t.extend(t.FMOscillator, t.Source), t.FMOscillator.defaults = {
      frequency: 440,
      detune: 0,
      phase: 0,
      modulationIndex: 2,
      modulationType: "square",
      harmonicity: 1
    }, t.FMOscillator.prototype._start = function (t) {
      this._modulator.start(t), this._carrier.start(t);
    }, t.FMOscillator.prototype._stop = function (t) {
      this._modulator.stop(t), this._carrier.stop(t);
    }, t.FMOscillator.prototype.restart = function (t) {
      this._modulator.restart(t), this._carrier.restart(t);
    }, Object.defineProperty(t.FMOscillator.prototype, "type", {
      get: function get() {
        return this._carrier.type;
      },
      set: function set(t) {
        this._carrier.type = t;
      }
    }), Object.defineProperty(t.FMOscillator.prototype, "modulationType", {
      get: function get() {
        return this._modulator.type;
      },
      set: function set(t) {
        this._modulator.type = t;
      }
    }), Object.defineProperty(t.FMOscillator.prototype, "phase", {
      get: function get() {
        return this._carrier.phase;
      },
      set: function set(t) {
        this._carrier.phase = t, this._modulator.phase = t;
      }
    }), Object.defineProperty(t.FMOscillator.prototype, "partials", {
      get: function get() {
        return this._carrier.partials;
      },
      set: function set(t) {
        this._carrier.partials = t;
      }
    }), t.FMOscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this._writable(["modulationIndex", "frequency", "detune", "harmonicity"]), this.frequency.dispose(), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this.modulationIndex.dispose(), this.modulationIndex = null, this;
    }, t.FMOscillator;
  }), t(function (t) {
    return t.AMOscillator = function () {
      var e = t.defaults(arguments, ["frequency", "type", "modulationType"], t.AMOscillator);
      t.Source.call(this, e), this._carrier = new t.Oscillator(e.frequency, e.type), this.frequency = this._carrier.frequency, this.detune = this._carrier.detune, this.detune.value = e.detune, this._modulator = new t.Oscillator(e.frequency, e.modulationType), this._modulationScale = new t.AudioToGain(), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationNode = new t.Gain(0), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.connect(this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this.phase = e.phase, this._readOnly(["frequency", "detune", "harmonicity"]);
    }, t.extend(t.AMOscillator, t.Oscillator), t.AMOscillator.defaults = {
      frequency: 440,
      detune: 0,
      phase: 0,
      modulationType: "square",
      harmonicity: 1
    }, t.AMOscillator.prototype._start = function (t) {
      this._modulator.start(t), this._carrier.start(t);
    }, t.AMOscillator.prototype._stop = function (t) {
      this._modulator.stop(t), this._carrier.stop(t);
    }, t.AMOscillator.prototype.restart = function (t) {
      this._modulator.restart(t), this._carrier.restart(t);
    }, Object.defineProperty(t.AMOscillator.prototype, "type", {
      get: function get() {
        return this._carrier.type;
      },
      set: function set(t) {
        this._carrier.type = t;
      }
    }), Object.defineProperty(t.AMOscillator.prototype, "modulationType", {
      get: function get() {
        return this._modulator.type;
      },
      set: function set(t) {
        this._modulator.type = t;
      }
    }), Object.defineProperty(t.AMOscillator.prototype, "phase", {
      get: function get() {
        return this._carrier.phase;
      },
      set: function set(t) {
        this._carrier.phase = t, this._modulator.phase = t;
      }
    }), Object.defineProperty(t.AMOscillator.prototype, "partials", {
      get: function get() {
        return this._carrier.partials;
      },
      set: function set(t) {
        this._carrier.partials = t;
      }
    }), t.AMOscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune", "harmonicity"]), this.frequency = null, this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this._modulationNode.dispose(), this._modulationNode = null, this._modulationScale.dispose(), this._modulationScale = null, this;
    }, t.AMOscillator;
  }), t(function (t) {
    return t.FatOscillator = function () {
      var e = t.defaults(arguments, ["frequency", "type", "spread"], t.FatOscillator);
      t.Source.call(this, e), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._oscillators = [], this._spread = e.spread, this._type = e.type, this._phase = e.phase, this._partials = t.defaultArg(e.partials, []), this.count = e.count, this._readOnly(["frequency", "detune"]);
    }, t.extend(t.FatOscillator, t.Source), t.FatOscillator.defaults = {
      frequency: 440,
      detune: 0,
      phase: 0,
      spread: 20,
      count: 3,
      type: "sawtooth"
    }, t.FatOscillator.prototype._start = function (t) {
      t = this.toSeconds(t), this._forEach(function (e) {
        e.start(t);
      });
    }, t.FatOscillator.prototype._stop = function (t) {
      t = this.toSeconds(t), this._forEach(function (e) {
        e.stop(t);
      });
    }, t.FatOscillator.prototype.restart = function (t) {
      t = this.toSeconds(t), this._forEach(function (e) {
        e.restart(t);
      });
    }, t.FatOscillator.prototype._forEach = function (t) {
      for (var e = 0; e < this._oscillators.length; e++) {
        t.call(this, this._oscillators[e], e);
      }
    }, Object.defineProperty(t.FatOscillator.prototype, "type", {
      get: function get() {
        return this._type;
      },
      set: function set(t) {
        this._type = t, this._forEach(function (e) {
          e.type = t;
        });
      }
    }), Object.defineProperty(t.FatOscillator.prototype, "spread", {
      get: function get() {
        return this._spread;
      },
      set: function set(t) {
        var e, i;
        this._spread = t, this._oscillators.length > 1 && (e = -t / 2, i = t / (this._oscillators.length - 1), this._forEach(function (t, n) {
          t.detune.value = e + i * n;
        }));
      }
    }), Object.defineProperty(t.FatOscillator.prototype, "count", {
      get: function get() {
        return this._oscillators.length;
      },
      set: function set(e) {
        var i, n;

        if (e = Math.max(e, 1), this._oscillators.length !== e) {
          for (this._forEach(function (t) {
            t.dispose();
          }), this._oscillators = [], i = 0; i < e; i++) {
            n = new t.Oscillator(), this.type === t.Oscillator.Type.Custom ? n.partials = this._partials : n.type = this._type, n.phase = this._phase, n.volume.value = -6 - 1.1 * e, this.frequency.connect(n.frequency), this.detune.connect(n.detune), n.connect(this.output), this._oscillators[i] = n;
          }

          this.spread = this._spread, this.state === t.State.Started && this._forEach(function (t) {
            t.start();
          });
        }
      }
    }), Object.defineProperty(t.FatOscillator.prototype, "phase", {
      get: function get() {
        return this._phase;
      },
      set: function set(t) {
        this._phase = t, this._forEach(function (e) {
          e.phase = t;
        });
      }
    }), Object.defineProperty(t.FatOscillator.prototype, "partials", {
      get: function get() {
        return this._partials;
      },
      set: function set(e) {
        this._partials = e, this._type = t.Oscillator.Type.Custom, this._forEach(function (t) {
          t.partials = e;
        });
      }
    }), t.FatOscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this._forEach(function (t) {
        t.dispose();
      }), this._oscillators = null, this._partials = null, this;
    }, t.FatOscillator;
  }), t(function (t) {
    t.OmniOscillator = function () {
      var e = t.defaults(arguments, ["frequency", "type"], t.OmniOscillator);
      t.Source.call(this, e), this.frequency = new t.Signal(e.frequency, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this._sourceType = void 0, this._oscillator = null, this.type = e.type, this._readOnly(["frequency", "detune"]), this.set(e);
    }, t.extend(t.OmniOscillator, t.Source), t.OmniOscillator.defaults = {
      frequency: 440,
      detune: 0,
      type: "sine",
      phase: 0
    };
    var e = {
      Pulse: "PulseOscillator",
      PWM: "PWMOscillator",
      Osc: "Oscillator",
      FM: "FMOscillator",
      AM: "AMOscillator",
      Fat: "FatOscillator"
    };
    return t.OmniOscillator.prototype._start = function (t) {
      this._oscillator.start(t);
    }, t.OmniOscillator.prototype._stop = function (t) {
      this._oscillator.stop(t);
    }, t.OmniOscillator.prototype.restart = function (t) {
      this._oscillator.restart(t);
    }, Object.defineProperty(t.OmniOscillator.prototype, "type", {
      get: function get() {
        var t = "";
        return this._sourceType === e.FM ? t = "fm" : this._sourceType === e.AM ? t = "am" : this._sourceType === e.Fat && (t = "fat"), t + this._oscillator.type;
      },
      set: function set(t) {
        "fm" === t.substr(0, 2) ? (this._createNewOscillator(e.FM), this._oscillator.type = t.substr(2)) : "am" === t.substr(0, 2) ? (this._createNewOscillator(e.AM), this._oscillator.type = t.substr(2)) : "fat" === t.substr(0, 3) ? (this._createNewOscillator(e.Fat), this._oscillator.type = t.substr(3)) : "pwm" === t ? this._createNewOscillator(e.PWM) : "pulse" === t ? this._createNewOscillator(e.Pulse) : (this._createNewOscillator(e.Osc), this._oscillator.type = t);
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "partials", {
      get: function get() {
        return this._oscillator.partials;
      },
      set: function set(t) {
        this._oscillator.partials = t;
      }
    }), t.OmniOscillator.prototype.set = function (e, i) {
      return "type" === e ? this.type = i : t.isObject(e) && e.hasOwnProperty("type") && (this.type = e.type), t.prototype.set.apply(this, arguments), this;
    }, t.OmniOscillator.prototype._createNewOscillator = function (e) {
      var i, n, s;
      e !== this._sourceType && (this._sourceType = e, i = t[e], n = this.now(), null !== this._oscillator && (s = this._oscillator, s.stop(n), this.context.setTimeout(function () {
        s.dispose(), s = null;
      }, this.blockTime)), this._oscillator = new i(), this.frequency.connect(this._oscillator.frequency), this.detune.connect(this._oscillator.detune), this._oscillator.connect(this.output), this.state === t.State.Started && this._oscillator.start(n));
    }, Object.defineProperty(t.OmniOscillator.prototype, "phase", {
      get: function get() {
        return this._oscillator.phase;
      },
      set: function set(t) {
        this._oscillator.phase = t;
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "width", {
      get: function get() {
        if (this._sourceType === e.Pulse) return this._oscillator.width;
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "count", {
      get: function get() {
        if (this._sourceType === e.Fat) return this._oscillator.count;
      },
      set: function set(t) {
        this._sourceType === e.Fat && (this._oscillator.count = t);
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "spread", {
      get: function get() {
        if (this._sourceType === e.Fat) return this._oscillator.spread;
      },
      set: function set(t) {
        this._sourceType === e.Fat && (this._oscillator.spread = t);
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "modulationType", {
      get: function get() {
        if (this._sourceType === e.FM || this._sourceType === e.AM) return this._oscillator.modulationType;
      },
      set: function set(t) {
        this._sourceType !== e.FM && this._sourceType !== e.AM || (this._oscillator.modulationType = t);
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "modulationIndex", {
      get: function get() {
        if (this._sourceType === e.FM) return this._oscillator.modulationIndex;
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "harmonicity", {
      get: function get() {
        if (this._sourceType === e.FM || this._sourceType === e.AM) return this._oscillator.harmonicity;
      }
    }), Object.defineProperty(t.OmniOscillator.prototype, "modulationFrequency", {
      get: function get() {
        if (this._sourceType === e.PWM) return this._oscillator.modulationFrequency;
      }
    }), t.OmniOscillator.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this._writable(["frequency", "detune"]), this.detune.dispose(), this.detune = null, this.frequency.dispose(), this.frequency = null, this._oscillator.dispose(), this._oscillator = null, this._sourceType = null, this;
    }, t.OmniOscillator;
  }), t(function (t) {
    return t.Instrument = function (e) {
      e = t.defaultArg(e, t.Instrument.defaults), t.AudioNode.call(this), this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._scheduledEvents = [];
    }, t.extend(t.Instrument, t.AudioNode), t.Instrument.defaults = {
      volume: 0
    }, t.Instrument.prototype.triggerAttack = t.noOp, t.Instrument.prototype.triggerRelease = t.noOp, t.Instrument.prototype.sync = function () {
      return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 0), this;
    }, t.Instrument.prototype._syncMethod = function (e, i) {
      var n = this["_original_" + e] = this[e];

      this[e] = function () {
        var e = Array.prototype.slice.call(arguments),
            s = e[i],
            o = t.Transport.schedule(function (t) {
          e[i] = t, n.apply(this, e);
        }.bind(this), s);

        this._scheduledEvents.push(o);
      }.bind(this);
    }, t.Instrument.prototype.unsync = function () {
      return this._scheduledEvents.forEach(function (e) {
        t.Transport.clear(e);
      }), this._scheduledEvents = [], this._original_triggerAttack && (this.triggerAttack = this._original_triggerAttack, this.triggerRelease = this._original_triggerRelease), this;
    }, t.Instrument.prototype.triggerAttackRelease = function (t, e, i, n) {
      return i = this.toSeconds(i), e = this.toSeconds(e), this.triggerAttack(t, i, n), this.triggerRelease(i + e), this;
    }, t.Instrument.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable(["volume"]), this.volume = null, this.unsync(), this._scheduledEvents = null, this;
    }, t.Instrument;
  }), t(function (t) {
    return t.Monophonic = function (e) {
      e = t.defaultArg(e, t.Monophonic.defaults), t.Instrument.call(this, e), this.portamento = e.portamento;
    }, t.extend(t.Monophonic, t.Instrument), t.Monophonic.defaults = {
      portamento: 0
    }, t.Monophonic.prototype.triggerAttack = function (t, e, i) {
      return e = this.toSeconds(e), this._triggerEnvelopeAttack(e, i), this.setNote(t, e), this;
    }, t.Monophonic.prototype.triggerRelease = function (t) {
      return t = this.toSeconds(t), this._triggerEnvelopeRelease(t), this;
    }, t.Monophonic.prototype._triggerEnvelopeAttack = function () {}, t.Monophonic.prototype._triggerEnvelopeRelease = function () {}, t.Monophonic.prototype.getLevelAtTime = function (t) {
      return t = this.toSeconds(t), this.envelope.getValueAtTime(t);
    }, t.Monophonic.prototype.setNote = function (t, e) {
      if (e = this.toSeconds(e), this.portamento > 0 && this.getLevelAtTime(e) > .05) {
        var i = this.toSeconds(this.portamento);
        this.frequency.exponentialRampTo(t, i, e);
      } else this.frequency.setValueAtTime(t, e);

      return this;
    }, t.Monophonic;
  }), t(function (t) {
    return t.Synth = function (e) {
      e = t.defaultArg(e, t.Synth.defaults), t.Monophonic.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.envelope = new t.AmplitudeEnvelope(e.envelope), this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "frequency", "detune", "envelope"]);
    }, t.extend(t.Synth, t.Monophonic), t.Synth.defaults = {
      oscillator: {
        type: "triangle"
      },
      envelope: {
        attack: .005,
        decay: .1,
        sustain: .3,
        release: 1
      }
    }, t.Synth.prototype._triggerEnvelopeAttack = function (t, e) {
      return this.envelope.triggerAttack(t, e), this.oscillator.start(t), 0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay), this;
    }, t.Synth.prototype._triggerEnvelopeRelease = function (t) {
      return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this;
    }, t.Synth.prototype.dispose = function () {
      return t.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.frequency = null, this.detune = null, this;
    }, t.Synth;
  }), t(function (t) {
    return t.AMSynth = function (e) {
      e = t.defaultArg(e, t.AMSynth.defaults), t.Monophonic.call(this, e), this._carrier = new t.Synth(), this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope.set(e.envelope), this._modulator = new t.Synth(), this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(e.modulation), this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope), this.frequency = new t.Signal(440, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this._modulationScale = new t.AudioToGain(), this._modulationNode = new t.Gain(), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.chain(this._modulationScale, this._modulationNode.gain), this._carrier.chain(this._modulationNode, this.output), this._readOnly(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]);
    }, t.extend(t.AMSynth, t.Monophonic), t.AMSynth.defaults = {
      harmonicity: 3,
      detune: 0,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: .01,
        decay: .01,
        sustain: 1,
        release: .5
      },
      modulation: {
        type: "square"
      },
      modulationEnvelope: {
        attack: .5,
        decay: 0,
        sustain: 1,
        release: .5
      }
    }, t.AMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
      return t = this.toSeconds(t), this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t), this;
    }, t.AMSynth.prototype._triggerEnvelopeRelease = function (t) {
      return this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this;
    }, t.AMSynth.prototype.dispose = function () {
      return t.Monophonic.prototype.dispose.call(this), this._writable(["frequency", "harmonicity", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationScale.dispose(), this._modulationScale = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this;
    }, t.AMSynth;
  }), t(function (t) {
    return t.MonoSynth = function (e) {
      e = t.defaultArg(e, t.MonoSynth.defaults), t.Monophonic.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.frequency = this.oscillator.frequency, this.detune = this.oscillator.detune, this.filter = new t.Filter(e.filter), this.filterEnvelope = new t.FrequencyEnvelope(e.filterEnvelope), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.oscillator.chain(this.filter, this.envelope, this.output), this.filterEnvelope.connect(this.filter.frequency), this._readOnly(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]);
    }, t.extend(t.MonoSynth, t.Monophonic), t.MonoSynth.defaults = {
      frequency: "C4",
      detune: 0,
      oscillator: {
        type: "square"
      },
      filter: {
        Q: 6,
        type: "lowpass",
        rolloff: -24
      },
      envelope: {
        attack: .005,
        decay: .1,
        sustain: .9,
        release: 1
      },
      filterEnvelope: {
        attack: .06,
        decay: .2,
        sustain: .5,
        release: 2,
        baseFrequency: 200,
        octaves: 7,
        exponent: 2
      }
    }, t.MonoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
      return t = this.toSeconds(t), this.envelope.triggerAttack(t, e), this.filterEnvelope.triggerAttack(t), this.oscillator.start(t), 0 === this.envelope.sustain && this.oscillator.stop(t + this.envelope.attack + this.envelope.decay), this;
    }, t.MonoSynth.prototype._triggerEnvelopeRelease = function (t) {
      return this.envelope.triggerRelease(t), this.filterEnvelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this;
    }, t.MonoSynth.prototype.dispose = function () {
      return t.Monophonic.prototype.dispose.call(this), this._writable(["oscillator", "frequency", "detune", "filter", "filterEnvelope", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this.filterEnvelope.dispose(), this.filterEnvelope = null, this.filter.dispose(), this.filter = null, this.frequency = null, this.detune = null, this;
    }, t.MonoSynth;
  }), t(function (t) {
    return t.DuoSynth = function (e) {
      e = t.defaultArg(e, t.DuoSynth.defaults), t.Monophonic.call(this, e), this.voice0 = new t.MonoSynth(e.voice0), this.voice0.volume.value = -10, this.voice1 = new t.MonoSynth(e.voice1), this.voice1.volume.value = -10, this._vibrato = new t.LFO(e.vibratoRate, -50, 50), this._vibrato.start(), this.vibratoRate = this._vibrato.frequency, this._vibratoGain = new t.Gain(e.vibratoAmount, t.Type.Positive), this.vibratoAmount = this._vibratoGain.gain, this.frequency = new t.Signal(440, t.Type.Frequency), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.frequency.connect(this.voice0.frequency), this.frequency.chain(this.harmonicity, this.voice1.frequency), this._vibrato.connect(this._vibratoGain), this._vibratoGain.fan(this.voice0.detune, this.voice1.detune), this.voice0.connect(this.output), this.voice1.connect(this.output), this._readOnly(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]);
    }, t.extend(t.DuoSynth, t.Monophonic), t.DuoSynth.defaults = {
      vibratoAmount: .5,
      vibratoRate: 5,
      harmonicity: 1.5,
      voice0: {
        volume: -10,
        portamento: 0,
        oscillator: {
          type: "sine"
        },
        filterEnvelope: {
          attack: .01,
          decay: 0,
          sustain: 1,
          release: .5
        },
        envelope: {
          attack: .01,
          decay: 0,
          sustain: 1,
          release: .5
        }
      },
      voice1: {
        volume: -10,
        portamento: 0,
        oscillator: {
          type: "sine"
        },
        filterEnvelope: {
          attack: .01,
          decay: 0,
          sustain: 1,
          release: .5
        },
        envelope: {
          attack: .01,
          decay: 0,
          sustain: 1,
          release: .5
        }
      }
    }, t.DuoSynth.prototype._triggerEnvelopeAttack = function (t, e) {
      return t = this.toSeconds(t), this.voice0._triggerEnvelopeAttack(t, e), this.voice1._triggerEnvelopeAttack(t, e), this;
    }, t.DuoSynth.prototype._triggerEnvelopeRelease = function (t) {
      return this.voice0._triggerEnvelopeRelease(t), this.voice1._triggerEnvelopeRelease(t), this;
    }, t.DuoSynth.prototype.getLevelAtTime = function (t) {
      return (this.voice0.getLevelAtTime(t) + this.voice1.getLevelAtTime(t)) / 2;
    }, t.DuoSynth.prototype.dispose = function () {
      return t.Monophonic.prototype.dispose.call(this), this._writable(["voice0", "voice1", "frequency", "vibratoAmount", "vibratoRate"]), this.voice0.dispose(), this.voice0 = null, this.voice1.dispose(), this.voice1 = null, this.frequency.dispose(), this.frequency = null, this._vibratoGain.dispose(), this._vibratoGain = null, this._vibrato = null, this.harmonicity.dispose(), this.harmonicity = null, this.vibratoAmount.dispose(), this.vibratoAmount = null, this.vibratoRate = null, this;
    }, t.DuoSynth;
  }), t(function (t) {
    return t.FMSynth = function (e) {
      e = t.defaultArg(e, t.FMSynth.defaults), t.Monophonic.call(this, e), this._carrier = new t.Synth(e.carrier), this._carrier.volume.value = -10, this.oscillator = this._carrier.oscillator, this.envelope = this._carrier.envelope.set(e.envelope), this._modulator = new t.Synth(e.modulator), this._modulator.volume.value = -10, this.modulation = this._modulator.oscillator.set(e.modulation), this.modulationEnvelope = this._modulator.envelope.set(e.modulationEnvelope), this.frequency = new t.Signal(440, t.Type.Frequency), this.detune = new t.Signal(e.detune, t.Type.Cents), this.harmonicity = new t.Multiply(e.harmonicity), this.harmonicity.units = t.Type.Positive, this.modulationIndex = new t.Multiply(e.modulationIndex), this.modulationIndex.units = t.Type.Positive, this._modulationNode = new t.Gain(0), this.frequency.connect(this._carrier.frequency), this.frequency.chain(this.harmonicity, this._modulator.frequency), this.frequency.chain(this.modulationIndex, this._modulationNode), this.detune.fan(this._carrier.detune, this._modulator.detune), this._modulator.connect(this._modulationNode.gain), this._modulationNode.connect(this._carrier.frequency), this._carrier.connect(this.output), this._readOnly(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]);
    }, t.extend(t.FMSynth, t.Monophonic), t.FMSynth.defaults = {
      harmonicity: 3,
      modulationIndex: 10,
      detune: 0,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: .01,
        decay: .01,
        sustain: 1,
        release: .5
      },
      modulation: {
        type: "square"
      },
      modulationEnvelope: {
        attack: .5,
        decay: 0,
        sustain: 1,
        release: .5
      }
    }, t.FMSynth.prototype._triggerEnvelopeAttack = function (t, e) {
      return t = this.toSeconds(t), this._carrier._triggerEnvelopeAttack(t, e), this._modulator._triggerEnvelopeAttack(t), this;
    }, t.FMSynth.prototype._triggerEnvelopeRelease = function (t) {
      return t = this.toSeconds(t), this._carrier._triggerEnvelopeRelease(t), this._modulator._triggerEnvelopeRelease(t), this;
    }, t.FMSynth.prototype.dispose = function () {
      return t.Monophonic.prototype.dispose.call(this), this._writable(["frequency", "harmonicity", "modulationIndex", "oscillator", "envelope", "modulation", "modulationEnvelope", "detune"]), this._carrier.dispose(), this._carrier = null, this._modulator.dispose(), this._modulator = null, this.frequency.dispose(), this.frequency = null, this.detune.dispose(), this.detune = null, this.modulationIndex.dispose(), this.modulationIndex = null, this.harmonicity.dispose(), this.harmonicity = null, this._modulationNode.dispose(), this._modulationNode = null, this.oscillator = null, this.envelope = null, this.modulationEnvelope = null, this.modulation = null, this;
    }, t.FMSynth;
  }), t(function (t) {
    return t.MembraneSynth = function (e) {
      e = t.defaultArg(e, t.MembraneSynth.defaults), t.Instrument.call(this, e), this.oscillator = new t.OmniOscillator(e.oscillator), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.octaves = e.octaves, this.pitchDecay = e.pitchDecay, this.oscillator.chain(this.envelope, this.output), this._readOnly(["oscillator", "envelope"]);
    }, t.extend(t.MembraneSynth, t.Instrument), t.MembraneSynth.defaults = {
      pitchDecay: .05,
      octaves: 10,
      oscillator: {
        type: "sine"
      },
      envelope: {
        attack: .001,
        decay: .4,
        sustain: .01,
        release: 1.4,
        attackCurve: "exponential"
      }
    }, t.MembraneSynth.prototype.triggerAttack = function (t, e, i) {
      e = this.toSeconds(e), t = this.toFrequency(t);
      var n = t * this.octaves;
      return this.oscillator.frequency.setValueAtTime(n, e), this.oscillator.frequency.exponentialRampToValueAtTime(t, e + this.toSeconds(this.pitchDecay)), this.envelope.triggerAttack(e, i), this.oscillator.start(e), this;
    }, t.MembraneSynth.prototype.triggerRelease = function (t) {
      return t = this.toSeconds(t), this.envelope.triggerRelease(t), this.oscillator.stop(t + this.envelope.release), this;
    }, t.MembraneSynth.prototype.dispose = function () {
      return t.Instrument.prototype.dispose.call(this), this._writable(["oscillator", "envelope"]), this.oscillator.dispose(), this.oscillator = null, this.envelope.dispose(), this.envelope = null, this;
    }, t.MembraneSynth;
  }), t(function (t) {
    var e = [1, 1.483, 1.932, 2.546, 2.63, 3.897];
    return t.MetalSynth = function (i) {
      var n, s, o;

      for (i = t.defaultArg(i, t.MetalSynth.defaults), t.Instrument.call(this, i), this.frequency = new t.Signal(i.frequency, t.Type.Frequency), this._oscillators = [], this._freqMultipliers = [], this._amplitue = new t.Gain(0).connect(this.output), this._highpass = new t.Filter({
        type: "highpass",
        Q: -3.0102999566398125
      }).connect(this._amplitue), this._octaves = i.octaves, this._filterFreqScaler = new t.Scale(i.resonance, 7e3), this.envelope = new t.Envelope({
        attack: i.envelope.attack,
        attackCurve: "linear",
        decay: i.envelope.decay,
        sustain: 0,
        release: i.envelope.release
      }).chain(this._filterFreqScaler, this._highpass.frequency), this.envelope.connect(this._amplitue.gain), n = 0; n < e.length; n++) {
        s = new t.FMOscillator({
          type: "square",
          modulationType: "square",
          harmonicity: i.harmonicity,
          modulationIndex: i.modulationIndex
        }), s.connect(this._highpass), this._oscillators[n] = s, o = new t.Multiply(e[n]), this._freqMultipliers[n] = o, this.frequency.chain(o, s.frequency);
      }

      this.octaves = i.octaves;
    }, t.extend(t.MetalSynth, t.Instrument), t.MetalSynth.defaults = {
      frequency: 200,
      envelope: {
        attack: .001,
        decay: 1.4,
        release: .2
      },
      harmonicity: 5.1,
      modulationIndex: 32,
      resonance: 4e3,
      octaves: 1.5
    }, t.MetalSynth.prototype.triggerAttack = function (e, i) {
      return e = this.toSeconds(e), i = t.defaultArg(i, 1), this.envelope.triggerAttack(e, i), this._oscillators.forEach(function (t) {
        t.start(e);
      }), 0 === this.envelope.sustain && this._oscillators.forEach(function (t) {
        t.stop(e + this.envelope.attack + this.envelope.decay);
      }.bind(this)), this;
    }, t.MetalSynth.prototype.triggerRelease = function (t) {
      return t = this.toSeconds(t), this.envelope.triggerRelease(t), this._oscillators.forEach(function (e) {
        e.stop(t + this.envelope.release);
      }.bind(this)), this;
    }, t.MetalSynth.prototype.sync = function () {
      return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this;
    }, t.MetalSynth.prototype.triggerAttackRelease = function (t, e, i) {
      return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, i), this.triggerRelease(e + t), this;
    }, Object.defineProperty(t.MetalSynth.prototype, "modulationIndex", {
      get: function get() {
        return this._oscillators[0].modulationIndex.value;
      },
      set: function set(t) {
        for (var e = 0; e < this._oscillators.length; e++) {
          this._oscillators[e].modulationIndex.value = t;
        }
      }
    }), Object.defineProperty(t.MetalSynth.prototype, "harmonicity", {
      get: function get() {
        return this._oscillators[0].harmonicity.value;
      },
      set: function set(t) {
        for (var e = 0; e < this._oscillators.length; e++) {
          this._oscillators[e].harmonicity.value = t;
        }
      }
    }), Object.defineProperty(t.MetalSynth.prototype, "resonance", {
      get: function get() {
        return this._filterFreqScaler.min;
      },
      set: function set(t) {
        this._filterFreqScaler.min = t, this.octaves = this._octaves;
      }
    }), Object.defineProperty(t.MetalSynth.prototype, "octaves", {
      get: function get() {
        return this._octaves;
      },
      set: function set(t) {
        this._octaves = t, this._filterFreqScaler.max = this._filterFreqScaler.min * Math.pow(2, t);
      }
    }), t.MetalSynth.prototype.dispose = function () {
      t.Instrument.prototype.dispose.call(this);

      for (var e = 0; e < this._oscillators.length; e++) {
        this._oscillators[e].dispose(), this._freqMultipliers[e].dispose();
      }

      this._oscillators = null, this._freqMultipliers = null, this.frequency.dispose(), this.frequency = null, this._filterFreqScaler.dispose(), this._filterFreqScaler = null, this._amplitue.dispose(), this._amplitue = null, this.envelope.dispose(), this.envelope = null, this._highpass.dispose(), this._highpass = null;
    }, t.MetalSynth;
  }), t(function (t) {
    return t.NoiseSynth = function (e) {
      e = t.defaultArg(e, t.NoiseSynth.defaults), t.Instrument.call(this, e), this.noise = new t.Noise(), this.envelope = new t.AmplitudeEnvelope(e.envelope), this.noise.chain(this.envelope, this.output), this._readOnly(["noise", "envelope"]);
    }, t.extend(t.NoiseSynth, t.Instrument), t.NoiseSynth.defaults = {
      noise: {
        type: "white"
      },
      envelope: {
        attack: .005,
        decay: .1,
        sustain: 0
      }
    }, t.NoiseSynth.prototype.triggerAttack = function (t, e) {
      return this.envelope.triggerAttack(t, e), this.noise.start(t), 0 === this.envelope.sustain && this.noise.stop(t = this.envelope.attack + this.envelope.decay), this;
    }, t.NoiseSynth.prototype.triggerRelease = function (t) {
      return this.envelope.triggerRelease(t), this.noise.stop(t + this.envelope.release), this;
    }, t.NoiseSynth.prototype.sync = function () {
      return this._syncMethod("triggerAttack", 0), this._syncMethod("triggerRelease", 0), this;
    }, t.NoiseSynth.prototype.triggerAttackRelease = function (t, e, i) {
      return e = this.toSeconds(e), t = this.toSeconds(t), this.triggerAttack(e, i), this.triggerRelease(e + t), this;
    }, t.NoiseSynth.prototype.dispose = function () {
      return t.Instrument.prototype.dispose.call(this), this._writable(["noise", "envelope"]), this.noise.dispose(), this.noise = null, this.envelope.dispose(), this.envelope = null, this;
    }, t.NoiseSynth;
  }), t(function (t) {
    return t.PluckSynth = function (e) {
      e = t.defaultArg(e, t.PluckSynth.defaults), t.Instrument.call(this, e), this._noise = new t.Noise("pink"), this.attackNoise = e.attackNoise, this._lfcf = new t.LowpassCombFilter({
        resonance: e.resonance,
        dampening: e.dampening
      }), this.resonance = this._lfcf.resonance, this.dampening = this._lfcf.dampening, this._noise.connect(this._lfcf), this._lfcf.connect(this.output), this._readOnly(["resonance", "dampening"]);
    }, t.extend(t.PluckSynth, t.Instrument), t.PluckSynth.defaults = {
      attackNoise: 1,
      dampening: 4e3,
      resonance: .7
    }, t.PluckSynth.prototype.triggerAttack = function (t, e) {
      t = this.toFrequency(t), e = this.toSeconds(e);
      var i = 1 / t;
      return this._lfcf.delayTime.setValueAtTime(i, e), this._noise.start(e), this._noise.stop(e + i * this.attackNoise), this;
    }, t.PluckSynth.prototype.dispose = function () {
      return t.Instrument.prototype.dispose.call(this), this._noise.dispose(), this._lfcf.dispose(), this._noise = null, this._lfcf = null, this._writable(["resonance", "dampening"]), this.dampening = null, this.resonance = null, this;
    }, t.PluckSynth;
  }), t(function (t) {
    return t.PolySynth = function () {
      var e,
          i,
          n = t.defaults(arguments, ["polyphony", "voice"], t.PolySynth);

      for (t.Instrument.call(this, n), n = t.defaultArg(n, t.Instrument.defaults), n.polyphony = Math.min(t.PolySynth.MAX_POLYPHONY, n.polyphony), this.voices = new Array(n.polyphony), this._triggers = new Array(n.polyphony), this.detune = new t.Signal(n.detune, t.Type.Cents), this._readOnly("detune"), e = 0; e < n.polyphony; e++) {
        if (!((i = new n.voice(arguments[2], arguments[3])) instanceof t.Monophonic)) throw new Error("Synth constructor must be instance of Tone.Monophonic");
        this.voices[e] = i, i.connect(this.output), i.hasOwnProperty("detune") && this.detune.connect(i.detune), this._triggers[e] = {
          release: -1,
          note: null,
          voice: i
        };
      }
    }, t.extend(t.PolySynth, t.Instrument), t.PolySynth.defaults = {
      polyphony: 4,
      volume: 0,
      detune: 0,
      voice: t.Synth
    }, t.PolySynth.prototype.triggerAttack = function (t, e, i) {
      var n, s, o, r;

      for (Array.isArray(t) || (t = [t]), e = this.toSeconds(e), n = 0; n < t.length; n++) {
        for (s = t[n], o = this._triggers[0], r = 1; r < this._triggers.length; r++) {
          this._triggers[r].release < o.release && (o = this._triggers[r]);
        }

        o.release = 1 / 0, o.note = JSON.stringify(s), o.voice.triggerAttack(s, e, i);
      }

      return this;
    }, t.PolySynth.prototype.triggerAttackRelease = function (e, i, n, s) {
      var o, r;
      if (n = this.toSeconds(n), this.triggerAttack(e, n, s), t.isArray(i) && t.isArray(e)) for (o = 0; o < e.length; o++) {
        r = i[Math.min(o, i.length - 1)], this.triggerRelease(e[o], n + this.toSeconds(r));
      } else this.triggerRelease(e, n + this.toSeconds(i));
      return this;
    }, t.PolySynth.prototype.triggerRelease = function (t, e) {
      var i, n, s, o;

      for (Array.isArray(t) || (t = [t]), e = this.toSeconds(e), i = 0; i < t.length; i++) {
        for (n = JSON.stringify(t[i]), s = 0; s < this._triggers.length; s++) {
          o = this._triggers[s], o.note === n && o.release > e && (o.voice.triggerRelease(e), o.release = e);
        }
      }

      return this;
    }, t.PolySynth.prototype.sync = function () {
      return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this;
    }, t.PolySynth.prototype.set = function (t, e, i) {
      for (var n = 0; n < this.voices.length; n++) {
        this.voices[n].set(t, e, i);
      }

      return this;
    }, t.PolySynth.prototype.get = function (t) {
      return this.voices[0].get(t);
    }, t.PolySynth.prototype.releaseAll = function (t) {
      var e, i;

      for (t = this.toSeconds(t), e = 0; e < this._triggers.length; e++) {
        i = this._triggers[e], i.release > t && (i.release = t, i.voice.triggerRelease(t));
      }

      return this;
    }, t.PolySynth.prototype.dispose = function () {
      t.Instrument.prototype.dispose.call(this);

      for (var e = 0; e < this.voices.length; e++) {
        this.voices[e].dispose(), this.voices[e] = null;
      }

      return this._writable("detune"), this.detune.dispose(), this.detune = null, this.voices = null, this._triggers = null, this;
    }, t.PolySynth.MAX_POLYPHONY = 20, t.PolySynth;
  }), t(function (t) {
    return t.Sampler = function (e) {
      var i,
          n,
          s,
          o,
          r = Array.prototype.slice.call(arguments);
      r.shift(), i = t.defaults(r, ["onload", "baseUrl"], t.Sampler), t.Instrument.call(this, i), n = {};

      for (s in e) {
        if (t.isNote(s)) o = t.Frequency(s).toMidi(), n[o] = e[s];else {
          if (isNaN(parseFloat(s))) throw new Error("Tone.Sampler: url keys must be the note's pitch");
          n[s] = e[s];
        }
      }

      this._buffers = new t.Buffers(n, i.onload, i.baseUrl), this._activeSources = {}, this.attack = i.attack, this.release = i.release;
    }, t.extend(t.Sampler, t.Instrument), t.Sampler.defaults = {
      attack: 0,
      release: .1,
      onload: t.noOp,
      baseUrl: ""
    }, t.Sampler.prototype._findClosest = function (t) {
      for (var e = 96, i = 0; i < e;) {
        if (this._buffers.has(t + i)) return -i;
        if (this._buffers.has(t - i)) return i;
        i++;
      }

      return null;
    }, t.Sampler.prototype.triggerAttack = function (e, i, n) {
      var s,
          o,
          r,
          a = t.Frequency(e).toMidi(),
          h = this._findClosest(a);

      return null !== h && (s = a - h, o = this._buffers.get(s), r = new t.BufferSource({
        buffer: o,
        playbackRate: t.intervalToFrequencyRatio(h),
        fadeIn: this.attack,
        fadeOut: this.release,
        curve: "exponential"
      }).connect(this.output), r.start(i, 0, o.duration, n), t.isArray(this._activeSources[a]) || (this._activeSources[a] = []), this._activeSources[a].push({
        note: a,
        source: r
      })), this;
    }, t.Sampler.prototype.triggerRelease = function (e, i) {
      var n,
          s = t.Frequency(e).toMidi();
      return this._activeSources[s] && this._activeSources[s].length && (n = this._activeSources[s].shift().source, i = this.toSeconds(i), n.stop(i + this.release, this.release)), this;
    }, t.Sampler.prototype.releaseAll = function (t) {
      var e, i, n;
      t = this.toSeconds(t);

      for (e in this._activeSources) {
        for (i = this._activeSources[e]; i.length;) {
          n = i.shift().source, n.stop(t + this.release, this.release);
        }
      }

      return this;
    }, t.Sampler.prototype.sync = function () {
      return this._syncMethod("triggerAttack", 1), this._syncMethod("triggerRelease", 1), this;
    }, t.Sampler.prototype.triggerAttackRelease = function (t, e, i, n) {
      return i = this.toSeconds(i), e = this.toSeconds(e), this.triggerAttack(t, i, n), this.triggerRelease(t, i + e), this;
    }, t.Sampler.prototype.add = function (e, i, n) {
      if (t.isNote(e)) {
        var s = t.Frequency(e).toMidi();

        this._buffers.add(s, i, n);
      } else {
        if (isNaN(parseFloat(e))) throw new Error("Tone.Sampler: note must be the note's pitch. Instead got " + e);

        this._buffers.add(e, i, n);
      }
    }, Object.defineProperty(t.Sampler.prototype, "loaded", {
      get: function get() {
        return this._buffers.loaded;
      }
    }), t.Sampler.prototype.dispose = function () {
      t.Instrument.prototype.dispose.call(this), this._buffers.dispose(), this._buffers = null;

      for (var e in this._activeSources) {
        this._activeSources[e].forEach(function (t) {
          t.source.dispose();
        });
      }

      return this._activeSources = null, this;
    }, t.Sampler;
  }), t(function (t) {
    t.supported && (OscillatorNode.prototype.setPeriodicWave || (OscillatorNode.prototype.setPeriodicWave = OscillatorNode.prototype.setWaveTable), AudioContext.prototype.createPeriodicWave || (AudioContext.prototype.createPeriodicWave = AudioContext.prototype.createWaveTable));
  }), t(function (t) {
    return t.GainToAudio = function () {
      t.SignalBase.call(this), this._norm = this.input = this.output = new t.WaveShaper(function (t) {
        return 2 * Math.abs(t) - 1;
      });
    }, t.extend(t.GainToAudio, t.SignalBase), t.GainToAudio.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._norm.dispose(), this._norm = null, this;
    }, t.GainToAudio;
  }), t(function (t) {
    return t.Normalize = function (e, i) {
      t.SignalBase.call(this), this._inputMin = t.defaultArg(e, 0), this._inputMax = t.defaultArg(i, 1), this._sub = this.input = new t.Add(0), this._div = this.output = new t.Multiply(1), this._sub.connect(this._div), this._setRange();
    }, t.extend(t.Normalize, t.SignalBase), Object.defineProperty(t.Normalize.prototype, "min", {
      get: function get() {
        return this._inputMin;
      },
      set: function set(t) {
        this._inputMin = t, this._setRange();
      }
    }), Object.defineProperty(t.Normalize.prototype, "max", {
      get: function get() {
        return this._inputMax;
      },
      set: function set(t) {
        this._inputMax = t, this._setRange();
      }
    }), t.Normalize.prototype._setRange = function () {
      this._sub.value = -this._inputMin, this._div.value = 1 / (this._inputMax - this._inputMin);
    }, t.Normalize.prototype.dispose = function () {
      return t.SignalBase.prototype.dispose.call(this), this._sub.dispose(), this._sub = null, this._div.dispose(), this._div = null, this;
    }, t.Normalize;
  }), t(function (t) {
    return t.TransportTimelineSignal = function () {
      t.Signal.apply(this, arguments), this.output = this._outputSig = new t.Signal(this._initialValue), this._lastVal = this.value, this._synced = t.Transport.scheduleRepeat(this._onTick.bind(this), "1i"), this._bindAnchorValue = this._anchorValue.bind(this), t.Transport.on("start stop pause", this._bindAnchorValue), this._events.memory = 1 / 0;
    }, t.extend(t.TransportTimelineSignal, t.Signal), t.TransportTimelineSignal.prototype._onTick = function (e) {
      var i = this.getValueAtTime(t.Transport.seconds);
      this._lastVal !== i && (this._lastVal = i, this._outputSig.linearRampToValueAtTime(i, e));
    }, t.TransportTimelineSignal.prototype._anchorValue = function (e) {
      var i = this.getValueAtTime(t.Transport.seconds);
      return this._lastVal = i, this._outputSig.cancelScheduledValues(e), this._outputSig.setValueAtTime(i, e), this;
    }, t.TransportTimelineSignal.prototype.getValueAtTime = function (e) {
      return e = t.TransportTime(e), t.Signal.prototype.getValueAtTime.call(this, e);
    }, t.TransportTimelineSignal.prototype.setValueAtTime = function (e, i) {
      return i = t.TransportTime(i), t.Signal.prototype.setValueAtTime.call(this, e, i), this;
    }, t.TransportTimelineSignal.prototype.linearRampToValueAtTime = function (e, i) {
      return i = t.TransportTime(i), t.Signal.prototype.linearRampToValueAtTime.call(this, e, i), this;
    }, t.TransportTimelineSignal.prototype.exponentialRampToValueAtTime = function (e, i) {
      return i = t.TransportTime(i), t.Signal.prototype.exponentialRampToValueAtTime.call(this, e, i), this;
    }, t.TransportTimelineSignal.prototype.setTargetAtTime = function (e, i, n) {
      return i = t.TransportTime(i), t.Signal.prototype.setTargetAtTime.call(this, e, i, n), this;
    }, t.TransportTimelineSignal.prototype.cancelScheduledValues = function (e) {
      return e = t.TransportTime(e), t.Signal.prototype.cancelScheduledValues.call(this, e), this;
    }, t.TransportTimelineSignal.prototype.setValueCurveAtTime = function (e, i, n, s) {
      return i = t.TransportTime(i), n = t.TransportTime(n), t.Signal.prototype.setValueCurveAtTime.call(this, e, i, n, s), this;
    }, t.TransportTimelineSignal.prototype.cancelAndHoldAtTime = function (e) {
      return t.Signal.prototype.cancelAndHoldAtTime.call(this, t.TransportTime(e));
    }, t.TransportTimelineSignal.prototype.dispose = function () {
      t.Transport.clear(this._synced), t.Transport.off("start stop pause", this._syncedCallback), this._events.cancel(0), t.Signal.prototype.dispose.call(this), this._outputSig.dispose(), this._outputSig = null;
    }, t.TransportTimelineSignal;
  }), t(function (t) {
    return t.GrainPlayer = function () {
      var e = t.defaults(arguments, ["url", "onload"], t.GrainPlayer);
      t.Source.call(this, e), this.buffer = new t.Buffer(e.url, e.onload), this._clock = new t.Clock(this._tick.bind(this), e.grainSize), this._loopStart = 0, this._loopEnd = 0, this._activeSources = [], this._playbackRate = e.playbackRate, this._grainSize = e.grainSize, this._overlap = e.overlap, this.detune = e.detune, this.overlap = e.overlap, this.loop = e.loop, this.playbackRate = e.playbackRate, this.grainSize = e.grainSize, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.reverse = e.reverse, this._clock.on("stop", this._onstop.bind(this));
    }, t.extend(t.GrainPlayer, t.Source), t.GrainPlayer.defaults = {
      onload: t.noOp,
      overlap: .1,
      grainSize: .2,
      playbackRate: 1,
      detune: 0,
      loop: !1,
      loopStart: 0,
      loopEnd: 0,
      reverse: !1
    }, t.GrainPlayer.prototype._start = function (e, i, n) {
      i = t.defaultArg(i, 0), i = this.toSeconds(i), e = this.toSeconds(e), this._offset = i, this._clock.start(e), n && this.stop(e + this.toSeconds(n));
    }, t.GrainPlayer.prototype._stop = function (t) {
      this._clock.stop(t);
    }, t.GrainPlayer.prototype._onstop = function (t) {
      this._activeSources.forEach(function (e) {
        e.stop(t, 0);
      });
    }, t.GrainPlayer.prototype._tick = function (e) {
      var i = this._offset < this._overlap ? 0 : this._overlap,
          n = new t.BufferSource({
        buffer: this.buffer,
        fadeIn: i,
        fadeOut: this._overlap,
        loop: this.loop,
        loopStart: this._loopStart,
        loopEnd: this._loopEnd,
        playbackRate: t.intervalToFrequencyRatio(this.detune / 100)
      }).connect(this.output);
      n.start(e, this._offset), this._offset += this.grainSize, n.stop(e + this.grainSize), this._activeSources.push(n), n.onended = function () {
        var t = this._activeSources.indexOf(n);

        -1 !== t && this._activeSources.splice(t, 1);
      }.bind(this);
    }, t.GrainPlayer.prototype.seek = function (t, e) {
      return this._offset = this.toSeconds(t), this._tick(this.toSeconds(e)), this;
    }, Object.defineProperty(t.GrainPlayer.prototype, "playbackRate", {
      get: function get() {
        return this._playbackRate;
      },
      set: function set(t) {
        this._playbackRate = t, this.grainSize = this._grainSize;
      }
    }), Object.defineProperty(t.GrainPlayer.prototype, "loopStart", {
      get: function get() {
        return this._loopStart;
      },
      set: function set(t) {
        this._loopStart = this.toSeconds(t);
      }
    }), Object.defineProperty(t.GrainPlayer.prototype, "loopEnd", {
      get: function get() {
        return this._loopEnd;
      },
      set: function set(t) {
        this._loopEnd = this.toSeconds(t);
      }
    }), Object.defineProperty(t.GrainPlayer.prototype, "reverse", {
      get: function get() {
        return this.buffer.reverse;
      },
      set: function set(t) {
        this.buffer.reverse = t;
      }
    }), Object.defineProperty(t.GrainPlayer.prototype, "grainSize", {
      get: function get() {
        return this._grainSize;
      },
      set: function set(t) {
        this._grainSize = this.toSeconds(t), this._clock.frequency.value = this._playbackRate / this._grainSize;
      }
    }), Object.defineProperty(t.GrainPlayer.prototype, "overlap", {
      get: function get() {
        return this._overlap;
      },
      set: function set(t) {
        this._overlap = this.toSeconds(t);
      }
    }), t.GrainPlayer.prototype.dispose = function () {
      return t.Source.prototype.dispose.call(this), this.buffer.dispose(), this.buffer = null, this._clock.dispose(), this._clock = null, this._activeSources.forEach(function (t) {
        t.dispose();
      }), this._activeSources = null, this;
    }, t.GrainPlayer;
  }), t(function (t) {
    return t.Player = function (e) {
      var i;
      e instanceof t.Buffer && e.loaded ? (e = e.get(), i = t.Player.defaults) : i = t.defaults(arguments, ["url", "onload"], t.Player), t.Source.call(this, i), this.autostart = i.autostart, this._buffer = new t.Buffer({
        url: i.url,
        onload: this._onload.bind(this, i.onload),
        reverse: i.reverse
      }), e instanceof AudioBuffer && this._buffer.set(e), this._loop = i.loop, this._loopStart = i.loopStart, this._loopEnd = i.loopEnd, this._playbackRate = i.playbackRate, this._activeSources = [], this._elapsedTime = new t.TickSource(i.playbackRate), this.fadeIn = i.fadeIn, this.fadeOut = i.fadeOut;
    }, t.extend(t.Player, t.Source), t.Player.defaults = {
      onload: t.noOp,
      playbackRate: 1,
      loop: !1,
      autostart: !1,
      loopStart: 0,
      loopEnd: 0,
      retrigger: !1,
      reverse: !1,
      fadeIn: 0,
      fadeOut: 0
    }, t.Player.prototype.load = function (t, e) {
      return this._buffer.load(t, this._onload.bind(this, e));
    }, t.Player.prototype._onload = function (e) {
      e = t.defaultArg(e, t.noOp), e(this), this.autostart && this.start();
    }, t.Player.prototype._onSourceEnd = function (t) {
      var e = this._activeSources.indexOf(t);

      this._activeSources.splice(e, 1);
    }, t.Player.prototype._start = function (e, i, n) {
      var s, o;
      return i = this._loop ? t.defaultArg(i, this._loopStart) : t.defaultArg(i, 0), i = this.toSeconds(i), s = t.defaultArg(n, Math.max(this._buffer.duration - i, 0)), s = this.toSeconds(s), e = this.toSeconds(e), this._elapsedTime.start(e, i), o = new t.BufferSource({
        buffer: this._buffer,
        loop: this._loop,
        loopStart: this._loopStart,
        loopEnd: this._loopEnd,
        onended: this._onSourceEnd.bind(this),
        playbackRate: this._playbackRate,
        fadeIn: this.fadeIn,
        fadeOut: this.fadeOut
      }).connect(this.output), this._loop || this._synced || this._state.setStateAtTime(t.State.Stopped, e + s / this._playbackRate), this._activeSources.push(o), this._loop && t.isUndef(n) ? o.start(e, i) : o.start(e, i, s), this;
    }, t.Player.prototype._stop = function (t) {
      return t = this.toSeconds(t), this._elapsedTime.stop(t), this._activeSources.forEach(function (e) {
        e.stop(t);
      }), this;
    }, t.Player.prototype.restart = function (t, e, i) {
      return this._stop(t), this._start(t, e, i), this;
    }, t.Player.prototype.seek = function (e, i) {
      return i = this.toSeconds(i), this._state.getValueAtTime(i) === t.State.Started && (e = this.toSeconds(e), this._stop(i), this._start(i, e)), this;
    }, t.Player.prototype.setLoopPoints = function (t, e) {
      return this.loopStart = t, this.loopEnd = e, this;
    }, Object.defineProperty(t.Player.prototype, "loopStart", {
      get: function get() {
        return this._loopStart;
      },
      set: function set(t) {
        this._loopStart = t, this._activeSources.forEach(function (e) {
          e.loopStart = t;
        });
      }
    }), Object.defineProperty(t.Player.prototype, "loopEnd", {
      get: function get() {
        return this._loopEnd;
      },
      set: function set(t) {
        this._loopEnd = t, this._activeSources.forEach(function (e) {
          e.loopEnd = t;
        });
      }
    }), Object.defineProperty(t.Player.prototype, "buffer", {
      get: function get() {
        return this._buffer;
      },
      set: function set(t) {
        this._buffer.set(t);
      }
    }), Object.defineProperty(t.Player.prototype, "loop", {
      get: function get() {
        return this._loop;
      },
      set: function set(e) {
        var i, n;
        this._loop !== e && (this._loop = e, i = this.now(), e ? (n = this._state.getNextState(t.State.Stopped, i)) && (this._activeSources.forEach(function (t) {
          t.loop = e;
        }), this._state.cancel(n.time), this._elapsedTime.cancel(n.time)) : this._stopAtNextIteration(i));
      }
    }), t.Player.prototype._stopAtNextIteration = function (e) {
      var i, n, s, o;
      this._state.getValueAtTime(e) === t.State.Started && (i = this._state.getNextState(t.State.Stopped, e), n = this._elapsedTime.getTicksAtTime(e), s = Math.max(Math.ceil(n / this.buffer.duration), 1), o = this._elapsedTime.getTimeOfTick(s * this.buffer.duration, i ? i.time - this.sampleTime : 1 / 0), this.stop(o));
    }, Object.defineProperty(t.Player.prototype, "playbackRate", {
      get: function get() {
        return this._playbackRate;
      },
      set: function set(t) {
        this._playbackRate = t;
        var e = this.now();
        this._elapsedTime.frequency.setValueAtTime(t, e), this._loop || this._stopAtNextIteration(e), this._activeSources.forEach(function (i) {
          i.playbackRate.setValueAtTime(t, e);
        });
      }
    }), Object.defineProperty(t.Player.prototype, "position", {
      get: function get() {
        var e,
            i = this.now();
        return this._state.getValueAtTime(i) === t.State.Started && this.loaded ? (e = this.buffer.duration, this._elapsedTime.getTicksAtTime(i) % e) : 0;
      }
    }), Object.defineProperty(t.Player.prototype, "reverse", {
      get: function get() {
        return this._buffer.reverse;
      },
      set: function set(t) {
        this._buffer.reverse = t;
      }
    }), Object.defineProperty(t.Player.prototype, "loaded", {
      get: function get() {
        return this._buffer.loaded;
      }
    }), t.Player.prototype.dispose = function () {
      return this._activeSources.forEach(function (t) {
        t.dispose();
      }), this._activeSources = null, t.Source.prototype.dispose.call(this), this._buffer.dispose(), this._buffer = null, this._elapsedTime.dispose(), this._elapsedTime = null, this;
    }, t.Player;
  }), t(function (t) {
    return t.Players = function (e) {
      var i,
          n,
          s = Array.prototype.slice.call(arguments);
      s.shift(), i = t.defaults(s, ["onload"], t.Players), t.call(this), this._volume = this.output = new t.Volume(i.volume), this.volume = this._volume.volume, this._readOnly("volume"), this._volume.output.output.channelCount = 2, this._volume.output.output.channelCountMode = "explicit", this.mute = i.mute, this._players = {}, this._loadingCount = 0, this._fadeIn = i.fadeIn, this._fadeOut = i.fadeOut;

      for (n in e) {
        this._loadingCount++, this.add(n, e[n], this._bufferLoaded.bind(this, i.onload));
      }
    }, t.extend(t.Players, t.AudioNode), t.Players.defaults = {
      volume: 0,
      mute: !1,
      onload: t.noOp,
      fadeIn: 0,
      fadeOut: 0
    }, t.Players.prototype._bufferLoaded = function (t) {
      0 === --this._loadingCount && t && t(this);
    }, Object.defineProperty(t.Players.prototype, "mute", {
      get: function get() {
        return this._volume.mute;
      },
      set: function set(t) {
        this._volume.mute = t;
      }
    }), Object.defineProperty(t.Players.prototype, "fadeIn", {
      get: function get() {
        return this._fadeIn;
      },
      set: function set(t) {
        this._fadeIn = t, this._forEach(function (e) {
          e.fadeIn = t;
        });
      }
    }), Object.defineProperty(t.Players.prototype, "fadeOut", {
      get: function get() {
        return this._fadeOut;
      },
      set: function set(t) {
        this._fadeOut = t, this._forEach(function (e) {
          e.fadeOut = t;
        });
      }
    }), Object.defineProperty(t.Players.prototype, "state", {
      get: function get() {
        var e = !1;
        return this._forEach(function (i) {
          e = e || i.state === t.State.Started;
        }), e ? t.State.Started : t.State.Stopped;
      }
    }), t.Players.prototype.has = function (t) {
      return this._players.hasOwnProperty(t);
    }, t.Players.prototype.get = function (t) {
      if (this.has(t)) return this._players[t];
      throw new Error("Tone.Players: no player named " + t);
    }, t.Players.prototype._forEach = function (t) {
      for (var e in this._players) {
        t(this._players[e], e);
      }

      return this;
    }, Object.defineProperty(t.Players.prototype, "loaded", {
      get: function get() {
        var t = !0;
        return this._forEach(function (e) {
          t = t && e.loaded;
        }), t;
      }
    }), t.Players.prototype.add = function (e, i, n) {
      return this._players[e] = new t.Player(i, n).connect(this.output), this._players[e].fadeIn = this._fadeIn, this._players[e].fadeOut = this._fadeOut, this;
    }, t.Players.prototype.stopAll = function (t) {
      this._forEach(function (e) {
        e.stop(t);
      });
    }, t.Players.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this._volume.dispose(), this._volume = null, this._writable("volume"), this.volume = null, this.output = null, this._forEach(function (t) {
        t.dispose();
      }), this._players = null, this;
    }, t.Players;
  }), t(function (t) {
    return t.UserMedia = function () {
      var e = t.defaults(arguments, ["volume"], t.UserMedia);
      t.AudioNode.call(this), this._mediaStream = null, this._stream = null, this._device = null, this._volume = this.output = new t.Volume(e.volume), this.volume = this._volume.volume, this._readOnly("volume"), this.mute = e.mute;
    }, t.extend(t.UserMedia, t.AudioNode), t.UserMedia.defaults = {
      volume: 0,
      mute: !1
    }, t.UserMedia.prototype.open = function (e) {
      return t.UserMedia.enumerateDevices().then(function (i) {
        var n, s;
        if (t.isNumber(e)) n = i[e];else if (!(n = i.find(function (t) {
          return t.label === e || t.deviceId === e;
        })) && i.length > 0) n = i[0];else if (!n && t.isDefined(e)) throw new Error("Tone.UserMedia: no matching device: " + e);
        return this._device = n, s = {
          audio: {
            echoCancellation: !1,
            sampleRate: this.context.sampleRate
          }
        }, n && (s.audio.deviceId = n.deviceId), navigator.mediaDevices.getUserMedia(s).then(function (t) {
          return this._stream || (this._stream = t, this._mediaStream = this.context.createMediaStreamSource(t), this._mediaStream.connect(this.output)), this;
        }.bind(this));
      }.bind(this));
    }, t.UserMedia.prototype.close = function () {
      return this._stream && (this._stream.getAudioTracks().forEach(function (t) {
        t.stop();
      }), this._stream = null, this._mediaStream.disconnect(), this._mediaStream = null), this._device = null, this;
    }, t.UserMedia.enumerateDevices = function () {
      return navigator.mediaDevices.enumerateDevices().then(function (t) {
        return t.filter(function (t) {
          return "audioinput" === t.kind;
        });
      });
    }, Object.defineProperty(t.UserMedia.prototype, "state", {
      get: function get() {
        return this._stream && this._stream.active ? t.State.Started : t.State.Stopped;
      }
    }), Object.defineProperty(t.UserMedia.prototype, "deviceId", {
      get: function get() {
        if (this._device) return this._device.deviceId;
      }
    }), Object.defineProperty(t.UserMedia.prototype, "groupId", {
      get: function get() {
        if (this._device) return this._device.groupId;
      }
    }), Object.defineProperty(t.UserMedia.prototype, "label", {
      get: function get() {
        if (this._device) return this._device.label;
      }
    }), Object.defineProperty(t.UserMedia.prototype, "mute", {
      get: function get() {
        return this._volume.mute;
      },
      set: function set(t) {
        this._volume.mute = t;
      }
    }), t.UserMedia.prototype.dispose = function () {
      return t.AudioNode.prototype.dispose.call(this), this.close(), this._writable("volume"), this._volume.dispose(), this._volume = null, this.volume = null, this;
    }, Object.defineProperty(t.UserMedia, "supported", {
      get: function get() {
        return t.isDefined(navigator.mediaDevices) && t.isFunction(navigator.mediaDevices.getUserMedia);
      }
    }), t.UserMedia;
  }), t(function (t) {
    return t.Midi = function (e, i) {
      if (!(this instanceof t.Midi)) return new t.Midi(e, i);
      t.Frequency.call(this, e, i);
    }, t.extend(t.Midi, t.Frequency), t.Midi.prototype._defaultUnits = "midi", t.Midi.prototype._frequencyToUnits = function (e) {
      return t.Frequency.ftom(t.Frequency.prototype._frequencyToUnits.call(this, e));
    }, t.Midi.prototype._ticksToUnits = function (e) {
      return t.Frequency.ftom(t.Frequency.prototype._ticksToUnits.call(this, e));
    }, t.Midi.prototype._beatsToUnits = function (e) {
      return t.Frequency.ftom(t.Frequency.prototype._beatsToUnits.call(this, e));
    }, t.Midi.prototype._secondsToUnits = function (e) {
      return t.Frequency.ftom(t.Frequency.prototype._secondsToUnits.call(this, e));
    }, t.Midi.prototype.toMidi = function () {
      return this.valueOf();
    }, t.Midi.prototype.toFrequency = function () {
      return t.Frequency.mtof(this.toMidi());
    }, t.Midi.prototype.transpose = function (t) {
      return new this.constructor(this.toMidi() + t);
    }, t.Midi;
  }), e;
});
},{}],"projects/klav/jquery.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";

  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      s = n.push,
      u = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      p = f.toString,
      d = p.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      y = function e(t) {
    return null != t && t === t.window;
  },
      v = {
    type: !0,
    src: !0,
    noModule: !0
  };

  function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");
    if (o.text = e, n) for (i in v) {
      n[i] && (o[i] = n[i]);
    }
    t.head.appendChild(o).parentNode.removeChild(o);
  }

  function x(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? l[c.call(e)] || "object" : _typeof(e);
  }

  var b = "3.3.1",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  w.fn = w.prototype = {
    jquery: "3.3.1",
    constructor: w,
    length: 0,
    toArray: function toArray() {
      return o.call(this);
    },
    get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return w.each(this, e);
    },
    map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice
  }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, w.extend({
    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e) {
      m(e);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (C(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(T, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : u.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
        (r = !t(e[o], o)) !== s && i.push(e[o]);
      }

      return i;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          s = [];
      if (C(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && s.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && s.push(i);
      }
      return a.apply([], s);
    },
    guid: 1,
    support: h
  }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });

  function C(e) {
    var t = !!e && "length" in e && e.length,
        n = x(e);
    return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }

  var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y,
        v,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function D(e, t) {
      return e === t && (f = !0), 0;
    },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
        W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
      ID: new RegExp("^#(" + R + ")"),
      CLASS: new RegExp("^\\.(" + R + ")"),
      TAG: new RegExp("^(" + R + "|[*])"),
      ATTR: new RegExp("^" + I),
      PSEUDO: new RegExp("^" + W),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + P + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;
      return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      p();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      L.apply(A = H.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType;
    } catch (e) {
      L = {
        apply: A.length ? function (e, t) {
          q.apply(e, H.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function oe(e, t, r, i) {
      var o,
          s,
          l,
          c,
          f,
          h,
          v,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
      if (r = r || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return r;

      if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), t = t || d, g)) {
        if (11 !== T && (f = J.exec(e))) if (o = f[1]) {
          if (9 === T) {
            if (!(l = t.getElementById(o))) return r;
            if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
          if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
        }

        if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
          if (1 !== T) m = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = b), s = (h = a(e)).length;

            while (s--) {
              h[s] = "#" + c + " " + ve(h[s]);
            }

            v = h.join(","), m = K.test(e) && ge(t.parentNode) || t;
          }
          if (v) try {
            return L.apply(r, m.querySelectorAll(v)), r;
          } catch (e) {} finally {
            c === b && t.removeAttribute("id");
          }
        }
      }

      return u(e.replace(B, "$1"), t, r, i);
    }

    function ae() {
      var e = [];

      function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }

      return t;
    }

    function se(e) {
      return e[b] = !0, e;
    }

    function ue(e) {
      var t = d.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function le(e, t) {
      var n = e.split("|"),
          i = n.length;

      while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }

    function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }

    function pe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }

    function de(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }

    function he(e) {
      return se(function (t) {
        return t = +t, se(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;

          while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }

    function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }, p = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;
      return a !== d && 9 === a.nodeType && a.documentElement ? (d = a, h = d.documentElement, g = !o(d), w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = ue(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = ue(function (e) {
        return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = Q.test(d.getElementsByClassName), n.getById = ue(function (e) {
        return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);
        return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, v = [], y = [], (n.qsa = Q.test(d.querySelectorAll)) && (ue(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
      }), ue(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = d.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:");
      })), (n.matchesSelector = Q.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ue(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), v.push("!=", W);
      }), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), x = t || Q.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return f = !0, 0;
        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === d || e.ownerDocument === w && x(w, e) ? -1 : t === d || t.ownerDocument === w && x(w, t) ? 1 : c ? O(c, e) - O(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
        if (i === o) return ce(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
      }, d) : d;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== d && p(e), t = t.replace(z, "='$1']"), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))) try {
        var r = m.call(e, t);
        if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}
      return oe(t, d, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== d && p(e), x(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== d && p(e);
      var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;

      if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(D), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }

        while (i--) {
          e.splice(r[i], 1);
        }
      }

      return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;

      if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }

      return n;
    }, (r = oe.selectors = {
      cacheLength: 50,
      createPseudo: se,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = E[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);
            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace($, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        },
        CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
                c,
                f,
                p,
                d,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                y = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                m = !u && !s,
                x = !1;

            if (y) {
              if (o) {
                while (g) {
                  p = t;

                  while (p = p[g]) {
                    if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                  }

                  h = g = "only" === e && !h && "nextSibling";
                }

                return !0;
              }

              if (h = [a ? y.firstChild : y.lastChild], a && m) {
                x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && y.childNodes[d];

                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                  if (1 === p.nodeType && ++x && p === t) {
                    c[e] = [T, d, x];
                    break;
                  }
                }
              } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
              }

              return (x -= i) === r || x % r == 0 && x / r >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;

            while (a--) {
              e[r = O(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        }
      },
      pseudos: {
        not: se(function (e) {
          var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
          return r[b] ? se(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                s = e.length;

            while (s--) {
              (o = a[s]) && (e[s] = !(t[s] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }),
        has: se(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }),
        contains: se(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }),
        lang: se(function (e) {
          return U.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;

            do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);

            return !1;
          };
        }),
        target: function target(t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function root(e) {
          return e === h;
        },
        focus: function focus(e) {
          return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: de(!1),
        disabled: de(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !r.pseudos.empty(e);
        },
        header: function header(e) {
          return Y.test(e.nodeName);
        },
        input: function input(e) {
          return G.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: he(function () {
          return [0];
        }),
        last: he(function (e, t) {
          return [t - 1];
        }),
        eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }

          return e;
        }),
        gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = r.pseudos.eq;

    for (t in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      r.pseudos[t] = fe(t);
    }

    for (t in {
      submit: !0,
      reset: !0
    }) {
      r.pseudos[t] = pe(t);
    }

    function ye() {}

    ye.prototype = r.filters = r.pseudos, r.setFilters = new ye(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          s,
          u,
          l,
          c = k[e + " "];
      if (c) return t ? 0 : c.slice(0);
      s = e, u = [], l = r.preFilter;

      while (s) {
        n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), o.push({
          value: n,
          type: i[0].replace(B, " ")
        }), s = s.slice(n.length));

        for (a in r.filter) {
          !(i = V[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
            value: n,
            type: a,
            matches: i
          }), s = s.slice(n.length));
        }

        if (!n) break;
      }

      return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
    };

    function ve(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
      return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }

        return !1;
      } : function (t, n, u) {
        var l,
            c,
            f,
            p = [T, s];

        if (u) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[b] || (t[b] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
            if (c[o] = p, p[2] = e(t, n, u)) return !0;
          }
        }

        return !1;
      };
    }

    function xe(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;

        while (i--) {
          if (!e[i](t, n, r)) return !1;
        }

        return !0;
      } : e[0];
    }

    function be(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }

      return n;
    }

    function we(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Te(e, t, n, r, i, o) {
      return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), se(function (o, a, s, u) {
        var l,
            c,
            f,
            p = [],
            d = [],
            h = a.length,
            g = o || be(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !o && t ? g : we(g, p, e, s, u),
            v = n ? i || (o ? e : h || r) ? [] : a : y;

        if (n && n(y, v, s, u), r) {
          l = we(v, d), r(l, [], s, u), c = l.length;

          while (c--) {
            (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
          }
        }

        if (o) {
          if (i || e) {
            if (i) {
              l = [], c = v.length;

              while (c--) {
                (f = v[c]) && l.push(y[c] = f);
              }

              i(null, v = [], l, u);
            }

            c = v.length;

            while (c--) {
              (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else v = we(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, u) : L.apply(a, v);
      });
    }

    function Ce(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, s, !0), f = me(function (e) {
        return O(t, e) > -1;
      }, s, !0), p = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
        return t = null, i;
      }]; u < o; u++) {
        if (n = r.relative[e[u].type]) p = [me(xe(p), n)];else {
          if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
            for (i = ++u; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }

            return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({
              value: " " === e[u - 2].type ? "*" : ""
            })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce(e = e.slice(i)), i < o && ve(e));
          }

          p.push(n);
        }
      }

      return xe(p);
    }

    function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, s, u, c) {
        var f,
            h,
            y,
            v = 0,
            m = "0",
            x = _o && [],
            b = [],
            w = l,
            C = _o || i && r.find.TAG("*", c),
            E = T += null == w ? 1 : Math.random() || .1,
            k = C.length;

        for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === d || (p(f), s = !g);

            while (y = e[h++]) {
              if (y(f, a || d, s)) {
                u.push(f);
                break;
              }
            }

            c && (T = E);
          }

          n && ((f = !y && f) && v--, _o && x.push(f));
        }

        if (v += m, n && m !== v) {
          h = 0;

          while (y = t[h++]) {
            y(x, b, a, s);
          }

          if (_o) {
            if (v > 0) while (m--) {
              x[m] || b[m] || (b[m] = j.call(u));
            }
            b = we(b);
          }

          L.apply(u, b), c && !_o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
        }

        return c && (T = E, l = w), x;
      };

      return n ? se(o) : o;
    }

    return s = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = S[e + " "];

      if (!o) {
        t || (t = a(e)), n = t.length;

        while (n--) {
          (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
        }

        (o = S(e, Ee(i, r))).selector = e;
      }

      return o;
    }, u = oe.select = function (e, t, n, i) {
      var o,
          u,
          l,
          c,
          f,
          p = "function" == typeof e && e,
          d = !i && a(e = p.selector || e);

      if (n = n || [], 1 === d.length) {
        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
          p && (t = t.parentNode), e = e.slice(u.shift().value.length);
        }

        o = V.needsContext.test(e) ? 0 : u.length;

        while (o--) {
          if (l = u[o], r.relative[c = l.type]) break;

          if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), K.test(u[0].type) && ge(t.parentNode) || t))) {
            if (u.splice(o, 1), !(e = i.length && ve(u))) return L.apply(n, i), n;
            break;
          }
        }
      }

      return (p || s(e, d))(i, t, !g, n, !t || K.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = b.split("").sort(D).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ue(function (e) {
      return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
    }), ue(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && ue(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ue(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(P, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);

  w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;

  var k = function k(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      D = w.expr.match.needsContext;

  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return u.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }

  w.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }

      return r > 1 ? w.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }
        return this;
      }

      return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, q = w(r);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  w.fn.extend({
    has: function has(e) {
      var t = w(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);
      if (!D.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  });

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  w.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return k(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return k(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return k(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return k(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return k(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return k(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    }
  }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);
      return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
    };
  });
  var M = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    var t = {};
    return w.each(e.match(M) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }

  w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);

    var t,
        n,
        r,
        i,
        o = [],
        a = [],
        s = -1,
        u = function u() {
      for (i = i || e.once, r = t = !0; a.length; s = -1) {
        n = a.shift();

        while (++s < o.length) {
          !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
        }
      }

      e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = {
      add: function add() {
        return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
          });
        }(arguments), n && !t && u()), this;
      },
      remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;

          while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= s && s--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      },
      empty: function empty() {
        return o && (o = []), this;
      },
      disable: function disable() {
        return i = a = [], o = n = "", this;
      },
      disabled: function disabled() {
        return !o;
      },
      lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      },
      locked: function locked() {
        return !!i;
      },
      fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this;
      },
      fire: function fire() {
        return l.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!r;
      }
    };

    return l;
  };

  function I(e) {
    return e;
  }

  function W(e) {
    throw e;
  }

  function $(e, t, n, r) {
    var i;

    try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  w.extend({
    Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = {
        state: function state() {
          return r;
        },
        always: function always() {
          return o.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return i.then(null, e);
        },
        pipe: function pipe() {
          var e = arguments;
          return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];
              o[r[1]](function () {
                var e = i && i.apply(this, arguments);
                e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        },
        then: function then(t, r, i) {
          var o = 0;

          function a(t, n, r, i) {
            return function () {
              var s = this,
                  u = arguments,
                  l = function l() {
                var e, l;

                if (!(t < o)) {
                  if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                  l = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, I, i), a(o, n, W, i)) : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith))) : (r !== I && (s = void 0, u = [e]), (i || n.resolveWith)(s, u));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && (s = void 0, u = [e]), n.rejectWith(s, u));
                }
              };

              t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }

          return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        }
      },
          o = {};
      return w.each(n, function (e, t) {
        var a = t[2],
            s = t[5];
        i[t[1]] = a.add, s && a.add(function () {
          r = s;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    },
    when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function s(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };

      if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();

      while (n--) {
        $(i[n], s(n), a.reject);
      }

      return a.promise();
    }
  });
  var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };
  var F = w.Deferred();
  w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    }
  }), w.ready.then = F.then;

  function _() {
    r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
  }

  "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));

  var z = function z(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;

    if ("object" === x(n)) {
      i = !0;

      for (s in n) {
        z(e, t, s, n[s], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }

    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      X = /^-ms-/,
      U = /-([a-z])/g;

  function V(e, t) {
    return t.toUpperCase();
  }

  function G(e) {
    return e.replace(X, "ms-").replace(U, V);
  }

  var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Q() {
    this.expando = w.expando + Q.uid++;
  }

  Q.uid = 1, Q.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[G(t)] = n;else for (r in t) {
        i[G(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !w.isEmptyObject(t);
    }
  };
  var J = new Q(),
      K = new Q(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;

  function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }

  function ne(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}

      K.set(e, t, n);
    } else n = void 0;
    return n;
  }

  w.extend({
    hasData: function hasData(e) {
      return K.hasData(e) || J.hasData(e);
    },
    data: function data(e, t, n) {
      return K.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      K.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return J.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      J.remove(e, t);
    }
  }), w.fn.extend({
    data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === e) {
        if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
          n = a.length;

          while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
          }

          J.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(e) ? this.each(function () {
        K.set(this, e);
      }) : z(this, function (t) {
        var n;

        if (o && void 0 === t) {
          if (void 0 !== (n = K.get(o, e))) return n;
          if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    }
  }), w.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return J.get(e, n) || J.access(e, n, {
        empty: w.Callbacks("once memory").add(function () {
          J.remove(e, [t + "queue", n]);
        })
      });
    }
  }), w.fn.extend({
    queue: function queue(e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);
        w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      se = function se(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    i = n.apply(e, r || []);

    for (o in t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function ue(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +u) && ie.exec(w.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, w.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var le = {};

  function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];
    return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }

  function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
    }

    for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }

    return e;
  }

  w.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

  function ye(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? w.merge([e], n) : n;
  }

  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
  }

  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        w.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  !function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();
  var be = r.documentElement,
      we = /^key/,
      Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ce = /^([^.]*)(?:\.(.+)|)/;

  function Ee() {
    return !0;
  }

  function ke() {
    return !1;
  }

  function Se() {
    try {
      return r.activeElement;
    } catch (e) {}
  }

  function De(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      "string" != typeof n && (r = r || n, n = void 0);

      for (s in t) {
        De(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }

  w.event = {
    global: {},
    add: function add(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.get(e);

      if (y) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(be, i), n.guid || (n.guid = w.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          d = g = (s = Ce.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = J.hasData(e) && J.get(e);

      if (y && (u = y.events)) {
        l = (t = (t || "").match(M) || [""]).length;

        while (l--) {
          if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
            f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || w.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            w.event.remove(e, d + t[l], n, r, !0);
          }
        }

        w.isEmptyObject(u) && J.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          s,
          u = new Array(arguments.length),
          l = (J.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};

      for (u[0] = t, n = 1; n < arguments.length; n++) {
        u[n] = arguments[n];
      }

      if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        s = w.event.handlers.call(this, t, l), n = 0;

        while ((o = s[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;

          while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        },
        set: function set(t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== Se() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === Se() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function _default(e) {
          return N(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = {
    constructor: w.Event,
    isDefaultPrevented: ke,
    isPropagationStopped: ke,
    isImmediatePropagationStopped: ke,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, w.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, w.event.addProp), w.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    w.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;
        return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      }
    };
  }), w.fn.extend({
    on: function on(e, t, n, r) {
      return De(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return De(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Ae = /<script|<style|<link/i,
      je = /checked\s*(?:[^=]|=\s*.checked.)/i,
      qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Le(e, t) {
    return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }

  function He(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Oe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Pe(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};

        for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }

      K.hasData(e) && (s = K.access(e), u = w.extend({}, s), K.set(t, u));
    }
  }

  function Me(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }

  function Re(e, t, n, r) {
    t = a.apply([], t);
    var i,
        o,
        s,
        u,
        l,
        c,
        f = 0,
        p = e.length,
        d = p - 1,
        y = t[0],
        v = g(y);
    if (v || p > 1 && "string" == typeof y && !h.checkClone && je.test(y)) return e.each(function (i) {
      var o = e.eq(i);
      v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
    });

    if (p && (i = xe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) {
        l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
      }

      if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++) {
        l = s[f], he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
      }
    }

    return e;
  }

  function Ie(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  w.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(Ne, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s = e.cloneNode(!0),
          u = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) {
        Me(o[r], a[r]);
      }
      if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) {
        Pe(o[r], a[r]);
      } else Pe(e, s);
      return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[J.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }
            n[J.expando] = void 0;
          }

          n[K.expando] && (n[K.expando] = void 0);
        }
      }
    }
  }), w.fn.extend({
    detach: function detach(e) {
      return Ie(this, e, !0);
    },
    remove: function remove(e) {
      return Ie(this, e);
    },
    text: function text(e) {
      return z(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Le(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    },
    html: function html(e) {
      return z(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var e = [];
      return Re(this, arguments, function (t) {
        var n = this.parentNode;
        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
      }, e);
    }
  }), w.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
      }

      return this.pushStack(r);
    };
  });

  var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      $e = function $e(t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Be = new RegExp(oe.join("|"), "i");

  !function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        i = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", s = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", be.removeChild(l), c = null;
      }
    }

    function n(e) {
      return Math.round(parseFloat(e));
    }

    var i,
        o,
        a,
        s,
        u,
        l = r.createElement("div"),
        c = r.createElement("div");
    c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
      boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return t(), s;
      },
      pixelPosition: function pixelPosition() {
        return t(), i;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return t(), u;
      },
      scrollboxSize: function scrollboxSize() {
        return t(), a;
      }
    }));
  }();

  function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function _e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  var ze = /^(none|table(?!-c[ea]).+)/,
      Xe = /^--/,
      Ue = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ve = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ge = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;

  function Qe(e) {
    if (e in Ye) return e;
    var t = e[0].toUpperCase() + e.slice(1),
        n = Ge.length;

    while (n--) {
      if ((e = Ge[n] + t) in Ye) return e;
    }
  }

  function Je(e) {
    var t = w.cssProps[e];
    return t || (t = w.cssProps[e] = Qe(e) || e), t;
  }

  function Ke(e, t, n) {
    var r = ie.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (u += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += w.css(e, "border" + oe[a] + "Width", !0, i) : s += w.css(e, "border" + oe[a] + "Width", !0, i));
    }

    return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u;
  }

  function et(e, t, n) {
    var r = $e(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;

    if (We.test(i)) {
      if (!n) return i;
      i = "auto";
    }

    return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }

  w.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = G(t),
            u = Xe.test(t),
            l = e.style;
        if (u || (t = Je(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" == (o = _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = G(t);
      return Xe.test(t) || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = {
      get: function get(e, n, r) {
        if (n) return !ze.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : se(e, Ue, function () {
          return et(e, t, r);
        });
      },
      set: function set(e, n, r) {
        var i,
            o = $e(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Ze(e, t, r, a, o);
        return a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ke(e, n, s);
      }
    };
  }), w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (e, t) {
    w.cssHooks[e + t] = {
      expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }

        return i;
      }
    }, "margin" !== e && (w.cssHooks[e + t].set = Ke);
  }), w.fn.extend({
    css: function css(e, t) {
      return z(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = $e(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    }
  });

  function tt(e, t, n, r, i) {
    return new tt.prototype.init(e, t, n, r, i);
  }

  w.Tween = tt, tt.prototype = {
    constructor: tt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = tt.propHooks[this.prop];
      return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = tt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this;
    }
  }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, w.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, w.fx = tt.prototype.init, w.fx.step = {};
  var nt,
      rt,
      it = /^(?:toggle|show|hide)$/,
      ot = /queueHooks$/;

  function at() {
    rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
  }

  function st() {
    return e.setTimeout(function () {
      nt = void 0;
    }), nt = Date.now();
  }

  function ut(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = oe[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function lt(e, t, n) {
    for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ct(e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ae(e),
        y = J.get(e, "fxshow");
    n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
      a.unqueued || s();
    }), a.unqueued++, p.always(function () {
      p.always(function () {
        a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
      });
    }));

    for (r in t) {
      if (i = t[r], it.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !y || void 0 === y[r]) continue;
          g = !0;
        }

        d[r] = y && y[r] || w.style(e, r);
      }
    }

    if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
      f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = w.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1;

      for (r in d) {
        u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {
          display: l
        }), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
          g || fe([e]), J.remove(e, "fxshow");

          for (r in d) {
            w.style(e, r, d[r]);
          }
        })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }
  }

  function ft(e, t) {
    var n, r, i, o, a;

    for (n in e) {
      if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) {
        o = a.expand(o), delete e[r];

        for (n in o) {
          n in e || (e[n] = o[n], t[n] = i);
        }
      } else t[r] = i;
    }
  }

  function pt(e, t, n) {
    var r,
        i,
        o = 0,
        a = pt.prefilters.length,
        s = w.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (i) return !1;

      for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) {
        l.tweens[o].run(r);
      }

      return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
    },
        l = s.promise({
      elem: e,
      props: w.extend({}, t),
      opts: w.extend(!0, {
        specialEasing: {},
        easing: w.easing._default
      }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: nt || st(),
      duration: n.duration,
      tweens: [],
      createTween: function createTween(t, n) {
        var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
        return l.tweens.push(r), r;
      },
      stop: function stop(t) {
        var n = 0,
            r = t ? l.tweens.length : 0;
        if (i) return this;

        for (i = !0; n < r; n++) {
          l.tweens[n].run(1);
        }

        return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
      }
    }),
        c = l.props;

    for (ft(c, l.opts.specialEasing); o < a; o++) {
      if (r = pt.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    }

    return w.map(c, lt, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
      elem: e,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  w.Animation = w.extend(pt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return ue(n.elem, e, ie.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      g(e) ? (t = e, e = ["*"]) : e = e.match(M);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t);
      }
    },
    prefilters: [ct],
    prefilter: function prefilter(e, t) {
      t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
    }
  }), w.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? w.extend({}, e) : {
      complete: n || !n && t || g(e) && e,
      duration: e,
      easing: n && t || t && !g(t) && t
    };
    return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
    }, r;
  }, w.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(e, t, n, r) {
      var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function a() {
        var t = pt(this, w.extend({}, e), o);
        (i || J.get(this, "finish")) && t.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(e, t, n) {
      var r = function r(e) {
        var t = e.stop;
        delete e.stop, t(n);
      };

      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            i = null != e && e + "queueHooks",
            o = w.timers,
            a = J.get(this);
        if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
          a[i] && a[i].stop && ot.test(i) && r(a[i]);
        }

        for (i = o.length; i--;) {
          o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
        }

        !t && n || w.dequeue(this, e);
      });
    },
    finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = J.get(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = w.timers,
            a = r ? r.length : 0;

        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        }

        for (t = 0; t < a; t++) {
          r[t] && r[t].finish && r[t].finish.call(this);
        }

        delete n.finish;
      });
    }
  }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];

    w.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
    };
  }), w.each({
    slideDown: ut("show"),
    slideUp: ut("hide"),
    slideToggle: ut("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, t) {
    w.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;

    for (nt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || w.fx.stop(), nt = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    rt || (rt = !0, at());
  }, w.fx.stop = function () {
    rt = null;
  }, w.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);

      r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));
    e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();
  var dt,
      ht = w.expr.attrHandle;
  w.fn.extend({
    attr: function attr(e, t) {
      return z(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    }
  }), w.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!h.radioValue && "radio" === t && N(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(M);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), dt = {
    set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ht[t] || w.find.attr;

    ht[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();
      return r || (o = ht[a], ht[a] = i, i = null != n(e, t, r) ? a : null, ht[a] = o), i;
    };
  });
  var gt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;
  w.fn.extend({
    prop: function prop(e, t) {
      return z(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    }
  }), w.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = w.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), h.optSelected || (w.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });

  function vt(e) {
    return (e.match(M) || []).join(" ");
  }

  function mt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function xt(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
  }

  w.fn.extend({
    addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, mt(this)));
      });
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, mt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((t = xt(e)).length) while (n = this[u++]) {
        if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(e, t) {
      var n = _typeof(e),
          r = "string" === n || Array.isArray(e);

      return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, mt(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;

        if (r) {
          i = 0, o = w(this), a = xt(e);

          while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
      }

      return !1;
    }
  });
  var bt = /\r/g;
  w.fn.extend({
    val: function val(e) {
      var t,
          n,
          r,
          i = this[0];
      {
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;
          1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });
        if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
      }
    }
  }), w.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = w.find.attr(e, "value");
          return null != t ? t : vt(w.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      }
    }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;

  var wt = /^(?:focusinfocus|focusoutblur)$/,
      Tt = function Tt(e) {
    e.stopPropagation();
  };

  w.extend(w.event, {
    trigger: function trigger(t, n, i, o) {
      var a,
          s,
          u,
          l,
          c,
          p,
          d,
          h,
          v = [i || r],
          m = f.call(t, "type") ? t.type : t,
          x = f.call(t, "namespace") ? t.namespace.split(".") : [];

      if (s = h = u = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (x = m.split(".")).shift(), x.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == _typeof(t) && t), t.isTrigger = o ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), d = w.event.special[m] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!o && !d.noBubble && !y(i)) {
          for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) {
            v.push(s), u = s;
          }

          u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
        }

        a = 0;

        while ((s = v[a++]) && !t.isPropagationStopped()) {
          h = s, t.type = a > 1 ? l : d.bindType || m, (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n), (p = c && s[c]) && p.apply && Y(s) && (t.result = p.apply(s, n), !1 === t.result && t.preventDefault());
        }

        return t.type = m, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(v.pop(), n) || !Y(i) || c && g(i[m]) && !y(i) && ((u = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, Tt), i[m](), t.isPropagationStopped() && h.removeEventListener(m, Tt), w.event.triggered = void 0, u && (i[c] = u)), t.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, {
        type: e,
        isSimulated: !0
      });
      w.event.trigger(r, null, t);
    }
  }), w.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return w.event.trigger(e, t, n, !0);
    }
  }), h.focusin || w.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };

    w.event.special[t] = {
      setup: function setup() {
        var r = this.ownerDocument || this,
            i = J.access(r, t);
        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
      },
      teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = J.access(r, t) - 1;
        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
      }
    };
  });
  var Ct = e.location,
      Et = Date.now(),
      kt = /\?/;

  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;

    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }

    return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };

  var St = /\[\]$/,
      Dt = /\r?\n/g,
      Nt = /^(?:submit|button|image|reset|file)$/i,
      At = /^(?:input|select|textarea|keygen)/i;

  function jt(e, t, n, r) {
    var i;
    if (Array.isArray(t)) w.each(t, function (t, i) {
      n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == _typeof(i) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== x(t)) r(e, t);else for (i in t) {
      jt(e + "[" + i + "]", t[i], n, r);
    }
  }

  w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      jt(n, e[n], t, i);
    }
    return r.join("&");
  }, w.fn.extend({
    serialize: function serialize() {
      return w.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");
        return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = w(this).val();
        return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(Dt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(Dt, "\r\n")
        };
      }).get();
    }
  });
  var qt = /%20/g,
      Lt = /#.*$/,
      Ht = /([?&])_=[^&]*/,
      Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Mt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Bt = r.createElement("a");
  Bt.href = Ct.href;

  function Ft(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var r,
          i = 0,
          o = t.toLowerCase().match(M) || [];
      if (g(n)) while (r = o[i++]) {
        "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
      }
    };
  }

  function _t(e, t, n, r) {
    var i = {},
        o = e === Wt;

    function a(s) {
      var u;
      return i[s] = !0, w.each(e[s] || [], function (e, s) {
        var l = s(t, n, r);
        return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1);
      }), u;
    }

    return a(t.dataTypes[0]) || !i["*"] && a("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = w.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && w.extend(!0, e, r), e;
  }

  function Xt(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.contents,
        u = e.dataTypes;

    while ("*" === u[0]) {
      u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    }

    if (r) for (i in s) {
      if (s[i] && s[i].test(r)) {
        u.unshift(i);
        break;
      }
    }
    if (u[0] in n) o = u[0];else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }

        a || (a = i);
      }

      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }

  function Ut(e, t, n, r) {
    var i,
        o,
        a,
        s,
        u,
        l = {},
        c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) {
      l[a.toLowerCase()] = e.converters[a];
    }
    o = c.shift();

    while (o) {
      if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
          if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
            break;
          }
        }
        if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
          t = a(t);
        } catch (e) {
          return {
            state: "parsererror",
            error: a ? e : "No conversion from " + u + " to " + o
          };
        }
      }
    }

    return {
      state: "success",
      data: t
    };
  }

  w.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Pt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": w.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(It),
    ajaxTransport: Ft(Wt),
    ajax: function ajax(t, n) {
      "object" == _typeof(t) && (n = t, t = void 0), n = n || {};
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          v = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (c) {
            if (!s) {
              s = {};

              while (t = Ot.exec(a)) {
                s[t[1].toLowerCase()] = t[2];
              }
            }

            t = s[e.toLowerCase()];
          }

          return null == t ? null : t;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return c ? a : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == c && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == c && (h.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (c) E.always(e[E.status]);else for (t in e) {
            x[t] = [x[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || C;
          return i && i.abort(t), k(0, t), this;
        }
      };

      if (v.promise(E), h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""], null == h.crossDomain) {
        l = r.createElement("a");

        try {
          l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }

      if (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c) return E;
      (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), o = h.url.replace(Lt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (kt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d), h.url = o + d), h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);

      for (p in h.headers) {
        E.setRequestHeader(p, h.headers[p]);
      }

      if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();

      if (C = "abort", m.add(h.complete), E.done(h.success), E.fail(h.error), i = _t(Wt, h, n, E)) {
        if (E.readyState = 1, f && y.trigger("ajaxSend", [E, h]), c) return E;
        h.async && h.timeout > 0 && (u = e.setTimeout(function () {
          E.abort("timeout");
        }, h.timeout));

        try {
          c = !1, i.send(b, k);
        } catch (e) {
          if (c) throw e;
          k(-1, e);
        }
      } else k(-1, "No Transport");

      function k(t, n, r, s) {
        var l,
            p,
            d,
            b,
            T,
            C = n;
        c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, r && (b = Xt(h, E, r)), b = Ut(h, b, E, l), l ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, p = b.data, l = !(d = b.error))) : (d = C, !t && C || (C = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || C) + "", l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]), E.statusCode(x), x = void 0, f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]), m.fireWith(g, [E, C]), f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
      }

      return E;
    },
    getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    }
  }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, r, i) {
      return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
        url: e,
        type: t,
        dataType: i,
        data: n,
        success: r
      }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, w.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function wrap(e) {
      var t = g(e);
      return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    }
  }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };
  var Vt = {
    0: 200,
    1223: 204
  },
      Gt = w.ajaxSettings.xhr();
  h.cors = !!Gt && "withCredentials" in Gt, h.ajax = Gt = !!Gt, w.ajaxTransport(function (t) {
    var _n, r;

    if (h.cors || Gt && !t.crossDomain) return {
      send: function send(i, o) {
        var a,
            s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (a in t.xhrFields) {
          s[a] = t.xhrFields[a];
        }
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");

        for (a in i) {
          s.setRequestHeader(a, i[a]);
        }

        _n = function n(e) {
          return function () {
            _n && (_n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
              binary: s.response
            } : {
              text: s.responseText
            }, s.getAllResponseHeaders()));
          };
        }, s.onload = _n(), r = s.onerror = s.ontimeout = _n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            _n && r();
          });
        }, _n = _n("abort");

        try {
          s.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      },
      abort: function abort() {
        _n && _n();
      }
    };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return w.globalEval(e), e;
      }
    }
  }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, _n2;

      return {
        send: function send(i, o) {
          t = w("<script>").prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _n2 = function n(e) {
            t.remove(), _n2 = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _n2 && _n2();
        }
      };
    }
  });
  var Yt = [],
      Qt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Yt.pop() || w.expando + "_" + Et++;
      return this[e] = !0, e;
    }
  }), w.ajaxPrefilter("json jsonp", function (t, n, r) {
    var i,
        o,
        a,
        s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Qt, "$1" + i) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return a || w.error(i + " was not called"), a[0];
    }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
      a = arguments;
    }, r.always(function () {
      void 0 === o ? w(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Yt.push(i)), a && g(o) && o(a[0]), a = o = void 0;
    }), "script";
  }), h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, o, a;
    return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = A.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = xe([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), a.length > 0 && w.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = w.css(e, "position"),
          f = w(e),
          p = {};
      "static" === c && (e.style.position = "relative"), s = f.offset(), o = w.css(e, "top"), u = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
    }
  }, w.fn.extend({
    offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });
      var t,
          n,
          r = this[0];
      if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: t.top + n.pageYOffset,
        left: t.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - w.css(r, "marginTop", !0),
          left: t.left - i.left - w.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || be;
      });
    }
  }), w.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (e, t) {
    var n = "pageYOffset" === t;

    w.fn[e] = function (r) {
      return z(this, function (e, r, i) {
        var o;
        if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), We.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({
    Height: "height",
    Width: "width"
  }, function (e, t) {
    w.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
        return z(this, function (t, n, i) {
          var o;
          return y(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), w.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), w.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = N, w.isFunction = g, w.isWindow = y, w.camelCase = G, w.type = x, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });
  var Jt = e.jQuery,
      Kt = e.$;
  return w.noConflict = function (t) {
    return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
  }, t || (e.jQuery = e.$ = w), w;
});
},{}],"projects/klav/klav.js":[function(require,module,exports) {
"use strict";

var _Tone = _interopRequireDefault(require("./Tone.min"));

var _jquery = _interopRequireDefault(require("./jquery.min"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Klav = {
  synth: new _Tone.default.Synth().toMaster(),
  notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
  whiteKeyIndexes: [0, 2, 4, 5, 7, 9, 11],
  init: function init() {
    Klav.buildKeyboard((0, _jquery.default)('#keyboard'), 4, 2);
    Klav.initKeyListeners();
  },
  //Build a keyboard by taking a jQuery selector for the keyboard, number of octave, and start octave
  buildKeyboard: function buildKeyboard(keyboard, octaves, startOctave) {
    var tmpKeyboard = "";

    for (var octave = 0; octave < octaves; octave++) {
      var tmpKeys = "";

      for (var noteIndex = 0; noteIndex < Klav.notes.length; noteIndex++) {
        var keyClass = Klav.whiteKeyIndexes.includes(noteIndex) ? 'white' : 'black';
        tmpKeys += "<div class=\"key ".concat(keyClass, "\" data-note=\"").concat(Klav.notes[noteIndex], "\"></div>");
      }

      tmpKeyboard += "<div class=\"octave\" data-octave=\"".concat(octave + startOctave, "\">").concat(tmpKeys, "</div>");
    }

    keyboard.html(tmpKeyboard);
  },
  //Listens for clicks on keyboard keys and calls function to play sound
  initKeyListeners: function initKeyListeners() {
    (0, _jquery.default)('.key').click(function () {
      var octave = (0, _jquery.default)(this).closest('.octave').data('octave'),
          note = (0, _jquery.default)(this).data('note');
      Klav.playSound(note, octave, '16n');
    });
  },
  //Plays a sound with provided note, octave, and duration
  playSound: function playSound(note, octave, duration) {
    Klav.synth.triggerAttackRelease(note + octave, duration);
  }
};
(0, _jquery.default)(document).ready(Klav.init);
},{"./Tone.min":"projects/klav/Tone.min.js","./jquery.min":"projects/klav/jquery.min.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55220" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","projects/klav/klav.js"], null)
//# sourceMappingURL=/klav.8568efb1.js.map