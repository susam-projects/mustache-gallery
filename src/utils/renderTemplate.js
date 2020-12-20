function renderTemplate(node, template, templateParams) {
    node.innerHTML = Mustache.render(template, templateParams);
}

export default renderTemplate;
