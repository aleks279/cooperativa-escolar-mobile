export class Article {
  title: string;
  author: string;
  sections: Section[] = new Array<Section>();
  open: boolean;
}

export class Section {
  header: string;
  image_url: string;
  body: string;
}
