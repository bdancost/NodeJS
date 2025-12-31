export class Slug {
  public value: string
  private constructor(value: string) {
    this.value = value
  }

  static create(slug: string) {
    return new Slug(slug)
  }
  /**
   * Receives a string and normalize it as a slug
   *
   * Example: "An example title" => "an-example-title"
   *
   * @param text string
   */

  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/g, '')
    return new Slug(slugText)
  }
}
