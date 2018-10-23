export class Article {
  title: string;
  author: string;
  sections: Section[] = new Array<Section>();
  expanded: boolean = false;
}

export class Section {
  header: string;
  image_url: string;
  body: string;
}
