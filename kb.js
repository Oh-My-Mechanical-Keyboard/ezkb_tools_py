'use strict';
function s(e, t, n, r, a, o, i) {
  try {
    var l = e[o](i), s = l.value
  } catch (e) {
    return void n(e)
  }
  l.done ? t(s) : Promise.resolve(s).then(r, a)
}
function x(l) {
  return function() {
    var e = this, i = arguments;
    return new Promise(function(t, n) {
      var r = l.apply(e, i);
      function a(e) {
        s(r, t, n, a, o, 'next', e)
      }
      function o(e) {
        s(r, t, n, a, o, 'throw', e)
      }
      a(void 0)
    })
  }
}
function m(e, t) {
  var n = 'undefined' != typeof Symbol && e[Symbol.iterator] || e['@@iterator'];
  if (!n) {
    if (Array.isArray(e) || (n = l(e)) ||
        t && e && 'number' == typeof e.length) {
      n && (e = n);
      var r = 0, t = function() {};
      return {
        s: t, n: function() {
          return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
        }, e: function(e) {
          throw e
        }, f: t
      }
    }
    throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
  }
  var a, o = !0, i = !1;
  return {
    s: function() {
      n = n.call(e)
    }, n: function() {
      var e = n.next();
      return o = e.done, e
    }, e: function(e) {
      i = !0, a = e
    }, f: function() {
      try {
        o || null == n.return || n.return()
      } finally {
        if (i) throw a
      }
    }
  }
}
function l(e, t) {
  if (e) {
    if ('string' == typeof e) return r(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return 'Map' ===
                (n = 'Object' === n && e.constructor ? e.constructor.name :
                                                       n) ||
            'Set' === n ?
        Array.from(e) :
        'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ?
        r(e, t) :
        void 0
  }
}
function r(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r
}
!function() {
  var h = [
    {
      'background-image':
          'radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% )'
    },
    {
      'background-size': '100% 100%',
      'background-position': '0px 0px,0px 0px,0px 0px,0px 0px,0px 0px',
      'background-image':
          'repeating-linear-gradient(315deg, #00FFFF2E 77%, #073AFF00 100%),repeating-radial-gradient(75% 75% at 238% 218%, #00FFFF12 30%, #073AFF14 65%),radial-gradient(99% 99% at 109% 2%, #0092FFFF 0%, #073AFF00 100%),radial-gradient(99% 99% at 21% 78%, #55008BFF 0%, #07F0FF00 100%),radial-gradient(160% 154% at 711px -303px, #007FFFFF 0%, #002EDDFF 100%)'
    },
    {
      'background-image':
          'radial-gradient( circle farthest-corner at -4% -12.9%, #686875 0.3%, #191923 90.2% )'
    },
    {
      'background-image':
          'radial-gradient( circle farthest-corner at -4% -12.9%,  rgb(238, 178, 123) 0.3%, rgb(114, 43, 54) 90.2% )'
    },
    {
      'background-image':
          'radial-gradient( circle farthest-corner at -4% -12.9%,  rgb(1, 96, 105) 0.3%, rgb(0, 72, 95) 90.2% )'
    },
    {
      'background-image':
          'radial-gradient( circle farthest-corner at -4% -12.9%,  rgb(146, 11, 126) 0.3%, rgb(52, 29, 49) 90.2% )'
    },
    {
      'background-image':
          'radial-gradient( circle farthest-corner at -4% -12.9%, #45b5e0 0.3%, #066187 90.2% )'
    },
    {'background-color': '#233c5b'}, {
      'background-image':
          'linear-gradient( 109.6deg,  rgba(48,207,208,1) 11.2%, rgba(51,8,103,1) 92.5% )'
    },
    {'background-color': '#111111'},
    {background: 'linear-gradient(-30deg, #800080, #ffc0cb)'},
    {background: 'linear-gradient(-30deg, #184e68 0%,#57ca85 100%)'}, {
      'background-image':
          'radial-gradient( circle farthest-corner at 7.2% 13.6%,  rgba(37,249,245,1) 0%, rgba(8,70,218,1) 90% )'
    },
    {
      background:
          'radial-gradient(circle at center top, #00ffff, rgba(0, 0, 0, 0)), radial-gradient(circle at bottom right, #ffff00, rgba(255, 0, 0, 0)), radial-gradient(circle at bottom left, #ff00ff, rgba(0, 0, 0, 0))',
      'background-blend-mode': 'darken'
    },
    {
      'background-size': '100% 100%',
      'background-position': '0px 0px,0px 0px,0px 0px,0px 0px,0px 0px',
      'background-image':
          'repeating-radial-gradient(75% 75% at 700% 300%, #00FFFF12 30%, #073AFF14 74%),radial-gradient(160% 154% at 711px -303px, #FFC0CBFF 0%, #F30AB2FF 100%)'
    }
  ];
  var e = angular.module(
      'kbApp',
      [
        'ngSanitize', 'ngCookies', 'ui.utils', 'ui.bootstrap',
        'ui.bootstrap.tooltip', 'ui.ace', 'ngFileUpload', 'ang-drag-drop',
        'colorpicker.module', 'toastr'
      ],
      function($tooltipProvider) {
        $tooltipProvider.options({animation: !1, appendToBody: !0})
      });
  e.config(function(toastrConfig) {
    angular.extend(toastrConfig, {
      allowHtml: !0,
      closeButton: !0,
      closeHtml: '<i class="icomoon iconf-top-close"></i>',
      containerId: 'toast-container',
      extendedTimeOut: 5e3,
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      messageClass: 'toast-message',
      positionClass: 'toast-top-right',
      preventOpenDuplicates: !1,
      tapToDismiss: !0,
      timeOut: 5e3,
      titleClass: 'toast-title',
      toastClass: 'toast'
    })
  }),
      e.controller(
          'kbCtrl',
          [
            '$scope', '$http', '$location', '$timeout', '$sce', '$sanitize',
            '$modal', '$cookies', '$confirm', '$q', 'toastr', '$templateCache',
            function(
                $scope, $http, $location, $timeout, $sce, $sanitize, $modal,
                $cookies, $confirm, $q, toastr, $templateCache) {
              var e = !1;
              $scope.version = '1.0';
              var t = $eda.load_settings();
              function l(e, t) {
                var n, r;
                if (e)
                  if (t.shiftKey && 0 < $scope.selectedKeys.length &&
                          ($scope.selectedKeys
                               .map(function(e) {
                                 return $scope.keys().indexOf(e)
                               })
                               .sort(function(e, t) {
                                 return parseInt(e) - parseInt(t)
                               }),
                           n = $scope.keys().indexOf(e),
                           r = $scope.keys().indexOf(
                               $scope.selectedKeys.last()),
                           $scope.selectedKeys.pop()),
                      t.ctrlKey || t.altKey || $scope.unselectAll(),
                      void 0 === r || void 0 === n) {
                    t = $scope.selectedKeys.indexOf(e);
                    0 <= t ?
                        ($scope.selectedKeys.splice(t, 1),
                         $scope.selectedKeys.length < 1 ?
                             $scope.multi = {} :
                             $scope.multi =
                                 angular.copy($scope.selectedKeys.last())) :
                        ($scope.selectedKeys.push(e),
                         $scope.multi = angular.copy(e))
                  } else if (n < r)
                    for (var a = r; n <= a; --a)
                      l($scope.keys()[a], {ctrlKey: !0});
                  else
                    for (a = r; a <= n; ++a) l($scope.keys()[a], {ctrlKey: !0})
              }
              $scope
                  .bgStyle = h[t.bgIndex],
            $scope.setViewMode =
                  function(e) {
              if (1 != e && 2 != e) throw 'unnown viewmode value ' + e;
              var t = $eda.load_settings();
              t.viewMode = e, $eda.save_settings(t), $scope.rerenderKeys(),
              $scope.rerenderLines()
            },
            $scope.getViewMode =
                  function() {
              return $eda.load_settings().viewMode
            },
            $scope.getProfile = $renderKey.getProfile, $scope.showFooter = !1,
            $scope.switchFooter =
                  function() {
              $scope.showFooter = !$scope.showFooter
            },
            $scope.openExternal =
                  function(e) {
              window.open(e)
            },
            $scope.lang = $eda.current_language,
            $scope.switchLang = $eda.switch_lang, $scope.$t = $eda.$t,
            $scope.selTab = 0, $scope.selectedKeys = [], $scope.multi = {},
            $scope.meta = {}, $scope.sizeStep = .25, $scope.moveStep = .25,
            $scope.keyboard = {keys: [], meta: {}},
            $scope.keys =
                  function(e) {
              return e && ($scope.keyboard.keys = e), $scope.keyboard.keys
            },
            $scope.customStylesException = '', $scope.customStyles = '',
            $scope.customGlyphs = [],
            $scope.unselectAll =
                  function() {
              $scope.selectedKeys = [], $scope.multi = {}
            },
            $scope.selectAll =
                  function(e) {
              e && (e.preventDefault(), e.stopPropagation()),
                  $eda.serial.sortKeys($scope.keys()), $scope.unselectAll(),
                  $scope.keys().forEach(function(e) {
                    $scope.selectedKeys.push(e)
                  }),
                  0 < $scope.keys().length &&
                  ($scope.multi = angular.copy($scope.keys().last()))
            },
            $scope.transPreset =
                  function(e) {
              return $scope.$t('preset')[e]
            },
            $scope.save =
                  function(e) {
              $scope.downloadNinefox()
            },
            $scope.canSave =
                  function() {
              return $scope.dirty && $scope.user && $scope.user.id
            },
            $scope.getFilename =
                  function() {
              var e = $scope.keyboard.meta.name.toLowerCase();
              return e = (e = e.replace(
                              /[\/\?<>\\:\*\|": \t\x00-\x1f\x80-\x9f\.]+/g,
                              '-'))
                             .replace(
                                 /^(con|prn|aux|nul|com[0-9]|lpt[0-9])$/, ''),
                     console.log(e), e || 'keyboard'
            },
            $scope.downloadNinefox =
                  function() {
              var e = $eda.export_nf_desgin($scope.keyboard.keys),
                  e = new Blob([e], {type: 'application/json'});
              saveAs(e, $scope.getFilename() + '.nf-design')
            },
            $scope.downloadDxf =
                  function() {
              var e = $eda.eda_export_dxf($scope.keyboard.keys),
                  e = new Blob([e], {type: 'application/dxf'});
              saveAs(e, $scope.getFilename() + '.dxf')
            },
            $scope.downloadJson =
                  function() {
              var e = angular.toJson(
                      $eda.serial.serialize($scope.keyboard), !0),
                  e = new Blob([e], {type: 'application/json'});
              saveAs(e, $scope.getFilename() + '.json')
            },
            $scope.changeBg =
                  function() {
              var e = $eda.load_settings();
              e.bgIndex = (e.bgIndex + 1) % h.length, $eda.save_settings(e),
              $scope.bgStyle = h[e.bgIndex]
            },
            $scope.openFile =
                  function() {
              $timeout(function() {
                angular.element('#uploadJsonInput').trigger('click')
              }, 1)
            },
            $scope.fileInputChange =
                  function() {
              var a, e, t = angular.element('#uploadJsonInput')[0];
              t ? ((a = t.files[0]) &&
                       ((e = new FileReader).onload =
                            function() {
                              var t = x(regeneratorRuntime.mark(function e(t) {
                                var n, r;
                                return regeneratorRuntime.wrap(function(e) {
                                  for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (n = t.target.result,
                                            '.zip' ==
                                                $eda.common.find_ext(a.name))
                                          return e.next = 4,
                                                 $eda.read_nf_desgin_from_zip(
                                                     new Blob([n]));
                                        e.next = 5;
                                        break;
                                      case 4:
                                        n = e.sent;
                                      case 5:
                                        if ((r = JSON.parse(n)).preset) {
                                          e.next = 9;
                                          break
                                        }
                                        return console.log('incorrect format'),
                                               e.abrupt('return');
                                      case 9:
                                        $scope.loadNinefox(r.preset),
                                            console.log('dddddddd'),
                                            toastr.success($scope.$t(
                                                'fileLoaded', [a.name]));
                                      case 12:
                                      case 'end':
                                        return e.stop()
                                    }
                                }, e)
                              }));
                              return function(e) {
                                return t.apply(this, arguments)
                              }
                            }(),
                        '.zip' == $eda.common.find_ext(a.name) ?
                            e.readAsArrayBuffer(a) :
                            e.readAsText(a)),
                   t.value = '') :
                  console.log('file cannot find dom')
            },
            $scope.downloadEdaZip =
                  function() {
              $scope.showPublishDialog()
            },
            $scope.downloadEdaZipImpl = x(regeneratorRuntime.mark(function e() {
              var t, n;
              return regeneratorRuntime.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                      if (e.prev = 0, $scope.eda_inited) {
                        e.next = 4;
                        break
                      }
                      return toastr.error($scope.$t('pcbInit')),
                             e.abrupt('return');
                    case 4:
                      return toastr.info($scope.$t('pubStart')),
                             e.next = 7, $eda.common.sleep(50);
                    case 7:
                      return t = $eda.load_settings(), e.next = 10,
                             $eda.eda_export_zip($scope.keyboard.keys, {
                               upper: t.circuit_upper,
                               delta: t.circuit_delta
                             });
                    case 10:
                      if (n = e.sent) {
                        e.next = 15;
                        break
                      }
                      return console.log('cancel or error for export'),
                             toastr.warning($scope.$t('pubWarn')),
                             e.abrupt('return');
                    case 15:
                      toastr.success($scope.$t('pubSuccess')),
                          saveAs(n, 'ninefox_design.zip'), e.next = 23;
                      break;
                    case 19:
                      e.prev = 19, e.t0 = e.catch(0), console.log(e.t0),
                      toastr.error($scope.$t('pubError', [e.t0]));
                    case 23:
                    case 'end':
                      return e.stop()
                  }
              }, e, null, [[0, 19]])
            })),
            $scope.uploadJson =
                  function(e, t) {
              var n;
              e && e[0] && ((n = new FileReader).onload = function(e) {
                d('upload', function() {
                  $scope.$apply(function() {
                    $scope.deserializeAndRender(
                        $eda.serial.fromJsonL(e.target.result))
                  })
                })
              }, n.readAsText(e[0]))
            },
            $scope.getTextColor =
                  function(e) {
              if ('~' == e.substring(0, 1) || 'D' == e.substring(0, 1))
                return '#ffffff';
              return e.replace(/.*\(/, '').replace(/\).*/, '')
            },
            $scope.moveFromId = null, $scope.moveToId = null,
            $scope.serialized = '', $scope.serializedObjects = [],
            $scope.layouts = {}, $scope.samples = {},
            $scope.themes = $eda.theme,
            $http.get('layouts.json').success(function(e) {
              $scope.ninefox = e.ninefox, $scope.sel = e.sel,
              $scope.mat = function(e) {
                var t, n = m(e);
                try {
                  for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    if ('matrix_22x8' == r.name) return r.data
                  }
                } catch (e) {
                  n.e(e)
                } finally {
                  n.f()
                }
                throw 'invalid mat 22x8'
              }(e.mat), $scope.layouts = e.presets, $scope.samples = e.samples;
              var t, n = $eda.load_settings().preset, r = !1,
                     a = m($scope.ninefox);
              try {
                for (a.s(); !(t = a.n()).done;)
                  if (t.value.name == n) {
                    r = !0;
                    break
                  }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              n && 0 != r || (n = $eda.default_settings().preset),
                  $scope.loadMat($scope.mat);
              var o, i = m($scope.ninefox);
              try {
                for (i.s(); !(o = i.n()).done;) {
                  var l = o.value;
                  if (l.name == n) {
                    $scope.loadNinefox(l);
                    break
                  }
                }
              } catch (e) {
                i.e(e)
              } finally {
                i.f()
              }
              $scope.selChooseArea('standard104:base', $scope.$t('tabMain'))
            }),
            $eda.init(function(e) {
                  return new Promise(function(t, n) {
                    $http(e)
                        .success(function(e) {
                          t(e)
                        })
                        .error(function(e) {
                          console.log('error $http'), n(e)
                        })
                  })
                }).then(function() {
              $scope.eda_inited = !0, $eda.logStat()
            }),
            $scope.palette = {}, $scope.picker = {},
            $scope.pickerSelection = {};
              function s(e) {
                e.html = $sce.trustAsHtml($renderKey.html(e, $sanitize))
              }
              function r() {
                var e, n;
                $scope.deserializeException = '',
                $scope.serializedObjects =
                    $eda.serial.serialize($scope.keyboard),
                $scope.serialized =
                    (e = $scope.serializedObjects, n = [],
                     e.forEach(function(e, t) {
                       (0 < t || e instanceof Array) &&
                           n.push($eda.serial.toJsonL(e))
                     }),
                     n.join(',\n') + '\n')
              }
              $scope.kbHeight = 0,
              $scope.calcKbHeight =
                  function() {
                var t = 0, n = 0;
                $scope.keys().forEach(function(e) {
                  t = Math.max(t, e.bbox.x2), n = Math.max(n, e.bbox.y2)
                }),
                    $scope.kbWidth = t, $scope.kbHeight = n,
                    $scope.kbFullHeight = n,
                    ($scope.keyboard.meta.name ||
                     $scope.keyboard.meta.author) &&
                    ($scope.kbFullHeight += 32)
              },
              $scope.rerenderKeys =
                  function() {
                angular.forEach($scope.keys(), function(e) {
                  e.x = e.x, s(e)
                })
              },
              $scope.chooseTheme =
                  function(e) {
                var t = $eda.load_settings();
                t.theme = e.name, $eda.save_settings(t), $scope.rerenderKeys()
              },
              $scope.isCurrentTheme =
                  function(e) {
                return $eda.load_settings().theme == e
              },
              $scope.rerenderLines =
                  function() {
                if (2 == $eda.load_settings().viewMode) {
                  var e = $scope.keys(), t = $eda.connect_lines(e);
                  $('#nf-lines').empty();
                  var n, r = m(t);
                  try {
                    for (r.s(); !(n = r.n()).done;) {
                      var a =
                              function(e) {
                        var t, n;
                        switch (e.orient) {
                          case 'up':
                            t = e.centerx - 6, n = e.centery - 7;
                            break;
                          case 'down':
                            t = e.centerx + 6, n = e.centery + 7;
                            break;
                          case 'left':
                            t = e.centerx - 6, n = e.centery + 3;
                            break;
                          case 'right':
                            t = e.centerx + 8, n = e.centery - 4
                        }
                        return {
                          x: t, y: n
                        }
                      },
                          o = n.value, i = o.substring(0, 2),
                          l = o.substring(2, 4), s = $eda.find_key_by_id(e, i),
                          c = $eda.find_key_by_id(e, l),
                          d = $renderKey.keyRenderParms(s),
                          u = $renderKey.keyRenderParms(c), f = a(d), p = a(u);
                      $('#nf-lines').line(f.x, f.y, p.x, p.y, {
                        stroke: 1,
                        color: 'white',
                        zindex: 1
                      })
                    }
                  } catch (e) {
                    r.e(e)
                  } finally {
                    r.f()
                  }
                } else
                  $('#nf-lines').empty()
              },
              $scope.deserializeAndRender =
                  function(e, t) {
                $scope.serializedObjects = e;
                angular.copy($scope.keyboard.meta);
                $scope.keyboard = $eda.serial.deserialize(e),
                $scope.keys().forEach(function(e) {
                  s(e)
                }),
                $scope.rerenderLines()
              },
              $scope.$on(
                  '$locationChangeStart',
                  function(e, t, n) {
                    '' === $location.path() && e.preventDefault()
                  }),
              $renderKey.init($templateCache), $scope.deserializeAndRender([]);
              var a = [], o = [], i = !1;
              $scope.canUndo = function() {
                return 0 < a.length
              }, $scope.canRedo = function() {
                return 0 < o.length
              }, $scope.dirty = !1, $scope.saved = !1, $scope.saveError = '';
              var c = $scope.$t('dirty');
              function d(e, t) {
                var n = 0 < a.length ? a.last() : null;
                null !== n && i && n.type === e ||
                    (n = {
                      type: e,
                      original: angular.copy($scope.keyboard),
                      open: !0,
                      dirty: $scope.dirty
                    },
                     a.push(n), 32 < a.length && a.shift()),
                    i = !0;
                try {
                  t()
                } finally {
                  $scope.currentGist || $location.path('').hash('').replace(),
                      n.modified = angular.copy($scope.keyboard), n.open = !1,
                      o = [], 'rawdata' !== e && r(), $scope.dirty = !0,
                      $scope.saved = !1, $scope.saveError = '',
                      $scope.loadError = !1
                }
              }
              function n() {
                r(), $scope.keys().forEach(function(e) {
                  s(e)
                }),
                    $scope.rerenderLines(), $scope.unselectAll()
              }
              function u(e, t, n) {
                var r = {
                  _: function() {
                    return n
                  },
                  x: function() {
                    return Math.max(0, Math.min(36, n))
                  },
                  y: function() {
                    return Math.max(0, Math.min(36, n))
                  },
                  x2: function() {
                    return Math.max(
                        -Math.abs(e.width - e.width2),
                        Math.min(Math.abs(e.width - e.width2), n))
                  },
                  y2: function() {
                    return Math.max(
                        -Math.abs(e.height - e.height2),
                        Math.min(Math.abs(e.height - e.height2), n))
                  },
                  width: function() {
                    return Math.max(.5, Math.min(24, n))
                  },
                  height: function() {
                    return Math.max(.5, Math.min(24, n))
                  },
                  width2: function() {
                    return Math.max(.5, Math.min(24, n))
                  },
                  height2: function() {
                    return Math.max(.5, Math.min(24, n))
                  },
                  textSize: function() {
                    return Math.max(1, Math.min(9, n))
                  },
                  rotation_angle: function() {
                    return Math.max(-180, Math.min(180, n))
                  },
                  rotation_x: function() {
                    return Math.max(0, Math.min(36, n))
                  },
                  rotation_y: function() {
                    return Math.max(0, Math.min(36, n))
                  },
                  'meta.radii': function() {
                    var e = n.indexOf(';');
                    return 0 <= e ? n.substring(0, e) : n
                  }
                };
                return (r[t] || r._)()
              }
              function f(e, t, n, r) {
                var a = {
                  _: function() {
                    e[t] = n
                  },
                  width: function() {
                    e.width = n,
                    (!e.stepped || e.width > e.width2) && (e.width2 = n)
                  },
                  height: function() {
                    e.height = n,
                    (!e.stepped || e.height > e.height2) && (e.height2 = n)
                  },
                  textColor: function() {
                    r < 0 ? (e.default.textColor = n, e.textColor = []) :
                            e.textColor[r] = n
                  },
                  textSize: function() {
                    r < 0 ? (e.default.textSize = n, e.textSize = []) :
                            e.textSize[r] = n
                  },
                  labels: function() {
                    e.labels[r] = n
                  },
                  stepped: function() {
                    e.decal ||
                        (e[t] = n) && e.width === e.width2 &&
                            (1 < e.width ? e.width = Math.max(1, e.width - .5) :
                                           e.width2 = e.width + .5)
                  },
                  nub: function() {
                    e.decal || (e[t] = n)
                  },
                  ghost: function() {
                    e.decal || (e[t] = n)
                  },
                  decal: function() {
                    e[t] = n, e.x2 = e.y2 = 0, e.width2 = e.width,
                    e.height2 = e.height, e.nub = e.stepped = e.ghost = !1
                  },
                  rotation_angle: function() {
                    e.rotation_angle = n,
                    e.rotation_x = $scope.multi.rotation_x,
                    e.rotation_y = $scope.multi.rotation_y
                  },
                  sm: function() {
                    (n = n === $scope.meta.switchMount ? '' : n) != e.sm &&
                        (e.sm = n, e.sb = e.st = '')
                  },
                  sb: function() {
                    (n = n === $scope.meta.switchBrand ? '' : n) != e.sb &&
                        (e.sb = n, e.st = '')
                  },
                  st: function() {
                    (n = n === $scope.meta.switchType ? '' : n) != e.st &&
                        (e.st = n)
                  }
                };
                return (a[t] || a._)()
              }
              window.onbeforeunload = function(e) {
                if ($scope.dirty) return c
              }, $scope.undo = function() {
                var e;
                $scope.canUndo() &&
                    (e = a.pop(), $scope.keyboard = angular.copy(e.original),
                     n(e.type), o.push(e), $scope.dirty = e.dirty)
              }, $scope.redo = function() {
                var e;
                $scope.canRedo() &&
                    (e = o.pop(), $scope.keyboard = angular.copy(e.modified),
                     n(e.type), a.push(e), $scope.dirty = !0)
              }, $scope.updateMulti = function(t, n) {
                var r;
                null == $scope.multi[t] || $scope.selectedKeys.length <= 0 ||
                    (r = n < 0 ?
                         $scope.multi.default[t] :
                         void 0 !== n ? $scope.multi[t][n] : $scope.multi[t],
                     u($scope.multi, t, r) === r && d('update', function() {
                       $scope.selectedKeys.forEach(function(e) {
                         f(e, t, r, n), s(e)
                       }),
                           $scope.rerenderLines(),
                           $scope.multi =
                               angular.copy($scope.selectedKeys.last())
                     }))
              }, $scope.setMulti = function(e, t) {
                $scope.multi[e] = t, $scope.updateMulti(e)
              }, $scope.validateMulti = function(e, t) {
                null == $scope.multi[e] && ($scope.multi[e] = '');
                var n = t < 0 ?
                    $scope.multi.default[e] :
                    void 0 !== t ? $scope.multi[e][t] : $scope.multi[e],
                    r = u($scope.multi, e, n);
                r !== n &&
                    (t < 0 ? $scope.multi.default[e] = r :
                             void 0 !== t ? $scope.multi[e][t] = r :
                                            $scope.multi[e] = r,
                     $scope.updateMulti(e, t))
              }, r(), $scope.moveKeys = function(t, n, e) {
                if (e.preventDefault(), e.stopPropagation(),
                    !($scope.selectedKeys.length < 1)) {
                  if (t < 0 || n < 0) {
                    var r = !0;
                    if ($scope.selectedKeys.forEach(function(e) {
                          (e.x + t < 0 || e.y + n < 0 || e.x + e.x2 + t < 0 ||
                           e.y + e.y2 + n < 0) &&
                              (r = !1)
                        }),
                        !r)
                      return
                  }
                  d('move', function() {
                    $scope.selectedKeys.forEach(function(e) {
                      e.x = Math.round10(Math.max(0, e.x + t), -2),
                      e.y = Math.round10(Math.max(0, e.y + n), -2), s(e)
                    }),
                        $scope.rerenderLines(),
                        $scope.multi = angular.copy($scope.selectedKeys.last())
                  }), 0 !== n && $scope.calcKbHeight()
                }
              }, $scope.sizeKeys = function(t, n, e) {
                e.preventDefault(), e.stopPropagation(),
                    $scope.selectedKeys.length < 1 ||
                    (d('size',
                       function() {
                         $scope.selectedKeys.forEach(function(e) {
                           f(e, 'width',
                             u(e, 'width',
                               Math.round10(Math.max(1, e.width + t), -2))),
                               f(e, 'height',
                                 u(e, 'height',
                                   Math.round10(
                                       Math.max(1, e.height + n), -2))),
                               s(e)
                         }),
                             $scope.rerenderLines(),
                             $scope.multi =
                                 angular.copy($scope.selectedKeys.last())
                       }),
                     0 !== n && $scope.calcKbHeight())
              }, $scope.rotateKeys = function(n, e) {
                e.preventDefault(), e.stopPropagation(),
                    $scope.selectedKeys.length < 1 ||
                    (d('rotate',
                       function() {
                         $scope.selectedKeys.forEach(function(e) {
                           for (var t = (e.rotation_angle + n + 360) % 360;
                                180 < t;)
                             t -= 360;
                           f(e, 'rotation_angle', Math.round(t)), s(e)
                         }),
                             $scope.rerenderLines(),
                             $scope.multi =
                                 angular.copy($scope.selectedKeys.last())
                       }),
                     $scope.calcKbHeight())
              }, $scope.moveCenterKeys = function(t, n, e) {
                e.preventDefault(), e.stopPropagation(),
                    $scope.selectedKeys.length < 1 ||
                    (d('moveCenter',
                       function() {
                         $scope.selectedKeys.forEach(function(e) {
                           f(e, 'rotation_x',
                             u(e, 'rotation_x',
                               Math.round10($scope.multi.rotation_x + t, -2))),
                               f(e, 'rotation_y',
                                 u(e, 'rotation_y',
                                   Math.round10(
                                       $scope.multi.rotation_y + n, -2))),
                               s(e)
                         }),
                             $scope.rerenderLines(),
                             $scope.multi =
                                 angular.copy($scope.selectedKeys.last())
                       }),
                     $scope.calcKbHeight())
              };
              $scope
                  .isCurrentPreset =
                  function(e) {
                return $scope.ninefox.preset == e
              },
            $scope.loadNinefox =
                  function(e, t) {
              if (!$scope.ninefox) throw 'error ninefox!';
              $scope.ninefox.preset = e.name;
              var n = e.data, e = $eda.load_settings();
              e.preset = $scope.ninefox.preset, $eda.save_settings(e),
              function() {
                if ($scope.dirty) return $confirm.show(c);
                var e = $q.defer();
                return e.resolve(), e.promise
              }().then(function() {
                d('ninefox',
                  function() {
                    $scope.deserializeAndRender(n)
                  }),
                    a = [], i = !(o = []), $scope.dirty = !1, $scope.saved = !1,
                    $scope.saveError = '',
                    $location.path(t || '').hash('').replace(),
                    $scope.dirty = !1
              })
            },
            $scope.loadMat =
                  function(e) {
              $scope.matKeyboard = $eda.serial.deserialize(e);
              var t, n = m($scope.matKeyboard.keys);
              try {
                for (n.s(); !(t = n.n()).done;) {
                  var r = t.value;
                  r.html = $sce.trustAsHtml(
                      $renderKey.htmlMat(r, $sanitize, $scope.$t))
                }
              } catch (e) {
                n.e(e)
              } finally {
                n.f()
              }
            },
            $scope.deleteKeys =
                  function() {
              $scope.selectedKeys < 1 ||
                  (d('delete',
                     function() {
                       $eda.serial.sortKeys($scope.keys());
                       var e = $scope.selectedKeys.map(function(e) {
                         return $scope.keys().indexOf(e)
                       });
                       e.sort(function(e, t) {
                         return parseInt(e) - parseInt(t)
                       });
                       for (var t = e.last() + 1, n = $scope.keys()[t],
                                r = e.length - 1;
                            0 <= r; --r)
                         $scope.keys().splice(e[r], 1);
                       t = $scope.keys().indexOf(n);
                       (t = t < 0 ? e[0] - 1 : t) < 0 && (t = 0),
                           (n = $scope.keys()[t]) ?
                           ($scope.selectedKeys = [n],
                            $scope.multi = angular.copy(n)) :
                           $scope.unselectAll()
                     }),
                   $('.nf-keyboard').focus())
            },
            $scope.addKey =
                  function(a, o) {
              var i = null;
              d('add',
                function() {
                  var e, t,
                      n =
                          (e = o, r = 0, t = -1,
                           $eda.serial.sortKeys($scope.keys()),
                           !e && 0 < $scope.selectedKeys.length &&
                                   0 < $scope.keys().length &&
                                   $scope.multi.x == $scope.keys().last().x ?
                               (r = $scope.multi.x +
                                    Math.max(
                                        $scope.multi.width,
                                        $scope.multi.width2 || 0),
                                t = $scope.multi.y, 23 <= r && (r = 0, t++)) :
                               ($scope.keys().forEach(function(e) {
                                 $scope.selectedKeys.length &&
                                         (e.rotation_angle !=
                                              $scope.multi.rotation_angle ||
                                          e.rotation_x !=
                                              $scope.multi.rotation_x ||
                                          e.rotation_y !=
                                              $scope.multi.rotation_y) ||
                                     (t = Math.max(t, e.y))
                               }),
                                t++),
                           {x: r, y: t}),
                      r = function(e) {
                        i = $eda.serial.defaultKeyProps(), $.extend(i, e),
                        i.x = n.x, i.y = n.y, s(i),
                        n.x += Math.max(i.width, i.width2),
                        $scope.keys().push(i)
                      };
                  a instanceof Array ? a.forEach(r) : r(a)
                }),
                  l(i, {}), $scope.rerenderLines(), $scope.calcKbHeight(),
                  $('.nf-keyboard').focus()
            },
            $scope.deserializeException = '',
            $scope.updateFromSerialized =
                  function() {
              e && $timeout.cancel(e),
                  e = $timeout(function() {
                    try {
                      $scope.deserializeException = '',
                      d('rawdata', function() {
                        var e;
                        $scope.deserializeAndRender(
                            (e = $scope.serialized,
                             $eda.serial.fromJsonL('[' + e + ']')),
                            !0)
                      }), $scope.unselectAll()
                    } catch (e) {
                      $scope.deserializeException = e.toString()
                    }
                  }, 1e3)
            },
            $scope.selRect = {display: 'none'},
            $scope.parseMapxy =
                  function(e) {
              return e ? t(e.ninefox.mapx) + t(e.ninefox.mapy) : '';
              function t(e) {
                if (26 < e) throw 'int exceeed: ' + e;
                return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[e]
              }
            },
            $scope.selChooseArea =
                  function(e, t) {
              var n, r = m($scope.sel);
              try {
                for (r.s(); !(n = r.n()).done;) {
                  var a = n.value;
                  if (a.name == e) {
                    $scope.selChoosedArea = t,
                    $scope.selKeyboard = $eda.serial.deserialize(a.data);
                    var o, i = m($scope.selKeyboard.keys);
                    try {
                      for (i.s(); !(o = i.n()).done;) {
                        var l = o.value;
                        l.html = $sce.trustAsHtml(
                            $renderKey.htmlSel(l, $sanitize, $scope.$t))
                      }
                    } catch (e) {
                      i.e(e)
                    } finally {
                      i.f()
                    }
                    return
                  }
                }
              } catch (e) {
                r.e(e)
              } finally {
                r.f()
              }
            },
            $scope.rerenderSelDialog =
                  function() {
              angular.forEach($scope.selKeyboard.keys, function(e) {
                e.x = e.x,
                e.html = $sce.trustAsHtml(
                    $renderKey.htmlSel(e, $sanitize, $scope.$t))
              })
            },
            $scope.rerenderMatDialog =
                  function() {
              angular.forEach($scope.matKeyboard.keys, function(e) {
                e.x = e.x,
                e.html = $sce.trustAsHtml(
                    $renderKey.htmlMat(e, $sanitize, $scope.$t))
              })
            },
            $scope.matDialogClick =
                  function(e, params) {
              var t, n = $('.nf-matboard-bg'), r = n.offset(),
                     a = r.left + parseInt(n.css('padding-left'), 10) +
                  parseInt(n.css('margin-left'), 10),
                     o = r.top + parseInt(n.css('padding-top'), 10) +
                  parseInt(n.css('margin-top'), 10),
                     i = m($scope.matKeyboard.keys);
              try {
                for (i.s(); !(t = i.n()).done;) {
                  var l = t.value;
                  if ('KEY' == l.ninefox.type && !l.ninefox.can_not_selected) {
                    var s = {x: e.pageX - a, y: e.pageY - o};
                    if (l.rotation_angle && (s = l.mat.transformPt(s)),
                        l.rect.x <= s.x && l.rect.x + l.rect.w >= s.x &&
                                l.rect.y <= s.y && l.rect.y + l.rect.h >= s.y ||
                            l.rect2.x <= s.x && l.rect2.x + l.rect2.w >= s.x &&
                                l.rect2.y <= s.y &&
                                l.rect2.y + l.rect2.h >= s.y)
                      return void (params.selectedMatKey = l)
                  }
                }
              } catch (e) {
                i.e(e)
              } finally {
                i.f()
              }
              e.preventDefault(), e.stopPropagation()
            },
            $scope.selDialogClick =
                  function(e, params) {
              var t, n = $('.nf-selboard-bg'), r = n.offset(),
                     a = r.left + parseInt(n.css('padding-left'), 10) +
                  parseInt(n.css('margin-left'), 10),
                     o = r.top + parseInt(n.css('padding-top'), 10) +
                  parseInt(n.css('margin-top'), 10),
                     i = m($scope.selKeyboard.keys);
              try {
                for (i.s(); !(t = i.n()).done;) {
                  var l = t.value;
                  if ('KEY' == l.ninefox.type) {
                    var s = {x: e.pageX - a, y: e.pageY - o};
                    if (l.rotation_angle && (s = l.mat.transformPt(s)),
                        l.rect.x <= s.x && l.rect.x + l.rect.w >= s.x &&
                                l.rect.y <= s.y && l.rect.y + l.rect.h >= s.y ||
                            l.rect2.x <= s.x && l.rect2.x + l.rect2.w >= s.x &&
                                l.rect2.y <= s.y &&
                                l.rect2.y + l.rect2.h >= s.y)
                      return void (params.selectedSelKey = l)
                  }
                }
              } catch (e) {
                i.e(e)
              } finally {
                i.f()
              }
              e.preventDefault(), e.stopPropagation()
            },
            $scope.selectedKeysHex =
                  function() {
              return 0 == $scope.selectedKeys.length ?
                  '' :
                  1 < $scope.selectedKeys.length ?
                  '#N/A' :
                  'KEY' != $scope.selectedKeys[0].ninefox.type ?
                  '' :
                  '0x' + $scope.selectedKeys[0].ninefox.hex
            },
            $scope.stab_desc = $eda.stab_desc,
            $scope.stab_desc_selected = function() {
              var e = $scope.selectedKeysStab();
              return e ? $scope.stab_desc(e.value) : ''
            }, $scope.selectedKeysStab = function() {
              if (0 == $scope.selectedKeys.length) return null;
              if (1 < $scope.selectedKeys.length) return null;
              if ('KEY' != $scope.selectedKeys[0].ninefox.type) return '';
              var e = $eda.stab_value($scope.selectedKeys[0]);
              return e || null
            }, $scope.changeStab = function(e) {
              var t = $scope.selectedKeysStab();
              if (!t) throw 'invlaid stab';
              t = t.list[e], e = $scope.selectedKeys[0];
              e.ninefox.stab = t, function(e) {
                if (!e.ninefox) throw 'no valid ninfox da';
                e.profile = JSON.stringify(e.ninefox)
              }(e), s(e), $scope.rerenderLines()
            }, $scope.selectedKeyLabelArr = function() {
              return 0 == $scope.selectedKeys.length ?
                  '' :
                  1 < $scope.selectedKeys.length ||
                          'KEY' != $scope.selectedKeys[0].ninefox.type ?
                  ['#N/A', '', '', '', '', ''] :
                  $scope.selectedKeys[0].labels
            }, $scope.clickSelectedKey = function() {
              0 != $scope.selectedKeys.length &&
                  (1 < $scope.selectedKeys.length ||
                   'KEY' == $scope.selectedKeys[0].ninefox.type &&
                       $scope.showSelDialog($scope.selectedKeys[0]))
            };
              var p = !($scope.dbClick = function(e) {
                console.log($scope.selectedKeys),
                    1 == $scope.selectedKeys.length &&
                    $scope.clickSelectedKey(),
                    e.preventDefault(), e.stopPropagation()
              });
              $scope.selectClick = function(e) {
                var t = $('.nf-keyboard');
                $scope.selRect = {
                  display: 'none',
                  x: e.pageX,
                  y: e.pageY,
                  l: e.pageX,
                  t: e.pageY,
                  w: 0,
                  h: 0
                },
                $scope.selRect.kb = {
                  left: t.position().left + parseInt(t.css('margin-left'), 10),
                  top: t.position().top + parseInt(t.css('margin-top'), 10),
                  width: t.outerWidth(),
                  height: t.outerHeight()
                },
                p = !0, e.preventDefault(), e.stopPropagation()
              }, $scope.selectMove = function(e) {
                var t;
                p &&
                    (t = Math.min(
                         $scope.selRect.kb.left + $scope.selRect.kb.width,
                         Math.max($scope.selRect.kb.left, e.pageX)),
                     e = Math.min(
                         $scope.selRect.kb.top + $scope.selRect.kb.height,
                         Math.max($scope.selRect.kb.top, e.pageY)),
                     t < $scope.selRect.x ?
                         ($scope.selRect.l = t,
                          $scope.selRect.w = $scope.selRect.x - t) :
                         ($scope.selRect.l = $scope.selRect.x,
                          $scope.selRect.w = t - $scope.selRect.x),
                     e < $scope.selRect.y ?
                         ($scope.selRect.t = e,
                          $scope.selRect.h = $scope.selRect.y - e) :
                         ($scope.selRect.t = $scope.selRect.y,
                          $scope.selRect.h = e - $scope.selRect.y),
                     5 < $scope.selRect.w + $scope.selRect.h &&
                         ($scope.selRect.display = 'inherit'))
              }, $scope.selectRelease = function(n) {
                var e, t, r, a;
                p &&
                    ($eda.serial.sortKeys($scope.keys()), p = !1,
                     t = (e = $('.nf-keyboard-bg')).position(),
                     r = t.left + parseInt(e.css('padding-left'), 10) +
                         parseInt(e.css('margin-left'), 10),
                     a = t.top + parseInt(e.css('padding-top'), 10) +
                         parseInt(e.css('margin-top'), 10),
                     'none' !== $scope.selRect.display ?
                         (n.ctrlKey || n.altKey || $scope.unselectAll(),
                          $scope.selRect.display = 'none',
                          $scope.selRect.l -= r, $scope.selRect.t -= a,
                          $scope.keys().forEach(function(e) {
                            e.bbox.x >= $scope.selRect.l &&
                                e.bbox.x + e.bbox.w <=
                                    $scope.selRect.l + $scope.selRect.w &&
                                e.bbox.y >= $scope.selRect.t &&
                                e.bbox.y + e.bbox.h <=
                                    $scope.selRect.t + $scope.selRect.h &&
                                $scope.selectedKeys.indexOf(e) < 0 &&
                                l(e, {ctrlKey: !0})
                          })) :
                         (n.ctrlKey || n.altKey || n.shiftKey ||
                              $scope.unselectAll(),
                          $scope.keys().forEach(function(e) {
                            var t = {x: n.pageX - r, y: n.pageY - a};
                            e.rotation_angle && (t = e.mat.transformPt(t)),
                                (e.rect.x <= t.x &&
                                     e.rect.x + e.rect.w >= t.x &&
                                     e.rect.y <= t.y &&
                                     e.rect.y + e.rect.h >= t.y ||
                                 e.rect2.x <= t.x &&
                                     e.rect2.x + e.rect2.w >= t.x &&
                                     e.rect2.y <= t.y &&
                                     e.rect2.y + e.rect2.h >= t.y) &&
                                l(e, {
                                  ctrlKey: n.ctrlKey,
                                  altKey: n.altKey,
                                  shiftKey: n.shiftKey
                                })
                          })),
                     i = !1, n.preventDefault(), n.stopPropagation(),
                     $('.nf-keyboard').focus())
              }, $scope.prevKey = function(e) {
                var t, n;
                0 < $scope.keys().length &&
                    ($eda.serial.sortKeys($scope.keys()),
                     t = 0 < $scope.selectedKeys.length ?
                         Math.max(
                             0,
                             $scope.keys().indexOf($scope.selectedKeys.last()) -
                                 1) :
                         0,
                     n = $scope.selectedKeys.indexOf($scope.keys()[t]),
                     e.shiftKey && 1 < $scope.keys().length &&
                         0 < $scope.selectedKeys.length && 0 <= n &&
                         ($scope.selectedKeys.pop(),
                          $scope.selectedKeys.splice(n, 1)),
                     l($scope.keys()[t], {ctrlKey: e.shiftKey}), i = !1)
              }, $scope.nextKey = function(e) {
                var t, n;
                0 < $scope.keys().length &&
                    ($eda.serial.sortKeys($scope.keys()),
                     t = 0 < $scope.selectedKeys.length ?
                         Math.min(
                             $scope.keys().length - 1,
                             $scope.keys().indexOf($scope.selectedKeys.last()) +
                                 1) :
                         $scope.keys().length - 1,
                     n = $scope.selectedKeys.indexOf($scope.keys()[t]),
                     e.shiftKey && 1 < $scope.keys().length &&
                         0 < $scope.selectedKeys.length && 0 <= n &&
                         ($scope.selectedKeys.pop(),
                          $scope.selectedKeys.splice(n, 1)),
                     l($scope.keys()[t], {ctrlKey: e.shiftKey}), i = !1)
              }, $scope.focusKb = function() {
                $('.nf-keyboard').focus()
              }, $scope.focusEditor = function() {
                0 < $scope.selectedKeys.length ?
                    (0 !== $scope.selTab &&
                         ($scope.selTab = 0,
                          $('#properties').removeClass('hidden')),
                     $('#labeleditor0').focus().select()) :
                    (1 !== $scope.selTab &&
                         ($scope.selTab = 1,
                          $('#kbdproperties').removeClass('hidden')),
                     $('#kbdcoloreditor').focus().select())
              };
              var y = null;
              $scope.showHelp = function(e) {
                document.activeElement &&
                        ('INPUT' === document.activeElement.nodeName ||
                         'TEXTAREA' === document.activeElement.nodeName) ||
                    (y && y.dismiss('cancel'), y = $modal.open({
                      templateUrl: '/helpDialog.html',
                      controller: 'modalCtrl',
                      backdrop: 'static',
                      scope: $scope,
                      windowClass: 'ninefoxmodal',
                      resolve: {params: null}
                    }),
                     e.preventDefault(), e.stopPropagation())
              }, $scope.setCircuitUpper = function(params, e) {
                params.circuit_upper = e
              }, $scope.reset = function() {
                window.confirm($scope.$t('resetConfirm')) &&
                    ($eda.clear_settings(), window.location.reload())
              }, $scope.showPublishDialog = function(e) {
                y && y.dismiss('cancel');
                var t = $eda.load_settings();
                (y = $modal.open({
                  templateUrl: '/publishDialog.html',
                  controller: 'modalCtrl',
                  backdrop: 'static',
                  scope: $scope,
                  windowClass: 'ninefoxmodal',
                  resolve: {
                    params: function() {
                      return {
                        circuit_upper: t.circuit_upper,
                            circuit_delta: t.circuit_delta
                      }
                    }
                  }
                })).result.then(function(params) {
                  y.close(), setTimeout($scope.downloadEdaZipImpl, 200)
                }),
                    e && (e.preventDefault(), e.stopPropagation())
              }, $scope.showOptions = function(e) {
                y && y.dismiss('cancel');
                var t = $eda.load_settings();
                (y = $modal.open({
                  templateUrl: '/optionsDialog.html',
                  controller: 'modalCtrl',
                  backdrop: 'static',
                  scope: $scope,
                  windowClass: 'ninefoxmodal',
                  resolve: {
                    params: function() {
                      return {
                        moveStep: $scope.moveStep, sizeStep: $scope.sizeStep,
                            circuit_upper: t.circuit_upper,
                            circuit_delta: t.circuit_delta
                      }
                    }
                  }
                })).result.then(function(params) {
                  $.extend($scope, params);
                  var e = $eda.load_settings();
                  e.circuit_upper = params.circuit_upper,
                  e.circuit_delta = params.circuit_delta, $eda.save_settings(e),
                  $scope.rerenderKeys(), $scope.rerenderLines()
                }),
                    e && (e.preventDefault(), e.stopPropagation())
              }, $scope.showMatDialog = function(e) {
                y && y.dismiss('cancel');
                var t, n = m($scope.matKeyboard.keys);
                try {
                  for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    !function(e, t) {
                      var n, r = m($scope.keys());
                      try {
                        for (r.s(); !(n = r.n()).done;) {
                          var a = n.value;
                          if (a.ninefox.mapx == e && a.ninefox.mapy == t)
                            return 1
                        }
                      } catch (e) {
                        r.e(e)
                      } finally {
                        r.f()
                      }
                    }(r.ninefox.mapx, r.ninefox.mapy) ?
                        r.ninefox.can_not_selected = !1 :
                        r.ninefox.can_not_selected = !0
                  }
                } catch (e) {
                  n.e(e)
                } finally {
                  n.f()
                }
                (y = $modal.open({
                  templateUrl: '/matDialog.html',
                  controller: 'modalCtrl',
                  scope: $scope,
                  backdrop: 'static',
                  windowClass: 'nf-matDialog',
                  resolve: {
                    params: function() {
                      return {
                        selectedMatKey: null
                      }
                    }
                  }
                })).result.then(function(params) {
                  params.selectedMatKey ? $scope.addKey(params.selectedMatKey) :
                                          console.log('no selection')
                }),
                    e && (e.preventDefault(), e.stopPropagation())
              }, $scope.showSelDialog = function(e, t) {
                y && y.dismiss('cancel'),
                    e ? ((y = $modal.open({
                           templateUrl: '/selDialog.html',
                           controller: 'modalCtrl',
                           scope: $scope,
                           backdrop: 'static',
                           windowClass: 'nf-selDialog',
                           resolve: {
                             params: function() {
                               return {
                                 selectedSelKey: e
                               }
                             }
                           }
                         })).result.then(function(params) {
                      var a;
                      params.selectedSelKey ?
                          'KEY' == params.selectedSelKey.ninefox.type ?
                          1 == $scope.selectedKeys.length ?
                          params.selectedSelKey.ninefox.hex !=
                                          $scope.selectedKeys[0].ninefox.hex ?
                          (a = angular.copy(params.selectedSelKey),
                           d('setHex',
                             function() {
                               var e, t = m($scope.keys());
                               try {
                                 for (t.s(); !(e = t.n()).done;) {
                                   var n = e.value;
                                   if ('KEY' == n.ninefox.type &&
                                       (n.ninefox.mapx ==
                                            $scope.selectedKeys[0]
                                                .ninefox.mapx &&
                                        n.ninefox.mapy ==
                                            $scope.selectedKeys[0]
                                                .ninefox.mapy)) {
                                     n.ninefox.hex = a.ninefox.hex,
                                     n.labels = a.labels, n.color = a.color;
                                     var r = JSON.parse(n.profile);
                                     return r.hex = n.ninefox.hex,
                                            n.profile = JSON.stringify(r),
                                            void s(n)
                                   }
                                 }
                               } catch (e) {
                                 t.e(e)
                               } finally {
                                 t.f()
                               }
                             })) :
                          console.log('no change') :
                          console.log('error invalid selection') :
                          console.log('invalid key') :
                          console.log('null selection')
                    }),
                         t && (t.preventDefault(), t.stopPropagation())) :
                        console.log('error no key')
              };
              var g = {};
              $scope.cut = function(e) {
                e && (e.preventDefault(), e.stopPropagation()),
                    0 < $scope.selectedKeys.length &&
                    (g = angular.copy($scope.selectedKeys), $scope.deleteKeys())
              }, $scope.copy = function(e) {
                e && (e.preventDefault(), e.stopPropagation()),
                    0 < $scope.selectedKeys.length &&
                    (g = angular.copy($scope.selectedKeys))
              }, $scope.canCopy = function() {
                return 0 < $scope.selectedKeys.length
              }, $scope.canPaste = function() {
                return 0 < g.length
              }, $scope.keyboardTop = function() {
                var e = $('.nf-keyboard');
                return e.position().top + parseInt(e.css('margin-top'), 10)
              }, $scope.keyboardLeft = function() {
                var e = $('.nf-keyboard');
                return e.position().left + parseInt(e.css('margin-left'), 10)
              }, $scope.aceLoaded = function(e) {
                e.$blockScrolling = 1 / 0, e.getSession().setUseWorker(!1),
                e.setFontSize(14), e.renderer.setVScrollBarAlwaysVisible(!0)
              }
            }
          ]),
      e.controller(
          'modalCtrl',
          function($scope, $modalInstance, params) {
            $scope.params = params, $scope.ok = function() {
              $modalInstance.close($scope.params)
            }, $scope.cancel = function() {
              $modalInstance.dismiss('cancel')
            }, $modalInstance.opened.then(function() {
              setTimeout(function() {
                $scope.rerenderSelDialog(), $scope.rerenderMatDialog()
              }, 0)
            })
          }),
      e.controller(
          'savedLayoutsCtrl',
          function($scope, $modalInstance, params) {
            $scope.params = params, $scope.ok = function() {
              $modalInstance.close($scope.params)
            }, $scope.cancel = function() {
              $modalInstance.dismiss('cancel')
            }, $scope.load = function(e) {
              $scope.params.load = e, $scope.ok()
            }, $scope.delete = function(e) {
              $scope.params.delete = e, $scope.ok()
            }, $scope.layouts = []
          }),
      e.directive('kbdColorPicker', function($timeout) {
        return {
          templateUrl: '/colorPicker.html', restrict: 'E', scope: {
            hintText: '@',
            pickerId: '@',
            pickerPosition: '@',
            color: '=ngModel',
            _onChange: '&ngChange',
            _onBlur: '&ngBlur',
            isDisabled: '&ngDisabled'
          },
              link: function($scope) {
                $scope.onChange = function() {
                  $timeout($scope._onChange)
                }, $scope.onBlur = function() {
                  $timeout($scope._onBlur)
                }
              }
        }
      }), e.directive('kbdLabelEditor', function() {
        return {
          templateUrl: '/labelEditor.html', restrict: 'E',
              scope: {hintText: '@', labelIndex: '='}
        }
      }), e.directive('kbdMultiCheck', function() {
        return {
          templateUrl: '/multiCheck.html', restrict: 'E',
              scope: {hintText: '@', field: '@', kbdDisable: '='},
              transclude: !0
        }
      }), e.directive('kbdMultiNumbox', function() {
        return {
          templateUrl: '/multiNumbox.html', restrict: 'E', scope: {
            field: '@',
            size: '@',
            min: '@',
            max: '@',
            step: '@',
            kbdDisable: '='
          }
        }
      }), e.service('$confirm', function($q, $timeout, $window) {
        var t = null;
        return {
          show: function(e) {
            return t && t.reject(), t = $q.defer(), $timeout(function() {
                     $window.confirm(e) ? t.resolve() : t.reject(), t = null
                   }, 0, !1), t.promise
          }
        }
      })
}();
var $renderKey = 'undefined' != typeof exports ? exports : {};
!function() {
  var r, a, o, i = {
    px: {
      unit: 42,
      strokeWidth: 1,
      '': {
        profile: '',
        keySpacing: 0,
        bevelMargin: 5,
        bevelOffsetTop: 1,
        bevelOffsetBottom: 2,
        padding: 3,
        roundOuter: 3,
        roundInner: 3
      },
      DCS: {
        profile: 'DCS',
        keySpacing: 0,
        bevelMargin: 6,
        bevelOffsetTop: 3,
        bevelOffsetBottom: 3,
        padding: 3,
        roundOuter: 5,
        roundInner: 3
      },
      DSA: {
        profile: 'DSA',
        keySpacing: 0,
        bevelMargin: 6,
        bevelOffsetTop: 0,
        bevelOffsetBottom: 0,
        padding: 3,
        roundOuter: 5,
        roundInner: 8
      },
      SA: {
        profile: 'SA',
        keySpacing: 0,
        bevelMargin: 6,
        bevelOffsetTop: 2,
        bevelOffsetBottom: 2,
        padding: 3,
        roundOuter: 5,
        roundInner: 5
      },
      CHICKLET: {
        profile: 'CHICKLET',
        keySpacing: 3,
        bevelMargin: 1,
        bevelOffsetTop: 0,
        bevelOffsetBottom: 2,
        padding: 4,
        roundOuter: 4,
        roundInner: 4
      },
      FLAT: {
        profile: 'FLAT',
        keySpacing: 1,
        bevelMargin: 1,
        bevelOffsetTop: 0,
        bevelOffsetBottom: 0,
        padding: 4,
        roundOuter: 5,
        roundInner: 3
      },
      CIRCLE: {
        profile: 'CIRCLE',
        keySpacing: 1,
        bevelMargin: 1,
        bevelOffsetTop: 0,
        bevelOffsetBottom: 0,
        padding: 4,
        roundOuter: 55,
        roundInner: 3
      }
    },
    mm: {
      unit: 19.05,
      strokeWidth: .2,
      '': {
        profile: '',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      },
      DCS: {
        profile: 'DCS',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      },
      DSA: {
        profile: 'DSA',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      },
      SA: {
        profile: 'SA',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      },
      CHICKLET: {
        profile: 'CHICKLET',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      },
      FLAT: {
        profile: 'FLAT',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      },
      CIRCLE: {
        profile: 'CIRCLE',
        keySpacing: .4445,
        bevelMargin: 3.1115,
        padding: 0,
        roundOuter: 1,
        roundInner: 2
      }
    }
  };
  function l(e, t) {
    e = $color.sRGB8(e.r, e.g, e.b).Lab();
    return e.l = Math.min(100, e.l * t), e.sRGB8()
  }
  function s(e) {
    if (e && e.profile) try {
        if ('CIRCLE' == JSON.parse(e.profile).type) return 'CIRCLE'
      } catch (e) {
        console.log(e)
      }
    return (/\b(SA|DSA|DCS|OEM|CHICKLET|FLAT)\b/.exec(e.profile) || [''])[0]
  }
  function c(e) {
    if (26 < e) throw 'int exceeed: ' + e;
    return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[e]
  }
  function d(e, t) {
    var n = {};
    e.ninefox || (e.ninefox = JSON.parse(e.profile)),
        n.can_not_selected = e.ninefox.can_not_selected;
    var r = (r = $eda.load_settings().theme) || 'Default',
        a = function(e, t) {
          if (!e) throw 'invalid theme';
          if ('Default' == e.name)
            return {
              bgColor: t.color,
              legendColor: t.textColor[0] || t.default.textColor
            };
          var n = 'base';
          switch (t.color) {
            case '#0095bf':
              n = 'accent';
              break;
            case '#424253':
              n = 'mod';
              break;
            case '#5b5b69':
              n = 'base';
              break;
            case '#ff0000':
              n = 'accent'
          }
          return e.colors && e.colors[n] ?
              {
                bgColor: e.colors[n].background,
                legendColor: e.colors[n].color
              } :
              {
                bgColor: t.color,
                legendColor: t.textColor[0] || t.default.textColor
              }
        }(function(e, t) {
          var n, r = m(e);
          try {
            for (r.s(); !(n = r.n()).done;) {
              var a = n.value;
              if (a.name == t) return a
            }
          } catch (e) {
            r.e(e)
          } finally {
            r.f()
          }
          return e[0]
        }($eda.theme, r), e);
    n.bgColor = a.bgColor, n.legendColor = a.legendColor,
    n.jShaped = e.width !== e.width2 || e.height !== e.height2 || e.x2 || e.y2,
    n.capwidth = t.unit * e.width, n.capheight = t.unit * e.height,
    n.capx = t.unit * e.x, n.capy = t.unit * e.y,
    n.jShaped &&
        (n.capwidth2 = t.unit * e.width2, n.capheight2 = t.unit * e.height2,
         n.capx2 = t.unit * (e.x + e.x2), n.capy2 = t.unit * (e.y + e.y2)),
    n.outercapwidth = n.capwidth - 2 * t.keySpacing,
    n.outercapheight = n.capheight - 2 * t.keySpacing,
    n.outercapx = n.capx + t.keySpacing, n.outercapy = n.capy + t.keySpacing,
    n.jShaped &&
        (n.outercapy2 = n.capy2 + t.keySpacing,
         n.outercapx2 = n.capx2 + t.keySpacing,
         n.outercapwidth2 = n.capwidth2 - 2 * t.keySpacing,
         n.outercapheight2 = n.capheight2 - 2 * t.keySpacing),
    n.innercapwidth = n.outercapwidth - 2 * t.bevelMargin,
    n.innercapheight = n.outercapheight - 2 * t.bevelMargin -
        (t.bevelOffsetBottom - t.bevelOffsetTop),
    n.innercapx = n.outercapx + t.bevelMargin,
    n.innercapy = n.outercapy + t.bevelMargin - t.bevelOffsetTop,
    n.jShaped &&
        (n.innercapwidth2 = n.outercapwidth2 - 2 * t.bevelMargin,
         n.innercapheight2 = n.outercapheight2 - 2 * t.bevelMargin,
         n.innercapx2 = n.outercapx2 + t.bevelMargin,
         n.innercapy2 = n.outercapy2 + t.bevelMargin - t.bevelOffsetTop),
    n.textcapwidth = n.innercapwidth - 2 * t.padding,
    n.textcapheight = n.innercapheight - 2 * t.padding,
    n.textcapx = n.innercapx + t.padding, n.textcapy = n.innercapy + t.padding,
    n.darkColor =
        function(e, t) {
      (e = String(e).replace(/[^0-9a-f]/gi, '')).length < 6 &&
          (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
          t = t || 0;
      for (var n, r = '#', a = 0; a < 3; a++)
        n = parseInt(e.substr(2 * a, 2), 16),
        r += ('00' +
              (n = Math.round(Math.min(Math.max(0, n + n * t), 255))
                       .toString(16)))
                 .substr(n.length);
      return r
    }(n.bgColor, -.2),
    n.lightColor = n.bgColor, n.origin_x = t.unit * e.rotation_x,
    n.origin_y = t.unit * e.rotation_y;
    var o = Math.transMatrix(n.origin_x, n.origin_y)
                .mult(Math.rotMatrix(e.rotation_angle))
                .mult(Math.transMatrix(-n.origin_x, -n.origin_y));
    n.rect = {
      x: n.capx,
      y: n.capy,
      w: n.capwidth,
      h: n.capheight,
      x2: n.capx + n.capwidth,
      y2: n.capy + n.capheight
    },
    n.rect2 = n.jShaped ? {
      x: n.capx2,
      y: n.capy2,
      w: n.capwidth2,
      h: n.capheight2,
      x2: n.capx2 + n.capwidth2,
      y2: n.capy2 + n.capheight2
    } :
                          n.rect,
    n.bbox = {x: 9999999, y: 9999999, x2: -9999999, y2: -9999999};
    var i = [
      {x: n.rect.x, y: n.rect.y}, {x: n.rect.x, y: n.rect.y2},
      {x: n.rect.x2, y: n.rect.y}, {x: n.rect.x2, y: n.rect.y2}
    ];
    n.jShaped &&
        i.push(
            {x: n.rect2.x, y: n.rect2.y}, {x: n.rect2.x, y: n.rect2.y2},
            {x: n.rect2.x2, y: n.rect2.y}, {x: n.rect2.x2, y: n.rect2.y2});
    for (var l = 0; l < i.length; ++l)
      i[l] = o.transformPt(i[l]), n.bbox.x = Math.min(n.bbox.x, i[l].x),
      n.bbox.y = Math.min(n.bbox.y, i[l].y),
      n.bbox.x2 = Math.max(n.bbox.x2, i[l].x),
      n.bbox.y2 = Math.max(n.bbox.y2, i[l].y);
    n.bbox.w = n.bbox.x2 - n.bbox.x, n.bbox.h = n.bbox.y2 - n.bbox.y;
    var s = $eda.load_settings(), r = s.circuit_upper ? 'up' : 'down',
        a = $eda.stab_value(e);
    a && ('left' != a.value && 'right' != a.value || (r = a.value)),
        n.orient = r;
    return n.circuit_lbl_pos = {
      up: {x: 0, y: 21},
      down: {x: 0, y: 0},
      left: {x: 21, y: 10},
      right: {x: 0, y: 10}
    }[n.orient],
           n.circuit = 1 != s.viewMode,
           n.centerx = t.unit * (e.x + e.width / 2),
           n.centery = t.unit * (e.y + e.height2 / 2),
           n.circuitx = t.unit * (e.x + e.width / 2 - .5) + t.bevelMargin,
           n.circuity = t.unit * (e.y + e.height2 / 2 - .5) + t.bevelMargin,
           n.circuitwidth = t.unit - 2 * t.bevelMargin,
           n.circuitheight = t.unit - 2 * t.bevelMargin,
           n.ninefox = JSON.parse(e.profile),
           n.circuitlabels = [c(n.ninefox.mapx) + c(n.ninefox.mapy)],
           n.stab = $eda.stab_render_style(e), n.key = e, n.lenlabel = '',
           'KEY' == e.ninefox.type &&
               (n.lenlabel = 1 == n.key.width ? '' : n.key.width + 'U'),
           n
  }
  ['px', 'mm'].forEach(function(t) {
    ['', 'DCS', 'DSA', 'SA', 'CHICKLET', 'FLAT', 'CIRCLE'].forEach(function(e) {
      i[t][e].unit = i[t].unit, i[t][e].strokeWidth = i[t].strokeWidth
    }),
        i[t].OEM = i[t].DCS
  }),
      $renderKey.init = function($templateCache) {
        r = doT.template($templateCache.get('/keycap.html'), {
          __proto__: doT.templateSettings,
          varname: 'key, sizes, parms, $sanitize, lightenColor'
        }),
        a = doT.template($templateCache.get('/selkeycap.html'), {
          __proto__: doT.templateSettings,
          varname: 'key, sizes, parms, $sanitize, lightenColor, $t'
        }),
        o = doT.template($templateCache.get('/matkeycap.html'), {
          __proto__: doT.templateSettings,
          varname: 'key, sizes, parms, $sanitize, lightenColor, $t'
        })
      }, $renderKey.getProfile = s, $renderKey.keyRenderParms = function(e) {
        return d(e, i.px[s(e)])
      }, $renderKey.html = function(e, $sanitize) {
        var t = i.px[s(e)], n = d(e, t);
        return e.rect = n.rect, e.rect2 = n.rect2, e.bbox = n.bbox,
               e.mat = Math.transMatrix(n.origin_x, n.origin_y)
                           .mult(Math.rotMatrix(-e.rotation_angle))
                           .mult(Math.transMatrix(-n.origin_x, -n.origin_y)),
               e.crosshairs = 'none',
               (e.rotation_x || e.rotation_y || e.rotation_angle) &&
                   (e.crosshairs_x = n.origin_x, e.crosshairs_y = n.origin_y,
                    e.crosshairs = 'block'),
               r(e, t, n, $sanitize, l)
      }, $renderKey.htmlSel = function(e, $sanitize, t) {
        var n = {
          unit: 38,
          strokeWidth: .5,
          keySpacing: 1,
          bevelMargin: 3,
          bevelOffsetTop: 0,
          bevelOffsetBottom: 1,
          padding: 3,
          roundOuter: 1,
          roundInner: 3
        },
            r = d(e, n);
        return e.rect = r.rect, e.rect2 = r.rect2, e.bbox = r.bbox,
               e.mat = Math.transMatrix(r.origin_x, r.origin_y)
                           .mult(Math.rotMatrix(-e.rotation_angle))
                           .mult(Math.transMatrix(-r.origin_x, -r.origin_y)),
               e.crosshairs = 'none',
               (e.rotation_x || e.rotation_y || e.rotation_angle) &&
                   (e.crosshairs_x = r.origin_x, e.crosshairs_y = r.origin_y,
                    e.crosshairs = 'block'),
               a(e, n, r, $sanitize, l, t)
      }, $renderKey.htmlMat = function(e, $sanitize, t) {
        var n = {
          unit: 38,
          strokeWidth: .5,
          keySpacing: 1,
          bevelMargin: 3,
          bevelOffsetTop: 0,
          bevelOffsetBottom: 1,
          padding: 3,
          roundOuter: 1,
          roundInner: 3
        },
            r = d(e, n);
        return e.rect = r.rect, e.rect2 = r.rect2, e.bbox = r.bbox,
               e.mat = Math.transMatrix(r.origin_x, r.origin_y)
                           .mult(Math.rotMatrix(-e.rotation_angle))
                           .mult(Math.transMatrix(-r.origin_x, -r.origin_y)),
               e.crosshairs = 'none',
               (e.rotation_x || e.rotation_y || e.rotation_angle) &&
                   (e.crosshairs_x = r.origin_x, e.crosshairs_y = r.origin_y,
                    e.crosshairs = 'block'),
               o(e, n, r, $sanitize, l, t)
      }, $renderKey.getGlyphsFromRules = function(e) {
        var n = [];
        e.forEach(function(e) {
          !e.name && 1 === e.selector.length &&
              e.selector[0].match(/^\.[a-zA-Z0-9]+$/) &&
              n.push(e.selector[0].substring(1))
        });
        var r = [];
        return e.forEach(function(e) {
          !e.name && 0 < e.selector.length && e.selector.forEach(function(e) {
            var t =
                e.match(/^\.([a-zA-Z0-9]+)-([-a-zA-Z0-9]+)\:(before|after)$/);
            !t ||
                -1 != (e = n.indexOf(t[1])) &&
                    (t = {
                      name: t[2],
                      html: '<i class=\'' + n[e] + ' ' + t[1] + '-' + t[2] +
                          '\'></i>'
                    },
                     r.push(t))
          })
        }),
               r.sort(function(e, t) {
                 return e.name.localeCompare(t.name)
               }),
               r
      }, $renderKey.sanitizeCssRules = function(e) {
        if (e) {
          e.forEach(function(e) {
            if (!e.name)
              for (var t = 0; t < e.selector.length; ++t)
                '#keyboard-bg' !== e.selector[t] &&
                    (e.selector[t] = '#keyboard .keycap ' + e.selector[t] +
                         ', #glyphScroller ' + e.selector[t])
          });
          var n = '';
          return e.forEach(function(e) {
            if (e.name)
              ('@font-face' === e.name ||
               '@import' === e.name && !e.content &&
                   e.selector.match(
                       /^url\('?https?:\/\/fonts.googleapis.com\/css\?family=[^\)]+'?\)$/)) &&
                  (n += e.name, e.selector && (n += ' ' + e.selector),
                   e.content ? n += '{ ' + e.content + ' }\n' : n += ';\n');
            else {
              if (n += e.selector.join(', ') + ' { ', e.decls)
                for (var t = 0; t < e.decls.length; ++t)
                  n += e.decls[t][0] + ': ' + e.decls[t][1] + '; ';
              n += '}\n'
            }
          }),
                 n
        }
        return ''
      }
}();