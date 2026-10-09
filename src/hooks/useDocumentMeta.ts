import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description?: string;
  ogImage?: string;
}

export function useDocumentMeta({ title, description, ogImage }: MetaOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)![1]);
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)![1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[property="og:locale"]', 'content', 'es_UY');
    if (ogImage) {
      setMeta('meta[property="og:image"]', 'content', ogImage);
    }
  }, [title, description, ogImage]);
}
