const EXC = '*** Exception: ';

class Base {
  static EXC() { return '*** Exception: '; }
  static _error(e) { throw new Error(EXC + e); }
}

export let Type = Base => class extends Base {
  static _type(a) {
    return a.constructor;
  }
}

export let TypeClass = Base => class extends Base {
  static _classCheck(a, f) { return a[f] !== undefined && typeof a[f] === 'function' ? true : false; }
  static _classMatch(a, b) { return this._classCheck(a) && this._classCheck(b); }
  static _typeCheck(a) { return a.typeOf() || a.constructor; }
  static _typeMatch(a, b) { return this._typeCheck(a) && this._typeCheck(b); }
}