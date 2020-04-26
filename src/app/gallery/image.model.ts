export class Image {
  public name: string;
  public data: string;
  public description: string;
  public upvotes: number;
  public tag: string;

  constructor(name: string, data: string, description: string, tag: string) {
    this.name = name;
    this.data = data;
    this.description = description;
    this.upvotes = 0;
    this.tag = tag
  }
}

