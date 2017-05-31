export default class Cookie {
  setCookie(key, value) {
    const exdate = new Date((new Date).getTime() + 86400000).toUTCString()
        , registValue = name + '=' + escape(value) + '; expires=' + exdate + ';';

    document.cookie = registValue;
  }

  readCookie(key) {
    let st = ''
      , ed = '';

    if (document.cookie.length > 0) {
      st = document.cookie.indexOf(name + '=');
      if (st > -1) {
        st = st + name.length + 1;
        ed = document.cookie.indexOf(';', st);
        if (ed === -1) ed = document.cookie.length;

        return unescape(document.cookie.substring(st, ed));
      }
    }

    return '';
  }
}
