import React from 'react';
import { Elements } from 'prismic-reactjs';
import style from "../sass/utils/htmlSerializer.module.sass"

// -- Function to add unique key to props
const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key });
};

const linkResolver = null;

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializer = function(type, element, content, children, key) {

  var props = {};
  switch(type) {

    case Elements.heading1: // Heading 1
      props = {className: 'h4'};
      return React.createElement('h1', propsWithUniqueKey(props, key), children);
      
    case Elements.heading2: // Heading 2
      props = {className: 'h4'};
      return React.createElement('h2', propsWithUniqueKey(props, key), children);
      
    case Elements.heading3: // Heading 3
      props = {className: 'h5'};
      return React.createElement('h3', propsWithUniqueKey(props, key), children);
      
    case Elements.heading4: // Heading 4
      props = {className: 'h5'};
      return React.createElement('h4', propsWithUniqueKey(props, key), children);
      
    case Elements.heading5: // Heading 5
      props = {className: 'h6'};
      return React.createElement('h5', propsWithUniqueKey(props, key), children);
      
    case Elements.heading6: // Heading 6
      props = {className: 'h6'};
      return React.createElement('h6', propsWithUniqueKey(props, key), children);


    // Add a class to paragraph elements
    case Elements.paragraph:
      props = {className: 'paragraph-class'};
      return React.createElement('p', propsWithUniqueKey(props, key), children);

    // Don't wrap images in a <p> tag
    case Elements.image: 
      props = { src: element.url , alt: element.alt || '' };
      return React.createElement('img', propsWithUniqueKey(props, key));

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target ? { target: element.data.target } : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};
      props = Object.assign({
        className: 'link-class',
        href: element.data.url || linkResolver(element.data)
      }, targetAttr, relAttr);
      return React.createElement('a', propsWithUniqueKey(props, key), children);

    case Elements.embed: // Embed
      props = Object.assign({
        "data-oembed": element.oembed.embed_url,
        "data-oembed-type": element.oembed.type,
        "data-oembed-provider": element.oembed.provider_name,
        "title": "Content Embed",
      }, 
      element.label ? {className: element.label} : {},
      {className: style.iframeEmbed});
      const embedHtml = React.createElement('div' ,{dangerouslySetInnerHTML: {__html: element.oembed.html}});
      return React.createElement('div', propsWithUniqueKey(props, key), embedHtml);

    // Return null to stick with the default behavior
    default: 
      return null;
  }
};

export default htmlSerializer