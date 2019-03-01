export class Recipe {
    public title: String;
    public description: String;
    public imageUrl: String;

    constructor(title: String, desc: String, imageUrl: String) {
        this.title = title;
        this.description = desc;
        this.imageUrl = imageUrl;
    }
}