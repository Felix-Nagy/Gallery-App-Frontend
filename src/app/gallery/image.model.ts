export class Image {
  public _id: string;
  public name: string;
  public data: string;
  public description: string;
  public upvotes: number;
  public tags: string;

  constructor(_id: string, name: string, data: string, description: string, upvotes: number, tags: string) {
    this._id = _id;
    this.name = name;
    this.data = data;
    this.description = description;
    this.upvotes = upvotes;
    this.tags = tags
  }
}

