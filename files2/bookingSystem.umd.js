(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.Vue));
})(this, function(vue) {
  "use strict";
  const main$1 = "";
  const lang = "fr";
  const stepsList = [
    {
      index: 0,
      name: "calendar",
      title: "Veuillez sélectionner le jour de réservation",
      resumedLabel: "Date Selectionnée",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 39.105 43.086" xml:space="preserve"><path d="M37.571 43.086a1.54 1.54 0 0 0 1.534-1.545v-6.729l-8.214 8.274h6.68zm0-39.398h-3.519V1.347C34.052.602 33.451 0 32.716 0c-.74 0-1.338.602-1.338 1.347v2.341h-2.591V1.347A1.34 1.34 0 0 0 27.449 0c-.74 0-1.338.602-1.338 1.347v2.341H23.52V1.347A1.34 1.34 0 0 0 22.183 0c-.735 0-1.336.602-1.336 1.347v2.341H18.26V1.347C18.26.602 17.658 0 16.922 0c-.739 0-1.338.602-1.338 1.347v2.341h-2.591V1.347A1.34 1.34 0 0 0 11.656 0c-.736 0-1.337.602-1.337 1.347v2.341H7.732V1.347C7.732.602 7.13 0 6.394 0c-.74 0-1.338.602-1.338 1.347v2.341H1.534C.688 3.688 0 4.381 0 5.234V41.54c0 .854.688 1.547 1.534 1.547h25.573L39.106 31V5.234a1.542 1.542 0 0 0-1.535-1.546zM20.815 32.521c0 .739-.599 1.347-1.338 1.347-.076 0-.152-.006-.228-.021a1.256 1.256 0 0 1-.231.021h-6.563a1.344 1.344 0 0 1-1.338-1.347 1.34 1.34 0 0 1 1.338-1.349h5.686V26.95h-5.686c-.741 0-1.338-.604-1.338-1.349s.597-1.347 1.338-1.347h5.686V20.44h-5.686a1.343 1.343 0 0 1-1.338-1.347 1.34 1.34 0 0 1 1.338-1.349h6.563a.98.98 0 0 1 .231.023.975.975 0 0 1 .228-.023c.738 0 1.338.601 1.338 1.349v13.428zm7.175 0c0 .739-.598 1.347-1.339 1.347a1.346 1.346 0 0 1-1.337-1.347V19.094c0-.748.601-1.349 1.337-1.349.741 0 1.339.601 1.339 1.349v13.427z"/></svg>',
      url: "/booking-system/views-app-calendar/",
      // route provisoir
      // url: '/booking-system-auto/views-app-calendar',
      selectable: true,
      isLoading: true,
      parameters: {
        minDate: /* @__PURE__ */ new Date(),
        maxDate: /* @__PURE__ */ new Date(),
        disabledDates: [],
        locale: lang,
        initialPage: { month: 8, year: 2022 }
      },
      datas: {
        value: {
          id: /* @__PURE__ */ new Date()
        }
      }
    },
    {
      index: 1,
      name: "schedule",
      title: "veuillez selectionner les différentes plages horaires",
      icon: '<svg fill="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm6.2 21.18a1 1 0 0 1-1.39.28l-5.9-4v-8.71a1 1 0 0 1 2 0v7.65l5 3.39a1 1 0 0 1 .29 1.39Zm-.35-14.95a11.39 11.39 0 1 0-8.54 20.83L15 30.63a13 13 0 1 1 9.7-23.77Z" class="clr-i-solid clr-i-solid-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>',
      url: "/booking-system/views-app-creneaux/",
      resumedLabel: "Créneaux Selectionnés",
      selectable: false,
      isLoading: true,
      parameters: {
        schedulesList: [
          {
            name: "",
            times: [
              {
                hour: "first",
                active: true,
                selected: false,
                monitors: [1, 2],
                scheduleFiltred: false,
                filtred: false
              },
              {
                hour: "second",
                active: true,
                selected: false,
                monitors: [0, 1],
                scheduleFiltred: false,
                filtred: false
              },
              {
                hour: "third",
                active: false,
                selected: false,
                monitors: [],
                scheduleFiltred: false,
                filtred: false
              },
              {
                hour: "forth",
                active: true,
                selected: false,
                monitors: [2],
                scheduleFiltred: false,
                filtred: false
              }
            ]
          },
          {
            name: "",
            times: [
              {
                hour: "first",
                active: false,
                selected: false,
                monitors: [],
                scheduleFiltred: false,
                filtred: false
              },
              {
                hour: "second",
                active: true,
                selected: true,
                monitors: [1, 2],
                scheduleFiltred: false,
                filtred: false
              },
              {
                hour: "third",
                active: false,
                selected: false,
                monitors: [],
                scheduleFiltred: false,
                filtred: false
              },
              {
                hour: "forth",
                active: true,
                selected: true,
                monitors: [1, 2],
                scheduleFiltred: false,
                filtred: false
              }
            ]
          }
        ],
        monitorList: [
          { name: "Ethan", value: 0, disabled: false },
          { name: "John", value: 1, disabled: false },
          { name: "Amina", value: 2, disabled: false }
        ],
        maxSchedules: 10
      },
      datas: {
        selectedSchedules: [
          { time: 1, index: 1 },
          { time: 1, index: 3 }
        ],
        selectedMonitor: null,
        schedulesCount: 0,
        value: null
      }
    },
    {
      index: 2,
      name: "Résumé",
      title: "Bilan de la commande",
      icon: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M19.45 18.47a1.12 1.12 0 1 1 1.15-1.09 1.13 1.13 0 0 1-1.15 1.09Zm0 1a2.08 2.08 0 1 0-1.45-.63 2.08 2.08 0 0 0 1.47.61Zm.01-15.14A2.07 2.07 0 0 0 18 7.87a2 2 0 0 0 1.47.6 2.08 2.08 0 1 0 0-4.15Zm.8 2.86a1.08 1.08 0 0 1-.81.31 1.11 1.11 0 1 1 1.15-1.08 1.14 1.14 0 0 1-.34.77ZM15.9 10h-.05v.95h.07a1.11 1.11 0 0 1 0 2.22h-.07v1h.07a2.08 2.08 0 1 0 0-4.15Zm-4.58-8C6.43 2 2.46 4 2.46 6.4s4 4.41 8.86 4.41h.1V2Z"/><path fill="currentColor" d="M11.32 12.52a14 14 0 0 1-6.27-1.25 4.45 4.45 0 0 1-2.44-2.38h-.15V12c0 2.43 4 4.4 8.86 4.4h.1v-3.9Z"/><path fill="currentColor" d="M11.32 18.1a14 14 0 0 1-6.27-1.24 4.45 4.45 0 0 1-2.44-2.38h-.15v3.12c0 2.43 4 4.4 8.86 4.4h.1v-3.9ZM13.64 2h2.22v20h-2.22z"/></svg>',
      selectable: false,
      isLoading: false,
      url: "/booking-system/save-reservation/",
      datas: {
        value: null
      },
      parameters: {
        callToAction: "Book now"
      }
    },
    {
      index: 3,
      name: "Rapport",
      title: "",
      icon: "",
      isLoading: true,
      parameters: {
        reportState: false,
        reportSuccess: { resumed: "yay, everything is working.", message: "Success" },
        reportError: { resumed: "oh no, something went wrong.", message: "Error" },
        btnLabel: "Book again"
      },
      datas: {}
    }
  ];
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data2 = JSON.parse(raw);
        Object.assign(currentSettings, data2);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.0.2
   * (c) 2021 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function find(list, f) {
    return list.filter(f)[0];
  }
  function deepCopy(obj, cache) {
    if (cache === void 0)
      cache = [];
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    var hit = find(cache, function(c) {
      return c.original === obj;
    });
    if (hit) {
      return hit.copy;
    }
    var copy = Array.isArray(obj) ? [] : {};
    cache.push({
      original: obj,
      copy
    });
    Object.keys(obj).forEach(function(key) {
      copy[key] = deepCopy(obj[key], cache);
    });
    return copy;
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject$c(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state2 = store2.state;
    installModule(store2, state2, [], store2._modules.root, true);
    resetStoreState(store2, state2, hot);
  }
  function resetStoreState(store2, state2, hot) {
    var oldState = store2._state;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    forEachValue(wrappedGetters, function(fn, key) {
      computedObj[key] = partial(fn, store2);
      Object.defineProperty(store2.getters, key, {
        // TODO: use `computed` when it's possible. at the moment we can't due to
        // https://github.com/vuejs/vuex/pull/1883
        get: function() {
          return computedObj[key]();
        },
        enumerable: true
        // for local getters
      });
    });
    store2._state = vue.reactive({
      data: state2
    });
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
  }
  function installModule(store2, rootState, path, module2, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module2.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && { "NODE_ENV": "production", "GJS_DEBUG_TOPICS": "JS ERROR;JS LOG", "USER": "steve", "npm_config_user_agent": "npm/9.5.0 node/v19.7.0 linux x64 workspaces/false", "XDG_SESSION_TYPE": "wayland", "GIT_ASKPASS": "/usr/share/code/resources/app/extensions/git/dist/askpass.sh", "npm_node_execpath": "/usr/local/bin/node", "SHLVL": "2", "npm_config_noproxy": "", "HOME": "/home/steve", "OLDPWD": "/siteweb/AppVuejs/booking-app", "CHROME_DESKTOP": "code-url-handler.desktop", "LESS": "-R", "DESKTOP_SESSION": "gnome", "TERM_PROGRAM_VERSION": "1.78.2", "npm_package_json": "/siteweb/AppVuejs/booking-app/package.json", "ZSH": "/home/steve/.oh-my-zsh", "LSCOLORS": "Gxfxcxdxbxegedabagacad", "GTK_MODULES": "gail:atk-bridge", "PAGER": "less", "VSCODE_GIT_ASKPASS_MAIN": "/usr/share/code/resources/app/extensions/git/dist/askpass-main.js", "MANAGERPID": "1413", "VSCODE_GIT_ASKPASS_NODE": "/usr/share/code/code", "npm_config_userconfig": "/home/steve/.npmrc", "npm_config_local_prefix": "/siteweb/AppVuejs/booking-app", "DBUS_SESSION_BUS_ADDRESS": "unix:path=/run/user/1000/bus", "P9K_TTY": "old", "COLORTERM": "truecolor", "COLOR": "1", "npm_config_metrics_registry": "https://registry.npmjs.org/", "WAYLAND_DISPLAY": "wayland-0", "LOGNAME": "steve", "_": "/usr/bin/npm", "JOURNAL_STREAM": "8:21097", "_P9K_SSH_TTY": "/dev/pts/3", "npm_config_prefix": "/usr/local", "XDG_SESSION_CLASS": "user", "USER_ZDOTDIR": "/home/steve", "USERNAME": "steve", "TERM": "xterm-256color", "npm_config_cache": "/home/steve/.npm", "GNOME_DESKTOP_SESSION_ID": "this-is-deprecated", "npm_config_node_gyp": "/usr/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", "PATH": "/siteweb/AppVuejs/booking-app/node_modules/.bin:/siteweb/AppVuejs/node_modules/.bin:/siteweb/node_modules/.bin:/node_modules/.bin:/usr/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/bin:/usr/bin:/bin:/usr/games:/home/steve/.local/share:/usr/sbin:/snap/bin:/home/steve/.local/share:/usr/sbin:/snap/bin", "GDM_LANG": "fr_FR.UTF-8", "SESSION_MANAGER": "local/debian:@/tmp/.ICE-unix/1545,unix/debian:/tmp/.ICE-unix/1545", "INVOCATION_ID": "7615969d91ea48e68eb5c291bec01121", "NODE": "/usr/local/bin/node", "npm_package_name": "booking-app", "XDG_RUNTIME_DIR": "/run/user/1000", "XDG_MENU_PREFIX": "gnome-", "GNOME_SETUP_DISPLAY": ":1", "GDK_BACKEND": "x11", "GNOME_TERMINAL_SCREEN": "/org/gnome/Terminal/screen/14fae42d_ff1d_44cc_8ff2_744cdaff40ec", "DISPLAY": ":0", "LANG": "fr_FR.UTF-8", "XDG_CURRENT_DESKTOP": "GNOME", "VSCODE_INJECTION": "1", "XDG_SESSION_DESKTOP": "gnome", "XMODIFIERS": "@im=ibus", "XAUTHORITY": "/run/user/1000/.mutter-Xwaylandauth.HF5X91", "GNOME_TERMINAL_SERVICE": ":1.118", "LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:", "TERM_PROGRAM": "vscode", "VSCODE_GIT_IPC_HANDLE": "/run/user/1000/vscode-git-00d5d1bb6f.sock", "npm_lifecycle_script": "vite build --watch --mode development  --outDir files2", "SSH_AGENT_LAUNCHER": "openssh", "SSH_AUTH_SOCK": "/run/user/1000/keyring/ssh", "ORIGINAL_XDG_CURRENT_DESKTOP": "GNOME", "SHELL": "/usr/bin/zsh", "npm_package_version": "0.0.0", "npm_lifecycle_event": "Dev", "QT_ACCESSIBILITY": "1", "GDMSESSION": "gnome", "NO_AT_BRIDGE": "1", "GJS_DEBUG_OUTPUT": "stderr", "P9K_SSH": "0", "QT_IM_MODULE": "ibus", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "npm_config_globalconfig": "/usr/local/etc/npmrc", "npm_config_init_module": "/home/steve/.npm-init.js", "PWD": "/siteweb/AppVuejs/booking-app", "npm_execpath": "/usr/lib/node_modules/npm/bin/npm-cli.js", "_P9K_TTY": "/dev/pts/3", "ZDOTDIR": "/home/steve", "npm_config_global_prefix": "/usr/local", "npm_command": "run-script", "VTE_VERSION": "6203", "INIT_CWD": "/siteweb/AppVuejs/booking-app", "EDITOR": "vi", "VITE_USER_NODE_ENV": "development" }.NODE_ENV !== "production") {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module2;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        parentState[moduleName] = module2.state;
      });
    }
    var local = module2.context = makeLocalContext(store2, namespace, path);
    module2.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module2.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module2.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module2.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state2, path) {
    return path.reduce(function(state3, key) {
      return state3[key];
    }, state2);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject$c(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state2) {
          var data2 = {};
          if (mutation.payload) {
            data2.payload = mutation.payload;
          }
          data2.state = state2;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data: data2
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state2) {
            var data2 = {};
            if (action.payload) {
              data2.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data2.state = state2;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data: data2
              }
            });
          },
          after: function(action, state2) {
            var data2 = {};
            var duration = Date.now() - action._time;
            data2.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data2.payload = action.payload;
            }
            data2.state = state2;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data: data2
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module2, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module2.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module2._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module2._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module2, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module2.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module2._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module2._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module2, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module2.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module2.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module2, moduleName, i) {
        var child = module2[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module2) {
    this._children[key] = module2;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get2(path) {
    return path.reduce(function(module2, key) {
      return module2.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module2 = this.root;
    return path.reduce(function(namespace, key) {
      module2 = module2.getChild(key);
      return namespace + (module2.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state2 = this._modules.root.state;
    installModule(this, state2, [], this._modules.root);
    resetStoreState(this, state2);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install2(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : false;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state2) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state2;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  var mapState = normalizeNamespace(function(namespace, states) {
    var res = {};
    normalizeMap(states).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedState() {
        var state2 = this.$store.state;
        var getters = this.$store.getters;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapState", namespace);
          if (!module2) {
            return;
          }
          state2 = module2.context.state;
          getters = module2.context.getters;
        }
        return typeof val === "function" ? val.call(this, state2, getters) : state2[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapMutations = normalizeNamespace(function(namespace, mutations) {
    var res = {};
    normalizeMap(mutations).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedMutation() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var commit = this.$store.commit;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapMutations", namespace);
          if (!module2) {
            return;
          }
          commit = module2.context.commit;
        }
        return typeof val === "function" ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  var mapGetters = normalizeNamespace(function(namespace, getters) {
    var res = {};
    normalizeMap(getters).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      val = namespace + val;
      res[key] = function mappedGetter() {
        if (namespace && !getModuleByNamespace(this.$store, "mapGetters", namespace)) {
          return;
        }
        return this.$store.getters[val];
      };
      res[key].vuex = true;
    });
    return res;
  });
  var mapActions = normalizeNamespace(function(namespace, actions) {
    var res = {};
    normalizeMap(actions).forEach(function(ref) {
      var key = ref.key;
      var val = ref.val;
      res[key] = function mappedAction() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var dispatch = this.$store.dispatch;
        if (namespace) {
          var module2 = getModuleByNamespace(this.$store, "mapActions", namespace);
          if (!module2) {
            return;
          }
          dispatch = module2.context.dispatch;
        }
        return typeof val === "function" ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
      };
    });
    return res;
  });
  var createNamespacedHelpers = function(namespace) {
    return {
      mapState: mapState.bind(null, namespace),
      mapGetters: mapGetters.bind(null, namespace),
      mapMutations: mapMutations.bind(null, namespace),
      mapActions: mapActions.bind(null, namespace)
    };
  };
  function normalizeMap(map) {
    if (!isValidMap(map)) {
      return [];
    }
    return Array.isArray(map) ? map.map(function(key) {
      return { key, val: key };
    }) : Object.keys(map).map(function(key) {
      return { key, val: map[key] };
    });
  }
  function isValidMap(map) {
    return Array.isArray(map) || isObject$c(map);
  }
  function normalizeNamespace(fn) {
    return function(namespace, map) {
      if (typeof namespace !== "string") {
        map = namespace;
        namespace = "";
      } else if (namespace.charAt(namespace.length - 1) !== "/") {
        namespace += "/";
      }
      return fn(namespace, map);
    };
  }
  function getModuleByNamespace(store2, helper, namespace) {
    var module2 = store2._modulesNamespaceMap[namespace];
    return module2;
  }
  function createLogger(ref) {
    if (ref === void 0)
      ref = {};
    var collapsed = ref.collapsed;
    if (collapsed === void 0)
      collapsed = true;
    var filter = ref.filter;
    if (filter === void 0)
      filter = function(mutation, stateBefore, stateAfter) {
        return true;
      };
    var transformer = ref.transformer;
    if (transformer === void 0)
      transformer = function(state2) {
        return state2;
      };
    var mutationTransformer = ref.mutationTransformer;
    if (mutationTransformer === void 0)
      mutationTransformer = function(mut) {
        return mut;
      };
    var actionFilter = ref.actionFilter;
    if (actionFilter === void 0)
      actionFilter = function(action, state2) {
        return true;
      };
    var actionTransformer = ref.actionTransformer;
    if (actionTransformer === void 0)
      actionTransformer = function(act) {
        return act;
      };
    var logMutations = ref.logMutations;
    if (logMutations === void 0)
      logMutations = true;
    var logActions = ref.logActions;
    if (logActions === void 0)
      logActions = true;
    var logger = ref.logger;
    if (logger === void 0)
      logger = console;
    return function(store2) {
      var prevState = deepCopy(store2.state);
      if (typeof logger === "undefined") {
        return;
      }
      if (logMutations) {
        store2.subscribe(function(mutation, state2) {
          var nextState = deepCopy(state2);
          if (filter(mutation, prevState, nextState)) {
            var formattedTime = getFormattedTime();
            var formattedMutation = mutationTransformer(mutation);
            var message = "mutation " + mutation.type + formattedTime;
            startMessage(logger, message, collapsed);
            logger.log("%c prev state", "color: #9E9E9E; font-weight: bold", transformer(prevState));
            logger.log("%c mutation", "color: #03A9F4; font-weight: bold", formattedMutation);
            logger.log("%c next state", "color: #4CAF50; font-weight: bold", transformer(nextState));
            endMessage(logger);
          }
          prevState = nextState;
        });
      }
      if (logActions) {
        store2.subscribeAction(function(action, state2) {
          if (actionFilter(action, state2)) {
            var formattedTime = getFormattedTime();
            var formattedAction = actionTransformer(action);
            var message = "action " + action.type + formattedTime;
            startMessage(logger, message, collapsed);
            logger.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
            endMessage(logger);
          }
        });
      }
    };
  }
  function startMessage(logger, message, collapsed) {
    var startMessage2 = collapsed ? logger.groupCollapsed : logger.group;
    try {
      startMessage2.call(logger, message);
    } catch (e) {
      logger.log(message);
    }
  }
  function endMessage(logger) {
    try {
      logger.groupEnd();
    } catch (e) {
      logger.log("—— log end ——");
    }
  }
  function getFormattedTime() {
    var time = /* @__PURE__ */ new Date();
    return " @ " + pad$1(time.getHours(), 2) + ":" + pad$1(time.getMinutes(), 2) + ":" + pad$1(time.getSeconds(), 2) + "." + pad$1(time.getMilliseconds(), 3);
  }
  function repeat(str, times) {
    return new Array(times + 1).join(str);
  }
  function pad$1(num, maxLength) {
    return repeat("0", maxLength - num.toString().length) + num;
  }
  var index$1 = {
    version: "4.0.2",
    Store,
    storeKey,
    createStore,
    useStore,
    mapState,
    mapMutations,
    mapGetters,
    mapActions,
    createNamespacedHelpers,
    createLogger
  };
  const Vuex = index$1;
  function getDefaultExportFromCjs$1(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var axios$3 = { exports: {} };
  var bind$2 = function bind2(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  var bind$1 = bind$2;
  var toString$2 = Object.prototype.toString;
  function isArray$d(val) {
    return toString$2.call(val) === "[object Array]";
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function isBuffer$4(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
  }
  function isArrayBuffer(val) {
    return toString$2.call(val) === "[object ArrayBuffer]";
  }
  function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
  }
  function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }
    return result;
  }
  function isString$1(val) {
    return typeof val === "string";
  }
  function isNumber$1(val) {
    return typeof val === "number";
  }
  function isObject$b(val) {
    return val !== null && typeof val === "object";
  }
  function isPlainObject$2(val) {
    if (toString$2.call(val) !== "[object Object]") {
      return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  function isDate$2(val) {
    return toString$2.call(val) === "[object Date]";
  }
  function isFile(val) {
    return toString$2.call(val) === "[object File]";
  }
  function isBlob(val) {
    return toString$2.call(val) === "[object Blob]";
  }
  function isFunction$4(val) {
    return toString$2.call(val) === "[object Function]";
  }
  function isStream(val) {
    return isObject$b(val) && isFunction$4(val.pipe);
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function trim(str) {
    return str.replace(/^\s*/, "").replace(/\s*$/, "");
  }
  function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
      return false;
    }
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray$d(obj)) {
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function merge() {
    var result = {};
    function assignValue2(val, key) {
      if (isPlainObject$2(result[key]) && isPlainObject$2(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject$2(val)) {
        result[key] = merge({}, val);
      } else if (isArray$d(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue2);
    }
    return result;
  }
  function extend(a, b, thisArg) {
    forEach(b, function assignValue2(val, key) {
      if (thisArg && typeof val === "function") {
        a[key] = bind$1(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  function stripBOM(content) {
    if (content.charCodeAt(0) === 65279) {
      content = content.slice(1);
    }
    return content;
  }
  var utils$9 = {
    isArray: isArray$d,
    isArrayBuffer,
    isBuffer: isBuffer$4,
    isFormData,
    isArrayBufferView,
    isString: isString$1,
    isNumber: isNumber$1,
    isObject: isObject$b,
    isPlainObject: isPlainObject$2,
    isUndefined,
    isDate: isDate$2,
    isFile,
    isBlob,
    isFunction: isFunction$4,
    isStream,
    isURLSearchParams,
    isStandardBrowserEnv,
    forEach,
    merge,
    extend,
    trim,
    stripBOM
  };
  var utils$8 = utils$9;
  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  var buildURL$1 = function buildURL2(url, params, paramsSerializer) {
    if (!params) {
      return url;
    }
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$8.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils$8.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (utils$8.isArray(val)) {
          key = key + "[]";
        } else {
          val = [val];
        }
        utils$8.forEach(val, function parseValue(v) {
          if (utils$8.isDate(v)) {
            v = v.toISOString();
          } else if (utils$8.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + "=" + encode(v));
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      var hashmarkIndex = url.indexOf("#");
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
      url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
  };
  var utils$7 = utils$9;
  function InterceptorManager$1() {
    this.handlers = [];
  }
  InterceptorManager$1.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager$1.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager$1.prototype.forEach = function forEach2(fn) {
    utils$7.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  var InterceptorManager_1 = InterceptorManager$1;
  var utils$6 = utils$9;
  var transformData$1 = function transformData2(data2, headers, fns) {
    utils$6.forEach(fns, function transform(fn) {
      data2 = fn(data2, headers);
    });
    return data2;
  };
  var isCancel$1;
  var hasRequiredIsCancel;
  function requireIsCancel() {
    if (hasRequiredIsCancel)
      return isCancel$1;
    hasRequiredIsCancel = 1;
    isCancel$1 = function isCancel2(value) {
      return !!(value && value.__CANCEL__);
    };
    return isCancel$1;
  }
  var utils$5 = utils$9;
  var normalizeHeaderName$1 = function normalizeHeaderName2(headers, normalizedName) {
    utils$5.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  var enhanceError;
  var hasRequiredEnhanceError;
  function requireEnhanceError() {
    if (hasRequiredEnhanceError)
      return enhanceError;
    hasRequiredEnhanceError = 1;
    enhanceError = function enhanceError2(error, config2, code, request, response) {
      error.config = config2;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code
        };
      };
      return error;
    };
    return enhanceError;
  }
  var createError;
  var hasRequiredCreateError;
  function requireCreateError() {
    if (hasRequiredCreateError)
      return createError;
    hasRequiredCreateError = 1;
    var enhanceError2 = requireEnhanceError();
    createError = function createError2(message, config2, code, request, response) {
      var error = new Error(message);
      return enhanceError2(error, config2, code, request, response);
    };
    return createError;
  }
  var settle;
  var hasRequiredSettle;
  function requireSettle() {
    if (hasRequiredSettle)
      return settle;
    hasRequiredSettle = 1;
    var createError2 = requireCreateError();
    settle = function settle2(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError2(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
    return settle;
  }
  var cookies;
  var hasRequiredCookies;
  function requireCookies() {
    if (hasRequiredCookies)
      return cookies;
    hasRequiredCookies = 1;
    var utils2 = utils$9;
    cookies = utils2.isStandardBrowserEnv() ? (
      // Standard browser envs support document.cookie
      function standardBrowserEnv() {
        return {
          write: function write2(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils2.isNumber(expires)) {
              cookie.push("expires=" + new Date(expires).toGMTString());
            }
            if (utils2.isString(path)) {
              cookie.push("path=" + path);
            }
            if (utils2.isString(domain)) {
              cookie.push("domain=" + domain);
            }
            if (secure === true) {
              cookie.push("secure");
            }
            document.cookie = cookie.join("; ");
          },
          read: function read2(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
          },
          remove: function remove(name) {
            this.write(name, "", Date.now() - 864e5);
          }
        };
      }()
    ) : (
      // Non standard browser env (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return {
          write: function write2() {
          },
          read: function read2() {
            return null;
          },
          remove: function remove() {
          }
        };
      }()
    );
    return cookies;
  }
  var isAbsoluteURL;
  var hasRequiredIsAbsoluteURL;
  function requireIsAbsoluteURL() {
    if (hasRequiredIsAbsoluteURL)
      return isAbsoluteURL;
    hasRequiredIsAbsoluteURL = 1;
    isAbsoluteURL = function isAbsoluteURL2(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
    return isAbsoluteURL;
  }
  var combineURLs;
  var hasRequiredCombineURLs;
  function requireCombineURLs() {
    if (hasRequiredCombineURLs)
      return combineURLs;
    hasRequiredCombineURLs = 1;
    combineURLs = function combineURLs2(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
    return combineURLs;
  }
  var buildFullPath;
  var hasRequiredBuildFullPath;
  function requireBuildFullPath() {
    if (hasRequiredBuildFullPath)
      return buildFullPath;
    hasRequiredBuildFullPath = 1;
    var isAbsoluteURL2 = requireIsAbsoluteURL();
    var combineURLs2 = requireCombineURLs();
    buildFullPath = function buildFullPath2(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL2(requestedURL)) {
        return combineURLs2(baseURL, requestedURL);
      }
      return requestedURL;
    };
    return buildFullPath;
  }
  var parseHeaders;
  var hasRequiredParseHeaders;
  function requireParseHeaders() {
    if (hasRequiredParseHeaders)
      return parseHeaders;
    hasRequiredParseHeaders = 1;
    var utils2 = utils$9;
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    parseHeaders = function parseHeaders2(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils2.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils2.trim(line.substr(0, i)).toLowerCase();
        val = utils2.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
    return parseHeaders;
  }
  var isURLSameOrigin;
  var hasRequiredIsURLSameOrigin;
  function requireIsURLSameOrigin() {
    if (hasRequiredIsURLSameOrigin)
      return isURLSameOrigin;
    hasRequiredIsURLSameOrigin = 1;
    var utils2 = utils$9;
    isURLSameOrigin = utils2.isStandardBrowserEnv() ? (
      // Standard browser envs have full support of the APIs needed to test
      // whether the request URL is of the same origin as current location.
      function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement("a");
        var originURL;
        function resolveURL(url) {
          var href = url;
          if (msie) {
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
          }
          urlParsingNode.setAttribute("href", href);
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
          };
        }
        originURL = resolveURL(window.location.href);
        return function isURLSameOrigin2(requestURL) {
          var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
          return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
        };
      }()
    ) : (
      // Non standard browser envs (web workers, react-native) lack needed support.
      function nonStandardBrowserEnv() {
        return function isURLSameOrigin2() {
          return true;
        };
      }()
    );
    return isURLSameOrigin;
  }
  var xhr;
  var hasRequiredXhr;
  function requireXhr() {
    if (hasRequiredXhr)
      return xhr;
    hasRequiredXhr = 1;
    var utils2 = utils$9;
    var settle2 = requireSettle();
    var cookies2 = requireCookies();
    var buildURL2 = buildURL$1;
    var buildFullPath2 = requireBuildFullPath();
    var parseHeaders2 = requireParseHeaders();
    var isURLSameOrigin2 = requireIsURLSameOrigin();
    var createError2 = requireCreateError();
    xhr = function xhrAdapter(config2) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config2.data;
        var requestHeaders = config2.headers;
        if (utils2.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config2.auth) {
          var username = config2.auth.username || "";
          var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath2(config2.baseURL, config2.url);
        request.open(config2.method.toUpperCase(), buildURL2(fullPath, config2.params, config2.paramsSerializer), true);
        request.timeout = config2.timeout;
        request.onreadystatechange = function handleLoad() {
          if (!request || request.readyState !== 4) {
            return;
          }
          if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders2(request.getAllResponseHeaders()) : null;
          var responseData = !config2.responseType || config2.responseType === "text" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config: config2,
            request
          };
          settle2(resolve, reject, response);
          request = null;
        };
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError2("Request aborted", config2, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError2("Network Error", config2, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = "timeout of " + config2.timeout + "ms exceeded";
          if (config2.timeoutErrorMessage) {
            timeoutErrorMessage = config2.timeoutErrorMessage;
          }
          reject(createError2(
            timeoutErrorMessage,
            config2,
            "ECONNABORTED",
            request
          ));
          request = null;
        };
        if (utils2.isStandardBrowserEnv()) {
          var xsrfValue = (config2.withCredentials || isURLSameOrigin2(fullPath)) && config2.xsrfCookieName ? cookies2.read(config2.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config2.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils2.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils2.isUndefined(config2.withCredentials)) {
          request.withCredentials = !!config2.withCredentials;
        }
        if (config2.responseType) {
          try {
            request.responseType = config2.responseType;
          } catch (e) {
            if (config2.responseType !== "json") {
              throw e;
            }
          }
        }
        if (typeof config2.onDownloadProgress === "function") {
          request.addEventListener("progress", config2.onDownloadProgress);
        }
        if (typeof config2.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config2.onUploadProgress);
        }
        if (config2.cancelToken) {
          config2.cancelToken.promise.then(function onCanceled(cancel) {
            if (!request) {
              return;
            }
            request.abort();
            reject(cancel);
            request = null;
          });
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
    return xhr;
  }
  var utils$4 = utils$9;
  var normalizeHeaderName = normalizeHeaderName$1;
  var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  function setContentTypeIfUnset(headers, value) {
    if (!utils$4.isUndefined(headers) && utils$4.isUndefined(headers["Content-Type"])) {
      headers["Content-Type"] = value;
    }
  }
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") {
      adapter = requireXhr();
    } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
      adapter = requireXhr();
    }
    return adapter;
  }
  var defaults$3 = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data2, headers) {
      normalizeHeaderName(headers, "Accept");
      normalizeHeaderName(headers, "Content-Type");
      if (utils$4.isFormData(data2) || utils$4.isArrayBuffer(data2) || utils$4.isBuffer(data2) || utils$4.isStream(data2) || utils$4.isFile(data2) || utils$4.isBlob(data2)) {
        return data2;
      }
      if (utils$4.isArrayBufferView(data2)) {
        return data2.buffer;
      }
      if (utils$4.isURLSearchParams(data2)) {
        setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
        return data2.toString();
      }
      if (utils$4.isObject(data2)) {
        setContentTypeIfUnset(headers, "application/json;charset=utf-8");
        return JSON.stringify(data2);
      }
      return data2;
    }],
    transformResponse: [function transformResponse(data2) {
      if (typeof data2 === "string") {
        try {
          data2 = JSON.parse(data2);
        } catch (e) {
        }
      }
      return data2;
    }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  defaults$3.headers = {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  };
  utils$4.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
    defaults$3.headers[method] = {};
  });
  utils$4.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    defaults$3.headers[method] = utils$4.merge(DEFAULT_CONTENT_TYPE);
  });
  var defaults_1$1 = defaults$3;
  var utils$3 = utils$9;
  var transformData = transformData$1;
  var isCancel = requireIsCancel();
  var defaults$2 = defaults_1$1;
  function throwIfCancellationRequested(config2) {
    if (config2.cancelToken) {
      config2.cancelToken.throwIfRequested();
    }
  }
  var dispatchRequest$1 = function dispatchRequest2(config2) {
    throwIfCancellationRequested(config2);
    config2.headers = config2.headers || {};
    config2.data = transformData(
      config2.data,
      config2.headers,
      config2.transformRequest
    );
    config2.headers = utils$3.merge(
      config2.headers.common || {},
      config2.headers[config2.method] || {},
      config2.headers
    );
    utils$3.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      function cleanHeaderConfig(method) {
        delete config2.headers[method];
      }
    );
    var adapter = config2.adapter || defaults$2.adapter;
    return adapter(config2).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config2);
      response.data = transformData(
        response.data,
        response.headers,
        config2.transformResponse
      );
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config2);
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config2.transformResponse
          );
        }
      }
      return Promise.reject(reason);
    });
  };
  var utils$2 = utils$9;
  var mergeConfig$2 = function mergeConfig2(config1, config2) {
    config2 = config2 || {};
    var config3 = {};
    var valueFromConfig2Keys = ["url", "method", "data"];
    var mergeDeepPropertiesKeys = ["headers", "auth", "proxy", "params"];
    var defaultToConfig2Keys = [
      "baseURL",
      "transformRequest",
      "transformResponse",
      "paramsSerializer",
      "timeout",
      "timeoutMessage",
      "withCredentials",
      "adapter",
      "responseType",
      "xsrfCookieName",
      "xsrfHeaderName",
      "onUploadProgress",
      "onDownloadProgress",
      "decompress",
      "maxContentLength",
      "maxBodyLength",
      "maxRedirects",
      "transport",
      "httpAgent",
      "httpsAgent",
      "cancelToken",
      "socketPath",
      "responseEncoding"
    ];
    var directMergeKeys = ["validateStatus"];
    function getMergedValue(target, source) {
      if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
        return utils$2.merge(target, source);
      } else if (utils$2.isPlainObject(source)) {
        return utils$2.merge({}, source);
      } else if (utils$2.isArray(source)) {
        return source.slice();
      }
      return source;
    }
    function mergeDeepProperties(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        config3[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        config3[prop] = getMergedValue(void 0, config1[prop]);
      }
    }
    utils$2.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        config3[prop] = getMergedValue(void 0, config2[prop]);
      }
    });
    utils$2.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
    utils$2.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils$2.isUndefined(config2[prop])) {
        config3[prop] = getMergedValue(void 0, config2[prop]);
      } else if (!utils$2.isUndefined(config1[prop])) {
        config3[prop] = getMergedValue(void 0, config1[prop]);
      }
    });
    utils$2.forEach(directMergeKeys, function merge2(prop) {
      if (prop in config2) {
        config3[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config3[prop] = getMergedValue(void 0, config1[prop]);
      }
    });
    var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys).concat(directMergeKeys);
    var otherKeys = Object.keys(config1).concat(Object.keys(config2)).filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });
    utils$2.forEach(otherKeys, mergeDeepProperties);
    return config3;
  };
  var utils$1 = utils$9;
  var buildURL = buildURL$1;
  var InterceptorManager = InterceptorManager_1;
  var dispatchRequest = dispatchRequest$1;
  var mergeConfig$1 = mergeConfig$2;
  function Axios$1(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  Axios$1.prototype.request = function request(config2) {
    if (typeof config2 === "string") {
      config2 = arguments[1] || {};
      config2.url = arguments[0];
    } else {
      config2 = config2 || {};
    }
    config2 = mergeConfig$1(this.defaults, config2);
    if (config2.method) {
      config2.method = config2.method.toLowerCase();
    } else if (this.defaults.method) {
      config2.method = this.defaults.method.toLowerCase();
    } else {
      config2.method = "get";
    }
    var chain = [dispatchRequest, void 0];
    var promise = Promise.resolve(config2);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  };
  Axios$1.prototype.getUri = function getUri(config2) {
    config2 = mergeConfig$1(this.defaults, config2);
    return buildURL(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
  };
  utils$1.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
    Axios$1.prototype[method] = function(url, config2) {
      return this.request(mergeConfig$1(config2 || {}, {
        method,
        url,
        data: (config2 || {}).data
      }));
    };
  });
  utils$1.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
    Axios$1.prototype[method] = function(url, data2, config2) {
      return this.request(mergeConfig$1(config2 || {}, {
        method,
        url,
        data: data2
      }));
    };
  });
  var Axios_1 = Axios$1;
  var Cancel_1;
  var hasRequiredCancel;
  function requireCancel() {
    if (hasRequiredCancel)
      return Cancel_1;
    hasRequiredCancel = 1;
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString2() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    Cancel_1 = Cancel;
    return Cancel_1;
  }
  var CancelToken_1;
  var hasRequiredCancelToken;
  function requireCancelToken() {
    if (hasRequiredCancelToken)
      return CancelToken_1;
    hasRequiredCancelToken = 1;
    var Cancel = requireCancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token2 = this;
      executor(function cancel(message) {
        if (token2.reason) {
          return;
        }
        token2.reason = new Cancel(message);
        resolvePromise(token2.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token2 = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token: token2,
        cancel
      };
    };
    CancelToken_1 = CancelToken;
    return CancelToken_1;
  }
  var spread;
  var hasRequiredSpread;
  function requireSpread() {
    if (hasRequiredSpread)
      return spread;
    hasRequiredSpread = 1;
    spread = function spread2(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
    return spread;
  }
  var isAxiosError;
  var hasRequiredIsAxiosError;
  function requireIsAxiosError() {
    if (hasRequiredIsAxiosError)
      return isAxiosError;
    hasRequiredIsAxiosError = 1;
    isAxiosError = function isAxiosError2(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
    return isAxiosError;
  }
  var utils = utils$9;
  var bind = bind$2;
  var Axios = Axios_1;
  var mergeConfig = mergeConfig$2;
  var defaults$1 = defaults_1$1;
  function createInstance(defaultConfig2) {
    var context = new Axios(defaultConfig2);
    var instance = bind(Axios.prototype.request, context);
    utils.extend(instance, Axios.prototype, context);
    utils.extend(instance, context);
    return instance;
  }
  var axios$2 = createInstance(defaults$1);
  axios$2.Axios = Axios;
  axios$2.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios$2.defaults, instanceConfig));
  };
  axios$2.Cancel = requireCancel();
  axios$2.CancelToken = requireCancelToken();
  axios$2.isCancel = requireIsCancel();
  axios$2.all = function all(promises) {
    return Promise.all(promises);
  };
  axios$2.spread = requireSpread();
  axios$2.isAxiosError = requireIsAxiosError();
  axios$3.exports = axios$2;
  axios$3.exports.default = axios$2;
  var axiosExports = axios$3.exports;
  var axios = axiosExports;
  const axios$1 = /* @__PURE__ */ getDefaultExportFromCjs$1(axios);
  const InstAxios = axios$1.create({
    timeout: 3e5
  });
  InstAxios.interceptors.request.use((config2) => {
    config2.headers["request-startTime"] = (/* @__PURE__ */ new Date()).getTime();
    return config2;
  });
  InstAxios.interceptors.response.use((response) => {
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    const startTime = response.config.headers["request-startTime"];
    let duree = currentTime - startTime;
    if (duree) {
      duree = duree / 1e3;
    }
    response.headers["request-duration"] = duree;
    return response;
  });
  var formatBasicAuth$1 = function(userName, password) {
    var basicAuthCredential = userName + ":" + password;
    var bace64 = btoa(basicAuthCredential);
    return "Basic " + bace64;
  };
  var user$1 = JSON.parse(window.localStorage.getItem("user"));
  var current_user;
  if (window.localStorage.getItem("current_user")) {
    current_user = JSON.parse(window.localStorage.getItem("current_user"));
  } else {
    current_user = null;
  }
  const basicRequest = {
    /* Permet de lire la variable user dans le localstorage et de formater l'authorisation */
    auth: user$1 ? formatBasicAuth$1(user$1.username, user$1.password) : null,
    current_user,
    axiosInstance: InstAxios,
    /**
     * Domaine permettant d'effectuer les tests en local.
     * C'est sur ce domaine que les requetes vont etre transmise quand on est en local.
     * @public
     */
    TestDomain: null,
    /**
     * Permet de specifier un domaine pour la production. ( utiliser uniquement quand l'application front est sur un domaine different de l'application serveur ).
     */
    baseUrl: null,
    /**
     * Utiliser si le module supporte la traduction
     * example : fr, en, ar ...
     */
    languageId: null,
    /**
     * Permet d'afficher la console la les données envoyé et le retour de chaque requete.
     */
    debug: false,
    /**
     * Permet de determiner, si nous sommes en local ou pas.
     * @public
     * @returns Booleans
     */
    isLocalDev: window.location.host.includes("localhost") || window.location.host.includes(".kksa") ? true : false,
    /**
     * Permet de derminer la source du domaine, en function des paramettres definit.
     * @private (ne doit pas etre surcharger).
     * @returns String
     */
    getBaseUrl() {
      if (this.baseUrl)
        return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : this.baseUrl;
      else
        return this.isLocalDev && this.TestDomain ? this.TestDomain.trim("/") : window.location.protocol + "//" + window.location.host;
    },
    /**
     * Permet de recuperer les messages , en priorité celui definie dans headers.customstatustext.
     *
     * @param {*} er
     * @param {*} type ( true pour recuperer les messages en cas de success )
     * @returns
     */
    getStatusText(er, type = false) {
      if (er) {
        if (type) {
          if (er) {
            if (er.response && er.headers.customstatustext) {
              return er.headers.customstatustext;
            }
          } else if (er.statusText) {
            return er.statusText;
          } else {
            return null;
          }
        } else {
          const message = er.response && er.response.data && er.response.data.message ? " || " + er.response.data.message : null;
          if (er.response && er.response.headers && er.response.headers.customstatustext) {
            return er.response.headers.customstatustext + message;
          } else if (er.response && er.response.statusText) {
            return er.response.statusText + message;
          } else {
            return message;
          }
        }
      } else {
        return null;
      }
    },
    post(url, datas, configs) {
      return new Promise((resolv, reject) => {
        if (this.languageId !== "" && this.languageId !== void 0 && this.languageId !== null)
          url = "/" + this.languageId + url;
        const urlFinal = url.includes("://") ? url : this.getBaseUrl() + url;
        InstAxios.post(urlFinal, datas, configs).then((reponse) => {
          if (this.debug)
            console.log(
              "Debug axio : \n",
              urlFinal,
              "\n payload: ",
              datas,
              "\n config: ",
              configs,
              "\n Duration : ",
              reponse.headers["request-duration"],
              "\n reponse: ",
              reponse,
              "\n ------ \n"
            );
          resolv({
            status: true,
            data: reponse.data,
            reponse,
            statusText: this.getStatusText(reponse, true)
          });
        }).catch((error) => {
          console.log("error wbutilities", error.response);
          reject({
            status: false,
            error: error.response,
            code: error.code,
            stack: error.stack,
            statusText: this.getStatusText(error)
          });
        });
      });
    },
    delete(url, datas, configs) {
      return new Promise((resolv, reject) => {
        const urlFinal = url.includes("://") ? url : this.getBaseUrl() + url;
        InstAxios.delete(urlFinal, configs, datas).then((reponse) => {
          resolv({
            status: true,
            data: reponse.data,
            reponse,
            statusText: this.getStatusText(reponse, true)
          });
        }).catch((error) => {
          reject({
            status: false,
            error: error.response,
            code: error.code,
            stack: error.stack,
            statusText: this.getStatusText(error)
          });
        });
      });
    },
    get(url, configs) {
      return new Promise((resolv, reject) => {
        if (this.languageId !== "" && this.languageId !== void 0 && this.languageId !== null)
          url = "/" + this.languageId + url;
        const urlFinal = url.includes("://") ? url : this.getBaseUrl() + url;
        InstAxios.get(urlFinal, configs).then((reponse) => {
          if (this.debug)
            console.log(
              "Debug axio : \n",
              urlFinal,
              "\n Config: ",
              configs,
              "\n Duration : ",
              reponse.headers["request-duration"],
              "\n Reponse: ",
              reponse,
              "\n ------ \n"
            );
          resolv({
            status: true,
            data: reponse.data,
            reponse,
            statusText: this.getStatusText(reponse, true)
          });
        }).catch((error) => {
          console.log("error wbutilities", error.response);
          reject({
            status: false,
            error: error.response,
            code: error.code,
            stack: error.stack,
            statusText: this.getStatusText(error)
          });
        });
      });
    },
    /**
     * @param file " fichier à uploaded"
     */
    postFile(url, file, id = null) {
      return new Promise((resolv, reject) => {
        this.getBase64(file).then((fileEncode) => {
          var headers = new Headers();
          var fileCompose = file.name.split(".");
          var myInit = {
            method: "POST",
            headers,
            // mode: "cors",
            body: JSON.stringify({
              upload: fileEncode.base64,
              ext: fileCompose.pop(),
              filename: fileCompose.join("."),
              id
            }),
            cache: "default"
          };
          const urlFinal = url.includes("://") ? url : this.getBaseUrl() + url;
          fetch(urlFinal, myInit).then(function(response) {
            response.json().then(function(json) {
              resolv(json);
            }).catch((error) => {
              reject(error);
            });
          });
        });
      });
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          var fileArray = reader.result.split(",");
          resolve({ src: reader.result, base64: fileArray[1] });
        };
        reader.onerror = (error) => reject(error);
      });
    }
  };
  const keyCren = "drupal-vuejs-credential";
  const valCren = "drupal-vuejs-cre-val";
  const user = {
    ...basicRequest,
    /**
     * ( Semble fonctionner au niveau drupal sans necessite de module ).
     * values = {
     *     name: '',
     *     pass: '',
     * }
     * @param {*} values
     * @returns
     */
    login(values) {
      return new Promise((resolv, reject) => {
        if (values.name && values.pass) {
          this.post("/user/login?_format=json", values).then((resp) => {
            this.saveTempCredential(values, resp.data);
            resolv(resp);
          }).catch((error) => reject(error));
        } else
          throw "Format de connexion non valide";
      });
    },
    /**
     * On sauvegarde de maniere temporaire les identifications de connexion.
     * Require https for securities.
     */
    saveTempCredential(values, resp) {
      localStorage.setItem(keyCren, JSON.stringify(values));
      localStorage.setItem(valCren, JSON.stringify(resp));
    },
    loadCredential() {
      const cre = localStorage.getItem(keyCren);
      if (cre) {
        return JSON.parse(cre);
      }
    },
    deleteConnexion() {
      localStorage.removeItem(keyCren);
    },
    checkCurrentUserIsLogin() {
      const cre = localStorage.getItem(valCren);
      const cre1 = localStorage.getItem(keyCren);
      if (cre !== void 0 && cre1 !== void 0 && cre) {
        return JSON.parse(cre);
      }
    }
  };
  const drupalUtile = {
    stringLength: 19,
    /**
     * Permet de convertir les strings en snake_case utilisable par les id de drupal.
     * @param {*} string
     * @returns
     */
    snakeCase(string) {
      return string.replace(/\W+/g, " ").split(/ |\B(?=[A-Z])/).map((word2) => word2.toLowerCase()).join("_");
    },
    /**
     * Permet de generer un identifiant valide pour le creation de type d'entité
     */
    generateIdEntityType(string) {
      let idString = this.snakeCase(string).substring(0, this.stringLength);
      const start2 = /* @__PURE__ */ new Date();
      idString += "_";
      idString += start2.getFullYear();
      idString += "_";
      idString += start2.getMonth();
      idString += "_";
      idString += Math.floor(Math.random() * 999);
      return idString;
    }
  };
  var formatBasicAuth = function(userName, password) {
    var basicAuthCredential = userName + ":" + password;
    var bace64 = btoa(basicAuthCredential);
    return "Basic " + bace64;
  };
  const RequestBasicAuthen = {
    ...user,
    ...drupalUtile,
    /**
     * Recupere les données à travers une route authentifié via drupal;
     */
    async dGet(url, configCustom = null, showNotification = false) {
      const userLogin = this.loadCredential();
      var configs = {
        "Content-Type": "application/json"
      };
      if (userLogin) {
        console.log("userLogin : ", userLogin);
        configs["Authorization"] = formatBasicAuth(
          userLogin.name,
          userLogin.pass
        );
      }
      if (configCustom) {
        configs = this.mergeHeaders(configCustom, configs);
      }
      return this.get(
        url,
        {
          headers: configs
        },
        showNotification
      );
    },
    /**
     * Enregistre les données à travers une route authentifié via drupal;
     */
    async dPost(url, datas, configCustom = null, showNotification = true) {
      const userLogin = this.loadCredential();
      var configs = {
        "Content-Type": "application/json"
      };
      if (userLogin) {
        configs["Authorization"] = formatBasicAuth(
          userLogin.name,
          userLogin.pass
        );
      }
      if (configCustom) {
        configs = this.mergeHeaders(configCustom, configs);
      }
      return this.post(
        url,
        datas,
        {
          headers: configs
        },
        showNotification
      );
    },
    /**
     *
     */
    mergeHeaders(configCustom, configs) {
      if (configCustom) {
        for (const i in configCustom) {
          configs[i] = configCustom[i];
        }
      }
      return configs;
    }
  };
  const config = {
    ...RequestBasicAuthen,
    languageId: window.drupalSettings && window.drupalSettings.path && window.drupalSettings.path.pathPrefix ? window.drupalSettings.path.pathPrefix.replaceAll("/", "") : null,
    debug: true,
    TestDomain: window.location.hostname === "localhost" ? "http://auto-ecole687.wb-horizon.kksa" : null
  };
  const store = new Vuex.Store({
    state: {
      currentStep: 0,
      steps: stepsList,
      configId: "",
      userState: {
        canSelect: !(stepsList[1].datas.schedulesCount >= stepsList[1].parameters.maxSchedules)
      },
      //Permet de determiner si l'utilisateur a acces à l'App.
      access: true,
      ban_reason: ""
    },
    mutations: {
      /**
       * Reset application
       */
      RESET_APP(state2) {
        state2.currentStep = 0;
        state2.steps[0].datas.value = { id: /* @__PURE__ */ new Date() };
        for (let index2 = 1; index2 < state2.steps.length; index2++) {
          state2.steps[index2].datas.value = null;
          state2.steps[index2].selectable = false;
        }
        state2.steps[1].datas.schedulesCount = 0;
        state2.steps[1].datas.selectedSchedules = [];
        state2.steps[1].datas.selectedMonitor = null;
      },
      /**
       * Permet de mettre à jour l'id de la configuration à récupérer
       * @param {String} id
       */
      SET_CONFIG_ID(state2, id) {
        state2.configId = id;
      },
      /**
       * definit l'url pour les paths
       * @param {{index: number, url: string}} payload
       */
      SET_STEP_URL(state2, payload) {
        state2.steps[payload.index].url = payload.url + "/";
      },
      /**
       *
       * @param {{value: any, index: number}} payload
       */
      SET_STEP_VALUE(state2, payload) {
        state2.steps[payload.index].datas.value = payload.value;
        state2.currentStep += 1;
        state2.steps[payload.index].selectable = true;
        for (let index2 = payload.index + 1; index2 < state2.steps.length; index2++) {
          state2.steps[index2].selectable = false;
          state2.steps[index2].isLoading = true;
          if (state2.steps[index2 - 1].datas.value) {
            state2.steps[index2].selectable = true;
          }
        }
        if (state2.currentStep == 1) {
          state2.steps[1].datas.schedulesCount = 0;
          state2.steps[1].datas.selectedSchedules = [];
          state2.steps[1].datas.selectedMonitor = null;
        }
      },
      /**
       * Mets à jours les paramètre d'une étape
       * @param {index: number, parameters: {any}} payload
       */
      SET_STEP_SETTINGS(state2, payload) {
        state2.steps[payload.index].parameters = payload.parameters;
      },
      /**
       *
       * @param {number} index
       */
      SET_CURRENT_STEP(state2, index2) {
        state2.currentStep = index2;
      },
      /**
       *
       * @param {{value: boolean, index: {time: number, index: number}}} payload
       */
      SET_SCH_FILTER(state2, payload) {
        const time = payload.index.time;
        const index2 = payload.index.index;
        state2.steps[1].parameters.schedulesList[time].times[index2].scheduleFiltred = payload.value;
      },
      /**
       *
       * @param {*} param0
       * @param {{time: number, index: number, value: boolean}} payload
       */
      SET_FILTER_STATE(state2, payload) {
        const maxSchedules = state2.steps[1].parameters.maxSchedules;
        state2.steps[1].parameters.schedulesList[payload.time].times[payload.index].filtred = payload.value;
        if (state2.steps[1].datas.schedulesCount >= maxSchedules) {
          state2.userState.canSelect = false;
        } else {
          state2.userState.canSelect = true;
        }
      },
      /**
       *
       * @param {*} param0
       * @param {{time: number, index: number}} payload
       */
      SET_SCHEDULE_STATE(state2, payload) {
        const maxSchedules = state2.steps[1].parameters.maxSchedules;
        const scheduleCount = state2.steps[1].datas.schedulesCount;
        const schedule = state2.steps[1].parameters.schedulesList[payload.time].times[payload.index];
        if (schedule.active && scheduleCount < maxSchedules || state2.steps[1].parameters.schedulesList[payload.time].times[payload.index].selected) {
          state2.steps[1].parameters.schedulesList[payload.time].times[payload.index].selected = !state2.steps[1].parameters.schedulesList[payload.time].times[payload.index].selected;
          if (schedule.selected) {
            state2.steps[1].datas.schedulesCount += 1;
            state2.steps[1].datas.selectedSchedules.push(payload);
          } else {
            state2.steps[1].datas.schedulesCount += -1;
            state2.steps[1].datas.selectedSchedules = state2.steps[1].datas.selectedSchedules.filter(
              (element) => {
                return element.time != payload.time || element.index != payload.index;
              }
            );
          }
          if (state2.steps[1].datas.schedulesCount >= state2.steps[1].parameters.maxSchedules) {
            state2.userState.canSelect = false;
          } else {
            state2.userState.canSelect = true;
          }
        }
      },
      /**
       *
       * @param {{index: number, state: boolean}} payload
       */
      SET_MONITOR_STATE(state2, payload) {
        state2.steps[1].parameters.monitorList[payload.index].disabled = payload.state;
      }
    },
    getters: {
      getBookResume(state2) {
        let index2 = 0;
        return [
          ...state2.steps.map((step) => {
            if (index2 < 2) {
              let value = "";
              switch (index2) {
                case 0:
                  value = step.datas.value.id;
                  break;
                case 1:
                  value = step.datas.value.map((schedule) => {
                    return {
                      label: schedule.begin + "<br/>-<br/>" + schedule.end,
                      begin: schedule.begin,
                      end: schedule.end
                    };
                  });
                  break;
                default:
                  value = step.datas.value;
                  break;
              }
              index2 += 1;
              return {
                icon: step.icon,
                name: step.resumedLabel,
                value
              };
            }
            index2 += 1;
          }).filter((element) => typeof element !== "undefined"),
          {
            icon: '<svg viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 0a3.499 3.499 0 1 0 0 6.996A3.499 3.499 0 1 0 7.5 0Zm-2 8.994a3.5 3.5 0 0 0-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 0 0-3.5-3.5h-4Z"/></svg>',
            name: "Moniteur",
            monitor: state2.steps[1].datas.selectedMonitor ? state2.steps[1].datas.selectedMonitor : state2.steps[1].parameters.monitorList.find((element) => !element.disabled),
            value: state2.steps[1].datas.selectedMonitor ? state2.steps[1].datas.selectedMonitor.name : state2.steps[1].parameters.monitorList.find((element) => !element.disabled).name
          }
        ];
      }
    },
    actions: {
      set_current_Step({ commit, state: state2 }, payload) {
        if (state2[payload.stepId - 1].selectable) {
          commit("SET_CURRENT_STEP", payload.stepId);
        }
      },
      updateFilter({ commit, state: state2 }, payload) {
        let time = 0;
        let index2 = 0;
        const monitors = payload.monitors;
        state2.steps[1].parameters.schedulesList.forEach((period) => {
          period.times.forEach((schedule) => {
            schedule.filtred = true;
            if (!monitors.length) {
              commit("SET_FILTER_STATE", { time, index: index2, value: false });
              state2.steps[1].datas.selectedMonitor = null;
            }
            let filtred = false;
            monitors.forEach((monitorValue) => {
              state2.steps[1].datas.selectedMonitor = monitorValue;
              if (!filtred && !schedule.monitors.includes(monitorValue.value)) {
                schedule.filtred = false;
                filtred = true;
                commit("SET_FILTER_STATE", { time, index: index2, value: true });
                if (schedule.selected) {
                  commit("SET_SCHEDULE_STATE", { time, index: index2 });
                }
              } else if (!filtred) {
                commit("SET_FILTER_STATE", { time, index: index2, value: false });
              }
            });
            index2 += 1;
            return schedule;
          });
          index2 = 0;
          time += 1;
        });
      },
      /**
       * à documenter ( vystii ! )
       * @param {*} param0
       */
      checkScheduleStep({ commit, dispatch, state: state2 }) {
        const selectedSchedules = state2.steps[1].datas.selectedSchedules;
        const schedulesList = state2.steps[1].parameters.schedulesList;
        state2.steps[1].parameters.monitorList.forEach((monitor) => {
          let monitorState = false;
          if (selectedSchedules.length) {
            selectedSchedules.forEach((schIndex) => {
              const schedule = schedulesList[schIndex.time].times[schIndex.index];
              if (!schedule.monitors.includes(monitor.value)) {
                monitorState = true;
              }
            });
          } else {
            monitorState = true;
            schedulesList.forEach((period) => {
              period.times.forEach((schedule) => {
                if (schedule.active && !schedule.filtred && schedule.monitors.includes(monitor.value)) {
                  monitorState = false;
                }
              });
            });
          }
          commit("SET_MONITOR_STATE", { index: monitor.value, state: monitorState });
        });
        dispatch("updateAllSchedule");
      },
      /**
       * Désactiver les créneaux qui n'ont pas au moins un moniteur en commun avec les créneaux déjà selectionnés
       * @param {*} param0
       */
      updateAllSchedule({ commit, state: state2 }) {
        const schedulesList = state2.steps[1].parameters.schedulesList;
        const monitorList = state2.steps[1].parameters.monitorList;
        let time = 0;
        let index2 = 0;
        schedulesList.forEach((period) => {
          period.times.forEach((schedule) => {
            let filtred = true;
            schedule.monitors.forEach((monitor) => {
              if (!monitorList[monitor].disabled) {
                filtred = false;
              }
            });
            commit("SET_SCH_FILTER", { value: filtred, index: { time, index: index2 } });
            index2 += 1;
          });
          time += 1;
          index2 = 0;
        });
      },
      /**
       * Recupere les données pour la configuration du calendrier.
       */
      loadConfigs({ state: state2, commit }) {
        var parameters = {};
        switch (state2.currentStep) {
          case 0:
            config.get(state2.steps[0].url).then((response) => {
              state2.access = response.data.access;
              if (!state2.access)
                state2.ban_reason = response.data.ban_reason;
              parameters.local = response.data.language;
              parameters.minDate = new Date(response.data.date_begin);
              parameters.maxDate = new Date(response.data.date_end);
              parameters.disabledDates = [
                {
                  repeat: {
                    weekdays: response.data.disabled_days.map((day) => day + 1)
                  }
                }
              ];
              const periodes = response.data.disabled_dates_periode.map((period) => {
                return { start: new Date(period.value), end: new Date(period.end_value) };
              });
              parameters.disabledDates = [
                ...parameters.disabledDates,
                ...response.data.disabled_dates.map((date) => new Date(date)),
                ...periodes
              ];
              commit("SET_STEP_SETTINGS", { index: 0, parameters });
              state2.steps[0].datas.value = { id: parameters.minDate };
              commit("SET_CONFIG_ID", response.data.booking_config_type_id);
              state2.steps[0].isLoading = false;
              if (state2.steps[1].url.split("/").reverse()[1] != response.data.booking_config_type_id) {
                state2.steps[1].url += response.data.booking_config_type_id + "/";
                state2.steps[2].url += response.data.booking_config_type_id + "/";
              }
            }).catch((err) => {
              console.log(err);
            });
            break;
          case 1:
            config.get(state2.steps[1].url + state2.steps[0].datas.value.id).then((response) => {
              parameters.monitorList = response.data.monitor_list.map((monitor) => {
                return { ...monitor, value: monitor.value - 1 };
              });
              parameters.maxSchedules = response.data.creneau_config.limit_reservation;
              parameters.schedulesList = response.data.schedules_list.map((period) => {
                if (period.status) {
                  const schedules = period.times.map((schedule) => {
                    return {
                      hour: response.data.creneau_config.show_end_hour ? schedule.hour.start + " - " + schedule.hour.end : schedule.hour.start,
                      begin: schedule.hour.start,
                      end: schedule.hour.end,
                      active: schedule.active,
                      monitors: schedule.monitors.map((monitor) => monitor - 1),
                      selected: false,
                      scheduleFiltred: false,
                      filtred: false
                    };
                  });
                  return {
                    name: period.name,
                    times: schedules
                  };
                }
              });
              state2.steps[1].isLoading = false;
              state2.steps[1].parameters = parameters;
              state2.userState.canSelect = true;
            }).catch((err) => {
              console.log(err);
            });
            break;
        }
      },
      setReservation({ state: state2, getters }) {
        this.commit("SET_STEP_VALUE", { index: 2, value: null });
        console.log(getters.getBookResume);
        const formFilled = getters.getBookResume;
        const data2 = {
          creneaux: formFilled[1].value.map((schedule) => {
            return {
              hour_start: schedule.begin,
              hour_end: schedule.end,
              equipe: formFilled[2].monitor,
              date_start: formFilled[0].value,
              date_end: formFilled[0].value
            };
          })
        };
        config.post(state2.steps[2].url, data2).then((response) => {
          console.log(response);
          state2.steps[3].isLoading = false;
          state2.steps[3].parameters.reportState = true;
        }).catch(() => {
          state2.steps[3].isLoading = false;
          state2.steps[3].parameters.reportState = false;
        });
      }
    },
    modules: {}
  });
  const calendar_selector = "data-url-calendar";
  const schedule_selector = "data-url-creneaux";
  const save_data_selector = "data-url-save";
  const app_id = "app";
  function _createForOfIteratorHelper$1(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$2$1(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e2) {
          throw _e2;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e3) {
      didErr = true;
      err = _e3;
    }, f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _toConsumableArray$2(arr) {
    return _arrayWithoutHoles$2(arr) || _iterableToArray$2(arr) || _unsupportedIterableToArray$2$1(arr) || _nonIterableSpread$2();
  }
  function _nonIterableSpread$2() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray$2(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles$2(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray$2$1(arr);
  }
  function _typeof$2$1(obj) {
    "@babel/helpers - typeof";
    return _typeof$2$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$2$1(obj);
  }
  function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2$1(arr, i) || _nonIterableRest$1();
  }
  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray$2$1(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray$2$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray$2$1(o, minLen);
  }
  function _arrayLikeToArray$2$1(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit$1(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i)
            return;
          _n = false;
        } else
          for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
            ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
            return;
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
  }
  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var DomHandler = {
    innerWidth: function innerWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }
      return 0;
    },
    width: function width(el) {
      if (el) {
        var width2 = el.offsetWidth;
        var style = getComputedStyle(el);
        width2 -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width2;
      }
      return 0;
    },
    getWindowScrollTop: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    },
    getWindowScrollLeft: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    },
    getOuterWidth: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.offsetWidth;
        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }
        return width;
      }
      return 0;
    },
    getOuterHeight: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.offsetHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
      }
      return 0;
    },
    getClientHeight: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;
        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
        return height;
      }
      return 0;
    },
    getViewport: function getViewport() {
      var win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    },
    getOffset: function getOffset(el) {
      if (el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
          left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
        };
      }
      return {
        top: "auto",
        left: "auto"
      };
    },
    index: function index2(element) {
      if (element) {
        var children = element.parentNode.childNodes;
        var num = 0;
        for (var i = 0; i < children.length; i++) {
          if (children[i] === element)
            return num;
          if (children[i].nodeType === 1)
            num++;
        }
      }
      return -1;
    },
    addMultipleClasses: function addMultipleClasses(element, className) {
      var _this = this;
      if (element && className) {
        className.split(" ").forEach(function(style) {
          return _this.addClass(element, style);
        });
      }
    },
    addClass: function addClass(element, className) {
      if (element && className && !this.hasClass(element, className)) {
        if (element.classList)
          element.classList.add(className);
        else
          element.className += " " + className;
      }
    },
    removeClass: function removeClass(element, className) {
      if (element && className) {
        if (element.classList)
          element.classList.remove(className);
        else
          element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    },
    hasClass: function hasClass(element, className) {
      if (element) {
        if (element.classList)
          return element.classList.contains(className);
        else
          return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
      }
      return false;
    },
    addStyles: function addStyles(element) {
      var styles2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (element) {
        Object.entries(styles2).forEach(function(_ref) {
          var _ref2 = _slicedToArray$1(_ref, 2), key = _ref2[0], value = _ref2[1];
          return element.style[key] = value;
        });
      }
    },
    find: function find2(element, selector) {
      return this.isElement(element) ? element.querySelectorAll(selector) : [];
    },
    findSingle: function findSingle(element, selector) {
      return this.isElement(element) ? element.querySelector(selector) : null;
    },
    createElement: function createElement(type) {
      var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (type) {
        var element = document.createElement(type);
        this.setAttributes(element, attributes);
        for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          children[_key - 2] = arguments[_key];
        }
        element.append.apply(element, children);
        return element;
      }
      return void 0;
    },
    setAttributes: function setAttributes(element) {
      var _this2 = this;
      var attributes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (element) {
        var computedStyles = function computedStyles2(rule, value) {
          var _element$$attrs, _element$$attrs2;
          var styles2 = element !== null && element !== void 0 && (_element$$attrs = element.$attrs) !== null && _element$$attrs !== void 0 && _element$$attrs[rule] ? [element === null || element === void 0 || (_element$$attrs2 = element.$attrs) === null || _element$$attrs2 === void 0 ? void 0 : _element$$attrs2[rule]] : [];
          return [value].flat().reduce(function(cv, v) {
            if (v !== null && v !== void 0) {
              var type = _typeof$2$1(v);
              if (type === "string" || type === "number") {
                cv.push(v);
              } else if (type === "object") {
                var _cv = Array.isArray(v) ? computedStyles2(rule, v) : Object.entries(v).map(function(_ref3) {
                  var _ref4 = _slicedToArray$1(_ref3, 2), _k = _ref4[0], _v = _ref4[1];
                  return rule === "style" && (!!_v || _v === 0) ? "".concat(_k.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ":").concat(_v) : !!_v ? _k : void 0;
                });
                cv = _cv.length ? cv.concat(_cv.filter(function(c) {
                  return !!c;
                })) : cv;
              }
            }
            return cv;
          }, styles2);
        };
        Object.entries(attributes).forEach(function(_ref5) {
          var _ref6 = _slicedToArray$1(_ref5, 2), key = _ref6[0], value = _ref6[1];
          if (value !== void 0 && value !== null) {
            var matchedEvent = key.match(/^on(.+)/);
            if (matchedEvent) {
              element.addEventListener(matchedEvent[1].toLowerCase(), value);
            } else if (key === "p-bind") {
              _this2.setAttributes(element, value);
            } else {
              value = key === "class" ? _toConsumableArray$2(new Set(computedStyles("class", value))).join(" ").trim() : key === "style" ? computedStyles("style", value).join(";").trim() : value;
              (element.$attrs = element.$attrs || {}) && (element.$attrs[key] = value);
              element.setAttribute(key, value);
            }
          }
        });
      }
    },
    getAttribute: function getAttribute(element, name) {
      if (element) {
        var value = element.getAttribute(name);
        if (!isNaN(value)) {
          return +value;
        }
        if (value === "true" || value === "false") {
          return value === "true";
        }
        return value;
      }
      return void 0;
    },
    isAttributeEquals: function isAttributeEquals(element, name, value) {
      return element ? this.getAttribute(element, name) === value : false;
    },
    isAttributeNotEquals: function isAttributeNotEquals(element, name, value) {
      return !this.isAttributeEquals(element, name, value);
    },
    getHeight: function getHeight(el) {
      if (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
      }
      return 0;
    },
    getWidth: function getWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
      }
      return 0;
    },
    absolutePosition: function absolutePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport2 = this.getViewport();
        var top2, left2;
        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport2.height) {
          top2 = targetOffset.top + windowScrollTop - elementOuterHeight;
          element.style.transformOrigin = "bottom";
          if (top2 < 0) {
            top2 = windowScrollTop;
          }
        } else {
          top2 = targetOuterHeight + targetOffset.top + windowScrollTop;
          element.style.transformOrigin = "top";
        }
        if (targetOffset.left + elementOuterWidth > viewport2.width)
          left2 = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
        else
          left2 = targetOffset.left + windowScrollLeft;
        element.style.top = top2 + "px";
        element.style.left = left2 + "px";
      }
    },
    relativePosition: function relativePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport2 = this.getViewport();
        var top2, left2;
        if (targetOffset.top + targetHeight + elementDimensions.height > viewport2.height) {
          top2 = -1 * elementDimensions.height;
          element.style.transformOrigin = "bottom";
          if (targetOffset.top + top2 < 0) {
            top2 = -1 * targetOffset.top;
          }
        } else {
          top2 = targetHeight;
          element.style.transformOrigin = "top";
        }
        if (elementDimensions.width > viewport2.width) {
          left2 = targetOffset.left * -1;
        } else if (targetOffset.left + elementDimensions.width > viewport2.width) {
          left2 = (targetOffset.left + elementDimensions.width - viewport2.width) * -1;
        } else {
          left2 = 0;
        }
        element.style.top = top2 + "px";
        element.style.left = left2 + "px";
      }
    },
    getParents: function getParents(element) {
      var parents = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
    },
    getScrollableParents: function getScrollableParents(element) {
      var scrollableParents = [];
      if (element) {
        var parents = this.getParents(element);
        var overflowRegex = /(auto|scroll)/;
        var overflowCheck = function overflowCheck2(node) {
          try {
            var styleDeclaration = window["getComputedStyle"](node, null);
            return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
          } catch (err) {
            return false;
          }
        };
        var _iterator = _createForOfIteratorHelper$1(parents), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var parent = _step.value;
            var scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
            if (scrollSelectors) {
              var selectors = scrollSelectors.split(",");
              var _iterator2 = _createForOfIteratorHelper$1(selectors), _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                  var selector = _step2.value;
                  var el = this.findSingle(parent, selector);
                  if (el && overflowCheck(el)) {
                    scrollableParents.push(el);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            if (parent.nodeType !== 9 && overflowCheck(parent)) {
              scrollableParents.push(parent);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return scrollableParents;
    },
    getHiddenElementOuterHeight: function getHiddenElementOuterHeight(element) {
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        var elementHeight = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementHeight;
      }
      return 0;
    },
    getHiddenElementOuterWidth: function getHiddenElementOuterWidth(element) {
      if (element) {
        element.style.visibility = "hidden";
        element.style.display = "block";
        var elementWidth = element.offsetWidth;
        element.style.display = "none";
        element.style.visibility = "visible";
        return elementWidth;
      }
      return 0;
    },
    getHiddenElementDimensions: function getHiddenElementDimensions(element) {
      if (element) {
        var dimensions = {};
        element.style.visibility = "hidden";
        element.style.display = "block";
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = "none";
        element.style.visibility = "visible";
        return dimensions;
      }
      return 0;
    },
    fadeIn: function fadeIn(element, duration) {
      if (element) {
        element.style.opacity = 0;
        var last2 = +/* @__PURE__ */ new Date();
        var opacity = 0;
        var tick = function tick2() {
          opacity = +element.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - last2) / duration;
          element.style.opacity = opacity;
          last2 = +/* @__PURE__ */ new Date();
          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick2) || setTimeout(tick2, 16);
          }
        };
        tick();
      }
    },
    fadeOut: function fadeOut(element, ms) {
      if (element) {
        var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
        var fading = setInterval(function() {
          opacity -= gap;
          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }
          element.style.opacity = opacity;
        }, interval);
      }
    },
    getUserAgent: function getUserAgent() {
      return navigator.userAgent;
    },
    appendChild: function appendChild(element, target) {
      if (this.isElement(target))
        target.appendChild(element);
      else if (target.el && target.elElement)
        target.elElement.appendChild(element);
      else
        throw new Error("Cannot append " + target + " to " + element);
    },
    isElement: function isElement2(obj) {
      return (typeof HTMLElement === "undefined" ? "undefined" : _typeof$2$1(HTMLElement)) === "object" ? obj instanceof HTMLElement : obj && _typeof$2$1(obj) === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
    },
    scrollInView: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset2 = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);
      if (offset2 < 0) {
        container.scrollTop = scroll + offset2;
      } else if (offset2 + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset2 - elementHeight + itemHeight;
      }
    },
    clearSelection: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document["selection"] && document["selection"].empty) {
        try {
          document["selection"].empty();
        } catch (error) {
        }
      }
    },
    getSelection: function getSelection() {
      if (window.getSelection)
        return window.getSelection().toString();
      else if (document.getSelection)
        return document.getSelection().toString();
      else if (document["selection"])
        return document["selection"].createRange().text;
      return null;
    },
    calculateScrollbarWidth: function calculateScrollbarWidth() {
      if (this.calculatedScrollbarWidth != null)
        return this.calculatedScrollbarWidth;
      var scrollDiv = document.createElement("div");
      this.addStyles(scrollDiv, {
        width: "100px",
        height: "100px",
        overflow: "scroll",
        position: "absolute",
        top: "-9999px"
      });
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    },
    getBrowser: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};
        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser["version"] = matched.version;
        }
        if (this.browser["chrome"]) {
          this.browser["webkit"] = true;
        } else if (this.browser["webkit"]) {
          this.browser["safari"] = true;
        }
      }
      return this.browser;
    },
    resolveUserAgent: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    },
    isVisible: function isVisible(element) {
      return element && element.offsetParent != null;
    },
    invokeElementMethod: function invokeElementMethod(element, methodName, args) {
      element[methodName].apply(element, args);
    },
    isExist: function isExist(element) {
      return !!(element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode);
    },
    isClient: function isClient() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    },
    focus: function focus(el, options) {
      el && document.activeElement !== el && el.focus(options);
    },
    isFocusableElement: function isFocusableElement(element) {
      var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return this.isElement(element) ? element.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector)) : false;
    },
    getFocusableElements: function getFocusableElements(element) {
      var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var focusableElements = this.find(element, 'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(selector, ',\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector, ',\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])').concat(selector));
      var visibleFocusableElements = [];
      var _iterator3 = _createForOfIteratorHelper$1(focusableElements), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var focusableElement = _step3.value;
          if (getComputedStyle(focusableElement).display != "none" && getComputedStyle(focusableElement).visibility != "hidden")
            visibleFocusableElements.push(focusableElement);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return visibleFocusableElements;
    },
    getFirstFocusableElement: function getFirstFocusableElement(element, selector) {
      var focusableElements = this.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[0] : null;
    },
    getLastFocusableElement: function getLastFocusableElement(element, selector) {
      var focusableElements = this.getFocusableElements(element, selector);
      return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
    },
    getNextFocusableElement: function getNextFocusableElement(container, element, selector) {
      var focusableElements = this.getFocusableElements(container, selector);
      var index2 = focusableElements.length > 0 ? focusableElements.findIndex(function(el) {
        return el === element;
      }) : -1;
      var nextIndex = index2 > -1 && focusableElements.length >= index2 + 1 ? index2 + 1 : -1;
      return nextIndex > -1 ? focusableElements[nextIndex] : null;
    },
    isClickable: function isClickable(element) {
      if (element) {
        var targetNode = element.nodeName;
        var parentNode = element.parentElement && element.parentElement.nodeName;
        return targetNode === "INPUT" || targetNode === "TEXTAREA" || targetNode === "BUTTON" || targetNode === "A" || parentNode === "INPUT" || parentNode === "TEXTAREA" || parentNode === "BUTTON" || parentNode === "A" || !!element.closest(".p-button, .p-checkbox, .p-radiobutton");
      }
      return false;
    },
    applyStyle: function applyStyle(element, style) {
      if (typeof style === "string") {
        element.style.cssText = style;
      } else {
        for (var prop in style) {
          element.style[prop] = style[prop];
        }
      }
    },
    isIOS: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
    },
    isAndroid: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    },
    isTouchDevice: function isTouchDevice() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
    },
    exportCSV: function exportCSV(csv, filename) {
      var blob = new Blob([csv], {
        type: "application/csv;charset=utf-8;"
      });
      if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + ".csv");
      } else {
        var link = document.createElement("a");
        if (link.download !== void 0) {
          link.setAttribute("href", URL.createObjectURL(blob));
          link.setAttribute("download", filename + ".csv");
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          csv = "data:text/csv;charset=utf-8," + csv;
          window.open(encodeURI(csv));
        }
      }
    }
  };
  function _toConsumableArray$1$1(arr) {
    return _arrayWithoutHoles$1$1(arr) || _iterableToArray$1$1(arr) || _unsupportedIterableToArray$1$1(arr) || _nonIterableSpread$1$1();
  }
  function _nonIterableSpread$1$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray$1$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles$1$1(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray$1$1(arr);
  }
  function _createForOfIteratorHelper$2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$1$1(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _unsupportedIterableToArray$1$1(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray$1$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray$1$1(o, minLen);
  }
  function _arrayLikeToArray$1$1(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _typeof$5(obj) {
    "@babel/helpers - typeof";
    return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$5(obj);
  }
  var ObjectUtils = {
    equals: function equals(obj1, obj2, field) {
      if (field)
        return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
      else
        return this.deepEquals(obj1, obj2);
    },
    deepEquals: function deepEquals(a, b) {
      if (a === b)
        return true;
      if (a && b && _typeof$5(a) == "object" && _typeof$5(b) == "object") {
        var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
        if (arrA && arrB) {
          length = a.length;
          if (length != b.length)
            return false;
          for (i = length; i-- !== 0; )
            if (!this.deepEquals(a[i], b[i]))
              return false;
          return true;
        }
        if (arrA != arrB)
          return false;
        var dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA != dateB)
          return false;
        if (dateA && dateB)
          return a.getTime() == b.getTime();
        var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA != regexpB)
          return false;
        if (regexpA && regexpB)
          return a.toString() == b.toString();
        var keys2 = Object.keys(a);
        length = keys2.length;
        if (length !== Object.keys(b).length)
          return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys2[i]))
            return false;
        for (i = length; i-- !== 0; ) {
          key = keys2[i];
          if (!this.deepEquals(a[key], b[key]))
            return false;
        }
        return true;
      }
      return a !== a && b !== b;
    },
    resolveFieldData: function resolveFieldData(data2, field) {
      if (data2 && Object.keys(data2).length && field) {
        if (this.isFunction(field)) {
          return field(data2);
        } else if (field.indexOf(".") === -1) {
          return data2[field];
        } else {
          var fields = field.split(".");
          var value = data2;
          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }
            value = value[fields[i]];
          }
          return value;
        }
      } else {
        return null;
      }
    },
    getItemValue: function getItemValue(obj) {
      for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }
      return this.isFunction(obj) ? obj.apply(void 0, params) : obj;
    },
    filter: function filter(value, fields, filterValue) {
      var filteredItems = [];
      if (value) {
        var _iterator = _createForOfIteratorHelper$2(value), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var item = _step.value;
            var _iterator2 = _createForOfIteratorHelper$2(fields), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                var field = _step2.value;
                if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                  filteredItems.push(item);
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return filteredItems;
    },
    reorderArray: function reorderArray(value, from, to) {
      if (value && from !== to) {
        if (to >= value.length) {
          to %= value.length;
          from %= value.length;
        }
        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    },
    findIndexInList: function findIndexInList(value, list) {
      var index2 = -1;
      if (list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i] === value) {
            index2 = i;
            break;
          }
        }
      }
      return index2;
    },
    contains: function contains2(value, list) {
      if (value != null && list && list.length) {
        var _iterator3 = _createForOfIteratorHelper$2(list), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var val = _step3.value;
            if (this.equals(value, val))
              return true;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return false;
    },
    insertIntoOrderedArray: function insertIntoOrderedArray(item, index2, arr, sourceArr) {
      if (arr.length > 0) {
        var injected = false;
        for (var i = 0; i < arr.length; i++) {
          var currentItemIndex = this.findIndexInList(arr[i], sourceArr);
          if (currentItemIndex > index2) {
            arr.splice(i, 0, item);
            injected = true;
            break;
          }
        }
        if (!injected) {
          arr.push(item);
        }
      } else {
        arr.push(item);
      }
    },
    removeAccents: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
      }
      return str;
    },
    getVNodeProp: function getVNodeProp(vnode, prop) {
      var props = vnode.props;
      if (props) {
        var kebapProp = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        var propName = Object.prototype.hasOwnProperty.call(props, kebapProp) ? kebapProp : prop;
        return vnode.type["extends"].props[prop].type === Boolean && props[propName] === "" ? true : props[propName];
      }
      return null;
    },
    toFlatCase: function toFlatCase(str) {
      return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
    },
    toKebabCase: function toKebabCase(str) {
      return this.isString(str) ? str.replace(/(_)/g, "-").replace(/[A-Z]/g, function(c, i) {
        return i === 0 ? c : "-" + c.toLowerCase();
      }).toLowerCase() : str;
    },
    toCapitalCase: function toCapitalCase(str) {
      return this.isString(str, {
        empty: false
      }) ? str[0].toUpperCase() + str.slice(1) : str;
    },
    isEmpty: function isEmpty(value) {
      return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && _typeof$5(value) === "object" && Object.keys(value).length === 0;
    },
    isNotEmpty: function isNotEmpty(value) {
      return !this.isEmpty(value);
    },
    isFunction: function isFunction2(value) {
      return !!(value && value.constructor && value.call && value.apply);
    },
    isObject: function isObject2(value) {
      var empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
    },
    isDate: function isDate2(value) {
      return value instanceof Date && value.constructor === Date;
    },
    isArray: function isArray2(value) {
      var empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return Array.isArray(value) && (empty || value.length !== 0);
    },
    isString: function isString2(value) {
      var empty = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      return typeof value === "string" && (empty || value !== "");
    },
    isPrintableCharacter: function isPrintableCharacter() {
      var _char = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return this.isNotEmpty(_char) && _char.length === 1 && _char.match(/\S| /);
    },
    /**
     * Firefox-v103 does not currently support the "findLast" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlast
     */
    findLast: function findLast(arr, callback) {
      var item;
      if (this.isNotEmpty(arr)) {
        try {
          item = arr.findLast(callback);
        } catch (_unused) {
          item = _toConsumableArray$1$1(arr).reverse().find(callback);
        }
      }
      return item;
    },
    /**
     * Firefox-v103 does not currently support the "findLastIndex" method. It is stated that this method will be supported with Firefox-v104.
     * https://caniuse.com/mdn-javascript_builtins_array_findlastindex
     */
    findLastIndex: function findLastIndex(arr, callback) {
      var index2 = -1;
      if (this.isNotEmpty(arr)) {
        try {
          index2 = arr.findLastIndex(callback);
        } catch (_unused2) {
          index2 = arr.lastIndexOf(_toConsumableArray$1$1(arr).reverse().find(callback));
        }
      }
      return index2;
    }
  };
  var lastId = 0;
  function UniqueComponentId() {
    var prefix = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
    lastId++;
    return "".concat(prefix).concat(lastId);
  }
  function tryOnMounted(fn) {
    var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (vue.getCurrentInstance())
      vue.onMounted(fn);
    else if (sync)
      fn();
    else
      vue.nextTick(fn);
  }
  var _id = 0;
  function useStyle(css) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var isLoaded = vue.ref(false);
    var cssRef = vue.ref(css);
    var styleRef = vue.ref(null);
    var defaultDocument = DomHandler.isClient() ? window.document : void 0;
    var _options$document = options.document, document2 = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media;
    var stop = function stop2() {
    };
    var load = function load2() {
      if (!document2)
        return;
      styleRef.value = document2.querySelector('style[data-primevue-style-id="'.concat(name, '"]')) || document2.getElementById(id) || document2.createElement("style");
      if (!styleRef.value.isConnected) {
        styleRef.value.type = "text/css";
        id && (styleRef.value.id = id);
        media && (styleRef.value.media = media);
        document2.head.appendChild(styleRef.value);
        name && styleRef.value.setAttribute("data-primevue-style-id", name);
      }
      if (isLoaded.value)
        return;
      stop = vue.watch(cssRef, function(value) {
        styleRef.value.textContent = value;
      }, {
        immediate: true
      });
      isLoaded.value = true;
    };
    var unload = function unload2() {
      if (!document2 || !isLoaded.value)
        return;
      stop();
      DomHandler.isExist(styleRef.value) && document2.head.removeChild(styleRef.value);
      isLoaded.value = false;
    };
    if (immediate && !manual)
      tryOnMounted(load);
    return {
      id,
      name,
      css: cssRef,
      unload,
      load,
      isLoaded: vue.readonly(isLoaded)
    };
  }
  var styles$9 = "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n}\n\n.p-hidden-accessible input,\n.p-hidden-accessible select {\n    transform: scale(0);\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n}\n";
  var _useStyle$9 = useStyle(styles$9, {
    name: "base",
    manual: true
  }), loadBaseStyle = _useStyle$9.load;
  function _typeof$4(obj) {
    "@babel/helpers - typeof";
    return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$4(obj);
  }
  function ownKeys$2(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$2(Object(source), true).forEach(function(key) {
        _defineProperty$4(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty$4(obj, key, value) {
    key = _toPropertyKey$3(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey$3(arg) {
    var key = _toPrimitive$3(arg, "string");
    return _typeof$4(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive$3(input2, hint) {
    if (_typeof$4(input2) !== "object" || input2 === null)
      return input2;
    var prim = input2[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input2, hint || "default");
      if (_typeof$4(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input2);
  }
  var inlineStyles$1 = {};
  var buttonStyles = "\n.p-button {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    vertical-align: bottom;\n    text-align: center;\n    overflow: hidden;\n    position: relative;\n}\n\n.p-button-label {\n    flex: 1 1 auto;\n}\n\n.p-button-icon-right {\n    order: 1;\n}\n\n.p-button:disabled {\n    cursor: default;\n}\n\n.p-button-icon-only {\n    justify-content: center;\n}\n\n.p-button-icon-only .p-button-label {\n    visibility: hidden;\n    width: 0;\n    flex: 0 0 auto;\n}\n\n.p-button-vertical {\n    flex-direction: column;\n}\n\n.p-button-icon-bottom {\n    order: 2;\n}\n\n.p-buttonset .p-button {\n    margin: 0;\n}\n\n.p-buttonset .p-button:not(:last-child) {\n    border-right: 0 none;\n}\n\n.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttonset .p-button:first-of-type {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.p-buttonset .p-button:last-of-type {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n\n.p-buttonset .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
  var checkboxStyles = "\n.p-checkbox {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n    position: relative;\n}\n\n.p-checkbox.p-checkbox-disabled {\n    cursor: default;\n}\n\n.p-checkbox-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n";
  var inputTextStyles = "\n.p-fluid .p-inputtext {\n    width: 100%;\n}\n\n/* InputGroup */\n.p-inputgroup {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup-addon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-inputgroup .p-float-label {\n    display: flex;\n    align-items: stretch;\n    width: 100%;\n}\n\n.p-inputgroup .p-inputtext,\n.p-fluid .p-inputgroup .p-inputtext,\n.p-inputgroup .p-inputwrapper,\n.p-fluid .p-inputgroup .p-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n/* Floating Label */\n.p-float-label {\n    display: block;\n    position: relative;\n}\n\n.p-float-label label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    margin-top: -.5rem;\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n}\n\n.p-float-label textarea ~ label {\n    top: 1rem;\n}\n\n.p-float-label input:focus ~ label,\n.p-float-label input.p-filled ~ label,\n.p-float-label textarea:focus ~ label,\n.p-float-label textarea.p-filled ~ label,\n.p-float-label .p-inputwrapper-focus ~ label,\n.p-float-label .p-inputwrapper-filled ~ label {\n    top: -.75rem;\n    font-size: 12px;\n}\n\n.p-float-label .input:-webkit-autofill ~ label {\n    top: -20px;\n    font-size: 12px;\n}\n\n.p-float-label .p-placeholder,\n.p-float-label input::placeholder,\n.p-float-label .p-inputtext::placeholder {\n    opacity: 0;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-float-label .p-focus .p-placeholder,\n.p-float-label input:focus::placeholder,\n.p-float-label .p-inputtext:focus::placeholder {\n    opacity: 1;\n    transition-property: all;\n    transition-timing-function: ease;\n}\n\n.p-input-icon-left,\n.p-input-icon-right {\n    position: relative;\n    display: inline-block;\n}\n\n.p-input-icon-left > i,\n.p-input-icon-left > svg,\n.p-input-icon-right > i,\n.p-input-icon-right > svg {\n    position: absolute;\n    top: 50%;\n    margin-top: -.5rem;\n}\n\n.p-fluid .p-input-icon-left,\n.p-fluid .p-input-icon-right {\n    display: block;\n    width: 100%;\n}\n";
  var radioButtonStyles = "\n.p-radiobutton {\n    position: relative;\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    vertical-align: bottom;\n}\n\n.p-radiobutton.p-radiobutton-disabled {\n    cursor: default;\n}\n\n.p-radiobutton-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.p-radiobutton-icon {\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    transform: translateZ(0) scale(.1);\n    border-radius: 50%;\n    visibility: hidden;\n}\n\n.p-radiobutton-box.p-highlight .p-radiobutton-icon {\n    transform: translateZ(0) scale(1.0, 1.0);\n    visibility: visible;\n}\n";
  var styles$8 = "\n.p-component, .p-component * {\n    box-sizing: border-box;\n}\n\n.p-hidden-space {\n    visibility: hidden;\n}\n\n.p-reset {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    text-decoration: none;\n    font-size: 100%;\n    list-style: none;\n}\n\n.p-disabled, .p-disabled * {\n    cursor: default !important;\n    pointer-events: none;\n    user-select: none;\n}\n\n.p-component-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-unselectable-text {\n    user-select: none;\n}\n\n.p-sr-only {\n    border: 0;\n    clip: rect(1px, 1px, 1px, 1px);\n    clip-path: inset(50%);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n    word-wrap: normal !important;\n}\n\n.p-link {\n	text-align: left;\n	background-color: transparent;\n	margin: 0;\n	padding: 0;\n	border: none;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-link:disabled {\n	cursor: default;\n}\n\n/* Non vue overlay animations */\n.p-connected-overlay {\n    opacity: 0;\n    transform: scaleY(0.8);\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-visible {\n    opacity: 1;\n    transform: scaleY(1);\n}\n\n.p-connected-overlay-hidden {\n    opacity: 0;\n    transform: scaleY(1);\n    transition: opacity .1s linear;\n}\n\n/* Vue based overlay animations */\n.p-connected-overlay-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-connected-overlay-leave-to {\n    opacity: 0;\n}\n\n.p-connected-overlay-enter-active {\n    transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-connected-overlay-leave-active {\n    transition: opacity .1s linear;\n}\n\n/* Toggleable Content */\n.p-toggleable-content-enter-from,\n.p-toggleable-content-leave-to {\n    max-height: 0;\n}\n\n.p-toggleable-content-enter-to,\n.p-toggleable-content-leave-from {\n    max-height: 1000px;\n}\n\n.p-toggleable-content-leave-active {\n    overflow: hidden;\n    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);\n}\n\n.p-toggleable-content-enter-active {\n    overflow: hidden;\n    transition: max-height 1s ease-in-out;\n}\n".concat(buttonStyles, "\n").concat(checkboxStyles, "\n").concat(inputTextStyles, "\n").concat(radioButtonStyles, "\n");
  var _useStyle$8 = useStyle(styles$8, {
    name: "common",
    manual: true
  }), loadStyle$8 = _useStyle$8.load;
  var script$h = {
    name: "BaseComponent",
    props: {
      pt: {
        type: Object,
        "default": void 0
      },
      unstyled: {
        type: Boolean,
        "default": void 0
      }
    },
    inject: {
      $parentInstance: {
        "default": void 0
      }
    },
    watch: {
      isUnstyled: {
        immediate: true,
        handler: function handler(newValue) {
          if (!newValue) {
            loadStyle$8();
            this.$options.css && this.$css.loadStyle();
          }
        }
      }
    },
    beforeCreate: function beforeCreate() {
      var _this$pt, _this$pt$onBeforeCrea, _this$$primevue, _this$$primevue$onBef;
      (_this$pt = this.pt) === null || _this$pt === void 0 || (_this$pt = _this$pt.hooks) === null || _this$pt === void 0 || (_this$pt$onBeforeCrea = _this$pt["onBeforeCreate"]) === null || _this$pt$onBeforeCrea === void 0 ? void 0 : _this$pt$onBeforeCrea.call(_this$pt);
      (_this$$primevue = this.$primevue) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.config) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.pt) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue[this.$.type.name]) === null || _this$$primevue === void 0 || (_this$$primevue = _this$$primevue.hooks) === null || _this$$primevue === void 0 || (_this$$primevue$onBef = _this$$primevue["onBeforeCreate"]) === null || _this$$primevue$onBef === void 0 ? void 0 : _this$$primevue$onBef.call(_this$$primevue);
    },
    created: function created() {
      this._hook("onCreated");
    },
    beforeMount: function beforeMount() {
      loadBaseStyle();
      this._hook("onBeforeMount");
    },
    mounted: function mounted() {
      this._hook("onMounted");
    },
    beforeUpdate: function beforeUpdate() {
      this._hook("onBeforeUpdate");
    },
    updated: function updated() {
      this._hook("onUpdated");
    },
    beforeUnmount: function beforeUnmount() {
      this._hook("onBeforeUnmount");
    },
    unmounted: function unmounted() {
      this._hook("onUnmounted");
    },
    methods: {
      _hook: function _hook(hookName) {
        var selfHook = this._getOptionValue(this.pt, "hooks.".concat(hookName));
        var globalHook = this._getOptionValue(this.globalPT, "hooks.".concat(hookName));
        selfHook === null || selfHook === void 0 ? void 0 : selfHook();
        globalHook === null || globalHook === void 0 ? void 0 : globalHook();
      },
      _getHostInstance: function _getHostInstance(instance) {
        return instance ? this.$options.hostName ? instance.$.type.name === this.$options.hostName ? instance : this._getHostInstance(instance.$parentInstance) : instance.$parentInstance : void 0;
      },
      _getOptionValue: function _getOptionValue(options) {
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var fKeys = ObjectUtils.toFlatCase(key).split(".");
        var fKey = fKeys.shift();
        return fKey ? ObjectUtils.isObject(options) ? this._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find(function(k) {
          return ObjectUtils.toFlatCase(k) === fKey;
        }) || ""], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(options, params);
      },
      _getPTValue: function _getPTValue() {
        var _this = this;
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var searchInDefaultPT = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : true;
        var getValue2 = function getValue3() {
          var value = _this._getOptionValue.apply(_this, arguments);
          return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? {
            "class": value
          } : value;
        };
        var datasetPrefix = "data-pc-";
        var self2 = getValue2(obj, key, params);
        var globalPT = searchInDefaultPT ? /./g.test(key) && !!params[key.split(".")[0]] ? getValue2(this.globalPT, key, params) : getValue2(this.defaultPT, key, params) : void 0;
        var merged = vue.mergeProps(self2, globalPT, _objectSpread$2(_objectSpread$2({}, key === "root" && _defineProperty$4({}, "".concat(datasetPrefix, "name"), ObjectUtils.toFlatCase(this.$.type.name))), {}, _defineProperty$4({}, "".concat(datasetPrefix, "section"), ObjectUtils.toFlatCase(key))));
        return merged;
      },
      ptm: function ptm() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this._getPTValue(this.pt, key, _objectSpread$2({
          instance: this,
          props: this.$props,
          state: this.$data
        }, params));
      },
      ptmo: function ptmo() {
        var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this._getPTValue(obj, key, _objectSpread$2({
          instance: this
        }, params), false);
      },
      cx: function cx() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return !this.isUnstyled ? this._getOptionValue(this.$css.classes, key, _objectSpread$2({
          instance: this,
          props: this.$props,
          state: this.$data,
          parentInstance: this.$parentInstance
        }, params)) : void 0;
      },
      sx: function sx() {
        var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (when) {
          var self2 = this._getOptionValue(this.$css.inlineStyles, key, _objectSpread$2({
            instance: this,
            props: this.$props,
            state: this.$data,
            parentInstance: this.$parentInstance
          }, params));
          var base = this._getOptionValue(inlineStyles$1, key, _objectSpread$2({
            instance: this,
            props: this.$props,
            state: this.$data,
            parentInstance: this.$parentInstance
          }, params));
          return [base, self2];
        }
        return void 0;
      }
    },
    computed: {
      globalPT: function globalPT() {
        return ObjectUtils.getItemValue(this.$primevue.config.pt, {
          instance: this
        });
      },
      defaultPT: function defaultPT() {
        return this._getOptionValue(this.$primevue.config.pt, this.$options.hostName || this.$.type.name, {
          instance: this
        }) || this.globalPT;
      },
      isUnstyled: function isUnstyled() {
        return this.unstyled !== void 0 ? this.unstyled : this.$primevue.config.unstyled;
      },
      $css: function $css() {
        return _objectSpread$2(_objectSpread$2({
          classes: void 0,
          inlineStyles: void 0,
          loadStyle: function loadStyle2() {
          }
        }, (this._getHostInstance(this) || {}).$css), this.$options.css);
      }
    }
  };
  var styles$7 = "\n.p-skeleton {\n    overflow: hidden;\n}\n\n.p-skeleton::after {\n    content: '';\n    animation: p-skeleton-animation 1.2s infinite;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(-100%);\n    z-index: 1;\n}\n\n.p-skeleton.p-skeleton-circle {\n    border-radius: 50%;\n}\n\n.p-skeleton-none::after {\n    animation: none;\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n";
  var inlineStyles = {
    root: {
      position: "relative"
    }
  };
  var classes$9 = {
    root: function root2(_ref) {
      var props = _ref.props;
      return ["p-skeleton p-component", {
        "p-skeleton-circle": props.shape === "circle",
        "p-skeleton-none": props.animation === "none"
      }];
    }
  };
  var _useStyle$7 = useStyle(styles$7, {
    name: "skeleton",
    manual: true
  }), loadStyle$7 = _useStyle$7.load;
  var script$1$8 = {
    name: "BaseSkeleton",
    "extends": script$h,
    props: {
      shape: {
        type: String,
        "default": "rectangle"
      },
      size: {
        type: String,
        "default": null
      },
      width: {
        type: String,
        "default": "100%"
      },
      height: {
        type: String,
        "default": "1rem"
      },
      borderRadius: {
        type: String,
        "default": null
      },
      animation: {
        type: String,
        "default": "wave"
      }
    },
    css: {
      classes: classes$9,
      inlineStyles,
      loadStyle: loadStyle$7
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$g = {
    name: "Skeleton",
    "extends": script$1$8,
    computed: {
      containerStyle: function containerStyle() {
        if (this.size)
          return {
            width: this.size,
            height: this.size,
            borderRadius: this.borderRadius
          };
        else
          return {
            width: this.width,
            height: this.height,
            borderRadius: this.borderRadius
          };
      }
    }
  };
  function render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      "class": _ctx.cx("root"),
      style: [_ctx.sx("root"), $options.containerStyle],
      "aria-hidden": "true"
    }, _ctx.ptm("root"), {
      "data-pc-name": "skeleton"
    }), null, 16);
  }
  script$g.render = render$e;
  const _sfc_main$m = {
    props: {
      isLoading: Boolean,
      stepId: Number,
      title: String,
      icon: String,
      minDate: Date,
      maxDate: Date,
      unavailableDates: {
        type: Array,
        default: null
      },
      currentDate: {
        type: [Date, String],
        required: true,
        default: /* @__PURE__ */ new Date()
      }
    },
    emits: ["setDate"],
    setup(props, { emit }) {
      console.log(props);
      const selectedDate = vue.ref(null);
      const disabledDates = vue.computed(() => {
        return props.unavailableDates;
      });
      const attr = vue.computed(() => {
        return [
          {
            locale: "fr",
            highlight: true,
            dates: new Date(props.currentDate)
          }
        ];
      });
      const onSelect = (day) => {
        if (!day.isDisabled) {
          emit("setDate", { value: { value: day.value, id: day.id }, index: 0 });
        }
      };
      return {
        ...props,
        attr,
        selectedDate,
        disabledDates,
        onSelect
      };
    },
    components: { Skeleton: script$g }
  };
  const CalendarTab_vue_vue_type_style_index_0_scoped_a507ad3c_lang = "";
  const _export_sfc$1 = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1$s = { key: 0 };
  const _hoisted_2$o = {
    key: 1,
    class: "main-contain"
  };
  const _hoisted_3$i = { class: "title-steps" };
  const _hoisted_4$b = ["innerHTML"];
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Skeleton = vue.resolveComponent("Skeleton");
    const _component_VCalendar = vue.resolveComponent("VCalendar");
    return $props.isLoading ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$s, [
      vue.createVNode(_component_Skeleton, {
        width: "75%",
        class: "mb-2",
        height: "20px"
      }),
      vue.createVNode(_component_Skeleton, {
        width: "100%",
        height: "220px",
        class: "mb-2"
      })
    ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$o, [
      vue.createElementVNode("h6", _hoisted_3$i, [
        vue.createElementVNode("span", {
          class: "mr-2",
          innerHTML: $props.icon
        }, null, 8, _hoisted_4$b),
        vue.createElementVNode(
          "span",
          null,
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        )
      ]),
      vue.createVNode(_component_VCalendar, {
        attributes: $setup.attr,
        "disabled-dates": $setup.disabledDates,
        "min-date": $props.minDate,
        "max-date": $props.maxDate,
        onDayclick: $setup.onSelect,
        color: "blue",
        locale: "fr",
        expanded: ""
      }, null, 8, ["attributes", "disabled-dates", "min-date", "max-date", "onDayclick"])
    ]));
  }
  const CalendarTab = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["render", _sfc_render$c], ["__scopeId", "data-v-a507ad3c"], ["__file", "/siteweb/AppVuejs/booking-app/src/components/CalendarTab.vue"]]);
  var styles$6 = "\n.p-badge {\n    display: inline-block;\n    border-radius: 10px;\n    text-align: center;\n    padding: 0 .5rem;\n}\n\n.p-overlay-badge {\n    position: relative;\n}\n\n.p-overlay-badge .p-badge {\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(50%,-50%);\n    transform-origin: 100% 0;\n    margin: 0;\n}\n\n.p-badge-dot {\n    width: .5rem;\n    min-width: .5rem;\n    height: .5rem;\n    border-radius: 50%;\n    padding: 0;\n}\n\n.p-badge-no-gutter {\n    padding: 0;\n    border-radius: 50%;\n}\n";
  var classes$8 = {
    root: function root2(_ref) {
      var props = _ref.props, instance = _ref.instance;
      return ["p-badge p-component", {
        "p-badge-no-gutter": ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
        "p-badge-dot": ObjectUtils.isEmpty(props.value) && !instance.$slots["default"],
        "p-badge-lg": props.size === "large",
        "p-badge-xl": props.size === "xlarge",
        "p-badge-info": props.severity === "info",
        "p-badge-success": props.severity === "success",
        "p-badge-warning": props.severity === "warning",
        "p-badge-danger": props.severity === "danger"
      }];
    }
  };
  var _useStyle$6 = useStyle(styles$6, {
    name: "badge",
    manual: true
  }), loadStyle$6 = _useStyle$6.load;
  var script$1$7 = {
    name: "BaseBadge",
    "extends": script$h,
    props: {
      value: {
        type: [String, Number],
        "default": null
      },
      severity: {
        type: String,
        "default": null
      },
      size: {
        type: String,
        "default": null
      }
    },
    css: {
      classes: classes$8,
      loadStyle: loadStyle$6
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$f = {
    name: "Badge",
    "extends": script$1$7
  };
  function render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
      "class": _ctx.cx("root")
    }, _ctx.ptm("root"), {
      "data-pc-name": "badge"
    }), [vue.renderSlot(_ctx.$slots, "default", {}, function() {
      return [vue.createTextVNode(vue.toDisplayString(_ctx.value), 1)];
    })], 16);
  }
  script$f.render = render$d;
  var script$e = {
    name: "BaseIcon",
    props: {
      label: {
        type: String,
        "default": void 0
      },
      spin: {
        type: Boolean,
        "default": false
      }
    },
    methods: {
      pti: function pti() {
        var isLabelEmpty = ObjectUtils.isEmpty(this.label);
        return {
          "class": ["p-icon", {
            "p-icon-spin": this.spin
          }],
          role: !isLabelEmpty ? "img" : void 0,
          "aria-label": !isLabelEmpty ? this.label : void 0,
          "aria-hidden": isLabelEmpty
        };
      }
    }
  };
  function styleInject(css, ref) {
    if (ref === void 0)
      ref = {};
    var insertAt = ref.insertAt;
    if (!css || typeof document === "undefined") {
      return;
    }
    var head2 = document.head || document.getElementsByTagName("head")[0];
    var style = document.createElement("style");
    style.type = "text/css";
    if (insertAt === "top") {
      if (head2.firstChild) {
        head2.insertBefore(style, head2.firstChild);
      } else {
        head2.appendChild(style);
      }
    } else {
      head2.appendChild(style);
    }
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  var css_248z = "\n.p-icon {\n    display: inline-block;\n}\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n@-webkit-keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n@keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n";
  styleInject(css_248z);
  var script$d = {
    name: "SpinnerIcon",
    "extends": script$e,
    computed: {
      pathId: function pathId() {
        return "pv_icon_clip_".concat(UniqueComponentId());
      }
    }
  };
  var _hoisted_1$r = ["clipPath"];
  var _hoisted_2$n = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_3$h = [_hoisted_2$n];
  var _hoisted_4$a = ["id"];
  var _hoisted_5$a = /* @__PURE__ */ vue.createElementVNode("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }, null, -1);
  var _hoisted_6$8 = [_hoisted_5$a];
  function render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _ctx.pti()), [vue.createElementVNode("g", {
      clipPath: "url(#".concat($options.pathId, ")")
    }, _hoisted_3$h, 8, _hoisted_1$r), vue.createElementVNode("defs", null, [vue.createElementVNode("clipPath", {
      id: "".concat($options.pathId)
    }, _hoisted_6$8, 8, _hoisted_4$a)])], 16);
  }
  script$d.render = render$c;
  function _typeof$3(obj) {
    "@babel/helpers - typeof";
    return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$3(obj);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray$2(o, minLen);
  }
  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i)
            return;
          _n = false;
        } else
          for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
            ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
            return;
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function ownKeys$1(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$1(Object(source), true).forEach(function(key) {
        _defineProperty$3(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty$3(obj, key, value) {
    key = _toPropertyKey$2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey$2(arg) {
    var key = _toPrimitive$2(arg, "string");
    return _typeof$3(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive$2(input2, hint) {
    if (_typeof$3(input2) !== "object" || input2 === null)
      return input2;
    var prim = input2[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input2, hint || "default");
      if (_typeof$3(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input2);
  }
  var BaseDirective = {
    _getMeta: function _getMeta() {
      return [ObjectUtils.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? void 0 : arguments.length <= 0 ? void 0 : arguments[0], ObjectUtils.getItemValue(ObjectUtils.isObject(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
    },
    _getOptionValue: function _getOptionValue(options) {
      var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var fKeys = ObjectUtils.toFlatCase(key).split(".");
      var fKey = fKeys.shift();
      return fKey ? ObjectUtils.isObject(options) ? BaseDirective._getOptionValue(ObjectUtils.getItemValue(options[Object.keys(options).find(function(k) {
        return ObjectUtils.toFlatCase(k) === fKey;
      }) || ""], params), fKeys.join("."), params) : void 0 : ObjectUtils.getItemValue(options, params);
    },
    _getPTValue: function _getPTValue() {
      var instance = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var obj = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var key = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      var params = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      var searchInDefaultPT = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true;
      var getValue2 = function getValue3() {
        var value = BaseDirective._getOptionValue.apply(BaseDirective, arguments);
        return ObjectUtils.isString(value) || ObjectUtils.isArray(value) ? {
          "class": value
        } : value;
      };
      var datasetPrefix = "data-pc-";
      var self2 = getValue2(obj, key, params);
      var globalPT = searchInDefaultPT ? getValue2(instance.defaultPT, key, params) : void 0;
      var merged = vue.mergeProps(self2, globalPT, _objectSpread$1(_objectSpread$1({}, key === "root" && _defineProperty$3({}, "".concat(datasetPrefix, "name"), ObjectUtils.toFlatCase(instance.$name))), {}, _defineProperty$3({}, "".concat(datasetPrefix, "section"), ObjectUtils.toFlatCase(key))));
      return merged;
    },
    _hook: function _hook(directiveName, hookName, el, binding, vnode, prevVnode) {
      var _binding$instance, _binding$value, _config$pt;
      var name = "on".concat(ObjectUtils.toCapitalCase(hookName));
      var config2 = binding === null || binding === void 0 || (_binding$instance = binding.instance) === null || _binding$instance === void 0 || (_binding$instance = _binding$instance.$primevue) === null || _binding$instance === void 0 ? void 0 : _binding$instance.config;
      var selfHook = binding === null || binding === void 0 || (_binding$value = binding.value) === null || _binding$value === void 0 || (_binding$value = _binding$value.pt) === null || _binding$value === void 0 || (_binding$value = _binding$value.hooks) === null || _binding$value === void 0 ? void 0 : _binding$value[name];
      var globalHook = config2 === null || config2 === void 0 || (_config$pt = config2.pt) === null || _config$pt === void 0 || (_config$pt = _config$pt.directives) === null || _config$pt === void 0 || (_config$pt = _config$pt[directiveName]) === null || _config$pt === void 0 || (_config$pt = _config$pt.hooks) === null || _config$pt === void 0 ? void 0 : _config$pt[name];
      var options = {
        el,
        binding,
        vnode,
        prevVnode
      };
      selfHook === null || selfHook === void 0 ? void 0 : selfHook(el === null || el === void 0 ? void 0 : el.$instance, options);
      globalHook === null || globalHook === void 0 ? void 0 : globalHook(el === null || el === void 0 ? void 0 : el.$instance, options);
    },
    _extend: function _extend(name) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var handleHook = function handleHook2(hook, el, binding, vnode, prevVnode) {
        var _binding$instance2, _config$pt2, _el$$instance$hook, _el$$instance5;
        el._$instances = el._$instances || {};
        var config2 = binding === null || binding === void 0 || (_binding$instance2 = binding.instance) === null || _binding$instance2 === void 0 || (_binding$instance2 = _binding$instance2.$primevue) === null || _binding$instance2 === void 0 ? void 0 : _binding$instance2.config;
        var $prevInstance = el._$instances[name] || {};
        var $options = ObjectUtils.isEmpty($prevInstance) ? _objectSpread$1(_objectSpread$1({}, options), options === null || options === void 0 ? void 0 : options.methods) : {};
        el._$instances[name] = _objectSpread$1(_objectSpread$1({}, $prevInstance), {}, {
          /* new instance variables to pass in directive methods */
          $name: name,
          $host: el,
          $binding: binding,
          $el: $prevInstance["$el"] || void 0,
          $css: _objectSpread$1({
            classes: void 0,
            inlineStyles: void 0,
            loadStyle: function loadStyle2() {
            }
          }, options === null || options === void 0 ? void 0 : options.css),
          /* computed instance variables */
          defaultPT: config2 === null || config2 === void 0 || (_config$pt2 = config2.pt) === null || _config$pt2 === void 0 || (_config$pt2 = _config$pt2.directives) === null || _config$pt2 === void 0 ? void 0 : _config$pt2[name],
          isUnstyled: el.unstyled !== void 0 ? el.unstyled : config2 === null || config2 === void 0 ? void 0 : config2.unstyled,
          /* instance's methods */
          ptm: function ptm() {
            var _el$$instance;
            var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return BaseDirective._getPTValue(el.$instance, (_el$$instance = el.$instance) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.$binding) === null || _el$$instance === void 0 || (_el$$instance = _el$$instance.value) === null || _el$$instance === void 0 ? void 0 : _el$$instance.pt, key, _objectSpread$1({}, params));
          },
          ptmo: function ptmo() {
            var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            var key = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return BaseDirective._getPTValue(el.$instance, obj, key, params, false);
          },
          cx: function cx() {
            var _el$$instance2, _el$$instance3;
            var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            return !((_el$$instance2 = el.$instance) !== null && _el$$instance2 !== void 0 && _el$$instance2.isUnstyled) ? BaseDirective._getOptionValue((_el$$instance3 = el.$instance) === null || _el$$instance3 === void 0 || (_el$$instance3 = _el$$instance3.$css) === null || _el$$instance3 === void 0 ? void 0 : _el$$instance3.classes, key, _objectSpread$1({}, params)) : void 0;
          },
          sx: function sx() {
            var _el$$instance4;
            var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            var when = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
            var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            return when ? BaseDirective._getOptionValue((_el$$instance4 = el.$instance) === null || _el$$instance4 === void 0 || (_el$$instance4 = _el$$instance4.$css) === null || _el$$instance4 === void 0 ? void 0 : _el$$instance4.inlineStyles, key, _objectSpread$1({}, params)) : void 0;
          }
        }, $options);
        el.$instance = el._$instances[name];
        (_el$$instance$hook = (_el$$instance5 = el.$instance)[hook]) === null || _el$$instance$hook === void 0 ? void 0 : _el$$instance$hook.call(_el$$instance5, el, binding, vnode, prevVnode);
        BaseDirective._hook(name, hook, el, binding, vnode, prevVnode);
      };
      return {
        created: function created(el, binding, vnode, prevVnode) {
          handleHook("created", el, binding, vnode, prevVnode);
        },
        beforeMount: function beforeMount(el, binding, vnode, prevVnode) {
          var _el$$instance6, _el$$instance7;
          loadBaseStyle();
          !((_el$$instance6 = el.$instance) !== null && _el$$instance6 !== void 0 && _el$$instance6.isUnstyled) && ((_el$$instance7 = el.$instance) === null || _el$$instance7 === void 0 || (_el$$instance7 = _el$$instance7.$css) === null || _el$$instance7 === void 0 ? void 0 : _el$$instance7.loadStyle());
          handleHook("beforeMount", el, binding, vnode, prevVnode);
        },
        mounted: function mounted(el, binding, vnode, prevVnode) {
          handleHook("mounted", el, binding, vnode, prevVnode);
        },
        beforeUpdate: function beforeUpdate(el, binding, vnode, prevVnode) {
          handleHook("beforeUpdate", el, binding, vnode, prevVnode);
        },
        updated: function updated(el, binding, vnode, prevVnode) {
          handleHook("updated", el, binding, vnode, prevVnode);
        },
        beforeUnmount: function beforeUnmount(el, binding, vnode, prevVnode) {
          handleHook("beforeUnmount", el, binding, vnode, prevVnode);
        },
        unmounted: function unmounted(el, binding, vnode, prevVnode) {
          handleHook("unmounted", el, binding, vnode, prevVnode);
        }
      };
    },
    extend: function extend2() {
      var _BaseDirective$_getMe = BaseDirective._getMeta.apply(BaseDirective, arguments), _BaseDirective$_getMe2 = _slicedToArray(_BaseDirective$_getMe, 2), name = _BaseDirective$_getMe2[0], options = _BaseDirective$_getMe2[1];
      return _objectSpread$1({
        extend: function extend3() {
          var _BaseDirective$_getMe3 = BaseDirective._getMeta.apply(BaseDirective, arguments), _BaseDirective$_getMe4 = _slicedToArray(_BaseDirective$_getMe3, 2), _name = _BaseDirective$_getMe4[0], _options = _BaseDirective$_getMe4[1];
          return BaseDirective.extend(_name, _objectSpread$1(_objectSpread$1(_objectSpread$1({}, options), options === null || options === void 0 ? void 0 : options.methods), _options));
        }
      }, BaseDirective._extend(name, options));
    }
  };
  var styles$5 = "\n.p-ripple {\n    overflow: hidden;\n    position: relative;\n}\n\n.p-ink {\n    display: block;\n    position: absolute;\n    background: rgba(255, 255, 255, 0.5);\n    border-radius: 100%;\n    transform: scale(0);\n    pointer-events: none;\n}\n\n.p-ink-active {\n    animation: ripple 0.4s linear;\n}\n\n.p-ripple-disabled .p-ink {\n    display: none !important;\n}\n\n@keyframes ripple {\n    100% {\n        opacity: 0;\n        transform: scale(2.5);\n    }\n}\n";
  var classes$7 = {
    root: "p-ink"
  };
  var _useStyle$5 = useStyle(styles$5, {
    name: "ripple",
    manual: true
  }), loadStyle$5 = _useStyle$5.load;
  var BaseRipple = BaseDirective.extend({
    css: {
      classes: classes$7,
      loadStyle: loadStyle$5
    }
  });
  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
  }
  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray$1(o, minLen);
  }
  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray$1(arr);
  }
  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  var Ripple = BaseRipple.extend("ripple", {
    mounted: function mounted(el, binding) {
      var primevue = binding.instance.$primevue;
      if (primevue && primevue.config && primevue.config.ripple) {
        var _binding$value;
        el.unstyled = primevue.config.unstyled || ((_binding$value = binding.value) === null || _binding$value === void 0 ? void 0 : _binding$value.unstyled) || false;
        this.create(el);
        this.bindEvents(el);
      }
      el.setAttribute("data-pd-ripple", true);
    },
    unmounted: function unmounted(el) {
      this.remove(el);
    },
    timeout: void 0,
    methods: {
      bindEvents: function bindEvents(el) {
        el.addEventListener("mousedown", this.onMouseDown.bind(this));
      },
      unbindEvents: function unbindEvents(el) {
        el.removeEventListener("mousedown", this.onMouseDown.bind(this));
      },
      create: function create(el) {
        var ink = DomHandler.createElement("span", {
          role: "presentation",
          "aria-hidden": true,
          "data-p-ink": true,
          "data-p-ink-active": false,
          "class": !el.unstyled && this.cx("root"),
          onAnimationEnd: this.onAnimationEnd,
          "p-bind": this.ptm("root")
        });
        el.appendChild(ink);
        this.$el = ink;
      },
      remove: function remove(el) {
        var ink = this.getInk(el);
        if (ink) {
          this.unbindEvents(el);
          ink.removeEventListener("animationend", this.onAnimationEnd);
          ink.remove();
        }
      },
      onMouseDown: function onMouseDown(event) {
        var target = event.currentTarget;
        var ink = this.getInk(target);
        if (!ink || getComputedStyle(ink, null).display === "none") {
          return;
        }
        !target.unstyled && DomHandler.removeClass(ink, "p-ink-active");
        ink.setAttribute("data-p-ink-active", "false");
        if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
          var d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));
          ink.style.height = d + "px";
          ink.style.width = d + "px";
        }
        var offset2 = DomHandler.getOffset(target);
        var x = event.pageX - offset2.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
        var y = event.pageY - offset2.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;
        ink.style.top = y + "px";
        ink.style.left = x + "px";
        !target.unstyled && DomHandler.addClass(ink, "p-ink-active");
        ink.setAttribute("data-p-ink-active", "true");
        this.timeout = setTimeout(function() {
          if (ink) {
            !target.unstyled && DomHandler.removeClass(ink, "p-ink-active");
            ink.setAttribute("data-p-ink-active", "false");
          }
        }, 401);
      },
      onAnimationEnd: function onAnimationEnd(event) {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        !event.currentTarget.unstyled && DomHandler.removeClass(event.currentTarget, "p-ink-active");
        event.currentTarget.setAttribute("data-p-ink-active", "false");
      },
      getInk: function getInk(el) {
        return el && el.children ? _toConsumableArray$1(el.children).find(function(child) {
          return DomHandler.getAttribute(child, "data-pc-name") === "ripple";
        }) : void 0;
      }
    }
  });
  function _typeof$2(obj) {
    "@babel/helpers - typeof";
    return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$2(obj);
  }
  function _defineProperty$2(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey$1(arg) {
    var key = _toPrimitive$1(arg, "string");
    return _typeof$2(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive$1(input2, hint) {
    if (_typeof$2(input2) !== "object" || input2 === null)
      return input2;
    var prim = input2[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input2, hint || "default");
      if (_typeof$2(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input2);
  }
  var classes$6 = {
    root: function root2(_ref) {
      var _ref2;
      var instance = _ref.instance, props = _ref.props;
      return ["p-button p-component", (_ref2 = {
        "p-button-icon-only": instance.hasIcon && !props.label && !props.badge,
        "p-button-vertical": (props.iconPos === "top" || props.iconPos === "bottom") && props.label,
        "p-disabled": instance.$attrs.disabled || instance.$attrs.disabled === "" || props.loading,
        "p-button-loading": props.loading,
        "p-button-loading-label-only": props.loading && !instance.hasIcon && props.label,
        "p-button-link": props.link
      }, _defineProperty$2(_ref2, "p-button-".concat(props.severity), props.severity), _defineProperty$2(_ref2, "p-button-raised", props.raised), _defineProperty$2(_ref2, "p-button-rounded", props.rounded), _defineProperty$2(_ref2, "p-button-text", props.text), _defineProperty$2(_ref2, "p-button-outlined", props.outlined), _defineProperty$2(_ref2, "p-button-sm", props.size === "small"), _defineProperty$2(_ref2, "p-button-lg", props.size === "large"), _defineProperty$2(_ref2, "p-button-plain", props.plain), _ref2)];
    },
    loadingIcon: "p-button-loading-icon pi-spin",
    icon: function icon(_ref3) {
      var props = _ref3.props;
      return ["p-button-icon", {
        "p-button-icon-left": props.iconPos === "left" && props.label,
        "p-button-icon-right": props.iconPos === "right" && props.label,
        "p-button-icon-top": props.iconPos === "top" && props.label,
        "p-button-icon-bottom": props.iconPos === "bottom" && props.label
      }];
    },
    label: "p-button-label"
  };
  var script$1$6 = {
    name: "BaseButton",
    "extends": script$h,
    props: {
      label: {
        type: String,
        "default": null
      },
      icon: {
        type: String,
        "default": null
      },
      iconPos: {
        type: String,
        "default": "left"
      },
      iconClass: {
        type: String,
        "default": null
      },
      badge: {
        type: String,
        "default": null
      },
      badgeClass: {
        type: String,
        "default": null
      },
      loading: {
        type: Boolean,
        "default": false
      },
      loadingIcon: {
        type: String,
        "default": void 0
      },
      link: {
        type: Boolean,
        "default": false
      },
      severity: {
        type: String,
        "default": null
      },
      raised: {
        type: Boolean,
        "default": false
      },
      rounded: {
        type: Boolean,
        "default": false
      },
      text: {
        type: Boolean,
        "default": false
      },
      outlined: {
        type: Boolean,
        "default": false
      },
      size: {
        type: String,
        "default": null
      },
      plain: {
        type: Boolean,
        "default": false
      }
    },
    css: {
      classes: classes$6
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$c = {
    name: "Button",
    "extends": script$1$6,
    methods: {
      getPTOptions: function getPTOptions(key) {
        return this.ptm(key, {
          context: {
            disabled: this.disabled
          }
        });
      }
    },
    computed: {
      disabled: function disabled() {
        return this.$attrs.disabled || this.$attrs.disabled === "" || this.loading;
      },
      defaultAriaLabel: function defaultAriaLabel() {
        return this.label ? this.label + (this.badge ? " " + this.badge : "") : this.$attrs["aria-label"];
      },
      hasIcon: function hasIcon() {
        return this.icon || this.$slots.icon;
      }
    },
    components: {
      SpinnerIcon: script$d,
      Badge: script$f
    },
    directives: {
      ripple: Ripple
    }
  };
  var _hoisted_1$q = ["aria-label", "disabled", "data-pc-severity"];
  function render$b(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_SpinnerIcon = vue.resolveComponent("SpinnerIcon");
    var _component_Badge = vue.resolveComponent("Badge");
    var _directive_ripple = vue.resolveDirective("ripple");
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", vue.mergeProps({
      "class": _ctx.cx("root"),
      type: "button",
      "aria-label": $options.defaultAriaLabel,
      disabled: $options.disabled
    }, $options.getPTOptions("root"), {
      "data-pc-name": "button",
      "data-pc-severity": _ctx.severity
    }), [vue.renderSlot(_ctx.$slots, "default", {}, function() {
      return [_ctx.loading ? vue.renderSlot(_ctx.$slots, "loadingicon", {
        key: 0,
        "class": vue.normalizeClass([_ctx.cx("loadingIcon"), _ctx.cx("icon")])
      }, function() {
        return [_ctx.loadingIcon ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
          key: 0,
          "class": [_ctx.cx("loadingIcon"), _ctx.cx("icon"), _ctx.loadingIcon]
        }, _ctx.ptm("loadingIcon")), null, 16)) : (vue.openBlock(), vue.createBlock(_component_SpinnerIcon, vue.mergeProps({
          key: 1,
          "class": [_ctx.cx("loadingIcon"), _ctx.cx("icon")],
          spin: ""
        }, _ctx.ptm("loadingIcon")), null, 16, ["class"]))];
      }) : vue.renderSlot(_ctx.$slots, "icon", {
        key: 1,
        "class": vue.normalizeClass(_ctx.cx("icon"))
      }, function() {
        return [_ctx.icon ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
          key: 0,
          "class": [_ctx.cx("icon"), _ctx.icon]
        }, _ctx.ptm("icon")), null, 16)) : vue.createCommentVNode("", true)];
      }), vue.createElementVNode("span", vue.mergeProps({
        "class": _ctx.cx("label")
      }, _ctx.ptm("label")), vue.toDisplayString(_ctx.label || " "), 17), _ctx.badge ? (vue.openBlock(), vue.createBlock(_component_Badge, vue.mergeProps({
        key: 2,
        value: _ctx.badge,
        "class": _ctx.badgeClass,
        unstyled: _ctx.unstyled
      }, _ctx.ptm("badge")), null, 16, ["value", "class", "unstyled"])) : vue.createCommentVNode("", true)];
    })], 16, _hoisted_1$q)), [[_directive_ripple]]);
  }
  script$c.render = render$b;
  var classes$5 = {
    root: function root2(_ref) {
      var props = _ref.props;
      return ["p-selectbutton p-buttonset p-component", {
        "p-disabled": props.disabled
      }];
    },
    button: function button(_ref2) {
      var instance = _ref2.instance, option = _ref2.option;
      return ["p-button p-component", {
        "p-highlight": instance.isSelected(option),
        "p-disabled": instance.isOptionDisabled(option)
      }];
    },
    label: "p-button-label"
  };
  var script$1$5 = {
    name: "BaseSelectButton",
    "extends": script$h,
    props: {
      modelValue: null,
      options: Array,
      optionLabel: null,
      optionValue: null,
      optionDisabled: null,
      multiple: Boolean,
      unselectable: {
        type: Boolean,
        "default": false
      },
      disabled: Boolean,
      dataKey: null,
      "aria-labelledby": {
        type: String,
        "default": null
      }
    },
    css: {
      classes: classes$5
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it)
          o = it;
        var i = 0;
        var F = function F2() {
        };
        return { s: F, n: function n() {
          if (i >= o.length)
            return { done: true };
          return { done: false, value: o[i++] };
        }, e: function e(_e) {
          throw _e;
        }, f: F };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return { s: function s() {
      it = it.call(o);
    }, n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    }, e: function e(_e2) {
      didErr = true;
      err = _e2;
    }, f: function f() {
      try {
        if (!normalCompletion && it["return"] != null)
          it["return"]();
      } finally {
        if (didErr)
          throw err;
      }
    } };
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++)
      arr2[i] = arr[i];
    return arr2;
  }
  var script$b = {
    name: "SelectButton",
    "extends": script$1$5,
    emits: ["update:modelValue", "focus", "blur", "change"],
    data: function data2() {
      return {
        focusedIndex: 0
      };
    },
    mounted: function mounted() {
      this.defaultTabIndexes();
    },
    methods: {
      defaultTabIndexes: function defaultTabIndexes() {
        var opts = DomHandler.find(this.$refs.container, '[data-pc-section="button"]');
        var firstHighlight = DomHandler.findSingle(this.$refs.container, '[data-p-highlight="true"]');
        for (var i = 0; i < opts.length; i++) {
          if (DomHandler.getAttribute(opts[i], "data-p-highlight") === true && ObjectUtils.equals(opts[i], firstHighlight) || firstHighlight === null && i == 0) {
            this.focusedIndex = i;
          }
        }
      },
      getOptionLabel: function getOptionLabel(option) {
        return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option;
      },
      getOptionValue: function getOptionValue(option) {
        return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : option;
      },
      getOptionRenderKey: function getOptionRenderKey(option) {
        return this.dataKey ? ObjectUtils.resolveFieldData(option, this.dataKey) : this.getOptionLabel(option);
      },
      getPTOptions: function getPTOptions(option, key) {
        return this.ptm(key, {
          context: {
            active: this.isSelected(option),
            disabled: this.isOptionDisabled(option)
          }
        });
      },
      isOptionDisabled: function isOptionDisabled(option) {
        return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : false;
      },
      onOptionSelect: function onOptionSelect(event, option, index2) {
        var _this = this;
        if (this.disabled || this.isOptionDisabled(option)) {
          return;
        }
        var selected = this.isSelected(option);
        if (selected && this.unselectable) {
          return;
        }
        var optionValue = this.getOptionValue(option);
        var newValue;
        if (this.multiple) {
          if (selected)
            newValue = this.modelValue.filter(function(val) {
              return !ObjectUtils.equals(val, optionValue, _this.equalityKey);
            });
          else
            newValue = this.modelValue ? [].concat(_toConsumableArray(this.modelValue), [optionValue]) : [optionValue];
        } else {
          newValue = selected ? null : optionValue;
        }
        this.focusedIndex = index2;
        this.$emit("update:modelValue", newValue);
        this.$emit("change", {
          event,
          value: newValue
        });
      },
      isSelected: function isSelected(option) {
        var selected = false;
        var optionValue = this.getOptionValue(option);
        if (this.multiple) {
          if (this.modelValue) {
            var _iterator = _createForOfIteratorHelper(this.modelValue), _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                var val = _step.value;
                if (ObjectUtils.equals(val, optionValue, this.equalityKey)) {
                  selected = true;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        } else {
          selected = ObjectUtils.equals(this.modelValue, optionValue, this.equalityKey);
        }
        return selected;
      },
      onKeydown: function onKeydown(event, option, index2) {
        switch (event.code) {
          case "Space": {
            this.onOptionSelect(event, option, index2);
            event.preventDefault();
            break;
          }
          case "ArrowDown":
          case "ArrowRight": {
            this.changeTabIndexes(event, "next");
            event.preventDefault();
            break;
          }
          case "ArrowUp":
          case "ArrowLeft": {
            this.changeTabIndexes(event, "prev");
            event.preventDefault();
            break;
          }
        }
      },
      changeTabIndexes: function changeTabIndexes(event, direction) {
        var firstTabableChild, index2;
        for (var i = 0; i <= this.$refs.container.children.length - 1; i++) {
          if (this.$refs.container.children[i].getAttribute("tabindex") === "0")
            firstTabableChild = {
              elem: this.$refs.container.children[i],
              index: i
            };
        }
        if (direction === "prev") {
          if (firstTabableChild.index === 0)
            index2 = this.$refs.container.children.length - 1;
          else
            index2 = firstTabableChild.index - 1;
        } else {
          if (firstTabableChild.index === this.$refs.container.children.length - 1)
            index2 = 0;
          else
            index2 = firstTabableChild.index + 1;
        }
        this.focusedIndex = index2;
        this.$refs.container.children[index2].focus();
      },
      onFocus: function onFocus(event) {
        this.$emit("focus", event);
      },
      onBlur: function onBlur(event, option) {
        if (event.target && event.relatedTarget && event.target.parentElement !== event.relatedTarget.parentElement) {
          this.defaultTabIndexes();
        }
        this.$emit("blur", event, option);
      }
    },
    computed: {
      equalityKey: function equalityKey() {
        return this.optionValue ? null : this.dataKey;
      }
    },
    directives: {
      ripple: Ripple
    }
  };
  var _hoisted_1$p = ["aria-labelledby"];
  var _hoisted_2$m = ["tabindex", "aria-label", "role", "aria-checked", "aria-disabled", "onClick", "onKeydown", "onBlur", "data-p-highlight", "data-p-disabled"];
  function render$a(_ctx, _cache, $props, $setup, $data, $options) {
    var _directive_ripple = vue.resolveDirective("ripple");
    return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      ref: "container",
      "class": _ctx.cx("root"),
      role: "group",
      "aria-labelledby": _ctx.ariaLabelledby
    }, _ctx.ptm("root"), {
      "data-pc-name": "selectbutton"
    }), [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.options, function(option, i) {
      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
        key: $options.getOptionRenderKey(option),
        tabindex: i === $data.focusedIndex ? "0" : "-1",
        "aria-label": $options.getOptionLabel(option),
        role: _ctx.multiple ? "checkbox" : "radio",
        "aria-checked": $options.isSelected(option),
        "aria-disabled": _ctx.optionDisabled,
        "class": _ctx.cx("button", {
          option
        }),
        onClick: function onClick($event) {
          return $options.onOptionSelect($event, option, i);
        },
        onKeydown: function onKeydown($event) {
          return $options.onKeydown($event, option, i);
        },
        onFocus: _cache[0] || (_cache[0] = function($event) {
          return $options.onFocus($event);
        }),
        onBlur: function onBlur($event) {
          return $options.onBlur($event, option);
        }
      }, $options.getPTOptions(option, "button"), {
        "data-p-highlight": $options.isSelected(option),
        "data-p-disabled": $options.isOptionDisabled(option)
      }), [vue.renderSlot(_ctx.$slots, "option", {
        option,
        index: i,
        "class": vue.normalizeClass(_ctx.cx("label"))
      }, function() {
        return [vue.createElementVNode("span", vue.mergeProps({
          "class": _ctx.cx("label")
        }, $options.getPTOptions(option, "label")), vue.toDisplayString($options.getOptionLabel(option)), 17)];
      })], 16, _hoisted_2$m)), [[_directive_ripple]]);
    }), 128))], 16, _hoisted_1$p);
  }
  script$b.render = render$a;
  var styles$4 = "\n.p-progressbar {\n    position: relative;\n    overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-value {\n    height: 100%;\n    width: 0%;\n    position: absolute;\n    display: none;\n    border: 0 none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n}\n\n.p-progressbar-determinate .p-progressbar-label {\n    display: inline-flex;\n}\n\n.p-progressbar-determinate .p-progressbar-value-animate {\n    transition: width 1s ease-in-out;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::before {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::after {\n    content: '';\n    position: absolute;\n    background-color: inherit;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    will-change: left, right;\n    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    -webkit-animation-delay: 1.15s;\n    animation-delay: 1.15s;\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n    0% {\n        left: -35%;\n        right: 100%;\n    }\n    60% {\n        left: 100%;\n        right: -90%;\n    }\n    100% {\n        left: 100%;\n        right: -90%;\n    }\n}\n@keyframes p-progressbar-indeterminate-anim {\n    0% {\n        left: -35%;\n        right: 100%;\n    }\n    60% {\n        left: 100%;\n        right: -90%;\n    }\n    100% {\n        left: 100%;\n        right: -90%;\n    }\n}\n\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        left: -200%;\n        right: 100%;\n    }\n    60% {\n        left: 107%;\n        right: -8%;\n    }\n    100% {\n        left: 107%;\n        right: -8%;\n    }\n}\n@keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        left: -200%;\n        right: 100%;\n    }\n    60% {\n        left: 107%;\n        right: -8%;\n    }\n    100% {\n        left: 107%;\n        right: -8%;\n    }\n}\n";
  var classes$4 = {
    root: function root2(_ref) {
      var instance = _ref.instance;
      return ["p-progressbar p-component", {
        "p-progressbar-determinate": instance.determinate,
        "p-progressbar-indeterminate": instance.indeterminate
      }];
    },
    container: "p-progressbar-indeterminate-container",
    value: "p-progressbar-value p-progressbar-value-animate",
    label: "p-progressbar-label"
  };
  var _useStyle$4 = useStyle(styles$4, {
    name: "progressbar",
    manual: true
  }), loadStyle$4 = _useStyle$4.load;
  var script$1$4 = {
    name: "BaseProgressBar",
    "extends": script$h,
    props: {
      value: {
        type: Number,
        "default": null
      },
      mode: {
        type: String,
        "default": "determinate"
      },
      showValue: {
        type: Boolean,
        "default": true
      }
    },
    css: {
      classes: classes$4,
      loadStyle: loadStyle$4
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$a = {
    name: "ProgressBar",
    "extends": script$1$4,
    computed: {
      progressStyle: function progressStyle() {
        return {
          width: this.value + "%",
          display: "flex"
        };
      },
      indeterminate: function indeterminate() {
        return this.mode === "indeterminate";
      },
      determinate: function determinate() {
        return this.mode === "determinate";
      }
    }
  };
  var _hoisted_1$o = ["aria-valuenow"];
  function render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      role: "progressbar",
      "class": _ctx.cx("root"),
      "aria-valuemin": "0",
      "aria-valuenow": _ctx.value,
      "aria-valuemax": "100"
    }, _ctx.ptm("root")), [$options.determinate ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      key: 0,
      "class": _ctx.cx("value"),
      style: $options.progressStyle
    }, _ctx.ptm("value")), [_ctx.value != null && _ctx.value !== 0 && _ctx.showValue ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      key: 0,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label")), [vue.renderSlot(_ctx.$slots, "default", {}, function() {
      return [vue.createTextVNode(vue.toDisplayString(_ctx.value + "%"), 1)];
    })], 16)) : vue.createCommentVNode("", true)], 16)) : vue.createCommentVNode("", true), $options.indeterminate ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      key: 1,
      "class": _ctx.cx("container")
    }, _ctx.ptm("container")), [vue.createElementVNode("div", vue.mergeProps({
      "class": _ctx.cx("value")
    }, _ctx.ptm("value")), null, 16)], 16)) : vue.createCommentVNode("", true)], 16, _hoisted_1$o);
  }
  script$a.render = render$9;
  const _sfc_main$l = {
    name: "ScheduleTabe",
    props: {
      title: String,
      icon: String,
      canSelect: {
        type: Boolean,
        required: true
      },
      schedulesList: {
        type: Array,
        required: true
      },
      monitorList: {
        type: Array,
        required: true
      },
      currentMonitor: {
        type: String,
        default: null
      },
      maxSchedules: {
        type: Number,
        required: true
      },
      selectedSchedules: {
        type: Number,
        required: true
      },
      isLoading: Boolean
    },
    emits: ["validateSchedule", "changeScheduleState", "updateFilter"],
    setup(props, { emit }) {
      const localMonitor = vue.ref([]);
      const selectionLeft = vue.computed(() => {
        const difference = props.maxSchedules - props.selectedSchedules;
        const percentage = props.selectedSchedules / props.maxSchedules * 100;
        let color = null;
        switch (true) {
          case percentage == 100:
            color = "red";
            break;
          case percentage > 75:
            color = "orange";
            break;
          default:
            color = "green";
            break;
        }
        return { label: difference + "/" + props.maxSchedules, percentage, color };
      });
      const canSubmit = vue.computed(() => {
        return props.selectedSchedules ? true : false;
      });
      const selectSchedule = (time, index2) => {
        if (props.schedulesList[time].times[index2].active) {
          emit("changeScheduleState", { time, index: index2 });
        }
      };
      const updateFilter = () => {
        const monitors = localMonitor.value ? [localMonitor.value] : [];
        emit("updateFilter", { monitors });
      };
      const submitDatas = () => {
        if (props.selectedSchedules) {
          const datas = new Array();
          props.schedulesList.forEach((time) => {
            time.times.forEach((schedule) => {
              if (schedule.selected) {
                datas.push({ hour: schedule.hour, begin: schedule.begin, end: schedule.end });
              }
            });
          });
          emit("validateSchedule", { index: 1, value: datas });
        }
      };
      return {
        ...props,
        selectionLeft,
        localMonitor,
        canSubmit,
        selectSchedule,
        submitDatas,
        updateFilter
      };
    },
    components: { Skeleton: script$g, pButton: script$c, SelectButton: script$b, ProgressBar: script$a }
  };
  const _hoisted_1$n = { class: "myi-5" };
  const _hoisted_2$l = { class: "title-steps" };
  const _hoisted_3$g = ["innerHTML"];
  const _hoisted_4$9 = { class: "monitor-selector" };
  const _hoisted_5$9 = { class: "monitor-form d-flex" };
  const _hoisted_6$7 = { class: "hours-content" };
  const _hoisted_7$5 = { class: "time-title" };
  const _hoisted_8$5 = { class: "time-list justify-content-between" };
  const _hoisted_9$3 = ["disabled", "onClick"];
  const _hoisted_10$2 = { class: "time" };
  const _hoisted_11$2 = { class: "hours-footer d-flex mt-4 justify-content-between" };
  const _hoisted_12$2 = { class: "hours-action w-100 mx-auto justify-content-end d-flex" };
  const _hoisted_13$1 = { class: "btn-container pr-0" };
  const _hoisted_14$1 = { class: "mt-2" };
  const _hoisted_15$1 = { class: "mb-4" };
  const _hoisted_16 = { class: "row" };
  const _hoisted_17 = { class: "col-3 mb-2" };
  const _hoisted_18 = { class: "col-3 mb-2" };
  const _hoisted_19 = { class: "col-3 mb-2" };
  const _hoisted_20 = { class: "col-3 mb-2" };
  const _hoisted_21 = { class: "col-3 mb-2" };
  const _hoisted_22 = { class: "col-3 mb-2" };
  const _hoisted_23 = { class: "col-3 mb-2" };
  const _hoisted_24 = { class: "col-3 mb-2" };
  const _hoisted_25 = { class: "mb-4" };
  const _hoisted_26 = { class: "row" };
  const _hoisted_27 = { class: "col-3 mb-2" };
  const _hoisted_28 = { class: "col-3 mb-2" };
  const _hoisted_29 = { class: "col-3 mb-2" };
  const _hoisted_30 = { class: "col-3 mb-2" };
  const _hoisted_31 = { class: "col-3 mb-2" };
  const _hoisted_32 = { class: "col-3 mb-2" };
  const _hoisted_33 = { class: "col-3 mb-2" };
  const _hoisted_34 = { class: "col-3 mb-2" };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_SelectButton = vue.resolveComponent("SelectButton");
    const _component_ProgressBar = vue.resolveComponent("ProgressBar");
    const _component_pButton = vue.resolveComponent("pButton");
    const _component_Skeleton = vue.resolveComponent("Skeleton");
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.withDirectives(vue.createElementVNode(
        "div",
        _hoisted_1$n,
        [
          vue.createElementVNode("h6", _hoisted_2$l, [
            vue.createElementVNode("span", {
              innerHTML: $props.icon,
              class: "mr-2"
            }, null, 8, _hoisted_3$g),
            vue.createElementVNode(
              "span",
              null,
              vue.toDisplayString($props.title),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("div", _hoisted_4$9, [
            vue.createElementVNode("div", _hoisted_5$9, [
              vue.createVNode(_component_SelectButton, {
                modelValue: $setup.localMonitor,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => $setup.localMonitor = $event),
                  $setup.updateFilter
                ],
                options: $props.monitorList,
                optionDisabled: "disabled",
                optionLabel: "name",
                class: "d-inline-block"
              }, null, 8, ["modelValue", "options", "onUpdate:modelValue"])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_6$7, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($props.schedulesList, (time, index2) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  class: "block-time",
                  key: index2
                }, [
                  vue.createElementVNode(
                    "h5",
                    _hoisted_7$5,
                    vue.toDisplayString(time.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("div", _hoisted_8$5, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(time.times, (heure, i) => {
                        return vue.openBlock(), vue.createElementBlock("button", {
                          class: vue.normalizeClass(["mb-2 time-btn", {
                            "active-btn": heure.active && $props.canSelect && !heure.filtred && !heure.scheduleFiltred || heure.selected,
                            "desabled-btn": !(heure.active && $props.canSelect) && !heure.selected || heure.filtred || heure.scheduleFiltred,
                            "selected-btn": heure.selected
                          }]),
                          key: i,
                          disabled: !(heure.active && $props.canSelect) && !heure.selected || heure.filtred || heure.scheduleFiltred,
                          onClick: ($event) => $setup.selectSchedule(index2, i)
                        }, [
                          vue.createElementVNode(
                            "span",
                            _hoisted_10$2,
                            vue.toDisplayString(heure.hour),
                            1
                            /* TEXT */
                          )
                        ], 10, _hoisted_9$3);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createVNode(_component_ProgressBar, {
            showValue: false,
            value: $setup.selectionLeft.percentage,
            pt: {
              value: { style: { background: $setup.selectionLeft.color } }
            },
            class: "time-progress-bar w-100"
          }, null, 8, ["value", "pt"]),
          vue.createElementVNode("div", _hoisted_11$2, [
            vue.createElementVNode("div", _hoisted_12$2, [
              vue.createElementVNode("div", _hoisted_13$1, [
                vue.createVNode(_component_pButton, {
                  disabled: !$setup.canSubmit,
                  onClick: $setup.submitDatas,
                  class: "ml-n3 w-100 mx-auto submit-btn",
                  icon: "pi pi-arrow-right",
                  iconPos: "right",
                  label: "Submit"
                }, null, 8, ["disabled", "onClick"])
              ])
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, !$props.isLoading]
      ]),
      vue.withDirectives(vue.createElementVNode(
        "div",
        _hoisted_14$1,
        [
          vue.createElementVNode("div", _hoisted_15$1, [
            vue.createVNode(_component_Skeleton, {
              class: "mb-3",
              animation: "wave",
              width: "40%",
              height: "20px"
            }),
            vue.createElementVNode("div", _hoisted_16, [
              vue.createElementVNode("div", _hoisted_17, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_18, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_19, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_20, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_21, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_22, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_23, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_24, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ])
            ])
          ]),
          vue.createElementVNode("div", _hoisted_25, [
            vue.createVNode(_component_Skeleton, {
              class: "mb-3",
              animation: "wave",
              width: "40%"
            }),
            vue.createElementVNode("div", _hoisted_26, [
              vue.createElementVNode("div", _hoisted_27, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_28, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_29, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_30, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_31, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_32, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_33, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ]),
              vue.createElementVNode("div", _hoisted_34, [
                vue.createVNode(_component_Skeleton, {
                  animation: "wave",
                  height: "30px"
                })
              ])
            ])
          ])
        ],
        512
        /* NEED_PATCH */
      ), [
        [vue.vShow, $props.isLoading]
      ])
    ]);
  }
  const ScheduleTab = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["render", _sfc_render$b], ["__file", "/siteweb/AppVuejs/booking-app/src/components/ScheduleTab.vue"]]);
  var styles$3 = "\n.p-timeline {\n    display: flex;\n    flex-grow: 1;\n    flex-direction: column;\n}\n\n.p-timeline-left .p-timeline-event-opposite {\n    text-align: right;\n}\n\n.p-timeline-left .p-timeline-event-content {\n    text-align: left;\n}\n\n.p-timeline-right .p-timeline-event {\n    flex-direction: row-reverse;\n}\n\n.p-timeline-right .p-timeline-event-opposite {\n    text-align: left;\n}\n\n.p-timeline-right .p-timeline-event-content {\n    text-align: right;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n    flex-direction: row-reverse;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n    text-align: right;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n    text-align: left;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n    text-align: left;\n}\n\n.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n    text-align: right;\n}\n\n.p-timeline-event {\n    display: flex;\n    position: relative;\n    min-height: 70px;\n}\n\n.p-timeline-event:last-child {\n    min-height: 0;\n}\n\n.p-timeline-event-opposite {\n    flex: 1;\n    padding: 0 1rem;\n}\n\n.p-timeline-event-content {\n    flex: 1;\n    padding: 0 1rem;\n}\n\n.p-timeline-event-separator {\n    flex: 0;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.p-timeline-event-marker {\n    display: flex;\n    align-self: baseline;\n}\n\n.p-timeline-event-connector {\n    flex-grow: 1;\n}\n\n.p-timeline-horizontal {\n    flex-direction: row;\n}\n\n.p-timeline-horizontal .p-timeline-event {\n    flex-direction: column;\n    flex: 1;\n}\n\n.p-timeline-horizontal .p-timeline-event:last-child {\n    flex: 0;\n}\n\n.p-timeline-horizontal .p-timeline-event-separator {\n    flex-direction: row;\n}\n\n.p-timeline-horizontal .p-timeline-event-connector {\n    width: 100%;\n}\n\n.p-timeline-bottom .p-timeline-event {\n    flex-direction: column-reverse;\n}\n\n.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n    flex-direction: column-reverse;\n}\n";
  var classes$3 = {
    root: function root2(_ref) {
      var props = _ref.props;
      return ["p-timeline p-component", "p-timeline-" + props.align, "p-timeline-" + props.layout];
    },
    event: "p-timeline-event",
    opposite: "p-timeline-event-opposite",
    separator: "p-timeline-event-separator",
    marker: "p-timeline-event-marker",
    connector: "p-timeline-event-connector",
    content: "p-timeline-event-content"
  };
  var _useStyle$3 = useStyle(styles$3, {
    name: "timeline",
    manual: true
  }), loadStyle$3 = _useStyle$3.load;
  var script$1$3 = {
    name: "BaseTimeline",
    "extends": script$h,
    props: {
      value: null,
      align: {
        mode: String,
        "default": "left"
      },
      layout: {
        mode: String,
        "default": "vertical"
      },
      dataKey: null
    },
    css: {
      classes: classes$3,
      loadStyle: loadStyle$3
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$9 = {
    name: "Timeline",
    "extends": script$1$3,
    methods: {
      getKey: function getKey(item, index2) {
        return this.dataKey ? ObjectUtils.resolveFieldData(item, this.dataKey) : index2;
      },
      getPTOptions: function getPTOptions(key, index2) {
        return this.ptm(key, {
          context: {
            index: index2,
            count: this.value.length
          }
        });
      }
    }
  };
  function render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      "class": _ctx.cx("root")
    }, _ctx.ptm("root"), {
      "data-pc-name": "timeline"
    }), [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.value, function(item, index2) {
      return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
        key: $options.getKey(item, index2),
        "class": _ctx.cx("event")
      }, $options.getPTOptions("event", index2)), [vue.createElementVNode("div", vue.mergeProps({
        "class": _ctx.cx("opposite", {
          index: index2
        })
      }, $options.getPTOptions("opposite", index2)), [vue.renderSlot(_ctx.$slots, "opposite", {
        item,
        index: index2
      })], 16), vue.createElementVNode("div", vue.mergeProps({
        "class": _ctx.cx("separator")
      }, $options.getPTOptions("separator", index2)), [vue.renderSlot(_ctx.$slots, "marker", {
        item,
        index: index2
      }, function() {
        return [vue.createElementVNode("div", vue.mergeProps({
          "class": _ctx.cx("marker")
        }, $options.getPTOptions("marker", index2)), null, 16)];
      }), index2 !== _ctx.value.length - 1 ? vue.renderSlot(_ctx.$slots, "connector", {
        key: 0,
        item,
        index: index2
      }, function() {
        return [vue.createElementVNode("div", vue.mergeProps({
          "class": _ctx.cx("connector")
        }, $options.getPTOptions("connector", index2)), null, 16)];
      }) : vue.createCommentVNode("", true)], 16), vue.createElementVNode("div", vue.mergeProps({
        "class": _ctx.cx("content")
      }, $options.getPTOptions("content", index2)), [vue.renderSlot(_ctx.$slots, "content", {
        item,
        index: index2
      })], 16)], 16);
    }), 128))], 16);
  }
  script$9.render = render$8;
  console.log("Hello world");
  const _sfc_main$k = {
    name: "ResumedTab",
    props: {
      index: Number,
      steps: {
        type: Array,
        required: true
      },
      callToAction: String,
      step_title: String,
      icon: String
    },
    emits: ["setReservation"],
    setup(props, { emit }) {
      const isConnected = vue.ref(true);
      const setReservation = () => {
        emit("setReservation");
      };
      return {
        ...props,
        isConnected,
        setReservation
      };
    },
    components: { TimeLine: script$9 }
  };
  const _hoisted_1$m = { class: "myi-5" };
  const _hoisted_2$k = { class: "title-steps h2 font-weight-bold" };
  const _hoisted_3$f = { class: "ts-icon" };
  const _hoisted_4$8 = ["innerHTML"];
  const _hoisted_5$8 = { class: "offers-content" };
  const _hoisted_6$6 = { class: "first-line" };
  const _hoisted_7$4 = { class: "cc-titre" };
  const _hoisted_8$4 = { class: "check-circle" };
  const _hoisted_9$2 = { class: "cc-rond" };
  const _hoisted_10$1 = ["innerHTML"];
  const _hoisted_11$1 = { class: "cc-description" };
  const _hoisted_12$1 = { key: 0 };
  const _hoisted_13 = { key: 1 };
  const _hoisted_14 = ["innerHTML"];
  const _hoisted_15 = { class: "book-bloc" };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_TimeLine = vue.resolveComponent("TimeLine");
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createElementVNode("div", _hoisted_1$m, [
        vue.createElementVNode("h6", _hoisted_2$k, [
          vue.createElementVNode("span", _hoisted_3$f, [
            vue.createElementVNode("div", {
              innerHTML: $props.icon,
              class: "h2 mr-2 d-inline-block"
            }, null, 8, _hoisted_4$8)
          ]),
          vue.createTextVNode(
            " " + vue.toDisplayString($props.step_title),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("div", _hoisted_5$8, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.steps.length, (index2) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: "option-selection os-selected",
                key: index2
              }, [
                vue.createElementVNode("div", _hoisted_6$6, [
                  vue.createElementVNode("div", _hoisted_7$4, [
                    vue.createElementVNode(
                      "span",
                      null,
                      vue.toDisplayString($props.steps[index2 - 1].name),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("div", _hoisted_8$4, [
                    vue.createElementVNode("span", _hoisted_9$2, [
                      vue.createElementVNode("p", {
                        class: "mb-0",
                        innerHTML: $props.steps[index2 - 1].icon,
                        "font-scale": "1"
                      }, null, 8, _hoisted_10$1)
                    ])
                  ])
                ]),
                vue.createElementVNode("div", _hoisted_11$1, [
                  $props.steps[index2 - 1].value instanceof String || typeof $props.steps[index2 - 1].value == "string" ? (vue.openBlock(), vue.createElementBlock(
                    "span",
                    _hoisted_12$1,
                    vue.toDisplayString($props.steps[index2 - 1].value),
                    1
                    /* TEXT */
                  )) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_13, [
                    vue.createVNode(_component_TimeLine, {
                      value: $props.steps[index2 - 1].value,
                      layout: "horizontal"
                    }, {
                      content: vue.withCtx((slotProps) => [
                        vue.createElementVNode("p", {
                          innerHTML: slotProps.item.label
                        }, null, 8, _hoisted_14)
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["value"])
                  ]))
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("div", _hoisted_15, [
          vue.createElementVNode(
            "button",
            {
              class: "book-btn",
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.setReservation())
            },
            vue.toDisplayString($props.callToAction),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const DisplayInfo = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["render", _sfc_render$a], ["__file", "/siteweb/AppVuejs/booking-app/src/components/DisplayInfo.vue"]]);
  var script$8 = {
    name: "ChevronRightIcon",
    "extends": script$e
  };
  var _hoisted_1$l = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_2$j = [_hoisted_1$l];
  function render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _ctx.pti()), _hoisted_2$j, 16);
  }
  script$8.render = render$7;
  var styles$2 = "\n.p-breadcrumb {\n    overflow-x: auto;\n}\n\n.p-breadcrumb .p-breadcrumb-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n}\n\n.p-breadcrumb .p-menuitem-text {\n    line-height: 1;\n}\n\n.p-breadcrumb .p-menuitem-link {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n}\n\n.p-breadcrumb .p-menuitem-separator {\n    display: flex;\n    align-items: center;\n}\n\n.p-breadcrumb::-webkit-scrollbar {\n    display: none;\n}\n";
  var classes$2 = {
    root: "p-breadcrumb p-component",
    menu: "p-breadcrumb-list",
    home: "p-breadcrumb-home",
    separator: "p-menuitem-separator",
    menuitem: function menuitem(_ref) {
      var instance = _ref.instance;
      return ["p-menuitem", {
        "p-disabled": instance.disabled()
      }];
    },
    action: function action(_ref2) {
      var props = _ref2.props, isActive = _ref2.isActive, isExactActive = _ref2.isExactActive;
      return ["p-menuitem-link", {
        "router-link-active": isActive,
        "router-link-active-exact": props.exact && isExactActive
      }];
    },
    icon: "p-menuitem-icon",
    label: "p-menuitem-text"
  };
  var _useStyle$2 = useStyle(styles$2, {
    name: "breadcrumb",
    manual: true
  }), loadStyle$2 = _useStyle$2.load;
  var script$2$1 = {
    name: "BaseBreadcrumb",
    "extends": script$h,
    props: {
      model: {
        type: Array,
        "default": null
      },
      home: {
        type: null,
        "default": null
      },
      exact: {
        type: Boolean,
        "default": true
      }
    },
    css: {
      classes: classes$2,
      loadStyle: loadStyle$2
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$1$2 = {
    name: "BreadcrumbItem",
    hostName: "Breadcrumb",
    "extends": script$h,
    props: {
      item: null,
      templates: null,
      exact: null,
      index: null
    },
    methods: {
      onClick: function onClick(event, navigate) {
        if (this.item.command) {
          this.item.command({
            originalEvent: event,
            item: this.item
          });
        }
        if (this.item.to && navigate) {
          navigate(event);
        }
      },
      visible: function visible() {
        return typeof this.item.visible === "function" ? this.item.visible() : this.item.visible !== false;
      },
      disabled: function disabled() {
        return typeof this.item.disabled === "function" ? this.item.disabled() : this.item.disabled;
      },
      label: function label() {
        return typeof this.item.label === "function" ? this.item.label() : this.item.label;
      },
      isCurrentUrl: function isCurrentUrl() {
        var _this$item = this.item, to = _this$item.to, url = _this$item.url;
        var lastPath = this.$router ? this.$router.currentRoute.path : "";
        return to === lastPath || url === lastPath ? "page" : void 0;
      }
    },
    computed: {
      ptmOptions: function ptmOptions() {
        return {
          context: {
            item: this.item,
            index: this.index
          }
        };
      }
    }
  };
  var _hoisted_1$k = ["href", "aria-current", "onClick"];
  var _hoisted_2$i = ["href", "target", "aria-current"];
  function render$1$1(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_router_link = vue.resolveComponent("router-link");
    return $options.visible() ? (vue.openBlock(), vue.createElementBlock("li", vue.mergeProps({
      key: 0,
      "class": [_ctx.cx("menuitem"), $props.item["class"]]
    }, _ctx.ptm("menuitem", $options.ptmOptions)), [!$props.templates || !$props.templates.item ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
      key: 0
    }, [$props.item.to ? (vue.openBlock(), vue.createBlock(_component_router_link, {
      key: 0,
      to: $props.item.to,
      custom: ""
    }, {
      "default": vue.withCtx(function(_ref) {
        var navigate = _ref.navigate, href = _ref.href, isActive = _ref.isActive, isExactActive = _ref.isExactActive;
        return [vue.createElementVNode("a", vue.mergeProps({
          href,
          "class": _ctx.cx("action", {
            isActive,
            isExactActive
          }),
          "aria-current": $options.isCurrentUrl(),
          onClick: function onClick($event) {
            return $options.onClick($event, navigate);
          }
        }, _ctx.ptm("action", $options.ptmOptions)), [$props.templates.itemicon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.itemicon), {
          key: 0,
          item: $props.item,
          "class": vue.normalizeClass(_ctx.cx("icon"))
        }, null, 8, ["item", "class"])) : $props.item.icon ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
          key: 1,
          "class": [_ctx.cx("icon"), $props.item.icon]
        }, _ctx.ptm("icon", $options.ptmOptions)), null, 16)) : vue.createCommentVNode("", true), $props.item.label ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
          key: 2,
          "class": _ctx.cx("label")
        }, _ctx.ptm("label", $options.ptmOptions)), vue.toDisplayString($options.label()), 17)) : vue.createCommentVNode("", true)], 16, _hoisted_1$k)];
      }),
      _: 1
    }, 8, ["to"])) : (vue.openBlock(), vue.createElementBlock("a", vue.mergeProps({
      key: 1,
      href: $props.item.url || "#",
      "class": _ctx.cx("action"),
      target: $props.item.target,
      "aria-current": $options.isCurrentUrl(),
      onClick: _cache[0] || (_cache[0] = function() {
        return $options.onClick && $options.onClick.apply($options, arguments);
      })
    }, _ctx.ptm("action", $options.ptmOptions)), [$props.templates && $props.templates.itemicon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.itemicon), {
      key: 0,
      item: $props.item,
      "class": vue.normalizeClass(_ctx.cx("icon", $options.ptmOptions))
    }, null, 8, ["item", "class"])) : $props.item.icon ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
      key: 1,
      "class": [_ctx.cx("icon"), $props.item.icon]
    }, _ctx.ptm("icon", $options.ptmOptions)), null, 16)) : vue.createCommentVNode("", true), $props.item.label ? (vue.openBlock(), vue.createElementBlock("span", vue.mergeProps({
      key: 2,
      "class": _ctx.cx("label")
    }, _ctx.ptm("label", $options.ptmOptions)), vue.toDisplayString($options.label()), 17)) : vue.createCommentVNode("", true)], 16, _hoisted_2$i))], 64)) : (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent($props.templates.item), {
      key: 1,
      item: $props.item
    }, null, 8, ["item"]))], 16)) : vue.createCommentVNode("", true);
  }
  script$1$2.render = render$1$1;
  var script$7 = {
    name: "Breadcrumb",
    "extends": script$2$1,
    components: {
      BreadcrumbItem: script$1$2,
      ChevronRightIcon: script$8
    }
  };
  function render$6(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_BreadcrumbItem = vue.resolveComponent("BreadcrumbItem");
    var _component_ChevronRightIcon = vue.resolveComponent("ChevronRightIcon");
    return vue.openBlock(), vue.createElementBlock("nav", vue.mergeProps({
      "class": _ctx.cx("root")
    }, _ctx.ptm("root"), {
      "data-pc-name": "breadcrumb"
    }), [vue.createElementVNode("ol", vue.mergeProps({
      "class": _ctx.cx("menu")
    }, _ctx.ptm("menu")), [_ctx.home ? (vue.openBlock(), vue.createBlock(_component_BreadcrumbItem, vue.mergeProps({
      key: 0,
      item: _ctx.home,
      "class": _ctx.cx("home"),
      templates: _ctx.$slots,
      exact: _ctx.exact,
      pt: _ctx.pt
    }, _ctx.ptm("home")), null, 16, ["item", "class", "templates", "exact", "pt"])) : vue.createCommentVNode("", true), (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.model, function(item, i) {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
        key: item.label
      }, [_ctx.home || i !== 0 ? (vue.openBlock(), vue.createElementBlock("li", vue.mergeProps({
        key: 0,
        "class": _ctx.cx("separator")
      }, _ctx.ptm("separator")), [vue.renderSlot(_ctx.$slots, "separator", {}, function() {
        return [vue.createVNode(_component_ChevronRightIcon, vue.mergeProps({
          "aria-hidden": "true"
        }, _ctx.ptm("separatorIcon")), null, 16)];
      })], 16)) : vue.createCommentVNode("", true), vue.createVNode(_component_BreadcrumbItem, {
        item,
        index: i,
        templates: _ctx.$slots,
        exact: _ctx.exact,
        pt: _ctx.pt
      }, null, 8, ["item", "index", "templates", "exact", "pt"])], 64);
    }), 128))], 16)], 16);
  }
  script$7.render = render$6;
  var script$6 = {
    name: "CheckIcon",
    "extends": script$e
  };
  var _hoisted_1$j = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_2$h = [_hoisted_1$j];
  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _ctx.pti()), _hoisted_2$h, 16);
  }
  script$6.render = render$5;
  var script$5 = {
    name: "ExclamationTriangleIcon",
    "extends": script$e,
    computed: {
      pathId: function pathId() {
        return "pv_icon_clip_".concat(UniqueComponentId());
      }
    }
  };
  var _hoisted_1$i = ["clipPath"];
  var _hoisted_2$g = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_3$e = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_4$7 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_5$7 = [_hoisted_2$g, _hoisted_3$e, _hoisted_4$7];
  var _hoisted_6$5 = ["id"];
  var _hoisted_7$3 = /* @__PURE__ */ vue.createElementVNode("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }, null, -1);
  var _hoisted_8$3 = [_hoisted_7$3];
  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _ctx.pti()), [vue.createElementVNode("g", {
      clipPath: "url(#".concat($options.pathId, ")")
    }, _hoisted_5$7, 8, _hoisted_1$i), vue.createElementVNode("defs", null, [vue.createElementVNode("clipPath", {
      id: "".concat($options.pathId)
    }, _hoisted_8$3, 8, _hoisted_6$5)])], 16);
  }
  script$5.render = render$4;
  var script$4 = {
    name: "InfoCircleIcon",
    "extends": script$e,
    computed: {
      pathId: function pathId() {
        return "pv_icon_clip_".concat(UniqueComponentId());
      }
    }
  };
  var _hoisted_1$h = ["clipPath"];
  var _hoisted_2$f = /* @__PURE__ */ vue.createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_3$d = [_hoisted_2$f];
  var _hoisted_4$6 = ["id"];
  var _hoisted_5$6 = /* @__PURE__ */ vue.createElementVNode("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }, null, -1);
  var _hoisted_6$4 = [_hoisted_5$6];
  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _ctx.pti()), [vue.createElementVNode("g", {
      clipPath: "url(#".concat($options.pathId, ")")
    }, _hoisted_3$d, 8, _hoisted_1$h), vue.createElementVNode("defs", null, [vue.createElementVNode("clipPath", {
      id: "".concat($options.pathId)
    }, _hoisted_6$4, 8, _hoisted_4$6)])], 16);
  }
  script$4.render = render$3;
  var script$3 = {
    name: "TimesCircleIcon",
    "extends": script$e,
    computed: {
      pathId: function pathId() {
        return "pv_icon_clip_".concat(UniqueComponentId());
      }
    }
  };
  var _hoisted_1$g = ["clipPath"];
  var _hoisted_2$e = /* @__PURE__ */ vue.createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",
    fill: "currentColor"
  }, null, -1);
  var _hoisted_3$c = [_hoisted_2$e];
  var _hoisted_4$5 = ["id"];
  var _hoisted_5$5 = /* @__PURE__ */ vue.createElementVNode("rect", {
    width: "14",
    height: "14",
    fill: "white"
  }, null, -1);
  var _hoisted_6$3 = [_hoisted_5$5];
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      width: "14",
      height: "14",
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _ctx.pti()), [vue.createElementVNode("g", {
      clipPath: "url(#".concat($options.pathId, ")")
    }, _hoisted_3$c, 8, _hoisted_1$g), vue.createElementVNode("defs", null, [vue.createElementVNode("clipPath", {
      id: "".concat($options.pathId)
    }, _hoisted_6$3, 8, _hoisted_4$5)])], 16);
  }
  script$3.render = render$2;
  var styles$1 = "\n.p-inline-message {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    vertical-align: top;\n}\n\n.p-inline-message-icon-only .p-inline-message-text {\n    visibility: hidden;\n    width: 0;\n}\n\n.p-fluid .p-inline-message {\n    display: flex;\n}\n";
  var classes$1 = {
    root: function root2(_ref) {
      var props = _ref.props, instance = _ref.instance;
      return ["p-inline-message p-component p-inline-message-" + props.severity, {
        "p-inline-message-icon-only": !instance.$slots["default"]
      }];
    },
    icon: function icon(_ref2) {
      var props = _ref2.props;
      return ["p-inline-message-icon", props.icon];
    },
    text: "p-inline-message-text"
  };
  var _useStyle$1 = useStyle(styles$1, {
    name: "inlinemessage",
    manual: true
  }), loadStyle$1 = _useStyle$1.load;
  var script$1$1 = {
    name: "BaseInlineMessage",
    "extends": script$h,
    props: {
      severity: {
        type: String,
        "default": "error"
      },
      icon: {
        type: String,
        "default": void 0
      }
    },
    css: {
      classes: classes$1,
      loadStyle: loadStyle$1
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script$2 = {
    name: "InlineMessage",
    "extends": script$1$1,
    timeout: null,
    data: function data2() {
      return {
        visible: true
      };
    },
    mounted: function mounted() {
      var _this = this;
      if (!this.sticky) {
        setTimeout(function() {
          _this.visible = false;
        }, this.life);
      }
    },
    computed: {
      iconComponent: function iconComponent() {
        return {
          info: script$4,
          success: script$6,
          warn: script$5,
          error: script$3
        }[this.severity];
      }
    }
  };
  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      "aria-live": "polite",
      "class": _ctx.cx("root")
    }, _ctx.ptm("root")), [vue.renderSlot(_ctx.$slots, "icon", {}, function() {
      return [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon ? "span" : $options.iconComponent), vue.mergeProps({
        "class": _ctx.cx("icon")
      }, _ctx.ptm("icon")), null, 16, ["class"]))];
    }), vue.createElementVNode("span", vue.mergeProps({
      "class": _ctx.cx("text")
    }, _ctx.ptm("text")), [vue.renderSlot(_ctx.$slots, "default", {}, function() {
      return [vue.createTextVNode(" ")];
    })], 16)], 16);
  }
  script$2.render = render$1;
  var styles = "\n.p-progress-spinner {\n    position: relative;\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n}\n\n.p-progress-spinner::before {\n    content: '';\n    display: block;\n    padding-top: 100%;\n}\n\n.p-progress-spinner-svg {\n    height: 100%;\n    transform-origin: center center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n";
  var classes = {
    root: "p-progress-spinner",
    spinner: "p-progress-spinner-svg",
    circle: "p-progress-spinner-circle"
  };
  var _useStyle = useStyle(styles, {
    name: "progressspinner",
    manual: true
  }), loadStyle = _useStyle.load;
  var script$1 = {
    name: "BaseProgressSpinner",
    "extends": script$h,
    props: {
      strokeWidth: {
        type: String,
        "default": "2"
      },
      fill: {
        type: String,
        "default": "none"
      },
      animationDuration: {
        type: String,
        "default": "2s"
      }
    },
    css: {
      classes,
      loadStyle
    },
    provide: function provide() {
      return {
        $parentInstance: this
      };
    }
  };
  var script = {
    name: "ProgressSpinner",
    "extends": script$1,
    computed: {
      svgStyle: function svgStyle() {
        return {
          "animation-duration": this.animationDuration
        };
      }
    }
  };
  var _hoisted_1$f = ["fill", "stroke-width"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
      "class": _ctx.cx("root"),
      role: "progressbar"
    }, _ctx.ptm("root"), {
      "data-pc-name": "progressspinner"
    }), [(vue.openBlock(), vue.createElementBlock("svg", vue.mergeProps({
      "class": _ctx.cx("spinner"),
      viewBox: "25 25 50 50",
      style: $options.svgStyle
    }, _ctx.ptm("spinner")), [vue.createElementVNode("circle", vue.mergeProps({
      "class": _ctx.cx("circle"),
      cx: "50",
      cy: "50",
      r: "20",
      fill: _ctx.fill,
      "stroke-width": _ctx.strokeWidth,
      strokeMiterlimit: "10"
    }, _ctx.ptm("circle")), null, 16, _hoisted_1$f)], 16))], 16);
  }
  script.render = render;
  const _sfc_main$j = {
    name: "BlocReservation",
    props: {
      isLoading: Boolean,
      reportState: Boolean,
      reportSuccess: {
        type: Object,
        required: true
      },
      reportError: {
        type: Object,
        required: true
      },
      btnLabel: {
        type: String,
        required: true
      }
    },
    emits: ["resetApp"],
    setup(props, { emit }) {
      const getMessage = vue.computed(() => {
        return props.reportState ? props.reportSuccess.message : props.reportError.message;
      });
      const getDescription = vue.computed(() => {
        return props.reportState ? props.reportSuccess.resumed : props.reportError.resumed;
      });
      const resetApp = () => {
        emit("resetApp");
      };
      return {
        ...props,
        getMessage,
        getDescription,
        resetApp
      };
    },
    components: { ProgressSpinner: script }
  };
  const _hoisted_1$e = /* @__PURE__ */ vue.createElementVNode(
    "div",
    { class: "dot" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_2$d = /* @__PURE__ */ vue.createElementVNode(
    "div",
    { class: "dot two" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$b = /* @__PURE__ */ vue.createElementVNode(
    "div",
    { class: "eye" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$4 = /* @__PURE__ */ vue.createElementVNode(
    "div",
    { class: "eye right" },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_5$4 = { class: "message" };
  const _hoisted_6$2 = { class: "report-title alert" };
  const _hoisted_7$2 = { class: "report-description" };
  const _hoisted_8$2 = { class: "report-title green" };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_ProgressSpinner = vue.resolveComponent("ProgressSpinner");
    return vue.openBlock(), vue.createElementBlock(
      "div",
      {
        class: vue.normalizeClass(["report", [$props.isLoading ? ["d-flex", "justify-content-around", "flex-column"] : ""]])
      },
      [
        $props.isLoading ? (vue.openBlock(), vue.createBlock(_component_ProgressSpinner, {
          key: 0,
          class: "d-block mx-auto",
          style: { "width": "50px", "height": "50px" },
          strokeWidth: "8",
          fill: "var(--surface-ground)",
          animationDuration: ".5s",
          "aria-label": "Custom ProgressSpinner"
        })) : (vue.openBlock(), vue.createElementBlock(
          "div",
          {
            key: 1,
            class: vue.normalizeClass(["report-box", {
              "report-box-success": $props.reportState,
              "report-box-error": !$props.reportState
            }])
          },
          [
            _hoisted_1$e,
            _hoisted_2$d,
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["face", {
                  "face-happy": $props.reportState,
                  "face-sad": !$props.reportState
                }])
              },
              [
                _hoisted_3$b,
                _hoisted_4$4,
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(["mouth", {
                      happy: $props.reportState,
                      sad: !$props.reportState
                    }])
                  },
                  null,
                  2
                  /* CLASS */
                )
              ],
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(["shadow", {
                  scale: $props.reportState,
                  move: !$props.reportState
                }])
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode("div", _hoisted_5$4, [
              vue.createElementVNode(
                "div",
                _hoisted_6$2,
                vue.toDisplayString($setup.getMessage),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "div",
                _hoisted_7$2,
                vue.toDisplayString($setup.getDescription),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.resetApp()),
              class: "button-box"
            }, [
              vue.createElementVNode(
                "div",
                _hoisted_8$2,
                vue.toDisplayString($props.btnLabel),
                1
                /* TEXT */
              )
            ])
          ],
          2
          /* CLASS */
        ))
      ],
      2
      /* CLASS */
    );
  }
  const ShowReport = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["render", _sfc_render$9], ["__file", "/siteweb/AppVuejs/booking-app/src/components/ShowReport.vue"]]);
  const _hoisted_1$d = { class: "main-app-container container" };
  const _hoisted_2$c = {
    key: 0,
    class: "main-app w-100 d-flex"
  };
  const _hoisted_3$a = { class: "app-main-contain px-md-5 px-2 mx-auto mt-5 mh-50" };
  const _hoisted_4$3 = {
    key: 0,
    class: "px-5"
  };
  const _hoisted_5$3 = ["onClick"];
  const _hoisted_6$1 = ["innerHTML"];
  const _hoisted_7$1 = { class: "step-label" };
  const _hoisted_8$1 = { key: 1 };
  const _hoisted_9$1 = {
    key: 1,
    class: "main-app w-100 d-flex"
  };
  const _hoisted_10 = { class: "app-main-contain px-md-5 px-2 mx-auto mt-5 mh-50" };
  const _hoisted_11 = { class: "flex align-items-center" };
  const _hoisted_12 = ["innerHTML"];
  const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const store2 = useStore();
      store2.dispatch("checkScheduleStep");
      store2.dispatch("loadConfigs");
      const getSteps = vue.computed(() => {
        const datas = store2.state.steps.map((step) => {
          const active = step.index == store2.state.currentStep;
          let classes2 = active ? "active-step" : "inactive-step";
          if (step.index < store2.state.currentStep) {
            classes2 = "passed-step";
          }
          if (!step.selectable) {
            classes2 += " disabled";
          }
          if (step.selectable) {
            classes2 += " selectable";
          }
          return {
            label: step.name,
            index: step.index,
            icon: step.icon,
            separator: true,
            selectable: step.selectable,
            class: classes2,
            displayName: step.index < store2.state.currentStep
          };
        });
        return datas;
      });
      const resetApp = () => {
        store2.commit("RESET_APP");
        store2.dispatch("loadConfigs");
      };
      const selectStep = (index2) => {
        if (store2.state.steps[index2].selectable) {
          store2.commit("SET_CURRENT_STEP", index2);
        }
      };
      const setStepValue = (payload) => {
        store2.commit("SET_STEP_VALUE", payload);
        store2.dispatch("loadConfigs");
      };
      const changeScheduleState = (indexes) => {
        store2.commit("SET_SCHEDULE_STATE", indexes);
        store2.dispatch("checkScheduleStep");
      };
      const updateFilter = (monitors) => {
        store2.dispatch("updateFilter", monitors);
      };
      const setReservation = () => {
        store2.dispatch("setReservation");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$d, [
          vue.unref(store2).state.access ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$c, [
            vue.createElementVNode("div", _hoisted_3$a, [
              vue.unref(store2).state.currentStep < 3 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$3, [
                vue.createElementVNode("div", null, [
                  vue.createVNode(vue.unref(script$7), {
                    class: "booking-breadcrumb mb-4",
                    model: getSteps.value
                  }, {
                    item: vue.withCtx(({ item }) => [
                      vue.createElementVNode("div", {
                        class: "py-2 d-flex justify-content-center",
                        onClick: ($event) => selectStep(item.index)
                      }, [
                        vue.createElementVNode("span", {
                          innerHTML: item.icon,
                          class: "d-flex breadcrumb-icon mr-md-1"
                        }, null, 8, _hoisted_6$1),
                        vue.createElementVNode(
                          "span",
                          _hoisted_7$1,
                          vue.toDisplayString(item.label),
                          1
                          /* TEXT */
                        )
                      ], 8, _hoisted_5$3)
                    ]),
                    separator: vue.withCtx(() => []),
                    _: 1
                    /* STABLE */
                  }, 8, ["model"])
                ]),
                vue.unref(store2).state.currentStep == 0 ? (vue.openBlock(), vue.createBlock(CalendarTab, {
                  key: 0,
                  "is-loading": vue.unref(store2).state.steps[0].isLoading,
                  "current-date": vue.unref(store2).state.steps[0].datas.value.id,
                  "step-id": 1,
                  title: vue.unref(store2).state.steps[0].title,
                  icon: vue.unref(store2).state.steps[0].icon,
                  "unavailable-dates": vue.unref(store2).state.steps[0].parameters.disabledDates,
                  "min-date": vue.unref(store2).state.steps[0].parameters.minDate,
                  "max-date": vue.unref(store2).state.steps[0].parameters.maxDate,
                  onSetDate: setStepValue,
                  class: "animate"
                }, null, 8, ["is-loading", "current-date", "title", "icon", "unavailable-dates", "min-date", "max-date"])) : vue.createCommentVNode("v-if", true),
                vue.unref(store2).state.currentStep == 1 ? (vue.openBlock(), vue.createBlock(ScheduleTab, vue.mergeProps({ key: 1 }, vue.unref(store2).state.steps[1].parameters, {
                  "can-select": vue.unref(store2).state.userState.canSelect,
                  "is-loading": vue.unref(store2).state.steps[1].isLoading,
                  "selected-schedules": vue.unref(store2).state.steps[1].datas.schedulesCount,
                  title: vue.unref(store2).state.steps[1].title,
                  icon: vue.unref(store2).state.steps[1].icon,
                  onChangeScheduleState: changeScheduleState,
                  onUpdateFilter: updateFilter,
                  onValidateSchedule: setStepValue,
                  class: "animate"
                }), null, 16, ["can-select", "is-loading", "selected-schedules", "title", "icon"])) : vue.createCommentVNode("v-if", true),
                vue.unref(store2).state.currentStep == 2 ? (vue.openBlock(), vue.createBlock(DisplayInfo, vue.mergeProps({ key: 2 }, vue.unref(store2).state.steps[2].parameters, {
                  index: vue.unref(store2).state.steps[2].index,
                  icon: vue.unref(store2).state.steps[2].icon,
                  step_title: vue.unref(store2).state.steps[2].title,
                  steps: vue.unref(store2).getters.getBookResume,
                  onSetReservation: setReservation
                }), null, 16, ["index", "icon", "step_title", "steps"])) : vue.createCommentVNode("v-if", true)
              ])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_8$1, [
                vue.createVNode(ShowReport, vue.mergeProps({
                  "is-loading": vue.unref(store2).state.steps[3].isLoading
                }, vue.unref(store2).state.steps[3].parameters, { onResetApp: resetApp }), null, 16, ["is-loading"])
              ]))
            ])
          ])) : vue.createCommentVNode("v-if", true),
          !vue.unref(store2).state.access ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$1, [
            vue.createElementVNode("div", _hoisted_10, [
              vue.createVNode(vue.unref(script$2), {
                severity: "warn",
                class: "border-primary w-full justify-content-start h3"
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("div", _hoisted_11, [
                    vue.createElementVNode("div", {
                      innerHTML: vue.unref(store2).state.ban_reason
                    }, null, 8, _hoisted_12)
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  });
  const App_vue_vue_type_style_index_0_scoped_7a7a37b1_lang = "";
  const App = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__scopeId", "data-v-7a7a37b1"], ["__file", "/siteweb/AppVuejs/booking-app/src/App.vue"]]);
  var FilterMatchMode = {
    STARTS_WITH: "startsWith",
    CONTAINS: "contains",
    NOT_CONTAINS: "notContains",
    ENDS_WITH: "endsWith",
    EQUALS: "equals",
    NOT_EQUALS: "notEquals",
    IN: "in",
    LESS_THAN: "lt",
    LESS_THAN_OR_EQUAL_TO: "lte",
    GREATER_THAN: "gt",
    GREATER_THAN_OR_EQUAL_TO: "gte",
    BETWEEN: "between",
    DATE_IS: "dateIs",
    DATE_IS_NOT: "dateIsNot",
    DATE_BEFORE: "dateBefore",
    DATE_AFTER: "dateAfter"
  };
  function _typeof$1(obj) {
    "@babel/helpers - typeof";
    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof$1(obj);
  }
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty$1(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof$1(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input2, hint) {
    if (_typeof$1(input2) !== "object" || input2 === null)
      return input2;
    var prim = input2[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input2, hint || "default");
      if (_typeof$1(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input2);
  }
  var defaultOptions$1 = {
    ripple: false,
    inputStyle: "outlined",
    locale: {
      startsWith: "Starts with",
      contains: "Contains",
      notContains: "Not contains",
      endsWith: "Ends with",
      equals: "Equals",
      notEquals: "Not equals",
      noFilter: "No Filter",
      lt: "Less than",
      lte: "Less than or equal to",
      gt: "Greater than",
      gte: "Greater than or equal to",
      dateIs: "Date is",
      dateIsNot: "Date is not",
      dateBefore: "Date is before",
      dateAfter: "Date is after",
      clear: "Clear",
      apply: "Apply",
      matchAll: "Match All",
      matchAny: "Match Any",
      addRule: "Add Rule",
      removeRule: "Remove Rule",
      accept: "Yes",
      reject: "No",
      choose: "Choose",
      upload: "Upload",
      cancel: "Cancel",
      completed: "Completed",
      pending: "Pending",
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      chooseYear: "Choose Year",
      chooseMonth: "Choose Month",
      chooseDate: "Choose Date",
      prevDecade: "Previous Decade",
      nextDecade: "Next Decade",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      prevHour: "Previous Hour",
      nextHour: "Next Hour",
      prevMinute: "Previous Minute",
      nextMinute: "Next Minute",
      prevSecond: "Previous Second",
      nextSecond: "Next Second",
      am: "am",
      pm: "pm",
      today: "Today",
      weekHeader: "Wk",
      firstDayOfWeek: 0,
      dateFormat: "mm/dd/yy",
      weak: "Weak",
      medium: "Medium",
      strong: "Strong",
      passwordPrompt: "Enter a password",
      emptyFilterMessage: "No results found",
      // @deprecated Use 'emptySearchMessage' option instead.
      searchMessage: "{0} results are available",
      selectionMessage: "{0} items selected",
      emptySelectionMessage: "No selected item",
      emptySearchMessage: "No results found",
      emptyMessage: "No available options",
      aria: {
        trueLabel: "True",
        falseLabel: "False",
        nullLabel: "Not Selected",
        star: "1 star",
        stars: "{star} stars",
        selectAll: "All items selected",
        unselectAll: "All items unselected",
        close: "Close",
        previous: "Previous",
        next: "Next",
        navigation: "Navigation",
        scrollTop: "Scroll Top",
        moveTop: "Move Top",
        moveUp: "Move Up",
        moveDown: "Move Down",
        moveBottom: "Move Bottom",
        moveToTarget: "Move to Target",
        moveToSource: "Move to Source",
        moveAllToTarget: "Move All to Target",
        moveAllToSource: "Move All to Source",
        pageLabel: "{page}",
        firstPageLabel: "First Page",
        lastPageLabel: "Last Page",
        nextPageLabel: "Next Page",
        prevPageLabel: "Previous Page",
        rowsPerPageLabel: "Rows per page",
        jumpToPageDropdownLabel: "Jump to Page Dropdown",
        jumpToPageInputLabel: "Jump to Page Input",
        selectRow: "Row Selected",
        unselectRow: "Row Unselected",
        expandRow: "Row Expanded",
        collapseRow: "Row Collapsed",
        showFilterMenu: "Show Filter Menu",
        hideFilterMenu: "Hide Filter Menu",
        filterOperator: "Filter Operator",
        filterConstraint: "Filter Constraint",
        editRow: "Row Edit",
        saveEdit: "Save Edit",
        cancelEdit: "Cancel Edit",
        listView: "List View",
        gridView: "Grid View",
        slide: "Slide",
        slideNumber: "{slideNumber}",
        zoomImage: "Zoom Image",
        zoomIn: "Zoom In",
        zoomOut: "Zoom Out",
        rotateRight: "Rotate Right",
        rotateLeft: "Rotate Left"
      }
    },
    filterMatchModeOptions: {
      text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
      numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
      date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
    },
    zIndex: {
      modal: 1100,
      overlay: 1e3,
      menu: 1e3,
      tooltip: 1100
    },
    pt: void 0,
    unstyled: false
  };
  var PrimeVueSymbol = Symbol();
  function switchTheme(currentTheme, newTheme, linkElementId, callback) {
    var linkElement = document.getElementById(linkElementId);
    var cloneLinkElement = linkElement.cloneNode(true);
    var newThemeUrl = linkElement.getAttribute("href").replace(currentTheme, newTheme);
    cloneLinkElement.setAttribute("id", linkElementId + "-clone");
    cloneLinkElement.setAttribute("href", newThemeUrl);
    cloneLinkElement.addEventListener("load", function() {
      linkElement.remove();
      cloneLinkElement.setAttribute("id", linkElementId);
      if (callback) {
        callback();
      }
    });
    linkElement.parentNode && linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
  }
  var PrimeVue = {
    install: function install2(app, options) {
      var configOptions = options ? _objectSpread(_objectSpread({}, defaultOptions$1), options) : _objectSpread({}, defaultOptions$1);
      var PrimeVue2 = {
        config: vue.reactive(configOptions),
        changeTheme: switchTheme
      };
      app.config.globalProperties.$primevue = PrimeVue2;
      app.provide(PrimeVueSymbol, PrimeVue2);
    }
  };
  var top = "top";
  var bottom = "bottom";
  var right = "right";
  var left = "left";
  var auto = "auto";
  var basePlacements = [top, bottom, right, left];
  var start = "start";
  var end = "end";
  var clippingParents = "clippingParents";
  var viewport = "viewport";
  var popper = "popper";
  var reference = "reference";
  var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []);
  var beforeRead = "beforeRead";
  var read = "read";
  var afterRead = "afterRead";
  var beforeMain = "beforeMain";
  var main = "main";
  var afterMain = "afterMain";
  var beforeWrite = "beforeWrite";
  var write = "write";
  var afterWrite = "afterWrite";
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
  function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
  }
  function getWindow(node) {
    if (node == null) {
      return window;
    }
    if (node.toString() !== "[object Window]") {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
  }
  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }
  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }
  function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") {
      return false;
    }
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }
  function applyStyles(_ref) {
    var state2 = _ref.state;
    Object.keys(state2.elements).forEach(function(name) {
      var style = state2.styles[name] || {};
      var attributes = state2.attributes[name] || {};
      var element = state2.elements[name];
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(name2) {
        var value = attributes[name2];
        if (value === false) {
          element.removeAttribute(name2);
        } else {
          element.setAttribute(name2, value === true ? "" : value);
        }
      });
    });
  }
  function effect$2(_ref2) {
    var state2 = _ref2.state;
    var initialStyles = {
      popper: {
        position: state2.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(state2.elements.popper.style, initialStyles.popper);
    state2.styles = initialStyles;
    if (state2.elements.arrow) {
      Object.assign(state2.elements.arrow.style, initialStyles.arrow);
    }
    return function() {
      Object.keys(state2.elements).forEach(function(name) {
        var element = state2.elements[name];
        var attributes = state2.attributes[name] || {};
        var styleProperties = Object.keys(state2.styles.hasOwnProperty(name) ? state2.styles[name] : initialStyles[name]);
        var style = styleProperties.reduce(function(style2, property2) {
          style2[property2] = "";
          return style2;
        }, {});
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  }
  const applyStyles$1 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect$2,
    requires: ["computeStyles"]
  };
  function getBasePlacement(placement) {
    return placement.split("-")[0];
  }
  var max = Math.max;
  var min = Math.min;
  var round = Math.round;
  function getUAString() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
      return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
      }).join(" ");
    }
    return navigator.userAgent;
  }
  function isLayoutViewport() {
    return !/^((?!chrome|android).)*safari/i.test(getUAString());
  }
  function getBoundingClientRect(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && isHTMLElement(element)) {
      scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
      scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
      width,
      height,
      top: y,
      right: x + width,
      bottom: y + height,
      left: x,
      x,
      y
    };
  }
  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element);
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }
    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }
    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width,
      height
    };
  }
  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) {
      return true;
    } else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;
      do {
        if (next && parent.isSameNode(next)) {
          return true;
        }
        next = next.parentNode || next.host;
      } while (next);
    }
    return false;
  }
  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function isTableElement(element) {
    return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
  }
  function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : (
      // $FlowFixMe[prop-missing]
      element.document
    )) || window.document).documentElement;
  }
  function getParentNode(element) {
    if (getNodeName(element) === "html") {
      return element;
    }
    return (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || // DOM Element detected
      (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element)
    );
  }
  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle$1(element).position === "fixed") {
      return null;
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    var isFirefox = /firefox/i.test(getUAString());
    var isIE = /Trident/i.test(getUAString());
    if (isIE && isHTMLElement(element)) {
      var elementCss = getComputedStyle$1(element);
      if (elementCss.position === "fixed") {
        return null;
      }
    }
    var currentNode = getParentNode(element);
    if (isShadowRoot(currentNode)) {
      currentNode = currentNode.host;
    }
    while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle$1(currentNode);
      if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }
    return null;
  }
  function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
      offsetParent = getTrueOffsetParent(offsetParent);
    }
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
      return window2;
    }
    return offsetParent || getContainingBlock(element) || window2;
  }
  function getMainAxisFromPlacement(placement) {
    return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
  }
  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min2, value, max2) {
    var v = within(min2, value, max2);
    return v > max2 ? max2 : v;
  }
  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }
  function expandToHashMap(value, keys2) {
    return keys2.reduce(function(hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }
  var toPaddingObject = function toPaddingObject2(padding, state2) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state2.rects, {
      placement: state2.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  };
  function arrow(_ref) {
    var _state$modifiersData$;
    var state2 = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state2.elements.arrow;
    var popperOffsets2 = state2.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state2.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) {
      return;
    }
    var paddingObject = toPaddingObject(options.padding, state2);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state2.rects.reference[len] + state2.rects.reference[axis] - popperOffsets2[axis] - state2.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state2.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state2.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
  function effect$1(_ref2) {
    var state2 = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) {
      return;
    }
    if (typeof arrowElement === "string") {
      arrowElement = state2.elements.popper.querySelector(arrowElement);
      if (!arrowElement) {
        return;
      }
    }
    if (!contains(state2.elements.popper, arrowElement)) {
      return;
    }
    state2.elements.arrow = arrowElement;
  }
  const arrow$1 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect$1,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function getVariation(placement) {
    return placement.split("-")[1];
  }
  var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }
  function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
      x,
      y
    }) : {
      x,
      y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
      var offsetParent = getOffsetParent(popper2);
      var heightProp = "clientHeight";
      var widthProp = "clientWidth";
      if (offsetParent === getWindow(popper2)) {
        offsetParent = getDocumentElement(popper2);
        if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
          heightProp = "scrollHeight";
          widthProp = "scrollWidth";
        }
      }
      offsetParent = offsetParent;
      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          offsetParent[heightProp]
        );
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }
      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          offsetParent[widthProp]
        );
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }
    var commonStyles = Object.assign({
      position
    }, adaptive && unsetSides);
    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x,
      y
    }, getWindow(popper2)) : {
      x,
      y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
      var _Object$assign;
      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
  }
  function computeStyles(_ref5) {
    var state2 = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
      placement: getBasePlacement(state2.placement),
      variation: getVariation(state2.placement),
      popper: state2.elements.popper,
      popperRect: state2.rects.popper,
      gpuAcceleration,
      isFixed: state2.options.strategy === "fixed"
    };
    if (state2.modifiersData.popperOffsets != null) {
      state2.styles.popper = Object.assign({}, state2.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state2.modifiersData.popperOffsets,
        position: state2.options.strategy,
        adaptive,
        roundOffsets
      })));
    }
    if (state2.modifiersData.arrow != null) {
      state2.styles.arrow = Object.assign({}, state2.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state2.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
      })));
    }
    state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
      "data-popper-placement": state2.placement
    });
  }
  const computeStyles$1 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {}
  };
  var passive = {
    passive: true
  };
  function effect(_ref) {
    var state2 = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state2.elements.popper);
    var scrollParents = [].concat(state2.scrollParents.reference, state2.scrollParents.popper);
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.addEventListener("resize", instance.update, passive);
    }
    return function() {
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.removeEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.removeEventListener("resize", instance.update, passive);
      }
    };
  }
  const eventListeners = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {}
  };
  var hash$1 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
      return hash$1[matched];
    });
  }
  var hash = {
    start: "end",
    end: "start"
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
      return hash[matched];
    });
  }
  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft,
      scrollTop
    };
  }
  function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }
  function getViewportRect(element, strategy) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      var layoutViewport = isLayoutViewport();
      if (layoutViewport || !layoutViewport && strategy === "fixed") {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x: x + getWindowScrollBarX(element),
      y
    };
  }
  function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle$1(body || html).direction === "rtl") {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }
  function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }
  function getScrollParent(node) {
    if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
      return node.ownerDocument.body;
    }
    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }
    return getScrollParent(getParentNode(node));
  }
  function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) {
      list = [];
    }
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      updatedList.concat(listScrollParents(getParentNode(target)))
    );
  }
  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }
  function getInnerBoundingClientRect(element, strategy) {
    var rect = getBoundingClientRect(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }
  function getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  }
  function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) {
      return [];
    }
    return clippingParents2.filter(function(clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
  }
  function getClippingRect(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }
  function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference2.y - element.height
        };
        break;
      case bottom:
        offsets = {
          x: commonX,
          y: reference2.y + reference2.height
        };
        break;
      case right:
        offsets = {
          x: reference2.x + reference2.width,
          y: commonY
        };
        break;
      case left:
        offsets = {
          x: reference2.x - element.width,
          y: commonY
        };
        break;
      default:
        offsets = {
          x: reference2.x,
          y: reference2.y
        };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
      var len = mainAxis === "y" ? "height" : "width";
      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
          break;
        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
          break;
      }
    }
    return offsets;
  }
  function detectOverflow(state2, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state2.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state2.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state2.rects.popper;
    var element = state2.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state2.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = getBoundingClientRect(state2.elements.reference);
    var popperOffsets2 = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: "absolute",
      placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state2.modifiersData.offset;
    if (elementContext === popper && offsetData) {
      var offset2 = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function(key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
        overflowOffsets[key] += offset2[axis] * multiply;
      });
    }
    return overflowOffsets;
  }
  function computeAutoPlacement(state2, options) {
    if (options === void 0) {
      options = {};
    }
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
      return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function(placement2) {
      return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;
    }
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
      acc[placement2] = detectOverflow(state2, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding
      })[getBasePlacement(placement2)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
      return overflows[a] - overflows[b];
    });
  }
  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }
    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }
  function flip(_ref) {
    var state2 = _ref.state, options = _ref.options, name = _ref.name;
    if (state2.modifiersData[name]._skip) {
      return;
    }
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state2.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state2, {
        placement: placement2,
        boundary,
        rootBoundary,
        padding,
        flipVariations,
        allowedAutoPlacements
      }) : placement2);
    }, []);
    var referenceRect = state2.rects.reference;
    var popperRect = state2.rects.popper;
    var checksMap = /* @__PURE__ */ new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for (var i = 0; i < placements2.length; i++) {
      var placement = placements2[i];
      var _basePlacement = getBasePlacement(placement);
      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? "width" : "height";
      var overflow = detectOverflow(state2, {
        placement,
        boundary,
        rootBoundary,
        altBoundary,
        padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }
      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];
      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }
      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }
      if (checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
      var numberOfChecks = flipVariations ? 3 : 1;
      var _loop = function _loop2(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2) {
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
          }
        });
        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };
      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    }
    if (state2.placement !== firstFittingPlacement) {
      state2.modifiersData[name]._skip = true;
      state2.placement = firstFittingPlacement;
      state2.reset = true;
    }
  }
  const flip$1 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }
    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }
  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function(side) {
      return overflow[side] >= 0;
    });
  }
  function hide(_ref) {
    var state2 = _ref.state, name = _ref.name;
    var referenceRect = state2.rects.reference;
    var popperRect = state2.rects.popper;
    var preventedOffsets = state2.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state2, {
      elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state2, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state2.modifiersData[name] = {
      referenceClippingOffsets,
      popperEscapeOffsets,
      isReferenceHidden,
      hasPopperEscaped
    };
    state2.attributes.popper = Object.assign({}, state2.attributes.popper, {
      "data-popper-reference-hidden": isReferenceHidden,
      "data-popper-escaped": hasPopperEscaped
    });
  }
  const hide$1 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: hide
  };
  function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
      placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }
  function offset(_ref2) {
    var state2 = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data2 = placements.reduce(function(acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state2.rects, offset2);
      return acc;
    }, {});
    var _data$state$placement = data2[state2.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state2.modifiersData.popperOffsets != null) {
      state2.modifiersData.popperOffsets.x += x;
      state2.modifiersData.popperOffsets.y += y;
    }
    state2.modifiersData[name] = data2;
  }
  const offset$1 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: offset
  };
  function popperOffsets(_ref) {
    var state2 = _ref.state, name = _ref.name;
    state2.modifiersData[name] = computeOffsets({
      reference: state2.rects.reference,
      element: state2.rects.popper,
      strategy: "absolute",
      placement: state2.placement
    });
  }
  const popperOffsets$1 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {}
  };
  function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function preventOverflow(_ref) {
    var state2 = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state2, {
      boundary,
      rootBoundary,
      padding,
      altBoundary
    });
    var basePlacement = getBasePlacement(state2.placement);
    var variation = getVariation(state2.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state2.modifiersData.popperOffsets;
    var referenceRect = state2.rects.reference;
    var popperRect = state2.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state2.rects, {
      placement: state2.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state2.modifiersData.offset ? state2.modifiersData.offset[state2.placement] : null;
    var data2 = {
      x: 0,
      y: 0
    };
    if (!popperOffsets2) {
      return;
    }
    if (checkMainAxis) {
      var _offsetModifierState$;
      var mainSide = mainAxis === "y" ? top : left;
      var altSide = mainAxis === "y" ? bottom : right;
      var len = mainAxis === "y" ? "height" : "width";
      var offset2 = popperOffsets2[mainAxis];
      var min$1 = offset2 + overflow[mainSide];
      var max$1 = offset2 - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
      var arrowElement = state2.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state2.modifiersData["arrow#persistent"] ? state2.modifiersData["arrow#persistent"].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide];
      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state2.elements.arrow && getOffsetParent(state2.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset2 + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets2[mainAxis] = preventedOffset;
      data2[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2;
      var _mainSide = mainAxis === "x" ? top : left;
      var _altSide = mainAxis === "x" ? bottom : right;
      var _offset = popperOffsets2[altAxis];
      var _len = altAxis === "y" ? "height" : "width";
      var _min = _offset + overflow[_mainSide];
      var _max = _offset - overflow[_altSide];
      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset;
      data2[altAxis] = _preventedOffset - _offset;
    }
    state2.modifiersData[name] = data2;
  }
  const preventOverflow$1 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: ["offset"]
  };
  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }
  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  }
  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }
  function order(modifiers) {
    var map = /* @__PURE__ */ new Map();
    var visited = /* @__PURE__ */ new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
      map.set(modifier.name, modifier);
    });
    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function(dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);
          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
      if (!visited.has(modifier.name)) {
        sort(modifier);
      }
    });
    return result;
  }
  function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
      return acc.concat(orderedModifiers.filter(function(modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }
  function debounce(fn) {
    var pending;
    return function() {
      if (!pending) {
        pending = new Promise(function(resolve) {
          Promise.resolve().then(function() {
            pending = void 0;
            resolve(fn());
          });
        });
      }
      return pending;
    };
  }
  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
      var existing = merged2[current.name];
      merged2[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged2;
    }, {});
    return Object.keys(merged).map(function(key) {
      return merged[key];
    });
  }
  var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return !args.some(function(element) {
      return !(element && typeof element.getBoundingClientRect === "function");
    });
  }
  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions2 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
      if (options === void 0) {
        options = defaultOptions2;
      }
      var state2 = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions2),
        modifiersData: {},
        elements: {
          reference: reference2,
          popper: popper2
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state2,
        setOptions: function setOptions(setOptionsAction) {
          var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state2.options) : setOptionsAction;
          cleanupModifierEffects();
          state2.options = Object.assign({}, defaultOptions2, state2.options, options2);
          state2.scrollParents = {
            reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
            popper: listScrollParents(popper2)
          };
          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state2.options.modifiers)));
          state2.orderedModifiers = orderedModifiers.filter(function(m) {
            return m.enabled;
          });
          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }
          var _state$elements = state2.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
          if (!areValidElements(reference3, popper3)) {
            return;
          }
          state2.rects = {
            reference: getCompositeRect(reference3, getOffsetParent(popper3), state2.options.strategy === "fixed"),
            popper: getLayoutRect(popper3)
          };
          state2.reset = false;
          state2.placement = state2.options.placement;
          state2.orderedModifiers.forEach(function(modifier) {
            return state2.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          for (var index2 = 0; index2 < state2.orderedModifiers.length; index2++) {
            if (state2.reset === true) {
              state2.reset = false;
              index2 = -1;
              continue;
            }
            var _state$orderedModifie = state2.orderedModifiers[index2], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
            if (typeof fn === "function") {
              state2 = fn({
                state: state2,
                options: _options,
                name,
                instance
              }) || state2;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function() {
          return new Promise(function(resolve) {
            instance.forceUpdate();
            resolve(state2);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };
      if (!areValidElements(reference2, popper2)) {
        return instance;
      }
      instance.setOptions(options).then(function(state3) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state3);
        }
      });
      function runModifierEffects() {
        state2.orderedModifiers.forEach(function(_ref) {
          var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
          if (typeof effect2 === "function") {
            var cleanupFn = effect2({
              state: state2,
              name,
              instance,
              options: options2
            });
            var noopFn = function noopFn2() {
            };
            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }
      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function(fn) {
          return fn();
        });
        effectCleanupFns = [];
      }
      return instance;
    };
  }
  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
  });
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$h = {};
  const _hoisted_1$c = {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24"
  };
  const _hoisted_2$b = /* @__PURE__ */ vue.createElementVNode("polyline", { points: "9 18 15 12 9 6" }, null, -1);
  const _hoisted_3$9 = [
    _hoisted_2$b
  ];
  function _sfc_render$8(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$c, _hoisted_3$9);
  }
  const IconChevronRight = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$8]]);
  const _sfc_main$g = {};
  const _hoisted_1$b = {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24"
  };
  const _hoisted_2$a = /* @__PURE__ */ vue.createElementVNode("polyline", { points: "15 18 9 12 15 6" }, null, -1);
  const _hoisted_3$8 = [
    _hoisted_2$a
  ];
  function _sfc_render$7(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$b, _hoisted_3$8);
  }
  const IconChevronLeft = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$7]]);
  const _sfc_main$f = {};
  const _hoisted_1$a = {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    viewBox: "0 0 24 24"
  };
  const _hoisted_2$9 = /* @__PURE__ */ vue.createElementVNode("polyline", { points: "6 9 12 15 18 9" }, null, -1);
  const _hoisted_3$7 = [
    _hoisted_2$9
  ];
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$a, _hoisted_3$7);
  }
  const IconChevronDown = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$6]]);
  const _sfc_main$e = {};
  const _hoisted_1$9 = {
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    viewBox: "0 0 24 24"
  };
  const _hoisted_2$8 = /* @__PURE__ */ vue.createElementVNode("path", { d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, null, -1);
  const _hoisted_3$6 = [
    _hoisted_2$8
  ];
  function _sfc_render$5(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$9, _hoisted_3$6);
  }
  const IconClock = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$5]]);
  const icons = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconClock
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
    __name: "BaseIcon",
    props: {
      name: { type: String, required: true },
      width: { type: String },
      height: { type: String },
      size: { type: String, default: "26" },
      viewBox: { type: String }
    },
    setup(__props) {
      const props = __props;
      const width = vue.computed(() => props.width || props.size);
      const height = vue.computed(() => props.height || props.size);
      const icon = vue.computed(() => icons[`Icon${props.name}`]);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(icon)), {
          width: vue.unref(width),
          height: vue.unref(height),
          class: "vc-base-icon"
        }, null, 8, ["width", "height"]);
      };
    }
  });
  function windowExists() {
    return typeof window !== "undefined";
  }
  function windowHasFeature(feature) {
    return windowExists() && feature in window;
  }
  function useDarkMode(config2) {
    const isDark = vue.ref(false);
    const displayMode = vue.computed(() => isDark.value ? "dark" : "light");
    let mediaQuery;
    let mutationObserver;
    function mqListener(ev) {
      isDark.value = ev.matches;
    }
    function setupSystem() {
      if (windowHasFeature("matchMedia")) {
        mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.addEventListener("change", mqListener);
        isDark.value = mediaQuery.matches;
      }
    }
    function moListener() {
      const { selector = ":root", darkClass = "dark" } = config2.value;
      const el = document.querySelector(selector);
      isDark.value = el.classList.contains(darkClass);
    }
    function setupClass(config22) {
      const { selector = ":root", darkClass = "dark" } = config22;
      if (windowExists() && selector && darkClass) {
        const el = document.querySelector(selector);
        if (el) {
          mutationObserver = new MutationObserver(moListener);
          mutationObserver.observe(el, {
            attributes: true,
            attributeFilter: ["class"]
          });
          isDark.value = el.classList.contains(darkClass);
        }
      }
    }
    function setup() {
      stopObservers();
      const type = typeof config2.value;
      if (type === "string" && config2.value.toLowerCase() === "system") {
        setupSystem();
      } else if (type === "object") {
        setupClass(config2.value);
      } else {
        isDark.value = !!config2.value;
      }
    }
    const stopWatch = vue.watch(() => config2.value, () => setup(), {
      immediate: true
    });
    function stopObservers() {
      if (mediaQuery) {
        mediaQuery.removeEventListener("change", mqListener);
        mediaQuery = void 0;
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
        mutationObserver = void 0;
      }
    }
    function cleanup() {
      stopObservers();
      stopWatch();
    }
    vue.onUnmounted(() => cleanup());
    return {
      isDark,
      displayMode,
      cleanup
    };
  }
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal$1;
  var freeGlobal = _freeGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root$8 = freeGlobal || freeSelf || Function("return this")();
  var _root = root$8;
  var root$7 = _root;
  var Symbol$5 = root$7.Symbol;
  var _Symbol = Symbol$5;
  var Symbol$4 = _Symbol;
  var objectProto$g = Object.prototype;
  var hasOwnProperty$d = objectProto$g.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$g.toString;
  var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
  function getRawTag$1(value) {
    var isOwn = hasOwnProperty$d.call(value, symToStringTag$1), tag = value[symToStringTag$1];
    try {
      value[symToStringTag$1] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }
  var _getRawTag = getRawTag$1;
  var objectProto$f = Object.prototype;
  var nativeObjectToString = objectProto$f.toString;
  function objectToString$1(value) {
    return nativeObjectToString.call(value);
  }
  var _objectToString = objectToString$1;
  var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
  var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
  var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
  function baseGetTag$a(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  var _baseGetTag = baseGetTag$a;
  function isObject$a(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_1 = isObject$a;
  var baseGetTag$9 = _baseGetTag, isObject$9 = isObject_1;
  var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
  function isFunction$3(value) {
    if (!isObject$9(value)) {
      return false;
    }
    var tag = baseGetTag$9(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_1 = isFunction$3;
  var isArray$c = Array.isArray;
  var isArray_1 = isArray$c;
  function isObjectLike$b(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_1 = isObjectLike$b;
  var baseGetTag$8 = _baseGetTag, isArray$b = isArray_1, isObjectLike$a = isObjectLike_1;
  var stringTag$2 = "[object String]";
  function isString(value) {
    return typeof value == "string" || !isArray$b(value) && isObjectLike$a(value) && baseGetTag$8(value) == stringTag$2;
  }
  var isString_1 = isString;
  var baseGetTag$7 = _baseGetTag, isObjectLike$9 = isObjectLike_1;
  var boolTag$2 = "[object Boolean]";
  function isBoolean(value) {
    return value === true || value === false || isObjectLike$9(value) && baseGetTag$7(value) == boolTag$2;
  }
  var isBoolean_1 = isBoolean;
  var baseGetTag$6 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
  var numberTag$2 = "[object Number]";
  function isNumber(value) {
    return typeof value == "number" || isObjectLike$8(value) && baseGetTag$6(value) == numberTag$2;
  }
  var isNumber_1 = isNumber;
  var baseGetTag$5 = _baseGetTag, isObjectLike$7 = isObjectLike_1;
  var dateTag$2 = "[object Date]";
  function baseIsDate$1(value) {
    return isObjectLike$7(value) && baseGetTag$5(value) == dateTag$2;
  }
  var _baseIsDate = baseIsDate$1;
  function baseUnary$2(func) {
    return function(value) {
      return func(value);
    };
  }
  var _baseUnary = baseUnary$2;
  var _nodeUtilExports = {};
  var _nodeUtil = {
    get exports() {
      return _nodeUtilExports;
    },
    set exports(v) {
      _nodeUtilExports = v;
    }
  };
  (function(module2, exports2) {
    var freeGlobal2 = _freeGlobal;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal2.process;
    var nodeUtil2 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil2;
  })(_nodeUtil, _nodeUtilExports);
  var baseIsDate = _baseIsDate, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
  var nodeIsDate = nodeUtil$1 && nodeUtil$1.isDate;
  var isDate$1 = nodeIsDate ? baseUnary$1(nodeIsDate) : baseIsDate;
  var isDate_1 = isDate$1;
  var baseGetTag$4 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
  var symbolTag$1 = "[object Symbol]";
  function isSymbol$3(value) {
    return typeof value == "symbol" || isObjectLike$6(value) && baseGetTag$4(value) == symbolTag$1;
  }
  var isSymbol_1 = isSymbol$3;
  var isArray$a = isArray_1, isSymbol$2 = isSymbol_1;
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
  function isKey$3(value, object) {
    if (isArray$a(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var _isKey = isKey$3;
  var root$6 = _root;
  var coreJsData$1 = root$6["__core-js_shared__"];
  var _coreJsData = coreJsData$1;
  var coreJsData = _coreJsData;
  var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
  }();
  function isMasked$1(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var _isMasked = isMasked$1;
  var funcProto$2 = Function.prototype;
  var funcToString$2 = funcProto$2.toString;
  function toSource$2(func) {
    if (func != null) {
      try {
        return funcToString$2.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var _toSource = toSource$2;
  var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$8 = isObject_1, toSource$1 = _toSource;
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto$1 = Function.prototype, objectProto$e = Object.prototype;
  var funcToString$1 = funcProto$1.toString;
  var hasOwnProperty$c = objectProto$e.hasOwnProperty;
  var reIsNative = RegExp(
    "^" + funcToString$1.call(hasOwnProperty$c).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function baseIsNative$1(value) {
    if (!isObject$8(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource$1(value));
  }
  var _baseIsNative = baseIsNative$1;
  function getValue$1(object, key) {
    return object == null ? void 0 : object[key];
  }
  var _getValue = getValue$1;
  var baseIsNative = _baseIsNative, getValue = _getValue;
  function getNative$7(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : void 0;
  }
  var _getNative = getNative$7;
  var getNative$6 = _getNative;
  var nativeCreate$4 = getNative$6(Object, "create");
  var _nativeCreate = nativeCreate$4;
  var nativeCreate$3 = _nativeCreate;
  function hashClear$1() {
    this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
    this.size = 0;
  }
  var _hashClear = hashClear$1;
  function hashDelete$1(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var _hashDelete = hashDelete$1;
  var nativeCreate$2 = _nativeCreate;
  var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
  var objectProto$d = Object.prototype;
  var hasOwnProperty$b = objectProto$d.hasOwnProperty;
  function hashGet$1(key) {
    var data2 = this.__data__;
    if (nativeCreate$2) {
      var result = data2[key];
      return result === HASH_UNDEFINED$2 ? void 0 : result;
    }
    return hasOwnProperty$b.call(data2, key) ? data2[key] : void 0;
  }
  var _hashGet = hashGet$1;
  var nativeCreate$1 = _nativeCreate;
  var objectProto$c = Object.prototype;
  var hasOwnProperty$a = objectProto$c.hasOwnProperty;
  function hashHas$1(key) {
    var data2 = this.__data__;
    return nativeCreate$1 ? data2[key] !== void 0 : hasOwnProperty$a.call(data2, key);
  }
  var _hashHas = hashHas$1;
  var nativeCreate = _nativeCreate;
  var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
  function hashSet$1(key, value) {
    var data2 = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data2[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
    return this;
  }
  var _hashSet = hashSet$1;
  var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
  function Hash$1(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  Hash$1.prototype.clear = hashClear;
  Hash$1.prototype["delete"] = hashDelete;
  Hash$1.prototype.get = hashGet;
  Hash$1.prototype.has = hashHas;
  Hash$1.prototype.set = hashSet;
  var _Hash = Hash$1;
  function listCacheClear$1() {
    this.__data__ = [];
    this.size = 0;
  }
  var _listCacheClear = listCacheClear$1;
  function eq$6(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_1 = eq$6;
  var eq$5 = eq_1;
  function assocIndexOf$4(array, key) {
    var length = array.length;
    while (length--) {
      if (eq$5(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var _assocIndexOf = assocIndexOf$4;
  var assocIndexOf$3 = _assocIndexOf;
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete$1(key) {
    var data2 = this.__data__, index2 = assocIndexOf$3(data2, key);
    if (index2 < 0) {
      return false;
    }
    var lastIndex = data2.length - 1;
    if (index2 == lastIndex) {
      data2.pop();
    } else {
      splice.call(data2, index2, 1);
    }
    --this.size;
    return true;
  }
  var _listCacheDelete = listCacheDelete$1;
  var assocIndexOf$2 = _assocIndexOf;
  function listCacheGet$1(key) {
    var data2 = this.__data__, index2 = assocIndexOf$2(data2, key);
    return index2 < 0 ? void 0 : data2[index2][1];
  }
  var _listCacheGet = listCacheGet$1;
  var assocIndexOf$1 = _assocIndexOf;
  function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
  }
  var _listCacheHas = listCacheHas$1;
  var assocIndexOf = _assocIndexOf;
  function listCacheSet$1(key, value) {
    var data2 = this.__data__, index2 = assocIndexOf(data2, key);
    if (index2 < 0) {
      ++this.size;
      data2.push([key, value]);
    } else {
      data2[index2][1] = value;
    }
    return this;
  }
  var _listCacheSet = listCacheSet$1;
  var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
  function ListCache$4(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache$4.prototype.clear = listCacheClear;
  ListCache$4.prototype["delete"] = listCacheDelete;
  ListCache$4.prototype.get = listCacheGet;
  ListCache$4.prototype.has = listCacheHas;
  ListCache$4.prototype.set = listCacheSet;
  var _ListCache = ListCache$4;
  var getNative$5 = _getNative, root$5 = _root;
  var Map$3 = getNative$5(root$5, "Map");
  var _Map = Map$3;
  var Hash = _Hash, ListCache$3 = _ListCache, Map$2 = _Map;
  function mapCacheClear$1() {
    this.size = 0;
    this.__data__ = {
      "hash": new Hash(),
      "map": new (Map$2 || ListCache$3)(),
      "string": new Hash()
    };
  }
  var _mapCacheClear = mapCacheClear$1;
  function isKeyable$1(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var _isKeyable = isKeyable$1;
  var isKeyable = _isKeyable;
  function getMapData$4(map, key) {
    var data2 = map.__data__;
    return isKeyable(key) ? data2[typeof key == "string" ? "string" : "hash"] : data2.map;
  }
  var _getMapData = getMapData$4;
  var getMapData$3 = _getMapData;
  function mapCacheDelete$1(key) {
    var result = getMapData$3(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var _mapCacheDelete = mapCacheDelete$1;
  var getMapData$2 = _getMapData;
  function mapCacheGet$1(key) {
    return getMapData$2(this, key).get(key);
  }
  var _mapCacheGet = mapCacheGet$1;
  var getMapData$1 = _getMapData;
  function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
  }
  var _mapCacheHas = mapCacheHas$1;
  var getMapData = _getMapData;
  function mapCacheSet$1(key, value) {
    var data2 = getMapData(this, key), size = data2.size;
    data2.set(key, value);
    this.size += data2.size == size ? 0 : 1;
    return this;
  }
  var _mapCacheSet = mapCacheSet$1;
  var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
  function MapCache$3(entries) {
    var index2 = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index2 < length) {
      var entry = entries[index2];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache$3.prototype.clear = mapCacheClear;
  MapCache$3.prototype["delete"] = mapCacheDelete;
  MapCache$3.prototype.get = mapCacheGet;
  MapCache$3.prototype.has = mapCacheHas;
  MapCache$3.prototype.set = mapCacheSet;
  var _MapCache = MapCache$3;
  var MapCache$2 = _MapCache;
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize$1(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$2)();
    return memoized;
  }
  memoize$1.Cache = MapCache$2;
  var memoize_1 = memoize$1;
  var memoize = memoize_1;
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped$1(func) {
    var result = memoize(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var _memoizeCapped = memoizeCapped$1;
  var memoizeCapped = _memoizeCapped;
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath$1 = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath$1;
  function arrayMap$1(array, iteratee) {
    var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index2 < length) {
      result[index2] = iteratee(array[index2], index2, array);
    }
    return result;
  }
  var _arrayMap = arrayMap$1;
  var Symbol$2 = _Symbol, arrayMap = _arrayMap, isArray$9 = isArray_1, isSymbol$1 = isSymbol_1;
  var INFINITY$1 = 1 / 0;
  var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
  function baseToString$1(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray$9(value)) {
      return arrayMap(value, baseToString$1) + "";
    }
    if (isSymbol$1(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
  }
  var _baseToString = baseToString$1;
  var baseToString = _baseToString;
  function toString$1(value) {
    return value == null ? "" : baseToString(value);
  }
  var toString_1 = toString$1;
  var isArray$8 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
  function castPath$2(value, object) {
    if (isArray$8(value)) {
      return value;
    }
    return isKey$2(value, object) ? [value] : stringToPath(toString(value));
  }
  var _castPath = castPath$2;
  var isSymbol = isSymbol_1;
  var INFINITY = 1 / 0;
  function toKey$4(value) {
    if (typeof value == "string" || isSymbol(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var _toKey = toKey$4;
  var castPath$1 = _castPath, toKey$3 = _toKey;
  function baseGet$2(object, path) {
    path = castPath$1(path, object);
    var index2 = 0, length = path.length;
    while (object != null && index2 < length) {
      object = object[toKey$3(path[index2++])];
    }
    return index2 && index2 == length ? object : void 0;
  }
  var _baseGet = baseGet$2;
  var baseGet$1 = _baseGet;
  function get$1(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet$1(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_1 = get$1;
  var getNative$4 = _getNative;
  var defineProperty$2 = function() {
    try {
      var func = getNative$4(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var _defineProperty = defineProperty$2;
  var defineProperty$1 = _defineProperty;
  function baseAssignValue$4(object, key, value) {
    if (key == "__proto__" && defineProperty$1) {
      defineProperty$1(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var _baseAssignValue = baseAssignValue$4;
  var baseAssignValue$3 = _baseAssignValue, eq$4 = eq_1;
  var objectProto$b = Object.prototype;
  var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
  function assignValue$1(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$9.call(object, key) && eq$4(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue$3(object, key, value);
    }
  }
  var _assignValue = assignValue$1;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex$3(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var _isIndex = isIndex$3;
  function createBaseFor$1(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index2];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var _createBaseFor = createBaseFor$1;
  var createBaseFor = _createBaseFor;
  var baseFor$2 = createBaseFor();
  var _baseFor = baseFor$2;
  function baseTimes$1(n, iteratee) {
    var index2 = -1, result = Array(n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  var _baseTimes = baseTimes$1;
  var baseGetTag$3 = _baseGetTag, isObjectLike$5 = isObjectLike_1;
  var argsTag$2 = "[object Arguments]";
  function baseIsArguments$1(value) {
    return isObjectLike$5(value) && baseGetTag$3(value) == argsTag$2;
  }
  var _baseIsArguments = baseIsArguments$1;
  var baseIsArguments = _baseIsArguments, isObjectLike$4 = isObjectLike_1;
  var objectProto$a = Object.prototype;
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  var propertyIsEnumerable$1 = objectProto$a.propertyIsEnumerable;
  var isArguments$3 = baseIsArguments(function() {
    return arguments;
  }()) ? baseIsArguments : function(value) {
    return isObjectLike$4(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
  };
  var isArguments_1 = isArguments$3;
  var isBufferExports = {};
  var isBuffer$3 = {
    get exports() {
      return isBufferExports;
    },
    set exports(v) {
      isBufferExports = v;
    }
  };
  function stubFalse() {
    return false;
  }
  var stubFalse_1 = stubFalse;
  (function(module2, exports2) {
    var root2 = _root, stubFalse2 = stubFalse_1;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer2 = nativeIsBuffer || stubFalse2;
    module2.exports = isBuffer2;
  })(isBuffer$3, isBufferExports);
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isLength$3(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  var isLength_1 = isLength$3;
  var baseGetTag$2 = _baseGetTag, isLength$2 = isLength_1, isObjectLike$3 = isObjectLike_1;
  var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
  var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
  function baseIsTypedArray$1(value) {
    return isObjectLike$3(value) && isLength$2(value.length) && !!typedArrayTags[baseGetTag$2(value)];
  }
  var _baseIsTypedArray = baseIsTypedArray$1;
  var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray$3 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray_1 = isTypedArray$3;
  var baseTimes = _baseTimes, isArguments$2 = isArguments_1, isArray$7 = isArray_1, isBuffer$2 = isBufferExports, isIndex$2 = _isIndex, isTypedArray$2 = isTypedArray_1;
  var objectProto$9 = Object.prototype;
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  function arrayLikeKeys$2(value, inherited) {
    var isArr = isArray$7(value), isArg = !isArr && isArguments$2(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$2(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex$2(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _arrayLikeKeys = arrayLikeKeys$2;
  var objectProto$8 = Object.prototype;
  function isPrototype$3(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
    return value === proto;
  }
  var _isPrototype = isPrototype$3;
  function overArg$2(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }
  var _overArg = overArg$2;
  var overArg$1 = _overArg;
  var nativeKeys$1 = overArg$1(Object.keys, Object);
  var _nativeKeys = nativeKeys$1;
  var isPrototype$2 = _isPrototype, nativeKeys = _nativeKeys;
  var objectProto$7 = Object.prototype;
  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  function baseKeys$1(object) {
    if (!isPrototype$2(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty$6.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeys = baseKeys$1;
  var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
  function isArrayLike$5(value) {
    return value != null && isLength$1(value.length) && !isFunction$1(value);
  }
  var isArrayLike_1 = isArrayLike$5;
  var arrayLikeKeys$1 = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike$4 = isArrayLike_1;
  function keys$3(object) {
    return isArrayLike$4(object) ? arrayLikeKeys$1(object) : baseKeys(object);
  }
  var keys_1 = keys$3;
  var baseFor$1 = _baseFor, keys$2 = keys_1;
  function baseForOwn$2(object, iteratee) {
    return object && baseFor$1(object, iteratee, keys$2);
  }
  var _baseForOwn = baseForOwn$2;
  var ListCache$2 = _ListCache;
  function stackClear$1() {
    this.__data__ = new ListCache$2();
    this.size = 0;
  }
  var _stackClear = stackClear$1;
  function stackDelete$1(key) {
    var data2 = this.__data__, result = data2["delete"](key);
    this.size = data2.size;
    return result;
  }
  var _stackDelete = stackDelete$1;
  function stackGet$1(key) {
    return this.__data__.get(key);
  }
  var _stackGet = stackGet$1;
  function stackHas$1(key) {
    return this.__data__.has(key);
  }
  var _stackHas = stackHas$1;
  var ListCache$1 = _ListCache, Map$1 = _Map, MapCache$1 = _MapCache;
  var LARGE_ARRAY_SIZE = 200;
  function stackSet$1(key, value) {
    var data2 = this.__data__;
    if (data2 instanceof ListCache$1) {
      var pairs = data2.__data__;
      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data2.size;
        return this;
      }
      data2 = this.__data__ = new MapCache$1(pairs);
    }
    data2.set(key, value);
    this.size = data2.size;
    return this;
  }
  var _stackSet = stackSet$1;
  var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
  function Stack$3(entries) {
    var data2 = this.__data__ = new ListCache(entries);
    this.size = data2.size;
  }
  Stack$3.prototype.clear = stackClear;
  Stack$3.prototype["delete"] = stackDelete;
  Stack$3.prototype.get = stackGet;
  Stack$3.prototype.has = stackHas;
  Stack$3.prototype.set = stackSet;
  var _Stack = Stack$3;
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  function setCacheAdd$1(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }
  var _setCacheAdd = setCacheAdd$1;
  function setCacheHas$1(value) {
    return this.__data__.has(value);
  }
  var _setCacheHas = setCacheHas$1;
  var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
  function SetCache$1(values) {
    var index2 = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();
    while (++index2 < length) {
      this.add(values[index2]);
    }
  }
  SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
  SetCache$1.prototype.has = setCacheHas;
  var _SetCache = SetCache$1;
  function arraySome$2(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length;
    while (++index2 < length) {
      if (predicate(array[index2], index2, array)) {
        return true;
      }
    }
    return false;
  }
  var _arraySome = arraySome$2;
  function cacheHas$1(cache, key) {
    return cache.has(key);
  }
  var _cacheHas = cacheHas$1;
  var SetCache = _SetCache, arraySome$1 = _arraySome, cacheHas = _cacheHas;
  var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
  function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }
    var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index2 < arrLength) {
      var arrValue = array[index2], othValue = other[index2];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome$1(other, function(othValue2, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var _equalArrays = equalArrays$2;
  var root$4 = _root;
  var Uint8Array$2 = root$4.Uint8Array;
  var _Uint8Array = Uint8Array$2;
  function mapToArray$1(map) {
    var index2 = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index2] = [key, value];
    });
    return result;
  }
  var _mapToArray = mapToArray$1;
  function setToArray$1(set) {
    var index2 = -1, result = Array(set.size);
    set.forEach(function(value) {
      result[++index2] = value;
    });
    return result;
  }
  var _setToArray = setToArray$1;
  var Symbol$1 = _Symbol, Uint8Array$1 = _Uint8Array, eq$3 = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
  var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
  var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
  var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
  var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
  function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$1:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
          return false;
        }
        return true;
      case boolTag:
      case dateTag:
      case numberTag:
        return eq$3(+object, +other);
      case errorTag:
        return object.name == other.name && object.message == other.message;
      case regexpTag:
      case stringTag:
        return object == other + "";
      case mapTag$1:
        var convert = mapToArray;
      case setTag$1:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
        convert || (convert = setToArray);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG$2;
        stack.set(object, other);
        var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }
  var _equalByTag = equalByTag$1;
  function arrayPush$1(array, values) {
    var index2 = -1, length = values.length, offset2 = array.length;
    while (++index2 < length) {
      array[offset2 + index2] = values[index2];
    }
    return array;
  }
  var _arrayPush = arrayPush$1;
  var arrayPush = _arrayPush, isArray$6 = isArray_1;
  function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$6(object) ? result : arrayPush(result, symbolsFunc(object));
  }
  var _baseGetAllKeys = baseGetAllKeys$1;
  function arrayFilter$1(array, predicate) {
    var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index2 < length) {
      var value = array[index2];
      if (predicate(value, index2, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var _arrayFilter = arrayFilter$1;
  function stubArray$1() {
    return [];
  }
  var stubArray_1 = stubArray$1;
  var arrayFilter = _arrayFilter, stubArray = stubArray_1;
  var objectProto$6 = Object.prototype;
  var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols$1;
  var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
  function getAllKeys$1(object) {
    return baseGetAllKeys(object, keys$1, getSymbols);
  }
  var _getAllKeys = getAllKeys$1;
  var getAllKeys = _getAllKeys;
  var COMPARE_PARTIAL_FLAG$3 = 1;
  var objectProto$5 = Object.prototype;
  var hasOwnProperty$5 = objectProto$5.hasOwnProperty;
  function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index2 = objLength;
    while (index2--) {
      var key = objProps[index2];
      if (!(isPartial ? key in other : hasOwnProperty$5.call(other, key))) {
        return false;
      }
    }
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index2 < objLength) {
      key = objProps[index2];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var _equalObjects = equalObjects$1;
  var getNative$3 = _getNative, root$3 = _root;
  var DataView$1 = getNative$3(root$3, "DataView");
  var _DataView = DataView$1;
  var getNative$2 = _getNative, root$2 = _root;
  var Promise$2 = getNative$2(root$2, "Promise");
  var _Promise = Promise$2;
  var getNative$1 = _getNative, root$1 = _root;
  var Set$1 = getNative$1(root$1, "Set");
  var _Set = Set$1;
  var getNative = _getNative, root = _root;
  var WeakMap$1 = getNative(root, "WeakMap");
  var _WeakMap = WeakMap$1;
  var DataView = _DataView, Map$4 = _Map, Promise$1 = _Promise, Set$2 = _Set, WeakMap = _WeakMap, baseGetTag$1 = _baseGetTag, toSource = _toSource;
  var mapTag = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
  var dataViewTag = "[object DataView]";
  var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$4), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap);
  var getTag$1 = baseGetTag$1;
  if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$4 && getTag$1(new Map$4()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$2 && getTag$1(new Set$2()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
    getTag$1 = function(value) {
      var result = baseGetTag$1(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;
          case mapCtorString:
            return mapTag;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag;
          case weakMapCtorString:
            return weakMapTag;
        }
      }
      return result;
    };
  }
  var _getTag = getTag$1;
  var Stack$2 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$5 = isArray_1, isBuffer$1 = isBufferExports, isTypedArray$1 = isTypedArray_1;
  var COMPARE_PARTIAL_FLAG$2 = 1;
  var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag$1 = "[object Object]";
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
  function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$5(object), othIsArr = isArray$5(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag$1 : objTag;
    othTag = othTag == argsTag ? objectTag$1 : othTag;
    var objIsObj = objTag == objectTag$1, othIsObj = othTag == objectTag$1, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer$1(object)) {
      if (!isBuffer$1(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack$2());
      return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
      var objIsWrapped = objIsObj && hasOwnProperty$4.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$4.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack$2());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack$2());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }
  var _baseIsEqualDeep = baseIsEqualDeep$1;
  var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike$2 = isObjectLike_1;
  function baseIsEqual$2(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike$2(value) && !isObjectLike$2(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
  }
  var _baseIsEqual = baseIsEqual$2;
  var Stack$1 = _Stack, baseIsEqual$1 = _baseIsEqual;
  var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
  function baseIsMatch$1(object, source, matchData, customizer) {
    var index2 = matchData.length, length = index2, noCustomizer = !customizer;
    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index2--) {
      var data2 = matchData[index2];
      if (noCustomizer && data2[2] ? data2[1] !== object[data2[0]] : !(data2[0] in object)) {
        return false;
      }
    }
    while (++index2 < length) {
      data2 = matchData[index2];
      var key = data2[0], objValue = object[key], srcValue = data2[1];
      if (noCustomizer && data2[2]) {
        if (objValue === void 0 && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack$1();
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
          return false;
        }
      }
    }
    return true;
  }
  var _baseIsMatch = baseIsMatch$1;
  var isObject$7 = isObject_1;
  function isStrictComparable$2(value) {
    return value === value && !isObject$7(value);
  }
  var _isStrictComparable = isStrictComparable$2;
  var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
  function getMatchData$1(object) {
    var result = keys(object), length = result.length;
    while (length--) {
      var key = result[length], value = object[key];
      result[length] = [key, value, isStrictComparable$1(value)];
    }
    return result;
  }
  var _getMatchData = getMatchData$1;
  function matchesStrictComparable$2(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
    };
  }
  var _matchesStrictComparable = matchesStrictComparable$2;
  var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
  function baseMatches$1(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }
  var _baseMatches = baseMatches$1;
  function baseHasIn$1(object, key) {
    return object != null && key in Object(object);
  }
  var _baseHasIn = baseHasIn$1;
  var castPath = _castPath, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isIndex$1 = _isIndex, isLength = isLength_1, toKey$2 = _toKey;
  function hasPath$2(object, path, hasFunc) {
    path = castPath(path, object);
    var index2 = -1, length = path.length, result = false;
    while (++index2 < length) {
      var key = toKey$2(path[index2]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result || ++index2 != length) {
      return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex$1(key, length) && (isArray$4(object) || isArguments$1(object));
  }
  var _hasPath = hasPath$2;
  var baseHasIn = _baseHasIn, hasPath$1 = _hasPath;
  function hasIn$1(object, path) {
    return object != null && hasPath$1(object, path, baseHasIn);
  }
  var hasIn_1 = hasIn$1;
  var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
  var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
  function baseMatchesProperty$1(path, srcValue) {
    if (isKey$1(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey$1(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
  }
  var _baseMatchesProperty = baseMatchesProperty$1;
  function identity$3(value) {
    return value;
  }
  var identity_1 = identity$3;
  function baseProperty$1(key) {
    return function(object) {
      return object == null ? void 0 : object[key];
    };
  }
  var _baseProperty = baseProperty$1;
  var baseGet = _baseGet;
  function basePropertyDeep$1(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }
  var _basePropertyDeep = basePropertyDeep$1;
  var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
  function property$1(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }
  var property_1 = property$1;
  var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity$2 = identity_1, isArray$3 = isArray_1, property = property_1;
  function baseIteratee$2(value) {
    if (typeof value == "function") {
      return value;
    }
    if (value == null) {
      return identity$2;
    }
    if (typeof value == "object") {
      return isArray$3(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
  }
  var _baseIteratee = baseIteratee$2;
  var baseAssignValue$2 = _baseAssignValue, baseForOwn$1 = _baseForOwn, baseIteratee$1 = _baseIteratee;
  function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee$1(iteratee);
    baseForOwn$1(object, function(value, key, object2) {
      baseAssignValue$2(result, key, iteratee(value, key, object2));
    });
    return result;
  }
  var mapValues_1 = mapValues;
  function apply$2(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var _apply = apply$2;
  var apply$1 = _apply;
  var nativeMax = Math.max;
  function overRest$1(func, start2, transform) {
    start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
    return function() {
      var args = arguments, index2 = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
      while (++index2 < length) {
        array[index2] = args[start2 + index2];
      }
      index2 = -1;
      var otherArgs = Array(start2 + 1);
      while (++index2 < start2) {
        otherArgs[index2] = args[index2];
      }
      otherArgs[start2] = transform(array);
      return apply$1(func, this, otherArgs);
    };
  }
  var _overRest = overRest$1;
  function constant$1(value) {
    return function() {
      return value;
    };
  }
  var constant_1 = constant$1;
  var constant = constant_1, defineProperty = _defineProperty, identity$1 = identity_1;
  var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
    return defineProperty(func, "toString", {
      "configurable": true,
      "enumerable": false,
      "value": constant(string),
      "writable": true
    });
  };
  var _baseSetToString = baseSetToString$1;
  var HOT_COUNT = 800, HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut$1(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var _shortOut = shortOut$1;
  var baseSetToString = _baseSetToString, shortOut = _shortOut;
  var setToString$1 = shortOut(baseSetToString);
  var _setToString = setToString$1;
  var identity = identity_1, overRest = _overRest, setToString = _setToString;
  function baseRest$3(func, start2) {
    return setToString(overRest(func, start2, identity), func + "");
  }
  var _baseRest = baseRest$3;
  var eq$2 = eq_1, isArrayLike$3 = isArrayLike_1, isIndex = _isIndex, isObject$6 = isObject_1;
  function isIterateeCall$3(value, index2, object) {
    if (!isObject$6(object)) {
      return false;
    }
    var type = typeof index2;
    if (type == "number" ? isArrayLike$3(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
      return eq$2(object[index2], value);
    }
    return false;
  }
  var _isIterateeCall = isIterateeCall$3;
  function nativeKeysIn$1(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var _nativeKeysIn = nativeKeysIn$1;
  var isObject$5 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
  var objectProto$3 = Object.prototype;
  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  function baseKeysIn$1(object) {
    if (!isObject$5(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype$1(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var _baseKeysIn = baseKeysIn$1;
  var arrayLikeKeys = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
  function keysIn$3(object) {
    return isArrayLike$2(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }
  var keysIn_1 = keysIn$3;
  var baseRest$2 = _baseRest, eq$1 = eq_1, isIterateeCall$2 = _isIterateeCall, keysIn$2 = keysIn_1;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  var defaults = baseRest$2(function(object, sources) {
    object = Object(object);
    var index2 = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : void 0;
    if (guard && isIterateeCall$2(sources[0], sources[1], guard)) {
      length = 1;
    }
    while (++index2 < length) {
      var source = sources[index2];
      var props = keysIn$2(source);
      var propsIndex = -1;
      var propsLength = props.length;
      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];
        if (value === void 0 || eq$1(value, objectProto$2[key]) && !hasOwnProperty$2.call(object, key)) {
          object[key] = source[key];
        }
      }
    }
    return object;
  });
  var defaults_1 = defaults;
  var baseAssignValue$1 = _baseAssignValue, eq = eq_1;
  function assignMergeValue$2(object, key, value) {
    if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue$1(object, key, value);
    }
  }
  var _assignMergeValue = assignMergeValue$2;
  var _cloneBufferExports = {};
  var _cloneBuffer = {
    get exports() {
      return _cloneBufferExports;
    },
    set exports(v) {
      _cloneBufferExports = v;
    }
  };
  (function(module2, exports2) {
    var root2 = _root;
    var freeExports = exports2 && !exports2.nodeType && exports2;
    var freeModule = freeExports && true && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer2(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer2;
  })(_cloneBuffer, _cloneBufferExports);
  var Uint8Array2 = _Uint8Array;
  function cloneArrayBuffer$1(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
    return result;
  }
  var _cloneArrayBuffer = cloneArrayBuffer$1;
  var cloneArrayBuffer = _cloneArrayBuffer;
  function cloneTypedArray$1(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var _cloneTypedArray = cloneTypedArray$1;
  function copyArray$1(source, array) {
    var index2 = -1, length = source.length;
    array || (array = Array(length));
    while (++index2 < length) {
      array[index2] = source[index2];
    }
    return array;
  }
  var _copyArray = copyArray$1;
  var isObject$4 = isObject_1;
  var objectCreate = Object.create;
  var baseCreate$1 = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject$4(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  var _baseCreate = baseCreate$1;
  var overArg = _overArg;
  var getPrototype$2 = overArg(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype$2;
  var baseCreate = _baseCreate, getPrototype$1 = _getPrototype, isPrototype = _isPrototype;
  function initCloneObject$1(object) {
    return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype$1(object)) : {};
  }
  var _initCloneObject = initCloneObject$1;
  var isArrayLike$1 = isArrayLike_1, isObjectLike$1 = isObjectLike_1;
  function isArrayLikeObject$1(value) {
    return isObjectLike$1(value) && isArrayLike$1(value);
  }
  var isArrayLikeObject_1 = isArrayLikeObject$1;
  var baseGetTag = _baseGetTag, getPrototype = _getPrototype, isObjectLike = isObjectLike_1;
  var objectTag = "[object Object]";
  var funcProto = Function.prototype, objectProto$1 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
  var objectCtorString = funcToString.call(Object);
  function isPlainObject$1(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$1.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  var isPlainObject_1 = isPlainObject$1;
  function safeGet$2(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var _safeGet = safeGet$2;
  var assignValue = _assignValue, baseAssignValue = _baseAssignValue;
  function copyObject$1(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index2 = -1, length = props.length;
    while (++index2 < length) {
      var key = props[index2];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue(object, key, newValue);
      } else {
        assignValue(object, key, newValue);
      }
    }
    return object;
  }
  var _copyObject = copyObject$1;
  var copyObject = _copyObject, keysIn$1 = keysIn_1;
  function toPlainObject$1(value) {
    return copyObject(value, keysIn$1(value));
  }
  var toPlainObject_1 = toPlainObject$1;
  var assignMergeValue$1 = _assignMergeValue, cloneBuffer = _cloneBufferExports, cloneTypedArray = _cloneTypedArray, copyArray = _copyArray, initCloneObject = _initCloneObject, isArguments = isArguments_1, isArray$2 = isArray_1, isArrayLikeObject = isArrayLikeObject_1, isBuffer = isBufferExports, isFunction = isFunction_1, isObject$3 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
  function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue$1(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray$2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray$2(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        newValue = objValue;
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        } else if (!isObject$3(objValue) || isFunction(objValue)) {
          newValue = initCloneObject(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue$1(object, key, newValue);
  }
  var _baseMergeDeep = baseMergeDeep$1;
  var Stack = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$2 = isObject_1, keysIn = keysIn_1, safeGet = _safeGet;
  function baseMerge$2(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor(source, function(srcValue, key) {
      stack || (stack = new Stack());
      if (isObject$2(srcValue)) {
        baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    }, keysIn);
  }
  var _baseMerge = baseMerge$2;
  var baseMerge$1 = _baseMerge, isObject$1 = isObject_1;
  function customDefaultsMerge$1(objValue, srcValue, key, object, source, stack) {
    if (isObject$1(objValue) && isObject$1(srcValue)) {
      stack.set(srcValue, objValue);
      baseMerge$1(objValue, srcValue, void 0, customDefaultsMerge$1, stack);
      stack["delete"](srcValue);
    }
    return objValue;
  }
  var _customDefaultsMerge = customDefaultsMerge$1;
  var baseRest$1 = _baseRest, isIterateeCall$1 = _isIterateeCall;
  function createAssigner$1(assigner) {
    return baseRest$1(function(object, sources) {
      var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index2 < length) {
        var source = sources[index2];
        if (source) {
          assigner(object, source, index2, customizer);
        }
      }
      return object;
    });
  }
  var _createAssigner = createAssigner$1;
  var baseMerge = _baseMerge, createAssigner = _createAssigner;
  var mergeWith$1 = createAssigner(function(object, source, srcIndex, customizer) {
    baseMerge(object, source, srcIndex, customizer);
  });
  var mergeWith_1 = mergeWith$1;
  var apply = _apply, baseRest = _baseRest, customDefaultsMerge = _customDefaultsMerge, mergeWith = mergeWith_1;
  var defaultsDeep = baseRest(function(args) {
    args.push(void 0, customDefaultsMerge);
    return apply(mergeWith, void 0, args);
  });
  var defaultsDeep_1 = defaultsDeep;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  function baseHas$1(object, key) {
    return object != null && hasOwnProperty.call(object, key);
  }
  var _baseHas = baseHas$1;
  var baseHas = _baseHas, hasPath = _hasPath;
  function has$1(object, path) {
    return object != null && hasPath(object, path, baseHas);
  }
  var has_1 = has$1;
  var isArrayLike = isArrayLike_1;
  function createBaseEach$1(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
      while (fromRight ? index2-- : ++index2 < length) {
        if (iteratee(iterable[index2], index2, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var _createBaseEach = createBaseEach$1;
  var baseForOwn = _baseForOwn, createBaseEach = _createBaseEach;
  var baseEach$1 = createBaseEach(baseForOwn);
  var _baseEach = baseEach$1;
  function head(array) {
    return array && array.length ? array[0] : void 0;
  }
  var head_1 = head;
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  var last_1 = last;
  var baseEach = _baseEach;
  function baseSome$1(collection, predicate) {
    var result;
    baseEach(collection, function(value, index2, collection2) {
      result = predicate(value, index2, collection2);
      return !result;
    });
    return !!result;
  }
  var _baseSome = baseSome$1;
  var arraySome = _arraySome, baseIteratee = _baseIteratee, baseSome = _baseSome, isArray$1 = isArray_1, isIterateeCall = _isIterateeCall;
  function some(collection, predicate, guard) {
    var func = isArray$1(collection) ? arraySome : baseSome;
    if (guard && isIterateeCall(collection, predicate, guard)) {
      predicate = void 0;
    }
    return func(collection, baseIteratee(predicate));
  }
  var some_1 = some;
  const getType = (value) => Object.prototype.toString.call(value).slice(8, -1);
  const isDate = (value) => isDate_1(value) && !isNaN(value.getTime());
  const isObject = (value) => getType(value) === "Object";
  const has = has_1;
  const hasAny = (obj, props) => some_1(props, (p) => has_1(obj, p));
  const pad = (val, len, char = "0") => {
    val = val !== null && val !== void 0 ? String(val) : "";
    len = len || 2;
    while (val.length < len) {
      val = `${char}${val}`;
    }
    return val;
  };
  const isArray = (val) => Array.isArray(val);
  const arrayHasItems = (array) => isArray(array) && array.length > 0;
  const resolveEl = (target) => {
    if (target == null)
      return target ?? null;
    if (document && isString_1(target))
      return document.querySelector(target);
    return target.$el ?? target;
  };
  const off = (element, event, handler, opts = void 0) => {
    element.removeEventListener(event, handler, opts);
  };
  const on = (element, event, handler, opts = void 0) => {
    element.addEventListener(event, handler, opts);
    return () => off(element, event, handler, opts);
  };
  const elementContains = (element, child) => !!element && !!child && (element === child || element.contains(child));
  const onSpaceOrEnter = (event, handler) => {
    if (event.key === " " || event.key === "Enter") {
      handler(event);
      event.preventDefault();
    }
  };
  const omit = (obj, ...keys2) => {
    const ret = {};
    let key;
    for (key in obj) {
      if (!keys2.includes(key)) {
        ret[key] = obj[key];
      }
    }
    return ret;
  };
  const pick = (obj, keys2) => {
    const ret = {};
    keys2.forEach((key) => {
      if (key in obj)
        ret[key] = obj[key];
    });
    return ret;
  };
  function clamp(num, min2, max2) {
    return Math.min(Math.max(num, min2), max2);
  }
  const createGuid = () => {
    function S4() {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
  };
  const targetProps = ["base", "start", "end", "startEnd"];
  const displayProps = [
    "class",
    "wrapperClass",
    "contentClass",
    "style",
    "contentStyle",
    "color",
    "fillMode"
  ];
  const _defaultProfile = { base: {}, start: {}, end: {} };
  function normalizeConfig(color, config2, defaultProfile = _defaultProfile) {
    let rootColor = color;
    let root2 = {};
    if (config2 === true || isString_1(config2)) {
      rootColor = isString_1(config2) ? config2 : rootColor;
      root2 = { ...defaultProfile };
    } else if (isObject(config2)) {
      if (hasAny(config2, targetProps)) {
        root2 = { ...config2 };
      } else {
        root2 = {
          base: { ...config2 },
          start: { ...config2 },
          end: { ...config2 }
        };
      }
    }
    const result = defaultsDeep_1(
      root2,
      { start: root2.startEnd, end: root2.startEnd },
      defaultProfile
    );
    Object.entries(result).forEach(([targetType, targetConfig]) => {
      let targetColor = rootColor;
      if (targetConfig === true || isString_1(targetConfig)) {
        targetColor = isString_1(targetConfig) ? targetConfig : targetColor;
        result[targetType] = { color: targetColor };
      } else if (isObject(targetConfig)) {
        if (hasAny(targetConfig, displayProps)) {
          result[targetType] = { ...targetConfig };
        } else {
          result[targetType] = {};
        }
      }
      defaultsDeep_1(result[targetType], { color: targetColor });
    });
    return result;
  }
  class HighlightRenderer {
    constructor() {
      __publicField(this, "type", "highlight");
    }
    normalizeConfig(color, config2) {
      return normalizeConfig(color, config2, {
        base: { fillMode: "light" },
        start: { fillMode: "solid" },
        end: { fillMode: "solid" }
      });
    }
    prepareRender(glyphs) {
      glyphs.highlights = [];
      if (!glyphs.content)
        glyphs.content = [];
    }
    render({ data: data2, onStart, onEnd }, glyphs) {
      const { key, highlight } = data2;
      if (!highlight)
        return;
      const { highlights } = glyphs;
      const { base, start: start2, end: end2 } = highlight;
      if (onStart && onEnd) {
        highlights.push({
          ...start2,
          key,
          wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${start2.color}`,
          class: [`vc-highlight vc-highlight-bg-${start2.fillMode}`, start2.class],
          contentClass: [
            `vc-attr vc-highlight-content-${start2.fillMode} vc-${start2.color}`,
            start2.contentClass
          ]
        });
      } else if (onStart) {
        highlights.push({
          ...base,
          key: `${key}-base`,
          wrapperClass: `vc-day-layer vc-day-box-right-center vc-attr vc-${base.color}`,
          class: [
            `vc-highlight vc-highlight-base-start vc-highlight-bg-${base.fillMode}`,
            base.class
          ]
        });
        highlights.push({
          ...start2,
          key,
          wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${start2.color}`,
          class: [`vc-highlight vc-highlight-bg-${start2.fillMode}`, start2.class],
          contentClass: [
            `vc-attr vc-highlight-content-${start2.fillMode} vc-${start2.color}`,
            start2.contentClass
          ]
        });
      } else if (onEnd) {
        highlights.push({
          ...base,
          key: `${key}-base`,
          wrapperClass: `vc-day-layer vc-day-box-left-center vc-attr vc-${base.color}`,
          class: [
            `vc-highlight vc-highlight-base-end vc-highlight-bg-${base.fillMode}`,
            base.class
          ]
        });
        highlights.push({
          ...end2,
          key,
          wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${end2.color}`,
          class: [`vc-highlight vc-highlight-bg-${end2.fillMode}`, end2.class],
          contentClass: [
            `vc-attr vc-highlight-content-${end2.fillMode} vc-${end2.color}`,
            end2.contentClass
          ]
        });
      } else {
        highlights.push({
          ...base,
          key: `${key}-middle`,
          wrapperClass: `vc-day-layer vc-day-box-center-center vc-attr vc-${base.color}`,
          class: [
            `vc-highlight vc-highlight-base-middle vc-highlight-bg-${base.fillMode}`,
            base.class
          ],
          contentClass: [
            `vc-attr vc-highlight-content-${base.fillMode} vc-${base.color}`,
            base.contentClass
          ]
        });
      }
    }
  }
  class BaseRenderer {
    constructor(type, collectionType) {
      __publicField(this, "type", "");
      __publicField(this, "collectionType", "");
      this.type = type;
      this.collectionType = collectionType;
    }
    normalizeConfig(color, config2) {
      return normalizeConfig(color, config2);
    }
    prepareRender(glyphs) {
      glyphs[this.collectionType] = [];
    }
    render({ data: data2, onStart, onEnd }, glyphs) {
      const { key } = data2;
      const item = data2[this.type];
      if (!key || !item)
        return;
      const collection = glyphs[this.collectionType];
      const { base, start: start2, end: end2 } = item;
      if (onStart) {
        collection.push({
          ...start2,
          key,
          class: [
            `vc-${this.type} vc-${this.type}-start vc-${start2.color} vc-attr`,
            start2.class
          ]
        });
      } else if (onEnd) {
        collection.push({
          ...end2,
          key,
          class: [
            `vc-${this.type} vc-${this.type}-end vc-${end2.color} vc-attr`,
            end2.class
          ]
        });
      } else {
        collection.push({
          ...base,
          key,
          class: [
            `vc-${this.type} vc-${this.type}-base vc-${base.color} vc-attr`,
            base.class
          ]
        });
      }
    }
  }
  class ContentRenderer extends BaseRenderer {
    constructor() {
      super("content", "content");
    }
    normalizeConfig(_, config2) {
      return normalizeConfig("base", config2);
    }
  }
  class DotRenderer extends BaseRenderer {
    constructor() {
      super("dot", "dots");
    }
  }
  class BarRenderer extends BaseRenderer {
    constructor() {
      super("bar", "bars");
    }
  }
  class Theme {
    constructor(color) {
      __publicField(this, "color");
      __publicField(this, "renderers", [
        new ContentRenderer(),
        new HighlightRenderer(),
        new DotRenderer(),
        new BarRenderer()
      ]);
      this.color = color;
    }
    normalizeGlyphs(attr) {
      this.renderers.forEach((renderer) => {
        const type = renderer.type;
        if (attr[type] != null) {
          attr[type] = renderer.normalizeConfig(this.color, attr[type]);
        }
      });
    }
    prepareRender(glyphs = {}) {
      this.renderers.forEach((renderer) => {
        renderer.prepareRender(glyphs);
      });
      return glyphs;
    }
    render(cell, glyphs) {
      this.renderers.forEach((renderer) => {
        renderer.render(cell, glyphs);
      });
    }
  }
  const maxSwipeTime = 300;
  const minHorizontalSwipeDistance = 60;
  const maxVerticalSwipeDistance = 80;
  const touch = {
    maxSwipeTime,
    minHorizontalSwipeDistance,
    maxVerticalSwipeDistance
  };
  const title = "MMMM YYYY";
  const weekdays = "W";
  const navMonths = "MMM";
  const hours = "h A";
  const input = [
    "L",
    "YYYY-MM-DD",
    "YYYY/MM/DD"
  ];
  const inputDateTime = [
    "L h:mm A",
    "YYYY-MM-DD h:mm A",
    "YYYY/MM/DD h:mm A"
  ];
  const inputDateTime24hr = [
    "L HH:mm",
    "YYYY-MM-DD HH:mm",
    "YYYY/MM/DD HH:mm"
  ];
  const inputTime = [
    "h:mm A"
  ];
  const inputTime24hr = [
    "HH:mm"
  ];
  const dayPopover = "WWW, MMM D, YYYY";
  const data = [
    "L",
    "YYYY-MM-DD",
    "YYYY/MM/DD"
  ];
  const model = "iso";
  const iso = "YYYY-MM-DDTHH:mm:ss.SSSZ";
  const masks = {
    title,
    weekdays,
    navMonths,
    hours,
    input,
    inputDateTime,
    inputDateTime24hr,
    inputTime,
    inputTime24hr,
    dayPopover,
    data,
    model,
    iso
  };
  const locales = {
    // Arabic
    ar: { dow: 7, L: "D/‏M/‏YYYY" },
    // Bulgarian
    bg: { dow: 2, L: "D.MM.YYYY" },
    // Catalan
    ca: { dow: 2, L: "DD/MM/YYYY" },
    // Chinese (China)
    "zh-CN": { dow: 2, L: "YYYY/MM/DD" },
    // Chinese (Taiwan)
    "zh-TW": { dow: 1, L: "YYYY/MM/DD" },
    // Croatian
    hr: { dow: 2, L: "DD.MM.YYYY" },
    // Czech
    cs: { dow: 2, L: "DD.MM.YYYY" },
    // Danish
    da: { dow: 2, L: "DD.MM.YYYY" },
    // Dutch
    nl: { dow: 2, L: "DD-MM-YYYY" },
    // English (US)
    "en-US": { dow: 1, L: "MM/DD/YYYY" },
    // English (Australia)
    "en-AU": { dow: 2, L: "DD/MM/YYYY" },
    // English (Canada)
    "en-CA": { dow: 1, L: "YYYY-MM-DD" },
    // English (Great Britain)
    "en-GB": { dow: 2, L: "DD/MM/YYYY" },
    // English (Ireland)
    "en-IE": { dow: 2, L: "DD-MM-YYYY" },
    // English (New Zealand)
    "en-NZ": { dow: 2, L: "DD/MM/YYYY" },
    // English (South Africa)
    "en-ZA": { dow: 1, L: "YYYY/MM/DD" },
    // Esperanto
    eo: { dow: 2, L: "YYYY-MM-DD" },
    // Estonian
    et: { dow: 2, L: "DD.MM.YYYY" },
    // Finnish
    fi: { dow: 2, L: "DD.MM.YYYY" },
    // French
    fr: { dow: 2, L: "DD/MM/YYYY" },
    // French (Canada)
    "fr-CA": { dow: 1, L: "YYYY-MM-DD" },
    // French (Switzerland)
    "fr-CH": { dow: 2, L: "DD.MM.YYYY" },
    // German
    de: { dow: 2, L: "DD.MM.YYYY" },
    // Hebrew
    he: { dow: 1, L: "DD.MM.YYYY" },
    // Indonesian
    id: { dow: 2, L: "DD/MM/YYYY" },
    // Italian
    it: { dow: 2, L: "DD/MM/YYYY" },
    // Japanese
    ja: { dow: 1, L: "YYYY年M月D日" },
    // Korean
    ko: { dow: 1, L: "YYYY.MM.DD" },
    // Latvian
    lv: { dow: 2, L: "DD.MM.YYYY" },
    // Lithuanian
    lt: { dow: 2, L: "DD.MM.YYYY" },
    // Macedonian
    mk: { dow: 2, L: "D.MM.YYYY" },
    // Norwegian
    nb: { dow: 2, L: "D. MMMM YYYY" },
    nn: { dow: 2, L: "D. MMMM YYYY" },
    // Polish
    pl: { dow: 2, L: "DD.MM.YYYY" },
    // Portuguese
    pt: { dow: 2, L: "DD/MM/YYYY" },
    // Romanian
    ro: { dow: 2, L: "DD.MM.YYYY" },
    // Russian
    ru: { dow: 2, L: "DD.MM.YYYY" },
    // Slovak
    sk: { dow: 2, L: "DD.MM.YYYY" },
    // Spanish (Spain)
    "es-ES": { dow: 2, L: "DD/MM/YYYY" },
    // Spanish (Mexico)
    "es-MX": { dow: 2, L: "DD/MM/YYYY" },
    // Swedish
    sv: { dow: 2, L: "YYYY-MM-DD" },
    // Thai
    th: { dow: 1, L: "DD/MM/YYYY" },
    // Turkish
    tr: { dow: 2, L: "DD.MM.YYYY" },
    // Ukrainian
    uk: { dow: 2, L: "DD.MM.YYYY" },
    // Vietnam
    vi: { dow: 2, L: "DD/MM/YYYY" }
  };
  locales.en = locales["en-US"];
  locales.es = locales["es-ES"];
  locales.no = locales.nb;
  locales.zh = locales["zh-CN"];
  const localeSettings = Object.entries(locales).reduce(
    (res, [id, { dow, L }]) => {
      res[id] = {
        id,
        firstDayOfWeek: dow,
        masks: { L }
      };
      return res;
    },
    {}
  );
  const defaultConfig = {
    componentPrefix: "V",
    color: "blue",
    isDark: false,
    navVisibility: "click",
    titlePosition: "center",
    transition: "slide-h",
    touch,
    masks,
    locales: localeSettings,
    datePicker: {
      updateOnInput: true,
      inputDebounce: 1e3,
      popover: {
        visibility: "hover-focus",
        placement: "bottom-start",
        isInteractive: true
      }
    }
  };
  const state = vue.reactive(defaultConfig);
  const defaultLocales = vue.computed(() => {
    return mapValues_1(state.locales, (l) => {
      l.masks = defaultsDeep_1(l.masks, state.masks);
      return l;
    });
  });
  const getDefault = (path) => {
    if (typeof window !== "undefined" && has(window.__vcalendar__, path)) {
      return get_1(window.__vcalendar__, path);
    }
    return get_1(state, path);
  };
  const setupDefaults = (app, userDefaults) => {
    app.config.globalProperties.$VCalendar = state;
    return Object.assign(state, defaultsDeep_1(userDefaults, state));
  };
  var toDateExports = {};
  var toDate$1 = {
    get exports() {
      return toDateExports;
    },
    set exports(v) {
      toDateExports = v;
    }
  };
  var toIntegerExports = {};
  var toInteger$1 = {
    get exports() {
      return toIntegerExports;
    },
    set exports(v) {
      toIntegerExports = v;
    }
  };
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = toInteger2;
    function toInteger2(dirtyNumber) {
      if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
      }
      var number = Number(dirtyNumber);
      if (isNaN(number)) {
        return number;
      }
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
    module2.exports = exports2.default;
  })(toInteger$1, toIntegerExports);
  var getTimezoneOffsetInMillisecondsExports = {};
  var getTimezoneOffsetInMilliseconds$1 = {
    get exports() {
      return getTimezoneOffsetInMillisecondsExports;
    },
    set exports(v) {
      getTimezoneOffsetInMillisecondsExports = v;
    }
  };
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = getTimezoneOffsetInMilliseconds2;
    function getTimezoneOffsetInMilliseconds2(date) {
      var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      utcDate.setUTCFullYear(date.getFullYear());
      return date.getTime() - utcDate.getTime();
    }
    module2.exports = exports2.default;
  })(getTimezoneOffsetInMilliseconds$1, getTimezoneOffsetInMillisecondsExports);
  var tzParseTimezoneExports = {};
  var tzParseTimezone = {
    get exports() {
      return tzParseTimezoneExports;
    },
    set exports(v) {
      tzParseTimezoneExports = v;
    }
  };
  var tzTokenizeDateExports = {};
  var tzTokenizeDate = {
    get exports() {
      return tzTokenizeDateExports;
    },
    set exports(v) {
      tzTokenizeDateExports = v;
    }
  };
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = tzTokenizeDate2;
    function tzTokenizeDate2(date, timeZone) {
      var dtf = getDateTimeFormat(timeZone);
      return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date);
    }
    var typeToPos = {
      year: 0,
      month: 1,
      day: 2,
      hour: 3,
      minute: 4,
      second: 5
    };
    function partsOffset(dtf, date) {
      try {
        var formatted = dtf.formatToParts(date);
        var filled = [];
        for (var i = 0; i < formatted.length; i++) {
          var pos = typeToPos[formatted[i].type];
          if (pos >= 0) {
            filled[pos] = parseInt(formatted[i].value, 10);
          }
        }
        return filled;
      } catch (error) {
        if (error instanceof RangeError) {
          return [NaN];
        }
        throw error;
      }
    }
    function hackyOffset(dtf, date) {
      var formatted = dtf.format(date).replace(/\u200E/g, "");
      var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
      return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]];
    }
    var dtfCache = {};
    function getDateTimeFormat(timeZone) {
      if (!dtfCache[timeZone]) {
        var testDateFormatted = new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone: "America/New_York",
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z"));
        var hourCycleSupported = testDateFormatted === "06/25/2014, 00:00:00" || testDateFormatted === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
        dtfCache[timeZone] = hourCycleSupported ? new Intl.DateTimeFormat("en-US", {
          hour12: false,
          timeZone,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });
      }
      return dtfCache[timeZone];
    }
    module2.exports = exports2.default;
  })(tzTokenizeDate, tzTokenizeDateExports);
  var newDateUTCExports = {};
  var newDateUTC = {
    get exports() {
      return newDateUTCExports;
    },
    set exports(v) {
      newDateUTCExports = v;
    }
  };
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = newDateUTC2;
    function newDateUTC2(fullYear, month, day, hour, minute, second, millisecond) {
      var utcDate = /* @__PURE__ */ new Date(0);
      utcDate.setUTCFullYear(fullYear, month, day);
      utcDate.setUTCHours(hour, minute, second, millisecond);
      return utcDate;
    }
    module2.exports = exports2.default;
  })(newDateUTC, newDateUTCExports);
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = tzParseTimezone2;
    var _index = _interopRequireDefault(tzTokenizeDateExports);
    var _index2 = _interopRequireDefault(newDateUTCExports);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MILLISECONDS_IN_HOUR = 36e5;
    var MILLISECONDS_IN_MINUTE = 6e4;
    var patterns = {
      timezone: /([Z+-].*)$/,
      timezoneZ: /^(Z)$/,
      timezoneHH: /^([+-]\d{2})$/,
      timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
    };
    function tzParseTimezone2(timezoneString, date, isUtcDate) {
      var token2;
      var absoluteOffset;
      if (!timezoneString) {
        return 0;
      }
      token2 = patterns.timezoneZ.exec(timezoneString);
      if (token2) {
        return 0;
      }
      var hours2;
      token2 = patterns.timezoneHH.exec(timezoneString);
      if (token2) {
        hours2 = parseInt(token2[1], 10);
        if (!validateTimezone(hours2)) {
          return NaN;
        }
        return -(hours2 * MILLISECONDS_IN_HOUR);
      }
      token2 = patterns.timezoneHHMM.exec(timezoneString);
      if (token2) {
        hours2 = parseInt(token2[1], 10);
        var minutes = parseInt(token2[2], 10);
        if (!validateTimezone(hours2, minutes)) {
          return NaN;
        }
        absoluteOffset = Math.abs(hours2) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
        return hours2 > 0 ? -absoluteOffset : absoluteOffset;
      }
      if (isValidTimezoneIANAString(timezoneString)) {
        date = new Date(date || Date.now());
        var utcDate = isUtcDate ? date : toUtcDate(date);
        var offset2 = calcOffset(utcDate, timezoneString);
        var fixedOffset = isUtcDate ? offset2 : fixOffset(date, offset2, timezoneString);
        return -fixedOffset;
      }
      return NaN;
    }
    function toUtcDate(date) {
      return (0, _index2.default)(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    }
    function calcOffset(date, timezoneString) {
      var tokens = (0, _index.default)(date, timezoneString);
      var asUTC = (0, _index2.default)(tokens[0], tokens[1] - 1, tokens[2], tokens[3] % 24, tokens[4], tokens[5], 0).getTime();
      var asTS = date.getTime();
      var over = asTS % 1e3;
      asTS -= over >= 0 ? over : 1e3 + over;
      return asUTC - asTS;
    }
    function fixOffset(date, offset2, timezoneString) {
      var localTS = date.getTime();
      var utcGuess = localTS - offset2;
      var o2 = calcOffset(new Date(utcGuess), timezoneString);
      if (offset2 === o2) {
        return offset2;
      }
      utcGuess -= o2 - offset2;
      var o3 = calcOffset(new Date(utcGuess), timezoneString);
      if (o2 === o3) {
        return o2;
      }
      return Math.max(o2, o3);
    }
    function validateTimezone(hours2, minutes) {
      return -23 <= hours2 && hours2 <= 23 && (minutes == null || 0 <= minutes && minutes <= 59);
    }
    var validIANATimezoneCache = {};
    function isValidTimezoneIANAString(timeZoneString) {
      if (validIANATimezoneCache[timeZoneString])
        return true;
      try {
        new Intl.DateTimeFormat(void 0, {
          timeZone: timeZoneString
        });
        validIANATimezoneCache[timeZoneString] = true;
        return true;
      } catch (error) {
        return false;
      }
    }
    module2.exports = exports2.default;
  })(tzParseTimezone, tzParseTimezoneExports);
  var tzPatternExports = {};
  var tzPattern = {
    get exports() {
      return tzPatternExports;
    },
    set exports(v) {
      tzPatternExports = v;
    }
  };
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = void 0;
    var tzPattern2 = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
    var _default = tzPattern2;
    exports2.default = _default;
    module2.exports = exports2.default;
  })(tzPattern, tzPatternExports);
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = toDate2;
    var _index = _interopRequireDefault(toIntegerExports);
    var _index2 = _interopRequireDefault(getTimezoneOffsetInMillisecondsExports);
    var _index3 = _interopRequireDefault(tzParseTimezoneExports);
    var _index4 = _interopRequireDefault(tzPatternExports);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var MILLISECONDS_IN_HOUR = 36e5;
    var MILLISECONDS_IN_MINUTE = 6e4;
    var DEFAULT_ADDITIONAL_DIGITS = 2;
    var patterns = {
      dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
      datePattern: /^([0-9W+-]+)(.*)/,
      plainTime: /:/,
      // year tokens
      YY: /^(\d{2})$/,
      YYY: [
        /^([+-]\d{2})$/,
        // 0 additional digits
        /^([+-]\d{3})$/,
        // 1 additional digit
        /^([+-]\d{4})$/
        // 2 additional digits
      ],
      YYYY: /^(\d{4})/,
      YYYYY: [
        /^([+-]\d{4})/,
        // 0 additional digits
        /^([+-]\d{5})/,
        // 1 additional digit
        /^([+-]\d{6})/
        // 2 additional digits
      ],
      // date tokens
      MM: /^-(\d{2})$/,
      DDD: /^-?(\d{3})$/,
      MMDD: /^-?(\d{2})-?(\d{2})$/,
      Www: /^-?W(\d{2})$/,
      WwwD: /^-?W(\d{2})-?(\d{1})$/,
      HH: /^(\d{2}([.,]\d*)?)$/,
      HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
      HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
      // time zone tokens (to identify the presence of a tz)
      timeZone: _index4.default
    };
    function toDate2(argument, dirtyOptions) {
      if (arguments.length < 1) {
        throw new TypeError("1 argument required, but only " + arguments.length + " present");
      }
      if (argument === null) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var options = dirtyOptions || {};
      var additionalDigits = options.additionalDigits == null ? DEFAULT_ADDITIONAL_DIGITS : (0, _index.default)(options.additionalDigits);
      if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
        throw new RangeError("additionalDigits must be 0, 1 or 2");
      }
      if (argument instanceof Date || typeof argument === "object" && Object.prototype.toString.call(argument) === "[object Date]") {
        return new Date(argument.getTime());
      } else if (typeof argument === "number" || Object.prototype.toString.call(argument) === "[object Number]") {
        return new Date(argument);
      } else if (!(typeof argument === "string" || Object.prototype.toString.call(argument) === "[object String]")) {
        return /* @__PURE__ */ new Date(NaN);
      }
      var dateStrings = splitDateString(argument);
      var parseYearResult = parseYear(dateStrings.date, additionalDigits);
      var year = parseYearResult.year;
      var restDateString = parseYearResult.restDateString;
      var date = parseDate2(restDateString, year);
      if (isNaN(date)) {
        return /* @__PURE__ */ new Date(NaN);
      }
      if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset2;
        if (dateStrings.time) {
          time = parseTime(dateStrings.time);
          if (isNaN(time)) {
            return /* @__PURE__ */ new Date(NaN);
          }
        }
        if (dateStrings.timeZone || options.timeZone) {
          offset2 = (0, _index3.default)(dateStrings.timeZone || options.timeZone, new Date(timestamp + time));
          if (isNaN(offset2)) {
            return /* @__PURE__ */ new Date(NaN);
          }
        } else {
          offset2 = (0, _index2.default)(new Date(timestamp + time));
          offset2 = (0, _index2.default)(new Date(timestamp + time + offset2));
        }
        return new Date(timestamp + time + offset2);
      } else {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    function splitDateString(dateString) {
      var dateStrings = {};
      var parts = patterns.dateTimePattern.exec(dateString);
      var timeString;
      if (!parts) {
        parts = patterns.datePattern.exec(dateString);
        if (parts) {
          dateStrings.date = parts[1];
          timeString = parts[2];
        } else {
          dateStrings.date = null;
          timeString = dateString;
        }
      } else {
        dateStrings.date = parts[1];
        timeString = parts[3];
      }
      if (timeString) {
        var token2 = patterns.timeZone.exec(timeString);
        if (token2) {
          dateStrings.time = timeString.replace(token2[1], "");
          dateStrings.timeZone = token2[1].trim();
        } else {
          dateStrings.time = timeString;
        }
      }
      return dateStrings;
    }
    function parseYear(dateString, additionalDigits) {
      var patternYYY = patterns.YYY[additionalDigits];
      var patternYYYYY = patterns.YYYYY[additionalDigits];
      var token2;
      token2 = patterns.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
      if (token2) {
        var yearString = token2[1];
        return {
          year: parseInt(yearString, 10),
          restDateString: dateString.slice(yearString.length)
        };
      }
      token2 = patterns.YY.exec(dateString) || patternYYY.exec(dateString);
      if (token2) {
        var centuryString = token2[1];
        return {
          year: parseInt(centuryString, 10) * 100,
          restDateString: dateString.slice(centuryString.length)
        };
      }
      return {
        year: null
      };
    }
    function parseDate2(dateString, year) {
      if (year === null) {
        return null;
      }
      var token2;
      var date;
      var month;
      var week;
      if (dateString.length === 0) {
        date = /* @__PURE__ */ new Date(0);
        date.setUTCFullYear(year);
        return date;
      }
      token2 = patterns.MM.exec(dateString);
      if (token2) {
        date = /* @__PURE__ */ new Date(0);
        month = parseInt(token2[1], 10) - 1;
        if (!validateDate(year, month)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        date.setUTCFullYear(year, month);
        return date;
      }
      token2 = patterns.DDD.exec(dateString);
      if (token2) {
        date = /* @__PURE__ */ new Date(0);
        var dayOfYear = parseInt(token2[1], 10);
        if (!validateDayOfYearDate(year, dayOfYear)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        date.setUTCFullYear(year, 0, dayOfYear);
        return date;
      }
      token2 = patterns.MMDD.exec(dateString);
      if (token2) {
        date = /* @__PURE__ */ new Date(0);
        month = parseInt(token2[1], 10) - 1;
        var day = parseInt(token2[2], 10);
        if (!validateDate(year, month, day)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        date.setUTCFullYear(year, month, day);
        return date;
      }
      token2 = patterns.Www.exec(dateString);
      if (token2) {
        week = parseInt(token2[1], 10) - 1;
        if (!validateWeekDate(year, week)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        return dayOfISOWeekYear(year, week);
      }
      token2 = patterns.WwwD.exec(dateString);
      if (token2) {
        week = parseInt(token2[1], 10) - 1;
        var dayOfWeek = parseInt(token2[2], 10) - 1;
        if (!validateWeekDate(year, week, dayOfWeek)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        return dayOfISOWeekYear(year, week, dayOfWeek);
      }
      return null;
    }
    function parseTime(timeString) {
      var token2;
      var hours2;
      var minutes;
      token2 = patterns.HH.exec(timeString);
      if (token2) {
        hours2 = parseFloat(token2[1].replace(",", "."));
        if (!validateTime(hours2)) {
          return NaN;
        }
        return hours2 % 24 * MILLISECONDS_IN_HOUR;
      }
      token2 = patterns.HHMM.exec(timeString);
      if (token2) {
        hours2 = parseInt(token2[1], 10);
        minutes = parseFloat(token2[2].replace(",", "."));
        if (!validateTime(hours2, minutes)) {
          return NaN;
        }
        return hours2 % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
      }
      token2 = patterns.HHMMSS.exec(timeString);
      if (token2) {
        hours2 = parseInt(token2[1], 10);
        minutes = parseInt(token2[2], 10);
        var seconds = parseFloat(token2[3].replace(",", "."));
        if (!validateTime(hours2, minutes, seconds)) {
          return NaN;
        }
        return hours2 % 24 * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * 1e3;
      }
      return null;
    }
    function dayOfISOWeekYear(isoWeekYear, week, day) {
      week = week || 0;
      day = day || 0;
      var date = /* @__PURE__ */ new Date(0);
      date.setUTCFullYear(isoWeekYear, 0, 4);
      var fourthOfJanuaryDay = date.getUTCDay() || 7;
      var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
      date.setUTCDate(date.getUTCDate() + diff);
      return date;
    }
    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function isLeapYearIndex(year) {
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }
    function validateDate(year, month, date) {
      if (month < 0 || month > 11) {
        return false;
      }
      if (date != null) {
        if (date < 1) {
          return false;
        }
        var isLeapYear = isLeapYearIndex(year);
        if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR[month]) {
          return false;
        }
        if (!isLeapYear && date > DAYS_IN_MONTH[month]) {
          return false;
        }
      }
      return true;
    }
    function validateDayOfYearDate(year, dayOfYear) {
      if (dayOfYear < 1) {
        return false;
      }
      var isLeapYear = isLeapYearIndex(year);
      if (isLeapYear && dayOfYear > 366) {
        return false;
      }
      if (!isLeapYear && dayOfYear > 365) {
        return false;
      }
      return true;
    }
    function validateWeekDate(year, week, day) {
      if (week < 0 || week > 52) {
        return false;
      }
      if (day != null && (day < 0 || day > 6)) {
        return false;
      }
      return true;
    }
    function validateTime(hours2, minutes, seconds) {
      if (hours2 != null && (hours2 < 0 || hours2 >= 25)) {
        return false;
      }
      if (minutes != null && (minutes < 0 || minutes >= 60)) {
        return false;
      }
      if (seconds != null && (seconds < 0 || seconds >= 60)) {
        return false;
      }
      return true;
    }
    module2.exports = exports2.default;
  })(toDate$1, toDateExports);
  const toFnsDate = /* @__PURE__ */ getDefaultExportFromCjs(toDateExports);
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        console.warn(new Error().stack);
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }
  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }
  function startOfWeek$1(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }
  var MILLISECONDS_IN_WEEK$2 = 6048e5;
  function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, options) {
    requiredArgs(2, arguments);
    var startOfWeekLeft = startOfWeek$1(dirtyDateLeft, options);
    var startOfWeekRight = startOfWeek$1(dirtyDateRight, options);
    var timestampLeft = startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft);
    var timestampRight = startOfWeekRight.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekRight);
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$2);
  }
  function lastDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function startOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
  }
  function getWeeksInMonth(date, options) {
    requiredArgs(1, arguments);
    return differenceInCalendarWeeks(lastDayOfMonth(date), startOfMonth(date), options) + 1;
  }
  function getWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek$1(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek$1(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions2 = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getWeekYear(dirtyDate, options);
    var firstWeek = /* @__PURE__ */ new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = startOfWeek$1(firstWeek, options);
    return date;
  }
  var MILLISECONDS_IN_WEEK$1 = 6048e5;
  function getWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfWeek$1(date, options).getTime() - startOfWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }
  function startOfISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    return startOfWeek$1(dirtyDate, {
      weekStartsOn: 1
    });
  }
  function getISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
    fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }
  function startOfISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getISOWeekYear(dirtyDate);
    var fourthOfJanuary = /* @__PURE__ */ new Date(0);
    fourthOfJanuary.setFullYear(year, 0, 4);
    fourthOfJanuary.setHours(0, 0, 0, 0);
    var date = startOfISOWeek(fourthOfJanuary);
    return date;
  }
  var MILLISECONDS_IN_WEEK = 6048e5;
  function getISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfISOWeek(date).getTime() - startOfISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }
  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    if (!amount) {
      return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
  }
  function addMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
      return /* @__PURE__ */ new Date(NaN);
    }
    if (!amount) {
      return date;
    }
    var dayOfMonth = date.getDate();
    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
      return endOfDesiredMonth;
    } else {
      date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
      return date;
    }
  }
  function addYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMonths(dirtyDate, amount * 12);
  }
  var GroupRuleType = /* @__PURE__ */ ((GroupRuleType2) => {
    GroupRuleType2["Any"] = "any";
    GroupRuleType2["All"] = "all";
    return GroupRuleType2;
  })(GroupRuleType || {});
  var IntervalRuleType = /* @__PURE__ */ ((IntervalRuleType2) => {
    IntervalRuleType2["Days"] = "days";
    IntervalRuleType2["Weeks"] = "weeks";
    IntervalRuleType2["Months"] = "months";
    IntervalRuleType2["Years"] = "years";
    return IntervalRuleType2;
  })(IntervalRuleType || {});
  var ComponentRuleType = /* @__PURE__ */ ((ComponentRuleType2) => {
    ComponentRuleType2["Days"] = "days";
    ComponentRuleType2["Weekdays"] = "weekdays";
    ComponentRuleType2["Weeks"] = "weeks";
    ComponentRuleType2["Months"] = "months";
    ComponentRuleType2["Years"] = "years";
    return ComponentRuleType2;
  })(ComponentRuleType || {});
  var OrdinalComponentRuleType = /* @__PURE__ */ ((OrdinalComponentRuleType2) => {
    OrdinalComponentRuleType2["OrdinalWeekdays"] = "ordinalWeekdays";
    return OrdinalComponentRuleType2;
  })(OrdinalComponentRuleType || {});
  class IntervalRule {
    constructor(type, interval, from) {
      __publicField(this, "validated", true);
      this.type = type;
      this.interval = interval;
      this.from = from;
      if (!this.from) {
        console.error(
          `A valid "from" date is required for date interval rule. This rule will be skipped.`
        );
        this.validated = false;
      }
    }
    passes(dateParts) {
      if (!this.validated)
        return true;
      const { date } = dateParts;
      switch (this.type) {
        case "days": {
          return diffInDays(this.from.date, date) % this.interval === 0;
        }
        case "weeks": {
          return diffInWeeks(this.from.date, date) % this.interval === 0;
        }
        case "months": {
          return diffInMonths(this.from.date, date) % this.interval === 0;
        }
        case "years": {
          return diffInYears(this.from.date, date) % this.interval === 0;
        }
        default: {
          return false;
        }
      }
    }
  }
  class ComponentRule {
    constructor(type, components2, validator, getter) {
      __publicField(this, "components", []);
      this.type = type;
      this.validator = validator;
      this.getter = getter;
      this.components = this.normalizeComponents(components2);
    }
    static create(type, config2) {
      switch (type) {
        case "days":
          return new DaysRule(config2);
        case "weekdays":
          return new WeekdaysRule(config2);
        case "weeks":
          return new WeeksRule(config2);
        case "months":
          return new MonthsRule(config2);
        case "years":
          return new YearsRule(config2);
      }
    }
    normalizeComponents(components2) {
      if (this.validator(components2))
        return [components2];
      if (!isArray(components2))
        return [];
      const result = [];
      components2.forEach((component) => {
        if (!this.validator(component)) {
          console.error(
            `Component value ${component} in invalid for "${this.type}" rule. This rule will be skipped.`
          );
          return;
        }
        result.push(component);
      });
      return result;
    }
    passes(dayParts) {
      const comps = this.getter(dayParts);
      const result = comps.some((comp) => this.components.includes(comp));
      return result;
    }
  }
  class DaysRule extends ComponentRule {
    constructor(components2) {
      super(
        "days",
        components2,
        isDayInMonth,
        ({ day, dayFromEnd }) => [day, -dayFromEnd]
      );
    }
  }
  class WeekdaysRule extends ComponentRule {
    constructor(components2) {
      super(
        "weekdays",
        components2,
        isDayOfWeek,
        ({ weekday }) => [weekday]
      );
    }
  }
  class WeeksRule extends ComponentRule {
    constructor(components2) {
      super(
        "weeks",
        components2,
        isWeekInMonth,
        ({ week, weekFromEnd }) => [week, -weekFromEnd]
      );
    }
  }
  class MonthsRule extends ComponentRule {
    constructor(components2) {
      super("months", components2, isMonthInYear, ({ month }) => [
        month
      ]);
    }
  }
  class YearsRule extends ComponentRule {
    constructor(components2) {
      super("years", components2, isNumber_1, ({ year }) => [year]);
    }
  }
  class OrdinalComponentRule {
    constructor(type, components2) {
      __publicField(this, "components");
      this.type = type;
      this.components = this.normalizeComponents(components2);
    }
    normalizeArrayConfig(config2) {
      const result = [];
      config2.forEach((numOrArray, i) => {
        if (isNumber_1(numOrArray)) {
          if (i === 0)
            return;
          if (!isOrdinalWeekInMonth(config2[0])) {
            console.error(
              `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
            );
            return;
          }
          if (!isDayOfWeek(numOrArray)) {
            console.error(
              `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
            );
            return;
          }
          result.push([config2[0], numOrArray]);
        } else if (isArray(numOrArray)) {
          result.push(...this.normalizeArrayConfig(numOrArray));
        }
      });
      return result;
    }
    normalizeComponents(config2) {
      const result = [];
      config2.forEach((numOrArray, i) => {
        if (isNumber_1(numOrArray)) {
          if (i === 0)
            return;
          if (!isOrdinalWeekInMonth(config2[0])) {
            console.error(
              `Ordinal range for "${this.type}" rule is from -5 to -1 or 1 to 5. This rule will be skipped.`
            );
            return;
          }
          if (!isDayOfWeek(numOrArray)) {
            console.error(
              `Acceptable range for "${this.type}" rule is from 1 to 5. This rule will be skipped`
            );
            return;
          }
          result.push([config2[0], numOrArray]);
        } else if (isArray(numOrArray)) {
          result.push(...this.normalizeArrayConfig(numOrArray));
        }
      });
      return result;
    }
    passes(dayParts) {
      const { weekday, weekdayOrdinal, weekdayOrdinalFromEnd } = dayParts;
      return this.components.some(
        ([ordinalWeek, ordinalWeekday]) => (ordinalWeek === weekdayOrdinal || ordinalWeek === -weekdayOrdinalFromEnd) && weekday === ordinalWeekday
      );
    }
  }
  class FunctionRule {
    constructor(fn) {
      __publicField(this, "type", "function");
      __publicField(this, "validated", true);
      this.fn = fn;
      if (!isFunction_1(fn)) {
        console.error(
          `The function rule requires a valid function. This rule will be skipped.`
        );
        this.validated = false;
      }
    }
    passes(dayParts) {
      if (!this.validated)
        return true;
      return this.fn(dayParts);
    }
  }
  class DateRepeat {
    constructor(config2, options = {}, parent) {
      __publicField(this, "validated", true);
      __publicField(this, "config");
      __publicField(this, "type", GroupRuleType.Any);
      __publicField(this, "from");
      __publicField(this, "until");
      __publicField(this, "rules", []);
      __publicField(this, "locale", new Locale());
      this.parent = parent;
      if (options.locale)
        this.locale = options.locale;
      this.config = config2;
      if (isFunction_1(config2)) {
        this.type = GroupRuleType.All;
        this.rules = [new FunctionRule(config2)];
      } else if (isArray(config2)) {
        this.type = GroupRuleType.Any;
        this.rules = config2.map((c) => new DateRepeat(c, options, this));
      } else if (isObject(config2)) {
        this.type = GroupRuleType.All;
        this.from = config2.from ? this.locale.getDateParts(config2.from) : parent == null ? void 0 : parent.from;
        this.until = config2.until ? this.locale.getDateParts(config2.until) : parent == null ? void 0 : parent.until;
        this.rules = this.getObjectRules(config2);
      } else {
        console.error("Rule group configuration must be an object or an array.");
        this.validated = false;
      }
    }
    getObjectRules(config2) {
      const rules = [];
      if (config2.every) {
        if (isString_1(config2.every)) {
          config2.every = [1, `${config2.every}s`];
        }
        if (isArray(config2.every)) {
          const [interval = 1, type = IntervalRuleType.Days] = config2.every;
          rules.push(new IntervalRule(type, interval, this.from));
        }
      }
      Object.values(ComponentRuleType).forEach((type) => {
        if (!(type in config2))
          return;
        rules.push(ComponentRule.create(type, config2[type]));
      });
      Object.values(OrdinalComponentRuleType).forEach((type) => {
        if (!(type in config2))
          return;
        rules.push(new OrdinalComponentRule(type, config2[type]));
      });
      if (config2.on != null) {
        if (!isArray(config2.on))
          config2.on = [config2.on];
        rules.push(
          new DateRepeat(config2.on, { locale: this.locale }, this.parent)
        );
      }
      return rules;
    }
    passes(dayParts) {
      if (!this.validated)
        return true;
      if (this.from && dayParts.dayIndex <= this.from.dayIndex)
        return false;
      if (this.until && dayParts.dayIndex >= this.until.dayIndex)
        return false;
      if (this.type === GroupRuleType.Any) {
        return this.rules.some((r) => r.passes(dayParts));
      }
      return this.rules.every((r) => r.passes(dayParts));
    }
  }
  function isDayInMonth(dayInMonth) {
    if (!isNumber_1(dayInMonth))
      return false;
    return dayInMonth >= 1 && dayInMonth <= 31;
  }
  function isDayOfWeek(dayOfWeek) {
    if (!isNumber_1(dayOfWeek))
      return false;
    return dayOfWeek >= 1 && dayOfWeek <= 7;
  }
  function isWeekInMonth(weekInMonth) {
    if (!isNumber_1(weekInMonth))
      return false;
    return weekInMonth >= -6 && weekInMonth <= -1 || weekInMonth >= 1 && weekInMonth <= 6;
  }
  function isMonthInYear(monthInYear) {
    if (!isNumber_1(monthInYear))
      return false;
    return monthInYear >= 1 && monthInYear <= 12;
  }
  function isOrdinalWeekInMonth(weekInMonth) {
    if (!isNumber_1(weekInMonth))
      return false;
    if (weekInMonth < -5 || weekInMonth > 5 || weekInMonth === 0)
      return false;
    return true;
  }
  const DatePatchKeys = {
    dateTime: [
      "year",
      "month",
      "day",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ],
    date: ["year", "month", "day"],
    time: ["hours", "minutes", "seconds", "milliseconds"]
  };
  const daysInWeek = 7;
  const weeksInMonth = 6;
  const MS_PER_SECOND = 1e3;
  const MS_PER_MINUTE = MS_PER_SECOND * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const maskMacros = ["L", "iso"];
  const DATE_PART_RANGES = {
    milliseconds: [0, 999, 3],
    seconds: [0, 59, 2],
    minutes: [0, 59, 2],
    hours: [0, 23, 2]
  };
  const token = /d{1,2}|W{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|Z{1,4}|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  const literal = /\[([^]*?)\]/gm;
  const formatFlags = {
    D(d) {
      return d.day;
    },
    DD(d) {
      return pad(d.day, 2);
    },
    // Do(d: DateParts, l: Locale) {
    //   return l.DoFn(d.day);
    // },
    d(d) {
      return d.weekday - 1;
    },
    dd(d) {
      return pad(d.weekday - 1, 2);
    },
    W(d, l) {
      return l.dayNamesNarrow[d.weekday - 1];
    },
    WW(d, l) {
      return l.dayNamesShorter[d.weekday - 1];
    },
    WWW(d, l) {
      return l.dayNamesShort[d.weekday - 1];
    },
    WWWW(d, l) {
      return l.dayNames[d.weekday - 1];
    },
    M(d) {
      return d.month;
    },
    MM(d) {
      return pad(d.month, 2);
    },
    MMM(d, l) {
      return l.monthNamesShort[d.month - 1];
    },
    MMMM(d, l) {
      return l.monthNames[d.month - 1];
    },
    YY(d) {
      return String(d.year).substr(2);
    },
    YYYY(d) {
      return pad(d.year, 4);
    },
    h(d) {
      return d.hours % 12 || 12;
    },
    hh(d) {
      return pad(d.hours % 12 || 12, 2);
    },
    H(d) {
      return d.hours;
    },
    HH(d) {
      return pad(d.hours, 2);
    },
    m(d) {
      return d.minutes;
    },
    mm(d) {
      return pad(d.minutes, 2);
    },
    s(d) {
      return d.seconds;
    },
    ss(d) {
      return pad(d.seconds, 2);
    },
    S(d) {
      return Math.round(d.milliseconds / 100);
    },
    SS(d) {
      return pad(Math.round(d.milliseconds / 10), 2);
    },
    SSS(d) {
      return pad(d.milliseconds, 3);
    },
    a(d, l) {
      return d.hours < 12 ? l.amPm[0] : l.amPm[1];
    },
    A(d, l) {
      return d.hours < 12 ? l.amPm[0].toUpperCase() : l.amPm[1].toUpperCase();
    },
    Z() {
      return "Z";
    },
    ZZ(d) {
      const o = d.timezoneOffset;
      return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}`;
    },
    ZZZ(d) {
      const o = d.timezoneOffset;
      return `${o > 0 ? "-" : "+"}${pad(
        Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60,
        4
      )}`;
    },
    ZZZZ(d) {
      const o = d.timezoneOffset;
      return `${o > 0 ? "-" : "+"}${pad(Math.floor(Math.abs(o) / 60), 2)}:${pad(
        Math.abs(o) % 60,
        2
      )}`;
    }
  };
  const twoDigits = /\d\d?/;
  const threeDigits = /\d{3}/;
  const fourDigits = /\d{4}/;
  const word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  const noop = () => {
  };
  const monthUpdate = (arrName) => (d, v, l) => {
    const index2 = l[arrName].indexOf(
      v.charAt(0).toUpperCase() + v.substr(1).toLowerCase()
    );
    if (~index2) {
      d.month = index2;
    }
  };
  const parseFlags = {
    D: [
      twoDigits,
      (d, v) => {
        d.day = v;
      }
    ],
    Do: [
      new RegExp(twoDigits.source + word.source),
      (d, v) => {
        d.day = parseInt(v, 10);
      }
    ],
    d: [twoDigits, noop],
    W: [word, noop],
    M: [
      twoDigits,
      (d, v) => {
        d.month = v - 1;
      }
    ],
    MMM: [word, monthUpdate("monthNamesShort")],
    MMMM: [word, monthUpdate("monthNames")],
    YY: [
      twoDigits,
      (d, v) => {
        const da = /* @__PURE__ */ new Date();
        const cent = +da.getFullYear().toString().substr(0, 2);
        d.year = +`${v > 68 ? cent - 1 : cent}${v}`;
      }
    ],
    YYYY: [
      fourDigits,
      (d, v) => {
        d.year = v;
      }
    ],
    S: [
      /\d/,
      (d, v) => {
        d.milliseconds = v * 100;
      }
    ],
    SS: [
      /\d{2}/,
      (d, v) => {
        d.milliseconds = v * 10;
      }
    ],
    SSS: [
      threeDigits,
      (d, v) => {
        d.milliseconds = v;
      }
    ],
    h: [
      twoDigits,
      (d, v) => {
        d.hours = v;
      }
    ],
    m: [
      twoDigits,
      (d, v) => {
        d.minutes = v;
      }
    ],
    s: [
      twoDigits,
      (d, v) => {
        d.seconds = v;
      }
    ],
    a: [
      word,
      (d, v, l) => {
        const val = v.toLowerCase();
        if (val === l.amPm[0]) {
          d.isPm = false;
        } else if (val === l.amPm[1]) {
          d.isPm = true;
        }
      }
    ],
    Z: [
      /[^\s]*?[+-]\d\d:?\d\d|[^\s]*?Z?/,
      (d, v) => {
        if (v === "Z")
          v = "+00:00";
        const parts = `${v}`.match(/([+-]|\d\d)/gi);
        if (parts) {
          const minutes = +parts[1] * 60 + parseInt(parts[2], 10);
          d.timezoneOffset = parts[0] === "+" ? minutes : -minutes;
        }
      }
    ]
  };
  parseFlags.DD = parseFlags.D;
  parseFlags.dd = parseFlags.d;
  parseFlags.WWWW = parseFlags.WWW = parseFlags.WW = parseFlags.W;
  parseFlags.MM = parseFlags.M;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;
  parseFlags.ZZZZ = parseFlags.ZZZ = parseFlags.ZZ = parseFlags.Z;
  function normalizeMasks(masks2, locale) {
    return (arrayHasItems(masks2) && masks2 || [
      isString_1(masks2) && masks2 || "YYYY-MM-DD"
    ]).map(
      (m) => maskMacros.reduce(
        (prev, curr) => prev.replace(curr, locale.masks[curr] || ""),
        m
      )
    );
  }
  function isDateParts(parts) {
    return isObject(parts) && "year" in parts && "month" in parts && "day" in parts;
  }
  function startOfWeek(date, firstDayOfWeek = 1) {
    const day = date.getDay() + 1;
    const daysToAdd = day >= firstDayOfWeek ? firstDayOfWeek - day : -(7 - (firstDayOfWeek - day));
    return addDays(date, daysToAdd);
  }
  function getDayIndex(year, month, day) {
    const utcDate = Date.UTC(year, month - 1, day);
    return diffInDays(/* @__PURE__ */ new Date(0), new Date(utcDate));
  }
  function diffInDays(d1, d2) {
    return Math.round((d2.getTime() - d1.getTime()) / MS_PER_DAY);
  }
  function diffInWeeks(d1, d2) {
    return Math.ceil(diffInDays(startOfWeek(d1), startOfWeek(d2)) / 7);
  }
  function diffInYears(d1, d2) {
    return d2.getUTCFullYear() - d1.getUTCFullYear();
  }
  function diffInMonths(d1, d2) {
    return diffInYears(d1, d2) * 12 + (d2.getMonth() - d1.getMonth());
  }
  function getDateFromParts(parts, timezone = "") {
    const d = /* @__PURE__ */ new Date();
    const {
      year = d.getFullYear(),
      month = d.getMonth() + 1,
      day = d.getDate(),
      hours: hrs = 0,
      minutes: min2 = 0,
      seconds: sec = 0,
      milliseconds: ms = 0
    } = parts;
    if (timezone) {
      const dateString = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}T${pad(
        hrs,
        2
      )}:${pad(min2, 2)}:${pad(sec, 2)}.${pad(ms, 3)}`;
      return toFnsDate(dateString, { timeZone: timezone });
    }
    return new Date(year, month - 1, day, hrs, min2, sec, ms);
  }
  function getDateParts(date, locale) {
    let tzDate = new Date(date.getTime());
    if (locale.timezone) {
      tzDate = new Date(
        date.toLocaleString("en-US", { timeZone: locale.timezone })
      );
      tzDate.setMilliseconds(date.getMilliseconds());
    }
    const milliseconds = tzDate.getMilliseconds();
    const seconds = tzDate.getSeconds();
    const minutes = tzDate.getMinutes();
    const hours2 = tzDate.getHours();
    const time = milliseconds + seconds * MS_PER_SECOND + minutes * MS_PER_MINUTE + hours2 * MS_PER_HOUR;
    const month = tzDate.getMonth() + 1;
    const year = tzDate.getFullYear();
    const monthParts = locale.getMonthParts(month, year);
    const day = tzDate.getDate();
    const dayFromEnd = monthParts.numDays - day + 1;
    const weekday = tzDate.getDay() + 1;
    const weekdayOrdinal = Math.floor((day - 1) / 7 + 1);
    const weekdayOrdinalFromEnd = Math.floor((monthParts.numDays - day) / 7 + 1);
    const week = Math.ceil(
      (day + Math.abs(monthParts.firstWeekday - monthParts.firstDayOfWeek)) / 7
    );
    const weekFromEnd = monthParts.numWeeks - week + 1;
    const weeknumber = monthParts.weeknumbers[week];
    const dayIndex = getDayIndex(year, month, day);
    const parts = {
      milliseconds,
      seconds,
      minutes,
      hours: hours2,
      time,
      day,
      dayFromEnd,
      weekday,
      weekdayOrdinal,
      weekdayOrdinalFromEnd,
      week,
      weekFromEnd,
      weeknumber,
      month,
      year,
      date: tzDate,
      dateTime: tzDate.getTime(),
      dayIndex,
      timezoneOffset: 0,
      isValid: true
    };
    return parts;
  }
  function getMonthPartsKey(month, year, firstDayOfWeek) {
    return `${year}-${month}-${firstDayOfWeek}`;
  }
  function getMonthParts(month, year, firstDayOfWeek) {
    const inLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const firstWeekday = firstDayOfMonth.getDay() + 1;
    const numDays = month === 2 && inLeapYear ? 29 : daysInMonths[month - 1];
    const weekStartsOn = firstDayOfWeek - 1;
    const numWeeks = getWeeksInMonth(firstDayOfMonth, {
      weekStartsOn
    });
    const weeknumbers = [];
    const isoWeeknumbers = [];
    for (let i = 0; i < numWeeks; i++) {
      const date = addDays(firstDayOfMonth, i * 7);
      weeknumbers.push(getWeek(date, { weekStartsOn }));
      isoWeeknumbers.push(getISOWeek(date));
    }
    return {
      firstDayOfWeek,
      firstDayOfMonth,
      inLeapYear,
      firstWeekday,
      numDays,
      numWeeks,
      month,
      year,
      weeknumbers,
      isoWeeknumbers
    };
  }
  function getWeekdayDates() {
    const dates = [];
    const year = 2020;
    const month = 1;
    const day = 5;
    for (let i = 0; i < daysInWeek; i++) {
      dates.push(
        getDateFromParts({
          year,
          month,
          day: day + i,
          hours: 12
        })
      );
    }
    return dates;
  }
  function getDayNames(length, localeId = void 0) {
    const dtf = new Intl.DateTimeFormat(localeId, {
      weekday: length
    });
    return getWeekdayDates().map((d) => dtf.format(d));
  }
  function getHourDates() {
    const dates = [];
    for (let i = 0; i <= 24; i++) {
      dates.push(new Date(2e3, 0, 1, i));
    }
    return dates;
  }
  function getRelativeTimeNames(localeId = void 0) {
    const units = [
      "second",
      "minute",
      "hour",
      "day",
      "week",
      "month",
      "quarter",
      "year"
    ];
    const rtf = new Intl.RelativeTimeFormat(localeId);
    return units.reduce((names, unit) => {
      const parts = rtf.formatToParts(100, unit);
      names[unit] = parts[1].unit;
      return names;
    }, {});
  }
  function getMonthDates() {
    const dates = [];
    for (let i = 0; i < 12; i++) {
      dates.push(new Date(2e3, i, 15));
    }
    return dates;
  }
  function getMonthNames(length, localeId = void 0) {
    const dtf = new Intl.DateTimeFormat(localeId, {
      month: length,
      timeZone: "UTC"
    });
    return getMonthDates().map((d) => dtf.format(d));
  }
  function datePartIsValid(part, rule, parts) {
    if (isNumber_1(rule))
      return rule === part;
    if (isArray(rule))
      return rule.includes(part);
    if (isFunction_1(rule))
      return rule(part, parts);
    if (rule.min != null && rule.min > part)
      return false;
    if (rule.max != null && rule.max < part)
      return false;
    if (rule.interval != null && part % rule.interval !== 0)
      return false;
    return true;
  }
  function getDatePartOptions(parts, range, rule) {
    const options = [];
    const [min2, max2, padding] = range;
    for (let i = min2; i <= max2; i++) {
      if (rule == null || datePartIsValid(i, rule, parts)) {
        options.push({
          value: i,
          label: pad(i, padding)
        });
      }
    }
    return options;
  }
  function getDatePartsOptions(parts, rules) {
    return {
      milliseconds: getDatePartOptions(
        parts,
        DATE_PART_RANGES.milliseconds,
        rules.milliseconds
      ),
      seconds: getDatePartOptions(parts, DATE_PART_RANGES.seconds, rules.seconds),
      minutes: getDatePartOptions(parts, DATE_PART_RANGES.minutes, rules.minutes),
      hours: getDatePartOptions(parts, DATE_PART_RANGES.hours, rules.hours)
    };
  }
  function getNearestDatePart(parts, range, value, rule) {
    const options = getDatePartOptions(parts, range, rule);
    const result = options.reduce((prev, opt) => {
      if (opt.disabled)
        return prev;
      if (isNaN(prev))
        return opt.value;
      const diffPrev = Math.abs(prev - value);
      const diffCurr = Math.abs(opt.value - value);
      return diffCurr < diffPrev ? opt.value : prev;
    }, NaN);
    return isNaN(result) ? value : result;
  }
  function applyRulesForDateParts(dateParts, rules) {
    const result = { ...dateParts };
    Object.entries(rules).forEach(([key, rule]) => {
      const range = DATE_PART_RANGES[key];
      const value = dateParts[key];
      result[key] = getNearestDatePart(
        dateParts,
        range,
        value,
        rule
      );
    });
    return result;
  }
  function parseDate(dateString, mask, locale) {
    const masks2 = normalizeMasks(mask, locale);
    return masks2.map((m) => {
      if (typeof m !== "string") {
        throw new Error("Invalid mask");
      }
      let str = dateString;
      if (str.length > 1e3) {
        return false;
      }
      let isValid = true;
      const dp = {};
      m.replace(token, ($0) => {
        if (parseFlags[$0]) {
          const info = parseFlags[$0];
          const index2 = str.search(info[0]);
          if (!~index2) {
            isValid = false;
          } else {
            str.replace(info[0], (result) => {
              info[1](dp, result, locale);
              str = str.substr(index2 + result.length);
              return result;
            });
          }
        }
        return parseFlags[$0] ? "" : $0.slice(1, $0.length - 1);
      });
      if (!isValid) {
        return false;
      }
      const today = /* @__PURE__ */ new Date();
      if (dp.hours != null) {
        if (dp.isPm === true && +dp.hours !== 12) {
          dp.hours = +dp.hours + 12;
        } else if (dp.isPm === false && +dp.hours === 12) {
          dp.hours = 0;
        }
      }
      let date;
      if (dp.timezoneOffset != null) {
        dp.minutes = +(dp.minutes || 0) - +dp.timezoneOffset;
        date = new Date(
          Date.UTC(
            dp.year || today.getFullYear(),
            dp.month || 0,
            dp.day || 1,
            dp.hours || 0,
            dp.minutes || 0,
            dp.seconds || 0,
            dp.milliseconds || 0
          )
        );
      } else {
        date = locale.getDateFromParts({
          year: dp.year || today.getFullYear(),
          month: (dp.month || 0) + 1,
          day: dp.day || 1,
          hours: dp.hours || 0,
          minutes: dp.minutes || 0,
          seconds: dp.seconds || 0,
          milliseconds: dp.milliseconds || 0
        });
      }
      return date;
    }).find((d) => d) || new Date(dateString);
  }
  function formatDate(date, masks2, locale) {
    if (date == null)
      return "";
    let mask = normalizeMasks(masks2, locale)[0];
    if (/Z$/.test(mask))
      locale.timezone = "utc";
    const literals = [];
    mask = mask.replace(literal, ($0, $1) => {
      literals.push($1);
      return "??";
    });
    const dateParts = locale.getDateParts(date);
    mask = mask.replace(
      token,
      ($0) => $0 in formatFlags ? formatFlags[$0](dateParts, locale) : $0.slice(1, $0.length - 1)
    );
    return mask.replace(/\?\?/g, () => literals.shift());
  }
  const viewAddressKeys = {
    daily: ["year", "month", "day"],
    weekly: ["year", "month", "week"],
    monthly: ["year", "month"]
  };
  function getDays({
    monthComps,
    prevMonthComps,
    nextMonthComps
  }, locale) {
    const days = [];
    const {
      firstDayOfWeek,
      firstWeekday,
      isoWeeknumbers,
      weeknumbers,
      numDays,
      numWeeks
    } = monthComps;
    const prevMonthDaysToShow = firstWeekday + (firstWeekday < firstDayOfWeek ? daysInWeek : 0) - firstDayOfWeek;
    let prevMonth = true;
    let thisMonth = false;
    let nextMonth = false;
    let position = 0;
    const formatter = new Intl.DateTimeFormat(locale.id, {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    let day = prevMonthComps.numDays - prevMonthDaysToShow + 1;
    let dayFromEnd = prevMonthComps.numDays - day + 1;
    let weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
    let weekdayOrdinalFromEnd = 1;
    let week = prevMonthComps.numWeeks;
    let weekFromEnd = 1;
    let month = prevMonthComps.month;
    let year = prevMonthComps.year;
    const today = /* @__PURE__ */ new Date();
    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();
    for (let w = 1; w <= weeksInMonth; w++) {
      for (let i = 1, weekday = firstDayOfWeek; i <= daysInWeek; i++, weekday += weekday === daysInWeek ? 1 - daysInWeek : 1) {
        if (prevMonth && weekday === firstWeekday) {
          day = 1;
          dayFromEnd = monthComps.numDays;
          weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
          weekdayOrdinalFromEnd = Math.floor((numDays - day) / daysInWeek + 1);
          week = 1;
          weekFromEnd = numWeeks;
          month = monthComps.month;
          year = monthComps.year;
          prevMonth = false;
          thisMonth = true;
        }
        const startDate = locale.getDateFromParams(year, month, day, 0, 0, 0, 0);
        const noonDate = locale.getDateFromParams(year, month, day, 12, 0, 0, 0);
        const endDate = locale.getDateFromParams(
          year,
          month,
          day,
          23,
          59,
          59,
          999
        );
        const date = startDate;
        const id = `${pad(year, 4)}-${pad(month, 2)}-${pad(day, 2)}`;
        const weekdayPosition = i;
        const weekdayPositionFromEnd = daysInWeek - i;
        const weeknumber = weeknumbers[w - 1];
        const isoWeeknumber = isoWeeknumbers[w - 1];
        const isToday = day === todayDay && month === todayMonth && year === todayYear;
        const isFirstDay = thisMonth && day === 1;
        const isLastDay = thisMonth && day === numDays;
        const onTop = w === 1;
        const onBottom = w === numWeeks;
        const onLeft = i === 1;
        const onRight = i === daysInWeek;
        const dayIndex = getDayIndex(year, month, day);
        days.push({
          locale,
          id,
          position: ++position,
          label: day.toString(),
          ariaLabel: formatter.format(new Date(year, month - 1, day)),
          day,
          dayFromEnd,
          weekday,
          weekdayPosition,
          weekdayPositionFromEnd,
          weekdayOrdinal,
          weekdayOrdinalFromEnd,
          week,
          weekFromEnd,
          weekPosition: w,
          weeknumber,
          isoWeeknumber,
          month,
          year,
          date,
          startDate,
          endDate,
          noonDate,
          dayIndex,
          isToday,
          isFirstDay,
          isLastDay,
          isDisabled: !thisMonth,
          isFocusable: !thisMonth,
          isFocused: false,
          inMonth: thisMonth,
          inPrevMonth: prevMonth,
          inNextMonth: nextMonth,
          onTop,
          onBottom,
          onLeft,
          onRight,
          classes: [
            `id-${id}`,
            `day-${day}`,
            `day-from-end-${dayFromEnd}`,
            `weekday-${weekday}`,
            `weekday-position-${weekdayPosition}`,
            `weekday-ordinal-${weekdayOrdinal}`,
            `weekday-ordinal-from-end-${weekdayOrdinalFromEnd}`,
            `week-${week}`,
            `week-from-end-${weekFromEnd}`,
            {
              "is-today": isToday,
              "is-first-day": isFirstDay,
              "is-last-day": isLastDay,
              "in-month": thisMonth,
              "in-prev-month": prevMonth,
              "in-next-month": nextMonth,
              "on-top": onTop,
              "on-bottom": onBottom,
              "on-left": onLeft,
              "on-right": onRight
            }
          ]
        });
        if (thisMonth && isLastDay) {
          thisMonth = false;
          nextMonth = true;
          day = 1;
          dayFromEnd = numDays;
          weekdayOrdinal = 1;
          weekdayOrdinalFromEnd = Math.floor((numDays - day) / daysInWeek + 1);
          week = 1;
          weekFromEnd = nextMonthComps.numWeeks;
          month = nextMonthComps.month;
          year = nextMonthComps.year;
        } else {
          day++;
          dayFromEnd--;
          weekdayOrdinal = Math.floor((day - 1) / daysInWeek + 1);
          weekdayOrdinalFromEnd = Math.floor((numDays - day) / daysInWeek + 1);
        }
      }
      week++;
      weekFromEnd--;
    }
    return days;
  }
  function getWeeks(days, showWeeknumbers, showIsoWeeknumbers, locale) {
    const result = days.reduce((result2, day, i) => {
      const weekIndex = Math.floor(i / 7);
      let week = result2[weekIndex];
      if (!week) {
        week = {
          id: `week-${weekIndex + 1}`,
          title: "",
          week: day.week,
          weekPosition: day.weekPosition,
          weeknumber: day.weeknumber,
          isoWeeknumber: day.isoWeeknumber,
          weeknumberDisplay: showWeeknumbers ? day.weeknumber : showIsoWeeknumbers ? day.isoWeeknumber : void 0,
          days: []
        };
        result2[weekIndex] = week;
      }
      week.days.push(day);
      return result2;
    }, Array(days.length / daysInWeek));
    result.forEach((week) => {
      const fromDay = week.days[0];
      const toDay = week.days[week.days.length - 1];
      if (fromDay.month === toDay.month) {
        week.title = `${locale.formatDate(fromDay.date, "MMMM YYYY")}`;
      } else if (fromDay.year === toDay.year) {
        week.title = `${locale.formatDate(
          fromDay.date,
          "MMM"
        )} - ${locale.formatDate(toDay.date, "MMM YYYY")}`;
      } else {
        week.title = `${locale.formatDate(
          fromDay.date,
          "MMM YYYY"
        )} - ${locale.formatDate(toDay.date, "MMM YYYY")}`;
      }
    });
    return result;
  }
  function getWeekdays(week, locale) {
    return week.days.map((day) => ({
      label: locale.formatDate(day.date, locale.masks.weekdays),
      weekday: day.weekday
    }));
  }
  function getPageAddressForDate(date, view, locale) {
    return pick(
      locale.getDateParts(locale.toDate(date)),
      viewAddressKeys[view]
    );
  }
  function addPages({ day, week, month, year }, count, view, locale) {
    if (view === "daily" && day) {
      const date = new Date(year, month - 1, day);
      const newDate = addDays(date, count);
      return {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear()
      };
    } else if (view === "weekly" && week) {
      const comps = locale.getMonthParts(month, year);
      const date = comps.firstDayOfMonth;
      const newDate = addDays(date, (week - 1 + count) * 7);
      const parts = locale.getDateParts(newDate);
      return {
        week: parts.week,
        month: parts.month,
        year: parts.year
      };
    } else {
      const date = new Date(year, month - 1, 1);
      const newDate = addMonths(date, count);
      return {
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear()
      };
    }
  }
  function pageIsValid(page) {
    return page != null && page.month != null && page.year != null;
  }
  function pageIsBeforePage(page, comparePage) {
    if (!pageIsValid(page) || !pageIsValid(comparePage))
      return false;
    page = page;
    comparePage = comparePage;
    if (page.year !== comparePage.year)
      return page.year < comparePage.year;
    if (page.month && comparePage.month && page.month !== comparePage.month)
      return page.month < comparePage.month;
    if (page.week && comparePage.week && page.week !== comparePage.week) {
      return page.week < comparePage.week;
    }
    if (page.day && comparePage.day && page.day !== comparePage.day) {
      return page.day < comparePage.day;
    }
    return false;
  }
  function pageIsAfterPage(page, comparePage) {
    if (!pageIsValid(page) || !pageIsValid(comparePage))
      return false;
    page = page;
    comparePage = comparePage;
    if (page.year !== comparePage.year) {
      return page.year > comparePage.year;
    }
    if (page.month && comparePage.month && page.month !== comparePage.month) {
      return page.month > comparePage.month;
    }
    if (page.week && comparePage.week && page.week !== comparePage.week) {
      return page.week > comparePage.week;
    }
    if (page.day && comparePage.day && page.day !== comparePage.day) {
      return page.day > comparePage.day;
    }
    return false;
  }
  function pageIsBetweenPages(page, fromPage, toPage) {
    return (page || false) && !pageIsBeforePage(page, fromPage) && !pageIsAfterPage(page, toPage);
  }
  function pageIsEqualToPage(aPage, bPage) {
    if (!aPage && bPage)
      return false;
    if (aPage && !bPage)
      return false;
    if (!aPage && !bPage)
      return true;
    aPage = aPage;
    bPage = bPage;
    return aPage.year === bPage.year && aPage.month === bPage.month && aPage.week === bPage.week && aPage.day === bPage.day;
  }
  function pageRangeToArray(from, to, view, locale) {
    if (!pageIsValid(from) || !pageIsValid(to))
      return [];
    const result = [];
    while (!pageIsAfterPage(from, to)) {
      result.push(from);
      from = addPages(from, 1, view, locale);
    }
    return result;
  }
  function getPageKey(config2) {
    const { day, week, month, year } = config2;
    let id = `${year}-${pad(month, 2)}`;
    if (week)
      id = `${id}-w${week}`;
    if (day)
      id = `${id}-${pad(day, 2)}`;
    return id;
  }
  function getCachedPage(config2, locale) {
    const { month, year, showWeeknumbers, showIsoWeeknumbers } = config2;
    const date = new Date(year, month - 1, 15);
    const monthComps = locale.getMonthParts(month, year);
    const prevMonthComps = locale.getPrevMonthParts(month, year);
    const nextMonthComps = locale.getNextMonthParts(month, year);
    const days = getDays({ monthComps, prevMonthComps, nextMonthComps }, locale);
    const weeks = getWeeks(days, showWeeknumbers, showIsoWeeknumbers, locale);
    const weekdays2 = getWeekdays(weeks[0], locale);
    return {
      id: getPageKey(config2),
      month,
      year,
      monthTitle: locale.formatDate(date, locale.masks.title),
      shortMonthLabel: locale.formatDate(date, "MMM"),
      monthLabel: locale.formatDate(date, "MMMM"),
      shortYearLabel: year.toString().substring(2),
      yearLabel: year.toString(),
      monthComps,
      prevMonthComps,
      nextMonthComps,
      days,
      weeks,
      weekdays: weekdays2
    };
  }
  function getPage(config2, cachedPage) {
    const { day, week, view, trimWeeks } = config2;
    const page = {
      ...cachedPage,
      ...config2,
      title: "",
      viewDays: [],
      viewWeeks: []
    };
    switch (view) {
      case "daily": {
        let dayObj = page.days.find((d) => d.inMonth);
        if (day) {
          dayObj = page.days.find((d) => d.day === day && d.inMonth) || dayObj;
        } else if (week) {
          dayObj = page.days.find((d) => d.week === week && d.inMonth);
        }
        const weekObj = page.weeks[dayObj.week - 1];
        page.viewWeeks = [weekObj];
        page.viewDays = [dayObj];
        page.week = dayObj.week;
        page.weekTitle = weekObj.title;
        page.day = dayObj.day;
        page.dayTitle = dayObj.ariaLabel;
        page.title = page.dayTitle;
        break;
      }
      case "weekly": {
        page.week = week || 1;
        const weekObj = page.weeks[page.week - 1];
        page.viewWeeks = [weekObj];
        page.viewDays = weekObj.days;
        page.weekTitle = weekObj.title;
        page.title = page.weekTitle;
        break;
      }
      default: {
        page.title = page.monthTitle;
        page.viewWeeks = page.weeks.slice(
          0,
          trimWeeks ? page.monthComps.numWeeks : void 0
        );
        page.viewDays = page.days;
        break;
      }
    }
    return page;
  }
  class Cache {
    constructor(size, createKey, createItem) {
      __publicField(this, "keys", []);
      __publicField(this, "store", {});
      this.size = size;
      this.createKey = createKey;
      this.createItem = createItem;
    }
    get(...args) {
      const key = this.createKey(...args);
      return this.store[key];
    }
    getOrSet(...args) {
      const key = this.createKey(...args);
      if (this.store[key])
        return this.store[key];
      const item = this.createItem(...args);
      if (this.keys.length >= this.size) {
        const removeKey = this.keys.shift();
        if (removeKey != null) {
          delete this.store[removeKey];
        }
      }
      this.keys.push(key);
      this.store[key] = item;
      return item;
    }
  }
  class DateRange {
    constructor(config2, locale = new Locale()) {
      __publicField(this, "order");
      __publicField(this, "locale");
      __publicField(this, "start", null);
      __publicField(this, "end", null);
      __publicField(this, "repeat", null);
      var _a;
      this.locale = locale;
      const { start: start2, end: end2, span, order: order2, repeat: repeat2 } = config2;
      if (isDate(start2)) {
        this.start = locale.getDateParts(start2);
      }
      if (isDate(end2)) {
        this.end = locale.getDateParts(end2);
      } else if (this.start != null && span) {
        this.end = locale.getDateParts(addDays(this.start.date, span - 1));
      }
      this.order = order2 ?? 0;
      if (repeat2) {
        this.repeat = new DateRepeat(
          {
            from: (_a = this.start) == null ? void 0 : _a.date,
            ...repeat2
          },
          {
            locale: this.locale
          }
        );
      }
    }
    static fromMany(ranges, locale) {
      return (isArray(ranges) ? ranges : [ranges]).filter((d) => d).map((d) => DateRange.from(d, locale));
    }
    static from(source, locale) {
      if (source instanceof DateRange)
        return source;
      const config2 = {
        start: null,
        end: null
      };
      if (source != null) {
        if (isArray(source)) {
          config2.start = source[0] ?? null;
          config2.end = source[1] ?? null;
        } else if (isObject(source)) {
          Object.assign(config2, source);
        } else {
          config2.start = source;
          config2.end = source;
        }
      }
      if (config2.start != null)
        config2.start = new Date(config2.start);
      if (config2.end != null)
        config2.end = new Date(config2.end);
      return new DateRange(config2, locale);
    }
    get opts() {
      const { order: order2, locale } = this;
      return { order: order2, locale };
    }
    get hasRepeat() {
      return !!this.repeat;
    }
    get isSingleDay() {
      const { start: start2, end: end2 } = this;
      return start2 && end2 && start2.year === end2.year && start2.month === end2.month && start2.day === end2.day;
    }
    get isMultiDay() {
      return !this.isSingleDay;
    }
    get daySpan() {
      if (this.start == null || this.end == null) {
        if (this.hasRepeat)
          return 1;
        return Infinity;
      }
      return this.end.dayIndex - this.start.dayIndex;
    }
    startsOnDay(dayParts) {
      var _a, _b;
      return ((_a = this.start) == null ? void 0 : _a.dayIndex) === dayParts.dayIndex || !!((_b = this.repeat) == null ? void 0 : _b.passes(dayParts));
    }
    intersectsDay(dayIndex) {
      return this.intersectsDayRange(dayIndex, dayIndex);
    }
    intersectsRange(range) {
      var _a, _b;
      return this.intersectsDayRange(
        ((_a = range.start) == null ? void 0 : _a.dayIndex) ?? -Infinity,
        ((_b = range.end) == null ? void 0 : _b.dayIndex) ?? Infinity
      );
    }
    intersectsDayRange(startDayIndex, endDayIndex) {
      if (this.start && this.start.dayIndex > endDayIndex)
        return false;
      if (this.end && this.end.dayIndex < startDayIndex)
        return false;
      return true;
    }
  }
  class DateRangeContext {
    constructor() {
      __publicField(this, "records", {});
    }
    render(data2, range, days) {
      var _a, _b, _c, _d;
      let result = null;
      const startDayIndex = days[0].dayIndex;
      const endDayIndex = days[days.length - 1].dayIndex;
      if (range.hasRepeat) {
        days.forEach((day) => {
          var _a2, _b2;
          if (range.startsOnDay(day)) {
            const span = range.daySpan < Infinity ? range.daySpan : 1;
            result = {
              startDay: day.dayIndex,
              startTime: ((_a2 = range.start) == null ? void 0 : _a2.time) ?? 0,
              endDay: day.dayIndex + span - 1,
              endTime: ((_b2 = range.end) == null ? void 0 : _b2.time) ?? MS_PER_DAY
            };
            this.getRangeRecords(data2).push(result);
          }
        });
      } else if (range.intersectsDayRange(startDayIndex, endDayIndex)) {
        result = {
          startDay: ((_a = range.start) == null ? void 0 : _a.dayIndex) ?? -Infinity,
          startTime: ((_b = range.start) == null ? void 0 : _b.time) ?? -Infinity,
          endDay: ((_c = range.end) == null ? void 0 : _c.dayIndex) ?? Infinity,
          endTime: ((_d = range.end) == null ? void 0 : _d.time) ?? Infinity
        };
        this.getRangeRecords(data2).push(result);
      }
      return result;
    }
    getRangeRecords(data2) {
      let record = this.records[data2.key];
      if (!record) {
        record = {
          ranges: [],
          data: data2
        };
        this.records[data2.key] = record;
      }
      return record.ranges;
    }
    getCell(key, day) {
      const cells = this.getCells(day);
      const result = cells.find((cell) => cell.data.key === key);
      return result;
    }
    cellExists(key, dayIndex) {
      const records = this.records[key];
      if (records == null)
        return false;
      return records.ranges.some(
        (r) => r.startDay <= dayIndex && r.endDay >= dayIndex
      );
    }
    getCells(day) {
      const records = Object.values(this.records);
      const result = [];
      const { dayIndex } = day;
      records.forEach(({ data: data2, ranges }) => {
        ranges.filter((r) => r.startDay <= dayIndex && r.endDay >= dayIndex).forEach((range) => {
          const onStart = dayIndex === range.startDay;
          const onEnd = dayIndex === range.endDay;
          const startTime = onStart ? range.startTime : 0;
          const startDate = new Date(day.startDate.getTime() + startTime);
          const endTime = onEnd ? range.endTime : MS_PER_DAY;
          const endDate = new Date(day.endDate.getTime() + endTime);
          const allDay = startTime === 0 && endTime === MS_PER_DAY;
          const order2 = data2.order || 0;
          result.push({
            ...range,
            data: data2,
            onStart,
            onEnd,
            startTime,
            startDate,
            endTime,
            endDate,
            allDay,
            order: order2
          });
        });
      });
      result.sort((a, b) => a.order - b.order);
      return result;
    }
  }
  const DEFAULT_MONTH_CACHE_SIZE = 12;
  const DEFAULT_PAGE_CACHE_SIZE = 5;
  function resolveConfig(config2, locales2) {
    const detLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    let id;
    if (isString_1(config2)) {
      id = config2;
    } else if (has(config2, "id")) {
      id = config2.id;
    }
    id = (id || detLocale).toLowerCase();
    const localeKeys = Object.keys(locales2);
    const validKey = (k) => localeKeys.find((lk) => lk.toLowerCase() === k);
    id = validKey(id) || validKey(id.substring(0, 2)) || detLocale;
    const defLocale = {
      ...locales2["en-IE"],
      ...locales2[id],
      id,
      monthCacheSize: DEFAULT_MONTH_CACHE_SIZE,
      pageCacheSize: DEFAULT_PAGE_CACHE_SIZE
    };
    const result = isObject(config2) ? defaultsDeep_1(config2, defLocale) : defLocale;
    return result;
  }
  class Locale {
    constructor(config2 = void 0, timezone) {
      __publicField(this, "id");
      __publicField(this, "daysInWeek");
      __publicField(this, "firstDayOfWeek");
      __publicField(this, "masks");
      __publicField(this, "timezone");
      __publicField(this, "hourLabels");
      __publicField(this, "dayNames");
      __publicField(this, "dayNamesShort");
      __publicField(this, "dayNamesShorter");
      __publicField(this, "dayNamesNarrow");
      __publicField(this, "monthNames");
      __publicField(this, "monthNamesShort");
      __publicField(this, "relativeTimeNames");
      __publicField(this, "amPm", ["am", "pm"]);
      __publicField(this, "monthCache");
      __publicField(this, "pageCache");
      const { id, firstDayOfWeek, masks: masks2, monthCacheSize, pageCacheSize } = resolveConfig(config2, defaultLocales.value);
      this.monthCache = new Cache(
        monthCacheSize,
        getMonthPartsKey,
        getMonthParts
      );
      this.pageCache = new Cache(pageCacheSize, getPageKey, getCachedPage);
      this.id = id;
      this.daysInWeek = daysInWeek;
      this.firstDayOfWeek = clamp(firstDayOfWeek, 1, daysInWeek);
      this.masks = masks2;
      this.timezone = timezone || void 0;
      this.hourLabels = this.getHourLabels();
      this.dayNames = getDayNames("long", this.id);
      this.dayNamesShort = getDayNames("short", this.id);
      this.dayNamesShorter = this.dayNamesShort.map((s) => s.substring(0, 2));
      this.dayNamesNarrow = getDayNames("narrow", this.id);
      this.monthNames = getMonthNames("long", this.id);
      this.monthNamesShort = getMonthNames("short", this.id);
      this.relativeTimeNames = getRelativeTimeNames(this.id);
    }
    formatDate(date, masks2) {
      return formatDate(date, masks2, this);
    }
    parseDate(dateString, mask) {
      return parseDate(dateString, mask, this);
    }
    toDate(d, opts = {}) {
      const nullDate = /* @__PURE__ */ new Date(NaN);
      let result = nullDate;
      const { fillDate, mask, patch, rules } = opts;
      if (isNumber_1(d)) {
        opts.type = "number";
        result = /* @__PURE__ */ new Date(+d);
      } else if (isString_1(d)) {
        opts.type = "string";
        result = d ? parseDate(d, mask || "iso", this) : nullDate;
      } else if (isDate(d)) {
        opts.type = "date";
        result = new Date(d.getTime());
      } else if (isDateParts(d)) {
        opts.type = "object";
        result = this.getDateFromParts(d);
      }
      if (result && (patch || rules)) {
        let parts = this.getDateParts(result);
        if (patch && fillDate != null) {
          const fillParts = this.getDateParts(this.toDate(fillDate));
          parts = this.getDateParts(
            this.toDate({ ...fillParts, ...pick(parts, DatePatchKeys[patch]) })
          );
        }
        if (rules) {
          parts = applyRulesForDateParts(parts, rules);
        }
        result = this.getDateFromParts(parts);
      }
      return result || nullDate;
    }
    toDateOrNull(d, opts = {}) {
      const dte = this.toDate(d, opts);
      return isNaN(dte.getTime()) ? null : dte;
    }
    fromDate(date, { type, mask } = {}) {
      switch (type) {
        case "number":
          return date ? date.getTime() : NaN;
        case "string":
          return date ? this.formatDate(date, mask || "iso") : "";
        case "object":
          return date ? this.getDateParts(date) : null;
        default:
          return date ? new Date(date) : null;
      }
    }
    range(source) {
      return DateRange.from(source, this);
    }
    ranges(ranges) {
      return DateRange.fromMany(ranges, this);
    }
    getDateParts(date) {
      return getDateParts(date, this);
    }
    getDateFromParts(parts) {
      return getDateFromParts(parts, this.timezone);
    }
    getDateFromParams(year, month, day, hours2, minutes, seconds, milliseconds) {
      return this.getDateFromParts({
        year,
        month,
        day,
        hours: hours2,
        minutes,
        seconds,
        milliseconds
      });
    }
    getPage(config2) {
      const cachedPage = this.pageCache.getOrSet(config2, this);
      return getPage(config2, cachedPage);
    }
    getMonthParts(month, year) {
      const { firstDayOfWeek } = this;
      return this.monthCache.getOrSet(month, year, firstDayOfWeek);
    }
    getThisMonthParts() {
      const date = /* @__PURE__ */ new Date();
      return this.getMonthParts(
        date.getMonth() + 1,
        date.getFullYear()
      );
    }
    getPrevMonthParts(month, year) {
      if (month === 1)
        return this.getMonthParts(12, year - 1);
      return this.getMonthParts(month - 1, year);
    }
    getNextMonthParts(month, year) {
      if (month === 12)
        return this.getMonthParts(1, year + 1);
      return this.getMonthParts(month + 1, year);
    }
    getHourLabels() {
      return getHourDates().map((d) => {
        return this.formatDate(d, this.masks.hours);
      });
    }
    getDayId(date) {
      return this.formatDate(date, "YYYY-MM-DD");
    }
  }
  class Attribute {
    constructor(config2, theme, locale) {
      __publicField(this, "key", "");
      __publicField(this, "hashcode", "");
      __publicField(this, "highlight", null);
      __publicField(this, "content", null);
      __publicField(this, "dot", null);
      __publicField(this, "bar", null);
      __publicField(this, "event", null);
      __publicField(this, "popover", null);
      __publicField(this, "customData", null);
      __publicField(this, "ranges");
      __publicField(this, "hasRanges", false);
      __publicField(this, "order", 0);
      __publicField(this, "pinPage", false);
      __publicField(this, "maxRepeatSpan", 0);
      __publicField(this, "locale");
      const { dates } = Object.assign(
        this,
        { hashcode: "", order: 0, pinPage: false },
        config2
      );
      if (!this.key)
        this.key = createGuid();
      this.locale = locale;
      theme.normalizeGlyphs(this);
      this.ranges = locale.ranges(dates ?? []);
      this.hasRanges = !!arrayHasItems(this.ranges);
      this.maxRepeatSpan = this.ranges.filter((r) => r.hasRepeat).map((r) => r.daySpan).reduce((res, curr) => Math.max(res, curr), 0);
    }
    intersectsRange({ start: start2, end: end2 }) {
      if (start2 == null || end2 == null)
        return false;
      const simpleRanges = this.ranges.filter((r) => !r.hasRepeat);
      for (const range of simpleRanges) {
        if (range.intersectsDayRange(start2.dayIndex, end2.dayIndex)) {
          return true;
        }
      }
      const repeatRanges = this.ranges.filter((r) => r.hasRepeat);
      if (!repeatRanges.length)
        return false;
      let day = start2;
      if (this.maxRepeatSpan > 1) {
        day = this.locale.getDateParts(addDays(day.date, -this.maxRepeatSpan));
      }
      while (day.dayIndex <= end2.dayIndex) {
        for (const range of repeatRanges) {
          if (range.startsOnDay(day))
            return true;
        }
        day = this.locale.getDateParts(addDays(day.date, 1));
      }
      return false;
    }
  }
  const contextKey$3 = "__vc_base_context__";
  const propsDef$3 = {
    color: {
      type: String,
      default: () => getDefault("color")
    },
    isDark: {
      type: [Boolean, String, Object],
      default: () => getDefault("isDark")
    },
    firstDayOfWeek: Number,
    masks: Object,
    locale: [String, Object],
    timezone: String,
    minDate: null,
    maxDate: null,
    disabledDates: null
  };
  function createBase(props) {
    const color = vue.computed(() => props.color ?? "");
    const isDark = vue.computed(() => props.isDark ?? false);
    const { displayMode } = useDarkMode(isDark);
    const theme = vue.computed(() => new Theme(color.value));
    const locale = vue.computed(() => {
      if (props.locale instanceof Locale)
        return props.locale;
      const config2 = isObject(props.locale) ? props.locale : {
        id: props.locale,
        firstDayOfWeek: props.firstDayOfWeek,
        masks: props.masks
      };
      return new Locale(config2, props.timezone);
    });
    const masks2 = vue.computed(() => locale.value.masks);
    const disabledDates = vue.computed(() => {
      const dates = props.disabledDates ?? [];
      if (props.minDate != null) {
        dates.push({
          start: null,
          end: addDays(locale.value.toDate(props.minDate), -1)
        });
      }
      if (props.maxDate != null) {
        dates.push({
          start: addDays(locale.value.toDate(props.maxDate), 1),
          end: null
        });
      }
      return locale.value.ranges(dates);
    });
    const disabledAttribute = vue.computed(() => {
      return new Attribute(
        {
          key: "disabled",
          dates: disabledDates.value,
          order: 100
        },
        theme.value,
        locale.value
      );
    });
    const context = {
      color,
      isDark,
      displayMode,
      theme,
      locale,
      masks: masks2,
      disabledDates,
      disabledAttribute
    };
    vue.provide(contextKey$3, context);
    return context;
  }
  function useOrCreateBase(props) {
    return vue.inject(contextKey$3, createBase(props));
  }
  const addHorizontalSwipeHandler = (element, handler, {
    maxSwipeTime: maxSwipeTime2,
    minHorizontalSwipeDistance: minHorizontalSwipeDistance2,
    maxVerticalSwipeDistance: maxVerticalSwipeDistance2
  }) => {
    if (!element || !element.addEventListener || !isFunction_1(handler)) {
      return null;
    }
    let startX = 0;
    let startY = 0;
    let startTime = null;
    let isSwiping = false;
    function touchStart(e) {
      const t = e.changedTouches[0];
      startX = t.screenX;
      startY = t.screenY;
      startTime = (/* @__PURE__ */ new Date()).getTime();
      isSwiping = true;
    }
    function touchEnd(e) {
      if (!isSwiping || !startTime)
        return;
      isSwiping = false;
      const t = e.changedTouches[0];
      const deltaX = t.screenX - startX;
      const deltaY = t.screenY - startY;
      const deltaTime = (/* @__PURE__ */ new Date()).getTime() - startTime;
      if (deltaTime < maxSwipeTime2) {
        if (Math.abs(deltaX) >= minHorizontalSwipeDistance2 && Math.abs(deltaY) <= maxVerticalSwipeDistance2) {
          const arg = { toLeft: false, toRight: false };
          if (deltaX < 0) {
            arg.toLeft = true;
          } else {
            arg.toRight = true;
          }
          handler(arg);
        }
      }
    }
    on(element, "touchstart", touchStart, { passive: true });
    on(element, "touchend", touchEnd, { passive: true });
    return () => {
      off(element, "touchstart", touchStart);
      off(element, "touchend", touchEnd);
    };
  };
  const watchSkippers = {};
  const skipWatcher = (watcher, durationMs = 10) => {
    watchSkippers[watcher] = Date.now() + durationMs;
  };
  const handleWatcher = (watcher, handler) => {
    if (watcher in watchSkippers) {
      const dateTime = watchSkippers[watcher];
      if (Date.now() < dateTime)
        return;
      delete watchSkippers[watcher];
    }
    handler();
  };
  const propsDef$2 = {
    ...propsDef$3,
    view: {
      type: String,
      default: "monthly",
      validator(value) {
        return ["daily", "weekly", "monthly"].includes(value);
      }
    },
    rows: {
      type: Number,
      default: 1
    },
    columns: {
      type: Number,
      default: 1
    },
    step: Number,
    titlePosition: {
      type: String,
      default: () => getDefault("titlePosition")
    },
    navVisibility: {
      type: String,
      default: () => getDefault("navVisibility")
    },
    showWeeknumbers: [Boolean, String],
    showIsoWeeknumbers: [Boolean, String],
    expanded: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    initialPage: Object,
    initialPagePosition: { type: Number, default: 1 },
    minPage: Object,
    maxPage: Object,
    transition: String,
    attributes: Array,
    trimWeeks: Boolean,
    disablePageSwipe: Boolean
  };
  const emitsDef$1 = [
    "dayclick",
    "daymouseenter",
    "daymouseleave",
    "dayfocusin",
    "dayfocusout",
    "daykeydown",
    "weeknumberclick",
    "transition-start",
    "transition-end",
    "did-move",
    "update:view",
    "update:pages"
  ];
  const contextKey$2 = "__vc_calendar_context__";
  function createCalendar(props, { emit, slots }) {
    const containerRef = vue.ref(null);
    const navPopoverRef = vue.ref(null);
    const focusedDay = vue.ref(null);
    const focusableDay = vue.ref((/* @__PURE__ */ new Date()).getDate());
    const inTransition = vue.ref(false);
    const navPopoverId = vue.ref(createGuid());
    const dayPopoverId = vue.ref(createGuid());
    const _view = vue.ref(props.view);
    const _pages = vue.ref([]);
    const transitionName = vue.ref("");
    let transitionPromise = null;
    let removeHandlers2 = null;
    const {
      theme,
      color,
      displayMode,
      locale,
      masks: masks2,
      disabledAttribute,
      disabledDates
    } = useOrCreateBase(props);
    const count = vue.computed(() => props.rows * props.columns);
    const step = vue.computed(() => props.step || count.value);
    const firstPage = vue.computed(() => head_1(_pages.value) ?? null);
    const lastPage = vue.computed(() => last_1(_pages.value) ?? null);
    const minPage = vue.computed(
      () => props.minPage || (props.minDate ? getDateAddress(props.minDate) : null)
    );
    const maxPage = vue.computed(
      () => props.maxPage || (props.maxDate ? getDateAddress(props.maxDate) : null)
    );
    const navVisibility = vue.computed(() => props.navVisibility);
    const showWeeknumbers = vue.computed(() => !!props.showWeeknumbers);
    const showIsoWeeknumbers = vue.computed(() => !!props.showIsoWeeknumbers);
    const isMonthly = vue.computed(() => _view.value === "monthly");
    const isWeekly = vue.computed(() => _view.value === "weekly");
    const isDaily = vue.computed(() => _view.value === "daily");
    const onTransitionBeforeEnter = () => {
      inTransition.value = true;
      emit("transition-start");
    };
    const onTransitionAfterEnter = () => {
      inTransition.value = false;
      emit("transition-end");
      if (transitionPromise) {
        transitionPromise.resolve(true);
        transitionPromise = null;
      }
    };
    const addPages$1 = (address, count2, view = _view.value) => {
      return addPages(address, count2, view, locale.value);
    };
    const getDateAddress = (date) => {
      return getPageAddressForDate(date, _view.value, locale.value);
    };
    const refreshDisabled = (day) => {
      if (!disabledAttribute.value || !attributeContext.value)
        return;
      day.isDisabled = attributeContext.value.cellExists(
        disabledAttribute.value.key,
        day.dayIndex
      );
    };
    const refreshFocusable = (day) => {
      day.isFocusable = day.inMonth && day.day === focusableDay.value;
    };
    const forDays = (pages, fn) => {
      for (const page of pages) {
        for (const day of page.days) {
          if (fn(day) === false)
            return;
        }
      }
    };
    const days = vue.computed(
      () => _pages.value.reduce((result, page) => {
        result.push(...page.viewDays);
        return result;
      }, [])
    );
    const attributes = vue.computed(() => {
      const result = [];
      (props.attributes || []).forEach((attr, i) => {
        if (!attr || !attr.dates)
          return;
        const key = has(attr, "key") ? attr.key : i;
        const order2 = attr.order || 0;
        result.push(
          new Attribute(
            {
              ...attr,
              key,
              order: order2
            },
            theme.value,
            locale.value
          )
        );
      });
      if (disabledAttribute.value) {
        result.push(disabledAttribute.value);
      }
      return result;
    });
    const hasAttributes = vue.computed(() => arrayHasItems(attributes.value));
    const attributeContext = vue.computed(() => {
      const ctx = new DateRangeContext();
      attributes.value.forEach((attr) => {
        attr.ranges.forEach((range) => {
          ctx.render(attr, range, days.value);
        });
      });
      return ctx;
    });
    const dayCells = vue.computed(() => {
      return days.value.reduce((result, day) => {
        result[day.dayIndex] = { day, cells: [] };
        result[day.dayIndex].cells.push(...attributeContext.value.getCells(day));
        return result;
      }, {});
    });
    const getWeeknumberPosition = (column, columnFromEnd) => {
      const showWeeknumbers2 = props.showWeeknumbers || props.showIsoWeeknumbers;
      if (showWeeknumbers2 == null)
        return "";
      if (isBoolean_1(showWeeknumbers2)) {
        return showWeeknumbers2 ? "left" : "";
      }
      if (showWeeknumbers2.startsWith("right")) {
        return columnFromEnd > 1 ? "right" : showWeeknumbers2;
      }
      return column > 1 ? "left" : showWeeknumbers2;
    };
    const getPageForAttributes = () => {
      var _a, _b;
      if (!hasAttributes.value)
        return null;
      const attr = attributes.value.find((attr2) => attr2.pinPage) || attributes.value[0];
      if (!attr || !attr.hasRanges)
        return null;
      const [range] = attr.ranges;
      const date = ((_a = range.start) == null ? void 0 : _a.date) || ((_b = range.end) == null ? void 0 : _b.date);
      return date ? getDateAddress(date) : null;
    };
    const getDefaultInitialPage = () => {
      if (pageIsValid(firstPage.value))
        return firstPage.value;
      const page = getPageForAttributes();
      if (pageIsValid(page))
        return page;
      return getDateAddress(/* @__PURE__ */ new Date());
    };
    const getTargetPageRange = (page, opts = {}) => {
      const { view = _view.value, position = 1, force } = opts;
      const pagesToAdd = position > 0 ? 1 - position : -(count.value + position);
      let fromPage = addPages$1(page, pagesToAdd, view);
      let toPage = addPages$1(fromPage, count.value - 1, view);
      if (!force) {
        if (pageIsBeforePage(fromPage, minPage.value)) {
          fromPage = minPage.value;
        } else if (pageIsAfterPage(toPage, maxPage.value)) {
          fromPage = addPages$1(maxPage.value, 1 - count.value);
        }
        toPage = addPages$1(fromPage, count.value - 1);
      }
      return { fromPage, toPage };
    };
    const getPageTransition = (oldPage, newPage, defaultTransition = "") => {
      if (defaultTransition === "none" || defaultTransition === "fade")
        return defaultTransition;
      if ((oldPage == null ? void 0 : oldPage.view) !== (newPage == null ? void 0 : newPage.view))
        return "fade";
      const moveNext2 = pageIsAfterPage(newPage, oldPage);
      const movePrev2 = pageIsBeforePage(newPage, oldPage);
      if (!moveNext2 && !movePrev2) {
        return "fade";
      }
      if (defaultTransition === "slide-v") {
        return movePrev2 ? "slide-down" : "slide-up";
      }
      return movePrev2 ? "slide-right" : "slide-left";
    };
    const refreshPages = (opts = {}) => {
      return new Promise((resolve, reject) => {
        const { position = 1, force = false, transition } = opts;
        const page = pageIsValid(opts.page) ? opts.page : getDefaultInitialPage();
        const { fromPage } = getTargetPageRange(page, {
          position,
          force
        });
        const pages = [];
        for (let i = 0; i < count.value; i++) {
          const newPage = addPages$1(fromPage, i);
          const position2 = i + 1;
          const row = Math.ceil(position2 / props.columns);
          const rowFromEnd = props.rows - row + 1;
          const column = position2 % props.columns || props.columns;
          const columnFromEnd = props.columns - column + 1;
          const weeknumberPosition = getWeeknumberPosition(column, columnFromEnd);
          pages.push(
            locale.value.getPage({
              ...newPage,
              view: _view.value,
              titlePosition: props.titlePosition,
              trimWeeks: props.trimWeeks,
              position: position2,
              row,
              rowFromEnd,
              column,
              columnFromEnd,
              showWeeknumbers: showWeeknumbers.value,
              showIsoWeeknumbers: showIsoWeeknumbers.value,
              weeknumberPosition
            })
          );
        }
        transitionName.value = getPageTransition(
          _pages.value[0],
          pages[0],
          transition
        );
        _pages.value = pages;
        if (transitionName.value && transitionName.value !== "none") {
          transitionPromise = {
            resolve,
            reject
          };
        } else {
          resolve(true);
        }
      });
    };
    const targetBy = (pages) => {
      const fromPage = firstPage.value ?? getDateAddress(/* @__PURE__ */ new Date());
      return addPages$1(fromPage, pages);
    };
    const canMove = (target, opts = {}) => {
      const page = pageIsValid(target) ? target : getDateAddress(target);
      Object.assign(
        opts,
        getTargetPageRange(page, {
          ...opts,
          force: true
        })
      );
      const pagesInRange = pageRangeToArray(
        opts.fromPage,
        opts.toPage,
        _view.value,
        locale.value
      ).map((p) => pageIsBetweenPages(p, minPage.value, maxPage.value));
      return pagesInRange.every((val) => val);
    };
    const canMoveBy = (pages, opts = {}) => {
      return canMove(targetBy(pages), opts);
    };
    const canMovePrev = vue.computed(() => canMoveBy(-step.value));
    const canMoveNext = vue.computed(() => canMoveBy(step.value));
    const move = async (target, opts = {}) => {
      if (!opts.force && !canMove(target, opts))
        return false;
      if (opts.fromPage && !pageIsEqualToPage(opts.fromPage, firstPage.value)) {
        if (navPopoverRef.value) {
          navPopoverRef.value.hide({ hideDelay: 0 });
        }
        if (opts.view) {
          skipWatcher("view", 10);
          _view.value = opts.view;
        }
        await refreshPages({
          ...opts,
          page: opts.fromPage,
          position: 1,
          force: true
        });
        emit("did-move", _pages.value);
      }
      return true;
    };
    const moveBy = (pages, opts = {}) => {
      return move(targetBy(pages), opts);
    };
    const movePrev = () => {
      return moveBy(-step.value);
    };
    const moveNext = () => {
      return moveBy(step.value);
    };
    const tryFocusDate = (date) => {
      const inMonth = isMonthly.value ? ".in-month" : "";
      const daySelector = `.id-${locale.value.getDayId(date)}${inMonth}`;
      const selector = `${daySelector}.vc-focusable, ${daySelector} .vc-focusable`;
      const el = containerRef.value;
      if (el) {
        const focusableEl = el.querySelector(selector);
        if (focusableEl) {
          focusableEl.focus();
          return true;
        }
      }
      return false;
    };
    const focusDate = async (date, opts = {}) => {
      if (tryFocusDate(date))
        return true;
      await move(date, opts);
      return tryFocusDate(date);
    };
    const onDayClick = (day, event) => {
      focusableDay.value = day.day;
      emit("dayclick", day, event);
    };
    const onDayMouseenter = (day, event) => {
      emit("daymouseenter", day, event);
    };
    const onDayMouseleave = (day, event) => {
      emit("daymouseleave", day, event);
    };
    const onDayFocusin = (day, event) => {
      focusableDay.value = day.day;
      focusedDay.value = day;
      day.isFocused = true;
      emit("dayfocusin", day, event);
    };
    const onDayFocusout = (day, event) => {
      focusedDay.value = null;
      day.isFocused = false;
      emit("dayfocusout", day, event);
    };
    const onDayKeydown = (day, event) => {
      emit("daykeydown", day, event);
      const date = day.noonDate;
      let newDate = null;
      switch (event.key) {
        case "ArrowLeft": {
          newDate = addDays(date, -1);
          break;
        }
        case "ArrowRight": {
          newDate = addDays(date, 1);
          break;
        }
        case "ArrowUp": {
          newDate = addDays(date, -7);
          break;
        }
        case "ArrowDown": {
          newDate = addDays(date, 7);
          break;
        }
        case "Home": {
          newDate = addDays(date, -day.weekdayPosition + 1);
          break;
        }
        case "End": {
          newDate = addDays(date, day.weekdayPositionFromEnd);
          break;
        }
        case "PageUp": {
          if (event.altKey) {
            newDate = addYears(date, -1);
          } else {
            newDate = addMonths(date, -1);
          }
          break;
        }
        case "PageDown": {
          if (event.altKey) {
            newDate = addYears(date, 1);
          } else {
            newDate = addMonths(date, 1);
          }
          break;
        }
      }
      if (newDate) {
        event.preventDefault();
        focusDate(newDate).catch();
      }
    };
    const onKeydown = (event) => {
      const day = focusedDay.value;
      if (day != null) {
        onDayKeydown(day, event);
      }
    };
    const onWeeknumberClick = (week, event) => {
      emit("weeknumberclick", week, event);
    };
    refreshPages({
      page: props.initialPage,
      position: props.initialPagePosition
    });
    vue.onMounted(() => {
      if (!props.disablePageSwipe && containerRef.value) {
        removeHandlers2 = addHorizontalSwipeHandler(
          containerRef.value,
          ({ toLeft = false, toRight = false }) => {
            if (toLeft) {
              moveNext();
            } else if (toRight) {
              movePrev();
            }
          },
          getDefault("touch")
        );
      }
    });
    vue.onUnmounted(() => {
      _pages.value = [];
      if (removeHandlers2)
        removeHandlers2();
    });
    vue.watch(
      () => locale.value,
      () => {
        refreshPages();
      }
    );
    vue.watch(
      () => count.value,
      () => refreshPages()
    );
    vue.watch(
      () => props.view,
      () => _view.value = props.view
    );
    vue.watch(
      () => _view.value,
      () => {
        handleWatcher("view", () => {
          refreshPages();
        });
        emit("update:view", _view.value);
      }
    );
    vue.watch(
      () => focusableDay.value,
      () => {
        forDays(_pages.value, (day) => refreshFocusable(day));
      }
    );
    vue.watchEffect(() => {
      emit("update:pages", _pages.value);
      forDays(_pages.value, (day) => {
        refreshDisabled(day);
        refreshFocusable(day);
      });
    });
    const context = {
      emit,
      slots,
      containerRef,
      navPopoverRef,
      focusedDay,
      inTransition,
      navPopoverId,
      dayPopoverId,
      view: _view,
      pages: _pages,
      transitionName,
      theme,
      color,
      displayMode,
      locale,
      masks: masks2,
      attributes,
      disabledAttribute,
      disabledDates,
      attributeContext,
      days,
      dayCells,
      count,
      step,
      firstPage,
      lastPage,
      canMovePrev,
      canMoveNext,
      minPage,
      maxPage,
      isMonthly,
      isWeekly,
      isDaily,
      navVisibility,
      showWeeknumbers,
      showIsoWeeknumbers,
      getDateAddress,
      canMove,
      canMoveBy,
      move,
      moveBy,
      movePrev,
      moveNext,
      onTransitionBeforeEnter,
      onTransitionAfterEnter,
      tryFocusDate,
      focusDate,
      onKeydown,
      onDayKeydown,
      onDayClick,
      onDayMouseenter,
      onDayMouseleave,
      onDayFocusin,
      onDayFocusout,
      onWeeknumberClick
    };
    vue.provide(contextKey$2, context);
    return context;
  }
  function useCalendar() {
    const context = vue.inject(contextKey$2);
    if (context)
      return context;
    throw new Error(
      "Calendar context missing. Please verify this component is nested within a valid context provider."
    );
  }
  const __default__$1 = {
    inheritAttrs: false
  };
  const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
    ...__default__$1,
    __name: "CalendarSlot",
    props: {
      name: null
    },
    setup(__props) {
      const { slots } = useCalendar();
      return (_ctx, _cache) => {
        return vue.unref(slots)[__props.name] ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(slots)[__props.name]), vue.normalizeProps(vue.mergeProps({ key: 0 }, _ctx.$attrs)), null, 16)) : vue.renderSlot(_ctx.$slots, "default", { key: 1 });
      };
    }
  });
  function showPopover(opts) {
    if (document) {
      document.dispatchEvent(
        new CustomEvent("show-popover", {
          detail: opts
        })
      );
    }
  }
  function hidePopover(opts) {
    if (document) {
      document.dispatchEvent(
        new CustomEvent("hide-popover", {
          detail: opts
        })
      );
    }
  }
  function togglePopover(opts) {
    if (document) {
      document.dispatchEvent(
        new CustomEvent("toggle-popover", {
          detail: opts
        })
      );
    }
  }
  function getPopoverEventHandlers(opts) {
    const { visibility } = opts;
    const click = visibility === "click";
    const hover = visibility === "hover";
    const hoverFocus = visibility === "hover-focus";
    const focus = visibility === "focus";
    opts.autoHide = !click;
    let hovered = false;
    let focused = false;
    const clickHandler = (e) => {
      if (click) {
        togglePopover({
          ...opts,
          target: opts.target || e.currentTarget
        });
        e.stopPropagation();
      }
    };
    const mouseMoveHandler = (e) => {
      if (!hovered) {
        hovered = true;
        if (hover || hoverFocus) {
          showPopover({
            ...opts,
            target: opts.target || e.currentTarget
          });
        }
      }
    };
    const mouseLeaveHandler = () => {
      if (hovered) {
        hovered = false;
        if (hover || hoverFocus && !focused) {
          hidePopover(opts);
        }
      }
    };
    const focusInHandler = (e) => {
      if (!focused) {
        focused = true;
        if (focus || hoverFocus) {
          showPopover({
            ...opts,
            target: opts.target || e.currentTarget
          });
        }
      }
    };
    const focusOutHandler = (e) => {
      if (focused && !elementContains(e.currentTarget, e.relatedTarget)) {
        focused = false;
        if (focus || hoverFocus && !hovered) {
          hidePopover(opts);
        }
      }
    };
    const handlers = {};
    switch (opts.visibility) {
      case "click":
        handlers.click = clickHandler;
        break;
      case "hover":
        handlers.mousemove = mouseMoveHandler;
        handlers.mouseleave = mouseLeaveHandler;
        break;
      case "focus":
        handlers.focusin = focusInHandler;
        handlers.focusout = focusOutHandler;
        break;
      case "hover-focus":
        handlers.mousemove = mouseMoveHandler;
        handlers.mouseleave = mouseLeaveHandler;
        handlers.focusin = focusInHandler;
        handlers.focusout = focusOutHandler;
        break;
    }
    return handlers;
  }
  const removeHandlers = (target) => {
    const el = resolveEl(target);
    if (el == null)
      return;
    const handlers = el.popoverHandlers;
    if (!handlers || !handlers.length)
      return;
    handlers.forEach((handler) => handler());
    delete el.popoverHandlers;
  };
  const addHandlers = (target, opts) => {
    const el = resolveEl(target);
    if (el == null)
      return;
    const remove = [];
    const handlers = getPopoverEventHandlers(opts);
    Object.entries(handlers).forEach(([event, handler]) => {
      remove.push(on(el, event, handler));
    });
    el.popoverHandlers = remove;
  };
  const popoverDirective = {
    mounted(el, binding) {
      const { value } = binding;
      if (!value)
        return;
      addHandlers(el, value);
    },
    updated(el, binding) {
      const { oldValue, value } = binding;
      const oldVisibility = oldValue == null ? void 0 : oldValue.visibility;
      const newVisibility = value == null ? void 0 : value.visibility;
      if (oldVisibility !== newVisibility) {
        if (oldVisibility) {
          removeHandlers(el);
          if (!newVisibility)
            hidePopover(oldValue);
        }
        if (newVisibility) {
          addHandlers(el, value);
        }
      }
    },
    unmounted(el) {
      removeHandlers(el);
    }
  };
  const _hoisted_1$8 = ["disabled"];
  const _hoisted_2$7 = {
    key: 1,
    type: "button",
    class: "vc-title"
  };
  const _hoisted_3$5 = ["disabled"];
  const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
    __name: "CalendarHeader",
    props: {
      page: { type: Object, required: true },
      layout: String,
      isLg: Boolean,
      isXl: Boolean,
      is2xl: Boolean,
      hideTitle: Boolean,
      hideArrows: Boolean
    },
    setup(__props) {
      const props = __props;
      const {
        navPopoverId,
        navVisibility,
        canMovePrev,
        movePrev,
        canMoveNext,
        moveNext
      } = useCalendar();
      const navPlacement = vue.computed(() => {
        switch (props.page.titlePosition) {
          case "left":
            return "bottom-start";
          case "right":
            return "bottom-end";
          default:
            return "bottom";
        }
      });
      const navPopoverOptions = vue.computed(() => {
        const { page } = props;
        return {
          id: navPopoverId.value,
          visibility: navVisibility.value,
          placement: navPlacement.value,
          modifiers: [{ name: "flip", options: { fallbackPlacements: ["bottom"] } }],
          data: { page },
          isInteractive: true
        };
      });
      const titleLeft = vue.computed(() => props.page.titlePosition.includes("left"));
      const titleRight = vue.computed(() => props.page.titlePosition.includes("right"));
      const layout_ = vue.computed(() => {
        if (props.layout)
          return props.layout;
        if (titleLeft.value)
          return "tu-pn";
        if (titleRight.value)
          return "pn-tu";
        return "p-tu-n;";
      });
      const show = vue.computed(() => {
        return {
          prev: layout_.value.includes("p") && !props.hideArrows,
          title: layout_.value.includes("t") && !props.hideTitle,
          next: layout_.value.includes("n") && !props.hideArrows
        };
      });
      const gridStyle = vue.computed(() => {
        const gridTemplateColumns = layout_.value.split("").map((l) => {
          switch (l) {
            case "p":
              return "[prev] auto";
            case "n":
              return "[next] auto";
            case "t":
              return "[title] auto";
            case "-":
              return "1fr";
            default:
              return "";
          }
        }).join(" ");
        return { gridTemplateColumns };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["vc-header", { "is-lg": __props.isLg, "is-xl": __props.isXl, "is-2xl": __props.is2xl }]),
          style: vue.normalizeStyle(vue.unref(gridStyle))
        }, [
          vue.unref(show).prev ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 0,
            type: "button",
            class: "vc-arrow vc-prev vc-focus",
            disabled: !vue.unref(canMovePrev),
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => vue.unref(movePrev) && vue.unref(movePrev)(...args)),
            onKeydown: _cache[1] || (_cache[1] = vue.withKeys(
              //@ts-ignore
              (...args) => vue.unref(movePrev) && vue.unref(movePrev)(...args),
              ["space", "enter"]
            ))
          }, [
            vue.createVNode(_sfc_main$c, {
              name: "header-prev-button",
              disabled: !vue.unref(canMovePrev)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_sfc_main$d, {
                  name: "ChevronLeft",
                  size: "24"
                })
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 40, _hoisted_1$8)) : vue.createCommentVNode("", true),
          vue.unref(show).title ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("button", _hoisted_2$7, [
            vue.createVNode(_sfc_main$c, {
              name: "header-title",
              title: __props.page.title
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("span", null, vue.toDisplayString(__props.page.title), 1)
              ]),
              _: 1
            }, 8, ["title"])
          ])), [
            [vue.unref(popoverDirective), vue.unref(navPopoverOptions)]
          ]) : vue.createCommentVNode("", true),
          vue.unref(show).next ? (vue.openBlock(), vue.createElementBlock("button", {
            key: 2,
            type: "button",
            class: "vc-arrow vc-next vc-focus",
            disabled: !vue.unref(canMoveNext),
            onClick: _cache[2] || (_cache[2] = //@ts-ignore
            (...args) => vue.unref(moveNext) && vue.unref(moveNext)(...args)),
            onKeydown: _cache[3] || (_cache[3] = vue.withKeys(
              //@ts-ignore
              (...args) => vue.unref(moveNext) && vue.unref(moveNext)(...args),
              ["space", "enter"]
            ))
          }, [
            vue.createVNode(_sfc_main$c, {
              name: "header-next-button",
              disabled: !vue.unref(canMoveNext)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_sfc_main$d, {
                  name: "ChevronRight",
                  size: "24"
                })
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 40, _hoisted_3$5)) : vue.createCommentVNode("", true)
        ], 6);
      };
    }
  });
  const _sfc_main$a = vue.defineComponent({
    directives: { popover: popoverDirective },
    components: { CalendarSlot: _sfc_main$c },
    props: {
      day: { type: Object, required: true }
    },
    setup(props) {
      const {
        locale,
        theme,
        attributeContext,
        dayPopoverId,
        slots,
        onDayClick,
        onDayMouseenter,
        onDayMouseleave,
        onDayFocusin,
        onDayFocusout,
        onDayKeydown
      } = useCalendar();
      const day = vue.computed(() => props.day);
      const attributeCells = vue.computed(() => {
        return attributeContext.value.getCells(day.value);
      });
      const attributes = vue.computed(
        () => attributeCells.value.map((cell) => cell.data)
      );
      const attributedDay = vue.computed(() => {
        return {
          ...day.value,
          attributes: attributes.value,
          attributeCells: attributeCells.value
        };
      });
      function processPopover({ data: attribute }, { popovers: popovers2 }) {
        const { key, customData, popover } = attribute;
        if (!popover)
          return;
        const resolvedPopover = defaults_1(
          {
            key,
            customData,
            attribute
          },
          { ...popover },
          {
            visibility: popover.label ? "hover" : "click",
            placement: "bottom",
            isInteractive: !popover.label
          }
        );
        popovers2.splice(0, 0, resolvedPopover);
      }
      const glyphs = vue.computed(() => {
        const result = {
          ...theme.value.prepareRender({}),
          popovers: []
        };
        attributeCells.value.forEach((cell) => {
          theme.value.render(cell, result);
          processPopover(cell, result);
        });
        return result;
      });
      const highlights = vue.computed(() => glyphs.value.highlights);
      const hasHighlights = vue.computed(() => !!arrayHasItems(highlights.value));
      const content = vue.computed(() => glyphs.value.content);
      const dots = vue.computed(() => glyphs.value.dots);
      const hasDots = vue.computed(() => !!arrayHasItems(dots.value));
      const bars = vue.computed(() => glyphs.value.bars);
      const hasBars = vue.computed(() => !!arrayHasItems(bars.value));
      const popovers = vue.computed(() => glyphs.value.popovers);
      const popoverAttrs = vue.computed(
        () => popovers.value.map((p) => p.attribute)
      );
      const dayClasses = vue.computed(() => {
        return [
          "vc-day",
          ...day.value.classes,
          { "vc-day-box-center-center": !slots["day-content"] },
          { "is-not-in-month": !props.day.inMonth }
        ];
      });
      const dayContentProps = vue.computed(() => {
        let tabindex;
        if (day.value.isFocusable) {
          tabindex = "0";
        } else {
          tabindex = "-1";
        }
        const classes2 = [
          "vc-day-content vc-focusable vc-focus vc-attr",
          { "vc-disabled": day.value.isDisabled },
          get_1(last_1(highlights.value), "contentClass"),
          get_1(last_1(content.value), "class") || ""
        ];
        const style = {
          ...get_1(last_1(highlights.value), "contentStyle"),
          ...get_1(last_1(content.value), "style")
        };
        return {
          class: classes2,
          style,
          tabindex,
          "aria-label": day.value.ariaLabel,
          "aria-disabled": day.value.isDisabled ? true : false,
          role: "button"
        };
      });
      const dayContentEvents = vue.computed(() => {
        return {
          click(event) {
            onDayClick(attributedDay.value, event);
          },
          mouseenter(event) {
            onDayMouseenter(attributedDay.value, event);
          },
          mouseleave(event) {
            onDayMouseleave(attributedDay.value, event);
          },
          focusin(event) {
            onDayFocusin(attributedDay.value, event);
          },
          focusout(event) {
            onDayFocusout(attributedDay.value, event);
          },
          keydown(event) {
            onDayKeydown(attributedDay.value, event);
          }
        };
      });
      const dayPopover2 = vue.computed(() => {
        if (!arrayHasItems(popovers.value))
          return null;
        return defaults_1(
          {
            id: dayPopoverId.value,
            data: { day, attributes: popoverAttrs.value }
          },
          ...popovers.value
        );
      });
      return {
        attributes,
        attributeCells,
        bars,
        dayClasses,
        dayContentProps,
        dayContentEvents,
        dayPopover: dayPopover2,
        glyphs,
        dots,
        hasDots,
        hasBars,
        highlights,
        hasHighlights,
        locale,
        popovers
      };
    }
  });
  const _hoisted_1$7 = {
    key: 0,
    class: "vc-highlights vc-day-layer"
  };
  const _hoisted_2$6 = {
    key: 1,
    class: "vc-day-layer vc-day-box-center-bottom"
  };
  const _hoisted_3$4 = { class: "vc-dots" };
  const _hoisted_4$2 = {
    key: 2,
    class: "vc-day-layer vc-day-box-center-bottom"
  };
  const _hoisted_5$2 = { class: "vc-bars" };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CalendarSlot = vue.resolveComponent("CalendarSlot");
    const _directive_popover = vue.resolveDirective("popover");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(_ctx.dayClasses)
    }, [
      _ctx.hasHighlights ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.highlights, ({ key, wrapperClass, class: bgClass, style }) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key,
            class: vue.normalizeClass(wrapperClass)
          }, [
            vue.createElementVNode("div", {
              class: vue.normalizeClass(bgClass),
              style: vue.normalizeStyle(style)
            }, null, 6)
          ], 2);
        }), 128))
      ])) : vue.createCommentVNode("", true),
      vue.createVNode(_component_CalendarSlot, {
        name: "day-content",
        day: _ctx.day,
        attributes: _ctx.attributes,
        "attribute-cells": _ctx.attributeCells,
        dayProps: _ctx.dayContentProps,
        dayEvents: _ctx.dayContentEvents,
        locale: _ctx.locale
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", vue.mergeProps(_ctx.dayContentProps, vue.toHandlers(_ctx.dayContentEvents, true)), [
            vue.createTextVNode(vue.toDisplayString(_ctx.day.label), 1)
          ], 16)), [
            [_directive_popover, _ctx.dayPopover]
          ])
        ]),
        _: 1
      }, 8, ["day", "attributes", "attribute-cells", "dayProps", "dayEvents", "locale"]),
      _ctx.hasDots ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$6, [
        vue.createElementVNode("div", _hoisted_3$4, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.dots, ({ key, class: bgClass, style }) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              key,
              class: vue.normalizeClass(bgClass),
              style: vue.normalizeStyle(style)
            }, null, 6);
          }), 128))
        ])
      ])) : vue.createCommentVNode("", true),
      _ctx.hasBars ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4$2, [
        vue.createElementVNode("div", _hoisted_5$2, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.bars, ({ key, class: bgClass, style }) => {
            return vue.openBlock(), vue.createElementBlock("span", {
              key,
              class: vue.normalizeClass(bgClass),
              style: vue.normalizeStyle(style)
            }, null, 6);
          }), 128))
        ])
      ])) : vue.createCommentVNode("", true)
    ], 2);
  }
  const CalendarDay = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$4]]);
  const _sfc_main$9 = {
    name: "CalendarPane",
    inheritAttrs: false,
    components: { CalendarHeader: _sfc_main$b, CalendarDay },
    props: {
      page: { type: Object, required: true }
    },
    setup() {
      const { onWeeknumberClick } = useCalendar();
      return {
        onWeeknumberClick
      };
    }
  };
  const _hoisted_1$6 = { class: "vc-weekdays" };
  const _hoisted_2$5 = ["onClick"];
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CalendarHeader = vue.resolveComponent("CalendarHeader");
    const _component_CalendarDay = vue.resolveComponent("CalendarDay");
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass([
        "vc-pane",
        `row-${$props.page.row}`,
        `row-from-end-${$props.page.rowFromEnd}`,
        `column-${$props.page.column}`,
        `column-from-end-${$props.page.columnFromEnd}`
      ]),
      ref: "pane"
    }, [
      vue.createVNode(_component_CalendarHeader, {
        page: $props.page,
        "is-lg": "",
        "hide-arrows": ""
      }, null, 8, ["page"]),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(["vc-weeks", {
          [`vc-show-weeknumbers-${$props.page.weeknumberPosition}`]: $props.page.weeknumberPosition
        }])
      }, [
        vue.createElementVNode("div", _hoisted_1$6, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.page.weekdays, ({ weekday, label }, i) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: i,
              class: vue.normalizeClass(`vc-weekday vc-weekday-${weekday}`)
            }, vue.toDisplayString(label), 3);
          }), 128))
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.page.viewWeeks, (week) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key: `weeknumber-${week.weeknumber}`,
            class: "vc-week"
          }, [
            $props.page.weeknumberPosition ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              class: vue.normalizeClass(["vc-weeknumber", `is-${$props.page.weeknumberPosition}`])
            }, [
              vue.createElementVNode("span", {
                class: vue.normalizeClass(["vc-weeknumber-content"]),
                onClick: ($event) => $setup.onWeeknumberClick(week, $event)
              }, vue.toDisplayString(week.weeknumberDisplay), 9, _hoisted_2$5)
            ], 2)) : vue.createCommentVNode("", true),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(week.days, (day) => {
              return vue.openBlock(), vue.createBlock(_component_CalendarDay, {
                key: day.id,
                day
              }, null, 8, ["day"]);
            }), 128))
          ]);
        }), 128))
      ], 2)
    ], 2);
  }
  const CalendarPane = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$3]]);
  const _sfc_main$8 = vue.defineComponent({
    name: "Popover",
    inheritAttrs: false,
    emits: ["before-show", "after-show", "before-hide", "after-hide"],
    props: {
      id: { type: String, required: true },
      showDelay: { type: Number, default: 0 },
      hideDelay: { type: Number, default: 110 },
      boundarySelector: { type: String }
    },
    setup(props, { emit }) {
      let timeout = void 0;
      const popoverRef = vue.ref();
      let resizeObserver = null;
      let popper2 = null;
      const state2 = vue.reactive({
        isVisible: false,
        target: null,
        data: null,
        transition: "slide-fade",
        placement: "bottom",
        direction: "",
        positionFixed: false,
        modifiers: [],
        isInteractive: true,
        visibility: "click",
        isHovered: false,
        isFocused: false,
        autoHide: false,
        force: false
      });
      function updateDirection(placement) {
        if (placement)
          state2.direction = placement.split("-")[0];
      }
      function onPopperUpdate({ placement, options }) {
        updateDirection(placement || (options == null ? void 0 : options.placement));
      }
      const popperOptions = vue.computed(() => {
        return {
          placement: state2.placement,
          strategy: state2.positionFixed ? "fixed" : "absolute",
          boundary: "",
          modifiers: [
            {
              name: "onUpdate",
              enabled: true,
              phase: "afterWrite",
              fn: onPopperUpdate
            },
            ...state2.modifiers || []
          ],
          onFirstUpdate: onPopperUpdate
        };
      });
      const alignment = vue.computed(() => {
        const isLeftRight = state2.direction === "left" || state2.direction === "right";
        let alignment2 = "";
        if (state2.placement) {
          const parts = state2.placement.split("-");
          if (parts.length > 1)
            alignment2 = parts[1];
        }
        if (["start", "top", "left"].includes(alignment2)) {
          return isLeftRight ? "top" : "left";
        }
        if (["end", "bottom", "right"].includes(alignment2)) {
          return isLeftRight ? "bottom" : "right";
        }
        return isLeftRight ? "middle" : "center";
      });
      function destroyPopper() {
        if (popper2) {
          popper2.destroy();
          popper2 = null;
        }
      }
      function setupPopper() {
        vue.nextTick(() => {
          const el = resolveEl(state2.target);
          if (!el || !popoverRef.value)
            return;
          if (popper2 && popper2.state.elements.reference !== el) {
            destroyPopper();
          }
          if (!popper2) {
            popper2 = createPopper(
              el,
              popoverRef.value,
              popperOptions.value
            );
          } else {
            popper2.update();
          }
        });
      }
      function updateState(newState) {
        Object.assign(state2, omit(newState, "force"));
      }
      function setTimer(delay, fn) {
        clearTimeout(timeout);
        if (delay > 0) {
          timeout = setTimeout(fn, delay);
        } else {
          fn();
        }
      }
      function isCurrentTarget(target) {
        if (!target || !popper2)
          return false;
        const el = resolveEl(target);
        return el === popper2.state.elements.reference;
      }
      async function show(opts = {}) {
        if (state2.force)
          return;
        if (opts.force)
          state2.force = true;
        setTimer(opts.showDelay ?? props.showDelay, () => {
          if (state2.isVisible) {
            state2.force = false;
            emit("after-show");
          }
          updateState({
            ...opts,
            isVisible: true
          });
          setupPopper();
        });
      }
      function hide2(opts = {}) {
        if (!popper2)
          return;
        if (opts.target && !isCurrentTarget(opts.target))
          return;
        if (state2.force)
          return;
        if (opts.force)
          state2.force = true;
        setTimer(opts.hideDelay ?? props.hideDelay, () => {
          if (!state2.isVisible)
            state2.force = false;
          state2.isVisible = false;
        });
      }
      function toggle(opts = {}) {
        if (opts.target == null)
          return;
        if (state2.isVisible && isCurrentTarget(opts.target)) {
          hide2(opts);
        } else {
          show(opts);
        }
      }
      function onDocumentClick(e) {
        if (!popper2)
          return;
        const popperRef = popper2.state.elements.reference;
        if (!popoverRef.value || !popperRef) {
          return;
        }
        const target = e.target;
        if (elementContains(popoverRef.value, target) || elementContains(popperRef, target)) {
          return;
        }
        hide2({ force: true });
      }
      function onDocumentKeydown(e) {
        if (e.key === "Esc" || e.key === "Escape") {
          hide2();
        }
      }
      function onDocumentShowPopover({ detail }) {
        if (!detail.id || detail.id !== props.id)
          return;
        show(detail);
      }
      function onDocumentHidePopover({ detail }) {
        if (!detail.id || detail.id !== props.id)
          return;
        hide2(detail);
      }
      function onDocumentTogglePopover({ detail }) {
        if (!detail.id || detail.id !== props.id)
          return;
        toggle(detail);
      }
      function addEvents() {
        on(document, "keydown", onDocumentKeydown);
        on(document, "click", onDocumentClick);
        on(document, "show-popover", onDocumentShowPopover);
        on(document, "hide-popover", onDocumentHidePopover);
        on(document, "toggle-popover", onDocumentTogglePopover);
      }
      function removeEvents() {
        off(document, "keydown", onDocumentKeydown);
        off(document, "click", onDocumentClick);
        off(document, "show-popover", onDocumentShowPopover);
        off(document, "hide-popover", onDocumentHidePopover);
        off(document, "toggle-popover", onDocumentTogglePopover);
      }
      function beforeEnter(el) {
        emit("before-show", el);
      }
      function afterEnter(el) {
        state2.force = false;
        emit("after-show", el);
      }
      function beforeLeave(el) {
        emit("before-hide", el);
      }
      function afterLeave(el) {
        state2.force = false;
        destroyPopper();
        emit("after-hide", el);
      }
      function onClick(e) {
        e.stopPropagation();
      }
      function onMouseOver() {
        state2.isHovered = true;
        if (state2.isInteractive && ["hover", "hover-focus"].includes(state2.visibility)) {
          show();
        }
      }
      function onMouseLeave() {
        state2.isHovered = false;
        if (!popper2)
          return;
        const popperRef = popper2.state.elements.reference;
        if (state2.autoHide && !state2.isFocused && (!popperRef || popperRef !== document.activeElement) && ["hover", "hover-focus"].includes(state2.visibility)) {
          hide2();
        }
      }
      function onFocusIn() {
        state2.isFocused = true;
        if (state2.isInteractive && ["focus", "hover-focus"].includes(state2.visibility)) {
          show();
        }
      }
      function onFocusOut(e) {
        if (["focus", "hover-focus"].includes(state2.visibility) && (!e.relatedTarget || !elementContains(popoverRef.value, e.relatedTarget))) {
          state2.isFocused = false;
          if (!state2.isHovered && state2.autoHide)
            hide2();
        }
      }
      function cleanupRO() {
        if (resizeObserver != null) {
          resizeObserver.disconnect();
          resizeObserver = null;
        }
      }
      vue.watch(
        () => popoverRef.value,
        (val) => {
          cleanupRO();
          if (!val)
            return;
          resizeObserver = new ResizeObserver(() => {
            if (popper2)
              popper2.update();
          });
          resizeObserver.observe(val);
        }
      );
      vue.watch(() => state2.placement, updateDirection, {
        immediate: true
      });
      vue.onMounted(() => {
        addEvents();
      });
      vue.onUnmounted(() => {
        destroyPopper();
        cleanupRO();
        removeEvents();
      });
      return {
        ...vue.toRefs(state2),
        popoverRef,
        alignment,
        hide: hide2,
        setupPopper,
        beforeEnter,
        afterEnter,
        beforeLeave,
        afterLeave,
        onClick,
        onMouseOver,
        onMouseLeave,
        onFocusIn,
        onFocusOut
      };
    }
  });
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", {
      class: vue.normalizeClass(["vc-popover-content-wrapper", { "is-interactive": _ctx.isInteractive }]),
      ref: "popoverRef",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args)),
      onMouseover: _cache[1] || (_cache[1] = (...args) => _ctx.onMouseOver && _ctx.onMouseOver(...args)),
      onMouseleave: _cache[2] || (_cache[2] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
      onFocusin: _cache[3] || (_cache[3] = (...args) => _ctx.onFocusIn && _ctx.onFocusIn(...args)),
      onFocusout: _cache[4] || (_cache[4] = (...args) => _ctx.onFocusOut && _ctx.onFocusOut(...args))
    }, [
      vue.createVNode(vue.Transition, {
        name: `vc-${_ctx.transition}`,
        appear: "",
        onBeforeEnter: _ctx.beforeEnter,
        onAfterEnter: _ctx.afterEnter,
        onBeforeLeave: _ctx.beforeLeave,
        onAfterLeave: _ctx.afterLeave
      }, {
        default: vue.withCtx(() => [
          _ctx.isVisible ? (vue.openBlock(), vue.createElementBlock("div", vue.mergeProps({
            key: 0,
            tabindex: "-1",
            class: `vc-popover-content direction-${_ctx.direction}`
          }, _ctx.$attrs), [
            vue.renderSlot(_ctx.$slots, "default", {
              direction: _ctx.direction,
              alignment: _ctx.alignment,
              data: _ctx.data,
              hide: _ctx.hide
            }, () => [
              vue.createTextVNode(vue.toDisplayString(_ctx.data), 1)
            ]),
            vue.createElementVNode("span", {
              class: vue.normalizeClass([
                "vc-popover-caret",
                `direction-${_ctx.direction}`,
                `align-${_ctx.alignment}`
              ])
            }, null, 2)
          ], 16)) : vue.createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name", "onBeforeEnter", "onAfterEnter", "onBeforeLeave", "onAfterLeave"])
    ], 34);
  }
  const Popover = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$2]]);
  const propsDef$1 = {
    value: { type: Object, required: true }
  };
  const emitsDef = ["input"];
  const contextKey$1 = "__vc_calendar_nav_context__";
  function createCalendarNav(props, { emit }) {
    const monthMode = vue.ref(true);
    const yearIndex = vue.ref(0);
    const yearGroupIndex = vue.ref(0);
    const yearGroupCount = 12;
    const navContainer = vue.ref(null);
    const { locale, masks: masks2, canMove, getDateAddress } = useCalendar();
    function focusFirstItem() {
      setTimeout(() => {
        if (navContainer.value == null)
          return;
        const focusableEl = navContainer.value.querySelector(
          ".vc-nav-item:not(:disabled)"
        );
        if (focusableEl) {
          focusableEl.focus();
        }
      }, 10);
    }
    function monthClick(month, year) {
      emit("input", { month, year }, { position: currentPosition.value });
    }
    function yearClick(year) {
      yearIndex.value = year;
      monthMode.value = true;
      focusFirstItem();
    }
    function getYearItems(yearGroupIndex2) {
      const { year: thisYear } = getDateAddress(/* @__PURE__ */ new Date());
      const startYear = yearGroupIndex2 * yearGroupCount;
      const endYear = startYear + yearGroupCount;
      const items = [];
      for (let year = startYear; year < endYear; year += 1) {
        let enabled = false;
        for (let month = 1; month < 12; month++) {
          enabled = canMove({ month, year }, { position: currentPosition.value });
          if (enabled)
            break;
        }
        items.push({
          year,
          id: year.toString(),
          label: year.toString(),
          ariaLabel: year.toString(),
          isActive: year === currentYear.value,
          isCurrent: year === thisYear,
          isDisabled: !enabled,
          click: () => yearClick(year)
        });
      }
      return items;
    }
    function getMonthItems(year) {
      const { month: thisMonth, year: thisYear } = getDateAddress(/* @__PURE__ */ new Date());
      return getMonthDates().map((d, i) => {
        const month = i + 1;
        return {
          month,
          year,
          id: `${year}.${pad(month, 2)}`,
          label: locale.value.formatDate(d, masks2.value.navMonths),
          ariaLabel: locale.value.formatDate(d, "MMMM YYYY"),
          isActive: month === currentMonth.value && year === currentYear.value,
          isCurrent: month === thisMonth && year === thisYear,
          isDisabled: !canMove(
            { month, year },
            { position: currentPosition.value }
          ),
          click: () => monthClick(month, year)
        };
      });
    }
    function getYearGroupIndex(year) {
      return Math.floor(year / yearGroupCount);
    }
    function toggleMode() {
      monthMode.value = !monthMode.value;
    }
    function movePrev() {
      if (!prevItemsEnabled.value)
        return;
      if (monthMode.value) {
        movePrevYear();
      }
      movePrevYearGroup();
    }
    function moveNext() {
      if (!nextItemsEnabled.value)
        return;
      if (monthMode.value) {
        moveNextYear();
      }
      moveNextYearGroup();
    }
    function movePrevYear() {
      yearIndex.value--;
    }
    function moveNextYear() {
      yearIndex.value++;
    }
    function movePrevYearGroup() {
      yearGroupIndex.value--;
    }
    function moveNextYearGroup() {
      yearGroupIndex.value++;
    }
    const currentMonth = vue.computed(() => {
      var _a;
      return ((_a = props.value) == null ? void 0 : _a.month) || 0;
    });
    const currentYear = vue.computed(() => {
      var _a;
      return ((_a = props.value) == null ? void 0 : _a.year) || 0;
    });
    const currentPosition = vue.computed(() => {
      var _a;
      return ((_a = props.value) == null ? void 0 : _a.position) || 1;
    });
    const monthItems = vue.computed(() => getMonthItems(yearIndex.value));
    const yearItems = vue.computed(() => getYearItems(yearGroupIndex.value));
    const firstYear = vue.computed(() => head_1(yearItems.value.map((i) => i.year)));
    const lastYear = vue.computed(() => last_1(yearItems.value.map((i) => i.year)));
    const title2 = vue.computed(() => {
      return monthMode.value ? yearIndex.value : `${firstYear.value} - ${lastYear.value}`;
    });
    const prevMonthItemsEnabled = vue.computed(
      () => getMonthItems(yearIndex.value - 1).some((i) => !i.isDisabled)
    );
    const prevYearItemsEnabled = vue.computed(
      () => getYearItems(yearGroupIndex.value - 1).some((i) => !i.isDisabled)
    );
    const prevItemsEnabled = vue.computed(
      () => monthMode.value ? prevMonthItemsEnabled.value : prevYearItemsEnabled.value
    );
    const nextMonthItemsEnabled = vue.computed(
      () => getMonthItems(yearIndex.value + 1).some((i) => !i.isDisabled)
    );
    const nextYearItemsEnabled = vue.computed(
      () => getYearItems(yearGroupIndex.value + 1).some((i) => !i.isDisabled)
    );
    const nextItemsEnabled = vue.computed(
      () => monthMode.value ? nextMonthItemsEnabled.value : nextYearItemsEnabled.value
    );
    const activeItems = vue.computed(
      () => monthMode.value ? monthItems.value : yearItems.value
    );
    vue.watch(
      () => currentYear.value,
      () => {
        yearIndex.value = currentYear.value;
      }
    );
    vue.watch(
      () => yearIndex.value,
      (val) => {
        yearGroupIndex.value = getYearGroupIndex(val);
      }
    );
    yearIndex.value = currentYear.value;
    vue.onMounted(() => focusFirstItem());
    const context = {
      navContainer,
      title: title2,
      monthMode,
      currentMonth,
      currentYear,
      activeItems,
      prevItemsEnabled,
      nextItemsEnabled,
      toggleMode,
      movePrev,
      moveNext,
      movePrevYear,
      moveNextYear,
      movePrevYearGroup,
      moveNextYearGroup
    };
    vue.provide(contextKey$1, context);
    return context;
  }
  const _hoisted_1$5 = { class: "vc-nav-header" };
  const _hoisted_2$4 = ["disabled"];
  const _hoisted_3$3 = ["disabled"];
  const _hoisted_4$1 = { class: "vc-nav-items" };
  const _hoisted_5$1 = ["data-id", "aria-label", "disabled", "onClick", "onKeydown"];
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "CalendarNav",
    props: propsDef$1,
    emits: emitsDef,
    setup(__props, { emit }) {
      const props = __props;
      const {
        navContainer,
        title: title2,
        prevItemsEnabled,
        nextItemsEnabled,
        activeItems,
        toggleMode,
        movePrev,
        moveNext
      } = createCalendarNav(props, { emit });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: "vc-nav-container",
          ref_key: "navContainer",
          ref: navContainer
        }, [
          vue.createElementVNode("div", _hoisted_1$5, [
            vue.createElementVNode("button", {
              type: "button",
              class: "vc-nav-arrow is-left vc-focus",
              disabled: !vue.unref(prevItemsEnabled),
              onClick: _cache[0] || (_cache[0] = //@ts-ignore
              (...args) => vue.unref(movePrev) && vue.unref(movePrev)(...args)),
              onKeydown: _cache[1] || (_cache[1] = (e) => vue.unref(onSpaceOrEnter)(e, vue.unref(movePrev)))
            }, [
              vue.createVNode(_sfc_main$c, {
                name: "nav-prev-button",
                move: vue.unref(movePrev),
                disabled: !vue.unref(prevItemsEnabled)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_sfc_main$d, {
                    name: "ChevronLeft",
                    width: "22px",
                    height: "24px"
                  })
                ]),
                _: 1
              }, 8, ["move", "disabled"])
            ], 40, _hoisted_2$4),
            vue.createElementVNode("button", {
              type: "button",
              class: "vc-nav-title vc-focus",
              onClick: _cache[2] || (_cache[2] = //@ts-ignore
              (...args) => vue.unref(toggleMode) && vue.unref(toggleMode)(...args)),
              onKeydown: _cache[3] || (_cache[3] = (e) => vue.unref(onSpaceOrEnter)(e, vue.unref(toggleMode)))
            }, vue.toDisplayString(vue.unref(title2)), 33),
            vue.createElementVNode("button", {
              type: "button",
              class: "vc-nav-arrow is-right vc-focus",
              disabled: !vue.unref(nextItemsEnabled),
              onClick: _cache[4] || (_cache[4] = //@ts-ignore
              (...args) => vue.unref(moveNext) && vue.unref(moveNext)(...args)),
              onKeydown: _cache[5] || (_cache[5] = (e) => vue.unref(onSpaceOrEnter)(e, vue.unref(moveNext)))
            }, [
              vue.createVNode(_sfc_main$c, {
                name: "nav-next-button",
                move: vue.unref(moveNext),
                disabled: !vue.unref(nextItemsEnabled)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_sfc_main$d, {
                    name: "ChevronRight",
                    width: "22px",
                    height: "24px"
                  })
                ]),
                _: 1
              }, 8, ["move", "disabled"])
            ], 40, _hoisted_3$3)
          ]),
          vue.createElementVNode("div", _hoisted_4$1, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(activeItems), (item) => {
              return vue.openBlock(), vue.createElementBlock("button", {
                key: item.label,
                type: "button",
                "data-id": item.id,
                "aria-label": item.ariaLabel,
                class: vue.normalizeClass(["vc-nav-item vc-focus", [
                  item.isActive ? "is-active" : item.isCurrent ? "is-current" : ""
                ]]),
                disabled: item.isDisabled,
                onClick: item.click,
                onKeydown: (e) => vue.unref(onSpaceOrEnter)(e, item.click)
              }, vue.toDisplayString(item.label), 43, _hoisted_5$1);
            }), 128))
          ])
        ], 512);
      };
    }
  });
  const _sfc_main$6 = {
    __name: "CalendarNavPopover",
    setup(__props) {
      const { navPopoverId, color, displayMode, navPopoverRef, move } = useCalendar();
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(Popover, {
          id: vue.unref(navPopoverId),
          class: vue.normalizeClass(["vc-nav-popover-container", `vc-${vue.unref(color)}`, `vc-${vue.unref(displayMode)}`]),
          ref_key: "navPopoverRef",
          ref: navPopoverRef
        }, {
          default: vue.withCtx(({ data: data2 }) => [
            vue.createVNode(_sfc_main$7, {
              value: data2.page,
              onInput: vue.unref(move)
            }, null, 8, ["value", "onInput"])
          ]),
          _: 1
        }, 8, ["id", "class"]);
      };
    }
  };
  const _sfc_main$5 = vue.defineComponent({
    name: "PopoverRow",
    props: {
      attribute: { type: Object, required: true }
    },
    setup(props) {
      const indicator = vue.computed(() => {
        const { content, highlight, dot, bar, popover } = props.attribute;
        if (popover && popover.hideIndicator)
          return null;
        if (content) {
          return {
            class: `vc-bar vc-day-popover-row-bar vc-attr vc-${content.base.color}`
          };
        }
        if (highlight) {
          return {
            class: `vc-highlight-bg-solid vc-day-popover-row-highlight vc-attr vc-${highlight.base.color}`
          };
        }
        if (dot) {
          return {
            class: `vc-dot vc-attr vc-${dot.base.color}`
          };
        }
        if (bar) {
          return {
            class: `vc-bar vc-day-popover-row-bar vc-attr vc-${bar.base.color}`
          };
        }
        return null;
      });
      return {
        indicator
      };
    }
  });
  const _hoisted_1$4 = { class: "vc-day-popover-row" };
  const _hoisted_2$3 = {
    key: 0,
    class: "vc-day-popover-row-indicator"
  };
  const _hoisted_3$2 = { class: "vc-day-popover-row-label" };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
      _ctx.indicator ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$3, [
        vue.createElementVNode("span", {
          class: vue.normalizeClass(_ctx.indicator.class)
        }, null, 2)
      ])) : vue.createCommentVNode("", true),
      vue.createElementVNode("div", _hoisted_3$2, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(vue.toDisplayString(_ctx.attribute.popover ? _ctx.attribute.popover.label : "No content provided"), 1)
        ])
      ])
    ]);
  }
  const PopoverRow = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
  const _hoisted_1$3 = { class: "vc-day-popover-container" };
  const _hoisted_2$2 = {
    key: 0,
    class: "vc-day-popover-header"
  };
  const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
    __name: "CalendarDayPopover",
    setup(__props) {
      const { dayPopoverId, displayMode, color, masks: masks2, locale } = useCalendar();
      function format(date, mask) {
        return locale.value.formatDate(date, mask);
      }
      function dayTitle(day) {
        return locale.value.formatDate(day.date, masks2.value.dayPopover);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(Popover, {
          id: vue.unref(dayPopoverId),
          class: vue.normalizeClass([`vc-${vue.unref(color)}`, `vc-${vue.unref(displayMode)}`])
        }, {
          default: vue.withCtx(({ data: { day, attributes }, hide: hide2 }) => [
            vue.renderSlot(_ctx.$slots, "default", {
              day,
              dayTitle: dayTitle(day),
              attributes,
              format,
              masks: vue.unref(masks2),
              hide: hide2
            }, () => [
              vue.createElementVNode("div", _hoisted_1$3, [
                vue.unref(masks2).dayPopover ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$2, vue.toDisplayString(dayTitle(day)), 1)) : vue.createCommentVNode("", true),
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(attributes, (attribute) => {
                  return vue.openBlock(), vue.createBlock(PopoverRow, {
                    key: attribute.key,
                    attribute
                  }, null, 8, ["attribute"]);
                }), 128))
              ])
            ])
          ]),
          _: 3
        }, 8, ["id", "class"]);
      };
    }
  });
  const _sfc_main$3 = vue.defineComponent({
    name: "Calendar",
    components: {
      CalendarHeader: _sfc_main$b,
      CalendarPane,
      CalendarNavPopover: _sfc_main$6,
      CalendarDayPopover: _sfc_main$4
    },
    emits: emitsDef$1,
    props: propsDef$2,
    setup(props, { emit, slots }) {
      return createCalendar(props, { emit, slots });
    }
  });
  const _hoisted_1$2 = { class: "vc-pane-header-wrapper" };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_CalendarHeader = vue.resolveComponent("CalendarHeader");
    const _component_CalendarPane = vue.resolveComponent("CalendarPane");
    const _component_CalendarDayPopover = vue.resolveComponent("CalendarDayPopover");
    const _component_CalendarNavPopover = vue.resolveComponent("CalendarNavPopover");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("div", vue.mergeProps({ "data-helptext": "Press the arrow keys to navigate by day, Home and End to navigate to week ends, PageUp and PageDown to navigate by month, Alt+PageUp and Alt+PageDown to navigate by year" }, _ctx.$attrs, {
        class: [
          "vc-container",
          `vc-${_ctx.view}`,
          `vc-${_ctx.color}`,
          `vc-${_ctx.displayMode}`,
          {
            "vc-expanded": _ctx.expanded,
            "vc-bordered": !_ctx.borderless,
            "vc-transparent": _ctx.transparent
          }
        ],
        onMouseup: _cache[0] || (_cache[0] = vue.withModifiers(() => {
        }, ["prevent"])),
        ref: "containerRef"
      }), [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(["vc-pane-container", { "in-transition": _ctx.inTransition }])
        }, [
          vue.createElementVNode("div", _hoisted_1$2, [
            _ctx.firstPage ? (vue.openBlock(), vue.createBlock(_component_CalendarHeader, {
              key: 0,
              page: _ctx.firstPage,
              "is-lg": "",
              "hide-title": ""
            }, null, 8, ["page"])) : vue.createCommentVNode("", true)
          ]),
          vue.createVNode(vue.Transition, {
            name: `vc-${_ctx.transitionName}`,
            onBeforeEnter: _ctx.onTransitionBeforeEnter,
            onAfterEnter: _ctx.onTransitionAfterEnter
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createElementBlock("div", {
                key: _ctx.pages[0].id,
                class: "vc-pane-layout",
                style: vue.normalizeStyle({
                  gridTemplateColumns: `repeat(${_ctx.columns}, 1fr)`
                })
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pages, (page) => {
                  return vue.openBlock(), vue.createBlock(_component_CalendarPane, {
                    key: page.id,
                    page
                  }, null, 8, ["page"]);
                }), 128))
              ], 4))
            ]),
            _: 1
          }, 8, ["name", "onBeforeEnter", "onAfterEnter"]),
          vue.renderSlot(_ctx.$slots, "footer")
        ], 2)
      ], 16),
      vue.createVNode(_component_CalendarDayPopover, null, {
        default: vue.withCtx((props) => [
          vue.renderSlot(_ctx.$slots, "day-popover", vue.normalizeProps(vue.guardReactiveProps(props)))
        ]),
        _: 3
      }),
      vue.createVNode(_component_CalendarNavPopover)
    ], 64);
  }
  const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
  const _hoisted_1$1 = { class: "vc-base-select" };
  const _hoisted_2$1 = ["value"];
  const _hoisted_3$1 = ["value", "disabled"];
  const __default__ = {
    inheritAttrs: false
  };
  const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__, {
    __name: "BaseSelect",
    props: {
      options: Array,
      modelValue: null,
      alignRight: Boolean,
      alignLeft: Boolean,
      showIcon: Boolean,
      small: Boolean
    },
    emits: ["update:modelValue"],
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          __props.showIcon ? (vue.openBlock(), vue.createBlock(_sfc_main$d, {
            key: 0,
            name: "ChevronDown",
            size: __props.small ? "16" : "18"
          }, null, 8, ["size"])) : vue.createCommentVNode("", true),
          vue.createElementVNode("select", vue.mergeProps(_ctx.$attrs, {
            value: __props.modelValue,
            class: ["vc-focus", {
              "vc-has-icon": __props.showIcon,
              "vc-align-right": __props.alignRight,
              "vc-align-left": __props.alignLeft,
              "vc-small": __props.small
            }],
            onChange: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
          }), [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.options, (option) => {
              return vue.openBlock(), vue.createElementBlock("option", {
                key: option.value,
                value: option.value,
                disabled: option.disabled
              }, vue.toDisplayString(option.label), 9, _hoisted_3$1);
            }), 128))
          ], 16, _hoisted_2$1)
        ]);
      };
    }
  });
  const contextKey = "__vc_date_picker_context__";
  const propsDef = {
    ...propsDef$3,
    mode: { type: String, default: "date" },
    modelValue: {
      type: [Number, String, Date, Object]
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    },
    rules: [String, Object],
    is24hr: Boolean,
    hideTimeHeader: Boolean,
    timeAccuracy: { type: Number, default: 2 },
    isRequired: Boolean,
    isRange: Boolean,
    updateOnInput: {
      type: Boolean,
      default: () => getDefault("datePicker.updateOnInput")
    },
    inputDebounce: {
      type: Number,
      default: () => getDefault("datePicker.inputDebounce")
    },
    popover: {
      type: [Boolean, Object],
      default: true
    },
    dragAttribute: Object,
    selectAttribute: Object,
    attributes: [Object, Array]
  };
  const emits = [
    "update:modelValue",
    "drag",
    "dayclick",
    "daykeydown",
    "popover-will-show",
    "popover-did-show",
    "popover-will-hide",
    "popover-did-hide"
  ];
  function createDatePicker(props, ctx) {
    const baseCtx = createBase(props);
    const { locale, masks: masks2, disabledAttribute } = baseCtx;
    const { emit } = ctx;
    const showCalendar = vue.ref(false);
    const datePickerPopoverId = vue.ref(createGuid());
    const dateValue = vue.ref(null);
    const dragValue = vue.ref(null);
    const inputValues = vue.ref(["", ""]);
    const popoverRef = vue.ref(null);
    const calendarRef = vue.ref(null);
    let updateTimeout = void 0;
    let dragTrackingValue;
    let watchValue = true;
    const isRange = vue.computed(() => {
      return props.isRange || props.modelModifiers.range === true;
    });
    const valueStart = vue.computed(
      () => isRange.value && dateValue.value != null ? dateValue.value.start : null
    );
    const valueEnd = vue.computed(
      () => isRange.value && dateValue.value != null ? dateValue.value.end : null
    );
    const isDateMode = vue.computed(() => props.mode.toLowerCase() === "date");
    const isDateTimeMode = vue.computed(
      () => props.mode.toLowerCase() === "datetime"
    );
    const isTimeMode = vue.computed(() => props.mode.toLowerCase() === "time");
    const isDragging = vue.computed(() => !!dragValue.value);
    const modelConfig = vue.computed(() => {
      let type = "date";
      if (props.modelModifiers.number)
        type = "number";
      if (props.modelModifiers.string)
        type = "string";
      const mask = masks2.value.modelValue || "iso";
      return normalizeConfig2({ type, mask });
    });
    const dateParts = vue.computed(
      () => getDateParts2(dragValue.value ?? dateValue.value)
    );
    const inputMask = vue.computed(() => {
      if (isTimeMode.value) {
        return props.is24hr ? masks2.value.inputTime24hr : masks2.value.inputTime;
      }
      if (isDateTimeMode.value) {
        return props.is24hr ? masks2.value.inputDateTime24hr : masks2.value.inputDateTime;
      }
      return masks2.value.input;
    });
    const inputMaskHasTime = vue.computed(() => /[Hh]/g.test(inputMask.value));
    const inputMaskHasDate = vue.computed(
      () => /[dD]{1,2}|Do|W{1,4}|M{1,4}|YY(?:YY)?/g.test(inputMask.value)
    );
    const inputMaskPatch = vue.computed(() => {
      if (inputMaskHasTime.value && inputMaskHasDate.value) {
        return "dateTime";
      }
      if (inputMaskHasDate.value)
        return "date";
      if (inputMaskHasTime.value)
        return "time";
      return void 0;
    });
    const popover = vue.computed(() => {
      var _a;
      const target = ((_a = popoverRef.value) == null ? void 0 : _a.$el.previousElementSibling) ?? void 0;
      return defaultsDeep_1({}, props.popover, getDefault("datePicker.popover"), {
        target
      });
    });
    const popoverEvents = vue.computed(
      () => getPopoverEventHandlers({
        ...popover.value,
        id: datePickerPopoverId.value
      })
    );
    const inputValue = vue.computed(() => {
      return isRange.value ? {
        start: inputValues.value[0],
        end: inputValues.value[1]
      } : inputValues.value[0];
    });
    const inputEvents = vue.computed(() => {
      const events = ["start", "end"].map((target) => ({
        input: onInputInput(target),
        change: onInputChange(target),
        keyup: onInputKeyup,
        ...props.popover && popoverEvents.value
      }));
      return isRange.value ? {
        start: events[0],
        end: events[1]
      } : events[0];
    });
    const selectAttribute = vue.computed(() => {
      if (!hasValue(dateValue.value))
        return null;
      const attribute = {
        key: "select-drag",
        ...props.selectAttribute,
        dates: dateValue.value,
        pinPage: true
      };
      const { dot, bar, highlight, content } = attribute;
      if (!dot && !bar && !highlight && !content) {
        attribute.highlight = true;
      }
      return attribute;
    });
    const dragAttribute = vue.computed(() => {
      if (!isRange.value || !hasValue(dragValue.value)) {
        return null;
      }
      const attribute = {
        key: "select-drag",
        ...props.dragAttribute,
        dates: dragValue.value
      };
      const { dot, bar, highlight, content } = attribute;
      if (!dot && !bar && !highlight && !content) {
        attribute.highlight = {
          startEnd: {
            fillMode: "outline"
          }
        };
      }
      return attribute;
    });
    const attributes = vue.computed(() => {
      const attrs = isArray(props.attributes) ? [...props.attributes] : [];
      if (dragAttribute.value) {
        attrs.unshift(dragAttribute.value);
      } else if (selectAttribute.value) {
        attrs.unshift(selectAttribute.value);
      }
      return attrs;
    });
    const rules = vue.computed(() => {
      return normalizeConfig2(
        props.rules === "auto" ? getAutoRules() : props.rules ?? {}
      );
    });
    function getAutoRules() {
      const _rules = {
        ms: [0, 999],
        sec: [0, 59],
        min: [0, 59],
        hr: [0, 23]
      };
      const accuracy = isDateMode.value ? 0 : props.timeAccuracy;
      return [0, 1].map((i) => {
        switch (accuracy) {
          case 0:
            return {
              hours: _rules.hr[i],
              minutes: _rules.min[i],
              seconds: _rules.sec[i],
              milliseconds: _rules.ms[i]
            };
          case 1:
            return {
              minutes: _rules.min[i],
              seconds: _rules.sec[i],
              milliseconds: _rules.ms[i]
            };
          case 3:
            return { milliseconds: _rules.ms[i] };
          case 4:
            return {};
          default:
            return { seconds: _rules.sec[i], milliseconds: _rules.ms[i] };
        }
      });
    }
    function normalizeConfig2(config22) {
      if (isArray(config22)) {
        if (config22.length === 1)
          return [config22[0], config22[0]];
        return config22;
      }
      return [config22, config22];
    }
    function normalizeDateConfig(config22) {
      return normalizeConfig2(config22).map(
        (c, i) => ({
          ...c,
          rules: rules.value[i]
        })
      );
    }
    function hasDateValue(value) {
      if (isNumber_1(value))
        return !isNaN(value);
      if (isDate(value))
        return !isNaN(value.getTime());
      if (isString_1(value))
        return value !== "";
      return value != null;
    }
    function hasValue(value) {
      if (isRange.value) {
        return isObject(value) && hasDateValue(value.start) && hasDateValue(value.end);
      }
      return hasDateValue(value);
    }
    function datesAreEqual(a, b) {
      const aIsDate = isDate(a);
      const bIsDate = isDate(b);
      if (!aIsDate && !bIsDate)
        return true;
      if (aIsDate !== bIsDate)
        return false;
      return a.getTime() === b.getTime();
    }
    function valuesAreEqual(a, b) {
      if (isRange.value) {
        const aHasValue = hasValue(a);
        const bHasValue = hasValue(b);
        if (!aHasValue && !bHasValue)
          return true;
        if (aHasValue !== bHasValue)
          return false;
        return datesAreEqual(a.start, b.start) && datesAreEqual(a.end, b.end);
      }
      return datesAreEqual(a, b);
    }
    function valueIsDisabled(value) {
      if (!hasValue(value) || !disabledAttribute.value)
        return false;
      return disabledAttribute.value.intersectsRange(locale.value.range(value));
    }
    function normalizeValue(value, config22, patch, targetPriority) {
      if (!hasValue(value))
        return null;
      if (isRange.value) {
        const start2 = locale.value.toDate(value.start, {
          ...config22[0],
          fillDate: valueStart.value ?? void 0,
          patch
        });
        const end2 = locale.value.toDate(value.end, {
          ...config22[1],
          fillDate: valueEnd.value ?? void 0,
          patch
        });
        return sortRange({ start: start2, end: end2 }, targetPriority);
      }
      return locale.value.toDateOrNull(value, {
        ...config22[0],
        fillDate: dateValue.value,
        patch
      });
    }
    function denormalizeValue(value, config22) {
      if (isRange.value) {
        if (!hasValue(value))
          return null;
        return {
          start: locale.value.fromDate(value.start, config22[0]),
          end: locale.value.fromDate(value.end, config22[1])
        };
      }
      return locale.value.fromDate(value, config22[0]);
    }
    function updateValue(value, opts = {}) {
      clearTimeout(updateTimeout);
      return new Promise((resolve) => {
        const { debounce: debounce2 = 0, ...args } = opts;
        if (debounce2 > 0) {
          updateTimeout = window.setTimeout(() => {
            resolve(forceUpdateValue(value, args));
          }, debounce2);
        } else {
          resolve(forceUpdateValue(value, args));
        }
      });
    }
    function forceUpdateValue(value, {
      config: config22 = modelConfig.value,
      patch = "dateTime",
      clearIfEqual = false,
      formatInput: fInput = true,
      hidePopover: hPopover = false,
      dragging = isDragging.value,
      targetPriority,
      moveToValue: mValue = false
    } = {}) {
      const normalizedConfig = normalizeDateConfig(config22);
      let normalizedValue = normalizeValue(
        value,
        normalizedConfig,
        patch,
        targetPriority
      );
      const isDisabled = valueIsDisabled(normalizedValue);
      if (isDisabled) {
        if (dragging)
          return null;
        normalizedValue = dateValue.value;
        hPopover = false;
      } else if (normalizedValue == null && props.isRequired) {
        normalizedValue = dateValue.value;
      } else if (
        // Clear value if same value was passed
        normalizedValue != null && valuesAreEqual(dateValue.value, normalizedValue) && clearIfEqual
      ) {
        normalizedValue = null;
      }
      const valueRef = dragging ? dragValue : dateValue;
      const notify = !valuesAreEqual(valueRef.value, normalizedValue);
      valueRef.value = normalizedValue;
      if (!dragging)
        dragValue.value = null;
      const denormalizedValue = denormalizeValue(
        normalizedValue,
        modelConfig.value
      );
      if (notify) {
        watchValue = false;
        emit(dragging ? "drag" : "update:modelValue", denormalizedValue);
        vue.nextTick(() => watchValue = true);
      }
      if (hPopover && !dragging)
        hidePopover$1();
      if (fInput)
        formatInput();
      if (mValue) {
        vue.nextTick(() => moveToValue(targetPriority ?? "start"));
      }
      return denormalizedValue;
    }
    function formatInput() {
      vue.nextTick(() => {
        const config22 = normalizeDateConfig({
          type: "string",
          mask: inputMask.value
        });
        const value = denormalizeValue(
          dragValue.value || dateValue.value,
          config22
        );
        if (isRange.value) {
          inputValues.value = [value && value.start, value && value.end];
        } else {
          inputValues.value = [value, ""];
        }
      });
    }
    function onInputUpdate(inputValue2, target, opts) {
      inputValues.value.splice(target === "start" ? 0 : 1, 1, inputValue2);
      const value = isRange.value ? {
        start: inputValues.value[0],
        end: inputValues.value[1] || inputValues.value[0]
      } : inputValue2;
      const config22 = {
        type: "string",
        mask: inputMask.value
      };
      updateValue(value, {
        ...opts,
        config: config22,
        patch: inputMaskPatch.value,
        targetPriority: target,
        moveToValue: true
      });
    }
    function onInputInput(target) {
      return (e) => {
        if (!props.updateOnInput)
          return;
        onInputUpdate(e.currentTarget.value, target, {
          formatInput: false,
          hidePopover: false,
          debounce: props.inputDebounce
        });
      };
    }
    function onInputChange(target) {
      return (e) => {
        onInputUpdate(e.currentTarget.value, target, {
          formatInput: true,
          hidePopover: false
        });
      };
    }
    function onInputKeyup(e) {
      if (e.key !== "Escape")
        return;
      updateValue(dateValue.value, {
        formatInput: true,
        hidePopover: true
      });
    }
    function getDateParts2(value) {
      if (isRange.value) {
        return [
          value && value.start ? locale.value.getDateParts(value.start) : null,
          value && value.end ? locale.value.getDateParts(value.end) : null
        ];
      }
      return [value ? locale.value.getDateParts(value) : null];
    }
    function cancelDrag() {
      dragValue.value = null;
      formatInput();
    }
    function onPopoverBeforeShow(el) {
      emit("popover-will-show", el);
    }
    function onPopoverAfterShow(el) {
      emit("popover-did-show", el);
    }
    function onPopoverBeforeHide(el) {
      cancelDrag();
      emit("popover-will-hide", el);
    }
    function onPopoverAfterHide(el) {
      emit("popover-did-hide", el);
    }
    function handleDayClick(day) {
      const opts = {
        patch: "date",
        formatInput: true,
        hidePopover: true
      };
      if (isRange.value) {
        const dragging = !isDragging.value;
        if (dragging) {
          dragTrackingValue = { start: day.startDate, end: day.endDate };
        } else if (dragTrackingValue != null) {
          dragTrackingValue.end = day.date;
        }
        updateValue(dragTrackingValue, {
          ...opts,
          dragging
        });
      } else {
        updateValue(day.date, {
          ...opts,
          clearIfEqual: !props.isRequired
        });
      }
    }
    function onDayClick(day, event) {
      handleDayClick(day);
      emit("dayclick", day, event);
    }
    function onDayKeydown(day, event) {
      switch (event.key) {
        case " ":
        case "Enter": {
          handleDayClick(day);
          event.preventDefault();
          break;
        }
        case "Escape": {
          hidePopover$1();
        }
      }
      emit("daykeydown", day, event);
    }
    function onDayMouseEnter(day, event) {
      if (!isDragging.value || dragTrackingValue == null)
        return;
      dragTrackingValue.end = day.date;
      updateValue(sortRange(dragTrackingValue), {
        patch: "date",
        formatInput: true
      });
    }
    function showPopover$1(opts = {}) {
      showPopover({
        ...popover.value,
        ...opts,
        isInteractive: true,
        id: datePickerPopoverId.value
      });
    }
    function hidePopover$1(opts = {}) {
      hidePopover({
        hideDelay: 10,
        force: true,
        ...popover.value,
        ...opts,
        id: datePickerPopoverId.value
      });
    }
    function togglePopover$1(opts) {
      togglePopover({
        ...popover.value,
        ...opts,
        isInteractive: true,
        id: datePickerPopoverId.value
      });
    }
    function sortRange(range, priority) {
      const { start: start2, end: end2 } = range;
      if (start2 > end2) {
        switch (priority) {
          case "start":
            return { start: start2, end: start2 };
          case "end":
            return { start: end2, end: end2 };
          default:
            return { start: end2, end: start2 };
        }
      }
      return { start: start2, end: end2 };
    }
    function getPageForValue(isStart) {
      if (hasValue(dateValue.value)) {
        const date = isRange.value ? isStart ? valueStart.value : valueEnd.value : dateValue.value;
        return getPageAddressForDate(date, "monthly", locale.value);
      }
      return null;
    }
    async function move(target, opts = {}) {
      if (calendarRef.value == null)
        return false;
      return calendarRef.value.move(target, opts);
    }
    async function moveBy(pages, opts = {}) {
      if (calendarRef.value == null)
        return false;
      return calendarRef.value.moveBy(pages, opts);
    }
    async function moveToValue(target, opts = {}) {
      if (calendarRef.value == null)
        return false;
      const { firstPage, lastPage, move: move2 } = calendarRef.value;
      const start2 = target !== "end";
      const page = getPageForValue(start2);
      const position = start2 ? 1 : -1;
      if (!page || pageIsBetweenPages(page, firstPage, lastPage))
        return false;
      return move2(page, {
        position,
        ...opts
      });
    }
    vue.watch(
      () => props.isRange,
      (val) => {
        if (val) {
          console.warn(
            "The `is-range` prop will be deprecated in future releases. Please use the `range` modifier."
          );
        }
      },
      { immediate: true }
    );
    vue.watch(
      () => inputMask.value,
      () => formatInput()
    );
    vue.watch(
      () => props.modelValue,
      (val) => {
        if (!watchValue)
          return;
        forceUpdateValue(val, {
          formatInput: true,
          hidePopover: false
        });
      }
    );
    vue.watch(
      () => rules.value,
      () => {
        if (isObject(props.rules)) {
          forceUpdateValue(props.modelValue, {
            formatInput: true,
            hidePopover: false
          });
        }
      }
    );
    vue.watch(
      () => props.timezone,
      () => {
        forceUpdateValue(dateValue.value, { formatInput: true });
      }
    );
    const config2 = normalizeConfig2(modelConfig.value);
    dateValue.value = normalizeValue(props.modelValue, config2, "dateTime");
    vue.onMounted(() => {
      forceUpdateValue(props.modelValue, {
        formatInput: true,
        hidePopover: false
      });
    });
    vue.nextTick(() => showCalendar.value = true);
    const context = {
      ...baseCtx,
      showCalendar,
      datePickerPopoverId,
      popoverRef,
      popoverEvents,
      calendarRef,
      isRange,
      isTimeMode,
      isDateTimeMode,
      is24hr: vue.toRef(props, "is24hr"),
      hideTimeHeader: vue.toRef(props, "hideTimeHeader"),
      timeAccuracy: vue.toRef(props, "timeAccuracy"),
      isDragging,
      inputValue,
      inputEvents,
      dateParts,
      attributes,
      rules,
      move,
      moveBy,
      moveToValue,
      updateValue,
      showPopover: showPopover$1,
      hidePopover: hidePopover$1,
      togglePopover: togglePopover$1,
      onDayClick,
      onDayKeydown,
      onDayMouseEnter,
      onPopoverBeforeShow,
      onPopoverAfterShow,
      onPopoverBeforeHide,
      onPopoverAfterHide
    };
    vue.provide(contextKey, context);
    return context;
  }
  function useDatePicker() {
    const context = vue.inject(contextKey);
    if (context)
      return context;
    throw new Error(
      "DatePicker context missing. Please verify this component is nested within a valid context provider."
    );
  }
  const _amOptions = [
    { value: 0, label: "12" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
    { value: 11, label: "11" }
  ];
  const _pmOptions = [
    { value: 12, label: "12" },
    { value: 13, label: "1" },
    { value: 14, label: "2" },
    { value: 15, label: "3" },
    { value: 16, label: "4" },
    { value: 17, label: "5" },
    { value: 18, label: "6" },
    { value: 19, label: "7" },
    { value: 20, label: "8" },
    { value: 21, label: "9" },
    { value: 22, label: "10" },
    { value: 23, label: "11" }
  ];
  function createTimePicker(props) {
    const ctx = useDatePicker();
    const {
      locale,
      isRange,
      isTimeMode,
      dateParts,
      rules,
      is24hr,
      hideTimeHeader,
      timeAccuracy,
      updateValue: updateDpValue
    } = ctx;
    function updateParts(newParts) {
      newParts = Object.assign(parts.value, newParts);
      let newValue = null;
      if (isRange.value) {
        const start2 = isStart.value ? newParts : dateParts.value[0];
        const end2 = isStart.value ? dateParts.value[1] : newParts;
        newValue = { start: start2, end: end2 };
      } else {
        newValue = newParts;
      }
      updateDpValue(newValue, {
        patch: "time",
        targetPriority: isStart.value ? "start" : "end",
        moveToValue: true
      });
    }
    const isStart = vue.computed(() => props.position === 0);
    const parts = vue.computed(
      () => dateParts.value[props.position] || { isValid: false }
    );
    const partsValid = vue.computed(() => isDateParts(parts.value));
    const isValid = vue.computed(() => !!parts.value.isValid);
    const showHeader = vue.computed(() => {
      return !hideTimeHeader.value && isValid.value;
    });
    const date = vue.computed(() => {
      if (!partsValid.value)
        return null;
      let date2 = locale.value.toDate(parts.value);
      if (parts.value.hours === 24) {
        date2 = new Date(date2.getTime() - 1);
      }
      return date2;
    });
    const hours2 = vue.computed({
      get() {
        return parts.value.hours;
      },
      set(val) {
        updateParts({ hours: val });
      }
    });
    const minutes = vue.computed({
      get() {
        return parts.value.minutes;
      },
      set(val) {
        updateParts({ minutes: val });
      }
    });
    const seconds = vue.computed({
      get() {
        return parts.value.seconds;
      },
      set(val) {
        updateParts({ seconds: val });
      }
    });
    const milliseconds = vue.computed({
      get() {
        return parts.value.milliseconds;
      },
      set(val) {
        updateParts({ milliseconds: val });
      }
    });
    const isAM = vue.computed({
      get() {
        return parts.value.hours < 12;
      },
      set(value) {
        value = String(value).toLowerCase() == "true";
        let hValue = hours2.value;
        if (value && hValue >= 12) {
          hValue -= 12;
        } else if (!value && hValue < 12) {
          hValue += 12;
        }
        updateParts({ hours: hValue });
      }
    });
    const options = vue.computed(
      () => getDatePartsOptions(parts.value, rules.value[props.position])
    );
    const amHourOptions = vue.computed(() => {
      return _amOptions.filter(
        (opt) => options.value.hours.some((ho) => ho.value === opt.value)
      );
    });
    const pmHourOptions = vue.computed(() => {
      return _pmOptions.filter(
        (opt) => options.value.hours.some((ho) => ho.value === opt.value)
      );
    });
    const hourOptions = vue.computed(() => {
      if (is24hr.value)
        return options.value.hours;
      if (isAM.value)
        return amHourOptions.value;
      return pmHourOptions.value;
    });
    const isAMOptions = vue.computed(() => {
      const result = [];
      if (arrayHasItems(amHourOptions.value))
        result.push({ value: true, label: "AM" });
      if (arrayHasItems(pmHourOptions.value))
        result.push({ value: false, label: "PM" });
      return result;
    });
    return {
      ...ctx,
      showHeader,
      timeAccuracy,
      parts,
      isValid,
      date,
      hours: hours2,
      minutes,
      seconds,
      milliseconds,
      options,
      hourOptions,
      isAM,
      isAMOptions,
      is24hr
    };
  }
  const _hoisted_1 = {
    key: 0,
    class: "vc-time-header"
  };
  const _hoisted_2 = { class: "vc-time-weekday" };
  const _hoisted_3 = { class: "vc-time-month" };
  const _hoisted_4 = { class: "vc-time-day" };
  const _hoisted_5 = { class: "vc-time-year" };
  const _hoisted_6 = { class: "vc-time-select-group" };
  const _hoisted_7 = /* @__PURE__ */ vue.createElementVNode("span", { class: "vc-time-colon" }, ":", -1);
  const _hoisted_8 = /* @__PURE__ */ vue.createElementVNode("span", { class: "vc-time-colon" }, ":", -1);
  const _hoisted_9 = /* @__PURE__ */ vue.createElementVNode("span", { class: "vc-time-decimal" }, ".", -1);
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "TimePicker",
    props: {
      position: null
    },
    setup(__props, { expose }) {
      const props = __props;
      const timePicker = createTimePicker(props);
      expose(timePicker);
      const {
        locale,
        isValid,
        date,
        hours: hours2,
        minutes,
        seconds,
        milliseconds,
        options,
        hourOptions,
        isTimeMode,
        isAM,
        isAMOptions,
        is24hr,
        showHeader,
        timeAccuracy
      } = timePicker;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          class: vue.normalizeClass(["vc-time-picker", [{ "vc-invalid": !vue.unref(isValid), "vc-attached": !vue.unref(isTimeMode) }]])
        }, [
          vue.renderSlot(_ctx.$slots, "time-header", {}, () => [
            vue.unref(showHeader) && vue.unref(date) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
              vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(vue.unref(locale).formatDate(vue.unref(date), "WWW")), 1),
              vue.createElementVNode("span", _hoisted_3, vue.toDisplayString(vue.unref(locale).formatDate(vue.unref(date), "MMM")), 1),
              vue.createElementVNode("span", _hoisted_4, vue.toDisplayString(vue.unref(locale).formatDate(vue.unref(date), "D")), 1),
              vue.createElementVNode("span", _hoisted_5, vue.toDisplayString(vue.unref(locale).formatDate(vue.unref(date), "YYYY")), 1)
            ])) : vue.createCommentVNode("", true)
          ]),
          vue.createElementVNode("div", _hoisted_6, [
            vue.createVNode(_sfc_main$d, {
              name: "Clock",
              size: "17"
            }),
            vue.createVNode(_sfc_main$2, {
              modelValue: vue.unref(hours2),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(hours2) ? hours2.value = $event : null),
              modelModifiers: { number: true },
              options: vue.unref(hourOptions),
              "align-right": ""
            }, null, 8, ["modelValue", "options"]),
            vue.unref(timeAccuracy) > 1 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
              _hoisted_7,
              vue.createVNode(_sfc_main$2, {
                modelValue: vue.unref(minutes),
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.isRef(minutes) ? minutes.value = $event : null),
                modelModifiers: { number: true },
                options: vue.unref(options).minutes,
                "align-left": vue.unref(timeAccuracy) === 2
              }, null, 8, ["modelValue", "options", "align-left"])
            ], 64)) : vue.createCommentVNode("", true),
            vue.unref(timeAccuracy) > 2 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
              _hoisted_8,
              vue.createVNode(_sfc_main$2, {
                modelValue: vue.unref(seconds),
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => vue.isRef(seconds) ? seconds.value = $event : null),
                modelModifiers: { number: true },
                options: vue.unref(options).seconds,
                "align-left": vue.unref(timeAccuracy) === 3
              }, null, 8, ["modelValue", "options", "align-left"])
            ], 64)) : vue.createCommentVNode("", true),
            vue.unref(timeAccuracy) > 3 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
              _hoisted_9,
              vue.createVNode(_sfc_main$2, {
                modelValue: vue.unref(milliseconds),
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(milliseconds) ? milliseconds.value = $event : null),
                modelModifiers: { number: true },
                options: vue.unref(options).milliseconds,
                "align-left": ""
              }, null, 8, ["modelValue", "options"])
            ], 64)) : vue.createCommentVNode("", true),
            !vue.unref(is24hr) ? (vue.openBlock(), vue.createBlock(_sfc_main$2, {
              key: 3,
              modelValue: vue.unref(isAM),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => vue.isRef(isAM) ? isAM.value = $event : null),
              options: vue.unref(isAMOptions)
            }, null, 8, ["modelValue", "options"])) : vue.createCommentVNode("", true)
          ])
        ], 2);
      };
    }
  });
  const _sfc_main = vue.defineComponent({
    name: "DatePicker",
    inheritAttrs: false,
    emits,
    props: propsDef,
    setup(props, ctx) {
      const datePicker = createDatePicker(props, ctx);
      const { slots, attrs } = ctx;
      const {
        isTimeMode,
        isRange,
        isDateTimeMode,
        color,
        displayMode,
        dateParts,
        datePickerPopoverId,
        attributes,
        calendarRef,
        popoverRef,
        showCalendar,
        onDayClick: onDayclick,
        onDayMouseEnter: onDaymouseenter,
        onDayKeydown: onDaykeydown,
        onPopoverBeforeShow,
        onPopoverAfterShow,
        onPopoverBeforeHide,
        onPopoverAfterHide
      } = datePicker;
      ctx.expose(datePicker);
      const slotCtx = vue.reactive(omit(datePicker, "calendarRef", "popoverRef"));
      const timePicker = () => {
        const positions = isRange.value ? [0, 1] : [0];
        return positions.map((position) => vue.h(_sfc_main$1, { position }));
      };
      const calendar = () => {
        if (!dateParts.value)
          return null;
        const renderSlots = isDateTimeMode.value ? { ...slots, footer: timePicker } : slots;
        return vue.h(
          Calendar,
          {
            ...attrs,
            attributes: attributes.value,
            ref: calendarRef,
            onDayclick,
            onDaymouseenter,
            onDaykeydown
          },
          renderSlots
        );
      };
      const content = () => {
        if (isTimeMode.value) {
          return vue.h(
            "div",
            {
              class: `vc-container vc-bordered vc-${color.value} vc-${displayMode.value}`
            },
            [timePicker()]
          );
        }
        if (showCalendar.value) {
          return calendar();
        }
        return void 0;
      };
      if (!slots.default)
        return content;
      return () => [
        // Popover trigger
        slots.default(slotCtx),
        // Popover content
        vue.h(
          Popover,
          {
            id: datePickerPopoverId.value,
            placement: "bottom-start",
            class: `vc-date-picker-content vc-${color.value} vc-${displayMode.value}`,
            ref: popoverRef,
            "onBefore-show": onPopoverBeforeShow,
            "onAfter-show": onPopoverAfterShow,
            "onBefore-hide": onPopoverBeforeHide,
            "onAfter-hide": onPopoverAfterHide
          },
          {
            default: content
          }
        )
      ];
    }
  });
  const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    Calendar,
    DatePicker: _sfc_main,
    Popover,
    PopoverRow
  }, Symbol.toStringTag, { value: "Module" }));
  const install = (app, defaults2 = {}) => {
    app.use(setupDefaults, defaults2);
    const prefix = app.config.globalProperties.$VCalendar.componentPrefix;
    for (const componentKey in components) {
      const component = components[componentKey];
      app.component(`${prefix}${component.name}`, component);
    }
  };
  const index = { install };
  const application = document.getElementById(app_id);
  console.log("application : ", application);
  if (application.getAttribute(calendar_selector)) {
    store.commit("SET_STEP_URL", { url: application.getAttribute(calendar_selector), index: 0 });
  }
  if (application.getAttribute(schedule_selector)) {
    store.commit("SET_STEP_URL", { url: application.getAttribute(schedule_selector), index: 1 });
  }
  if (application.getAttribute(save_data_selector)) {
    store.commit("SET_STEP_URL", { url: application.getAttribute(save_data_selector), index: 2 });
  }
  const myApp = vue.createApp(App, {
    mounted() {
      console.log("Application montée");
    }
  });
  myApp.use(store);
  myApp.use(PrimeVue);
  myApp.use(index, {});
  myApp.mount("#app");
});
//# sourceMappingURL=bookingSystem.umd.js.map
