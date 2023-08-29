(function () {
  const support = 'content' in document.createElement('template');

  // Set the content property if missing
  if (!support) {
    const /**
       * Prefer an array to a NodeList
       * Otherwise, updating the content property of a node
       * will update the NodeList and we'll loose the nested <template>
       */
      templates = Array.prototype.slice.call(document.getElementsByTagName('template'));
    let template;
    let content;
    let fragment;
    let node;
    let i = 0;
    let j;

    // For each <template> element get its content and wrap it in a document fragment
    while ((template = templates[i++])) {
      content = template.children;
      fragment = document.createDocumentFragment();

      // eslint-disable-next-line no-cond-assign
      for (j = 0; (node = content[j]); j++) {
        fragment.appendChild(node);
      }

      template.content = fragment;
    }
  }

  // Prepare a clone function to allow nested <template> elements
  function clone() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    let templates = this.querySelectorAll('template');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fragments: any = [];
    let template;
    let i = 0;

    // If the support is OK simply clone and return
    if (support) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      template = this.cloneNode(true);
      templates = template.content.querySelectorAll('template');

      // Set the clone method for each nested <template> element
      for (; templates[i]; i++) {
        templates[i].clone = clone;
      }

      return template;
    }

    // Loop through nested <template> to retrieve the content property
    for (; templates[i]; i++) {
      fragments.push(templates[i].content);
    }

    // Now, clone the document fragment
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    template = this.cloneNode(true);

    // Makes sure the clone have a "content" and "clone" properties
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    template.content = this.content;
    template.clone = clone;

    /**
     * Retrieve the nested <template> once again
     * Since we just cloned the document fragment,
     * the content's property of the nested <template> might be undefined
     * We have to re-set it using the fragment array we previously got
     */
    templates = template.querySelectorAll('template');

    // Loop to set the content property of each nested template
    for (i = 0; templates[i]; i++) {
      templates[i].content = fragments[i];
      templates[i].clone = clone; // Makes sure to set the clone method as well
    }

    return template;
  }

  const templates = document.querySelectorAll('template');
  let template;
  let i = 0;

  // Pollute the DOM with a "clone" method on each <template> element
  while ((template = templates[i++])) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    template.clone = clone;
  }
})();
export default {};
