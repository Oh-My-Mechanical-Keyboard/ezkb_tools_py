var
    $eda = function() {
      'use strict';
      function n(t, e) {
        var r, n = Object.keys(t);
        return Object.getOwnPropertySymbols &&
                   (r = Object.getOwnPropertySymbols(t),
                    e && (r = r.filter(function(e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })),
                    n.push.apply(n, r)),
               n
      }
      function e(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2 ?
              n(Object(r), !0).forEach(function(e) {
                o(t, e, r[e])
              }) :
              Object.getOwnPropertyDescriptors ?
              Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) :
              n(Object(r)).forEach(function(e) {
                Object.defineProperty(
                    t, e, Object.getOwnPropertyDescriptor(r, e))
              })
        }
        return t
      }
      function _(e) {
        return (
            _ = 'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator ?
                function(e) {
                  return typeof e
                } :
                function(e) {
                  return e && 'function' == typeof Symbol &&
                          e.constructor === Symbol && e !== Symbol.prototype ?
                      'symbol' :
                      typeof e
                })(e)
      }
      function c(e, t, r, n, i, o, a) {
        try {
          var s = e[o](a), c = s.value
        } catch (e) {
          return void r(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(n, i)
      }
      function t(s) {
        return function() {
          var e = this, a = arguments;
          return new Promise(function(t, r) {
            var n = s.apply(e, a);
            function i(e) {
              c(n, t, r, i, o, 'next', e)
            }
            function o(e) {
              c(n, t, r, i, o, 'throw', e)
            }
            i(void 0)
          })
        }
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0,
          'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      function s(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r),
               Object.defineProperty(e, 'prototype', {writable: !1}), e
      }
      function o(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) :
                        e[t] = r,
                        e
      }
      function l(e, t) {
        if (e) {
          if ('string' == typeof e) return a(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return 'Map' ===
                      (r = 'Object' === r && e.constructor ?
                           e.constructor.name :
                           r) ||
                  'Set' === r ?
              Array.from(e) :
              'Arguments' === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ?
              a(e, t) :
              void 0
        }
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }
      function qt(e, t) {
        var r = 'undefined' != typeof Symbol && e[Symbol.iterator] ||
            e['@@iterator'];
        if (!r) {
          if (Array.isArray(e) || (r = l(e)) ||
              t && e && 'number' == typeof e.length) {
            r && (e = r);
            var n = 0, t = function() {};
            return {
              s: t, n: function() {
                return n >= e.length ? {done: !0} : {done: !1, value: e[n++]}
              }, e: function(e) {
                throw e
              }, f: t
            }
          }
          throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')
        }
        var i, o = !0, a = !1;
        return {
          s: function() {
            r = r.call(e)
          }, n: function() {
            var e = r.next();
            return o = e.done, e
          }, e: function(e) {
            a = !0, i = e
          }, f: function() {
            try {
              o || null == r.return || r.return()
            } finally {
              if (a) throw i
            }
          }
        }
      }
      var r = 'undefined' != typeof globalThis ?
          globalThis :
          'undefined' != typeof window ?
          window :
          'undefined' != typeof global ? global :
                                         'undefined' != typeof self ? self : {},
          u = {exports: {}};
      !function() {
        var t = function(a) {
          var c, e = Object.prototype, l = e.hasOwnProperty,
                 t = 'function' == typeof Symbol ? Symbol : {},
                 n = t.iterator || '@@iterator',
                 r = t.asyncIterator || '@@asyncIterator',
                 i = t.toStringTag || '@@toStringTag';
          function o(e, t, r) {
            return Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }),
                   e[t]
          }
          try {
            o({}, '')
          } catch (e) {
            o = function(e, t, r) {
              return e[t] = r
            }
          }
          function s(e, t, r, n) {
            var i, o, a, s, t = t && t.prototype instanceof y ? t : y,
                            t = Object.create(t.prototype), n = new S(n || []);
            return t._invoke = (i = e, o = r, a = n, s = d, function(e, t) {
                     if (s === f)
                       throw new Error('Generator is already running');
                     if (s === p) {
                       if ('throw' === e) throw t;
                       return A()
                     }
                     for (a.method = e, a.arg = t;;) {
                       var r = a.delegate;
                       if (r) {
                         var n = function e(t, r) {
                           var n = t.iterator[r.method];
                           if (n === c) {
                             if (r.delegate = null, 'throw' === r.method) {
                               if (t.iterator.return &&
                                   (r.method = 'return', r.arg = c, e(t, r),
                                    'throw' === r.method))
                                 return g;
                               r.method = 'throw',
                               r.arg = new TypeError(
                                   'The iterator does not provide a \'throw\' method')
                             }
                             return g
                           }
                           var n = u(n, t.iterator, r.arg);
                           if ('throw' === n.type)
                             return r.method = 'throw', r.arg = n.arg,
                                    r.delegate = null, g;
                           n = n.arg;
                           if (!n)
                             return r.method = 'throw',
                                    r.arg = new TypeError(
                                        'iterator result is not an object'),
                                    r.delegate = null, g;
                           {
                             if (!n.done) return n;
                             r[t.resultName] = n.value, r.next = t.nextLoc,
                             'return' !== r.method &&
                                 (r.method = 'next', r.arg = c)
                           }
                           r.delegate = null;
                           return g
                         }(r, a);
                         if (n) {
                           if (n === g) continue;
                           return n
                         }
                       }
                       if ('next' === a.method)
                         a.sent = a._sent = a.arg;
                       else if ('throw' === a.method) {
                         if (s === d) throw s = p, a.arg;
                         a.dispatchException(a.arg)
                       } else
                         'return' === a.method && a.abrupt('return', a.arg);
                       s = f;
                       n = u(i, o, a);
                       if ('normal' === n.type) {
                         if (s = a.done ? p : h, n.arg !== g) return {
                             value: n.arg, done: a.done
                           }
                       } else
                         'throw' === n.type &&
                             (s = p, a.method = 'throw', a.arg = n.arg)
                     }
                   }), t
          }
          function u(e, t, r) {
            try {
              return {
                type: 'normal', arg: e.call(t, r)
              }
            } catch (e) {
              return {
                type: 'throw', arg: e
              }
            }
          }
          a.wrap = s;
          var d = 'suspendedStart', h = 'suspendedYield', f = 'executing',
              p = 'completed', g = {};
          function y() {}
          function m() {}
          function b() {}
          var v = {};
          o(v, n, function() {
            return this
          });
          t = Object.getPrototypeOf, t = t && t(t(E([])));
          t && t !== e && l.call(t, n) && (v = t);
          var _ = b.prototype = y.prototype = Object.create(v);
          function w(e) {
            ['next', 'throw', 'return'].forEach(function(t) {
              o(e, t, function(e) {
                return this._invoke(t, e)
              })
            })
          }
          function x(a, s) {
            var t;
            this._invoke = function(r, n) {
              function e() {
                return new s(function(e, t) {
                  !function t(e, r, n, i) {
                    e = u(a[e], a, r);
                    if ('throw' !== e.type) {
                      var o = e.arg;
                      return (r = o.value) && 'object' == typeof r &&
                              l.call(r, '__await') ?
                          s.resolve(r.__await).then(
                              function(e) {
                                t('next', e, n, i)
                              },
                              function(e) {
                                t('throw', e, n, i)
                              }) :
                          s.resolve(r).then(
                              function(e) {
                                o.value = e, n(o)
                              },
                              function(e) {
                                return t('throw', e, n, i)
                              })
                    }
                    i(e.arg)
                  }(r, n, e, t)
                })
              }
              return t = t ? t.then(e, e) : e()
            }
          }
          function k(e) {
            var t = {tryLoc: e[0]};
            1 in e && (t.catchLoc = e[1]),
                2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                this.tryEntries.push(t)
          }
          function C(e) {
            var t = e.completion || {};
            t.type = 'normal', delete t.arg, e.completion = t
          }
          function S(e) {
            this.tryEntries = [{tryLoc: 'root'}], e.forEach(k, this),
            this.reset(!0)
          }
          function E(t) {
            if (t) {
              var e = t[n];
              if (e) return e.call(t);
              if ('function' == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1, e = function e() {
                  for (; ++r < t.length;)
                    if (l.call(t, r)) return e.value = t[r], e.done = !1, e;
                  return e.value = c, e.done = !0, e
                };
                return e.next = e
              }
            }
            return {
              next: A
            }
          }
          function A() {
            return {
              value: c, done: !0
            }
          }
          return o(_, 'constructor', m.prototype = b), o(b, 'constructor', m),
                 m.displayName = o(b, i, 'GeneratorFunction'),
                 a.isGeneratorFunction =
                     function(e) {
                   e = 'function' == typeof e && e.constructor;
                   return !!e &&
                       (e === m ||
                        'GeneratorFunction' === (e.displayName || e.name))
                 },
                 a.mark =
                     function(e) {
                   return Object.setPrototypeOf ?
                              Object.setPrototypeOf(e, b) :
                              (e.__proto__ = b, o(e, i, 'GeneratorFunction')),
                          e.prototype = Object.create(_), e
                 },
                 a.awrap =
                     function(e) {
                   return {
                     __await: e
                   }
                 },
                 w(x.prototype),
                 o(x.prototype, r,
                   function() {
                     return this
                   }),
                 a.AsyncIterator = x,
                 a.async =
                     function(e, t, r, n, i) {
                   void 0 === i && (i = Promise);
                   var o = new x(s(e, t, r, n), i);
                   return a.isGeneratorFunction(t) ?
                       o :
                       o.next().then(function(e) {
                         return e.done ? e.value : o.next()
                       })
                 },
                 w(_), o(_, i, 'Generator'),
                 o(_, n,
                   function() {
                     return this
                   }),
                 o(_, 'toString',
                   function() {
                     return '[object Generator]'
                   }),
                 a.keys =
                     function(r) {
                   var e, n = [];
                   for (e in r) n.push(e);
                   return n.reverse(), function e() {
                     for (; n.length;) {
                       var t = n.pop();
                       if (t in r) return e.value = t, e.done = !1, e
                     }
                     return e.done = !0, e
                   }
                 },
                 a.values = E, S.prototype = {
                   constructor: S,
                   reset: function(e) {
                     if (this.prev = 0, this.next = 0,
                         this.sent = this._sent = c, this.done = !1,
                         this.delegate = null, this.method = 'next',
                         this.arg = c, this.tryEntries.forEach(C), !e)
                       for (var t in this)
                         't' === t.charAt(0) && l.call(this, t) &&
                             !isNaN(+t.slice(1)) && (this[t] = c)
                   },
                   stop: function() {
                     this.done = !0;
                     var e = this.tryEntries[0].completion;
                     if ('throw' === e.type) throw e.arg;
                     return this.rval
                   },
                   dispatchException: function(r) {
                     if (this.done) throw r;
                     var n = this;
                     function e(e, t) {
                       return o.type = 'throw', o.arg = r, n.next = e,
                              t && (n.method = 'next', n.arg = c), !!t
                     }
                     for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                       var i = this.tryEntries[t], o = i.completion;
                       if ('root' === i.tryLoc) return e('end');
                       if (i.tryLoc <= this.prev) {
                         var a = l.call(i, 'catchLoc'),
                             s = l.call(i, 'finallyLoc');
                         if (a && s) {
                           if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                           if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                         } else if (a) {
                           if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                         } else {
                           if (!s)
                             throw new Error(
                                 'try statement without catch or finally');
                           if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                         }
                       }
                     }
                   },
                   abrupt: function(e, t) {
                     for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                       var n = this.tryEntries[r];
                       if (n.tryLoc <= this.prev && l.call(n, 'finallyLoc') &&
                           this.prev < n.finallyLoc) {
                         var i = n;
                         break
                       }
                     }
                     var o = (i = i && ('break' === e || 'continue' === e) &&
                                      i.tryLoc <= t && t <= i.finallyLoc ?
                                  null :
                                  i) ?
                         i.completion :
                         {};
                     return o.type = e, o.arg = t,
                            i ? (this.method = 'next', this.next = i.finallyLoc,
                                 g) :
                                this.complete(o)
                   },
                   complete: function(e, t) {
                     if ('throw' === e.type) throw e.arg;
                     return 'break' === e.type || 'continue' === e.type ?
                                this.next = e.arg :
                                'return' === e.type ?
                                (this.rval = this.arg = e.arg,
                                 this.method = 'return', this.next = 'end') :
                                'normal' === e.type && t && (this.next = t),
                                g
                   },
                   finish: function(e) {
                     for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                       var r = this.tryEntries[t];
                       if (r.finallyLoc === e)
                         return this.complete(r.completion, r.afterLoc), C(r), g
                     }
                   },
                   catch: function(e) {
                     for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                       var r = this.tryEntries[t];
                       if (r.tryLoc === e) {
                         var n, i = r.completion;
                         return 'throw' === i.type && (n = i.arg, C(r)), n
                       }
                     }
                     throw new Error('illegal catch attempt')
                   },
                   delegateYield: function(e, t, r) {
                     return this.delegate = {
                       iterator: E(e),
                       resultName: t,
                       nextLoc: r
                     },
                            'next' === this.method && (this.arg = c), g
                   }
                 },
                 a
        }(u.exports);
        try {
          regeneratorRuntime = t
        } catch (e) {
          'object' == typeof globalThis ?
              globalThis.regeneratorRuntime = t :
              Function('r', 'regeneratorRuntime = r')(t)
        }
      }();
      var d =
              function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      },
          h = d, p = !h(function() {
                   return 7 != Object.defineProperty({}, 1, {
                     get: function() {
                       return 7
                     }
                   })[1]
                 }),
          g = Function.prototype, y = g.bind, m = g.call, b = y && y.bind(m, m),
          v = y ?
          function(e) {
            return e && b(e)
          } :
          function(e) {
            return e && function() {
              return m.apply(e, arguments)
            }
          },
          w =
              function(e) {
            return e && e.Math == Math && e
          },
          x = w('object' == typeof globalThis && globalThis) ||
          w('object' == typeof window && window) ||
          w('object' == typeof self && self) || w('object' == typeof r && r) ||
          function() {
            return this
          }() ||
          Function('return this')(),
          k = x, C = k.TypeError,
          S =
              function(e) {
            if (null == e) throw C('Can\'t call method on ' + e);
            return e
          },
          E = x, A = S, O = E.Object,
          L =
              function(e) {
            return O(A(e))
          },
          I = v, T = L, F = I({}.hasOwnProperty),
          R = Object.hasOwn ||
          function(e, t) {
            return F(T(e), t)
          },
          P = p, N = R, D = Function.prototype,
          M = P && Object.getOwnPropertyDescriptor, z = N(D, 'name'),
          K = z && 'something' === function() {}.name,
          U = z && (!P || M(D, 'name').configurable),
          j = {EXISTS: z, PROPER: K, CONFIGURABLE: U}, B = {},
          Y =
              function(e) {
            return 'function' == typeof e
          },
          H = Y,
          G =
              function(e) {
            return 'object' == typeof e ? null !== e : H(e)
          },
          W = x, Z = G, V = W.document, J = Z(V) && Z(V.createElement),
          X =
              function(e) {
            return J ? V.createElement(e) : {}
          },
          $ = p, q = d, Q = X, ee = !$ && !q(function() {
                                 return 7 !=
                                     Object
                                         .defineProperty(Q('div'), 'a', {
                                           get: function() {
                                             return 7
                                           }
                                         })
                                         .a
                               }),
          te = p, re = d, ne = te && re(function() {
                                 return 42 !=
                                     Object
                                         .defineProperty(
                                             function() {}, 'prototype',
                                             {value: 42, writable: !1})
                                         .prototype
                               }),
          ie = x, oe = G, ae = ie.String, se = ie.TypeError,
          ce =
              function(e) {
            if (oe(e)) return e;
            throw se(ae(e) + ' is not an object')
          },
          le = Function.prototype.call,
          ue = le.bind ? le.bind(le) :
                         function() {
                           return le.apply(le, arguments)
                         },
          de = x, he = Y,
          fe =
              function(e) {
            return he(e) ? e : void 0
          },
          pe =
              function(e, t) {
            return arguments.length < 2 ? fe(de[e]) : de[e] && de[e][t]
          },
          ge = v, ye = ge({}.isPrototypeOf), me = pe,
          be = me('navigator', 'userAgent') || '', ve = x, _e = be,
          we = ve.process, xe = ve.Deno,
          ke = we && we.versions || xe && xe.version, Ce = ke && ke.v8, Se, Ee;
      Ce &&
          (Se = Ce.split('.'),
           Ee = 0 < Se[0] && Se[0] < 4 ? 1 : +(Se[0] + Se[1])),
          !Ee && _e &&
          (Se = _e.match(/Edge\/(\d+)/),
           (!Se || 74 <= Se[1]) &&
               (Se = _e.match(/Chrome\/(\d+)/), Se && (Ee = +Se[1])));
      var Ae = Ee, Oe = Ae, Le = d,
          Ie = !!Object.getOwnPropertySymbols && !Le(function() {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) ||
                !Symbol.sham && Oe && Oe < 41
          }),
          Te = Ie,
          Fe = Te && !Symbol.sham && 'symbol' == typeof Symbol.iterator, Re = x,
          Pe = pe, Ne = Y, De = ye, Me = Fe, ze = Re.Object,
          Ke = Me ?
          function(e) {
            return 'symbol' == typeof e
          } :
          function(e) {
            var t = Pe('Symbol');
            return Ne(t) && De(t.prototype, ze(e))
          },
          Ue = x, je = Ue.String,
          Be =
              function(e) {
            try {
              return je(e)
            } catch (e) {
              return 'Object'
            }
          },
          Ye = x, He = Y, Ge = Be, We = Ye.TypeError,
          Ze =
              function(e) {
            if (He(e)) return e;
            throw We(Ge(e) + ' is not a function')
          },
          Ve = Ze,
          Je =
              function(e, t) {
            t = e[t];
            return null == t ? void 0 : Ve(t)
          },
          Xe = x, $e = ue, qe = Y, Qe = G, et = Xe.TypeError,
          tt =
              function(e, t) {
            var r, n;
            if ('string' === t && qe(r = e.toString) && !Qe(n = $e(r, e)))
              return n;
            if (qe(r = e.valueOf) && !Qe(n = $e(r, e))) return n;
            if ('string' !== t && qe(r = e.toString) && !Qe(n = $e(r, e)))
              return n;
            throw et('Can\'t convert object to primitive value')
          },
          rt = {exports: {}}, nt = x, it = Object.defineProperty,
          ot =
              function(t, r) {
            try {
              it(nt, t, {value: r, configurable: !0, writable: !0})
            } catch (e) {
              nt[t] = r
            }
            return r
          },
          at = x, st = ot, ct = '__core-js_shared__', lt = at[ct] || st(ct, {}),
          ut = lt, dt = ut;
      (rt.exports = function(e, t) {
        return dt[e] || (dt[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: '3.20.2',
        mode: 'global',
        copyright: '\xa9 2022 Denis Pushkarev (zloirock.ru)'
      });
      var ht = v, ft = 0, pt = Math.random(), gt = ht(1..toString),
          yt =
              function(e) {
            return 'Symbol(' + (void 0 === e ? '' : e) + ')_' +
                gt(++ft + pt, 36)
          },
          mt = x, bt = rt.exports, vt = R, _t = yt, wt = Ie, xt = Fe,
          kt = bt('wks'), Ct = mt.Symbol, St = Ct && Ct.for,
          Et = xt ? Ct : Ct && Ct.withoutSetter || _t,
          At =
              function(e) {
            var t;
            return vt(kt, e) && (wt || 'string' == typeof kt[e]) ||
                       (t = 'Symbol.' + e,
                        wt && vt(Ct, e) ? kt[e] = Ct[e] :
                                          kt[e] = (xt && St ? St : Et)(t)),
                   kt[e]
          },
          Ot = x, Lt = ue, It = G, Tt = Ke, Ft = Je, Rt = tt, Pt = At,
          Nt = Ot.TypeError, Dt = Pt('toPrimitive'),
          Mt =
              function(e, t) {
            if (!It(e) || Tt(e)) return e;
            var r = Ft(e, Dt);
            if (r) {
              if (r = Lt(r, e, t = void 0 === t ? 'default' : t),
                  !It(r) || Tt(r))
                return r;
              throw Nt('Can\'t convert object to primitive value')
            }
            return Rt(e, t = void 0 === t ? 'number' : t)
          },
          zt = Mt, Kt = Ke,
          Ut =
              function(e) {
            e = zt(e, 'string');
            return Kt(e) ? e : e + ''
          },
          jt = x, Bt = p, Yt = ee, Ht = ne, Gt = ce, Wt = Ut, Zt = jt.TypeError,
          Vt = Object.defineProperty, Jt = Object.getOwnPropertyDescriptor,
          Xt = 'enumerable', $t = 'configurable', Qt = 'writable';
      B.f = Bt ? Ht ? function(e, t, r) {
        var n;
        return Gt(e), t = Wt(t), Gt(r),
                      'function' == typeof e && 'prototype' === t &&
                   'value' in r && Qt in r && !r[Qt] &&
                   ((n = Jt(e, t)) && n[Qt] && (e[t] = r.value, r = {
                        configurable: ($t in r ? r : n)[$t],
                        enumerable: (Xt in r ? r : n)[Xt],
                        writable: !1
                      })),
                      Vt(e, t, r)
      } : Vt : function(e, t, r) {
        if (Gt(e), t = Wt(t), Gt(r), Yt) try {
            return Vt(e, t, r)
          } catch (e) {
          }
        if ('get' in r || 'set' in r) throw Zt('Accessors not supported');
        return 'value' in r && (e[t] = r.value), e
      };
      var er = p, tr = j.EXISTS, rr = v, nr = B.f, ir = Function.prototype,
          or = rr(ir.toString),
          ar =
              /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
          sr = rr(ar.exec), cr = 'name';
      er && !tr && nr(ir, cr, {
        configurable: !0,
        get: function() {
          try {
            return sr(ar, or(this))[1]
          } catch (e) {
            return ''
          }
        }
      });
      var lr = {}, ur = {}, dr = {}.propertyIsEnumerable,
          hr = Object.getOwnPropertyDescriptor, fr = hr && !dr.call({1: 2}, 1);
      ur.f = fr ? function(e) {
        e = hr(this, e);
        return !!e && e.enumerable
      } : dr;
      var pr =
              function(e, t) {
        return {
          enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e),
              value: t
        }
      },
          gr = v, yr = gr({}.toString), mr = gr(''.slice),
          br =
              function(e) {
            return mr(yr(e), 8, -1)
          },
          vr = x, _r = v, wr = d, xr = br, kr = vr.Object, Cr = _r(''.split),
          Sr = wr(function() {
            return !kr('z').propertyIsEnumerable(0)
          }) ?
          function(e) {
            return 'String' == xr(e) ? Cr(e, '') : kr(e)
          } :
          kr,
          Er = Sr, Ar = S,
          Or =
              function(e) {
            return Er(Ar(e))
          },
          Lr = p, Ir = ue, Tr = ur, Fr = pr, Rr = Or, Pr = Ut, Nr = R, Dr = ee,
          Mr = Object.getOwnPropertyDescriptor;
      lr.f = Lr ? Mr : function(e, t) {
        if (e = Rr(e), t = Pr(t), Dr) try {
            return Mr(e, t)
          } catch (e) {
          }
        if (Nr(e, t)) return Fr(!Ir(Tr.f, e, t), e[t])
      };
      var zr = p, Kr = B, Ur = pr,
          jr = zr ?
          function(e, t, r) {
            return Kr.f(e, t, Ur(1, r))
          } :
          function(e, t, r) {
            return e[t] = r, e
          },
          Br = {exports: {}}, Yr = v, Hr = Y, Gr = ut,
          Wr = Yr(Function.toString);
      Hr(Gr.inspectSource) || (Gr.inspectSource = function(e) {
        return Wr(e)
      });
      var Zr = Gr.inspectSource, Vr = x, Jr = Y, Xr = Zr, $r = Vr.WeakMap,
          qr = Jr($r) && /native code/.test(Xr($r)), Qr = rt.exports, en = yt,
          tn = Qr('keys'),
          rn =
              function(e) {
            return tn[e] || (tn[e] = en(e))
          },
          nn = {}, on = qr, an = x, sn = v, cn = G, ln = jr, un = R, dn = ut,
          hn = rn, fn = nn, pn = 'Object already initialized',
          gn = an.TypeError, yn = an.WeakMap, mn, bn, vn, _n = function(e) {
            return vn(e) ? bn(e) : mn(e, {})
          }, wn = function(r) {
            return function(e) {
              var t;
              if (!cn(e) || (t = bn(e)).type !== r)
                throw gn('Incompatible receiver, ' + r + ' required');
              return t
            }
          }, xn, kn, Cn, Sn, mn, bn, vn, En;
      vn = on || dn.state ? (xn = dn.state || (dn.state = new yn),
                             kn = sn(xn.get), Cn = sn(xn.has), Sn = sn(xn.set),
                             mn =
                                 function(e, t) {
                                   if (Cn(xn, e)) throw new gn(pn);
                                   return t.facade = e, Sn(xn, e, t), t
                                 },
                             bn =
                                 function(e) {
                                   return kn(xn, e) || {}
                                 },
                             function(e) {
                               return Cn(xn, e)
                             }) :
                            (En = hn('state'), fn[En] = !0,
                             mn =
                                 function(e, t) {
                                   if (un(e, En)) throw new gn(pn);
                                   return t.facade = e, ln(e, En, t), t
                                 },
                             bn =
                                 function(e) {
                                   return un(e, En) ? e[En] : {}
                                 },
                             function(e) {
                               return un(e, En)
                             });
      var An = {set: mn, get: bn, has: vn, enforce: _n, getterFor: wn}, On = x,
          Ln = Y, In = R, Tn = jr, Fn = ot, Rn = Zr, Pn = An,
          Nn = j.CONFIGURABLE, Dn = Pn.get, Mn = Pn.enforce,
          zn = String(String).split('String');
      (Br.exports = function(e, t, r, n) {
        var i = !!n && !!n.unsafe, o = !!n && !!n.enumerable,
            a = !!n && !!n.noTargetGet, s = n && void 0 !== n.name ? n.name : t;
        Ln(r) &&
            ('Symbol(' === String(s).slice(0, 7) &&
                 (s = '[' + String(s).replace(/^Symbol\(([^)]*)\)/, '$1') +
                      ']'),
             (!In(r, 'name') || Nn && r.name !== s) && Tn(r, 'name', s),
             (n = Mn(r)).source ||
                 (n.source = zn.join('string' == typeof s ? s : ''))),
            e !== On ? (i ? !a && e[t] && (o = !0) : delete e[t],
                        o ? e[t] = r : Tn(e, t, r)) :
                       o ? e[t] = r : Fn(t, r)
      })(Function.prototype, 'toString', function() {
        return Ln(this) && Dn(this).source || Rn(this)
      });
      var Kn = {}, Un = Math.ceil, jn = Math.floor,
          Bn =
              function(e) {
            e = +e;
            return e != e || 0 == e ? 0 : (0 < e ? jn : Un)(e)
          },
          Yn = Bn, Hn = Math.max, Gn = Math.min,
          Wn =
              function(e, t) {
            e = Yn(e);
            return e < 0 ? Hn(e + t, 0) : Gn(e, t)
          },
          Zn = Bn, Vn = Math.min,
          Jn =
              function(e) {
            return 0 < e ? Vn(Zn(e), 9007199254740991) : 0
          },
          Xn = Jn,
          $n =
              function(e) {
            return Xn(e.length)
          },
          qn = Or, Qn = Wn, ei = $n,
          ti =
              function(s) {
            return function(e, t, r) {
              var n, i = qn(e), o = ei(i), a = Qn(r, o);
              if (s && t != t) {
                for (; a < o;)
                  if ((n = i[a++]) != n) return !0
              } else
                for (; a < o; a++)
                  if ((s || a in i) && i[a] === t) return s || a || 0;
              return !s && -1
            }
          },
          ri = {includes: ti(!0), indexOf: ti(!1)}, ni = v, ii = R, oi = Or,
          ai = ri.indexOf, si = nn, ci = ni([].push),
          li =
              function(e, t) {
            var r, n = oi(e), i = 0, o = [];
            for (r in n) !ii(si, r) && ii(n, r) && ci(o, r);
            for (; t.length > i;) ii(n, r = t[i++]) && (~ai(o, r) || ci(o, r));
            return o
          },
          ui =
              [
                'constructor', 'hasOwnProperty', 'isPrototypeOf',
                'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'
              ],
          di = li, hi = ui, fi = hi.concat('length', 'prototype');
      Kn.f = Object.getOwnPropertyNames || function(e) {
        return di(e, fi)
      };
      var pi = {};
      pi.f = Object.getOwnPropertySymbols;
      var gi = pe, yi = v, mi = Kn, bi = pi, vi = ce, _i = yi([].concat),
          wi = gi('Reflect', 'ownKeys') ||
          function(e) {
            var t = mi.f(vi(e)), r = bi.f;
            return r ? _i(t, r(e)) : t
          },
          xi = R, ki = wi, Ci = lr, Si = B,
          Ei =
              function(e, t, r) {
            for (var n = ki(t), i = Si.f, o = Ci.f, a = 0; a < n.length; a++) {
              var s = n[a];
              xi(e, s) || r && xi(r, s) || i(e, s, o(t, s))
            }
          },
          Ai = d, Oi = Y, Li = /#|\.prototype\./,
          Ii =
              function(e, t) {
            e = Fi[Ti(e)];
            return e == Pi || e != Ri && (Oi(t) ? Ai(t) : !!t)
          },
          Ti = Ii.normalize =
              function(e) {
            return String(e).replace(Li, '.').toLowerCase()
          },
          Fi = Ii.data = {}, Ri = Ii.NATIVE = 'N', Pi = Ii.POLYFILL = 'P',
          Ni = Ii, Di = x, Mi = lr.f, zi = jr, Ki = Br.exports, Ui = ot,
          ji = Ei, Bi = Ni,
          Yi =
              function(e, t) {
            var r, n, i,
                o = e.target, a = e.global, s = e.stat,
                c = a ? Di : s ? Di[o] || Ui(o, {}) : (Di[o] || {}).prototype;
            if (c)
              for (r in t) {
                if (n = t[r],
                    i = e.noTargetGet ? (i = Mi(c, r)) && i.value : c[r],
                    !Bi(a ? r : o + (s ? '.' : '#') + r, e.forced) &&
                        void 0 !== i) {
                  if (typeof n == typeof i) continue;
                  ji(n, i)
                }
                (e.sham || i && i.sham) && zi(n, 'sham', !0), Ki(c, r, n, e)
              }
          },
          Hi = v, Gi = Hi(1..valueOf), Wi = At, Zi = Wi('toStringTag'), Vi = {};
      Vi[Zi] = 'z';
      var Ji = '[object z]' === String(Vi), Xi = x, $i = Ji, qi = Y, Qi = br,
          eo = At, to = eo('toStringTag'), ro = Xi.Object,
          no = 'Arguments' == Qi(function() {
                 return arguments
               }()),
          io =
              function(e, t) {
            try {
              return e[t]
            } catch (e) {
            }
          },
          oo = $i ?
          Qi :
          function(e) {
            var t;
            return void 0 === e ?
                'Undefined' :
                null === e ?
                'Null' :
                'string' == typeof (e = io(t = ro(e), to)) ?
                e :
                no ? Qi(t) :
                     'Object' == (e = Qi(t)) && qi(t.callee) ? 'Arguments' : e
          },
          ao = x, so = oo, co = ao.String,
          lo =
              function(e) {
            if ('Symbol' === so(e))
              throw TypeError('Cannot convert a Symbol value to a string');
            return co(e)
          },
          uo = x, ho = Bn, fo = lo, po = S, go = uo.RangeError,
          yo =
              function(e) {
            var t = fo(po(this)), r = '', n = ho(e);
            if (n < 0 || n == 1 / 0) throw go('Wrong number of repetitions');
            for (; 0 < n; (n >>>= 1) && (t += t)) 1&n && (r += t);
            return r
          },
          mo = Yi, bo = x, vo = v, _o = Bn, wo = Gi, xo = yo, ko = d,
          Co = bo.RangeError, So = bo.String, Eo = Math.floor, Ao = vo(xo),
          Oo = vo(''.slice), Lo = vo(1..toFixed),
          Io =
              function(e, t, r) {
            return 0 === t ?
                r :
                t % 2 == 1 ? Io(e, t - 1, r * e) : Io(e * e, t / 2, r)
          },
          To =
              function(e) {
            for (var t = 0, r = e; 4096 <= r;) t += 12, r /= 4096;
            for (; 2 <= r;) t += 1, r /= 2;
            return t
          },
          Fo =
              function(e, t, r) {
            for (var n = -1, i = r; ++n < 6;)
              i += t * e[n], e[n] = i % 1e7, i = Eo(i / 1e7)
          },
          Ro =
              function(e, t) {
            for (var r = 6, n = 0; 0 <= --r;)
              n += e[r], e[r] = Eo(n / t), n = n % t * 1e7
          },
          Po =
              function(e) {
            for (var t, r = 6, n = ''; 0 <= --r;)
              '' === n && 0 !== r && 0 === e[r] ||
                  (t = So(e[r]),
                   n = '' === n ? t : n + Ao('0', 7 - t.length) + t);
            return n
          },
          No = ko(function() {
                 return '0.000' !== Lo(8e-5, 3) || '1' !== Lo(.9, 0) ||
                     '1.25' !== Lo(1.255, 2) ||
                     '1000000000000000128' !== Lo(0xde0b6b3a7640080, 0)
               }) ||
          !ko(function() {
                 Lo({})
               });
      mo({target: 'Number', proto: !0, forced: No}, {
        toFixed: function(e) {
          var t, r, n = wo(this), i = _o(e), o = [0, 0, 0, 0, 0, 0], a = '',
                    e = '0';
          if (i < 0 || 20 < i) throw Co('Incorrect fraction digits');
          if (n != n) return 'NaN';
          if (n <= -1e21 || 1e21 <= n) return So(n);
          if (n < 0 && (a = '-', n = -n), 1e-21 < n)
            if (n = (r = To(n * Io(2, 69, 1)) - 69) < 0 ? n * Io(2, -r, 1) :
                                                          n / Io(2, r, 1),
                n *= 4503599627370496, 0 < (r = 52 - r)) {
              for (Fo(o, 0, n), t = i; 7 <= t;) Fo(o, 1e7, 0), t -= 7;
              for (Fo(o, Io(10, t, 1), 0), t = r - 1; 23 <= t;)
                Ro(o, 1 << 23), t -= 23;
              Ro(o, 1 << t), Fo(o, 1, 1), Ro(o, 2), e = Po(o)
            } else
              Fo(o, 0, n), Fo(o, 1 << -r, 0), e = Po(o) + Ao('0', i);
          return e = 0 < i ? a +
                  ((r = e.length) <= i ? '0.' + Ao('0', i - r) + e :
                                         Oo(e, 0, r - i) + '.' + Oo(e, r - i)) :
                             a + e
        }
      });
      var Do = Ji, Mo = oo, zo = Do ? {}.toString : function() {
        return '[object ' + Mo(this) + ']'
      }, Ko = Ji, Uo = Br.exports, jo = zo;
      Ko || Uo(Object.prototype, 'toString', jo, {unsafe: !0});
      var Bo = x, Yo = Bo.Promise, Ho = Br.exports,
          Go =
              function(e, t, r) {
            for (var n in t) Ho(e, n, t[n], r);
            return e
          },
          Wo = x, Zo = Y, Vo = Wo.String, Jo = Wo.TypeError,
          Xo =
              function(e) {
            if ('object' == typeof e || Zo(e)) return e;
            throw Jo('Can\'t set ' + Vo(e) + ' as a prototype')
          },
          $o = v, qo = ce, Qo = Xo,
          ea = Object.setPrototypeOf ||
          ('__proto__' in {} ?
               function() {
                 var r, n = !1, e = {};
                 try {
                   (r = $o(Object
                               .getOwnPropertyDescriptor(
                                   Object.prototype, '__proto__')
                               .set))(e, []),
                       n = e instanceof Array
                 } catch (e) {
                 }
                 return function(e, t) {
                   return qo(e), Qo(t), n ? r(e, t) : e.__proto__ = t, e
                 }
               }() :
               void 0),
          ta = B.f, ra = R, na = At, ia = na('toStringTag'),
          oa =
              function(e, t, r) {
            (e = e && !r ? e.prototype : e) && !ra(e, ia) &&
                ta(e, ia, {configurable: !0, value: t})
          },
          aa = pe, sa = B, ca = At, la = p, ua = ca('species'),
          da =
              function(e) {
            var t = aa(e), e = sa.f;
            la && t && !t[ua] && e(t, ua, {
              configurable: !0,
              get: function() {
                return this
              }
            })
          },
          ha = x, fa = ye, pa = ha.TypeError,
          ga =
              function(e, t) {
            if (fa(t, e)) return e;
            throw pa('Incorrect invocation')
          },
          ya = v, ma = Ze, ba = ya(ya.bind),
          va =
              function(e, t) {
            return ma(e), void 0 === t ? e : ba ? ba(e, t) : function() {
              return e.apply(t, arguments)
            }
          },
          _a = {}, wa = At, xa = _a, ka = wa('iterator'), Ca = Array.prototype,
          Sa =
              function(e) {
            return void 0 !== e && (xa.Array === e || Ca[ka] === e)
          },
          Ea = oo, Aa = Je, Oa = _a, La = At, Ia = La('iterator'),
          Ta =
              function(e) {
            if (null != e) return Aa(e, Ia) || Aa(e, '@@iterator') || Oa[Ea(e)]
          },
          Fa = x, Ra = ue, Pa = Ze, Na = ce, Da = Be, Ma = Ta,
          za = Fa.TypeError,
          Ka =
              function(e, t) {
            t = arguments.length < 2 ? Ma(e) : t;
            if (Pa(t)) return Na(Ra(t, e));
            throw za(Da(e) + ' is not iterable')
          },
          Ua = ue, ja = ce, Ba = Je,
          Ya =
              function(e, t, r) {
            var n, i;
            ja(e);
            try {
              if (!(n = Ba(e, 'return'))) {
                if ('throw' === t) throw r;
                return r
              }
              n = Ua(n, e)
            } catch (e) {
              i = !0, n = e
            }
            if ('throw' === t) throw r;
            if (i) throw n;
            return ja(n), r
          },
          Ha = x, Ga = va, Wa = ue, Za = ce, Va = Be, Ja = Sa, Xa = $n, $a = ye,
          qa = Ka, Qa = Ta, es = Ya, ts = Ha.TypeError, rs = function(e, t) {
            this.stopped = e, this.result = t
          }, ns = rs.prototype, is = function(e, t, r) {
            function n(e) {
              return o && es(o, 'normal', e), new rs(!0, e)
            }
            function i(e) {
              return h ? (Za(e), p ? g(e[0], e[1], n) : g(e[0], e[1])) :
                         p ? g(e, n) : g(e)
            }
            var o, a, s, c, l, u, d = r && r.that, h = !(!r || !r.AS_ENTRIES),
                                  f = !(!r || !r.IS_ITERATOR),
                                  p = !(!r || !r.INTERRUPTED), g = Ga(t, d);
            if (f)
              o = e;
            else {
              if (!(f = Qa(e))) throw ts(Va(e) + ' is not iterable');
              if (Ja(f)) {
                for (a = 0, s = Xa(e); a < s; a++)
                  if ((c = i(e[a])) && $a(ns, c)) return c;
                return new rs(!1)
              }
              o = qa(e, f)
            }
            for (l = o.next; !(u = Wa(l, o)).done;) {
              try {
                c = i(u.value)
              } catch (e) {
                es(o, 'throw', e)
              }
              if ('object' == typeof c && c && $a(ns, c)) return c
            }
            return new rs(!1)
          }, os = At, as = os('iterator'), ss = !1;
      try {
        var cs = 0, ls = {
          next: function() {
            return {
              done: !!cs++
            }
          },
          return: function() {
            ss = !0
          }
        };
        ls[as] = function() {
          return this
        }, Array.from(ls, function() {
          throw 2
        })
      } catch (e) {
      }
      var us =
              function(e, t) {
        if (!t && !ss) return !1;
        var r = !1;
        try {
          var n = {};
          n[as] = function() {
            return {
              next: function() {
                return {
                  done: r = !0
                }
              }
            }
          }, e(n)
        } catch (e) {
        }
        return r
      },
          ds = v, hs = d, fs = Y, ps = oo, gs = pe, ys = Zr, ms = function() {},
          bs = [], vs = gs('Reflect', 'construct'),
          _s = /^\s*(?:class|function)\b/, ws = ds(_s.exec), xs = !_s.exec(ms),
          ks = function(e) {
            if (!fs(e)) return !1;
            try {
              return vs(ms, bs, e), !0
            } catch (e) {
              return !1
            }
          }, Cs = function(e) {
            if (!fs(e)) return !1;
            switch (ps(e)) {
              case 'AsyncFunction':
              case 'GeneratorFunction':
              case 'AsyncGeneratorFunction':
                return !1
            }
            try {
              return xs || !!ws(_s, ys(e))
            } catch (e) {
              return !0
            }
          };
      Cs.sham = !0;
      var Ss = !vs || hs(function() {
        var e;
        return ks(ks.call) || !ks(Object) || !ks(function() {
                 e = !0
               }) ||
            e
      }) ?
          Cs :
          ks,
          Es = x, As = Ss, Os = Be, Ls = Es.TypeError,
          Is =
              function(e) {
            if (As(e)) return e;
            throw Ls(Os(e) + ' is not a constructor')
          },
          Ts = ce, Fs = Is, Rs = At, Ps = Rs('species'),
          Ns =
              function(e, t) {
            var r, e = Ts(e).constructor;
            return void 0 === e || null == (r = Ts(e)[Ps]) ? t : Fs(r)
          },
          Ds = Function.prototype, Ms = Ds.apply, zs = Ds.bind, Ks = Ds.call,
          Us = 'object' == typeof Reflect && Reflect.apply ||
          (zs ? Ks.bind(Ms) :
                function() {
                  return Ks.apply(Ms, arguments)
                }),
          js = pe, Bs = js('document', 'documentElement'), Ys = v,
          Hs = Ys([].slice), Gs = be,
          Ws = /(?:ipad|iphone|ipod).*applewebkit/i.test(Gs), Zs = br, Vs = x,
          Js = 'process' == Zs(Vs.process), Xs = x, $s = Us, qs = va, Qs = Y,
          ec = R, tc = d, rc = Bs, nc = Hs, ic = X, oc = Ws, ac = Js,
          sc = Xs.setImmediate, cc = Xs.clearImmediate, lc = Xs.process,
          uc = Xs.Dispatch, dc = Xs.Function, hc = Xs.MessageChannel,
          fc = Xs.String, pc = 0, gc = {}, yc = 'onreadystatechange', mc, bc,
          vc, _c;
      try {
        mc = Xs.location
      } catch (e) {
      }
      var wc = function(e) {
        var t;
        ec(gc, e) && (t = gc[e], delete gc[e], t())
      }, xc = function(e) {
        return function() {
          wc(e)
        }
      }, kc = function(e) {
        wc(e.data)
      }, Cc = function(e) {
        Xs.postMessage(fc(e), mc.protocol + '//' + mc.host)
      };
      sc && cc ||
          (sc =
               function(e) {
                 var t = nc(arguments, 1);
                 return gc[++pc] = function() {
                   $s(Qs(e) ? e : dc(e), void 0, t)
                 }, bc(pc), pc
               },
           cc =
               function(e) {
                 delete gc[e]
               },
           ac ?
               bc =
                   function(e) {
                     lc.nextTick(xc(e))
                   } :
               uc&& uc.now ?
               bc =
                       function(e) {
                         uc.now(xc(e))
                       } :
               hc && !oc ?
               (vc = new hc, _c = vc.port2, vc.port1.onmessage = kc,
                bc = qs(_c.postMessage, _c)) :
               Xs.addEventListener && Qs(Xs.postMessage) && !Xs.importScripts &&
                               mc && 'file:' !== mc.protocol && !tc(Cc) ?
               (bc = Cc, Xs.addEventListener('message', kc, !1)) :
               bc = yc in ic('script') ?
               function(e) {
                 rc.appendChild(ic('script'))[yc] = function() {
                   rc.removeChild(this), wc(e)
                 }
               } :
               function(e) {
                 setTimeout(xc(e), 0)
               });
      var Sc = {set: sc, clear: cc}, Ec = be, Ac = x,
          Oc = /ipad|iphone|ipod/i.test(Ec) && void 0 !== Ac.Pebble, Lc = be,
          Ic = /web0s(?!.*chrome)/i.test(Lc), Tc = x, Fc = va, Rc = lr.f,
          Pc = Sc.set, Nc = Ws, Dc = Oc, Mc = Ic, zc = Js,
          Kc = Tc.MutationObserver || Tc.WebKitMutationObserver,
          Uc = Tc.document, jc = Tc.process, Bc = Tc.Promise,
          Yc = Rc(Tc, 'queueMicrotask'), Hc = Yc && Yc.value, Gc, Wc, Zc, Vc,
          Jc, Xc, $c, qc;
      Hc ||
          (Gc =
               function() {
                 var e, t;
                 for (zc && (e = jc.domain) && e.exit(); Wc;) {
                   t = Wc.fn, Wc = Wc.next;
                   try {
                     t()
                   } catch (e) {
                     throw Wc ? Vc() : Zc = void 0, e
                   }
                 }
                 Zc = void 0, e && e.enter()
               },
           Vc = Nc || zc || Mc || !Kc || !Uc ?
               !Dc && Bc && Bc.resolve ?
               ($c = Bc.resolve(void 0), $c.constructor = Bc,
                qc = Fc($c.then, $c),
                function() {
                  qc(Gc)
                }) :
               zc ?
               function() {
                 jc.nextTick(Gc)
               } :
               (Pc = Fc(Pc, Tc),
                function() {
                  Pc(Gc)
                }) :
               (Jc = !0, Xc = Uc.createTextNode(''),
                new Kc(Gc).observe(Xc, {characterData: !0}), function() {
                  Xc.data = Jc = !Jc
                }));
      var Qc = Hc || function(e) {
        e = {fn: e, next: void 0};
        Zc && (Zc.next = e), Wc || (Wc = e, Vc()), Zc = e
      }, el = {}, tl = Ze, rl = function(e) {
        var r, n;
        this.promise = new e(function(e, t) {
          if (void 0 !== r || void 0 !== n)
            throw TypeError('Bad Promise constructor');
          r = e, n = t
        }),
        this.resolve = tl(r), this.reject = tl(n)
      };
      el.f = function(e) {
        return new rl(e)
      };
      var nl = ce, il = G, ol = el, al = function(e, t) {
        if (nl(e), il(t) && t.constructor === e) return t;
        e = ol.f(e);
        return (0, e.resolve)(t), e.promise
      }, sl = x, cl = function(e, t) {
        var r = sl.console;
        r && r.error && (1 == arguments.length ? r.error(e) : r.error(e, t))
      }, ll = function(e) {
        try {
          return {
            error: !1, value: e()
          }
        } catch (e) {
          return {
            error: !0, value: e
          }
        }
      }, ul = function() {
        this.head = null, this.tail = null
      };
      ul.prototype = {
        add: function(e) {
          e = {item: e, next: null};
          this.head ? this.tail.next = e : this.head = e, this.tail = e
        },
        get: function() {
          var e = this.head;
          if (e)
            return this.head = e.next, this.tail === e && (this.tail = null),
                   e.item
        }
      };
      var dl = ul, hl = 'object' == typeof window, fl = Yi, pl = x, gl = pe,
          yl = ue, ml = Yo, bl = Br.exports, vl = Go, _l = ea, wl = oa, xl = da,
          kl = Ze, Cl = Y, Sl = G, El = ga, Al = Zr, Ol = is, Ll = us, Il = Ns,
          Tl = Sc.set, Fl = Qc, Rl = al, Pl = cl, Nl = el, Dl = ll, Ml = dl,
          zl = An, Kl = Ni, Ul = At, jl = hl, Bl = Js, Yl = Ae,
          Hl = Ul('species'), Gl = 'Promise', Wl = zl.getterFor(Gl),
          Zl = zl.set, Vl = zl.getterFor(Gl), Jl = ml && ml.prototype, Xl = ml,
          $l = Jl, ql = pl.TypeError, Ql = pl.document, eu = pl.process,
          tu = Nl.f, ru = tu, nu = !!(Ql && Ql.createEvent && pl.dispatchEvent),
          iu = Cl(pl.PromiseRejectionEvent), ou = 'unhandledrejection',
          au = 'rejectionhandled', su = 0, cu = 1, lu = 2, uu = 1, du = 2,
          hu = !1, fu, pu, gu, yu,
          mu =
              Kl(Gl,
                 function() {
                   var e = Al(Xl), t = e !== String(Xl);
                   if (!t && 66 === Yl) return !0;
                   if (51 <= Yl && /native code/.test(e)) return !1;
                   var r = new Xl(function(e) {
                     e(1)
                   }),
                       e = function(e) {
                         e(function() {}, function() {})
                       };
                   return (r.constructor = {})[Hl] = e,
                                           !(hu = r.then(function() {})
                                                      instanceof e) ||
                              !t && jl && !iu
                 }),
          bu = mu || !Ll(function(e) {
                 Xl.all(e).catch(function() {})
               }),
          vu = function(e) {
            var t;
            return !(!Sl(e) || !Cl(t = e.then)) && t
          }, _u = function(e, t) {
            var r, n, i, o = t.value, a = t.state == cu, s = a ? e.ok : e.fail,
                         c = e.resolve, l = e.reject, u = e.domain;
            try {
              s ? (a || (t.rejection === du && Su(t), t.rejection = uu),
                   !0 === s ?
                       r = o :
                       (u && u.enter(), r = s(o), u && (u.exit(), i = !0)),
                   r === e.promise ? l(ql('Promise-chain cycle')) :
                                     (n = vu(r)) ? yl(n, r, c, l) : c(r)) :
                  l(o)
            } catch (e) {
              u && !i && u.exit(), l(e)
            }
          }, wu = function(r, n) {
            r.notified || (r.notified = !0, Fl(function() {
                             for (var e, t = r.reactions; e = t.get();)
                               _u(e, r);
                             r.notified = !1, n && !r.rejection && ku(r)
                           }))
          }, xu = function(e, t, r) {
            var n, i;
            nu ? ((n = Ql.createEvent('Event')).promise = t, n.reason = r,
                  n.initEvent(e, !1, !0), pl.dispatchEvent(n)) :
                 n = {promise: t, reason: r},
                 !iu && (i = pl['on' + e]) ?
                i(n) :
                e === ou && Pl('Unhandled promise rejection', r)
          }, ku = function(i) {
            yl(Tl, pl, function() {
              var e, t = i.facade, r = i.value, n = Cu(i);
              if (n &&
                  (e = Dl(function() {
                     Bl ? eu.emit('unhandledRejection', r, t) : xu(ou, t, r)
                   }),
                   i.rejection = Bl || Cu(i) ? du : uu, e.error))
                throw e.value
            })
          }, Cu = function(e) {
            return e.rejection !== uu && !e.parent
          }, Su = function(t) {
            yl(Tl, pl, function() {
              var e = t.facade;
              Bl ? eu.emit('rejectionHandled', e) : xu(au, e, t.value)
            })
          }, Eu = function(t, r, n) {
            return function(e) {
              t(r, e, n)
            }
          }, Au = function(e, t, r) {
            e.done ||
                (e.done = !0, (e = r ? r : e).value = t, e.state = lu,
                 wu(e, !0))
          }, Ou = function(r, e, t) {
            if (!r.done) {
              r.done = !0, t && (r = t);
              try {
                if (r.facade === e)
                  throw ql('Promise can\'t be resolved itself');
                var n = vu(e);
                n ? Fl(function() {
                  var t = {done: !1};
                  try {
                    yl(n, e, Eu(Ou, t, r), Eu(Au, t, r))
                  } catch (e) {
                    Au(t, e, r)
                  }
                }) :
                    (r.value = e, r.state = cu, wu(r, !1))
              } catch (e) {
                Au({done: !1}, e, r)
              }
            }
          };
      if (mu &&
          (Xl =
               function(e) {
                 El(this, $l), kl(e), yl(fu, this);
                 var t = Wl(this);
                 try {
                   e(Eu(Ou, t), Eu(Au, t))
                 } catch (e) {
                   Au(t, e)
                 }
               },
           $l = Xl.prototype,
           fu =
               function(e) {
                 Zl(this, {
                   type: Gl,
                   done: !1,
                   notified: !1,
                   parent: !1,
                   reactions: new Ml,
                   rejection: !1,
                   state: su,
                   value: void 0
                 })
               },
           fu.prototype = vl($l, {
             then: function(e, t) {
               var r = Vl(this), n = tu(Il(this, Xl));
               return r.parent = !0, n.ok = !Cl(e) || e, n.fail = Cl(t) && t,
                      n.domain = Bl ? eu.domain : void 0,
                      r.state == su ? r.reactions.add(n) : Fl(function() {
                        _u(n, r)
                      }),
                      n.promise
             },
             catch: function(e) {
               return this.then(void 0, e)
             }
           }),
           pu =
               function() {
                 var e = new fu, t = Wl(e);
                 this.promise = e, this.resolve = Eu(Ou, t),
                 this.reject = Eu(Au, t)
               },
           Nl.f = tu =
               function(e) {
                 return e === Xl || e === gu ? new pu(e) : ru(e)
               },
           Cl(ml) && Jl !== Object.prototype)) {
        yu = Jl.then,
        hu || (bl(Jl, 'then', function(e, t) {
                 var r = this;
                 return new Xl(function(e, t) {
                          yl(yu, r, e, t)
                        })
                     .then(e, t)
               }, {unsafe: !0}), bl(Jl, 'catch', $l.catch, {unsafe: !0}));
        try {
          delete Jl.constructor
        } catch (e) {
        }
        _l && _l(Jl, $l)
      }
      fl({global: !0, wrap: !0, forced: mu}, {Promise: Xl}), wl(Xl, Gl, !1),
          xl(Gl), gu = gl(Gl), fl({target: Gl, stat: !0, forced: mu}, {
            reject: function(e) {
              var t = tu(this);
              return yl(t.reject, void 0, e), t.promise
            }
          }),
                  fl({target: Gl, stat: !0, forced: mu}, {
                    resolve: function(e) {
                      return Rl(this, e)
                    }
                  }),
                  fl({target: Gl, stat: !0, forced: bu}, {
                    all: function(e) {
                      var s = this, t = tu(s), c = t.resolve, l = t.reject,
                          r = Dl(function() {
                            var n = kl(s.resolve), i = [], o = 0, a = 1;
                            Ol(e, function(e) {
                              var t = o++, r = !1;
                              a++, yl(n, s, e).then(function(e) {
                                r || (r = !0, i[t] = e, --a || c(i))
                              }, l)
                            }), --a || c(i)
                          });
                      return r.error && l(r.value), t.promise
                    },
                    race: function(e) {
                      var r = this, n = tu(r), i = n.reject,
                          t = Dl(function() {
                            var t = kl(r.resolve);
                            Ol(e, function(e) {
                              yl(t, r, e).then(n.resolve, i)
                            })
                          });
                      return t.error && i(t.value), n.promise
                    }
                  });
      var Lu = ce,
          Iu =
              function() {
            var e = Lu(this), t = '';
            return e.global && (t += 'g'), e.ignoreCase && (t += 'i'),
                   e.multiline && (t += 'm'), e.dotAll && (t += 's'),
                   e.unicode && (t += 'u'), e.sticky && (t += 'y'), t
          },
          Tu = d, Fu = x, Ru = Fu.RegExp,
          Pu = Tu(function() {
            var e = Ru('a', 'y');
            return e.lastIndex = 2, null != e.exec('abcd')
          }),
          Nu = Pu || Tu(function() {
                 return !Ru('a', 'y').sticky
               }),
          Du = Pu || Tu(function() {
                 var e = Ru('^r', 'gy');
                 return e.lastIndex = 2, null != e.exec('str')
               }),
          Mu = {BROKEN_CARET: Du, MISSED_STICKY: Nu, UNSUPPORTED_Y: Pu},
          zu = {}, Ku = li, Uu = ui, ju = Object.keys || function(e) {
            return Ku(e, Uu)
          }, Bu = p, Yu = ne, Hu = B, Gu = ce, Wu = Or, Zu = ju;
      zu.f = Bu && !Yu ? Object.defineProperties : function(e, t) {
        Gu(e);
        for (var r, n = Wu(t), i = Zu(t), o = i.length, a = 0; a < o;)
          Hu.f(e, r = i[a++], n[r]);
        return e
      };
      var Vu = ce, Ju = zu, Xu = ui, $u = nn, qu = Bs, Qu = X, ed = rn,
          td = '>', rd = '<', nd = 'prototype', id = 'script',
          od = ed('IE_PROTO'), ad = function() {}, sd = function(e) {
            return rd + id + td + e + rd + '/' + id + td
          }, cd = function(e) {
            e.write(sd('')), e.close();
            var t = e.parentWindow.Object;
            return e = null, t
          }, ld = function() {
            var e = Qu('iframe'), t = 'java' + id + ':';
            return e.style.display = 'none', qu.appendChild(e),
                   e.src = String(t), (e = e.contentWindow.document).open(),
                   e.write(sd('document.F=Object')), e.close(), e.F
          }, ud, dd = function() {
            try {
              ud = new ActiveXObject('htmlfile')
            } catch (e) {
            }
            dd = 'undefined' == typeof document || document.domain && ud ?
                cd(ud) :
                ld();
            for (var e = Xu.length; e--;) delete dd[nd][Xu[e]];
            return dd()
          };
      $u[od] = !0;
      var hd = Object.create ||
          function(e, t) {
            var r;
            return null !== e ?
                       (ad[nd] = Vu(e), r = new ad, ad[nd] = null, r[od] = e) :
                       r = dd(),
                       void 0 === t ? r : Ju.f(r, t)
          },
          fd = d, pd = x, gd = pd.RegExp,
          yd = fd(function() {
            var e = gd('.', 's');
            return !(e.dotAll && e.exec('\n') && 's' === e.flags)
          }),
          md = d, bd = x, vd = bd.RegExp,
          _d = md(function() {
            var e = vd('(?<a>b)', 'g');
            return 'b' !== e.exec('b').groups.a ||
                'bc' !== 'b'.replace(e, '$<a>c')
          }),
          wd = ue, xd = v, kd = lo, Cd = Iu, Sd = Mu, Ed = rt.exports, Ad = hd,
          Od = An.get, Ld = yd, Id = _d,
          Td = Ed('native-string-replace', String.prototype.replace),
          Fd = RegExp.prototype.exec, Rd = Fd, Pd = xd(''.charAt),
          Nd = xd(''.indexOf), Dd = xd(''.replace), Md = xd(''.slice),
          zd =
              (Kd = /a/, Ud = /b*/g, wd(Fd, Kd, 'a'), wd(Fd, Ud, 'a'),
               0 !== Kd.lastIndex || 0 !== Ud.lastIndex),
          Kd, Ud, jd = Sd.BROKEN_CARET, Bd = void 0 !== /()??/.exec('')[1],
          Yd = zd || Bd || jd || Ld || Id;
      Yd && (Rd = function(e) {
        var t, r, n, i, o, a, s = this, c = Od(s), l = kd(e), u = c.raw;
        if (u)
          return u.lastIndex = s.lastIndex, f = wd(Rd, u, l),
                 s.lastIndex = u.lastIndex, f;
        var d = c.groups, h = jd && s.sticky, e = wd(Cd, s), u = s.source,
            f = 0, c = l;
        if (h &&
                (e = Dd(e, 'y', ''), -1 === Nd(e, 'g') && (e += 'g'),
                 c = Md(l, s.lastIndex),
                 0 < s.lastIndex &&
                     (!s.multiline ||
                      s.multiline && '\n' !== Pd(l, s.lastIndex - 1)) &&
                     (u = '(?: ' + u + ')', c = ' ' + c, f++),
                 t = new RegExp('^(?:' + u + ')', e)),
            Bd && (t = new RegExp('^' + u + '$(?!\\s)', e)),
            zd && (r = s.lastIndex), n = wd(Fd, h ? t : s, c),
            h ? n ? (n.input = Md(n.input, f), n[0] = Md(n[0], f),
                     n.index = s.lastIndex, s.lastIndex += n[0].length) :
                    s.lastIndex = 0 :
                zd && n && (s.lastIndex = s.global ? n.index + n[0].length : r),
            Bd && n && 1 < n.length && wd(Td, n[0], t, function() {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0)
            }), n && d)
          for (n.groups = o = Ad(null), i = 0; i < d.length; i++)
            o[(a = d[i])[0]] = n[a[1]];
        return n
      });
      var Hd = Rd, Gd = Yi, Wd = Hd;
      Gd({target: 'RegExp', proto: !0, forced: /./.exec !== Wd}, {exec: Wd});
      var Zd = v, Vd = j.PROPER, Jd = Br.exports, Xd = ce, $d = ye, qd = lo,
          Qd = d, eh = Iu, th = 'toString', rh = RegExp.prototype, nh = rh[th],
          ih = Zd(eh), oh = Qd(function() {
                         return '/a/b' != nh.call({source: 'a', flags: 'b'})
                       }),
          ah = Vd && nh.name != th;
      (oh || ah) && Jd(RegExp.prototype, th, function() {
        var e = Xd(this), t = qd(e.source), r = e.flags;
        return '/' + t + '/' +
            qd(void 0 !== r || !$d(rh, e) || 'flags' in rh ? r : ih(e))
      }, {unsafe: !0});
      var sh = v, ch = Br.exports, lh = Hd, uh = d, dh = At, hh = jr,
          fh = dh('species'), ph = RegExp.prototype,
          gh =
              function(r, e, t, n) {
            var a, i = dh(r), s = !uh(function() {
                                var e = {};
                                return e[i] = function() {
                                  return 7
                                }, 7 != ''[r](e)
                              }),
                   o = s && !uh(function() {
                         var e = !1, t = /a/;
                         return 'split' === r &&
                                    ((t = {constructor: {}}).constructor[fh] =
                                         function() {
                                           return t
                                         },
                                     t.flags = '', t[i] = /./[i]),
                                t.exec = function() {
                                  return e = !0, null
                                }, t[i](''), !e
                       });
            s && o && !t ||
                (a = sh(/./[i]),
                 e =
                     e(i, ''[r],
                       function(e, t, r, n, i) {
                         var o = sh(e), e = t.exec;
                         return e === lh || e === ph.exec ?
                             s && !i ? {done: !0, value: a(t, r, n)} :
                                       {done: !0, value: o(r, t, n)} :
                             {done: !1}
                       }),
                 ch(String.prototype, r, e[0]), ch(ph, i, e[1])),
                n && hh(ph[i], 'sham', !0)
          },
          yh = G, mh = br, bh = At, vh = bh('match'),
          _h =
              function(e) {
            var t;
            return yh(e) && (void 0 !== (t = e[vh]) ? !!t : 'RegExp' == mh(e))
          },
          wh = v, xh = Bn, kh = lo, Ch = S, Sh = wh(''.charAt),
          Eh = wh(''.charCodeAt), Ah = wh(''.slice),
          Oh =
              function(o) {
            return function(e, t) {
              var r, n = kh(Ch(e)), i = xh(t), e = n.length;
              return i < 0 || e <= i ?
                  o ? '' : void 0 :
                  (t = Eh(n, i)) < 55296 || 56319 < t || i + 1 === e ||
                          (r = Eh(n, i + 1)) < 56320 || 57343 < r ?
                  o ? Sh(n, i) : t :
                  o ? Ah(n, i, i + 2) : r - 56320 + (t - 55296 << 10) + 65536
            }
          },
          Lh = {codeAt: Oh(!1), charAt: Oh(!0)}, Ih = Lh.charAt,
          Th =
              function(e, t, r) {
            return t + (r ? Ih(e, t).length : 1)
          },
          Fh = Ut, Rh = B, Ph = pr,
          Nh =
              function(e, t, r) {
            t = Fh(t);
            t in e ? Rh.f(e, t, Ph(0, r)) : e[t] = r
          },
          Dh = x, Mh = Wn, zh = $n, Kh = Nh, Uh = Dh.Array, jh = Math.max,
          Bh =
              function(e, t, r) {
            for (var n = zh(e), i = Mh(t, n), o = Mh(void 0 === r ? n : r, n),
                     a = Uh(jh(o - i, 0)), s = 0;
                 i < o; i++, s++)
              Kh(a, s, e[i]);
            return a.length = s, a
          },
          Yh = x, Hh = ue, Gh = ce, Wh = Y, Zh = br, Vh = Hd, Jh = Yh.TypeError,
          Xh =
              function(e, t) {
            var r = e.exec;
            if (Wh(r)) {
              r = Hh(r, e, t);
              return null !== r && Gh(r), r
            }
            if ('RegExp' === Zh(e)) return Hh(Vh, e, t);
            throw Jh('RegExp#exec called on incompatible receiver')
          },
          $h = Us, qh = ue, Qh = v, ef = gh, tf = _h, rf = ce, nf = S, of = Ns,
          af = Th, sf = Jn, cf = lo, lf = Je, uf = Bh, df = Xh, hf = Hd,
          ff = Mu, pf = d, gf = ff.UNSUPPORTED_Y, yf = 4294967295,
          mf = Math.min, bf = [].push, vf = Qh(/./.exec), _f = Qh(bf),
          wf = Qh(''.slice),
          xf = !pf(function() {
            var e = /(?:)/, t = e.exec;
            e.exec = function() {
              return t.apply(this, arguments)
            };
            e = 'ab'.split(e);
            return 2 !== e.length || 'a' !== e[0] || 'b' !== e[1]
          });
      ef('split', function(i, p, g) {
        var y = 'c' == 'abbc'.split(/(b)*/)[1] ||
                4 != 'test'.split(/(?:)/, -1).length ||
                2 != 'ab'.split(/(?:ab)*/).length ||
                4 != '.'.split(/(.?)(.?)/).length ||
                1 < '.'.split(/()()/).length || ''.split(/.?/).length ?
            function(e, t) {
              var r = cf(nf(this)), n = void 0 === t ? yf : t >>> 0;
              if (0 === n) return [];
              if (void 0 === e) return [r];
              if (!tf(e)) return qh(p, r, e, n);
              for (var i, o, a,
                   s = [],
                   t = (e.ignoreCase ? 'i' : '') + (e.multiline ? 'm' : '') +
                       (e.unicode ? 'u' : '') + (e.sticky ? 'y' : ''),
                   c = 0, l = new RegExp(e.source, t + 'g');
                   (i = qh(hf, l, r)) &&
                   !(c < (o = l.lastIndex) &&
                     (_f(s, wf(r, c, i.index)),
                      1 < i.length && i.index < r.length && $h(bf, s, uf(i, 1)),
                      a = i[0].length, c = o, n <= s.length));)
                l.lastIndex === i.index && l.lastIndex++;
              return c === r.length ? !a && vf(l, '') || _f(s, '') :
                                      _f(s, wf(r, c)),
                     n < s.length ? uf(s, 0, n) : s
            } :
            '0'.split(void 0, 0).length ? function(e, t) {
              return void 0 === e && 0 === t ? [] : qh(p, this, e, t)
            } : p;
        return [
          function(e, t) {
            var r = nf(this), n = null == e ? void 0 : lf(e, i);
            return n ? qh(n, e, r, t) : qh(y, cf(r), e, t)
          },
          function(e, t) {
            var r = rf(this), n = cf(e), i = g(y, r, n, t, y !== p);
            if (i.done) return i.value;
            var e = of(r, RegExp), o = r.unicode,
                i = (r.ignoreCase ? 'i' : '') + (r.multiline ? 'm' : '') +
                (r.unicode ? 'u' : '') + (gf ? 'g' : 'y'),
                a = new e(gf ? '^(?:' + r.source + ')' : r, i),
                s = void 0 === t ? yf : t >>> 0;
            if (0 === s) return [];
            if (0 === n.length) return null === df(a, n) ? [n] : [];
            for (var c = 0, l = 0, u = []; l < n.length;) {
              a.lastIndex = gf ? 0 : l;
              var d, h = df(a, gf ? wf(n, l) : n);
              if (null === h ||
                  (d = mf(sf(a.lastIndex + (gf ? l : 0)), n.length)) === c)
                l = af(n, l, o);
              else {
                if (_f(u, wf(n, c, l)), u.length === s) return u;
                for (var f = 1; f <= h.length - 1; f++)
                  if (_f(u, h[f]), u.length === s) return u;
                l = c = d
              }
            }
            return _f(u, wf(n, c)), u
          }
        ]
      }, !xf, gf);
      var kf =
              '\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff',
          Cf = v, Sf = S, Ef = lo, Af = kf, Of = Cf(''.replace),
          Lf = '[' + Af + ']', If = RegExp('^' + Lf + Lf + '*'),
          Tf = RegExp(Lf + Lf + '*$'),
          Ff =
              function(t) {
            return function(e) {
              e = Ef(Sf(e));
              return 1 & t && (e = Of(e, If, '')), e = 2 & t ? Of(e, Tf, '') : e
            }
          },
          Rf = {start: Ff(1), end: Ff(2), trim: Ff(3)}, Pf = j.PROPER, Nf = d,
          Df = kf, Mf = '\u200b\x85\u180e', zf = function(e) {
            return Nf(function() {
              return !!Df[e]() || Mf[e]() !== Mf || Pf && Df[e].name !== e
            })
          }, Kf = Yi, Uf = Rf.trim, jf = zf;
      Kf({target: 'String', proto: !0, forced: jf('trim')}, {
        trim: function() {
          return Uf(this)
        }
      });
      var Bf = d,
          Yf =
              function(e, t) {
            var r = [][e];
            return !!r && Bf(function() {
              r.call(null, t || function() {
                throw 1
              }, 1)
            })
          },
          Hf = Yi, Gf = v, Wf = Sr, Zf = Or, Vf = Yf, Jf = Gf([].join),
          Xf = Wf != Object, $f = Vf('join', ',');
      Hf({target: 'Array', proto: !0, forced: Xf || !$f}, {
        join: function(e) {
          return Jf(Zf(this), void 0 === e ? ',' : e)
        }
      });
      var qf = v, Qf = L, ep = Math.floor, tp = qf(''.charAt),
          rp = qf(''.replace), np = qf(''.slice),
          ip = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, op = /\$([$&'`]|\d{1,2})/g,
          ap =
              function(o, a, s, c, l, e) {
            var u = s + o.length, d = c.length, t = op;
            return void 0 !== l && (l = Qf(l), t = ip),
                   rp(e, t, function(e, t) {
                     var r;
                     switch (tp(t, 0)) {
                       case '$':
                         return '$';
                       case '&':
                         return o;
                       case '`':
                         return np(a, 0, s);
                       case '\'':
                         return np(a, u);
                       case '<':
                         r = l[np(t, 1, -1)];
                         break;
                       default:
                         var n = +t;
                         if (0 == n) return e;
                         if (d < n) {
                           var i = ep(n / 10);
                           return 0 === i ? e :
                                            i <= d ? void 0 === c[i - 1] ?
                                                     tp(t, 1) :
                                                     c[i - 1] + tp(t, 1) :
                                                     e
                         }
                         r = c[n - 1]
                     }
                     return void 0 === r ? '' : r
                   })
          },
          sp = Us, cp = ue, lp = v, up = gh, dp = d, hp = ce, fp = Y, pp = Bn,
          gp = Jn, yp = lo, mp = S, bp = Th, vp = Je, _p = ap, wp = Xh, xp = At,
          kp = xp('replace'), Cp = Math.max, Sp = Math.min, Ep = lp([].concat),
          Ap = lp([].push), Op = lp(''.indexOf), Lp = lp(''.slice),
          Ip =
              function(e) {
            return void 0 === e ? e : String(e)
          },
          Tp = '$0' === 'a'.replace(/./, '$0'),
          Fp = !!/./[kp] && '' === /./[kp]('a', '$0'),
          Rp = !dp(function() {
            var e = /./;
            return e.exec = function() {
              var e = [];
              return e.groups = {a: '7'}, e
            }, '7' !== ''.replace(e, '$<a>')
          });
      up('replace', function(e, b, v) {
        var _ = Fp ? '$' : '$0';
        return [
          function(e, t) {
            var r = mp(this), n = null == e ? void 0 : vp(e, kp);
            return n ? cp(n, e, r, t) : cp(b, yp(r), e, t)
          },
          function(e, t) {
            var r = hp(this), n = yp(e);
            if ('string' == typeof t && -1 === Op(t, _) && -1 === Op(t, '$<')) {
              e = v(b, r, n, t);
              if (e.done) return e.value
            }
            var i = fp(t);
            i || (t = yp(t));
            var o, a = r.global;
            a && (o = r.unicode, r.lastIndex = 0);
            for (var s = [];;) {
              if (null === (d = wp(r, n))) break;
              if (Ap(s, d), !a) break;
              '' === yp(d[0]) && (r.lastIndex = bp(n, gp(r.lastIndex), o))
            }
            for (var c = '', l = 0, u = 0; u < s.length; u++) {
              for (var d, h = yp((d = s[u])[0]),
                          f = Cp(Sp(pp(d.index), n.length), 0), p = [], g = 1;
                   g < d.length; g++)
                Ap(p, Ip(d[g]));
              var y, m = d.groups,
                     m = i ? (y = Ep([h], p, f, n), void 0 !== m && Ap(y, m),
                              yp(sp(t, void 0, y))) :
                             _p(h, n, f, p, m, t);
              l <= f && (c += Lp(n, l, f) + m, l = f + h.length)
            }
            return c + Lp(n, l)
          }
        ]
      }, !Rp || !Tp || Fp);
      var Pp = br,
          Np = Array.isArray ||
          function(e) {
            return 'Array' == Pp(e)
          },
          Dp = x, Mp = Np, zp = Ss, Kp = G, Up = At, jp = Up('species'),
          Bp = Dp.Array,
          Yp =
              function(e) {
            var t;
            return Mp(e) &&
                       (t = e.constructor,
                        (zp(t) && (t === Bp || Mp(t.prototype)) ||
                         Kp(t) && null === (t = t[jp])) &&
                            (t = void 0)),
                   void 0 === t ? Bp : t
          },
          Hp = Yp,
          Gp =
              function(e, t) {
            return new (Hp(e))(0 === t ? 0 : t)
          },
          Wp = d, Zp = At, Vp = Ae, Jp = Zp('species'),
          Xp =
              function(t) {
            return 51 <= Vp || !Wp(function() {
                     var e = [];
                     return (e.constructor = {})[Jp] = function() {
                       return {
                         foo: 1
                       }
                     }, 1 !== e[t](Boolean).foo
                   })
          },
          $p = Yi, qp = x, Qp = d, e0 = Np, t0 = G, r0 = L, n0 = $n, i0 = Nh,
          o0 = Gp, a0 = Xp, s0 = At, c0 = Ae, l0 = s0('isConcatSpreadable'),
          u0 = 9007199254740991, d0 = 'Maximum allowed index exceeded',
          h0 = qp.TypeError, f0 = 51 <= c0 || !Qp(function() {
                                    var e = [];
                                    return e[l0] = !1, e.concat()[0] !== e
                                  }),
          p0 = a0('concat'), g0 = function(e) {
            if (!t0(e)) return !1;
            var t = e[l0];
            return void 0 !== t ? !!t : e0(e)
          }, y0 = !f0 || !p0;
      $p({target: 'Array', proto: !0, forced: y0}, {
        concat: function(e) {
          for (var t, r, n, i = r0(this), o = o0(i, 0), a = 0, s = -1,
                            c = arguments.length;
               s < c; s++)
            if (g0(n = -1 === s ? i : arguments[s])) {
              if (r = n0(n), u0 < a + r) throw h0(d0);
              for (t = 0; t < r; t++, a++) t in n && i0(o, a, n[t])
            } else {
              if (u0 <= a) throw h0(d0);
              i0(o, a++, n)
            }
          return o.length = a, o
        }
      });
      var m0 = v, b0 = S, v0 = lo, _0 = /"/g, w0 = m0(''.replace),
          x0 = function(e, t, r, n) {
            var i = v0(b0(e)), e = '<' + t;
            return '' !== r &&
                       (e += ' ' + r + '="' + w0(v0(n), _0, '&quot;') + '"'),
                   e + '>' + i + '</' + t + '>'
          }, k0 = d, C0 = function(t) {
            return k0(function() {
              var e = ''[t]('"');
              return e !== e.toLowerCase() || 3 < e.split('"').length
            })
          }, S0 = Yi, E0 = x0, A0 = C0;
      S0({target: 'String', proto: !0, forced: A0('sub')}, {
        sub: function() {
          return E0(this, 'sub', '', '')
        }
      });
      var O0 = At, L0 = hd, I0 = B, T0 = O0('unscopables'),
          F0 = Array.prototype;
      null == F0[T0] && I0.f(F0, T0, {configurable: !0, value: L0(null)});
      var R0 =
              function(e) {
        F0[T0][e] = !0
      },
          P0 = d, N0 = !P0(function() {
                    function e() {}
                    return e.prototype.constructor = null,
                           Object.getPrototypeOf(new e) !== e.prototype
                  }),
          D0 = x, M0 = R, z0 = Y, K0 = L, U0 = rn, j0 = N0, B0 = U0('IE_PROTO'),
          Y0 = D0.Object, H0 = Y0.prototype,
          G0 = j0 ? Y0.getPrototypeOf :
                    function(e) {
                      var t = K0(e);
                      if (M0(t, B0)) return t[B0];
                      e = t.constructor;
                      return z0(e) && t instanceof e ?
                          e.prototype :
                          t instanceof Y0 ? H0 : null
                    },
          W0 = d, Z0 = Y, V0 = G0, J0 = Br.exports, X0 = At,
          $0 = X0('iterator'), q0 = !1, Q0, eg, tg;
      [].keys &&
          (tg = [].keys(),
           'next' in tg ?
               (eg = V0(V0(tg)), eg !== Object.prototype && (Q0 = eg)) :
               q0 = !0);
      var rg = null == Q0 || W0(function() {
                 var e = {};
                 return Q0[$0].call(e) !== e
               });
      rg && (Q0 = {}), Z0(Q0[$0]) || J0(Q0, $0, function() {
                         return this
                       });
      var ng = {IteratorPrototype: Q0, BUGGY_SAFARI_ITERATORS: q0},
          ig = ng.IteratorPrototype, og = hd, ag = pr, sg = oa, cg = _a,
          lg =
              function() {
            return this
          },
          ug =
              function(e, t, r, n) {
            t += ' Iterator';
            return e.prototype = og(ig, {next: ag(+!n, r)}), sg(e, t, !1),
                   cg[t] = lg, e
          },
          dg = Yi, hg = ue, fg = j, pg = Y, gg = ug, yg = G0, mg = ea, bg = oa,
          vg = jr, _g = Br.exports, wg = At, xg = _a, kg = ng, Cg = fg.PROPER,
          Sg = fg.CONFIGURABLE, Eg = kg.IteratorPrototype,
          Ag = kg.BUGGY_SAFARI_ITERATORS, Og = wg('iterator'), Lg = 'keys',
          Ig = 'values', Tg = 'entries',
          Fg =
              function() {
            return this
          },
          Rg =
              function(e, t, r, n, i, o, a) {
            gg(r, t, n);
            function s(e) {
              if (e === i && g) return g;
              if (!Ag && e in f) return f[e];
              switch (e) {
                case Lg:
                case Ig:
                case Tg:
                  return function() {
                    return new r(this, e)
                  }
              }
              return function() {
                return new r(this)
              }
            }
            var c, l, u, d = t + ' Iterator', h = !1, f = e.prototype,
                         p = f[Og] || f['@@iterator'] || i && f[i],
                         g = !Ag && p || s(i),
                         n = 'Array' == t && f.entries || p;
            if (n && (c = yg(n.call(new e))) !== Object.prototype && c.next &&
                    (yg(c) !== Eg &&
                         (mg ? mg(c, Eg) : pg(c[Og]) || _g(c, Og, Fg)),
                     bg(c, d, !0)),
                Cg && i == Ig && p && p.name !== Ig &&
                    (Sg ? vg(f, 'name', Ig) :
                          (h = !0,
                           g =
                               function() {
                                 return hg(p, this)
                               })),
                i)
              if (l = {values: s(Ig), keys: o ? g : s(Lg), entries: s(Tg)}, a)
                for (u in l) !Ag && !h && u in f || _g(f, u, l[u]);
              else
                dg({target: t, proto: !0, forced: Ag || h}, l);
            return f[Og] !== g && _g(f, Og, g, {name: i}), xg[t] = g, l
          },
          Pg = Or, Ng = R0, Dg = _a, Mg = An, zg = B.f, Kg = Rg, Ug = p,
          jg = 'Array Iterator', Bg = Mg.set, Yg = Mg.getterFor(jg),
          Hg = Kg(
              Array, 'Array',
              function(e, t) {
                Bg(this, {type: jg, target: Pg(e), index: 0, kind: t})
              },
              function() {
                var e = Yg(this), t = e.target, r = e.kind, n = e.index++;
                return !t || n >= t.length ?
                    {value: e.target = void 0, done: !0} :
                    'keys' == r ? {value: n, done: !1} :
                                  'values' == r ? {value: t[n], done: !1} :
                                                  {value: [n, t[n]], done: !1}
              },
              'values'),
          Gg = Dg.Arguments = Dg.Array;
      if (Ng('keys'), Ng('values'), Ng('entries'), Ug && 'values' !== Gg.name)
        try {
          zg(Gg, 'name', {value: 'values'})
        } catch (e) {
        }
      var Wg = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      },
          Zg = X, Vg = Zg('span').classList,
          Jg = Vg && Vg.constructor && Vg.constructor.prototype,
          Xg = Jg === Object.prototype ? void 0 : Jg, $g = x, qg = Wg, Qg = Xg,
          ey = Hg, ty = jr, ry = At, ny = ry('iterator'),
          iy = ry('toStringTag'), oy = ey.values, ay = function(t, e) {
            if (t) {
              if (t[ny] !== oy) try {
                  ty(t, ny, oy)
                } catch (e) {
                  t[ny] = oy
                }
              if (t[iy] || ty(t, iy, e), qg[e])
                for (var r in ey)
                  if (t[r] !== ey[r]) try {
                      ty(t, r, ey[r])
                    } catch (e) {
                      t[r] = ey[r]
                    }
            }
          }, sy;
      for (sy in qg) ay($g[sy] && $g[sy].prototype, sy);
      ay(Qg, 'DOMTokenList');
      var cy = {exports: {}}, ly = {}, uy = br, dy = Or, hy = Kn.f, fy = Bh,
          py = 'object' == typeof window && window &&
              Object.getOwnPropertyNames ?
          Object.getOwnPropertyNames(window) :
          [],
          gy = function(e) {
            try {
              return hy(e)
            } catch (e) {
              return fy(py)
            }
          };
      ly.f = function(e) {
        return py && 'Window' == uy(e) ? gy(e) : hy(dy(e))
      };
      var yy = d, my = yy(function() {
                    var e;
                    'function' == typeof ArrayBuffer &&
                        (e = new ArrayBuffer(8),
                         Object.isExtensible(e) &&
                             Object.defineProperty(e, 'a', {value: 8}))
                  }),
          by = d, vy = G, _y = br, wy = my, xy = Object.isExtensible,
          ky = by(function() {
            xy(1)
          }),
          Cy = ky || wy ?
          function(e) {
            return !!vy(e) &&
                ((!wy || 'ArrayBuffer' != _y(e)) && (!xy || xy(e)))
          } :
          xy,
          Sy = d, Ey = !Sy(function() {
                    return Object.isExtensible(Object.preventExtensions({}))
                  }),
          Ay = Yi, Oy = v, Ly = nn, Iy = G, Ty = R, Fy = B.f, Ry = Kn, Py = ly,
          Ny = Cy, Dy = yt, My = Ey, zy = !1, Ky = Dy('meta'), Uy = 0,
          jy = function(e) {
            Fy(e, Ky, {value: {objectID: 'O' + Uy++, weakData: {}}})
          }, By = function(e, t) {
            if (!Iy(e))
              return 'symbol' == typeof e ?
                  e :
                  ('string' == typeof e ? 'S' : 'P') + e;
            if (!Ty(e, Ky)) {
              if (!Ny(e)) return 'F';
              if (!t) return 'E';
              jy(e)
            }
            return e[Ky].objectID
          }, Yy = function(e, t) {
            if (!Ty(e, Ky)) {
              if (!Ny(e)) return !0;
              if (!t) return !1;
              jy(e)
            }
            return e[Ky].weakData
          }, Hy = function(e) {
            return My && zy && Ny(e) && !Ty(e, Ky) && jy(e), e
          }, Gy = function() {
            Wy.enable = function() {}, zy = !0;
            var i = Ry.f, o = Oy([].splice), e = {};
            e[Ky] = 1, i(e).length && (Ry.f = function(e) {
                         for (var t = i(e), r = 0, n = t.length; r < n; r++)
                           if (t[r] === Ky) {
                             o(t, r, 1);
                             break
                           }
                         return t
                       }, Ay({target: 'Object', stat: !0, forced: !0}, {
                                         getOwnPropertyNames: Py.f
                                       }))
          }, Wy = cy.exports = {
            enable: Gy,
            fastKey: By,
            getWeakData: Yy,
            onFreeze: Hy
          };
      Ly[Ky] = !0;
      var Zy = Y, Vy = G, Jy = ea,
          Xy =
              function(e, t, r) {
            var n, i;
            return Jy && Zy(n = t.constructor) && n !== r &&
                       Vy(i = n.prototype) && i !== r.prototype && Jy(e, i),
                   e
          },
          $y = Yi, qy = x, Qy = v, e1 = Ni, t1 = Br.exports, r1 = cy.exports,
          n1 = is, i1 = ga, o1 = Y, a1 = G, s1 = d, c1 = us, l1 = oa, u1 = Xy,
          d1 =
              function(e, t, r) {
            function n(e) {
              var r = Qy(f[e]);
              t1(f, e, 'add' == e ? function(e) {
                return r(this, 0 === e ? 0 : e), this
              } : 'delete' == e ? function(e) {
                return !(u && !a1(e)) && r(this, 0 === e ? 0 : e)
              } : 'get' == e ? function(e) {
                return u && !a1(e) ? void 0 : r(this, 0 === e ? 0 : e)
              } : 'has' == e ? function(e) {
                return !(u && !a1(e)) && r(this, 0 === e ? 0 : e)
              } : function(e, t) {
                return r(this, 0 === e ? 0 : e, t), this
              })
            }
            var i, o, a, s, c,
                l = -1 !== e.indexOf('Map'), u = -1 !== e.indexOf('Weak'),
                d = l ? 'set' : 'add', h = qy[e], f = h && h.prototype, p = h,
                g = {};
            return e1(e, !o1(h) || !(u || f.forEach && !s1(function() {
                                            (new h).entries().next()
                                          }))) ?
                       (p = r.getConstructor(t, e, l, d), r1.enable()) :
                       e1(e, !0) &&
                           (o = (i = new p)[d](u ? {} : -0, 1) != i,
                            a = s1(function() {
                              i.has(1)
                            }),
                            s = c1(function(e) {
                              new h(e)
                            }),
                            c = !u && s1(function() {
                              for (var e = new h, t = 5; t--;) e[d](t, t);
                              return !e.has(-0)
                            }),
                            s ||
                                (((p = t(function(e, t) {
                                     i1(e, f);
                                     e = u1(new h, e, p);
                                     return null != t &&
                                                n1(t, e[d],
                                                   {that: e, AS_ENTRIES: l}),
                                            e
                                   })).prototype = f)
                                     .constructor = p),
                            (a || c) && (n('delete'), n('has'), l && n('get')),
                            (c || o) && n(d), u && f.clear && delete f.clear),
                   g[e] = p, $y({global: !0, forced: p != h}, g), l1(p, e),
                   u || r.setStrong(p, e, l), p
          },
          h1 = B.f, f1 = hd, p1 = Go, g1 = va, y1 = ga, m1 = is, b1 = Rg,
          v1 = da, _1 = p, w1 = cy.exports.fastKey, x1 = An, k1 = x1.set,
          C1 = x1.getterFor, S1 = {
            getConstructor: function(e, r, n, i) {
              function o(e, t, r) {
                var n, i = c(e), o = a(e, t);
                return o ? o.value = r :
                           (i.last = o = {
                             index: n = w1(t, !0),
                             key: t,
                             value: r,
                             previous: r = i.last,
                             next: void 0,
                             removed: !1
                           },
                            i.first || (i.first = o), r && (r.next = o),
                            _1 ? i.size++ : e.size++,
                            'F' !== n && (i.index[n] = o)),
                           e
              }
              function a(e, t) {
                var r, n = c(e);
                if ('F' !== (e = w1(t))) return n.index[e];
                for (r = n.first; r; r = r.next)
                  if (r.key == t) return r
              }
              var e = e(function(e, t) {
                y1(e, s), k1(e, {
                  type: r,
                  index: f1(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }),
                    _1 || (e.size = 0),
                    null != t && m1(t, e[i], {that: e, AS_ENTRIES: n})
              }),
                  s = e.prototype, c = C1(r);
              return p1(s, {
                       clear: function() {
                         for (var e = c(this), t = e.index, r = e.first; r;)
                           r.removed = !0,
                           r.previous &&
                               (r.previous = r.previous.next = void 0),
                           delete t[r.index], r = r.next;
                         e.first = e.last = void 0,
                         _1 ? e.size = 0 : this.size = 0
                       },
                       delete: function(e) {
                         var t, r = c(this), n = a(this, e);
                         return n &&
                                    (t = n.next, e = n.previous,
                                     delete r.index[n.index], n.removed = !0,
                                     e && (e.next = t), t && (t.previous = e),
                                     r.first == n && (r.first = t),
                                     r.last == n && (r.last = e),
                                     _1 ? r.size-- : this.size--),
                                !!n
                       },
                       forEach: function(e) {
                         for (var t,
                              r = c(this),
                              n = g1(
                                  e,
                                  1 < arguments.length ? arguments[1] : void 0);
                              t = t ? t.next : r.first;)
                           for (n(t.value, t.key, this); t && t.removed;)
                             t = t.previous
                       },
                       has: function(e) {
                         return !!a(this, e)
                       }
                     }),
                     p1(s,
                        n ? {
                          get: function(e) {
                            e = a(this, e);
                            return e && e.value
                          },
                          set: function(e, t) {
                            return o(this, 0 === e ? 0 : e, t)
                          }
                        } :
                            {
                              add: function(e) {
                                return o(this, e = 0 === e ? 0 : e, e)
                              }
                            }),
                     _1 && h1(s, 'size', {
                       get: function() {
                         return c(this).size
                       }
                     }),
                     e
            },
            setStrong: function(e, t, r) {
              var n = t + ' Iterator', i = C1(t), o = C1(n);
              b1(e, t,
                 function(e, t) {
                   k1(this,
                      {type: n, target: e, state: i(e), kind: t, last: void 0})
                 },
                 function() {
                   for (var e = o(this), t = e.kind, r = e.last;
                        r && r.removed;)
                     r = r.previous;
                   return e.target &&
                           (e.last = r = r ? r.next : e.state.first) ?
                       'keys' == t ?
                       {value: r.key, done: !1} :
                       'values' == t ? {value: r.value, done: !1} :
                                       {value: [r.key, r.value], done: !1} :
                       {value: e.target = void 0, done: !0}
                 },
                 r ? 'entries' : 'values', !r, !0),
                  v1(t)
            }
          },
          E1 = d1, A1 = S1;
      E1('Map', function(e) {
        return function() {
          return e(this, arguments.length ? arguments[0] : void 0)
        }
      }, A1);
      var O1 = Lh.charAt, L1 = lo, I1 = An, T1 = Rg, F1 = 'String Iterator',
          R1 = I1.set, P1 = I1.getterFor(F1);
      T1(String, 'String',
         function(e) {
           R1(this, {type: F1, string: L1(e), index: 0})
         },
         function() {
           var e = P1(this), t = e.string, r = e.index;
           return r >= t.length ?
               {value: void 0, done: !0} :
               (r = O1(t, r), e.index += r.length, {value: r, done: !1})
         });
      var N1 = d1, D1 = S1;
      N1('Set', function(e) {
        return function() {
          return e(this, arguments.length ? arguments[0] : void 0)
        }
      }, D1);
      var M1 = {exports: {}},
          z1 = 'undefined' != typeof ArrayBuffer &&
          'undefined' != typeof DataView,
          K1 = z1, U1 = p, j1 = x, B1 = Y, Y1 = G, H1 = R, G1 = oo, W1 = Be,
          Z1 = jr, V1 = Br.exports, J1 = B.f, X1 = ye, $1 = G0, q1 = ea,
          Q1 = At, em = yt, tm = j1.Int8Array, rm = tm && tm.prototype,
          nm = j1.Uint8ClampedArray, im = nm && nm.prototype, om = tm && $1(tm),
          am = rm && $1(rm), sm = Object.prototype, cm = j1.TypeError,
          lm = Q1('toStringTag'), um = em('TYPED_ARRAY_TAG'),
          dm = em('TYPED_ARRAY_CONSTRUCTOR'),
          hm = K1 && !!q1 && 'Opera' !== G1(j1.opera), fm = !1, pm, gm, ym,
          mm = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
          },
          bm = {BigInt64Array: 8, BigUint64Array: 8}, vm = function(e) {
            if (!Y1(e)) return !1;
            e = G1(e);
            return 'DataView' === e || H1(mm, e) || H1(bm, e)
          }, _m = function(e) {
            if (!Y1(e)) return !1;
            e = G1(e);
            return H1(mm, e) || H1(bm, e)
          }, wm = function(e) {
            if (_m(e)) return e;
            throw cm('Target is not a typed array')
          }, xm = function(e) {
            if (B1(e) && (!q1 || X1(om, e))) return e;
            throw cm(W1(e) + ' is not a typed array constructor')
          }, km = function(t, r, e, n) {
            if (U1) {
              if (e)
                for (var i in mm) {
                  i = j1[i];
                  if (i && H1(i.prototype, t)) try {
                      delete i.prototype[t]
                    } catch (e) {
                      try {
                        i.prototype[t] = r
                      } catch (e) {
                      }
                    }
                }
              am[t] && !e || V1(am, t, !e && hm && rm[t] || r, n)
            }
          }, Cm = function(e, t, r) {
            var n, i;
            if (U1) {
              if (q1) {
                if (r)
                  for (n in mm)
                    if ((i = j1[n]) && H1(i, e)) try {
                        delete i[e]
                      } catch (e) {
                      }
                if (om[e] && !r) return;
                try {
                  return V1(om, e, !r && hm && om[e] || t)
                } catch (e) {
                }
              }
              for (n in mm) !(i = j1[n]) || i[e] && !r || V1(i, e, t)
            }
          };
      for (pm in mm)
        gm = j1[pm], ym = gm && gm.prototype, ym ? Z1(ym, dm, gm) : hm = !1;
      for (pm in bm) gm = j1[pm], ym = gm && gm.prototype, ym && Z1(ym, dm, gm);
      if ((!hm || !B1(om) || om === Function.prototype) && (om = function() {
            throw cm('Incorrect invocation')
          }, hm))
        for (pm in mm) j1[pm] && q1(j1[pm], om);
      if ((!hm || !am || am === sm) && (am = om.prototype, hm))
        for (pm in mm) j1[pm] && q1(j1[pm].prototype, am);
      if (hm && $1(im) !== am && q1(im, am), U1 && !H1(am, lm))
        for (pm in fm = !0, J1(am, lm, {
               get: function() {
                 return Y1(this) ? this[um] : void 0
               }
             }),
                   mm)
          j1[pm] && Z1(j1[pm], um, pm);
      var Sm = {
        NATIVE_ARRAY_BUFFER_VIEWS: hm,
        TYPED_ARRAY_CONSTRUCTOR: dm,
        TYPED_ARRAY_TAG: fm && um,
        aTypedArray: wm,
        aTypedArrayConstructor: xm,
        exportTypedArrayMethod: km,
        exportTypedArrayStaticMethod: Cm,
        isView: vm,
        isTypedArray: _m,
        TypedArray: om,
        TypedArrayPrototype: am
      },
          Em = x, Am = d, Om = us, Lm = Sm.NATIVE_ARRAY_BUFFER_VIEWS,
          Im = Em.ArrayBuffer, Tm = Em.Int8Array,
          Fm = !Lm || !Am(function() {
            Tm(1)
          }) ||
          !Am(function() {
            new Tm(-1)
          }) ||
          !Om(
              function(e) {
                new Tm, new Tm(null), new Tm(1.5), new Tm(e)
              },
              !0) ||
          Am(function() {
            return 1 !== new Tm(new Im(2), 1, void 0).length
          }),
          Rm = x, Pm = Bn, Nm = Jn, Dm = Rm.RangeError,
          Mm =
              function(e) {
            if (void 0 === e) return 0;
            var t = Pm(e), e = Nm(t);
            if (t !== e) throw Dm('Wrong length or index');
            return e
          },
          zm = x, Km = zm.Array, Um = Math.abs, jm = Math.pow, Bm = Math.floor,
          Ym = Math.log, Hm = Math.LN2,
          Gm =
              function(e, t, r) {
            var n, i, o = Km(r), a = 8 * r - t - 1, s = (1 << a) - 1,
                      c = s >> 1, l = 23 === t ? jm(2, -24) - jm(2, -77) : 0,
                      u = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0, d = 0;
            for ((e = Um(e)) != e || e === 1 / 0 ?
                     (i = e != e ? 1 : 0, n = s) :
                     (n = Bm(Ym(e) / Hm),
                     e * (r = jm(2, -n)) < 1 && (n--, r *= 2),
                     2 <= (e += 1 <= n + c ? l / r : l * jm(2, 1 - c)) * r &&
                          (n++, r /= 2),
                     s <= n + c ? (i = 0, n = s) :
                                  1 <= n + c ?
                                  (i = (e * r - 1) * jm(2, t), n += c) :
                                  (i = e * jm(2, c - 1) * jm(2, t), n = 0));
                 8 <= t;)
              o[d++] = 255 & i, i /= 256, t -= 8;
            for (n = n << t | i, a += t; 0 < a;)
              o[d++] = 255 & n, n /= 256, a -= 8;
            return o[--d] |= 128 * u, o
          },
          Wm =
              function(e, t) {
            var r, n = e.length, i = 8 * n - t - 1, o = (1 << i) - 1,
                   a = o >> 1, s = i - 7, c = n - 1, n = e[c--], l = 127 & n;
            for (n >>= 7; 0 < s;) l = 256 * l + e[c--], s -= 8;
            for (r = l & (1 << -s) - 1, l >>= -s, s += t; 0 < s;)
              r = 256 * r + e[c--], s -= 8;
            if (0 === l)
              l = 1 - a;
            else {
              if (l === o) return r ? NaN : n ? -1 / 0 : 1 / 0;
              r += jm(2, t), l -= a
            }
            return (n ? -1 : 1) * r * jm(2, l - t)
          },
          Zm = {pack: Gm, unpack: Wm}, Vm = L, Jm = Wn, Xm = $n,
          $m =
              function(e) {
            for (var t = Vm(this), r = Xm(t), n = arguments.length,
                     i = Jm(1 < n ? arguments[1] : void 0, r),
                     n = 2 < n ? arguments[2] : void 0,
                     o = void 0 === n ? r : Jm(n, r);
                 i < o;)
              t[i++] = e;
            return t
          },
          qm = x, Qm = v, eb = p, tb = z1, rb = j, nb = jr, ib = Go, ob = d,
          ab = ga, sb = Bn, cb = Jn, lb = Mm, ub = Zm, db = G0, hb = ea,
          fb = Kn.f, pb = B.f, gb = $m, yb = Bh, mb = oa, bb = An,
          vb = rb.PROPER, _b = rb.CONFIGURABLE, wb = bb.get, xb = bb.set,
          kb = 'ArrayBuffer', Cb = 'DataView', Sb = 'prototype',
          Eb = 'Wrong length', Ab = 'Wrong index', Ob = qm[kb], Lb = Ob,
          Ib = Lb && Lb[Sb], Tb = qm[Cb], Fb = Tb && Tb[Sb],
          Rb = Object.prototype, Pb = qm.Array, Nb = qm.RangeError, Db = Qm(gb),
          Mb = Qm([].reverse), zb = ub.pack, Kb = ub.unpack, Ub = function(e) {
            return [255 & e]
          }, jb = function(e) {
            return [255 & e, e >> 8 & 255]
          }, Bb = function(e) {
            return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
          }, Yb = function(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
          }, Hb = function(e) {
            return zb(e, 23, 4)
          }, Gb = function(e) {
            return zb(e, 52, 8)
          }, Wb = function(e, t) {
            pb(e[Sb], t, {
              get: function() {
                return wb(this)[t]
              }
            })
          }, Zb = function(e, t, r, n) {
            var i = lb(r), r = wb(e);
            if (i + t > r.byteLength) throw Nb(Ab);
            e = wb(r.buffer).bytes, r = i + r.byteOffset, t = yb(e, r, r + t);
            return n ? t : Mb(t)
          }, Vb = function(e, t, r, n, i, o) {
            r = lb(r), e = wb(e);
            if (r + t > e.byteLength) throw Nb(Ab);
            for (var a = wb(e.buffer).bytes, s = r + e.byteOffset, c = n(+i),
                     l = 0;
                 l < t; l++)
              a[s + l] = c[o ? l : t - l - 1]
          };
      if (tb) {
        var Jb = vb && Ob.name !== kb;
        if (ob(function() {
              Ob(1)
            }) &&
            ob(function() {
              new Ob(-1)
            }) &&
            !ob(function() {
              return new Ob, new Ob(1.5), new Ob(NaN), Jb && !_b
            }))
          Jb && _b && nb(Ob, 'name', kb);
        else {
          Lb = function(e) {
            return ab(this, Ib), new Ob(lb(e))
          }, Lb[Sb] = Ib;
          for (var Xb = fb(Ob), $b = 0, qb; Xb.length > $b;)
            (qb = Xb[$b++]) in Lb || nb(Lb, qb, Ob[qb]);
          Ib.constructor = Lb
        }
        hb && db(Fb) !== Rb && hb(Fb, Rb);
        var Qb = new Tb(new Lb(2)), ev = Qm(Fb.setInt8);
        Qb.setInt8(0, 2147483648), Qb.setInt8(1, 2147483649),
            !Qb.getInt8(0) && Qb.getInt8(1) ||
            ib(Fb, {
              setInt8: function(e, t) {
                ev(this, e, t << 24 >> 24)
              },
              setUint8: function(e, t) {
                ev(this, e, t << 24 >> 24)
              }
            },
               {unsafe: !0})
      } else
        Lb =
            function(e) {
          ab(this, Ib);
          e = lb(e);
          xb(this, {bytes: Db(Pb(e), 0), byteLength: e}),
              eb || (this.byteLength = e)
        },
        Ib = Lb[Sb],
        Tb =
            function(e, t, r) {
          ab(this, Fb), ab(e, Ib);
          var n = wb(e).byteLength, t = sb(t);
          if (t < 0 || n < t) throw Nb('Wrong offset');
          if (n < t + (r = void 0 === r ? n - t : cb(r))) throw Nb(Eb);
          xb(this, {buffer: e, byteLength: r, byteOffset: t}),
              eb || (this.buffer = e, this.byteLength = r, this.byteOffset = t)
        },
        Fb = Tb[Sb],
        eb &&
            (Wb(Lb, 'byteLength'), Wb(Tb, 'buffer'), Wb(Tb, 'byteLength'),
             Wb(Tb, 'byteOffset')),
        ib(Fb, {
          getInt8: function(e) {
            return Zb(this, 1, e)[0] << 24 >> 24
          },
          getUint8: function(e) {
            return Zb(this, 1, e)[0]
          },
          getInt16: function(e) {
            e = Zb(this, 2, e, 1 < arguments.length ? arguments[1] : void 0);
            return (e[1] << 8 | e[0]) << 16 >> 16
          },
          getUint16: function(e) {
            e = Zb(this, 2, e, 1 < arguments.length ? arguments[1] : void 0);
            return e[1] << 8 | e[0]
          },
          getInt32: function(e) {
            return Yb(
                Zb(this, 4, e, 1 < arguments.length ? arguments[1] : void 0))
          },
          getUint32: function(e) {
            return Yb(
                       Zb(this, 4, e,
                          1 < arguments.length ? arguments[1] : void 0)) >>>
                0
          },
          getFloat32: function(e) {
            return Kb(
                Zb(this, 4, e, 1 < arguments.length ? arguments[1] : void 0),
                23)
          },
          getFloat64: function(e) {
            return Kb(
                Zb(this, 8, e, 1 < arguments.length ? arguments[1] : void 0),
                52)
          },
          setInt8: function(e, t) {
            Vb(this, 1, e, Ub, t)
          },
          setUint8: function(e, t) {
            Vb(this, 1, e, Ub, t)
          },
          setInt16: function(e, t) {
            Vb(this, 2, e, jb, t, 2 < arguments.length ? arguments[2] : void 0)
          },
          setUint16: function(e, t) {
            Vb(this, 2, e, jb, t, 2 < arguments.length ? arguments[2] : void 0)
          },
          setInt32: function(e, t) {
            Vb(this, 4, e, Bb, t, 2 < arguments.length ? arguments[2] : void 0)
          },
          setUint32: function(e, t) {
            Vb(this, 4, e, Bb, t, 2 < arguments.length ? arguments[2] : void 0)
          },
          setFloat32: function(e, t) {
            Vb(this, 4, e, Hb, t, 2 < arguments.length ? arguments[2] : void 0)
          },
          setFloat64: function(e, t) {
            Vb(this, 8, e, Gb, t, 2 < arguments.length ? arguments[2] : void 0)
          }
        });
      mb(Lb, kb), mb(Tb, Cb);
      var tv = {ArrayBuffer: Lb, DataView: Tb}, rv = G, nv = Math.floor,
          iv = Number.isInteger ||
          function(e) {
            return !rv(e) && isFinite(e) && nv(e) === e
          },
          ov = x, av = Bn, sv = ov.RangeError,
          cv =
              function(e) {
            e = av(e);
            if (e < 0) throw sv('The argument can\'t be less than 0');
            return e
          },
          lv = x, uv = cv, dv = lv.RangeError,
          hv =
              function(e, t) {
            e = uv(e);
            if (e % t) throw dv('Wrong offset');
            return e
          },
          fv = va, pv = ue, gv = Is, yv = L, mv = $n, bv = Ka, vv = Ta, _v = Sa,
          wv = Sm.aTypedArrayConstructor,
          xv =
              function(e) {
            var t, r, n, i, o, a, s = gv(this), c = yv(e), l = arguments.length,
                                  u = 1 < l ? arguments[1] : void 0,
                                  d = void 0 !== u, e = vv(c);
            if (e && !_v(e))
              for (a = (o = bv(c, e)).next, c = []; !(i = pv(a, o)).done;)
                c.push(i.value);
            for (d && 2 < l && (u = fv(u, arguments[2])),
                 r = mv(c), n = new (wv(s))(r), t = 0;
                 t < r; t++)
              n[t] = d ? u(c[t], t) : c[t];
            return n
          },
          kv = va, Cv = v, Sv = Sr, Ev = L, Av = $n, Ov = Gp, Lv = Cv([].push),
          Iv =
              function(h) {
            var f = 1 == h, p = 2 == h, g = 3 == h, y = 4 == h, m = 6 == h,
                b = 7 == h, v = 5 == h || m;
            return function(e, t, r, n) {
              for (var i, o, a = Ev(e), s = Sv(a), c = kv(t, r), l = Av(s),
                             u = 0, n = n || Ov,
                             d = f ? n(e, l) : p || b ? n(e, 0) : void 0;
                   u < l; u++)
                if ((v || u in s) && (o = c(i = s[u], u, a), h))
                  if (f)
                    d[u] = o;
                  else if (o)
                    switch (h) {
                      case 3:
                        return !0;
                      case 5:
                        return i;
                      case 6:
                        return u;
                      case 2:
                        Lv(d, i)
                    }
                  else
                    switch (h) {
                      case 4:
                        return !1;
                      case 7:
                        Lv(d, i)
                    }
              return m ? -1 : g || y ? y : d
            }
          },
          Tv = {
            forEach: Iv(0),
            map: Iv(1),
            filter: Iv(2),
            some: Iv(3),
            every: Iv(4),
            find: Iv(5),
            findIndex: Iv(6),
            filterReject: Iv(7)
          },
          Fv = Yi, Rv = x, Pv = ue, Nv = p, Dv = Fm, Mv = Sm, zv = tv, Kv = ga,
          Uv = pr, jv = jr, Bv = iv, Yv = Jn, Hv = Mm, Gv = hv, Wv = Ut, Zv = R,
          Vv = oo, Jv = G, Xv = Ke, $v = hd, qv = ye, Qv = ea, e_ = Kn.f,
          t_ = xv, r_ = Tv.forEach, n_ = da, i_ = B, o_ = lr, a_ = An, s_ = Xy,
          c_ = a_.get, l_ = a_.set, u_ = i_.f, d_ = o_.f, h_ = Math.round,
          f_ = Rv.RangeError, p_ = zv.ArrayBuffer, g_ = p_.prototype,
          y_ = zv.DataView, m_ = Mv.NATIVE_ARRAY_BUFFER_VIEWS,
          b_ = Mv.TYPED_ARRAY_CONSTRUCTOR, v_ = Mv.TYPED_ARRAY_TAG,
          __ = Mv.TypedArray, w_ = Mv.TypedArrayPrototype,
          x_ = Mv.aTypedArrayConstructor, k_ = Mv.isTypedArray,
          C_ = 'BYTES_PER_ELEMENT', S_ = 'Wrong length', E_ = function(e, t) {
            x_(e);
            for (var r = 0, n = t.length, i = new e(n); r < n;) i[r] = t[r++];
            return i
          }, A_ = function(e, t) {
            u_(e, t, {
              get: function() {
                return c_(this)[t]
              }
            })
          }, O_ = function(e) {
            var t;
            return qv(g_, e) || 'ArrayBuffer' == (t = Vv(e)) ||
                'SharedArrayBuffer' == t
          }, L_ = function(e, t) {
            return k_(e) && !Xv(t) && t in e && Bv(+t) && 0 <= t
          }, I_ = function(e, t) {
            return t = Wv(t), L_(e, t) ? Uv(2, e[t]) : d_(e, t)
          }, T_ = function(e, t, r) {
            return t = Wv(t),
                   !(L_(e, t) && Jv(r) && Zv(r, 'value')) || Zv(r, 'get') ||
                           Zv(r, 'set') || r.configurable ||
                           Zv(r, 'writable') && !r.writable ||
                           Zv(r, 'enumerable') && !r.enumerable ?
                       u_(e, t, r) :
                       (e[t] = r.value, e)
          };
      Nv ? (m_ ||
                (o_.f = I_, i_.f = T_, A_(w_, 'buffer'), A_(w_, 'byteOffset'),
                 A_(w_, 'byteLength'), A_(w_, 'length')),
            Fv({target: 'Object', stat: !0, forced: !m_},
               {getOwnPropertyDescriptor: I_, defineProperty: T_}),
            M1.exports =
                function(e, t, n) {
                  function l(e, t) {
                    u_(e, t, {
                      get: function() {
                        return function(e, t) {
                          e = c_(e);
                          return e.view[i](t * u + e.byteOffset, !0)
                        }(this, t)
                      },
                      set: function(e) {
                        return function(e, t, r) {
                          e = c_(e);
                          n &&
                              (r = (r = h_(r)) < 0 ? 0 :
                                                     255 < r ? 255 : 255 & r),
                              e.view[o](t * u + e.byteOffset, r, !0)
                        }(this, t, e)
                      },
                      enumerable: !0
                    })
                  }
                  var u = e.match(/\d+$/)[0] / 8,
                      r = e + (n ? 'Clamped' : '') + 'Array', i = 'get' + e,
                      o = 'set' + e, a = Rv[r], d = a, h = d && d.prototype,
                      e = {};
                  m_ ? Dv &&
                          (d = t(function(e, t, r, n) {
                             return Kv(e, h),
                                    s_(Jv(t) ? O_(t) ?
                                               void 0 !== n ?
                                               new a(t, Gv(r, u), n) :
                                               void 0 !== r ?
                                               new a(t, Gv(r, u)) :
                                               new a(t) :
                                               k_(t) ? E_(d, t) : Pv(t_, d, t) :
                                               new a(Hv(t)),
                                       e, d)
                           }),
                           Qv && Qv(d, __),
                           r_(e_(a),
                              function(e) {
                                e in d || jv(d, e, a[e])
                              }),
                           d.prototype = h) :
                       (d = t(function(e, t, r, n) {
                          Kv(e, h);
                          var i, o, a = 0, s = 0;
                          if (Jv(t)) {
                            if (!O_(t)) return k_(t) ? E_(d, t) : Pv(t_, d, t);
                            var c = t, s = Gv(r, u), r = t.byteLength;
                            if (void 0 === n) {
                              if (r % u) throw f_(S_);
                              if ((i = r - s) < 0) throw f_(S_)
                            } else if (r < (i = Yv(n) * u) + s)
                              throw f_(S_);
                            o = i / u
                          } else
                            o = Hv(t), c = new p_(i = o * u);
                          for (l_(e, {
                                 buffer: c,
                                 byteOffset: s,
                                 byteLength: i,
                                 length: o,
                                 view: new y_(c)
                               });
                               a < o;)
                            l(e, a++)
                        }),
                        Qv && Qv(d, __), h = d.prototype = $v(w_)),
                      h.constructor !== d && jv(h, 'constructor', d),
                      jv(h, b_, d), v_ && jv(h, v_, r),
                      e[r] = d, Fv({global: !0, forced: d != a, sham: !m_}, e),
                      C_ in d || jv(d, C_, u), C_ in h || jv(h, C_, u), n_(r)
                }) :
           M1.exports = function() {};
      var F_ = M1.exports;
      F_('Int8', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var R_ = L, P_ = Wn, N_ = $n, D_ = Math.min,
          M_ = [].copyWithin ||
          function(e, t) {
            var r = R_(this), n = N_(r), i = P_(e, n), o = P_(t, n),
                t = 2 < arguments.length ? arguments[2] : void 0,
                a = D_((void 0 === t ? n : P_(t, n)) - o, n - i), s = 1;
            for (o < i && i < o + a && (s = -1, o += a - 1, i += a - 1);
                 0 < a--;)
              o in r ? r[i] = r[o] : delete r[i], i += s, o += s;
            return r
          },
          z_ = v, K_ = Sm, U_ = M_, j_ = z_(U_), B_ = K_.aTypedArray,
          Y_ = K_.exportTypedArrayMethod;
      Y_('copyWithin', function(e, t) {
        return j_(B_(this), e, t, 2 < arguments.length ? arguments[2] : void 0)
      });
      var H_ = Sm, G_ = Tv.every, W_ = H_.aTypedArray,
          Z_ = H_.exportTypedArrayMethod;
      Z_('every', function(e) {
        return G_(W_(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var V_ = Sm, J_ = ue, X_ = $m, $_ = V_.aTypedArray,
          q_ = V_.exportTypedArrayMethod;
      q_('fill', function(e) {
        var t = arguments.length;
        return J_(
            X_, $_(this), e, 1 < t ? arguments[1] : void 0,
            2 < t ? arguments[2] : void 0)
      });
      var Q_ = $n,
          ew =
              function(e, t) {
            for (var r = 0, n = Q_(t), i = new e(n); r < n;) i[r] = t[r++];
            return i
          },
          tw = Sm, rw = Ns, nw = tw.TYPED_ARRAY_CONSTRUCTOR,
          iw = tw.aTypedArrayConstructor,
          ow =
              function(e) {
            return iw(rw(e, e[nw]))
          },
          aw = ew, sw = ow,
          cw =
              function(e, t) {
            return aw(sw(e), t)
          },
          lw = Sm, uw = Tv.filter, dw = cw, hw = lw.aTypedArray,
          fw = lw.exportTypedArrayMethod;
      fw('filter', function(e) {
        e = uw(hw(this), e, 1 < arguments.length ? arguments[1] : void 0);
        return dw(this, e)
      });
      var pw = Sm, gw = Tv.find, yw = pw.aTypedArray,
          mw = pw.exportTypedArrayMethod;
      mw('find', function(e) {
        return gw(yw(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var bw = Sm, vw = Tv.findIndex, _w = bw.aTypedArray,
          ww = bw.exportTypedArrayMethod;
      ww('findIndex', function(e) {
        return vw(_w(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var xw = Sm, kw = Tv.forEach, Cw = xw.aTypedArray,
          Sw = xw.exportTypedArrayMethod;
      Sw('forEach', function(e) {
        kw(Cw(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var Ew = Sm, Aw = ri.includes, Ow = Ew.aTypedArray,
          Lw = Ew.exportTypedArrayMethod;
      Lw('includes', function(e) {
        return Aw(Ow(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var Iw = Sm, Tw = ri.indexOf, Fw = Iw.aTypedArray,
          Rw = Iw.exportTypedArrayMethod;
      Rw('indexOf', function(e) {
        return Tw(Fw(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var Pw = x, Nw = d, Dw = v, Mw = Sm, zw = Hg, Kw = At,
          Uw = Kw('iterator'), jw = Pw.Uint8Array, Bw = Dw(zw.values),
          Yw = Dw(zw.keys), Hw = Dw(zw.entries), Gw = Mw.aTypedArray,
          Ww = Mw.exportTypedArrayMethod, Zw = jw && jw.prototype,
          Vw = !Nw(function() {
            Zw[Uw].call([1])
          }),
          Jw = !!Zw && Zw.values && Zw[Uw] === Zw.values &&
          'values' === Zw.values.name,
          Xw = function() {
            return Bw(Gw(this))
          };
      Ww('entries',
         function() {
           return Hw(Gw(this))
         },
         Vw),
          Ww('keys',
             function() {
               return Yw(Gw(this))
             },
             Vw),
          Ww('values', Xw, Vw || !Jw, {name: 'values'}),
          Ww(Uw, Xw, Vw || !Jw, {name: 'values'});
      var $w = Sm, qw = v, Qw = $w.aTypedArray, ex = $w.exportTypedArrayMethod,
          tx = qw([].join);
      ex('join', function(e) {
        return tx(Qw(this), e)
      });
      var rx = Us, nx = Or, ix = Bn, ox = $n, ax = Yf, sx = Math.min,
          cx = [].lastIndexOf, lx = !!cx && 1 / [1].lastIndexOf(1, -0) < 0,
          ux = ax('lastIndexOf'), dx = lx || !ux,
          hx = dx ?
          function(e) {
            if (lx) return rx(cx, this, arguments) || 0;
            var t = nx(this), r = ox(t), n = r - 1;
            for ((n = 1 < arguments.length ? sx(n, ix(arguments[1])) : n) < 0 &&
                     (n = r + n);
                 0 <= n; n--)
              if (n in t && t[n] === e) return n || 0;
            return -1
          } :
          cx,
          fx = Sm, px = Us, gx = hx, yx = fx.aTypedArray,
          mx = fx.exportTypedArrayMethod;
      mx('lastIndexOf', function(e) {
        var t = arguments.length;
        return px(gx, yx(this), 1 < t ? [e, arguments[1]] : [e])
      });
      var bx = Sm, vx = Tv.map, _x = ow, wx = bx.aTypedArray,
          xx = bx.exportTypedArrayMethod;
      xx('map', function(e) {
        return vx(
            wx(this), e, 1 < arguments.length ? arguments[1] : void 0,
            function(e, t) {
              return new (_x(e))(t)
            })
      });
      var kx = x, Cx = Ze, Sx = L, Ex = Sr, Ax = $n, Ox = kx.TypeError,
          Lx =
              function(l) {
            return function(e, t, r, n) {
              Cx(t);
              var i = Sx(e), o = Ex(i), a = Ax(i), s = l ? a - 1 : 0,
                  c = l ? -1 : 1;
              if (r < 2)
                for (;;) {
                  if (s in o) {
                    n = o[s], s += c;
                    break
                  }
                  if (s += c, l ? s < 0 : a <= s)
                    throw Ox('Reduce of empty array with no initial value')
                }
              for (; l ? 0 <= s : s < a; s += c)
                s in o && (n = t(n, o[s], s, i));
              return n
            }
          },
          Ix = {left: Lx(!1), right: Lx(!0)}, Tx = Sm, Fx = Ix.left,
          Rx = Tx.aTypedArray, Px = Tx.exportTypedArrayMethod;
      Px('reduce', function(e) {
        var t = arguments.length;
        return Fx(Rx(this), e, t, 1 < t ? arguments[1] : void 0)
      });
      var Nx = Sm, Dx = Ix.right, Mx = Nx.aTypedArray,
          zx = Nx.exportTypedArrayMethod;
      zx('reduceRight', function(e) {
        var t = arguments.length;
        return Dx(Mx(this), e, t, 1 < t ? arguments[1] : void 0)
      });
      var Kx = Sm, Ux = Kx.aTypedArray, jx = Kx.exportTypedArrayMethod,
          Bx = Math.floor;
      jx('reverse', function() {
        for (var e, t = Ux(this).length, r = Bx(t / 2), n = 0; n < r;)
          e = this[n], this[n++] = this[--t], this[t] = e;
        return this
      });
      var Yx = x, Hx = ue, Gx = Sm, Wx = $n, Zx = hv, Vx = L, Jx = d,
          Xx = Yx.RangeError, $x = Yx.Int8Array, qx = $x && $x.prototype,
          Qx = qx && qx.set, e2 = Gx.aTypedArray,
          t2 = Gx.exportTypedArrayMethod,
          r2 = !Jx(function() {
            var e = new Uint8ClampedArray(2);
            return Hx(Qx, e, {length: 1, 0: 3}, 1), 3 !== e[1]
          }),
          n2 = r2 && Gx.NATIVE_ARRAY_BUFFER_VIEWS && Jx(function() {
                 var e = new $x(2);
                 return e.set(1), e.set('2', 1), 0 !== e[0] || 2 !== e[1]
               });
      t2('set', function(e) {
        e2(this);
        var t = Zx(1 < arguments.length ? arguments[1] : void 0, 1), r = Vx(e);
        if (r2) return Hx(Qx, this, r, t);
        var e = this.length, n = Wx(r), i = 0;
        if (e < n + t) throw Xx('Wrong length');
        for (; i < n;) this[t + i] = r[i++]
      }, !r2 || n2);
      var i2 = Sm, o2 = ow, a2 = d, s2 = Hs, c2 = i2.aTypedArray,
          l2 = i2.exportTypedArrayMethod, u2 = a2(function() {
                                            new Int8Array(1).slice()
                                          });
      l2('slice', function(e, t) {
        for (var r = s2(c2(this), e, t), t = o2(this), n = 0, i = r.length,
                 o = new t(i);
             n < i;)
          o[n] = r[n++];
        return o
      }, u2);
      var d2 = Sm, h2 = Tv.some, f2 = d2.aTypedArray,
          p2 = d2.exportTypedArrayMethod;
      p2('some', function(e) {
        return h2(f2(this), e, 1 < arguments.length ? arguments[1] : void 0)
      });
      var g2 = Bh, y2 = Math.floor,
          m2 =
              function(e, t) {
            var r = e.length, n = y2(r / 2);
            return r < 8 ? b2(e, t) :
                           v2(e, m2(g2(e, 0, n), t), m2(g2(e, n), t), t)
          },
          b2 =
              function(e, t) {
            for (var r, n, i = e.length, o = 1; o < i;) {
              for (r = e[n = o]; n && 0 < t(e[n - 1], r);) e[n] = e[--n];
              n !== o++ && (e[n] = r)
            }
            return e
          },
          v2 =
              function(e, t, r, n) {
            for (var i = t.length, o = r.length, a = 0, s = 0; a < i || s < o;)
              e[a + s] = a < i && s < o ? n(t[a], r[s]) <= 0 ? t[a++] : r[s++] :
                                          a < i ? t[a++] : r[s++];
            return e
          },
          _2 = m2, w2 = be, x2 = w2.match(/firefox\/(\d+)/i),
          k2 = !!x2 && +x2[1], C2 = be, S2 = /MSIE|Trident/.test(C2), E2 = be,
          A2 = E2.match(/AppleWebKit\/(\d+)\./), O2 = !!A2 && +A2[1], L2 = x,
          I2 = v, T2 = d, F2 = Ze, R2 = _2, P2 = Sm, N2 = k2, D2 = S2, M2 = Ae,
          z2 = O2, K2 = L2.Array, U2 = P2.aTypedArray,
          j2 = P2.exportTypedArrayMethod, B2 = L2.Uint16Array,
          Y2 = B2 && I2(B2.prototype.sort),
          H2 =
              !(!Y2 ||
                T2(function() {
                  Y2(new B2(2), null)
                }) &&
                    T2(function() {
                      Y2(new B2(2), {})
                    })),
          G2 = !!Y2 && !T2(function() {
            if (M2) return M2 < 74;
            if (N2) return N2 < 67;
            if (D2) return !0;
            if (z2) return z2 < 602;
            for (var e, t = new B2(516), r = K2(516), n = 0; n < 516; n++)
              e = n % 4, t[n] = 515 - n, r[n] = n - 2 * e + 3;
            for (Y2(t, function(e, t) {
                   return (e / 4 | 0) - (t / 4 | 0)
                 }), n = 0; n < 516; n++)
              if (t[n] !== r[n]) return !0
          }),
          W2 = function(r) {
            return function(e, t) {
              return void 0 !== r ?
                  +r(e, t) || 0 :
                  t != t ?
                  -1 :
                  e != e ?
                  1 :
                  0 === e && 0 === t ? 0 < 1 / e && 1 / t < 0 ? 1 : -1 : t < e
            }
          };
      j2('sort', function(e) {
        return void 0 !== e && F2(e), G2 ? Y2(this, e) : R2(U2(this), W2(e))
      }, !G2 || H2);
      var Z2 = Sm, V2 = Jn, J2 = Wn, X2 = ow, $2 = Z2.aTypedArray,
          q2 = Z2.exportTypedArrayMethod;
      q2('subarray', function(e, t) {
        var r = $2(this), n = r.length, e = J2(e, n);
        return new (X2(r))(
            r.buffer, r.byteOffset + e * r.BYTES_PER_ELEMENT,
            V2((void 0 === t ? n : J2(t, n)) - e))
      });
      var Q2 = x, ek = Us, tk = Sm, rk = d, nk = Hs, ik = Q2.Int8Array,
          ok = tk.aTypedArray, ak = tk.exportTypedArrayMethod,
          sk = [].toLocaleString, ck = !!ik && rk(function() {
                                    sk.call(new ik(1))
                                  }),
          lk = rk(function() {
                 return [1, 2].toLocaleString() !=
                     new ik([1, 2]).toLocaleString()
               }) ||
          !rk(function() {
                 ik.prototype.toLocaleString.call([1, 2])
               });
      ak('toLocaleString', function() {
        return ek(sk, ck ? nk(ok(this)) : ok(this), nk(arguments))
      }, lk);
      var uk = Sm.exportTypedArrayMethod, dk = d, hk = x, fk = v,
          pk = hk.Uint8Array, gk = pk && pk.prototype || {}, yk = [].toString,
          mk = fk([].join);
      dk(function() {
        yk.call({})
      }) &&
          (yk = function() {
            return mk(this)
          });
      var bk = gk.toString != yk;
      uk('toString', yk, bk);
      var vk = M1.exports;
      vk('Uint8', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var _k = M1.exports;
      _k('Uint8', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      }, !0);
      var wk = M1.exports;
      wk('Int16', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var xk = M1.exports;
      xk('Uint16', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var kk = M1.exports;
      kk('Int32', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var Ck = M1.exports;
      Ck('Uint32', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var Sk = M1.exports;
      Sk('Float32', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var Ek = M1.exports;
      Ek('Float64', function(n) {
        return function(e, t, r) {
          return n(this, e, t, r)
        }
      });
      var Ak = p, Ok = x, Lk = v, Ik = Ni, Tk = Xy, Fk = jr, Rk = B.f,
          Pk = Kn.f, Nk = ye, Dk = _h, Mk = lo, zk = Iu, Kk = Mu,
          Uk = Br.exports, jk = d, Bk = R, Yk = An.enforce, Hk = da, Gk = At,
          Wk = yd, Zk = _d, Vk = Gk('match'), Jk = Ok.RegExp, Xk = Jk.prototype,
          $k = Ok.SyntaxError, qk = Lk(zk), Qk = Lk(Xk.exec),
          eC = Lk(''.charAt), tC = Lk(''.replace), rC = Lk(''.indexOf),
          nC = Lk(''.slice), iC = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
          oC = /a/g, aC = /a/g, sC = new Jk(oC) !== oC, cC = Kk.MISSED_STICKY,
          lC = Kk.UNSUPPORTED_Y,
          uC = Ak && (!sC || cC || Wk || Zk || jk(function() {
                 return aC[Vk] = !1,
                        Jk(oC) != oC || Jk(aC) == aC || '/a/i' != Jk(oC, 'i')
               })),
          dC = function(e) {
            for (var t, r = e.length, n = 0, i = '', o = !1; n <= r; n++)
              '\\' !== (t = eC(e, n)) ?
                  o || '.' !== t ?
                  ('[' === t ? o = !0 : ']' === t && (o = !1), i += t) :
                  i += '[\\s\\S]' :
                  i += t + eC(e, ++n);
            return i
          }, hC = function(e) {
            for (var t, r = e.length, n = 0, i = '', o = [], a = {}, s = !1,
                        c = !1, l = 0, u = '';
                 n <= r; n++) {
              if ('\\' === (t = eC(e, n)))
                t += eC(e, ++n);
              else if (']' === t)
                s = !1;
              else if (!s)
                switch (!0) {
                  case '[' === t:
                    s = !0;
                    break;
                  case '(' === t:
                    Qk(iC, nC(e, n + 1)) && (n += 2, c = !0), i += t, l++;
                    continue;
                  case '>' === t && c:
                    if ('' === u || Bk(a, u))
                      throw new $k('Invalid capture group name');
                    a[u] = !0, c = !(o[o.length] = [u, l]), u = '';
                    continue
                }
              c ? u += t : i += t
            }
            return [i, o]
          };
      if (Ik('RegExp', uC)) {
        for (var fC =
                     function(e, t) {
                       var r, n, i = Nk(Xk, this), o = Dk(e), a = void 0 === t,
                                 s = [], c = e;
                       if (!i && o && a && e.constructor === fC) return e;
                       if ((o || Nk(Xk, e)) &&
                               (e = e.source,
                                a && (t = 'flags' in c ? c.flags : qk(c))),
                           e = void 0 === e ? '' : Mk(e),
                           t = void 0 === t ? '' : Mk(t), c = e,
                           o = t = Wk && 'dotAll' in oC &&
                                   (r = !!t && -1 < rC(t, 's')) ?
                               tC(t, /s/g, '') :
                               t,
                           cC && 'sticky' in oC &&
                               (n = !!t && -1 < rC(t, 'y')) && lC &&
                               (t = tC(t, /y/g, '')),
                           Zk && (e = (a = hC(e))[0], s = a[1]),
                           t = Tk(Jk(e, t), i ? this : Xk, fC),
                           (r || n || s.length) &&
                               (i = Yk(t),
                                r && (i.dotAll = !0, i.raw = fC(dC(e), o)),
                                n && (i.sticky = !0),
                                s.length && (i.groups = s)),
                           e !== c)
                         try {
                           Fk(t, 'source', '' === c ? '(?:)' : c)
                         } catch (e) {
                         }
                       return t
                     },
                 pC =
                     function(t) {
                       t in fC || Rk(fC, t, {
                         configurable: !0,
                         get: function() {
                           return Jk[t]
                         },
                         set: function(e) {
                           Jk[t] = e
                         }
                       })
                     },
                 gC = Pk(Jk), yC = 0;
             gC.length > yC;)
          pC(gC[yC++]);
        Xk.constructor = fC, fC.prototype = Xk, Uk(Ok, 'RegExp', fC)
      }
      Hk('RegExp');
      var mC = p, bC = B, vC = Iu, _C = d, wC = RegExp.prototype,
          xC = mC && _C(function() {
                 return 'sy' !==
                     Object.getOwnPropertyDescriptor(wC, 'flags')
                         .get.call({dotAll: !0, sticky: !0})
               });
      xC && bC.f(wC, 'flags', {configurable: !0, get: vC});
      var kC = Yi, CC = L, SC = ju, EC = d, AC = EC(function() {
                                              SC(1)
                                            });
      kC({target: 'Object', stat: !0, forced: AC}, {
        keys: function(e) {
          return SC(CC(e))
        }
      });
      var OC = p, LC = x, IC = v, TC = Ni, FC = Br.exports, RC = R, PC = Xy,
          NC = ye, DC = Ke, MC = Mt, zC = d, KC = Kn.f, UC = lr.f, jC = B.f,
          BC = Gi, YC = Rf.trim, HC = 'Number', GC = LC[HC], WC = GC.prototype,
          ZC = LC.TypeError, VC = IC(''.slice), JC = IC(''.charCodeAt),
          XC = function(e) {
            e = MC(e, 'number');
            return 'bigint' == typeof e ? e : $C(e)
          }, $C = function(e) {
            var t, r, n, i, o, a, s, c = MC(e, 'number');
            if (DC(c)) throw ZC('Cannot convert a Symbol value to a number');
            if ('string' == typeof c && 2 < c.length)
              if (c = YC(c), 43 === (t = JC(c, 0)) || 45 === t) {
                if (88 === (e = JC(c, 2)) || 120 === e) return NaN
              } else if (48 === t) {
                switch (JC(c, 1)) {
                  case 66:
                  case 98:
                    r = 2, n = 49;
                    break;
                  case 79:
                  case 111:
                    r = 8, n = 55;
                    break;
                  default:
                    return +c
                }
                for (o = (i = VC(c, 2)).length, a = 0; a < o; a++)
                  if ((s = JC(i, a)) < 48 || n < s) return NaN;
                return parseInt(i, r)
              }
            return +c
          };
      if (TC(HC, !GC(' 0o1') || !GC('0b1') || GC('+0x1'))) {
        for (
            var qC =
                    function(e) {
                      var e = arguments.length < 1 ? 0 : GC(XC(e)), t = this;
                      return NC(WC, t) && zC(function() {
                               BC(t)
                             }) ?
                          PC(Object(e), t, qC) :
                          e
                    },
                QC = OC ?
                KC(GC) :
                'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range'
                    .split(','),
                e5 = 0, t5;
            QC.length > e5; e5++)
          RC(GC, t5 = QC[e5]) && !RC(qC, t5) && jC(qC, t5, UC(GC, t5));
        qC.prototype = WC, WC.constructor = qC, FC(LC, HC, qC)
      }
      var r5 = ue, n5 = gh, i5 = ce, o5 = Jn, a5 = lo, s5 = S, c5 = Je, l5 = Th,
          u5 = Xh;
      n5('match', function(n, s, c) {
        return [
          function(e) {
            var t = s5(this), r = null == e ? void 0 : c5(e, n);
            return r ? r5(r, e, t) : new RegExp(e)[n](a5(t))
          },
          function(e) {
            var t = i5(this), r = a5(e), e = c(s, t, r);
            if (e.done) return e.value;
            if (!t.global) return u5(t, r);
            for (var n = t.unicode, i = [], o = t.lastIndex = 0;
                 null !== (a = u5(t, r));) {
              var a = a5(a[0]);
              '' === (i[o] = a) && (t.lastIndex = l5(r, o5(t.lastIndex), n)),
                  o++
            }
            return 0 === o ? null : i
          }
        ]
      });
      var d5 = Yi, h5 = x, f5 = Wn, p5 = Bn, g5 = $n, y5 = L, m5 = Gp, b5 = Nh,
          v5 = Xp, _5 = v5('splice'), w5 = h5.TypeError, x5 = Math.max,
          k5 = Math.min, C5 = 9007199254740991,
          S5 = 'Maximum allowed length exceeded';
      function E5(e) {
        for (var t = Number(e).toString(16).toUpperCase(); t.length < 2;)
          t = '0' + t;
        return t
      }
      function A5(e) {
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (t.length <= e) throw 'int exceeed: ' + e;
        return t[e]
      }
      function O5(e) {
        if (!e) throw 'invalid hexx ' + e;
        var t = parseInt(e, 16);
        if (isNaN(t)) throw 'nan is captured: ' + e;
        return t
      }
      function L5(e) {
        if (!Array.isArray(e)) throw 'only array can use flatten';
        return e.reduce(function(e, t) {
          return e.concat(Array.isArray(t) ? L5(t) : t)
        }, [])
      }
      function I5(t) {
        return new Promise(function(e) {
          return setTimeout(e, t)
        })
      }
      function T5(e) {
        for (var t = e.length - 1; 0 <= t; t--) {
          if ('.' == e[t]) return e.substring(t).toLowerCase();
          if ('/' == e[t] || '\\' == e[t]) return ''
        }
        return ''
      }
      function F5() {
        var e = localStorage.getItem('ninefox-locale');
        return e ||
            (-1 < (navigator.language || navigator.browserLanguage)
                         .toLowerCase()
                         .indexOf('zh') ?
                 'zh' :
                 'en')
      }
      function R5(e) {
        return JSON.parse(JSON.stringify(e))
      }
      function P5() {
        return (new Date).getTime()
      }
      function N5(e, t) {
        var r, n = {
          'M+': e.getMonth() + 1,
          'd+': e.getDate(),
          'h+': e.getHours(),
          'm+': e.getMinutes(),
          's+': e.getSeconds(),
          'q+': Math.floor((e.getMonth() + 3) / 3),
          S: e.getMilliseconds()
        };
        for (r in /(y+)/.test(t) &&
                 (t = t.replace(
                      RegExp.$1,
                      (e.getFullYear() + '').substr(4 - RegExp.$1.length))),
             n)
          new RegExp('(' + r + ')').test(t) &&
              (t = t.replace(
                   RegExp.$1,
                   1 == RegExp.$1.length ?
                       n[r] :
                       ('00' + n[r]).substr(('' + n[r]).length)));
        return t
      }
      function D5(e) {
        var t = new Date;
        return t.setTime(e), t
      }
      function M5(e, t) {
        return N5(e, t = t || 'yyyy-MM-dd hh:mm')
      }
      function z5(e, t) {
        return M5(D5(e), t)
      }
      d5({target: 'Array', proto: !0, forced: !_5}, {
        splice: function(e, t) {
          var r, n, i, o, a, s, c = y5(this), l = g5(c), u = f5(e, l),
                                e = arguments.length;
          if (0 === e ? r = n = 0 :
                        n = 1 === e ? (r = 0, l - u) :
                                      (r = e - 2, k5(x5(p5(t), 0), l - u)),
              C5 < l + r - n)
            throw w5(S5);
          for (i = m5(c, n), o = 0; o < n; o++)
            (a = u + o) in c && b5(i, o, c[a]);
          if (r < (i.length = n)) {
            for (o = u; o < l - n; o++)
              s = o + r, (a = o + n) in c ? c[s] = c[a] : delete c[s];
            for (o = l; l - n + r < o; o--) delete c[o - 1]
          } else if (n < r)
            for (o = l - n; u < o; o--)
              s = o + r - 1, (a = o + n - 1) in c ? c[s] = c[a] : delete c[s];
          for (o = 0; o < r; o++) c[o + u] = arguments[o + 2];
          return c.length = l - n + r, i
        }
      });
      var K5 = Yi, U5 = Tv.map, j5 = Xp, B5 = j5('map');
      K5({target: 'Array', proto: !0, forced: !B5}, {
        map: function(e) {
          return U5(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
      });
      var Y5 = Yi, H5 = x, G5 = Np, W5 = Ss, Z5 = G, V5 = Wn, J5 = $n, X5 = Or,
          $5 = Nh, q5 = At, Q5 = Xp, eS = Hs, tS = Q5('slice'),
          rS = q5('species'), nS = H5.Array, iS = Math.max;
      Y5({target: 'Array', proto: !0, forced: !tS}, {
        slice: function(e, t) {
          var r, n, i, o = X5(this), a = J5(o), s = V5(e, a),
                       c = V5(void 0 === t ? a : t, a);
          if (G5(o) &&
              (r = o.constructor,
               (r = W5(r) && (r === nS || G5(r.prototype)) ||
                        Z5(r) && null === (r = r[rS]) ?
                    void 0 :
                    r) === nS ||
                   void 0 === r))
            return eS(o, s, c);
          for (n = new (void 0 === r ? nS : r)(iS(c - s, 0)), i = 0; s < c;
               s++, i++)
            s in o && $5(n, i, o[s]);
          return n.length = i, n
        }
      });
      var oS = Tv.forEach, aS = Yf, sS = aS('forEach'),
          cS = sS ? [].forEach : function(e) {
            return oS(this, e, 1 < arguments.length ? arguments[1] : void 0)
          }, lS = x, uS = Wg, dS = Xg, hS = cS, fS = jr, pS = function(t) {
            if (t && t.forEach !== hS) try {
                fS(t, 'forEach', hS)
              } catch (e) {
                t.forEach = hS
              }
          }, gS;
      for (gS in uS) uS[gS] && pS(lS[gS] && lS[gS].prototype);
      pS(dS);
      var yS = {
        a: 7,
        c: 6,
        h: 1,
        l: 2,
        m: 2,
        r: 4,
        q: 4,
        s: 4,
        t: 2,
        v: 1,
        z: 0
      },
          mS = [
            5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
            8201, 8202, 8239, 8287, 12288, 65279
          ];
      function bS(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e || 32 === e ||
            9 === e || 11 === e || 12 === e || 160 === e ||
            5760 <= e && 0 <= mS.indexOf(e)
      }
      function vS(e) {
        switch (32 | e) {
          case 109:
          case 122:
          case 108:
          case 104:
          case 118:
          case 99:
          case 115:
          case 113:
          case 116:
          case 97:
          case 114:
            return 1
        }
      }
      function _S(e) {
        return 97 == (32 | e)
      }
      function wS(e) {
        return 48 <= e && e <= 57
      }
      function xS(e) {
        return 48 <= e && e <= 57 || 43 === e || 45 === e || 46 === e
      }
      function kS(e) {
        this.index = 0, this.path = e, this.max = e.length, this.result = [],
        this.param = 0, this.err = '', this.segmentStart = 0, this.data = []
      }
      function CS(e) {
        for (; e.index < e.max && bS(e.path.charCodeAt(e.index));) e.index++
      }
      function SS(e) {
        var t = e.path.charCodeAt(e.index);
        return 48 === t ?
            (e.param = 0, void e.index++) :
            49 === t ?
            (e.param = 1, void e.index++) :
            void (
                e.err = 'SvgPath: arc flag can be 0 or 1 only (at pos ' +
                    e.index + ')')
      }
      function ES(e) {
        var t, r, n = e.index, i = n, o = e.max, a = !1, s = !1, c = !1;
        if (o <= i)
          e.err = 'SvgPath: missed param (at pos ' + i + ')';
        else if (
            wS(r = 43 === (r = e.path.charCodeAt(i)) || 45 === r ?
                   ++i < o ? e.path.charCodeAt(i) : 0 :
                   r) ||
            46 === r) {
          if (46 !== r) {
            if (t = 48 === r, r = ++i < o ? e.path.charCodeAt(i) : 0,
                t && i < o && r && wS(r))
              return void (
                  e.err =
                      'SvgPath: numbers started with `0` such as `09` are illegal (at pos ' +
                      n + ')');
            for (; i < o && wS(e.path.charCodeAt(i));) i++, a = !0;
            r = i < o ? e.path.charCodeAt(i) : 0
          }
          if (46 === r) {
            for (c = !0, i++; wS(e.path.charCodeAt(i));) i++, s = !0;
            r = i < o ? e.path.charCodeAt(i) : 0
          }
          if (101 === r || 69 === r) {
            if (c && !a && !s)
              return void (
                  e.err = 'SvgPath: invalid float exponent (at pos ' + i + ')');
            if (43 !== (r = ++i < o ? e.path.charCodeAt(i) : 0) && 45 !== r ||
                    i++,
                !(i < o && wS(e.path.charCodeAt(i))))
              return void (
                  e.err = 'SvgPath: invalid float exponent (at pos ' + i + ')');
            for (; i < o && wS(e.path.charCodeAt(i));) i++
          }
          e.index = i, e.param = parseFloat(e.path.slice(n, i)) + 0
        } else
          e.err =
              'SvgPath: param should start with 0..9 or `.` (at pos ' + i + ')'
      }
      function AS(e) {
        var t = e.path[e.segmentStart], r = t.toLowerCase(), n = e.data;
        if ('m' === r && 2 < n.length &&
                (e.result.push([t, n[0], n[1]]), n = n.slice(2), r = 'l',
                 t = 'm' === t ? 'l' : 'L'),
            'r' === r)
          e.result.push([t].concat(n));
        else
          for (; n.length >= yS[r] &&
               (e.result.push([t].concat(n.splice(0, yS[r]))), yS[r]);)
            ;
      }
      function OS(e) {
        var t, r, n, i, o, a = e.max;
        if (e.segmentStart = e.index, r = _S(t = e.path.charCodeAt(e.index)),
            vS(t))
          if (i = yS[e.path[e.index].toLowerCase()], e.index++, CS(e),
              e.data = [], i) {
            for (n = !1;;) {
              for (o = i; 0 < o; o--) {
                if ((!r || 3 !== o && 4 !== o ? ES : SS)(e), e.err.length)
                  return;
                e.data.push(e.param), CS(e),
                    n = !1,
                    e.index < a && 44 === e.path.charCodeAt(e.index) &&
                    (e.index++, CS(e), n = !0)
              }
              if (!n) {
                if (e.index >= e.max) break;
                if (!xS(e.path.charCodeAt(e.index))) break
              }
            }
            AS(e)
          } else
            AS(e);
        else
          e.err = 'SvgPath: bad command ' + e.path[e.index] + ' (at pos ' +
              e.index + ')'
      }
      function LS(e) {
        var t = new kS(e), r = t.max;
        for (CS(t); t.index < r && !t.err.length;) OS(t);
        return t.err.length ? t.result = [] :
                              t.result.length &&
                       ('mM'.indexOf(t.result[0][0]) < 0 ?
                            (t.err =
                                 'SvgPath: string should start with `M` or `m`',
                             t.result = []) :
                            t.result[0][0] = 'M'),
        {
          err: t.err, segments: t.result
        }
      }
      function IS(e, t) {
        return [
          e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1],
          e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3],
          e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]
        ]
      }
      function TS() {
        if (!(this instanceof TS)) return new TS;
        this.queue = [], this.cache = null
      }
      TS.prototype.matrix = function(e) {
        return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] &&
                       0 === e[4] && 0 === e[5] ||
                   (this.cache = null, this.queue.push(e)),
               this
      }, TS.prototype.translate = function(e, t) {
        return 0 === e && 0 === t ||
                   (this.cache = null, this.queue.push([1, 0, 0, 1, e, t])),
               this
      }, TS.prototype.scale = function(e, t) {
        return 1 === e && 1 === t ||
                   (this.cache = null, this.queue.push([e, 0, 0, t, 0, 0])),
               this
      }, TS.prototype.rotate = function(e, t, r) {
        var n;
        return 0 !== e &&
                   (this.translate(t, r), n = e * Math.PI / 180,
                    e = Math.cos(n), n = Math.sin(n),
                    this.queue.push([e, n, -n, e, 0, 0]), this.cache = null,
                    this.translate(-t, -r)),
               this
      }, TS.prototype.skewX = function(e) {
        return 0 !== e && (this.cache = null, this.queue.push([
                 1, 0, Math.tan(e * Math.PI / 180), 1, 0, 0
               ])),
               this
      }, TS.prototype.skewY = function(e) {
        return 0 !== e && (this.cache = null, this.queue.push([
                 1, Math.tan(e * Math.PI / 180), 0, 1, 0, 0
               ])),
               this
      }, TS.prototype.toArray = function() {
        if (this.cache) return this.cache;
        if (!this.queue.length)
          return this.cache = [1, 0, 0, 1, 0, 0], this.cache;
        if (this.cache = this.queue[0], 1 === this.queue.length)
          return this.cache;
        for (var e = 1; e < this.queue.length; e++)
          this.cache = IS(this.cache, this.queue[e]);
        return this.cache
      }, TS.prototype.calc = function(e, t, r) {
        var n;
        return this.queue.length ?
            (this.cache || (this.cache = this.toArray()),
             [
               e * (n = this.cache)[0] + t * n[2] + (r ? 0 : n[4]),
               e * n[1] + t * n[3] + (r ? 0 : n[5])
             ]) :
            [e, t]
      };
      var FS = {
        matrix: !0,
        scale: !0,
        rotate: !0,
        translate: !0,
        skewX: !0,
        skewY: !0
      },
          RS =
              /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/,
          PS = /[\s,]+/;
      function NS(e) {
        var t, r, n = new TS;
        return e.split(RS).forEach(function(e) {
          if (e.length)
            if (void 0 === FS[e])
              switch (r = e.split(PS).map(function(e) {
                return +e || 0
              }),
                      t) {
                case 'matrix':
                  return void (6 === r.length && n.matrix(r));
                case 'scale':
                  return void (
                      1 === r.length ? n.scale(r[0], r[0]) :
                                       2 === r.length && n.scale(r[0], r[1]));
                case 'rotate':
                  return void (
                      1 === r.length ?
                          n.rotate(r[0], 0, 0) :
                          3 === r.length && n.rotate(r[0], r[1], r[2]));
                case 'translate':
                  return void (
                      1 === r.length ?
                          n.translate(r[0], 0) :
                          2 === r.length && n.translate(r[0], r[1]));
                case 'skewX':
                  return void (1 === r.length && n.skewX(r[0]));
                case 'skewY':
                  return void (1 === r.length && n.skewY(r[0]))
              }
            else
              t = e
        }),
               n
      }
      var DS = 2 * Math.PI;
      function MS(e, t, r, n) {
        var i = e * r + t * n;
        return (i = 1 < i ? 1 : i) < -1 && (i = -1),
               (e * n - t * r < 0 ? -1 : 1) * Math.acos(i)
      }
      function zS(e, t, r, n, i, o, a, s, c, l) {
        var u = l * (e - r) / 2 + c * (t - n) / 2,
            d = -c * (e - r) / 2 + l * (t - n) / 2, h = a * a, f = s * s,
            p = u * u, g = d * d, y = h * f - h * g - f * p;
        y < 0 && (y = 0), y /= h * g + f * p;
        i = (y = Math.sqrt(y) * (i === o ? -1 : 1)) * a / s * d,
        y = y * -s / a * u, r = l * i - c * y + (e + r) / 2,
        l = c * i + l * y + (t + n) / 2, t = (u - i) / a, n = (d - y) / s,
        a = (-u - i) / a, y = (-d - y) / s, s = MS(1, 0, t, n),
        y = MS(t, n, a, y);
        return 0 === o && 0 < y && (y -= DS), 1 === o && y < 0 && (y += DS),
               [r, l, s, y]
      }
      function KS(e, t) {
        var r = 4 / 3 * Math.tan(t / 4), n = Math.cos(e), i = Math.sin(e),
            o = Math.cos(e + t), t = Math.sin(e + t);
        return [n, i, n - i * r, i + n * r, o + t * r, t - o * r, o, t]
      }
      function US(e, t, r, n, i, o, a, s, c) {
        var l = Math.sin(c * DS / 360), u = Math.cos(c * DS / 360),
            d = u * (e - r) / 2 + l * (t - n) / 2,
            c = -l * (e - r) / 2 + u * (t - n) / 2;
        if (0 == d && 0 == c) return [];
        if (0 === a || 0 === s) return [];
        a = Math.abs(a), s = Math.abs(s);
        c = d * d / (a * a) + c * c / (s * s);
        1 < c && (a *= Math.sqrt(c), s *= Math.sqrt(c));
        var h = zS(e, t, r, n, i, o, a, s, l, u), f = [], p = h[2], g = h[3],
            y = Math.max(Math.ceil(Math.abs(g) / (DS / 4)), 1);
        g /= y;
        for (var m = 0; m < y; m++) f.push(KS(p, g)), p += g;
        return f.map(function(e) {
          for (var t = 0; t < e.length; t += 2) {
            var r = e[t + 0], n = e[t + 1], i = l * (r *= a) + u * (n *= s);
            e[t + 0] = u * r - l * n + h[0], e[t + 1] = i + h[1]
          }
          return e
        })
      }
      var jS = 1e-10, BS = Math.PI / 180;
      function YS(e, t, r) {
        if (!(this instanceof YS)) return new YS(e, t, r);
        this.rx = e, this.ry = t, this.ax = r
      }
      function HS(e) {
        if (!(this instanceof HS)) return new HS(e);
        e = LS(e);
        this.segments = e.segments, this.err = e.err, this.__stack = []
      }
      YS.prototype.transform = function(e) {
        var t = Math.cos(this.ax * BS), r = Math.sin(this.ax * BS),
            n =
                [
                  this.rx * (e[0] * t + e[2] * r),
                  this.rx * (e[1] * t + e[3] * r),
                  this.ry * (-e[0] * r + e[2] * t),
                  this.ry * (-e[1] * r + e[3] * t)
                ],
            i = n[0] * n[0] + n[2] * n[2], o = n[1] * n[1] + n[3] * n[3],
            r = ((n[0] - n[3]) * (n[0] - n[3]) +
                 (n[2] + n[1]) * (n[2] + n[1])) *
            ((n[0] + n[3]) * (n[0] + n[3]) + (n[2] - n[1]) * (n[2] - n[1])),
            e = (i + o) / 2;
        if (r < jS * e)
          return this.rx = this.ry = Math.sqrt(e), this.ax = 0, this;
        t = n[0] * n[1] + n[2] * n[3], n = e + (r = Math.sqrt(r)) / 2,
        r = e - r / 2;
        return this.ax = Math.abs(t) < jS && Math.abs(n - o) < jS ? 90 :
                                                                    180 *
                       Math.atan(
                           Math.abs(t) > Math.abs(n - o) ? (n - i) / t :
                                                           t / (n - o)) /
                       Math.PI,
               0 <= this.ax ? (this.rx = Math.sqrt(n), this.ry = Math.sqrt(r)) :
                              (this.ax += 90, this.rx = Math.sqrt(r),
                               this.ry = Math.sqrt(n)),
               this
      }, YS.prototype.isDegenerate = function() {
        return this.rx < jS * this.ry || this.ry < jS * this.rx
      }, HS.from = function(e) {
        if ('string' == typeof e) return new HS(e);
        if (e instanceof HS) {
          var t = new HS('');
          return t.err = e.err, t.segments = e.segments.map(function(e) {
            return e.slice()
          }),
                 t.__stack = e.__stack.map(function(e) {
                   return TS().matrix(e.toArray())
                 }),
                 t
        }
        throw new Error('SvgPath.from: invalid param type ' + e)
      }, HS.prototype.__matrix = function(l) {
        var u, d = this;
        l.queue.length && this.iterate(function(e, t, r, n) {
          var i, o, a;
          switch (e[0]) {
            case 'v':
              o = 0 === (i = l.calc(0, e[1], !0))[0] ? ['v', i[1]] :
                                                       ['l', i[0], i[1]];
              break;
            case 'V':
              o = (i = l.calc(r, e[1], !1))[0] === l.calc(r, n, !1)[0] ?
                  ['V', i[1]] :
                  ['L', i[0], i[1]];
              break;
            case 'h':
              o = 0 === (i = l.calc(e[1], 0, !0))[1] ? ['h', i[0]] :
                                                       ['l', i[0], i[1]];
              break;
            case 'H':
              o = (i = l.calc(e[1], n, !1))[1] === l.calc(r, n, !1)[1] ?
                  ['H', i[0]] :
                  ['L', i[0], i[1]];
              break;
            case 'a':
            case 'A':
              var s = l.toArray(), c = YS(e[1], e[2], e[3]).transform(s);
              if (s[0] * s[3] - s[1] * s[2] < 0 && (e[5] = e[5] ? '0' : '1'),
                  i = l.calc(e[6], e[7], 'a' === e[0]),
                  'A' === e[0] && e[6] === r && e[7] === n ||
                      'a' === e[0] && 0 === e[6] && 0 === e[7]) {
                o = ['a' === e[0] ? 'l' : 'L', i[0], i[1]];
                break
              }
              o = c.isDegenerate() ?
                  ['a' === e[0] ? 'l' : 'L', i[0], i[1]] :
                  [e[0], c.rx, c.ry, c.ax, e[4], e[5], i[0], i[1]];
              break;
            case 'm':
              o = ['m', (i = l.calc(e[1], e[2], a = 0 < t))[0], i[1]];
              break;
            default:
              for (o = [c = e[0]], a = c.toLowerCase() === c, u = 1;
                   u < e.length; u += 2)
                i = l.calc(e[u], e[u + 1], a), o.push(i[0], i[1])
          }
          d.segments[t] = o
        }, !0)
      }, HS.prototype.__evaluateStack = function() {
        var e, t;
        if (this.__stack.length) {
          if (1 === this.__stack.length)
            return this.__matrix(this.__stack[0]), void (this.__stack = []);
          for (e = TS(), t = this.__stack.length; 0 <= --t;)
            e.matrix(this.__stack[t].toArray());
          this.__matrix(e), this.__stack = []
        }
      }, HS.prototype.toString = function() {
        var e = [];
        this.__evaluateStack();
        for (var t = 0; t < this.segments.length; t++)
          this.segments[t][0], e = e.concat(this.segments[t]);
        return e.join(' ').replace(/ \-/g, '-').replace(/zm/g, 'z m')
      }, HS.prototype.translate = function(e, t) {
        return this.__stack.push(TS().translate(e, t || 0)), this
      }, HS.prototype.scale = function(e, t) {
        return this.__stack.push(TS().scale(e, t || 0 === t ? t : e)), this
      }, HS.prototype.rotate = function(e, t, r) {
        return this.__stack.push(TS().rotate(e, t || 0, r || 0)), this
      }, HS.prototype.skewX = function(e) {
        return this.__stack.push(TS().skewX(e)), this
      }, HS.prototype.skewY = function(e) {
        return this.__stack.push(TS().skewY(e)), this
      }, HS.prototype.matrix = function(e) {
        return this.__stack.push(TS().matrix(e)), this
      }, HS.prototype.transform = function(e) {
        return e.trim() && this.__stack.push(NS(e)), this
      }, HS.prototype.round = function(n) {
        var t, i = 0, o = 0, a = 0, s = 0;
        return n = n || 0, this.__evaluateStack(),
               this.segments.forEach(function(r) {
                 var e = r[0].toLowerCase() === r[0];
                 switch (r[0]) {
                   case 'H':
                   case 'h':
                     return e && (r[1] += a), a = r[1] - r[1].toFixed(n),
                                              void (r[1] = +r[1].toFixed(n));
                   case 'V':
                   case 'v':
                     return e && (r[1] += s), s = r[1] - r[1].toFixed(n),
                                              void (r[1] = +r[1].toFixed(n));
                   case 'Z':
                   case 'z':
                     return a = i, void (s = o);
                   case 'M':
                   case 'm':
                     return e && (r[1] += a, r[2] += s),
                            a = r[1] - r[1].toFixed(n),
                            s = r[2] - r[2].toFixed(n), i = a, o = s,
                            r[1] = +r[1].toFixed(n),
                            void (r[2] = +r[2].toFixed(n));
                   case 'A':
                   case 'a':
                     return e && (r[6] += a, r[7] += s),
                            a = r[6] - r[6].toFixed(n),
                            s = r[7] - r[7].toFixed(n), r[1] = +r[1].toFixed(n),
                            r[2] = +r[2].toFixed(n),
                            r[3] = +r[3].toFixed(n + 2),
                            r[6] = +r[6].toFixed(n),
                            void (r[7] = +r[7].toFixed(n));
                   default:
                     return t = r.length, e && (r[t - 2] += a, r[t - 1] += s),
                            a = r[t - 2] - r[t - 2].toFixed(n),
                            s = r[t - 1] - r[t - 1].toFixed(n),
                            void r.forEach(function(e, t) {
                              t && (r[t] = +r[t].toFixed(n))
                            })
                 }
               }),
               this
      }, HS.prototype.iterate = function(i, e) {
        var t, r, n, o = this.segments, a = {}, s = !1, c = 0, l = 0, u = 0,
                     d = 0;
        if (e || this.__evaluateStack(), o.forEach(function(e, t) {
              var r = i(e, t, c, l);
              Array.isArray(r) && (a[t] = r, s = !0);
              var n = e[0] === e[0].toLowerCase();
              switch (e[0]) {
                case 'm':
                case 'M':
                  return c = e[1] + (n ? c : 0), l = e[2] + (n ? l : 0), u = c,
                         void (d = l);
                case 'h':
                case 'H':
                  return void (c = e[1] + (n ? c : 0));
                case 'v':
                case 'V':
                  return void (l = e[1] + (n ? l : 0));
                case 'z':
                case 'Z':
                  return c = u, void (l = d);
                default:
                  c = e[e.length - 2] + (n ? c : 0),
                  l = e[e.length - 1] + (n ? l : 0)
              }
            }),
            !s)
          return this;
        for (n = [], t = 0; t < o.length; t++)
          if (void 0 !== a[t])
            for (r = 0; r < a[t].length; r++) n.push(a[t][r]);
          else
            n.push(o[t]);
        return this.segments = n, this
      }, HS.prototype.abs = function() {
        return this.iterate(function(e, t, r, n) {
          var i, o = e[0], a = o.toUpperCase();
          if (o !== a) switch (e[0] = a, o) {
              case 'v':
                return void (e[1] += n);
              case 'a':
                return e[6] += r, void (e[7] += n);
              default:
                for (i = 1; i < e.length; i++) e[i] += i % 2 ? r : n
            }
        }, !0), this
      }, HS.prototype.rel = function() {
        return this.iterate(function(e, t, r, n) {
          var i, o = e[0], a = o.toLowerCase();
          if (o !== a && (0 !== t || 'M' !== o)) switch (e[0] = a, o) {
              case 'V':
                return void (e[1] -= n);
              case 'A':
                return e[6] -= r, void (e[7] -= n);
              default:
                for (i = 1; i < e.length; i++) e[i] -= i % 2 ? r : n
            }
        }, !0), this
      }, HS.prototype.unarc = function() {
        return this.iterate(function(e, t, r, n) {
          var i, o = [], a = e[0];
          return 'A' !== a && 'a' !== a ?
              null :
              (a = 'a' === a ? (i = r + e[6], n + e[7]) : (i = e[6], e[7]),
               0 === (a = US(r, n, i, a, e[4], e[5], e[1], e[2], e[3])).length ?
                   [['a' === e[0] ? 'l' : 'L', e[6], e[7]]] :
                   (a.forEach(function(e) {
                     o.push(['C', e[2], e[3], e[4], e[5], e[6], e[7]])
                   }),
                    o))
        }),
               this
      }, HS.prototype.unshort = function() {
        var s, c, l, u, d, h = this.segments;
        return this.iterate(function(e, t, r, n) {
          var i, o = e[0], a = o.toUpperCase();
          t &&
              ('T' === a ?
                   (l = h[t - 1],
                    c = 'Q' === l[0] ?
                        (s = l[1] - r, l[2] - n) :
                        'q' === l[0] ? (s = l[1] - l[3], l[2] - l[4]) : s = 0,
                    u = -s, d = -c, (i = 't' === o) || (u += r, d += n),
                    h[t] = [i ? 'q' : 'Q', u, d, e[1], e[2]]) :
                   'S' === a &&
                       (l = h[t - 1],
                        c = 'C' === l[0] ?
                            (s = l[3] - r, l[4] - n) :
                            'c' === l[0] ? (s = l[3] - l[5], l[4] - l[6]) :
                                           s = 0,
                        u = -s, d = -c, (i = 's' === o) || (u += r, d += n),
                        h[t] = [i ? 'c' : 'C', u, d, e[1], e[2], e[3], e[4]]))
        }),
               this
      };
      var GS = {}, WS = At;
      GS.f = WS;
      var ZS = x, VS = ZS, JS = VS, XS = R, $S = GS, qS = B.f,
          QS =
              function(e) {
            var t = JS.Symbol || (JS.Symbol = {});
            XS(t, e) || qS(t, e, {value: $S.f(e)})
          },
          eE = Yi, tE = x, rE = pe, nE = Us, iE = ue, oE = v, aE = p, sE = Ie,
          cE = d, lE = R, uE = Np, dE = Y, hE = G, fE = ye, pE = Ke, gE = ce,
          yE = L, mE = Or, bE = Ut, vE = lo, _E = pr, wE = hd, xE = ju, kE = Kn,
          CE = ly, SE = pi, EE = lr, AE = B, OE = zu, LE = ur, IE = Hs,
          TE = Br.exports, FE = rt.exports, RE = rn, PE = nn, NE = yt, DE = At,
          ME = GS, zE = QS, KE = oa, UE = An, jE = Tv.forEach,
          BE = RE('hidden'), YE = 'Symbol', HE = 'prototype',
          GE = DE('toPrimitive'), WE = UE.set, ZE = UE.getterFor(YE),
          VE = Object[HE], JE = tE.Symbol, XE = JE && JE[HE], $E = tE.TypeError,
          qE = tE.QObject, QE = rE('JSON', 'stringify'), eA = EE.f, tA = AE.f,
          rA = CE.f, nA = LE.f, iA = oE([].push), oA = FE('symbols'),
          aA = FE('op-symbols'), sA = FE('string-to-symbol-registry'),
          cA = FE('symbol-to-string-registry'), lA = FE('wks'),
          uA = !qE || !qE[HE] || !qE[HE].findChild,
          dA = aE && cE(function() {
                 return 7 != wE(tA({}, 'a', {
                               get: function() {
                                 return tA(this, 'a', {value: 7}).a
                               }
                             })).a
               }) ?
          function(e, t, r) {
            var n = eA(VE, t);
            n && delete VE[t], tA(e, t, r), n && e !== VE && tA(VE, t, n)
          } :
          tA,
          hA = function(e, t) {
            var r = oA[e] = wE(XE);
            return WE(r, {type: YE, tag: e, description: t}),
                   aE || (r.description = t), r
          }, fA = function(e, t, r) {
            e === VE && fA(aA, t, r), gE(e);
            t = bE(t);
            return gE(r),
                   lE(oA, t) ?
                       (r.enumerable ?
                            (lE(e, BE) && e[BE][t] && (e[BE][t] = !1),
                             r = wE(r, {enumerable: _E(0, !1)})) :
                            (lE(e, BE) || tA(e, BE, _E(1, {})), e[BE][t] = !0),
                        dA(e, t, r)) :
                       tA(e, t, r)
          }, pA = function(t, e) {
            gE(t);
            var r = mE(e), e = xE(r).concat(vA(r));
            return jE(e, function(e) {
                     aE && !iE(yA, r, e) || fA(t, e, r[e])
                   }), t
          }, gA = function(e, t) {
            return void 0 === t ? wE(e) : pA(wE(e), t)
          }, yA = function(e) {
            var t = bE(e), e = iE(nA, this, t);
            return !(this === VE && lE(oA, t) && !lE(aA, t)) &&
                (!(e || !lE(this, t) || !lE(oA, t) ||
                   lE(this, BE) && this[BE][t]) ||
                 e)
          }, mA = function(e, t) {
            var r = mE(e), e = bE(t);
            if (r !== VE || !lE(oA, e) || lE(aA, e)) {
              t = eA(r, e);
              return !t || !lE(oA, e) || lE(r, BE) && r[BE][e] ||
                         (t.enumerable = !0),
                     t
            }
          }, bA = function(e) {
            var e = rA(mE(e)), t = [];
            return jE(e, function(e) {
                     lE(oA, e) || lE(PE, e) || iA(t, e)
                   }), t
          }, vA = function(e) {
            var t = e === VE, e = rA(t ? aA : mE(e)), r = [];
            return jE(e, function(e) {
                     !lE(oA, e) || t && !lE(VE, e) || iA(r, oA[e])
                   }), r
          }, _A, wA;
      sE ||
          (JE =
               function() {
                 if (fE(XE, this)) throw $E('Symbol is not a constructor');
                 var e = arguments.length && void 0 !== arguments[0] ?
                     vE(arguments[0]) :
                     void 0,
                     t = NE(e), r = function(e) {
                       this === VE && iE(r, aA, e),
                           lE(this, BE) && lE(this[BE], t) &&
                           (this[BE][t] = !1),
                           dA(this, t, _E(1, e))
                     };
                 return aE && uA && dA(VE, t, {configurable: !0, set: r}),
                        hA(t, e)
               },
           XE = JE[HE],
           TE(XE, 'toString',
              function() {
                return ZE(this).tag
              }),
           TE(JE, 'withoutSetter',
              function(e) {
                return hA(NE(e), e)
              }),
           LE.f = yA, AE.f = fA, OE.f = pA, EE.f = mA, kE.f = CE.f = bA,
           SE.f = vA,
           ME.f =
               function(e) {
                 return hA(DE(e), e)
               },
           aE &&
               (tA(XE, 'description', {
                  configurable: !0,
                  get: function() {
                    return ZE(this).description
                  }
                }),
                TE(VE, 'propertyIsEnumerable', yA, {unsafe: !0}))),
          eE({global: !0, wrap: !0, forced: !sE, sham: !sE}, {Symbol: JE}),
          jE(xE(lA),
             function(e) {
               zE(e)
             }),
          eE({target: YE, stat: !0, forced: !sE},
             {for:function(e){
        var t = vE(e);
        if (lE(sA, t)) return sA[t];
        e = JE(t);
        return sA[t] = e, cA[e] = t, e},keyFor:function(e){
        if (!pE(e)) throw $E(e + ' is not a symbol');
        if (lE(cA, e)) return cA[e]},useSetter:function(){
        uA = !0},useSimple:function(){
        uA = !1}
             }),
          eE({target: 'Object', stat: !0, forced: !sE, sham: !aE}, {
            create: gA,
            defineProperty: fA,
            defineProperties: pA,
            getOwnPropertyDescriptor: mA
          }),
          eE({target: 'Object', stat: !0, forced: !sE},
             {getOwnPropertyNames: bA, getOwnPropertySymbols: vA}),
          eE({
            target: 'Object',
            stat: !0,
            forced: cE(function() {
              SE.f(1)
            })
          },
             {
               getOwnPropertySymbols: function(e) {
                 return SE.f(yE(e))
               }
             }),
          QE &&
          (_A = !sE || cE(function() {
             var e = JE();
             return '[null]' != QE([e]) || '{}' != QE({a: e}) ||
                 '{}' != QE(Object(e))
           }),
           eE({target: 'JSON', stat: !0, forced: _A}, {
             stringify: function(e, t, r) {
               var n = IE(arguments), i = t;
               if ((hE(t) || void 0 !== e) && !pE(e))
                 return uE(t) || (t = function(e, t) {
                          if (dE(i) && (t = iE(i, this, e, t)), !pE(t)) return t
                        }), n[1] = t, nE(QE, null, n)
             }
           })),
          XE[GE] || (wA = XE.valueOf, TE(XE, GE, function(e) {
                       return iE(wA, this)
                     })), KE(JE, YE), PE[BE] = !0;
      var xA = Yi, kA = p, CA = x, SA = v, EA = R, AA = Y, OA = ye, LA = lo,
          IA = B.f, TA = Ei, FA = CA.Symbol, RA = FA && FA.prototype, PA, NA,
          DA, MA, zA, KA, UA, jA;
      !kA || !AA(FA) || 'description' in RA && void 0 === FA().description ||
          (PA = {},
           NA =
               function() {
                 var e = arguments.length < 1 || void 0 === arguments[0] ?
                     void 0 :
                     LA(arguments[0]),
                     t = OA(RA, this) ? new FA(e) : void 0 === e ? FA() : FA(e);
                 return '' === e && (PA[t] = !0), t
               },
           TA(NA, FA), NA.prototype = RA, RA.constructor = NA,
           DA = 'Symbol(test)' == String(FA('test')), MA = SA(RA.toString),
           zA = SA(RA.valueOf), KA = /^Symbol\((.*)\)[^)]+$/,
           UA = SA(''.replace), jA = SA(''.slice), IA(RA, 'description', {
             configurable: !0,
             get: function() {
               var e = zA(this), t = MA(e);
               if (EA(PA, e)) return '';
               t = DA ? jA(t, 7, -1) : UA(t, KA, '$1');
               return '' === t ? void 0 : t
             }
           }),
           xA({global: !0, forced: !0}, {Symbol: NA}));
      var BA = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
      }, YA = ue, HA = gh, GA = ce, WA = S, ZA = BA, VA = lo, JA = Je, XA = Xh;
      HA('search', function(n, i, o) {
        return [
          function(e) {
            var t = WA(this), r = null == e ? void 0 : JA(e, n);
            return r ? YA(r, e, t) : new RegExp(e)[n](VA(t))
          },
          function(e) {
            var t = GA(this), r = VA(e), e = o(i, t, r);
            if (e.done) return e.value;
            e = t.lastIndex;
            ZA(e, 0) || (t.lastIndex = 0);
            r = XA(t, r);
            return ZA(t.lastIndex, e) || (t.lastIndex = e),
                   null === r ? -1 : r.index
          }
        ]
      });
      var $A = 1e9, qA = {
        precision: 20,
        rounding: 4,
        toExpNeg: -7,
        toExpPos: 21,
        LN10:
            '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
      },
          QA, e3 = !0, t3 = '[DecimalError] ', r3 = t3 + 'Invalid argument: ',
          n3 = t3 + 'Exponent out of range: ', i3 = Math.floor, o3 = Math.pow,
          a3 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, s3, c3 = 1e7, l3 = 7,
          u3 = 9007199254740991, d3 = i3(u3 / l3), h3 = {};
      function f3(e, t) {
        var r, n, i, o, a, s, c = e.constructor, l = c.precision;
        if (!e.s || !t.s) return t.s || (t = new c(e)), e3 ? E3(t, l) : t;
        if (a = e.d, s = t.d, c = e.e, e = t.e, a = a.slice(), i = c - e) {
          for ((o = (o = i < 0 ?
                         (n = a, i = -i, s.length) :
                         (n = s, e = c, a.length)) < (c = Math.ceil(l / l3)) ?
                    c + 1 :
                    o + 1) < i &&
                   (i = o, n.length = 1),
               n.reverse();
               i--;)
            n.push(0);
          n.reverse()
        }
        for ((o = a.length) - (i = s.length) < 0 &&
                 (i = o, n = s, s = a, a = n),
             r = 0;
             i;)
          r = (a[--i] = a[i] + s[i] + r) / c3 | 0, a[i] %= c3;
        for (r && (a.unshift(r), ++e), o = a.length; 0 == a[--o];) a.pop();
        return t.d = a, t.e = e, e3 ? E3(t, l) : t
      }
      function p3(e, t, r) {
        if (e !== ~~e || e < t || r < e) throw Error(r3 + e)
      }
      function g3(e) {
        var t, r, n, i = e.length - 1, o = '', a = e[0];
        if (0 < i) {
          for (o += a, t = 1; t < i; t++)
            n = e[t] + '', (r = l3 - n.length) && (o += k3(r)), o += n;
          a = e[t], (r = l3 - (n = a + '').length) && (o += k3(r))
        } else if (0 === a)
          return '0';
        for (; a % 10 == 0;) a /= 10;
        return o + a
      }
      h3.absoluteValue = h3.abs =
          function() {
        var e = new this.constructor(this);
        return e.s && (e.s = 1), e
      },
      h3.comparedTo = h3.cmp =
          function(e) {
        var t, r, n, i, o = this;
        if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
        if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
        for (t = 0, r = (n = o.d.length) < (i = e.d.length) ? n : i; t < r; ++t)
          if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : i < n ^ o.s < 0 ? 1 : -1
      },
      h3.decimalPlaces = h3.dp =
          function() {
        var e = this.d.length - 1, t = (e - this.e) * l3;
        if (e = this.d[e])
          for (; e % 10 == 0; e /= 10) t--;
        return t < 0 ? 0 : t
      },
      h3.dividedBy = h3.div =
          function(e) {
        return y3(this, new this.constructor(e))
      },
      h3.dividedToIntegerBy = h3.idiv =
          function(e) {
        var t = this.constructor;
        return E3(y3(this, new t(e), 0, 1), t.precision)
      },
      h3.equals = h3.eq =
          function(e) {
        return !this.cmp(e)
      },
      h3.exponent =
          function() {
        return w3(this)
      },
      h3.greaterThan = h3.gt =
          function(e) {
        return 0 < this.cmp(e)
      },
      h3.greaterThanOrEqualTo = h3.gte =
          function(e) {
        return 0 <= this.cmp(e)
      },
      h3.isInteger = h3.isint =
          function() {
        return this.e > this.d.length - 2
      },
      h3.isNegative = h3.isneg =
          function() {
        return this.s < 0
      },
      h3.isPositive = h3.ispos =
          function() {
        return 0 < this.s
      },
      h3.isZero =
          function() {
        return 0 === this.s
      },
      h3.lessThan = h3.lt =
          function(e) {
        return this.cmp(e) < 0
      },
      h3.lessThanOrEqualTo = h3.lte =
          function(e) {
        return this.cmp(e) < 1
      },
      h3.logarithm = h3.log =
          function(e) {
        var t = this.constructor, r = t.precision, n = r + 5;
        if (void 0 === e)
          e = new t(10);
        else if ((e = new t(e)).s < 1 || e.eq(s3))
          throw Error(t3 + 'NaN');
        if (this.s < 1) throw Error(t3 + (this.s ? 'NaN' : '-Infinity'));
        return this.eq(s3) ?
            new t(0) :
            (e3 = !1, n = y3(C3(this, n), C3(e, n), n), e3 = !0, E3(n, r))
      },
      h3.minus = h3.sub =
          function(e) {
        return e = new this.constructor(e),
               this.s == e.s ? A3(this, e) : f3(this, (e.s = -e.s, e))
      },
      h3.modulo = h3.mod =
          function(e) {
        var t = this.constructor, r = t.precision;
        if (!(e = new t(e)).s) throw Error(t3 + 'NaN');
        return this.s ?
            (e3 = !1, e = y3(this, e, 0, 1).times(e), e3 = !0, this.minus(e)) :
            E3(new t(this), r)
      },
      h3.naturalExponential = h3.exp =
          function() {
        return _3(this)
      },
      h3.naturalLogarithm = h3.ln =
          function() {
        return C3(this)
      },
      h3.negated = h3.neg =
          function() {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e
      },
      h3.plus = h3.add =
          function(e) {
        return e = new this.constructor(e),
               this.s == e.s ? f3(this, e) : A3(this, (e.s = -e.s, e))
      },
      h3.precision = h3.sd =
          function(e) {
        var t, r, n;
        if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
          throw Error(r3 + e);
        if (t = w3(this) + 1, r = (n = this.d.length - 1) * l3 + 1,
            n = this.d[n]) {
          for (; n % 10 == 0; n /= 10) r--;
          for (n = this.d[0]; 10 <= n; n /= 10) r++
        }
        return e && r < t ? t : r
      },
      h3.squareRoot = h3.sqrt =
          function() {
        var e, t, r, n, i, o, a, s = this.constructor;
        if (this.s < 1) {
          if (!this.s) return new s(0);
          throw Error(t3 + 'NaN')
        }
        for (e = w3(this), e3 = !1,
            n = 0 == (i = Math.sqrt(+this)) || i == 1 / 0 ?
                 (((t = g3(this.d)).length + e) % 2 == 0 && (t += '0'),
                  i = Math.sqrt(t), e = i3((e + 1) / 2) - (e < 0 || e % 2),
                  new s(
                      t = i == 1 / 0 ?
                          '1e' + e :
                          (t = i.toExponential()).slice(0, t.indexOf('e') + 1) +
                              e)) :
                 new s(i.toString()),
            i = a = (r = s.precision) + 3;
             ;)
          if (n = (o = n).plus(y3(this, o, a + 2)).times(.5),
              g3(o.d).slice(0, a) === (t = g3(n.d)).slice(0, a)) {
            if (t = t.slice(a - 3, a + 1), i == a && '4999' == t) {
              if (E3(o, r + 1, 0), o.times(o).eq(this)) {
                n = o;
                break
              }
            } else if ('9999' != t)
              break;
            a += 4
          }
        return e3 = !0, E3(n, r)
      },
      h3.times = h3.mul =
          function(e) {
        var t, r, n, i, o, a, s, c, l, u = this.constructor, d = this.d,
                                       h = (e = new u(e)).d;
        if (!this.s || !e.s) return new u(0);
        for (e.s *= this.s, r = this.e + e.e,
                            (c = d.length) < (l = h.length) &&
                 (o = d, d = h, h = o, a = c, c = l, l = a),
                            o = [], n = a = c + l;
             n--;)
          o.push(0);
        for (n = l; 0 <= --n;) {
          for (t = 0, i = c + n; n < i;)
            s = o[i] + h[n] * d[i - n - 1] + t, o[i--] = s % c3 | 0,
            t = s / c3 | 0;
          o[i] = (o[i] + t) % c3 | 0
        }
        for (; !o[--a];) o.pop();
        return t ? ++r : o.shift(), e.d = o, e.e = r,
                                    e3 ? E3(e, u.precision) : e
      },
      h3.toDecimalPlaces = h3.todp =
          function(e, t) {
        var r = this.constructor, n = new r(this);
        return void 0 === e ?
            n :
            (p3(e, 0, $A), void 0 === t ? t = r.rounding : p3(t, 0, 8),
             E3(n, e + w3(n) + 1, t))
      },
      h3.toExponential =
          function(e, t) {
        var r = this, n = r.constructor,
            e = void 0 === e ?
            O3(r, !0) :
            (p3(e, 0, $A), void 0 === t ? t = n.rounding : p3(t, 0, 8),
             O3(r = E3(new n(r), e + 1, t), !0, e + 1));
        return e
      },
      h3.toFixed =
          function(e, t) {
        var r = this.constructor;
        return void 0 === e ?
            O3(this) :
            (p3(e, 0, $A), void 0 === t ? t = r.rounding : p3(t, 0, 8),
             t =
                 O3((t = E3(new r(this), e + w3(this) + 1, t)).abs(), !1,
                    e + w3(t) + 1),
             this.isneg() && !this.isZero() ? '-' + t : t)
      },
      h3.toInteger = h3.toint =
          function() {
        var e = this.constructor;
        return E3(new e(this), w3(this) + 1, e.rounding)
      },
      h3.toNumber =
          function() {
        return +this
      },
      h3.toPower = h3.pow =
          function(e) {
        var t, r, n, i, o, a = this, s = a.constructor, c = +(e = new s(e));
        if (!e.s) return new s(s3);
        if (!(a = new s(a)).s) {
          if (e.s < 1) throw Error(t3 + 'Infinity');
          return a
        }
        if (a.eq(s3)) return a;
        if (n = s.precision, e.eq(s3)) return E3(a, n);
        if (t = e.e, r = e.d.length - 1, o = a.s, r <= t) {
          if ((r = c < 0 ? -c : c) <= u3) {
            for (i = new s(s3), t = Math.ceil(n / l3 + 4), e3 = !1;
                 r % 2 && L3((i = i.times(a)).d, t), 0 !== (r = i3(r / 2));)
              L3((a = a.times(a)).d, t);
            return e3 = !0, e.s < 0 ? new s(s3).div(i) : E3(i, n)
          }
        } else if (o < 0)
          throw Error(t3 + 'NaN');
        return o = o < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, a.s = 1, e3 = !1,
               i = e.times(C3(a, n + 12)), e3 = !0, (i = _3(i)).s = o, i
      },
      h3.toPrecision =
          function(e, t) {
        var r, n = this, i = n.constructor,
               e = void 0 === e ?
            O3(n, (r = w3(n)) <= i.toExpNeg || r >= i.toExpPos) :
            (p3(e, 1, $A), void 0 === t ? t = i.rounding : p3(t, 0, 8),
             O3(n = E3(new i(n), e, t), e <= (r = w3(n)) || r <= i.toExpNeg,
                e));
        return e
      },
      h3.toSignificantDigits = h3.tosd =
          function(e, t) {
        var r = this.constructor;
        return void 0 === e ?
                   (e = r.precision, t = r.rounding) :
                   (p3(e, 1, $A), void 0 === t ? t = r.rounding : p3(t, 0, 8)),
               E3(new r(this), e, t)
      },
      h3.toString = h3.valueOf = h3.val = h3.toJSON =
          h3[Symbol.for('nodejs.util.inspect.custom')] = function() {
            var e = w3(this), t = this.constructor;
            return O3(this, e <= t.toExpNeg || e >= t.toExpPos)
          };
      var y3 = function(e, t, r, n) {
        var i, o, a, s, c, l, u, d, h, f, p, g, y, m, b, v, _,
            w = e.constructor, x = e.s == t.s ? 1 : -1, k = e.d, C = t.d;
        if (!e.s) return new w(e);
        if (!t.s) throw Error(t3 + 'Division by zero');
        for (o = e.e - t.e, v = C.length, m = k.length,
            u = (x = new w(x)).d = [], a = 0;
             C[a] == (k[a] || 0);)
          ++a;
        if (C[a] > (k[a] || 0) && --o,
            (p = null == r ? r = w.precision :
                             n ? r + (w3(e) - w3(t)) + 1 : r) < 0)
          return new w(0);
        if (p = p / l3 + 2 | 0, a = 0, 1 == v)
          for (C = C[s = 0], p++; (a < m || s) && p--; a++)
            g = s * c3 + (k[a] || 0), u[a] = g / C | 0, s = g % C | 0;
        else {
          for (1 < (s = c3 / (C[0] + 1) | 0) &&
                   (C = m3(C, s), k = m3(k, s), v = C.length, m = k.length),
               y = v, h = (d = k.slice(0, v)).length;
               h < v;)
            d[h++] = 0;
          for ((_ = C.slice()).unshift(0),
               b = C[0], C[1] >= c3 / 2 && ++b;
               s = 0,
               (i = b3(C, d, v, h)) < 0 ?
                   (f = d[0],
                   1 < (s = (f = v != h ? f * c3 + (d[1] || 0) : f) / b | 0) ?
                        1 ==
                                (i =
                                     b3(c = m3(C, s = c3 <= s ? c3 - 1 : s), d,
                                     l = c.length, h = d.length)) &&
                            (s--, v3(c, v < l ? _ : C, l)) :
                        (0 == s && (i = s = 1), c = C.slice()),
                   (l = c.length) < h && c.unshift(0), v3(d, c, h),
                   -1 == i && (i = b3(C, d, v, h = d.length)) < 1 &&
                        (s++, v3(d, v < h ? _ : C, h)),
                   h = d.length) :
                   0 === i && (s++, d = [0]),
               u[a++] = s, i && d[0] ? d[h++] = k[y] || 0 : (d = [k[y]], h = 1),
               (y++ < m || void 0 !== d[0]) && p--;)
            ;
        }
        return u[0] || u.shift(), x.e = o, E3(x, n ? r + w3(x) + 1 : r)
      };
      function m3(e, t) {
        var r, n = 0, i = e.length;
        for (e = e.slice(); i--;)
          r = e[i] * t + n, e[i] = r % c3 | 0, n = r / c3 | 0;
        return n && e.unshift(n), e
      }
      function b3(e, t, r, n) {
        var i, o;
        if (r != n)
          o = n < r ? 1 : -1;
        else
          for (i = o = 0; i < r; i++)
            if (e[i] != t[i]) {
              o = e[i] > t[i] ? 1 : -1;
              break
            }
        return o
      }
      function v3(e, t, r) {
        for (var n = 0; r--;)
          e[r] -= n, n = e[r] < t[r] ? 1 : 0, e[r] = n * c3 + e[r] - t[r];
        for (; !e[0] && 1 < e.length;) e.shift()
      }
      function _3(e, t) {
        var r, n, i, o, a, s = 0, c = 0, l = e.constructor, u = l.precision;
        if (16 < w3(e)) throw Error(n3 + w3(e));
        if (!e.s) return new l(s3);
        for (a = null == t ? (e3 = !1, u) : t, o = new l(.03125);
             e.abs().gte(.1);)
          e = e.times(o), c += 5;
        for (a += Math.log(o3(2, c)) / Math.LN10 * 2 + 5 | 0,
             r = n = i = new l(s3), l.precision = a;
             ;) {
          if (n = E3(n.times(e), a), r = r.times(++s),
              g3((o = i.plus(y3(n, r, a))).d).slice(0, a) ===
                  g3(i.d).slice(0, a)) {
            for (; c--;) i = E3(i.times(i), a);
            return l.precision = u, null == t ? (e3 = !0, E3(i, u)) : i
          }
          i = o
        }
      }
      function w3(e) {
        for (var t = e.e * l3, r = e.d[0]; 10 <= r; r /= 10) t++;
        return t
      }
      function x3(e, t, r) {
        if (t > e.LN10.sd())
          throw e3 = !0, r && (e.precision = r),
                Error(t3 + 'LN10 precision limit exceeded');
        return E3(new e(e.LN10), t)
      }
      function k3(e) {
        for (var t = ''; e--;) t += '0';
        return t
      }
      function C3(e, t) {
        var r, n, i, o, a, s, c, l, u, d = 1, h = e, f = h.d, p = h.constructor,
                                       g = p.precision;
        if (h.s < 1) throw Error(t3 + (h.s ? 'NaN' : '-Infinity'));
        if (h.eq(s3)) return new p(0);
        if (l = null == t ? (e3 = !1, g) : t, h.eq(10))
          return null == t && (e3 = !0), x3(p, l);
        if (p.precision = l += 10, n = (r = g3(f)).charAt(0), o = w3(h),
            !(Math.abs(o) < 15e14))
          return c = x3(p, l + 2, g).times(o + ''),
                 h = C3(new p(n + '.' + r.slice(1)), l - 10).plus(c),
                 p.precision = g, null == t ? (e3 = !0, E3(h, g)) : h;
        for (; n < 7 && 1 != n || 1 == n && 3 < r.charAt(1);)
          n = (r = g3((h = h.times(e)).d)).charAt(0), d++;
        for (o = w3(h),
            1 < n ? (h = new p('0.' + r), o++) :
                    h = new p(n + '.' + r.slice(1)),
            s = a = h = y3(h.minus(s3), h.plus(s3), l), u = E3(h.times(h), l),
            i = 3;
             ;) {
          if (a = E3(a.times(u), l),
              g3((c = s.plus(y3(a, new p(i), l))).d).slice(0, l) ===
                  g3(s.d).slice(0, l))
            return s = s.times(2),
                   0 !== o && (s = s.plus(x3(p, l + 2, g).times(o + ''))),
                   s = y3(s, new p(d), l), p.precision = g,
                   null == t ? (e3 = !0, E3(s, g)) : s;
          s = c, i += 2
        }
      }
      function S3(e, t) {
        var r, n, i;
        for (0 < (n = (t = -1 < (r = t.indexOf('.')) ? t.replace('.', '') : t)
                          .search(/e/i)) ?
                 (r < 0 && (r = n), r += +t.slice(n + 1),
                  t = t.substring(0, n)) :
                 r < 0 && (r = t.length),
             n = 0;
             48 === t.charCodeAt(n);)
          ++n;
        for (i = t.length; 48 === t.charCodeAt(i - 1);) --i;
        if (t = t.slice(n, i)) {
          if (i -= n, e.e = i3((r = r - n - 1) / l3), e.d = [],
              n = (r + 1) % l3, r < 0 && (n += l3), n < i) {
            for (n && e.d.push(+t.slice(0, n)), i -= l3; n < i;)
              e.d.push(+t.slice(n, n += l3));
            t = t.slice(n), n = l3 - t.length
          } else
            n -= i;
          for (; n--;) t += '0';
          if (e.d.push(+t), e3 && (e.e > d3 || e.e < -d3)) throw Error(n3 + r)
        } else
          e.s = 0, e.e = 0, e.d = [0];
        return e
      }
      function E3(e, t, r) {
        for (var n, i, o, a, s, c, l = e.d, u = 1, d = l[0]; 10 <= d; d /= 10)
          u++;
        if ((n = t - u) < 0)
          n += l3, i = t, s = l[c = 0];
        else {
          if (c = Math.ceil((n + 1) / l3), (d = l.length) <= c) return e;
          for (s = d = l[c], u = 1; 10 <= d; d /= 10) u++;
          i = (n %= l3) - l3 + u
        }
        if (void 0 !== r &&
                (o = s / (d = o3(10, u - i - 1)) % 10 | 0,
                 a = t < 0 || void 0 !== l[c + 1] || s % d,
                 a = r < 4 ? (o || a) && (0 == r || r == (e.s < 0 ? 3 : 2)) :
                             5 < o ||
                         5 == o &&
                             (4 == r || a ||
                              6 == r &&
                                  (0 < n ? 0 < i ? s / o3(10, u - i) : 0 :
                                           l[c - 1]) %
                                          10 &
                                      1 ||
                              r == (e.s < 0 ? 8 : 7))),
            t < 1 || !l[0])
          return a ? (d = w3(e), l.length = 1,
                      l[0] = o3(10, (l3 - (t = t - d - 1) % l3) % l3),
                      e.e = i3(-t / l3) || 0) :
                     (l.length = 1, l[0] = e.e = e.s = 0),
                 e;
        if (0 == n ?
                (l.length = c, d = 1, c--) :
                (l.length = c + 1, d = o3(10, l3 - n),
                 l[c] = 0 < i ? (s / o3(10, u - i) % o3(10, i) | 0) * d : 0),
            a)
          for (;;) {
            if (0 == c) {
              (l[0] += d) == c3 && (l[0] = 1, ++e.e);
              break
            }
            if (l[c] += d, l[c] != c3) break;
            l[c--] = 0, d = 1
          }
        for (n = l.length; 0 === l[--n];) l.pop();
        if (e3 && (e.e > d3 || e.e < -d3)) throw Error(n3 + w3(e));
        return e
      }
      function A3(e, t) {
        var r, n, i, o, a, s, c, l, u, d = e.constructor, h = d.precision;
        if (!e.s || !t.s)
          return t.s ? t.s = -t.s : t = new d(e), e3 ? E3(t, h) : t;
        if (c = e.d, u = t.d, n = t.e, e = e.e, c = c.slice(), a = e - n) {
          for (s = (l = a < 0) ? (r = c, a = -a, u.length) :
                                 (r = u, n = e, c.length),
              (i = Math.max(Math.ceil(h / l3), s) + 2) < a &&
                   (a = i, r.length = 1),
              r.reverse(), i = a;
               i--;)
            r.push(0);
          r.reverse()
        } else {
          for ((l = (i = c.length) < (s = u.length)) && (s = i), i = 0; i < s;
               i++)
            if (c[i] != u[i]) {
              l = c[i] < u[i];
              break
            }
          a = 0
        }
        for (l && (r = c, c = u, u = r, t.s = -t.s), s = c.length,
                                                     i = u.length - s;
             0 < i; --i)
          c[s++] = 0;
        for (i = u.length; a < i;) {
          if (c[--i] < u[i]) {
            for (o = i; o && 0 === c[--o];) c[o] = c3 - 1;
            --c[o], c[i] += c3
          }
          c[i] -= u[i]
        }
        for (; 0 === c[--s];) c.pop();
        for (; 0 === c[0]; c.shift()) --n;
        return c[0] ? (t.d = c, t.e = n, e3 ? E3(t, h) : t) : new d(0)
      }
      function O3(e, t, r) {
        var n, i = w3(e), o = g3(e.d), a = o.length;
        return t ? (r && 0 < (n = r - a) ?
                        o = o.charAt(0) + '.' + o.slice(1) + k3(n) :
                        1 < a && (o = o.charAt(0) + '.' + o.slice(1)),
                    o = o + (i < 0 ? 'e' : 'e+') + i) :
                   i < 0 ?
                   (o = '0.' + k3(-i - 1) + o,
                    r && 0 < (n = r - a) && (o += k3(n))) :
                   a <= i ?
                   (o += k3(i + 1 - a),
                    r && 0 < (n = r - i - 1) && (o = o + '.' + k3(n))) :
                   ((n = i + 1) < a && (o = o.slice(0, n) + '.' + o.slice(n)),
                    r && 0 < (n = r - a) &&
                        (i + 1 === a && (o += '.'), o += k3(n))),
               e.s < 0 ? '-' + o : o
      }
      function L3(e, t) {
        return e.length > t && (e.length = t, 1)
      }
      function I3(e) {
        var t, r, n;
        function i(e) {
          var t = this;
          if (!(t instanceof i)) return new i(e);
          if (e instanceof (t.constructor = i))
            return t.s = e.s, t.e = e.e, void (t.d = (e = e.d) ? e.slice() : e);
          if ('number' == typeof e) {
            if (0 * e != 0) throw Error(r3 + e);
            if (0 < e)
              t.s = 1;
            else {
              if (!(e < 0)) return t.s = 0, t.e = 0, void (t.d = [0]);
              e = -e, t.s = -1
            }
            return e === ~~e && e < 1e7 ? (t.e = 0, void (t.d = [e])) :
                                          S3(t, e.toString())
          }
          if ('string' != typeof e) throw Error(r3 + e);
          if (45 === e.charCodeAt(0) ? (e = e.slice(1), t.s = -1) : t.s = 1,
              !a3.test(e))
            throw Error(r3 + e);
          S3(t, e)
        }
        if (i.prototype = h3, i.ROUND_UP = 0, i.ROUND_DOWN = 1,
            i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4,
            i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7,
            i.ROUND_HALF_FLOOR = 8, i.clone = I3, i.config = i.set = T3,
            e = void 0 === e ? {} : e)
          for (n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'],
              t = 0;
               t < n.length;)
            e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
        return i.config(e), i
      }
      function T3(e) {
        if (!e || 'object' !== _(e)) throw Error(t3 + 'Object expected');
        for (var t, r,
             n =
                 [
                   'precision', 1, $A, 'rounding', 0, 8, 'toExpNeg', -1 / 0, 0,
                   'toExpPos', 0, 1 / 0
                 ],
             i = 0;
             i < n.length; i += 3)
          if (void 0 !== (r = e[t = n[i]])) {
            if (!(i3(r) === r && n[i + 1] <= r && r <= n[i + 2]))
              throw Error(r3 + t + ': ' + r);
            this[t] = r
          }
        if (void 0 !== (r = e[t = 'LN10'])) {
          if (r != Math.LN10) throw Error(r3 + t + ': ' + r);
          this[t] = new this(r)
        }
        return this
      }
      var QA = I3(qA), s3 = new QA(1), F3 = QA,
          R3 =
              o(
                  {
                    languageShort: 'EN',
                    swithToLanguage: 'English Language',
                    home: '\u9996\u9875',
                    theme: '\u952e\u5e3d\u8272\u5f69\u4e3b\u9898',
                    themelink: '\u56e2\u8d2d\u4fe1\u606f',
                    changeBg: '\u53d8\u6362\u80cc\u666f\u8272',
                    defaultDesc: '\u8bf7\u9009\u62e9\u6309\u952e',
                    file: '\u6587\u4ef6',
                    fileDesc:
                        '\u8bf7\u9009\u62e9\u76f8\u5173\u64cd\u4f5c\u3002',
                    open: '\u6253\u5f00...',
                    openDesc:
                        '\u52a0\u8f7d\u672c\u5730\u4fdd\u5b58\u7684\u8bbe\u8ba1\u6587\u4ef6',
                    save: '\u4fdd\u5b58',
                    saveDesc:
                        '\u4fdd\u5b58\u6587\u4ef6\u5230\u672c\u5730\u6587\u4ef6\uff0c\u53ef\u968f\u65f6\u52a0\u8f7d',
                    feedback: '\u5efa\u8bae',
                    feedbackDesc:
                        '\u52a0\u5165\u5b98\u65b9QQ\u7fa4\uff0c\u63d0\u4ea4\u60a8\u7684\u610f\u89c1\u53ca\u5efa\u8bae',
                    exit: '\u9000\u51fa',
                    exitDesc: '\u5173\u95ed\u5f53\u524d\u9875\u9762',
                    fileLoaded:
                        '<div class="mytoast"><i class="icomoon iconf-top-right"></i><span>\u6587\u4ef6\u5df2\u6210\u529f\u52a0\u8f7d\uff1a{0}</span></div>',
                    mat22x8: '\u77e9\u963522x8',
                    mat22x8Desc:
                        '\u4ece\u6574\u4e2a\u77e9\u9635\u4e2d\u9009\u62e9\u9700\u8981\u7684\u6309\u952e\uff0c\u6ce8\u610f\u5df2\u5b58\u5728\u7684\u6309\u952e\u5c06\u4e0d\u80fd\u9009\u62e9\u3002',
                    matPicked: '\u77e9\u9635\u884c\u5217\u6807\u8bc6',
                    matAdd: '\u65b0\u589e\u6309\u952e',
                    folderEda:
                        '\u7535\u8def\u677f\u8bbe\u8ba1\u6e90\u6587\u4ef6\uff08\u7acb\u521b\u6807\u51c6\u7248\uff09',
                    folderDxf: '\u5b9a\u4f4d\u677f\u56fe\u7eb8(1.5mm)',
                    folderCnc: 'CNC\u53c2\u8003\u56fe\u7eb8',
                    folderSwitchOverlay:
                        '\u8f74\u4e0b\u57ab\u56fe\u7eb8(0.5mm)',
                    folderSwitch3mm: '\u6d88\u97f3\u68c9\u56fe\u7eb8(3.5mm)',
                    folderUnderlay: '\u5e95\u68c9\u56fe\u7eb8(2mm)',
                    folderDesign: '\u4e5d\u5c3e\u8bbe\u8ba1\u6587\u4ef6',
                    stab_up: '\u536b\u661f\u8f74\u5927\u5b54\u5728\u4e0a',
                    stab_down: '\u536b\u661f\u8f74\u5927\u5b54\u5728\u4e0b',
                    stab_left: '\u536b\u661f\u8f74\u5927\u5b54\u5728\u5de6',
                    stab_right: '\u536b\u661f\u8f74\u5927\u5b54\u5728\u53f3',
                    'keycodePicker.title':
                        '\u8bf7\u70b9\u51fb\u9009\u62e9\u6309\u952e',
                    'keycodePicker.subtitle':
                        '\u63d0\u793a\uff1a\u8bf7\u70b9\u51fb\u6216\u53cc\u51fb\u9009\u62e9\u6309\u952e...',
                    'keycodePicker.save': '\u786e\u8ba4',
                    'keycodePicker.cancel': '\u53d6\u6d88',
                    'keycodePicker.tabMain': '\u4e3b\u952e\u76d8',
                    'keycodePicker.tabPad': '\u5c0f\u952e\u76d8',
                    'keycodePicker.tabSystem': '\u7cfb\u7edf\u6309\u952e',
                    'keycodePicker.tabFn': '\u529f\u80fd\u533a',
                    'keycodePicker.tabRGB': '\u706f\u5149\u63a7\u5236',
                    'keycodePicker.tabOther': '\u5176\u4ed6',
                    'keycodePicker.tabMainDesc':
                        '\u5e38\u7528\u7684104\u952e\u76d8\uff0c\u5305\u62ecA-Z\u5b57\u6bcd\u533a\u57df\u3001F1-F12\u529f\u80fd\u533a\u3001\u65b9\u5411\u952e\u533a\u3001\u5c0f\u952e\u76d8\u533a\u3001\u5e38\u7528\u63a7\u5236\u6309\u952e\u7b49\u3002',
                    'keycodePicker.tabPadDesc':
                        '\u5c0f\u952e\u76d8\u533a\u57df\uff0c\u5f85\u6dfb\u52a0',
                    'keycodePicker.tabSystemDesc':
                        '\u5305\u542b\u5e38\u7528\u7684\u58f0\u97f3\u63a7\u5236\u3001\u97f3\u91cf\u8c03\u8282\u7b49\u591a\u5a92\u4f53\u6309\u952e\uff1b\u6e05\u9664\u84dd\u7259\u7ed1\u5b9a\u3001\u8fdb\u5165DFU\u7b49\u7cfb\u7edf\u63a7\u5236\u6309\u952e\uff1b\u9f20\u6807\u79fb\u52a8\u3001\u9f20\u6807\u70b9\u51fb\u7b49\u9f20\u6807\u63a7\u5236\u6309\u952e\uff0c\u7f51\u7edc\u63a7\u5236\u6309\u952e\u7b49\u3002',
                    'keycodePicker.tabFnDesc':
                        '\u5305\u542bFN\u6309\u952e\u7684\u5b9a\u4e49\uff0c\u53ef\u5c06\u5176\u5b9a\u4e49\u4e3a\u5207\u6362\u5c42\u3001\u77ac\u65f6\u5c42\u7b49\u529f\u80fd\u3002',
                    'keycodePicker.tabRGBDesc':
                        '\u5305\u542b\u706f\u5149\u63a7\u5236\u7b49\u6309\u952e\u3002',
                    'keycodePicker.tabOtherDesc':
                        '\u5305\u542b\u65e0\u8f93\u5165\u6309\u952e\u3001\u7a7a\u767d\u6309\u952e\u53ca\u4e0d\u5728\u666e\u901a\u533a\u57df\u4e2d\u7684\u5176\u4ed6\u4e0d\u5e38\u7528\u7684\u7279\u6b8a\u6309\u952e\u3002',
                    'keycodePicker.pickedKeyChar': '\u9009\u4e2d\u6309\u952e',
                    'keycodePicker.pickedKeyDesc': '\u6807\u8bc6',
                    'keycodePicker.pickedKeycode': '\u952e\u503c',
                    'keycodePicker.pickedKeycodeHex': '\u4ee3\u7801',
                    'keycodePicker.pickedDesc': '\u6240\u9009\u6309\u952e',
                    'keycodePicker.pleaseSelect':
                        '\u8bf7\u5355\u51fb\u9009\u62e9\u6216\u53cc\u51fb\u67d0\u4e2a\u6309\u952e\u5df2\u8fdb\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c\u3002',
                    'keycodePicker.select': '\u9009\u62e9\u6216\u8f93\u5165',
                    'keycodePicker.mediaKeys': '\u591a\u5a92\u4f53\u6309\u952e',
                    'keycodePicker.systemControl':
                        '\u7cfb\u7edf\u63a7\u5236\u6309\u952e',
                    'keycodePicker.mouseControl':
                        '\u9f20\u6807\u63a7\u5236\u6309\u952e',
                    'keycodePicker.networkControl':
                        '\u7f51\u7edc\u63a7\u5236\u6309\u952e',
                    'keycodePicker.ledControl':
                        '\u706f\u5149\u63a7\u5236\u6309\u952e',
                    'keycodePicker.otherKeys': '\u5176\u4ed6\u6309\u952e',
                    'keycodePicker.momentFn':
                        '\u77ac\u65f6\u5f00\u542f\u5c42\u529f\u80fd\u6309\u952e',
                    'keycodePicker.momentFnDesc':
                        '\u6309\u4e0b\u65f6\u5f00\u542f\u5c42\uff0c\u6309\u952e\u677e\u5f00\u65f6\u590d\u539f\u5c42\u72b6\u6001\u3002',
                    'keycodePicker.toggleFn':
                        '\u5207\u6362\u5c42\u529f\u80fd\u6309\u952e',
                    'keycodePicker.toggleFnDesc':
                        '\u6309\u4e0b\u540e\u5f00\u542f\u5c42\uff0c\u518d\u6309\u4e0b\u65f6\u5c42\u5173\u95ed\u3002\u4ee5\u6b64\u7c7b\u63a8\u3002',
                    'keycodePicker.dualFn':
                        '\u53cc\u6a21\u5f0f\u529f\u80fd\u6309\u952e',
                    'keycodePicker.dualFnDesc':
                        '\u6682\u65f6\u4e0d\u652f\u6301\u8be5\u952e\u8bbe\u7f6e\u3002',
                    'keycodePicker.turnOnLayer':
                        '\u8df3\u8f6c\u5c42\u6309\u952e',
                    'keycodePicker.turnOnLayerDesc':
                        '\u8df3\u8f6c\u5230\u67d0\u5c42\uff0c\u4e0d\u4f1a\u8fd4\u56de\u3002',
                    'keycodePicker.otherFn':
                        '\u5176\u4ed6\u529f\u80fd\u6309\u952e',
                    'keycodePicker.selectedDual':
                        '\u5df2\u9009\u4e2d\u53cc\u6a21\u5f0f\u6309\u952e',
                    'keycodePicker.tapLabel1': '\u957f\u6309\u5f00\u542f\u5c42',
                    'keycodePicker.tapLabel2': '\u77ed\u6309\u6309\u952e',
                    'keycodePicker.deviceConfig': '\u952e\u76d8\u8bbe\u7f6e',
                    ok: '\u786e\u8ba4',
                    cancel: '\u53d6\u6d88',
                    reset: '\u91cd\u7f6e',
                    resetConfirm:
                        '\u786e\u8ba4\u91cd\u7f6e\u5f53\u524d\u8bbe\u7f6e\u5417\uff1f\u6240\u6709\u4fdd\u5b58\u7684\u8bbe\u7f6e\u5c06\u4e22\u5931\u3002',
                    label: '\u6587\u672c',
                    labelDesc:
                        '\u5f53\u524d\u9009\u4e2d\u6309\u952e\u7684\u6587\u672c\u63cf\u8ff0',
                    tabChoose: '\u6309\u952e\u533a\u57df',
                    tabMain: '\u4e3b\u952e\u76d8',
                    tabPad: '\u5c0f\u952e\u76d8',
                    tabSystem: '\u7cfb\u7edf\u6309\u952e',
                    tabFn: '\u529f\u80fd\u533a',
                    tabRGB: '\u706f\u5149\u63a7\u5236',
                    tabOther: '\u5176\u4ed6',
                    tabMainDesc:
                        '\u5e38\u7528\u7684104\u952e\u76d8\uff0c\u5305\u62ecA-Z\u5b57\u6bcd\u533a\u57df\u3001F1-F12\u529f\u80fd\u533a\u3001\u5c0f\u952e\u76d8\u7b49\u3002',
                    tabPadDesc:
                        '\u5c0f\u952e\u76d8\u533a\u57df\uff0c\u5f85\u6dfb\u52a0',
                    tabSystemDesc:
                        '\u5305\u542b\u5e38\u7528\u7684\u591a\u5a92\u4f53\u6309\u952e\u3001\u7cfb\u7edf\u63a7\u5236\u6309\u952e\u3001\u9f20\u6807\u63a7\u5236\u6309\u952e\u3001\u7f51\u7edc\u63a7\u5236\u6309\u952e\u7b49\u3002',
                    tabFnDesc:
                        '\u5305\u542bFN\u6309\u952e\u7684\u5b9a\u4e49\uff0c\u53ef\u5c06\u5176\u5b9a\u4e49\u4e3a\u5207\u6362\u5c42\u3001\u77ac\u65f6\u5c42\u7b49\u529f\u80fd\u3002',
                    tabRGBDesc:
                        '\u5305\u542b\u706f\u5149\u63a7\u5236\u7b49\u6309\u952e\u3002',
                    tabOtherDesc:
                        '\u5305\u542b\u65e0\u8f93\u5165\u6309\u952e\u3001\u7a7a\u767d\u6309\u952e\u53ca\u4e0d\u5728\u666e\u901a\u533a\u57df\u4e2d\u7684\u5176\u4ed6\u4e0d\u5e38\u7528\u7684\u7279\u6b8a\u6309\u952e\u3002',
                    modify: '\u66f4\u6539',
                    undo: '\u64a4\u9500',
                    redo: '\u91cd\u505a',
                    delete: '\u5220\u9664',
                    options: '\u9009\u9879',
                    download: '\u8bbe\u8ba1\u53d1\u5e03',
                    downloadTip:
                        '\u8bf7\u9009\u62e9\u53d1\u5e03\u9009\u9879\uff0c\u6253\u5305\u4e0b\u8f7d\u5b9a\u4f4d\u677f\u56fe\u7eb8\u3001\u7535\u8def\u8bbe\u8ba1\u6e90\u6587\u4ef6\u7b49\u76f8\u5173\u8bbe\u8ba1\u56fe\u6863\u3002',
                    buy: '\u8d2d\u4e70\u4e3b\u63a7',
                    pubDesc:
                        '\u672c\u5411\u5bfc\u5c06\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\u751f\u6210\u8bbe\u8ba1\u6587\u4ef6\u3002\u5982\u9700\u4fee\u6539\uff0c\u8bf7\u8fd4\u56de\u4e3b\u9875\u9762\u5728\u53f3\u4e0a\u89d2\u8bbe\u7f6e\u6309\u94ae\u4e2d\u4fee\u6539\u3002',
                    agree:
                        '\u6211\u540c\u610f\u5e76\u63a5\u53d7\u5728CC-BY-SA 4.0\u534f\u8bae\u8981\u6c42\u4e0b\u4f7f\u7528\u53d1\u5e03\u7684\u6587\u4ef6',
                    agreeBtn: '\u8bf7\u52fe\u9009\u540c\u610f\u9009\u9879',
                    dnDxf: '\u4e0b\u8f7d\u5b9a\u4f4d\u677f\u56fe\u7eb8',
                    dnDxfDesc:
                        '\u4f18\u5316\u7248\u672c\u7684\u5b9a\u4f4d\u677f\u56fe\u7eb8\uff0c\u5305\u542bPCB\u536b\u661f\u8f74\uff0c\u4e0d\u4f1a\u6709\u5c0f\u6570\u70b9\u95ee\u9898\u3002',
                    dnZip:
                        '\u8bbe\u8ba1\u6587\u4ef6\u6253\u5305\u4e0b\u8f7d (\u5355\u6a21)',
                    dnZipDesc:
                        '\u5305\u542b\u8bbe\u8ba1\u539f\u7406\u56fe(SCH)\u3001\u7535\u8def\u56fe(PCB)\u3001\u5b9a\u4f4d\u677f\u3001\u8f74\u4e0b\u57ab\u3001\u6d88\u97f3\u68c9\u56fe\u7eb8\u7b49\uff0c\u91c7\u7528\u4e5d\u5c3e\u4e3b\u63a7\uff0c\u5373\u63d2\u5373\u7528\uff0c\u53ea\u652f\u6301USB\u6a21\u5f0f\u3002',
                    dnZip2:
                        '\u8bbe\u8ba1\u6587\u4ef6\u6253\u5305\u4e0b\u8f7d (\u652f\u6301\u4e09\u6a21)',
                    dnZipDesc2:
                        '\u5305\u542b\u8bbe\u8ba1\u539f\u7406\u56fe\u3001\u7535\u8def\u56fe\u3001\u5b9a\u4f4d\u677f\u3001\u8f74\u4e0b\u57ab\u3001\u6d88\u97f3\u68c9\u56fe\u7eb8\u7b49\uff0c\u91c7\u7528\u4e5d\u5c3e\u4e3b\u63a7\uff0c\u5373\u63d2\u5373\u7528\uff0c\u652f\u6301\u84dd\u7259\u3001USB\u548c2.4G(soon)\u4e09\u6a21\u3002',
                    dirty:
                        '\u63d0\u793a\uff1a\u60a8\u5bf9\u5e03\u5c40\u505a\u4e86\u53d8\u66f4\u4f46\u662f\u672a\u4fdd\u5b58\u3002\u6ce8\u610f\uff0c\u672a\u4fdd\u5b58\u7684\u6570\u636e\u5c06\u4f1a\u4e22\u5931\u3002\n\n\u786e\u8ba4\u5207\u6362\u5417\uff1f',
                    layouts: '\u9884\u8bbe\u914d\u5217',
                    layoutsDesc:
                        '\u8bf7\u9009\u62e9\u4e00\u6b3e\u952e\u76d8\u9884\u8bbe\u914d\u5217\u3002',
                    preset: {
                      standard64: '\u6807\u51c664\u914d\u5217',
                      matrix_22x8: '\u6807\u51c6\u77e9\u9635\u914d\u5217(22x8)',
                      winkey: '\u6807\u51c6104\u5e26\u6269\u5c55\u914d\u5217',
                      AL2: 'AL2\u914d\u5217',
                      winkey104: '\u6807\u51c6104\u914d\u5217',
                      KBD87: 'KBD87\u914d\u5217',
                      standard87_wk: '\u6807\u51c687\u914d\u5217\uff0cwinkey',
                      standard87: '\u6807\u51c687\u914d\u5217',
                      standard68: '68\u914d\u5217',
                      yoda: '\u5e26\u7ea2\u70b9\u768460\u914d\u5217',
                      Austin: 'Austin\u914d\u5217',
                      '7W': '75\u914d\u5217'
                    },
                    view: '\u89c6\u56fe\u6a21\u5f0f',
                    viewDesc:
                        '\u8bf7\u9009\u62e9\u5f53\u524d\u5c55\u793a\u89c6\u56fe\u7684\u65b9\u5f0f\u3002',
                    viewDefault: '\u6309\u952e\u89c6\u56fe',
                    viewDefaultDesc:
                        '\u6807\u51c6\u6309\u952e\u89c6\u56fe\uff0c\u8bbe\u8ba1\u5f53\u524d\u914d\u5217\u5e76\u53ef\u7f16\u8f91\u5f53\u524d\u9ed8\u8ba4\u952e\u503c\u3002',
                    viewCircuit: '\u7535\u8def\u677f\u89c6\u56fe',
                    viewCircuitDesc:
                        '\u7535\u8def\u677f\u5c55\u793a\u89c6\u56fe\uff0c\u6a21\u62df\u7535\u8def\u677f\u6253\u5b54\u7a7a\u4f4d\u8bbe\u7f6e\u4e14\u5c55\u793a\u5143\u5668\u4ef6\u6807\u7b7e\u3002',
                    circuitOpt: '\u4e0a\u4e0b\u8f74\u4f4d\u9009\u9879',
                    'circuitOpt.up': '\u4e0a\u8f74\u4f4d',
                    'circuitOpt.upDesc':
                        '\u70ed\u63d2\u62d4\u5ea7\u751f\u6210\u5728\u4e0a\u65b9\uff0c\u5373\u6211\u4eec\u5e38\u8bf4\u7684\u4e0b\u706f\u4f4d',
                    'circuitOpt.down': '\u4e0b\u8f74\u4f4d',
                    'circuitOpt.downDesc':
                        '\u70ed\u63d2\u62d4\u5ea7\u751f\u6210\u5728\u4e0b\u65b9\uff0c\u5373\u6211\u4eec\u5e38\u8bf4\u7684\u4e0a\u706f\u4f4d',
                    about: '\u5173\u4e8e\u6211\u4eec',
                    help: '\u5e2e\u52a9\u6587\u6863',
                    helpDesc:
                        '\u70b9\u51fb\u67e5\u770b\u6559\u7a0b\u6587\u6863',
                    qq: '\u70b9\u51fb\u52a0\u5165QQ\u5b98\u65b9\u7fa4',
                    copyright: '\u7248\u6743\u6240\u6709nine-fox.com',
                    expandFooter: '\u70b9\u51fb\u5c55\u5f00\u8bf4\u660e\u9875',
                    pcbInit:
                        'PCB\u6587\u4ef6\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\u3002',
                    optionsTitle: '\u9009\u9879',
                    conf: '\u53c2\u6570\u8bbe\u7f6e',
                    confDesc:
                        '\u63d0\u793a: \u9f20\u6807\u79fb\u52a8\u5230\u8f93\u5165\u6846\u4e0a\u53ef\u67e5\u770b\u8be5\u9879\u8bf4\u660e\u3002',
                    moveStep: '\u79fb\u52a8\u6b65\u8fdb\u957f\u5ea6',
                    sizeStep: '\u957f\u5bbd\u6b65\u8fdb\u957f\u5ea6',
                    moveHint:
                        '\u5355\u4f4d\uff1a1U\u957f\u5ea6\u3002\u9009\u4e2d\u6309\u952e\uff0c\u6309\u4e0b\u65b9\u5411\u952e\u65f6\uff0c\u79fb\u52a8\u6b65\u8fdb\u957f\u5ea6\u3002',
                    sizeHint:
                        '\u5355\u4f4d\uff1a1U\u957f\u5ea6\u3002\u9009\u4e2d\u6309\u952e\uff0c\u6309\u4e0bShift\u548c\u65b9\u5411\u952e\u65f6\uff0c\u957f\u5bbd\u6b65\u8fdb\u957f\u5ea6\u3002',
                    unit: '\u5355\u4f4d: 1u',
                    mm: '\u5355\u4f4d: mm',
                    delta: '\u95f4\u8ddd',
                    deltaHint:
                        '\u4e24\u4e2a\u76f8\u90bb\u6309\u952e\u7684\u95f4\u8ddd\u3002\u5355\u4f4d\uff1a\u6beb\u7c73\u3002\u63d0\u793a\uff1a\u5bf9\u4e8e\u67d0\u4e9b\u952e\u76d8\u7684\u95f4\u8ddd\u5e76\u4e0d\u662f\u6807\u51c6\u768419.05',
                    helpTitle: '\u5e2e\u52a9\u6587\u6863',
                    helpDlg:
                        '<h5>\u64cd\u4f5c\u8bf4\u660e:</h5><p class=\'myhelptext\'>\u9009\u62e9\u7f16\u8f91\u5668\u5de6\u4e0a\u89d2\u7684\u9884\u8bbe\u914d\u5217\uff0c\u7136\u540e\u7f16\u8f91\u6210\u4f60\u60f3\u8981\u7684\u914d\u5217\u3002</p><p class=\'myhelptext\'>\u53ef\u4ee5\u5bf9\u6309\u952e\u8fdb\u884c\u70b9\u9009\u3001\u6846\u9009\uff0c\u7136\u540e\u6309\u952e\u76d8\u7684\u65b9\u5411\u952e\u8fdb\u884c\u4f4d\u7f6e\u7684\u8c03\u6574\u3002\u540c\u65f6\uff0c\u8fd8\u652f\u6301\u5bf9\u5927\u5c0f\u8fdb\u884c\u8c03\u6574\u3002\u8c03\u6574\u540e\uff0c\u70b9\u51fb\u5bfc\u51fa\u6309\u94ae\u5bfc\u51fa\u8bbe\u8ba1\u56fe\u7eb8\u3002</p><p class=\'myhelptext\'>\u6ce8\u610f\uff1a\u672c\u54c1\u4ea7\u751f\u9ed8\u8ba4\u95f4\u8ddd\u662f19.05mm\uff0c\u6b64\u4e3a\u4e24\u4e2a1x\u4e2d\u5fc3\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u5e76\u4e0d\u80fd\u9002\u914d\u5e02\u573a\u4e0a\u6240\u6709\u7684\u952e\u76d8\uff0c\u8bf7\u81ea\u884c\u786e\u8ba4\u3002</p><h5>\u5feb\u6377\u952e:</h5><dl class=\'dl-horizontal floathalf\'><dt><kbd>\u2191\u2193\u2190\u2192</kbd></dt><dd>\u5bf9\u6309\u952e\u8fdb\u884c\u5de6\u53f3\u79fb\u52a8</dd><dt><kbd>Shift + \u2191\u2193\u2190\u2192</kbd></dt><dd>\u5bf9\u6309\u952e\u957f\u5bbd\u8fdb\u884c\u8c03\u6574</dd><dt><kbd>Del</kbd></dt><dd>\u5220\u9664\u9009\u62e9\u7684\u6309\u952e</dd><dt><kbd>Ctrl + S</kbd></dt><dd>\u4fdd\u5b58\u5f53\u524d\u914d\u7f6e</dd></dl><dl class=\'dl-horizontal floathalf\'><dt><kbd>Ctrl + A</kbd></dt><dd>\u9009\u62e9\u6240\u6709\u6309\u952e</dd><dt><kbd>Ctrl + Z</kbd></dt><dd>\u64a4\u9500</dd><dt><kbd>Ctrl + Y</kbd></dt><dd>\u91cd\u505a</dd><dt><kbd>Esc</kbd></dt><dd>\u53d6\u6d88\u9009\u62e9\u5f53\u524d\u914d\u7f6e</dd></dl><h5>\u8be6\u60c5\u53ef\u70b9\u51fb:</h5><div class=\'myhelplink\'><a class=\'webhidtipbtn\' href=\'https://nine-fox.com/docs/diy\' target=\'_blank\'>    <i class=\'icommon iconf-top-web\'></i> NINE-FOX Documentation</a></div>    ',
                    helpDlgShort:
                        '<p><i class="icon icomoon iconf-top-info"></i> \u7b80\u8981\u8bf4\u660e\uff1a\u9009\u62e9\u6309\u952e\u5e76\u6309\u65b9\u5411\u952e\u8c03\u6574\uff0c\u70b9\u51fb\u5bfc\u51fa\u6309\u94ae\u4e0b\u8f7d\u7535\u8def\u677f\u8bbe\u8ba1\u6587\u4ef6\u3002<a class=\'link\' href=\'https://nine-fox.com/docs/diy\' target=\'_blank\'>\u70b9\u51fb\u67e5\u770b\u8be6\u7ec6\u6587\u6863</a></p><div class="col-md-2"></div><div class="col-md-8"><dl class=\'dl-horizontal floathalf\'><dt><kbd>\u2190\u2191\u2193\u2192</kbd></dt><dd>\u5de6\u53f3\u79fb\u52a8</dd><dt><kbd>Del</kbd></dt><dd>\u5220\u9664\u6309\u952e</dd></dl><dl class=\'dl-horizontal floathalf\'><dt><kbd>Esc</kbd></dt><dd>\u53d6\u6d88\u9009\u62e9</dd><dt><kbd>Ctrl + Z</kbd></dt><dd>\u64a4\u9500\u64cd\u4f5c</dd></dl></div><div class="col-md-2"></div>    ',
                    pubStart:
                        '<div class="mytoast"><i class="icomoon iconf-top-info"></i><span>\u6587\u4ef6\u53d1\u5e03\u4e2d\uff0c\u6b64\u8fc7\u7a0b\u53ef\u80fd\u82b1\u8d39\u51e0\u79d2\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u3002</span></div>',
                    pubWarn:
                        '<div class="mytoast"><i class="icomoon iconf-top-info"></i><span>\u6587\u4ef6\u751f\u6210\u53d6\u6d88\u3002</span></div>',
                    pubSuccess:
                        '<div class="mytoast"><i class="icomoon iconf-top-right"></i><span>\u6587\u4ef6\u6253\u5305\u53d1\u5e03\u6210\u529f\uff0c\u4e0b\u8f7d\u968f\u540e\u53d1\u8d77\u3002\u8bf7\u53c2\u8003\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\uff1ahttps://nine-fox.com/docs/diy</span></div>',
                    pubError:
                        '<div class="mytoast"><i class="icomoon iconf-top-error"></i><span>\u6267\u884c\u5931\u8d25\uff0c\u62a5\u9519\uff1a{0}</span></div>',
                    pubConfirm:
                        '\u786e\u8ba4\u4f7f\u7528{0}\u95f4\u8ddd\u5bfc\u51fa\uff1f\u91cd\u8981\u63d0\u793a\uff1a\u5927\u90e8\u5206\u7684\u5ba2\u5236\u5316\u952e\u76d8\u5747\u4e3a19.05mm\u95f4\u8ddd\uff01\u8bf7\u6838\u5b9e\u786e\u8ba4\uff01',
                    publishDlg:
                        '<h5>\u672c\u5411\u5bfc\u5c06\u901a\u8fc7\u7a0b\u5e8f\u5316\u7684\u624b\u6bb5\u6839\u636e\u952e\u4f4d\u751f\u6210\u7535\u8def\u677f\u7b49\u6587\u4ef6\uff0c\u540e\u5728\u7acb\u521bEDA\u3001AutoCAD\u7b49\u8f6f\u4ef6\u4e2d\u81ea\u884c\u5bfc\u5165\uff0c\u8fd8\u9700\u7528\u6237\u6839\u636e\u4e2a\u4eba\u5e94\u7528\u573a\u666f\u8fdb\u884c\u7ed8\u5236\u8fb9\u6846\u3001\u7ed8\u5236USB\u7b49\uff0c\u8bf7\u6839\u636e<kbd><a class=\'mytxtlink\' href=\'https://nine-fox.com/docs/diy\' target=\'_blank\'>\u5e2e\u52a9\u6587\u6863</a></kbd>\u8fdb\u884c\u64cd\u4f5c\u3002\u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9\uff1a</h5><p class=\'myhelptext\'>1. \u672c\u5411\u5bfc\u5c06\u4f7f\u7528\u884c\u95f4\u8ddd<kbd>{0}mm</kbd>\u3001<kbd>{1}</kbd>\u751f\u6210\u6587\u4ef6\u3002\u82e5\u6838\u5bf9\u6709\u8bef\uff0c\u8bf7\u8fd4\u56de\u4e3b\u9875\u9762\u7684\u53f3\u4e0a\u89d2\u53c2\u6570\u8bbe\u7f6e\u4e2d\u8fdb\u884c\u4fee\u6539\uff1b</p><p class=\'myhelptext\'>2. \u7531\u4e8e\u6bcf\u4e2a\u4eba\u77e5\u8bc6\u6c34\u5e73\u4e0d\u540c\u3001DIY\u7684\u5b9a\u5236\u6027\u3001\u8d34\u7247\u53ca\u710a\u63a5\u7684\u4e0d\u786e\u5b9a\u6027\u7b49\u539f\u56e0\uff0c\u6253\u6837\u4f1a\u6709\u4e00\u5b9a\u51e0\u7387\u5931\u8d25\uff0c\u5c5e\u6b63\u5e38\u73b0\u8c61\u3002\u672c\u5de5\u5177\u8fd8\u5728beta\u6d4b\u8bd5\u9636\u6bb5\uff0c\u6240\u751f\u6210\u7684\u6587\u4ef6\u4ec5\u4f9b\u53c2\u8003\uff0c\u6700\u7ec8\u6210\u54c1\u662f\u5426\u6b63\u786e\u9700\u7528\u6237\u81ea\u884c\u4fdd\u8bc1\uff1b</p><p class=\'myhelptext\'>3. \u90e8\u5206\u5ba2\u5236\u5316\u952e\u76d8\u95f4\u8ddd\u5e76\u975e\u6807\u51c6\u768419.05mm\uff0c\u8bf7\u81ea\u884c\u786e\u8ba4\uff1b</p><p class=\'myhelptext\'>4. \u751f\u6210\u6587\u4ef6\u4e2d\u6240\u7528\u4e3b\u63a7\u4e3a\u5b98\u65b9\u51fa\u54c1\u7684\u4e5d\u5c3eM.2\u6a21\u5757\uff0c\u8bf7\u901a\u8fc7\u5b98\u65b9\u6e20\u9053\u8d2d\u4e70\uff1b</p><p class=\'myhelptext\'>5. \u6240\u7528USB\u4e3a\u5206\u79bb\u5f0f\u76844P\u63a5\u53e3\uff0c\u4e5f\u53ef\u76f4\u63a5\u4ece\u5b98\u65b9\u8d2d\u4e70USB\u5c0f\u677f\u6210\u54c1\u3002\u5f53\u7136\u4e2a\u4eba\u80fd\u529b\u591f\u5f3a\u53ef\u4ee5\u81ea\u5df1\u5728\u7acb\u521bEDA\u4e2d\u81ea\u884c\u7ed8\u5236\u6253\u677f\uff1b</p><p class=\'myhelptext\'>6. \u672c\u5de5\u5177\u5f00\u53d1\u548c\u6253\u6837\u6295\u5165\u5f88\u591a\u65f6\u95f4\u548c\u7cbe\u529b\uff0c\u529b\u6c42\u8ba9\u5f88\u591a\u4eba\u5bf9\u5b9a\u5236\u5316\u50bb\u74dc\u5f0f\u4e0a\u624b\uff08\u4e0d\u9700\u8981\u5199\u4efb\u4f55\u4ee3\u7801\uff09\u3002\u672c\u7740\u952e\u5708\u5171\u4eab\u7684\u7cbe\u795e\uff0c\u6240\u751f\u6210\u7684\u6587\u4ef6\u5728<kbd><a class=\'mytxtlink\' href=\'https://creativecommons.org/licenses/by-sa/4.0/deed.zh\' target=\'_blank\'>CC-BY-SA 4.0\u534f\u8bae</a></kbd>\u4e0b\u53d1\u5e03\u3002\u8bf7\u9075\u5b88\u8be5\u534f\u8bae\u5728\u7acb\u521bEDA\u5f00\u6e90\u5e7f\u573a\u4e2d\u5206\u4eab\u7ed9\u66f4\u591a\u7684\u4eba\u3002</p>    '
                  },
                  'copyright', 'NINE-FOX.com \u7248\u6743\u6240\u6709'),
          P3 =
              o({
                languageShort: '\u4e2d',
                swithToLanguage:
                    '\u5207\u6362\u5230\u4e2d\u6587\u8bed\u8a00\u754c\u9762',
                home: 'Home',
                theme: 'Keycap theme',
                themelink: 'Group Buy Info',
                changeBg: 'Change background',
                defaultDesc: 'Choose a preset, and select keys to start',
                file: 'File',
                fileDesc: 'Please click the menu',
                open: 'Open',
                openDesc: 'Load the local file with .nf-design extension',
                save: 'Save',
                saveDesc: 'Save current design to local disk',
                feedback: 'Feedback',
                feedbackDesc: 'Join QQ group and feedback',
                exit: 'Exit',
                exitDesc: 'Quit current page',
                fileLoaded:
                    '<div class="mytoast"><i class="icomoon iconf-top-right"></i><span>File loaded: {0}</span></div>',
                mat22x8: 'Matrix 22x8',
                mat22x8Desc: 'Pick up a key from the matrix 22x8',
                matPicked: 'Matrix ID',
                matAdd: 'Add Key',
                folderEda: 'LCEDA_project(STD)',
                folderDxf: 'PLATE_files',
                folderCnc: 'CNC_files',
                folderSwitchOverlay: 'SwitchOverlay_files',
                folderSwitch3mm: 'SoundAbsorber_files',
                folderUnderlay: 'AbsorberUnderlay_files',
                folderDesign: 'DESIGN_files',
                stab_up: 'Stabilizer up',
                stab_down: 'Stabilizer down',
                stab_left: 'Stabilizer left',
                stab_right: 'Stabilizer right',
                'keycodePicker.title': 'Please choose',
                'keycodePicker.subtitle': 'Please choose',
                'keycodePicker.save': 'Save',
                'keycodePicker.cancel': 'Cancel',
                'keycodePicker.tabMain': 'Standard',
                'keycodePicker.tabPad': 'Pad',
                'keycodePicker.tabSystem': 'System',
                'keycodePicker.tabFn': 'Fn',
                'keycodePicker.tabRGB': 'RGB',
                'keycodePicker.tabOther': 'Other',
                'keycodePicker.tabMainDesc':
                    'Including standard 104 layout, including alpha area, pad area, arrow area etc.',
                'keycodePicker.tabPadDesc': 'Pad area',
                'keycodePicker.tabSystemDesc':
                    'Media keys, system control keys, mouse control keys and network control keys',
                'keycodePicker.tabFnDesc':
                    'Functional keys including layer switch and momentary keys',
                'keycodePicker.tabRGBDesc': 'Including RGB control keys',
                'keycodePicker.tabOtherDesc':
                    'Other keys, including special keys and empty keys',
                'keycodePicker.pickedKeyChar': 'Keycode: ',
                'keycodePicker.pickedKeyDesc': 'Description: ',
                'keycodePicker.pickedKeycode': 'Key value',
                'keycodePicker.pickedKeycodeHex': 'HEX: ',
                'keycodePicker.pickedDesc': 'Selected key',
                'keycodePicker.pleaseSelect':
                    'Please click to select one key to continue',
                'keycodePicker.select': 'Select one',
                'keycodePicker.mediaKeys': 'Media Keys',
                'keycodePicker.systemControl': 'System Control',
                'keycodePicker.mouseControl': 'Mouse Control',
                'keycodePicker.networkControl': 'Network Control',
                'keycodePicker.ledControl': 'Led Control',
                'keycodePicker.otherKeys': 'Other Keys',
                'keycodePicker.momentFn': 'Momentary Fn Keys',
                'keycodePicker.momentFnDesc':
                    'Switch layer momentarily. Press to turn on layer.',
                'keycodePicker.toggleFn': 'Layer Toggle Fn Keys',
                'keycodePicker.toggleFnDesc':
                    'Press to turn on layer. Press again to turn off.',
                'keycodePicker.dualFn': 'Dual-role Fn Keys',
                'keycodePicker.dualFnDesc': 'Not supported yet',
                'keycodePicker.turnOnLayer': 'Switch Layer Keys',
                'keycodePicker.turnOnLayerDesc': 'Turn on layer and not return',
                'keycodePicker.otherFn': 'Other Fn keys',
                'keycodePicker.selectedDual': 'Selected Dual-role Key',
                'keycodePicker.tapLabel1': 'Turn on Layer',
                'keycodePicker.tapLabel2': 'with Key',
                'keycodePicker.deviceConfig': 'Configuration',
                ok: 'OK',
                cancel: 'Cancel',
                reset: 'Reset',
                resetConfirm:
                    'Are you sure to reset? All saved settings will be lost.',
                label: 'Label',
                labelDesc: 'Selected keycap description',
                tabChoose: 'Select keys',
                tabMain: 'Standard',
                tabPad: 'Pad',
                tabSystem: 'System',
                tabFn: 'Fn',
                tabRGB: 'RGB',
                tabOther: 'Other',
                tabMainDesc:
                    'Including standard 104 layout, including alpha area, pad area, arrow area etc.',
                tabPadDesc: 'Pad area',
                tabSystemDesc:
                    'Media keys, system control keys, mouse control keys and network control keys',
                tabFnDesc:
                    'Functional keys including layer switch and momentary keys',
                tabRGBDesc: 'Including RGB control keys',
                tabOtherDesc:
                    'Other keys, including special keys and empty keys',
                modify: 'Modify',
                undo: 'Undo',
                redo: 'Redo',
                delete: 'Delete',
                options: 'Options',
                download: 'Publish',
                downloadTip:
                    'Design files download, including plate, pcb design files etc.',
                buy: 'Buy Nine-fox Board',
                pubDesc:
                    'This guide will generate the design files based on the following paramters. Please use CC-BY-SA 4.0 to distribute the generated files.',
                agree: 'I have read and agree to the above terms',
                agreeBtn: 'Please accept I Agree conditions',
                dnDxf: 'Download DXF',
                dnDxfDesc: 'Optimised DXF file with accurate number',
                dnZip: 'Download PCB design project',
                dnZipDesc:
                    'Includes SCH and PCB design file, can be used with NINE-FOX module',
                dnZip2:
                    'Download PCB design project (Dual Mode)     coming soon',
                dnZipDesc2:
                    'Includes SCH and PCB design file, can be used with NINE-FOX module. USB/Bluetooth/2.4G supported',
                dirty:
                    'You have made changes to the layout that are not saved.  You can save your layout to the server by clicking the \'Save\' button. \n\nAre you sure you want to navigate away?',
                layouts: 'Presets',
                layoutsDesc: 'Please choose a pre-defined layout',
                preset: {
                  standard64: 'Standard 64',
                  matrix_22x8: 'Standard Matrix 22x8',
                  winkey: 'ANSI 104 WINKEY',
                  AL2: 'AL2',
                  winkey104: 'ANSI 104',
                  KBD87: 'KBD 87',
                  standard87_wk: 'ANSI 87 WINKEY',
                  standard87: 'ANSI 87',
                  standard68: 'Standard 68',
                  yoda: 'TEX YODA 60',
                  Austin: 'Austin',
                  '7W': 'Standard 75'
                },
                view: 'View',
                viewDesc: 'Please choose the view mode',
                viewDefault: ' Default View',
                viewDefaultDesc:
                    'Standard view with keycaps, labels and layouts design.',
                viewCircuit: 'Circuit View',
                viewCircuitDesc:
                    'Preview the PCB board, with holes and component labels.',
                circuitOpt: 'Hotswap orientation',
                'circuitOpt.title': 'Switch generation',
                'circuitOpt.up': 'Upper profile',
                'circuitOpt.upDesc':
                    'Generate the switch component in upper place.',
                'circuitOpt.down': 'Lower profile',
                'circuitOpt.downDesc':
                    'Generate the switch component in lower place.',
                about: 'About us',
                help: 'Help Documentation',
                helpDesc: 'Click to open tutorial and documentation',
                qq: 'Join QQ Group',
                copyright: 'Copyright 2021 NINE-FOX.com',
                expandFooter: 'Expand the footer',
                pcbInit: 'PCB file is loading, please try again later',
                optionsTitle: 'Options',
                conf: 'Configuration',
                confDesc:
                    'Tips: The description will pop up when you move mouse on to the control item.',
                moveStep: 'Move step',
                sizeStep: 'Size step',
                moveHint:
                    'Controls the step size when moving keys around the keyboard layout.',
                sizeHint:
                    'Controls the step size when resizing keys in the keyboard layout.',
                unit: 'Unit: 1u',
                mm: 'Unit: mm',
                delta: '1u size',
                deltaHint: 'Tips: For some keyboard, the 1u size is not 19.05',
                helpTitle: 'How to use',
                helpDlg:
                    '<h5>Getting Started:</h5><p class=\'myhelptext\'>First, select one of the preset layouts from the dropdown at the left top of the page.</p><p class=\'myhelptext\'>Select a key in the editor by clicking on it; then try changing the various properties in the property-editor form.You can select multiple keys by holding down CTRL and clicking on them, or extend the current selection by SHIFT-clicking on an item.</p><p class=\'myhelptext\'>Try the keyboard shortcuts; they make editing various properties much quicker.</p><h5>Shortcuts:</h5><dl class=\'dl-horizontal floathalf\'><dt><kbd>\u2191\u2193\u2190\u2192</kbd></dt><dd>Move the selected keys</dd><dt><kbd>Shift + \u2191\u2193\u2190\u2192</kbd></dt><dd>Resize the selected keys</dd><dt><kbd>Del</kbd></dt><dd>Delete the selected keys</dd><dt><kbd>Ctrl + S</kbd></dt><dd>Save layout</dd></dl><dl class=\'dl-horizontal floathalf\'><dt><kbd>Ctrl + A</kbd></dt><dd>Select all keys</dd><dt><kbd>Ctrl + Z</kbd></dt><dd>Undo</dd><dt><kbd>Ctrl + Y</kbd></dt><dd>Redo</dd><dt><kbd>Esc</kbd></dt><dd>deselect all keys</dd></dl><h5>More details:</h5><div class=\'myhelplink\'><a class=\'webhidtipbtn\' href=\'https://nine-fox.com/docs/diy\' target=\'_blank\'>    <i class=\'icommon iconf-top-web\'></i> NINE-FOX Documentation</a></div>    ',
                helpDlgShort:
                    '<p><i class="icon icomoon iconf-top-info"></i> Select keys and edit to start. Use download button to export the PCB design files. <a class=\'link\' href=\'https://nine-fox.com/docs/diy\' target=\'_blank\'>See Link</a></p><div class="col-md-2"></div><div class="col-md-8"><dl class=\'dl-horizontal floathalf\'><dt><kbd>\u2191\u2193\u2190\u2192</kbd></dt><dd>Move keys</dd><dt><kbd>Del</kbd></dt><dd>Delete keys</dd></dl><dl class=\'dl-horizontal floathalf\'><dt><kbd>Ctrl + A</kbd></dt><dd>Select all keys</dd><dt><kbd>Esc</kbd></dt><dd>deselect all keys</dd></dl></div><div class="col-md-2"></div>    ',
                pubStart:
                    '<div class="mytoast"><i class="icomoon iconf-top-info"></i>Publishing...please be paient</div>',
                pubWarn:
                    '<div class="mytoast"><i class="icomoon iconf-top-info"></i>Publish is canceled</div>',
                pubSuccess:
                    '<div class="mytoast"><i class="icomoon iconf-top-right"></i>Publishing succeed. Please refer to the document for the next steps: https://nine-fox.com/docs/diy</div>',
                pubError:
                    '<div class="mytoast"><i class="icomoon iconf-top-error"></i>Operation failed with: {0}</div>',
                pubConfirm: 'Are you sure to use {0} to publish?',
                publishDlg:
                    '<h5>This tool will generate PCB design files based on your designed layout. Please following the later instructions in <kbd><a class=\'mytxtlink\' href=\'https://nine-fox.com/docs/diy\' target=\'_blank\'>Documentation</a></kbd>.</h5><p class=\'myhelptext\'>1. This guide will generate files using <kbd>{0}mm</kbd> and <kbd>{1}</kbd>. If you want to change, please return back to the main page and change it in top right cornor;</p><p class=\'myhelptext\'>2. The do-it-yourself spirit is needed. You may learn how to create PCB/Plate with the documentation. However, whether the final product works well or not is not guaranteed, due to different knowledge level and scenarios;</p><p class=\'myhelptext\'>3. The standard keys space is 19.05mm. But you can use other values at your own risk;</p><p class=\'myhelptext\'>4. You can buy the Nine-fox M.2 Module from the offical channels, eg, nine-fox.com, QQ group 193894153;</p><p class=\'myhelptext\'>5. Published USB interface is SH1.0mm 4P, you may change it at your own risk, or just buy one from offical channels;</p><p class=\'myhelptext\'>6. The files generated is published under <kbd><a class=\'mytxtlink\' href=\'https://creativecommons.org/licenses/by-sa/4.0/\' target=\'_blank\'>CC-BY-SA 4.0 license</a></kbd>. Sharing to others is strongly suggested.</p>    '
              },
                'copyright', 'NINE-FOX.com. All Rights Reserved'),
          N3 = 'ninefox-locale';
      function D3() {
        var e = localStorage.getItem(N3);
        return e ||
            (-1 < (navigator.language || navigator.browserLanguage)
                         .toLowerCase()
                         .indexOf('zh') ?
                 'zh' :
                 'en')
      }
      function M3(e, t) {
        if (t && !Array.isArray(t)) throw 'lang input is not array ' + t;
        var r = ('zh' == D3() ? R3 : P3)[e];
        if (!r) return '{{' + e + '}}';
        if (t)
          for (var n = 0; n < t.length; n++) r = r.replace('{' + n + '}', t[n]);
        return r
      }
      function z3() {
        'zh' == D3() ? localStorage.setItem(N3, 'en') :
                       localStorage.setItem(N3, 'zh')
      }
      var K3 = {zh: R3, en: P3, current_language: D3, switch_lang: z3, $t: M3},
          U3 = 2, j3 = 4, B3 = [
            {
              width: 1,
              height: 2,
              valid_values: ['left', 'right'],
              offset: new F3(11.919)
            },
            {
              width: 2,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(11.919)
            },
            {
              width: 2.25,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(11.919)
            },
            {
              width: 2.75,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(11.919)
            },
            {
              width: 3,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(19.05)
            },
            {
              width: 6,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(47.5)
            },
            {
              width: 6.25,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(50)
            },
            {
              width: 7,
              height: 1,
              valid_values: ['down', 'up'],
              offset: new F3(57.15)
            }
          ];
      function Y3(e) {
        var t, r = null, n = qt(B3);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            if (i.width == e.width && i.height == e.height) {
              r = i;
              break
            }
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        return r
      }
      function H3(e, t) {
        if (!e.ninefox.stab) return null;
        var r, n = qt(t.valid_values);
        try {
          for (n.s(); !(r = n.n()).done;)
            if (r.value == e.ninefox.stab) return e.ninefox.stab
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        return null
      }
      function G3(e) {
        e.ninefox || (e.ninefox = JSON.parse(e.profile));
        var t = Y3(e);
        if (!t) return null;
        e = H3(e, t);
        return e ? {value: e, list: t.valid_values} :
                   {value: t.valid_values[0], list: t.valid_values}
      }
      function W3(e) {
        if (!e) throw 'stab for key null';
        var t;
        if (e.ninefox || (e.ninefox = JSON.parse(e.profile)), Y3(e)) {
          var r = e.ninefox.stab;
          switch (e.width) {
            case 1:
              2 == e.height &&
                  (t = [7, 12, j3, 35, 12, U3, 7, 72, j3, 35, 72, U3]);
              break;
            case 2:
              t = [12, 7, U3, 12, 35, j3, 72, 7, U3, 72, 35, j3];
              break;
            case 2.25:
              t = [12, 7, U3, 12, 35, j3, 82.5, 7, U3, 82.5, 35, j3];
              break;
            case 2.75:
              t = [12, 7, U3, 12, 35, j3, 103.5, 7, U3, 103.5, 35, j3];
              break;
            case 3:
              t = [12, 7, U3, 12, 35, j3, 114, 7, U3, 114, 35, j3];
              break;
            case 6:
              t = [12, 7, U3, 12, 35, j3, 240, 7, U3, 240, 35, j3];
              break;
            case 6.25:
              t = [12, 7, U3, 12, 35, j3, 250.5, 7, U3, 250.5, 35, j3];
              break;
            case 7:
              t = [12, 7, U3, 12, 35, j3, 282, 7, U3, 282, 35, j3]
          }
          return 'up' == r && t ?
                     (t[2] = t[8] = j3, t[5] = t[11] = U3) :
                     'right' == r && t && (t[2] = t[8] = U3, t[5] = t[11] = j3),
                 t
        }
      }
      function Z3(e) {
        var t, r = !1, n = qt(B3);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i, o = qt(t.value.valid_values);
            try {
              for (o.s(); !(i = o.n()).done;)
                if (i.value == e) {
                  r = !0;
                  break
                }
            } catch (e) {
              o.e(e)
            } finally {
              o.f()
            }
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        if (!r) throw 'invalid stab value: ' + e;
        return K3.$t('stab_' + e)
      }
      var V3 = {
        stab_render_style: W3,
        stab_value: G3,
        stab_profile: Y3,
        stab_desc: Z3
      },
          J3 = 4, X3 = new F3(19.05), $3 = new F3(1).div(new F3(.254)),
          q3 = parseFloat(new F3(3).div(2).mul($3).toFixed(J3)),
          Q3 = parseFloat(new F3(3.98).div(2).mul($3).toFixed(J3)), e4 = {
            CA: {
              prefix: 'CA~',
              regex:
                  /^CA~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
              format: [
                {index: 1, label: 'viewWidth'}, {index: 2, label: 'viewHeight'},
                {index: 3, label: 'backGround'},
                {index: 4, label: 'gridVisible'},
                {index: 5, label: 'gridColor'}, {index: 6, label: 'gridSize'},
                {index: 7, label: 'canvasWidth'},
                {index: 8, label: 'canvasHeight'},
                {index: 9, label: 'gridStyle'}, {index: 10, label: 'snapSize'},
                {index: 11, label: 'unit'}, {index: 12, label: 'altSnapSize'},
                {index: 13, label: 'unknown13'},
                {index: 14, label: 'unknown14'},
                {index: 15, label: 'unknown15'}, {index: 16, label: 'originX'},
                {index: 17, label: 'originY'}
              ]
            },
            HOLE: {
              prefix: 'HOLE~',
              regex: /^HOLE~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
              format: [
                {index: 1, label: 'x'}, {index: 2, label: 'y'},
                {index: 3, label: 'holeR'}, {index: 4, label: 'gId'},
                {index: 5, label: 'locked'}
              ]
            },
            TRACK: {
              prefix: 'TRACK~',
              regex: /^TRACK~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
              format: [
                {index: 1, label: 'strokeWidth'}, {index: 2, label: 'layerid'},
                {index: 3, label: 'net'}, {index: 4, label: 'pointArr'},
                {index: 5, label: 'gId'}, {index: 6, label: 'locked'}
              ]
            },
            PAD: {
              prefix: 'PAD~',
              regex:
                  /^PAD~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              format: [
                {index: 1, label: 'shape'}, {index: 2, label: 'x'},
                {index: 3, label: 'y'}, {index: 4, label: 'width'},
                {index: 5, label: 'height'}, {index: 6, label: 'layerid'},
                {index: 7, label: 'net'}, {index: 8, label: 'number'},
                {index: 9, label: 'holeR'}, {index: 10, label: 'pointArr'},
                {index: 11, label: 'rotation'}, {index: 12, label: 'gId'},
                {index: 13, label: 'holeLength'},
                {index: 14, label: 'slotPointArr'},
                {index: 15, label: 'plated'}, {index: 16, label: 'locked'},
                {index: 17, label: 'pasteexpansion'},
                {index: 18, label: 'solderexpansion'},
                {index: 19, label: 'holeCenter'}
              ]
            },
            SVGNODE: {
              prefix: 'SVGNODE~',
              regex: /^SVGNODE~(.*)/,
              format: [{index: 1, label: 'data'}]
            },
            ARC: {
              prefix: 'ARC~',
              regex:
                  /^ARC~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              format: [
                {index: 1, label: 'strokeWidth'}, {index: 2, label: 'layerid'},
                {index: 3, label: 'net'}, {index: 4, label: 'd'},
                {index: 5, label: 'c_helper_dots'}, {index: 6, label: 'gId'},
                {index: 7, label: 'locked'}
              ]
            },
            CIRCLE: {
              prefix: 'CIRCLE~',
              regex:
                  /^CIRCLE~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              format: [
                {index: 1, label: 'cx'}, {index: 2, label: 'cy'},
                {index: 3, label: 'r'}, {index: 4, label: 'strokeWidth'},
                {index: 5, label: 'layerid'}, {index: 6, label: 'gId'},
                {index: 7, label: 'locked'}, {index: 8, label: 'net'},
                {index: 9, label: 'transformarc'}
              ]
            },
            SOLIDREGION: {
              prefix: 'SOLIDREGION~',
              regex:
                  /^SOLIDREGION~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              format: [
                {index: 1, label: 'layerid'}, {index: 2, label: 'net'},
                {index: 3, label: 'pathStr'}, {index: 4, label: 'type'},
                {index: 5, label: 'gId'}, {index: 6, label: 'teardrop'},
                {index: 7, label: 'targetPad'}, {index: 8, label: 'targetWire'},
                {index: 9, label: 'locked'}
              ]
            },
            TEXT: {
              prefix: 'TEXT~',
              regex:
                  /^TEXT~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              format: [
                {index: 1, label: 'type'}, {index: 2, label: 'x'},
                {index: 3, label: 'y'}, {index: 4, label: 'strokeWidth'},
                {index: 5, label: 'rotation'}, {index: 6, label: 'mirror'},
                {index: 7, label: 'layerid'}, {index: 8, label: 'net'},
                {index: 9, label: 'fontSize'}, {index: 10, label: 'text'},
                {index: 11, label: 'pathStr'}, {index: 12, label: 'display'},
                {index: 13, label: 'gId'}, {index: 14, label: 'fontFamily'},
                {index: 15, label: 'locked'}, {index: 16, label: 'c_etype'}
              ]
            },
            LIB: {
              prefix: 'LIB~',
              regex:
                  /^LIB~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
              format: [
                {index: 1, label: 'x'}, {index: 2, label: 'y'},
                {index: 3, label: 'c_para'}, {index: 4, label: 'rotation'},
                {index: 5, label: 'importFlag'}, {index: 6, label: 'gId'},
                {index: 7, label: 'layerid'}, {index: 8, label: 'uuid'},
                {index: 9, label: 'utime'}, {index: 10, label: 'locked'},
                {index: 11, label: 'bind_sch_id'},
                {index: 12, label: 'unknown12'},
                {index: 13, label: 'unknown13'},
                {index: 14, label: 'otherParts'}
              ]
            }
          };
      function t4(e) {
        if (void 0 === e) throw 'undefined value found';
        if (26 < e) throw 'int exceeed: ' + e;
        return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[e]
      }
      function r4(e) {
        var t, r, n = {}, i = [], o = qt(e);
        try {
          for (o.s(); !(t = o.n()).done;) {
            var a = t.value;
            if (a.ninefox || (a.ninefox = JSON.parse(a.profile)),
                'KEY' == a.ninefox.type) {
              if (!a.ninefox) throw 'invalid key: ' + a;
              if (void 0 === a.ninefox.mapx || void 0 === a.ninefox.mapy)
                throw 'undefined key: ' + a;
              var s = '' + t4(a.ninefox.mapx) + t4(a.ninefox.mapy);
              n[s] ? n[s] = 2 : n[s] = 1
            }
          }
        } catch (e) {
          o.e(e)
        } finally {
          o.f()
        }
        for (r in n) 2 == n[r] && i.push(r);
        return 0 == i.length ? null : i
      }
      function n4(e, t) {
        var r = {}, n = e4[e], i = n.regex.exec(t);
        if (!i) throw 'error: ' + t;
        for (var o = 1; o <= n.format.length; o++) {
          var a, s = i[o], c = qt(n.format);
          try {
            for (c.s(); !(a = c.n()).done;) {
              var l = a.value;
              if (l.index == o) {
                r[l.label] = s;
                break
              }
            }
          } catch (e) {
            c.e(e)
          } finally {
            c.f()
          }
        }
        return r._type = e, r
      }
      function i4(e) {
        return n4('TRACK', e)
      }
      function o4(e) {
        return n4('ARC', e)
      }
      function a4(e) {
        return n4('CIRCLE', e)
      }
      function s4(e) {
        return n4('PAD', e)
      }
      function c4(e) {
        return n4('SVGNODE', e)
      }
      function l4(e) {
        return n4('SOLIDREGION', e)
      }
      function u4(e) {
        return n4('HOLE', e)
      }
      function d4(e) {
        var t = {}, r = e4.TEXT, n = r.regex.exec(e);
        if (!n) throw 'error: ' + e;
        for (var i = 1; i <= r.format.length; i++) {
          var o, a = n[i], s = qt(r.format);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var c = o.value;
              if (c.index == i) {
                t[c.label] = a,
                'pathStr' == c.label &&
                    (t[c.label] = HS(a).round(4).toString());
                break
              }
            }
          } catch (e) {
            s.e(e)
          } finally {
            s.f()
          }
        }
        return t._type = 'TEXT', t
      }
      function h4(e) {
        var t, r = {}, n = [], i = qt(e.split('#@$'));
        try {
          for (i.s(); !(t = i.n()).done;) {
            var o = t.value;
            if (o.trim())
              if (0 == o.indexOf('TEXT~')) {
                var a = d4(o);
                n.push(a), 'P' == a.type && (r.name = a.text)
              } else if (0 == o.indexOf('HOLE~')) {
                var s = u4(o);
                n.push(s)
              } else if (0 == o.indexOf('HOLE~')) {
                var c = u4(o);
                n.push(c)
              } else if (0 == o.indexOf('CIRCLE~')) {
                var l = a4(o);
                n.push(l)
              } else if (0 == o.indexOf('TRACK~')) {
                var u = i4(o);
                n.push(u)
              } else if (0 == o.indexOf('ARC~')) {
                var d = o4(o);
                n.push(d)
              } else if (0 == o.indexOf('PAD~')) {
                var h = s4(o);
                n.push(h)
              } else if (0 == o.indexOf('SOLIDREGION~')) {
                var f = l4(o);
                n.push(f)
              } else {
                if (0 != o.indexOf('SVGNODE~')) throw 'unknown part: ' + o;
                var p = c4(o);
                n.push(p)
              }
          }
        } catch (e) {
          i.e(e)
        } finally {
          i.f()
        }
        return r.data = n, r
      }
      function f4(e) {
        for (var t = e4.LIB, r = t.regex.exec(e), n = {}, i = 1;
             i <= t.format.length; i++) {
          var o, a = r[i], s = qt(t.format);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var c = o.value;
              if (c.index == i) {
                if ('otherParts' == c.label) {
                  var l = h4(a);
                  if (!l.name) throw 'cannot find name for: ' + a;
                  n.name = l.name, n[c.label] = l.data
                } else
                  n[c.label] = a;
                break
              }
            }
          } catch (e) {
            s.e(e)
          } finally {
            s.f()
          }
        }
        if (!n.name) throw 'cannot find the name!';
        return n
      }
      function p4(e, t, r) {
        if (!e.trim()) return e;
        var n = e.split(',');
        if (2 != n.length) throw 'point should in x,y format: ' + e;
        return e = parseFloat(n[0]), n = parseFloat(n[1]),
               (e = new F3(e).add(t).toFixed(J3)) + ',' +
                   new F3(n).add(r).toFixed(J3)
      }
      function g4(e, t, r) {
        if (!e.trim()) return e;
        var n = '', i = [], o = e.split(' ');
        if (o.length % 2 != 0) throw 'points should 2x ' + n.pointArr;
        for (var a = 0, s = 0; s < o.length; s++)
          s % 2 != 0 ? i.push({x: a, y: parseFloat(o[s])}) :
                       a = parseFloat(o[s]);
        for (var c = 0, l = i; c < l.length; c++) {
          var u = l[c];
          u.x = new F3(u.x).add(t).toFixed(J3),
          u.y = new F3(u.y).add(r).toFixed(J3)
        }
        for (var d = [], h = 0, f = i; h < f.length; h++) {
          var p = f[h];
          d.push(p.x + ' ' + p.y)
        }
        return n += d.join(' ')
      }
      function y4(e, t, r) {
        var n, e = T4(e), i = qt(e);
        try {
          for (i.s(); !(n = i.n()).done;) {
            var o = n.value;
            if ('TEXT' == o._type)
              o.x = new F3(o.x).add(t).toFixed(J3),
              o.y = new F3(o.y).add(r).toFixed(J3),
              o.pathStr =
                  HS(o.pathStr)
                      .translate(
                          parseFloat(t.toFixed(J3)), parseFloat(r.toFixed(J3)))
                      .round(J3)
                      .toString();
            else if ('TRACK' == o._type)
              o.pointArr = g4(o.pointArr, t, r);
            else if ('HOLE' == o._type)
              o.x = new F3(o.x).add(t).toFixed(J3),
              o.y = new F3(o.y).add(r).toFixed(J3);
            else if ('PAD' == o._type)
              o.x = new F3(o.x).add(t).toFixed(J3),
              o.y = new F3(o.y).add(r).toFixed(J3),
              o.pointArr = g4(o.pointArr, t, r),
              o.slotPointArr = g4(o.slotPointArr, t, r),
              o.holeCenter = p4(o.holeCenter, t, r);
            else if ('SVGNODE' == o._type) {
              var a = JSON.parse(o.data);
              a.attrs.c_origin = p4(a.attrs.c_origin, t, r),
              a.attrs.transform = a.attrs.transform.replace(
                  /(translate\(.+\))/,
                  'translate('.concat(-t, ', ').concat(-r, ')'));
              var s, c = qt(a.childNodes);
              try {
                for (c.s(); !(s = c.n()).done;) {
                  var l = s.value;
                  'polyline' == l.nodeName &&
                      (l.attrs.points = g4(l.attrs.points, t, r))
                }
              } catch (e) {
                c.e(e)
              } finally {
                c.f()
              }
              o.data = JSON.stringify(a)
            } else if ('ARC' == o._type)
              o.d =
                  HS(o.d)
                      .translate(
                          parseFloat(t.toFixed(J3)), parseFloat(r.toFixed(J3)))
                      .round(J3)
                      .toString(),
              o.c_helper_dots &&
                  (o.c_helper_dots = HS(o.c_helper_dots)
                                         .translate(
                                             parseFloat(t.toFixed(J3)),
                                             parseFloat(r.toFixed(J3)))
                                         .round(J3)
                                         .toString());
            else if ('CIRCLE' == o._type)
              o.cx = new F3(o.cx).add(t).toFixed(J3),
              o.cy = new F3(o.cy).add(r).toFixed(J3);
            else {
              if ('SOLIDREGION' != o._type) throw 'should not arriveher';
              o.pathStr =
                  HS(o.pathStr)
                      .translate(
                          parseFloat(t.toFixed(J3)), parseFloat(r.toFixed(J3)))
                      .round(J3)
                      .toString()
            }
          }
        } catch (e) {
          i.e(e)
        } finally {
          i.f()
        }
        return e
      }
      function m4(e, t) {
        t = t.upper ? 'up' : 'down', e = V3.stab_value(e);
        return e && ('left' != e.value && 'right' != e.value || (t = e.value)),
               t
      }
      function b4(e, t, r) {
        var n = 'NH' + t4(e.ninefox.mapx) + t4(e.ninefox.mapy),
            r = R5(t[m4(e, r)][n]);
        if (!r) throw 'cannot locate ' + n;
        n = X3.mul(new F3(e.x).add(new F3(e.width).div(2))).add(7),
        e = X3.mul(new F3(e.y).add(new F3(e.height).div(2))).add(7),
        n = n.mul($3), e = e.mul($3);
        return r.x = parseFloat(n.toFixed(J3)), r.y = parseFloat(e.toFixed(J3)),
               r.otherParts = y4(r.otherParts, n, e), r
      }
      function v4(e, t, r) {
        var n, i, o = 'NS' + t4(e.ninefox.mapx) + t4(e.ninefox.mapy),
                  a = m4(e, r), t = R5(t[a][o]);
        if (!t) throw 'cannot locate ' + o;
        switch (a) {
          case 'up':
            n = new F3(-.635), i = new F3(-3.81);
            break;
          case 'down':
            n = new F3(.635), i = new F3(3.81);
            break;
          case 'left':
            n = new F3(-3.81), i = new F3(.635);
            break;
          case 'right':
            n = new F3(3.81), i = new F3(-.635);
            break;
          default:
            throw 'unknown orient ' + a
        }
        o = X3.mul(new F3(e.x).add(new F3(e.width).div(2))).add(7),
        e = X3.mul(new F3(e.y).add(new F3(e.height).div(2))).add(7),
        o = o.add(n).mul($3), e = e.add(i).mul($3);
        return t.x = parseFloat(o.toFixed(J3)), t.y = parseFloat(e.toFixed(J3)),
               t.otherParts = y4(t.otherParts, o, e), t
      }
      function _4(e, t, r) {
        var n, i, o = 'ND' + t4(e.ninefox.mapx) + t4(e.ninefox.mapy),
                  a = m4(e, r), t = R5(t[a][o]);
        if (!t) throw 'cannot locate ' + o;
        switch (a) {
          case 'up':
            n = new F3(3.1), i = new F3(0);
            break;
          case 'down':
            n = new F3(-3.1), i = new F3(0);
            break;
          case 'left':
            n = new F3(0), i = new F3(-3.1);
            break;
          case 'right':
            n = new F3(0), i = new F3(3.1);
            break;
          default:
            throw 'unknown orient ' + a
        }
        o = X3.mul(new F3(e.x).add(new F3(e.width).div(2))).add(7),
        e = X3.mul(new F3(e.y).add(new F3(e.height).div(2))).add(7),
        o = o.add(n).mul($3), e = e.add(i).mul($3);
        return t.x = parseFloat(o.toFixed(J3)), t.y = parseFloat(e.toFixed(J3)),
               t.otherParts = y4(t.otherParts, o, e), t
      }
      function w4(e, t) {
        var r, n = e, i = qt(e4[e].format);
        try {
          for (i.s(); !(r = i.n()).done;) {
            var o = r.value;
            n += '~', n += t[o.label]
          }
        } catch (e) {
          i.e(e)
        } finally {
          i.f()
        }
        return n
      }
      function x4(e) {
        return w4('TEXT', e)
      }
      function k4(e) {
        return w4('HOLE', e)
      }
      function C4(e) {
        return w4('TRACK', e)
      }
      function S4(e) {
        return w4('PAD', e)
      }
      function E4(e) {
        return w4('SVGNODE', e)
      }
      function A4(e) {
        return w4('ARC', e)
      }
      function O4(e) {
        return w4('CIRCLE', e)
      }
      function L4(e) {
        return w4('SOLIDREGION', e)
      }
      function I4(e) {
        var t, r = 'LIB', n = qt(e4.LIB.format);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            if (r += '~', 'otherParts' == i.label) {
              var o, a = '', s = qt(e.otherParts);
              try {
                for (s.s(); !(o = s.n()).done;) {
                  var c = o.value;
                  if (a += '#@$', 'TEXT' == c._type)
                    a += x4(c);
                  else if ('HOLE' == c._type)
                    a += k4(c);
                  else if ('TRACK' == c._type)
                    a += C4(c);
                  else if ('PAD' == c._type)
                    a += S4(c);
                  else if ('SVGNODE' == c._type)
                    a += E4(c);
                  else if ('ARC' == c._type)
                    a += A4(c);
                  else if ('CIRCLE' == c._type)
                    a += O4(c);
                  else {
                    if ('SOLIDREGION' != c._type) throw 'unspported type?';
                    a += L4(c)
                  }
                }
              } catch (e) {
                s.e(e)
              } finally {
                s.f()
              }
              r += a
            } else
              r += e[i.label]
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        return r
      }
      function T4(e) {
        return JSON.parse(JSON.stringify(e))
      }
      function F4(e) {
        return 1 == e.width ? R4(e) : 1 == e.height ? P4(e) : null
      }
      function R4(e) {
        var t;
        switch (e.ninefox || (e.ninefox = JSON.parse(e.profile)), e.height) {
          case 1:
            return null;
          case 2:
          case 2.25:
          case 2.75:
            if (t =
                    [
                      -8.255, 11.937, Q3, 6.985, 11.937, q3, -8.255, -11.937,
                      Q3, 6.985, -11.937, q3
                    ],
                'right' == e.ninefox.stab)
              return [
                -6.985, 11.937, q3, 8.255, 11.937, Q3, -6.985, -11.937, q3,
                8.255, -11.937, Q3
              ];
            break;
          default:
            return null
        }
        return t
      }
      function P4(e) {
        var t;
        switch (e.ninefox || (e.ninefox = JSON.parse(e.profile)), e.width) {
          case 1:
            return null;
          case 2:
          case 2.25:
          case 2.75:
            t = [
              11.937, -6.985, q3, 11.937, 8.255, Q3, -11.937, -6.985, q3,
              -11.937, 8.255, Q3
            ];
            break;
          case 3:
            t = [
              19.05, -6.985, q3, 19.05, 8.255, Q3, -19.05, -6.985, q3, -19.05,
              8.255, Q3
            ];
            break;
          case 6:
            t = [
              47.5, -6.985, q3, 47.5, 8.255, Q3, -47.5, -6.985, q3, -47.5,
              8.255, Q3
            ];
            break;
          case 6.25:
            t = [
              50, -6.985, q3, 50, 8.255, Q3, -50, -6.985, q3, -50, 8.255, Q3
            ];
            break;
          case 6.5:
            t = [
              52.38, -6.985, q3, 52.38, 8.255, Q3, -52.38, -6.985, q3, -52.38,
              8.255, Q3
            ];
            break;
          case 7:
            t = [
              57.154, -6.985, q3, 57.154, 8.255, Q3, -57.154, -6.985, q3,
              -57.154, 8.255, Q3
            ];
            break;
          default:
            return null
        }
        return 'up' == e.ninefox.stab ?
            [
              t[0], parseFloat(new F3(t[4]).neg().toFixed(J3)), Q3, t[3],
              parseFloat(new F3(t[1]).neg().toFixed(J3)), q3, t[6],
              parseFloat(new F3(t[10]).neg().toFixed(J3)), Q3, t[9],
              parseFloat(new F3(t[7]).neg().toFixed(J3)), q3
            ] :
            t
      }
      function N4(e, t, r) {
        r.delta && (X3 = new F3(r.delta));
        var n, i = [], o = [], a = qt(e);
        try {
          for (a.s(); !(n = a.n()).done;) {
            var s = T4(n.value);
            s.ninefox || (s.ninefox = JSON.parse(s.profile)),
                'KEY' == s.ninefox.type && o.push(s)
          }
        } catch (e) {
          a.e(e)
        } finally {
          a.f()
        }
        var c, l = 0, u = 0, d = qt(e);
        try {
          for (d.s(); !(c = d.n()).done;)
            var h = c.value, l = Math.max(l, h.x + h.width),
                u = Math.max(u, h.y + h.height)
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        var f = [], p = new F3(3).mul($3), g = parseFloat(p.toFixed(J3)),
            y = parseFloat(new F3(2.54).mul($3).toFixed(J3)),
            m = new F3(l).mul(X3).mul($3), b = new F3(u).mul(X3).mul($3),
            v = parseFloat(m.toFixed(J3)), _ = parseFloat(b.toFixed(J3)),
            m = parseFloat(m.sub(p).toFixed(J3)),
            p = parseFloat(b.sub(p).toFixed(J3));
        f.push('TRACK~1~'.concat(y, '~~0 ').concat(p, ' 0 ').concat(
            g, '~gge54~0')),
            f.push('TRACK~1~'.concat(y, '~~')
                       .concat(m, ' ')
                       .concat(_, ' ')
                       .concat(g, ' ')
                       .concat(_, '~gge52~0')),
            f.push('TRACK~1~'.concat(y, '~~')
                       .concat(v, ' ')
                       .concat(g, ' ')
                       .concat(v, ' ')
                       .concat(p, '~gge50~0')),
            f.push('TRACK~1~'.concat(y, '~~').concat(g, ' 0 ').concat(
                m, ' 0~gge48~0')),
            f.push('ARC~1~'.concat(y, '~~M')
                       .concat(m, ' 0A')
                       .concat(g, ' ')
                       .concat(g, ' 0 0 1 ')
                       .concat(v, ' ')
                       .concat(g, '~~gge49~0')),
            f.push('ARC~1~'.concat(y, '~~M')
                       .concat(v, ' ')
                       .concat(p, 'A')
                       .concat(g, ' ')
                       .concat(g, ' 0 0 1 ')
                       .concat(m, ' ')
                       .concat(_, '~~gge51~0')),
            f.push('ARC~1~'.concat(y, '~~M')
                       .concat(g, ' ')
                       .concat(_, 'A')
                       .concat(g, ' ')
                       .concat(g, ' 0 0 1 0 ')
                       .concat(p, '~~gge53~0')),
            f.push('ARC~1~'.concat(y, '~~M0 ')
                       .concat(g, 'A')
                       .concat(g, ' ')
                       .concat(g, ' 0 0 1 ')
                       .concat(g, ' 0~~gge55~0'));
        for (var w = new F3(7).mul($3), x = [], k = 0, C = f; k < C.length;
             k++) {
          var S, E = C[k];
          0 == E.indexOf('TRACK') ?
              ((S = i4(E)).pointArr = g4(S.pointArr, w, w), x.push(C4(S))) :
              0 == E.indexOf('ARC') &&
                  ((E = o4(E)).d = HS(E.d)
                                       .translate(
                                           parseFloat(w.toFixed(J3)),
                                           parseFloat(w.toFixed(J3)))
                                       .round(J3)
                                       .toString(),
                   x.push(A4(E)))
        }
        var A, O = [], L = u4('HOLE~0~0~3.98~gge10~0'), I = 60, T = qt(e);
        try {
          for (T.s(); !(A = T.n()).done;) {
            var F = A.value, R = F4(F);
            if (R)
              for (var P = new F3(F.x)
                               .add(new F3(F.width).div(2))
                               .mul(X3)
                               .add(7),
                       N = new F3(F.y)
                               .add(new F3(F.height).div(2))
                               .mul(X3)
                               .add(7),
                       D = 0;
                   D < 4; D++)
                L.x = '' +
                    parseFloat(P.add(new F3(R[3 * D])).mul($3).toFixed(J3)),
                L.y = '' +
                    parseFloat(N.add(new F3(R[3 * D + 1])).mul($3).toFixed(J3)),
                L.holeR = '' + R[3 * D + 2], L.gId = 'gge' + I++,
                L.locked = '1', O.push(k4(L))
          }
        } catch (e) {
          T.e(e)
        } finally {
          T.f()
        }
        e = r4(o);
        if (e) throw 'Duplicate keys found: ' + e.join(' ');
        for (var M, z = {}, K = {}, U = {}, j = [], B = [], Y = [], H = 0,
                    G = o;
             H < G.length; H++) {
          var W = G[H];
          W.ninefox = JSON.parse(W.profile)
        }
        for (M in t) {
          z[M] = {}, K[M] = {}, U[M] = {};
          var Z, V = qt(t[M].shape);
          try {
            for (V.s(); !(Z = V.n()).done;) {
              var J, X, $, q = Z.value;
              0 == q.indexOf('LIB~') && -1 != q.indexOf('NINE-FOX_MX1A_HOLE') ?
                  (J = f4(q), z[M][J.name] = J) :
                  0 == q.indexOf('LIB~') &&
                          -1 != q.indexOf('NINE-FOX_CPG151101S11') ?
                  (X = f4(q), K[M][X.name] = X) :
                  0 == q.indexOf('LIB~') &&
                          -1 != q.indexOf('NINE-FOX_SOD-123') &&
                          ($ = f4(q), U[M][$.name] = $)
            }
          } catch (e) {
            V.e(e)
          } finally {
            V.f()
          }
        }
        var Q, ee = qt(t.up.shape);
        try {
          for (ee.s(); !(Q = ee.n()).done;) {
            var te = Q.value;
            0 == te.indexOf('LIB~') && -1 != te.indexOf('NINE-FOX_MX1A_HOLE') ||
                0 == te.indexOf('LIB~') &&
                    -1 != te.indexOf('NINE-FOX_CPG151101S11') ||
                0 == te.indexOf('LIB~') &&
                    -1 != te.indexOf('NINE-FOX_SOD-123') ||
                i.push(R5(te))
          }
        } catch (e) {
          ee.e(e)
        } finally {
          ee.f()
        }
        for (var re = 0, ne = o; re < ne.length; re++) {
          var ie = b4(ne[re], z, r);
          j.push(ie)
        }
        for (var oe = 0, ae = o; oe < ae.length; oe++) {
          var se = v4(ae[oe], K, r);
          B.push(se)
        }
        for (var ce = 0, le = o; ce < le.length; ce++) {
          var ue = _4(le[ce], U, r);
          Y.push(ue)
        }
        for (var de = [], he = 0, fe = j; he < fe.length; he++) {
          var pe = fe[he];
          de.push(I4(pe))
        }
        for (var ge = 0, ye = B; ge < ye.length; ge++) {
          var me = ye[ge];
          de.push(I4(me))
        }
        for (var be = 0, ve = Y; be < ve.length; be++) {
          var _e = ve[be];
          de.push(I4(_e))
        }
        e = T4(t.up);
        return e.shape = x.concat(O).concat(i).concat(de), e
      }
      var D4 = {main_pcb_process: N4, trans_LIB: f4}, M4 = {
        T: {
          prefix: 'T~',
          regex:
              /^T~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
          format: [
            {
              index: 1,
              label: 'mark',
              chinese:
                  '\u6587\u672c\u6807\u8bb0\uff0c\u53ef\u9009\u503c\uff1aL(\u666e\u901a\u6587\u672c) | N(\u5668\u4ef6\u540d\u79f0) | P(\u5668\u4ef6\u7f16\u53f7) | PK(\u5c01\u88c5\u540d)'
            },
            {index: 2, label: 'x', chinese: '\u6a2a\u5750\u6807'},
            {index: 3, label: 'y', chinese: '\u7eb5\u5750\u6807'},
            {index: 4, label: 'rotation', chinese: '\u65cb\u8f6c\u89d2\u5ea6'},
            {index: 5, label: 'fillColor', chinese: '\u586b\u5145\u989c\u8272'},
            {index: 6, label: 'fontFamily', chinese: '\u5b57\u4f53'},
            {index: 7, label: 'fontSize', chinese: '\u6587\u5b57\u5927\u5c0f'},
            {
              index: 8,
              label: 'fontWeight',
              chinese: '\u6587\u5b57\u7c97\u7ec6'
            },
            {
              index: 9,
              label: 'fontStyle',
              chinese:
                  '\u6587\u5b57\u6837\u5f0f\uff08\u81ea\u52a8 | \u6b63\u5e38 | \u659c\u4f53\uff09'
            },
            {
              index: 10,
              label: 'dominantBaseline',
              chinese: '\u6587\u5b57\u7684dominant-baseline\u5c5e\u6027'
            },
            {
              index: 11,
              label: 'type',
              chinese:
                  '\u6587\u672c\u7c7b\u578b\uff08\u6ce8\u91ca | \u4eff\u771f\uff09'
            },
            {index: 12, label: 'value', chinese: '\u6587\u672c\u503c'},
            {index: 13, label: 'visible', chinese: '\u662f\u5426\u53ef\u89c1'},
            {
              index: 14,
              label: 'textAnchor',
              chinese: '\u6587\u5b57\u7684text-anchor\u5c5e\u6027'
            },
            {index: 15, label: 'gId', chinese: '\u5143\u7d20id'},
            {index: 16, label: 'locked', chinese: '\u662f\u5426\u9501\u5b9a'}, {
              index: 17,
              label: 'c_etype',
              chinese:
                  'c_etype\u5c5e\u6027\u503c\uff08c_etype\u662f\u81ea\u5b9a\u4e49\u7684\u7528\u4e8e\u7ec6\u5206\u56fe\u5143\u7c7b\u578b\u7684\u5c5e\u6027\uff09'
            }
          ]
        },
        J: {
          prefix: 'J~',
          regex: /^J~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
          format: [
            {index: 1, label: 'x', chinese: '\u6a2a\u5750\u6807'},
            {index: 2, label: 'y', chinese: '\u7eb5\u5750\u6807'},
            {index: 3, label: 'r', chinese: '\u534a\u5f84'},
            {index: 4, label: 'fillColor', chinese: '\u586b\u5145\u989c\u8272'},
            {index: 5, label: 'gId', chinese: '\u5143\u7d20id'},
            {index: 6, label: 'locked', chinese: '\u662f\u5426\u9501\u5b9a'}
          ]
        },
        W: {
          prefix: 'W~',
          regex: /^W~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
          format: [
            {
              index: 1,
              label: 'pointerStr',
              chinese:
                  '\u6298\u7ebfpolyline\u7684points\u6570\u636e\u5b57\u7b26\u4e32'
            },
            {
              index: 2,
              label: 'strokeColor',
              chinese: '\u7ebf\u6761\u989c\u8272'
            },
            {
              index: 3,
              label: 'strokeWidth',
              chinese: '\u7ebf\u6761\u5bbd\u5ea6'
            },
            {
              index: 4,
              label: 'strokeStyle',
              chinese: '\u7ebf\u6761\u6837\u5f0f'
            },
            {index: 5, label: 'fillColor', chinese: '\u586b\u5145\u989c\u8272'},
            {index: 6, label: 'gId', chinese: '\u5143\u7d20id'},
            {index: 7, label: 'locked', chinese: '\u662f\u5426\u9501\u5b9a'}
          ]
        },
        PL: {
          prefix: 'PL~',
          regex: /^PL~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)/,
          format: [
            {
              index: 1,
              label: 'pointerStr',
              chinese:
                  '\u6298\u7ebfpolyline\u7684points\u6570\u636e\u5b57\u7b26\u4e32'
            },
            {
              index: 2,
              label: 'strokeColor',
              chinese: '\u7ebf\u6761\u989c\u8272'
            },
            {
              index: 3,
              label: 'strokeWidth',
              chinese: '\u7ebf\u6761\u5bbd\u5ea6'
            },
            {
              index: 4,
              label: 'strokeStyle',
              chinese: '\u7ebf\u6761\u6837\u5f0f'
            },
            {index: 5, label: 'fillColor', chinese: '\u586b\u5145\u989c\u8272'},
            {index: 6, label: 'gId', chinese: '\u5143\u7d20id'},
            {index: 7, label: 'locked', chinese: '\u662f\u5426\u9501\u5b9a'}
          ]
        },
        LIB: {
          prefix: 'LIB~',
          regex:
              /^LIB~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~([^~]*)~(.*)/,
          format: [
            {index: 1, label: 'x', chinese: '\u6a2a\u5750\u6807'},
            {index: 2, label: 'y', chinese: '\u7eb5\u5750\u6807'}, {
              index: 3,
              label: 'c_para',
              chinese: '\u81ea\u5b9a\u4e49\u5c5e\u6027'
            },
            {index: 4, label: 'rotation', chinese: '\u65cb\u8f6c\u89d2\u5ea6'},
            {
              index: 5,
              label: 'importFlag',
              chinese: 'eagle\u5bfc\u5165\u6807\u8bb0, '
            },
            {index: 6, label: 'gId', chinese: '\u5143\u7d20id'}, {
              index: 7,
              label: 'puuid',
              chinese: '\u7ed1\u5b9a\u7684pcb\u5c01\u88c5uuid'
            },
            {index: 8, label: 'uuid', chinese: '\u5668\u4ef6\u7684uuid'},
            {index: 9, label: 'locked', chinese: '\u662f\u5426\u9501\u5b9a'}, {
              index: 10,
              label: 'bind_pcb_id',
              chinese:
                  '\u7ed1\u5b9a\u7684pcb\u5c01\u88c5\u7684id\uff08\u5f03\u7528\uff09'
            },
            {
              index: 11,
              label: 'convert_to_pcb',
              chinese: '\u662f\u5426\u66f4\u65b0\u5230pcb'
            },
            {
              index: 12,
              label: 'add_into_bom',
              chinese: '\u662f\u5426\u52a0\u5165bom\u8868\u5355'
            },
            {
              index: 13,
              label: 'otherParts',
              chinese: '\u5668\u4ef6\u5185\u90e8\u56fe\u5143\u6570\u636e'
            }
          ]
        }
      };
      function z4(e) {}
      function K4(e) {
        if (26 < e) throw 'int exceeed: ' + e;
        return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[e]
      }
      function U4(e, t) {
        var r = {}, n = M4[e], i = n.regex.exec(t);
        if (!i) throw 'error: ' + t;
        for (var o = 1; o <= n.format.length; o++) {
          var a, s = i[o], c = qt(n.format);
          try {
            for (c.s(); !(a = c.n()).done;) {
              var l = a.value;
              if (l.index == o) {
                r[l.label] = s;
                break
              }
            }
          } catch (e) {
            c.e(e)
          } finally {
            c.f()
          }
        }
        return r._type = e, r
      }
      function j4(e) {
        return U4('T', e)
      }
      function B4(e) {
        for (var t = M4.LIB, r = t.regex.exec(e), n = {}, i = 1;
             i <= t.format.length; i++) {
          var o, a = r[i], s = qt(t.format);
          try {
            for (s.s(); !(o = s.n()).done;) {
              var c = o.value;
              if (c.index == i) {
                if ('otherParts' == c.label) {
                  var l, u = qt(a.split('#@$'));
                  try {
                    for (u.s(); !(l = u.n()).done;) {
                      var d, h = l.value;
                      0 == h.indexOf('T~') &&
                          ('P' == (d = j4(h)).mark && (n.name = d.value))
                    }
                  } catch (e) {
                    u.e(e)
                  } finally {
                    u.f()
                  }
                } else
                  n[c.label] = a;
                break
              }
            }
          } catch (e) {
            s.e(e)
          } finally {
            s.f()
          }
        }
        if (!n.name) throw 'cannot find the name!';
        return n
      }
      function Y4(e) {
        return JSON.parse(JSON.stringify(e))
      }
      function H4(e, t) {
        if (4 != e.length) return null;
        var r, n = qt(t);
        try {
          for (n.s(); !(r = n.n()).done;) {
            var i = r.value, o = K4(i.ninefox.mapx) + K4(i.ninefox.mapy);
            if (e == 'NS' + o || e == 'NH' + o || e == 'ND' + o) return i
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        return null
      }
      function G4(e, t) {
        t = W4('diy_matrix', e, t = Y4(t));
        return t = W4('diy_holes', e, t)
      }
      function W4(e, t, r) {
        var n, i = qt(t);
        try {
          for (i.s(); !(n = i.n()).done;) {
            var o = n.value;
            o.ninefox = JSON.parse(o.profile)
          }
        } catch (e) {
          i.e(e)
        } finally {
          i.f()
        }
        var a, s = null, c = qt(r.schematics);
        try {
          for (c.s(); !(a = c.n()).done;) {
            var l = a.value;
            if (l.title == e) {
              s = l.dataStr.shape;
              break
            }
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (!s) throw 'can not find ' + e;
        var u, d = [], h = qt(s);
        try {
          for (h.s(); !(u = h.n()).done;) {
            var f = u.value;
            if (-1 == f.indexOf('frame_lib_'))
              if (0 == f.indexOf('LIB~')) {
                var p = B4(f);
                if (!p || !p.name) throw z4(f), 'can not trans LIB';
                null == H4(p.name, t) ? z4('ignore ' + p.name) : d.push(f)
              } else
                d.push(f);
            else
              d.push(f)
          }
        } catch (e) {
          h.e(e)
        } finally {
          h.f()
        }
        var g, r = r, y = qt(r.schematics);
        try {
          for (y.s(); !(g = y.n()).done;) {
            var m = g.value;
            if (m.title == e) {
              m.dataStr.shape = d;
              break
            }
          }
        } catch (e) {
          y.e(e)
        } finally {
          y.f()
        }
        return r
      }
      var Z4 = {main_sch_process: G4}, V4 = Yi, J4 = d, X4 = L, $4 = G0,
          q4 = N0, Q4 = J4(function() {
                     $4(1)
                   });
      V4({target: 'Object', stat: !0, forced: Q4, sham: !q4}, {
        getPrototypeOf: function(e) {
          return $4(X4(e))
        }
      });
      var eO = Yi, tO = BA;
      eO({target: 'Object', stat: !0}, {is: tO});
      var rO = 1, nO = 2, iO = 3, oO = 4, aO = 5, sO = 6, cO = 7;
      function lO(e) {
        return 3 & e
      }
      function uO(e) {
        return e >> 3 & 1
      }
      function dO(e) {
        return e >> 4 & 1
      }
      function hO(e) {
        return e >> 5 & 1
      }
      function fO(e) {
        return e >> 6 & 1
      }
      function pO(e) {
        return e >> 7 & 1
      }
      function gO(e) {
        return '[object Object]' === Object.prototype.toString.call(e) &&
            (null === (e = Object.getPrototypeOf(e)) ||
             e == Object.getPrototypeOf({}))
      }
      function yO(e, t) {
        if (8 <= e || e < 0) throw 'unexpected mapx ' + e;
        if (22 <= t || t < 0) throw 'unexpected mapy ' + t;
        var r = e | t << 3;
        if (255 < r || r < 0) throw 'intneral error ' + r;
        if (vO(r)) throw 'is nan ' + e + ', ' + t;
        return r
      }
      function mO(e) {
        if (e == nO) return 1;
        if (lO(e) != rO) throw 'shold type key ' + e;
        var t = 2;
        return uO(e) && (t += 2), dO(e) && (t += 2), hO(e) && (t += 1),
               fO(e) && (t += 1), pO(e) && (t += 1), t
      }
      function bO(e) {
        if (!e || !e.length) throw 'invalid data arr ' + e;
        var t, r = qt(e);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var n = t.value;
            if (isNaN(n)) throw 'nan found ' + e;
            if (255 < n || n < 0) throw 'invalid data foun: ' + e
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        var i = e[0];
        if (i == nO) {
          if (1 == e.length) return;
          throw 'array should len=1'
        }
        if (mO(i) != e.length) throw 'invalid data len ' + e
      }
      function vO(e) {
        return Object.is(e, NaN)
      }
      function _O(e) {
        var t = e, r = !1;
        t < 0 && (t = -t, r = !0);
        e = parseInt(255 & t), t = parseInt(t >> 8);
        return r && (t |= 128), [e, t]
      }
      function wO(e, t) {
        var r = !1, n = 0,
            n = 128 & t ? (r = !0, e + ((127 & t) << 8)) :
                          (r = !1, e + (t << 8));
        return r ? -n : n
      }
      function xO(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          for (var n = e[r], i = [], o = 0; o < n.length; o++)
            if (gO(n[o]) && 'p' in n[o]) {
              var a = JSON.parse(n[o].p);
              if ('KEY' == a.type) {
                var s = rO, c = [];
                if (!('mapx' in a && 'mapy' in a))
                  throw 'should provide mapx or y' + a;
                var l = yO(a.mapx, a.mapy);
                if (c.push(l),
                    'x' in n[o] &&
                        (s |= 1 << iO, l = _O(100 * n[o].x), c = c.concat(l)),
                    'y' in n[o] &&
                        (s |= 1 << oO, u = _O(100 * n[o].y), c = c.concat(u)),
                    'w' in n[o] &&
                        (s |= 1 << aO, c.push(parseInt(100 * n[o].w / 5))),
                    'h' in n[o] &&
                        (s |= 1 << sO, c.push(parseInt(100 * n[o].h / 5))),
                    !('hex' in a))
                  throw 'should provide hex ' + a;
                s |= 1 << cO;
                var u = parseInt(a.hex, 16);
                if (255 < u || u < 0 || vO(u)) throw 'invalid hexint ' + a.hex;
                c.push(u), c = [s].concat(c), i.push(c)
              }
            }
          i.length && i.push([nO]), t = t.concat(i)
        }
        var d, h = qt(t);
        try {
          for (h.s(); !(d = h.n()).done;) bO(d.value)
        } catch (e) {
          h.e(e)
        } finally {
          h.f()
        }
        return L5(t)
      }
      function kO(e) {
        for (var t = [], r = [], n = 0; n < e.length;) {
          var i, o, a, s, c, l, u, d = e[n], h = mO(d);
          d != nO ?
              (i = {}, o = {}, s = 1, c = e[n + s++],
               (a = {type: 'KEY'}).mapx = 7 & c, a.mapy = c >> 3,
               uO(d) && (l = e[n + s++], u = e[n + s++], i.x = wO(l, u) / 100),
               dO(d) && (l = e[n + s++], u = e[n + s++], i.y = wO(l, u) / 100),
               hO(d) && (i.w = e[n + s++], i.w = 5 * i.w / 100),
               fO(d) && (i.h = e[n + s++], i.h = 5 * i.h / 100),
               pO(d) && (a.hex = e[n + s++], a.hex = E5(a.hex)),
               o = JSON.stringify(a), i.p = o, r.push(i), r.push(''), n += h) :
              (t.push(R5(r)), r = [], n += h)
        }
        return t
      }
      var CO = {kle_to_compact_data: xO, compact_data_to_kle: kO};
      function SO() {
        return 'b'
      }
      function EO(e) {
        var t = localStorage.getItem('ninefox-tms'), r = null;
        t && (r = JSON.parse(t).tms);
        t = P5();
        (r ? t - r : 99999999) < 6e5 ||
            (localStorage.setItem(
                 'ninefox-tms', JSON.stringify({last_tms: r, tms: t})),
             e({
               method: 'POST',
               url: 'https://nine-fox.com/v1/stat/add',
               data: {href: window.location.href, lang: F5(), mode: SO()},
               cache: !1
             }))
      }
      var AO = Yi, OO = Rf.start, LO = zf, IO = LO('trimStart'),
          TO = IO ? function() {
            return OO(this)
          } : ''.trimStart;
      AO({target: 'String', proto: !0, name: 'trimStart', forced: IO},
         {trimStart: TO, trimLeft: TO});
      var FO = Yi, RO = Rf.end, PO = zf, NO = PO('trimEnd'),
          DO = NO ? function() {
            return RO(this)
          } : ''.trimEnd;
      function MO(e, t, r, n, i, o) {
        this.a = e || 1, this.b = t || 0, this.c = r || 0, this.d = n || 1,
        this.e = i || 0, this.f = o || 0
      }
      function zO(e, t, r) {
        return void 0 === r || 0 == +r ?
            Math[e](t) :
            (t = +t, r = +r,
             isNaN(t) || 'number' != typeof r || r % 1 != 0 ?
                 NaN :
                 (t = t.toString().split('e'),
                  +((t = (t = Math[e](+(t[0] + 'e' + (t[1] ? +t[1] - r : -r))))
                             .toString()
                             .split('e'))[0] +
                    'e' + (t[1] ? +t[1] + r : r))))
      }
      FO({target: 'String', proto: !0, name: 'trimEnd', forced: NO},
         {trimEnd: DO, trimRight: DO}),
          String.prototype.format ||
          (String.prototype.format =
               function() {
                 var r = arguments;
                 return this.replace(/\{(\d+)\}/g, function(e, t) {
                   return void 0 !== r[t] ? r[t] : e
                 })
               }),
          String.prototype.trimStart ||
          (String.prototype.trimStart =
               function() {
                 return this.replace(/^\s\s*/, '')
               }),
          String.prototype.trimEnd ||
          (String.prototype.trimEnd =
               function() {
                 return this.replace(/\s\s*$/, '')
               }),
          String.prototype.trim ||
          (String.prototype.trim =
               function() {
                 this.trimStart().trimEnd()
               }),
          MO.prototype.mult =
              function(e) {
            return new MO(
                this.a * e.a + this.c * e.b, this.b * e.a + this.d * e.b,
                this.a * e.c + this.c * e.d, this.b * e.c + this.d * e.d,
                this.a * e.e + this.c * e.f + this.e,
                this.b * e.e + this.d * e.f + this.f)
          },
          MO.prototype.transformPt =
              function(e) {
            return {
              x: this.a * e.x + this.c * e.y + this.e,
                  y: this.b * e.x + this.d * e.y + this.f
            }
          },
          Math.Matrix =
              function(e, t, r, n, i, o) {
            return new MO(e, t, r, n, i, o)
          },
          Math.transMatrix =
              function(e, t) {
            return new MO(1, 0, 0, 1, e, t)
          },
          Math.rotMatrix =
              function(e) {
            var t = e * Math.PI / 180, e = Math.cos(t), t = Math.sin(t);
            return new MO(e, t, -t, e, 0, 0)
          },
          Math.round10 ||
          (Math.round10 =
               function(e, t) {
                 return zO('round', e, t)
               }),
          Math.floor10 ||
          (Math.floor10 =
               function(e, t) {
                 return zO('floor', e, t)
               }),
          Math.ceil10 ||
          (Math.ceil10 =
               function(e, t) {
                 return zO('ceil', e, t)
               }),
          Array.prototype.last ||
          (Array.prototype.last =
               function() {
                 return this[this.length - 1]
               }),
          Array.prototype.remove =
              function() {
            for (var e, t, r = arguments, n = r.length; n && this.length;)
              for (e = r[--n]; - 1 !== (t = this.indexOf(e));)
                this.splice(t, 1);
            return this
          },
          'undefined' == typeof HTMLCanvasElement ||
          HTMLCanvasElement.prototype.toBlob ||
          Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function(e, t, r) {
              for (var n = atob(this.toDataURL(t, r).split(',')[1]),
                       i = n.length, o = new Uint8Array(i), a = 0;
                   a < i; a++)
                o[a] = n.charCodeAt(a);
              e(new Blob([o], {type: t || 'image/png'}))
            }
          });
      var KO =
              function() {
        var e =
                function(e, t, r, n) {
          for (r = r || {}, n = e.length; n--; r[e[n]] = t)
            ;
          return r
        },
            t = [1, 12], r = [1, 13], n = [1, 9], i = [1, 10], o = [1, 11],
            a = [1, 14], s = [1, 15], c = [1, 19, 23, 25], l = [1, 20],
            u = [1, 21], d = [19, 23], h = [23, 25], f = {
              trace: function() {},
              yy: {},
              symbols_: {
                error: 2,
                JSONString: 3,
                STRING: 4,
                JSONIdentifier: 5,
                IDENTIFIER: 6,
                JSONNumber: 7,
                NUMBER: 8,
                JSONNullLiteral: 9,
                NULL: 10,
                JSONBooleanLiteral: 11,
                TRUE: 12,
                FALSE: 13,
                JSONText: 14,
                JSONValue: 15,
                JSONObject: 16,
                JSONArray: 17,
                '{': 18,
                '}': 19,
                JSONMemberList: 20,
                JSONMember: 21,
                ':': 22,
                ',': 23,
                '[': 24,
                ']': 25,
                JSONElementList: 26,
                JSONArrayValue: 27,
                $accept: 0,
                $end: 1
              },
              terminals_: {
                2: 'error',
                4: 'STRING',
                6: 'IDENTIFIER',
                8: 'NUMBER',
                10: 'NULL',
                12: 'TRUE',
                13: 'FALSE',
                18: '{',
                19: '}',
                22: ':',
                23: ',',
                24: '[',
                25: ']'
              },
              productions_: [
                0,       [3, 1],  [5, 1],  [5, 1],  [7, 1],  [9, 1],  [11, 1],
                [11, 1], [14, 1], [15, 1], [15, 1], [15, 1], [15, 1], [15, 1],
                [15, 1], [16, 2], [16, 3], [21, 3], [20, 1], [20, 3], [17, 2],
                [17, 3], [27, 1], [27, 0], [26, 1], [26, 3]
              ],
              performAction: function(e, t, r, n, i, o, a) {
                var s = o.length - 1;
                switch (i) {
                  case 1:
                  case 2:
                  case 3:
                    this.$ = e;
                    break;
                  case 4:
                    this.$ = Number(e);
                    break;
                  case 5:
                    this.$ = null;
                    break;
                  case 6:
                    this.$ = !0;
                    break;
                  case 7:
                    this.$ = !1;
                    break;
                  case 8:
                    return this.$ = o[s];
                  case 9:
                  case 10:
                  case 11:
                  case 12:
                  case 13:
                  case 14:
                  case 22:
                    this.$ = o[s];
                    break;
                  case 15:
                    this.$ = {};
                    break;
                  case 16:
                  case 21:
                    this.$ = o[s - 1];
                    break;
                  case 17:
                    this.$ = [o[s - 2], o[s]];
                    break;
                  case 18:
                    this.$ = {}, this.$[o[s][0]] = o[s][1];
                    break;
                  case 19:
                    this.$ = o[s - 2], o[s - 2][o[s][0]] = o[s][1];
                    break;
                  case 20:
                    this.$ = [];
                    break;
                  case 23:
                    this.$ = void 0;
                    break;
                  case 24:
                    this.$ = [o[s]];
                    break;
                  case 25:
                    this.$ = o[s - 2], o[s - 2].push(o[s])
                }
              },
              table: [
                {
                  3: 5,
                  4: t,
                  7: 6,
                  8: r,
                  9: 3,
                  10: n,
                  11: 4,
                  12: i,
                  13: o,
                  14: 1,
                  15: 2,
                  16: 7,
                  17: 8,
                  18: a,
                  24: s
                },
                {1: [3]},
                {1: [2, 8]},
                e(c, [2, 9]),
                e(c, [2, 10]),
                e(c, [2, 11]),
                e(c, [2, 12]),
                e(c, [2, 13]),
                e(c, [2, 14]),
                e(c, [2, 5]),
                e(c, [2, 6]),
                e(c, [2, 7]),
                e(c, [2, 1]),
                e(c, [2, 4]),
                {4: l, 5: 19, 6: u, 19: [1, 16], 20: 17, 21: 18},
                {
                  3: 5,
                  4: t,
                  7: 6,
                  8: r,
                  9: 3,
                  10: n,
                  11: 4,
                  12: i,
                  13: o,
                  15: 24,
                  16: 7,
                  17: 8,
                  18: a,
                  24: s,
                  25: [1, 22],
                  26: 23
                },
                e(c, [2, 15]),
                {19: [1, 25], 23: [1, 26]},
                e(d, [2, 18]),
                {22: [1, 27]},
                {22: [2, 2]},
                {22: [2, 3]},
                e(c, [2, 20]),
                {23: [1, 29], 25: [1, 28]},
                e(h, [2, 24]),
                e(c, [2, 16]),
                {4: l, 5: 19, 6: u, 21: 30},
                {
                  3: 5,
                  4: t,
                  7: 6,
                  8: r,
                  9: 3,
                  10: n,
                  11: 4,
                  12: i,
                  13: o,
                  15: 31,
                  16: 7,
                  17: 8,
                  18: a,
                  24: s
                },
                e(c, [2, 21]),
                e(h, [2, 23], {
                  9: 3,
                  11: 4,
                  3: 5,
                  7: 6,
                  16: 7,
                  17: 8,
                  27: 32,
                  15: 33,
                  4: t,
                  8: r,
                  10: n,
                  12: i,
                  13: o,
                  18: a,
                  24: s
                }),
                e(d, [2, 19]),
                e(d, [2, 17]),
                e(h, [2, 25]),
                e(h, [2, 22])
              ],
              defaultActions: {2: [2, 8], 20: [2, 2], 21: [2, 3]},
              parseError: function(e, t) {
                if (!t.recoverable) {
                  var r = new Error(e);
                  throw r.hash = t, r
                }
                this.trace(e)
              },
              parse: function(e) {
                var t, r = this, n = [0], i = [null], o = [], a = this.table,
                       s = '', c = 0, l = 0, u = 1,
                       d = o.slice.call(arguments, 1),
                       h = Object.create(this.lexer), f = {yy: {}};
                for (t in this.yy)
                  Object.prototype.hasOwnProperty.call(this.yy, t) &&
                      (f.yy[t] = this.yy[t]);
                h.setInput(e, f.yy), f.yy.lexer = h, f.yy.parser = this,
                                     void 0 === h.yylloc && (h.yylloc = {});
                var p = h.yylloc;
                o.push(p);
                var g = h.options && h.options.ranges;
                'function' == typeof f.yy.parseError ?
                    this.parseError = f.yy.parseError :
                    this.parseError = Object.getPrototypeOf(this).parseError;
                for (var y, m, b, v, _, w, x, k = {};;) {
                  if (m = n[n.length - 1],
                      void 0 ===
                              (b = this.defaultActions[m] ||
                                   (null == y &&
                                        (x = void 0,
                                         y = x = 'number' !=
                                                     typeof (
                                                         x = h.lex() || u) &&
                                                 r.symbols_[x] ||
                                             x),
                                    a[m] && a[m][y])) ||
                          !b.length || !b[0]) {
                    var C = '', S = [];
                    for (_ in a[m])
                      this.terminals_[_] && 2 < _ &&
                          S.push('\'' + this.terminals_[_] + '\'');
                    C = h.showPosition ?
                        'Parse error on line ' + (c + 1) + ':\n' +
                            h.showPosition() + '\nExpecting ' + S.join(', ') +
                            ', got \'' + (this.terminals_[y] || y) + '\'' :
                        'Parse error on line ' + (c + 1) + ': Unexpected ' +
                            (y == u ? 'end of input' :
                                      '\'' + (this.terminals_[y] || y) + '\''),
                    this.parseError(C, {
                      text: h.match,
                      token: this.terminals_[y] || y,
                      line: h.yylineno,
                      loc: p,
                      expected: S
                    })
                  }
                  if (b[0] instanceof Array && 1 < b.length)
                    throw new Error(
                        'Parse Error: multiple actions possible at state: ' +
                        m + ', token: ' + y);
                  switch (b[0]) {
                    case 1:
                      n.push(y), i.push(h.yytext), o.push(h.yylloc),
                          n.push(b[1]), y = null, l = h.yyleng, s = h.yytext,
                                        c = h.yylineno, p = h.yylloc;
                      break;
                    case 2:
                      if (w = this.productions_[b[1]][1], k.$ = i[i.length - w],
                          k._$ = {
                            first_line: o[o.length - (w || 1)].first_line,
                            last_line: o[o.length - 1].last_line,
                            first_column: o[o.length - (w || 1)].first_column,
                            last_column: o[o.length - 1].last_column
                          },
                          g &&
                              (k._$.range =
                                   [
                                     o[o.length - (w || 1)].range[0],
                                     o[o.length - 1].range[1]
                                   ]),
                          void 0 !==
                              (v = this.performAction.apply(
                                   k, [s, l, c, f.yy, b[1], i, o].concat(d))))
                        return v;
                      w &&
                          (n = n.slice(0, -1 * w * 2), i = i.slice(0, -1 * w),
                           o = o.slice(0, -1 * w)),
                          n.push(this.productions_[b[1]][0]), i.push(k.$),
                          o.push(k._$), w = a[n[n.length - 2]][n[n.length - 1]],
                                        n.push(w);
                      break;
                    case 3:
                      return !0
                  }
                }
                return !0
              }
            },
            p = function() {
              var e = {
                EOF: 1,
                parseError: function(e, t) {
                  if (!this.yy.parser) throw new Error(e);
                  this.yy.parser.parseError(e, t)
                },
                setInput: function(e, t) {
                  return this.yy = t || this.yy || {}, this._input = e,
                         this._more = this._backtrack = this.done = !1,
                         this.yylineno = this.yyleng = 0,
                         this.yytext = this.matched = this.match = '',
                         this.conditionStack = ['INITIAL'], this.yylloc = {
                           first_line: 1,
                           first_column: 0,
                           last_line: 1,
                           last_column: 0
                         },
                         this.options.ranges && (this.yylloc.range = [0, 0]),
                         this.offset = 0, this
                },
                input: function() {
                  var e = this._input[0];
                  return this.yytext += e, this.yyleng++, this.offset++,
                         this.match += e, this.matched += e,
                         e.match(/(?:\r\n?|\n).*/g) ?
                             (this.yylineno++, this.yylloc.last_line++) :
                             this.yylloc.last_column++,
                         this.options.ranges && this.yylloc.range[1]++,
                         this._input = this._input.slice(1), e
                },
                unput: function(e) {
                  var t = e.length, r = e.split(/(?:\r\n?|\n)/g);
                  this._input = e + this._input,
                  this.yytext = this.yytext.substr(0, this.yytext.length - t),
                  this.offset -= t;
                  var n = this.match.split(/(?:\r\n?|\n)/g);
                  this.match = this.match.substr(0, this.match.length - 1),
                  this.matched =
                      this.matched.substr(0, this.matched.length - 1),
                  r.length - 1 && (this.yylineno -= r.length - 1);
                  e = this.yylloc.range;
                  return this.yylloc = {
                    first_line: this.yylloc.first_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.first_column,
                    last_column: r ?
                        (r.length === n.length ? this.yylloc.first_column : 0) +
                            n[n.length - r.length].length - r[0].length :
                        this.yylloc.first_column - t
                  },
                         this.options.ranges &&
                             (this.yylloc.range =
                                  [e[0], e[0] + this.yyleng - t]),
                         this.yyleng = this.yytext.length, this
                },
                more: function() {
                  return this._more = !0, this
                },
                reject: function() {
                  return this.options.backtrack_lexer ?
                      (this._backtrack = !0, this) :
                      this.parseError(
                          'Lexical error on line ' + (this.yylineno + 1) +
                              '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' +
                              this.showPosition(),
                          {text: '', token: null, line: this.yylineno})
                },
                less: function(e) {
                  this.unput(this.match.slice(e))
                },
                pastInput: function() {
                  var e = this.matched.substr(
                      0, this.matched.length - this.match.length);
                  return (20 < e.length ? '...' : '') +
                      e.substr(-20).replace(/\n/g, '')
                },
                upcomingInput: function() {
                  var e = this.match;
                  return e.length < 20 &&
                             (e += this._input.substr(0, 20 - e.length)),
                         (e.substr(0, 20) + (20 < e.length ? '...' : ''))
                             .replace(/\n/g, '')
                },
                showPosition: function() {
                  var e = this.pastInput(),
                      t = new Array(e.length + 1).join('-');
                  return e + this.upcomingInput() + '\n' + t + '^'
                },
                test_match: function(e, t) {
                  var r, n;
                  if (this.options.backtrack_lexer &&
                          (n = {
                            yylineno: this.yylineno,
                            yylloc: {
                              first_line: this.yylloc.first_line,
                              last_line: this.last_line,
                              first_column: this.yylloc.first_column,
                              last_column: this.yylloc.last_column
                            },
                            yytext: this.yytext,
                            match: this.match,
                            matches: this.matches,
                            matched: this.matched,
                            yyleng: this.yyleng,
                            offset: this.offset,
                            _more: this._more,
                            _input: this._input,
                            yy: this.yy,
                            conditionStack: this.conditionStack.slice(0),
                            done: this.done
                          },
                           this.options.ranges &&
                               (n.yylloc.range = this.yylloc.range.slice(0))),
                      (r = e[0].match(/(?:\r\n?|\n).*/g)) &&
                          (this.yylineno += r.length),
                      this.yylloc = {
                        first_line: this.yylloc.last_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.last_column,
                        last_column: r ? r[r.length - 1].length -
                                r[r.length - 1].match(/\r?\n?/)[0].length :
                                         this.yylloc.last_column + e[0].length
                      },
                      this.yytext += e[0], this.match += e[0], this.matches = e,
                      this.yyleng = this.yytext.length,
                      this.options.ranges &&
                          (this.yylloc.range =
                               [this.offset, this.offset += this.yyleng]),
                      this._more = !1, this._backtrack = !1,
                      this._input = this._input.slice(e[0].length),
                      this.matched += e[0],
                      t = this.performAction.call(
                          this, this.yy, this, t,
                          this.conditionStack[this.conditionStack.length - 1]),
                      this.done && this._input && (this.done = !1), t)
                    return t;
                  if (this._backtrack) {
                    for (var i in n) this[i] = n[i];
                    return !1
                  }
                  return !1
                },
                next: function() {
                  if (this.done) return this.EOF;
                  var e, t, r, n;
                  this._input || (this.done = !0),
                      this._more || (this.yytext = '', this.match = '');
                  for (var i = this._currentRules(), o = 0; o < i.length; o++)
                    if ((r = this._input.match(this.rules[i[o]])) &&
                        (!t || r[0].length > t[0].length))
                      if (t = r, n = o, this.options.backtrack_lexer) {
                        if (!1 !== (e = this.test_match(r, i[o]))) return e;
                        if (!this._backtrack) return !1;
                        t = !1
                      } else if (!this.options.flex)
                        break;
                  return t ?
                      !1 !== (e = this.test_match(t, i[n])) && e :
                      '' === this._input ?
                      this.EOF :
                      this.parseError(
                          'Lexical error on line ' + (this.yylineno + 1) +
                              '. Unrecognized text.\n' + this.showPosition(),
                          {text: '', token: null, line: this.yylineno})
                },
                lex: function() {
                  var e = this.next();
                  return e || this.lex()
                },
                begin: function(e) {
                  this.conditionStack.push(e)
                },
                popState: function() {
                  return 0 < this.conditionStack.length - 1 ?
                      this.conditionStack.pop() :
                      this.conditionStack[0]
                },
                _currentRules: function() {
                  return (this.conditionStack.length &&
                                  this.conditionStack
                                      [this.conditionStack.length - 1] ?
                              this.conditions[this.conditionStack
                                                  [this.conditionStack.length -
                                                   1]] :
                              this.conditions.INITIAL)
                      .rules
                },
                topState: function(e) {
                  return 0 <= (e = this.conditionStack.length - 1 -
                                   Math.abs(e || 0)) ?
                      this.conditionStack[e] :
                      'INITIAL'
                },
                pushState: function(e) {
                  this.begin(e)
                },
                stateStackSize: function() {
                  return this.conditionStack.length
                },
                options: {},
                performAction: function e(t, r, n, i) {
                  switch (n) {
                    case 0:
                      break;
                    case 1:
                      return 8;
                    case 2:
                      return r.yytext = eval(r.yytext), 4;
                    case 3:
                      return 18;
                    case 4:
                      return 19;
                    case 5:
                      return 24;
                    case 6:
                      return 25;
                    case 7:
                      return 23;
                    case 8:
                      return 22;
                    case 9:
                      return 12;
                    case 10:
                      return 13;
                    case 11:
                      return 10;
                    case 12:
                      return 6
                  }
                },
                rules: [
                  /^(?:\s+)/,
                  /^(?:(-?(?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))?((?:[eE][-+]?[0-9]+))?\b)/,
                  /^(?:"(?:(\\)["bfnrt\/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)]|\(|\))*")/,
                  /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/,
                  /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/,
                  /^(?:[_a-zA-Z][_a-zA-Z0-9]*)/
                ],
                conditions: {
                  INITIAL: {
                    rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    inclusive: !0
                  }
                }
              };
              return e
            }();
        function g() {
          this.yy = {}
        }
        return f.lexer = p, g.prototype = f, f.Parser = g, new g
      }(),
          UO = Yi, jO = v, BO = Ze, YO = L, HO = $n, GO = lo, WO = d, ZO = _2,
          VO = Yf, JO = k2, XO = S2, $O = Ae, qO = O2, QO = [],
          eL = jO(QO.sort), tL = jO(QO.push), rL = WO(function() {
                                                QO.sort(void 0)
                                              }),
          nL = WO(function() {
            QO.sort(null)
          }),
          iL = VO('sort'),
          oL = !WO(function() {
            if ($O) return $O < 70;
            if (!(JO && 3 < JO)) {
              if (XO) return !0;
              if (qO) return qO < 603;
              for (var e, t, r, n = '', i = 65; i < 76; i++) {
                switch (e = String.fromCharCode(i), i) {
                  case 66:
                  case 69:
                  case 70:
                  case 72:
                    t = 3;
                    break;
                  case 68:
                  case 71:
                    t = 4;
                    break;
                  default:
                    t = 2
                }
                for (r = 0; r < 47; r++) QO.push({k: e + r, v: t})
              }
              for (QO.sort(function(e, t) {
                     return t.v - e.v
                   }),
                   r = 0;
                   r < QO.length; r++)
                e = QO[r].k.charAt(0), n.charAt(n.length - 1) !== e && (n += e);
              return 'DGBEFHACIJK' !== n
            }
          }),
          aL = rL || !nL || !iL || !oL, sL = function(r) {
            return function(e, t) {
              return void 0 === t ?
                  -1 :
                  void 0 === e ?
                  1 :
                  void 0 !== r ? +r(e, t) || 0 : GO(e) > GO(t) ? 1 : -1
            }
          };
      UO({target: 'Array', proto: !0, forced: aL}, {
        sort: function(e) {
          void 0 !== e && BO(e);
          var t = YO(this);
          if (oL) return void 0 === e ? eL(t) : eL(t, e);
          for (var r, n = [], i = HO(t), o = 0; o < i; o++)
            o in t && tL(n, t[o]);
          for (ZO(n, sL(e)), r = n.length, o = 0; o < r;) t[o] = n[o++];
          for (; o < i;) delete t[o++];
          return t
        }
      });
      var cL = 'undefined' != typeof exports ? exports : {};
      !function() {
        function h(e) {
          if ('object' !== _(e)) return e;
          if (e instanceof Array) {
            for (var t = [], r = 0; r < e.length; r++) t[r] = h(e[r]);
            return t
          }
          var n, t = {};
          for (n in e) t[n] = h(e[n]);
          return t
        }
        function f(e) {
          for (var t in e) return;
          return 1
        }
        function p(e, t) {
          for (var r in e = e || {}, t)
            'object' === _(t[r]) ? e[r] = p(e[r], t[r]) : e[r] = t[r];
          return e
        }
        cL.base_href = 'http://www.keyboard-layout-editor.com';
        var g =
                [
                  [0, 6, 2, 8, 9, 11, 3, 5, 1, 4, 7, 10],
                  [1, 7, -1, -1, 9, 11, 4, -1, -1, -1, -1, 10],
                  [3, -1, 5, -1, 9, 11, -1, -1, 4, -1, -1, 10],
                  [4, -1, -1, -1, 9, 11, -1, -1, -1, -1, -1, 10],
                  [0, 6, 2, 8, 10, -1, 3, 5, 1, 4, 7, -1],
                  [1, 7, -1, -1, 10, -1, 4, -1, -1, -1, -1, -1],
                  [3, -1, 5, -1, 10, -1, -1, -1, 4, -1, -1, -1],
                  [4, -1, -1, -1, 10, -1, -1, -1, -1, -1, -1, -1]
                ],
            y = [
              [1, 2, 3, 5, 6, 7], [2, 3, 6, 7], [1, 2, 3, 5, 6, 7],
              [1, 3, 5, 7], [], [1, 3, 5, 7], [1, 2, 3, 5, 6, 7], [2, 3, 6, 7],
              [1, 2, 3, 5, 6, 7], [4, 5, 6, 7], [], [4, 5, 6, 7]
            ];
        cL.toJsonL = function(e) {
          var t, r = [];
          if (e instanceof Array)
            return e.forEach(function(e) {
              r.push(cL.toJsonL(e))
            }),
                   '[' + r.join(',') + ']';
          if ('object' !== _(e))
            return 'number' == typeof e ? Math.round10(e, -4) :
                                          angular.toJson(e);
          for (t in e)
            e.hasOwnProperty(t) && r.push('"' + t + '":' + cL.toJsonL(e[t]));
          return '{' + r.join(',') + '}'
        }, cL.fromJsonL = function(e) {
          return jsonl.parse(e)
        };
        var e = {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          width: 1,
          height: 1,
          width2: 1,
          height2: 1,
          rotation_angle: 0,
          rotation_x: 0,
          rotation_y: 0,
          labels: [],
          textColor: [],
          textSize: [],
          default: {textColor: '#ffffff', textSize: 3},
          color: '#5b5b69',
          nub:
              !(cL.sortKeys =
                    function(e) {
                      e.sort(function(e, t) {
                        return (e.rotation_angle + 360) % 360 -
                            (t.rotation_angle + 360) % 360 ||
                            e.rotation_x - t.rotation_x ||
                            e.rotation_y - t.rotation_y || e.y - t.y ||
                            e.x - t.x
                      })
                    }),
          ghost: !1,
          stepped: !1,
          decal: !1,
          sm: '',
          sb: '',
          st: '',
          profile:
              '{"mapx": 5, "mapy": 4, "hex": "4B", "type": "KEY", "profile": "r2", "sa": "r2"}'
        },
            i = {
              backcolor: 'none',
              name: '',
              author: '',
              notes: '',
              background: void 0,
              radii: '',
              switchMount: '',
              switchBrand: '',
              switchType: ''
            };
        function m(e, t, r, n) {
          return r !== n && (e[t] = r), r
        }
        function b(e, t) {
          throw 'Error: ' + e + (t ? ':\n  ' + cL.toJsonL(t) : '')
        }
        function v(e, t, r) {
          for (var n = [], i = r ? 1 : 0; i < e.length; ++i) n[g[t][i]] = e[i];
          return n
        }
        cL.defaultKeyProps = function() {
          return h(e)
        }, cL.defaultMetaData = function() {
          return h(i)
        }, cL.serialize = function(e) {
          var t = e.keys, s = [], c = [], l = cL.defaultKeyProps();
          l.textColor = l.default.textColor, l.align = 4;
          var r, u = {r: 0, rx: 0, ry: 0}, n = {};
          for (r in e.meta) m(n, r, e.meta[r], i[r]);
          f(n) || s.push(n);
          var d = !0;
          return l.y--, cL.sortKeys(t), t.forEach(function(e) {
            var t = {},
                r =
                    function(e, t) {
                  for (var r = [7, 5, 6, 4, 3, 1, 2, 0], n = 0;
                       n < e.labels.length; ++n)
                    e.labels[n] && r.remove.apply(r, y[n]);
                  for (var i = {
                         align: r[0],
                         labels:
                             ['', '', '', '', '', '', '', '', '', '', '', ''],
                         textColor:
                             ['', '', '', '', '', '', '', '', '', '', '', ''],
                         textSize: []
                       },
                           n = 0;
                       n < 12; ++n) {
                    var o = g[i.align].indexOf(n);
                    0 <= o &&
                        (e.labels[n] && (i.labels[o] = e.labels[n]),
                         e.textColor[n] && (i.textColor[o] = e.textColor[n]),
                         e.textSize[n] && (i.textSize[o] = e.textSize[n]))
                  }
                  for (n = 0; n < i.textSize.length; ++n)
                    i.labels[n] || (i.textSize[n] = t.textSize[n]),
                        i.textSize[n] && i.textSize[n] != e.default.textSize ||
                        (i.textSize[n] = 0);
                  return i
                }(e, l),
                n = e.rotation_angle != u.r || e.rotation_x != u.rx ||
                e.rotation_y != u.ry,
                i = e.y !== l.y;
            if (0 < c.length && (i || n) && (s.push(c), c = [], d = !0),
                d &&
                    (l.y++,
                     e.rotation_y == u.ry && e.rotation_x == u.rx ||
                         (l.y = e.rotation_y),
                     l.x = e.rotation_x, u.r = e.rotation_angle,
                     u.rx = e.rotation_x, u.ry = e.rotation_y, d = !1),
                l.rotation_angle =
                    m(t, 'r', e.rotation_angle, l.rotation_angle),
                l.rotation_x = m(t, 'rx', e.rotation_x, l.rotation_x),
                l.rotation_y = m(t, 'ry', e.rotation_y, l.rotation_y),
                l.y += m(t, 'y', e.y - l.y, 0),
                l.x += m(t, 'x', e.x - l.x, 0) + e.width,
                l.color = m(t, 'c', e.color, l.color), r.textColor[0])
              for (var o = 2; o < 12; ++o)
                r.textColor[o] || r.textColor[o] === r.textColor[0] ||
                    (r.textColor[o], e.default.textColor);
            else
              r.textColor[0] = e.default.textColor;
            if (l.textColor =
                    m(t, 't', r.textColor.join('\n').trimEnd(), l.textColor),
                l.ghost = m(t, 'g', e.ghost, l.ghost),
                l.profile = m(t, 'p', e.profile, l.profile),
                l.sm = m(t, 'sm', e.sm, l.sm), l.sb = m(t, 'sb', e.sb, l.sb),
                l.st = m(t, 'st', e.st, l.st),
                l.align = m(t, 'a', r.align, l.align),
                l.default.textSize =
                    m(t, 'f', e.default.textSize, l.default.textSize),
                t.f && (l.textSize = []), !function(e, t, r) {
                  'number' == typeof e && (e = [e]);
                  for (var n = 0; n < 12; ++n)
                    if (r[n] && (!!e[n] != !!t[n] || e[n] && e[n] !== t[n]))
                      return;
                  return 1
                }(l.textSize, r.textSize, r.labels))
              if (0 == r.textSize.length)
                m(t, 'f', e.default.textSize, -1);
              else {
                for (var a = !r.textSize[0], o = 2; o < r.textSize.length && a;
                     ++o)
                  a = r.textSize[o] == r.textSize[1];
                a ? (n = r.textSize[1], l.f2 = m(t, 'f2', n, -1),
                     l.textSize = [0, n, n, n, n, n, n, n, n, n, n, n]) :
                    (l.f2 = void 0, l.textSize = m(t, 'fa', r.textSize, []))
              }
            m(t, 'w', e.width, 1), m(t, 'h', e.height, 1),
                m(t, 'w2', e.width2, e.width), m(t, 'h2', e.height2, e.height),
                m(t, 'x2', e.x2, 0), m(t, 'y2', e.y2, 0),
                m(t, 'n', e.nub || !1, !1), m(t, 'l', e.stepped || !1, !1),
                m(t, 'd', e.decal || !1, !1), f(t) || c.push(t),
                l.labels = r.labels, c.push(r.labels.join('\n').trimEnd())
          }),
                 0 < c.length && s.push(c), s
        }, cL.deserialize = function(e) {
          for (var t = cL.defaultKeyProps(), r = cL.defaultMetaData(), n = [],
                   i = {x: 0, y: 0}, o = 4, a = 0;
               a < e.length; ++a) {
            if (e[a] instanceof Array) {
              for (var s = 0; s < e[a].length; ++s) {
                var c, l = e[a][s];
                if ('string' == typeof l) {
                  var u = h(t);
                  u.width2 = 0 === u.width2 ? t.width : t.width2,
                  u.height2 = 0 === u.height2 ? t.height : t.height2,
                  u.labels = v(l.split('\n'), o), u.textSize = v(u.textSize, o);
                  for (var d = 0; d < 12; ++d)
                    u.labels[d] ||
                        (u.textSize[d] = void 0, u.textColor[d] = void 0),
                        u.textSize[d] == u.default.textSize &&
                        (u.textSize[d] = void 0),
                        u.textColor[d] == u.default.textColor &&
                        (u.textColor[d] = void 0);
                  n.push(u), t.x += t.width,
                      t.width = t.height = 1,
                      t.x2 = t.y2 = t.width2 = t.height2 = 0,
                      t.nub = t.stepped = t.decal = !1
                } else {
                  if (null != l.r &&
                          (0 != s &&
                               b('\'r\' can only be used on the first key in a row',
                                 l),
                           t.rotation_angle = l.r),
                      null != l.rx &&
                          (0 != s &&
                               b('\'rx\' can only be used on the first key in a row',
                                 l),
                           t.rotation_x = i.x = l.rx, p(t, i)),
                      null != l.ry &&
                          (0 != s &&
                               b('ry\' can only be used on the first key in a row',
                                 l),
                           t.rotation_y = i.y = l.ry, p(t, i)),
                      null != l.a && (o = l.a),
                      l.f && (t.default.textSize = l.f, t.textSize = []), l.f2)
                    for (d = 1; d < 12; ++d) t.textSize[d] = l.f2;
                  l.fa && (t.textSize = l.fa), l.p && (t.profile = l.p),
                      l.c && (t.color = l.c),
                      l.t &&
                      (c = l.t.split('\n'), t.default.textColor = c[0],
                       t.textColor = v(c, o)),
                      l.x && (t.x += l.x), l.y && (t.y += l.y),
                      l.w && (t.width = t.width2 = l.w),
                      l.h && (t.height = t.height2 = l.h),
                      l.x2 && (t.x2 = l.x2), l.y2 && (t.y2 = l.y2),
                      l.w2 && (t.width2 = l.w2), l.h2 && (t.height2 = l.h2),
                      l.n && (t.nub = l.n), l.l && (t.stepped = l.l),
                      l.d && (t.decal = l.d), null != l.g && (t.ghost = l.g),
                      l.sm && (t.sm = l.sm), l.sb && (t.sb = l.sb),
                      l.st && (t.st = l.st)
                }
              }
              t.y++
            } else if ('object' === _(e[a])) {
              if (0 != a)
                throw 'Error: keyboard metadata must the be first element:\n  ' +
                    cL.toJsonL(e[a]);
              p(r, e[a])
            }
            t.x = t.rotation_x
          }
          return {
            meta: r, keys: n
          }
        }
      }();
      var lL = function() {
        function n(e, t, r) {
          f(this, n), this.name = e, this.description = t, this.elements = r
        }
        return s(n,
                 [
                   {
                     key: 'toDxfString',
                     value: function() {
                       var e = '0\nLTYPE\n';
                       e += '72\n65\n', e += '70\n64\n',
                           e += '2\n'.concat(this.name, '\n'),
                           e += '3\n'.concat(this.description, '\n'),
                           e += '73\n'.concat(this.elements.length, '\n'),
                           e += '40\n'.concat(this.getElementsSum(), '\n');
                       for (var t = 0; t < this.elements.length; ++t)
                         e += '49\n'.concat(this.elements[t], '\n');
                       return e
                     }
                   },
                   {
                     key: 'getElementsSum',
                     value: function() {
                       for (var e = 0, t = 0; t < this.elements.length; ++t)
                         e += Math.abs(this.elements[t]);
                       return e
                     }
                   }
                 ]),
               n
      }(), uL = function() {
        function n(e, t, r) {
          f(this, n), this.name = e, this.colorNumber = t,
                      this.lineTypeName = r, this.shapes = []
        }
        return s(n,
                 [
                   {
                     key: 'toDxfString',
                     value: function() {
                       var e = '0\nLAYER\n';
                       return e += '70\n64\n',
                              e += '2\n'.concat(this.name, '\n'),
                              e += '62\n'.concat(this.colorNumber, '\n'),
                              e += '6\n'.concat(this.lineTypeName, '\n')
                     }
                   },
                   {
                     key: 'addShape',
                     value: function(e) {
                       this.shapes.push(e), e.layer = this
                     }
                   },
                   {
                     key: 'getShapes',
                     value: function() {
                       return this.shapes
                     }
                   },
                   {
                     key: 'shapesToDxf',
                     value: function() {
                       for (var e = '', t = 0; t < this.shapes.length; ++t)
                         e += this.shapes[t].toDxfString();
                       return e
                     }
                   }
                 ]),
               n
      }(), dL = function() {
        function i(e, t, r, n) {
          f(this, i), this.x1 = e, this.y1 = t, this.x2 = r, this.y2 = n
        }
        return s(i, [{
                   key: 'toDxfString',
                   value: function() {
                     var e = '0\nLINE\n';
                     return e += '8\n'.concat(this.layer.name, '\n'),
                            e += '10\n'.concat(this.x1, '\n20\n')
                                     .concat(this.y1, '\n30\n0\n'),
                            e += '11\n'.concat(this.x2, '\n21\n')
                                     .concat(this.y2, '\n31\n0\n')
                   }
                 }]),
               i
      }(), hL = function() {
        function o(e, t, r, n, i) {
          f(this, o), this.x1 = e, this.y1 = t, this.r = r, this.startAngle = n,
                      this.endAngle = i
        }
        return s(o, [{
                   key: 'toDxfString',
                   value: function() {
                     var e = '0\nARC\n';
                     return e += '8\n'.concat(this.layer.name, '\n'),
                            e += '10\n'.concat(this.x1, '\n20\n')
                                     .concat(this.y1, '\n30\n0\n'),
                            e += '40\n'.concat(this.r, '\n50\n')
                                     .concat(this.startAngle, '\n51\n')
                                     .concat(this.endAngle, '\n')
                   }
                 }]),
               o
      }(), fL = function() {
        function n(e, t, r) {
          f(this, n), this.x1 = e, this.y1 = t, this.r = r
        }
        return s(n, [{
                   key: 'toDxfString',
                   value: function() {
                     var e = '0\nCIRCLE\n';
                     return e += '8\n'.concat(this.layer.name, '\n'),
                            e += '10\n'.concat(this.x1, '\n20\n')
                                     .concat(this.y1, '\n30\n0\n'),
                            e += '40\n'.concat(this.r, '\n')
                   }
                 }]),
               n
      }(), pL = function() {
        function o(e, t, r, n, i) {
          f(this, o), this.x1 = e, this.y1 = t, this.height = r,
                      this.rotation = n, this.value = i
        }
        return s(o, [{
                   key: 'toDxfString',
                   value: function() {
                     var e = '0\nTEXT\n';
                     return e += '8\n'.concat(this.layer.name, '\n'),
                            e += '1\n'.concat(this.value, '\n'),
                            e += '10\n'.concat(this.x1, '\n20\n')
                                     .concat(this.y1, '\n30\n0\n'),
                            e += '40\n'.concat(this.height, '\n50\n')
                                     .concat(this.rotation, '\n')
                   }
                 }]),
               o
      }(), gL = function() {
        function t(e) {
          f(this, t), this.points = e
        }
        return s(t, [{
                   key: 'toDxfString',
                   value: function() {
                     var e = '0\nPOLYLINE\n';
                     e += '8\n'.concat(this.layer.name, '\n'),
                         e += '66\n1\n70\n0\n';
                     for (var t = 0; t < this.points.length; ++t)
                       e += '0\nVERTEX\n',
                           e += '8\n'.concat(this.layer.name, '\n'),
                           e += '70\n0\n',
                           e += '10\n'.concat(this.points[t][0], '\n20\n')
                                    .concat(this.points[t][1], '\n');
                     return e += '0\nSEQEND\n'
                   }
                 }]),
               t
      }(), yL = function() {
        function h(e, t, r, n, i, o, a, s, c, l, u, d) {
          f(this, h), this.x1 = e, this.y1 = t, this.z1 = r, this.x2 = n,
                      this.y2 = i, this.z2 = o, this.x3 = a, this.y3 = s,
                      this.z3 = c, this.x4 = l, this.y4 = u, this.z4 = d
        }
        return s(h, [{
                   key: 'toDxfString',
                   value: function() {
                     var e = '0\n3DFACE\n';
                     return e += '8\n'.concat(this.layer.name, '\n'),
                            e += '10\n'.concat(this.x1, '\n20\n')
                                     .concat(this.y1, '\n30\n')
                                     .concat(this.z1, '\n'),
                            e += '11\n'.concat(this.x2, '\n21\n')
                                     .concat(this.y2, '\n31\n')
                                     .concat(this.z2, '\n'),
                            e += '12\n'.concat(this.x3, '\n22\n')
                                     .concat(this.y3, '\n32\n')
                                     .concat(this.z3, '\n'),
                            e += '13\n'.concat(this.x4, '\n23\n')
                                     .concat(this.y4, '\n33\n')
                                     .concat(this.z4, '\n')
                   }
                 }]),
               h
      }(), mL = function() {
        function r() {
          f(this, r), this.layers = {}, this.activeLayer = null,
                      this.lineTypes = {};
          for (var e = 0; e < r.LINE_TYPES.length; ++e)
            this.addLineType(
                r.LINE_TYPES[e].name, r.LINE_TYPES[e].description,
                r.LINE_TYPES[e].elements);
          for (var t = 0; t < r.LAYERS.length; ++t)
            this.addLayer(
                r.LAYERS[t].name, r.LAYERS[t].colorNumber,
                r.LAYERS[t].lineTypeName);
          this.setActiveLayer('0')
        }
        return s(r,
                 [
                   {
                     key: 'addLineType',
                     value: function(e, t, r) {
                       return this.lineTypes[e] = new lL(e, t, r), this
                     }
                   },
                   {
                     key: 'addLayer',
                     value: function(e, t, r) {
                       return this.layers[e] = new uL(e, t, r), this
                     }
                   },
                   {
                     key: 'setActiveLayer',
                     value: function(e) {
                       return this.activeLayer = this.layers[e], this
                     }
                   },
                   {
                     key: 'drawLine',
                     value: function(e, t, r, n) {
                       return this.activeLayer.addShape(new dL(e, t, r, n)),
                              this
                     }
                   },
                   {
                     key: 'drawRect',
                     value: function(e, t, r, n) {
                       return this.activeLayer.addShape(new dL(e, t, r, t)),
                              this.activeLayer.addShape(new dL(e, n, r, n)),
                              this.activeLayer.addShape(new dL(e, t, e, n)),
                              this.activeLayer.addShape(new dL(r, t, r, n)),
                              this
                     }
                   },
                   {
                     key: 'drawArc',
                     value: function(e, t, r, n, i) {
                       return this.activeLayer.addShape(new hL(e, t, r, n, i)),
                              this
                     }
                   },
                   {
                     key: 'drawCircle',
                     value: function(e, t, r) {
                       return this.activeLayer.addShape(new fL(e, t, r)), this
                     }
                   },
                   {
                     key: 'drawText',
                     value: function(e, t, r, n, i) {
                       return this.activeLayer.addShape(new pL(e, t, r, n, i)),
                              this
                     }
                   },
                   {
                     key: 'drawPolyline',
                     value: function(e) {
                       return this.activeLayer.addShape(new gL(e)), this
                     }
                   },
                   {
                     key: 'drawFace',
                     value: function(e, t, r, n, i, o, a, s, c, l, u, d) {
                       return this.activeLayer.addShape(
                                  new yL(e, t, r, n, i, o, a, s, c, l, u, d)),
                              this
                     }
                   },
                   {
                     key: '_getDxfLtypeTable',
                     value: function() {
                       var e, t = '0\nTABLE\n';
                       for (e in t += '2\nLTYPE\n', this.lineTypes)
                         t += this.lineTypes[e].toDxfString();
                       return t += '0\nENDTAB\n'
                     }
                   },
                   {
                     key: '_getDxfLayerTable',
                     value: function() {
                       var e, t = '0\nTABLE\n';
                       for (e in t += '2\nLAYER\n', this.layers)
                         t += this.layers[e].toDxfString();
                       return t += '0\nENDTAB\n'
                     }
                   },
                   {
                     key: 'toDxfString',
                     value: function() {
                       var e, t = '';
                       for (e in t += '0\nSECTION\n', t += '2\nTABLES\n',
                            t += this._getDxfLtypeTable(),
                            t += this._getDxfLayerTable(), t += '0\nENDSEC\n',
                            t += '0\nSECTION\n', t += '2\nENTITIES\n',
                            this.layers)
                         t += this.layers[e].shapesToDxf();
                       return t += '0\nENDSEC\n', t += '0\nEOF'
                     }
                   }
                 ]),
               r
      }();
      mL.ACI = {
        LAYER: 0,
        RED: 1,
        YELLOW: 2,
        GREEN: 3,
        CYAN: 4,
        BLUE: 5,
        MAGENTA: 6,
        WHITE: 7
      },
      mL.LINE_TYPES =
          [
            {name: 'CONTINUOUS', description: '______', elements: []},
            {name: 'DASHED', description: '_ _ _ ', elements: [5, -5]},
            {name: 'DOTTED', description: '. . . ', elements: [0, -5]}
          ],
      mL.LAYERS =
          [{name: '0', colorNumber: mL.ACI.WHITE, lineTypeName: 'CONTINUOUS'}];
      var bL = Yi;
      bL({target: 'Number', stat: !0}, {EPSILON: Math.pow(2, -52)});
      var vL = Number.EPSILON;
      void 0 === vL && (vL = Math.pow(2, -52));
      var _L = vL * vL, wL = function(e, t) {
        return -vL < e && e < vL && -vL < t && t < vL ||
                (e - t) * (e - t) < _L * e * t ?
            0 :
            e < t ? -1 : 1
      }, xL = function(e, t) {
        if (e === t) return 0;
        var r = e.x, n = t.x;
        if (r <= -vL || vL <= r || n <= -vL || vL <= n) {
          var i = r - n;
          if (_L * r * n <= i * i) return r < n ? -1 : 1
        }
        if (r = e.y, n = t.y, r <= -vL || vL <= r || n <= -vL || vL <= n) {
          t = r - n;
          if (_L * r * n <= t * t) return r < n ? -1 : 1
        }
        return 0
      }, kL = function(e, t) {
        return e.x * t.y - e.y * t.x
      }, CL = function(e, t) {
        return e.x * t.x + e.y * t.y
      }, SL = function(e, t, r) {
        t = {x: t.x - e.x, y: t.y - e.y}, e = {x: r.x - e.x, y: r.y - e.y},
        e = kL(t, e);
        return wL(e, 0)
      }, EL = function(e) {
        return Math.sqrt(CL(e, e))
      }, AL = function(e, t, r) {
        t = {x: t.x - e.x, y: t.y - e.y}, e = {x: r.x - e.x, y: r.y - e.y};
        return kL(e, t) / EL(e) / EL(t)
      }, OL = function(e, t, r) {
        t = {x: t.x - e.x, y: t.y - e.y}, e = {x: r.x - e.x, y: r.y - e.y};
        return CL(e, t) / EL(e) / EL(t)
      }, LL = function(e, t, r) {
        return 0 === t.y ? null : {x: e.x + t.x / t.y * (r - e.y), y: r}
      }, IL = function(e, t, r) {
        return 0 === t.x ? null : {x: r, y: e.y + t.y / t.x * (r - e.x)}
      }, TL = function(e, t, r, n) {
        if (0 === t.x) return IL(r, n, e.x);
        if (0 === n.x) return IL(e, t, r.x);
        if (0 === t.y) return LL(r, n, e.y);
        if (0 === n.y) return LL(e, t, r.y);
        var i = kL(t, n);
        if (0 == i) return null;
        var o = {x: r.x - e.x, y: r.y - e.y}, a = kL(o, t) / i,
            i = kL(o, n) / i;
        return {
          x: (e.x + i * t.x + r.x + a * n.x) / 2,
              y: (e.y + i * t.y + r.y + a * n.y) / 2
        }
      }, FL = function(e) {
        return {
          x: -e.y, y: e.x
        }
      }, RL = function(e) {
        var t = [];
        if (!Array.isArray(e))
          throw new Error('Input is not a Polygon or MultiPolygon');
        for (var r = 0, n = e.length; r < n; r++) {
          if (!Array.isArray(e[r]) || 0 == e[r].length)
            throw new Error('Input is not a Polygon or MultiPolygon');
          t.push([]);
          for (var i = 0, o = e[r].length; i < o; i++) {
            if (!Array.isArray(e[r][i]) || 0 == e[r][i].length)
              throw new Error('Input is not a Polygon or MultiPolygon');
            if (Array.isArray(e[r][i][0])) {
              t[r].push([]);
              for (var a = 0, s = e[r][i].length; a < s; a++) {
                if (!Array.isArray(e[r][i][a]) || e[r][i][a].length < 2)
                  throw new Error('Input is not a Polygon or MultiPolygon');
                if (2 < e[r][i][a].length)
                  throw new Error(
                      'Input has more than two coordinates. Only 2-dimensional polygons supported.');
                t[r][i].push({x: e[r][i][a][0], y: e[r][i][a][1]})
              }
            } else {
              if (e[r][i].length < 2)
                throw new Error('Input is not a Polygon or MultiPolygon');
              if (2 < e[r][i].length)
                throw new Error(
                    'Input has more than two coordinates. Only 2-dimensional polygons supported.');
              t[r].push({x: e[r][i][0], y: e[r][i][1]})
            }
          }
        }
        return t
      }, PL = function(e) {
        if (Array.isArray(e)) {
          if (0 === e.length) return;
          if (Array.isArray(e[0])) {
            if (Array.isArray(e[0][0]) && 'number' == typeof e[0][0][0].x &&
                'number' == typeof e[0][0][0].y)
              return;
            if ('number' == typeof e[0][0].x && 'number' == typeof e[0][0].y)
              return void e.unshift(e.splice(0))
          }
        }
        throw new Error('Unrecognized input - not a polygon nor multipolygon')
      }, NL = function(e) {
        for (var t = 0; t < e.length;) {
          var r = e[t];
          if (0 !== r.length) {
            var n = r[0];
            if (DL(n), 0 !== n.length) {
              for (var i = 1; i < r.length;) {
                var o = r[i];
                DL(o), 0 === o.length ? r.splice(i, 1) : i++
              }
              t++
            } else
              e.splice(t, 1)
          } else
            e.splice(t, 1)
        }
      }, DL = function(e) {
        if (0 !== e.length) {
          0 === xL(e[0], e[e.length - 1]) && e.pop();
          for (var t, r, n, i, o, a = 0; a < e.length;)
            t = 0 === a ? e[e.length - 1] : e[a - 1],
            r = a === e.length - 1 ? e[0] : e[a + 1], n = t, i = e[a], o = r,
            0 === xL(n, i) || 0 === xL(i, o) || 0 === SL(i, n, o) ?
                e.splice(a, 1) :
                a++;
          for (; e.length < 3 && 0 < e.length;) e.pop()
        }
      }, ML = s(function e(t, r) {
           f(this, e), this.key = t, this.data = r, this.left = null,
                       this.right = null
         });
      function zL(e, t) {
        return t < e ? 1 : e < t ? -1 : 0
      }
      function KL(e, t, r) {
        if (null === t) return t;
        for (var n, i, o = new ML, a = n = o;;) {
          var s = r(e, t.key);
          if (s < 0) {
            if (null === t.left) break;
            if (r(e, t.left.key) < 0 &&
                (i = t.left, t.left = i.right, i.right = t,
                 null === (t = i).left))
              break;
            n.left = t, t = (n = t).left
          } else {
            if (!(0 < s)) break;
            if (null === t.right) break;
            if (0 < r(e, t.right.key) &&
                (i = t.right, t.right = i.left, i.left = t,
                 null === (t = i).right))
              break;
            a.right = t, t = (a = t).right
          }
        }
        return a.right = t.left, n.left = t.right, t.left = o.right,
               t.right = o.left, t
      }
      function UL(e, t, r, n, i) {
        t = new ML(e, t);
        if (i._size++, null === r) return t.left = t.right = null, t;
        n = n(e, (r = KL(e, r, n)).key);
        return n < 0 ? (t.left = r.left, (t.right = r).left = null) :
                       0 <= n && (t.right = r.right, (t.left = r).right = null),
               t
      }
      function jL(e, t, r, n, i) {
        t = new ML(e, t);
        if (null === r) return t.left = t.right = null, i._size++, t;
        n = n(e, (r = KL(e, r, n)).key);
        return 0 === n ?
            r :
            (n < 0 ? (t.left = r.left, (t.right = r).left = null) :
                     0 < n && (t.right = r.right, (t.left = r).right = null),
             i._size++, t)
      }
      function BL(e, t, r, n) {
        var i;
        return null === t ?
            null :
            0 === r(e, (t = KL(e, t, r)).key) ?
            (null === t.left ? i = t.right :
                               (i = KL(e, t.left, r)).right = t.right,
             n._size--, i) :
            t
      }
      function YL(e, t, r) {
        var n, i;
        return null === t ? n = i = null :
                            0 === (e = r((t = KL(e, t, r)).key, e)) ?
                            (n = t.left, i = t.right) :
                            e < 0 ? (i = t.right, t.right = null, n = t) :
                                    (n = t.left, t.left = null, i = t),
        {
          left: n, right: i
        }
      }
      function HL(e, t, r) {
        return null === t ? e :
                            (null === e || ((t = KL(e.key, t, r)).left = e), t)
      }
      function GL(e, t, r, n, i) {
        e &&
            (n(''.concat(t)
                   .concat('\ufffd\ufffd\ufffd\ufffd\ufffd\ufffd ')
                   .concat(i(e), '\n')),
             r = t + (r ? '    ' : '\ufffd\ufffd   '),
             e.left && GL(e.left, r, !1, n, i),
             e.right && GL(e.right, r, !0, n, i))
      }
      var WL = function() {
        function t() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ?
              arguments[0] :
              zL;
          f(this, t), this._comparator = e, this._root = null, this._size = 0
        }
        return s(t,
                 [
                   {
                     key: 'insert',
                     value: function(e, t) {
                       return this._root =
                                  UL(e, t, this._root, this._comparator, this)
                     }
                   },
                   {
                     key: 'add',
                     value: function(e, t) {
                       return this._root =
                                  jL(e, t, this._root, this._comparator, this)
                     }
                   },
                   {
                     key: 'remove',
                     value: function(e) {
                       this._root = BL(e, this._root, this._comparator, this)
                     }
                   },
                   {
                     key: 'pop',
                     value: function() {
                       var e = this._root;
                       if (e) {
                         for (; e.left;) e = e.left;
                         return this._root =
                                    KL(e.key, this._root, this._comparator),
                                this._root = BL(
                                    e.key, this._root, this._comparator, this),
                         {
                           key: e.key, data: e.data
                         }
                       }
                       return null
                     }
                   },
                   {
                     key: 'findStatic',
                     value: function(e) {
                       for (var t = this._root, r = this._comparator; t;) {
                         var n = r(e, t.key);
                         if (0 === n) return t;
                         t = n < 0 ? t.left : t.right
                       }
                       return null
                     }
                   },
                   {
                     key: 'find',
                     value: function(e) {
                       return this._root &&
                               (this._root =
                                    KL(e, this._root, this._comparator),
                                0 !== this._comparator(e, this._root.key)) ?
                           null :
                           this._root
                     }
                   },
                   {
                     key: 'contains',
                     value: function(e) {
                       for (var t = this._root, r = this._comparator; t;) {
                         var n = r(e, t.key);
                         if (0 === n) return !0;
                         t = n < 0 ? t.left : t.right
                       }
                       return !1
                     }
                   },
                   {
                     key: 'forEach',
                     value: function(e, t) {
                       for (var r = this._root, n = [], i = !1; !i;)
                         null !== r ? (n.push(r), r = r.left) :
                                      0 !== n.length ?
                                      (r = n.pop(), e.call(t, r), r = r.right) :
                                      i = !0;
                       return this
                     }
                   },
                   {
                     key: 'range',
                     value: function(e, t, r, n) {
                       for (var i = [], o = this._comparator, a = this._root;
                            0 !== i.length || a;)
                         if (a)
                           i.push(a), a = a.left;
                         else {
                           if (0 < o((a = i.pop()).key, t)) break;
                           if (0 <= o(a.key, e) && r.call(n, a)) return this;
                           a = a.right
                         }
                       return this
                     }
                   },
                   {
                     key: 'keys',
                     value: function() {
                       var t = [];
                       return this.forEach(function(e) {
                         e = e.key;
                         return t.push(e)
                       }),
                              t
                     }
                   },
                   {
                     key: 'values',
                     value: function() {
                       var t = [];
                       return this.forEach(function(e) {
                         e = e.data;
                         return t.push(e)
                       }),
                              t
                     }
                   },
                   {
                     key: 'min',
                     value: function() {
                       return this._root ? this.minNode(this._root).key : null
                     }
                   },
                   {
                     key: 'max',
                     value: function() {
                       return this._root ? this.maxNode(this._root).key : null
                     }
                   },
                   {
                     key: 'minNode',
                     value: function() {
                       var e = 0 < arguments.length && void 0 !== arguments[0] ?
                           arguments[0] :
                           this._root;
                       if (e)
                         for (; e.left;) e = e.left;
                       return e
                     }
                   },
                   {
                     key: 'maxNode',
                     value: function() {
                       var e = 0 < arguments.length && void 0 !== arguments[0] ?
                           arguments[0] :
                           this._root;
                       if (e)
                         for (; e.right;) e = e.right;
                       return e
                     }
                   },
                   {
                     key: 'at',
                     value: function(e) {
                       for (var t = this._root, r = !1, n = 0, i = []; !r;)
                         if (t)
                           i.push(t), t = t.left;
                         else if (0 < i.length) {
                           if (t = i.pop(), n === e) return t;
                           n++, t = t.right
                         } else
                           r = !0;
                       return null
                     }
                   },
                   {
                     key: 'next',
                     value: function(e) {
                       var t = this._root, r = null;
                       if (e.right) {
                         for (r = e.right; r.left;) r = r.left;
                         return r
                       }
                       for (var n = this._comparator; t;) {
                         var i = n(e.key, t.key);
                         if (0 === i) break;
                         t = i < 0 ? (r = t).left : t.right
                       }
                       return r
                     }
                   },
                   {
                     key: 'prev',
                     value: function(e) {
                       var t = this._root, r = null;
                       if (null !== e.left) {
                         for (r = e.left; r.right;) r = r.right;
                         return r
                       }
                       for (var n = this._comparator; t;) {
                         var i = n(e.key, t.key);
                         if (0 === i) break;
                         t = i < 0 ? t.left : (r = t).right
                       }
                       return r
                     }
                   },
                   {
                     key: 'clear',
                     value: function() {
                       return this._root = null, this._size = 0, this
                     }
                   },
                   {
                     key: 'toList',
                     value: function() {
                       return JL(this._root)
                     }
                   },
                   {
                     key: 'load',
                     value: function() {
                       var e = 0 < arguments.length && void 0 !== arguments[0] ?
                           arguments[0] :
                           [],
                           t = 1 < arguments.length && void 0 !== arguments[1] ?
                           arguments[1] :
                           [],
                           r = e.length, n = this._comparator;
                       return 2 < arguments.length && void 0 !== arguments[2] &&
                                  arguments[2] && qL(e, t, 0, r - 1, n),
                              null === this._root ?
                                  (this._root = ZL(this._root, e, t, 0, r),
                                   this._size = r) :
                                  (n = $L(this.toList(), VL(e, t), n),
                                   r = this._size + r,
                                   this._root = XL({head: n}, 0, r)),
                              this
                     }
                   },
                   {
                     key: 'isEmpty',
                     value: function() {
                       return null === this._root
                     }
                   },
                   {
                     key: 'size',
                     get: function() {
                       return this._size
                     }
                   },
                   {
                     key: 'toString',
                     value: function() {
                       var t = [];
                       return GL(this._root, '', !0,
                                 function(e) {
                                   return t.push(e)
                                 },
                                 0 < arguments.length &&
                                         void 0 !== arguments[0] ?
                                     arguments[0] :
                                     function(e) {
                                       return e.key
                                     }),
                              t.join('')
                     }
                   },
                   {
                     key: 'update',
                     value: function(e, t, r) {
                       var n = this._comparator, i = YL(e, this._root, n),
                           o = i.left, i = i.right;
                       this._size--,
                           n(e, t) < 0 ? i = UL(t, r, i, n, this) :
                                         o = UL(t, r, o, n, this),
                                         this._root = HL(o, i, n)
                     }
                   },
                   {
                     key: 'split',
                     value: function(e) {
                       return YL(e, this._root, this._comparator)
                     }
                   }
                 ]),
               t
      }();
      function ZL(e, t, r, n, i) {
        var o = i - n;
        if (0 < o) {
          o = n + Math.floor(o / 2), e = {key: t[o], data: r[o], parent: e};
          return e.left = ZL(e, t, r, n, o), e.right = ZL(e, t, r, o + 1, i), e
        }
        return null
      }
      function VL(e, t) {
        for (var r = {next: null}, n = r, i = 0; i < e.length; i++)
          n = n.next = {key: e[i], data: t[i]};
        return n.next = null, r.next
      }
      function JL(e) {
        for (var t = e, r = [], n = !1, e = {next: null}, i = e; !n;)
          t ? (r.push(t), t = t.left) :
              0 < r.length ? t = (t = i = i.next = r.pop()).right : n = !0;
        return i.next = null, e.next
      }
      function XL(e, t, r) {
        var n = r - t;
        if (0 < n) {
          var i = t + Math.floor(n / 2), n = XL(e, t, i), t = e.head;
          return t.left = n, e.head = e.head.next, t.right = XL(e, i + 1, r), t
        }
        return null
      }
      function $L(e, t) {
        for (var r = 2 < arguments.length && void 0 !== arguments[2] ?
                 arguments[2] :
                 function(e, t) {
                   return e - t
                 },
                 n = {}, i = n, o = e, a = t;
             null !== o && null !== a;)
          r(o.key, a.key) < 0 ? o = (i.next = o).next : a = (i.next = a).next,
                                i = i.next;
        return null !== o ? i.next = o : null !== a && (i.next = a), n.next
      }
      function qL(e, t, r, n, i) {
        if (!(n <= r)) {
          for (var o = e[r + n >> 1], a = r - 1, s = n + 1;;) {
            for (; i(e[++a], o) < 0;)
              ;
            for (; 0 < i(e[--s], o);)
              ;
            if (s <= a) break;
            var c = e[a];
            e[a] = e[s], e[s] = c, c = t[a], t[a] = t[s], t[s] = c
          }
          qL(e, t, r, s, i), qL(e, t, s + 1, n, i)
        }
      }
      var QL = Yi, e6 = ri.includes, t6 = R0;
      QL({target: 'Array', proto: !0}, {
        includes: function(e) {
          return e6(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
      }),
          t6('includes');
      var r6 = x, n6 = _h, i6 = r6.TypeError,
          o6 =
              function(e) {
            if (n6(e))
              throw i6('The method doesn\'t accept regular expressions');
            return e
          },
          a6 = At, s6 = a6('match'),
          c6 =
              function(t) {
            var r = /./;
            try {
              '/./'[t](r)
            } catch (e) {
              try {
                return r[s6] = !1, '/./'[t](r)
              } catch (e) {
              }
            }
            return !1
          },
          l6 = Yi, u6 = v, d6 = o6, h6 = S, f6 = lo, p6 = c6,
          g6 = u6(''.indexOf);
      l6({target: 'String', proto: !0, forced: !p6('includes')}, {
        includes: function(e) {
          return !!~g6(
              f6(h6(this)), f6(d6(e)),
              1 < arguments.length ? arguments[1] : void 0)
        }
      });
      var y6 = function() {
        function e() {
          f(this, e), this.types = {
            INTERSECTION: 0,
            UNION: 1,
            XOR: 2,
            DIFFERENCE: 3
          }
        }
        return s(e, [{
                   key: 'register',
                   value: function(e, t) {
                     this.type = e, this.numMultiPolys = t
                   }
                 }]),
               e
      }(), m6 = new y6, b6 = Yi, v6 = x0, _6 = C0;
      b6({target: 'String', proto: !0, forced: _6('link')}, {
        link: function(e) {
          return v6(this, 'a', 'href', e)
        }
      });
      var w6 = function() {
        function t(e) {
          f(this, t),
              void 0 === e.events ? e.events = [this] : e.events.push(this),
                                    this.point = e
        }
        return s(t,
                 [
                   {
                     key: 'link',
                     value: function(e) {
                       if (e.point === this.point)
                         throw new Error('Tried to link already linked events');
                       for (var t = this.point.events.length,
                                r = e.point.events, n = 0, i = r.length;
                            n < i; n++) {
                         var o = r[n];
                         this.point.events.push(o), o.point = this.point;
                         for (var a = 0, s = t; a < s; a++)
                           this.point.events[a].otherSE.point ===
                                   o.otherSE.point &&
                               this.point.events[a].segment.registerCoincident(
                                   o.segment)
                       }
                     }
                   },
                   {
                     key: 'getAvailableLinkedEvents',
                     value: function() {
                       for (var e = [], t = 0, r = this.point.events.length;
                            t < r; t++) {
                         var n = this.point.events[t];
                         n !== this && !n.segment.ringOut &&
                             n.segment.isInResult && e.push(n)
                       }
                       return e
                     }
                   },
                   {
                     key: 'getLeftmostComparator',
                     value: function(r) {
                       function a(e) {
                         var t = e.otherSE;
                         s.set(e, {
                           sine: AL(n.point, r.point, t.point),
                           cosine: OL(n.point, r.point, t.point)
                         })
                       }
                       var n = this, s = new Map;
                       return function(e, t) {
                         s.has(e) || a(e), s.has(t) || a(t);
                         var r = s.get(e), n = r.sine, i = r.cosine,
                             o = s.get(t), e = o.sine, r = o.cosine,
                             t = wL(n, 0), o = wL(e, 0);
                         return 0 <= t && 0 <= o ?
                             wL(r, i) :
                             t < 0 && o < 0 ? wL(i, r) : wL(e, n)
                       }
                     }
                   },
                   {
                     key: 'isLeft',
                     get: function() {
                       return this === this.segment.leftSE
                     }
                   },
                   {
                     key: 'isRight',
                     get: function() {
                       return this === this.segment.rightSE
                     }
                   },
                   {
                     key: 'isOrientationCorrect',
                     get: function() {
                       var e = xL(this.point, this.otherSE.point);
                       if (e < 0) return this.isLeft;
                       if (0 < e) return this.isRight;
                       throw new Error('Degenerate segment encountered')
                     }
                   },
                   {
                     key: 'otherSE',
                     get: function() {
                       return this.segment.getOtherSE(this)
                     }
                   }
                 ],
                 [{
                   key: 'compare',
                   value: function(e, t) {
                     if (e.point !== t.point) {
                       var r = wL(e.point.x, t.point.x);
                       if (0 !== r) return r;
                       var n = wL(e.point.y, t.point.y);
                       if (0 !== n) return n;
                       e.link(t)
                     }
                     if (e.isLeft !== t.isLeft) return e.isLeft ? 1 : -1;
                     if (e.segment.isVertical && !t.segment.isVertical)
                       return e.isLeft ? 1 : -1;
                     if (!e.segment.isVertical && t.segment.isVertical)
                       return e.isLeft ? -1 : 1;
                     r = e.segment.comparePoint(t.otherSE.point);
                     if (0 !== r) return 0 < r ? -1 : 1;
                     n = e.segment.ringIn.id, r = t.segment.ringIn.id;
                     if (n !== r) return n < r ? -1 : 1;
                     if (e === t) return 0;
                     throw new Error(
                         'SweepEvent comparison failed at ['
                             .concat(e.point.x, ', ')
                             .concat(e.point.y, ']... ') +
                         'equal but not identical?')
                   }
                 }]),
               t
      }(), x6 = function(e, t) {
        var r = e.ll.x, n = e.ll.y, i = e.ur.x, o = e.ur.y, e = t.x, t = t.y;
        return wL(r, e) <= 0 && wL(e, i) <= 0 && wL(n, t) <= 0 && wL(t, o) <= 0
      }, k6 = function(e, t) {
        return !(
            wL(t.ur.x, e.ll.x) < 0 || wL(e.ur.x, t.ll.x) < 0 ||
            wL(t.ur.y, e.ll.y) < 0 || wL(e.ur.y, t.ll.y) < 0)
      }, C6 = function(e, t) {
        if (!k6(e, t)) return null;
        var r = (e.ll.x < t.ll.x ? t : e).ll.x,
            n = (e.ur.x < t.ur.x ? e : t).ur.x;
        return {
          ll: {x: r, y: (e.ll.y < t.ll.y ? t : e).ll.y},
              ur: {x: n, y: (e.ur.y < t.ur.y ? e : t).ur.y}
        }
      }, S6 = function(e) {
        var t = e.ll.x, r = e.ll.y, n = e.ur.x, i = e.ur.y, o = 0 === wL(t, n),
            e = 0 === wL(r, i);
        return o && e ?
            [{x: t, y: r}] :
            o ? [{x: t, y: r}, {x: t, y: i}] :
                e ? [{x: t, y: r}, {x: n, y: r}] :
                    [{x: t, y: r}, {x: t, y: i}, {x: n, y: r}, {x: n, y: i}]
      }, E6 = function() {
        function v(e, t, r) {
          f(this, v), null !== (this.leftSE = e) && (e.segment = this),
              null !== (this.rightSE = t) && (t.segment = this),
              this.ringIn = r, this.ringOut = null, this.coincidents = [this],
              this._clearCache()
        }
        return s(v,
                 [
                   {
                     key: 'bbox',
                     get: function() {
                       var e = this.leftSE.point.y, t = this.rightSE.point.y;
                       return {
                         ll: {x: this.leftSE.point.x, y: e < t ? e : t},
                             ur: {x: this.rightSE.point.x, y: t < e ? e : t}
                       }
                     }
                   },
                   {
                     key: 'vector',
                     get: function() {
                       return {
                         x: this.rightSE.point.x - this.leftSE.point.x,
                             y: this.rightSE.point.y - this.leftSE.point.y
                       }
                     }
                   },
                   {
                     key: 'isVertical',
                     get: function() {
                       return 0 ===
                           wL(this.leftSE.point.x, this.rightSE.point.x)
                     }
                   },
                   {
                     key: 'swapEvents',
                     value: function() {
                       var e = this.leftSE;
                       this.leftSE = this.rightSE, this.rightSE = e
                     }
                   },
                   {
                     key: 'getOtherSE',
                     value: function(e) {
                       if (e === this.leftSE) return this.rightSE;
                       if (e === this.rightSE) return this.leftSE;
                       throw new Error('may only be called by own sweep events')
                     }
                   },
                   {
                     key: 'isAnEndpoint',
                     value: function(e) {
                       return 0 === xL(e, this.leftSE.point) ||
                           0 === xL(e, this.rightSE.point)
                     }
                   },
                   {
                     key: 'isPointOn',
                     value: function(e) {
                       return x6(this.bbox, e) && 0 === this.comparePoint(e)
                     }
                   },
                   {
                     key: 'comparePoint',
                     value: function(e) {
                       if (this.isAnEndpoint(e)) return 0;
                       var t = this.vector, r = FL(t),
                           t = TL(this.leftSE.point, t, e, r), r = wL(e.y, t.y);
                       return 0 !== r ? r : wL(t.x, e.x)
                     }
                   },
                   {
                     key: 'getIntersections',
                     value: function(e) {
                       var t = C6(this.bbox, e.bbox);
                       if (null === t) return [];
                       for (var r = [], n = S6(t), i = 0, o = n.length; i < o;
                            i++) {
                         var a = n[i];
                         (this.isAnEndpoint(a) && e.isPointOn(a) ||
                          e.isAnEndpoint(a) && this.isPointOn(a)) &&
                             r.push(a)
                       }
                       if (0 < r.length) return r;
                       var s =
                           TL(this.leftSE.point, this.vector, e.leftSE.point,
                              e.vector);
                       return null !== s && x6(t, s) ? [s] : []
                     }
                   },
                   {
                     key: 'split',
                     value: function(e) {
                       e.sort(xL);
                       for (var t = [], r = 0; r < e.length; r++)
                         0 !== r && 0 === xL(e[r - 1], e[r]) || t.push(e[r]);
                       for (var n = 0, i = (e = t).length; n < i; n++) {
                         var o = e[n];
                         if (this.isAnEndpoint(o))
                           throw new Error(
                               'Cannot split segment upon endpoint at ['
                                   .concat(o.x, ', ')
                                   .concat(o.y, ']'))
                       }
                       for (var a = e.shift(), s = [], c = [], l = 0,
                                u = this.coincidents.length;
                            l < u; l++) {
                         var d = this.coincidents[l], h = new w6(a),
                             f = new w6(a);
                         s.push(new v(h, d.rightSE, d.ringIn)),
                             d.rightSE = f, d.rightSE.segment = d, c.push(f),
                             c.push(h)
                       }
                       for (var p = 1, g = s.length; p < g; p++)
                         s[p].registerCoincident(s[p - 1]);
                       if (0 < e.length)
                         for (var y = s[0].split(e), m = 0, b = y.length; m < b;
                              m++)
                           c.push(y[m]);
                       return c
                     }
                   },
                   {
                     key: 'registerPrev',
                     value: function(e) {
                       this.prev = e, this._clearCache()
                     }
                   },
                   {
                     key: 'registerRingOut',
                     value: function(e) {
                       this.ringOut = e
                     }
                   },
                   {
                     key: 'registerCoincident',
                     value: function(e) {
                       if (this.coincidents != e.coincidents) {
                         for (var t = e.coincidents, r = 0, n = t.length; r < n;
                              r++) {
                           var i = t[r];
                           this.coincidents.push(i),
                               i.coincidents = this.coincidents
                         }
                         this.coincidents.sort(function(e, t) {
                           return e.ringIn.id - t.ringIn.id
                         })
                       }
                     }
                   },
                   {
                     key: 'prevInResult',
                     get: function() {
                       var e = 'prevInResult';
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] = this['_'.concat(e)]()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_prevInResult',
                     value: function() {
                       for (var e = this.prev; e && !e.isInResult;) e = e.prev;
                       return e
                     }
                   },
                   {
                     key: 'prevNotCoincident',
                     get: function() {
                       var e = 'prevNotCoincident';
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] = this['_'.concat(e)]()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_prevNotCoincident',
                     value: function() {
                       for (var e = this, t = this.prev;
                            t && e.coincidents === t.coincidents;)
                         t = (e = t).prev;
                       return t
                     }
                   },
                   {
                     key: 'sweepLineEntersRing',
                     get: function() {
                       var e = 'sweepLineEntersRing';
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] = this['_'.concat(e)]()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_sweepLineEntersRing',
                     value: function() {
                       for (var e = this.prevNotCoincident; e;) {
                         for (var t = 0, r = e.coincidents.length; t < r; t++) {
                           var n = e.coincidents[t];
                           if (n.ringIn === this.ringIn)
                             return !n.sweepLineEntersRing
                         }
                         e = e.prevNotCoincident
                       }
                       return !0
                     }
                   },
                   {
                     key: 'sweepLineEntersPoly',
                     get: function() {
                       return !!this.isValidEdgeForPoly &&
                           this.ringIn.isExterior === this.sweepLineEntersRing
                     }
                   },
                   {
                     key: 'sweepLineExitsPoly',
                     get: function() {
                       return !!this.isValidEdgeForPoly &&
                           this.ringIn.isExterior !== this.sweepLineEntersRing
                     }
                   },
                   {
                     key: 'ringsInsideOf',
                     get: function() {
                       var e = 'ringsInsideOf';
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] = this['_'.concat(e)]()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_ringsInsideOf',
                     value: function() {
                       if (!this.prev) return [];
                       if (this.coincidents === this.prev.coincidents)
                         return this.prev.ringsInsideOf;
                       for (var e = [], t = this.prev.ringsInsideOf,
                                r = this.prev.getRingsEntering(),
                                n = this.getRingsExiting(), i = 0, o = t.length;
                            i < o; i++) {
                         var a = t[i];
                         n.includes(a) || e.push(a)
                       }
                       for (var s = 0, c = r.length; s < c; s++) {
                         var l = r[s];
                         n.includes(l) || e.push(l)
                       }
                       return e
                     }
                   },
                   {
                     key: 'getRingsOnEdgeOf',
                     value: function() {
                       for (var e = [], t = 0, r = this.coincidents.length;
                            t < r; t++)
                         e.push(this.coincidents[t].ringIn);
                       return e
                     }
                   },
                   {
                     key: 'getRingsEntering',
                     value: function() {
                       for (var e = [], t = 0, r = this.coincidents.length;
                            t < r; t++) {
                         var n = this.coincidents[t];
                         n.sweepLineEntersRing && e.push(n.ringIn)
                       }
                       return e
                     }
                   },
                   {
                     key: 'getRingsExiting',
                     value: function() {
                       for (var e = [], t = 0, r = this.coincidents.length;
                            t < r; t++) {
                         var n = this.coincidents[t];
                         n.sweepLineEntersRing || e.push(n.ringIn)
                       }
                       return e
                     }
                   },
                   {
                     key: 'getRingsEnteringAndExiting',
                     value: function() {
                       for (var e = [], t = [], r = 0,
                                n = this.coincidents.length;
                            r < n; r++) {
                         var i = this.coincidents[r];
                         (i.sweepLineEntersRing ? e : t).push(i.ringIn)
                       }
                       return [e, t]
                     }
                   },
                   {
                     key: 'isValidEdgeForPoly',
                     get: function() {
                       var e = 'isValidEdgeForPoly';
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] = this['_'.concat(e)]()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_isValidEdgeForPoly',
                     value: function() {
                       var e, t, r = this.getRingsEnteringAndExiting();
                       return this.sweepLineEntersRing ? (e = r[0], t = r[1]) :
                                                         (t = r[0], e = r[1]),
                              this.ringIn.isValid(e, t, this.ringsInsideOf)
                     }
                   },
                   {
                     key: 'getMultiPolysInsideOf',
                     value: function() {
                       for (var e = [], t = 0, r = this.ringsInsideOf.length;
                            t < r; t++) {
                         var n = this.ringsInsideOf[t].poly;
                         e.includes(n.multiPoly) ||
                             n.isInside(
                                 this.getRingsOnEdgeOf(), this.ringsInsideOf) &&
                                 e.push(n.multiPoly)
                       }
                       return e
                     }
                   },
                   {
                     key: 'getMultiPolysSLPEntersAndExits',
                     value: function(e) {
                       for (var t = e.slice(0), r = e.slice(0), n = 0,
                                i = this.coincidents.length;
                            n < i; n++) {
                         var o = this.coincidents[n],
                             a = o.ringIn.poly.multiPoly;
                         o.sweepLineEntersPoly ? t.includes(a) || t.push(a) :
                                                 o.sweepLineExitsPoly &&
                                 (r.includes(a) || r.push(a))
                       }
                       return [t, r]
                     }
                   },
                   {
                     key: 'isInResult',
                     get: function() {
                       var e = 'isInResult';
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] = this['_'.concat(e)]()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_isInResult',
                     value: function() {
                       if (this !== this.coincidents[0]) return !1;
                       var e = this.getMultiPolysInsideOf(),
                           e = this.getMultiPolysSLPEntersAndExits(e), t = e[0],
                           r = e[1];
                       switch (m6.type) {
                         case m6.types.UNION:
                           return 0 === t.length != (0 === r.length);
                         case m6.types.INTERSECTION:
                           var n,
                               i = t.length < r.length ?
                               (n = t.length, r.length) :
                               (n = r.length, t.length);
                           return i === m6.numMultiPolys && n < i;
                         case m6.types.XOR:
                           return Math.abs(t.length - r.length) % 2 == 1;
                         case m6.types.DIFFERENCE:
                           i = function(e) {
                             return 1 === e.length && e[0].isSubject
                           };
                           return i(t) !== i(r);
                         default:
                           throw new Error(
                               'Unrecognized operation type found '.concat(
                                   m6.type))
                       }
                     }
                   },
                   {
                     key: '_clearCache',
                     value: function() {
                       this._cache = {}
                     }
                   }
                 ],
                 [
                   {
                     key: 'compare',
                     value: function(e, t) {
                       if (e === t) return 0;
                       var r = e.leftSE.point.x, n = e.leftSE.point.y,
                           i = t.leftSE.point.x, o = t.leftSE.point.y,
                           a = e.rightSE.point.x, s = t.rightSE.point.x;
                       if (wL(s, r) < 0) return 1;
                       if (wL(a, i) < 0) return -1;
                       a = e.comparePoint(t.leftSE.point), i = wL(r, i);
                       if (0 !== a || 0 !== e.comparePoint(t.rightSE.point) ||
                           0 !== t.comparePoint(e.leftSE.point) ||
                           0 !== t.comparePoint(e.rightSE.point)) {
                         if (i < 0) return 1 === a ? -1 : 1;
                         if (0 < i)
                           return 1 === t.comparePoint(e.leftSE.point) ? 1 : -1;
                         o = wL(n, o);
                         return 0 === o ?
                             e.isVertical !== t.isVertical ?
                             e.isVertical ? 1 : -1 :
                             0 < e.comparePoint(t.rightSE.point) ? -1 : 1 :
                             o
                       }
                       if (0 !== i) return i;
                       if (e.ringIn.id !== t.ringIn.id)
                         return e.ringIn.id < t.ringIn.id ? -1 : 1;
                       throw new Error(
                           'Segment comparison (from ['
                               .concat(e.leftSE.point.x, ', ')
                               .concat(e.leftSE.point.y, '])') +
                           ' -> to ['.concat(e.rightSE.point.x, ', ')
                               .concat(e.rightSE.point.y, ']) failed... ') +
                           ' segments equal but not identical?')
                     }
                   },
                   {
                     key: 'fromRing',
                     value: function(e, t, r) {
                       var n, i, o = xL(e, t);
                       if (o < 0)
                         n = new w6(e), i = new w6(t);
                       else {
                         if (!(0 < o))
                           throw new Error(
                               'Tried to create degenerate segment at ['
                                   .concat(e.x, ', ')
                                   .concat(t.y, ']'));
                         n = new w6(t), i = new w6(e)
                       }
                       return new v(n, i, r)
                     }
                   }
                 ]),
               v
      }(), A6 = 0, O6 = function() {
        function a(e, t) {
          f(this, a), this.id = A6++, this.poly = t, this.segments = [];
          for (var r = e[0], n = 1, i = e.length; n < i; n++) {
            var o = e[n];
            this.segments.push(E6.fromRing(r, o, this)), r = o
          }
          this.segments.push(E6.fromRing(r, e[0], this))
        }
        return s(a,
                 [
                   {
                     key: 'getSweepEvents',
                     value: function() {
                       for (var e = [], t = 0, r = this.segments.length; t < r;
                            t++) {
                         var n = this.segments[t];
                         e.push(n.leftSE), e.push(n.rightSE)
                       }
                       return e
                     }
                   },
                   {
                     key: 'isExterior',
                     get: function() {
                       return this.poly.exteriorRing === this
                     }
                   },
                   {
                     key: 'isInterior',
                     get: function() {
                       return this.poly.exteriorRing !== this
                     }
                   },
                   {
                     key: 'isValid',
                     value: function(e, t, r) {
                       var n = this.poly.exteriorRing,
                           i = this.poly.interiorRings;
                       if (this === n) {
                         for (var o = 0, a = r.length; o < a; o++)
                           if (i.includes(r[o])) return !1;
                         for (var s = 0, c = e.length; s < c; s++)
                           if (i.includes(e[s])) return !1;
                         return !0
                       }
                       if (!r.includes(n) && !t.includes(n)) return !1;
                       for (var l = 0, u = r.length; l < u; l++)
                         if (i.includes(r[l])) return !1;
                       for (var d = 0, h = t.length; d < h; d++)
                         if (i.includes(t[d])) return !1;
                       return !0
                     }
                   }
                 ]),
               a
      }(), L6 = function() {
        function i(e, t) {
          f(this, i), this.exteriorRing = new O6(e[0], this),
                      this.interiorRings = [];
          for (var r = 1, n = e.length; r < n; r++)
            this.interiorRings.push(new O6(e[r], this));
          this.multiPoly = t
        }
        return s(i,
                 [
                   {
                     key: 'getSweepEvents',
                     value: function() {
                       for (var e = this.exteriorRing.getSweepEvents(), t = 0,
                                r = this.interiorRings.length;
                            t < r; t++)
                         for (var n = this.interiorRings[t].getSweepEvents(),
                                  i = 0, o = n.length;
                              i < o; i++)
                           e.push(n[i]);
                       return e
                     }
                   },
                   {
                     key: 'isInside',
                     value: function(e, t) {
                       for (var r = 0, n = e.length; r < n; r++)
                         if (e[r].poly === this) return !1;
                       for (var i = !1, o = 0, a = t.length; o < a; o++) {
                         var s = t[o];
                         if (s.poly === this) {
                           if (s.isInterior) return !1;
                           i = !0
                         }
                       }
                       return i
                     }
                   }
                 ]),
               i
      }(), I6 = function() {
        function n(e) {
          f(this, n), this.polys = [];
          for (var t = 0, r = e.length; t < r; t++)
            this.polys.push(new L6(e[t], this));
          this.isSubject = !1
        }
        return s(n,
                 [
                   {
                     key: 'markAsSubject',
                     value: function() {
                       this.isSubject = !0
                     }
                   },
                   {
                     key: 'getSweepEvents',
                     value: function() {
                       for (var e = [], t = 0, r = this.polys.length; t < r;
                            t++)
                         for (var n = this.polys[t].getSweepEvents(), i = 0,
                                  o = n.length;
                              i < o; i++)
                           e.push(n[i]);
                       return e
                     }
                   }
                 ]),
               n
      }(), T6 = function() {
        function b(e) {
          f(this, b);
          for (var t = 0, r = (this.events = e).length; t < r; t++)
            e[t].segment.registerRingOut(this);
          this.poly = null, this._clearCache()
        }
        return s(b,
                 [
                   {
                     key: 'registerPoly',
                     value: function(e) {
                       this.poly = e
                     }
                   },
                   {
                     key: 'getGeom',
                     value: function() {
                       for (var e = [[
                              this.events[0].point.x, this.events[0].point.y
                            ]],
                                t = 1, r = this.events.length - 1;
                            t < r; t++) {
                         var n = this.events[t - 1].point,
                             i = this.events[t].point,
                             o = this.events[t + 1].point;
                         0 !== SL(i, n, o) && e.push([i.x, i.y])
                       }
                       var a = this.events[this.events.length - 2].point,
                           s = this.events[0].point, c = this.events[1].point;
                       return 0 === SL(s, a, c) && e.shift(),
                              0 === e.length ?
                                  null :
                                  (e.push(e[0]),
                                   this.isExteriorRing ? e : e.reverse())
                     }
                   },
                   {
                     key: 'enclosingRing',
                     get: function() {
                       return this._getCached('enclosingRing')
                     }
                   },
                   {
                     key: 'isExteriorRing',
                     get: function() {
                       return this._getCached('isExteriorRing')
                     }
                   },
                   {
                     key: '_clearCache',
                     value: function() {
                       this._cache = {}
                     }
                   },
                   {
                     key: '_getCached',
                     value: function(e, t) {
                       return void 0 === this._cache[e] &&
                                  (this._cache[e] =
                                       this['_'.concat(e)].bind(this)()),
                              this._cache[e]
                     }
                   },
                   {
                     key: '_isExteriorRing',
                     value: function() {
                       return !this.enclosingRing ||
                           !!this.enclosingRing.enclosingRing &&
                           this.enclosingRing.enclosingRing.isExteriorRing
                     }
                   },
                   {
                     key: '_enclosingRing',
                     value: function() {
                       for (var e = this.events[0], t = 1,
                                r = this.events.length;
                            t < r; t++) {
                         var n = this.events[t];
                         0 < w6.compare(e, n) && (e = n)
                       }
                       for (var i = e.segment.prevInResult,
                                o = i ? i.prevInResult : null;
                            ;) {
                         if (!i) return null;
                         if (!o) return i.ringOut;
                         if (o.ringOut !== i.ringOut)
                           return o.ringOut.enclosingRing !== i.ringOut ?
                               i.ringOut :
                               i.ringOut.enclosingRing;
                         o = (i = o.prevInResult) ? i.prevInResult : null
                       }
                     }
                   }
                 ],
                 [{
                   key: 'factory',
                   value: function(e) {
                     for (var t = [], r = 0, n = e.length; r < n; r++) {
                       var i = e[r];
                       if (i.isInResult && !i.ringOut) {
                         for (var o, a = i.leftSE, s = i.rightSE, c = [a],
                                     l = a.point, u = [];
                              ;) {
                           if (o = a, a = s, c.push(a), a.point === l) break;
                           for (;;) {
                             var d = a.getAvailableLinkedEvents();
                             if (0 === d.length) {
                               var h = c[0].point, f = c[c.length - 1].point;
                               throw new Error(
                                   'Unable to complete output ring starting at ['
                                       .concat(h.x, ',') +
                                   ' '.concat(
                                       h.y,
                                       ']. Last matching segment found ends at') +
                                   ' ['.concat(f.x, ', ').concat(f.y, '].'))
                             }
                             if (1 === d.length) {
                               s = d[0].otherSE;
                               break
                             }
                             for (var p = null, g = 0, y = u.length; g < y; g++)
                               if (u[g].point === a.point) {
                                 p = g;
                                 break
                               }
                             if (null === p) {
                               u.push({index: c.length, point: a.point});
                               var m = a.getLeftmostComparator(o),
                                   s = d.sort(m)[0].otherSE;
                               break
                             }
                             m = u.splice(p)[0], m = c.splice(m.index);
                             m.unshift(m[0].otherSE), t.push(new b(m.reverse()))
                           }
                         }
                         t.push(new b(c))
                       }
                     }
                     return t
                   }
                 }]),
               b
      }(), F6 = function() {
        function t(e) {
          f(this, t), (this.exteriorRing = e).registerPoly(this),
              this.interiorRings = []
        }
        return s(t,
                 [
                   {
                     key: 'addInterior',
                     value: function(e) {
                       this.interiorRings.push(e), e.registerPoly(this)
                     }
                   },
                   {
                     key: 'getGeom',
                     value: function() {
                       var e = [this.exteriorRing.getGeom()];
                       if (null === e[0]) return null;
                       for (var t = 0, r = this.interiorRings.length; t < r;
                            t++) {
                         var n = this.interiorRings[t].getGeom();
                         null !== n && e.push(n)
                       }
                       return e
                     }
                   }
                 ]),
               t
      }(), R6 = function() {
        function t(e) {
          f(this, t), this.rings = e, this.polys = this._composePolys(e)
        }
        return s(t,
                 [
                   {
                     key: 'getGeom',
                     value: function() {
                       for (var e = [], t = 0, r = this.polys.length; t < r;
                            t++) {
                         var n = this.polys[t].getGeom();
                         null !== n && e.push(n)
                       }
                       return e
                     }
                   },
                   {
                     key: '_composePolys',
                     value: function(e) {
                       for (var t = [], r = 0, n = e.length; r < n; r++) {
                         var i = e[r];
                         i.poly ||
                             (i.isExteriorRing ?
                                  t.push(new F6(i)) :
                                  (i.enclosingRing.poly ||
                                       t.push(new F6(i.enclosingRing)),
                                   i.enclosingRing.poly.addInterior(i)))
                       }
                       return t
                     }
                   }
                 ]),
               t
      }(), P6 = Yi, N6 = Tv.find, D6 = R0, M6 = 'find', z6 = !0;
      M6 in [] && Array(1)[M6](function() {
        z6 = !1
      }),
          P6({target: 'Array', proto: !0, forced: z6}, {
            find: function(e) {
              return N6(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
          }),
          D6(M6);
      var K6 = function() {
        function t() {
          var e = 0 < arguments.length && void 0 !== arguments[0] ?
              arguments[0] :
              E6.compare;
          f(this, t), this.tree = new WL(e), this.segments = []
        }
        return s(t,
                 [
                   {
                     key: 'process',
                     value: function(e) {
                       var t = e.segment, r = [],
                           n = e.isLeft ? this.tree.insert(t) :
                                          this.tree.find(t),
                           i = this.tree.prev(n), i = i ? i.key : null,
                           n = this.tree.next(n), n = n ? n.key : null;
                       if (e.isLeft) {
                         var o = [];
                         if (i) {
                           var a = i.getIntersections(t);
                           if (0 < a.length) {
                             for (var s = this._possibleSplit(i, a), c = 0,
                                      l = s.length;
                                  c < l; c++)
                               r.push(s[c]);
                             for (var u = 0, d = a.length; u < d; u++) {
                               var h = a[u];
                               t.isAnEndpoint(h) || o.push(h)
                             }
                           }
                         }
                         if (n) {
                           var f = n.getIntersections(t);
                           if (0 < f.length) {
                             for (var p = this._possibleSplit(n, f), g = 0,
                                      y = p.length;
                                  g < y; g++)
                               r.push(p[g]);
                             for (var m = 0, b = f.length; m < b; m++) {
                               var v = f[m];
                               t.isAnEndpoint(v) || o.push(v)
                             }
                           }
                         }
                         if (0 < r.length || 0 < o.length) {
                           if (this.tree.remove(t), 0 < o.length)
                             for (var _ = t.split(o), w = 0, x = _.length;
                                  w < x; w++)
                               r.push(_[w]);
                           r.push(e)
                         } else
                           this.segments.push(t), t.registerPrev(i)
                       } else {
                         if (i && n) {
                           e = i.getIntersections(n);
                           if (0 < e.length) {
                             for (var k = this._possibleSplit(i, e), C = 0,
                                      S = k.length;
                                  C < S; C++)
                               r.push(k[C]);
                             for (var E = 0,
                                      A = (k = this._possibleSplit(n, e))
                                              .length;
                                  E < A; E++)
                               r.push(k[E])
                           }
                         }
                         this.tree.remove(t)
                       }
                       for (var O = 0, L = r.length; O < L; O++) {
                         var I = r[O];
                         I.isOrientationCorrect || I.segment.swapEvents()
                       }
                       return r
                     }
                   },
                   {
                     key: '_possibleSplit',
                     value: function(e, t) {
                       for (var r = [], n = 0, i = t.length; n < i; n++) {
                         var o = t[n];
                         e.isAnEndpoint(o) || r.push(o)
                       }
                       var a = [];
                       if (0 < r.length) {
                         for (var s = [], c = 0, l = e.coincidents.length;
                              c < l; c++) {
                           var u = this.tree.find(e.coincidents[c]);
                           null !== u && (s.push(u), this.tree.remove(u.key))
                         }
                         for (var a = e.split(r), d = 0, h = s.length; d < h;
                              d++)
                           this.tree.insert(s[d].key)
                       }
                       return a
                     }
                   }
                 ]),
               t
      }();
      function U6(e, t, r) {
        for (var n = [RL(t)], i = 0, o = r.length; i < o; i++) n.push(RL(r[i]));
        for (var a = 0, s = n.length; a < s; a++) PL(n[a]), NL(n[a]);
        for (var c = [], l = 0, u = n.length; l < u; l++) c.push(new I6(n[l]));
        c[0].markAsSubject(), m6.register(e, c.length);
        for (var d = new WL(w6.compare), h = 0, f = c.length; h < f; h++)
          for (var p = c[h].getSweepEvents(), g = 0, y = p.length; g < y; g++)
            d.insert(p[g]);
        for (var m, b = new K6; m = d.pop();)
          for (var v = b.process(m.key), _ = 0, w = v.length; _ < w; _++)
            d.insert(v[_]);
        e = T6.factory(b.segments);
        return new R6(e).getGeom()
      }
      var j6 = function(e) {
        for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1;
             n < t; n++)
          r[n - 1] = arguments[n];
        return U6(m6.types.UNION, e, r)
      };
      function B6(e) {
        var t, r = [], n = qt(e);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i, o = t.value, a = [], s = qt(o);
            try {
              for (s.s(); !(i = s.n()).done;) {
                var c, l = i.value, u = [], d = qt(l);
                try {
                  for (d.s(); !(c = d.n()).done;) {
                    var h = c.value;
                    if (null == h.x || null == h.y) return null;
                    var f = [];
                    f.push(h.x), f.push(h.y), u.push(f)
                  }
                } catch (e) {
                  d.e(e)
                } finally {
                  d.f()
                }
                a.push(u)
              }
            } catch (e) {
              s.e(e)
            } finally {
              s.f()
            }
            r.push(a)
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        return r
      }
      function Y6(e, t) {
        e = B6(e), t = B6(t), t = j6(e, t);
        return RL(t)
      }
      var H6 = 4, G6 = new F3(19.05), W6 = {
        json_data: null,
        draw_frame: !0,
        draw_main: !0,
        draw_cutoff: !0,
        draw_stab_small: !0,
        draw_stab_large: !0,
        draw_costar: !0,
        draw_costar_large: !0,
        draw_center_ref: !0,
        draw_origin: !0,
        draw_pcb_ref: !1
      };
      function Z6() {
        return G6
      }
      function V6(e) {
        G6 = new F3(e)
      }
      function J6(e) {
        var t = R5(W6);
        if (e)
          for (var r in e) t[r] = e[r];
        return t
      }
      function X6(e) {
        var t, e = JSON.stringify(e), e = KO.parse(e), e = cL.deserialize(e),
               r = qt(e.keys);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var n = t.value, i = n.profile, o = void 0;
            try {
              o = JSON.parse(i)
            } catch (e) {
            }
            n.ninefox = o
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        return e.keys
      }
      function $6(e) {
        switch (e) {
          case 2:
          case 2.25:
          case 2.75:
            return new F3(11.919);
          case 3:
            return Z6();
          case 4:
            return new F3(28.575);
          case 4.5:
            return new F3(34.671);
          case 5.5:
            return new F3(42.8625);
          case 6:
            return new F3(47.5);
          case 6.25:
            return new F3(50);
          case 6.5:
            return new F3(52.38);
          case 7:
            return new F3(57.15);
          case 8:
          case 9:
          case 10:
            return new F3(66.675);
          default:
            return null
        }
      }
      function q6(e, t, r, n) {
        var i = parseFloat(t.sub(n).toFixed(H6)),
            o = parseFloat(t.add(n).toFixed(H6)),
            a = parseFloat(r.sub(n).toFixed(H6)),
            n = parseFloat(r.add(n).toFixed(H6));
        e.drawLine(i, r, t, r), e.drawLine(o, r, t, r), e.drawLine(t, a, t, r),
            e.drawLine(t, n, t, r)
      }
      function Q6(e, t, r, n, i, o, a, s) {
        var c = parseFloat(t.sub(n).toFixed(H6)),
            l = parseFloat(t.add(n).toFixed(H6)),
            u = parseFloat(r.add(n).toFixed(H6)),
            n = parseFloat(r.sub(n).toFixed(H6));
        s && e.drawLine(c, r, t, r), o && e.drawLine(l, r, t, r),
            i && e.drawLine(t, u, t, r), a && e.drawLine(t, n, t, r)
      }
      function e8(e, t, r, n, i, o) {
        n = t.add(n).div(2), i = r.add(i).div(2), t = n.sub(t),
        r = i.sub(r).neg();
        return t8(e, n, i, o, t, r)
      }
      function t8(e, t, r, n, i, o) {
        var a = parseFloat(t.sub(i).toFixed(H6)),
            s = parseFloat(t.sub(i).add(n).toFixed(H6)),
            c = parseFloat(t.add(i).sub(n).toFixed(H6)),
            l = parseFloat(t.add(i).toFixed(H6)),
            u = parseFloat(r.sub(o).toFixed(H6)),
            t = parseFloat(r.sub(o).add(n).toFixed(H6)),
            i = parseFloat(r.add(o).sub(n).toFixed(H6)),
            o = parseFloat(r.add(o).toFixed(H6)), n = parseFloat(n.toFixed(H6));
        e.drawLine(s, u, c, u), e.drawLine(l, t, l, i), e.drawLine(c, o, s, o),
            e.drawLine(a, i, a, t),
            0 != n &&
            (e.drawArc(s, t, n, 180, 270), e.drawArc(c, t, n, -90, 0),
             e.drawArc(c, i, n, 0, 90), e.drawArc(s, i, n, 90, 180))
      }
      function r8(e, t, r, n) {
        var i = [], o = Z6(),
            a = parseFloat(e.sub(o.mul(r).div(2)).toFixed(H6)),
            e = parseFloat(e.add(o.mul(r).div(2)).toFixed(H6)),
            r = parseFloat(t.add(o.mul(n).div(2)).toFixed(H6)),
            n = parseFloat(t.sub(o.mul(n).div(2)).toFixed(H6));
        return i.push({x: a, y: r}), i.push({x: e, y: r}), i.push({x: e, y: n}),
               i.push({x: a, y: n}), i.push({x: a, y: r}), i
      }
      function n8(e) {
        e.delta && V6(e.delta);
        var t = J6(e), r = new mL;
        if (1 == t.draw_plate &&
                r.addLayer('_plate', mL.ACI.YELLOW, 'CONTINUOUS'),
            1 == t.draw_frame &&
                r.addLayer('_frame', mL.ACI.WHITE, 'CONTINUOUS'),
            1 == t.draw_main && r.addLayer('_main', mL.ACI.RED, 'CONTINUOUS'),
            1 == t.draw_cutoff &&
                r.addLayer('_cutoff', mL.ACI.YELLOW, 'CONTINUOUS'),
            1 == t.draw_stab_small &&
                r.addLayer('_stab', mL.ACI.GREEN, 'CONTINUOUS'),
            1 == t.draw_stab_large &&
                r.addLayer('_stab_large', mL.ACI.CYAN, 'CONTINUOUS'),
            1 == t.draw_costar &&
                r.addLayer('_costar', mL.ACI.BLUE, 'CONTINUOUS'),
            1 == t.draw_costar_large &&
                r.addLayer('_costar_large', mL.ACI.MAGENTA, 'CONTINUOUS'),
            1 == t.draw_origin &&
                r.addLayer('_origin', mL.ACI.WHITE, 'CONTINUOUS'),
            1 == t.draw_center_ref &&
                r.addLayer('_center_ref', mL.ACI.WHITE, 'CONTINUOUS'),
            1 == t.draw_pcb_ref &&
                r.addLayer('_pcb_ref', mL.ACI.WHITE, 'CONTINUOUS'),
            1 == t.draw_switch_overlay &&
                r.addLayer('_switch_overylay', mL.ACI.WHITE, 'CONTINUOUS'),
            1 == t.draw_switch_3mm &&
                r.addLayer('_sound_3mm', mL.ACI.WHITE, 'CONTINUOUS'),
            1 == t.draw_underlay &&
                r.addLayer('_underlay', mL.ACI.WHITE, 'CONTINUOUS'),
            e.json_data) {
          var n, i = X6(e.json_data), o = Z6(), a = new F3(.75), s = new F3(3),
                 c = new F3(1), l = new F3(1), u = new F3(0),
                 d = (new F3(0), 0), h = 0, f = new F3(0), p = qt(i);
          try {
            for (p.s(); !(n = p.n()).done;) {
              var g = n.value,
                  y = o.mul(new F3(g.y).add(new F3(g.height).div(2)))
                          .add(7)
                          .neg(),
                  m = o.mul(new F3(g.x).add(new F3(g.width).div(2))).add(7);
              g.y > d && (d = g.y, u = y.sub(new F3(16.525)).neg()),
                  g.x > h && (h = g.x, f = m.add(new F3(16.525)))
            }
          } catch (e) {
            p.e(e)
          } finally {
            p.f()
          }
          if (1 == t.draw_origin &&
                  (T = new F3(1), O = new F3(0), L = new F3(0),
                   r.setActiveLayer('_origin'), Q6(r, O, L, T, !1, !0, !0, !1),
                   Q6(r, O, u.div(2).neg(), T, !0, !0, !0, !1),
                   Q6(r, O, I = u.neg(), T, !0, !0, !1, !1), f.div(2),
                   Q6(r, f, L, T, !1, !1, !0, !0),
                   Q6(r, f, I, T, !0, !1, !1, !0)),
              1 == t.draw_plate) {
            var b, v = 0, _ = 0, w = qt(i);
            try {
              for (w.s(); !(b = w.n()).done;)
                var x = b.value, v = Math.max(v, x.x + x.width),
                    _ = Math.max(_, x.y + x.height)
            } catch (e) {
              w.e(e)
            } finally {
              w.f()
            }
            var k = o.mul(new F3(0).add(new F3(1).div(2))).add(7),
                C = o.mul(new F3(0).add(new F3(1).div(2))).add(7).neg(),
                S = new F3(3);
            parseFloat(S.toFixed(H6)), parseFloat(new F3(2.54).toFixed(H6));
            var E = new F3(v).sub(new F3(1)).mul(o),
                A = new F3(_).sub(new F3(1)).mul(o);
            parseFloat(E.toFixed(H6)), parseFloat(A.toFixed(H6)),
                parseFloat(E.sub(S).toFixed(H6)),
                parseFloat(A.sub(S).toFixed(H6)), r.setActiveLayer('_plate');
            var e = new F3(9.525), O = new F3(3),
                L = parseFloat(k.sub(e).toFixed(H6)),
                I = parseFloat(k.sub(e).add(O).toFixed(H6)),
                T = parseFloat(k.add(E).add(e).sub(O).toFixed(H6)),
                S = parseFloat(k.add(E).add(e).toFixed(H6)),
                k = parseFloat(C.sub(A).sub(e).toFixed(H6)),
                E = parseFloat(C.sub(A).sub(e).add(O).toFixed(H6)),
                A = parseFloat(C.add(e).sub(O).toFixed(H6)),
                e = parseFloat(C.add(e).toFixed(H6)),
                O = parseFloat(O.toFixed(H6));
            r.drawArc(I, E, O, 180, 270), r.drawLine(I, k, T, k),
                r.drawArc(T, E, O, -90, 0), r.drawLine(S, E, S, A),
                r.drawArc(T, A, O, 0, 90), r.drawLine(T, e, I, e),
                r.drawArc(I, A, O, 90, 180), r.drawLine(L, A, L, E)
          }
          if (1 == t.draw_frame) {
            var F = [[[{x: 0, y: 0}]]];
            r.setActiveLayer('_frame');
            var R, P = qt(i);
            try {
              for (P.s(); !(R = P.n()).done;)
                var N = R.value,
                    D = o.mul(new F3(N.y).add(new F3(N.height).div(2)))
                            .add(7)
                            .neg(),
                    F = Y6(F, [
                      [r8(o.mul(new F3(N.x).add(new F3(N.width).div(2))).add(7),
                          D, N.width, N.height)]
                    ])
            } catch (e) {
              P.e(e)
            } finally {
              P.f()
            }
            var M, z = qt(F);
            try {
              for (z.s(); !(M = z.n()).done;) {
                var K, U = qt(M.value);
                try {
                  for (U.s(); !(K = U.n()).done;)
                    for (var j = K.value, B = 0; B < j.length - 1; B++)
                      r.drawLine(j[B].x, j[B].y, j[B + 1].x, j[B + 1].y)
                } catch (e) {
                  U.e(e)
                } finally {
                  U.f()
                }
              }
            } catch (e) {
              z.e(e)
            } finally {
              z.f()
            }
          }
          var Y, H = qt(i);
          try {
            for (H.s(); !(Y = H.n()).done;) {
              var G, W, Z, V, J, X, $, q, Q, ee, te, re, ne, ie, oe, ae, se, ce,
                  le, ue, de, he, fe, pe, ge, ye, me, be, ve, _e, we, xe, ke,
                  Ce, Se, Ee, Ae, Oe, Le, Ie, Te, Fe, Re, Pe, Ne, De, Me, ze,
                  Ke, Ue, je, Be, Ye, He, Ge, We, Ze, Ve, Je, Xe, $e, qe, Qe,
                  et, tt, rt, nt, it, ot, at, st, ct, lt, ut, dt, ht, ft, pt,
                  gt, yt, mt, bt, vt, _t, wt, xt, kt, Ct, St, Et, At, Ot, Lt,
                  It, Tt, Ft, Rt, Pt, Nt, Dt, Mt, zt, Kt, Ut, jt, Bt, Yt, Ht,
                  Gt, Wt, Zt, Vt,
                  Jt = Y.value,
                  Xt = o.mul(new F3(Jt.x).add(new F3(Jt.width).div(2))).add(7),
                  $t = o.mul(new F3(Jt.y).add(new F3(Jt.height).div(2)))
                           .add(7)
                           .neg();
              if (1 == t.draw_center_ref &&
                      (r.setActiveLayer('_center_ref'),
                       q6(r, Xt, $t, new F3(1))),
                  1 == t.draw_underlay &&
                      (r.setActiveLayer('_underlay'),
                       (G = V3.stab_profile(Jt)) &&
                           ('left' == V3.stab_value(Jt).value ?
                                (r.drawCircle(
                                     Xt.add(new F3(6.985)),
                                     $t.add(new F3(G.offset)), new F3(2)),
                                 r.drawCircle(
                                     Xt.add(new F3(6.985)),
                                     $t.sub(new F3(G.offset)), new F3(2))) :
                                'right' == V3.stab_value(Jt).value ?
                                (r.drawCircle(
                                     Xt.sub(new F3(6.985)),
                                     $t.add(new F3(G.offset)), new F3(2)),
                                 r.drawCircle(
                                     Xt.sub(new F3(6.985)),
                                     $t.sub(new F3(G.offset)), new F3(2))) :
                                'up' == V3.stab_value(Jt).value ?
                                (r.drawCircle(
                                     Xt.add(new F3(G.offset)),
                                     $t.sub(new F3(6.985)), new F3(2)),
                                 r.drawCircle(
                                     Xt.sub(new F3(G.offset)),
                                     $t.sub(new F3(6.985)), new F3(2))) :
                                (r.drawCircle(
                                     Xt.add(new F3(G.offset)),
                                     $t.add(new F3(6.985)), new F3(2)),
                                 r.drawCircle(
                                     Xt.sub(new F3(G.offset)),
                                     $t.add(new F3(6.985)), new F3(2)))),
                       1 == Jt.width && 1 == Jt.height ||
                               1 == Jt.height && 1 != Jt.width || null == G ?
                           t.upper ?
                           (W = parseFloat(Xt.add(7).toFixed(H6)),
                            Z = parseFloat(Xt.sub(.624).toFixed(H6)),
                            V = parseFloat(Xt.sub(2.514).toFixed(H6)),
                            J = parseFloat(Xt.sub(3.81).toFixed(H6)),
                            X = parseFloat(Xt.sub(6.085).toFixed(H6)),
                            $ = parseFloat(Xt.sub(8.4).toFixed(H6)),
                            q = parseFloat($t.add(6.731).toFixed(H6)),
                            Q = parseFloat($t.add(4.456).toFixed(H6)),
                            ee = parseFloat($t.add(3.6).toFixed(H6)),
                            te = parseFloat($t.add(2.731).toFixed(H6)),
                            re = parseFloat($t.add(.841).toFixed(H6)),
                            r.drawLine(W, q, J, q),
                            r.drawArc(J, Q, 2.275, 90, 180),
                            r.drawLine(X, Q, X, ee), r.drawLine(X, ee, $, ee),
                            r.drawLine($, ee, $, re), r.drawLine($, re, V, re),
                            r.drawArc(Z, re, 1.89, 90, 180),
                            r.drawLine(Z, te, W, te), r.drawLine(W, te, W, q)) :
                           (ne = parseFloat(Xt.sub(7).toFixed(H6)),
                            ie = parseFloat(Xt.add(.624).toFixed(H6)),
                            oe = parseFloat(Xt.add(2.514).toFixed(H6)),
                            ae = parseFloat(Xt.add(3.81).toFixed(H6)),
                            se = parseFloat(Xt.add(6.085).toFixed(H6)),
                            ce = parseFloat(Xt.add(8.4).toFixed(H6)),
                            le = parseFloat($t.sub(6.731).toFixed(H6)),
                            ue = parseFloat($t.sub(4.456).toFixed(H6)),
                            de = parseFloat($t.sub(3.6).toFixed(H6)),
                            he = parseFloat($t.sub(2.731).toFixed(H6)),
                            fe = parseFloat($t.sub(.841).toFixed(H6)),
                            r.drawLine(ne, le, ae, le),
                            r.drawArc(ae, ue, 2.275, 270, 0),
                            r.drawLine(se, ue, se, de),
                            r.drawLine(se, de, ce, de),
                            r.drawLine(ce, de, ce, fe),
                            r.drawLine(ce, fe, oe, fe),
                            r.drawArc(ie, fe, 1.89, 270, 360),
                            r.drawLine(ie, he, ne, he),
                            r.drawLine(ne, he, ne, le)) :
                           1 == Jt.width && null != V3.stab_profile(Jt) &&
                               ('left' == V3.stab_value(Jt).value ?
                                    (pe = parseFloat($t.add(7).toFixed(H6)),
                                     ge = parseFloat($t.sub(.624).toFixed(H6)),
                                     ye = parseFloat($t.sub(2.514).toFixed(H6)),
                                     me = parseFloat($t.sub(3.81).toFixed(H6)),
                                     be = parseFloat($t.sub(6.085).toFixed(H6)),
                                     ve = parseFloat($t.sub(8.4).toFixed(H6)),
                                     _e = parseFloat(Xt.sub(6.731).toFixed(H6)),
                                     we = parseFloat(Xt.sub(4.456).toFixed(H6)),
                                     xe = parseFloat(Xt.sub(3.6).toFixed(H6)),
                                     ke = parseFloat(Xt.sub(2.731).toFixed(H6)),
                                     Ce = parseFloat(Xt.sub(.841).toFixed(H6)),
                                     r.drawLine(_e, pe, _e, me),
                                     r.drawArc(we, me, 2.275, 180, 270),
                                     r.drawLine(we, be, xe, be),
                                     r.drawLine(xe, be, xe, ve),
                                     r.drawLine(xe, ve, Ce, ve),
                                     r.drawLine(Ce, ve, Ce, ye),
                                     r.drawArc(Ce, ge, 1.89, 180, 270),
                                     r.drawLine(ke, ge, ke, pe),
                                     r.drawLine(ke, pe, _e, pe)) :
                                    'right' == V3.stab_value(Jt).value &&
                                        (Se = parseFloat($t.sub(7).toFixed(H6)),
                                         Ee = parseFloat(
                                             $t.add(.624).toFixed(H6)),
                                         Ae = parseFloat(
                                             $t.add(2.514).toFixed(H6)),
                                         Oe = parseFloat(
                                             $t.add(3.81).toFixed(H6)),
                                         Le = parseFloat(
                                             $t.add(6.085).toFixed(H6)),
                                         Ie = parseFloat(
                                             $t.add(8.4).toFixed(H6)),
                                         Te = parseFloat(
                                             Xt.add(6.731).toFixed(H6)),
                                         Fe = parseFloat(
                                             Xt.add(4.456).toFixed(H6)),
                                         Re = parseFloat(
                                             Xt.add(3.6).toFixed(H6)),
                                         Pe = parseFloat(
                                             Xt.add(2.731).toFixed(H6)),
                                         Ne = parseFloat(
                                             Xt.add(.841).toFixed(H6)),
                                         r.drawLine(Te, Se, Te, Oe),
                                         r.drawArc(Fe, Oe, 2.275, 0, 90),
                                         r.drawLine(Fe, Le, Re, Le),
                                         r.drawLine(Re, Le, Re, Ie),
                                         r.drawLine(Re, Ie, Ne, Ie),
                                         r.drawLine(Ne, Ie, Ne, Ae),
                                         r.drawArc(Ne, Ee, 1.89, 0, 90),
                                         r.drawLine(Pe, Ee, Pe, Se),
                                         r.drawLine(Pe, Se, Te, Se)))),
                  1 == t.draw_switch_overlay &&
                      (r.setActiveLayer('_switch_overylay'),
                       r.drawCircle(Xt, $t, new F3(2)),
                       1 == Jt.width && 1 == Jt.height ||
                               1 == Jt.height && 1 != Jt.width ?
                           (r.drawCircle(Xt.sub(5.08), $t, new F3(1)),
                            r.drawCircle(Xt.add(5.08), $t, new F3(1)),
                            t.upper ?
                                (r.drawCircle(
                                     Xt.sub(3.81), $t.add(2.54), new F3(1)),
                                 r.drawCircle(
                                     Xt.add(2.54), $t.add(5.08), new F3(1)),
                                 t8(r, Xt, $t.sub(5), new F3(0), new F3(1.75),
                                    new F3(1.75))) :
                                (r.drawCircle(
                                     Xt.add(3.81), $t.sub(2.54), new F3(1)),
                                 r.drawCircle(
                                     Xt.sub(2.54), $t.sub(5.08), new F3(1)),
                                 t8(r, Xt, $t.add(5), new F3(0), new F3(1.75),
                                    new F3(1.75)))) :
                           1 == Jt.width &&
                               (null == V3.stab_profile(Jt) ?
                                    (r.drawCircle(Xt.sub(5.08), $t, new F3(1)),
                                     r.drawCircle(Xt.add(5.08), $t, new F3(1)),
                                     t.upper ?
                                         (r.drawCircle(
                                              Xt.sub(3.81), $t.add(2.54),
                                              new F3(1)),
                                          r.drawCircle(
                                              Xt.add(2.54), $t.add(5.08),
                                              new F3(1)),
                                          t8(r, Xt, $t.sub(5), new F3(0),
                                             new F3(1.75), new F3(1.75))) :
                                         (r.drawCircle(
                                              Xt.add(3.81), $t.sub(2.54),
                                              new F3(1)),
                                          r.drawCircle(
                                              Xt.sub(2.54), $t.sub(5.08),
                                              new F3(1)),
                                          t8(r, Xt, $t.add(5), new F3(0),
                                             new F3(1.75), new F3(1.75)))) :
                                    'left' == V3.stab_value(Jt).value ?
                                    (r.drawCircle(Xt, $t.sub(5.08), new F3(1)),
                                     r.drawCircle(Xt, $t.add(5.08), new F3(1)),
                                     r.drawCircle(
                                         Xt.sub(2.54), $t.sub(3.81), new F3(1)),
                                     r.drawCircle(
                                         Xt.sub(5.08), $t.add(2.54), new F3(1)),
                                     t8(r, Xt.add(5), $t, new F3(0),
                                        new F3(1.75), new F3(1.75))) :
                                    'right' == V3.stab_value(Jt).value ?
                                    (r.drawCircle(Xt, $t.sub(5.08), new F3(1)),
                                     r.drawCircle(Xt, $t.add(5.08), new F3(1)),
                                     r.drawCircle(
                                         Xt.add(2.54), $t.add(3.81), new F3(1)),
                                     r.drawCircle(
                                         Xt.add(5.08), $t.sub(2.54), new F3(1)),
                                     t8(r, Xt.sub(5), $t, new F3(0),
                                        new F3(1.75), new F3(1.75))) :
                                    (r.drawCircle(Xt.sub(5.08), $t, new F3(1)),
                                     r.drawCircle(Xt.add(5.08), $t, new F3(1)),
                                     t.upper ?
                                         (r.drawCircle(
                                              Xt.sub(3.81), $t.add(2.54),
                                              new F3(1)),
                                          r.drawCircle(
                                              Xt.add(2.54), $t.add(5.08),
                                              new F3(1)),
                                          t8(r, Xt, $t.sub(5), new F3(0),
                                             new F3(1.75), new F3(1.75))) :
                                         (r.drawCircle(
                                              Xt.add(3.81), $t.sub(2.54),
                                              new F3(1)),
                                          r.drawCircle(
                                              Xt.sub(2.54), $t.sub(5.08),
                                              new F3(1)),
                                          t8(r, Xt, $t.add(5), new F3(0),
                                             new F3(1.75), new F3(1.75)))))),
                  1 == t.draw_pcb_ref &&
                      (r.setActiveLayer('_pcb_ref'),
                       r.drawCircle(Xt, $t, new F3(2)),
                       t.upper ? (r.drawCircle(
                                      Xt.sub(3.81), $t.add(2.54), new F3(1.5)),
                                  r.drawCircle(
                                      Xt.add(2.54), $t.add(5.08), new F3(1.5)),
                                  t8(r, Xt.sub(7.609), $t.add(2.413), new F3(0),
                                     new F3(2.55).div(2), new F3(3).div(2)),
                                  t8(r, Xt.add(6.234), $t.add(5.207), new F3(0),
                                     new F3(2.55).div(2), new F3(3).div(2))) :
                                 (r.drawCircle(
                                      Xt.add(3.81), $t.sub(2.54), new F3(1.5)),
                                  r.drawCircle(
                                      Xt.sub(2.54), $t.sub(5.08), new F3(1.5)),
                                  t8(r, Xt.add(7.609), $t.sub(2.413), new F3(0),
                                     new F3(2.55).div(2), new F3(3).div(2)),
                                  t8(r, Xt.sub(6.234), $t.sub(5.207), new F3(0),
                                     new F3(2.55).div(2), new F3(3).div(2)))),
                  1 == t.draw_cutoff &&
                      (r.setActiveLayer('_cutoff'),
                       De = parseFloat(Xt.sub(s).toFixed(H6)),
                       Me = parseFloat(Xt.add(s).toFixed(H6)),
                       ze = parseFloat(Xt.sub(s).add(l).toFixed(H6)),
                       Ke = parseFloat(Xt.add(s).sub(l).toFixed(H6)),
                       Ue = parseFloat($t.add(7).toFixed(H6)),
                       je = parseFloat($t.sub(7).toFixed(H6)),
                       Be = parseFloat($t.add(7).add(c).sub(l).toFixed(H6)),
                       Ye = parseFloat($t.add(7).add(c).toFixed(H6)),
                       He = parseFloat($t.sub(7).sub(c).toFixed(H6)),
                       Ge = parseFloat($t.sub(7).sub(c).add(l).toFixed(H6)),
                       r.drawLine(De, Ue, Me, Ue), r.drawLine(De, Ue, De, Be),
                       r.drawLine(ze, Ye, Ke, Ye), r.drawLine(Me, Be, Me, Ue),
                       We = parseFloat(l.toFixed(H6)),
                       r.drawArc(ze, Be, We, 90, 180),
                       r.drawArc(Ke, Be, We, 0, 90), r.drawLine(De, je, Me, je),
                       r.drawLine(De, je, De, Ge), r.drawLine(ze, He, Ke, He),
                       r.drawLine(Me, Ge, Me, je),
                       r.drawArc(ze, Ge, We, 180, 270),
                       r.drawArc(Ke, Ge, We, 270, 0)),
                  1 == t.draw_costar &&
                      (r.setActiveLayer('_costar'),
                       null != (Ze = $6(Jt.width)) &&
                           (Ve = Xt.sub(Ze), Je = $t, Xe = Xt.add(Ze), $e = $t,
                            qe = new F3(1.65), Qe = new F3(6.5),
                            et = new F3(7.5), tt = new F3(1),
                            e8(r, Ve.sub(qe), Je.add(Qe), Ve.add(qe),
                               Je.sub(et), tt),
                            e8(r, Xe.sub(qe), $e.add(Qe), Xe.add(qe),
                               $e.sub(et), tt))),
                  1 == t.draw_costar_large &&
                      (r.setActiveLayer('_costar_large'),
                       null != (rt = $6(Jt.width)) &&
                           (nt = Xt.sub(rt), it = $t, ot = Xt.add(rt), at = $t,
                            st = new F3(1.65).add(0), ct = new F3(6.45).add(1),
                            lt = new F3(7.75).add(1), ut = new F3(1),
                            e8(r, nt.sub(st), it.add(ct), nt.add(st),
                               it.sub(lt), ut),
                            e8(r, ot.sub(st), at.add(ct), ot.add(st),
                               at.sub(lt), ut))),
                  1 == t.draw_switch_3mm &&
                      (r.setActiveLayer('_sound_3mm'),
                       dt = parseFloat(Xt.sub(7).toFixed(H6)),
                       ht = parseFloat(Xt.sub(7).add(a).toFixed(H6)),
                       ft = parseFloat(Xt.add(7).sub(a).toFixed(H6)),
                       pt = parseFloat(Xt.add(7).toFixed(H6)),
                       gt = parseFloat($t.sub(7).toFixed(H6)),
                       yt = parseFloat($t.sub(7).add(a).toFixed(H6)),
                       mt = parseFloat($t.add(7).sub(a).toFixed(H6)),
                       bt = parseFloat($t.add(7).toFixed(H6)),
                       vt = parseFloat(a.toFixed(H6)),
                       1 == Jt.height ?
                           null == (_t = V3.stab_profile(Jt)) ?
                           (r.drawArc(ht, yt, vt, 180, 270),
                            r.drawLine(ht, gt, ft, gt),
                            r.drawArc(ft, yt, vt, -90, 0),
                            r.drawLine(pt, yt, pt, mt),
                            r.drawArc(ft, mt, vt, 0, 90),
                            r.drawLine(ft, bt, ht, bt),
                            r.drawArc(ht, mt, vt, 90, 180),
                            r.drawLine(dt, mt, dt, yt)) :
                           (wt = new F3(.5), xt = new F3(5), kt = new F3(9.275),
                            Ct = _t.offset,
                            'up' == V3.stab_value(Jt).value ?
                                t8(r, Xt, $t.add(new F3(1.225)), wt, xt.add(Ct),
                                   kt) :
                                t8(r, Xt, $t.sub(new F3(1.225)), wt, xt.add(Ct),
                                   kt)) :
                           1 != Jt.width || null == (St = V3.stab_profile(Jt)) ?
                           (r.drawArc(ht, yt, vt, 180, 270),
                            r.drawLine(ht, gt, ft, gt),
                            r.drawArc(ft, yt, vt, -90, 0),
                            r.drawLine(pt, yt, pt, mt),
                            r.drawArc(ft, mt, vt, 0, 90),
                            r.drawLine(ft, bt, ht, bt),
                            r.drawArc(ht, mt, vt, 90, 180),
                            r.drawLine(dt, mt, dt, yt)) :
                           (Et = new F3(.5), At = new F3(9.275), Ot = new F3(5),
                            Lt = St.offset,
                            'left' == V3.stab_value(Jt).value ?
                                t8(r, Xt.sub(new F3(1.225)), $t, Et, At,
                                   Ot.add(Lt)) :
                                t8(r, Xt.add(new F3(1.225)), $t, Et, At,
                                   Ot.add(Lt)))),
                  1 == t.draw_main &&
                      (r.setActiveLayer('_main'),
                       It = parseFloat(Xt.sub(7).toFixed(H6)),
                       Tt = parseFloat(Xt.sub(7).add(a).toFixed(H6)),
                       Ft = parseFloat(Xt.add(7).sub(a).toFixed(H6)),
                       Rt = parseFloat(Xt.add(7).toFixed(H6)),
                       Pt = parseFloat($t.sub(7).toFixed(H6)),
                       Nt = parseFloat($t.sub(7).add(a).toFixed(H6)),
                       Dt = parseFloat($t.add(7).sub(a).toFixed(H6)),
                       Mt = parseFloat($t.add(7).toFixed(H6)),
                       zt = parseFloat(a.toFixed(H6)),
                       r.drawArc(Tt, Nt, zt, 180, 270),
                       r.drawLine(Tt, Pt, Ft, Pt),
                       r.drawArc(Ft, Nt, zt, -90, 0),
                       r.drawLine(Rt, Nt, Rt, Dt), r.drawArc(Ft, Dt, zt, 0, 90),
                       r.drawLine(Ft, Mt, Tt, Mt),
                       r.drawArc(Tt, Dt, zt, 90, 180),
                       r.drawLine(It, Dt, It, Nt)),
                  1 != Jt.height && 1 != Jt.width)
                throw 'can not accept key with width ' + Jt.width +
                    ', height: ' + Jt.height;
              1 == Jt.height ? null != (Kt = V3.stab_profile(Jt)) &&
                      (Ut = new F3(.5), jt = new F3(3.481), Bt = new F3(7.5),
                       Yt = Kt.offset,
                       1 == t.draw_stab_large &&
                           (r.setActiveLayer('_stab_large'),
                            'up' == V3.stab_value(Jt).value ?
                                (t8(r, Xt.sub(Yt), $t.add(new F3(1.5)), Ut,
                                    jt.add(new F3(1)), Bt.add(new F3(1.5))),
                                 t8(r, Xt.add(Yt), $t.add(new F3(1.5)), Ut,
                                    jt.add(new F3(1)), Bt.add(new F3(1.5)))) :
                                (t8(r, Xt.sub(Yt), $t.sub(new F3(1.5)), Ut,
                                    jt.add(new F3(1)), Bt.add(new F3(1.5))),
                                 t8(r, Xt.add(Yt), $t.sub(new F3(1.5)), Ut,
                                    jt.add(new F3(1)), Bt.add(new F3(1.5))))),
                       1 == t.draw_stab_small &&
                           (r.setActiveLayer('_stab'),
                            'up' == V3.stab_value(Jt).value ?
                                (t8(r, Xt.sub(Yt), $t.add(new F3(1.5)), Ut, jt,
                                    Bt),
                                 t8(r, Xt.add(Yt), $t.add(new F3(1.5)), Ut, jt,
                                    Bt)) :
                                (t8(r, Xt.sub(Yt), $t.sub(new F3(1.5)), Ut, jt,
                                    Bt),
                                 t8(r, Xt.add(Yt), $t.sub(new F3(1.5)), Ut, jt,
                                    Bt)))) :
                               1 != Jt.width ||
                      null != (Ht = V3.stab_profile(Jt)) &&
                          (Gt = new F3(.5), Wt = new F3(7.5),
                           Zt = new F3(3.481), Vt = Ht.offset,
                           1 == t.draw_stab_large &&
                               (r.setActiveLayer('_stab_large'),
                                'left' == V3.stab_value(Jt).value ?
                                    (t8(r, Xt.sub(new F3(1.5)), $t.add(Vt), Gt,
                                        Wt.add(new F3(1)), Zt.add(new F3(1.5))),
                                     t8(r, Xt.sub(new F3(1.5)), $t.sub(Vt), Gt,
                                        Wt.add(new F3(1)),
                                        Zt.add(new F3(1.5)))) :
                                    (t8(r, Xt.add(new F3(1.5)), $t.add(Vt), Gt,
                                        Wt.add(new F3(1)), Zt.add(new F3(1.5))),
                                     t8(r, Xt.add(new F3(1.5)), $t.sub(Vt), Gt,
                                        Wt.add(new F3(1)),
                                        Zt.add(new F3(1.5))))),
                           1 == t.draw_stab_small &&
                               (r.setActiveLayer('_stab'),
                                'left' == V3.stab_value(Jt).value ?
                                    (t8(r, Xt.sub(new F3(1.5)), $t.add(Vt), Gt,
                                        Wt, Zt),
                                     t8(r, Xt.sub(new F3(1.5)), $t.sub(Vt), Gt,
                                        Wt, Zt)) :
                                    (t8(r, Xt.add(new F3(1.5)), $t.add(Vt), Gt,
                                        Wt, Zt),
                                     t8(r, Xt.add(new F3(1.5)), $t.sub(Vt), Gt,
                                        Wt, Zt))))
            }
          } catch (e) {
            H.e(e)
          } finally {
            H.f()
          }
          return r.toDxfString()
        }
      }
      var i8 = Yi, o8 = Tv.filter, a8 = Xp, s8 = a8('filter');
      i8({target: 'Array', proto: !0, forced: !s8}, {
        filter: function(e) {
          return o8(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
      });
      var c8 = Yi, l8 = x, u8 = tv, d8 = da, h8 = 'ArrayBuffer', f8 = u8[h8],
          p8 = l8[h8];
      c8({global: !0, forced: p8 !== f8}, {ArrayBuffer: f8}), d8(h8);
      var g8 = {base64: !0, array: !0, string: !0};
      if (g8.arraybuffer = 'undefined' != typeof ArrayBuffer &&
              'undefined' != typeof Uint8Array,
          g8.nodebuffer = 'undefined' != typeof Buffer,
          g8.uint8array = 'undefined' != typeof Uint8Array,
          'undefined' == typeof ArrayBuffer)
        g8.blob = !1;
      else {
        var y8 = new ArrayBuffer(0);
        try {
          g8.blob = 0 === new Blob([y8], {type: 'application/zip'}).size
        } catch (e) {
          try {
            var m8 = self.BlobBuilder || self.WebKitBlobBuilder ||
                self.MozBlobBuilder || self.MSBlobBuilder,
                b8 = new m8;
            b8.append(y8), g8.blob = 0 === b8.getBlob('application/zip').size
          } catch (e) {
            g8.blob = !1
          }
        }
      }
      g8.nodestream = !1;
      var v8 =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          _8 = {
            encode: function(e) {
              for (var t, r, n, i, o, a, s = [], c = 0, l = e.length,
                                         u = 'string' !== I8.getTypeOf(e);
                   c < e.length;)
                a = l - c,
                o = u ?
                    (t = e[c++], r = c < l ? e[c++] : 0, c < l ? e[c++] : 0) :
                    (t = e.charCodeAt(c++), r = c < l ? e.charCodeAt(c++) : 0,
                     c < l ? e.charCodeAt(c++) : 0),
                n = (3 & t) << 4 | r >> 4,
                i = 1 < a ? (15 & r) << 2 | o >> 6 : 64,
                o = 2 < a ? 63 & o : 64,
                s.push(
                    v8.charAt(t >> 2) + v8.charAt(n) + v8.charAt(i) +
                    v8.charAt(o));
              return s.join('')
            },
            decode: function(e) {
              var t, r, n, i, o, a, s = 0, c = 0;
              if ('data:' === e.substr(0, 'data:'.length))
                throw new Error(
                    'Invalid base64 input, it looks like a data url.');
              var l,
                  u = 3 * (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '')).length / 4;
              if (e.charAt(e.length - 1) === v8.charAt(64) && u--,
                  e.charAt(e.length - 2) === v8.charAt(64) && u--, u % 1 != 0)
                throw new Error('Invalid base64 input, bad content length.');
              for (l = new (g8.uint8array ? Uint8Array : Array)(0 | u);
                   s < e.length;)
                n = v8.indexOf(e.charAt(s++)),
                t = (15 & (i = v8.indexOf(e.charAt(s++)))) << 4 |
                    (o = v8.indexOf(e.charAt(s++))) >> 2,
                r = (3 & o) << 6 | (a = v8.indexOf(e.charAt(s++))),
                l[c++] = n << 2 | i >> 4, 64 !== o && (l[c++] = t),
                64 !== a && (l[c++] = r);
              return l
            }
          },
          w8 = Fm, x8 = Sm.exportTypedArrayStaticMethod, k8 = xv;
      x8('from', k8, w8);
      var C8 = Yi, S8 = $m, E8 = R0;
      C8({target: 'Array', proto: !0}, {fill: S8}), E8('fill');
      var A8 = {
        isNode: 'undefined' != typeof Buffer,
        newBufferFrom: function(e, t) {
          if (Buffer.from && Buffer.from !== Uint8Array.from)
            return Buffer.from(e, t);
          if ('number' == typeof e)
            throw new Error('The "data" argument must not be a number');
          return new Buffer(e, t)
        },
        allocBuffer: function(e) {
          if (Buffer.alloc) return Buffer.alloc(e);
          e = new Buffer(e);
          return e.fill(0), e
        },
        isBuffer: function(e) {
          return Buffer.isBuffer(e)
        },
        isStream: function(e) {
          return e && 'function' == typeof e.on &&
              'function' == typeof e.pause && 'function' == typeof e.resume
        }
      },
          O8 = null, O8 = Promise, L8 = {Promise: O8}, I8 = {};
      function T8(e) {
        return R8(e, new (g8.uint8array ? Uint8Array : Array)(e.length))
      }
      function F8(e) {
        return e
      }
      function R8(e, t) {
        for (var r = 0; r < e.length; ++r) t[r] = 255 & e.charCodeAt(r);
        return t
      }
      I8.newBlob = function(t, r) {
        I8.checkSupport('blob');
        try {
          return new Blob([t], {type: r})
        } catch (e) {
          try {
            var n = new (
                self.BlobBuilder || self.WebKitBlobBuilder ||
                self.MozBlobBuilder || self.MSBlobBuilder);
            return n.append(t), n.getBlob(r)
          } catch (e) {
            throw new Error('Bug : can\'t construct the Blob.')
          }
        }
      };
      var P8 = {
        stringifyByChunk: function(e, t, r) {
          var n = [], i = 0, o = e.length;
          if (o <= r) return String.fromCharCode.apply(null, e);
          for (; i < o;)
            'array' === t || 'nodebuffer' === t ?
                n.push(String.fromCharCode.apply(
                    null, e.slice(i, Math.min(i + r, o)))) :
                n.push(String.fromCharCode.apply(
                    null, e.subarray(i, Math.min(i + r, o)))),
                i += r;
          return n.join('')
        },
        stringifyByChar: function(e) {
          for (var t = '', r = 0; r < e.length; r++)
            t += String.fromCharCode(e[r]);
          return t
        },
        applyCanBeUsed: {
          uint8array: function() {
            try {
              return g8.uint8array &&
                  1 ===
                  String.fromCharCode.apply(null, new Uint8Array(1)).length
            } catch (e) {
              return !1
            }
          }(),
          nodebuffer: function() {
            try {
              return g8.nodebuffer &&
                  1 ===
                  String.fromCharCode.apply(null, A8.allocBuffer(1)).length
            } catch (e) {
              return !1
            }
          }()
        }
      };
      function N8(e) {
        var t = 65536, r = I8.getTypeOf(e), n = !0;
        if ('uint8array' === r ?
                n = P8.applyCanBeUsed.uint8array :
                'nodebuffer' === r && (n = P8.applyCanBeUsed.nodebuffer),
            n)
          for (; 1 < t;) try {
              return P8.stringifyByChunk(e, r, t)
            } catch (e) {
              t = Math.floor(t / 2)
            }
        return P8.stringifyByChar(e)
      }
      function D8(e, t) {
        for (var r = 0; r < e.length; r++) t[r] = e[r];
        return t
      }
      I8.applyFromCharCode = N8;
      var M8 = {};
      function z8(e) {
        this.name = e || 'default', this.streamInfo = {},
        this.generatedError = null, this.extraStreamInfo = {},
        this.isPaused = !0, this.isFinished = !1, this.isLocked = !1,
        this._listeners = {data: [], end: [], error: []}, this.previous = null
      }
      M8.string = {
        string: F8,
        array: function(e) {
          return R8(e, new Array(e.length))
        },
        arraybuffer: function(e) {
          return M8.string.uint8array(e).buffer
        },
        uint8array: function(e) {
          return R8(e, new Uint8Array(e.length))
        },
        nodebuffer: function(e) {
          return R8(e, A8.allocBuffer(e.length))
        }
      },
      M8.array = {
        string: N8,
        array: F8,
        arraybuffer: function(e) {
          return new Uint8Array(e).buffer
        },
        uint8array: function(e) {
          return new Uint8Array(e)
        },
        nodebuffer: function(e) {
          return A8.newBufferFrom(e)
        }
      },
      M8.arraybuffer = {
        string: function(e) {
          return N8(new Uint8Array(e))
        },
        array: function(e) {
          return D8(new Uint8Array(e), new Array(e.byteLength))
        },
        arraybuffer: F8,
        uint8array: function(e) {
          return new Uint8Array(e)
        },
        nodebuffer: function(e) {
          return A8.newBufferFrom(new Uint8Array(e))
        }
      },
      M8.uint8array = {
        string: N8,
        array: function(e) {
          return D8(e, new Array(e.length))
        },
        arraybuffer: function(e) {
          return e.buffer
        },
        uint8array: F8,
        nodebuffer: function(e) {
          return A8.newBufferFrom(e)
        }
      },
      M8.nodebuffer = {
        string: N8,
        array: function(e) {
          return D8(e, new Array(e.length))
        },
        arraybuffer: function(e) {
          return M8.nodebuffer.uint8array(e).buffer
        },
        uint8array: function(e) {
          return D8(e, new Uint8Array(e.length))
        },
        nodebuffer: F8
      },
      I8.transformTo =
          function(e, t) {
        if (t = t || '', !e) return t;
        I8.checkSupport(e);
        var r = I8.getTypeOf(t);
        return M8[r][e](t)
      },
      I8.getTypeOf =
          function(e) {
        return 'string' == typeof e ?
            'string' :
            '[object Array]' === Object.prototype.toString.call(e) ?
            'array' :
            g8.nodebuffer && A8.isBuffer(e) ?
            'nodebuffer' :
            g8.uint8array && e instanceof Uint8Array ?
            'uint8array' :
            g8.arraybuffer && e instanceof ArrayBuffer ? 'arraybuffer' : void 0
      },
      I8.checkSupport =
          function(e) {
        if (!g8[e.toLowerCase()])
          throw new Error(e + ' is not supported by this platform')
      },
      I8.MAX_VALUE_16BITS = 65535, I8.MAX_VALUE_32BITS = -1,
      I8.pretty = function(e) {
        for (var t, r = '', n = 0; n < (e || '').length; n++)
          r += '\\x' + ((t = e.charCodeAt(n)) < 16 ? '0' : '') +
              t.toString(16).toUpperCase();
        return r
      }, I8.delay = function(e, t, r) {
        setTimeout(function() {
          e.apply(r || null, t || [])
        }, 0)
      }, I8.inherits = function(e, t) {
        function r() {}
        r.prototype = t.prototype, e.prototype = new r
      }, I8.extend = function() {
        for (var e, t = {}, r = 0; r < arguments.length; r++)
          for (e in arguments[r])
            arguments[r].hasOwnProperty(e) && void 0 === t[e] &&
                (t[e] = arguments[r][e]);
        return t
      }, I8.prepareContent = function(r, e, n, i, o) {
        return L8.Promise.resolve(e)
            .then(function(n) {
              return g8.blob &&
                      (n instanceof Blob ||
                       -1 !==
                           ['[object File]', '[object Blob]'].indexOf(
                               Object.prototype.toString.call(n))) &&
                      'undefined' != typeof FileReader ?
                  new L8.Promise(function(t, r) {
                    var e = new FileReader;
                    e.onload = function(e) {
                      t(e.target.result)
                    }, e.onerror = function(e) {
                      r(e.target.error)
                    }, e.readAsArrayBuffer(n)
                  }) :
                  n
            })
            .then(function(e) {
              var t = I8.getTypeOf(e);
              return t ?
                  ('arraybuffer' === t ? e = I8.transformTo('uint8array', e) :
                                         'string' === t &&
                           (o ? e = _8.decode(e) :
                                n && !0 !== i && (e = T8(e))),
                   e) :
                  L8.Promise.reject(new Error(
                      'Can\'t read the data of \'' + r +
                      '\'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?'))
            })
      }, z8.prototype = {
        push: function(e) {
          this.emit('data', e)
        },
        end: function() {
          if (this.isFinished) return !1;
          this.flush();
          try {
            this.emit('end'), this.cleanUp(), this.isFinished = !0
          } catch (e) {
            this.emit('error', e)
          }
          return !0
        },
        error: function(e) {
          return !this.isFinished &&
              (this.isPaused ?
                   this.generatedError = e :
                   (this.isFinished = !0, this.emit('error', e),
                    this.previous && this.previous.error(e), this.cleanUp()),
               !0)
        },
        on: function(e, t) {
          return this._listeners[e].push(t), this
        },
        cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null,
          this._listeners = []
        },
        emit: function(e, t) {
          if (this._listeners[e])
            for (var r = 0; r < this._listeners[e].length; r++)
              this._listeners[e][r].call(this, t)
        },
        pipe: function(e) {
          return e.registerPrevious(this)
        },
        registerPrevious: function(e) {
          if (this.isLocked)
            throw new Error(
                'The stream \'' + this + '\' has already been used.');
          this.streamInfo = e.streamInfo, this.mergeStreamInfo(),
          this.previous = e;
          var t = this;
          return e.on('data', function(e) {
            t.processChunk(e)
          }), e.on('end', function() {
            t.end()
          }), e.on('error', function(e) {
            t.error(e)
          }), this
        },
        pause: function() {
          return !this.isPaused && !this.isFinished &&
              (this.isPaused = !0, this.previous && this.previous.pause(), !0)
        },
        resume: function() {
          if (!this.isPaused || this.isFinished) return !1;
          var e = this.isPaused = !1;
          return this.generatedError &&
                     (this.error(this.generatedError), e = !0),
                 this.previous && this.previous.resume(), !e
        },
        flush: function() {},
        processChunk: function(e) {
          this.push(e)
        },
        withStreamInfo: function(e, t) {
          return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this
        },
        mergeStreamInfo: function() {
          for (var e in this.extraStreamInfo)
            this.extraStreamInfo.hasOwnProperty(e) &&
                (this.streamInfo[e] = this.extraStreamInfo[e])
        },
        lock: function() {
          if (this.isLocked)
            throw new Error(
                'The stream \'' + this + '\' has already been used.');
          this.isLocked = !0, this.previous && this.previous.lock()
        },
        toString: function() {
          var e = 'Worker ' + this.name;
          return this.previous ? this.previous + ' -> ' + e : e
        }
      };
      for (var K8 = {}, U8 = new Array(256), j8 = 0; j8 < 256; j8++)
        U8[j8] = 252 <= j8 ?
            6 :
            248 <= j8 ? 5 : 240 <= j8 ? 4 : 224 <= j8 ? 3 : 192 <= j8 ? 2 : 1;
      U8[254] = U8[254] = 1;
      var B8 = function(e) {
        for (var t, r, n, i, o = e.length, a = 0, s = 0; s < o; s++)
          55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o &&
              56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
              (r = 65536 + (r - 55296 << 10) + (n - 56320), s++),
              a += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
        for (t = new (g8.uint8array ? Uint8Array : Array)(a), s = i = 0; i < a;
             s++)
          55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o &&
              56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
              (r = 65536 + (r - 55296 << 10) + (n - 56320), s++),
              r < 128 ? t[i++] = r :
                        (r < 2048 ? t[i++] = 192 | r >>> 6 :
                                    (r < 65536 ? t[i++] = 224 | r >>> 12 :
                                                 (t[i++] = 240 | r >>> 18,
                                                  t[i++] = 128 | r >>> 12 & 63),
                                     t[i++] = 128 | r >>> 6 & 63),
                         t[i++] = 128 | 63 & r);
        return t
      }, Y8 = function(e, t) {
        for (var r = (t = (t = t || e.length) > e.length ? e.length : t) - 1;
             0 <= r && 128 == (192 & e[r]);)
          r--;
        return !(r < 0) && 0 !== r && r + U8[e[r]] > t ? r : t
      }, H8 = function(e) {
        for (var t, r, n = e.length, i = new Array(2 * n), o = 0, a = 0; a < n;)
          if ((t = e[a++]) < 128)
            i[o++] = t;
          else if (4 < (r = U8[t]))
            i[o++] = 65533, a += r - 1;
          else {
            for (t &= 2 === r ? 31 : 3 === r ? 15 : 7; 1 < r && a < n;)
              t = t << 6 | 63 & e[a++], r--;
            1 < r ? i[o++] = 65533 :
                    t < 65536 ? i[o++] = t :
                                (t -= 65536, i[o++] = 55296 | t >> 10 & 1023,
                                 i[o++] = 56320 | 1023 & t)
          }
        return i.length !== o &&
                   (i.subarray ? i = i.subarray(0, o) : i.length = o),
               I8.applyFromCharCode(i)
      };
      function G8() {
        z8.call(this, 'utf-8 decode'), this.leftOver = null
      }
      function W8() {
        z8.call(this, 'utf-8 encode')
      }
      function Z8(e) {
        z8.call(this, 'ConvertWorker to ' + e), this.destType = e
      }
      K8.utf8encode =
          function(e) {
        return g8.nodebuffer ? A8.newBufferFrom(e, 'utf-8') : B8(e)
      },
      K8.utf8decode =
          function(e) {
        return g8.nodebuffer ?
            I8.transformTo('nodebuffer', e).toString('utf-8') :
            (e = I8.transformTo(g8.uint8array ? 'uint8array' : 'array', e),
             H8(e))
      },
      I8.inherits(G8, z8),
      G8.prototype.processChunk =
          function(e) {
        var t = I8.transformTo(g8.uint8array ? 'uint8array' : 'array', e.data);
        this.leftOver && this.leftOver.length &&
            (g8.uint8array ?
                 (n = t,
                  (t = new Uint8Array(n.length + this.leftOver.length))
                      .set(this.leftOver, 0),
                  t.set(n, this.leftOver.length)) :
                 t = this.leftOver.concat(t),
             this.leftOver = null);
        var r = Y8(t), n = t;
        r !== t.length &&
            (g8.uint8array ?
                 (n = t.subarray(0, r),
                  this.leftOver = t.subarray(r, t.length)) :
                 (n = t.slice(0, r), this.leftOver = t.slice(r, t.length))),
            this.push({data: K8.utf8decode(n), meta: e.meta})
      },
      G8.prototype.flush =
          function() {
        this.leftOver && this.leftOver.length &&
            (this.push({data: K8.utf8decode(this.leftOver), meta: {}}),
             this.leftOver = null)
      },
      K8.Utf8DecodeWorker = G8, I8.inherits(W8, z8),
      W8.prototype.processChunk =
          function(e) {
        this.push({data: K8.utf8encode(e.data), meta: e.meta})
      },
      K8.Utf8EncodeWorker = W8, I8.inherits(Z8, z8),
      Z8.prototype.processChunk = function(e) {
        this.push({data: I8.transformTo(this.destType, e.data), meta: e.meta})
      };
      var V8 = null;
      function J8(e, t, r) {
        switch (e) {
          case 'blob':
            return I8.newBlob(I8.transformTo('arraybuffer', t), r);
          case 'base64':
            return _8.encode(t);
          default:
            return I8.transformTo(e, t)
        }
      }
      function X8(e, t) {
        for (var r = 0, n = null, i = 0, o = 0; o < t.length; o++)
          i += t[o].length;
        switch (e) {
          case 'string':
            return t.join('');
          case 'array':
            return Array.prototype.concat.apply([], t);
          case 'uint8array':
            for (n = new Uint8Array(i), o = 0; o < t.length; o++)
              n.set(t[o], r), r += t[o].length;
            return n;
          case 'nodebuffer':
            return Buffer.concat(t);
          default:
            throw new Error('concat : unsupported type \'' + e + '\'')
        }
      }
      function $8(e, s) {
        return new L8.Promise(function(t, r) {
          var n = [], i = e._internalType, o = e._outputType, a = e._mimeType;
          e.on('data',
               function(e, t) {
                 n.push(e), s && s(t)
               })
              .on('error',
                  function(e) {
                    n = [], r(e)
                  })
              .on('end',
                  function() {
                    try {
                      var e = J8(o, X8(i, n), a);
                      t(e)
                    } catch (e) {
                      r(e)
                    }
                    n = []
                  })
              .resume()
        })
      }
      function q8(e, t, r) {
        var n = t;
        switch (t) {
          case 'blob':
          case 'arraybuffer':
            n = 'uint8array';
            break;
          case 'base64':
            n = 'string'
        }
        try {
          this._internalType = n, this._outputType = t, this._mimeType = r,
          I8.checkSupport(n), this._worker = e.pipe(new Z8(n)), e.lock()
        } catch (e) {
          this._worker = new z8('error'), this._worker.error(e)
        }
      }
      q8.prototype = {
        accumulate: function(e) {
          return $8(this, e)
        },
        on: function(e, t) {
          var r = this;
          return 'data' === e ? this._worker.on(e, function(e) {
            t.call(r, e.data, e.meta)
          }) : this._worker.on(e, function() {
            I8.delay(t, arguments, r)
          }), this
        },
        resume: function() {
          return I8.delay(this._worker.resume, [], this._worker), this
        },
        pause: function() {
          return this._worker.pause(), this
        },
        toNodejsStream: function(e) {
          if (I8.checkSupport('nodestream'), 'nodebuffer' !== this._outputType)
            throw new Error(
                this._outputType + ' is not supported by this method');
          return new V8(
              this, {objectMode: 'nodebuffer' !== this._outputType}, e)
        }
      };
      var Q8 = {
        base64: !1,
        binary: !1,
        dir: !1,
        createFolders: !0,
        date: null,
        compression: null,
        compressionOptions: null,
        comment: null,
        unixPermissions: null,
        dosPermissions: null
      },
          eI = 16384;
      function tI(e) {
        z8.call(this, 'DataWorker');
        var t = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null,
        this.type = '', this._tickScheduled = !1,
        e.then(
            function(e) {
              t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0,
              t.type = I8.getTypeOf(e), t.isPaused || t._tickAndRepeat()
            },
            function(e) {
              t.error(e)
            })
      }
      function rI() {
        for (var e = [], t = 0; t < 256; t++) {
          for (var r = t, n = 0; n < 8; n++)
            r = 1 & r ? 3988292384 ^ r >>> 1 : r >>> 1;
          e[t] = r
        }
        return e
      }
      I8.inherits(tI, z8), tI.prototype.cleanUp = function() {
        z8.prototype.cleanUp.call(this), this.data = null
      }, tI.prototype.resume = function() {
        return !!z8.prototype.resume.call(this) &&
            (!this._tickScheduled && this.dataIsReady &&
                 (this._tickScheduled = !0,
                  I8.delay(this._tickAndRepeat, [], this)),
             !0)
      }, tI.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1,
        this.isPaused || this.isFinished ||
            (this._tick(),
             this.isFinished ||
                 (I8.delay(this._tickAndRepeat, [], this),
                  this._tickScheduled = !0))
      }, tI.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var e = null, t = Math.min(this.max, this.index + eI);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case 'string':
            e = this.data.substring(this.index, t);
            break;
          case 'uint8array':
            e = this.data.subarray(this.index, t);
            break;
          case 'array':
          case 'nodebuffer':
            e = this.data.slice(this.index, t)
        }
        return this.index = t, this.push({
          data: e,
          meta: {percent: this.max ? this.index / this.max * 100 : 0}
        })
      };
      var nI = rI();
      function iI(e, t, r, n) {
        var i = nI, o = n + r;
        e ^= -1;
        for (var a = n; a < o; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
        return -1 ^ e
      }
      function oI(e, t, r, n) {
        var i = nI, o = n + r;
        e ^= -1;
        for (var a = n; a < o; a++)
          e = e >>> 8 ^ i[255 & (e ^ t.charCodeAt(a))];
        return -1 ^ e
      }
      function aI(e, t) {
        return void 0 !== e && e.length ?
            ('string' !== I8.getTypeOf(e) ? iI : oI)(0 | t, e, e.length, 0) :
            0
      }
      function sI() {
        z8.call(this, 'Crc32Probe'), this.withStreamInfo('crc32', 0)
      }
      function cI(e) {
        z8.call(this, 'DataLengthProbe for ' + e), this.propName = e,
                                                   this.withStreamInfo(e, 0)
      }
      function lI(e, t, r, n, i) {
        this.compressedSize = e, this.uncompressedSize = t, this.crc32 = r,
        this.compression = n, this.compressedContent = i
      }
      I8.inherits(sI, z8),
          sI.prototype.processChunk =
              function(e) {
            this.streamInfo.crc32 = aI(e.data, this.streamInfo.crc32 || 0),
            this.push(e)
          },
          I8.inherits(cI, z8),
          cI.prototype.processChunk =
              function(e) {
            var t;
            e &&
                (t = this.streamInfo[this.propName] || 0,
                 this.streamInfo[this.propName] = t + e.data.length),
                z8.prototype.processChunk.call(this, e)
          },
          lI.prototype = {
            getContentWorker: function() {
              var e = new tI(L8.Promise.resolve(this.compressedContent))
                          .pipe(this.compression.uncompressWorker())
                          .pipe(new cI('data_length')),
                  t = this;
              return e.on('end', function() {
                if (this.streamInfo.data_length !== t.uncompressedSize)
                  throw new Error('Bug : uncompressed data size mismatch')
              }), e
            },
            getCompressedWorker: function() {
              return new tI(L8.Promise.resolve(this.compressedContent))
                  .withStreamInfo('compressedSize', this.compressedSize)
                  .withStreamInfo('uncompressedSize', this.uncompressedSize)
                  .withStreamInfo('crc32', this.crc32)
                  .withStreamInfo('compression', this.compression)
            }
          },
          lI.createWorkerFrom = function(e, t, r) {
            return e.pipe(new sI)
                .pipe(new cI('uncompressedSize'))
                .pipe(t.compressWorker(r))
                .pipe(new cI('compressedSize'))
                .withStreamInfo('compression', t)
          };
      var uI = function(e, t, r) {
        this.name = e, this.dir = r.dir, this.date = r.date,
        this.comment = r.comment, this.unixPermissions = r.unixPermissions,
        this.dosPermissions = r.dosPermissions, this._data = t,
        this._dataBinary = r.binary, this.options = {
          compression: r.compression,
          compressionOptions: r.compressionOptions
        }
      };
      uI.prototype = {
        internalStream: function(e) {
          var t = null, r = 'string';
          try {
            if (!e) throw new Error('No output type specified.');
            var n = 'string' === (r = e.toLowerCase()) || 'text' === r;
            'binarystring' !== r && 'text' !== r || (r = 'string');
            var t = this._decompressWorker(), i = !this._dataBinary;
            i && !n && (t = t.pipe(new K8.Utf8EncodeWorker)),
                !i && n && (t = t.pipe(new K8.Utf8DecodeWorker))
          } catch (e) {
            (t = new z8('error')).error(e)
          }
          return new q8(t, r, '')
        },
        async: function(e, t) {
          return this.internalStream(e).accumulate(t)
        },
        nodeStream: function(e, t) {
          return this.internalStream(e || 'nodebuffer').toNodejsStream(t)
        },
        _compressWorker: function(e, t) {
          if (this._data instanceof lI &&
              this._data.compression.magic === e.magic)
            return this._data.getCompressedWorker();
          var r = this._decompressWorker();
          return this._dataBinary || (r = r.pipe(new K8.Utf8EncodeWorker)),
                 lI.createWorkerFrom(r, e, t)
        },
        _decompressWorker: function() {
          return this._data instanceof lI ?
              this._data.getContentWorker() :
              this._data instanceof z8 ? this._data : new tI(this._data)
        }
      };
      for (
          var dI =
                  [
                    'asText', 'asBinary', 'asNodeBuffer', 'asUint8Array',
                    'asArrayBuffer'
                  ],
              hI =
                  function() {
                    throw new Error(
                        'This method has been removed in JSZip 3.0, please check the upgrade guide.')
                  },
              fI = 0;
          fI < dI.length; fI++)
        uI.prototype[dI[fI]] = hI;
      var pI = 4, gI = 0, yI = 1, mI = 2;
      function bI(e) {
        for (var t = e.length; 0 <= --t;) e[t] = 0
      }
      var vI = 0, _I = 1, wI = 2, xI = 3, kI = 258, CI = 29, SI = 256,
          EI = SI + 1 + CI, AI = 30, OI = 19, LI = 2 * EI + 1, II = 15, TI = 16,
          FI = 7, RI = 256, PI = 16, NI = 17, DI = 18,
          MI = new Uint8Array([
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2,
            2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0
          ]),
          zI = new Uint8Array([
            0, 0, 0, 0, 1, 1, 2, 2,  3,  3,  4,  4,  5,  5,  6,
            6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13
          ]),
          KI = new Uint8Array(
              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
          UI = new Uint8Array([
            16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15
          ]),
          jI = 512, BI = new Array(2 * (EI + 2));
      bI(BI);
      var YI = new Array(2 * AI);
      bI(YI);
      var HI = new Array(jI);
      bI(HI);
      var GI = new Array(kI - xI + 1);
      bI(GI);
      var WI = new Array(CI);
      bI(WI);
      var ZI = new Array(AI), VI, JI, XI;
      function $I(e, t, r, n, i) {
        this.static_tree = e, this.extra_bits = t, this.extra_base = r,
        this.elems = n, this.max_length = i, this.has_stree = e && e.length
      }
      function qI(e, t) {
        this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
      }
      bI(ZI);
      var QI =
              function(e) {
        return e < 256 ? HI[e] : HI[256 + (e >>> 7)]
      },
          eT =
              function(e, t) {
            e.pending_buf[e.pending++] = 255 & t,
            e.pending_buf[e.pending++] = t >>> 8 & 255
          },
          tT =
              function(e, t, r) {
            e.bi_valid > TI - r ?
                (e.bi_buf |= t << e.bi_valid & 65535, eT(e, e.bi_buf),
                 e.bi_buf = t >> TI - e.bi_valid, e.bi_valid += r - TI) :
                (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += r)
          },
          rT =
              function(e, t, r) {
            tT(e, r[2 * t], r[2 * t + 1])
          },
          nT =
              function(e, t) {
            for (var r = 0; r |= 1 & e, e >>>= 1, r <<= 1, 0 < --t;)
              ;
            return r >>> 1
          },
          iT =
              function(e) {
            16 === e.bi_valid ?
                (eT(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) :
                8 <= e.bi_valid &&
                    (e.pending_buf[e.pending++] = 255 & e.bi_buf,
                     e.bi_buf >>= 8, e.bi_valid -= 8)
          },
          oT =
              function(e, t) {
            for (var r, n, i, o, a,
                 s = t.dyn_tree, c = t.max_code, l = t.stat_desc.static_tree,
                 u = t.stat_desc.has_stree, d = t.stat_desc.extra_bits,
                 h = t.stat_desc.extra_base, f = t.stat_desc.max_length, p = 0,
                 g = 0;
                 g <= II; g++)
              e.bl_count[g] = 0;
            for (s[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1; r < LI;
                 r++)
              f < (g = s[2 * s[2 * (n = e.heap[r]) + 1] + 1] + 1) &&
                  (g = f, p++),
                  s[2 * n + 1] = g,
                            c < n ||
                  (e.bl_count[g]++, o = 0, h <= n && (o = d[n - h]),
                   a = s[2 * n], e.opt_len += a * (g + o),
                   u && (e.static_len += a * (l[2 * n + 1] + o)));
            if (0 !== p) {
              do {
                for (g = f - 1; 0 === e.bl_count[g];) g--
              } while (e.bl_count[g]--, e.bl_count[g + 1] += 2, e.bl_count[f]--,
                       0 < (p -= 2));
              for (g = f; 0 !== g; g--)
                for (n = e.bl_count[g]; 0 !== n;)
                  c < (i = e.heap[--r]) ||
                      (s[2 * i + 1] !== g &&
                           (e.opt_len += (g - s[2 * i + 1]) * s[2 * i],
                            s[2 * i + 1] = g),
                       n--)
            }
          },
          aT =
              function(e, t, r) {
            for (var n, i = new Array(II + 1), o = 0, a = 1; a <= II; a++)
              i[a] = o = o + r[a - 1] << 1;
            for (n = 0; n <= t; n++) {
              var s = e[2 * n + 1];
              0 !== s && (e[2 * n] = nT(i[s]++, s))
            }
          },
          sT =
              function() {
            for (var e, t, r, n = new Array(II + 1), i = 0, o = 0; o < CI - 1;
                 o++)
              for (WI[o] = i, e = 0; e < 1 << MI[o]; e++) GI[i++] = o;
            for (GI[i - 1] = o, o = r = 0; o < 16; o++)
              for (ZI[o] = r, e = 0; e < 1 << zI[o]; e++) HI[r++] = o;
            for (r >>= 7; o < AI; o++)
              for (ZI[o] = r << 7, e = 0; e < 1 << zI[o] - 7; e++)
                HI[256 + r++] = o;
            for (t = 0; t <= II; t++) n[t] = 0;
            for (e = 0; e <= 143;) BI[2 * e + 1] = 8, e++, n[8]++;
            for (; e <= 255;) BI[2 * e + 1] = 9, e++, n[9]++;
            for (; e <= 279;) BI[2 * e + 1] = 7, e++, n[7]++;
            for (; e <= 287;) BI[2 * e + 1] = 8, e++, n[8]++;
            for (aT(BI, EI + 1, n), e = 0; e < AI; e++)
              YI[2 * e + 1] = 5, YI[2 * e] = nT(e, 5);
            VI = new $I(BI, MI, SI + 1, EI, II), JI = new $I(YI, zI, 0, AI, II),
            XI = new $I(new Array(0), KI, 0, OI, FI)
          },
          cT =
              function(e) {
            for (var t = 0; t < EI; t++) e.dyn_ltree[2 * t] = 0;
            for (t = 0; t < AI; t++) e.dyn_dtree[2 * t] = 0;
            for (t = 0; t < OI; t++) e.bl_tree[2 * t] = 0;
            e.dyn_ltree[2 * RI] = 1, e.opt_len = e.static_len = 0,
                            e.last_lit = e.matches = 0
          },
          lT =
              function(e) {
            8 < e.bi_valid ?
                eT(e, e.bi_buf) :
                0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
                e.bi_buf = 0, e.bi_valid = 0
          },
          uT =
              function(e, t, r, n) {
            lT(e), n && (eT(e, r), eT(e, ~r)),
                e.pending_buf.set(e.window.subarray(t, t + r), e.pending),
                e.pending += r
          },
          dT =
              function(e, t, r, n) {
            var i = 2 * t, o = 2 * r;
            return e[i] < e[o] || e[i] === e[o] && n[t] <= n[r]
          },
          hT =
              function(e, t, r) {
            for (var n = e.heap[r], i = r << 1; i <= e.heap_len &&
                 (i < e.heap_len && dT(t, e.heap[i + 1], e.heap[i], e.depth) &&
                      i++,
                  !dT(t, n, e.heap[i], e.depth));)
              e.heap[r] = e.heap[i], r = i, i <<= 1;
            e.heap[r] = n
          },
          fT =
              function(e, t, r) {
            var n, i, o, a, s = 0;
            if (0 !== e.last_lit)
              for (; n = e.pending_buf[e.d_buf + 2 * s] << 8 |
                         e.pending_buf[e.d_buf + 2 * s + 1],
                     i = e.pending_buf[e.l_buf + s], s++,
                     0 == n ? rT(e, i, t) :
                              (o = GI[i], rT(e, o + SI + 1, t),
                              0 !== (a = MI[o]) && (i -= WI[o], tT(e, i, a)),
                              o = QI(--n), rT(e, o, r),
                              0 !== (a = zI[o]) && (n -= ZI[o], tT(e, n, a))),
                     s < e.last_lit;)
                ;
            rT(e, RI, t)
          },
          pT =
              function(e, t) {
            var r, n, i, o = t.dyn_tree, a = t.stat_desc.static_tree,
                         s = t.stat_desc.has_stree, c = t.stat_desc.elems,
                         l = -1;
            for (e.heap_len = 0, e.heap_max = LI, r = 0; r < c; r++)
              0 !== o[2 * r] ? (e.heap[++e.heap_len] = l = r, e.depth[r] = 0) :
                               o[2 * r + 1] = 0;
            for (; e.heap_len < 2;)
              o[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1,
                                                              e.depth[i] = 0,
                                                              e.opt_len--,
                                                              s &&
                  (e.static_len -= a[2 * i + 1]);
            for (t.max_code = l, r = e.heap_len >> 1; 1 <= r; r--) hT(e, o, r);
            for (i = c;
                 r = e.heap[1], e.heap[1] = e.heap[e.heap_len--], hT(e, o, 1),
                n = e.heap[1], e.heap[--e.heap_max] = r,
                e.heap[--e.heap_max] = n, o[2 * i] = o[2 * r] + o[2 * n],
                e.depth[i] =
                     (e.depth[r] >= e.depth[n] ? e.depth[r] : e.depth[n]) + 1,
                o[2 * r + 1] = o[2 * n + 1] = i, e.heap[1] = i++, hT(e, o, 1),
                2 <= e.heap_len;)
              ;
            e.heap[--e.heap_max] = e.heap[1], oT(e, t), aT(o, l, e.bl_count)
          },
          gT =
              function(e, t, r) {
            var n, i, o = -1, a = t[1], s = 0, c = 7, l = 4;
            for (0 === a && (c = 138, l = 3), t[2 * (r + 1) + 1] = 65535, n = 0;
                 n <= r; n++)
              i = a, a = t[2 * (n + 1) + 1],
              ++s < c && i === a ||
                  (s < l ?
                       e.bl_tree[2 * i] += s :
                       0 !== i ?
                       (i !== o && e.bl_tree[2 * i]++, e.bl_tree[2 * PI]++) :
                       s <= 10 ? e.bl_tree[2 * NI]++ : e.bl_tree[2 * DI]++,
                   o = i,
                   l = (s = 0) === a ? (c = 138, 3) :
                                       i === a ? (c = 6, 3) : (c = 7, 4))
          },
          yT =
              function(e, t, r) {
            var n, i, o = -1, a = t[1], s = 0, c = 7, l = 4;
            for (0 === a && (c = 138, l = 3), n = 0; n <= r; n++)
              if (i = a, a = t[2 * (n + 1) + 1], !(++s < c && i === a)) {
                if (s < l)
                  for (; rT(e, i, e.bl_tree), 0 != --s;)
                    ;
                else
                  0 !== i ? (i !== o && (rT(e, i, e.bl_tree), s--),
                             rT(e, PI, e.bl_tree), tT(e, s - 3, 2)) :
                            s <= 10 ? (rT(e, NI, e.bl_tree), tT(e, s - 3, 3)) :
                                      (rT(e, DI, e.bl_tree), tT(e, s - 11, 7));
                o = i,
                l = (s = 0) === a ? (c = 138, 3) :
                                    i === a ? (c = 6, 3) : (c = 7, 4)
              }
          },
          mT =
              function(e) {
            var t;
            for (gT(e, e.dyn_ltree, e.l_desc.max_code),
                 gT(e, e.dyn_dtree, e.d_desc.max_code), pT(e, e.bl_desc),
                 t = OI - 1;
                 3 <= t && 0 === e.bl_tree[2 * UI[t] + 1]; t--)
              ;
            return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
          },
          bT =
              function(e, t, r, n) {
            var i;
            for (tT(e, t - 257, 5), tT(e, r - 1, 5), tT(e, n - 4, 4), i = 0;
                 i < n; i++)
              tT(e, e.bl_tree[2 * UI[i] + 1], 3);
            yT(e, e.dyn_ltree, t - 1), yT(e, e.dyn_dtree, r - 1)
          },
          vT =
              function(e) {
            for (var t = 4093624447, r = 0; r <= 31; r++, t >>>= 1)
              if (1 & t && 0 !== e.dyn_ltree[2 * r]) return gI;
            if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] ||
                0 !== e.dyn_ltree[26])
              return yI;
            for (r = 32; r < SI; r++)
              if (0 !== e.dyn_ltree[2 * r]) return yI;
            return gI
          },
          _T = !1,
          wT =
              function(e) {
            _T || (sT(), _T = !0), e.l_desc = new qI(e.dyn_ltree, VI),
                                   e.d_desc = new qI(e.dyn_dtree, JI),
                                   e.bl_desc = new qI(e.bl_tree, XI),
                                   e.bi_buf = 0, e.bi_valid = 0, cT(e)
          },
          xT =
              function(e, t, r, n) {
            tT(e, (vI << 1) + (n ? 1 : 0), 3), uT(e, t, r, !0)
          },
          kT =
              function(e) {
            tT(e, _I << 1, 3), rT(e, RI, BI), iT(e)
          },
          CT =
              function(e, t, r, n) {
            var i, o, a = 0;
            0 < e.level ?
                (e.strm.data_type === mI && (e.strm.data_type = vT(e)),
                 pT(e, e.l_desc), pT(e, e.d_desc), a = mT(e),
                 i = e.opt_len + 3 + 7 >>> 3,
                 (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) :
                i = o = r + 5,
                r + 4 <= i && -1 !== t ?
                xT(e, t, r, n) :
                e.strategy === pI || o === i ?
                (tT(e, (_I << 1) + (n ? 1 : 0), 3), fT(e, BI, YI)) :
                (tT(e, (wI << 1) + (n ? 1 : 0), 3),
                 bT(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1),
                 fT(e, e.dyn_ltree, e.dyn_dtree)),
                cT(e), n && lT(e)
          },
          ST =
              function(e, t, r) {
            return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255,
                                               e.pending_buf[e.d_buf + 2 * e.last_lit + 1] =
                                                   255 & t,
                                               e.pending_buf[e.l_buf + e.last_lit] =
                                                   255 & r,
                                               e.last_lit++,
                                               0 === t ?
                       e.dyn_ltree[2 * r]++ :
                       (e.matches++, t--, e.dyn_ltree[2 * (GI[r] + SI + 1)]++,
                        e.dyn_dtree[2 * QI(t)]++),
                                               e.last_lit === e.lit_bufsize - 1
          },
          ET = wT, AT = xT, OT = CT, LT = ST, IT = kT, TT = {
            _tr_init: ET,
            _tr_stored_block: AT,
            _tr_flush_block: OT,
            _tr_tally: LT,
            _tr_align: IT
          },
          FT =
              function(e, t, r, n) {
            for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0;
                 0 !== r;) {
              for (r -= a = 2e3 < r ? 2e3 : r;
                   o = o + (i = i + t[n++] | 0) | 0, --a;)
                ;
              i %= 65521, o %= 65521
            }
            return i | o << 16 | 0
          },
          RT = FT,
          PT =
              function() {
            for (var e = [], t = 0; t < 256; t++) {
              for (var r = t, n = 0; n < 8; n++)
                r = 1 & r ? 3988292384 ^ r >>> 1 : r >>> 1;
              e[t] = r
            }
            return e
          },
          NT = new Uint32Array(PT()),
          DT =
              function(e, t, r, n) {
            var i = NT, o = n + r;
            e ^= -1;
            for (var a = n; a < o; a++) e = e >>> 8 ^ i[255 & (e ^ t[a])];
            return -1 ^ e
          },
          MT = DT, zT = {
            2: 'need dictionary',
            1: 'stream end',
            0: '',
            '-1': 'file error',
            '-2': 'stream error',
            '-3': 'data error',
            '-4': 'insufficient memory',
            '-5': 'buffer error',
            '-6': 'incompatible version'
          },
          KT = {
            Z_NO_FLUSH: 0,
            Z_PARTIAL_FLUSH: 1,
            Z_SYNC_FLUSH: 2,
            Z_FULL_FLUSH: 3,
            Z_FINISH: 4,
            Z_BLOCK: 5,
            Z_TREES: 6,
            Z_OK: 0,
            Z_STREAM_END: 1,
            Z_NEED_DICT: 2,
            Z_ERRNO: -1,
            Z_STREAM_ERROR: -2,
            Z_DATA_ERROR: -3,
            Z_MEM_ERROR: -4,
            Z_BUF_ERROR: -5,
            Z_NO_COMPRESSION: 0,
            Z_BEST_SPEED: 1,
            Z_BEST_COMPRESSION: 9,
            Z_DEFAULT_COMPRESSION: -1,
            Z_FILTERED: 1,
            Z_HUFFMAN_ONLY: 2,
            Z_RLE: 3,
            Z_FIXED: 4,
            Z_DEFAULT_STRATEGY: 0,
            Z_BINARY: 0,
            Z_TEXT: 1,
            Z_UNKNOWN: 2,
            Z_DEFLATED: 8
          },
          UT = TT._tr_init, jT = TT._tr_stored_block, BT = TT._tr_flush_block,
          YT = TT._tr_tally, HT = TT._tr_align, GT = KT.Z_NO_FLUSH,
          WT = KT.Z_PARTIAL_FLUSH, ZT = KT.Z_FULL_FLUSH, VT = KT.Z_FINISH,
          JT = KT.Z_BLOCK, XT = KT.Z_OK, $T = KT.Z_STREAM_END,
          qT = KT.Z_STREAM_ERROR, QT = KT.Z_DATA_ERROR, eF = KT.Z_BUF_ERROR,
          tF = KT.Z_DEFAULT_COMPRESSION, rF = KT.Z_FILTERED,
          nF = KT.Z_HUFFMAN_ONLY, iF = KT.Z_RLE, oF = KT.Z_FIXED,
          aF = KT.Z_DEFAULT_STRATEGY, sF = KT.Z_UNKNOWN, cF = KT.Z_DEFLATED,
          lF = 9, uF = 15, dF = 8, hF = 29, fF = 256, pF = fF + 1 + hF, gF = 30,
          yF = 19, mF = 2 * pF + 1, bF = 15, vF = 3, _F = 258, wF = _F + vF + 1,
          xF = 32, kF = 42, CF = 69, SF = 73, EF = 91, AF = 103, OF = 113,
          LF = 666, IF = 1, TF = 2, FF = 3, RF = 4, PF = 3,
          NF = function(e, t) {
            return e.msg = zT[t], t
          }, DF = function(e) {
            return (e << 1) - (4 < e ? 9 : 0)
          }, MF = function(e) {
            for (var t = e.length; 0 <= --t;) e[t] = 0
          }, zF = function(e, t, r) {
            return (t << e.hash_shift ^ r) & e.hash_mask
          }, KF = zF, UF = function(e) {
            var t = e.state, r = t.pending;
            0 !== (r = r > e.avail_out ? e.avail_out : r) &&
                (e.output.set(
                     t.pending_buf.subarray(t.pending_out, t.pending_out + r),
                     e.next_out),
                 e.next_out += r, t.pending_out += r, e.total_out += r,
                 e.avail_out -= r, t.pending -= r,
                 0 === t.pending && (t.pending_out = 0))
          }, jF = function(e, t) {
            BT(e, 0 <= e.block_start ? e.block_start : -1,
               e.strstart - e.block_start, t),
                e.block_start = e.strstart, UF(e.strm)
          }, BF = function(e, t) {
            e.pending_buf[e.pending++] = t
          }, YF = function(e, t) {
            e.pending_buf[e.pending++] = t >>> 8 & 255,
            e.pending_buf[e.pending++] = 255 & t
          }, HF = function(e, t, r, n) {
            var i = e.avail_in;
            return 0 === (i = n < i ? n : i) ?
                0 :
                (e.avail_in -= i,
                 t.set(e.input.subarray(e.next_in, e.next_in + i), r),
                 1 === e.state.wrap ?
                     e.adler = RT(e.adler, t, i, r) :
                     2 === e.state.wrap && (e.adler = MT(e.adler, t, i, r)),
                 e.next_in += i, e.total_in += i, i)
          }, GF = function(e, t) {
            var r, n,
                i = e.max_chain_length, o = e.strstart, a = e.prev_length,
                s = e.nice_match,
                c = e.strstart > e.w_size - wF ? e.strstart - (e.w_size - wF) :
                                                 0,
                l = e.window, u = e.w_mask, d = e.prev, h = e.strstart + _F,
                f = l[o + a - 1], p = l[o + a];
            e.prev_length >= e.good_match && (i >>= 2),
                s > e.lookahead && (s = e.lookahead);
            do {
              if (l[(r = t) + a] === p && l[r + a - 1] === f && l[r] === l[o] &&
                  l[++r] === l[o + 1]) {
                for (o += 2, r++; l[++o] === l[++r] && l[++o] === l[++r] &&
                     l[++o] === l[++r] && l[++o] === l[++r] &&
                     l[++o] === l[++r] && l[++o] === l[++r] &&
                     l[++o] === l[++r] && l[++o] === l[++r] && o < h;)
                  ;
                if (n = _F - (h - o), o = h - _F, a < n) {
                  if (e.match_start = t, s <= (a = n)) break;
                  f = l[o + a - 1], p = l[o + a]
                }
              }
            } while ((t = d[t & u]) > c && 0 != --i);
            return a <= e.lookahead ? a : e.lookahead
          }, WF = function(e) {
            var t, r, n, i, o, a = e.w_size;
            do {
              if (i = e.window_size - e.lookahead - e.strstart,
                  e.strstart >= a + (a - wF)) {
                for (e.window.set(e.window.subarray(a, a + a), 0),
                     e.match_start -= a, e.strstart -= a, e.block_start -= a,
                     t = r = e.hash_size;
                     n = e.head[--t], e.head[t] = a <= n ? n - a : 0, --r;)
                  ;
                for (t = r = a;
                     n = e.prev[--t], e.prev[t] = a <= n ? n - a : 0, --r;)
                  ;
                i += a
              }
              if (0 === e.strm.avail_in) break;
              if (r = HF(e.strm, e.window, e.strstart + e.lookahead, i),
                  e.lookahead += r, e.lookahead + e.insert >= vF)
                for (o = e.strstart - e.insert, e.ins_h = e.window[o],
                    e.ins_h = KF(e, e.ins_h, e.window[o + 1]);
                     e.insert &&
                     (e.ins_h = KF(e, e.ins_h, e.window[o + vF - 1]),
                     e.prev[o & e.w_mask] = e.head[e.ins_h],
                     e.head[e.ins_h] = o, o++, e.insert--,
                     !(e.lookahead + e.insert < vF));)
                  ;
            } while (e.lookahead < wF && 0 !== e.strm.avail_in)
          }, ZF = function(e, t) {
            var r = 65535;
            for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5);;) {
              if (e.lookahead <= 1) {
                if (WF(e), 0 === e.lookahead && t === GT) return IF;
                if (0 === e.lookahead) break
              }
              e.strstart += e.lookahead, e.lookahead = 0;
              var n = e.block_start + r;
              if ((0 === e.strstart || e.strstart >= n) &&
                  (e.lookahead = e.strstart - n, e.strstart = n, jF(e, !1),
                   0 === e.strm.avail_out))
                return IF;
              if (e.strstart - e.block_start >= e.w_size - wF &&
                  (jF(e, !1), 0 === e.strm.avail_out))
                return IF
            }
            return e.insert = 0,
                   t === VT ? (jF(e, !0), 0 === e.strm.avail_out ? FF : RF) :
                              (e.strstart > e.block_start &&
                                   (jF(e, !1), e.strm.avail_out),
                               IF)
          }, VF = function(e, t) {
            for (var r, n;;) {
              if (e.lookahead < wF) {
                if (WF(e), e.lookahead < wF && t === GT) return IF;
                if (0 === e.lookahead) break
              }
              if (r = 0,
                  e.lookahead >= vF &&
                      (e.ins_h = KF(e, e.ins_h, e.window[e.strstart + vF - 1]),
                       r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                       e.head[e.ins_h] = e.strstart),
                  0 !== r && e.strstart - r <= e.w_size - wF &&
                      (e.match_length = GF(e, r)),
                  e.match_length >= vF)
                if (n = YT(e, e.strstart - e.match_start, e.match_length - vF),
                    e.lookahead -= e.match_length,
                    e.match_length <= e.max_lazy_match && e.lookahead >= vF) {
                  for (e.match_length--;
                       e.strstart++,
                       e.ins_h = KF(e, e.ins_h, e.window[e.strstart + vF - 1]),
                       r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                       e.head[e.ins_h] = e.strstart, 0 != --e.match_length;)
                    ;
                  e.strstart++
                } else
                  e.strstart += e.match_length,
                      e.match_length = 0, e.ins_h = e.window[e.strstart],
                      e.ins_h = KF(e, e.ins_h, e.window[e.strstart + 1]);
              else
                n = YT(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
              if (n && (jF(e, !1), 0 === e.strm.avail_out)) return IF
            }
            return e.insert = e.strstart < vF - 1 ? e.strstart : vF - 1,
                   t === VT ?
                       (jF(e, !0), 0 === e.strm.avail_out ? FF : RF) :
                       e.last_lit && (jF(e, !1), 0 === e.strm.avail_out) ? IF :
                                                                           TF
          }, JF = function(e, t) {
            for (var r, n, i;;) {
              if (e.lookahead < wF) {
                if (WF(e), e.lookahead < wF && t === GT) return IF;
                if (0 === e.lookahead) break
              }
              if (r = 0,
                  e.lookahead >= vF &&
                      (e.ins_h = KF(e, e.ins_h, e.window[e.strstart + vF - 1]),
                       r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                       e.head[e.ins_h] = e.strstart),
                  e.prev_length = e.match_length, e.prev_match = e.match_start,
                  e.match_length = vF - 1,
                  0 !== r && e.prev_length < e.max_lazy_match &&
                      e.strstart - r <= e.w_size - wF &&
                      (e.match_length = GF(e, r),
                       e.match_length <= 5 &&
                           (e.strategy === rF ||
                            e.match_length === vF &&
                                4096 < e.strstart - e.match_start) &&
                           (e.match_length = vF - 1)),
                  e.prev_length >= vF && e.match_length <= e.prev_length) {
                for (i = e.strstart + e.lookahead - vF,
                    n = YT(
                        e, e.strstart - 1 - e.prev_match, e.prev_length - vF),
                    e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
                     ++e.strstart <= i &&
                         (e.ins_h =
                              KF(e, e.ins_h, e.window[e.strstart + vF - 1]),
                         r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h],
                         e.head[e.ins_h] = e.strstart),
                    0 != --e.prev_length;)
                  ;
                if (e.match_available = 0, e.match_length = vF - 1,
                    e.strstart++, n && (jF(e, !1), 0 === e.strm.avail_out))
                  return IF
              } else if (e.match_available) {
                if ((n = YT(e, 0, e.window[e.strstart - 1])) && jF(e, !1),
                    e.strstart++, e.lookahead--, 0 === e.strm.avail_out)
                  return IF
              } else
                e.match_available = 1, e.strstart++, e.lookahead--
            }
            return e.match_available &&
                       (n = YT(e, 0, e.window[e.strstart - 1]),
                        e.match_available = 0),
                   e.insert = e.strstart < vF - 1 ? e.strstart : vF - 1,
                   t === VT ?
                       (jF(e, !0), 0 === e.strm.avail_out ? FF : RF) :
                       e.last_lit && (jF(e, !1), 0 === e.strm.avail_out) ? IF :
                                                                           TF
          }, XF = function(e, t) {
            for (var r, n, i, o, a = e.window;;) {
              if (e.lookahead <= _F) {
                if (WF(e), e.lookahead <= _F && t === GT) return IF;
                if (0 === e.lookahead) break
              }
              if (e.match_length = 0,
                  e.lookahead >= vF && 0 < e.strstart &&
                      (n = a[i = e.strstart - 1]) === a[++i] && n === a[++i] &&
                      n === a[++i]) {
                for (o = e.strstart + _F; n === a[++i] && n === a[++i] &&
                     n === a[++i] && n === a[++i] && n === a[++i] &&
                     n === a[++i] && n === a[++i] && n === a[++i] && i < o;)
                  ;
                e.match_length = _F - (o - i),
                e.match_length > e.lookahead && (e.match_length = e.lookahead)
              }
              if (e.match_length >= vF ?
                      (r = YT(e, 1, e.match_length - vF),
                       e.lookahead -= e.match_length,
                       e.strstart += e.match_length, e.match_length = 0) :
                      (r = YT(e, 0, e.window[e.strstart]), e.lookahead--,
                       e.strstart++),
                  r && (jF(e, !1), 0 === e.strm.avail_out))
                return IF
            }
            return e.insert = 0,
                   t === VT ?
                       (jF(e, !0), 0 === e.strm.avail_out ? FF : RF) :
                       e.last_lit && (jF(e, !1), 0 === e.strm.avail_out) ? IF :
                                                                           TF
          }, $F = function(e, t) {
            for (var r;;) {
              if (0 === e.lookahead && (WF(e), 0 === e.lookahead)) {
                if (t === GT) return IF;
                break
              }
              if (e.match_length = 0, r = YT(e, 0, e.window[e.strstart]),
                  e.lookahead--, e.strstart++,
                  r && (jF(e, !1), 0 === e.strm.avail_out))
                return IF
            }
            return e.insert = 0,
                   t === VT ?
                       (jF(e, !0), 0 === e.strm.avail_out ? FF : RF) :
                       e.last_lit && (jF(e, !1), 0 === e.strm.avail_out) ? IF :
                                                                           TF
          };
      function qF(e, t, r, n, i) {
        this.good_length = e, this.max_lazy = t, this.nice_length = r,
        this.max_chain = n, this.func = i
      }
      var QF =
              [
                new qF(0, 0, 0, 0, ZF), new qF(4, 4, 8, 4, VF),
                new qF(4, 5, 16, 8, VF), new qF(4, 6, 32, 32, VF),
                new qF(4, 4, 16, 16, JF), new qF(8, 16, 32, 32, JF),
                new qF(8, 16, 128, 128, JF), new qF(8, 32, 128, 256, JF),
                new qF(32, 128, 258, 1024, JF), new qF(32, 258, 258, 4096, JF)
              ],
          eR = function(e) {
            e.window_size = 2 * e.w_size, MF(e.head),
            e.max_lazy_match = QF[e.level].max_lazy,
            e.good_match = QF[e.level].good_length,
            e.nice_match = QF[e.level].nice_length,
            e.max_chain_length = QF[e.level].max_chain, e.strstart = 0,
            e.block_start = 0, e.lookahead = 0, e.insert = 0,
            e.match_length = e.prev_length = vF - 1, e.match_available = 0,
            e.ins_h = 0
          };
      function tR() {
        this.strm = null, this.status = 0, this.pending_buf = null,
        this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0,
        this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = cF,
        this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0,
        this.window = null, this.window_size = 0, this.prev = null,
        this.head = null, this.ins_h = 0, this.hash_size = 0,
        this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0,
        this.block_start = 0, this.match_length = 0, this.prev_match = 0,
        this.match_available = 0, this.strstart = 0, this.match_start = 0,
        this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0,
        this.max_lazy_match = 0, this.level = 0, this.strategy = 0,
        this.good_match = 0, this.nice_match = 0,
        this.dyn_ltree = new Uint16Array(2 * mF),
        this.dyn_dtree = new Uint16Array(2 * (2 * gF + 1)),
        this.bl_tree = new Uint16Array(2 * (2 * yF + 1)), MF(this.dyn_ltree),
        MF(this.dyn_dtree), MF(this.bl_tree), this.l_desc = null,
        this.d_desc = null, this.bl_desc = null,
        this.bl_count = new Uint16Array(bF + 1),
        this.heap = new Uint16Array(2 * pF + 1), MF(this.heap),
        this.heap_len = 0, this.heap_max = 0,
        this.depth = new Uint16Array(2 * pF + 1), MF(this.depth),
        this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0,
        this.opt_len = 0, this.static_len = 0, this.matches = 0,
        this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
      }
      var rR =
              function(e) {
        if (!e || !e.state) return NF(e, qT);
        e.total_in = e.total_out = 0, e.data_type = sF;
        var t = e.state;
        return t.pending = 0, t.pending_out = 0,
               t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? kF : OF,
               e.adler = 2 === t.wrap ? 0 : 1, t.last_flush = GT, UT(t), XT
      },
          nR =
              function(e) {
            var t = rR(e);
            return t === XT && eR(e.state), t
          },
          iR =
              function(e, t) {
            return !e || !e.state || 2 !== e.state.wrap ?
                qT :
                (e.state.gzhead = t, XT)
          },
          oR =
              function(e, t, r, n, i, o) {
            if (!e) return qT;
            var a = 1;
            if (t === tF && (t = 6),
                n < 0 ? (a = 0, n = -n) : 15 < n && (a = 2, n -= 16),
                i < 1 || lF < i || r !== cF || n < 8 || 15 < n || t < 0 ||
                    9 < t || o < 0 || oF < o)
              return NF(e, qT);
            8 === n && (n = 9);
            var s = new tR;
            return (e.state = s).strm = e, s.wrap = a, s.gzhead = null,
                              s.w_bits = n, s.w_size = 1 << s.w_bits,
                              s.w_mask = s.w_size - 1, s.hash_bits = i + 7,
                              s.hash_size = 1 << s.hash_bits,
                              s.hash_mask = s.hash_size - 1,
                              s.hash_shift = ~~((s.hash_bits + vF - 1) / vF),
                              s.window = new Uint8Array(2 * s.w_size),
                              s.head = new Uint16Array(s.hash_size),
                              s.prev = new Uint16Array(s.w_size),
                              s.lit_bufsize = 1 << i + 6,
                              s.pending_buf_size = 4 * s.lit_bufsize,
                              s.pending_buf =
                                  new Uint8Array(s.pending_buf_size),
                              s.d_buf = +s.lit_bufsize,
                              s.l_buf = 3 * s.lit_bufsize, s.level = t,
                              s.strategy = o, s.method = r, nR(e)
          },
          aR =
              function(e, t) {
            return oR(e, t, cF, uF, dF, aF)
          },
          sR =
              function(e, t) {
            var r, n;
            if (!e || !e.state || JT < t || t < 0) return e ? NF(e, qT) : qT;
            var i = e.state;
            if (!e.output || !e.input && 0 !== e.avail_in ||
                i.status === LF && t !== VT)
              return NF(e, 0 === e.avail_out ? eF : qT);
            i.strm = e;
            var o, a = i.last_flush;
            if (i.last_flush = t,
                i.status === kF &&
                    (2 === i.wrap ?
                         (e.adler = 0, BF(i, 31), BF(i, 139), BF(i, 8),
                          i.gzhead ?
                              (BF(i,
                                  (i.gzhead.text ? 1 : 0) +
                                      (i.gzhead.hcrc ? 2 : 0) +
                                      (i.gzhead.extra ? 4 : 0) +
                                      (i.gzhead.name ? 8 : 0) +
                                      (i.gzhead.comment ? 16 : 0)),
                               BF(i, 255 & i.gzhead.time),
                               BF(i, i.gzhead.time >> 8 & 255),
                               BF(i, i.gzhead.time >> 16 & 255),
                               BF(i, i.gzhead.time >> 24 & 255),
                               BF(i,
                                  9 === i.level ?
                                      2 :
                                      i.strategy >= nF || i.level < 2 ? 4 : 0),
                               BF(i, 255 & i.gzhead.os),
                               i.gzhead.extra && i.gzhead.extra.length &&
                                   (BF(i, 255 & i.gzhead.extra.length),
                                    BF(i, i.gzhead.extra.length >> 8 & 255)),
                               i.gzhead.hcrc &&
                                   (e.adler = MT(
                                        e.adler, i.pending_buf, i.pending, 0)),
                               i.gzindex = 0, i.status = CF) :
                              (BF(i, 0), BF(i, 0), BF(i, 0), BF(i, 0), BF(i, 0),
                               BF(i,
                                  9 === i.level ?
                                      2 :
                                      i.strategy >= nF || i.level < 2 ? 4 : 0),
                               BF(i, PF), i.status = OF)) :
                         (o = cF + (i.w_bits - 8 << 4) << 8,
                          o |= (i.strategy >= nF || i.level < 2 ?
                                    0 :
                                    i.level < 6 ? 1 : 6 === i.level ? 2 : 3)
                              << 6,
                          0 !== i.strstart && (o |= xF), o += 31 - o % 31,
                          i.status = OF, YF(i, o),
                          0 !== i.strstart &&
                              (YF(i, e.adler >>> 16), YF(i, 65535 & e.adler)),
                          e.adler = 1)),
                i.status === CF)
              if (i.gzhead.extra) {
                for (r = i.pending;
                     i.gzindex < (65535 & i.gzhead.extra.length) &&
                     (i.pending !== i.pending_buf_size ||
                      (i.gzhead.hcrc && i.pending > r &&
                           (e.adler =
                                MT(e.adler, i.pending_buf, i.pending - r, r)),
                       UF(e), r = i.pending,
                              i.pending !== i.pending_buf_size));)
                  BF(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
                i.gzhead.hcrc && i.pending > r &&
                    (e.adler = MT(e.adler, i.pending_buf, i.pending - r, r)),
                    i.gzindex === i.gzhead.extra.length &&
                    (i.gzindex = 0, i.status = SF)
              } else
                i.status = SF;
            if (i.status === SF)
              if (i.gzhead.name) {
                r = i.pending;
                do {
                  if (i.pending === i.pending_buf_size &&
                      (i.gzhead.hcrc && i.pending > r &&
                           (e.adler =
                                MT(e.adler, i.pending_buf, i.pending - r, r)),
                       UF(e), r = i.pending,
                       i.pending === i.pending_buf_size)) {
                    n = 1;
                    break
                  }
                } while (n = i.gzindex < i.gzhead.name.length ?
                             255 & i.gzhead.name.charCodeAt(i.gzindex++) :
                             0,
                         BF(i, n), 0 !== n);
                i.gzhead.hcrc && i.pending > r &&
                    (e.adler = MT(e.adler, i.pending_buf, i.pending - r, r)),
                    0 === n && (i.gzindex = 0, i.status = EF)
              } else
                i.status = EF;
            if (i.status === EF)
              if (i.gzhead.comment) {
                r = i.pending;
                do {
                  if (i.pending === i.pending_buf_size &&
                      (i.gzhead.hcrc && i.pending > r &&
                           (e.adler =
                                MT(e.adler, i.pending_buf, i.pending - r, r)),
                       UF(e), r = i.pending,
                       i.pending === i.pending_buf_size)) {
                    n = 1;
                    break
                  }
                } while (n = i.gzindex < i.gzhead.comment.length ?
                             255 & i.gzhead.comment.charCodeAt(i.gzindex++) :
                             0,
                         BF(i, n), 0 !== n);
                i.gzhead.hcrc && i.pending > r &&
                    (e.adler = MT(e.adler, i.pending_buf, i.pending - r, r)),
                    0 === n && (i.status = AF)
              } else
                i.status = AF;
            if (i.status === AF &&
                    (i.gzhead.hcrc ?
                         (i.pending + 2 > i.pending_buf_size && UF(e),
                          i.pending + 2 <= i.pending_buf_size &&
                              (BF(i, 255 & e.adler), BF(i, e.adler >> 8 & 255),
                               e.adler = 0, i.status = OF)) :
                         i.status = OF),
                0 !== i.pending) {
              if (UF(e), 0 === e.avail_out) return i.last_flush = -1, XT
            } else if (0 === e.avail_in && DF(t) <= DF(a) && t !== VT)
              return NF(e, eF);
            if (i.status === LF && 0 !== e.avail_in) return NF(e, eF);
            if (0 !== e.avail_in || 0 !== i.lookahead ||
                t !== GT && i.status !== LF) {
              a = i.strategy === nF ?
                  $F(i, t) :
                  i.strategy === iF ? XF(i, t) : QF[i.level].func(i, t);
              if (a !== FF && a !== RF || (i.status = LF), a === IF || a === FF)
                return 0 === e.avail_out && (i.last_flush = -1), XT;
              if (a === TF &&
                  (t === WT ? HT(i) :
                              t !== JT &&
                           (jT(i, 0, 0, !1),
                            t === ZT &&
                                (MF(i.head),
                                 0 === i.lookahead &&
                                     (i.strstart = 0, i.block_start = 0,
                                      i.insert = 0))),
                   UF(e), 0 === e.avail_out))
                return i.last_flush = -1, XT
            }
            return t !== VT ?
                XT :
                i.wrap <= 0 ?
                $T :
                (2 === i.wrap ?
                     (BF(i, 255 & e.adler), BF(i, e.adler >> 8 & 255),
                      BF(i, e.adler >> 16 & 255), BF(i, e.adler >> 24 & 255),
                      BF(i, 255 & e.total_in), BF(i, e.total_in >> 8 & 255),
                      BF(i, e.total_in >> 16 & 255),
                      BF(i, e.total_in >> 24 & 255)) :
                     (YF(i, e.adler >>> 16), YF(i, 65535 & e.adler)),
                 UF(e), 0 < i.wrap && (i.wrap = -i.wrap),
                 0 !== i.pending ? XT : $T)
          },
          cR =
              function(e) {
            if (!e || !e.state) return qT;
            var t = e.state.status;
            return t !== kF && t !== CF && t !== SF && t !== EF && t !== AF &&
                    t !== OF && t !== LF ?
                NF(e, qT) :
                (e.state = null, t === OF ? NF(e, QT) : XT)
          },
          lR =
              function(e, t) {
            var r = t.length;
            if (!e || !e.state) return qT;
            var n = e.state, i = n.wrap;
            if (2 === i || 1 === i && n.status !== kF || n.lookahead) return qT;
            1 === i && (e.adler = RT(e.adler, t, r, 0)), n.wrap = 0,
                                                         r >= n.w_size &&
                (0 === i &&
                     (MF(n.head), n.strstart = 0, n.block_start = 0,
                      n.insert = 0),
                 (s = new Uint8Array(n.w_size))
                     .set(t.subarray(r - n.w_size, r), 0),
                 t = s, r = n.w_size);
            var o = e.avail_in, a = e.next_in, s = e.input;
            for (e.avail_in = r, e.next_in = 0, e.input = t, WF(n);
                 n.lookahead >= vF;) {
              for (var c = n.strstart, l = n.lookahead - (vF - 1);
                   n.ins_h = KF(n, n.ins_h, n.window[c + vF - 1]),
                       n.prev[c & n.w_mask] = n.head[n.ins_h],
                       n.head[n.ins_h] = c, c++, --l;)
                ;
              n.strstart = c, n.lookahead = vF - 1, WF(n)
            }
            return n.strstart += n.lookahead,
                   n.block_start = n.strstart, n.insert = n.lookahead,
                   n.lookahead = 0, n.match_length = n.prev_length = vF - 1,
                   n.match_available = 0, e.next_in = a, e.input = s,
                   e.avail_in = o, n.wrap = i, XT
          },
          uR = aR, dR = oR, hR = nR, fR = rR, pR = iR, gR = sR, yR = cR,
          mR = lR, bR = 'pako deflate (from Nodeca project)', vR = {
            deflateInit: uR,
            deflateInit2: dR,
            deflateReset: hR,
            deflateResetKeep: fR,
            deflateSetHeader: pR,
            deflate: gR,
            deflateEnd: yR,
            deflateSetDictionary: mR,
            deflateInfo: bR
          },
          _R = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }, wR = function(e) {
            for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
              var r = t.shift();
              if (r) {
                if ('object' !== _(r))
                  throw new TypeError(r + 'must be non-object');
                for (var n in r) _R(r, n) && (e[n] = r[n])
              }
            }
            return e
          }, xR = function(e) {
            for (var t = 0, r = 0, n = e.length; r < n; r++) t += e[r].length;
            for (var i = new Uint8Array(t), o = 0, a = 0, s = e.length; o < s;
                 o++) {
              var c = e[o];
              i.set(c, a), a += c.length
            }
            return i
          }, kR = {assign: wR, flattenChunks: xR}, CR = !0;
      try {
        String.fromCharCode.apply(null, new Uint8Array(1))
      } catch (e) {
        CR = !1
      }
      for (var SR = new Uint8Array(256), ER = 0; ER < 256; ER++)
        SR[ER] = 252 <= ER ?
            6 :
            248 <= ER ? 5 : 240 <= ER ? 4 : 224 <= ER ? 3 : 192 <= ER ? 2 : 1;
      SR[254] = SR[254] = 1;
      var AR = function(e) {
        if ('function' == typeof TextEncoder && TextEncoder.prototype.encode)
          return (new TextEncoder).encode(e);
        for (var t, r, n, i, o = e.length, a = 0, s = 0; s < o; s++)
          55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o &&
              56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
              (r = 65536 + (r - 55296 << 10) + (n - 56320), s++),
              a += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
        for (t = new Uint8Array(a), s = i = 0; i < a; s++)
          55296 == (64512 & (r = e.charCodeAt(s))) && s + 1 < o &&
              56320 == (64512 & (n = e.charCodeAt(s + 1))) &&
              (r = 65536 + (r - 55296 << 10) + (n - 56320), s++),
              r < 128 ? t[i++] = r :
                        (r < 2048 ? t[i++] = 192 | r >>> 6 :
                                    (r < 65536 ? t[i++] = 224 | r >>> 12 :
                                                 (t[i++] = 240 | r >>> 18,
                                                  t[i++] = 128 | r >>> 12 & 63),
                                     t[i++] = 128 | r >>> 6 & 63),
                         t[i++] = 128 | 63 & r);
        return t
      }, OR = function(e, t) {
        if (t < 65534 && e.subarray && CR)
          return String.fromCharCode.apply(
              null, e.length === t ? e : e.subarray(0, t));
        for (var r = '', n = 0; n < t; n++) r += String.fromCharCode(e[n]);
        return r
      }, LR = function(e, t) {
        var r = t || e.length;
        if ('function' == typeof TextDecoder && TextDecoder.prototype.decode)
          return (new TextDecoder).decode(e.subarray(0, t));
        for (var n = new Array(2 * r), i = 0, o = 0; o < r;) {
          var a = e[o++];
          if (a < 128)
            n[i++] = a;
          else {
            var s = SR[a];
            if (4 < s)
              n[i++] = 65533, o += s - 1;
            else {
              for (a &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && o < r;)
                a = a << 6 | 63 & e[o++], s--;
              1 < s ? n[i++] = 65533 :
                      a < 65536 ? n[i++] = a :
                                  (a -= 65536, n[i++] = 55296 | a >> 10 & 1023,
                                   n[i++] = 56320 | 1023 & a)
            }
          }
        }
        return OR(n, i)
      }, IR = function(e, t) {
        for (var r = (t = (t = t || e.length) > e.length ? e.length : t) - 1;
             0 <= r && 128 == (192 & e[r]);)
          r--;
        return !(r < 0) && 0 !== r && r + SR[e[r]] > t ? r : t
      }, TR = {string2buf: AR, buf2string: LR, utf8border: IR};
      function FR() {
        this.input = null, this.next_in = 0, this.avail_in = 0,
        this.total_in = 0, this.output = null, this.next_out = 0,
        this.avail_out = 0, this.total_out = 0, this.msg = '',
        this.state = null, this.data_type = 2, this.adler = 0
      }
      var RR = FR, PR = Object.prototype.toString, NR = KT.Z_NO_FLUSH,
          DR = KT.Z_SYNC_FLUSH, MR = KT.Z_FULL_FLUSH, zR = KT.Z_FINISH,
          KR = KT.Z_OK, UR = KT.Z_STREAM_END, jR = KT.Z_DEFAULT_COMPRESSION,
          BR = KT.Z_DEFAULT_STRATEGY, YR = KT.Z_DEFLATED;
      function HR(e) {
        this.options = kR.assign(
            {
              level: jR,
              method: YR,
              chunkSize: 16384,
              windowBits: 15,
              memLevel: 8,
              strategy: BR
            },
            e || {});
        var t = this.options;
        if (t.raw&& 0 < t.windowBits ? t.windowBits = -t.windowBits :
                                       t.gzip && 0 < t.windowBits &&
                    t.windowBits < 16 && (t.windowBits += 16),
            this.err = 0, this.msg = '', this.ended = !1, this.chunks = [],
            this.strm = new RR, this.strm.avail_out = 0,
            (e = vR.deflateInit2(
                 this.strm, t.level, t.method, t.windowBits, t.memLevel,
                 t.strategy)) !== KR)
          throw new Error(zT[e]);
        if (t.header && vR.deflateSetHeader(this.strm, t.header),
            t.dictionary) {
          t = 'string' == typeof t.dictionary ?
              TR.string2buf(t.dictionary) :
              '[object ArrayBuffer]' === PR.call(t.dictionary) ?
              new Uint8Array(t.dictionary) :
              t.dictionary;
          if ((e = vR.deflateSetDictionary(this.strm, t)) !== KR)
            throw new Error(zT[e]);
          this._dict_set = !0
        }
      }
      function GR(e, t) {
        t = new HR(t);
        if (t.push(e, !0), t.err) throw t.msg || zT[t.err];
        return t.result
      }
      function WR(e, t) {
        return (t = t || {}).raw = !0, GR(e, t)
      }
      function ZR(e, t) {
        return (t = t || {}).gzip = !0, GR(e, t)
      }
      HR.prototype.push = function(e, t) {
        var r, n, i = this.strm, o = this.options.chunkSize;
        if (this.ended) return !1;
        for (n = t === ~~t ? t : !0 === t ? zR : NR,
            'string' == typeof e ? i.input = TR.string2buf(e) :
                                   '[object ArrayBuffer]' === PR.call(e) ?
                                   i.input = new Uint8Array(e) :
                                   i.input = e,
            i.next_in = 0, i.avail_in = i.input.length;
             ;)
          if (0 === i.avail_out &&
                  (i.output = new Uint8Array(o), i.next_out = 0,
                   i.avail_out = o),
              (n === DR || n === MR) && i.avail_out <= 6)
            this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
          else {
            if (vR.deflate(i, n) === UR)
              return 0 < i.next_out &&
                         this.onData(i.output.subarray(0, i.next_out)),
                     r = vR.deflateEnd(this.strm), this.onEnd(r),
                     this.ended = !0, r === KR;
            if (0 !== i.avail_out) {
              if (0 < n && 0 < i.next_out)
                this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
              else if (0 === i.avail_in)
                break
            } else
              this.onData(i.output)
          }
        return !0
      }, HR.prototype.onData = function(e) {
        this.chunks.push(e)
      }, HR.prototype.onEnd = function(e) {
        e === KR && (this.result = kR.flattenChunks(this.chunks)),
            this.chunks = [], this.err = e, this.msg = this.strm.msg
      };
      var VR = HR, JR = GR, XR = WR, $R = ZR, qR = KT, QR = {
        Deflate: VR,
        deflate: JR,
        deflateRaw: XR,
        gzip: $R,
        constants: qR
      },
          eP = 30, tP = 12,
          rP =
              function(e, t) {
            var r, n, i, o, a, s,
                c = e.state, l = e.next_in, u = e.input,
                d = l + (e.avail_in - 5), h = e.next_out, f = e.output,
                p = h - (t - e.avail_out), g = h + (e.avail_out - 257),
                y = c.dmax, m = c.wsize, b = c.whave, v = c.wnext, _ = c.window,
                w = c.hold, x = c.bits, k = c.lencode, C = c.distcode,
                S = (1 << c.lenbits) - 1, E = (1 << c.distbits) - 1;
            e: do {
              x < 15 && (w += u[l++] << x, x += 8, w += u[l++] << x, x += 8),
                  r = k[w & S];
              t: for (;;) {
                if (w >>>= n = r >>> 24, x -= n, 0 === (n = r >>> 16 & 255))
                  f[h++] = 65535 & r;
                else {
                  if (!(16 & n)) {
                    if (0 == (64 & n)) {
                      r = k[(65535 & r) + (w & (1 << n) - 1)];
                      continue t
                    }
                    if (32 & n) {
                      c.mode = tP;
                      break e
                    }
                    e.msg = 'invalid literal/length code', c.mode = eP;
                    break e
                  }
                  i = 65535 & r,
                  (n &= 15) &&
                      (x < n && (w += u[l++] << x, x += 8),
                       i += w & (1 << n) - 1, w >>>= n, x -= n),
                  x < 15 &&
                      (w += u[l++] << x, x += 8, w += u[l++] << x, x += 8),
                  r = C[w & E];
                  r: for (;;) {
                    if (w >>>= n = r >>> 24, x -= n,
                        !(16 & (n = r >>> 16 & 255))) {
                      if (0 == (64 & n)) {
                        r = C[(65535 & r) + (w & (1 << n) - 1)];
                        continue r
                      }
                      e.msg = 'invalid distance code', c.mode = eP;
                      break e
                    }
                    if (o = 65535 & r,
                        x < (n &= 15) &&
                            (w += u[l++] << x,
                             (x += 8) < n && (w += u[l++] << x, x += 8)),
                        y < (o += w & (1 << n) - 1)) {
                      e.msg = 'invalid distance too far back', c.mode = eP;
                      break e
                    }
                    if (w >>>= n, x -= n, (n = h - p) < o) {
                      if (b < (n = o - n) && c.sane) {
                        e.msg = 'invalid distance too far back', c.mode = eP;
                        break e
                      }
                      if (s = _, (a = 0) === v) {
                        if (a += m - n, n < i) {
                          for (i -= n; f[h++] = _[a++], --n;)
                            ;
                          a = h - o, s = f
                        }
                      } else if (v < n) {
                        if (a += m + v - n, (n -= v) < i) {
                          for (i -= n; f[h++] = _[a++], --n;)
                            ;
                          if (a = 0, v < i) {
                            for (i -= n = v; f[h++] = _[a++], --n;)
                              ;
                            a = h - o, s = f
                          }
                        }
                      } else if (a += v - n, n < i) {
                        for (i -= n; f[h++] = _[a++], --n;)
                          ;
                        a = h - o, s = f
                      }
                      for (; 2 < i;)
                        f[h++] = s[a++], f[h++] = s[a++], f[h++] = s[a++],
                        i -= 3;
                      i && (f[h++] = s[a++], 1 < i && (f[h++] = s[a++]))
                    } else {
                      for (a = h - o; f[h++] = f[a++], f[h++] = f[a++],
                          f[h++] = f[a++], 2 < (i -= 3);)
                        ;
                      i && (f[h++] = f[a++], 1 < i && (f[h++] = f[a++]))
                    }
                    break
                  }
                }
                break
              }
            }
            while (l < d && h < g)
              ;
            w &= (1 << (x -= (i = x >> 3) << 3)) - 1,
                e.next_in = l -= i, e.next_out = h,
                e.avail_in = l < d ? d - l + 5 : 5 - (l - d),
                e.avail_out = h < g ? g - h + 257 : 257 - (h - g), c.hold = w,
                c.bits = x
          },
          nP = 15, iP = 852, oP = 592, aP = 0, sP = 1, cP = 2,
          lP = new Uint16Array([
            3,  4,   5,   6,   7,   8,   9,   10, 11, 13, 15,
            17, 19,  23,  27,  31,  35,  43,  51, 59, 67, 83,
            99, 115, 131, 163, 195, 227, 258, 0,  0
          ]),
          uP = new Uint8Array([
            16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
            19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
          ]),
          dP = new Uint16Array([
            1,    2,    3,    4,    5,    7,     9,     13,    17,  25,   33,
            49,   65,   97,   129,  193,  257,   385,   513,   769, 1025, 1537,
            2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0,   0
          ]),
          hP = new Uint8Array([
            16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
            23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64
          ]),
          fP =
              function(e, t, r, n, i, o, a, s) {
            for (var c, l, u, d, h, f, p, g, y,
                 m = s.bits, b = 0, v = 0, _ = 0, w = 0, x = 0, k = 0, C = 0,
                 S = 0, E = 0, A = 0, O = null, L = 0,
                 I = new Uint16Array(nP + 1), T = new Uint16Array(nP + 1),
                 F = null, R = 0, b = 0;
                 b <= nP; b++)
              I[b] = 0;
            for (v = 0; v < n; v++) I[t[r + v]]++;
            for (x = m, w = nP; 1 <= w && 0 === I[w]; w--)
              ;
            if (w < x && (x = w), 0 === w)
              return i[o++] = 20971520, i[o++] = 20971520, s.bits = 1, 0;
            for (_ = 1; _ < w && 0 === I[_]; _++)
              ;
            for (x < _ && (x = _), b = S = 1; b <= nP; b++)
              if (S <<= 1, (S -= I[b]) < 0) return -1;
            if (0 < S && (e === aP || 1 !== w)) return -1;
            for (T[1] = 0, b = 1; b < nP; b++) T[b + 1] = T[b] + I[b];
            for (v = 0; v < n; v++) 0 !== t[r + v] && (a[T[t[r + v]]++] = v);
            if (f = e === aP ?
                    (O = F = a, 19) :
                    e === sP ? (O = lP, L -= 257, F = uP, R -= 257, 256) :
                               (O = dP, F = hP, -1),
                b = _, h = o, C = v = A = 0, u = -1, d = (E = 1 << (k = x)) - 1,
                e === sP && iP < E || e === cP && oP < E)
              return 1;
            for (;;) {
              for (y = a[v] < f ?
                       (g = 0, a[v]) :
                       a[v] > f ? (g = F[R + a[v]], O[L + a[v]]) : (g = 96, 0),
                  c = 1 << (p = b - C), _ = l = 1 << k;
                   i[h + (A >> C) + (l -= c)] = p << 24 | g << 16 | y | 0,
                  0 !== l;)
                ;
              for (c = 1 << b - 1; A & c;) c >>= 1;
              if (0 !== c ? (A &= c - 1, A += c) : A = 0, v++, 0 == --I[b]) {
                if (b === w) break;
                b = t[r + a[v]]
              }
              if (x < b && (A & d) !== u) {
                for (h += _, S = 1 << (k = b - (C = 0 === C ? x : C));
                     k + C < w && !((S -= I[k + C]) <= 0);)
                  k++, S <<= 1;
                if (E += 1 << k, e === sP && iP < E || e === cP && oP < E)
                  return 1;
                i[u = A & d] = x << 24 | k << 16 | h - o | 0
              }
            }
            return 0 !== A && (i[h + A] = b - C << 24 | 64 << 16 | 0),
                   s.bits = x, 0
          },
          pP = fP, gP = 0, yP = 1, mP = 2, bP = KT.Z_FINISH, vP = KT.Z_BLOCK,
          _P = KT.Z_TREES, wP = KT.Z_OK, xP = KT.Z_STREAM_END,
          kP = KT.Z_NEED_DICT, CP = KT.Z_STREAM_ERROR, SP = KT.Z_DATA_ERROR,
          EP = KT.Z_MEM_ERROR, AP = KT.Z_BUF_ERROR, OP = KT.Z_DEFLATED, LP = 1,
          IP = 2, TP = 3, FP = 4, RP = 5, PP = 6, NP = 7, DP = 8, MP = 9,
          zP = 10, KP = 11, UP = 12, jP = 13, BP = 14, YP = 15, HP = 16,
          GP = 17, WP = 18, ZP = 19, VP = 20, JP = 21, XP = 22, $P = 23,
          qP = 24, QP = 25, eN = 26, tN = 27, rN = 28, nN = 29, iN = 30,
          oN = 31, aN = 32, sN = 852, cN = 592, lN = 15, uN = lN,
          dN = function(e) {
            return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) +
                ((255 & e) << 24)
          };
      function hN() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1,
        this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0,
        this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0,
        this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0,
        this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null,
        this.distcode = null, this.lenbits = 0, this.distbits = 0,
        this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0,
        this.next = null, this.lens = new Uint16Array(320),
        this.work = new Uint16Array(288), this.lendyn = null,
        this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
      }
      var fN =
              function(e) {
        if (!e || !e.state) return CP;
        var t = e.state;
        return e.total_in = e.total_out = t.total = 0, e.msg = '',
               t.wrap && (e.adler = 1 & t.wrap), t.mode = LP, t.last = 0,
               t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0,
               t.bits = 0, t.lencode = t.lendyn = new Int32Array(sN),
               t.distcode = t.distdyn = new Int32Array(cN), t.sane = 1,
               t.back = -1, wP
      },
          pN =
              function(e) {
            if (!e || !e.state) return CP;
            var t = e.state;
            return t.wsize = 0, t.whave = 0, t.wnext = 0, fN(e)
          },
          gN =
              function(e, t) {
            var r;
            if (!e || !e.state) return CP;
            var n = e.state;
            return t < 0 ? (r = 0, t = -t) :
                           (r = 1 + (t >> 4), t < 48 && (t &= 15)),
                   t && (t < 8 || 15 < t) ?
                       CP :
                       (null !== n.window && n.wbits !== t && (n.window = null),
                        n.wrap = r, n.wbits = t, pN(e))
          },
          yN =
              function(e, t) {
            if (!e) return CP;
            var r = new hN;
            (e.state = r).window = null;
            t = gN(e, t);
            return t !== wP && (e.state = null), t
          },
          mN =
              function(e) {
            return yN(e, uN)
          },
          bN = !0, vN, _N,
          wN =
              function(e) {
            if (bN) {
              vN = new Int32Array(512), _N = new Int32Array(32);
              for (var t = 0; t < 144;) e.lens[t++] = 8;
              for (; t < 256;) e.lens[t++] = 9;
              for (; t < 280;) e.lens[t++] = 7;
              for (; t < 288;) e.lens[t++] = 8;
              for (pP(yP, e.lens, 0, 288, vN, 0, e.work, {bits: 9}), t = 0;
                   t < 32;)
                e.lens[t++] = 5;
              pP(mP, e.lens, 0, 32, _N, 0, e.work, {bits: 5}), bN = !1
            }
            e.lencode = vN, e.lenbits = 9, e.distcode = _N, e.distbits = 5
          },
          xN =
              function(e, t, r, n) {
            var i = e.state;
            return null === i.window &&
                       (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0,
                        i.window = new Uint8Array(i.wsize)),
                   n >= i.wsize ?
                       (i.window.set(t.subarray(r - i.wsize, r), 0),
                        i.wnext = 0, i.whave = i.wsize) :
                       (n < (e = i.wsize - i.wnext) && (e = n),
                        i.window.set(t.subarray(r - n, r - n + e), i.wnext),
                        (n -= e) ?
                            (i.window.set(t.subarray(r - n, r), 0), i.wnext = n,
                             i.whave = i.wsize) :
                            (i.wnext += e, i.wnext === i.wsize && (i.wnext = 0),
                             i.whave < i.wsize && (i.whave += e))),
                   0
          },
          kN =
              function(e, t) {
            var r, n, i, o, a, s, c, l, u, d, h, f, p, g, y, m, b, v, _, w, x,
                k, C, S, E = 0, A = new Uint8Array(4),
                         O = new Uint8Array([
                           16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13,
                           2, 14, 1, 15
                         ]);
            if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in)
              return CP;
            (r = e.state).mode === UP && (r.mode = jP),
                a = e.next_out, i = e.output, c = e.avail_out, o = e.next_in,
                n = e.input, s = e.avail_in, l = r.hold, u = r.bits, d = s,
                h = c, k = wP;
            e: for (;;) switch (r.mode) {
              case LP:
                if (0 === r.wrap) {
                  r.mode = jP;
                  break
                }
                for (; u < 16;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                if (2 & r.wrap && 35615 === l) {
                  A[r.check = 0] = 255 & l, A[1] = l >>> 8 & 255,
                              r.check = MT(r.check, A, 2, 0), u = l = 0,
                              r.mode = IP;
                  break
                }
                if (r.flags = 0, r.head && (r.head.done = !1),
                    !(1 & r.wrap) || (((255 & l) << 8) + (l >> 8)) % 31) {
                  e.msg = 'incorrect header check', r.mode = iN;
                  break
                }
                if ((15 & l) !== OP) {
                  e.msg = 'unknown compression method', r.mode = iN;
                  break
                }
                if (u -= 4, x = 8 + (15 & (l >>>= 4)), 0 === r.wbits)
                  r.wbits = x;
                else if (x > r.wbits) {
                  e.msg = 'invalid window size', r.mode = iN;
                  break
                }
                r.dmax = 1 << r.wbits, e.adler = r.check = 1,
                r.mode = 512 & l ? zP : UP, u = l = 0;
                break;
              case IP:
                for (; u < 16;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                if (r.flags = l, (255 & r.flags) !== OP) {
                  e.msg = 'unknown compression method', r.mode = iN;
                  break
                }
                if (57344 & r.flags) {
                  e.msg = 'unknown header flags set', r.mode = iN;
                  break
                }
                r.head && (r.head.text = l >> 8 & 1),
                    512&r.flags &&
                    (A[0] = 255 & l, A[1] = l >>> 8 & 255,
                     r.check = MT(r.check, A, 2, 0)),
                    u = l = 0, r.mode = TP;
              case TP:
                for (; u < 32;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                r.head && (r.head.time = l),
                    512&r.flags &&
                    (A[0] = 255 & l, A[1] = l >>> 8 & 255,
                     A[2] = l >>> 16 & 255, A[3] = l >>> 24 & 255,
                     r.check = MT(r.check, A, 4, 0)),
                    u = l = 0, r.mode = FP;
              case FP:
                for (; u < 16;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                r.head && (r.head.xflags = 255 & l, r.head.os = l >> 8),
                    512&r.flags &&
                    (A[0] = 255 & l, A[1] = l >>> 8 & 255,
                     r.check = MT(r.check, A, 2, 0)),
                    u = l = 0, r.mode = RP;
              case RP:
                if (1024 & r.flags) {
                  for (; u < 16;) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  r.length = l, r.head && (r.head.extra_len = l),
                  512 & r.flags &&
                      (A[0] = 255 & l, A[1] = l >>> 8 & 255,
                       r.check = MT(r.check, A, 2, 0)),
                  u = l = 0
                } else
                  r.head && (r.head.extra = null);
                r.mode = PP;
              case PP:
                if (1024 & r.flags &&
                    ((f = s < (f = r.length) ? s : f) &&
                         (r.head &&
                              (x = r.head.extra_len - r.length,
                               r.head.extra ||
                                   (r.head.extra =
                                        new Uint8Array(r.head.extra_len)),
                               r.head.extra.set(n.subarray(o, o + f), x)),
                          512 & r.flags && (r.check = MT(r.check, n, f, o)),
                          s -= f, o += f, r.length -= f),
                     r.length))
                  break e;
                r.length = 0, r.mode = NP;
              case NP:
                if (2048 & r.flags) {
                  if (0 === s) break e;
                  for (f = 0; x = n[o + f++],
                      r.head && x && r.length < 65536 &&
                                  (r.head.name += String.fromCharCode(x)),
                      x && f < s;)
                    ;
                  if (512 & r.flags && (r.check = MT(r.check, n, f, o)), s -= f,
                      o += f, x)
                    break e
                } else
                  r.head && (r.head.name = null);
                r.length = 0, r.mode = DP;
              case DP:
                if (4096 & r.flags) {
                  if (0 === s) break e;
                  for (f = 0; x = n[o + f++],
                      r.head && x && r.length < 65536 &&
                                  (r.head.comment += String.fromCharCode(x)),
                      x && f < s;)
                    ;
                  if (512 & r.flags && (r.check = MT(r.check, n, f, o)), s -= f,
                      o += f, x)
                    break e
                } else
                  r.head && (r.head.comment = null);
                r.mode = MP;
              case MP:
                if (512 & r.flags) {
                  for (; u < 16;) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  if (l !== (65535 & r.check)) {
                    e.msg = 'header crc mismatch', r.mode = iN;
                    break
                  }
                  u = l = 0
                }
                r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0),
                    e.adler = r.check = 0, r.mode = UP;
                break;
              case zP:
                for (; u < 32;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                e.adler = r.check = dN(l), u = l = 0, r.mode = KP;
              case KP:
                if (0 === r.havedict)
                  return e.next_out = a, e.avail_out = c, e.next_in = o,
                         e.avail_in = s, r.hold = l, r.bits = u, kP;
                e.adler = r.check = 1, r.mode = UP;
              case UP:
                if (t === vP || t === _P) break e;
              case jP:
                if (r.last) {
                  l >>>= 7&u, u -= 7 & u, r.mode = tN;
                  break
                }
                for (; u < 3;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                switch (r.last = 1 & l, --u, 3 & (l >>>= 1)) {
                  case 0:
                    r.mode = BP;
                    break;
                  case 1:
                    if (wN(r), r.mode = VP, t !== _P) break;
                    l >>>= 2, u -= 2;
                    break e;
                  case 2:
                    r.mode = GP;
                    break;
                  case 3:
                    e.msg = 'invalid block type', r.mode = iN
                }
                l >>>= 2, u -= 2;
                break;
              case BP:
                for (l >>>= 7 & u, u -= 7 & u; u < 32;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                if ((65535 & l) != (l >>> 16 ^ 65535)) {
                  e.msg = 'invalid stored block lengths', r.mode = iN;
                  break
                }
                if (r.length = 65535 & l, u = l = 0, r.mode = YP, t === _P)
                  break e;
              case YP:
                r.mode = HP;
              case HP:
                if (f = r.length) {
                  if (0 === (f = c < (f = s < f ? s : f) ? c : f)) break e;
                  i.set(n.subarray(o, o + f), a), s -= f, o += f, c -= f,
                      a += f, r.length -= f;
                  break
                }
                r.mode = UP;
                break;
              case GP:
                for (; u < 14;) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                if (r.nlen = 257 + (31 & l), l >>>= 5, u -= 5,
                    r.ndist = 1 + (31 & l), l >>>= 5, u -= 5,
                    r.ncode = 4 + (15 & l), l >>>= 4, u -= 4,
                    286 < r.nlen || 30 < r.ndist) {
                  e.msg = 'too many length or distance symbols', r.mode = iN;
                  break
                }
                r.have = 0, r.mode = WP;
              case WP:
                for (; r.have < r.ncode;) {
                  for (; u < 3;) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  r.lens[O[r.have++]] = 7 & l, l >>>= 3, u -= 3
                }
                for (; r.have < 19;) r.lens[O[r.have++]] = 0;
                if (r.lencode = r.lendyn, r.lenbits = 7, C = {bits: r.lenbits},
                    k = pP(gP, r.lens, 0, 19, r.lencode, 0, r.work, C),
                    r.lenbits = C.bits, k) {
                  e.msg = 'invalid code lengths set', r.mode = iN;
                  break
                }
                r.have = 0, r.mode = ZP;
              case ZP:
                for (; r.have < r.nlen + r.ndist;) {
                  for (; m = (E = r.lencode[l & (1 << r.lenbits) - 1]) >>> 16 &
                             255,
                         b = 65535 & E, !((y = E >>> 24) <= u);) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  if (b < 16)
                    l >>>= y, u -= y, r.lens[r.have++] = b;
                  else {
                    if (16 === b) {
                      for (S = y + 2; u < S;) {
                        if (0 === s) break e;
                        s--, l += n[o++] << u, u += 8
                      }
                      if (l >>>= y, u -= y, 0 === r.have) {
                        e.msg = 'invalid bit length repeat', r.mode = iN;
                        break
                      }
                      x = r.lens[r.have - 1], f = 3 + (3 & l), l >>>= 2, u -= 2
                    } else if (17 === b) {
                      for (S = y + 3; u < S;) {
                        if (0 === s) break e;
                        s--, l += n[o++] << u, u += 8
                      }
                      u -= y, x = 0, f = 3 + (7 & (l >>>= y)), l >>>= 3, u -= 3
                    } else {
                      for (S = y + 7; u < S;) {
                        if (0 === s) break e;
                        s--, l += n[o++] << u, u += 8
                      }
                      u -= y, x = 0, f = 11 + (127 & (l >>>= y)), l >>>= 7,
                              u -= 7
                    }
                    if (r.have + f > r.nlen + r.ndist) {
                      e.msg = 'invalid bit length repeat', r.mode = iN;
                      break
                    }
                    for (; f--;) r.lens[r.have++] = x
                  }
                }
                if (r.mode === iN) break;
                if (0 === r.lens[256]) {
                  e.msg = 'invalid code -- missing end-of-block', r.mode = iN;
                  break
                }
                if (r.lenbits = 9, C = {bits: r.lenbits},
                    k = pP(yP, r.lens, 0, r.nlen, r.lencode, 0, r.work, C),
                    r.lenbits = C.bits, k) {
                  e.msg = 'invalid literal/lengths set', r.mode = iN;
                  break
                }
                if (r.distbits = 6, r.distcode = r.distdyn,
                    C = {bits: r.distbits},
                    k = pP(
                        mP, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, C),
                    r.distbits = C.bits, k) {
                  e.msg = 'invalid distances set', r.mode = iN;
                  break
                }
                if (r.mode = VP, t === _P) break e;
              case VP:
                r.mode = JP;
              case JP:
                if (6 <= s && 258 <= c) {
                  e.next_out = a, e.avail_out = c, e.next_in = o,
                  e.avail_in = s, r.hold = l, r.bits = u, rP(e, h),
                  a = e.next_out, i = e.output, c = e.avail_out, o = e.next_in,
                  n = e.input, s = e.avail_in, l = r.hold, u = r.bits,
                  r.mode === UP && (r.back = -1);
                  break
                }
                for (r.back = 0;
                     m = (E = r.lencode[l & (1 << r.lenbits) - 1]) >>> 16 & 255,
                    b = 65535 & E, !((y = E >>> 24) <= u);) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                if (m && 0 == (240 & m)) {
                  for (v = y, _ = m, w = b;
                       m = (E = r.lencode
                                    [w + ((l & (1 << v + _) - 1) >> v)]) >>>
                               16 &
                           255,
                      b = 65535 & E, !(v + (y = E >>> 24) <= u);) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  l >>>= v, u -= v, r.back += v
                }
                if (l >>>= y, u -= y, r.back += y, r.length = b, 0 === m) {
                  r.mode = eN;
                  break
                }
                if (32 & m) {
                  r.back = -1, r.mode = UP;
                  break
                }
                if (64 & m) {
                  e.msg = 'invalid literal/length code', r.mode = iN;
                  break
                }
                r.extra = 15 & m, r.mode = XP;
              case XP:
                if (r.extra) {
                  for (S = r.extra; u < S;) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  r.length += l & (1 << r.extra) - 1, l >>>= r.extra,
                      u -= r.extra, r.back += r.extra
                }
                r.was = r.length, r.mode = $P;
              case $P:
                for (; m = (E = r.distcode[l & (1 << r.distbits) - 1]) >>> 16 &
                           255,
                       b = 65535 & E, !((y = E >>> 24) <= u);) {
                  if (0 === s) break e;
                  s--, l += n[o++] << u, u += 8
                }
                if (0 == (240 & m)) {
                  for (v = y, _ = m, w = b;
                       m = (E = r.distcode
                                    [w + ((l & (1 << v + _) - 1) >> v)]) >>>
                               16 &
                           255,
                      b = 65535 & E, !(v + (y = E >>> 24) <= u);) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  l >>>= v, u -= v, r.back += v
                }
                if (l >>>= y, u -= y, r.back += y, 64 & m) {
                  e.msg = 'invalid distance code', r.mode = iN;
                  break
                }
                r.offset = b, r.extra = 15 & m, r.mode = qP;
              case qP:
                if (r.extra) {
                  for (S = r.extra; u < S;) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  r.offset += l & (1 << r.extra) - 1, l >>>= r.extra,
                      u -= r.extra, r.back += r.extra
                }
                if (r.offset > r.dmax) {
                  e.msg = 'invalid distance too far back', r.mode = iN;
                  break
                }
                r.mode = QP;
              case QP:
                if (0 === c) break e;
                if (r.offset > (f = h - c)) {
                  if ((f = r.offset - f) > r.whave && r.sane) {
                    e.msg = 'invalid distance too far back', r.mode = iN;
                    break
                  }
                  p = f > r.wnext ? (f -= r.wnext, r.wsize - f) : r.wnext - f,
                  f > r.length && (f = r.length), g = r.window
                } else
                  g = i, p = a - r.offset, f = r.length;
                for (c -= f = c < f ? c : f, r.length -= f;
                     i[a++] = g[p++], --f;)
                  ;
                0 === r.length && (r.mode = JP);
                break;
              case eN:
                if (0 === c) break e;
                i[a++] = r.length, c--, r.mode = JP;
                break;
              case tN:
                if (r.wrap) {
                  for (; u < 32;) {
                    if (0 === s) break e;
                    s--, l |= n[o++] << u, u += 8
                  }
                  if (h -= c, e.total_out += h, r.total += h,
                      h &&
                          (e.adler = r.check =
                               (r.flags ? MT : RT)(r.check, i, h, a - h)),
                      h = c, (r.flags ? l : dN(l)) !== r.check) {
                    e.msg = 'incorrect data check', r.mode = iN;
                    break
                  }
                  u = l = 0
                }
                r.mode = rN;
              case rN:
                if (r.wrap && r.flags) {
                  for (; u < 32;) {
                    if (0 === s) break e;
                    s--, l += n[o++] << u, u += 8
                  }
                  if (l !== (4294967295 & r.total)) {
                    e.msg = 'incorrect length check', r.mode = iN;
                    break
                  }
                  u = l = 0
                }
                r.mode = nN;
              case nN:
                k = xP;
                break e;
              case iN:
                k = SP;
                break e;
              case oN:
                return EP;
              default:
                return CP
            }
            return e.next_out = a, e.avail_out = c, e.next_in = o,
                   e.avail_in = s, r.hold = l, r.bits = u,
                   (r.wsize ||
                    h !== e.avail_out && r.mode < iN &&
                        (r.mode < tN || t !== bP)) &&
                       xN(e, e.output, e.next_out, h - e.avail_out),
                   d -= e.avail_in, h -= e.avail_out, e.total_in += d,
                   e.total_out += h, r.total += h,
                   r.wrap && h &&
                       (e.adler = r.check =
                            (r.flags ? MT : RT)(r.check, i, h, e.next_out - h)),
                   e.data_type = r.bits + (r.last ? 64 : 0) +
                       (r.mode === UP ? 128 : 0) +
                       (r.mode === VP || r.mode === YP ? 256 : 0),
                   k = (0 == d && 0 === h || t === bP) && k === wP ? AP : k
          },
          CN =
              function(e) {
            if (!e || !e.state) return CP;
            var t = e.state;
            return t.window && (t.window = null), e.state = null, wP
          },
          SN =
              function(e, t) {
            if (!e || !e.state) return CP;
            e = e.state;
            return 0 == (2 & e.wrap) ? CP : ((e.head = t).done = !1, wP)
          },
          EN =
              function(e, t) {
            var r, n = t.length;
            return !e || !e.state || 0 !== (r = e.state).wrap && r.mode !== KP ?
                CP :
                r.mode === KP && RT(1, t, n, 0) !== r.check ?
                SP :
                xN(e, t, n, n) ? (r.mode = oN, EP) : (r.havedict = 1, wP)
          },
          AN = pN, ON = gN, LN = fN, IN = mN, TN = yN, FN = kN, RN = CN,
          PN = SN, NN = EN, DN = 'pako inflate (from Nodeca project)', MN = {
            inflateReset: AN,
            inflateReset2: ON,
            inflateResetKeep: LN,
            inflateInit: IN,
            inflateInit2: TN,
            inflate: FN,
            inflateEnd: RN,
            inflateGetHeader: PN,
            inflateSetDictionary: NN,
            inflateInfo: DN
          };
      function zN() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0,
        this.extra = null, this.extra_len = 0, this.name = '',
        this.comment = '', this.hcrc = 0, this.done = !1
      }
      var KN = zN, UN = Object.prototype.toString, jN = KT.Z_NO_FLUSH,
          BN = KT.Z_FINISH, YN = KT.Z_OK, HN = KT.Z_STREAM_END,
          GN = KT.Z_NEED_DICT, WN = KT.Z_STREAM_ERROR, ZN = KT.Z_DATA_ERROR,
          VN = KT.Z_MEM_ERROR;
      function JN(e) {
        this.options =
            kR.assign({chunkSize: 65536, windowBits: 15, to: ''}, e || {});
        var t = this.options;
        t.raw && 0 <= t.windowBits && t.windowBits < 16 &&
            (t.windowBits = -t.windowBits,
             0 === t.windowBits && (t.windowBits = -15)),
            !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits ||
            (t.windowBits += 32),
            15 < t.windowBits && t.windowBits < 48 &&
            0 == (15 & t.windowBits) && (t.windowBits |= 15),
            this.err = 0, this.msg = '', this.ended = !1, this.chunks = [],
            this.strm = new RR, this.strm.avail_out = 0;
        e = MN.inflateInit2(this.strm, t.windowBits);
        if (e !== YN) throw new Error(zT[e]);
        if (this.header = new KN, MN.inflateGetHeader(this.strm, this.header),
            t.dictionary &&
                ('string' == typeof t.dictionary ?
                     t.dictionary = TR.string2buf(t.dictionary) :
                     '[object ArrayBuffer]' === UN.call(t.dictionary) &&
                         (t.dictionary = new Uint8Array(t.dictionary)),
                 t.raw &&
                     (e = MN.inflateSetDictionary(this.strm, t.dictionary)) !==
                         YN))
          throw new Error(zT[e])
      }
      function XN(e, t) {
        t = new JN(t);
        if (t.push(e), t.err) throw t.msg || zT[t.err];
        return t.result
      }
      function $N(e, t) {
        return (t = t || {}).raw = !0, XN(e, t)
      }
      JN.prototype.push = function(e, t) {
        var r, n, i = this.strm, o = this.options.chunkSize,
                  a = this.options.dictionary;
        if (this.ended) return !1;
        for (n = t === ~~t ? t : !0 === t ? BN : jN,
            '[object ArrayBuffer]' === UN.call(e) ?
                 i.input = new Uint8Array(e) :
                 i.input = e,
            i.next_in = 0, i.avail_in = i.input.length;
             ;) {
          for (0 === i.avail_out &&
                   (i.output = new Uint8Array(o), i.next_out = 0,
                   i.avail_out = o),
               (r = MN.inflate(i, n)) === GN && a &&
                   ((r = MN.inflateSetDictionary(i, a)) === YN ?
                        r = MN.inflate(i, n) :
                        r === ZN && (r = GN));
               0 < i.avail_in && r === HN && 0 < i.state.wrap &&
               0 !== e[i.next_in];)
            MN.inflateReset(i), r = MN.inflate(i, n);
          switch (r) {
            case WN:
            case ZN:
            case GN:
            case VN:
              return this.onEnd(r), !(this.ended = !0)
          }
          var s, c, l, u = i.avail_out;
          if (i.next_out &&
                  (0 !== i.avail_out && r !== HN ||
                   ('string' === this.options.to ?
                        (s = TR.utf8border(i.output, i.next_out),
                         c = i.next_out - s, l = TR.buf2string(i.output, s),
                         i.next_out = c, i.avail_out = o - c,
                         c && i.output.set(i.output.subarray(s, s + c), 0),
                         this.onData(l)) :
                        this.onData(
                            i.output.length === i.next_out ?
                                i.output :
                                i.output.subarray(0, i.next_out)))),
              r !== YN || 0 !== u) {
            if (r === HN)
              return r = MN.inflateEnd(this.strm), this.onEnd(r),
                     this.ended = !0;
            if (0 === i.avail_in) break
          }
        }
        return !0
      }, JN.prototype.onData = function(e) {
        this.chunks.push(e)
      }, JN.prototype.onEnd = function(e) {
        e === YN &&
            ('string' === this.options.to ?
                 this.result = this.chunks.join('') :
                 this.result = kR.flattenChunks(this.chunks)),
            this.chunks = [], this.err = e, this.msg = this.strm.msg
      };
      var qN = JN, QN = XN, e7 = $N, t7 = XN, r7 = KT, n7 = {
        Inflate: qN,
        inflate: QN,
        inflateRaw: e7,
        ungzip: t7,
        constants: r7
      },
          i7 = QR.Deflate, o7 = QR.deflate, a7 = QR.deflateRaw, s7 = QR.gzip,
          c7 = n7.Inflate, l7 = n7.inflate, u7 = n7.inflateRaw, d7 = n7.ungzip,
          h7 = i7, f7 = o7, p7 = a7, g7 = s7, y7 = c7, m7 = l7, b7 = u7,
          v7 = d7, _7 = KT, w7 = {
            Deflate: h7,
            deflate: f7,
            deflateRaw: p7,
            gzip: g7,
            Inflate: y7,
            inflate: m7,
            inflateRaw: b7,
            ungzip: v7,
            constants: _7
          },
          x7 = Object.freeze({
            __proto__: null,
            Deflate: h7,
            Inflate: y7,
            constants: _7,
            default: w7,
            deflate: f7,
            deflateRaw: p7,
            gzip: g7,
            inflate: m7,
            inflateRaw: b7,
            ungzip: v7
          }),
          k7 = 'undefined' != typeof Uint8Array &&
          'undefined' != typeof Uint16Array &&
          'undefined' != typeof Uint32Array,
          C7 = k7 ? 'uint8array' : 'array', S7 = {};
      function E7(e, t) {
        z8.call(this, 'FlateWorker/' + e),
            this._pako = null, this._pakoAction = e, this._pakoOptions = t,
            this.meta = {}
      }
      S7.magic = '\b\0', I8.inherits(E7, z8),
      E7.prototype.processChunk = function(e) {
        this.meta = e.meta, null === this._pako && this._createPako(),
        this._pako.push(I8.transformTo(C7, e.data), !1)
      }, E7.prototype.flush = function() {
        z8.prototype.flush.call(this),
            null === this._pako && this._createPako(), this._pako.push([], !0)
      }, E7.prototype.cleanUp = function() {
        z8.prototype.cleanUp.call(this), this._pako = null
      }, E7.prototype._createPako = function() {
        this._pako = new x7[this._pakoAction](
            {raw: !0, level: this._pakoOptions.level || -1});
        var t = this;
        this._pako.onData = function(e) {
          t.push({data: e, meta: t.meta})
        }
      }, S7.compressWorker = function(e) {
        return new E7('Deflate', e)
      }, S7.uncompressWorker = function() {
        return new E7('Inflate', {})
      };
      var A7 = {
        STORE: {
          magic: '\0\0',
          compressWorker: function(e) {
            return new z8('STORE compression')
          },
          uncompressWorker: function() {
            return new z8('STORE decompression')
          }
        }
      };
      A7.DEFLATE = S7;
      var O7 = {
        LOCAL_FILE_HEADER: 'PK\x03\x04',
        CENTRAL_FILE_HEADER: 'PK\x01\x02',
        CENTRAL_DIRECTORY_END: 'PK\x05\x06',
        ZIP64_CENTRAL_DIRECTORY_LOCATOR: 'PK\x06\x07',
        ZIP64_CENTRAL_DIRECTORY_END: 'PK\x06\x06',
        DATA_DESCRIPTOR: 'PK\x07\b'
      },
          L7 = function(e, t) {
            for (var r = '', n = 0; n < t; n++)
              r += String.fromCharCode(255 & e), e >>>= 8;
            return r
          }, I7 = function(e, t) {
            return (65535 & (e ? e : t ? 16893 : 33204)) << 16
          }, T7 = function(e, t) {
            return 63 & (e || 0)
          }, F7 = function(e, t, r, n, i, o) {
            var a, s = e.file, c = e.compression, l = o !== K8.utf8encode,
                   u = I8.transformTo('string', o(s.name)),
                   d = I8.transformTo('string', K8.utf8encode(s.name)),
                   h = s.comment, f = I8.transformTo('string', o(h)),
                   p = I8.transformTo('string', K8.utf8encode(h)),
                   g = d.length !== s.name.length, y = p.length !== h.length,
                   m = '', b = s.dir, o = s.date,
                   h = {crc32: 0, compressedSize: 0, uncompressedSize: 0};
            t && !r ||
                (h.crc32 = e.crc32, h.compressedSize = e.compressedSize,
                 h.uncompressedSize = e.uncompressedSize);
            e = 0;
            t && (e |= 8), l || !g && !y || (e |= 2048);
            t = 0, l = 0;
            b && (t |= 16),
                'UNIX' === i ? (l = 798, t |= I7(s.unixPermissions, b)) :
                               (l = 20, t |= T7(s.dosPermissions)),
                b = o.getUTCHours(), b <<= 6, b |= o.getUTCMinutes(), b <<= 5,
                b |= o.getUTCSeconds() / 2, s = o.getUTCFullYear() - 1980,
                s <<= 4, s |= o.getUTCMonth() + 1, s <<= 5, s |= o.getUTCDate(),
                g &&
                (a = L7(1, 1) + L7(aI(u), 4) + d,
                 m += 'up' + L7(a.length, 2) + a),
                y &&
                (v = L7(1, 1) + L7(aI(f), 4) + p,
                 m += 'uc' + L7(v.length, 2) + v);
            var v = '';
            return v += '\n\0', v += L7(e, 2), v += c.magic, v += L7(b, 2),
                   v += L7(s, 2), v += L7(h.crc32, 4),
                   v += L7(h.compressedSize, 4), v += L7(h.uncompressedSize, 4),
                   v += L7(u.length, 2), v += L7(m.length, 2), {
              fileRecord: O7.LOCAL_FILE_HEADER + v + u + m,
                  dirRecord: O7.CENTRAL_FILE_HEADER + L7(l, 2) + v +
                  L7(f.length, 2) + '\0\0\0\0' + L7(t, 4) + L7(n, 4) + u + m + f
            }
          }, R7 = function(e, t, r, n, i) {
            n = I8.transformTo('string', i(n));
            return O7.CENTRAL_DIRECTORY_END + '\0\0\0\0' + L7(e, 2) + L7(e, 2) +
                L7(t, 4) + L7(r, 4) + L7(n.length, 2) + n
          }, P7 = function(e) {
            return O7.DATA_DESCRIPTOR + L7(e.crc32, 4) +
                L7(e.compressedSize, 4) + L7(e.uncompressedSize, 4)
          };
      function N7(e, t, r, n) {
        z8.call(this, 'ZipFileWorker'),
            this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = r,
            this.encodeFileName = n, this.streamFiles = e, this.accumulate = !1,
            this.contentBuffer = [], this.dirRecords = [],
            this.currentSourceOffset = 0, this.entriesCount = 0,
            this.currentFile = null, this._sources = []
      }
      I8.inherits(N7, z8), N7.prototype.push = function(e) {
        var t = e.meta.percent || 0, r = this.entriesCount,
            n = this._sources.length;
        this.accumulate ?
            this.contentBuffer.push(e) :
            (this.bytesWritten += e.data.length, z8.prototype.push.call(this, {
              data: e.data,
              meta: {
                currentFile: this.currentFile,
                percent: r ? (t + 100 * (r - n - 1)) / r : 100
              }
            }))
      }, N7.prototype.openedSource = function(e) {
        this.currentSourceOffset = this.bytesWritten,
        this.currentFile = e.file.name;
        var t = this.streamFiles && !e.file.dir;
        t ? (t =
                 F7(e, t, !1, this.currentSourceOffset, this.zipPlatform,
                    this.encodeFileName),
             this.push({data: t.fileRecord, meta: {percent: 0}})) :
            this.accumulate = !0
      }, N7.prototype.closedSource = function(e) {
        this.accumulate = !1;
        var t = this.streamFiles && !e.file.dir,
            r =
                F7(e, t, !0, this.currentSourceOffset, this.zipPlatform,
                   this.encodeFileName);
        if (this.dirRecords.push(r.dirRecord), t)
          this.push({data: P7(e), meta: {percent: 100}});
        else
          for (this.push({data: r.fileRecord, meta: {percent: 0}});
               this.contentBuffer.length;)
            this.push(this.contentBuffer.shift());
        this.currentFile = null
      }, N7.prototype.flush = function() {
        for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++)
          this.push({data: this.dirRecords[t], meta: {percent: 100}});
        var r = this.bytesWritten - e,
            e =
                R7(this.dirRecords.length, r, e, this.zipComment,
                   this.encodeFileName);
        this.push({data: e, meta: {percent: 100}})
      }, N7.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(),
        this.openedSource(this.previous.streamInfo),
        this.isPaused ? this.previous.pause() : this.previous.resume()
      }, N7.prototype.registerPrevious = function(e) {
        this._sources.push(e);
        var t = this;
        return e.on('data', function(e) {
          t.processChunk(e)
        }), e.on('end', function() {
          t.closedSource(t.previous.streamInfo),
              t._sources.length ? t.prepareNextSource() : t.end()
        }), e.on('error', function(e) {
          t.error(e)
        }), this
      }, N7.prototype.resume = function() {
        return !!z8.prototype.resume.call(this) &&
            (!this.previous && this._sources.length ?
                 (this.prepareNextSource(), !0) :
                 this.previous || this._sources.length || this.generatedError ?
                 void 0 :
                 (this.end(), !0))
      }, N7.prototype.error = function(e) {
        var t = this._sources;
        if (!z8.prototype.error.call(this, e)) return !1;
        for (var r = 0; r < t.length; r++) try {
            t[r].error(e)
          } catch (e) {
          }
        return !0
      }, N7.prototype.lock = function() {
        z8.prototype.lock.call(this);
        for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock()
      };
      var D7 = {}, M7 = function(e, t) {
        e = e || t, t = A7[e];
        if (!t) throw new Error(e + ' is not a valid compression method !');
        return t
      };
      function z7(e, t) {
        z8.call(this, 'Nodejs stream input adapter for ' + e),
            this._upstreamEnded = !1, this._bindStream(t)
      }
      D7.generateWorker = function(e, a, t) {
        var s = new N7(a.streamFiles, t, a.platform, a.encodeFileName), c = 0;
        try {
          e.forEach(function(e, t) {
            c++;
            var r = M7(t.options.compression, a.compression),
                n = t.options.compressionOptions || a.compressionOptions || {},
                i = t.dir, o = t.date;
            t._compressWorker(r, n)
                .withStreamInfo('file', {
                  name: e,
                  dir: i,
                  date: o,
                  comment: t.comment || '',
                  unixPermissions: t.unixPermissions,
                  dosPermissions: t.dosPermissions
                })
                .pipe(s)
          }),
              s.entriesCount = c
        } catch (e) {
          s.error(e)
        }
        return s
      }, I8.inherits(z7, z8), z7.prototype._bindStream = function(e) {
        var t = this;
        (this._stream = e).pause(),
            e.on('data',
                 function(e) {
                   t.push({data: e, meta: {percent: 0}})
                 })
                .on('error',
                    function(e) {
                      t.isPaused ? this.generatedError = e : t.error(e)
                    })
                .on('end', function() {
                  t.isPaused ? t._upstreamEnded = !0 : t.end()
                })
      }, z7.prototype.pause = function() {
        return !!z8.prototype.pause.call(this) && (this._stream.pause(), !0)
      }, z7.prototype.resume = function() {
        return !!z8.prototype.resume.call(this) &&
            (this._upstreamEnded ? this.end() : this._stream.resume(), !0)
      };
      var K7 = function(e, t, r) {
        var n, i = I8.getTypeOf(t), o = I8.extend(r || {}, Q8);
        o.date = o.date || new Date,
        null !== o.compression && (o.compression = o.compression.toUpperCase()),
        'string' == typeof o.unixPermissions &&
            (o.unixPermissions = parseInt(o.unixPermissions, 8)),
        o.unixPermissions && 16384 & o.unixPermissions && (o.dir = !0),
        o.dosPermissions && 16 & o.dosPermissions && (o.dir = !0),
        o.dir && (e = j7(e)),
        o.createFolders && (n = U7(e)) && B7.call(this, n, !0);
        i = 'string' === i && !1 === o.binary && !1 === o.base64;
        r && void 0 !== r.binary || (o.binary = !i),
            (t instanceof lI && 0 === t.uncompressedSize || o.dir || !t ||
             0 === t.length) &&
            (o.base64 = !1, o.binary = !0, t = '', o.compression = 'STORE');
        i = null,
        i = t instanceof lI || t instanceof z8 ?
            t :
            A8.isNode && A8.isStream(t) ?
            new z7(e, t) :
            I8.prepareContent(
                e, t, o.binary, o.optimizedBinaryString, o.base64),
        o = new uI(e, i, o);
        this.files[e] = o
      }, U7 = function(e) {
        var t = (e = '/' === e.slice(-1) ? e.substring(0, e.length - 1) : e)
                    .lastIndexOf('/');
        return 0 < t ? e.substring(0, t) : ''
      }, j7 = function(e) {
        return '/' !== e.slice(-1) && (e += '/'), e
      }, B7 = function(e, t) {
        return t = void 0 !== t ? t : Q8.createFolders, e = j7(e),
               this.files[e] ||
                   K7.call(this, e, null, {dir: !0, createFolders: t}),
               this.files[e]
      };
      function Y7(e) {
        return '[object RegExp]' === Object.prototype.toString.call(e)
      }
      var H7 = {
        load: function() {
          throw new Error(
              'This method has been removed in JSZip 3.0, please check the upgrade guide.')
        },
        forEach: function(e) {
          var t, r, n;
          for (t in this.files)
            n = this.files[t],
            (r = t.slice(this.root.length, t.length)) &&
                t.slice(0, this.root.length) === this.root && e(r, n)
        },
        filter: function(r) {
          var n = [];
          return this.forEach(function(e, t) {
            r(e, t) && n.push(t)
          }),
                 n
        },
        file: function(e, t, r) {
          if (1 !== arguments.length)
            return e = this.root + e, K7.call(this, e, t, r), this;
          if (Y7(e)) {
            var n = e;
            return this.filter(function(e, t) {
              return !t.dir && n.test(e)
            })
          }
          e = this.files[this.root + e];
          return e && !e.dir ? e : null
        },
        folder: function(r) {
          if (!r) return this;
          if (Y7(r))
            return this.filter(function(e, t) {
              return t.dir && r.test(e)
            });
          var e = this.root + r, t = B7.call(this, e), e = this.clone();
          return e.root = t.name, e
        },
        remove: function(r) {
          r = this.root + r;
          var e = this.files[r];
          if (e || ('/' !== r.slice(-1) && (r += '/'), e = this.files[r]),
              e && !e.dir)
            delete this.files[r];
          else
            for (var t = this.filter(function(e, t) {
                   return t.name.slice(0, r.length) === r
                 }),
                     n = 0;
                 n < t.length; n++)
              delete this.files[t[n].name];
          return this
        },
        generate: function(e) {
          throw new Error(
              'This method has been removed in JSZip 3.0, please check the upgrade guide.')
        },
        generateInternalStream: function(e) {
          var t = {};
          try {
            if ((t = I8.extend(e || {}, {
                  streamFiles: !1,
                  compression: 'STORE',
                  compressionOptions: null,
                  type: '',
                  platform: 'DOS',
                  comment: null,
                  mimeType: 'application/zip',
                  encodeFileName: K8.utf8encode
                })).type = t.type.toLowerCase(),
                t.compression = t.compression.toUpperCase(),
                'binarystring' === t.type && (t.type = 'string'), !t.type)
              throw new Error('No output type specified.');
            I8.checkSupport(t.type),
                'darwin' !== t.platform && 'freebsd' !== t.platform &&
                    'linux' !== t.platform && 'sunos' !== t.platform ||
                (t.platform = 'UNIX'),
                'win32' === t.platform && (t.platform = 'DOS');
            var r = t.comment || this.comment || '',
                n = D7.generateWorker(this, t, r)
          } catch (e) {
            (n = new z8('error')).error(e)
          }
          return new q8(n, t.type || 'string', t.mimeType)
        },
        generateAsync: function(e, t) {
          return this.generateInternalStream(e).accumulate(t)
        },
        generateNodeStream: function(e, t) {
          return (e = e || {}).type || (e.type = 'nodebuffer'),
                 this.generateInternalStream(e).toNodejsStream(t)
        }
      };
      function G7(e) {
        this.data = e, this.length = e.length, this.index = 0, this.zero = 0
      }
      function W7(e) {
        G7.call(this, e);
        for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t]
      }
      function Z7(e) {
        G7.call(this, e)
      }
      function V7(e) {
        W7.call(this, e)
      }
      function J7(e) {
        V7.call(this, e)
      }
      function X7(e) {
        var t = I8.getTypeOf(e);
        return I8.checkSupport(t),
               'string' !== t || g8.uint8array ?
                   'nodebuffer' === t ?
                   new J7(e) :
                   g8.uint8array ? new V7(I8.transformTo('uint8array', e)) :
                                   new W7(I8.transformTo('array', e)) :
                   new Z7(e)
      }
      G7.prototype = {
        checkOffset: function(e) {
          this.checkIndex(this.index + e)
        },
        checkIndex: function(e) {
          if (this.length < this.zero + e || e < 0)
            throw new Error(
                'End of data reached (data length = ' + this.length +
                ', asked index = ' + e + '). Corrupted zip ?')
        },
        setIndex: function(e) {
          this.checkIndex(e), this.index = e
        },
        skip: function(e) {
          this.setIndex(this.index + e)
        },
        byteAt: function(e) {},
        readInt: function(e) {
          var t, r = 0;
          for (this.checkOffset(e), t = this.index + e - 1; t >= this.index;
               t--)
            r = (r << 8) + this.byteAt(t);
          return this.index += e, r
        },
        readString: function(e) {
          return I8.transformTo('string', this.readData(e))
        },
        readData: function(e) {},
        lastIndexOfSignature: function(e) {},
        readAndCheckSignature: function(e) {},
        readDate: function() {
          var e = this.readInt(4);
          return new Date(Date.UTC(
              1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31,
              e >> 11 & 31, e >> 5 & 63, (31 & e) << 1))
        }
      },
      I8.inherits(W7, G7), W7.prototype.byteAt = function(e) {
        return this.data[this.zero + e]
      }, W7.prototype.lastIndexOfSignature = function(e) {
        for (var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2),
                 i = e.charCodeAt(3), o = this.length - 4;
             0 <= o; --o)
          if (this.data[o] === t && this.data[o + 1] === r &&
              this.data[o + 2] === n && this.data[o + 3] === i)
            return o - this.zero;
        return -1
      }, W7.prototype.readAndCheckSignature = function(e) {
        var t = e.charCodeAt(0), r = e.charCodeAt(1), n = e.charCodeAt(2),
            i = e.charCodeAt(3), e = this.readData(4);
        return t === e[0] && r === e[1] && n === e[2] && i === e[3]
      }, W7.prototype.readData = function(e) {
        if (this.checkOffset(e), 0 === e) return [];
        var t =
            this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t
      }, I8.inherits(Z7, G7), Z7.prototype.byteAt = function(e) {
        return this.data.charCodeAt(this.zero + e)
      }, Z7.prototype.lastIndexOfSignature = function(e) {
        return this.data.lastIndexOf(e) - this.zero
      }, Z7.prototype.readAndCheckSignature = function(e) {
        return e === this.readData(4)
      }, Z7.prototype.readData = function(e) {
        this.checkOffset(e);
        var t =
            this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t
      }, I8.inherits(V7, W7), V7.prototype.readData = function(e) {
        if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
        var t = this.data.subarray(
            this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t
      }, I8.inherits(J7, V7), J7.prototype.readData = function(e) {
        this.checkOffset(e);
        var t =
            this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, t
      };
      var $7 = 0, q7 = 3, Q7 = function(e) {
        for (var t in A7)
          if (A7.hasOwnProperty(t) && A7[t].magic === e) return A7[t];
        return null
      };
      function eD(e, t) {
        this.options = e, this.loadOptions = t
      }
      function tD(e) {
        this.files = [], this.loadOptions = e
      }
      function rD(n) {
        return new L8.Promise(function(e, t) {
          var r = n.decompressed.getContentWorker().pipe(new sI);
          r.on('error',
               function(e) {
                 t(e)
               })
              .on('end',
                  function() {
                    r.streamInfo.crc32 !== n.decompressed.crc32 ?
                        t(new Error('Corrupted zip : CRC32 mismatch')) :
                        e()
                  })
              .resume()
        })
      }
      function nD(e, i) {
        var o = this;
        return i = I8.extend(i || {}, {
          base64: !1,
          checkCRC32: !1,
          optimizedBinaryString: !1,
          createFolders: !1,
          decodeFileName: K8.utf8decode
        }),
               A8.isNode && A8.isStream(e) ?
                   L8.Promise.reject(new Error(
                       'JSZip can\'t accept a stream when loading a zip file.')) :
                   I8.prepareContent(
                         'the loaded zip file', e, !0, i.optimizedBinaryString,
                         i.base64)
                       .then(function(e) {
                         var t = new tD(i);
                         return t.load(e), t
                       })
                       .then(function(e) {
                         var t = [L8.Promise.resolve(e)], r = e.files;
                         if (i.checkCRC32)
                           for (var n = 0; n < r.length; n++) t.push(rD(r[n]));
                         return L8.Promise.all(t)
                       })
                       .then(function(e) {
                         for (var e = e.shift(), t = e.files, r = 0;
                              r < t.length; r++) {
                           var n = t[r];
                           o.file(n.fileNameStr, n.decompressed, {
                             binary: !0,
                             optimizedBinaryString: !0,
                             date: n.date,
                             dir: n.dir,
                             comment: n.fileCommentStr.length ?
                                 n.fileCommentStr :
                                 null,
                             unixPermissions: n.unixPermissions,
                             dosPermissions: n.dosPermissions,
                             createFolders: i.createFolders
                           })
                         }
                         return e.zipComment.length &&
                                    (o.comment = e.zipComment),
                                o
                       })
      }
      function iD() {
        if (!(this instanceof iD)) return new iD;
        if (arguments.length)
          throw new Error(
              'The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.');
        this.files = Object.create(null), this.comment = null, this.root = '',
        this.clone = function() {
          var e, t = new iD;
          for (e in this) 'function' != typeof this[e] && (t[e] = this[e]);
          return t
        }
      }
      eD.prototype = {
        isEncrypted: function() {
          return 1 == (1 & this.bitFlag)
        },
        useUTF8: function() {
          return 2048 == (2048 & this.bitFlag)
        },
        readLocalPart: function(e) {
          var t;
          if (e.skip(22), this.fileNameLength = e.readInt(2), t = e.readInt(2),
              this.fileName = e.readData(this.fileNameLength), e.skip(t),
              -1 === this.compressedSize || -1 === this.uncompressedSize)
            throw new Error(
                'Bug or corrupted zip : didn\'t get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)');
          if (null === (t = Q7(this.compressionMethod)))
            throw new Error(
                'Corrupted zip : compression ' +
                I8.pretty(this.compressionMethod) + ' unknown (inner file : ' +
                I8.transformTo('string', this.fileName) + ')');
          this.decompressed = new lI(
              this.compressedSize, this.uncompressedSize, this.crc32, t,
              e.readData(this.compressedSize))
        },
        readCentralPart: function(e) {
          this.versionMadeBy = e.readInt(2), e.skip(2),
          this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2),
          this.date = e.readDate(), this.crc32 = e.readInt(4),
          this.compressedSize = e.readInt(4),
          this.uncompressedSize = e.readInt(4);
          var t = e.readInt(2);
          if (this.extraFieldsLength = e.readInt(2),
              this.fileCommentLength = e.readInt(2),
              this.diskNumberStart = e.readInt(2),
              this.internalFileAttributes = e.readInt(2),
              this.externalFileAttributes = e.readInt(4),
              this.localHeaderOffset = e.readInt(4), this.isEncrypted())
            throw new Error('Encrypted zip are not supported');
          e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e),
              this.fileComment = e.readData(this.fileCommentLength)
        },
        processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var e = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes),
          e === $7 && (this.dosPermissions = 63 & this.externalFileAttributes),
          e === q7 &&
              (this.unixPermissions =
                   this.externalFileAttributes >> 16 & 65535),
          this.dir || '/' !== this.fileNameStr.slice(-1) || (this.dir = !0)
        },
        parseZIP64ExtraField: function(e) {
          var t;
          this.extraFields[1] &&
              (t = X7(this.extraFields[1].value),
               this.uncompressedSize === I8.MAX_VALUE_32BITS &&
                   (this.uncompressedSize = t.readInt(8)),
               this.compressedSize === I8.MAX_VALUE_32BITS &&
                   (this.compressedSize = t.readInt(8)),
               this.localHeaderOffset === I8.MAX_VALUE_32BITS &&
                   (this.localHeaderOffset = t.readInt(8)),
               this.diskNumberStart === I8.MAX_VALUE_32BITS &&
                   (this.diskNumberStart = t.readInt(4)))
        },
        readExtraFields: function(e) {
          var t, r, n, i = e.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); e.index + 4 < i;)
            t = e.readInt(2), r = e.readInt(2), n = e.readData(r),
            this.extraFields[t] = {id: t, length: r, value: n};
          e.setIndex(i)
        },
        handleUTF8: function() {
          var e, t, r = g8.uint8array ? 'uint8array' : 'array';
          this.useUTF8() ?
              (this.fileNameStr = K8.utf8decode(this.fileName),
               this.fileCommentStr = K8.utf8decode(this.fileComment)) :
              (null !== (e = this.findExtraFieldUnicodePath()) ?
                   this.fileNameStr = e :
                   (t = I8.transformTo(r, this.fileName),
                    this.fileNameStr = this.loadOptions.decodeFileName(t)),
               null !== (t = this.findExtraFieldUnicodeComment()) ?
                   this.fileCommentStr = t :
                   (r = I8.transformTo(r, this.fileComment),
                    this.fileCommentStr = this.loadOptions.decodeFileName(r)))
        },
        findExtraFieldUnicodePath: function() {
          var e = this.extraFields[28789];
          if (e) {
            var t = X7(e.value);
            return 1 !== t.readInt(1) ? null :
                                        aI(this.fileName) !== t.readInt(4) ?
                                        null :
                                        K8.utf8decode(t.readData(e.length - 5))
          }
          return null
        },
        findExtraFieldUnicodeComment: function() {
          var e = this.extraFields[25461];
          if (e) {
            var t = X7(e.value);
            return 1 !== t.readInt(1) ? null :
                                        aI(this.fileComment) !== t.readInt(4) ?
                                        null :
                                        K8.utf8decode(t.readData(e.length - 5))
          }
          return null
        }
      },
      tD.prototype = {
        checkSignature: function(e) {
          if (!this.reader.readAndCheckSignature(e)) {
            this.reader.index -= 4;
            var t = this.reader.readString(4);
            throw new Error(
                'Corrupted zip or bug: unexpected signature (' + I8.pretty(t) +
                ', expected ' + I8.pretty(e) + ')')
          }
        },
        isSignature: function(e, t) {
          var r = this.reader.index;
          this.reader.setIndex(e);
          t = this.reader.readString(4) === t;
          return this.reader.setIndex(r), t
        },
        readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2),
          this.diskWithCentralDirStart = this.reader.readInt(2),
          this.centralDirRecordsOnThisDisk = this.reader.readInt(2),
          this.centralDirRecords = this.reader.readInt(2),
          this.centralDirSize = this.reader.readInt(4),
          this.centralDirOffset = this.reader.readInt(4),
          this.zipCommentLength = this.reader.readInt(2);
          var e = this.reader.readData(this.zipCommentLength),
              t = g8.uint8array ? 'uint8array' : 'array',
              e = I8.transformTo(t, e);
          this.zipComment = this.loadOptions.decodeFileName(e)
        },
        readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8),
          this.reader.skip(4), this.diskNumber = this.reader.readInt(4),
          this.diskWithCentralDirStart = this.reader.readInt(4),
          this.centralDirRecordsOnThisDisk = this.reader.readInt(8),
          this.centralDirRecords = this.reader.readInt(8),
          this.centralDirSize = this.reader.readInt(8),
          this.centralDirOffset = this.reader.readInt(8),
          this.zip64ExtensibleData = {};
          for (var e, t, r, n = this.zip64EndOfCentralSize - 44; 0 < n;)
            e = this.reader.readInt(2), t = this.reader.readInt(4),
            r = this.reader.readData(t),
            this.zip64ExtensibleData[e] = {id: e, length: t, value: r}
        },
        readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4),
              this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8),
              this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
            throw new Error('Multi-volumes zip are not supported')
        },
        readLocalFiles: function() {
          for (var e, t = 0; t < this.files.length; t++)
            e = this.files[t], this.reader.setIndex(e.localHeaderOffset),
            this.checkSignature(O7.LOCAL_FILE_HEADER),
            e.readLocalPart(this.reader), e.handleUTF8(), e.processAttributes()
        },
        readCentralDir: function() {
          var e;
          for (this.reader.setIndex(this.centralDirOffset);
               this.reader.readAndCheckSignature(O7.CENTRAL_FILE_HEADER);)
            (e = new eD({zip64: this.zip64}, this.loadOptions))
                .readCentralPart(this.reader),
                this.files.push(e);
          if (this.centralDirRecords !== this.files.length &&
              0 !== this.centralDirRecords && 0 === this.files.length)
            throw new Error(
                'Corrupted zip or bug: expected ' + this.centralDirRecords +
                ' records in central dir, got ' + this.files.length)
        },
        readEndOfCentral: function() {
          var e = this.reader.lastIndexOfSignature(O7.CENTRAL_DIRECTORY_END);
          if (e < 0)
            throw !this.isSignature(0, O7.LOCAL_FILE_HEADER) ?
                new Error(
                    'Can\'t find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html') :
                new Error(
                    'Corrupted zip: can\'t find end of central directory');
          this.reader.setIndex(e);
          var t = e;
          if (this.checkSignature(O7.CENTRAL_DIRECTORY_END),
              this.readBlockEndOfCentral(),
              this.diskNumber === I8.MAX_VALUE_16BITS ||
                  this.diskWithCentralDirStart === I8.MAX_VALUE_16BITS ||
                  this.centralDirRecordsOnThisDisk === I8.MAX_VALUE_16BITS ||
                  this.centralDirRecords === I8.MAX_VALUE_16BITS ||
                  this.centralDirSize === I8.MAX_VALUE_32BITS ||
                  this.centralDirOffset === I8.MAX_VALUE_32BITS) {
            if (this.zip64 = !0,
                (e = this.reader.lastIndexOfSignature(
                     O7.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
              throw new Error(
                  'Corrupted zip: can\'t find the ZIP64 end of central directory locator');
            if (this.reader.setIndex(e),
                this.checkSignature(O7.ZIP64_CENTRAL_DIRECTORY_LOCATOR),
                this.readBlockZip64EndOfCentralLocator(),
                !this.isSignature(
                    this.relativeOffsetEndOfZip64CentralDir,
                    O7.ZIP64_CENTRAL_DIRECTORY_END) &&
                    (this.relativeOffsetEndOfZip64CentralDir =
                         this.reader.lastIndexOfSignature(
                             O7.ZIP64_CENTRAL_DIRECTORY_END),
                     this.relativeOffsetEndOfZip64CentralDir < 0))
              throw new Error(
                  'Corrupted zip: can\'t find the ZIP64 end of central directory');
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),
                this.checkSignature(O7.ZIP64_CENTRAL_DIRECTORY_END),
                this.readBlockZip64EndOfCentral()
          }
          e = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (e += 20, e += 12 + this.zip64EndOfCentralSize);
          e = t - e;
          if (0 < e)
            this.isSignature(t, O7.CENTRAL_FILE_HEADER) ||
                (this.reader.zero = e);
          else if (e < 0)
            throw new Error('Corrupted zip: missing ' + Math.abs(e) + ' bytes.')
        },
        prepareReader: function(e) {
          this.reader = X7(e)
        },
        load: function(e) {
          this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(),
              this.readLocalFiles()
        }
      },
      iD.prototype = H7, iD.prototype.loadAsync = nD, iD.support = g8,
      iD.defaults = Q8, iD.external = L8, iD.version = '3.7.1',
      iD.loadAsync = function(e, t) {
        return (new iD).loadAsync(e, t)
      };
      var oD = {};
      oD.byteLength = fD, oD.toByteArray = gD, oD.fromByteArray = bD;
      for (
          var aD = [], sD = [],
              cD = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
              lD =
                  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
              uD = 0, dD = lD.length;
          uD < dD; ++uD)
        aD[uD] = lD[uD], sD[lD.charCodeAt(uD)] = uD;
      function hD(e) {
        var t = e.length;
        if (0 < t % 4)
          throw new Error('Invalid string. Length must be a multiple of 4');
        e = e.indexOf('=');
        return [e = -1 === e ? t : e, e === t ? 0 : 4 - e % 4]
      }
      function fD(e) {
        var t = hD(e), e = t[0], t = t[1];
        return 3 * (e + t) / 4 - t
      }
      function pD(e, t, r) {
        return 3 * (t + r) / 4 - r
      }
      function gD(e) {
        for (var t, r = hD(e), n = r[0], r = r[1], i = new cD(pD(e, n, r)),
                    o = 0, a = 0 < r ? n - 4 : n, s = 0;
             s < a; s += 4)
          t = sD[e.charCodeAt(s)] << 18 | sD[e.charCodeAt(s + 1)] << 12 |
              sD[e.charCodeAt(s + 2)] << 6 | sD[e.charCodeAt(s + 3)],
          i[o++] = t >> 16 & 255, i[o++] = t >> 8 & 255, i[o++] = 255 & t;
        return 2 === r &&
                   (t = sD[e.charCodeAt(s)] << 2 | sD[e.charCodeAt(s + 1)] >> 4,
                    i[o++] = 255 & t),
               1 === r &&
                   (t = sD[e.charCodeAt(s)] << 10 |
                        sD[e.charCodeAt(s + 1)] << 4 |
                        sD[e.charCodeAt(s + 2)] >> 2,
                    i[o++] = t >> 8 & 255, i[o++] = 255 & t),
               i
      }
      function yD(e) {
        return aD[e >> 18 & 63] + aD[e >> 12 & 63] + aD[e >> 6 & 63] +
            aD[63 & e]
      }
      function mD(e, t, r) {
        for (var n, i = [], o = t; o < r; o += 3)
          n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) +
              (255 & e[o + 2]),
          i.push(yD(n));
        return i.join('')
      }
      function bD(e) {
        for (var t, r = e.length, n = r % 3, i = [], o = 0, a = r - n; o < a;
             o += 16383)
          i.push(mD(e, o, a < o + 16383 ? a : o + 16383));
        return 1 == n ?
                   (t = e[r - 1], i.push(aD[t >> 2] + aD[t << 4 & 63] + '==')) :
                   2 == n &&
                       (t = (e[r - 2] << 8) + e[r - 1],
                        i.push(
                            aD[t >> 10] + aD[t >> 4 & 63] + aD[t << 2 & 63] +
                            '=')),
               i.join('')
      }
      function vD(e) {}
      function _D(e) {
        var t, r = qt(e);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var n = t.value;
            if ('ATTR' == n[0] && 'Designator' == n[7]) return n[8]
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        throw 'can not find id ' + e
      }
      function wD(e) {
        for (var t = [], r = 0; r < e.length; r++) {
          var n = e[r], i = n[1];
          if ('COMPONENT' == n[0]) {
            var o = [];
            o.push(n);
            for (var a = r + 1; a < e.length; a++) {
              var s = e[a];
              if ('ATTR' == s[0])
                o.push(s), r++;
              else {
                if ('PAD_NET' != s[0] || s[1] != i) break;
                o.push(s), r++
              }
            }
            t.push({id: _D(o), data: o})
          }
        }
      }
      function xD(e, t) {
        for (var r = [], n = 0; n < e.length; n++) {
          var i = e[n], o = i[1];
          if ('COMPONENT' == i[0]) {
            var a = [];
            a.push(i);
            for (var s = n + 1; s < e.length; s++) {
              var c = e[s];
              if ('ATTR' == c[0])
                a.push(c), n++;
              else {
                if ('PAD_NET' != c[0] || c[1] != o) break;
                a.push(c), n++
              }
            }
            r.push({id: _D(a), data: a})
          }
        }
      }
      function kD(e, t) {
        return CD.apply(this, arguments)
      }
      function CD() {
        return (CD = t(regeneratorRuntime.mark(function e(t, r) {
                  var n, i, o, a, s, c, l, u, d, h, f, p, g, y, m, b, v, _, w,
                      x, k;
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break
                          }
                          throw 'no valid key json inut';
                        case 2:
                          return n = new iD, e.next = 5, n.loadAsync(r);
                        case 5:
                          if (i = e.sent, o = i.file('project.json')) {
                            e.next = 9;
                            break
                          }
                          throw 'no project.json found!';
                        case 9:
                          return e.next = 11, o.async('string');
                        case 11:
                          if (s = e.sent, (a = JSON.parse(s)).pcbs) {
                            e.next = 16;
                            break
                          }
                          throw 'no pcbs found!';
                        case 16:
                          if (1 != Object.keys(a.pcbs).length)
                            throw 'pcb should only 1!';
                          e.next = 18;
                          break;
                        case 18:
                          if (c = Object.keys(a.pcbs)[0], a.pcbs[c],
                              s = c + '.epcb', c = i.file('PCB/' + s)) {
                            e.next = 24;
                            break
                          }
                          throw 'pcb file not found ' + s;
                        case 24:
                          return e.next = 26, c.async('string');
                        case 26:
                          f = e.sent, m = f.split('\n'), l = [], u = qt(m);
                          try {
                            for (u.s(); !(d = u.n()).done;)
                              (h = d.value).trim() && l.push(JSON.parse(h))
                          } catch (e) {
                            u.e(e)
                          } finally {
                            u.f()
                          }
                          if (xD(l), f = a.schematics,
                              1 != Object.keys(f).length)
                            throw 'sche should only 1!';
                          e.next = 35;
                          break;
                        case 35:
                          p = Object.keys(f)[0], g = null, y = qt(f[p].sheets),
                          e.prev = 38, y.s();
                        case 40:
                          if ((m = y.n()).done) {
                            e.next = 47;
                            break
                          }
                          if ('matrix' == (m = m.value).name)
                            return g = m.id, e.abrupt('break', 47);
                          e.next = 45;
                          break;
                        case 45:
                          e.next = 40;
                          break;
                        case 47:
                          e.next = 52;
                          break;
                        case 49:
                          e.prev = 49, e.t0 = e.catch(38), y.e(e.t0);
                        case 52:
                          return e.prev = 52, y.f(), e.finish(52);
                        case 55:
                          if (g) {
                            e.next = 57;
                            break
                          }
                          throw 'can not find matrix sheet';
                        case 57:
                          if (vD('reading: ' +
                                 (v = 'SHEET/' + p + '/' + g + '.esch')),
                              b = i.file(v)) {
                            e.next = 62;
                            break
                          }
                          throw 'can not find sheet in zip';
                        case 62:
                          return e.next = 64, b.async('string');
                        case 64:
                          v = e.sent, v = v.split('\n'), _ = [], w = qt(v);
                          try {
                            for (w.s(); !(x = w.n()).done;)
                              (k = x.value).trim() && _.push(JSON.parse(k))
                          } catch (e) {
                            w.e(e)
                          } finally {
                            w.f()
                          }
                          return wD(_), e.abrupt('return');
                        case 73:
                          return e.abrupt('return', e.sent);
                        case 74:
                        case 'end':
                          return e.stop()
                      }
                  }, e, null, [[38, 49, 52, 55]])
                })))
            .apply(this, arguments)
      }
      sD['-'.charCodeAt(0)] = 62, sD['_'.charCodeAt(0)] = 63;
      var SD = {eda_export_project_pro: kD},
          ED =
              [
                '',
                '2022 \xa9 NINE-FOX.com, ALL RIGHTS RESERVED.',
                '',
                '\u6b64\u6587\u4ef6\u5939\u76f8\u5173\u6587\u4ef6\u5728CC BY-SA 4.0\u534f\u8bae\u4e0b\u6388\u6743\u5f00\u6e90\u3002',
                '',
                '=======================================================================',
                '',
                '\u7f72\u540d-\u76f8\u540c\u65b9\u5f0f\u5171\u4eab 4.0 \u56fd\u9645 (CC BY-SA 4.0)',
                '',
                '\u60a8\u53ef\u4ee5\u81ea\u7531\u5730\uff1a',
                '1) \u5171\u4eab \u2014 \u5728\u4efb\u4f55\u5a92\u4ecb\u4ee5\u4efb\u4f55\u5f62\u5f0f\u590d\u5236\u3001\u53d1\u884c\u672c\u4f5c\u54c1\uff1b',
                '2) \u6f14\u7ece \u2014 \u4fee\u6539\u3001\u8f6c\u6362\u6216\u4ee5\u672c\u4f5c\u54c1\u4e3a\u57fa\u7840\u8fdb\u884c\u521b\u4f5c\u3002\u5728\u4efb\u4f55\u7528\u9014\u4e0b\uff0c\u751a\u81f3\u5546\u4e1a\u76ee\u7684\u3002',
                '',
                '\u672c\u8bb8\u53ef\u534f\u8bae\u4e3a\u201c\u81ea\u7531\u6587\u5316\u4f5c\u54c1\uff08Free Cultural Works\uff09\u201d\u6240\u63a5\u53d7\u3002',
                '\u53ea\u8981\u4f60\u9075\u5b88\u8bb8\u53ef\u534f\u8bae\u6761\u6b3e\uff0c\u8bb8\u53ef\u4eba\u5c31\u65e0\u6cd5\u6536\u56de\u4f60\u7684\u8fd9\u4e9b\u6743\u5229\u3002',
                '',
                '\u60df\u987b\u9075\u5b88\u4e0b\u5217\u6761\u4ef6\uff1a',
                'a) \u7f72\u540d \u2014 \u60a8\u5fc5\u987b\u7ed9\u51fa\u9002\u5f53\u7684\u7f72\u540d\uff0c\u63d0\u4f9b\u6307\u5411\u672c\u8bb8\u53ef\u534f\u8bae\u7684\u94fe\u63a5\uff0c\u540c\u65f6\u6807\u660e\u662f\u5426\uff08\u5bf9\u539f\u59cb\u4f5c\u54c1\uff09\u4f5c\u4e86\u4fee\u6539\u3002',
                '       \u60a8\u53ef\u4ee5\u7528\u4efb\u4f55\u5408\u7406\u7684\u65b9\u5f0f\u6765\u7f72\u540d\uff0c\u4f46\u662f\u4e0d\u5f97\u4ee5\u4efb\u4f55\u65b9\u5f0f\u6697\u793a\u8bb8\u53ef\u4eba\u4e3a\u60a8\u6216\u60a8\u7684\u4f7f\u7528\u80cc\u4e66\u3002',
                '',
                'b) \u76f8\u540c\u65b9\u5f0f\u5171\u4eab \u2014 \u5982\u679c\u60a8\u518d\u6df7\u5408\u3001\u8f6c\u6362\u6216\u8005\u57fa\u4e8e\u672c\u4f5c\u54c1\u8fdb\u884c\u521b\u4f5c\uff0c\u60a8\u5fc5\u987b\u57fa\u4e8e\u4e0e\u539f\u5148\u8bb8\u53ef\u534f\u8bae\u76f8\u540c\u7684\u8bb8\u53ef\u534f\u8bae\u5206\u53d1\u60a8\u8d21\u732e\u7684\u4f5c\u54c1\u3002',
                '',
                '\u8be6\u60c5\u8bf7\u53c2\u8003\u4ee5\u4e0b\u539f\u7248\u534f\u8bae\u6587\u6863\u3002',
                '',
                '=======================================================================',
                '',
                'Attribution-ShareAlike 4.0 International',
                '',
                '=======================================================================',
                '',
                'Creative Commons Corporation ("Creative Commons") is not a law firm and',
                'does not provide legal services or legal advice. Distribution of',
                'Creative Commons public licenses does not create a lawyer-client or',
                'other relationship. Creative Commons makes its licenses and related',
                'information available on an "as-is" basis. Creative Commons gives no',
                'warranties regarding its licenses, any material licensed under their',
                'terms and conditions, or any related information. Creative Commons',
                'disclaims all liability for damages resulting from their use to the',
                'fullest extent possible.',
                '',
                'Using Creative Commons Public Licenses',
                '',
                'Creative Commons public licenses provide a standard set of terms and',
                'conditions that creators and other rights holders may use to share',
                'original works of authorship and other material subject to copyright',
                'and certain other rights specified in the public license below. The',
                'following considerations are for informational purposes only, are not',
                'exhaustive, and do not form part of our licenses.',
                '',
                '     Considerations for licensors: Our public licenses are',
                '     intended for use by those authorized to give the public',
                '     permission to use material in ways otherwise restricted by',
                '     copyright and certain other rights. Our licenses are',
                '     irrevocable. Licensors should read and understand the terms',
                '     and conditions of the license they choose before applying it.',
                '     Licensors should also secure all rights necessary before',
                '     applying our licenses so that the public can reuse the',
                '     material as expected. Licensors should clearly mark any',
                '     material not subject to the license. This includes other CC-',
                '     licensed material, or material used under an exception or',
                '     limitation to copyright. More considerations for licensors:',
                '\twiki.creativecommons.org/Considerations_for_licensors',
                '',
                '     Considerations for the public: By using one of our public',
                '     licenses, a licensor grants the public permission to use the',
                '     licensed material under specified terms and conditions. If',
                '     the licensor\'s permission is not necessary for any reason--for',
                '     example, because of any applicable exception or limitation to',
                '     copyright--then that use is not regulated by the license. Our',
                '     licenses grant only permissions under copyright and certain',
                '     other rights that a licensor has authority to grant. Use of',
                '     the licensed material may still be restricted for other',
                '     reasons, including because others have copyright or other',
                '     rights in the material. A licensor may make special requests,',
                '     such as asking that all changes be marked or described.',
                '     Although not required by our licenses, you are encouraged to',
                '     respect those requests where reasonable. More_considerations',
                '     for the public:',
                '\twiki.creativecommons.org/Considerations_for_licensees',
                '',
                '=======================================================================',
                '',
                'Creative Commons Attribution-ShareAlike 4.0 International Public',
                'License',
                '',
                'By exercising the Licensed Rights (defined below), You accept and agree',
                'to be bound by the terms and conditions of this Creative Commons',
                'Attribution-ShareAlike 4.0 International Public License ("Public',
                'License"). To the extent this Public License may be interpreted as a',
                'contract, You are granted the Licensed Rights in consideration of Your',
                'acceptance of these terms and conditions, and the Licensor grants You',
                'such rights in consideration of benefits the Licensor receives from',
                'making the Licensed Material available under these terms and',
                'conditions.',
                '',
                '',
                'Section 1 -- Definitions.',
                '',
                '  a. Adapted Material means material subject to Copyright and Similar',
                '     Rights that is derived from or based upon the Licensed Material',
                '     and in which the Licensed Material is translated, altered,',
                '     arranged, transformed, or otherwise modified in a manner requiring',
                '     permission under the Copyright and Similar Rights held by the',
                '     Licensor. For purposes of this Public License, where the Licensed',
                '     Material is a musical work, performance, or sound recording,',
                '     Adapted Material is always produced where the Licensed Material is',
                '     synched in timed relation with a moving image.',
                '',
                '  b. Adapter\'s License means the license You apply to Your Copyright',
                '     and Similar Rights in Your contributions to Adapted Material in',
                '     accordance with the terms and conditions of this Public License.',
                '',
                '  c. BY-SA Compatible License means a license listed at',
                '     creativecommons.org/compatiblelicenses, approved by Creative',
                '     Commons as essentially the equivalent of this Public License.',
                '',
                '  d. Copyright and Similar Rights means copyright and/or similar rights',
                '     closely related to copyright including, without limitation,',
                '     performance, broadcast, sound recording, and Sui Generis Database',
                '     Rights, without regard to how the rights are labeled or',
                '     categorized. For purposes of this Public License, the rights',
                '     specified in Section 2(b)(1)-(2) are not Copyright and Similar',
                '     Rights.',
                '',
                '  e. Effective Technological Measures means those measures that, in the',
                '     absence of proper authority, may not be circumvented under laws',
                '     fulfilling obligations under Article 11 of the WIPO Copyright',
                '     Treaty adopted on December 20, 1996, and/or similar international',
                '     agreements.',
                '',
                '  f. Exceptions and Limitations means fair use, fair dealing, and/or',
                '     any other exception or limitation to Copyright and Similar Rights',
                '     that applies to Your use of the Licensed Material.',
                '',
                '  g. License Elements means the license attributes listed in the name',
                '     of a Creative Commons Public License. The License Elements of this',
                '     Public License are Attribution and ShareAlike.',
                '',
                '  h. Licensed Material means the artistic or literary work, database,',
                '     or other material to which the Licensor applied this Public',
                '     License.',
                '',
                '  i. Licensed Rights means the rights granted to You subject to the',
                '     terms and conditions of this Public License, which are limited to',
                '     all Copyright and Similar Rights that apply to Your use of the',
                '     Licensed Material and that the Licensor has authority to license.',
                '',
                '  j. Licensor means the individual(s) or entity(ies) granting rights',
                '     under this Public License.',
                '',
                '  k. Share means to provide material to the public by any means or',
                '     process that requires permission under the Licensed Rights, such',
                '     as reproduction, public display, public performance, distribution,',
                '     dissemination, communication, or importation, and to make material',
                '     available to the public including in ways that members of the',
                '     public may access the material from a place and at a time',
                '     individually chosen by them.',
                '',
                '  l. Sui Generis Database Rights means rights other than copyright',
                '     resulting from Directive 96/9/EC of the European Parliament and of',
                '     the Council of 11 March 1996 on the legal protection of databases,',
                '     as amended and/or succeeded, as well as other essentially',
                '     equivalent rights anywhere in the world.',
                '',
                '  m. You means the individual or entity exercising the Licensed Rights',
                '     under this Public License. Your has a corresponding meaning.',
                '',
                '',
                'Section 2 -- Scope.',
                '',
                '  a. License grant.',
                '',
                '       1. Subject to the terms and conditions of this Public License,',
                '          the Licensor hereby grants You a worldwide, royalty-free,',
                '          non-sublicensable, non-exclusive, irrevocable license to',
                '          exercise the Licensed Rights in the Licensed Material to:',
                '',
                '            a. reproduce and Share the Licensed Material, in whole or',
                '               in part; and',
                '',
                '            b. produce, reproduce, and Share Adapted Material.',
                '',
                '       2. Exceptions and Limitations. For the avoidance of doubt, where',
                '          Exceptions and Limitations apply to Your use, this Public',
                '          License does not apply, and You do not need to comply with',
                '          its terms and conditions.',
                '',
                '       3. Term. The term of this Public License is specified in Section',
                '          6(a).',
                '',
                '       4. Media and formats; technical modifications allowed. The',
                '          Licensor authorizes You to exercise the Licensed Rights in',
                '          all media and formats whether now known or hereafter created,',
                '          and to make technical modifications necessary to do so. The',
                '          Licensor waives and/or agrees not to assert any right or',
                '          authority to forbid You from making technical modifications',
                '          necessary to exercise the Licensed Rights, including',
                '          technical modifications necessary to circumvent Effective',
                '          Technological Measures. For purposes of this Public License,',
                '          simply making modifications authorized by this Section 2(a)',
                '          (4) never produces Adapted Material.',
                '',
                '       5. Downstream recipients.',
                '',
                '            a. Offer from the Licensor -- Licensed Material. Every',
                '               recipient of the Licensed Material automatically',
                '               receives an offer from the Licensor to exercise the',
                '               Licensed Rights under the terms and conditions of this',
                '               Public License.',
                '',
                '            b. Additional offer from the Licensor -- Adapted Material.',
                '               Every recipient of Adapted Material from You',
                '               automatically receives an offer from the Licensor to',
                '               exercise the Licensed Rights in the Adapted Material',
                '               under the conditions of the Adapter\'s License You apply.',
                '',
                '            c. No downstream restrictions. You may not offer or impose',
                '               any additional or different terms or conditions on, or',
                '               apply any Effective Technological Measures to, the',
                '               Licensed Material if doing so restricts exercise of the',
                '               Licensed Rights by any recipient of the Licensed',
                '               Material.',
                '',
                '       6. No endorsement. Nothing in this Public License constitutes or',
                '          may be construed as permission to assert or imply that You',
                '          are, or that Your use of the Licensed Material is, connected',
                '          with, or sponsored, endorsed, or granted official status by,',
                '          the Licensor or others designated to receive attribution as',
                '          provided in Section 3(a)(1)(A)(i).',
                '',
                '  b. Other rights.',
                '',
                '       1. Moral rights, such as the right of integrity, are not',
                '          licensed under this Public License, nor are publicity,',
                '          privacy, and/or other similar personality rights; however, to',
                '          the extent possible, the Licensor waives and/or agrees not to',
                '          assert any such rights held by the Licensor to the limited',
                '          extent necessary to allow You to exercise the Licensed',
                '          Rights, but not otherwise.',
                '',
                '       2. Patent and trademark rights are not licensed under this',
                '          Public License.',
                '',
                '       3. To the extent possible, the Licensor waives any right to',
                '          collect royalties from You for the exercise of the Licensed',
                '          Rights, whether directly or through a collecting society',
                '          under any voluntary or waivable statutory or compulsory',
                '          licensing scheme. In all other cases the Licensor expressly',
                '          reserves any right to collect such royalties.',
                '',
                '',
                'Section 3 -- License Conditions.',
                '',
                'Your exercise of the Licensed Rights is expressly made subject to the',
                'following conditions.',
                '',
                '  a. Attribution.',
                '',
                '       1. If You Share the Licensed Material (including in modified',
                '          form), You must:',
                '',
                '            a. retain the following if it is supplied by the Licensor',
                '               with the Licensed Material:',
                '',
                '                 i. identification of the creator(s) of the Licensed',
                '                    Material and any others designated to receive',
                '                    attribution, in any reasonable manner requested by',
                '                    the Licensor (including by pseudonym if',
                '                    designated);',
                '',
                '                ii. a copyright notice;',
                '',
                '               iii. a notice that refers to this Public License;',
                '',
                '                iv. a notice that refers to the disclaimer of',
                '                    warranties;',
                '',
                '                 v. a URI or hyperlink to the Licensed Material to the',
                '                    extent reasonably practicable;',
                '',
                '            b. indicate if You modified the Licensed Material and',
                '               retain an indication of any previous modifications; and',
                '',
                '            c. indicate the Licensed Material is licensed under this',
                '               Public License, and include the text of, or the URI or',
                '               hyperlink to, this Public License.',
                '',
                '       2. You may satisfy the conditions in Section 3(a)(1) in any',
                '          reasonable manner based on the medium, means, and context in',
                '          which You Share the Licensed Material. For example, it may be',
                '          reasonable to satisfy the conditions by providing a URI or',
                '          hyperlink to a resource that includes the required',
                '          information.',
                '',
                '       3. If requested by the Licensor, You must remove any of the',
                '          information required by Section 3(a)(1)(A) to the extent',
                '          reasonably practicable.',
                '',
                '  b. ShareAlike.',
                '',
                '     In addition to the conditions in Section 3(a), if You Share',
                '     Adapted Material You produce, the following conditions also apply.',
                '',
                '       1. The Adapter\'s License You apply must be a Creative Commons',
                '          license with the same License Elements, this version or',
                '          later, or a BY-SA Compatible License.',
                '',
                '       2. You must include the text of, or the URI or hyperlink to, the',
                '          Adapter\'s License You apply. You may satisfy this condition',
                '          in any reasonable manner based on the medium, means, and',
                '          context in which You Share Adapted Material.',
                '',
                '       3. You may not offer or impose any additional or different terms',
                '          or conditions on, or apply any Effective Technological',
                '          Measures to, Adapted Material that restrict exercise of the',
                '          rights granted under the Adapter\'s License You apply.',
                '',
                '',
                'Section 4 -- Sui Generis Database Rights.',
                '',
                'Where the Licensed Rights include Sui Generis Database Rights that',
                'apply to Your use of the Licensed Material:',
                '',
                '  a. for the avoidance of doubt, Section 2(a)(1) grants You the right',
                '     to extract, reuse, reproduce, and Share all or a substantial',
                '     portion of the contents of the database;',
                '',
                '  b. if You include all or a substantial portion of the database',
                '     contents in a database in which You have Sui Generis Database',
                '     Rights, then the database in which You have Sui Generis Database',
                '     Rights (but not its individual contents) is Adapted Material,',
                '',
                '     including for purposes of Section 3(b); and',
                '  c. You must comply with the conditions in Section 3(a) if You Share',
                '     all or a substantial portion of the contents of the database.',
                '',
                'For the avoidance of doubt, this Section 4 supplements and does not',
                'replace Your obligations under this Public License where the Licensed',
                'Rights include other Copyright and Similar Rights.',
                '',
                '',
                'Section 5 -- Disclaimer of Warranties and Limitation of Liability.',
                '',
                '  a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE',
                '     EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS',
                '     AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF',
                '     ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,',
                '     IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,',
                '     WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR',
                '     PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,',
                '     ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT',
                '     KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT',
                '     ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.',
                '',
                '  b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE',
                '     TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,',
                '     NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,',
                '     INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,',
                '     COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR',
                '     USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN',
                '     ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR',
                '     DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR',
                '     IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.',
                '',
                '  c. The disclaimer of warranties and limitation of liability provided',
                '     above shall be interpreted in a manner that, to the extent',
                '     possible, most closely approximates an absolute disclaimer and',
                '     waiver of all liability.',
                '',
                '',
                'Section 6 -- Term and Termination.',
                '',
                '  a. This Public License applies for the term of the Copyright and',
                '     Similar Rights licensed here. However, if You fail to comply with',
                '     this Public License, then Your rights under this Public License',
                '     terminate automatically.',
                '',
                '  b. Where Your right to use the Licensed Material has terminated under',
                '     Section 6(a), it reinstates:',
                '',
                '       1. automatically as of the date the violation is cured, provided',
                '          it is cured within 30 days of Your discovery of the',
                '          violation; or',
                '',
                '       2. upon express reinstatement by the Licensor.',
                '',
                '     For the avoidance of doubt, this Section 6(b) does not affect any',
                '     right the Licensor may have to seek remedies for Your violations',
                '     of this Public License.',
                '',
                '  c. For the avoidance of doubt, the Licensor may also offer the',
                '     Licensed Material under separate terms or conditions or stop',
                '     distributing the Licensed Material at any time; however, doing so',
                '     will not terminate this Public License.',
                '',
                '  d. Sections 1, 5, 6, 7, and 8 survive termination of this Public',
                '     License.',
                '',
                '',
                'Section 7 -- Other Terms and Conditions.',
                '',
                '  a. The Licensor shall not be bound by any additional or different',
                '     terms or conditions communicated by You unless expressly agreed.',
                '',
                '  b. Any arrangements, understandings, or agreements regarding the',
                '     Licensed Material not stated herein are separate from and',
                '     independent of the terms and conditions of this Public License.',
                '',
                '',
                'Section 8 -- Interpretation.',
                '',
                '  a. For the avoidance of doubt, this Public License does not, and',
                '     shall not be interpreted to, reduce, limit, restrict, or impose',
                '     conditions on any use of the Licensed Material that could lawfully',
                '     be made without permission under this Public License.',
                '',
                '  b. To the extent possible, if any provision of this Public License is',
                '     deemed unenforceable, it shall be automatically reformed to the',
                '     minimum extent necessary to make it enforceable. If the provision',
                '     cannot be reformed, it shall be severed from this Public License',
                '     without affecting the enforceability of the remaining terms and',
                '     conditions.',
                '',
                '  c. No term or condition of this Public License will be waived and no',
                '     failure to comply consented to unless expressly agreed to by the',
                '     Licensor.',
                '',
                '  d. Nothing in this Public License constitutes or may be interpreted',
                '     as a limitation upon, or waiver of, any privileges and immunities',
                '     that apply to the Licensor or You, including from the legal',
                '     processes of any jurisdiction or authority.',
                '',
                '',
                '=======================================================================',
                '',
                'Creative Commons is not a party to its public',
                'licenses. Notwithstanding, Creative Commons may elect to apply one of',
                'its public licenses to material it publishes and in those instances',
                'will be considered the \u201cLicensor.\u201d The text of the Creative Commons',
                'public licenses is dedicated to the public domain under the CC0 Public',
                'Domain Dedication. Except for the limited purpose of indicating that',
                'material is shared under a Creative Commons public license or as',
                'otherwise permitted by the Creative Commons policies published at',
                'creativecommons.org/policies, Creative Commons does not authorize the',
                'use of the trademark "Creative Commons" or any other trademark or logo',
                'of Creative Commons without its prior written consent including,',
                'without limitation, in connection with any unauthorized modifications',
                'to any of its public licenses or any other arrangements,',
                'understandings, or agreements concerning use of licensed material. For',
                'the avoidance of doubt, this paragraph does not form part of the',
                'public licenses.',
                '',
                'Creative Commons may be contacted at creativecommons.org.'
              ],
          AD = ED.join('\r\n'), OD = 19.05, LD = !0, ID = 'standard87_wk',
          TD = 0, FD = 'ninefox-diy-settings';
      function RD() {
        var e = localStorage.getItem(FD);
        if (e) return JSON.parse(e);
        e = DD();
        return PD(e), e
      }
      function PD(e) {
        localStorage.setItem(FD, JSON.stringify(e, 0, 4))
      }
      function ND() {
        localStorage.removeItem(FD), RD()
      }
      function DD() {
        return {
          version: '1.0', bgIndex: TD, preset: ID, viewMode: 1,
              circuit_upper: LD, circuit_delta: OD, theme: ''
        }
      }
      var MD = {
        default_settings: DD,
        load_settings: RD,
        save_settings: PD,
        clear_settings: ND
      };
      function zD(e) {
        var t = 0;
        return e.map(function(e) {
          return e.id = t++, e
        })
      }
      var KD={_CR:'#171718',_N9:'#393b3b',_CC:'#67635b',_2B:'#727474',_BJ:'#91867a',_CB:'#9b9284',_U9:'#aca693',_L9:'#d8d2c3',_T9:'#c3c3ba',_3K:'#ccc6c0',_2M:'#c6c9c7',_GR1:'#c5c7ca',_CP:'#e1dad1',_WS1:'#f7f2ea',_BR1:'#653c25',_N7:'#00773a',_AE:'#689b34',_3B:'#768e72',_3A:'#7fa580',_V4:'#00579f',_N5:'#0085c2',_TU1:'#00627a',_TU2:'#00a3a9',_DY:'#5d437e',_RO1:'#8d242e',_P3:'#bc261e',_V1:'#d02e1c',_RO2:'#dd1125',_3C:'#c87e74',_MG1:'#cb3d6f',_V2:'#ee6b00',_N6:'#e5a000',_CV:'#f8c200',_GE1:'#ebd400'},UD={KC_Q:{thirdContent:'\u305f'},KC_W:{thirdContent:'\u3066'},KC_E:{thirdContent:'\u3044'},KC_R:{thirdContent:'\u3059'},KC_T:{thirdContent:'\u304b'},KC_Y:{thirdContent:'\u3093'},KC_U:{thirdContent:'\u305f'},KC_I:{thirdContent:'\u306b'},KC_BSLS:{thirdContent:'\u3080'},KC_O:{thirdContent:'\u3089'},KC_P:{thirdContent:'\u305b'},KC_SCLN:{thirdContent:'\u308c'},KC_QUOT:{thirdContent:'\u3051'},KC_LBRC:{thirdContent:'\u309b'},KC_RBRC:{thirdContent:'\u309c'},KC_A:{thirdContent:'\u3061'},KC_S:{thirdContent:'\u3068'},KC_D:{thirdContent:'\u3057'},KC_F:{thirdContent:'\u306f'},KC_G:{thirdContent:'\u304d'},KC_H:{thirdContent:'\u304f'},KC_J:{thirdContent:'\u307e'},KC_K:{thirdContent:'\u306e'},KC_L:{thirdContent:'\u308a'},KC_Z:{thirdContent:'\u3064'},KC_X:{thirdContent:'\u305b'},KC_C:{thirdContent:'\u305d'},KC_V:{thirdContent:'\u3072'},KC_B:{thirdContent:'\u3053'},KC_N:{thirdContent:'\u307f'},KC_M:{thirdContent:'\u3082'},KC_COMM:{thirdContent:'\u306d'},KC_DOT:{thirdContent:'\u308b'},KC_SLSH:{thirdContent:'\u3081'},KC_1:{thirdContent:'\u306c'},KC_2:{thirdContent:'\u3075'},KC_3:{thirdContent:'\u3042'},KC_4:{thirdContent:'\u3046'},KC_5:{thirdContent:'\u3048'},KC_6:{thirdContent:'\u304a'},KC_7:{thirdContent:'\u3084'},KC_8:{thirdContent:'\u3086'},KC_9:{thirdContent:'\u3088'},KC_0:{thirdContent:'\u308f'},KC_MINS:{thirdContent:'\u307b'},KC_EQL:{thirdContent:'\u3078'},KC_GRV:{thirdContent:'\u308d'}},jD={KC_Q:{content:'\u305f',subContent:'',thirdContent:''},KC_SCLN:{content:'\u308c',subContent:'',thirdContent:''},KC_W:{content:'\u3066',subContent:'',thirdContent:''},KC_E:{content:'\u3044',subContent:'',thirdContent:''},KC_BSLS:{content:'\u3080',subContent:'',thirdContent:''},KC_R:{content:'\u3059',subContent:'',thirdContent:''},KC_T:{content:'\u304b',subContent:'',thirdContent:''},KC_Y:{content:'\u3093',subContent:'',thirdContent:''},KC_U:{content:'\u305f',subContent:'',thirdContent:''},KC_I:{content:'\u306b',subContent:'',thirdContent:''},KC_O:{content:'\u3089',subContent:'',thirdContent:''},KC_P:{content:'\u305c',subContent:'',thirdContent:''},KC_QUOT:{content:'\u3051',subContent:'',thirdContent:''},KC_LBRC:{content:'\u309b',subContent:'',thirdContent:''},KC_RBRC:{content:'\u309c',subContent:'',thirdContent:''},KC_A:{content:'\u3061',subContent:'',thirdContent:''},KC_S:{content:'\u3068',subContent:'',thirdContent:''},KC_D:{content:'\u3057',subContent:'',thirdContent:''},KC_F:{content:'\u306f',subContent:'',thirdContent:''},KC_G:{content:'\u304d',subContent:'',thirdContent:''},KC_H:{content:'\u304f',subContent:'',thirdContent:''},KC_J:{content:'\u307e',subContent:'',thirdContent:''},KC_K:{content:'\u306e',subContent:'',thirdContent:''},KC_L:{content:'\u308a',subContent:'',thirdContent:''},KC_Z:{content:'\u3064',subContent:'',thirdContent:''},KC_X:{content:'\u305b',subContent:'',thirdContent:''},KC_C:{content:'\u305d',subContent:'',thirdContent:''},KC_V:{content:'\u3072',subContent:'',thirdContent:''},KC_B:{content:'\u3053',subContent:'',thirdContent:''},KC_N:{content:'\u307f',subContent:'',thirdContent:''},KC_M:{content:'\u3082',subContent:'',thirdContent:''},KC_COMM:{content:'\u306d',subContent:'',thirdContent:''},KC_DOT:{content:'\u308b',subContent:'',thirdContent:''},KC_SLSH:{content:'\u3081',subContent:'',thirdContent:''},KC_1:{content:'\u306c',subContent:'',thirdContent:''},KC_2:{content:'\u3075',subContent:'',thirdContent:''},KC_3:{content:'\u3042',subContent:'',thirdContent:''},KC_4:{content:'\u3046',subContent:'',thirdContent:''},KC_5:{content:'\u3048',subContent:'',thirdContent:''},KC_6:{content:'\u304a',subContent:'',thirdContent:''},KC_7:{content:'\u3084',subContent:'',thirdContent:''},KC_8:{content:'\u3086',subContent:'',thirdContent:''},KC_9:{content:'\u3088',subContent:'',thirdContent:''},KC_0:{content:'\u308f',subContent:'',thirdContent:''},KC_MINS:{content:'\u307b',subContent:'',thirdContent:''},KC_EQL:{content:'\u3078',subContent:'',thirdContent:''},KC_GRV:{content:'\u308d',subContent:'',thirdContent:''}},BD=[{name:'Bento',designer:'biip',link:'https://matrixzj.github.io/docs/gmk-keycaps/Bento/',colors:{base:{background:'#fff3ef',color:'#3e728f'},mod:{background:'#3e728f',color:'#fb7279'},accent:{background:'#fb7279',color:'#3e728f'}},specialKeys:e({},UD)},{name:'Bento - Kobe',designer:'biip',link:'https://matrixzj.github.io/docs/gmk-keycaps/Bento/',colors:{base:{background:'#fff3ef',color:'#3e728f'},mod:{background:'#3e728f',color:'#fb7279'},accent:{background:'#fb7279',color:'#3e728f'},ptn:{background:'red',color:'white'}},specialKeys:e({KC_ESC:{content:'Putain',type:'ptn'}},jD)},{name:'Wavez',designer:'EnjoyMyInSec',link:'https://matrixzj.github.io/docs/gmk-keycaps/Wavez/',colors:{base:{background:'#00464f',color:'#54bf19'},mod:{background:'#263740',color:'#54bf19'},accent:{background:'#54bf19',color:'#263740'}}},{name:'Wavez - Kobe',designer:'EnjoyMyInSec',link:'https://matrixzj.github.io/docs/gmk-keycaps/Wavez/',colors:{base:{background:'#00464f',color:'#54bf19'},mod:{background:'#263740',color:'#54bf19'},accent:{background:'#54bf19',color:'#263740'}},specialKeys:e({},jD)},{name:'Terminal',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Terminal-R1/',colors:{base:{background:KD._N9,color:'#689b34'},mod:{background:KD._N9,color:'#689b34'},accent:{background:'#689b34',color:KD._N9}},specialKeys:{KC_H:{type:'accent',thirdContent:'\u2190'},KC_J:{type:'accent',thirdContent:'\u2193'},KC_K:{type:'accent',thirdContent:'\u2191'},KC_L:{type:'accent',thirdContent:'\u2192'}}},{name:'Aero',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Aero/',colors:{base:{background:KD._TU1,color:KD._GE1},mod:{background:KD._TU2,color:KD._GE1},accent:{background:KD._V2,color:KD._CV}}},{name:'Coniferous',designer:'DonutCat',link:'https://matrixzj.github.io/docs/gmk-keycaps/Coniferous/',colors:{base:{background:KD._U9,color:KD._N7},mod:{background:KD._N9,color:KD._N7},accent:{background:KD._N7,color:KD._U9}}},{name:'Jamon',designer:'zambumon',link:'https://matrixzj.github.io/docs/gmk-keycaps/Jamon/',colors:{base:{background:'#84172c',color:'#ece4d0'},mod:{background:'#ac2c32',color:'#ece4d0'},accent:{background:'#272727',color:'#ece4d0'}}},{name:'Plum',designer:'Jessica',link:'https://matrixzj.github.io/docs/gmk-keycaps/Plum/',colors:{base:{background:'#ded0af',color:'#736b7c'},mod:{background:'#736b7c',color:'#ded0af'},accent:{background:'#863f48',color:'#ded0af'}}},{name:'Tokyo Nights',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Tokyo-Nights/',colors:{base:{background:'#040403',color:'#63e3f8'},mod:{background:'#2d394c',color:'#6c2374'},accent:{background:'#6c2374',color:'#63e3f8'}}},{name:'Yuri',designer:'Tomb3ry',link:'https://matrixzj.github.io/docs/gmk-keycaps/Yuri/',colors:{base:{background:'#c7e6f5',color:'#f54730'},mod:{background:'#2d394c',color:'#f54730'},accent:{background:'#f54730',color:'#2d394c'}}},{name:'Nautilus',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Nautilus/',colors:{base:{background:'#1b365d',color:'#00a4a9'},mod:{background:'#1f2a44',color:'#e5a100'},accent:{background:'#e5a100',color:'#1f2a44'}}},{name:'Serika',designer:'Zambumon',link:'https://matrixzj.github.io/docs/gmk-keycaps/Serika/',colors:{base:{background:'#e1e1d5',color:'#36373b'},mod:{background:'#eabe16',color:'#36373b'},accent:{background:'#36373b',color:'#e1e1d5'}}},{name:'Serika - weeb',designer:'Zambumon',link:'https://matrixzj.github.io/docs/gmk-keycaps/Serika/',colors:{base:{background:'#e1e1d5',color:'#36373b'},mod:{background:'#eabe16',color:'#36373b'},accent:{background:'#36373b',color:'#e1e1d5'}},specialKeys:e({},UD)},{name:'Dmg',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/DMG/',colors:{base:{background:'#c6c3b6',color:'#240773'},mod:{background:'#747773',color:'#240773'},accent:{background:'#8d2a59',color:'#c1bfb2'}}},{name:'Carbon',designer:'tomb3ry',link:'https://matrixzj.github.io/docs/gmk-keycaps/Carbon-R1/',colors:{base:{background:'#cec1a9',color:'#464746'},mod:{background:'#464746',color:'#de6722'},accent:{background:'#de6722',color:'#464746'}}},{name:'Hyperfuse',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/HyperFuse/',colors:{base:{background:KD._2M,color:KD._DY},mod:{background:KD._2B,color:KD._TU2},accent:{background:KD._TU2,color:KD._DY}}},{name:'Miami',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Miami/',colors:{base:{background:'#4ed6d6',color:'#fa67af'},mod:{background:'#fa67af',color:'#4ed6d6'},accent:{background:'#fa67af',color:'#4ed6d6'}}},{name:'Striker',designer:'Zambumon',link:'https://matrixzj.github.io/docs/gmk-keycaps/Striker/',colors:{base:{background:'#345b95',color:'#ffffff'},mod:{background:'#345b95',color:'#ffffff'},accent:{background:'#334660',color:'#ffffff'}},specialKeys:e({},UD)},{name:'Retro',designer:'Matt3o',link:'https://matrixzj.github.io/docs/gmk-keycaps/Classic-Retro/',colors:{base:{background:'#5a2b0c',color:KD._WS1},mod:{background:'#701111',color:KD._WS1},accent:{background:KD._AE,color:KD._WS1}}},{name:'Sandstorm',designer:'Zambumon',link:'https://matrixzj.github.io/docs/gmk-keycaps/SandStorm/',colors:{base:{background:'#ae9c78',color:'#dfe0d0'},mod:{background:'#ae9c78',color:'#dfe0d0'},accent:{background:'#dfe0d0',color:'#000000'}}},{name:'Oblivion - R1',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Oblivion-R1/',colors:{base:{background:'#596060',color:KD._L9},mod:{background:'#424242',color:KD._L9},accent:{background:'#424242',color:'#93c247'},purpleMod:{background:'#424242',color:'#a698c5'},redMod:{background:'#424242',color:'#ea4221'},blueMod:{background:'#424242',color:'#1a8ab7'},orangeMod:{background:'#424242',color:'#ffac00'}},specialKeys:{KC_CAPSLOCK:{type:'accent'},KC_ESC:{type:'redMod'},KC_LSFT:{type:'orangeMod'},KC_RSFT:{type:'orangeMod'},KC_TAB:{type:'purpleMod'},KC_BSPC:{type:'purpleMod'},KC_PENT:{type:'accent'},KC_NLCK:{type:'redMod'},KC_LGUI:{type:'redMod'},KC_RGUI:{type:'redMod'},KC_LCTL:{type:'blueMod'},KC_LALT:{type:'blueMod'},KC_RALT:{type:'blueMod'},KC_APP:{type:'blueMod'},KC_RCTL:{type:'blueMod'},KC_PSCR:{type:'mod'},KC_SLCK:{type:'mod'},KC_PAUS:{type:'mod'},KC_INS:{type:'mod'},KC_HOME:{type:'mod'},KC_PGUP:{type:'mod'},KC_DEL:{type:'mod'},KC_END:{type:'mod'},KC_PGDN:{type:'mod'},KC_UP:{type:'mod'},KC_LEFT:{type:'mod'},KC_DOWN:{type:'mod'},KC_RGHT:{type:'mod'}}},{name:'Oblivion - R2',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Oblivion-R2/',colors:{base:{background:'#596060',color:'#c8c3b8'},mod:{background:'#424242',color:'#c8c3b8'},accent:{background:'#424242',color:'#93c247'},purpleMod:{background:'#424242',color:'#a698c5'},redMod:{background:'#424242',color:'#ea4221'},blueMod:{background:'#424242',color:'#1a8ab7'},orangeMod:{background:'#424242',color:'#ffac00'}},specialKeys:{KC_CAPSLOCK:{type:'accent'},KC_ESC:{type:'redMod'},KC_LSFT:{type:'orangeMod'},KC_RSFT:{type:'orangeMod'},KC_TAB:{type:'purpleMod'},KC_BSPC:{type:'purpleMod'},KC_PENT:{type:'accent'},KC_NLCK:{type:'redMod'},KC_LGUI:{type:'redMod'},KC_RGUI:{type:'redMod'},KC_LCTL:{type:'blueMod'},KC_LALT:{type:'blueMod'},KC_RALT:{type:'blueMod'},KC_APP:{type:'blueMod'},KC_RCTL:{type:'blueMod'},KC_PSCR:{type:'mod'},KC_SLCK:{type:'mod'},KC_PAUS:{type:'mod'},KC_INS:{type:'mod'},KC_HOME:{type:'mod'},KC_PGUP:{type:'mod'},KC_DEL:{type:'mod'},KC_END:{type:'mod'},KC_PGDN:{type:'mod'},KC_UP:{type:'mod'},KC_LEFT:{type:'mod'},KC_DOWN:{type:'mod'},KC_RGHT:{type:'mod'}}},{name:'Phantom',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Phantom/',colors:{base:{background:'#302042',color:'#bcac71'},mod:{background:'#302042',color:'#bcac71'},accent:{background:'#bcac71',color:'#302042'}}},{name:'Space Cadet',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Space-Cadet/',colors:{base:{background:'#5c6064',color:'#f9fbfa'},mod:{background:'#216a99',color:'#f9fbfa'},accent:{background:'#216a99',color:'#f9fbfa'}}},{name:'Camping',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Camping/',colors:{base:{background:'#dbd4c9',color:'#506d57'},mod:{background:'#506d57',color:'#dbd4c9'},accent:{background:'#6c3638',color:'#dbd4c9'}}},{name:'Red Samurai',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Red-Samurai-R1/',colors:{base:{background:'#64242e',color:'#9f744d'},mod:{background:'#262629',color:'#9f744d'},accent:{background:'#9f744d',color:'#64242e'}}},{name:'Red Samurai - weeb',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Red-Samurai-R1/',colors:{base:{background:'#64242e',color:'#9f744d'},mod:{background:'#262629',color:'#9f744d'},accent:{background:'#9f744d',color:'#64242e'}},specialKeys:e({},UD)},{name:'Laser',designer:'Mito',link:'https://matrixzj.github.io/docs/gmk-keycaps/Laser/',colors:{base:{background:'#2e2180',color:'#0c9eb5'},mod:{background:'#1d1551',color:'#b6245e'},accent:{background:'#b6245e',color:'#1d1551'}}},{name:'Lime',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Lime/',colors:{base:{background:'#c1ced6',color:'#678f58'},mod:{background:'#7f8a90',color:'#97bb49'},accent:{background:'#9ac65e',color:'#c1ced6'}}},{name:'Honeywell',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Honeywell/',colors:{base:{background:'#faf7f8',color:'#647675'},mod:{background:'#6e6868',color:'#f9f6f6'},accent:{background:'#d63123',color:'#faf7f8'}}},{name:'Mizu',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Mizu/',colors:{base:{background:'#acc8da',color:'#212b35'},mod:{background:'#212b35',color:'#d6d6d4'},accent:{background:'#d6d6d4',color:'#212b35'}}},{name:'NightRunner',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Night-Runner/',colors:{base:{background:'#2b2f31',color:'#f9ff23'},mod:{background:'#47456c',color:'#f9ff23'},accent:{background:'#f9ff23',color:'#2b2f31'}}},{name:'Olivia',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Olivia/',colors:{base:{background:'#fefef5',color:'#43413f'},mod:{background:'#43413f',color:'#d1b6a6'},accent:{background:'#d1b6a6',color:'#43413f'}}},{name:'Laser - Gaijin',designer:'Mito',link:'https://matrixzj.github.io/docs/gmk-keycaps/Laser/',colors:{base:{background:'#2e2180',color:'#0c9eb5'},mod:{background:'#1d1551',color:'#b6245e'},accent:{background:'#b6245e',color:'#1d1551'}},specialKeys:e({},UD)},{name:'Handarbeit',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Handarbeit/',colors:{base:{background:'#a11901',color:'#fefef8'},mod:{background:'#6b428c',color:'#fefef8'},accent:{background:'#dbb51e',color:'#fefef8'},green:{color:'#fefef8',background:'#7eac1a'},blue:{color:'#fefef8',background:'#0558ab'},lightPink:{background:'#d9b7b8',color:'#fefef8'},darkGreen:{background:'#307b37',color:'#fefef8'},orange:{background:'#c86b18',color:'#fefef8'},darkCyan:{background:'#0b687a',color:'#fefef8'}},specialKeys:{KC_PDOT:{type:'darkCyan'},KC_NLCK:{type:'accent'},KC_PSLS:{type:'accent'},KC_PAST:{type:'accent'},KC_PMNS:{type:'accent'},KC_P7:{type:'mod'},KC_P8:{type:'mod'},KC_P9:{type:'mod'},KC_P4:{type:'mod'},KC_P6:{type:'mod'},KC_P1:{type:'mod'},KC_P2:{type:'mod'},KC_P3:{type:'mod'},KC_RGHT:{type:'orange'},KC_LEFT:{type:'orange'},KC_DOWN:{type:'green'},KC_UP:{type:'accent'},KC_INS:{type:'accent'},KC_DEL:{type:'accent'},KC_HOME:{type:'green'},KC_END:{type:'green'},KC_PGUP:{type:'base'},KC_PGDN:{type:'base'},KC_PSCR:{type:'darkGreen'},KC_SLCK:{type:'darkGreen'},KC_PAUS:{type:'darkGreen'},KC_F1:{type:'blue'},KC_F2:{type:'blue'},KC_F3:{type:'blue'},KC_F4:{type:'blue'},KC_F5:{type:'lightPink'},KC_F6:{type:'lightPink'},KC_F7:{type:'lightPink'},KC_F8:{type:'lightPink'},KC_F9:{type:'accent'},KC_F10:{type:'accent'},KC_F11:{type:'accent'},KC_F12:{type:'accent'},KC_ESC:{type:'base'},KC_1:{type:'green'},KC_2:{type:'green'},KC_3:{type:'green'},KC_4:{type:'green'},KC_5:{type:'green'},KC_6:{type:'green'},KC_7:{type:'green'},KC_8:{type:'green'},KC_9:{type:'green'},KC_0:{type:'green'},KC_F:{type:'accent'},KC_J:{type:'accent'},KC_LBRC:{type:'blue'},KC_RBRC:{type:'blue'},KC_SCLN:{type:'blue'},KC_QUOT:{type:'blue'},KC_COMM:{type:'blue'},KC_DOT:{type:'blue'},KC_SLSH:{type:'blue'}}},{name:'Minimal',designer:'janglad',link:'https://matrixzj.github.io/docs/gmk-keycaps/Minimal/',colors:{base:{background:'#f1f2f6',color:'black'},mod:{background:'#f1f2f6',color:'black'},accent:{background:'#f1f2f6',color:'black'}}},{name:'Modern Dolch (blue accent)',designer:'janglad',link:'https://matrixzj.github.io/docs/gmk-keycaps/Modern-Dolch/',colors:{base:{background:'#82878d',color:'#e2e5ea'},mod:{background:'#595e64',color:'#e2e5ea'},accent:{background:'#6bd8d5',color:'#e2e5ea'}}},{name:'Modern Dolch (red accent)',designer:'janglad',link:'https://matrixzj.github.io/docs/gmk-keycaps/Modern-Dolch/',colors:{base:{background:'#82878d',color:'#e2e5ea'},mod:{background:'#595e64',color:'#e2e5ea'},accent:{background:'#cf6478',color:'#e2e5ea'}}},{name:'SkIIdata',designer:'TKC',link:'https://matrixzj.github.io/docs/gmk-keycaps/SkIIdata/',colors:{base:{background:KD._N9,color:KD._V2},mod:{background:KD._N9,color:KD._V2},accent:{background:KD._V2,color:KD._N9}}},{name:'Nines',designer:'Emir',link:'https://matrixzj.github.io/docs/gmk-keycaps/Nines/',colors:{base:{background:'#494949',color:'#bcb6a6'},mod:{background:'#494949',color:'#bcb6a6'},accent:{background:'#bcb6a6',color:'#494949'}}},{name:'Taro',designer:'pwade3',link:'https://matrixzj.github.io/docs/gmk-keycaps/Taro/',colors:{base:{background:'#8e71a2',color:'#170b19'},mod:{background:'#170b19',color:'#8e71a2'},accent:{background:'#5ed8df',color:'#170b19'}}},{name:'Pulse',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Pulse/',colors:{base:{background:'#000000',color:'#13bac0'},mod:{background:'#13bac0',color:'#000000'},accent:{background:'#13bac0',color:'#000000'}}},{name:'First Love',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/First-Love/',colors:{base:{background:'#313334',color:'#9381d7'},mod:{background:'#322b4a',color:'#9381d7'},accent:{background:'#9381d7',color:'#322b4a'}}},{name:'Voyage',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Voyage/',colors:{base:{background:'#244fa5',color:'#71c2dc'},mod:{background:'#243143',color:'#71c2dc'},accent:{background:'#71c2dc',color:'#243143'}}},{name:'Peach n Cream',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Peach-n-Cream/',colors:{base:{background:'#d5d0c9',color:'#f38568'},mod:{background:'#ecb893',color:'#f38568'},accent:{background:'#f38568',color:'#d5d0c9'}}},{name:'Chocolatier',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Chocolatier/',colors:{base:{background:'#563b2e',color:'#ada391'},mod:{background:'#463730',color:'#ada391'},accent:{background:'#463730',color:'#ada391'}}},{name:'Led Zep',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/LedZep/',colors:{base:{background:'#e4dfc2',color:'#3c3d41'},mod:{background:'#3c3d41',color:'#d43633'},accent:{background:'#d43633',color:'#3c3d41'}}},{name:'Metaverse',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Metaverse/',colors:{base:{background:'#ffffff',color:'#000000'},mod:{background:'#000000',color:'#ffffff'},accent:{background:'#dc2e16',color:'#ffffff'}},specialKeys:e({},UD)},{name:'Merlin',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Merlin/',colors:{base:{background:'#fefef4',color:'#28768d'},mod:{background:'#28768d',color:'#fec93d'},accent:{background:'#fec93d',color:'#28768d'}}},{name:'Denim',designer:'',link:'https://matrixzj.github.io/docs/gmk-keycaps/Denim/',colors:{base:{background:'#65748f',color:'#c7baa0'},mod:{background:'#484e5d',color:'#c7baa0'},accent:{background:'#ad855d',color:'#9b2f1e'}},specialKeys:{KC_ENT:{type:'mod'}}},{name:'9009',designer:'janglad',link:'https://matrixzj.github.io/docs/gmk-keycaps/9009-R1/',colors:{base:{background:'#e1dbcf',color:'#212121'},mod:{background:'#c0b8a3',color:'#212121'},accent:{background:'#7f987b',color:'#212121'},accent_red:{background:'#e49181',color:'#212121'}},specialKeys:{KC_ENT:{type:'accent_red'},KC_SPC:{type:'accent'}}},{name:'Matrix 01',designer:'MatrixLab',link:'https://matrixzj.github.io/docs/gmk-keycaps/Matrix-01/',colors:{base:{background:'#314f6f',color:'#ddc49a'},mod:{background:'#1f3855',color:'#ddc49a'},accent:{background:'#ddc49a',color:'#1f3855'}}}],YD=zD(BD),HD=!1,GD=null,WD=null;
      function ZD(e, t) {
        t = D4.main_pcb_process(e, t);
        return JSON.stringify(t)
      }
      function VD(e, t) {
        t = Z4.main_sch_process(e, t);
        return JSON.stringify(t)
      }
      function JD(e, t) {
        if (19.05 != t.delta &&
            !window.confirm(K3.$t('pubConfirm', [t.delta + 'mm'])))
          return null;
        var r = new iD, n = D4.main_pcb_process(e, WD.pcb, t),
            i = Z4.main_sch_process(e, WD.sch, t);
        r.file('LICENSE.txt', AD);
        t = r.folder(K3.$t('folderEda'));
        t.file('pcb.json', JSON.stringify(n)),
            t.file('sch.json', JSON.stringify(i)), t.file('LICENSE.txt', AD);
        i = t9(e), t = r.folder(K3.$t('folderDesign'));
        t.file('keyboard.nf-design', i), t.file('LICENSE.txt', AD);
        i = n9(e), t = r.folder(K3.$t('folderDxf'));
        t.file('plate.dxf', i), t.file('LICENSE.txt', AD);
        i = l9(e), t = r.folder(K3.$t('folderCnc'));
        t.file('reference.dxf', i), t.file('LICENSE.txt', AD);
        i = i9(e), t = r.folder(K3.$t('folderSwitchOverlay'));
        t.file('overlay.dxf', i), t.file('LICENSE.txt', AD);
        i = o9(e), t = r.folder(K3.$t('folderSwitch3mm'));
        t.file('sound.dxf', i), t.file('LICENSE.txt', AD);
        t = a9(e), e = r.folder(K3.$t('folderUnderlay'));
        return e.file('underlay.dxf', t), e.file('LICENSE.txt', AD),
               r.generateAsync({type: 'blob'})
      }
      function XD(e) {
        return $D.apply(this, arguments)
      }
      function $D() {
        return ($D = t(regeneratorRuntime.mark(function e(t) {
                  var r, n, i, o, a, s, c, l;
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                          return e.prev = 0, i = function(e, t) {
                            for (var r in e.files) {
                              r = e.files[r];
                              if (-1 != r.name.indexOf(t)) return r.name
                            }
                            throw 'can not find file!' + t
                          }, GD = t, e.next = 5, t({
                                   url: 'file/file.nf-eda',
                                   method: 'GET',
                                   responseType: 'blob'
                                 });
                        case 5:
                          return l = e.sent, r = new iD, e.next = 9,
                                 r.loadAsync(l);
                        case 9:
                          return n = e.sent, e.next = 12,
                                 n.file('1-Schematic_diy_board.json')
                                     .async('string');
                        case 12:
                          return o = e.sent, e.next = 15,
                                 n.file(i(n, 'PCB_down.json')).async('string');
                        case 15:
                          return a = e.sent, e.next = 18,
                                 n.file(i(n, 'PCB_up.json')).async('string');
                        case 18:
                          return s = e.sent, e.next = 21,
                                 n.file(i(n, 'PCB_left.json')).async('string');
                        case 21:
                          return c = e.sent, e.next = 24,
                                 n.file(i(n, 'PCB_right.json')).async('string');
                        case 24:
                          l = e.sent, WD = {
                            sch: JSON.parse(o),
                            pcb: {
                              down: JSON.parse(a),
                              up: JSON.parse(s),
                              left: JSON.parse(c),
                              right: JSON.parse(l)
                            }
                          },
                          HD = !0, e.next = 33;
                          break;
                        case 29:
                          e.prev = 29, e.t0 = e.catch(0);
                        case 33:
                        case 'end':
                          return e.stop()
                      }
                  }, e, null, [[0, 29]])
                })))
            .apply(this, arguments)
      }
      function qD(e) {
        for (var t = [], r = 0; r < 22; r++)
          for (var n = 0; n < 8; n++) t.push(1);
        for (var i = 0; i < e.length; i++) {
          var o = e[i];
          o.ninefox || (o.ninefox = JSON.parse(o.profile)),
              t[o.ninefox.mapx + 8 * o.ninefox.mapy] = '0x' + o.ninefox.hex
        }
        for (var a = '', s = 0; s < 22; s++) {
          a += '{';
          for (var c = 0; c < 8; c++) a += t[c + 8 * s], 7 != c && (a += ', ');
          a += ' },', a += '\n'
        }
        return a
      }
      function QD(e) {
        return qD(e)
      }
      function e9(e) {
        var t, r = [], n = qt(e);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            i.ninefox || (i.ninefox = JSON.parse(i.profile)),
                'KEY' == i.ninefox.type && r.push(i)
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        e = cL.serialize({keys: r});
        return CO.kle_to_compact_data(e)
      }
      function t9(e) {
        var t = MD.load_settings(), r = QD(e), n = e9(e), r = {
          version: '1.0',
          date: z5(P5()),
          settings: t,
          preset: {name: t.preset, data: cL.serialize({keys: e})},
          keymap: {diy: n, diy_len: n.length, col_max: 22, row_max: 8, l0: r}
        };
        return JSON.stringify(r)
      }
      function r9(e) {
        var t, r = [], n = qt(e);
        try {
          for (n.s(); !(t = n.n()).done;) {
            var i = t.value;
            'KEY' == i.ninefox.type && r.push(R5(i))
          }
        } catch (e) {
          n.e(e)
        } finally {
          n.f()
        }
        return r
      }
      function n9(e) {
        var t = MD.load_settings(), e = r9(e);
        return n8({
          json_data: cL.serialize({keys: e}),
          draw_plate: !0,
          draw_frame: !1,
          draw_main: !0,
          draw_cutoff: !1,
          draw_stab_small: !0,
          draw_stab_large: !1,
          draw_costar: !1,
          draw_costar_large: !1,
          draw_center_ref: !1,
          draw_origin: !0,
          draw_switch_overlay: !1,
          draw_switch_3mm: !1,
          draw_underlay: !1,
          upper: t.circuit_upper,
          delta: t.circuit_delta
        })
      }
      function i9(e) {
        var t = MD.load_settings(), e = r9(e);
        return n8({
          json_data: cL.serialize({keys: e}),
          draw_plate: !0,
          draw_frame: !1,
          draw_main: !1,
          draw_cutoff: !1,
          draw_stab_small: !1,
          draw_stab_large: !0,
          draw_costar: !1,
          draw_costar_large: !1,
          draw_center_ref: !1,
          draw_origin: !1,
          draw_switch_overlay: !0,
          draw_switch_3mm: !1,
          draw_underlay: !1,
          upper: t.circuit_upper,
          delta: t.circuit_delta
        })
      }
      function o9(e) {
        var t = MD.load_settings(), e = r9(e);
        return n8({
          json_data: cL.serialize({keys: e}),
          draw_plate: !0,
          draw_frame: !1,
          draw_main: !1,
          draw_cutoff: !1,
          draw_stab_small: !1,
          draw_stab_large: !1,
          draw_costar: !1,
          draw_costar_large: !1,
          draw_center_ref: !1,
          draw_origin: !1,
          draw_switch_overlay: !1,
          draw_switch_3mm: !0,
          draw_underlay: !1,
          upper: t.circuit_upper,
          delta: t.circuit_delta
        })
      }
      function a9(e) {
        var t = MD.load_settings(), e = r9(e);
        return n8({
          json_data: cL.serialize({keys: e}),
          draw_plate: !0,
          draw_frame: !1,
          draw_main: !1,
          draw_cutoff: !1,
          draw_stab_small: !1,
          draw_stab_large: !1,
          draw_costar: !1,
          draw_costar_large: !1,
          draw_center_ref: !1,
          draw_origin: !1,
          draw_switch_overlay: !1,
          draw_switch_3mm: !1,
          draw_underlay: !0,
          upper: t.circuit_upper,
          delta: t.circuit_delta
        })
      }
      function s9(e) {
        return c9.apply(this, arguments)
      }
      function c9() {
        return (c9 = t(regeneratorRuntime.mark(function e(t) {
                  var r, n;
                  return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                          return r = new iD, e.next = 3, r.loadAsync(t);
                        case 3:
                          return n = e.sent, e.next = 6,
                                 n.folder(K3.$t('folderDesign'))
                                     .file('keyboard.nf-design')
                                     .async('string');
                        case 6:
                          return n = e.sent, e.abrupt('return', n);
                        case 8:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })))
            .apply(this, arguments)
      }
      function l9(e) {
        var t = MD.load_settings(), e = r9(e);
        return n8({
          json_data: cL.serialize({keys: e}),
          draw_plate: !0,
          draw_frame: !0,
          draw_main: !0,
          draw_cutoff: !0,
          draw_stab_small: !0,
          draw_stab_large: !1,
          draw_costar: !1,
          draw_costar_large: !1,
          draw_center_ref: !0,
          draw_origin: !0,
          draw_switch_overlay: !1,
          draw_switch_3mm: !1,
          draw_underlay: !1,
          upper: t.circuit_upper,
          delta: t.circuit_delta
        })
      }
      function u9(e, t) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          if (n.ninefox || (n.ninefox = JSON.parse(n.profile)),
              A5(n.ninefox.mapx) + A5(n.ninefox.mapy) == t)
            return n
        }
        return null
      }
      function d9(e) {
        var r = {};
        function t(e, t) {
          t < e ? r[e + t] = !1 : r[t + e] = !1
        }
        for (var n, i = 0; i < 8; i++)
          for (var o = 0; o < 22; o++) {
            var a = A5(i) + A5(o);
            if (i < 7)
              for (var s = i + 1; s < 8; s++) {
                var c = A5(s) + A5(o);
                if (u9(e, c)) {
                  t(a, c);
                  break
                }
              }
            if (i < 21)
              for (var l = o + 1; l < 22; l++) {
                var u = A5(i) + A5(l);
                if (u9(e, u)) {
                  t(a, u);
                  break
                }
              }
          }
        for (n in r) {
          var d = n.substring(0, 2), h = n.substring(2, 4);
          u9(e, d) && u9(e, h) && (r[n] = !0)
        }
        var f, p = [];
        for (f in r) r[f] && p.push(f);
        return p
      }
      function h9(e) {
        var t, r = qt(YD);
        try {
          for (r.s(); !(t = r.n()).done;) {
            var n = t.value;
            if (n.name == e) return n
          }
        } catch (e) {
          r.e(e)
        } finally {
          r.f()
        }
        return YD.Default
      }
      function f9() {
        var e = [];
        e.push({
          name: 'Default',
          desc: 'Default (Nine-Fox)',
          designer: 'NINE-FOX.com',
          link: 'https://nine-fox.com/docs/diy',
          colors: {
            base: {background: '#5b5b69', color: '#ffffff'},
            mod: {background: '#424253', color: '#ffffff'},
            accent: {background: '#0095bf', color: '#ffffff'}
          }
        });
        for (var t = 0,
                 r =
                     [
                       'Matrix 01',   'Aero',        'Bento',      'Camping',
                       'Carbon',      'Chocolatier', 'Coniferous', 'Denim',
                       'Dmg',         'Honeywell',   'Jamon',      'Laser',
                       'Led Zep',     'Merlin',      'Mizu',       'Nautilus',
                       'NightRunner', 'Olivia',      'Plum',       'Pulse',
                       'Red Samurai', 'Retro',       'Serika',     'SkIIdata',
                       'Space Cadet', 'Taro',        'Voyage',     'Wavez',
                       'Yuri'
                     ];
             t < r.length; t++)
          e.push(h9(r[t]));
        return e
      }
      var p9 = {
        Decimal: F3,
        base64: oD,
        serial: cL,
        theme: f9(),
        init: XD,
        initialised: function() {
          return HD
        },
        eda_export_pcb: ZD,
        eda_export_sch: VD,
        eda_export_project_pro: SD.eda_export_project_pro,
        eda_export_zip: JD,
        eda_export_dxf: n9,
        export_nf_desgin: t9,
        read_nf_desgin_from_zip: s9,
        common: {
          objCopy: R5,
          sleep: I5,
          find_ext: T5,
          hexToDec: O5,
          decToHex: E5,
          int2hex: A5
        },
        connect_lines: d9,
        find_key_by_id: u9,
        load_settings: MD.load_settings,
        save_settings: MD.save_settings,
        clear_settings: MD.clear_settings,
        default_settings: MD.default_settings,
        stab_render_style: V3.stab_render_style,
        stab_value: V3.stab_value,
        stab_desc: V3.stab_desc,
        current_language: K3.current_language,
        switch_lang: K3.switch_lang,
        zh: K3.zh,
        en: K3.en,
        $t: K3.$t,
        logStat: function() {
          EO(GD)
        }
      };
      return p9
    }();
