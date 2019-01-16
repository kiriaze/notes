/**
 * Create a function that, given a DOM Element on the page, will visit the
 * element itself and all of its descendents (not just its immediate
 * children). For each element visited, the function should pass that
 * element to a provided callback function.
 */

function domTraverse(el, cb) {
  cb(el);
  const children = el.children;
  for (let i = 0; i < children.length; i++) {
    domTraverse(children[i], cb);
  }
}
